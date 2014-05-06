(* OASIS_START *)
(* DO NOT EDIT (digest: d41d8cd98f00b204e9800998ecf8427e) *)
(* OASIS_STOP *)


let () =
  flag ["js_of_ocaml"; "js_graphics"] (A "+graphics.js")

let () =
  Ocamlbuild_plugin.dispatch (fun hook ->
    dispatch_default hook;
    Ocamlbuild_js_of_ocaml.dispatcher
      ~oasis_executables:["js/jslilis.byte"] hook
  )
