
let bank = List.map (fun (x,y) -> Js.string x, Js.string y) [
  "Von koch snowflake",
  "#6%26Von_koch {%0A%0Aaxiom %3D%0A  f(0.5) - f(0.05) %2B(30) %0A  F(0.8) -(120) F(0.8) -(120) F(0.8)%0A%0Arule F(l) %3D%0A  F(l%2F3) %2B(60) F(l%2F3) -(120) F(l%2F3) %2B(60) F(l%2F3)%0A%0A}" ;

  "Dragon curve" ,
  "#11%26Dragon {%0A%0Adef X(d) Y(d) *%0A%0Aaxiom %3D -(45) f(0.47) * F(0.6) X(0.6)%0A%0Arule X(l) %3D X(l%2Fsqrt(2)) %2B Y(l%2Fsqrt(2)) F(l%2Fsqrt(2)) %2B%0A%0Arule Y(l) %3D -(90) F(l%2Fsqrt(2)) X(l%2Fsqrt(2)) -(90) Y(l%2Fsqrt(2))%0A%0Arule F(l) %3D F(l%2Fsqrt(2))%0A%0Arule * %3D * -(45)%0A%0A}" ;

  "Fern" ,
  "#6%26fern {%0A%0Adef X(d)%0A%0Aaxiom %3D f(0.5) -(90) f(1) -(180) X(0.35)%0A%0Arule X(x) %3D%0A  F(x%2F2) -(25) [ [ X(x%2F2) ] %2B(28) X(x%2F2) ]%0A  %2B(24) F(x%2F2) [ %2B(25) F(x%2F2) X(x%2F2) ] -(25) X(x%2F2)%0A%0A}" ;

  "Spin it",
  "#120%26Spin_it {%0A%0Adef X(l)%0A%0Adef Square(l) %3D %0A  Save Turn(45) forward(l*sqrt(2)%2F2)%0A  Turn(-135) Forward(l)%0A  Turn(-90) Forward(l)%0A  Turn(-90) Forward(l)%0A  Turn(-90) Forward(l) Restore%0A%0Aaxiom %3D - f(0.5) %2B f(0.5) X(0.01)%0A%0Arule X(l) %3D Square(l) %2B(2) X(l %2B 0.01)%0A}" ;

  "Von koch colored curve",
  "#6%26Von_koch_color {%0A%0Adef C(d) %3D Color(0%2Cd%2C0.1%2C1)%0Adef FF(l%2Cd%2Ck) %3D Forward(l)%0A%0Aaxiom %3D - f(0.28) %2B f(0.05) FF(0.9%2C0%2C0.9)%0A%0Arule FF(l%2Cd%2Ck) %3D%0A     C(d)         FF(l%2F3%2C d%2C k%2F4)         %2B(60)%0A     C(d %2B k%2F4)   FF(l%2F3%2C d %2B k%2F4%2C k%2F4)   -(120)%0A     C(d %2B k%2F2)   FF(l%2F3%2C d %2B k%2F2%2C k%2F4)   %2B(60)%0A     C(d %2B 3%2F4*k) FF(l%2F3%2C d %2B 3%2F4*k%2C k%2F4)%0A}"

]
