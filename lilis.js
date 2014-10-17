var
fV="\n";(function(_){"use strict";var
e9=125,aG=254,ai=255,fe=224,b6="Map.bal",b8='"',ah=16777215,aX=250,fG="<",br=1024,fI="jsError",c2=2147483,dd="input",fJ="log",b0=246,c0=115,fa=162,c3=512,e7=-10,fj=3.14159265358979312,fd=-20,e="",O=128,e6=100,af="0",fl=487,e_=126,fF="fd ",a="lilis/lisParser.ml",fL="px ",db=">",fb=1e3,$="src/core/lwt.ml",fM="x",bw=".",b9="+",bt=65535,fk=4096,bZ=1073741823,bs=105,fE="%d",cZ=110,fq=-88,fn=57343,fo=785140586,fg=252,e$=127,bv="'",fp=801,fB="Unix",b$="int_of_string",fi=-32,fr=982028505,ar=" ",b_="e",fC="button",fh=256,aI="-",fK="nan",b5="Graphics.Graphic_failure",b1=-48,fD="canvas",ff=240,dc=" : file already exists",fc=2048,fA="%.12g",fm=56320,b7="Set.bal",da="/",e8=114,c1=-14,fH="index out of bounds";function
b3(a,b,c){var
e=new
Array(c);for(var
d=0;d<c;d++)e[d]=a[b+d];return e}function
cQ(a,b,c){var
d=String.fromCharCode;if(b==0&&c<=fk&&c==a.length)return d.apply(null,a);var
f=e;for(;0<c;b+=br,c-=br)f+=d.apply(null,b3(a,b,Math.min(c,br)));return f}function
bM(a){var
c=new
Array(a.l),e=a.c,d=e.length,b=0;for(;b<d;b++)c[b]=e.charCodeAt(b);for(d=a.l;b<d;b++)c[b]=0;a.c=c;a.t=4;return c}function
X(a,b,c,d,e){if(e==0)return 0;if(d==0&&(e>=c.l||c.t==2&&e>=c.c.length)){c.c=a.t==4?cQ(a.c,b,e):b==0&&a.c.length==e?a.c:a.c.substr(b,e);c.t=c.c.length==c.l?0:2}else
if(c.t==2&&d==c.c.length){c.c+=a.t==4?cQ(a.c,b,e):b==0&&a.c.length==e?a.c:a.c.substr(b,e);c.t=c.c.length==c.l?0:2}else{if(c.t!=4)bM(c);var
g=a.c,h=c.c;if(a.t==4)for(var
f=0;f<e;f++)h[d+f]=g[b+f];else{var
i=Math.min(e,g.length-b);for(var
f=0;f<i;f++)h[d+f]=g.charCodeAt(b+f);for(;f<e;f++)h[d+f]=0}}return 0}function
mP(a,b){var
e=a.length,d=new
Array(e+1),c=0;for(;c<e;c++)d[c]=a[c];d[c]=b;return d}function
an(c,b){if(c.fun)return an(c.fun,b);var
a=c.length,d=b.length,e=a-d;if(e==0)return c.apply(null,b);else
if(e<0)return an(c.apply(null,b3(b,0,a)),b3(b,a,d-a));else
return function(a){return an(c,mP(b,a))}}function
mg(a,b){throw[0,a,b]}function
bT(a,b){if(b.repeat)return b.repeat(a);var
c=e,d=0;if(a==0)return c;for(;;){if(a&1)c+=b;a>>=1;if(a==0)return c;b+=b;d++;if(d==9)b.slice(0,1)}}function
aA(a){if(a.t==2)a.c+=bT(a.l-a.c.length,"\0");else
a.c=cQ(a.c,0,a.c.length);a.t=0}function
eD(a){if(a.length<24){for(var
b=0;b<a.length;b++)if(a.charCodeAt(b)>e$)return false;return true}else
return!/[^\x00-\x7f]/.test(a)}function
mr(a){for(var
k=e,d=e,i,g,h,b,c=0,j=a.length;c<j;c++){g=a.charCodeAt(c);if(g<O){for(var
f=c+1;f<j&&(g=a.charCodeAt(f))<O;f++);if(f-c>c3){d.substr(0,1);k+=d;d=e;k+=a.slice(c,f)}else
d+=a.slice(c,f);if(f==j)break;c=f}b=1;if(++c<j&&((h=a.charCodeAt(c))&-64)==O){i=h+(g<<6);if(g<fe){b=i-12416;if(b<O)b=1}else{b=2;if(++c<j&&((h=a.charCodeAt(c))&-64)==O){i=h+(i<<6);if(g<ff){b=i-925824;if(b<fc||b>=55295&&b<57344)b=2}else{b=3;if(++c<j&&((h=a.charCodeAt(c))&-64)==O&&g<245){b=h-63447168+(i<<6);if(b<65536||b>1114111)b=3}}}}}if(b<4){c-=b;d+="\ufffd"}else
if(b>bt)d+=String.fromCharCode(55232+(b>>10),fm+(b&1023));else
d+=String.fromCharCode(b);if(d.length>br){d.substr(0,1);k+=d;d=e}}return k+d}function
mq(a){switch(a.t){case
9:return a.c;default:aA(a);case
0:if(eD(a.c)){a.t=9;return a.c}a.t=8;case
8:return mr(a.c)}}function
W(a,b,c){this.t=a;this.c=b;this.l=c}W.prototype={toString:function(){return mq(this)}};function
c(a){return new
W(0,a,a.length)}function
cN(a,b){mg(a,c(b))}var
A=[0];function
aB(a){cN(A[4],a)}function
lz(){aB(fH)}function
l(a,b){if(b>>>0>=a.length-1)lz();return a}function
lB(a){if(isFinite(a)){if(Math.abs(a)>=2.22507385850720138e-308)return 0;if(a!=0)return 1;return 2}return isNaN(a)?4:3}function
lS(a,b){var
c=a[3]<<16,d=b[3]<<16;if(c>d)return 1;if(c<d)return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
l2(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
eQ(a,b){a.t&6&&aA(a);b.t&6&&aA(b);return a.c<b.c?-1:a.c>b.c?1:0}function
aU(a,b,c){var
e=[];for(;;){if(!(c&&a===b))if(a
instanceof
W)if(b
instanceof
W){if(a!==b){var
d=eQ(a,b);if(d!=0)return d}}else
return 1;else
if(a
instanceof
Array&&a[0]===(a[0]|0)){var
f=a[0];if(f===aG)f=0;if(f===aX){a=a[1];continue}else
if(b
instanceof
Array&&b[0]===(b[0]|0)){var
g=b[0];if(g===aG)g=0;if(g===aX){b=b[1];continue}else
if(f!=g)return f<g?-1:1;else
switch(f){case
248:var
d=l2(a[2],b[2]);if(d!=0)return d;break;case
251:aB("equal: abstract value");case
255:var
d=lS(a,b);if(d!=0)return d;break;default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)e.push(a,b,1)}}else
return 1}else
if(b
instanceof
W||b
instanceof
Array&&b[0]===(b[0]|0))return-1;else
if(typeof
a!="number"&&a&&a.compare)return a.compare(b,c);else{if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!c)return NaN;if(a==a)return 1;if(b==b)return-1}}if(e.length==0)return 0;var
h=e.pop();b=e.pop();a=e.pop();if(h+1<a.length)e.push(a,b,h+1);a=a[h];b=b[h]}}function
bL(a,b){return aU(a,b,true)}function
lC(){return 0}function
C(a){if(a<0)aB("String.create");return new
W(a?2:9,e,a)}function
lE(a,b){return+(aU(a,b,false)==0)}function
lF(a,b,c,d){if(c>0)if(b==0&&(c>=a.l||a.t==2&&c>=a.c.length))if(d==0){a.c=e;a.t=2}else{a.c=bT(c,String.fromCharCode(d));a.t=c==a.l?0:2}else{if(a.t!=4)bM(a);for(c+=b;b<c;b++)a.c[b]=d}return 0}function
aV(a){cN(A[3],a)}function
bm(a){if((a.t&6)!=0)aA(a);return a.c}function
lG(a){var
b;a=bm(a);b=+a;if(a.length>0&&b===b)return b;a=a.replace(/_/g,e);b=+a;if(a.length>0&&b===b||/^[+-]?nan$/i.test(a))return b;if(/^ *0x[0-9a-f_]+p[+-]?[0-9_]+/i.test(a)){var
c=a.indexOf("p");c=c==-1?a.indexOf("P"):c;var
d=+a.substring(c+1);b=+a.substring(0,c);return b*Math.pow(2,d)}aV("float_of_string")}function
cM(a){a=bm(a);var
e=a.length;if(e>31)aB("format_int: format too long");var
b={justify:b9,signstyle:aI,filler:ar,alternate:false,base:0,signedconv:false,width:0,uppercase:false,sign:1,prec:-1,conv:"f"};for(var
d=0;d<e;d++){var
c=a.charAt(d);switch(c){case"-":b.justify=aI;break;case"+":case" ":b.signstyle=c;break;case"0":b.filler=af;break;case"#":b.alternate=true;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":b.width=0;while(c=a.charCodeAt(d)-48,c>=0&&c<=9){b.width=b.width*10+c;d++}d--;break;case".":b.prec=0;d++;while(c=a.charCodeAt(d)-48,c>=0&&c<=9){b.prec=b.prec*10+c;d++}d--;case"d":case"i":b.signedconv=true;case"u":b.base=10;break;case"x":b.base=16;break;case"X":b.base=16;b.uppercase=true;break;case"o":b.base=8;break;case"e":case"f":case"g":b.signedconv=true;b.conv=c;break;case"E":case"F":case"G":b.signedconv=true;b.uppercase=true;b.conv=c.toLowerCase();break}}return b}function
cD(a,b){if(a.uppercase)b=b.toUpperCase();var
g=b.length;if(a.signedconv&&(a.sign<0||a.signstyle!=aI))g++;if(a.alternate){if(a.base==8)g+=1;if(a.base==16)g+=2}var
d=e;if(a.justify==b9&&a.filler==ar)for(var
f=g;f<a.width;f++)d+=ar;if(a.signedconv)if(a.sign<0)d+=aI;else
if(a.signstyle!=aI)d+=a.signstyle;if(a.alternate&&a.base==8)d+=af;if(a.alternate&&a.base==16)d+="0x";if(a.justify==b9&&a.filler==af)for(var
f=g;f<a.width;f++)d+=af;d+=b;if(a.justify==aI)for(var
f=g;f<a.width;f++)d+=ar;return c(d)}function
cE(a,b){var
c,f=cM(a),e=f.prec<0?6:f.prec;if(b<0){f.sign=-1;b=-b}if(isNaN(b)){c=fK;f.filler=ar}else
if(!isFinite(b)){c="inf";f.filler=ar}else
switch(f.conv){case"e":var
c=b.toExponential(e),d=c.length;if(c.charAt(d-3)==b_)c=c.slice(0,d-1)+af+c.slice(d-1);break;case"f":c=b.toFixed(e);break;case"g":e=e?e:1;c=b.toExponential(e-1);var
i=c.indexOf(b_),h=+c.slice(i+1);if(h<-4||b.toFixed(0).length>e){var
d=i-1;while(c.charAt(d)==af)d--;if(c.charAt(d)==bw)d--;c=c.slice(0,d+1)+c.slice(i);d=c.length;if(c.charAt(d-3)==b_)c=c.slice(0,d-1)+af+c.slice(d-1);break}else{var
g=e;if(h<0){g-=h+1;c=b.toFixed(g)}else
while(c=b.toFixed(g),c.length>e+1)g--;if(g){var
d=c.length-1;while(c.charAt(d)==af)d--;if(c.charAt(d)==bw)d--;c=c.slice(0,d+1)}}break}return cD(f,c)}function
bN(a,b){if(bm(a)==fE)return c(e+b);var
d=cM(a);if(b<0)if(d.signedconv){d.sign=-1;b=-b}else
b>>>=0;var
f=b.toString(d.base);if(d.prec>=0){d.filler=ar;var
g=d.prec-f.length;if(g>0)f=bT(g,af)+f}return cD(d,f)}function
lI(){return 0}var
eJ={};function
eI(a){return eJ[a]}var
S;function
ab(){if(S)return S;throw[0,eI(b5),c("Not initialized")]}function
lJ(){var
a=ab();a.canvas.width=a.width;a.canvas.height=a.height;return 0}function
lK(a,b){var
c=ab();c.context.beginPath();c.context.moveTo(c.x,c.height-c.y);c.context.lineTo(a,c.height-b);c.context.stroke();c.x=a;c.y=b;return 0}function
cG(a,b){var
c=ab();c.x=a;c.y=b;return 0}function
cH(a){var
c=ab();function
b(a){var
b=e+a.toString(16);while(b.length<2)b=af+b;return b}var
h=a>>16&ai,g=a>>8&ai,f=a>>0&ai;c.color=a;var
d="#"+b(h)+b(g)+b(f);c.context.fillStyle=d;c.context.strokeStyle=d;return 0}function
ew(a){var
b=ab();b.line_width=a;b.context.lineWidth=a;return 0}function
ex(){var
a=ab();return a.width}function
ey(){var
a=ab();return a.height}function
lP(a,b,c){var
d=a.getContext("2d");return{context:d,canvas:a,x:0,y:0,width:b,height:c,line_width:1,font:"fixed",text_size:26,color:0,title:e}}function
lO(a){var
b=ab();a=a.toString?a.toString():a;b.title=a;if(b.set_title)b.set_title(a);return 0}function
lN(a){var
b=ab();b.text_size=a;b.context.font=b.text_size+fL+b.font.toString();return 0}function
lM(a){var
b=ab();b.font=a;b.context.font=b.text_size+fL+b.font.toString();return 0}function
lL(a,b){var
c=ab();c.width=a;c.height=b;c.canvas.width=a;c.canvas.height=b;return 0}function
lQ(){cG(S.x,S.y);lL(S.width,S.height);ew(S.line_width);lN(S.text_size);lM(S.font);cH(S.color);lO(S.title);S.context.textBaseline="bottom"}function
lR(a){S=a;lQ();return 0}function
ez(a,b){return+(aU(a,b,false)>=0)}function
lV(a){return(a[3]|a[2]|a[1])==0}function
lY(a){return[ai,a&ah,a>>24&ah,a>>31&bt]}function
eL(a){var
d=a.length,c=new
Array(d);for(var
b=0;b<d;b++)c[b]=a[b];return c}function
lZ(a,b){var
c=a[1]-b[1],d=a[2]-b[2]+(c>>24),e=a[3]-b[3]+(d>>24);return[ai,c&ah,d&ah,e&bt]}function
eB(a,b){if(a[3]>b[3])return 1;if(a[3]<b[3])return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
eA(a){a[3]=a[3]<<1|a[2]>>23;a[2]=(a[2]<<1|a[1]>>23)&ah;a[1]=a[1]<<1&ah}function
lW(a){a[1]=(a[1]>>>1|a[2]<<23)&ah;a[2]=(a[2]>>>1|a[3]<<23)&ah;a[3]=a[3]>>>1}function
l1(a,b){var
e=0,d=eL(a),c=eL(b),f=[ai,0,0,0];while(eB(d,c)>0){e++;eA(c)}while(e>=0){e--;eA(f);if(eB(d,c)>=0){f[1]++;d=lZ(d,c)}lW(c)}return[0,f,d]}function
l0(a){return a[1]|a[2]<<24}function
lU(a){return a[3]<<16<0}function
lX(a){var
b=-a[1],c=-a[2]+(b>>24),d=-a[3]+(c>>24);return[ai,b&ah,c&ah,d&bt]}function
lT(a,b){var
c=cM(a);if(c.signedconv&&lU(b)){c.sign=-1;b=lX(b)}var
d=e,i=lY(c.base),h="0123456789abcdef";do{var
g=l1(b,i);b=g[1];d=h.charAt(l0(g[2]))+d}while(!lV(b));if(c.prec>=0){c.filler=ar;var
f=c.prec-d.length;if(f>0)d=bT(f,af)+d}return cD(c,d)}function
y(a,b){switch(a.t&6){default:if(b>=a.c.length)return 0;case
0:return a.c.charCodeAt(b);case
4:return a.c[b]}}function
n(a){return a.l}function
me(a){var
b=0,d=n(a),c=10,e=d>0&&y(a,0)==45?(b++,-1):1;if(b+1<d&&y(a,b)==48)switch(y(a,b+1)){case
120:case
88:c=16;b+=2;break;case
111:case
79:c=8;b+=2;break;case
98:case
66:c=2;b+=2;break}return[b,e,c]}function
eM(a){if(a>=48&&a<=57)return a-48;if(a>=65&&a<=90)return a-55;if(a>=97&&a<=122)return a-87;return-1}function
eC(a){var
h=me(a),d=h[0],i=h[1],e=h[2],g=n(a),j=-1>>>0,f=d<g?y(a,d):0,c=eM(f);if(c<0||c>=e)aV(b$);var
b=c;for(d++;d<g;d++){f=y(a,d);if(f==95)continue;c=eM(f);if(c<0||c>=e)break;b=e*b+c;if(b>j)aV(b$)}if(d!=g)aV(b$);b=i*b;if(e==10&&(b|0)!=b)aV(b$);return b|0}function
cI(a){return+(a>31&&a<e$)}function
l4(a){return b3(a,1,a.length-1)}function
l3(a,b,c){return a.apply(b,l4(c))}function
l5(){var
b=_.console?_.console:{},c=[fJ,"debug","info","warn","error","assert","dir","dirxml","trace","group","groupCollapsed","groupEnd","time","timeEnd"];function
d(){}for(var
a=0;a<c.length;a++)if(!b[c[a]])b[c[a]]=d;return b}var
bO={amp:/&/g,lt:/</g,quot:/\"/g,all:/[&<\"]/};function
eE(a){if(!bO.all.test(a))return a;return a.replace(bO.amp,"&amp;").replace(bO.lt,"&lt;").replace(bO.quot,"&quot;")}function
ms(a){for(var
g=e,c=g,b,i,d=0,h=a.length;d<h;d++){b=a.charCodeAt(d);if(b<O){for(var
f=d+1;f<h&&(b=a.charCodeAt(f))<O;f++);if(f-d>c3){c.substr(0,1);g+=c;c=e;g+=a.slice(d,f)}else
c+=a.slice(d,f);if(f==h)break;d=f}if(b<fc){c+=String.fromCharCode(192|b>>6);c+=String.fromCharCode(O|b&63)}else
if(b<55296||b>=fn)c+=String.fromCharCode(fe|b>>12,O|b>>6&63,O|b&63);else
if(b>=56319||d+1==h||(i=a.charCodeAt(d+1))<fm||i>fn)c+="\xef\xbf\xbd";else{d++;b=(b<<10)+i-56613888;c+=String.fromCharCode(ff|b>>18,O|b>>12&63,O|b>>6&63,O|b&63)}if(c.length>br){c.substr(0,1);g+=c;c=e}}return g+c}function
aW(a){var
b=9;if(!eD(a))b=8,a=ms(a);return new
W(b,a,a.length)}function
mQ(a){var
d=a.length,c=new
Array(d);for(var
b=0;b<d;b++)c[b]=a[b];return c}function
cJ(a){return function(){return arguments.length>0?an(a,mQ(arguments)):an(a,[undefined])}}function
l6(a,b){return+(aU(a,b,false)<=0)}function
l7(a,b){return+(aU(a,b,false)<0)}function
bn(a){a=bm(a);var
d=a.length/2,c=new
Array(d);for(var
b=0;b<d;b++)c[b]=(a.charCodeAt(2*b)|a.charCodeAt(2*b+1)<<8)<<16>>16;return c}function
lA(a){if(a.t!=4)bM(a);return a.c}function
l8(a,b,c){var
p=2,o=3,s=5,e=6,i=7,h=8,k=9,n=1,m=2,r=3,t=4,q=5;if(!a.lex_default){a.lex_base=bn(a[n]);a.lex_backtrk=bn(a[m]);a.lex_check=bn(a[q]);a.lex_trans=bn(a[t]);a.lex_default=bn(a[r])}var
f,d=b,l=lA(c[p]);if(d>=0){c[i]=c[s]=c[e];c[h]=-1}else
d=-d-1;for(;;){var
g=a.lex_base[d];if(g<0)return-g-1;var
j=a.lex_backtrk[d];if(j>=0){c[i]=c[e];c[h]=j}if(c[e]>=c[o])if(c[k]==0)return-d-1;else
f=fh;else{f=l[c[e]];c[e]++}d=a.lex_check[g+f]==d?a.lex_trans[g+f]:a.lex_default[d];if(d<0){c[e]=c[i];if(c[h]==-1)aV("lexing: empty token");else
return c[h]}else
if(f==fh)c[k]=0}}function
l9(a){return Math.LOG10E*Math.log(a)}function
N(a,b){var
a=a+1|0,c=new
Array(a);c[0]=0;for(var
d=1;d<a;d++)c[d]=b;return c}function
eR(a){return new
W(4,a,a.length)}var
l_=function(){function
m(a,b){return a+b|0}function
l(a,b,c,d,e,f){b=m(m(b,a),m(d,f));return m(b<<e|b>>>32-e,c)}function
h(a,b,c,d,e,f,g){return l(b&c|~b&d,a,b,e,f,g)}function
i(a,b,c,d,e,f,g){return l(b&d|c&~d,a,b,e,f,g)}function
j(a,b,c,d,e,f,g){return l(b^c^d,a,b,e,f,g)}function
k(a,b,c,d,e,f,g){return l(c^(b|~d),a,b,e,f,g)}function
n(a,b){var
g=b;a[g>>2]|=O<<8*(g&3);for(g=(g&~3)+8;(g&63)<60;g+=4)a[(g>>2)-1]=0;a[(g>>2)-1]=b<<3;a[g>>2]=b>>29&536870911;var
l=[1732584193,4023233417,2562383102,271733878];for(g=0;g<a.length;g+=16){var
c=l[0],d=l[1],e=l[2],f=l[3];c=h(c,d,e,f,a[g+0],7,3614090360);f=h(f,c,d,e,a[g+1],12,3905402710);e=h(e,f,c,d,a[g+2],17,606105819);d=h(d,e,f,c,a[g+3],22,3250441966);c=h(c,d,e,f,a[g+4],7,4118548399);f=h(f,c,d,e,a[g+5],12,1200080426);e=h(e,f,c,d,a[g+6],17,2821735955);d=h(d,e,f,c,a[g+7],22,4249261313);c=h(c,d,e,f,a[g+8],7,1770035416);f=h(f,c,d,e,a[g+9],12,2336552879);e=h(e,f,c,d,a[g+10],17,4294925233);d=h(d,e,f,c,a[g+11],22,2304563134);c=h(c,d,e,f,a[g+12],7,1804603682);f=h(f,c,d,e,a[g+13],12,4254626195);e=h(e,f,c,d,a[g+14],17,2792965006);d=h(d,e,f,c,a[g+15],22,1236535329);c=i(c,d,e,f,a[g+1],5,4129170786);f=i(f,c,d,e,a[g+6],9,3225465664);e=i(e,f,c,d,a[g+11],14,643717713);d=i(d,e,f,c,a[g+0],20,3921069994);c=i(c,d,e,f,a[g+5],5,3593408605);f=i(f,c,d,e,a[g+10],9,38016083);e=i(e,f,c,d,a[g+15],14,3634488961);d=i(d,e,f,c,a[g+4],20,3889429448);c=i(c,d,e,f,a[g+9],5,568446438);f=i(f,c,d,e,a[g+14],9,3275163606);e=i(e,f,c,d,a[g+3],14,4107603335);d=i(d,e,f,c,a[g+8],20,1163531501);c=i(c,d,e,f,a[g+13],5,2850285829);f=i(f,c,d,e,a[g+2],9,4243563512);e=i(e,f,c,d,a[g+7],14,1735328473);d=i(d,e,f,c,a[g+12],20,2368359562);c=j(c,d,e,f,a[g+5],4,4294588738);f=j(f,c,d,e,a[g+8],11,2272392833);e=j(e,f,c,d,a[g+11],16,1839030562);d=j(d,e,f,c,a[g+14],23,4259657740);c=j(c,d,e,f,a[g+1],4,2763975236);f=j(f,c,d,e,a[g+4],11,1272893353);e=j(e,f,c,d,a[g+7],16,4139469664);d=j(d,e,f,c,a[g+10],23,3200236656);c=j(c,d,e,f,a[g+13],4,681279174);f=j(f,c,d,e,a[g+0],11,3936430074);e=j(e,f,c,d,a[g+3],16,3572445317);d=j(d,e,f,c,a[g+6],23,76029189);c=j(c,d,e,f,a[g+9],4,3654602809);f=j(f,c,d,e,a[g+12],11,3873151461);e=j(e,f,c,d,a[g+15],16,530742520);d=j(d,e,f,c,a[g+2],23,3299628645);c=k(c,d,e,f,a[g+0],6,4096336452);f=k(f,c,d,e,a[g+7],10,1126891415);e=k(e,f,c,d,a[g+14],15,2878612391);d=k(d,e,f,c,a[g+5],21,4237533241);c=k(c,d,e,f,a[g+12],6,1700485571);f=k(f,c,d,e,a[g+3],10,2399980690);e=k(e,f,c,d,a[g+10],15,4293915773);d=k(d,e,f,c,a[g+1],21,2240044497);c=k(c,d,e,f,a[g+8],6,1873313359);f=k(f,c,d,e,a[g+15],10,4264355552);e=k(e,f,c,d,a[g+6],15,2734768916);d=k(d,e,f,c,a[g+13],21,1309151649);c=k(c,d,e,f,a[g+4],6,4149444226);f=k(f,c,d,e,a[g+11],10,3174756917);e=k(e,f,c,d,a[g+2],15,718787259);d=k(d,e,f,c,a[g+9],21,3951481745);l[0]=m(c,l[0]);l[1]=m(d,l[1]);l[2]=m(e,l[2]);l[3]=m(f,l[3])}var
o=new
Array(16);for(var
g=0;g<4;g++)for(var
n=0;n<4;n++)o[g*4+n]=l[g]>>8*n&ai;return o}return function(a,b,c){var
h=[];switch(a.t&6){default:aA(a);case
0:var
g=a.c;for(var
d=0;d<c;d+=4){var
e=d+b;h[d>>2]=g.charCodeAt(e)|g.charCodeAt(e+1)<<8|g.charCodeAt(e+2)<<16|g.charCodeAt(e+3)<<24}for(;d<c;d++)h[d>>2]|=g.charCodeAt(d+b)<<8*(d&3);break;case
4:var
f=a.c;for(var
d=0;d<c;d+=4){var
e=d+b;h[d>>2]=f[e]|f[e+1]<<8|f[e+2]<<16|f[e+3]<<24}for(;d<c;d++)h[d>>2]|=f[d+b]<<8*(d&3)}return eR(n(h,c))}}();function
ac(a){cN(A[2],a)}function
cK(a){if(!a.opened)ac("Cannot flush a closed channel");if(a.buffer==e)return 0;if(a.output)switch(a.output.length){case
2:a.output(a,a.buffer);break;default:a.output(a.buffer)}a.buffer=e;return 0}function
ao(a){this.data=a}ao.prototype={truncate:function(){this.data=C(0)}};function
eO(a){a=a
instanceof
W?a.toString():a;ac(a+": No such file or directory")}var
lD=da;function
bP(a){a=a
instanceof
W?a.toString():a;if(a.charCodeAt(0)!=47)a=lD+a;var
d=a.split(da),b=[];for(var
c=0;c<d.length;c++)switch(d[c]){case"..":if(b.length>1)b.pop();break;case".":break;case"":if(b.length==0)b.push(e);break;default:b.push(d[c]);break}b.orig=a;return b}function
as(){this.content={}}as.prototype={exists:function(a){return this.content[a]?1:0},mk:function(a,b){this.content[a]=b},get:function(a){return this.content[a]},list:function(){var
a=[];for(var
b
in
this.content)a.push(b);return a},remove:function(a){delete
this.content[a]}};var
bS=new
as();bS.mk(e,new
as());function
cF(a){var
b=bS;for(var
c=0;c<a.length;c++){if(!(b.exists&&b.exists(a[c])))eO(a.orig);b=b.get(a[c])}return b}function
mo(a){var
c=bP(a),b=cF(c);return b
instanceof
as?1:0}function
lH(a,b){var
f=bP(a),d=bS;for(var
g=0;g<f.length-1;g++){var
e=f[g];if(!d.exists(e))d.mk(e,new
as());d=d.get(e);if(!(d
instanceof
as))ac(f.orig+dc)}var
e=f[f.length-1];if(d.exists(e))ac(f.orig+dc);if(b
instanceof
as)d.mk(e,b);else
if(b
instanceof
ao)d.mk(e,b);else
if(b
instanceof
W)d.mk(e,new
ao(b));else
if(b
instanceof
Array)d.mk(e,new
ao(eR(b)));else
if(b.toString)d.mk(e,new
ao(c(b.toString())));else
aB("caml_fs_register");return 0}function
mm(a){var
b=bS,d=bP(a),e,f;for(var
c=0;c<d.length;c++){if(b.auto){e=b.auto;f=c}if(!(b.exists&&b.exists(d[c])))return e?e(d,f):0;b=b.get(d[c])}return 1}function
bo(a,b,c){if(A.fds===undefined)A.fds=new
Array();c=c?c:{};var
d={};d.file=b;d.offset=c.append?n(b.data):0;d.flags=c;A.fds[a]=d;A.fd_last_idx=a;return a}function
nA(a,b,c){var
d={};while(b){switch(b[1]){case
0:d.rdonly=1;break;case
1:d.wronly=1;break;case
2:d.append=1;break;case
3:d.create=1;break;case
4:d.truncate=1;break;case
5:d.excl=1;break;case
6:d.binary=1;break;case
7:d.text=1;break;case
8:d.nonblock=1;break}b=b[2]}var
f=a.toString(),h=bP(a);if(d.rdonly&&d.wronly)ac(f+" : flags Open_rdonly and Open_wronly are not compatible");if(d.text&&d.binary)ac(f+" : flags Open_text and Open_binary are not compatible");if(mm(a)){if(mo(a))ac(f+" : is a directory");if(d.create&&d.excl)ac(f+dc);var
g=A.fd_last_idx?A.fd_last_idx:0,e=cF(h);if(d.truncate)e.truncate();return bo(g+1,e,d)}else
if(d.create){var
g=A.fd_last_idx?A.fd_last_idx:0;lH(a,C(0));var
e=cF(h);return bo(g+1,e,d)}else
eO(a)}bo(0,new
ao(C(0)));bo(1,new
ao(C(0)));bo(2,new
ao(C(0)));function
l$(a){var
b=A.fds[a];if(b.flags.wronly)ac(fF+a+" is writeonly");return{file:b.file,offset:b.offset,fd:a,opened:true}}function
mG(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=_.console;b&&b.error&&b.error(a)}function
mH(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=_.console;b&&b.log&&b.log(a)}var
bQ=new
Array();function
mj(a,b){var
h=c(b),d=n(h),g=n(a.file.data),f=a.offset;if(f+d>=g){var
e=C(f+d);X(a.file.data,0,e,0,g);X(h,0,e,f,d);a.file.data=e}a.offset+=d;return 0}function
eF(a){var
b;switch(a){case
1:b=mH;break;case
2:b=mG;break;default:b=mj}var
d=A.fds[a];if(d.flags.rdonly)ac(fF+a+" is readonly");var
c={file:d.file,offset:d.offset,fd:a,opened:true,buffer:e,output:b};bQ[c.fd]=c;return c}function
ma(){var
a=0;for(var
b
in
bQ)if(bQ[b].opened)a=[0,bQ[b],a];return a}function
cL(a,b,c,d){if(!a.opened)ac("Cannot output to a closed channel");var
f;if(c==0&&n(b)==d)f=b;else{f=C(d);X(b,c,f,0,d)}var
e=f.toString(),g=e.lastIndexOf(fV);if(g<0)a.buffer+=e;else{a.buffer+=e.substr(0,g+1);cK(a);a.buffer+=e.substr(g+1)}return 0}function
eG(a,b){var
d=c(String.fromCharCode(b));cL(a,d,0,1);return 0}function
eN(a){throw[0,a]}function
mh(){eN(A[6])}function
eH(a,b){if(b==0)mh();return a%b}if(!Math.imul)Math.imul=function(a,b){return((a>>16)*b<<16)+(a&bt)*b|0};var
mb=Math.imul;function
eK(a,b){return+(aU(a,b,false)!=0)}function
mc(a){return+(a
instanceof
Array)}function
md(a,b){a[0]=b;return 0}function
bR(a){return a
instanceof
Array?a[0]:a
instanceof
W?fg:fb}function
Y(a,b){A[a+1]=b}function
mi(a,b){eJ[bm(a)]=b;return 0}function
cO(a,b){a.t&6&&aA(a);b.t&6&&aA(b);return a.c==b.c?1:0}function
eP(){aB(fH)}function
ad(a,b){if(b>>>0>=a.l)eP();return y(a,b)}function
bU(a,b){return 1-cO(a,b)}function
z(a,b,c){c&=ai;if(a.t!=4){if(b==a.c.length){a.c+=String.fromCharCode(c);if(b+1==a.l)a.t=0;return 0}bM(a)}a.c[b]=c;return 0}function
cP(a,b,c){if(b>>>0>=a.l)eP();return z(a,b,c)}function
mk(){return 32}function
ml(a){var
b=_;if(b.quit)b.quit(a);if(b.process&&b.process.exit)b.process.exit(a);aB("Function 'exit' not implemented")}function
mn(){return[0,c(fB),32,0]}function
mf(){eN(A[7])}function
eS(a){var
b=_,c=a.toString();if(b.process&&b.process.env&&b.process.env[c]!=undefined)return aW(b.process.env[c]);mf()}function
mp(){var
a=new
Date()^4294967295*Math.random();return{valueOf:function(){return a},0:0,1:a,length:2}}function
g(a){var
b=1;while(a&&a.joo_tramp){a=a.joo_tramp.apply(null,a.joo_args);b++}return a}function
f(a,b){return{joo_tramp:a,joo_args:b}}function
cR(a,b){if(typeof
b==="function"){a.fun=b;return 0}if(b.fun){a.fun=b.fun;return 0}var
c=b.length;while(c--)a[c]=b[c];return 0}function
B(a){if(a
instanceof
Array)return a;if(_.RangeError&&a
instanceof
_.RangeError&&a.message&&a.message.match(/maximum call stack/i))return[0,A[9]];if(_.InternalError&&a
instanceof
_.InternalError&&a.message&&a.message.match(/too much recursion/i))return[0,A[9]];if(a
instanceof
_.Error)return[0,eI(fI),a];return[0,A[3],aW(String(a))]}function
h(a,b){return a.length==1?a(b):an(a,[b])}function
k(a,b,c){return a.length==2?a(b,c):an(a,[b,c])}function
d(a,b,c,d){return a.length==3?a(b,c,d):an(a,[b,c,d])}function
bK(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):an(a,[b,c,d,e,f])}var
dx=[0,c("Out_of_memory")],bE=[0,c("Failure")],ci=[0,c("Invalid_argument")],t=[0,c("Not_found")],dz=[0,c("Match_failure")],dy=[0,c("Stack_overflow")],j=[0,c("Assert_failure")],dA=[0,c("Undefined_recursive_module")],dP=[0,c(e),1,0,0],cx=c('File "%s", line %d, characters %d-%d: %s');Y(11,dA);Y(10,j);Y(9,[0,c("Sys_blocked_io")]);Y(8,dy);Y(7,dz);Y(6,t);Y(5,[0,c("Division_by_zero")]);Y(4,[0,c("End_of_file")]);Y(3,ci);Y(2,bE);Y(1,[0,c("Sys_error")]);Y(0,dx);var
f1=c("output"),gb=c(fA),ga=c(bw),f_=c("true"),f$=c("false"),f4=c("List.map2"),f6=[0,0,0],f7=c("List.combine"),f3=c("hd"),gc=c("\\b"),f0=c("\\t"),gP=c("\\n"),gQ=c("\\r"),f9=c("\\\\"),f8=c("\\'"),gW=c("String.contains_from"),gT=c(e),gS=c("String.blit"),gR=c("String.sub"),gY=c(e),g4=c("Set.remove_min_elt"),g5=[0,0,0,0],g6=[0,0,0],g0=c(b7),g1=c(b7),g2=c(b7),g3=c(b7),ha=c("Map.remove_min_elt"),hb=[0,0,0,0],hc=[0,c("map.ml"),270,10],go=[0,0,0],g8=c(b6),g9=c(b6),g_=c(b6),g$=c(b6),gp=c("Stack.Empty"),gr=c("Queue.Empty"),gu=c("CamlinternalLazy.Undefined"),gy=c("Buffer.add_substring"),gx=c("Buffer.add: cannot grow buffer"),gf=c(e),gg=c(e),gj=c(fA),gk=c(b8),gl=c(b8),gh=c(bv),gi=c(bv),ge=c(fK),gM=c("neg_infinity"),gN=c("infinity"),gL=c(bw),gK=c("printf: bad positional specification (0)."),gJ=c("%_"),gI=[0,c("printf.ml"),143,8],gF=c(bv),gG=c("Printf: premature end of format string '"),gB=c(bv),gC=c(" in format string '"),gD=c(", at char number "),gE=c("Printf: bad conversion %"),gz=c("Sformat.index_of_int: negative argument "),hH=c(e),hI=c(", %s%s"),hZ=[1,1],h0=c("%s\n"),h1=c("(Program not linked with -g, cannot print stack backtrace)\n"),hT=c("Raised at"),hW=c("Re-raised at"),hX=c("Raised by primitive operation at"),hY=c("Called from"),hU=c('%s file "%s", line %d, characters %d-%d'),hV=c("%s unknown location"),hO=c("Out of memory"),hP=c("Stack overflow"),hQ=c("Pattern matching failed"),hR=c("Assertion failed"),hS=c("Undefined recursive module"),hK=c("(%s%s)"),hL=c(e),hM=c(e),hN=c("(%s)"),gd=c(fE),gn=c("%S"),gO=c("_"),h3=c("Random.int"),h2=c(fM),lc=c("OCAMLRUNPARAM"),la=c("CAMLRUNPARAM"),h4=c(e),hB=[3,0,3],hC=c(bw),hx=c(db),hy=c("</"),hu=c(db),hv=c(fG),hs=c(fV),hm=c("Format.Empty_queue"),hr=[0,c(e)],hE=c("MList.get"),hD=[0,c("core/CCSequence.ml"),140,10],he=c("CCOpt.get_exn"),hg=c("Calc.Unknown_variable"),hl=c(b_),hG=c("pi"),iN=c("generate_lstream only accept positive integers as generation number"),iK=c(e),iS=[0,c(a),86,8],iT=[0,c(a),99,12],iU=[0,c(a),e_,8],iV=[0,c(a),137,12],iW=[0,c(a),169,8],iX=[0,c(a),177,12],iY=[0,c(a),155,8],iZ=[0,c(a),fa,12],i0=[0,c(a),210,8],i1=[0,c(a),242,8],i2=[0,c(a),aX,12],i3=[0,c(a),265,4],i4=[0,c(a),273,8],i7=[0,c(a),316,12],i8=[0,c(a),324,16],i5=[0,c(a),329,12],i6=[0,c(a),337,16],ih=[0,c(a),362,8],ii=[0,c(a),386,16],ij=[0,c(a),394,12],ik=[0,c(a),417,8],il=[0,c(a),430,4],im=[0,c(a),454,12],io=[0,c(a),458,8],ip=[0,c(a),468,4],iq=[0,c(a),fl,8],ir=[0,c(a),505,12],is=[0,c(a),514,8],it=[0,c(a),531,8],iu=[0,c(a),551,12],iv=[0,c(a),556,8],iw=[0,c(a),579,12],ix=[0,c(a),589,4],iy=[0,c(a),608,8],iz=[0,c(a),623,4],iA=[0,c(a),646,8],iB=[0,c(a),662,12],iC=[0,c(a),673,8],iD=[0,c(a),730,8],iE=[0,c(a),745,12],iF=[0,c(a),761,8],iG=[0,c(a),782,8],iH=[0,c(a),fp,8],h8=[0,c(a),820,8],h9=[0,c(a),839,8],h_=[0,c(a),858,8],h$=c("Internal failure -- please contact the parser generator's developers.\n%!"),ia=[0,c(a),865,4],ib=[0,c(a),891,12],ic=[0,c(a),895,8],id=[0,c(a),907,8],ig=[0,c(a),917,16],ie=[0,c(a),925,12],jK=[0,c(a),970,8],jM=[0,c(a),985,16],jL=[0,c(a),993,12],iI=[0,c(a),932,8],jJ=[0,c(a),955,16],h7=[0,c(a),963,12],jN=[0,c(a),1258,8],jO=[0,c(a),1281,12],jS=[0,c(a),1105,8],jT=[0,c(a),1120,12],jU=[0,c(a),1087,8],jV=[0,c(a),1098,12],jW=[0,c(a),1065,8],jX=[0,c(a),1080,12],jY=[0,c(a),1041,8],jZ=[0,c(a),1052,12],j0=[0,c(a),1013,8],j1=[0,c(a),1034,12],j2=[0,c(a),1133,8],j3=[0,c(a),1207,12],j7=[0,c(a),1180,16],j8=[0,c(a),1190,24],ji=[0,c(a),1199,20],j4=[0,c(a),1154,16],j5=[0,c(a),1164,24],j6=[0,c(a),1173,20],jP=[0,c(a),1214,8],jR=[0,c(a),1232,16],jQ=[0,c(a),1251,12],jj=[0,c(a),1295,8],jk=[0,c(a),1308,12],jn=[0,c(a),1321,8],jo=[0,c(a),1327,12],jl=[0,c(a),1332,8],jm=[0,c(a),1338,12],ed=c("*"),ee=c("^"),ef=c(b9),eg=c(aI),eh=c(da),jp=[0,c(a),1411,8],jq=[0,c(a),1431,8],jr=[0,c(a),1459,8],js=[0,c(a),1496,8],jt=[0,c(a),1674,12],ju=[0,c(a),1678,8],jv=[0,c(a),1700,4],jw=[0,c(a),1708,8],jx=[0,c(a),1738,4],jz=[0,c(a),1756,16],jA=[0,c(a),1760,12],jy=[0,c(a),1766,8],iP=c("LisParser.Error"),jC=c("atan"),jE=c("acos"),jG=c("asin"),i_=c("exp"),ja=c("log10"),jc=c(fJ),je=c("tan"),jg=c("cos"),jI=c("sin"),kC=c("sqrt"),mZ=[0,c("\0\0Y\0\xc1\0W\0\xee\xff\xef\xff\xf0\xff\xf2\xff\x19\x01q\x01\xf5\xff\xf6\xff\xf7\xff\xf8\xff\xf9\xff\xc9\x01!\x02y\x02\xfd\xff\xfe\xff\xff\xff\x0b\0\x1d\0R\0\xd1\x02)\x03\x81\x03\xd9\x031\x04\x89\x04\xe1\x049\x05\x91\x05\xa4\0"),c("\xff\xff\x14\0\x13\0\x12\0\xff\xff\xff\xff\xff\xff\xff\xff\f\0\x0b\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x13\0\x13\0\x13\0\xff\xff\xff\xff\xff\xff\x0e\0\xff\xff\0\0\x13\0\x13\0\x13\0\x03\0\x13\0\x13\0\x04\0\x13\0\x05\0\x12\0"),c("\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\0\0\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\xff\xff\x16\0\x16\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"),c("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x12\0\x14\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x12\0\0\0\0\0\x01\0\0\0\0\0\0\0\x17\0\x05\0\x04\0\x07\0\t\0\r\0\b\0\0\0\x15\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x16\0\0\0\0\0\x0e\0\0\0\n\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\x17\0\x01\0\x06\0\x02\0\0\0\x11\0\x02\0\x02\0\x0f\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x10\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\f\0\x01\0\x0b\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0!\0\x01\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\x01\0\0\0\x01\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x13\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\xff\xff\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\x01\0\0\0\x01\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\x01\0\0\0\x01\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x1f\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x1c\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x18\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x19\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x1a\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x1b\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x1d\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x1e\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0 \0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"),c("\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\x16\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x15\0\xff\xff\xff\xff\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x17\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\0\x03\0\x01\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\xff\xff\x01\0\xff\xff\x01\0\xff\xff\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x02\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x02\0\xff\xff\x02\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x16\0\x02\0\xff\xff\x02\0\xff\xff\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\b\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\b\0\xff\xff\b\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x17\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\xff\xff\b\0\xff\xff\b\0\xff\xff\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\t\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\t\0\xff\xff\t\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\xff\xff\t\0\xff\xff\t\0\xff\xff\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\x0f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0f\0\xff\xff\x0f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\xff\xff\x0f\0\xff\xff\x0f\0\xff\xff\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x10\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x10\0\xff\xff\x10\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\xff\xff\x10\0\xff\xff\x10\0\xff\xff\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x11\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x11\0\xff\xff\x11\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\xff\xff\x11\0\xff\xff\x11\0\xff\xff\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x18\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x18\0\xff\xff\x18\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\xff\xff\x18\0\xff\xff\x18\0\xff\xff\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x19\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x19\0\xff\xff\x19\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\xff\xff\x19\0\xff\xff\x19\0\xff\xff\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x1a\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1a\0\xff\xff\x1a\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\xff\xff\x1a\0\xff\xff\x1a\0\xff\xff\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1b\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1b\0\xff\xff\x1b\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\xff\xff\x1b\0\xff\xff\x1b\0\xff\xff\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1c\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1c\0\xff\xff\x1c\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\xff\xff\x1c\0\xff\xff\x1c\0\xff\xff\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1d\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1d\0\xff\xff\x1d\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\xff\xff\x1d\0\xff\xff\x1d\0\xff\xff\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1e\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1e\0\xff\xff\x1e\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\xff\xff\x1e\0\xff\xff\x1e\0\xff\xff\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1f\0\xff\xff\x1f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\xff\xff\x1f\0\xff\xff\x1f\0\xff\xff\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0 \0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff \0\xff\xff \0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\xff\xff \0\xff\xff \0\xff\xff \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"),c(e),c(e),c(e),c(e),c(e),c(e)],kD=c("LisUtils.ArityError"),kE=c("LisUtils.VarDefError"),kF=c("LisUtils.TokenDefError"),kG=c("LisUtils.OptionalArgument"),kH=c("\ndef F(d?1) = Forward(d)\ndef f(d?1) = forward(d)\ndef +(x?90) = Turn(x)\ndef -(x?90) = Turn(- x)\ndef [ = Save\ndef ] = Restore\ndef color(r,g,b,a?1) = Color(r,g,b,a)\n"),kK=c("LisUtils.ParseError"),kL=[0,c("lilis/lisUtils.ml"),161,12],kQ=c(bv),mT=c(e),kt=[0,c($),1018,8],ks=[0,c($),885,13],kq=[0,c($),799,20],kr=[0,c($),fp,8],ko=[0,c($),741,20],kp=[0,c($),743,8],km=[0,c($),692,20],kn=[0,c($),695,8],kk=[0,c($),648,20],kl=[0,c($),651,8],kj=[0,c($),498,8],ki=[0,c($),fl,9],kh=c("Lwt.wakeup_result"),kg=c("Fatal error: exception "),kf=c("Lwt.Canceled"),mV=[0,0],kx=c(b5),ky=c(e),kz=c(b5),kA=c("Cygwin"),j_=c("MacOS"),j$=c(fB),ka=c("Win32"),kb=c("Graphics: unknown OS type: "),ke=c("parseInt"),kc=c("Js.Error"),kd=c(fI),lt=c("textarea"),lr=c("select"),lp=c(dd),lo=c("div"),lm=c(fD),lk=c(fC),li=c(fC),mL=c("option"),j9=c("click"),lf=c("change"),lg=c(dd),lv=c("Exception during Lwt.async: "),lw=c("Lwt_js_event"),lx=c(e),kU=c(b5),kZ=[aG,0,0,0,1],kY=[aG,0,0,0,1],kW=[0,1],kX=[0,0],kV=[0,[0,c("Forward"),[0,0,1]],[0,[0,c("forward"),[0,1,1]],[0,[0,c("Turn"),[0,2,1]],[0,[0,c("Save"),[0,3,0]],[0,[0,c("Restore"),[0,4,0]],[0,[0,c("Color"),[0,5,4]],0]]]]]],k2=c(fD),k3=c("sidebar"),k4=c("selectlsys"),k5=c("lsysarea"),k6=c("genslider"),k7=c("geninput"),k8=c("gobutton"),k9=[0,[0,c("Von koch snowflake"),c("#6%26Von_koch {%0A%0Aaxiom %3D%0A  f(0.5) - f(0.05) %2B(30) %0A  F(0.8) -(120) F(0.8) -(120) F(0.8)%0A%0Arule F(l) %3D%0A  F(l%2F3) %2B(60) F(l%2F3) -(120) F(l%2F3) %2B(60) F(l%2F3)%0A%0A}")],[0,[0,c("Dragon curve"),c("#11%26Dragon {%0A%0Adef X(d) Y(d) *%0A%0Aaxiom %3D -(45) f(0.47) * F(0.6) X(0.6)%0A%0Arule X(l) %3D X(l%2Fsqrt(2)) %2B Y(l%2Fsqrt(2)) F(l%2Fsqrt(2)) %2B%0A%0Arule Y(l) %3D -(90) F(l%2Fsqrt(2)) X(l%2Fsqrt(2)) -(90) Y(l%2Fsqrt(2))%0A%0Arule F(l) %3D F(l%2Fsqrt(2))%0A%0Arule * %3D * -(45)%0A%0A}")],[0,[0,c("Fern"),c("#6%26fern {%0A%0Adef X(d)%0A%0Aaxiom %3D f(0.5) -(90) f(1) -(180) X(0.35)%0A%0Arule X(x) %3D%0A  F(x%2F2) -(25) [ [ X(x%2F2) ] %2B(28) X(x%2F2) ]%0A  %2B(24) F(x%2F2) [ %2B(25) F(x%2F2) X(x%2F2) ] -(25) X(x%2F2)%0A%0A}")],[0,[0,c("Spin it"),c("#120%26Spin_it {%0A%0Adef X(l)%0A%0Adef Square(l) %3D %0A  Save Turn(45) forward(l*sqrt(2)%2F2)%0A  Turn(-135) Forward(l)%0A  Turn(-90) Forward(l)%0A  Turn(-90) Forward(l)%0A  Turn(-90) Forward(l) Restore%0A%0Aaxiom %3D - f(0.5) %2B f(0.5) X(0.01)%0A%0Arule X(l) %3D Square(l) %2B(2) X(l %2B 0.01)%0A}")],[0,[0,c("Von koch colored curve"),c("#6%26Von_koch_color {%0A%0Adef C(d) %3D Color(0%2Cd%2C0.1%2C1)%0Adef FF(l%2Cd%2Ck) %3D Forward(l)%0A%0Aaxiom %3D - f(0.28) %2B f(0.05) FF(0.9%2C0%2C0.9)%0A%0Arule FF(l%2Cd%2Ck) %3D%0A     C(d)         FF(l%2F3%2C d%2C k%2F4)         %2B(60)%0A     C(d %2B k%2F4)   FF(l%2F3%2C d %2B k%2F4%2C k%2F4)   -(120)%0A     C(d %2B k%2F2)   FF(l%2F3%2C d %2B k%2F2%2C k%2F4)   %2B(60)%0A     C(d %2B 3%2F4*k) FF(l%2F3%2C d %2B 3%2F4*k%2C k%2F4)%0A}")],0]]]]],k$=[0,c("js/jslilis.ml"),fa,13],k_=c("cannot find dom id %S\n%!");function
aE(a){throw[0,bE,a]}function
s(a){throw[0,ci,a]}var
e5=2147483647;function
p(a,b){var
c=n(a),e=n(b),d=C(c+e|0);X(a,0,d,0,c);X(b,0,d,c,e);return d}function
aJ(a){return c(e+a)}function
cj(a,b){if(a){var
c=a[1];return[0,c,cj(a[2],b)]}return b}l$(0);var
mX=eF(1),aH=eF(2);function
mB(a){function
b(a){var
b=a;for(;;){if(b){var
c=b[2],d=b[1];try{cK(d)}catch(f){}var
b=c;continue}return 0}}return b(ma(0))}function
fs(a,b){return cL(a,b,0,n(b))}function
fu(a){return fs(aH,a)}var
ck=[0,mB];function
ly(c){var
b=ck[1];ck[1]=function(a){h(c,0);return h(b,0)};return 0}function
eY(a){return h(ck[1],0)}function
f2(a,b){return eG(a,b)}function
cl(a){return cK(a)}function
cm(a,b){var
d=b.length-1;if(0===d)return[0];var
f=N(d,h(a,b[0+1])),e=d-1|0,g=1;if(!(e<1)){var
c=g;for(;;){f[c+1]=h(a,b[c+1]);var
i=c+1|0;if(e!==c){var
c=i;continue}break}}return f}function
cn(a){if(a){var
d=0,c=a,g=a[2],h=a[1];for(;;){if(c){var
d=d+1|0,c=c[2];continue}var
f=N(d,h),e=1,b=g;for(;;){if(b){var
i=b[2];f[e+1]=b[1];var
e=e+1|0,b=i;continue}return f}}}return[0]}function
bF(a){var
c=0,b=a;for(;;){if(b){var
c=c+1|0,b=b[2];continue}return c}}function
dJ(a,b){var
c=a,d=b;for(;;){if(c){var
e=[0,c[1],d],c=c[2],d=e;continue}return d}}function
a1(a){return dJ(a,0)}function
dK(a){if(a){var
b=a[1];return cj(b,dK(a[2]))}return 0}function
u(a,b){if(b){var
c=b[2],d=h(a,b[1]);return[0,d,u(a,c)]}return 0}function
P(a,b){var
c=b;for(;;){if(c){var
d=c[2];h(a,c[1]);var
c=d;continue}return 0}}function
aO(a,b,c){var
e=b,d=c;for(;;){if(d){var
f=d[2],e=k(a,e,d[1]),d=f;continue}return e}}function
aP(a,b,c){if(b){var
d=b[1];return k(a,d,aP(a,b[2],c))}return c}function
dL(a,b,c){if(b){if(c){var
d=c[2],e=b[2],f=k(a,b[1],c[1]);return[0,f,dL(a,e,d)]}}else
if(!c)return 0;return s(f4)}function
bG(a,b){var
c=b;for(;;){if(c){var
d=c[1],e=c[2],f=d[2];if(0===bL(d[1],a))return f;var
c=e;continue}throw[0,t]}}function
f5(a,b){var
c=b;for(;;){if(c){var
d=c[1],e=c[2];if(h(a,d))return d;var
c=e;continue}throw[0,t]}}function
dM(a){if(a){var
b=a[1],d=b[2],e=b[1],c=dM(a[2]);return[0,[0,e,c[1]],[0,d,c[2]]]}return f6}function
dN(a,b){if(a){if(b){var
c=b[1],d=a[1];return[0,[0,d,c],dN(a[2],b[2])]}}else
if(!b)return 0;return s(f7)}function
a2(a,b){var
c=C(a);lF(c,0,a,b);return c}function
bx(a,b,c){if(0<=b)if(0<=c)if(!((n(a)-c|0)<b)){var
d=C(c);X(a,b,d,0,c);return d}return s(gR)}function
a3(a,b,c,d,e){if(0<=e)if(0<=b)if(!((n(a)-e|0)<b))if(0<=d)if(!((n(c)-e|0)<d))return X(a,b,c,d,e);return s(gS)}function
gU(a,b,c,d){var
e=c;for(;;){if(b<=e)throw[0,t];if(y(a,e)===d)return e;var
e=e+1|0;continue}}function
gV(a,b,c){var
d=n(a);if(0<=b)if(!(d<b)){try{gU(a,d,b,c);var
e=1}catch(f){f=B(f);if(f[1]===t)return 0;throw f}return e}return s(gW)}function
gX(a,b){return gV(a,0,b)}function
co(a,b){return eQ(a,b)}var
a4=mn(0)[1],cp=mk(0),dO=(1<<(cp+e7|0))-1|0,a5=mb(cp/8|0,dO)-1|0;function
dQ(a){var
b=[0],c=1,d=0,e=0,f=0,g=0,h=0,i=n(a),j=p(a,gY);return[0,function(a){a[9]=1;return 0},j,i,h,g,f,e,d,c,b,dP,dP]}function
gZ(a){var
b=a[6]-a[5]|0,c=C(b);X(a[2],a[5],c,0,b);return c}function
cq(a,b,c){var
d=c-b|0,e=C(d);X(a[2],b,e,0,d);return e}function
g7(g){function
o(a){return a?a[4]:0}function
e(a,b,c){var
d=a?a[4]:0,e=c?c[4]:0,f=e<=d?d+1|0:e+1|0;return[0,a,b,c,f]}function
f(a,b,c){var
g=a?a[4]:0,h=c?c[4]:0;if((h+2|0)<g){if(a){var
d=a[3],k=a[2],i=a[1],m=o(d);if(m<=o(i))return e(i,k,e(d,b,c));if(d){var
n=d[2],p=d[1],q=e(d[3],b,c);return e(e(i,k,p),n,q)}return s(g0)}return s(g1)}if((g+2|0)<h){if(c){var
j=c[3],l=c[2],f=c[1],r=o(f);if(r<=o(j))return e(e(a,b,f),l,j);if(f){var
t=f[2],u=f[1],v=e(f[3],l,j);return e(e(a,b,u),t,v)}return s(g2)}return s(g3)}var
w=h<=g?g+1|0:h+1|0;return[0,a,b,c,w]}function
i(a,b){if(b){var
d=b[3],c=b[2],e=b[1],h=k(g[1],a,c);return 0===h?b:0<=h?f(e,c,i(a,d)):f(i(a,e),c,d)}return[0,0,a,0,1]}function
u(a){return[0,0,a,0,1]}function
G(a,b){if(b){var
c=b[3],d=b[2];return f(G(a,b[1]),d,c)}return u(a)}function
z(a,b){if(b){var
c=b[2],d=b[1];return f(d,c,z(a,b[3]))}return u(a)}function
d(a,b,c){if(a){if(c){var
g=c[4],h=a[4],i=c[3],j=c[2],k=c[1],l=a[3],m=a[2],n=a[1];return(g+2|0)<h?f(n,m,d(l,b,c)):(h+2|0)<g?f(d(a,b,k),j,i):e(a,b,c)}return z(b,a)}return G(b,c)}function
p(a){var
b=a;for(;;){if(b){var
c=b[1];if(c){var
b=c;continue}return b[2]}throw[0,t]}}function
L(a){var
b=a;for(;;){if(b){var
c=b[3],d=b[2];if(c){var
b=c;continue}return d}throw[0,t]}}function
v(a){if(a){var
b=a[1];if(b){var
c=a[3],d=a[2];return f(v(b),d,c)}return a[3]}return s(g4)}function
j(a,b){if(a){if(b){var
c=v(b);return d(a,p(b),c)}return a}return b}function
c(a,b){if(b){var
e=b[3],f=b[2],h=b[1],l=k(g[1],a,f);if(0===l)return[0,h,1,e];if(0<=l){var
i=c(a,e),m=i[3],n=i[2];return[0,d(h,f,i[1]),n,m]}var
j=c(a,h),o=j[2],p=j[1];return[0,p,o,d(j[3],f,e)]}return g5}var
a=0;function
H(a){return a?0:1}function
I(a,b){var
c=b;for(;;){if(c){var
f=c[3],h=c[1],e=k(g[1],a,c[2]),d=0===e?1:0;if(d)return d;var
i=0<=e?f:h,c=i;continue}return 0}}function
w(a,b){if(b){var
c=b[3],e=b[2],d=b[1],h=k(g[1],a,e);if(0===h){if(d){if(c){var
i=v(c);return f(d,p(c),i)}return d}return c}return 0<=h?f(d,e,w(a,c)):f(w(a,d),e,c)}return 0}function
l(a,b){if(a){if(b){var
g=b[4],e=b[2],h=a[4],f=a[2],m=b[3],n=b[1],o=a[3],p=a[1];if(g<=h){if(1===g)return i(e,a);var
j=c(f,b),q=j[1],r=l(o,j[3]);return d(l(p,q),f,r)}if(1===h)return i(f,b);var
k=c(e,a),s=k[1],t=l(k[3],m);return d(l(s,n),e,t)}return a}return b}function
m(a,b){if(a){if(b){var
f=a[3],g=a[2],h=a[1],e=c(g,b),i=e[1];if(0===e[2]){var
k=m(f,e[3]);return j(m(h,i),k)}var
l=m(f,e[3]);return d(m(h,i),g,l)}return 0}return 0}function
n(a,b){if(a){if(b){var
f=a[3],g=a[2],h=a[1],e=c(g,b),i=e[1];if(0===e[2]){var
k=n(f,e[3]);return d(n(h,i),g,k)}var
l=n(f,e[3]);return j(n(h,i),l)}return a}return 0}function
q(a,b){var
c=a,d=b;for(;;){if(c){var
e=[0,c[2],c[3],d],c=c[1],d=e;continue}return d}}function
A(a,b){var
m=q(b,0),d=q(a,0),c=m;for(;;){if(d){if(c){var
f=c[3],h=c[2],i=d[3],j=d[2],e=k(g[1],d[1],c[1]);if(0===e){var
l=q(h,f),d=q(j,i),c=l;continue}return e}return 1}return c?-1:0}}function
J(a,b){return 0===A(a,b)?1:0}function
r(a,b){var
c=a,d=b;for(;;){if(c){if(d){var
i=d[3],j=d[1],e=c[3],f=c[2],h=c[1],o=k(g[1],f,d[2]);if(0===o){var
l=r(h,j);if(l){var
c=e,d=i;continue}return l}if(0<=o){var
m=r([0,0,f,e,0],i);if(m){var
c=h;continue}return m}var
n=r([0,h,f,0,0],j);if(n){var
c=e;continue}return n}return 0}return 1}}function
B(a,b){var
c=b;for(;;){if(c){var
d=c[3],e=c[2];B(a,c[1]);h(a,e);var
c=d;continue}return 0}}function
C(a,b,c){var
d=b,e=c;for(;;){if(d){var
f=d[3],g=d[2],h=k(a,g,C(a,d[1],e)),d=f,e=h;continue}return e}}function
D(a,b){var
c=b;for(;;){if(c){var
g=c[3],i=c[1],d=h(a,c[2]);if(d){var
e=D(a,i);if(e){var
c=g;continue}var
f=e}else
var
f=d;return f}return 1}}function
E(a,b){var
c=b;for(;;){if(c){var
g=c[3],i=c[1],d=h(a,c[2]);if(d)var
e=d;else{var
f=E(a,i);if(!f){var
c=g;continue}var
e=f}return e}return 0}}function
x(a,b){if(b){var
c=b[2],g=b[3],e=x(a,b[1]),i=h(a,c),f=x(a,g);return i?d(e,c,f):j(e,f)}return 0}function
y(a,b){if(b){var
c=b[2],m=b[3],e=y(a,b[1]),f=e[2],g=e[1],p=h(a,c),i=y(a,m),k=i[2],l=i[1];if(p){var
n=j(f,k);return[0,d(g,c,l),n]}var
o=d(f,c,k);return[0,j(g,l),o]}return g6}function
b(a){if(a){var
c=a[1],d=b(a[3]);return(b(c)+1|0)+d|0}return 0}function
F(a,b){var
d=a,c=b;for(;;){if(c){var
e=c[2],f=c[1],d=[0,e,F(d,c[3])],c=f;continue}return d}}function
K(a){return F(0,a)}return[0,a,H,I,i,u,w,l,m,n,A,J,r,B,C,D,E,x,y,b,K,p,L,p,c,function(a,b){var
c=b;for(;;){if(c){var
d=c[2],f=c[3],h=c[1],e=k(g[1],a,d);if(0===e)return d;var
i=0<=e?f:h,c=i;continue}throw[0,t]}}]}function
cr(m){function
l(a){return a?a[5]:0}function
e(a,b,c,d){var
e=l(a),f=l(d),g=f<=e?e+1|0:f+1|0;return[0,a,b,c,d,g]}function
r(a,b){return[0,0,a,b,0,1]}function
f(a,b,c,d){var
h=a?a[5]:0,i=d?d[5]:0;if((i+2|0)<h){if(a){var
f=a[4],m=a[3],n=a[2],j=a[1],t=l(f);if(t<=l(j))return e(j,n,m,e(f,b,c,d));if(f){var
u=f[3],v=f[2],w=f[1],x=e(f[4],b,c,d);return e(e(j,n,m,w),v,u,x)}return s(g8)}return s(g9)}if((h+2|0)<i){if(d){var
k=d[4],o=d[3],p=d[2],g=d[1],y=l(g);if(y<=l(k))return e(e(a,b,c,g),p,o,k);if(g){var
z=g[3],A=g[2],B=g[1],q=e(g[4],p,o,k);return e(e(a,b,c,B),A,z,q)}return s(g_)}return s(g$)}var
r=i<=h?h+1|0:i+1|0;return[0,a,b,c,d,r]}var
N=0;function
a(a){return a?0:1}function
u(a,b,c){if(c){var
d=c[4],h=c[3],e=c[2],g=c[1],j=c[5],i=k(m[1],a,e);return 0===i?[0,g,a,b,d,j]:0<=i?f(g,e,h,u(a,b,d)):f(u(a,b,g),e,h,d)}return[0,0,a,b,0,1]}function
I(a,b){var
c=b;for(;;){if(c){var
e=c[4],f=c[3],g=c[1],d=k(m[1],a,c[2]);if(0===d)return f;var
h=0<=d?e:g,c=h;continue}throw[0,t]}}function
J(a,b){var
c=b;for(;;){if(c){var
f=c[4],g=c[1],e=k(m[1],a,c[2]),d=0===e?1:0;if(d)return d;var
h=0<=e?f:g,c=h;continue}return 0}}function
p(a){var
b=a;for(;;){if(b){var
c=b[1];if(c){var
b=c;continue}return[0,b[2],b[3]]}throw[0,t]}}function
K(a){var
b=a;for(;;){if(b){var
c=b[4],d=b[3],e=b[2];if(c){var
b=c;continue}return[0,e,d]}throw[0,t]}}function
v(a){if(a){var
b=a[1];if(b){var
c=a[4],d=a[3],e=a[2];return f(v(b),e,d,c)}return a[4]}return s(ha)}function
w(a,b){if(b){var
c=b[4],h=b[3],e=b[2],d=b[1],i=k(m[1],a,e);if(0===i){if(d){if(c){var
g=p(c),j=g[2],l=g[1];return f(d,l,j,v(c))}return d}return c}return 0<=i?f(d,e,h,w(a,c)):f(w(a,d),e,h,c)}return 0}function
A(a,b){var
c=b;for(;;){if(c){var
d=c[4],e=c[3],f=c[2];A(a,c[1]);k(a,f,e);var
c=d;continue}return 0}}function
c(a,b){if(b){var
d=b[5],e=b[4],f=b[3],g=b[2],j=c(a,b[1]),i=h(a,f);return[0,j,g,i,c(a,e),d]}return 0}function
x(a,b){if(b){var
c=b[2],d=b[5],e=b[4],f=b[3],h=x(a,b[1]),g=k(a,c,f);return[0,h,c,g,x(a,e),d]}return 0}function
B(a,b,c){var
e=b,f=c;for(;;){if(e){var
g=e[4],h=e[3],i=e[2],j=d(a,i,h,B(a,e[1],f)),e=g,f=j;continue}return f}}function
C(a,b){var
c=b;for(;;){if(c){var
g=c[4],h=c[1],d=k(a,c[2],c[3]);if(d){var
e=C(a,h);if(e){var
c=g;continue}var
f=e}else
var
f=d;return f}return 1}}function
D(a,b){var
c=b;for(;;){if(c){var
g=c[4],h=c[1],d=k(a,c[2],c[3]);if(d)var
e=d;else{var
f=D(a,h);if(!f){var
c=g;continue}var
e=f}return e}return 0}}function
E(a,b,c){if(c){var
d=c[4],e=c[3],g=c[2];return f(E(a,b,c[1]),g,e,d)}return r(a,b)}function
F(a,b,c){if(c){var
d=c[3],e=c[2],g=c[1];return f(g,e,d,F(a,b,c[4]))}return r(a,b)}function
g(a,b,c,d){if(a){if(d){var
h=d[5],i=a[5],j=d[4],k=d[3],l=d[2],m=d[1],n=a[4],o=a[3],p=a[2],q=a[1];return(h+2|0)<i?f(q,p,o,g(n,b,c,d)):(i+2|0)<h?f(g(a,b,c,m),l,k,j):e(a,b,c,d)}return F(b,c,a)}return E(b,c,d)}function
q(a,b){if(a){if(b){var
c=p(b),d=c[2],e=c[1];return g(a,e,d,v(b))}return a}return b}function
G(a,b,c,d){return c?g(a,b,c[1],d):q(a,d)}function
n(a,b){if(b){var
c=b[4],d=b[3],e=b[2],f=b[1],j=k(m[1],a,e);if(0===j)return[0,f,[0,d],c];if(0<=j){var
h=n(a,c),l=h[3],o=h[2];return[0,g(f,e,d,h[1]),o,l]}var
i=n(a,f),p=i[2],q=i[1];return[0,q,p,g(i[3],e,d,c)]}return hb}function
o(a,b,c){if(b){var
e=b[2],k=b[5],m=b[4],p=b[3],q=b[1];if(l(c)<=k){var
f=n(e,c),r=f[2],s=f[1],t=o(a,m,f[3]),u=d(a,e,[0,p],r);return G(o(a,q,s),e,u,t)}}else
if(!c)return 0;if(c){var
g=c[2],v=c[4],w=c[3],x=c[1],h=n(g,b),y=h[2],z=h[1],A=o(a,h[3],v),i=d(a,g,y,[0,w]);return G(o(a,z,x),g,i,A)}throw[0,j,hc]}function
y(a,b){if(b){var
c=b[3],d=b[2],h=b[4],e=y(a,b[1]),i=k(a,d,c),f=y(a,h);return i?g(e,d,c,f):q(e,f)}return 0}function
z(a,b){if(b){var
c=b[3],d=b[2],m=b[4],e=z(a,b[1]),f=e[2],h=e[1],p=k(a,d,c),i=z(a,m),j=i[2],l=i[1];if(p){var
n=q(f,j);return[0,g(h,d,c,l),n]}var
o=g(f,d,c,j);return[0,q(h,l),o]}return go}function
i(a,b){var
c=a,d=b;for(;;){if(c){var
e=[0,c[2],c[3],c[4],d],c=c[1],d=e;continue}return d}}function
L(a,b,c){var
r=i(c,0),e=i(b,0),d=r;for(;;){if(e){if(d){var
h=d[4],j=d[3],l=d[2],n=e[4],o=e[3],p=e[2],f=k(m[1],e[1],d[1]);if(0===f){var
g=k(a,p,l);if(0===g){var
q=i(j,h),e=i(o,n),d=q;continue}return g}return f}return 1}return d?-1:0}}function
M(a,b,c){var
s=i(c,0),e=i(b,0),d=s;for(;;){if(e){if(d){var
j=d[4],l=d[3],n=d[2],o=e[4],p=e[3],q=e[2],f=0===k(m[1],e[1],d[1])?1:0;if(f){var
g=k(a,q,n);if(g){var
r=i(l,j),e=i(p,o),d=r;continue}var
h=g}else
var
h=f;return h}return 0}return d?0:1}}function
b(a){if(a){var
c=a[1],d=b(a[4]);return(b(c)+1|0)+d|0}return 0}function
H(a,b){var
d=a,c=b;for(;;){if(c){var
e=c[3],f=c[2],g=c[1],d=[0,[0,f,e],H(d,c[4])],c=g;continue}return d}}return[0,N,a,J,u,r,w,o,L,M,A,B,C,D,y,z,b,function(a){return H(0,a)},p,K,p,n,I,c,x]}var
gq=[0,gp],gs=[0,gr];function
gt(a){return[0,0,0]}var
gv=[0,gu];function
gw(a){throw[0,gv]}function
dR(a){var
c=a[0+1];a[0+1]=gw;try{var
b=h(c,0);a[0+1]=b;md(a,aX)}catch(f){f=B(f);a[0+1]=function(a){throw f};throw f}return b}function
by(a){var
c=1<=a?a:1,b=a5<c?a5:c,d=C(b);return[0,d,0,b,d]}function
cs(a){return bx(a[1],0,a[2])}function
ct(a,b){var
c=[0,a[3]];for(;;){if(c[1]<(a[2]+b|0)){c[1]=2*c[1]|0;continue}if(a5<c[1])if((a[2]+b|0)<=a5)c[1]=a5;else
aE(gx);var
d=C(c[1]);a3(a[1],0,d,0,a[2]);a[1]=d;a[3]=c[1];return 0}}function
a6(a,b){var
c=a[2];if(a[3]<=c)ct(a,1);cP(a[1],c,b);a[2]=c+1|0;return 0}function
cu(a,b){var
c=n(b),d=a[2]+c|0;if(a[3]<d)ct(a,c);a3(b,0,a[1],a[2],c);a[2]=d;return 0}function
cW(a){return 0<=a?a:aE(p(gz,aJ(a)))}function
eq(a,b){return cW(a+b|0)}var
gA=1;function
dS(a){return eq(gA,a)}function
dT(a){return bx(a,0,n(a))}function
dt(a,b,c){var
d=p(gC,p(a,gB)),e=p(gD,p(aJ(b),d));return s(p(gE,p(a2(1,c),e)))}function
bl(a,b,c){return dt(dT(a),b,c)}function
bX(a){return s(p(gG,p(dT(a),gF)))}function
gH(d){function
b(a,b){var
e=a,c=b;for(;;){if(n(d)<=c)return[0,0,e];var
f=y(d,c);if(49<=f){if(!(58<=f))return[0,eC(bx(d,c,(n(d)-c|0)-1|0)),e]}else
if(45===f){var
e=1,c=c+1|0;continue}var
c=c+1|0;continue}}try{var
a=b(0,1)}catch(f){f=B(f);if(f[1]===bE)return dt(d,0,c0);throw f}return a}function
aC(g,b,c,d){function
i(a){if(9<(y(g,a)+b1|0)>>>0)return a;var
b=a+1|0;for(;;){var
c=y(g,b);if(48<=c){if(!(58<=c)){var
b=b+1|0;continue}}else
if(36===c)return b+1|0;return a}}var
k=i(b+1|0),f=by((c-k|0)+10|0);a6(f,37);var
a=k,e=a1(d);for(;;){if(a<=c){var
h=y(g,a);if(42===h){if(e){var
l=e[2];cu(f,aJ(e[1]));var
a=i(a+1|0),e=l;continue}throw[0,j,gI]}a6(f,h);var
a=a+1|0;continue}return cs(f)}}function
eZ(a,b,c,d,e){var
f=aC(b,c,d,e);if(78!==a)if(cZ!==a)return f;cP(f,n(f)-1|0,117);return f}function
fN(a){return function(d,b){var
k=n(d);function
l(a,b){var
m=40===a?41:e9,c=b;for(;;){if(k<=c)return bX(d);if(37===ad(d,c)){var
e=c+1|0;if(k<=e)return bX(d);var
g=ad(d,e),h=g-40|0;if(1<h>>>0){var
j=h-83|0;if(2<j>>>0)var
f=1;else
switch(j){case
0:var
i=0,f=0;break;case
1:var
f=1;break;default:var
i=1,f=0}if(f){var
c=e+1|0;continue}}else
var
i=0===h?0:1;if(i)return g===m?e+1|0:bl(d,b,g);var
c=l(g,e+1|0)+1|0;continue}var
c=c+1|0;continue}}return l(a,b)}}function
du(j,b,c){var
p=n(j)-1|0;function
v(a){var
m=a;a:for(;;){if(m<p){if(37===ad(j,m)){var
g=0,i=m+1|0;for(;;){if(p<i)var
f=bX(j);else{var
n=y(j,i);if(58<=n){if(95===n){var
g=1,i=i+1|0;continue}}else
if(32<=n)switch(n+fi|0){case
10:var
i=d(b,g,i,bs);continue;case
0:case
3:case
11:case
13:var
i=i+1|0;continue;case
1:case
2:case
4:case
5:case
6:case
7:case
8:case
9:case
12:case
15:break;default:var
i=i+1|0;continue}var
e=i;b:for(;;){if(p<e)var
f=bX(j);else{var
l=y(j,e);if(e_<=l)var
h=0;else
switch(l){case
40:var
f=v(d(b,g,e,l)),h=1;break;case
123:var
s=d(b,g,e,l),u=k(fN(l),j,s),o=s;for(;;){if(o<(u-2|0)){var
o=k(c,o,ad(j,o));continue}var
e=u-1|0;continue b}case
67:case
99:var
f=d(b,g,e,99),h=1;break;case
66:case
98:var
f=d(b,g,e,66),h=1;break;case
41:case
125:var
f=d(b,g,e,l),h=1;break;case
83:case
91:case
115:var
f=d(b,g,e,c0),h=1;break;case
97:case
114:case
116:var
f=d(b,g,e,l),h=1;break;case
76:case
108:case
110:var
t=e+1|0;if(p<t)var
f=d(b,g,e,bs),h=1;else{var
r=ad(j,t)+fq|0;if(32<r>>>0)var
q=1;else
switch(r){case
0:case
12:case
17:case
23:case
29:case
32:var
f=k(c,d(b,g,e,l),bs),h=1,q=0;break;default:var
q=1}if(q)var
f=d(b,g,e,bs),h=1}break;case
33:case
37:case
44:case
64:var
f=e+1|0,h=1;break;case
69:case
70:case
71:case
101:case
102:case
103:var
f=d(b,g,e,102),h=1;break;case
78:case
88:case
100:case
105:case
111:case
117:case
120:var
f=d(b,g,e,bs),h=1;break;default:var
h=0}if(!h)var
f=bl(j,e,l)}break}}var
m=f;continue a}}var
m=m+1|0;continue}return m}}v(0);return 0}function
eW(a){var
d=[0,0,0,0];function
b(a,b,c){var
f=41!==c?1:0,g=f?e9!==c?1:0:f;if(g){var
e=97===c?2:1;if(e8===c)d[3]=d[3]+1|0;if(a)d[2]=d[2]+e|0;else
d[1]=d[1]+e|0}return b+1|0}du(a,b,function(a,b){return a+1|0});return d[1]}function
fx(a,b,c){var
g=y(a,c);if(9<(g+b1|0)>>>0)return k(b,0,c);var
e=g+b1|0,d=c+1|0;for(;;){var
f=y(a,d);if(48<=f){if(!(58<=f)){var
e=(10*e|0)+(f+b1|0)|0,d=d+1|0;continue}}else
if(36===f)return 0===e?aE(gK):k(b,[0,cW(e-1|0)],d+1|0);return k(b,0,c)}}function
T(a,b){return a?b:dS(b)}function
e2(a,b){return a?a[1]:b}function
dv(az,b,c,d,e,f,g){var
D=h(b,g);function
_(a){return k(d,D,a)}function
ay(a,b,i,ax){var
r=n(i);function
B(g,b){var
o=b;for(;;){if(r<=o)return h(a,D);var
d=y(i,o);if(37===d){var
m=function(a,b){var
c=e2(a,b);return l(ax,c)[c+1]},aw=function(g,f,c,d){var
a=d;for(;;){var
af=y(i,a)+fi|0;if(!(25<af>>>0))switch(af){case
10:return fx(i,function(a,b){var
d=[0,m(a,f),c];return aw(g,T(a,f),d,b)},a+1|0);case
1:case
2:case
4:case
5:case
6:case
7:case
8:case
9:case
12:case
15:break;default:var
a=a+1|0;continue}var
l=y(i,a);if(!(124<=l))switch(l){case
33:h(e,D);return B(f,a+1|0);case
41:return q(f,gf,a+1|0);case
44:return q(f,gg,a+1|0);case
70:var
Z=m(g,f);if(0===c)var
ah=gj;else{var
Y=aC(i,o,a,c);if(70===l)cP(Y,n(Y)-1|0,103);var
ah=Y}var
ae=lB(Z);if(3===ae)var
X=Z<0?gM:gN;else
if(4<=ae)var
X=ge;else{var
O=cE(ah,Z),M=0,aK=n(O);for(;;){if(aK<=M)var
ac=p(O,gL);else{var
R=ad(O,M)-46|0,aA=23<R>>>0?55===R?1:0:21<(R-1|0)>>>0?1:0;if(!aA){var
M=M+1|0;continue}var
ac=O}var
X=ac;break}}return q(T(g,f),X,a+1|0);case
91:return bl(i,a,l);case
97:var
as=m(g,f),ar=dS(e2(g,f)),ao=m(0,ar),aT=a+1|0,aW=T(g,ar);if(az)_(k(as,0,ao));else
k(as,D,ao);return B(aW,aT);case
114:return bl(i,a,l);case
116:var
at=m(g,f),aU=a+1|0,aX=T(g,f);if(az)_(h(at,0));else
h(at,D);return B(aX,aU);case
37:case
64:return q(f,a2(1,l),a+1|0);case
83:case
115:var
v=m(g,f);if(c0===l)var
w=v;else{var
b=[0,0],$=n(v)-1|0,aD=0;if(!($<0)){var
I=aD;for(;;){var
u=y(v,I),aB=14<=u?34===u?1:92===u?1:0:11<=u?13<=u?1:0:8<=u?1:0,aG=aB?2:cI(u)?1:4;b[1]=b[1]+aG|0;var
aH=I+1|0;if($!==I){var
I=aH;continue}break}}if(b[1]===n(v))var
am=v;else{var
j=C(b[1]);b[1]=0;var
aa=n(v)-1|0,aE=0;if(!(aa<0)){var
G=aE;for(;;){var
t=y(v,G),H=t-34|0;if(58<H>>>0)if(fd<=H)var
K=1;else{switch(H+34|0){case
8:z(j,b[1],92);b[1]++;z(j,b[1],98);var
E=1;break;case
9:z(j,b[1],92);b[1]++;z(j,b[1],116);var
E=1;break;case
10:z(j,b[1],92);b[1]++;z(j,b[1],cZ);var
E=1;break;case
13:z(j,b[1],92);b[1]++;z(j,b[1],e8);var
E=1;break;default:var
K=1,E=0}if(E)var
K=0}else
var
K=56<(H-1|0)>>>0?(z(j,b[1],92),b[1]++,z(j,b[1],t),0):1;if(K)if(cI(t))z(j,b[1],t);else{z(j,b[1],92);b[1]++;z(j,b[1],48+(t/e6|0)|0);b[1]++;z(j,b[1],48+((t/10|0)%10|0)|0);b[1]++;z(j,b[1],48+(t%10|0)|0)}b[1]++;var
aF=G+1|0;if(aa!==G){var
G=aF;continue}break}}var
am=j}var
w=p(gl,p(am,gk))}if(a===(o+1|0))var
av=w;else{var
ab=gH(aC(i,o,a,c)),J=ab[1],A=n(w),aI=ab[2],V=0,aY=32;if(J===A)var
Q=w;else
if(J<=A)var
Q=bx(w,V,A);else{var
W=a2(J,aY);if(aI)a3(w,V,W,0,A);else
a3(w,V,W,J-A|0,A);var
Q=W}var
av=Q}return q(T(g,f),av,a+1|0);case
67:case
99:var
r=m(g,f);if(99===l)var
ag=a2(1,r);else{if(39===r)var
s=f8;else
if(92===r)var
s=f9;else{if(14<=r)var
x=0;else
switch(r){case
8:var
s=gc,x=1;break;case
9:var
s=f0,x=1;break;case
10:var
s=gP,x=1;break;case
13:var
s=gQ,x=1;break;default:var
x=0}if(!x)if(cI(r)){var
au=C(1);z(au,0,r);var
s=au}else{var
F=C(4);z(F,0,92);z(F,1,48+(r/e6|0)|0);z(F,2,48+((r/10|0)%10|0)|0);z(F,3,48+(r%10|0)|0);var
s=F}}var
ag=p(gi,p(s,gh))}return q(T(g,f),ag,a+1|0);case
66:case
98:var
aL=a+1|0,aM=m(g,f)?f_:f$;return q(T(g,f),aM,aL);case
40:case
123:var
P=m(g,f),ap=k(fN(l),i,a+1|0);if(123===l){var
L=by(n(P)),an=function(a,b){a6(L,b);return a+1|0};du(P,function(a,b,c){if(a)cu(L,gJ);else
a6(L,37);return an(b,c)},an);var
aJ=cs(L);return q(T(g,f),aJ,ap)}var
aq=T(g,f),aV=eq(eW(P),aq);return ay(function(a){return B(aV,ap)},aq,P,ax);case
76:case
108:case
110:var
ai=y(i,a+1|0)+fq|0;if(!(32<ai>>>0))switch(ai){case
0:case
12:case
17:case
23:case
29:case
32:var
N=a+1|0,aj=l-108|0;if(2<aj>>>0)var
S=0;else{switch(aj){case
0:var
aQ=m(g,f),al=bN(aC(i,o,N,c),aQ),U=1;break;case
1:var
S=0,U=0;break;default:var
aR=m(g,f),al=bN(aC(i,o,N,c),aR),U=1}if(U)var
ak=al,S=1}if(!S)var
aP=m(g,f),ak=lT(aC(i,o,N,c),aP);return q(T(g,f),ak,N+1|0)}var
aO=m(g,f),a0=bN(eZ(cZ,i,o,a,c),aO);return q(T(g,f),a0,a+1|0);case
69:case
71:case
101:case
102:case
103:var
aN=m(g,f),aZ=cE(aC(i,o,a,c),aN);return q(T(g,f),aZ,a+1|0);case
78:case
88:case
100:case
105:case
111:case
117:case
120:var
aS=m(g,f),a1=bN(eZ(l,i,o,a,c),aS);return q(T(g,f),a1,a+1|0)}return bl(i,a,l)}},f=o+1|0,j=0;return fx(i,function(a,b){return aw(a,g,j,b)},f)}k(c,D,d);var
o=o+1|0;continue}}function
q(a,b,c){_(b);return B(a,c)}return B(b,0)}var
o=cW(0);function
i(a,b){return ay(f,o,a,b)}var
j=eW(g);if(6<j>>>0){var
m=function(k,b){if(j<=k){var
f=N(j,0),h=function(a,b){var
c=(j-a|0)-1|0;return l(f,c)[c+1]=b},c=0,a=b;for(;;){if(a){var
d=a[2],e=a[1];if(d){h(c,e);var
c=c+1|0,a=d;continue}h(c,e)}return i(g,f)}}return function(a){return m(k+1|0,[0,a,b])}};return m(0,0)}switch(j){case
0:return i(g,[0]);case
1:return function(a){var
b=N(1,0);l(b,0)[0+1]=a;return i(g,b)};case
2:return function(a,b){var
c=N(2,0);l(c,0)[0+1]=a;l(c,1)[1+1]=b;return i(g,c)};case
3:return function(a,b,c){var
d=N(3,0);l(d,0)[0+1]=a;l(d,1)[1+1]=b;l(d,2)[2+1]=c;return i(g,d)};case
4:return function(a,b,c,d){var
e=N(4,0);l(e,0)[0+1]=a;l(e,1)[1+1]=b;l(e,2)[2+1]=c;l(e,3)[3+1]=d;return i(g,e)};case
5:return function(a,b,c,d,e){var
f=N(5,0);l(f,0)[0+1]=a;l(f,1)[1+1]=b;l(f,2)[2+1]=c;l(f,3)[3+1]=d;l(f,4)[4+1]=e;return i(g,f)};default:return function(a,b,c,d,e,f){var
h=N(6,0);l(h,0)[0+1]=a;l(h,1)[1+1]=b;l(h,2)[2+1]=c;l(h,3)[3+1]=d;l(h,4)[4+1]=e;l(h,5)[5+1]=f;return i(g,h)}}}function
cv(e){function
d(a){return 0}function
b(a){return e}var
c=0;return function(a){return dv(c,b,f2,fs,cl,d,a)}}function
gm(a){return by(2*n(a)|0)}function
aa(a){function
b(a){var
b=cs(a);a[2]=0;return b}return dv(1,gm,a6,cu,function(a){return 0},b,a)}var
cw=[0,0];function
cy(a,b){var
c=a[b+1];if(mc(c)){if(bR(c)===fg)return h(aa(gn),c);if(bR(c)===253){var
e=cE(gb,c),d=0,g=n(e);for(;;){if(g<=d)return p(e,ga);var
f=ad(e,d),i=48<=f?58<=f?0:1:45===f?1:0;if(i){var
d=d+1|0;continue}return e}}return gO}return h(aa(gd),c)}function
dw(a,b){if(a.length-1<=b)return hH;var
c=dw(a,b+1|0),d=cy(a,b);return k(aa(hI),d,c)}function
hJ(a){var
b=a.length-1;if(2<b>>>0){var
c=dw(a,2),d=cy(a,1);return k(aa(hK),d,c)}switch(b){case
0:return hL;case
1:return hM;default:var
e=cy(a,1);return h(aa(hN),e)}}function
cz(b){function
a(a){var
c=a;for(;;){if(c){var
m=c[2],n=c[1];try{var
o=h(n,b),d=o}catch(f){var
d=0}if(d)return d[1];var
c=m;continue}if(b[1]===dx)return hO;if(b[1]===dy)return hP;if(b[1]===dz){var
e=b[2],i=e[3],q=e[2],r=e[1];return bK(aa(cx),r,q,i,i+5|0,hQ)}if(b[1]===j){var
f=b[2],k=f[3],s=f[2],t=f[1];return bK(aa(cx),t,s,k,k+6|0,hR)}if(b[1]===dA){var
g=b[2],l=g[3],u=g[2],v=g[1];return bK(aa(cx),v,u,l,l+6|0,hS)}var
w=b[0+1][0+1];return p(w,hJ(b))}}return a(cw[1])}function
dB(a){var
i=lC(lI(0));if(i){var
d=i[1],f=d.length-1-1|0,q=0;if(!(f<0)){var
b=q;for(;;){if(eK(l(d,b)[b+1],hZ)){var
c=l(d,b)[b+1],j=0===c[0]?c[1]:c[1],e=j?0===b?hT:hW:0===b?hX:hY;if(0===c[0])var
m=c[5],n=c[4],o=c[3],p=c[2],g=bK(aa(hU),e,p,o,n,m);else
var
g=h(aa(hV),e);k(cv(a),h0,g)}var
r=b+1|0;if(f!==b){var
b=r;continue}break}}return 0}return h(cv(a),h1)}function
dC(a){cw[1]=[0,a,cw[1]];return 0}function
e3(a){var
d=[0,N(55,0),0],i=0===a.length-1?[0,0]:a,h=i.length-1,b=0;for(;;){l(d[1],b)[b+1]=b;var
v=b+1|0;if(54!==b){var
b=v;continue}var
g=[0,h2],q=0,w=55,r=ez(55,h)?w:h,j=54+r|0;if(!(j<0)){var
c=q;for(;;){var
f=c%55|0,k=eH(c,h),x=l(i,k)[k+1],s=g[1],m=p(s,aJ(x));g[1]=l_(m,0,n(m));var
e=g[1],o=((ad(e,0)+(ad(e,1)<<8)|0)+(ad(e,2)<<16)|0)+(ad(e,3)<<24)|0,t=(l(d[1],f)[f+1]^o)&bZ;l(d[1],f)[f+1]=t;var
u=c+1|0;if(j!==c){var
c=u;continue}break}}d[2]=0;return d}}function
ev(a){a[2]=(a[2]+1|0)%55|0;var
b=a[2],e=l(a[1],b)[b+1],c=(a[2]+24|0)%55|0,f=(l(a[1],c)[c+1]+(e^(e>>>25|0)&31)|0)&bZ,d=a[2];l(a[1],d)[d+1]=f;return f}32===cp;try{var
ld=eS(lc),dE=ld}catch(f){f=B(f);if(f[1]!==t)throw f;try{var
lb=eS(la),dD=lb}catch(f){f=B(f);if(f[1]!==t)throw f;var
dD=h4}var
dE=dD}var
h5=gX(dE,82),bz=[b0,function(a){return e3(mp(0))}];function
h6(a,b){var
f=a?a[1]:h5,c=16;for(;;){if(!(b<=c))if(!(dO<(c*2|0))){var
c=c*2|0;continue}if(f)var
d=bR(bz),g=aX===d?bz[1]:b0===d?dR(bz):bz,e=ev(g);else
var
e=0;return[0,0,N(c,0),e,c]}}function
er(a,b){var
c=[0,[0,a,0]],d=b[1];if(d){var
e=d[1];b[1]=c;e[2]=c;return 0}b[1]=c;b[2]=c;return 0}var
cA=[0,hm];function
dF(a){var
b=a[2];if(b){var
c=b[1],d=c[2],e=c[1];a[2]=d;if(0===d)a[1]=0;return e}throw[0,cA]}function
c6(a,b){a[13]=a[13]+b[3]|0;return er(b,a[27])}var
ft=1000000010;function
cB(a,b){return d(a[17],b,0,n(b))}function
c7(a){return h(a[19],0)}function
dG(a,b){return h(a[20],b)}function
ay(a,b,c){c7(a);a[11]=1;var
e=(a[6]-c|0)+b|0,d=a[8],f=l6(d,e)?d:e;a[10]=f;a[9]=a[6]-a[10]|0;return dG(a,a[10])}function
dH(a,b){return ay(a,0,b)}function
aQ(a,b){a[9]=a[9]-b|0;return dG(a,b)}function
hn(a){var
b=a[2];if(b){var
c=b[1],d=c[2],e=c[1],f=a[9]<d?1:0;if(f){if(0!==e)return 5<=e?0:dH(a,d);var
g=0}else
var
g=f;return g}return c7(a)}function
ho(a){var
b=dF(a[27]),c=b[1];a[12]=a[12]-b[3]|0;a[9]=a[9]+c|0;return 0}function
hp(a,b,c){if(typeof
c==="number")switch(c){case
0:var
l=a[3];if(l){var
m=l[1][1],y=function(a,b){if(b){var
c=b[1],d=b[2];return l7(a,c)?[0,a,b]:[0,c,y(a,d)]}return[0,a,0]};m[1]=y(a[6]-a[9]|0,m[1]);return 0}return 0;case
1:var
n=a[2];return n?(a[2]=n[2],0):0;case
2:var
o=a[3];return o?(a[3]=o[2],0):0;case
3:var
p=a[2];return p?dH(a,p[1][2]):c7(a);case
4:var
q=a[10]!==(a[6]-a[9]|0)?1:0;return q?ho(a):q;default:var
g=a[5];if(g){var
C=g[2];cB(a,h(a[24],g[1]));a[5]=C;return 0}return 0}else
switch(c[0]){case
0:var
D=c[1];a[9]=a[9]-b|0;cB(a,D);a[11]=0;return 0;case
1:var
d=c[2],f=c[1],r=a[2];if(r){var
s=r[1],e=s[2];switch(s[1]){case
0:return aQ(a,f);case
1:return ay(a,d,e);case
2:return ay(a,d,e);case
3:return a[9]<b?ay(a,d,e):aQ(a,f);case
4:return a[11]?aQ(a,f):a[9]<b?ay(a,d,e):((a[6]-e|0)+d|0)<a[10]?ay(a,d,e):aQ(a,f);default:return aQ(a,f)}}return 0;case
2:var
i=a[6]-a[9]|0,u=a[3],E=c[2],F=c[1];if(u){var
v=u[1][1],K=function(a,b){var
c=b;for(;;){if(c){var
d=c[1],e=c[2];if(ez(d,a))return d;var
c=e;continue}throw[0,t]}},w=v[1];if(w){var
G=w[1];try{var
H=K(i,v[1]),A=H}catch(f){f=B(f);if(f[1]!==t)throw f;var
A=G}var
j=A}else
var
j=i;var
z=j-i|0;return 0<=z?aQ(a,z+F|0):ay(a,j+E|0,a[6])}return 0;case
3:var
x=c[2],I=c[1];if(a[8]<(a[6]-a[9]|0))hn(a);var
L=a[9]-I|0,J=1===x?1:a[9]<b?x:5;a[2]=[0,[0,J,L],a[2]];return 0;case
4:a[3]=[0,c[1],a[3]];return 0;default:var
k=c[1];cB(a,h(a[23],k));a[5]=[0,k,a[5]];return 0}}function
hq(a){for(;;){var
d=a[27][2];if(d){var
b=d[1][1],c=b[1],e=c<0?1:0,g=b[3],h=b[2],i=e?(a[13]-a[12]|0)<a[9]?1:0:e,f=1-i;if(f){dF(a[27]);var
j=0<=c?c:ft;hp(a,j,h);a[12]=g+a[12]|0;continue}return f}throw[0,cA]}}function
es(a){try{var
b=hq(a)}catch(f){f=B(f);if(f[1]===cA)return 0;throw f}return b}function
bY(a,b,c){return[0,a,b,c]}var
fy=[0,[0,-1,bY(-1,hr,0)],0];function
dn(a){a[1]=fy;return 0}function
dp(a,b){var
d=a[1];if(d){var
e=d[1],c=e[2],f=c[1],g=d[2],h=c[2];if(e[1]<a[12])return dn(a);if(typeof
h!=="number")switch(h[0]){case
3:var
i=1-b,k=i?(c[1]=a[13]+f|0,a[1]=g,0):i;return k;case
1:case
2:var
j=b?(c[1]=a[13]+f|0,a[1]=g,0):b;return j}return 0}return 0}var
dq=a2(80,32);function
ht(a){return p(hv,p(a,hu))}function
hw(a){return p(hy,p(a,hx))}function
hz(a){return 0}function
hA(a){return 0}function
e4(a,b){function
h(a){return 0}var
e=[0,0,0];function
g(a){return 0}var
f=bY(-1,hB,0);er(f,e);var
c=[0,[0,[0,1,f],fy],0,0,0,0,78,10,68,78,0,1,1,1,1,e5,hC,a,b,g,h,0,0,ht,hw,hz,hA,e];c[19]=function(a){return d(c[17],hs,0,1)};c[20]=function(a){var
b=a;for(;;){var
e=0<b?1:0;if(e){if(80<b){d(c[17],dq,0,80);var
b=b-80|0;continue}return d(c[17],dq,0,b)}return e}};return c}function
e1(d){function
a(a){return cl(d)}return e4(function(a,b,c){if(0<=b)if(0<=c)if(!((n(a)-c|0)<b))return cL(d,a,b,c);return s(f1)},a)}function
mC(d){function
a(a){return 0}return e4(function(a,b,c){var
e=b<0?1:0;if(e)var
f=e;else
var
h=c<0?1:0,f=h||((n(a)-c|0)<b?1:0);if(f)s(gy);var
g=d[2]+c|0;if(d[3]<g)ct(d,c);a3(a,b,d[1],d[2],c);d[2]=g;return 0},a)}var
mW=by(c3),b=e1(mX);e1(aH);mC(mW);ly(function(a){for(;;){if(1<b[14]){if(1<b[14]){if(b[14]<b[15]){c6(b,[0,0,1,0]);dp(b,1);dp(b,0)}b[14]=b[14]-1|0}continue}b[13]=ft;es(b);b[12]=1;b[13]=1;var
c=b[27];c[1]=0;c[2]=0;dn(b);b[2]=0;b[3]=0;b[4]=0;b[5]=0;b[10]=0;b[14]=0;b[9]=b[6];b[14]=b[14]+1|0;var
g=3,i=0;if(b[14]<b[15]){var
f=bY(-b[13]|0,[3,i,g],0);c6(b,f);b[1]=[0,[0,b[13],f],b[1]]}else
if(b[14]===b[15]){var
d=b[16],e=n(d);c6(b,bY(e,[0,d],e));es(b)}return h(b[18],0)}});function
cC(a,b){return mi(a,b[0+1])}function
mz(a){return 0}function
mU(a,b){return h(b,a)}function
mF(a,b){return h(b,a)}function
e0(e,b,c){var
d=[0,b];h(c,function(a){d[1]=k(e,d[1],a);return 0});return d[1]}function
mK(d,b,c){return h(b,function(a){return h(c,h(d,a))})}function
cV(d,b,c){return h(b,function(a){return k(d,a,c)})}function
fQ(a,b,c){var
f=a?a[1]:function(a,b){return lE(a,b)},e=[0,0],d=[0,0];return h(b,function(a){if(e[1])if(k(f,d[1],a))return 0;e[1]=1;d[1]=a;return h(c,a)})}function
fP(a){var
b=0;return a1(e0(function(a,b){return[0,b,a]},b,a))}function
c4(a,b){return P(b,a)}var
hF=500;function
dr(a,b){function
d(a){return a}var
c=b;for(;;){if(c){var
e=c[2],f=h(a,c[1]),d=function(c,b){return function(a){function
d(a,b,c){if(b){if(0===a)return dJ(a1(b),c);var
e=b[1];return[0,e,d(a-1|0,b[2],c)]}return c}return c(d(hF,b,a))}}(d,f),c=e;continue}return d(0)}}function
ds(a){return a?a[1]:s(he)}function
hf(a,b,c){var
d=a?a[1]:function(a){return 1};try{var
e=[0,h(b,c)]}catch(f){f=B(f);if(h(d,f))return 0;throw f}return e}function
aR(a,b){return h(b,a)}function
dI(a,b,c){return h(a,h(b,c))}var
aN=cr([0,co]),fY=[0,hg],hh=aN[1],hi=aN[3];function
mA(a,b){try{var
c=k(aN[22],a,b)}catch(f){f=B(f);if(f[1]===t)throw[0,fY,a];throw f}return c}var
hj=aN[1];function
hk(a,b){return d(aN[4],b[1],b[2],a)}var
et=function(a){return aO(hk,hj,a)}([0,[0,hG,fj],[0,[0,hl,2.71828182845904509],0]]);function
d5(a){switch(a){case
0:return function(a,b){return a+b};case
1:return function(a,b){return a-b};case
2:return function(a,b){return a*b};case
3:return function(a,b){return a/b};default:return function(a,b){return Math.pow(a,b)}}}function
d6(a){return a?a[1]:function(a){return-a}}function
a7(a,b){switch(b[0]){case
0:return b[1];case
1:var
c=b[2],d=b[1],e=a7(a,b[3]),f=a7(a,d);return k(d5(c),f,e);case
2:var
g=b[1],i=a7(a,b[2]);return h(d6(g),i);default:return h(a,b[1])}}function
a8(a,b){switch(b[0]){case
0:return[0,b[1]];case
1:var
c=b[2],d=b[1],e=a8(a,b[3]);return[1,a8(a,d),c,e];case
2:var
f=b[1];return[2,f,a8(a,b[2])];default:return h(a,b[1])}}function
d7(a,b,c,d,e){var
k=a,j=b,i=c,g=d,f=e;for(;;){var
l=k?k[1]:function(a){return 0},m=j?j[1]:function(a){return 0},n=i?i[1]:function(a){return 0},o=g?g[1]:function(a){return 0};switch(f[0]){case
0:return h(m,f[1]);case
1:var
p=f[3],q=f[1];h(o,f[2]);d7([0,l],[0,m],[0,n],[0,o],q);var
k=[0,l],j=[0,m],i=[0,n],g=[0,o],f=p;continue;case
2:var
r=f[2];h(n,f[1]);var
k=[0,l],j=[0,m],i=[0,n],g=[0,o],f=r;continue;default:return h(l,f[1])}}}function
d8(a,b){return d7([0,b],0,0,0,a)}function
a9(a,b){switch(b[0]){case
0:return[0,b[1]];case
1:var
f=b[2],l=b[3],d=a9(a,b[1]),c=a9(a,l);if(0===d[0])if(0===c[0]){var
m=c[1],n=d[1];return[0,k(d5(f),n,m)]}return[1,d,f,c];case
2:var
g=b[1],e=a9(a,b[2]);if(0===e[0]){var
o=e[1];return[0,h(d6(g),o)]}return[2,g,e];default:var
i=b[1],j=h(a,i);return j?[0,j[1]]:[3,i]}}var
L=cr([0,co]);function
d9(e,b,c){return aP(function(a,b){var
d=b[2],c=k(e,a,b[1]);return[0,c[1],[0,c[2],d]]},b,[0,c,0])}function
hd(a){try{var
b=[0,h(a,0)]}catch(f){return 0}return b}function
d_(a,b){return fP(h(a,function(a){return c4(b,a)}))}var
iJ=[0,0,L[1]];function
cd(a,b){if(k(L[3],a,b[2]))return b;var
c=d(L[4],a,b[1],b[2]);return[0,b[1]+1|0,c]}function
d$(a,b){return aO(function(a,b){return cd(b[1],a)},a,b)}function
iL(a,b){var
c=cd(b[1],a);return d$(c,b[3])}function
iM(a,b){return cd(b[1],a)}var
ap=[0,[0,iP]];function
iO(f){function
j(d,b){var
a=u(function(a){var
b=a[1],c=cn(a[2]);return[0,k(L[22],b,d[2]),c]},b);return h(f[6],a)}function
b(c,b){function
a(a){var
b=a[2];return[0,k(L[22],a[1],c[2]),b]}return k(f[2],a,b)}function
m(a){var
b=a[2],c=N(h(L[16],b),iK);function
d(a,b){return l(c,b)[b+1]=a}k(L[10],d,b);function
e(a){var
b=a[1],d=a[2];return[0,l(c,b)[b+1],d]}return h(f[2],e)}function
n(e,b,c){var
d=N(e[1],0);P(function(a){var
g=cn(a[2]),c=k(L[22],a[1],e[2]),j=a[3],i=u(function(a){var
c=a[2],d=h(b,a[1]);return[0,d,cn(u(function(a){var
b=a9(function(a){try{var
b=[0,k(aN[22],a,et)]}catch(f){f=B(f);if(f[1]===t)return 0;throw f}return b},a),c=a8(function(a){var
b=0,f=g.length-1;for(;;){if(b===f)var
c=0;else{var
d=l(g,b)[b+1],e=cO(a,d)?[0,[0,b,d]]:0;if(!e){var
b=b+1|0;continue}var
c=e}return[3,ds(c)[1]]}},b);return function(b){return a7(function(a){return b[a+1]},c)}},c))]},j),m=[0,h(f[6],i)];return l(d,c)[c+1]=m},c);return d}function
o(a,b){return n(a,function(a){return a},b)}function
p(c,b){return n(c,function(a){return k(L[22],a,c[2])},b)}function
q(a){var
c=a[4],d=a[3],b=aO(iM,aO(iL,d$(iJ,a[2]),d),c),e=a[2],f=j(b,u(function(a){var
b=a[2],c=a[1];return[0,c,u(function(a){return a7(function(a){return mA(a,hh)},a)},b)]},e)),g=p(b,a[3]);return[0,b,f,g,o(b,a[4])]}function
g(e,b){return cm(function(a){if(a){var
b=h(f[10],a[1]),c=function(a){var
b=a[2];return[0,h(e,a[1]),b]},d=k(f[2],c,b);return[0,h(f[9],d)]}return 0},b)}function
r(d,b){function
c(a){var
b=a[2],c=a[1];return[0,c,cm(function(a){return h(a,d)},b)]}var
a=h(f[10],b);return k(f[2],c,a)}function
y(c,b){function
d(a){return k(a[1],a[2],c)}var
a=h(f[10],b);return k(f[4],d,a)}function
z(e,b,c){function
g(a,b){return d(b[1],b[2],a,e)}var
a=h(f[10],b);return d(f[5],g,c,a)}function
e(e,b){var
d=cm(function(a){return a?a[1]:f[8]},b);return function(a){var
b=a[1],c=a[2];return k(e,c,l(d,b)[b+1])}}function
i(a,b){var
c=e(y,a);return k(f[4],c,b)}function
s(g,b,c){function
a(a,b){return k(e(z,g),b,a)}return d(f[5],a,b,c)}function
v(a,b){var
c=e(r,a);return k(f[3],c,b)}function
w(a,b,c){var
g=a?a[1]:1;function
i(a){var
c=a[1],e=a[2],d=l(b,c)[c+1];return d?r(e,d[1]):h(f[1],a)}if(g<0)aE(iN);var
e=g,d=c;for(;;){if(0===e)return d;var
e=e-1|0,d=k(f[3],i,d);continue}}function
c(a,b){var
c=q(b),e=c[4],g=c[3],i=c[1],j=w([0,a],g,h(f[10],c[2]));return function(a){return d(a,i,e,j)}}function
x(a,b){function
d(a,b,c){return h(m(a),c)}return h(c(a,b),d)}function
A(a,b){function
d(a,b,c){return v(b,c)}return h(c(a,b),d)}function
a(a,b){function
d(a,b,c,d,e){if(d){var
j=h(f[9],c);return function(a){var
c=h(f[10],j);return i(g(e,b),c)}}return function(a){return i(g(e,b),c)}}return h(c(a,b),d)}return[0,A,p,o,j,q,b,m,g,w,v,x,i,a,function(a,b){function
d(a,b,c,d,e){if(d){var
i=h(f[9],c);return function(a){var
c=h(f[10],i);return s(g(e,b),a,c)}}return function(a){return s(g(e,b),a,c)}}return h(c(a,b),d)}]}function
bk(a,b,c){var
s=c[1],t=s[1],p=t[1],k=p[2],e=[0,p[1],k,[0,p[3],t[3],s[3],c[3]]];if(5<=k){if(15===k)return e[3]}else
if(2<(k-1|0)>>>0){if(-1===b[6])throw[0,j,iU];var
l=b[3];if(typeof
l==="number"){if(11===l){var
g=e[1],h=e[2],n=[0,e[3],0];for(;;){if(4===h){if(-1===b[6])throw[0,j,iS];var
r=b[3];if(typeof
r==="number")if(11===r)return n;if(-1===b[6])throw[0,j,iT];b[6]=-1;return a<50?i(1+a,b,g,h):f(i,[0,b,g,h])}if(0===h){var
v=g[2],w=[0,g[3],n],g=g[1],h=v,n=w;continue}return a<50?o(1+a,0):f(o,[0,0])}}}else
if(1===l[0]){var
d=[0,e,0,l[1]],u=m(b);if(typeof
u==="number")if(9===u){var
q=m(b);if(typeof
q==="number")if(14<=q)switch(q+c1|0){case
0:return a<50?a_(1+a,b,d,3):f(a_,[0,b,d,3]);case
1:break;default:return a<50?a$(1+a,b,d,3):f(a$,[0,b,d,3])}if(-1===b[6])throw[0,j,jt];b[6]=-1;return a<50?i(1+a,b,d,3):f(i,[0,b,d,3])}if(-1===b[6])throw[0,j,ju];b[6]=-1;return a<50?i(1+a,b,d[1],d[2]):f(i,[0,b,d[1],d[2]])}if(-1===b[6])throw[0,j,iV];b[6]=-1;return a<50?i(1+a,b,e,0):f(i,[0,b,e,0])}return a<50?o(1+a,0):f(o,[0,0])}function
aw(a,b,c,d){var
l=c,g=d,k=0;for(;;){var
e=[0,l,g,k];if(!(11<=g))switch(g){case
1:if(-1===b[6])throw[0,j,iW];var
n=b[3];if(typeof
n==="number")if(3===n){m(b);return a<50?bk(1+a,b,e):f(bk,[0,b,e])}if(-1===b[6])throw[0,j,iX];b[6]=-1;return a<50?i(1+a,b,e[1],e[2]):f(i,[0,b,e[1],e[2]]);case
5:var
h=e[1],l=h[1],g=h[2],k=[0,h[3],e[3]];continue;case
10:if(-1===b[6])throw[0,j,iY];var
p=b[3];if(typeof
p==="number")if(3===p)return a<50?bk(1+a,b,e):f(bk,[0,b,e]);if(-1===b[6])throw[0,j,iZ];b[6]=-1;return a<50?i(1+a,b,e[1],e[2]):f(i,[0,b,e[1],e[2]])}return a<50?o(1+a,0):f(o,[0,0])}}function
av(a,b,c,d){var
e=[0,c,d],g=m(b);if(typeof
g==="number")switch(g){case
0:return a<50?J(1+a,b,e,9):f(J,[0,b,e,9]);case
5:return a<50?I(1+a,b,e,9):f(I,[0,b,e,9]);case
6:return a<50?H(1+a,b,e,9):f(H,[0,b,e,9]);case
7:return a<50?F(1+a,b,e,9):f(F,[0,b,e,9]);case
13:return a<50?D(1+a,b,e,9):f(D,[0,b,e,9])}else
switch(g[0]){case
0:return a<50?G(1+a,b,e,9,g[1]):f(G,[0,b,e,9,g[1]]);case
1:return a<50?E(1+a,b,e,9,g[1]):f(E,[0,b,e,9,g[1]])}if(-1===b[6])throw[0,j,i0];b[6]=-1;return a<50?i(1+a,b,e,9):f(i,[0,b,e,9])}function
bj(a,b,c,d){var
k=c[1],e=[0,k[1],k[2],[0,c[3],d]];if(-1===b[6])throw[0,j,i3];var
g=b[3];if(typeof
g==="number"){if(11===g)var
h=1;else
if(14<=g)switch(g+c1|0){case
0:return a<50?a_(1+a,b,e,17):f(a_,[0,b,e,17]);case
1:var
h=0;break;default:var
h=1}else
var
h=0;if(h)return a<50?a$(1+a,b,e,17):f(a$,[0,b,e,17])}if(-1===b[6])throw[0,j,i4];b[6]=-1;return a<50?i(1+a,b,e,17):f(i,[0,b,e,17])}function
au(a,b,c,d){var
e=c,l=d,h=0;for(;;){var
k=l+fd|0;if(1<k>>>0){if(-12===k){var
m=e[3],n=e[1],g=[0,n[1],n[2],[0,m[1],m[2],h]];if(-1===b[6])throw[0,j,i1];var
p=b[3];if(typeof
p==="number"){var
q=p-1|0;if(!(2<q>>>0))switch(q){case
0:return a<50?av(1+a,b,g,5):f(av,[0,b,g,5]);case
1:break;default:return a<50?aw(1+a,b,g,5):f(aw,[0,b,g,5])}}if(-1===b[6])throw[0,j,i2];b[6]=-1;return a<50?i(1+a,b,g,5):f(i,[0,b,g,5])}return a<50?o(1+a,0):f(o,[0,0])}if(0===k){var
r=e[2],s=[0,e[3],h],e=e[1],l=r,h=s;continue}return a<50?bj(1+a,b,e,h):f(bj,[0,b,e,h])}}function
bi(a,b,c){var
d=m(b);if(typeof
d==="number")switch(d){case
7:return a<50?x(1+a,b,c,33):f(x,[0,b,c,33]);case
8:return a<50?w(1+a,b,c,33):f(w,[0,b,c,33])}else
switch(d[0]){case
1:return a<50?r(1+a,b,c,33,d[1]):f(r,[0,b,c,33,d[1]]);case
2:return a<50?v(1+a,b,c,33,d[1]):f(v,[0,b,c,33,d[1]]);case
3:return a<50?q(1+a,b,c,33,d[1]):f(q,[0,b,c,33,d[1]])}if(-1===b[6])throw[0,j,ik];b[6]=-1;return a<50?i(1+a,b,c,33):f(i,[0,b,c,33])}function
bh(a,b,c,d){var
e=[0,c[1],c[2],[0,c[3],d]];if(-1===b[6])throw[0,j,il];var
h=b[3];if(typeof
h==="number")if(10===h){var
g=m(b);if(typeof
g==="number")switch(g){case
0:return a<50?J(1+a,b,e,8):f(J,[0,b,e,8]);case
5:return a<50?I(1+a,b,e,8):f(I,[0,b,e,8]);case
6:return a<50?H(1+a,b,e,8):f(H,[0,b,e,8]);case
7:return a<50?F(1+a,b,e,8):f(F,[0,b,e,8]);case
13:return a<50?D(1+a,b,e,8):f(D,[0,b,e,8]);case
1:case
3:return a<50?au(1+a,b,e,8):f(au,[0,b,e,8])}else
switch(g[0]){case
0:return a<50?G(1+a,b,e,8,g[1]):f(G,[0,b,e,8,g[1]]);case
1:return a<50?E(1+a,b,e,8,g[1]):f(E,[0,b,e,8,g[1]])}if(-1===b[6])throw[0,j,im];b[6]=-1;return a<50?i(1+a,b,e,8):f(i,[0,b,e,8])}if(-1===b[6])throw[0,j,io];b[6]=-1;return a<50?i(1+a,b,e[1],e[2]):f(i,[0,b,e[1],e[2]])}function
bg(a,b,c,d,e){if(-1===b[6])throw[0,j,ip];var
g=b[3];if(typeof
g==="number")if(2===g){m(b);return a<50?bh(1+a,b,c,e):f(bh,[0,b,c,e])}if(-1===b[6])throw[0,j,iq];b[6]=-1;return a<50?i(1+a,b,c,d):f(i,[0,b,c,d])}function
bf(a,b,c,d){var
m=c[2],e=[0,c[1],m,[0,c[3],d]];if(20<=m)var
n=22<=m?0:1;else
if(8<=m)switch(m-8|0){case
0:var
n=1;break;case
3:case
4:if(-1===b[6])throw[0,j,iv];var
k=b[3];if(typeof
k==="number")switch(k){case
0:return a<50?J(1+a,b,e,11):f(J,[0,b,e,11]);case
5:return a<50?I(1+a,b,e,11):f(I,[0,b,e,11]);case
6:return a<50?H(1+a,b,e,11):f(H,[0,b,e,11]);case
7:return a<50?F(1+a,b,e,11):f(F,[0,b,e,11]);case
13:return a<50?D(1+a,b,e,11):f(D,[0,b,e,11]);case
1:case
3:var
l=e[1],q=e[2],p=[0,e[3],0];for(;;){if(11===q){var
w=l[2],x=[0,l[3],p],l=l[1],q=w,p=x;continue}if(12===q){var
r=l[2],g=[0,l[1],r,p];if(2===r){if(-1===b[6])throw[0,j,i5];var
s=b[3];if(typeof
s==="number"){var
t=s-1|0;if(!(2<t>>>0))switch(t){case
0:return a<50?av(1+a,b,g,1):f(av,[0,b,g,1]);case
1:break;default:return a<50?aw(1+a,b,g,1):f(aw,[0,b,g,1])}}if(-1===b[6])throw[0,j,i6];b[6]=-1;return a<50?i(1+a,b,g,1):f(i,[0,b,g,1])}if(13===r){if(-1===b[6])throw[0,j,i7];var
u=b[3];if(typeof
u==="number"){var
v=u-1|0;if(!(2<v>>>0))switch(v){case
0:return a<50?av(1+a,b,g,10):f(av,[0,b,g,10]);case
1:break;default:return a<50?aw(1+a,b,g,10):f(aw,[0,b,g,10])}}if(-1===b[6])throw[0,j,i8];b[6]=-1;return a<50?i(1+a,b,g,10):f(i,[0,b,g,10])}return a<50?o(1+a,0):f(o,[0,0])}return a<50?o(1+a,0):f(o,[0,0])}}else
switch(k[0]){case
0:return a<50?G(1+a,b,e,11,k[1]):f(G,[0,b,e,11,k[1]]);case
1:return a<50?E(1+a,b,e,11,k[1]):f(E,[0,b,e,11,k[1]])}if(-1===b[6])throw[0,j,iw];b[6]=-1;return a<50?i(1+a,b,e,11):f(i,[0,b,e,11]);default:var
n=0}else
var
n=0;if(n){if(-1===b[6])throw[0,j,it];var
h=b[3];if(typeof
h==="number")switch(h){case
0:return a<50?J(1+a,b,e,20):f(J,[0,b,e,20]);case
5:return a<50?I(1+a,b,e,20):f(I,[0,b,e,20]);case
6:return a<50?H(1+a,b,e,20):f(H,[0,b,e,20]);case
7:return a<50?F(1+a,b,e,20):f(F,[0,b,e,20]);case
13:return a<50?D(1+a,b,e,20):f(D,[0,b,e,20]);case
1:case
3:case
11:case
14:case
16:return a<50?au(1+a,b,e,20):f(au,[0,b,e,20])}else
switch(h[0]){case
0:return a<50?G(1+a,b,e,20,h[1]):f(G,[0,b,e,20,h[1]]);case
1:return a<50?E(1+a,b,e,20,h[1]):f(E,[0,b,e,20,h[1]])}if(-1===b[6])throw[0,j,iu];b[6]=-1;return a<50?i(1+a,b,e,20):f(i,[0,b,e,20])}return a<50?o(1+a,0):f(o,[0,0])}function
be(a,b,c,d,e){if(-1===b[6])throw[0,j,ix];var
g=b[3];if(typeof
g==="number")if(2===g){m(b);return a<50?bf(1+a,b,c,e):f(bf,[0,b,c,e])}if(-1===b[6])throw[0,j,iy];b[6]=-1;return a<50?i(1+a,b,c,d):f(i,[0,b,c,d])}function
bd(a,b,c,d){var
g=[0,c[1],c[2],[0,c[3],d]];if(-1===b[6])throw[0,j,iz];var
h=b[3];if(typeof
h==="number")switch(h){case
0:return a<50?J(1+a,b,g,35):f(J,[0,b,g,35]);case
5:return a<50?I(1+a,b,g,35):f(I,[0,b,g,35]);case
6:return a<50?H(1+a,b,g,35):f(H,[0,b,g,35]);case
7:return a<50?F(1+a,b,g,35):f(F,[0,b,g,35]);case
13:return a<50?D(1+a,b,g,35):f(D,[0,b,g,35]);case
10:case
11:case
14:case
16:var
r=g[1],l=g[2],q=[0,g[3],0];for(;;){var
e=[0,r,l,q];if(35<=l)switch(l-35|0){case
0:var
n=e[1],r=n[1],l=n[2],q=[0,n[3],e[3]];continue;case
1:if(-1===b[6])throw[0,j,ih];var
p=b[3];if(typeof
p==="number")if(10<=p)switch(p+e7|0){case
0:var
k=m(b);if(typeof
k==="number")switch(k){case
0:return a<50?J(1+a,b,e,21):f(J,[0,b,e,21]);case
5:return a<50?I(1+a,b,e,21):f(I,[0,b,e,21]);case
6:return a<50?H(1+a,b,e,21):f(H,[0,b,e,21]);case
7:return a<50?F(1+a,b,e,21):f(F,[0,b,e,21]);case
13:return a<50?D(1+a,b,e,21):f(D,[0,b,e,21]);case
11:case
14:case
16:return a<50?au(1+a,b,e,21):f(au,[0,b,e,21])}else
switch(k[0]){case
0:return a<50?G(1+a,b,e,21,k[1]):f(G,[0,b,e,21,k[1]]);case
1:return a<50?E(1+a,b,e,21,k[1]):f(E,[0,b,e,21,k[1]])}if(-1===b[6])throw[0,j,ii];b[6]=-1;return a<50?i(1+a,b,e,21):f(i,[0,b,e,21]);case
1:case
4:case
6:return a<50?bj(1+a,b,e,0):f(bj,[0,b,e,0])}if(-1===b[6])throw[0,j,ij];b[6]=-1;return a<50?i(1+a,b,e[1],e[2]):f(i,[0,b,e[1],e[2]])}return a<50?o(1+a,0):f(o,[0,0])}}else
switch(h[0]){case
0:return a<50?G(1+a,b,g,35,h[1]):f(G,[0,b,g,35,h[1]]);case
1:return a<50?E(1+a,b,g,35,h[1]):f(E,[0,b,g,35,h[1]])}if(-1===b[6])throw[0,j,iA];b[6]=-1;return a<50?i(1+a,b,g,35):f(i,[0,b,g,35])}function
at(a,b,c,d,e){var
g=c,h=d,k=e;for(;;){if(24===h){var
n=g[2],p=[0,[0,g[3],0],k],g=g[1],h=n,k=p;continue}if(34===h){if(-1===b[6])throw[0,j,iD];var
l=b[3];if(typeof
l==="number")if(2===l){m(b);return a<50?bd(1+a,b,g,k):f(bd,[0,b,g,k])}if(-1===b[6])throw[0,j,iE];b[6]=-1;return a<50?i(1+a,b,g,h):f(i,[0,b,g,h])}return a<50?o(1+a,0):f(o,[0,0])}}function
bc(a,b,c,d,e){var
g=[0,c,d,e],h=m(b);if(typeof
h==="number")if(4===h)return a<50?bi(1+a,b,g):f(bi,[0,b,g]);if(-1===b[6])throw[0,j,iF];b[6]=-1;return a<50?i(1+a,b,g[1],g[2]):f(i,[0,b,g[1],g[2]])}function
R(a,b,c){var
d=m(b);if(typeof
d==="number")switch(d){case
7:return a<50?x(1+a,b,c,29):f(x,[0,b,c,29]);case
8:return a<50?w(1+a,b,c,29):f(w,[0,b,c,29])}else
switch(d[0]){case
1:return a<50?r(1+a,b,c,29,d[1]):f(r,[0,b,c,29,d[1]]);case
2:return a<50?v(1+a,b,c,29,d[1]):f(v,[0,b,c,29,d[1]]);case
3:return a<50?q(1+a,b,c,29,d[1]):f(q,[0,b,c,29,d[1]])}if(-1===b[6])throw[0,j,iG];b[6]=-1;return a<50?i(1+a,b,c,29):f(i,[0,b,c,29])}function
K(a,b,c){var
d=m(b);if(typeof
d==="number")switch(d){case
7:return a<50?x(1+a,b,c,28):f(x,[0,b,c,28]);case
8:return a<50?w(1+a,b,c,28):f(w,[0,b,c,28])}else
switch(d[0]){case
1:return a<50?r(1+a,b,c,28,d[1]):f(r,[0,b,c,28,d[1]]);case
2:return a<50?v(1+a,b,c,28,d[1]):f(v,[0,b,c,28,d[1]]);case
3:return a<50?q(1+a,b,c,28,d[1]):f(q,[0,b,c,28,d[1]])}if(-1===b[6])throw[0,j,iH];b[6]=-1;return a<50?i(1+a,b,c,28):f(i,[0,b,c,28])}function
al(a,b,c){var
d=m(b);if(typeof
d==="number")switch(d){case
7:return a<50?x(1+a,b,c,27):f(x,[0,b,c,27]);case
8:return a<50?w(1+a,b,c,27):f(w,[0,b,c,27])}else
switch(d[0]){case
1:return a<50?r(1+a,b,c,27,d[1]):f(r,[0,b,c,27,d[1]]);case
2:return a<50?v(1+a,b,c,27,d[1]):f(v,[0,b,c,27,d[1]]);case
3:return a<50?q(1+a,b,c,27,d[1]):f(q,[0,b,c,27,d[1]])}if(-1===b[6])throw[0,j,h8];b[6]=-1;return a<50?i(1+a,b,c,27):f(i,[0,b,c,27])}function
ak(a,b,c){var
d=m(b);if(typeof
d==="number")switch(d){case
7:return a<50?x(1+a,b,c,25):f(x,[0,b,c,25]);case
8:return a<50?w(1+a,b,c,25):f(w,[0,b,c,25])}else
switch(d[0]){case
1:return a<50?r(1+a,b,c,25,d[1]):f(r,[0,b,c,25,d[1]]);case
2:return a<50?v(1+a,b,c,25,d[1]):f(v,[0,b,c,25,d[1]]);case
3:return a<50?q(1+a,b,c,25,d[1]):f(q,[0,b,c,25,d[1]])}if(-1===b[6])throw[0,j,h9];b[6]=-1;return a<50?i(1+a,b,c,25):f(i,[0,b,c,25])}function
Q(a,b,c){var
d=m(b);if(typeof
d==="number")switch(d){case
7:return a<50?x(1+a,b,c,26):f(x,[0,b,c,26]);case
8:return a<50?w(1+a,b,c,26):f(w,[0,b,c,26])}else
switch(d[0]){case
1:return a<50?r(1+a,b,c,26,d[1]):f(r,[0,b,c,26,d[1]]);case
2:return a<50?v(1+a,b,c,26,d[1]):f(v,[0,b,c,26,d[1]]);case
3:return a<50?q(1+a,b,c,26,d[1]):f(q,[0,b,c,26,d[1]])}if(-1===b[6])throw[0,j,h_];b[6]=-1;return a<50?i(1+a,b,c,26):f(i,[0,b,c,26])}function
o(a,b){h(cv(aH),h$);throw[0,j,ia]}function
bb(a,b,c,d){var
e=[0,c,d],h=m(b);if(typeof
h==="number")if(10===h){var
g=m(b);if(typeof
g==="number")switch(g){case
0:return a<50?J(1+a,b,e,12):f(J,[0,b,e,12]);case
5:return a<50?I(1+a,b,e,12):f(I,[0,b,e,12]);case
6:return a<50?H(1+a,b,e,12):f(H,[0,b,e,12]);case
7:return a<50?F(1+a,b,e,12):f(F,[0,b,e,12]);case
13:return a<50?D(1+a,b,e,12):f(D,[0,b,e,12])}else
switch(g[0]){case
0:return a<50?G(1+a,b,e,12,g[1]):f(G,[0,b,e,12,g[1]]);case
1:return a<50?E(1+a,b,e,12,g[1]):f(E,[0,b,e,12,g[1]])}if(-1===b[6])throw[0,j,ib];b[6]=-1;return a<50?i(1+a,b,e,12):f(i,[0,b,e,12])}if(-1===b[6])throw[0,j,ic];b[6]=-1;return a<50?i(1+a,b,e[1],e[2]):f(i,[0,b,e[1],e[2]])}function
M(a,b,c,d,e){var
g=[0,c,d,e],u=d-8|0;if(13<u>>>0){if(!(1<(u-27|0)>>>0)){if(-1===b[6])throw[0,j,id];var
z=b[3];if(typeof
z==="number")switch(z){case
8:var
G=m(b);if(typeof
G!=="number"&&1===G[0]){var
N=g,M=34,L=G[1];for(;;){var
h=[0,N,M,L],s=m(b);if(typeof
s==="number")if(5<=s){if(15===s){var
F=m(b);if(typeof
F!=="number"&&1===F[0]){var
N=h,M=24,L=F[1];continue}if(-1===b[6])throw[0,j,iB];b[6]=-1;return a<50?i(1+a,b,h,24):f(i,[0,b,h,24])}}else
if(2<=s)switch(s-2|0){case
0:return a<50?at(1+a,b,h[1],h[2],[0,[0,h[3],0],0]):f(at,[0,b,h[1],h[2],[0,[0,h[3],0],0]]);case
1:break;default:return a<50?bi(1+a,b,h):f(bi,[0,b,h])}if(-1===b[6])throw[0,j,iC];b[6]=-1;return a<50?i(1+a,b,h[1],h[2]):f(i,[0,b,h[1],h[2]])}}if(-1===b[6])throw[0,j,ig];b[6]=-1;return a<50?i(1+a,b,g,34):f(i,[0,b,g,34]);case
1:case
2:case
3:case
4:case
9:case
12:case
15:var
B=0;break;default:var
B=1}else
var
B=1<z[0]?0:1;if(B)return a<50?bd(1+a,b,g,0):f(bd,[0,b,g,0]);if(-1===b[6])throw[0,j,ie];b[6]=-1;return a<50?i(1+a,b,g[1],g[2]):f(i,[0,b,g[1],g[2]])}}else{if(12<=u)var
C=1;else
switch(u){case
1:if(-1===b[6])throw[0,j,jK];var
O=b[3];if(typeof
O==="number"){var
P=O-8|0;if(!(2<P>>>0))switch(P){case
0:var
y=m(b);if(typeof
y==="number"){if(2===y)return a<50?bg(1+a,b,g,7,0):f(bg,[0,b,g,7,0])}else
if(1===y[0]){var
K=g,J=7,I=y[1];for(;;){var
k=[0,K,J,I],H=m(b);if(typeof
H==="number"){if(2===H){var
n=k[1],p=k[2],t=[0,k[3],0];for(;;){if(6===p){var
Q=n[2],R=[0,n[3],t],n=n[1],p=Q,t=R;continue}return 7===p?a<50?bg(1+a,b,n,p,t):f(bg,[0,b,n,p,t]):a<50?o(1+a,0):f(o,[0,0])}}if(15===H){var
E=m(b);if(typeof
E!=="number"&&1===E[0]){var
K=k,J=6,I=E[1];continue}if(-1===b[6])throw[0,j,ir];b[6]=-1;return a<50?i(1+a,b,k,6):f(i,[0,b,k,6])}}if(-1===b[6])throw[0,j,is];b[6]=-1;return a<50?i(1+a,b,k[1],k[2]):f(i,[0,b,k[1],k[2]])}}if(-1===b[6])throw[0,j,jM];b[6]=-1;return a<50?i(1+a,b,g,7):f(i,[0,b,g,7]);case
1:break;default:return a<50?bh(1+a,b,g,0):f(bh,[0,b,g,0])}}if(-1===b[6])throw[0,j,jL];b[6]=-1;return a<50?i(1+a,b,g[1],g[2]):f(i,[0,b,g[1],g[2]]);case
0:case
3:case
4:var
C=1;break;default:var
C=0}if(C){if(-1===b[6])throw[0,j,iI];var
A=b[3];if(typeof
A==="number")switch(A){case
8:var
l=m(b);if(typeof
l==="number")switch(l){case
2:return a<50?be(1+a,b,g,19,0):f(be,[0,b,g,19,0]);case
7:return a<50?x(1+a,b,g,19):f(x,[0,b,g,19]);case
8:return a<50?w(1+a,b,g,19):f(w,[0,b,g,19])}else
switch(l[0]){case
1:return a<50?r(1+a,b,g,19,l[1]):f(r,[0,b,g,19,l[1]]);case
2:return a<50?v(1+a,b,g,19,l[1]):f(v,[0,b,g,19,l[1]]);case
3:return a<50?q(1+a,b,g,19,l[1]):f(q,[0,b,g,19,l[1]])}if(-1===b[6])throw[0,j,jJ];b[6]=-1;return a<50?i(1+a,b,g,19):f(i,[0,b,g,19]);case
2:case
4:case
9:case
10:case
12:case
15:var
D=0;break;default:var
D=1}else
var
D=1<A[0]?0:1;if(D)return a<50?bf(1+a,b,g,0):f(bf,[0,b,g,0]);if(-1===b[6])throw[0,j,h7];b[6]=-1;return a<50?i(1+a,b,g[1],g[2]):f(i,[0,b,g[1],g[2]])}}return a<50?o(1+a,0):f(o,[0,0])}function
ba(a,b,c,d,e){var
p=c,l=d,n=e;for(;;){var
g=[0,p,l,n];switch(l){case
16:if(-1===b[6])throw[0,j,jN];var
O=b[3];if(typeof
O==="number")switch(O){case
0:return a<50?R(1+a,b,g):f(R,[0,b,g]);case
5:return a<50?K(1+a,b,g):f(K,[0,b,g]);case
6:return a<50?al(1+a,b,g):f(al,[0,b,g]);case
7:return a<50?ak(1+a,b,g):f(ak,[0,b,g]);case
12:return g[3];case
13:return a<50?Q(1+a,b,g):f(Q,[0,b,g])}if(-1===b[6])throw[0,j,jO];b[6]=-1;return a<50?i(1+a,b,g[1],g[2]):f(i,[0,b,g[1],g[2]]);case
25:if(-1===b[6])throw[0,j,jS];var
S=b[3];if(typeof
S==="number")switch(S){case
0:return a<50?R(1+a,b,g):f(R,[0,b,g]);case
5:return a<50?K(1+a,b,g):f(K,[0,b,g]);case
13:return a<50?Q(1+a,b,g):f(Q,[0,b,g]);case
2:case
6:case
7:case
12:case
15:var
D=g[1],p=D[1],l=D[2],n=[1,D[3],1,g[3]];continue}if(-1===b[6])throw[0,j,jT];b[6]=-1;return a<50?i(1+a,b,g[1],g[2]):f(i,[0,b,g[1],g[2]]);case
26:if(-1===b[6])throw[0,j,jU];var
T=b[3];if(typeof
T==="number")switch(T){case
5:return a<50?K(1+a,b,g):f(K,[0,b,g]);case
0:case
2:case
6:case
7:case
12:case
13:case
15:var
E=g[1],p=E[1],l=E[2],n=[1,E[3],3,g[3]];continue}if(-1===b[6])throw[0,j,jV];b[6]=-1;return a<50?i(1+a,b,g[1],g[2]):f(i,[0,b,g[1],g[2]]);case
27:if(-1===b[6])throw[0,j,jW];var
U=b[3];if(typeof
U==="number")switch(U){case
0:return a<50?R(1+a,b,g):f(R,[0,b,g]);case
5:return a<50?K(1+a,b,g):f(K,[0,b,g]);case
13:return a<50?Q(1+a,b,g):f(Q,[0,b,g]);case
2:case
6:case
7:case
12:case
15:var
F=g[1],p=F[1],l=F[2],n=[1,F[3],0,g[3]];continue}if(-1===b[6])throw[0,j,jX];b[6]=-1;return a<50?i(1+a,b,g[1],g[2]):f(i,[0,b,g[1],g[2]]);case
28:var
G=g[1],p=G[1],l=G[2],n=[1,G[3],4,g[3]];continue;case
29:if(-1===b[6])throw[0,j,jY];var
V=b[3];if(typeof
V==="number")switch(V){case
5:return a<50?K(1+a,b,g):f(K,[0,b,g]);case
0:case
2:case
6:case
7:case
12:case
13:case
15:var
H=g[1],p=H[1],l=H[2],n=[1,H[3],2,g[3]];continue}if(-1===b[6])throw[0,j,jZ];b[6]=-1;return a<50?i(1+a,b,g[1],g[2]):f(i,[0,b,g[1],g[2]]);case
30:var
I=g[1],p=I[1],l=I[2],n=[2,[0,I[3]],g[3]];continue;case
31:if(-1===b[6])throw[0,j,j0];var
W=b[3];if(typeof
W==="number")switch(W){case
0:return a<50?R(1+a,b,g):f(R,[0,b,g]);case
2:m(b);var
X=g[1],p=X[1],l=X[2],n=g[3];continue;case
5:return a<50?K(1+a,b,g):f(K,[0,b,g]);case
6:return a<50?al(1+a,b,g):f(al,[0,b,g]);case
7:return a<50?ak(1+a,b,g):f(ak,[0,b,g]);case
13:return a<50?Q(1+a,b,g):f(Q,[0,b,g])}if(-1===b[6])throw[0,j,j1];b[6]=-1;return a<50?i(1+a,b,g[1],g[2]):f(i,[0,b,g[1],g[2]]);case
32:var
Y=g[1],p=Y[1],l=Y[2],n=[2,0,g[3]];continue;case
33:if(-1===b[6])throw[0,j,j2];var
Z=b[3];if(typeof
Z==="number")switch(Z){case
0:return a<50?R(1+a,b,g):f(R,[0,b,g]);case
5:return a<50?K(1+a,b,g):f(K,[0,b,g]);case
6:return a<50?al(1+a,b,g):f(al,[0,b,g]);case
7:return a<50?ak(1+a,b,g):f(ak,[0,b,g]);case
13:return a<50?Q(1+a,b,g):f(Q,[0,b,g]);case
2:case
15:var
J=g[1],_=J[2],h=[0,J[1],_,[0,J[3],[0,g[3]]]],L=_-22|0;if(2<L>>>0){if(12!==L)return a<50?o(1+a,0):f(o,[0,0])}else
if(!(2<=L)){if(-1===b[6])throw[0,j,j7];var
N=b[3];if(typeof
N==="number"){if(2===N){var
k=h[1],C=h[2],z=[0,h[3],0];for(;;){if(22===C){var
ab=k[2],ac=[0,k[3],z],k=k[1],C=ab,z=ac;continue}return 23===C?a<50?at(1+a,b,k[1],k[2],[0,k[3],z]):f(at,[0,b,k[1],k[2],[0,k[3],z]]):a<50?o(1+a,0):f(o,[0,0])}}if(15===N){var
B=m(b);if(typeof
B!=="number"&&1===B[0])return a<50?bc(1+a,b,h,22,B[1]):f(bc,[0,b,h,22,B[1]]);if(-1===b[6])throw[0,j,j8];b[6]=-1;return a<50?i(1+a,b,h,22):f(i,[0,b,h,22])}}if(-1===b[6])throw[0,j,ji];b[6]=-1;return a<50?i(1+a,b,h[1],h[2]):f(i,[0,b,h[1],h[2]])}if(-1===b[6])throw[0,j,j4];var
M=b[3];if(typeof
M==="number"){if(2===M)return a<50?at(1+a,b,h[1],h[2],[0,h[3],0]):f(at,[0,b,h[1],h[2],[0,h[3],0]]);if(15===M){var
A=m(b);if(typeof
A!=="number"&&1===A[0])return a<50?bc(1+a,b,h,23,A[1]):f(bc,[0,b,h,23,A[1]]);if(-1===b[6])throw[0,j,j5];b[6]=-1;return a<50?i(1+a,b,h,23):f(i,[0,b,h,23])}}if(-1===b[6])throw[0,j,j6];b[6]=-1;return a<50?i(1+a,b,h[1],h[2]):f(i,[0,b,h[1],h[2]])}if(-1===b[6])throw[0,j,j3];b[6]=-1;return a<50?i(1+a,b,g[1],g[2]):f(i,[0,b,g[1],g[2]]);case
18:case
19:if(-1===b[6])throw[0,j,jP];var
P=b[3];if(typeof
P==="number")switch(P){case
0:return a<50?R(1+a,b,g):f(R,[0,b,g]);case
2:var
t=g[1],u=g[2],y=[0,g[3],0];for(;;){if(18===u){var
$=t[2],aa=[0,t[3],y],t=t[1],u=$,y=aa;continue}return 19===u?a<50?be(1+a,b,t,u,y):f(be,[0,b,t,u,y]):a<50?o(1+a,0):f(o,[0,0])}case
5:return a<50?K(1+a,b,g):f(K,[0,b,g]);case
6:return a<50?al(1+a,b,g):f(al,[0,b,g]);case
7:return a<50?ak(1+a,b,g):f(ak,[0,b,g]);case
13:return a<50?Q(1+a,b,g):f(Q,[0,b,g]);case
15:var
s=m(b);if(typeof
s==="number")switch(s){case
7:return a<50?x(1+a,b,g,18):f(x,[0,b,g,18]);case
8:return a<50?w(1+a,b,g,18):f(w,[0,b,g,18])}else
switch(s[0]){case
1:return a<50?r(1+a,b,g,18,s[1]):f(r,[0,b,g,18,s[1]]);case
2:return a<50?v(1+a,b,g,18,s[1]):f(v,[0,b,g,18,s[1]]);case
3:return a<50?q(1+a,b,g,18,s[1]):f(q,[0,b,g,18,s[1]])}if(-1===b[6])throw[0,j,jR];b[6]=-1;return a<50?i(1+a,b,g,18):f(i,[0,b,g,18])}if(-1===b[6])throw[0,j,jQ];b[6]=-1;return a<50?i(1+a,b,g[1],g[2]):f(i,[0,b,g[1],g[2]]);default:return a<50?o(1+a,0):f(o,[0,0])}}}function
J(a,b,c,d){m(b);return a<50?M(1+a,b,c,d,ed):f(M,[0,b,c,d,ed])}function
I(a,b,c,d){m(b);return a<50?M(1+a,b,c,d,ee):f(M,[0,b,c,d,ee])}function
H(a,b,c,d){m(b);return a<50?M(1+a,b,c,d,ef):f(M,[0,b,c,d,ef])}function
G(a,b,c,d,e){m(b);return a<50?M(1+a,b,c,d,e):f(M,[0,b,c,d,e])}function
F(a,b,c,d){m(b);return a<50?M(1+a,b,c,d,eg):f(M,[0,b,c,d,eg])}function
E(a,b,c,d,e){m(b);return a<50?M(1+a,b,c,d,e):f(M,[0,b,c,d,e])}function
D(a,b,c,d){m(b);return a<50?M(1+a,b,c,d,eh):f(M,[0,b,c,d,eh])}function
x(a,b,c,d){var
k=c,h=d;for(;;){var
e=[0,k,h],g=m(b);if(typeof
g==="number")switch(g){case
7:var
k=e,h=32;continue;case
8:return a<50?w(1+a,b,e,32):f(w,[0,b,e,32])}else
switch(g[0]){case
1:return a<50?r(1+a,b,e,32,g[1]):f(r,[0,b,e,32,g[1]]);case
2:return a<50?v(1+a,b,e,32,g[1]):f(v,[0,b,e,32,g[1]]);case
3:return a<50?q(1+a,b,e,32,g[1]):f(q,[0,b,e,32,g[1]])}if(-1===b[6])throw[0,j,jp];b[6]=-1;return a<50?i(1+a,b,e,32):f(i,[0,b,e,32])}}function
w(a,b,c,d){var
k=c,h=d;for(;;){var
e=[0,k,h],g=m(b);if(typeof
g==="number")switch(g){case
7:return a<50?x(1+a,b,e,31):f(x,[0,b,e,31]);case
8:var
k=e,h=31;continue}else
switch(g[0]){case
1:return a<50?r(1+a,b,e,31,g[1]):f(r,[0,b,e,31,g[1]]);case
2:return a<50?v(1+a,b,e,31,g[1]):f(v,[0,b,e,31,g[1]]);case
3:return a<50?q(1+a,b,e,31,g[1]):f(q,[0,b,e,31,g[1]])}if(-1===b[6])throw[0,j,jq];b[6]=-1;return a<50?i(1+a,b,e,31):f(i,[0,b,e,31])}}function
r(a,b,c,d,e){m(b);return a<50?ba(1+a,b,c,d,[3,e]):f(ba,[0,b,c,d,[3,e]])}function
v(a,b,c,d,e){var
n=c,l=d,k=e;for(;;){var
g=[0,n,l,k],h=m(b);if(typeof
h==="number")switch(h){case
7:return a<50?x(1+a,b,g,30):f(x,[0,b,g,30]);case
8:return a<50?w(1+a,b,g,30):f(w,[0,b,g,30])}else
switch(h[0]){case
1:return a<50?r(1+a,b,g,30,h[1]):f(r,[0,b,g,30,h[1]]);case
2:var
n=g,l=30,k=h[1];continue;case
3:return a<50?q(1+a,b,g,30,h[1]):f(q,[0,b,g,30,h[1]])}if(-1===b[6])throw[0,j,jr];b[6]=-1;return a<50?i(1+a,b,g,30):f(i,[0,b,g,30])}}function
q(a,b,c,d,e){m(b);return a<50?ba(1+a,b,c,d,[0,e]):f(ba,[0,b,c,d,[0,e]])}function
a$(a,b,c,d){var
l=c,g=d,k=0;for(;;){var
e=[0,l,g,k];if(15<=g){if(17===g){var
h=e[1],l=h[1],g=h[2],k=[0,h[3],e[3]];continue}if(37<=g){if(-1===b[6])throw[0,j,jj];var
m=b[3];if(typeof
m==="number")if(11===m)return e[3];if(-1===b[6])throw[0,j,jk];b[6]=-1;return a<50?i(1+a,b,e[1],e[2]):f(i,[0,b,e[1],e[2]])}}else{if(3===g){if(-1===b[6])throw[0,j,jl];var
n=b[3];if(typeof
n==="number")if(16<=n)return a<50?bb(1+a,b,e,2):f(bb,[0,b,e,2]);if(-1===b[6])throw[0,j,jm];b[6]=-1;return a<50?i(1+a,b,e,2):f(i,[0,b,e,2])}if(14<=g){if(-1===b[6])throw[0,j,jn];var
p=b[3];if(typeof
p==="number")if(16<=p)return a<50?bb(1+a,b,e,13):f(bb,[0,b,e,13]);if(-1===b[6])throw[0,j,jo];b[6]=-1;return a<50?i(1+a,b,e,13):f(i,[0,b,e,13])}}return a<50?o(1+a,0):f(o,[0,0])}}function
a_(a,b,c,d){var
e=[0,c,d],g=m(b);if(typeof
g==="number")switch(g){case
0:return a<50?J(1+a,b,e,36):f(J,[0,b,e,36]);case
5:return a<50?I(1+a,b,e,36):f(I,[0,b,e,36]);case
6:return a<50?H(1+a,b,e,36):f(H,[0,b,e,36]);case
7:return a<50?F(1+a,b,e,36):f(F,[0,b,e,36]);case
13:return a<50?D(1+a,b,e,36):f(D,[0,b,e,36])}else
switch(g[0]){case
0:return a<50?G(1+a,b,e,36,g[1]):f(G,[0,b,e,36,g[1]]);case
1:return a<50?E(1+a,b,e,36,g[1]):f(E,[0,b,e,36,g[1]])}if(-1===b[6])throw[0,j,js];b[6]=-1;return a<50?i(1+a,b,e,36):f(i,[0,b,e,36])}function
le(a,b){var
c=b[2],e=h(b[1],c);b[3]=e;b[4]=c[11];b[5]=c[12];var
d=b[6]+1|0;if(0<=d)b[6]=d;return e}function
i(a,b,c,d){var
e=c,f=d;for(;;)switch(f){case
0:var
q=e[2],e=e[1],f=q;continue;case
1:var
r=e[2],e=e[1],f=r;continue;case
2:var
s=e[2],e=e[1],f=s;continue;case
3:var
t=e[2],e=e[1],f=t;continue;case
4:throw ap;case
5:var
u=e[2],e=e[1],f=u;continue;case
6:var
v=e[2],e=e[1],f=v;continue;case
7:throw ap;case
8:var
w=e[2],e=e[1],f=w;continue;case
9:var
x=e[2],e=e[1],f=x;continue;case
10:var
y=e[2],e=e[1],f=y;continue;case
11:var
z=e[2],e=e[1],f=z;continue;case
12:var
A=e[2],e=e[1],f=A;continue;case
13:var
B=e[2],e=e[1],f=B;continue;case
14:var
C=e[2],e=e[1],f=C;continue;case
15:throw ap;case
16:throw ap;case
17:var
D=e[2],e=e[1],f=D;continue;case
18:var
E=e[2],e=e[1],f=E;continue;case
19:throw ap;case
20:var
F=e[2],e=e[1],f=F;continue;case
21:throw ap;case
22:var
G=e[2],e=e[1],f=G;continue;case
23:var
H=e[2],e=e[1],f=H;continue;case
24:var
I=e[2],e=e[1],f=I;continue;case
25:var
J=e[2],e=e[1],f=J;continue;case
26:var
g=e[2],e=e[1],f=g;continue;case
27:var
h=e[2],e=e[1],f=h;continue;case
28:var
i=e[2],e=e[1],f=i;continue;case
29:var
j=e[2],e=e[1],f=j;continue;case
30:var
k=e[2],e=e[1],f=k;continue;case
31:var
l=e[2],e=e[1],f=l;continue;case
32:var
m=e[2],e=e[1],f=m;continue;case
33:var
n=e[2],e=e[1],f=n;continue;case
34:throw ap;case
35:var
o=e[2],e=e[1],f=o;continue;case
36:var
p=e[2],e=e[1],f=p;continue;default:throw ap}}function
na(a,b){return g(bk(0,a,b))}function
nb(a,b,c){return g(aw(0,a,b,c))}function
nc(a,b,c){return g(av(0,a,b,c))}function
m2(a,b,c){return g(bj(0,a,b,c))}function
m3(a,b,c){return g(au(0,a,b,c))}function
m4(a,b){return g(bi(0,a,b))}function
m5(a,b,c){return g(bh(0,a,b,c))}function
m6(a,b,c,d){return g(bg(0,a,b,c,d))}function
m7(a,b,c){return g(bf(0,a,b,c))}function
m8(a,b,c,d){return g(be(0,a,b,c,d))}function
m9(a,b,c){return g(bd(0,a,b,c))}function
m_(a,b,c,d){return g(at(0,a,b,c,d))}function
m$(a,b,c,d){return g(bc(0,a,b,c,d))}function
nd(a,b){return g(R(0,a,b))}function
m1(a,b){return g(K(0,a,b))}function
ne(a,b){return g(al(0,a,b))}function
nf(a,b){return g(ak(0,a,b))}function
ng(a,b){return g(Q(0,a,b))}function
nh(a){return g(o(0,a))}function
ni(a,b,c){return g(bb(0,a,b,c))}function
nj(a,b,c,d){return g(M(0,a,b,c,d))}function
nk(a,b,c,d){return g(ba(0,a,b,c,d))}function
nl(a,b,c){return g(J(0,a,b,c))}function
nm(a,b,c){return g(I(0,a,b,c))}function
nn(a,b,c){return g(H(0,a,b,c))}function
no(a,b,c,d){return g(G(0,a,b,c,d))}function
np(a,b,c){return g(F(0,a,b,c))}function
nq(a,b,c,d){return g(E(0,a,b,c,d))}function
nr(a,b,c){return g(D(0,a,b,c))}function
ns(a,b,c){return g(x(0,a,b,c))}function
nt(a,b,c){return g(w(0,a,b,c))}function
nu(a,b,c,d){return g(r(0,a,b,c,d))}function
nv(a,b,c,d){return g(v(0,a,b,c,d))}function
nw(a,b,c,d){return g(q(0,a,b,c,d))}function
ea(a,b,c){return g(a$(0,a,b,c))}function
eb(a,b,c){return g(a_(0,a,b,c))}function
m(a){return g(le(0,a))}function
bA(a,b,c){return g(i(0,a,b,c))}function
ec(a,b){var
c=h(a,b);return[0,a,b,c,b[11],b[12],e5]}function
iQ(a,b){var
c=ec(a,b),e=0;if(-1===c[6])throw[0,j,jv];var
d=c[3];if(typeof
d==="number"){if(11===d)return ea(c,e,37);if(14===d)return eb(c,e,37)}if(-1===c[6])throw[0,j,jw];c[6]=-1;return bA(c,e,37)}function
iR(a,b){var
c=ec(a,b),g=0;if(-1===c[6])throw[0,j,jx];var
e=c[3];if(typeof
e!=="number"&&1===e[0]){var
d=[0,g,15,e[1]],h=m(c);if(typeof
h==="number")if(9===h){var
f=m(c);if(typeof
f==="number")if(14<=f)switch(f+c1|0){case
0:return eb(c,d,14);case
1:break;default:return ea(c,d,14)}if(-1===c[6])throw[0,j,jz];c[6]=-1;return bA(c,d,14)}if(-1===c[6])throw[0,j,jA];c[6]=-1;return bA(c,d[1],d[2])}if(-1===c[6])throw[0,j,jy];c[6]=-1;return bA(c,g,15)}var
jB=0,jD=[0,[0,jC,function(a){return Math.atan(a)}],jB],jF=[0,[0,jE,function(a){return Math.acos(a)}],jD],jH=[0,[0,jG,function(a){return Math.asin(a)}],jF],i$=[0,[0,i_,function(a){return Math.exp(a)}],jH],jb=[0,[0,ja,function(a){return l9(a)}],i$],jd=[0,[0,jc,function(a){return Math.log(a)}],jb],jf=[0,[0,je,function(a){return Math.tan(a)}],jd],jh=[0,[0,jg,function(a){return Math.cos(a)}],jf],i9=[0,[0,jI,function(a){return Math.sin(a)}],jh],ei=[0,[0,kC,function(a){return Math.sqrt(a)}],i9];function
ej(a){a:for(;;){var
i=0;for(;;){var
d=l8(mZ,i,a);if(0<=d){a[11]=a[12];var
e=a[12];a[12]=[0,e[1],e[2],e[3],a[4]+a[6]|0]}if(20<d>>>0){h(a[1],a);var
i=d;continue}switch(d){case
0:var
c=a[12];a[12]=[0,c[1],c[2]+1|0,c[4],c[4]];continue a;case
1:return 11;case
2:continue a;case
3:return 16;case
4:return 1;case
5:return 14;case
6:return 10;case
7:return 15;case
8:return 9;case
9:return 3;case
10:return 4;case
11:return 6;case
12:return 7;case
13:return 0;case
14:return 13;case
15:return 5;case
16:return 8;case
17:return 2;case
18:return[3,lG(cq(a,a[5],a[6]))];case
19:var
f=cq(a,a[5],a[6]),b=ei;for(;;){if(b){var
k=b[2],g=0===bL(b[1][1],f)?1:0;if(!g){var
b=k;continue}var
j=g}else
var
j=0;return j?[2,bG(f,ei)]:[1,f]}default:return[0,cq(a,a[5],a[6])]}}}}var
dk=[0,kD],cc=[0,kF],fZ=[0,kE],fW=[0,kG];function
ek(a,b){var
c=1-k(L[3],b,a);if(c)throw[0,cc,b];return c}function
el(a,b,c){try{var
h=k(L[22],b,a),d=h}catch(f){f=B(f);if(f[1]!==t)throw f;var
g=[0,cc,b],d=function(a){throw a}(g)}var
f=bF(c),e=d!==f?1:0;if(e)throw[0,dk,[0,b,d,f]];return e}function
em(e,b,c,d){return P(function(a){var
d=a[2],b=a[1];ek(e,b);el(e,b,d);return k(c,b,d)},d)}function
kI(a,b){var
e=b[2],c=b[1];try{var
h=k(L[22],c,a),d=h}catch(f){f=B(f);if(f[1]!==t)throw f;var
g=[0,cc,c],d=function(a){throw a}(g)}function
i(a){var
b=a[2],d=a[1];if(b)return b[1];throw[0,fW,[0,c,d]]}function
f(a,b){if(a)if(b){var
g=b[1];return[0,g,f(a[2],b[2])]}if(b){var
h=bF(e);throw[0,dk,[0,c,bF(d),h]]}return u(i,a)}return[0,c,f(d,e)]}function
en(c,b){return u(function(a){return kI(c,a)},b)}function
kJ(a){return[0,a[1],a[2],a[3]]}function
mJ(a){var
i=a[1],j=a[2],n=dr(function(a){var
b=a[2],c=a[1];return u(function(a){return[0,a,b]},c)},j);function
m(a,b){var
c=a[1],e=c[2],f=c[1],g=a[2],h=d(L[4],f,e,b);return[0,h,[0,[0,f,u(function(a){return a[1]},e)],g]]}var
e=d9(m,n,L[1]),c=e[1],h=e[2],o=u(kJ,u(function(a){var
b=a[1];return[0,b[1],b[2],a[2]]},h)),f=en(c,a[3]),l=a[4],g=u(function(a){var
b=a[2],d=a[1];return[0,d,b,en(c,a[3])]},l),b=k(L[23],bF,c);em(b,0,function(a,b){return 0},f);P(function(a){ek(b,a[1]);el(b,a[1],a[2]);function
c(j,b){var
i=a[2];return P(function(a){return d8(a,function(a){var
d=k(hi,a,et);if(d)var
e=d;else{var
b=i;for(;;){if(b){var
h=b[2],c=0===bL(b[1],a)?1:0;if(!c){var
b=h;continue}var
g=c}else
var
g=0;var
e=g;break}}var
f=1-e;if(f)throw[0,fZ,[0,j,a]];return f})},b)}return em(b,a[2],c,a[3])},g);return[0,i,f,g,o]}var
fX=[0,kK],mI=dQ(kH);try{var
mM=iQ(ej,mI)}catch(f){throw[0,j,kL]}function
kM(a,b){try{var
e=k(a,ej,b)}catch(f){var
c=b[12],d=c[2],h=c[4]-c[3]|0,g=[0,fX,[0,d,h,gZ(b)]];return function(a){throw a}(g)}return e}function
kN(a){function
b(a){var
b=a[4],c=a[3],d=cj(mM,a[2]);return[0,a[1],d,c,b]}function
c(a){return kM(iR,a)}return aR(aR(aR(dQ(a),c),b),mJ)}var
aq=g7([0,co]);function
kO(a){return[0,a,0,0]}function
kP(a,b){var
g=dN(a[2],b),c=a[3],f=u(function(a){var
b=a[2],c=a[1];function
d(a){return 0}function
e(a){return a9(d,a8(function(b){var
a=hd(function(a){return bG(b,g)});return a?a[1]:[3,b]},a))}return[0,c,aR(b,function(a){return u(e,a)})]},c);function
d(a,b){return cV(d8,a,b)}function
e(c){var
b=0;return function(a){return fQ(b,c,a)}}var
h=d_(function(a){return dI(e,d,a)},b);return[0,a[1],h,f]}function
kR(e){function
q(w,b,c){function
v(a,b){var
c=b[1];try{var
d=a[4],e=f5(function(a){return cO(a[1],c)},d)}catch(f){f=B(f);if(f[1]===t)return kO(c);throw f}return e}var
y=u(function(a){return v(w,a)},c),l=dL(kP,y,u(function(a){return a[2]},c)),f=u(function(a){return a[1]},c);if(f){var
g=f[1],j=[0,0],h=[0,0],m=f[2];P(function(a){j[1]++;h[1]=h[1]+n(a)|0;return 0},f);var
e=C(h[1]+(0*(j[1]-1|0)|0)|0);X(g,0,e,0,n(g));var
d=[0,n(g)];P(function(a){X(mT,0,e,d[1],0);d[1]=d[1]+0|0;X(a,0,e,d[1],n(a));d[1]=d[1]+n(a)|0;return 0},m);var
i=e}else
var
i=gT;var
a=i;for(;;){if(k(aq[3],a,b)){var
a=p(a,kQ);continue}var
x=k(aq[4],a,b),o=dr(function(a){return a[3]},l),q=function(a){var
b=a[2];return function(a){return c4(b,a)}},r=function(a,b){return cV(q,a,b)},s=function(c){var
b=0;return function(a){return fQ(b,c,a)}};return[0,[0,a,d_(function(a){return dI(s,r,a)},l),o],x]}}function
f(y,b,c){function
g(a,b,c,d){if(d){var
h=d[2],f=d[1];if(k(aq[3],f[1],y)){if(0===b){var
i=g(a,0,c,h);return[0,[0,f,i[1]],i[2],i[3]]}var
o=q(e,a,a1(b)),j=o[1],r=o[2],s=j[2],w=u(function(a){return[3,a]},s),l=g(r,0,c,h);return[0,[0,[0,j[1],w],[0,f,l[1]]],[0,j,l[2]],l[3]]}var
m=g(a,[0,f,b],c,h);return[0,m[1],m[2],m[3]]}if(0===b)return[0,0,c,a];var
p=q(e,a,a1(b)),n=p[1],t=p[2],v=n[2],x=u(function(a){return[3,a]},v);return[0,[0,[0,n[1],x],0],[0,n,c],t]}return g(b,0,0,c)}var
j=aq[1],l=e[3],g=aP(function(a){return h(aq[4],a[1])},l,j),m=aq[1];function
c(a,b){return aP(function(a){return h(aq[4],a[1])},a,b)}function
d(a,b){return k(aq[4],a[1],b)}function
z(a,b){var
e=d(a,b);return c(a[3],e)}var
o=c(e[2],m),r=aP(z,e[3],o),A=aP(d,e[4],r),a=f(g,A,e[2]),s=a[3],v=a[2],w=a[1],x=e[3],b=dM(d9(function(a,b){var
c=f(g,b,a[3]);return[0,c[3],[0,[0,a[1],a[2],c[1]],c[2]]]},x,s)[2]),y=b[1],i=dK([0,e[4],[0,v,b[2]]]);return[0,e[1],w,y,i]}function
kS(a){var
v=[0,0],o=[0,8],f=[0,0],p=[0,v];h(a,function(a){var
b=f[1];if(b){var
c=b[2],d=b[1],i=b[3];if(c[1]<d.length-1){var
e=c[1];l(d,e)[e+1]=a;c[1]++;var
g=c[1]===d.length-1?1:0,k=g?(p[1][1]=f[1],p[1]=i,f[1]=0,0):g;return k}throw[0,j,hD]}var
h=o[1];if(h<fk)o[1]=2*o[1]|0;f[1]=[0,N(h,a),[0,1],[0,0]];return 0});p[1][1]=f[1];var
k=v[1],i=0,g=k;for(;;){if(g){var
i=i+g[2][1]|0,g=g[3][1];continue}if(0===i)var
n=[0];else{var
e=k,d=0;for(;;){if(!e)throw[0,ci,hE];var
s=e[2],x=e[3],y=e[1];if(!(d<s[1])){var
e=x[1],d=d-s[1]|0;continue}var
t=N(i,l(y,d)[d+1]),m=0,c=k;for(;;){if(c){var
q=c[2],r=q[1]-1|0,z=c[3],A=c[1],B=0;if(!(r<0)){var
b=B;for(;;){var
u=m+b|0,C=l(A,b)[b+1];l(t,u)[u+1]=C;var
w=b+1|0;if(r!==b){var
b=w;continue}break}}var
m=m+q[1]|0,c=z[1];continue}var
n=t;break}break}}return function(a){var
c=n.length-1-1|0,d=0;if(!(c<0)){var
b=d;for(;;){h(a,n[b+1]);var
e=b+1|0;if(c!==b){var
b=e;continue}break}}return 0}}}var
kT=[0,mU,mK,cV,mF,e0,c4,fP,mz,kS,function(a){return a}];function
eo(a){var
b=[];cR(b,[0,b,b]);return b}var
a0=[0,kf],Z=[0,cr([0,function(a,b){return bL(a,b)}])[1]];function
c8(a){var
c=a[1];if(3===c[0]){var
d=c[1],b=c8(d);if(b!==d)a[1]=[3,b];return b}return a}function
U(a){return c8(a)}var
bI=[0,function(a){fu(kg);fu(cz(a));eG(aH,10);dB(aH);cl(aH);eY(0);return ml(2)}];function
aT(a,b){try{var
c=h(a,b)}catch(f){f=B(f);return h(bI[1],f)}return c}function
c_(a,b,c,d){var
g=c,e=d;for(;;)if(typeof
g==="number")return a<50?am(1+a,b,e):f(am,[0,b,e]);else
switch(g[0]){case
0:var
i=g[1][1];if(i){h(i[1],b);return a<50?am(1+a,b,e):f(am,[0,b,e])}else
return a<50?am(1+a,b,e):f(am,[0,b,e]);case
1:h(g[1],b);return a<50?am(1+a,b,e):f(am,[0,b,e]);default:var
j=[0,g[2],e],g=g[1],e=j;continue}}function
am(a,b,c){return c?a<50?c_(1+a,b,c[1],c[2]):f(c_,[0,b,c[1],c[2]]):0}function
fw(a,b,c){return g(c_(0,a,b,c))}function
nx(a,b){return g(am(0,a,b))}function
c9(a,b,c){var
e=b,d=c;for(;;)if(typeof
e==="number")return a<50?ax(1+a,d):f(ax,[0,d]);else
switch(e[0]){case
0:var
h=e[2];Z[1]=e[1];aT(h,0);return a<50?ax(1+a,d):f(ax,[0,d]);case
1:var
g=e[1];if(g[4]){g[4]=0;g[1][2]=g[2];g[2][1]=g[1]}return a<50?ax(1+a,d):f(ax,[0,d]);default:var
i=[0,e[2],d],e=e[1],d=i;continue}}function
ax(a,b){return b?a<50?c9(1+a,b[1],b[2]):f(c9,[0,b[1],b[2]]):0}function
fv(a,b){return g(c9(0,a,b))}function
ny(a){return g(ax(0,a))}function
ca(a,b){var
c=1===b[0]?b[1][1]===a0?(fv(a[4],0),1):0:0;return fw(b,a[2],0)}var
di=[0,0],aY=gt(0);function
ep(a){var
b=Z[1],c=di[1]?1:(di[1]=1,0);return[0,c,b]}function
dU(a){var
e=a[2];if(a[1]){Z[1]=e;return 0}for(;;){if(0===aY[1]){di[1]=0;Z[1]=e;return 0}if(0===aY[1])throw[0,gs];aY[1]=aY[1]-1|0;var
b=aY[2],c=b[2];if(c===b)aY[2]=0;else
b[2]=c[2];var
d=c[1];ca(d[1],d[2]);continue}}function
dj(a,b){var
d=[0,b],e=c8(a),c=e[1];switch(c[0]){case
1:if(c[1][1]===a0)return 0;break;case
2:var
f=c[1];e[1]=d;var
g=ep(0);ca(f,d);return dU(g)}return s(kh)}function
bp(a){var
i=[1,[0,a0]];function
h(a,b){var
d=b;for(;;){var
g=U(d),e=g[1];if(2===e[0]){var
f=e[1],c=f[1];if(typeof
c==="number")return 0===c?a:(g[1]=i,[0,[0,f],a]);else{if(0===c[0]){var
d=c[1][1];continue}return aO(h,a,c[1][1])}}return a}}var
c=h(0,a),b=ep(0);P(function(a){fv(a[1][4],0);return fw(i,a[1][2],0)},c);return dU(b)}function
dV(a,b){return typeof
a==="number"?b:typeof
b==="number"?a:[2,a,b]}function
bV(a){if(typeof
a!=="number")switch(a[0]){case
0:if(!a[1][1])return 0;break;case
2:var
b=a[1],c=bV(a[2]);return dV(bV(b),c)}return a}function
eV(a,b){var
f=U(a),i=U(b),k=f[1];if(2===k[0]){var
c=k[1];if(f===i)return 0;var
d=i[1];if(2===d[0]){var
e=d[1];i[1]=[3,f];c[1]=e[1];var
m=dV(c[2],e[2]),l=c[3]+e[3]|0;if(42<l){c[3]=0;c[2]=bV(m)}else{c[3]=l;c[2]=m}var
g=e[4],h=c[4],n=typeof
h==="number"?g:typeof
g==="number"?h:[2,h,g];c[4]=n;return 0}f[1]=d;return ca(c,d)}throw[0,j,ki]}function
cU(a,b){var
d=U(a),c=d[1];if(2===c[0]){var
e=c[1];d[1]=b;return ca(e,b)}throw[0,j,kj]}function
ae(a){return[0,[0,a]]}var
mR=[0,mV];function
aD(a){return[0,[1,a]]}function
fO(a){return[0,[2,[0,[0,[0,a]],0,0,0]]]}function
dg(a){var
b=[0,[2,[0,1,0,0,0]]];return[0,b,b]}function
m0(a){try{var
b=ae(h(a,0))}catch(f){f=B(f);return aD(f)}return b}function
dW(a,b){var
c=a[2],d=typeof
c==="number"?b:[2,b,c];a[2]=d;return 0}function
bH(a,b){return dW(a,[1,b])}function
c5(a,b){var
c=U(a)[1];switch(c[0]){case
1:if(c[1][1]===a0)return aT(b,0);break;case
2:var
d=c[1],f=[0,Z[1],b],e=d[4],g=typeof
e==="number"?f:[2,f,e];d[4]=g;return 0}return 0}function
bJ(a,b){var
e=U(a),c=e[1];switch(c[0]){case
0:return h(b,c[1]);case
1:return[0,c];case
2:var
f=c[1],d=fO(e),g=Z[1];bH(f,function(a){switch(a[0]){case
0:var
e=a[1];Z[1]=g;try{var
f=h(b,e),c=f}catch(f){f=B(f);var
c=aD(f)}return eV(d,c);case
1:return cU(d,a);default:throw[0,j,kk]}});return d;default:throw[0,j,kl]}}function
eT(a,b){try{var
k=h(a,0),g=k}catch(f){f=B(f);var
g=aD(f)}var
e=U(g),c=e[1];switch(c[0]){case
0:return e;case
1:return h(b,c[1]);case
2:var
f=c[1],d=fO(e),i=Z[1];bH(f,function(a){switch(a[0]){case
0:return cU(d,a);case
1:var
e=a[1];Z[1]=i;try{var
f=h(b,e),c=f}catch(f){f=B(f);var
c=aD(f)}return eV(d,c);default:throw[0,j,km]}});return d;default:throw[0,j,kn]}}function
ag(a){try{var
e=h(a,0),c=e}catch(f){f=B(f);var
c=aD(f)}var
b=U(c)[1];switch(b[0]){case
0:return 0;case
1:return h(bI[1],b[1]);case
2:var
d=b[1];return bH(d,function(a){switch(a[0]){case
0:return 0;case
1:return h(bI[1],a[1]);default:throw[0,j,kq]}});default:throw[0,j,kr]}}var
bB=[b0,function(a){return e3([0])}];function
dX(a,b){var
c=a,d=b;for(;;){if(c){var
e=c[2],f=c[1];if(2===U(f)[1][0]){bp(f);var
c=e;continue}if(0<d){var
c=e,d=d-1|0;continue}P(bp,e);return f}throw[0,j,kt]}}var
mO=[0,function(a){return 0}],aj=eo(0),ku=[0,0];function
kv(a){var
e=1-(aj[2]===aj?1:0);if(e){var
b=eo(0);b[1][2]=aj[2];aj[2][1]=b[1];b[1]=aj[1];aj[1][2]=b;aj[1]=aj;aj[2]=aj;ku[1]=0;var
c=b[2];for(;;){var
d=c!==b?1:0;if(d){if(c[4])dj(c[3],0);var
c=c[2];continue}return d}}return e}var
dm=[0,kx];function
kw(a){mO[1]=a;return 0}cC(kz,[0,dm,ky]);var
nz=bU(a4,kA)?bU(a4,j_)?bU(a4,j$)?bU(a4,ka)?(s(p(kb,a4)),1):1:0:1:0;h6(0,13);var
V=_,aF=null,dh=undefined;function
dY(a,b){return a===dh?h(b,0):a}var
fU=V.Array;function
eu(a,b){return a[b]}var
dl=[0,kc];function
mY(a){return a}cC(kd,[0,dl,{}]);function
my(a){return V.decodeURIComponent(a)}function
mN(a){var
b=V.parseInt(a);return V.isNaN(b)|0?aE(ke):b}dC(function(a){return a[1]===dl?[0,aW(a[2].toString())]:0});dC(function(a){return a
instanceof
fU?0:[0,aW(a.toString())]});function
kB(a){return a}function
bC(a){return a}function
dZ(a,b,c){a.replaceChild(b,c);return 0}function
ce(a){return a.toString()}var
mw=ce(j9),mu=ce(lf),mD=ce(lg),bW=V.document;function
bD(a,b){return a?h(b,a[1]):0}function
cf(a,b){return a.createElement(b.toString())}var
d0=[0,fo];function
lh(a,b,c,d){for(;;){if(0===a)if(0===b)return cf(c,d);var
h=d0[1];if(fo===h){try{var
k=bW.createElement('<input name="x">'),j=k.tagName.toLowerCase()===dd?1:0,m=j?k.name===fM?1:0:j,i=m}catch(f){var
i=0}var
l=i?fr:-1003883683;d0[1]=l;continue}if(fr<=h){var
f=new
fU();f.push(fG,d.toString());bD(a,function(a){f.push(' type="',eE(a),b8);return 0});bD(b,function(a){f.push(' name="',eE(a),b8);return 0});f.push(db);return c.createElement(f.join(e))}var
g=cf(c,d);bD(a,function(a){return g.type=a});bD(b,function(a){return g.name=a});return g}}function
mx(a,b,c){return lh(a,b,c,li)}kB(V.HTMLElement)===dh;function
aS(a,b){var
c=a.toString();return b.tagName.toLowerCase()===c?bC(b):aF}function
lj(a){return aS(lk,a)}function
ll(a){return aS(lm,a)}function
ln(a){return aS(lo,a)}function
d1(a){return aS(lp,a)}function
lq(a){return aS(lr,a)}var
fS=l5(0);function
ls(a){return aS(lt,a)}var
lu=c2;kw(function(a){return 1===a?(V.setTimeout(cJ(kv),0),0):0});function
d2(a){return fS.log(a.toString())}bI[1]=function(a){d2(lv);d2(cz(a));return dB(aH)};function
cY(d,b,c){var
o=b?b[1]:0,j=[0,aF],a=dg(0),f=a[1],p=a[2];function
i(a){var
b=j[1];return b==aF?0:h(b,0)}c5(f,i);var
n=!!o;function
k(a){i(0);dj(p,a);return!!1}var
e=bC(cJ(function(a){if(1-(bC(a)==aF?1:0)){var
c=k(a);if(!(c|0))a.preventDefault();return c}var
d=event,b=k(d);if(!(b|0))d.returnValue=b;return b}));if(c.addEventListener===dh){var
m="on".concat(d),l=function(a){var
c=[0,e,a,[0]];return function(a,b){return l3(c,a,b)}};c.attachEvent(m,l);var
g=function(a){return c.detachEvent(m,l)}}else{c.addEventListener(d,e,n);var
g=function(a){return c.removeEventListener(d,e,n)}}j[1]=bC(g);return f}function
c$(n,b,c,d,e){var
m=b?b[1]:0,i=[0,0],j=[0,aD([0,bE,lw])],g=[0,ae(0)],f=dg(0)[1];c5(f,function(a){bp(j[1]);if(m)bp(g[1]);i[1]=1;return 0});function
l(a){if(i[1])return ae(0);var
b=k(n,c,d);j[1]=b;return bJ(b,function(a){var
c=h(e,a);function
b(a){fS.log(cz(a).toString());return ae(0)}g[1]=eT(function(a){return h(c,f)},b);return bJ(g[1],l)})}ag(function(b){function
a(a){return a[1]===a0?ae(0):aD(a)}return eT(function(a){return l(b)},a)});return f}function
eU(a,b){return cY(mw,a,b)}function
mv(a,b){return cY(mu,a,b)}function
mE(a,b){return cY(mD,a,b)}function
bq(d,b,c){return function(a){return c$(mE,d,b,c,a)}}cC(kU,[0,dm,lx]);function
bu(a,b){return a*b|0}var
k0=ai;function
cg(a){return bu(k0,a)}function
d3(a,b,c){var
d=cg(c),e=cg(b);return((cg(a)<<16)+(e<<8)|0)+d|0}function
k1(a){var
c=[aG,0,0,0],b=[0,kY],d=[0,0];function
i(a){return c}function
m(a){return b[1]}function
n(a){c[3]=c[3]+a*fj/180;return 0}function
l(a){d[1]=[0,[0,[aG,c[1],c[2],c[3]],b[1]],d[1]];return 0}lR(lP(a,a.width,a.height));var
j=[0,ex(0)],k=[0,ey(0)];function
f(a,b){var
e=a?a[1]:1;[0,e];var
d=c[3];c[1]=c[1]+b*Math.cos(d);c[2]=c[2]+b*Math.sin(d);var
f=i(0),l=f[2],g=bu(j[1],f[1]),h=bu(k[1],1-l);return e?lK(g,h):cG(g,h)}function
g(a){var
e=d[1];if(e){var
h=e[1];d[1]=e[2];var
f=h[1],n=h[2];c[1]=f[1];c[2]=f[2];c[3]=f[3];b[1]=n;var
g=m(0);cH(d3(g[1],g[2],g[3]));var
l=i(0),o=l[2],p=bu(j[1],l[1]);return cG(p,bu(k[1],1-o))}throw[0,gq]}function
e(a){b[1]=a;return cH(d3(a[1],a[2],a[3]))}return[0,i,m,n,f,l,g,e,function(a){j[1]=ex(0);k[1]=ey(0);lJ(0);ew(1);b[1]=kZ;c[1]=0;c[2]=0;c[3]=0;d[1]=0;return h(a,0)}]}var
b2=u(function(a){return[0,a[1].toString(),a[2].toString()]},k9);function
d4(a,b){return a?a[1]:b}var
aM=iO(kT);function
az(a,b){var
d=bW.getElementById(a.toString()),c=d==aF?aF:h(b,d);return c==aF?aE(h(aa(k_),a)):c}var
mt=az(k2,ll),fz=az(k3,ln),de=az(k4,lq),cb=az(k5,ls),aZ=az(k6,d1),aL=az(k7,d1),df=az(k8,lj),fT="&";function
cT(a){var
g=my(a);try{var
b=mY(g.slice(1).split(fT)),c=function(a){throw[0,t]},f=mN(dY(eu(b,0),c)),d=function(a){throw[0,t]},e=[0,[0,f,dY(eu(b,1),d)]]}catch(f){return 0}return e}function
fR(a,b){cb.value=b;aZ.max=aJ((a*14|0)/10|0).toString();aZ.value=aJ(a).toString();return aL.value=aJ(a).toString()}function
cX(a,b){var
d=V.location,c=aL.value.concat(fT,cb.value);d.hash=V.encodeURIComponent(c);return ae(0)}ag(function(a){return h(bq(0,0,cb),cX)});ag(function(a){return h(bq(0,0,aL),cX)});ag(function(a){return h(bq(0,0,aZ),cX)});ag(function(a){var
c=cT(V.location.hash);if(c)var
b=c[1];else
var
d=b2?b2[1]:aE(f3),b=ds(cT(d[2]));fR(b[1],b[2]);return ae(0)});ag(function(a){P(function(a){var
b=cf(bW,mL),c=a[1];b.value=c;b.innerHTML=c;de.appendChild(b);return 0},b2);return ae(0)});ag(function(a){return c$(mv,0,0,de,function(a,b){var
h=de.value,c=hf(0,function(a){return bG(h,a)},b2),f=[0,10,e],g=c?cT(c[1]):0,d=d4(g,f);fR(d[1],d[2]);var
i=d4(c,e);V.location.href=i;return ae(0)})});ag(function(a){function
b(a,b){aL.value=aZ.value;return ae(0)}return h(bq(0,0,aZ),b)});ag(function(a){function
b(a,b){aZ.value=aL.value;return ae(0)}return h(bq(0,0,aL),b)});var
aK=k1(mt),eX=[0,0];function
cS(a,b,c){var
f=0<=a?a:0;if(0===f)if(c){if(!c[2]){var
m=c[1];return[0,[0,m,0],m]}var
e=0}else
var
e=1;else
if(1===f){if(c){var
n=c[2],h=c[1];if(n){var
o=n[1];return[0,[0,h,[0,o,0]],o]}var
p=d(aM[9],0,b,h);return[0,[0,h,[0,p,0]],p]}var
e=1}else
var
e=0;if(!e)if(c){var
i=c[2],g=c[1];if(i){var
k=cS(f-1|0,b,i);return[0,[0,g,k[1]],k[2]]}var
l=cS(f-1|0,b,[0,d(aM[9],0,b,g),0]);return[0,[0,g,l[1]],l[2]]}throw[0,j,k$]}function
ch(a,b,c,d,e){var
f=cS(d,b,e),g=f[2];eX[1]=[0,[0,a,b,c,f[1]]];return function(a,b){var
d=k(aM[8],a,c);return k(aM[12],d,g)}}function
mS(a){var
b=aR(aR(aW(cb.value),kN),kR),g=eC(aW(aL.value)),i=eX[1];if(i){var
c=i[1],j=c[4],m=c[3],n=c[2];if(eK(c[1],b))var
d=h(aM[5],b),f=ch(b,d[3],d[4],g,[0,d[2],0]);else
var
f=ch(b,n,m,g,j)}else
var
e=h(aM[5],b),f=ch(b,e[3],e[4],g,[0,e[2],0]);var
o=h(f,function(a,b,c){switch(bG(a,kV)[1]){case
0:var
d=h(l(b,0)[0+1],c);return k(aK[4],kW,d);case
1:var
e=h(l(b,0)[0+1],c);return k(aK[4],kX,e);case
2:var
f=-h(l(b,0)[0+1],c);return h(aK[3],f);case
3:return h(aK[5],0);case
4:return h(aK[6],0);default:var
g=h(l(b,0)[0+1],c),i=h(l(b,0)[0+1],c),j=h(l(b,0)[0+1],c),m=[aG,h(l(b,0)[0+1],c),j,i,g];return h(aK[7],m)}});return h(aK[8],o)}var
b4=mx(0,0,bW);b4.innerHTML="Stop !";ag(function(a){return c$(eU,0,0,df,function(a,b){dZ(fz,b4,df);var
c=dg(0),d=c[1],e=[0,0],g=0.1,i=c[2];function
f(a,b){var
c=c2<a?[0,lu,a-c2]:[0,a,0],d=c[2],g=c[1],h=d==0?function(a){return dj(i,a)}:function(a){return f(d,a)};e[1]=[0,V.setTimeout(cJ(h),g*fb)];return 0}f(g,0);c5(d,function(a){var
b=e[1];return b?V.clearTimeout(b[1]):0});return bJ(d,function(a){function
v(a){return mR}var
u=bJ(eU(0,b4),v),b=[0,u,[0,m0(mS),0]],r=0,c=aO(function(a,b){return 2===U(b)[1][0]?a:a+1|0},r,b);if(0<c)if(1===c)var
e=dX(b,0);else{var
k=bR(bB),t=aX===k?bB[1]:b0===k?dR(bB):bB;if(bZ<c)var
f=0;else
if(0<c)for(;;){var
n=ev(t),p=eH(n,c);if(((bZ-c|0)+1|0)<(n-p|0))continue;var
l=p,f=1;break}else
var
f=0;if(!f)var
l=s(h3);var
e=dX(b,l)}else{var
o=[0,[2,[0,[1,[0,b]],0,0,0]]],g=[],m=[];cR(g,[0,[0,m]]);cR(m,function(a){g[1]=0;P(function(a){var
c=U(a)[1];if(2===c[0]){var
b=c[1],d=b[2];if(typeof
d!=="number"&&0===d[0]){b[2]=0;return 0}var
e=b[3]+1|0;return 42<e?(b[3]=0,b[2]=bV(b[2]),0):(b[3]=e,0)}return 0},b);P(bp,b);return cU(o,a)});var
w=[0,g];P(function(a){var
b=U(a)[1];if(2===b[0])return dW(b[1],w);throw[0,j,ks]},b);var
e=o}function
d(a){return dZ(fz,df,b4)}var
h=U(e)[1];switch(h[0]){case
0:aT(d,0);break;case
1:aT(d,0);break;case
2:var
i=Z[1],q=h[1];bH(q,function(a){switch(a[0]){case
0:Z[1]=i;return aT(d,0);case
1:Z[1]=i;return aT(d,0);default:throw[0,j,ko]}});break;default:throw[0,j,kp]}return e})})});eY(0);return}(function(){return this}()));
