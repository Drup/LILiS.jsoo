(* OASIS_START *)
(* DO NOT EDIT (digest: d41d8cd98f00b204e9800998ecf8427e) *)
(* OASIS_STOP *)

let () =
  dispatch
    (fun hook ->
       dispatch_default hook;
       Ocamlbuild_js_of_ocaml.dispatcher hook;
       match hook with
       | After_options ->
           pflag ["js_of_ocaml"] "jsoo_flag" (fun flag -> S [A flag]) ;
           let f = function
             | "js/jslilis.byte" -> "js/jslilis.js"
             | x -> x
           in
           Options.targets := List.map f !Options.targets;
       | _ -> ()
    )
