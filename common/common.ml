open BatFun

let at l i =
  try Some (BatList.at l i)
  with Not_found -> None

let opt_get l i =
  try Some l.(i)
  with _ -> None



module Id = struct

  let canvas = "canvas"

  let sidebar = "sidebar"
  let select_lsys = "selectlsys"

  let lsys_area = "lsysarea"

  let gen_slider = "genslider"
  let gen_input = "geninput"

  let go_button = "gobutton"

end
