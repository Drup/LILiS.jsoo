open BatFun
open Lwt
module Html = Dom_html

open Common
open Bank

module LsEn = Lilis.Make(LisSequence)

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

(** Encoding/Decoding into URL for L-systems. *)

let delimiter = Js.string "&"

let encode_lsys n lsys =
  Js.encodeURIComponent (n##concat_2(delimiter, lsys))

let decode_lsys enc =
  let str = Js.decodeURIComponent enc in
  try
    let strs = Js.str_array str##slice_end(1)##split(delimiter) in
    let n =
      Js.parseInt @@
      Js.Optdef.get (Js.array_get strs 0) (fun () -> raise Not_found) in
    let lsys =
      Js.Optdef.get (Js.array_get strs 1) (fun () -> raise Not_found) in
    Some (n, lsys)
  with _ -> None

let update_page n lsys =
  lsys_area##value <- lsys ;
  (Js.Unsafe.coerce gen_slider)##max <-
    Js.string @@ string_of_int (n * 14 / 10) ;
  gen_slider##value <- Js.string @@ string_of_int n ;
  gen_input##value <- Js.string @@ string_of_int n

let update_url () =
  let lsys = lsys_area##value in
  let n = gen_input##value in
  let loc = Html.window##location in
  loc##hash <- encode_lsys n lsys

let () =
  (* Change the URL when the L-system changes *)
  let open Lwt_js_events in
  let inputs_callback _ _ =
    update_url () ; Lwt.return ()
  in
  Lwt.async (fun () -> inputs lsys_area inputs_callback) ;
  Lwt.async (fun () -> inputs gen_input inputs_callback) ;
  Lwt.async (fun () -> inputs gen_slider inputs_callback) ;

  (* When the page is loaded, look if there is an href, and load it. *)
  Lwt.async (fun () ->
    let loc = Html.window##location in
    let (n, lsys) = match decode_lsys loc##hash with
      | None ->
          BatOption.get @@ decode_lsys @@ snd @@ List.hd bank
      | Some enc -> enc
    in
    update_page n lsys ;
    Lwt.return ()
  )


(** Available L-systems. *)

let () =
  (* Init L-system list *)
  Lwt.async (fun () ->
    List.iter
      (fun x ->
         let o = Html.createOption doc in
         let v = fst x in
         o##value <- v ;
         o##innerHTML <- v ;
         Dom.appendChild select_lsys o)
      bank ;
    Lwt.return ()
  ) ;

  (* Change the L-system when the select changes. *)
  let open Lwt_js_events in
  Lwt.async (fun () ->
    changes select_lsys (fun _ _ ->
      let select_val = select_lsys##value in
      let lsys_enc = BatList.Exceptionless.assoc select_val bank in
      let (n, lsys) = BatOption.bind lsys_enc decode_lsys |? (10, Js.string "") in
      update_page n lsys ;
      Html.window##location##href <- (lsys_enc |? Js.string "") ;
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
