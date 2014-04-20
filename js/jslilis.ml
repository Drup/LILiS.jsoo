open Common
open BatFun

module Html = Dom_html


let by_id_coerce s f =
  Js.coerce_opt
    Html.document##getElementById(Js.string s)
    f
    (fun _ -> failwith (Printf.sprintf "cannot find dom id %S\n%!" s))

module El = struct

  let canvas      = by_id_coerce Id.canvas      Html.CoerceTo.canvas
  let select_lsys = by_id_coerce Id.select_lsys Html.CoerceTo.select
  let lsys_area   = by_id_coerce Id.lsys_area   Html.CoerceTo.textarea
  let gen_slider  = by_id_coerce Id.gen_slider  Html.CoerceTo.input
  let gen_input   = by_id_coerce Id.gen_input   Html.CoerceTo.input
  let go_button   = by_id_coerce Id.go_button   Html.CoerceTo.button

end

open El

(** Events *)
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
    )) ;

  ()

let () =

  let () = List.iter (fun x -> ()) [1] in
  let turtle = LisJsoo.jsturtle canvas in

  ()
