open Common
open BatFun

open Lwt

module LsEn = Lilis.Make(LisSequence)
module Html = Dom_html

let doc = Html.document


let by_id_coerce s f =
  Js.coerce_opt
    doc##getElementById(Js.string s) f
    (fun _ -> failwith (Printf.sprintf "cannot find dom id %S\n%!" s))

module El = struct
  let canvas      = by_id_coerce Id.canvas      Html.CoerceTo.canvas
  let sidebar     = by_id_coerce Id.sidebar     Html.CoerceTo.div
  let select_lsys = by_id_coerce Id.select_lsys Html.CoerceTo.select
  let lsys_area   = by_id_coerce Id.lsys_area   Html.CoerceTo.textarea
  let gen_slider  = by_id_coerce Id.gen_slider  Html.CoerceTo.input
  let gen_input   = by_id_coerce Id.gen_input   Html.CoerceTo.input
  let go_button   = by_id_coerce Id.go_button   Html.CoerceTo.button
end
open El

(** Available L-systems.

  The goal is to fetch the list from a repository and fetch the L-systems on demand. *)

(* TOFIX, should fetch *)
let lilis_bank = Lwt.return [
  "Von Koch", "vonkoch.lilis" ;
  "Dragon", "dragon.lilis" ;
  "Tetradragon", "tedragon.lilis" ;
  "Fern", "fern.lilis" ;
]

let get_lilis_content x =
  lwt bank = lilis_bank in
  let lsysname = BatList.Exceptionless.assoc x bank in
  let content = lsysname |? "" in (* TOFIX, should fetch *)
  Lwt.return content

let () =
  Lwt.async (fun () ->
    lwt bank = lilis_bank in
    List.iter
      (fun x ->
         let o = Html.createOption doc in
         let v = Js.string @@ fst x in
         o##value <- v ;
         o##innerHTML <- v ;
         Dom.appendChild select_lsys o)
      bank ;
    Lwt.return ()
  ) ;

  let open Lwt_js_events in
  Lwt.async (fun () ->
    changes select_lsys (fun _ _ ->
      lwt content = get_lilis_content @@ Js.to_string select_lsys##value in
      let () = lsys_area##value <- Js.string content in
      Lwt.return ()
    ))


(** Slider related events *)
let () =
  let open Lwt_js_events in
  Lwt.async (fun () ->
    inputs gen_slider (fun _ _ ->
      gen_input##value <- gen_slider##value ;
      Lwt.return ()
    )) ;
  Lwt.async (fun () ->
    inputs gen_input (fun _ _ ->
      gen_slider##value <- gen_input##value ;
      Lwt.return ()
    ))

let retrieve_lsys () =
  Js.to_string lsys_area##value
  |> LisUtils.lsystem_from_string
  |> LisOptim.constant_folding

let retrieve_gen () =
  int_of_string @@ Js.to_string gen_input##value

let turtle = LisJsoo.jsturtle canvas

let process =
  (* Small buffering system that remember previously computed generations.
     It's not working as intended for now, because streams are not forced. *)
  let current_lsys = ref None in
  let rec compute_lsys gen rules computed =
    let gen = if gen < 0 then 0 else gen in
    match gen, computed with
      | 0, [prev] -> ([prev],prev)
      | 1, (prev::h::_) -> ([prev ; h], h)
      | n, (prev::((_::_) as t)) ->
          let (l, res) = compute_lsys (n-1) rules t in
          (prev :: l, res)
      | 1, [prev] -> begin
          let lstream = LsEn.apply rules prev in
          ([prev ; lstream], lstream)
        end
      | n, [prev] -> begin
          let lstream = LsEn.apply rules prev in
          let (l, res) = compute_lsys (n-1) rules [lstream] in
          (prev :: l, res)
        end
      | _ -> assert false
  in
  let compute_and_store lsys crules cprules n computed =
    let (computed', res) = compute_lsys n crules computed in
    current_lsys := Some (lsys, crules, cprules, computed') ;
    fun spec () -> LsEn.(iter_complete (map_crules spec cprules) res)
  in

  fun n lsys -> match !current_lsys with
    | None ->
        let _, caxiom, crules, cprules = LsEn.compress_lsys lsys in
        compute_and_store lsys crules cprules n [caxiom]
    | Some (lsys',_,_,_) when lsys' <> lsys ->
        let _, caxiom, crules, cprules = LsEn.compress_lsys lsys in
        compute_and_store lsys crules cprules n [caxiom]
    | Some (_,crules, cprules, computed) ->
        compute_and_store lsys crules cprules n computed

let draw lstream =
  let lstream = lstream @@ Glilis.transform_rhs turtle in
  turtle.Glilis.handle_lsys lstream

let run () =
  let lsys = retrieve_lsys () in
  let n = retrieve_gen () in
  let lstream = process n lsys in
  draw lstream

let () =
  let stop_button =
    Html.createButton doc
  in
  stop_button##innerHTML <- Js.string "Stop !" ;

  let open Lwt_js_events in
  Lwt.async (fun () ->
    clicks go_button (fun _ _ ->
      Dom.replaceChild sidebar stop_button go_button ;
      lwt () = Lwt_js.sleep 0.1 in
      let canceler = click stop_button >>= fun _ -> Lwt.return_unit in
      let runner = Lwt.wrap run in (* We need a web worker here *)
      let t = Lwt.pick [ canceler ; runner ] in
      Lwt.on_termination t (fun () ->
        Dom.replaceChild sidebar go_button stop_button
      ) ;
      t
    ))
