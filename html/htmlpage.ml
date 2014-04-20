open Html5
open Common
open BatFun

let dump_file file =
  let buf = Buffer.create 16 in
  let inc = open_in_bin file in
  let len = in_channel_length inc in
  begin
    try Buffer.add_channel buf inc len
    with End_of_file -> ()
  end ;
  close_in inc ;
  Buffer.contents buf

let script file =
  M.script ~a:[M.a_src @@ Xml.uri_of_string file] @@ M.pcdata ""

let css file = M.style [M.pcdata @@ dump_file file]

let head =
  let title = M.title @@ M.pcdata "LILiS.jsoo" in
  let charset = M.meta ~a:[M.a_charset "utf-8"] () in
  M.head title
    (charset :: [])

let body js_script css = M.(body ([
    M.canvas ~a:[
      a_id Id.canvas ;
      a_width 800 ;
      a_height 800 ;
    ] [] ;
    M.div ~a:[a_class ["sidebar"]] [

      M.select ~a:[a_id Id.select_lsys] [] ;
      M.textarea ~a:[a_id Id.lsys_area] @@ M.pcdata "" ;
      M.div ~a:[a_class ["generation"]] [
        M.input ~a:[
          a_id Id.gen_slider ;
          a_input_type `Range ;
          a_input_min 1. ;
          a_input_max 12. ;
          a_value "1" ;
        ] () ;
        M.input ~a:[
          a_id Id.gen_input ;
          a_input_type `Number ;
          a_value "1" ;
        ] () ;
      ] ;
      M.button ~a:[a_id Id.go_button] [pcdata "Go!"] ;

    ] ;
  ] @ js_script @ css
  ))



let _ =
  let output = print_string in

  let js_script =
    opt_get Sys.argv 1
    |> BatOption.map (fun str -> BatString.replace ~sub:".byte" ~by:".js" ~str)
    |> BatOption.map snd
    |> BatOption.map_default (fun x -> [script x]) []
  in

  let css =
    opt_get Sys.argv 2
    |> BatOption.map_default (fun x -> [css x]) []
  in

  let page =
    M.html
      head
      (body js_script css)
  in

  P.print ~output page
