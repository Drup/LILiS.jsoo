var
gj=108,gi="\n";(function(X){"use strict";var
c$=125,c_=123,aG=254,Y=255,fB=gj,ca="Map.bal",cc='"',ah=16777215,aX=250,f8="jsError",db=2147483,f7="input",f9="log",b6=246,bv=115,c4=102,fE=162,c9=120,fC=-10,c8=117,fJ=3.14159265358979312,fG=-20,d="",b3=100,Z="0",fK=487,fD=126,c5=103,f4="fd ",a="lilis/lisParser.ml",f$="px ",f3=">",fF=1e3,_="src/core/lwt.ml",gb="x",aI=".",by="+",b8=65535,f5="g",b4=1073741823,dm="f",aF=105,f0="%d",bu=110,fM=-88,bz="'",fL=801,fX="Unix",cd="int_of_string",fI=-32,c6=111,ga="transitionend",an=" ",aZ="e",fY="button",fH=256,ar="-",f_="nan",b$="Graphics.Graphic_failure",b7=-48,c7=116,fZ="canvas",dn=" : file already exists",fW="%.12g",cb="Set.bal",f1="div",dl="/",b5=114,da=-14,f2="#",fA=101,f6="index out of bounds",k="number";function
fd(a,b){throw[0,a,b]}function
c1(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=X.console;b&&b.error&&b.error(a)}var
y=[0];function
bp(a,b){if(!a)return d;if(a&1)return bp(a-1,b)+b;var
c=bp(a>>1,b);return c+c}function
K(a){if(a!=null){this.bytes=this.fullBytes=a;this.last=this.len=a.length}}function
fy(){fd(y[4],new
K(f6))}K.prototype={string:null,bytes:null,fullBytes:null,array:null,len:null,last:0,toJsString:function(){var
a=this.getFullBytes();try{return this.string=decodeURIComponent(escape(a))}catch(f){c1('MlString.toJsString: wrong encoding for "'+a+cc);return a}},toBytes:function(){if(this.string!=null)try{var
a=unescape(encodeURIComponent(this.string))}catch(f){c1('MlString.toBytes: wrong encoding for "'+this.string+cc);var
a=this.string}else{var
a=d,c=this.array,e=c.length;for(var
b=0;b<e;b++)a+=String.fromCharCode(c[b])}this.bytes=this.fullBytes=a;this.last=this.len=a.length;return a},getBytes:function(){var
a=this.bytes;if(a==null)a=this.toBytes();return a},getFullBytes:function(){var
a=this.fullBytes;if(a!==null)return a;a=this.bytes;if(a==null)a=this.toBytes();if(this.last<this.len){this.bytes=a+=bp(this.len-this.last,"\0");this.last=this.len}this.fullBytes=a;return a},toArray:function(){var
c=this.bytes;if(c==null)c=this.toBytes();var
b=[],d=this.last;for(var
a=0;a<d;a++)b[a]=c.charCodeAt(a);for(d=this.len;a<d;a++)b[a]=0;this.string=this.bytes=this.fullBytes=null;this.last=this.len;this.array=b;return b},getArray:function(){var
a=this.array;if(!a)a=this.toArray();return a},getLen:function(){var
a=this.len;if(a!==null)return a;this.toBytes();return this.len},toString:function(){var
a=this.string;return a?a:this.toJsString()},valueOf:function(){var
a=this.string;return a?a:this.toJsString()},blitToArray:function(a,b,c,d){var
g=this.array;if(g)if(c<=a)for(var
e=0;e<d;e++)b[c+e]=g[a+e];else
for(var
e=d-1;e>=0;e--)b[c+e]=g[a+e];else{var
f=this.bytes;if(f==null)f=this.toBytes();var
h=this.last-a;if(d<=h)for(var
e=0;e<d;e++)b[c+e]=f.charCodeAt(a+e);else{for(var
e=0;e<h;e++)b[c+e]=f.charCodeAt(a+e);for(;e<d;e++)b[c+e]=0}}},get:function(a){var
c=this.array;if(c)return c[a];var
b=this.bytes;if(b==null)b=this.toBytes();return a<this.last?b.charCodeAt(a):0},safeGet:function(a){if(this.len==null)this.toBytes();if(a<0||a>=this.len)fy();return this.get(a)},set:function(a,b){var
c=this.array;if(!c){if(this.last==a){this.bytes+=String.fromCharCode(b&Y);this.last++;return 0}c=this.toArray()}else
if(this.bytes!=null)this.bytes=this.fullBytes=this.string=null;c[a]=b&Y;return 0},safeSet:function(a,b){if(this.len==null)this.toBytes();if(a<0||a>=this.len)fy();this.set(a,b)},fill:function(a,b,c){if(a>=this.last&&this.last&&c==0)return;var
d=this.array;if(!d)d=this.toArray();else
if(this.bytes!=null)this.bytes=this.fullBytes=this.string=null;var
f=a+b;for(var
e=a;e<f;e++)d[e]=c},compare:function(a){if(this.string!=null&&a.string!=null){if(this.string<a.string)return-1;if(this.string>a.string)return 1;return 0}var
b=this.getFullBytes(),c=a.getFullBytes();if(b<c)return-1;if(b>c)return 1;return 0},equal:function(a){if(this.string!=null&&a.string!=null)return this.string==a.string;return this.getFullBytes()==a.getFullBytes()},lessThan:function(a){if(this.string!=null&&a.string!=null)return this.string<a.string;return this.getFullBytes()<a.getFullBytes()},lessEqual:function(a){if(this.string!=null&&a.string!=null)return this.string<=a.string;return this.getFullBytes()<=a.getFullBytes()}};function
$(a){this.string=a}$.prototype=new
K();function
cR(a,b){fd(a,new
$(b))}function
aW(a){cR(y[4],a)}function
eN(){aW(f6)}function
lK(a,b){if(b<0||b>=a.length-1)eN();return a[b+1]}function
lL(a,b,c){if(b<0||b>=a.length-1)eN();a[b+1]=c;return 0}function
eO(a,b,c,d,e){if(e===0)return 0;if(a.array!=null&&c.last==0&&d==0&&e==c.len){c.array=a.array.slice(b,b+e);c.bytes=c.string=null;return 0}if(d===c.last&&c.bytes!=null){var
f=a.bytes;if(f==null)f=a.toBytes();if(b>0||a.last>e)f=f.slice(b,b+e);c.bytes+=f;c.last+=f.length;return 0}var
g=c.array;if(!g)g=c.toArray();else
c.bytes=c.string=null;a.blitToArray(b,g,d,e);return 0}function
aq(c,b){if(c.fun)return aq(c.fun,b);var
a=c.length,d=a-b.length;if(d==0)return c.apply(null,b);else
if(d<0)return aq(c.apply(null,b.slice(0,a)),b.slice(a));else
return function(a){return aq(c,b.concat([a]))}}function
lM(a){if(isFinite(a)){if(Math.abs(a)>=2.22507385850720138e-308)return 0;if(a!=0)return 1;return 2}return isNaN(a)?4:3}function
l9(a,b){var
c=a[3]<<16,d=b[3]<<16;if(c>d)return 1;if(c<d)return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
mh(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
aU(a,b,c){var
e=[];for(;;){if(!(c&&a===b))if(a
instanceof
K)if(b
instanceof
K){if(a!==b){var
d=a.compare(b);if(d!=0)return d}}else
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
d=mh(a[2],b[2]);if(d!=0)return d;break;case
251:aW("equal: abstract value");case
Y:var
d=l9(a,b);if(d!=0)return d;break;default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)e.push(a,b,1)}}else
return 1}else
if(b
instanceof
K||b
instanceof
Array&&b[0]===(b[0]|0))return-1;else
if(typeof
a!=k&&a&&a.compare)return a.compare(b,c);else{if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!c)return NaN;if(a==a)return 1;if(b==b)return-1}}if(e.length==0)return 0;var
h=e.pop();b=e.pop();a=e.pop();if(h+1<a.length)e.push(a,b,h+1);a=a[h];b=b[h]}}function
lN(a,b){return aU(a,b,true)}function
lO(){return 0}function
dx(a){this.bytes=d;this.len=a}dx.prototype=new
K();function
eP(a){if(a<0)aW("String.create");return new
dx(a)}function
lQ(a,b){return+(aU(a,b,false)==0)}function
lR(a,b,c,d){a.fill(b,c,d);return 0}function
aV(a){cR(y[3],a)}function
lS(a){var
b;a=a.getFullBytes();b=+a;if(a.length>0&&b===b)return b;a=a.replace(/_/g,d);b=+a;if(a.length>0&&b===b||/^[+-]?nan$/i.test(a))return b;if(/^ *0x[0-9a-f_]+p[+-]?[0-9_]+/i.test(a)){var
c=a.indexOf("p");c=c==-1?a.indexOf("P"):c;var
e=+a.substring(c+1);b=+a.substring(0,c);return b*Math.pow(2,e)}aV("float_of_string")}function
cQ(a){a=a.toString();var
e=a.length;if(e>31)aW("format_int: format too long");var
b={justify:by,signstyle:ar,filler:an,alternate:false,base:0,signedconv:false,width:0,uppercase:false,sign:1,prec:-1,conv:dm};for(var
d=0;d<e;d++){var
c=a.charAt(d);switch(c){case
ar:b.justify=ar;break;case
by:case
an:b.signstyle=c;break;case
Z:b.filler=Z;break;case
f2:b.alternate=true;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":b.width=0;while(c=a.charCodeAt(d)-48,c>=0&&c<=9){b.width=b.width*10+c;d++}d--;break;case
aI:b.prec=0;d++;while(c=a.charCodeAt(d)-48,c>=0&&c<=9){b.prec=b.prec*10+c;d++}d--;case"d":case"i":b.signedconv=true;case"u":b.base=10;break;case
gb:b.base=16;break;case"X":b.base=16;b.uppercase=true;break;case"o":b.base=8;break;case
aZ:case
dm:case
f5:b.signedconv=true;b.conv=c;break;case"E":case"F":case"G":b.signedconv=true;b.uppercase=true;b.conv=c.toLowerCase();break}}return b}function
cL(a,b){if(a.uppercase)b=b.toUpperCase();var
f=b.length;if(a.signedconv&&(a.sign<0||a.signstyle!=ar))f++;if(a.alternate){if(a.base==8)f+=1;if(a.base==16)f+=2}var
c=d;if(a.justify==by&&a.filler==an)for(var
e=f;e<a.width;e++)c+=an;if(a.signedconv)if(a.sign<0)c+=ar;else
if(a.signstyle!=ar)c+=a.signstyle;if(a.alternate&&a.base==8)c+=Z;if(a.alternate&&a.base==16)c+="0x";if(a.justify==by&&a.filler==Z)for(var
e=f;e<a.width;e++)c+=Z;c+=b;if(a.justify==ar)for(var
e=f;e<a.width;e++)c+=an;return new
$(c)}function
lT(a,b){var
c,f=cQ(a),e=f.prec<0?6:f.prec;if(b<0){f.sign=-1;b=-b}if(isNaN(b)){c=f_;f.filler=an}else
if(!isFinite(b)){c="inf";f.filler=an}else
switch(f.conv){case
aZ:var
c=b.toExponential(e),d=c.length;if(c.charAt(d-3)==aZ)c=c.slice(0,d-1)+Z+c.slice(d-1);break;case
dm:c=b.toFixed(e);break;case
f5:e=e?e:1;c=b.toExponential(e-1);var
i=c.indexOf(aZ),h=+c.slice(i+1);if(h<-4||b.toFixed(0).length>e){var
d=i-1;while(c.charAt(d)==Z)d--;if(c.charAt(d)==aI)d--;c=c.slice(0,d+1)+c.slice(i);d=c.length;if(c.charAt(d-3)==aZ)c=c.slice(0,d-1)+Z+c.slice(d-1);break}else{var
g=e;if(h<0){g-=h+1;c=b.toFixed(g)}else
while(c=b.toFixed(g),c.length>e+1)g--;if(g){var
d=c.length-1;while(c.charAt(d)==Z)d--;if(c.charAt(d)==aI)d--;c=c.slice(0,d+1)}}break}return cL(f,c)}function
lU(a,b){if(a.toString()==f0)return new
$(d+b);var
c=cQ(a);if(b<0)if(c.signedconv){c.sign=-1;b=-b}else
b>>>=0;var
e=b.toString(c.base);if(c.prec>=0){c.filler=an;var
f=c.prec-e.length;if(f>0)e=bp(f,Z)+e}return cL(c,e)}function
lW(){return 0}var
e9={};function
e8(a){return e9[a]}var
U;function
ac(){if(U)return U;throw[0,e8(b$),new
K("Not initialized")]}function
lX(){var
a=ac();a.canvas.width=a.width;a.canvas.height=a.height;return 0}function
lY(a,b){var
c=ac();c.context.beginPath();c.context.moveTo(c.x,c.height-c.y);c.context.lineTo(a,c.height-b);c.context.stroke();c.x=a;c.y=b;return 0}function
eQ(a,b){var
c=ac();c.x=a;c.y=b;return 0}function
eS(a){var
c=ac();function
b(a){var
b=d+a.toString(16);while(b.length<2)b=Z+b;return b}var
h=a>>16&Y,g=a>>8&Y,f=a>>0&Y;c.color=a;var
e=f2+b(h)+b(g)+b(f);c.context.fillStyle=e;c.context.strokeStyle=e;return 0}function
eU(a){var
b=ac();b.line_width=a;b.context.lineWidth=a;return 0}function
l3(){var
a=ac();return a.width}function
l4(){var
a=ac();return a.height}function
l5(a,b,c){var
e=a.getContext("2d");return{context:e,canvas:a,x:0,y:0,width:b,height:c,line_width:1,font:"fixed",text_size:26,color:0,title:d}}function
l2(a){var
b=ac();a=a.toString?a.toString():a;b.title=a;if(b.set_title)b.set_title(a);return 0}function
l1(a){var
b=ac();b.text_size=a;b.context.font=b.text_size+f$+b.font.toString();return 0}function
l0(a){var
b=ac();b.font=a;b.context.font=b.text_size+f$+b.font.toString();return 0}function
lZ(a,b){var
c=ac();c.width=a;c.height=b;c.canvas.width=a;c.canvas.height=b;return 0}function
l6(){eQ(U.x,U.y);lZ(U.width,U.height);eU(U.line_width);l1(U.text_size);l0(U.font);eS(U.color);l2(U.title)}function
l7(a){U=a;l6();return 0}function
l8(a,b){return+(aU(a,b,false)>=0)}function
ma(a){return(a[3]|a[2]|a[1])==0}function
md(a){return[Y,a&ah,a>>24&ah,a>>31&b8]}function
me(a,b){var
c=a[1]-b[1],d=a[2]-b[2]+(c>>24),e=a[3]-b[3]+(d>>24);return[Y,c&ah,d&ah,e&b8]}function
eZ(a,b){if(a[3]>b[3])return 1;if(a[3]<b[3])return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
eY(a){a[3]=a[3]<<1|a[2]>>23;a[2]=(a[2]<<1|a[1]>>23)&ah;a[1]=a[1]<<1&ah}function
mb(a){a[1]=(a[1]>>>1|a[2]<<23)&ah;a[2]=(a[2]>>>1|a[3]<<23)&ah;a[3]=a[3]>>>1}function
mg(a,b){var
e=0,d=a.slice(),c=b.slice(),f=[Y,0,0,0];while(eZ(d,c)>0){e++;eY(c)}while(e>=0){e--;eY(f);if(eZ(d,c)>=0){f[1]++;d=me(d,c)}mb(c)}return[0,f,d]}function
mf(a){return a[1]|a[2]<<24}function
l$(a){return a[3]<<16<0}function
mc(a){var
b=-a[1],c=-a[2]+(b>>24),d=-a[3]+(c>>24);return[Y,b&ah,c&ah,d&b8]}function
l_(a,b){var
c=cQ(a);if(c.signedconv&&l$(b)){c.sign=-1;b=mc(b)}var
e=d,i=md(c.base),h="0123456789abcdef";do{var
g=mg(b,i);b=g[1];e=h.charAt(mf(g[2]))+e}while(!ma(b));if(c.prec>=0){c.filler=an;var
f=c.prec-e.length;if(f>0)e=bp(f,Z)+e}return cL(c,e)}function
mD(a){var
b=0,c=10,d=a.get(0)==45?(b++,-1):1;if(a.get(b)==48)switch(a.get(b+1)){case
c9:case
88:c=16;b+=2;break;case
c6:case
79:c=8;b+=2;break;case
98:case
66:c=2;b+=2;break}return[b,d,c]}function
fa(a){if(a>=48&&a<=57)return a-48;if(a>=65&&a<=90)return a-55;if(a>=97&&a<=122)return a-87;return-1}function
mi(a){var
g=mD(a),f=g[0],h=g[1],d=g[2],i=-1>>>0,e=a.get(f),c=fa(e);if(c<0||c>=d)aV(cd);var
b=c;for(;;){f++;e=a.get(f);if(e==95)continue;c=fa(e);if(c<0||c>=d)break;b=d*b+c;if(b>i)aV(cd)}if(f!=a.getLen())aV(cd);b=h*b;if(d==10&&(b|0)!=b)aV(cd);return b|0}function
mj(a){return+(a>31&&a<127)}function
mk(a,b,c){return a.apply(b,c.slice(1))}function
ml(){var
b=X.console?X.console:{},c=[f9,"debug","info","warn","error","assert","dir","dirxml","trace","group","groupCollapsed","groupEnd","time","timeEnd"];function
d(){}for(var
a=0;a<c.length;a++)if(!b[c[a]])b[c[a]]=d;return b}function
mm(a){var
c=Array.prototype.slice;return function(){var
b=arguments.length>0?c.call(arguments):[undefined];return aq(a,b)}}function
mn(a,b){return+(aU(a,b,false)<=0)}function
mo(a,b){return+(aU(a,b,false)<0)}function
bo(a){a=a.getFullBytes();var
c=[],d=a.length/2;for(var
b=0;b<d;b++)c[b]=(a.charCodeAt(2*b)|a.charCodeAt(2*b+1)<<8)<<16>>16;return c}function
mp(a,b,c){var
p=2,o=3,s=5,e=6,i=7,h=8,k=9,n=1,m=2,r=3,t=4,q=5;if(!a.lex_default){a.lex_base=bo(a[n]);a.lex_backtrk=bo(a[m]);a.lex_check=bo(a[q]);a.lex_trans=bo(a[t]);a.lex_default=bo(a[r])}var
f,d=b,l=c[p].getArray();if(d>=0){c[i]=c[s]=c[e];c[h]=-1}else
d=-d-1;for(;;){var
g=a.lex_base[d];if(g<0)return-g-1;var
j=a.lex_backtrk[d];if(j>=0){c[i]=c[e];c[h]=j}if(c[e]>=c[o])if(c[k]==0)return-d-1;else
f=fH;else{f=l[c[e]];c[e]++}d=a.lex_check[g+f]==d?a.lex_trans[g+f]:a.lex_default[d];if(d<0){c[e]=c[i];if(c[h]==-1)aV("lexing: empty token");else
return c[h]}else
if(f==fH)c[k]=0}}function
mq(a){return Math.LOG10E*Math.log(a)}function
mr(a,b){var
d=[0];for(var
c=1;c<=a;c++)d[c]=b;return d}function
dy(a){var
b=a.length;this.array=a;this.len=this.last=b}dy.prototype=new
K();var
ms=function(){function
m(a,b){return a+b|0}function
l(a,b,c,d,e,f){b=m(m(b,a),m(d,f));return m(b<<e|b>>>32-e,c)}function
h(a,b,c,d,e,f,g){return l(b&c|~b&d,a,b,e,f,g)}function
i(a,b,c,d,e,f,g){return l(b&d|c&~d,a,b,e,f,g)}function
j(a,b,c,d,e,f,g){return l(b^c^d,a,b,e,f,g)}function
k(a,b,c,d,e,f,g){return l(c^(b|~d),a,b,e,f,g)}function
n(a,b){var
g=b;a[g>>2]|=128<<8*(g&3);for(g=(g&~3)+8;(g&63)<60;g+=4)a[(g>>2)-1]=0;a[(g>>2)-1]=b<<3;a[g>>2]=b>>29&536870911;var
l=[1732584193,4023233417,2562383102,271733878];for(g=0;g<a.length;g+=16){var
c=l[0],d=l[1],e=l[2],f=l[3];c=h(c,d,e,f,a[g+0],7,3614090360);f=h(f,c,d,e,a[g+1],12,3905402710);e=h(e,f,c,d,a[g+2],17,606105819);d=h(d,e,f,c,a[g+3],22,3250441966);c=h(c,d,e,f,a[g+4],7,4118548399);f=h(f,c,d,e,a[g+5],12,1200080426);e=h(e,f,c,d,a[g+6],17,2821735955);d=h(d,e,f,c,a[g+7],22,4249261313);c=h(c,d,e,f,a[g+8],7,1770035416);f=h(f,c,d,e,a[g+9],12,2336552879);e=h(e,f,c,d,a[g+10],17,4294925233);d=h(d,e,f,c,a[g+11],22,2304563134);c=h(c,d,e,f,a[g+12],7,1804603682);f=h(f,c,d,e,a[g+13],12,4254626195);e=h(e,f,c,d,a[g+14],17,2792965006);d=h(d,e,f,c,a[g+15],22,1236535329);c=i(c,d,e,f,a[g+1],5,4129170786);f=i(f,c,d,e,a[g+6],9,3225465664);e=i(e,f,c,d,a[g+11],14,643717713);d=i(d,e,f,c,a[g+0],20,3921069994);c=i(c,d,e,f,a[g+5],5,3593408605);f=i(f,c,d,e,a[g+10],9,38016083);e=i(e,f,c,d,a[g+15],14,3634488961);d=i(d,e,f,c,a[g+4],20,3889429448);c=i(c,d,e,f,a[g+9],5,568446438);f=i(f,c,d,e,a[g+14],9,3275163606);e=i(e,f,c,d,a[g+3],14,4107603335);d=i(d,e,f,c,a[g+8],20,1163531501);c=i(c,d,e,f,a[g+13],5,2850285829);f=i(f,c,d,e,a[g+2],9,4243563512);e=i(e,f,c,d,a[g+7],14,1735328473);d=i(d,e,f,c,a[g+12],20,2368359562);c=j(c,d,e,f,a[g+5],4,4294588738);f=j(f,c,d,e,a[g+8],11,2272392833);e=j(e,f,c,d,a[g+11],16,1839030562);d=j(d,e,f,c,a[g+14],23,4259657740);c=j(c,d,e,f,a[g+1],4,2763975236);f=j(f,c,d,e,a[g+4],11,1272893353);e=j(e,f,c,d,a[g+7],16,4139469664);d=j(d,e,f,c,a[g+10],23,3200236656);c=j(c,d,e,f,a[g+13],4,681279174);f=j(f,c,d,e,a[g+0],11,3936430074);e=j(e,f,c,d,a[g+3],16,3572445317);d=j(d,e,f,c,a[g+6],23,76029189);c=j(c,d,e,f,a[g+9],4,3654602809);f=j(f,c,d,e,a[g+12],11,3873151461);e=j(e,f,c,d,a[g+15],16,530742520);d=j(d,e,f,c,a[g+2],23,3299628645);c=k(c,d,e,f,a[g+0],6,4096336452);f=k(f,c,d,e,a[g+7],10,1126891415);e=k(e,f,c,d,a[g+14],15,2878612391);d=k(d,e,f,c,a[g+5],21,4237533241);c=k(c,d,e,f,a[g+12],6,1700485571);f=k(f,c,d,e,a[g+3],10,2399980690);e=k(e,f,c,d,a[g+10],15,4293915773);d=k(d,e,f,c,a[g+1],21,2240044497);c=k(c,d,e,f,a[g+8],6,1873313359);f=k(f,c,d,e,a[g+15],10,4264355552);e=k(e,f,c,d,a[g+6],15,2734768916);d=k(d,e,f,c,a[g+13],21,1309151649);c=k(c,d,e,f,a[g+4],6,4149444226);f=k(f,c,d,e,a[g+11],10,3174756917);e=k(e,f,c,d,a[g+2],15,718787259);d=k(d,e,f,c,a[g+9],21,3951481745);l[0]=m(c,l[0]);l[1]=m(d,l[1]);l[2]=m(e,l[2]);l[3]=m(f,l[3])}var
o=[];for(var
g=0;g<4;g++)for(var
n=0;n<4;n++)o[g*4+n]=l[g]>>8*n&Y;return o}return function(a,b,c){var
h=[];if(a.array){var
f=a.array;for(var
d=0;d<c;d+=4){var
e=d+b;h[d>>2]=f[e]|f[e+1]<<8|f[e+2]<<16|f[e+3]<<24}for(;d<c;d++)h[d>>2]|=f[d+b]<<8*(d&3)}else{var
g=a.getFullBytes();for(var
d=0;d<c;d+=4){var
e=d+b;h[d>>2]=g.charCodeAt(e)|g.charCodeAt(e+1)<<8|g.charCodeAt(e+2)<<16|g.charCodeAt(e+3)<<24}for(;d<c;d++)h[d>>2]|=g.charCodeAt(d+b)<<8*(d&3)}return new
dy(n(h,c))}}();function
ad(a){cR(y[2],a)}function
e1(a){if(!a.opened)ad("Cannot flush a closed channel");if(a.buffer==d)return 0;if(a.output)switch(a.output.length){case
2:a.output(a,a.buffer);break;default:a.output(a.buffer)}a.buffer=d;return 0}function
fc(a){a=a
instanceof
K?a.toString():a;ad(a+": No such file or directory")}var
lP=dl;function
bU(a){a=a
instanceof
K?a.toString():a;if(a.charCodeAt(0)!=47)a=lP+a;var
e=a.split(dl),b=[];for(var
c=0;c<e.length;c++)switch(e[c]){case"..":if(b.length>1)b.pop();break;case
aI:break;case
d:if(b.length==0)b.push(d);break;default:b.push(e[c]);break}b.orig=a;return b}function
as(){this.content={}}as.prototype={exists:function(a){return this.content[a]?1:0},mk:function(a,b){this.content[a]=b},get:function(a){return this.content[a]},list:function(){var
a=[];for(var
b
in
this.content)a.push(b);return a},remove:function(a){delete
this.content[a]}};var
bX=new
as();bX.mk(d,new
as());function
cN(a){var
b=bX;for(var
c=0;c<a.length;c++){if(!(b.exists&&b.exists(a[c])))fc(a.orig);b=b.get(a[c])}return b}function
mQ(a){var
c=bU(a),b=cN(c);return b
instanceof
as?1:0}function
a2(a){this.data=a}a2.prototype={content:function(){return this.data},truncate:function(){this.data.length=0}};function
lV(a,b){var
e=bU(a),c=bX;for(var
f=0;f<e.length-1;f++){var
d=e[f];if(!c.exists(d))c.mk(d,new
as());c=c.get(d);if(!(c
instanceof
as))ad(e.orig+dn)}var
d=e[e.length-1];if(c.exists(d))ad(e.orig+dn);if(b
instanceof
as)c.mk(d,b);else
if(b
instanceof
a2)c.mk(d,b);else
if(b
instanceof
K)c.mk(d,new
a2(b.getArray()));else
if(b
instanceof
Array)c.mk(d,new
a2(b));else
if(b.toString)c.mk(d,new
a2(new
K(b.toString()).getArray()));else
aW("caml_fs_register");return 0}function
mN(a){var
b=bX,d=bU(a),e,f;for(var
c=0;c<d.length;c++){if(b.auto){e=b.auto;f=c}if(!(b.exists&&b.exists(d[c])))return e?e(d,f):0;b=b.get(d[c])}return 1}function
bq(a,b,c){if(y.fds===undefined)y.fds=new
Array();c=c?c:{};var
d={};d.array=b;d.offset=c.append?d.array.length:0;d.flags=c;y.fds[a]=d;y.fd_last_idx=a;return a}function
nP(a,b,c){var
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
f=a.toString(),h=bU(a);if(d.rdonly&&d.wronly)ad(f+" : flags Open_rdonly and Open_wronly are not compatible");if(d.text&&d.binary)ad(f+" : flags Open_text and Open_binary are not compatible");if(mN(a)){if(mQ(a))ad(f+" : is a directory");if(d.create&&d.excl)ad(f+dn);var
g=y.fd_last_idx?y.fd_last_idx:0,e=cN(h);if(d.truncate)e.truncate();return bq(g+1,e.content(),d)}else
if(d.create){var
g=y.fd_last_idx?y.fd_last_idx:0;lV(a,[]);var
e=cN(h);return bq(g+1,e.content(),d)}else
fc(a)}bq(0,[]);bq(1,[]);bq(2,[]);function
mt(a){var
b=y.fds[a];if(b.flags.wronly)ad(f4+a+" is writeonly");return{data:b,fd:a,opened:true}}function
m5(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=X.console;b&&b.log&&b.log(a)}var
bV=new
Array();function
mI(a,b){var
e=new
K(b),d=e.getLen();for(var
c=0;c<d;c++)a.data.array[a.data.offset+c]=e.get(c);a.data.offset+=d;return 0}function
mu(a){var
b;switch(a){case
1:b=m5;break;case
2:b=c1;break;default:b=mI}var
e=y.fds[a];if(e.flags.rdonly)ad(f4+a+" is readonly");var
c={data:e,fd:a,opened:true,buffer:d,output:b};bV[c.fd]=c;return c}function
mv(){var
a=0;for(var
b
in
bV)if(bV[b].opened)a=[0,bV[b],a];return a}function
e5(a,b,c,d){if(!a.opened)ad("Cannot output to a closed channel");var
f;if(c==0&&b.getLen()==d)f=b;else{f=eP(d);eO(b,c,f,0,d)}var
e=f.toString(),g=e.lastIndexOf(gi);if(g<0)a.buffer+=e;else{a.buffer+=e.substr(0,g+1);e1(a);a.buffer+=e.substr(g+1)}return 0}function
e_(a){return new
K(a)}function
mw(a,b){var
c=e_(String.fromCharCode(b));e5(a,c,0,1);return 0}function
fb(a){throw[0,a]}function
mF(){fb(y[6])}function
mx(a,b){if(b==0)mF();return a%b}if(!Math.imul)Math.imul=function(a,b){return((a>>16)*b<<16)+(a&b8)*b|0};var
my=Math.imul;function
mz(a,b){return+(aU(a,b,false)!=0)}function
mA(a){return+(a
instanceof
Array)}function
mB(a,b){a[0]=b;return 0}function
mC(a){return a
instanceof
Array?a[0]:fF}function
mG(a,b){y[a+1]=b}function
mH(a,b){e9[a.toString()]=b;return 0}function
mJ(a,b){return a.compare(b)}function
fg(a,b){var
c=a.fullBytes,d=b.fullBytes;if(c!=null&&d!=null)return c==d?1:0;return a.getFullBytes()==b.getFullBytes()?1:0}function
mK(a,b){return 1-fg(a,b)}function
mL(){return 32}function
mM(a){var
b=X;if(b.quit)b.quit(a);if(b.process&&b.process.exit)b.process.exit(a);aW("Function 'exit' not implemented")}function
mO(){return[0,new
$(fX),32,0]}function
mE(){fb(y[7])}function
mP(a){var
b=X,c=a.toString();if(b.process&&b.process.env&&b.process.env[c]!=undefined)return new
$(b.process.env[c]);mE()}function
mR(){var
a=new
Date()^4294967295*Math.random();return{valueOf:function(){return a},0:0,1:a,length:2}}function
mS(a){var
b=1;while(a&&a.joo_tramp){a=a.joo_tramp.apply(null,a.joo_args);b++}return a}function
mT(a,b){return{joo_tramp:a,joo_args:b}}function
mU(a,b){if(typeof
b==="function"){a.fun=b;return 0}if(b.fun){a.fun=b.fun;return 0}var
c=b.length;while(c--)a[c]=b[c];return 0}function
mV(a){if(a
instanceof
Array)return a;if(X.RangeError&&a
instanceof
X.RangeError&&a.message&&a.message.match(/maximum call stack/i))return[0,y[9]];if(X.InternalError&&a
instanceof
X.InternalError&&a.message&&a.message.match(/too much recursion/i))return[0,y[9]];if(a
instanceof
X.Error)return[0,e8(f8),a];return[0,y[3],new
$(String(a))]}var
z=lK,o=lL,am=eO,bS=lN,ab=eP,cM=lT,bT=lU,eR=eQ,eT=eS,eV=l3,eW=l4,eX=l8,e0=mi,cO=mj,cP=mm,P=mr,e2=e1,e3=mu,e6=e5,e4=mw,e7=mx,b=e_,e$=mz,bW=mC,V=mG,fe=mH,ff=fg,bY=mK,fh=mP,e=mS,f=mT,cS=mU,A=mV;function
j(a,b){return a.length==1?a(b):aq(a,[b])}function
l(a,b,c){return a.length==2?a(b,c):aq(a,[b,c])}function
g(a,b,c,d){return a.length==3?a(b,c,d):aq(a,[b,c,d])}function
bR(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):aq(a,[b,c,d,e,f])}var
dT=[0,b("Out_of_memory")],bB=[0,b("Failure")],cv=[0,b("Invalid_argument")],x=[0,b("Not_found")],dV=[0,b("Match_failure")],dU=[0,b("Stack_overflow")],i=[0,b("Assert_failure")],dW=[0,b("Undefined_recursive_module")],dI=[0,b(d),1,0,0],cJ=b('File "%s", line %d, characters %d-%d: %s');V(11,dW);V(10,i);V(9,[0,b("Sys_blocked_io")]);V(8,dU);V(7,dV);V(6,x);V(5,[0,b("Division_by_zero")]);V(4,[0,b("End_of_file")]);V(3,cv);V(2,bB);V(1,[0,b("Sys_error")]);V(0,dT);var
g3=b("output"),g2=b(fW),g1=b(aI),gZ=b("true"),g0=b("false"),g5=b("Pervasives.do_at_exit"),g8=b("List.map2"),g9=[0,0,0],g_=b("List.combine"),g7=b("hd"),hb=b("\\b"),hc=b("\\t"),hd=b("\\n"),gz=b("\\r"),ha=b("\\\\"),g$=b("\\'"),gD=b("String.contains_from"),gC=b(d),gB=b("String.blit"),gA=b("String.sub"),gF=b(d),gG=b(cb),gH=b(cb),gI=b(cb),gJ=b(cb),gO=b("Map.remove_min_elt"),gP=[0,0,0,0],gQ=[0,b("map.ml"),270,10],gR=[0,0,0],gK=b(ca),gL=b(ca),gM=b(ca),gN=b(ca),gS=b("Stack.Empty"),gU=b("Queue.Empty"),gW=b("CamlinternalLazy.Undefined"),gr=b("Buffer.add_substring"),gq=b("Buffer.add: cannot grow buffer"),hU=b(d),hV=b(d),hY=b(fW),hZ=b(cc),h0=b(cc),hW=b(bz),hX=b(bz),hT=b(f_),hR=b("neg_infinity"),hS=b("infinity"),hQ=b(aI),hP=b("printf: bad positional specification (0)."),hO=b("%_"),go=[0,b("printf.ml"),143,8],gy=b(bz),gY=b("Printf: premature end of format string '"),gu=b(bz),gv=b(" in format string '"),gw=b(", at char number "),gx=b("Printf: bad conversion %"),gs=b("Sformat.index_of_int: negative argument "),h5=b(d),h6=b(", %s%s"),hv=[1,1],hw=b("%s\n"),hx=b("(Program not linked with -g, cannot print stack backtrace)\n"),hp=b("Raised at"),hs=b("Re-raised at"),ht=b("Raised by primitive operation at"),hu=b("Called from"),hq=b('%s file "%s", line %d, characters %d-%d'),hr=b("%s unknown location"),h$=b("Out of memory"),ia=b("Stack overflow"),ib=b("Pattern matching failed"),hn=b("Assertion failed"),ho=b("Undefined recursive module"),h7=b("(%s%s)"),h8=b(d),h9=b(d),h_=b("(%s)"),h4=b(f0),h2=b("%S"),h3=b("_"),hz=b("Random.int"),hy=b(gb),lj=b("OCAMLRUNPARAM"),lh=b("CAMLRUNPARAM"),hA=b(d),hf=[3,0,3],hg=b(aI),hJ=b(f3),hK=b("</"),hG=b(f3),hH=b("<"),hE=b(gi),hC=b("Format.Empty_queue"),hD=[0,b(d)],hj=b("MList.get"),hi=[0,b("core/CCSequence.ml"),140,10],hl=b("CCOpt.get_exn"),hm=b("Calc.Unknown_variable"),iR=b(aZ),iS=b("pi"),iW=b("generate_lstream only accept positive integers as generation number"),iY=[0,b(a),86,8],iZ=[0,b(a),99,12],i0=[0,b(a),fD,8],i1=[0,b(a),137,12],i2=[0,b(a),169,8],i3=[0,b(a),177,12],i4=[0,b(a),155,8],i5=[0,b(a),fE,12],i6=[0,b(a),210,8],i7=[0,b(a),242,8],i8=[0,b(a),aX,12],i9=[0,b(a),265,4],i_=[0,b(a),273,8],jb=[0,b(a),316,12],jc=[0,b(a),324,16],i$=[0,b(a),329,12],ja=[0,b(a),337,16],jd=[0,b(a),362,8],ip=[0,b(a),386,16],iq=[0,b(a),394,12],ir=[0,b(a),417,8],is=[0,b(a),430,4],it=[0,b(a),454,12],iu=[0,b(a),458,8],iv=[0,b(a),468,4],iw=[0,b(a),fK,8],ix=[0,b(a),505,12],iy=[0,b(a),514,8],iz=[0,b(a),531,8],iA=[0,b(a),551,12],iB=[0,b(a),556,8],iC=[0,b(a),579,12],iD=[0,b(a),589,4],iE=[0,b(a),608,8],iF=[0,b(a),623,4],iG=[0,b(a),646,8],iH=[0,b(a),662,12],iI=[0,b(a),673,8],iJ=[0,b(a),730,8],iK=[0,b(a),745,12],iL=[0,b(a),761,8],iM=[0,b(a),782,8],iN=[0,b(a),fL,8],iO=[0,b(a),820,8],id=[0,b(a),839,8],ie=[0,b(a),858,8],ig=b("Internal failure -- please contact the parser generator's developers.\n%!"),ih=[0,b(a),865,4],ii=[0,b(a),891,12],ij=[0,b(a),895,8],ik=[0,b(a),907,8],im=[0,b(a),917,16],il=[0,b(a),925,12],jQ=[0,b(a),970,8],jS=[0,b(a),985,16],jR=[0,b(a),993,12],io=[0,b(a),932,8],ic=[0,b(a),955,16],iP=[0,b(a),963,12],jT=[0,b(a),1258,8],jU=[0,b(a),1281,12],jY=[0,b(a),1105,8],jZ=[0,b(a),1120,12],j0=[0,b(a),1087,8],j1=[0,b(a),1098,12],j2=[0,b(a),1065,8],j3=[0,b(a),1080,12],j4=[0,b(a),1041,8],j5=[0,b(a),1052,12],j6=[0,b(a),1013,8],j7=[0,b(a),1034,12],j8=[0,b(a),1133,8],j9=[0,b(a),1207,12],kb=[0,b(a),1180,16],kc=[0,b(a),1190,24],kd=[0,b(a),1199,20],j_=[0,b(a),1154,16],j$=[0,b(a),1164,24],ka=[0,b(a),1173,20],jV=[0,b(a),1214,8],jX=[0,b(a),1232,16],jW=[0,b(a),1251,12],jp=[0,b(a),1295,8],jq=[0,b(a),1308,12],jt=[0,b(a),1321,8],ju=[0,b(a),1327,12],jr=[0,b(a),1332,8],js=[0,b(a),1338,12],eG=b("*"),d8=b("^"),d9=b(by),d_=b(ar),d$=b(dl),jv=[0,b(a),1411,8],jw=[0,b(a),1431,8],jx=[0,b(a),1459,8],jy=[0,b(a),1496,8],jz=[0,b(a),1674,12],jA=[0,b(a),1678,8],jB=[0,b(a),1700,4],jC=[0,b(a),1708,8],jD=[0,b(a),1738,4],jF=[0,b(a),1756,16],jG=[0,b(a),1760,12],jE=[0,b(a),1766,8],iX=b("LisParser.Error"),jI=b("atan"),jK=b("acos"),jM=b("asin"),jO=b("exp"),jg=b("log10"),ji=b(f9),jk=b("tan"),jm=b("cos"),jo=b("sin"),je=b("sqrt"),nb=[0,b("\0\0Y\0\xc1\0W\0\xee\xff\xef\xff\xf0\xff\xf2\xff\x19\x01q\x01\xf5\xff\xf6\xff\xf7\xff\xf8\xff\xf9\xff\xc9\x01!\x02y\x02\xfd\xff\xfe\xff\xff\xff\x0b\0\x1d\0R\0\xd1\x02)\x03\x81\x03\xd9\x031\x04\x89\x04\xe1\x049\x05\x91\x05\xa4\0"),b("\xff\xff\x14\0\x13\0\x12\0\xff\xff\xff\xff\xff\xff\xff\xff\f\0\x0b\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x13\0\x13\0\x13\0\xff\xff\xff\xff\xff\xff\x0e\0\xff\xff\0\0\x13\0\x13\0\x13\0\x03\0\x13\0\x13\0\x04\0\x13\0\x05\0\x12\0"),b("\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\0\0\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\xff\xff\x16\0\x16\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"),b("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x12\0\x14\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x12\0\0\0\0\0\x01\0\0\0\0\0\0\0\x17\0\x05\0\x04\0\x07\0\t\0\r\0\b\0\0\0\x15\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x16\0\0\0\0\0\x0e\0\0\0\n\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\x17\0\x01\0\x06\0\x02\0\0\0\x11\0\x02\0\x02\0\x0f\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x10\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\f\0\x01\0\x0b\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0!\0\x01\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\x01\0\0\0\x01\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x13\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\xff\xff\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\x01\0\0\0\x01\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\x01\0\0\0\x01\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x1f\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x1c\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x18\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x19\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x1a\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x1b\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x1d\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x1e\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0 \0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\0\0\x01\0\0\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"),b("\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\x16\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x15\0\xff\xff\xff\xff\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x17\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\0\x03\0\x01\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\xff\xff\x01\0\xff\xff\x01\0\xff\xff\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x02\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x02\0\xff\xff\x02\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x16\0\x02\0\xff\xff\x02\0\xff\xff\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\b\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\b\0\xff\xff\b\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x17\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\xff\xff\b\0\xff\xff\b\0\xff\xff\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\t\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\t\0\xff\xff\t\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\xff\xff\t\0\xff\xff\t\0\xff\xff\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\x0f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0f\0\xff\xff\x0f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\xff\xff\x0f\0\xff\xff\x0f\0\xff\xff\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x10\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x10\0\xff\xff\x10\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\xff\xff\x10\0\xff\xff\x10\0\xff\xff\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x11\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x11\0\xff\xff\x11\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\xff\xff\x11\0\xff\xff\x11\0\xff\xff\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x18\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x18\0\xff\xff\x18\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\xff\xff\x18\0\xff\xff\x18\0\xff\xff\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x19\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x19\0\xff\xff\x19\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\xff\xff\x19\0\xff\xff\x19\0\xff\xff\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x1a\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1a\0\xff\xff\x1a\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\xff\xff\x1a\0\xff\xff\x1a\0\xff\xff\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1b\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1b\0\xff\xff\x1b\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\xff\xff\x1b\0\xff\xff\x1b\0\xff\xff\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1c\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1c\0\xff\xff\x1c\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\xff\xff\x1c\0\xff\xff\x1c\0\xff\xff\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1d\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1d\0\xff\xff\x1d\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\xff\xff\x1d\0\xff\xff\x1d\0\xff\xff\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1e\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1e\0\xff\xff\x1e\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\xff\xff\x1e\0\xff\xff\x1e\0\xff\xff\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1f\0\xff\xff\x1f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\xff\xff\x1f\0\xff\xff\x1f\0\xff\xff\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0 \0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff \0\xff\xff \0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\xff\xff \0\xff\xff \0\xff\xff \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"),b(d),b(d),b(d),b(d),b(d),b(d)],kJ=b("LisUtils.ArityError"),kK=b("LisUtils.VarDefError"),kL=b("LisUtils.TokenDefError"),kM=b("LisUtils.OptionalArgument"),kN=b("\ndef F(d?1) = Forward(d)\ndef f(d?1) = forward(d)\ndef +(x?90) = Turn(x)\ndef -(x?90) = Turn(- x)\ndef [ = Save\ndef ] = Restore\ndef color(r,g,b,a?1) = Color(r,g,b,a)\n"),kP=b("LisUtils.ParseError"),kQ=[0,b("lilis/lisUtils.ml"),161,12],kT=b(bz),m_=b(d),kt=[0,b(_),1018,8],ks=[0,b(_),885,13],kq=[0,b(_),799,20],kr=[0,b(_),fL,8],ko=[0,b(_),741,20],kp=[0,b(_),743,8],km=[0,b(_),692,20],kn=[0,b(_),695,8],kk=[0,b(_),648,20],kl=[0,b(_),651,8],kZ=[0,b(_),498,8],kY=[0,b(_),fK,9],kX=b("Lwt.wakeup_result"),kW=b("Fatal error: exception "),kV=b("Lwt.Canceled"),m$=[0,0],kw=b(b$),kx=b(d),ky=b(b$),kz=b("Cygwin"),kA=b("MacOS"),kB=b(fX),kC=b("Win32"),kD=b("Graphics: unknown OS type: "),kG=b("parseInt"),kE=b("Js.Error"),kF=b(f8),lt=b("textarea"),lr=b("select"),lp=b(f7),lo=b(f1),lm=b(fZ),kI=b(fY),ki=b(f1),mZ=b(fY),kh=b("option"),kH=b("click"),kf=b("change"),kg=b(f7),lv=b("Exception during Lwt.async: "),lw=b("Lwt_js_event"),k5=b(ga),k6=b("transition"),k8=b("otransitionend"),k_=b("oTransitionEnd"),k$=b("OTransition"),lb=b(ga),lc=b("MozTransition"),le=b("webkitTransitionEnd"),lf=b("WebkitTransition"),lx=b(d),ly=b(b$),lD=[aG,0,0,0,1],lC=[aG,0,0,0,1],lA=[0,1],lB=[0,0],lz=[0,[0,b("Forward"),[0,0,1]],[0,[0,b("forward"),[0,1,1]],[0,[0,b("Turn"),[0,2,1]],[0,[0,b("Save"),[0,3,0]],[0,[0,b("Restore"),[0,4,0]],[0,[0,b("Color"),[0,5,4]],0]]]]]],lF=b(fZ),lG=b("sidebar"),lH=b("selectlsys"),lI=b("lsysarea"),lJ=b("genslider"),k0=b("geninput"),k1=b("gobutton"),k2=[0,[0,b("Von koch snowflake"),b("#6%26Von_koch {%0A%0Aaxiom %3D%0A  f(0.5) - f(0.05) %2B(30) %0A  F(0.8) -(120) F(0.8) -(120) F(0.8)%0A%0Arule F(l) %3D%0A  F(l%2F3) %2B(60) F(l%2F3) -(120) F(l%2F3) %2B(60) F(l%2F3)%0A%0A}")],[0,[0,b("Dragon curve"),b("#11%26Dragon {%0A%0Adef X(d) Y(d) *%0A%0Aaxiom %3D -(45) f(0.47) * F(0.6) X(0.6)%0A%0Arule X(l) %3D X(l%2Fsqrt(2)) %2B Y(l%2Fsqrt(2)) F(l%2Fsqrt(2)) %2B%0A%0Arule Y(l) %3D -(90) F(l%2Fsqrt(2)) X(l%2Fsqrt(2)) -(90) Y(l%2Fsqrt(2))%0A%0Arule F(l) %3D F(l%2Fsqrt(2))%0A%0Arule * %3D * -(45)%0A%0A}")],[0,[0,b("Fern"),b("#6%26fern {%0A%0Adef X(d)%0A%0Aaxiom %3D f(0.5) -(90) f(1) -(180) X(0.35)%0A%0Arule X(x) %3D%0A  F(x%2F2) -(25) [ [ X(x%2F2) ] %2B(28) X(x%2F2) ]%0A  %2B(24) F(x%2F2) [ %2B(25) F(x%2F2) X(x%2F2) ] -(25) X(x%2F2)%0A%0A}")],[0,[0,b("Spin it"),b("#120%26Spin_it {%0A%0Adef X(l)%0A%0Adef Square(l) %3D %0A  Save Turn(45) forward(l*sqrt(2)%2F2)%0A  Turn(-135) Forward(l)%0A  Turn(-90) Forward(l)%0A  Turn(-90) Forward(l)%0A  Turn(-90) Forward(l) Restore%0A%0Aaxiom %3D - f(0.5) %2B f(0.5) X(0.01)%0A%0Arule X(l) %3D Square(l) %2B(2) X(l %2B 0.01)%0A}")],[0,[0,b("Von koch colored curve"),b("#6%26Von_koch_color {%0A%0Adef C(d) %3D Color(0%2Cd%2C0.1%2C1)%0Adef FF(l%2Cd%2Ck) %3D Forward(l)%0A%0Aaxiom %3D - f(0.28) %2B f(0.05) FF(0.9%2C0%2C0.9)%0A%0Arule FF(l%2Cd%2Ck) %3D%0A     C(d)         FF(l%2F3%2C d%2C k%2F4)         %2B(60)%0A     C(d %2B k%2F4)   FF(l%2F3%2C d %2B k%2F4%2C k%2F4)   -(120)%0A     C(d %2B k%2F2)   FF(l%2F3%2C d %2B k%2F2%2C k%2F4)   %2B(60)%0A     C(d %2B 3%2F4*k) FF(l%2F3%2C d %2B 3%2F4*k%2C k%2F4)%0A}")],0]]]]],k4=[0,b("js/jslilis.ml"),fE,13],k3=b("cannot find dom id %S\n%!");function
aC(a){throw[0,bB,a]}function
s(a){throw[0,cv,a]}var
fx=2147483647;function
p(a,b){var
c=a.getLen(),e=b.getLen(),d=ab(c+e|0);am(a,0,d,0,c);am(b,0,d,c,e);return d}function
aJ(a){return b(d+a)}function
cw(a,b){if(a){var
c=a[1];return[0,c,cw(a[2],b)]}return b}mt(0);var
na=e3(1),aH=e3(2);function
m1(a){var
b=mv(0);for(;;){if(b){var
c=b[2],d=b[1];try{e2(d)}catch(f){}var
b=c;continue}return 0}}function
fN(a,b){return e6(a,b,0,b.getLen())}function
fP(a){return fN(aH,a)}var
cx=[0,m1];function
cV(a){return j(cx[1],0)}fe(g5,cV);function
g6(a,b){return e4(a,b)}function
cy(a){return e2(a)}function
cz(a,b){var
d=b.length-1;if(0===d)return[0];var
f=P(d,j(a,b[0+1])),e=d-1|0,g=1;if(!(e<1)){var
c=g;for(;;){f[c+1]=j(a,b[c+1]);var
h=c+1|0;if(e!==c){var
c=h;continue}break}}return f}function
cA(a){if(a){var
d=0,c=a,g=a[2],h=a[1];for(;;){if(c){var
d=d+1|0,c=c[2];continue}var
f=P(d,h),e=1,b=g;for(;;){if(b){var
i=b[2];f[e+1]=b[1];var
e=e+1|0,b=i;continue}return f}}}return[0]}function
bC(a){var
c=0,b=a;for(;;){if(b){var
c=c+1|0,b=b[2];continue}return c}}function
dY(a,b){var
c=a,d=b;for(;;){if(c){var
e=[0,c[1],d],c=c[2],d=e;continue}return d}}function
a4(a){return dY(a,0)}function
dZ(a){if(a){var
b=a[1];return cw(b,dZ(a[2]))}return 0}function
t(a,b){if(b){var
c=b[2],d=j(a,b[1]);return[0,d,t(a,c)]}return 0}function
M(a,b){var
c=b;for(;;){if(c){var
d=c[2];j(a,c[1]);var
c=d;continue}return 0}}function
aM(a,b,c){var
e=b,d=c;for(;;){if(d){var
f=d[2],e=l(a,e,d[1]),d=f;continue}return e}}function
aN(a,b,c){if(b){var
d=b[1];return l(a,d,aN(a,b[2],c))}return c}function
d0(a,b,c){if(b){if(c){var
d=c[2],e=b[2],f=l(a,b[1],c[1]);return[0,f,d0(a,e,d)]}}else
if(!c)return 0;return s(g8)}function
bD(a,b){var
c=b;for(;;){if(c){var
d=c[1],e=c[2],f=d[2];if(0===bS(d[1],a))return f;var
c=e;continue}throw[0,x]}}function
d1(a,b){var
c=b;for(;;){if(c){var
d=c[1],e=c[2];if(j(a,d))return d;var
c=e;continue}throw[0,x]}}function
dF(a){if(a){var
b=a[1],d=b[2],e=b[1],c=dF(a[2]);return[0,[0,e,c[1]],[0,d,c[2]]]}return g9}function
dG(a,b){if(a){if(b){var
c=b[1],d=a[1];return[0,[0,d,c],dG(a[2],b[2])]}}else
if(!b)return 0;return s(g_)}function
a5(a,b){var
c=ab(a);lR(c,0,a,b);return c}function
bE(a,b,c){if(0<=b)if(0<=c)if(!((a.getLen()-c|0)<b)){var
d=ab(c);am(a,b,d,0,c);return d}return s(gA)}function
a6(a,b,c,d,e){if(0<=e)if(0<=b)if(!((a.getLen()-e|0)<b))if(0<=d)if(!((c.getLen()-e|0)<d))return am(a,b,c,d,e);return s(gB)}function
bG(a,b){return mJ(a,b)}var
a7=mO(0)[1],cB=mL(0),dH=(1<<(cB+fC|0))-1|0,a8=my(cB/8|0,dH)-1|0;function
dJ(a){var
b=[0],c=1,d=0,e=0,f=0,g=0,h=0,i=a.getLen(),j=p(a,gF);return[0,function(a){a[9]=1;return 0},j,i,h,g,f,e,d,c,b,dI,dI]}function
cC(a,b,c){var
d=c-b|0,e=ab(d);am(a[2],b,e,0,d);return e}function
cD(m){function
k(a){return a?a[5]:0}function
e(a,b,c,d){var
e=k(a),f=k(d),g=f<=e?e+1|0:f+1|0;return[0,a,b,c,d,g]}function
r(a,b){return[0,0,a,b,0,1]}function
f(a,b,c,d){var
h=a?a[5]:0,i=d?d[5]:0;if((i+2|0)<h){if(a){var
f=a[4],m=a[3],n=a[2],j=a[1],t=k(f);if(t<=k(j))return e(j,n,m,e(f,b,c,d));if(f){var
u=f[3],v=f[2],w=f[1],x=e(f[4],b,c,d);return e(e(j,n,m,w),v,u,x)}return s(gK)}return s(gL)}if((h+2|0)<i){if(d){var
l=d[4],o=d[3],p=d[2],g=d[1],y=k(g);if(y<=k(l))return e(e(a,b,c,g),p,o,l);if(g){var
z=g[3],A=g[2],B=g[1],q=e(g[4],p,o,l);return e(e(a,b,c,B),A,z,q)}return s(gM)}return s(gN)}var
r=i<=h?h+1|0:i+1|0;return[0,a,b,c,d,r]}var
N=0;function
a(a){return a?0:1}function
t(a,b,c){if(c){var
d=c[4],h=c[3],e=c[2],g=c[1],j=c[5],i=l(m[1],a,e);return 0===i?[0,g,a,b,d,j]:0<=i?f(g,e,h,t(a,b,d)):f(t(a,b,g),e,h,d)}return[0,0,a,b,0,1]}function
I(a,b){var
c=b;for(;;){if(c){var
e=c[4],f=c[3],g=c[1],d=l(m[1],a,c[2]);if(0===d)return f;var
h=0<=d?e:g,c=h;continue}throw[0,x]}}function
J(a,b){var
c=b;for(;;){if(c){var
f=c[4],g=c[1],e=l(m[1],a,c[2]),d=0===e?1:0;if(d)return d;var
h=0<=e?f:g,c=h;continue}return 0}}function
p(a){var
b=a;for(;;){if(b){var
c=b[1];if(c){var
b=c;continue}return[0,b[2],b[3]]}throw[0,x]}}function
K(a){var
b=a;for(;;){if(b){var
c=b[4],d=b[3],e=b[2];if(c){var
b=c;continue}return[0,e,d]}throw[0,x]}}function
u(a){if(a){var
b=a[1];if(b){var
c=a[4],d=a[3],e=a[2];return f(u(b),e,d,c)}return a[4]}return s(gO)}function
v(a,b){if(b){var
c=b[4],h=b[3],e=b[2],d=b[1],i=l(m[1],a,e);if(0===i){if(d){if(c){var
g=p(c),j=g[2],k=g[1];return f(d,k,j,u(c))}return d}return c}return 0<=i?f(d,e,h,v(a,c)):f(v(a,d),e,h,c)}return 0}function
A(a,b){var
c=b;for(;;){if(c){var
d=c[4],e=c[3],f=c[2];A(a,c[1]);l(a,f,e);var
c=d;continue}return 0}}function
c(a,b){if(b){var
d=b[5],e=b[4],f=b[3],g=b[2],i=c(a,b[1]),h=j(a,f);return[0,i,g,h,c(a,e),d]}return 0}function
w(a,b){if(b){var
c=b[2],d=b[5],e=b[4],f=b[3],h=w(a,b[1]),g=l(a,c,f);return[0,h,c,g,w(a,e),d]}return 0}function
B(a,b,c){var
d=b,e=c;for(;;){if(d){var
f=d[4],h=d[3],i=d[2],j=g(a,i,h,B(a,d[1],e)),d=f,e=j;continue}return e}}function
C(a,b){var
c=b;for(;;){if(c){var
g=c[4],h=c[1],d=l(a,c[2],c[3]);if(d){var
e=C(a,h);if(e){var
c=g;continue}var
f=e}else
var
f=d;return f}return 1}}function
D(a,b){var
c=b;for(;;){if(c){var
g=c[4],h=c[1],d=l(a,c[2],c[3]);if(d)var
e=d;else{var
f=D(a,h);if(!f){var
c=g;continue}var
e=f}return e}return 0}}function
E(a,b,c){if(c){var
d=c[4],e=c[3],g=c[2];return f(E(a,b,c[1]),g,e,d)}return r(a,b)}function
F(a,b,c){if(c){var
d=c[3],e=c[2],g=c[1];return f(g,e,d,F(a,b,c[4]))}return r(a,b)}function
h(a,b,c,d){if(a){if(d){var
g=d[5],i=a[5],j=d[4],k=d[3],l=d[2],m=d[1],n=a[4],o=a[3],p=a[2],q=a[1];return(g+2|0)<i?f(q,p,o,h(n,b,c,d)):(i+2|0)<g?f(h(a,b,c,m),l,k,j):e(a,b,c,d)}return F(b,c,a)}return E(b,c,d)}function
q(a,b){if(a){if(b){var
c=p(b),d=c[2],e=c[1];return h(a,e,d,u(b))}return a}return b}function
G(a,b,c,d){return c?h(a,b,c[1],d):q(a,d)}function
n(a,b){if(b){var
c=b[4],d=b[3],e=b[2],f=b[1],j=l(m[1],a,e);if(0===j)return[0,f,[0,d],c];if(0<=j){var
g=n(a,c),k=g[3],o=g[2];return[0,h(f,e,d,g[1]),o,k]}var
i=n(a,f),p=i[2],q=i[1];return[0,q,p,h(i[3],e,d,c)]}return gP}function
o(a,b,c){if(b){var
d=b[2],l=b[5],m=b[4],p=b[3],q=b[1];if(k(c)<=l){var
e=n(d,c),r=e[2],s=e[1],t=o(a,m,e[3]),u=g(a,d,[0,p],r);return G(o(a,q,s),d,u,t)}}else
if(!c)return 0;if(c){var
f=c[2],v=c[4],w=c[3],x=c[1],h=n(f,b),y=h[2],z=h[1],A=o(a,h[3],v),j=g(a,f,y,[0,w]);return G(o(a,z,x),f,j,A)}throw[0,i,gQ]}function
y(a,b){if(b){var
c=b[3],d=b[2],g=b[4],e=y(a,b[1]),i=l(a,d,c),f=y(a,g);return i?h(e,d,c,f):q(e,f)}return 0}function
z(a,b){if(b){var
c=b[3],d=b[2],m=b[4],e=z(a,b[1]),f=e[2],g=e[1],p=l(a,d,c),i=z(a,m),j=i[2],k=i[1];if(p){var
n=q(f,j);return[0,h(g,d,c,k),n]}var
o=h(f,d,c,j);return[0,q(g,k),o]}return gR}function
d(a,b){var
c=a,d=b;for(;;){if(c){var
e=[0,c[2],c[3],c[4],d],c=c[1],d=e;continue}return d}}function
L(a,b,c){var
r=d(c,0),f=d(b,0),e=r;for(;;){if(f){if(e){var
i=e[4],j=e[3],k=e[2],n=f[4],o=f[3],p=f[2],g=l(m[1],f[1],e[1]);if(0===g){var
h=l(a,p,k);if(0===h){var
q=d(j,i),f=d(o,n),e=q;continue}return h}return g}return 1}return e?-1:0}}function
M(a,b,c){var
s=d(c,0),f=d(b,0),e=s;for(;;){if(f){if(e){var
j=e[4],k=e[3],n=e[2],o=f[4],p=f[3],q=f[2],g=0===l(m[1],f[1],e[1])?1:0;if(g){var
h=l(a,q,n);if(h){var
r=d(k,j),f=d(p,o),e=r;continue}var
i=h}else
var
i=g;return i}return 0}return e?0:1}}function
b(a){if(a){var
c=a[1],d=b(a[4]);return(b(c)+1|0)+d|0}return 0}function
H(a,b){var
d=a,c=b;for(;;){if(c){var
e=c[3],f=c[2],g=c[1],d=[0,[0,f,e],H(d,c[4])],c=g;continue}return d}}return[0,N,a,J,t,r,v,o,L,M,A,B,C,D,y,z,b,function(a){return H(0,a)},p,K,p,n,I,c,w]}var
gT=[0,gS],gV=[0,gU],gX=[0,gW];function
gp(a){throw[0,gX]}function
dM(a){var
c=a[0+1];a[0+1]=gp;try{var
b=j(c,0);a[0+1]=b;mB(a,aX)}catch(f){f=A(f);a[0+1]=function(a){throw f};throw f}return b}function
bI(a){var
c=1<=a?a:1,b=a8<c?a8:c,d=ab(b);return[0,d,0,b,d]}function
cE(a){return bE(a[1],0,a[2])}function
cF(a,b){var
c=[0,a[3]];for(;;){if(c[1]<(a[2]+b|0)){c[1]=2*c[1]|0;continue}if(a8<c[1])if((a[2]+b|0)<=a8)c[1]=a8;else
aC(gq);var
d=ab(c[1]);a6(a[1],0,d,0,a[2]);a[1]=d;a[3]=c[1];return 0}}function
a9(a,b){var
c=a[2];if(a[3]<=c)cF(a,1);a[1].safeSet(c,b);a[2]=c+1|0;return 0}function
cG(a,b){var
c=b.getLen(),d=a[2]+c|0;if(a[3]<d)cF(a,c);a6(b,0,a[1],a[2],c);a[2]=d;return 0}function
cZ(a){return 0<=a?a:aC(p(gs,aJ(a)))}function
eH(a,b){return cZ(a+b|0)}var
gt=1;function
dN(a){return eH(gt,a)}function
dO(a){return bE(a,0,a.getLen())}function
dP(a,b,c){var
d=p(gv,p(a,gu)),e=p(gw,p(aJ(b),d));return s(p(gx,p(a5(1,c),e)))}function
bn(a,b,c){return dP(dO(a),b,c)}function
b1(a){return s(p(gY,p(dO(a),gy)))}function
aA(g,b,c,d){function
j(a){if(9<(g.safeGet(a)+b7|0)>>>0)return a;var
b=a+1|0;for(;;){var
c=g.safeGet(b);if(48<=c){if(!(58<=c)){var
b=b+1|0;continue}}else
if(36===c)return b+1|0;return a}}var
k=j(b+1|0),f=bI((c-k|0)+10|0);a9(f,37);var
a=k,e=a4(d);for(;;){if(a<=c){var
h=g.safeGet(a);if(42===h){if(e){var
l=e[2];cG(f,aJ(e[1]));var
a=j(a+1|0),e=l;continue}throw[0,i,go]}a9(f,h);var
a=a+1|0;continue}return cE(f)}}function
fn(a,b,c,d,e){var
f=aA(b,c,d,e);if(78!==a)if(bu!==a)return f;f.safeSet(f.getLen()-1|0,c8);return f}function
gc(a){return function(d,b){var
k=d.getLen();function
l(a,b){var
m=40===a?41:c$,c=b;for(;;){if(k<=c)return b1(d);if(37===d.safeGet(c)){var
e=c+1|0;if(k<=e)return b1(d);var
g=d.safeGet(e),h=g-40|0;if(1<h>>>0){var
j=h-83|0;if(2<j>>>0)var
f=1;else
switch(j){case
1:var
f=1;break;case
2:var
i=1,f=0;break;default:var
i=0,f=0}if(f){var
c=e+1|0;continue}}else
var
i=0===h?0:1;if(i)return g===m?e+1|0:bn(d,b,g);var
c=l(g,e+1|0)+1|0;continue}var
c=c+1|0;continue}}return l(a,b)}}function
dQ(j,b,c){var
p=j.getLen()-1|0;function
v(a){var
m=a;a:for(;;){if(m<p){if(37===j.safeGet(m)){var
f=0,i=m+1|0;for(;;){if(p<i)var
e=b1(j);else{var
n=j.safeGet(i);if(58<=n){if(95===n){var
f=1,i=i+1|0;continue}}else
if(32<=n)switch(n+fI|0){case
1:case
2:case
4:case
5:case
6:case
7:case
8:case
9:case
12:case
15:break;case
0:case
3:case
11:case
13:var
i=i+1|0;continue;case
10:var
i=g(b,f,i,aF);continue;default:var
i=i+1|0;continue}var
d=i;b:for(;;){if(p<d)var
e=b1(j);else{var
k=j.safeGet(d);if(fD<=k)var
h=0;else
switch(k){case
78:case
88:case
b3:case
aF:case
c6:case
c8:case
c9:var
e=g(b,f,d,aF),h=1;break;case
69:case
70:case
71:case
fA:case
c4:case
c5:var
e=g(b,f,d,c4),h=1;break;case
33:case
37:case
44:case
64:var
e=d+1|0,h=1;break;case
83:case
91:case
bv:var
e=g(b,f,d,bv),h=1;break;case
97:case
b5:case
c7:var
e=g(b,f,d,k),h=1;break;case
76:case
fB:case
bu:var
t=d+1|0;if(p<t)var
e=g(b,f,d,aF),h=1;else{var
r=j.safeGet(t)+fM|0;if(32<r>>>0)var
q=1;else
switch(r){case
0:case
12:case
17:case
23:case
29:case
32:var
e=l(c,g(b,f,d,k),aF),h=1,q=0;break;default:var
q=1}if(q)var
e=g(b,f,d,aF),h=1}break;case
67:case
99:var
e=g(b,f,d,99),h=1;break;case
66:case
98:var
e=g(b,f,d,66),h=1;break;case
41:case
c$:var
e=g(b,f,d,k),h=1;break;case
40:var
e=v(g(b,f,d,k)),h=1;break;case
c_:var
s=g(b,f,d,k),u=l(gc(k),j,s),o=s;for(;;){if(o<(u-2|0)){var
o=l(c,o,j.safeGet(o));continue}var
d=u-1|0;continue b}default:var
h=0}if(!h)var
e=bn(j,d,k)}break}}var
m=e;continue a}}var
m=m+1|0;continue}return m}}v(0);return 0}function
fl(a){var
d=[0,0,0,0];function
b(a,b,c){var
f=41!==c?1:0,g=f?c$!==c?1:0:f;if(g){var
e=97===c?2:1;if(b5===c)d[3]=d[3]+1|0;if(a)d[2]=d[2]+e|0;else
d[1]=d[1]+e|0}return b+1|0}dQ(a,b,function(a,b){return a+1|0});return d[1]}function
fS(a,b,c){var
g=a.safeGet(c);if(9<(g+b7|0)>>>0)return l(b,0,c);var
e=g+b7|0,d=c+1|0;for(;;){var
f=a.safeGet(d);if(48<=f){if(!(58<=f)){var
e=(10*e|0)+(f+b7|0)|0,d=d+1|0;continue}}else
if(36===f)return 0===e?aC(hP):l(b,[0,cZ(e-1|0)],d+1|0);return l(b,0,c)}}function
Q(a,b){return a?b:dN(b)}function
fp(a,b){return a?a[1]:b}function
dR(aD,b,c,d,e,f,g){var
C=j(b,g);function
ac(a){return l(d,C,a)}function
aC(a,b,h,aB){var
n=h.getLen();function
B(g,b){var
m=b;for(;;){if(n<=m)return j(a,C);var
d=h.safeGet(m);if(37===d){var
k=function(a,b){return z(aB,fp(a,b))},az=function(g,f,c,d){var
a=d;for(;;){var
ai=h.safeGet(a)+fI|0;if(!(25<ai>>>0))switch(ai){case
1:case
2:case
4:case
5:case
6:case
7:case
8:case
9:case
12:case
15:break;case
10:return fS(h,function(a,b){var
d=[0,k(a,f),c];return az(g,Q(a,f),d,b)},a+1|0);default:var
a=a+1|0;continue}var
n=h.safeGet(a);if(!(124<=n))switch(n){case
78:case
88:case
b3:case
aF:case
c6:case
c8:case
c9:var
aW=k(g,f),a7=bT(fn(n,h,m,a,c),aW);return o(Q(g,f),a7,a+1|0);case
69:case
71:case
fA:case
c4:case
c5:var
aR=k(g,f),a3=cM(aA(h,m,a,c),aR);return o(Q(g,f),a3,a+1|0);case
76:case
fB:case
bu:var
al=h.safeGet(a+1|0)+fM|0;if(!(32<al>>>0))switch(al){case
0:case
12:case
17:case
23:case
29:case
32:var
M=a+1|0,am=n-gj|0;if(2<am>>>0)var
P=0;else{switch(am){case
1:var
P=0,W=0;break;case
2:var
aV=k(g,f),ao=bT(aA(h,m,M,c),aV),W=1;break;default:var
aU=k(g,f),ao=bT(aA(h,m,M,c),aU),W=1}if(W)var
an=ao,P=1}if(!P)var
aT=k(g,f),an=l_(aA(h,m,M,c),aT);return o(Q(g,f),an,M+1|0)}var
aS=k(g,f),a4=bT(fn(bu,h,m,a,c),aS);return o(Q(g,f),a4,a+1|0);case
37:case
64:return o(f,a5(1,n),a+1|0);case
83:case
bv:var
v=k(g,f);if(bv===n)var
w=v;else{var
b=[0,0],ad=v.getLen()-1|0,aH=0;if(!(ad<0)){var
H=aH;for(;;){var
u=v.safeGet(H),aE=14<=u?34===u?1:92===u?1:0:11<=u?13<=u?1:0:8<=u?1:0,aK=aE?2:cO(u)?1:4;b[1]=b[1]+aK|0;var
aL=H+1|0;if(ad!==H){var
H=aL;continue}break}}if(b[1]===v.getLen())var
ap=v;else{var
i=ab(b[1]);b[1]=0;var
ae=v.getLen()-1|0,aI=0;if(!(ae<0)){var
F=aI;for(;;){var
t=v.safeGet(F),G=t-34|0;if(58<G>>>0)if(fG<=G)var
J=1;else{switch(G+34|0){case
8:i.safeSet(b[1],92);b[1]++;i.safeSet(b[1],98);var
z=1;break;case
9:i.safeSet(b[1],92);b[1]++;i.safeSet(b[1],c7);var
z=1;break;case
10:i.safeSet(b[1],92);b[1]++;i.safeSet(b[1],bu);var
z=1;break;case
13:i.safeSet(b[1],92);b[1]++;i.safeSet(b[1],b5);var
z=1;break;default:var
J=1,z=0}if(z)var
J=0}else
var
J=56<(G-1|0)>>>0?(i.safeSet(b[1],92),b[1]++,i.safeSet(b[1],t),0):1;if(J)if(cO(t))i.safeSet(b[1],t);else{i.safeSet(b[1],92);b[1]++;i.safeSet(b[1],48+(t/b3|0)|0);b[1]++;i.safeSet(b[1],48+((t/10|0)%10|0)|0);b[1]++;i.safeSet(b[1],48+(t%10|0)|0)}b[1]++;var
aJ=F+1|0;if(ae!==F){var
F=aJ;continue}break}}var
ap=i}var
w=p(h0,p(ap,hZ))}if(a===(m+1|0))var
ay=w;else{var
E=aA(h,m,a,c);try{var
R=0,r=1;for(;;){if(E.getLen()<=r)var
af=[0,0,R];else{var
S=E.safeGet(r);if(49<=S)if(58<=S)var
X=0;else
var
af=[0,e0(bE(E,r,(E.getLen()-r|0)-1|0)),R],X=1;else{if(45===S){var
R=1,r=r+1|0;continue}var
X=0}if(!X){var
r=r+1|0;continue}}var
T=af;break}}catch(f){f=A(f);if(f[1]!==bB)throw f;var
T=dP(E,0,bv)}var
I=T[1],y=w.getLen(),aM=T[2],Y=0,a2=32;if(I===y)var
U=w;else
if(I<=y)var
U=bE(w,Y,y);else{var
Z=a5(I,a2);if(aM)a6(w,Y,Z,0,y);else
a6(w,Y,Z,I-y|0,y);var
U=Z}var
ay=U}return o(Q(g,f),ay,a+1|0);case
67:case
99:var
q=k(g,f);if(99===n)var
aj=a5(1,q);else{if(39===q)var
s=g$;else
if(92===q)var
s=ha;else{if(14<=q)var
x=0;else
switch(q){case
8:var
s=hb,x=1;break;case
9:var
s=hc,x=1;break;case
10:var
s=hd,x=1;break;case
13:var
s=gz,x=1;break;default:var
x=0}if(!x)if(cO(q)){var
ax=ab(1);ax.safeSet(0,q);var
s=ax}else{var
D=ab(4);D.safeSet(0,92);D.safeSet(1,48+(q/b3|0)|0);D.safeSet(2,48+((q/10|0)%10|0)|0);D.safeSet(3,48+(q%10|0)|0);var
s=D}}var
aj=p(hX,p(s,hW))}return o(Q(g,f),aj,a+1|0);case
66:case
98:var
aP=a+1|0,aQ=k(g,f)?gZ:g0;return o(Q(g,f),aQ,aP);case
40:case
c_:var
O=k(g,f),as=l(gc(n),h,a+1|0);if(c_===n){var
K=bI(O.getLen()),aq=function(a,b){a9(K,b);return a+1|0};dQ(O,function(a,b,c){if(a)cG(K,hO);else
a9(K,37);return aq(b,c)},aq);var
aN=cE(K);return o(Q(g,f),aN,as)}var
at=Q(g,f),aZ=eH(fl(O),at);return aC(function(a){return B(aZ,as)},at,O,aB);case
33:j(e,C);return B(f,a+1|0);case
41:return o(f,hU,a+1|0);case
44:return o(f,hV,a+1|0);case
70:var
aa=k(g,f);if(0===c)var
ak=hY;else{var
$=aA(h,m,a,c);if(70===n)$.safeSet($.getLen()-1|0,c5);var
ak=$}var
ah=lM(aa);if(3===ah)var
_=aa<0?hR:hS;else
if(4<=ah)var
_=hT;else{var
N=cM(ak,aa),L=0,aO=N.getLen();for(;;){if(aO<=L)var
ag=p(N,hQ);else{var
V=N.safeGet(L)-46|0,aG=23<V>>>0?55===V?1:0:21<(V-1|0)>>>0?1:0;if(!aG){var
L=L+1|0;continue}var
ag=N}var
_=ag;break}}return o(Q(g,f),_,a+1|0);case
91:return bn(h,a,n);case
97:var
aw=k(g,f),au=dN(fp(g,f)),ar=k(0,au),aY=a+1|0,a0=Q(g,au);if(aD)ac(l(aw,0,ar));else
l(aw,C,ar);return B(a0,aY);case
b5:return bn(h,a,n);case
c7:var
av=k(g,f),aX=a+1|0,a1=Q(g,f);if(aD)ac(j(av,0));else
j(av,C);return B(a1,aX)}return bn(h,a,n)}},f=m+1|0,i=0;return fS(h,function(a,b){return az(a,g,i,b)},f)}l(c,C,d);var
m=m+1|0;continue}}function
o(a,b,c){ac(b);return B(a,c)}return B(b,0)}var
k=cZ(0);function
h(a,b){return aC(f,k,a,b)}var
i=fl(g);if(6<i>>>0){var
m=function(k,b){if(i<=k){var
f=P(i,0),j=function(a,b){return o(f,(i-a|0)-1|0,b)},c=0,a=b;for(;;){if(a){var
d=a[2],e=a[1];if(d){j(c,e);var
c=c+1|0,a=d;continue}j(c,e)}return h(g,f)}}return function(a){return m(k+1|0,[0,a,b])}};return m(0,0)}switch(i){case
1:return function(a){var
b=P(1,0);o(b,0,a);return h(g,b)};case
2:return function(a,b){var
c=P(2,0);o(c,0,a);o(c,1,b);return h(g,c)};case
3:return function(a,b,c){var
d=P(3,0);o(d,0,a);o(d,1,b);o(d,2,c);return h(g,d)};case
4:return function(a,b,c,d){var
e=P(4,0);o(e,0,a);o(e,1,b);o(e,2,c);o(e,3,d);return h(g,e)};case
5:return function(a,b,c,d,e){var
f=P(5,0);o(f,0,a);o(f,1,b);o(f,2,c);o(f,3,d);o(f,4,e);return h(g,f)};case
6:return function(a,b,c,d,e,f){var
i=P(6,0);o(i,0,a);o(i,1,b);o(i,2,c);o(i,3,d);o(i,4,e);o(i,5,f);return h(g,i)};default:return h(g,[0])}}function
cH(e){function
d(a){return 0}function
b(a){return e}var
c=0;return function(a){return dR(c,b,g6,fN,cy,d,a)}}function
h1(a){return bI(2*a.getLen()|0)}function
aa(a){function
b(a){var
b=cE(a);a[2]=0;return b}return dR(1,h1,a9,cG,function(a){return 0},b,a)}var
cI=[0,0];function
cK(a,b){var
c=a[b+1];if(mA(c)){if(bW(c)===252)return j(aa(h2),c);if(bW(c)===253){var
e=cM(g2,c),d=0,g=e.getLen();for(;;){if(g<=d)return p(e,g1);var
f=e.safeGet(d),h=48<=f?58<=f?0:1:45===f?1:0;if(h){var
d=d+1|0;continue}return e}}return h3}return j(aa(h4),c)}function
dS(a,b){if(a.length-1<=b)return h5;var
c=dS(a,b+1|0),d=cK(a,b);return l(aa(h6),d,c)}function
ck(a){var
c=cI[1];for(;;){if(c){var
t=c[2],u=c[1];try{var
v=j(u,a),d=v}catch(f){var
d=0}if(d)return d[1];var
c=t;continue}if(a[1]===dT)return h$;if(a[1]===dU)return ia;if(a[1]===dV){var
e=a[2],k=e[3],w=e[2],x=e[1];return bR(aa(cJ),x,w,k,k+5|0,ib)}if(a[1]===i){var
f=a[2],m=f[3],y=f[2],z=f[1];return bR(aa(cJ),z,y,m,m+6|0,hn)}if(a[1]===dW){var
g=a[2],n=g[3],A=g[2],o=g[1];return bR(aa(cJ),o,A,n,n+6|0,ho)}var
h=a.length-1,B=a[0+1][0+1];if(2<h>>>0)var
q=dS(a,2),r=cK(a,1),b=l(aa(h7),r,q);else
switch(h){case
1:var
b=h9;break;case
2:var
s=cK(a,1),b=j(aa(h_),s);break;default:var
b=h8}return p(B,b)}}function
dz(a){var
h=lO(lW(0));if(h){var
d=h[1],f=d.length-1-1|0,p=0;if(!(f<0)){var
c=p;for(;;){if(e$(z(d,c),hv)){var
b=z(d,c),i=0===b[0]?b[1]:b[1],e=i?0===c?hp:hs:0===c?ht:hu;if(0===b[0])var
k=b[5],m=b[4],n=b[3],o=b[2],g=bR(aa(hq),e,o,n,m,k);else
var
g=j(aa(hr),e);l(cH(a),hw,g)}var
q=c+1|0;if(f!==c){var
c=q;continue}break}}return 0}return j(cH(a),hx)}function
dA(a){cI[1]=[0,a,cI[1]];return 0}function
fu(a){var
d=[0,P(55,0),0],h=0===a.length-1?[0,0]:a,g=h.length-1,c=0;for(;;){o(d[1],c,c);var
r=c+1|0;if(54!==c){var
c=r;continue}var
f=[0,hy],l=0,s=55,m=eX(55,g)?s:g,i=54+m|0;if(!(i<0)){var
b=l;for(;;){var
j=b%55|0,n=f[1],k=p(n,aJ(z(h,e7(b,g))));f[1]=ms(k,0,k.getLen());var
e=f[1];o(d[1],j,(z(d[1],j)^(((e.safeGet(0)+(e.safeGet(1)<<8)|0)+(e.safeGet(2)<<16)|0)+(e.safeGet(3)<<24)|0))&b4);var
q=b+1|0;if(i!==b){var
b=q;continue}break}}d[2]=0;return d}}function
eM(a){a[2]=(a[2]+1|0)%55|0;var
b=z(a[1],a[2]),c=(z(a[1],(a[2]+24|0)%55|0)+(b^(b>>>25|0)&31)|0)&b4;o(a[1],a[2],c);return c}32===cB;try{var
lk=fh(lj),cl=lk}catch(f){f=A(f);if(f[1]!==x)throw f;try{var
li=fh(lh),dB=li}catch(f){f=A(f);if(f[1]!==x)throw f;var
dB=hA}var
cl=dB}var
ft=cl.getLen(),m2=0;if(ft<0)var
cm=s(gD);else
try{var
bF=m2;for(;;){if(ft<=bF)throw[0,x];if(cl.safeGet(bF)!==82){var
bF=bF+1|0;continue}var
gE=1,cm=gE;break}}catch(f){f=A(f);if(f[1]!==x)throw f;var
cm=0}var
bJ=[b6,function(a){return fu(mR(0))}];function
eI(a,b){var
c=[0,[0,a,0]],d=b[1];if(d){var
e=d[1];b[1]=c;e[2]=c;return 0}b[1]=c;b[2]=c;return 0}var
cn=[0,hC];function
dD(a){var
b=a[2];if(b){var
c=b[1],d=c[2],e=c[1];a[2]=d;if(0===d)a[1]=0;return e}throw[0,cn]}function
dd(a,b){a[13]=a[13]+b[3]|0;return eI(b,a[27])}var
fO=1000000010;function
co(a,b){return g(a[17],b,0,b.getLen())}function
de(a){return j(a[19],0)}function
dE(a,b){return j(a[20],b)}function
ay(a,b,c){de(a);a[11]=1;var
e=(a[6]-c|0)+b|0,d=a[8],f=mn(d,e)?d:e;a[10]=f;a[9]=a[6]-a[10]|0;return dE(a,a[10])}function
dX(a,b){return ay(a,0,b)}function
aP(a,b){a[9]=a[9]-b|0;return dE(a,b)}function
eJ(a){try{for(;;){var
C=a[27][2];if(!C)throw[0,cn];var
h=C[1][1],l=h[1],b=h[2],z=l<0?1:0,X=h[3],Y=z?(a[13]-a[12]|0)<a[9]?1:0:z,B=1-Y;if(B){dD(a[27]);var
g=0<=l?l:fO;if(typeof
b===k)switch(b){case
1:var
K=a[2];if(K)a[2]=K[2];break;case
2:var
o=a[3];if(o)a[3]=o[2];break;case
3:var
p=a[2];if(p)dX(a,p[1][2]);else
de(a);break;case
4:if(a[10]!==(a[6]-a[9]|0)){var
H=dD(a[27]),O=H[1];a[12]=a[12]-H[3]|0;a[9]=a[9]+O|0}break;case
5:var
i=a[5];if(i){var
P=i[2];co(a,j(a[24],i[1]));a[5]=P}break;default:var
I=a[3];if(I){var
J=I[1][1],L=function(a,b){if(b){var
c=b[1],d=b[2];return mo(a,c)?[0,a,b]:[0,c,L(a,d)]}return[0,a,0]};J[1]=L(a[6]-a[9]|0,J[1])}}else
switch(b[0]){case
1:var
c=b[2],e=b[1],q=a[2];if(q){var
r=q[1],d=r[2];switch(r[1]){case
1:ay(a,c,d);break;case
2:ay(a,c,d);break;case
3:if(a[9]<g)ay(a,c,d);else
aP(a,e);break;case
4:if(a[11])aP(a,e);else
if(a[9]<g)ay(a,c,d);else
if(((a[6]-d|0)+c|0)<a[10])ay(a,c,d);else
aP(a,e);break;case
5:aP(a,e);break;default:aP(a,e)}}break;case
2:var
m=a[6]-a[9]|0,s=a[3],R=b[2],S=b[1];if(s){var
t=s[1][1],v=t[1];if(v){var
U=v[1];try{var
f=t[1];for(;;){if(!f)throw[0,x];var
u=f[1],T=f[2];if(!eX(u,m)){var
f=T;continue}var
N=u;break}}catch(f){f=A(f);if(f[1]!==x)throw f;var
N=U}var
n=N}else
var
n=m;var
M=n-m|0;if(0<=M)aP(a,M+S|0);else
ay(a,n+R|0,a[6])}break;case
3:var
w=b[2],V=b[1];if(a[8]<(a[6]-a[9]|0)){var
D=a[2];if(D)var
E=D[1],F=E[2],G=E[1],_=a[9]<F?0===G?0:5<=G?1:(dX(a,F),1):0;else
de(a)}var
Z=a[9]-V|0,W=1===w?1:a[9]<g?w:5;a[2]=[0,[0,W,Z],a[2]];break;case
4:a[3]=[0,b[1],a[3]];break;case
5:var
y=b[1];co(a,j(a[23],y));a[5]=[0,y,a[5]];break;default:var
Q=b[1];a[9]=a[9]-g|0;co(a,Q);a[11]=0}a[12]=X+a[12]|0;continue}break}}catch(f){f=A(f);if(f[1]===cn)return 0;throw f}return B}function
b2(a,b,c){return[0,a,b,c]}var
fT=[0,[0,-1,b2(-1,hD,0)],0];function
en(a){a[1]=fT;return 0}function
eo(a,b){var
d=a[1];if(d){var
e=d[1],c=e[2],f=c[1],g=d[2],h=c[2];if(e[1]<a[12])return en(a);if(typeof
h!==k)switch(h[0]){case
1:case
2:var
j=b?(c[1]=a[13]+f|0,a[1]=g,0):b;return j;case
3:var
i=1-b,l=i?(c[1]=a[13]+f|0,a[1]=g,0):i;return l}return 0}return 0}var
ep=a5(80,32);function
hF(a){return p(hH,p(a,hG))}function
hI(a){return p(hK,p(a,hJ))}function
hL(a){return 0}function
hM(a){return 0}function
fv(a,b){function
h(a){return 0}var
d=[0,0,0];function
f(a){return 0}var
e=b2(-1,hf,0);eI(e,d);var
c=[0,[0,[0,1,e],fT],0,0,0,0,78,10,68,78,0,1,1,1,1,fx,hg,a,b,f,h,0,0,hF,hI,hL,hM,d];c[19]=function(a){return g(c[17],hE,0,1)};c[20]=function(a){var
b=a;for(;;){var
d=0<b?1:0;if(d){if(80<b){g(c[17],ep,0,80);var
b=b-80|0;continue}return g(c[17],ep,0,b)}return d}};return c}function
fo(d){function
a(a){return cy(d)}return fv(function(a,b,c){if(0<=b)if(0<=c)if(!((a.getLen()-c|0)<b))return e6(d,a,b,c);return s(g3)},a)}var
aS=bI(512),c=fo(na);fo(aH);function
hh(a){return 0}fv(function(a,b,c){var
d=b<0?1:0;if(d)var
e=d;else
var
g=c<0?1:0,e=g||((a.getLen()-c|0)<b?1:0);if(e)s(gr);var
f=aS[2]+c|0;if(aS[3]<f)cF(aS,c);a6(a,b,aS[1],aS[2],c);aS[2]=f;return 0},hh);var
g4=cx[1];cx[1]=function(a){for(;;){if(1<c[14]){if(1<c[14]){if(c[14]<c[15]){dd(c,[0,0,1,0]);eo(c,1);eo(c,0)}c[14]=c[14]-1|0}continue}c[13]=fO;eJ(c);c[12]=1;c[13]=1;var
b=c[27];b[1]=0;b[2]=0;en(c);c[2]=0;c[3]=0;c[4]=0;c[5]=0;c[10]=0;c[14]=0;c[9]=c[6];c[14]=c[14]+1|0;var
g=3,h=0;if(c[14]<c[15]){var
f=b2(-c[13]|0,[3,h,g],0);dd(c,f);c[1]=[0,[0,c[13],f],c[1]]}else
if(c[14]===c[15]){var
d=c[16],e=d.getLen();dd(c,b2(e,[0,d],e));eJ(c)}j(c[18],0);return j(g4,0)}};function
cp(a,b){return fe(a,b[0+1])}function
m0(a){return 0}function
fr(a,b){return j(b,a)}function
fw(d,b,c){return j(b,function(a){return j(c,j(d,a))})}function
cY(d,b,c){return j(b,function(a){return l(d,a,c)})}function
ge(a,b,c){var
f=a?a[1]:function(a,b){return lQ(a,b)},e=[0,0],d=[0,0];return j(b,function(a){if(e[1])if(l(f,d[1],a))return 0;e[1]=1;d[1]=a;return j(c,a)})}function
b9(a,b){return M(b,a)}var
hk=500;function
eq(a,b){function
d(a){return a}var
c=b;for(;;){if(c){var
e=c[2],f=j(a,c[1]),d=function(c,b){return function(a){function
d(a,b,c){if(b){if(0===a)return dY(a4(b),c);var
e=b[1];return[0,e,d(a-1|0,b[2],c)]}return c}return c(d(hk,b,a))}}(d,f),c=e;continue}return d(0)}}function
er(a){return a?a[1]:s(hl)}function
aQ(a,b){return j(b,a)}function
es(a,b,c){return j(a,j(b,c))}var
aL=cD([0,bG]),gm=[0,hm],hN=aL[1],he=aL[3],iQ=aL[1],eK=aM(function(a,b){return g(aL[4],b[1],b[2],a)},iQ,[0,[0,iS,fJ],[0,[0,iR,2.71828182845904509],0]]);function
et(a){switch(a){case
1:return function(a,b){return a-b};case
2:return function(a,b){return a*b};case
3:return function(a,b){return a/b};case
4:return function(a,b){return Math.pow(a,b)};default:return function(a,b){return a+b}}}function
eu(a){return a?a[1]:function(a){return-a}}function
a_(a,b){switch(b[0]){case
1:var
c=b[2],d=b[1],e=a_(a,b[3]),f=a_(a,d);return l(et(c),f,e);case
2:var
g=b[1],h=a_(a,b[2]);return j(eu(g),h);case
3:return j(a,b[1]);default:return b[1]}}function
a$(a,b){switch(b[0]){case
1:var
c=b[2],d=b[1],e=a$(a,b[3]);return[1,a$(a,d),c,e];case
2:var
f=b[1];return[2,f,a$(a,b[2])];case
3:return j(a,b[1]);default:return[0,b[1]]}}function
ev(a,b,c,d,e){var
k=a,i=b,h=c,g=d,f=e;for(;;){var
l=k?k[1]:function(a){return 0},m=i?i[1]:function(a){return 0},n=h?h[1]:function(a){return 0},o=g?g[1]:function(a){return 0};switch(f[0]){case
1:var
p=f[3],q=f[1];j(o,f[2]);ev([0,l],[0,m],[0,n],[0,o],q);var
k=[0,l],i=[0,m],h=[0,n],g=[0,o],f=p;continue;case
2:var
r=f[2];j(n,f[1]);var
k=[0,l],i=[0,m],h=[0,n],g=[0,o],f=r;continue;case
3:return j(l,f[1]);default:return j(m,f[1])}}}function
ew(a,b){return ev([0,b],0,0,0,a)}function
a3(a,b){switch(b[0]){case
1:var
f=b[2],k=b[3],d=a3(a,b[1]),c=a3(a,k);if(0===d[0])if(0===c[0]){var
m=c[1],n=d[1];return[0,l(et(f),n,m)]}return[1,d,f,c];case
2:var
g=b[1],e=a3(a,b[2]);if(0===e[0]){var
o=e[1];return[0,j(eu(g),o)]}return[2,g,e];case
3:var
h=b[1],i=j(a,h);return i?[0,i[1]]:[3,h];default:return[0,b[1]]}}var
T=cD([0,bG]);function
ex(e,b,c){return aN(function(a,b){var
d=b[2],c=l(e,a,b[1]);return[0,c[1],[0,c[2],d]]},b,[0,c,0])}function
ey(a,b){var
c=[0,0],d=j(a,function(a){return b9(b,a)});j(d,function(a){c[1]=[0,a,c[1]];return 0});return a4(c[1])}var
iT=[0,0,T[1]];function
cq(a,b){if(l(T[3],a,b[2]))return b;var
c=g(T[4],a,b[1],b[2]);return[0,b[1]+1|0,c]}function
ez(a,b){return aM(function(a,b){return cq(b[1],a)},a,b)}function
iU(a,b){var
c=cq(b[1],a);return ez(c,b[3])}var
ao=[0,[0,iX]];function
iV(a,b){return cq(b[1],a)}function
bm(a,b,c){var
t=c[1],u=t[1],q=u[1],l=q[2],e=[0,q[1],l,[0,q[3],u[3],t[3],c[3]]];if(5<=l){if(15===l)return e[3]}else
if(2<(l-1|0)>>>0){if(-1===b[6])throw[0,i,i0];var
o=b[3];if(typeof
o===k){if(11===o){var
g=e[1],j=e[2],p=[0,e[3],0];for(;;){if(4===j){if(-1===b[6])throw[0,i,iY];var
s=b[3];if(typeof
s===k)if(11===s)return p;if(-1===b[6])throw[0,i,iZ];b[6]=-1;return a<50?h(1+a,b,g,j):f(h,[0,b,g,j])}if(0===j){var
w=g[2],x=[0,g[3],p],g=g[1],j=w,p=x;continue}return a<50?n(1+a,0):f(n,[0,0])}}}else
if(1===o[0]){var
d=[0,e,0,o[1]],v=m(b);if(typeof
v===k)if(9===v){var
r=m(b);if(typeof
r===k)if(14<=r)switch(r+da|0){case
1:break;case
2:return a<50?bb(1+a,b,d,3):f(bb,[0,b,d,3]);default:return a<50?ba(1+a,b,d,3):f(ba,[0,b,d,3])}if(-1===b[6])throw[0,i,jz];b[6]=-1;return a<50?h(1+a,b,d,3):f(h,[0,b,d,3])}if(-1===b[6])throw[0,i,jA];b[6]=-1;return a<50?h(1+a,b,d[1],d[2]):f(h,[0,b,d[1],d[2]])}if(-1===b[6])throw[0,i,i1];b[6]=-1;return a<50?h(1+a,b,e,0):f(h,[0,b,e,0])}return a<50?n(1+a,0):f(n,[0,0])}function
aw(a,b,c,d){var
o=c,g=d,l=0;for(;;){var
e=[0,o,g,l];if(!(11<=g))switch(g){case
1:if(-1===b[6])throw[0,i,i2];var
p=b[3];if(typeof
p===k)if(3===p){m(b);return a<50?bm(1+a,b,e):f(bm,[0,b,e])}if(-1===b[6])throw[0,i,i3];b[6]=-1;return a<50?h(1+a,b,e[1],e[2]):f(h,[0,b,e[1],e[2]]);case
5:var
j=e[1],o=j[1],g=j[2],l=[0,j[3],e[3]];continue;case
10:if(-1===b[6])throw[0,i,i4];var
q=b[3];if(typeof
q===k)if(3===q)return a<50?bm(1+a,b,e):f(bm,[0,b,e]);if(-1===b[6])throw[0,i,i5];b[6]=-1;return a<50?h(1+a,b,e[1],e[2]):f(h,[0,b,e[1],e[2]])}return a<50?n(1+a,0):f(n,[0,0])}}function
av(a,b,c,d){var
e=[0,c,d],g=m(b);if(typeof
g===k)switch(g){case
0:return a<50?H(1+a,b,e,9):f(H,[0,b,e,9]);case
5:return a<50?G(1+a,b,e,9):f(G,[0,b,e,9]);case
6:return a<50?F(1+a,b,e,9):f(F,[0,b,e,9]);case
7:return a<50?D(1+a,b,e,9):f(D,[0,b,e,9]);case
13:return a<50?B(1+a,b,e,9):f(B,[0,b,e,9])}else
switch(g[0]){case
0:return a<50?E(1+a,b,e,9,g[1]):f(E,[0,b,e,9,g[1]]);case
1:return a<50?C(1+a,b,e,9,g[1]):f(C,[0,b,e,9,g[1]])}if(-1===b[6])throw[0,i,i6];b[6]=-1;return a<50?h(1+a,b,e,9):f(h,[0,b,e,9])}function
bl(a,b,c,d){var
l=c[1],e=[0,l[1],l[2],[0,c[3],d]];if(-1===b[6])throw[0,i,i9];var
g=b[3];if(typeof
g===k){if(11===g)var
j=1;else
if(14<=g)switch(g+da|0){case
1:var
j=0;break;case
2:var
j=1;break;default:return a<50?ba(1+a,b,e,17):f(ba,[0,b,e,17])}else
var
j=0;if(j)return a<50?bb(1+a,b,e,17):f(bb,[0,b,e,17])}if(-1===b[6])throw[0,i,i_];b[6]=-1;return a<50?h(1+a,b,e,17):f(h,[0,b,e,17])}function
au(a,b,c,d){var
e=c,m=d,j=0;for(;;){var
l=m+fG|0;if(1<l>>>0){if(-12===l){var
o=e[3],p=e[1],g=[0,p[1],p[2],[0,o[1],o[2],j]];if(-1===b[6])throw[0,i,i7];var
q=b[3];if(typeof
q===k){var
r=q-1|0;if(!(2<r>>>0))switch(r){case
1:break;case
2:return a<50?aw(1+a,b,g,5):f(aw,[0,b,g,5]);default:return a<50?av(1+a,b,g,5):f(av,[0,b,g,5])}}if(-1===b[6])throw[0,i,i8];b[6]=-1;return a<50?h(1+a,b,g,5):f(h,[0,b,g,5])}return a<50?n(1+a,0):f(n,[0,0])}if(0===l){var
s=e[2],t=[0,e[3],j],e=e[1],m=s,j=t;continue}return a<50?bl(1+a,b,e,j):f(bl,[0,b,e,j])}}function
bk(a,b,c){var
d=m(b);if(typeof
d===k)switch(d){case
7:return a<50?w(1+a,b,c,33):f(w,[0,b,c,33]);case
8:return a<50?v(1+a,b,c,33):f(v,[0,b,c,33])}else
switch(d[0]){case
2:return a<50?u(1+a,b,c,33,d[1]):f(u,[0,b,c,33,d[1]]);case
3:return a<50?q(1+a,b,c,33,d[1]):f(q,[0,b,c,33,d[1]]);case
0:break;default:return a<50?r(1+a,b,c,33,d[1]):f(r,[0,b,c,33,d[1]])}if(-1===b[6])throw[0,i,ir];b[6]=-1;return a<50?h(1+a,b,c,33):f(h,[0,b,c,33])}function
bj(a,b,c,d){var
e=[0,c[1],c[2],[0,c[3],d]];if(-1===b[6])throw[0,i,is];var
j=b[3];if(typeof
j===k)if(10===j){var
g=m(b);if(typeof
g===k)switch(g){case
1:case
3:return a<50?au(1+a,b,e,8):f(au,[0,b,e,8]);case
0:return a<50?H(1+a,b,e,8):f(H,[0,b,e,8]);case
5:return a<50?G(1+a,b,e,8):f(G,[0,b,e,8]);case
6:return a<50?F(1+a,b,e,8):f(F,[0,b,e,8]);case
7:return a<50?D(1+a,b,e,8):f(D,[0,b,e,8]);case
13:return a<50?B(1+a,b,e,8):f(B,[0,b,e,8])}else
switch(g[0]){case
0:return a<50?E(1+a,b,e,8,g[1]):f(E,[0,b,e,8,g[1]]);case
1:return a<50?C(1+a,b,e,8,g[1]):f(C,[0,b,e,8,g[1]])}if(-1===b[6])throw[0,i,it];b[6]=-1;return a<50?h(1+a,b,e,8):f(h,[0,b,e,8])}if(-1===b[6])throw[0,i,iu];b[6]=-1;return a<50?h(1+a,b,e[1],e[2]):f(h,[0,b,e[1],e[2]])}function
bi(a,b,c,d,e){if(-1===b[6])throw[0,i,iv];var
g=b[3];if(typeof
g===k)if(2===g){m(b);return a<50?bj(1+a,b,c,e):f(bj,[0,b,c,e])}if(-1===b[6])throw[0,i,iw];b[6]=-1;return a<50?h(1+a,b,c,d):f(h,[0,b,c,d])}function
bh(a,b,c,d){var
o=c[2],e=[0,c[1],o,[0,c[3],d]];if(20<=o)var
p=22<=o?0:1;else
if(8<=o)switch(o-8|0){case
3:case
4:if(-1===b[6])throw[0,i,iB];var
l=b[3];if(typeof
l===k)switch(l){case
1:case
3:var
m=e[1],r=e[2],q=[0,e[3],0];for(;;){if(11===r){var
x=m[2],y=[0,m[3],q],m=m[1],r=x,q=y;continue}if(12===r){var
s=m[2],g=[0,m[1],s,q];if(2===s){if(-1===b[6])throw[0,i,i$];var
t=b[3];if(typeof
t===k){var
u=t-1|0;if(!(2<u>>>0))switch(u){case
1:break;case
2:return a<50?aw(1+a,b,g,1):f(aw,[0,b,g,1]);default:return a<50?av(1+a,b,g,1):f(av,[0,b,g,1])}}if(-1===b[6])throw[0,i,ja];b[6]=-1;return a<50?h(1+a,b,g,1):f(h,[0,b,g,1])}if(13===s){if(-1===b[6])throw[0,i,jb];var
v=b[3];if(typeof
v===k){var
w=v-1|0;if(!(2<w>>>0))switch(w){case
1:break;case
2:return a<50?aw(1+a,b,g,10):f(aw,[0,b,g,10]);default:return a<50?av(1+a,b,g,10):f(av,[0,b,g,10])}}if(-1===b[6])throw[0,i,jc];b[6]=-1;return a<50?h(1+a,b,g,10):f(h,[0,b,g,10])}return a<50?n(1+a,0):f(n,[0,0])}return a<50?n(1+a,0):f(n,[0,0])}case
0:return a<50?H(1+a,b,e,11):f(H,[0,b,e,11]);case
5:return a<50?G(1+a,b,e,11):f(G,[0,b,e,11]);case
6:return a<50?F(1+a,b,e,11):f(F,[0,b,e,11]);case
7:return a<50?D(1+a,b,e,11):f(D,[0,b,e,11]);case
13:return a<50?B(1+a,b,e,11):f(B,[0,b,e,11])}else
switch(l[0]){case
0:return a<50?E(1+a,b,e,11,l[1]):f(E,[0,b,e,11,l[1]]);case
1:return a<50?C(1+a,b,e,11,l[1]):f(C,[0,b,e,11,l[1]])}if(-1===b[6])throw[0,i,iC];b[6]=-1;return a<50?h(1+a,b,e,11):f(h,[0,b,e,11]);case
0:var
p=1;break;default:var
p=0}else
var
p=0;if(p){if(-1===b[6])throw[0,i,iz];var
j=b[3];if(typeof
j===k)switch(j){case
1:case
3:case
11:case
14:case
16:return a<50?au(1+a,b,e,20):f(au,[0,b,e,20]);case
0:return a<50?H(1+a,b,e,20):f(H,[0,b,e,20]);case
5:return a<50?G(1+a,b,e,20):f(G,[0,b,e,20]);case
6:return a<50?F(1+a,b,e,20):f(F,[0,b,e,20]);case
7:return a<50?D(1+a,b,e,20):f(D,[0,b,e,20]);case
13:return a<50?B(1+a,b,e,20):f(B,[0,b,e,20])}else
switch(j[0]){case
0:return a<50?E(1+a,b,e,20,j[1]):f(E,[0,b,e,20,j[1]]);case
1:return a<50?C(1+a,b,e,20,j[1]):f(C,[0,b,e,20,j[1]])}if(-1===b[6])throw[0,i,iA];b[6]=-1;return a<50?h(1+a,b,e,20):f(h,[0,b,e,20])}return a<50?n(1+a,0):f(n,[0,0])}function
bg(a,b,c,d,e){if(-1===b[6])throw[0,i,iD];var
g=b[3];if(typeof
g===k)if(2===g){m(b);return a<50?bh(1+a,b,c,e):f(bh,[0,b,c,e])}if(-1===b[6])throw[0,i,iE];b[6]=-1;return a<50?h(1+a,b,c,d):f(h,[0,b,c,d])}function
bf(a,b,c,d){var
g=[0,c[1],c[2],[0,c[3],d]];if(-1===b[6])throw[0,i,iF];var
j=b[3];if(typeof
j===k)switch(j){case
10:case
11:case
14:case
16:var
s=g[1],o=g[2],r=[0,g[3],0];for(;;){var
e=[0,s,o,r];if(35<=o)switch(o-35|0){case
1:if(-1===b[6])throw[0,i,jd];var
q=b[3];if(typeof
q===k)if(10<=q)switch(q+fC|0){case
2:case
3:case
5:break;case
0:var
l=m(b);if(typeof
l===k)switch(l){case
11:case
14:case
16:return a<50?au(1+a,b,e,21):f(au,[0,b,e,21]);case
0:return a<50?H(1+a,b,e,21):f(H,[0,b,e,21]);case
5:return a<50?G(1+a,b,e,21):f(G,[0,b,e,21]);case
6:return a<50?F(1+a,b,e,21):f(F,[0,b,e,21]);case
7:return a<50?D(1+a,b,e,21):f(D,[0,b,e,21]);case
13:return a<50?B(1+a,b,e,21):f(B,[0,b,e,21])}else
switch(l[0]){case
0:return a<50?E(1+a,b,e,21,l[1]):f(E,[0,b,e,21,l[1]]);case
1:return a<50?C(1+a,b,e,21,l[1]):f(C,[0,b,e,21,l[1]])}if(-1===b[6])throw[0,i,ip];b[6]=-1;return a<50?h(1+a,b,e,21):f(h,[0,b,e,21]);default:return a<50?bl(1+a,b,e,0):f(bl,[0,b,e,0])}if(-1===b[6])throw[0,i,iq];b[6]=-1;return a<50?h(1+a,b,e[1],e[2]):f(h,[0,b,e[1],e[2]]);case
2:break;default:var
p=e[1],s=p[1],o=p[2],r=[0,p[3],e[3]];continue}return a<50?n(1+a,0):f(n,[0,0])}case
0:return a<50?H(1+a,b,g,35):f(H,[0,b,g,35]);case
5:return a<50?G(1+a,b,g,35):f(G,[0,b,g,35]);case
6:return a<50?F(1+a,b,g,35):f(F,[0,b,g,35]);case
7:return a<50?D(1+a,b,g,35):f(D,[0,b,g,35]);case
13:return a<50?B(1+a,b,g,35):f(B,[0,b,g,35])}else
switch(j[0]){case
0:return a<50?E(1+a,b,g,35,j[1]):f(E,[0,b,g,35,j[1]]);case
1:return a<50?C(1+a,b,g,35,j[1]):f(C,[0,b,g,35,j[1]])}if(-1===b[6])throw[0,i,iG];b[6]=-1;return a<50?h(1+a,b,g,35):f(h,[0,b,g,35])}function
at(a,b,c,d,e){var
g=c,j=d,l=e;for(;;){if(24===j){var
p=g[2],q=[0,[0,g[3],0],l],g=g[1],j=p,l=q;continue}if(34===j){if(-1===b[6])throw[0,i,iJ];var
o=b[3];if(typeof
o===k)if(2===o){m(b);return a<50?bf(1+a,b,g,l):f(bf,[0,b,g,l])}if(-1===b[6])throw[0,i,iK];b[6]=-1;return a<50?h(1+a,b,g,j):f(h,[0,b,g,j])}return a<50?n(1+a,0):f(n,[0,0])}}function
be(a,b,c,d,e){var
g=[0,c,d,e],j=m(b);if(typeof
j===k)if(4===j)return a<50?bk(1+a,b,g):f(bk,[0,b,g]);if(-1===b[6])throw[0,i,iL];b[6]=-1;return a<50?h(1+a,b,g[1],g[2]):f(h,[0,b,g[1],g[2]])}function
O(a,b,c){var
d=m(b);if(typeof
d===k)switch(d){case
7:return a<50?w(1+a,b,c,29):f(w,[0,b,c,29]);case
8:return a<50?v(1+a,b,c,29):f(v,[0,b,c,29])}else
switch(d[0]){case
2:return a<50?u(1+a,b,c,29,d[1]):f(u,[0,b,c,29,d[1]]);case
3:return a<50?q(1+a,b,c,29,d[1]):f(q,[0,b,c,29,d[1]]);case
0:break;default:return a<50?r(1+a,b,c,29,d[1]):f(r,[0,b,c,29,d[1]])}if(-1===b[6])throw[0,i,iM];b[6]=-1;return a<50?h(1+a,b,c,29):f(h,[0,b,c,29])}function
I(a,b,c){var
d=m(b);if(typeof
d===k)switch(d){case
7:return a<50?w(1+a,b,c,28):f(w,[0,b,c,28]);case
8:return a<50?v(1+a,b,c,28):f(v,[0,b,c,28])}else
switch(d[0]){case
2:return a<50?u(1+a,b,c,28,d[1]):f(u,[0,b,c,28,d[1]]);case
3:return a<50?q(1+a,b,c,28,d[1]):f(q,[0,b,c,28,d[1]]);case
0:break;default:return a<50?r(1+a,b,c,28,d[1]):f(r,[0,b,c,28,d[1]])}if(-1===b[6])throw[0,i,iN];b[6]=-1;return a<50?h(1+a,b,c,28):f(h,[0,b,c,28])}function
ak(a,b,c){var
d=m(b);if(typeof
d===k)switch(d){case
7:return a<50?w(1+a,b,c,27):f(w,[0,b,c,27]);case
8:return a<50?v(1+a,b,c,27):f(v,[0,b,c,27])}else
switch(d[0]){case
2:return a<50?u(1+a,b,c,27,d[1]):f(u,[0,b,c,27,d[1]]);case
3:return a<50?q(1+a,b,c,27,d[1]):f(q,[0,b,c,27,d[1]]);case
0:break;default:return a<50?r(1+a,b,c,27,d[1]):f(r,[0,b,c,27,d[1]])}if(-1===b[6])throw[0,i,iO];b[6]=-1;return a<50?h(1+a,b,c,27):f(h,[0,b,c,27])}function
aj(a,b,c){var
d=m(b);if(typeof
d===k)switch(d){case
7:return a<50?w(1+a,b,c,25):f(w,[0,b,c,25]);case
8:return a<50?v(1+a,b,c,25):f(v,[0,b,c,25])}else
switch(d[0]){case
2:return a<50?u(1+a,b,c,25,d[1]):f(u,[0,b,c,25,d[1]]);case
3:return a<50?q(1+a,b,c,25,d[1]):f(q,[0,b,c,25,d[1]]);case
0:break;default:return a<50?r(1+a,b,c,25,d[1]):f(r,[0,b,c,25,d[1]])}if(-1===b[6])throw[0,i,id];b[6]=-1;return a<50?h(1+a,b,c,25):f(h,[0,b,c,25])}function
N(a,b,c){var
d=m(b);if(typeof
d===k)switch(d){case
7:return a<50?w(1+a,b,c,26):f(w,[0,b,c,26]);case
8:return a<50?v(1+a,b,c,26):f(v,[0,b,c,26])}else
switch(d[0]){case
2:return a<50?u(1+a,b,c,26,d[1]):f(u,[0,b,c,26,d[1]]);case
3:return a<50?q(1+a,b,c,26,d[1]):f(q,[0,b,c,26,d[1]]);case
0:break;default:return a<50?r(1+a,b,c,26,d[1]):f(r,[0,b,c,26,d[1]])}if(-1===b[6])throw[0,i,ie];b[6]=-1;return a<50?h(1+a,b,c,26):f(h,[0,b,c,26])}function
n(a,b){j(cH(aH),ig);throw[0,i,ih]}function
bd(a,b,c,d){var
e=[0,c,d],j=m(b);if(typeof
j===k)if(10===j){var
g=m(b);if(typeof
g===k)switch(g){case
0:return a<50?H(1+a,b,e,12):f(H,[0,b,e,12]);case
5:return a<50?G(1+a,b,e,12):f(G,[0,b,e,12]);case
6:return a<50?F(1+a,b,e,12):f(F,[0,b,e,12]);case
7:return a<50?D(1+a,b,e,12):f(D,[0,b,e,12]);case
13:return a<50?B(1+a,b,e,12):f(B,[0,b,e,12])}else
switch(g[0]){case
0:return a<50?E(1+a,b,e,12,g[1]):f(E,[0,b,e,12,g[1]]);case
1:return a<50?C(1+a,b,e,12,g[1]):f(C,[0,b,e,12,g[1]])}if(-1===b[6])throw[0,i,ii];b[6]=-1;return a<50?h(1+a,b,e,12):f(h,[0,b,e,12])}if(-1===b[6])throw[0,i,ij];b[6]=-1;return a<50?h(1+a,b,e[1],e[2]):f(h,[0,b,e[1],e[2]])}function
L(a,b,c,d,e){var
g=[0,c,d,e],A=d-8|0;if(13<A>>>0){if(!(1<(A-27|0)>>>0)){if(-1===b[6])throw[0,i,ik];var
C=b[3];if(typeof
C===k)switch(C){case
1:case
2:case
3:case
4:case
9:case
12:case
15:var
x=0;break;case
8:var
I=m(b);if(typeof
I!==k)if(1===I[0]){var
O=g,N=34,M=I[1];for(;;){var
j=[0,O,N,M],t=m(b);if(typeof
t===k)if(5<=t){if(15===t){var
H=m(b);if(typeof
H!==k)if(1===H[0]){var
O=j,N=24,M=H[1];continue}if(-1===b[6])throw[0,i,iH];b[6]=-1;return a<50?h(1+a,b,j,24):f(h,[0,b,j,24])}}else
if(2<=t)switch(t-2|0){case
1:break;case
2:return a<50?bk(1+a,b,j):f(bk,[0,b,j]);default:return a<50?at(1+a,b,j[1],j[2],[0,[0,j[3],0],0]):f(at,[0,b,j[1],j[2],[0,[0,j[3],0],0]])}if(-1===b[6])throw[0,i,iI];b[6]=-1;return a<50?h(1+a,b,j[1],j[2]):f(h,[0,b,j[1],j[2]])}}if(-1===b[6])throw[0,i,im];b[6]=-1;return a<50?h(1+a,b,g,34):f(h,[0,b,g,34]);default:var
x=1}else
switch(C[0]){case
0:case
1:var
x=1;break;default:var
x=0}if(x)return a<50?bf(1+a,b,g,0):f(bf,[0,b,g,0]);if(-1===b[6])throw[0,i,il];b[6]=-1;return a<50?h(1+a,b,g[1],g[2]):f(h,[0,b,g[1],g[2]])}}else{if(12<=A)var
E=1;else
switch(A){case
0:case
3:case
4:var
E=1;break;case
1:if(-1===b[6])throw[0,i,jQ];var
P=b[3];if(typeof
P===k){var
Q=P-8|0;if(!(2<Q>>>0))switch(Q){case
1:break;case
2:return a<50?bj(1+a,b,g,0):f(bj,[0,b,g,0]);default:var
B=m(b);if(typeof
B===k){if(2===B)return a<50?bi(1+a,b,g,7,0):f(bi,[0,b,g,7,0])}else
if(1===B[0]){var
L=g,K=7,J=B[1];for(;;){var
l=[0,L,K,J],F=m(b);if(typeof
F===k){if(2===F){var
p=l[1],s=l[2],z=[0,l[3],0];for(;;){if(6===s){var
R=p[2],S=[0,p[3],z],p=p[1],s=R,z=S;continue}return 7===s?a<50?bi(1+a,b,p,s,z):f(bi,[0,b,p,s,z]):a<50?n(1+a,0):f(n,[0,0])}}if(15===F){var
G=m(b);if(typeof
G!==k)if(1===G[0]){var
L=l,K=6,J=G[1];continue}if(-1===b[6])throw[0,i,ix];b[6]=-1;return a<50?h(1+a,b,l,6):f(h,[0,b,l,6])}}if(-1===b[6])throw[0,i,iy];b[6]=-1;return a<50?h(1+a,b,l[1],l[2]):f(h,[0,b,l[1],l[2]])}}if(-1===b[6])throw[0,i,jS];b[6]=-1;return a<50?h(1+a,b,g,7):f(h,[0,b,g,7])}}if(-1===b[6])throw[0,i,jR];b[6]=-1;return a<50?h(1+a,b,g[1],g[2]):f(h,[0,b,g[1],g[2]]);default:var
E=0}if(E){if(-1===b[6])throw[0,i,io];var
D=b[3];if(typeof
D===k)switch(D){case
2:case
4:case
9:case
10:case
12:case
15:var
y=0;break;case
8:var
o=m(b);if(typeof
o===k)switch(o){case
2:return a<50?bg(1+a,b,g,19,0):f(bg,[0,b,g,19,0]);case
7:return a<50?w(1+a,b,g,19):f(w,[0,b,g,19]);case
8:return a<50?v(1+a,b,g,19):f(v,[0,b,g,19])}else
switch(o[0]){case
2:return a<50?u(1+a,b,g,19,o[1]):f(u,[0,b,g,19,o[1]]);case
3:return a<50?q(1+a,b,g,19,o[1]):f(q,[0,b,g,19,o[1]]);case
0:break;default:return a<50?r(1+a,b,g,19,o[1]):f(r,[0,b,g,19,o[1]])}if(-1===b[6])throw[0,i,ic];b[6]=-1;return a<50?h(1+a,b,g,19):f(h,[0,b,g,19]);default:var
y=1}else
switch(D[0]){case
0:case
1:var
y=1;break;default:var
y=0}if(y)return a<50?bh(1+a,b,g,0):f(bh,[0,b,g,0]);if(-1===b[6])throw[0,i,iP];b[6]=-1;return a<50?h(1+a,b,g[1],g[2]):f(h,[0,b,g[1],g[2]])}}return a<50?n(1+a,0):f(n,[0,0])}function
bc(a,b,c,d,e){var
s=c,o=d,p=e;for(;;){var
g=[0,s,o,p];switch(o){case
18:case
19:if(-1===b[6])throw[0,i,jV];var
T=b[3];if(typeof
T===k)switch(T){case
0:return a<50?O(1+a,b,g):f(O,[0,b,g]);case
2:var
x=g[1],y=g[2],A=[0,g[3],0];for(;;){if(18===y){var
aa=x[2],ab=[0,x[3],A],x=x[1],y=aa,A=ab;continue}return 19===y?a<50?bg(1+a,b,x,y,A):f(bg,[0,b,x,y,A]):a<50?n(1+a,0):f(n,[0,0])}case
5:return a<50?I(1+a,b,g):f(I,[0,b,g]);case
6:return a<50?ak(1+a,b,g):f(ak,[0,b,g]);case
7:return a<50?aj(1+a,b,g):f(aj,[0,b,g]);case
13:return a<50?N(1+a,b,g):f(N,[0,b,g]);case
15:var
t=m(b);if(typeof
t===k)switch(t){case
7:return a<50?w(1+a,b,g,18):f(w,[0,b,g,18]);case
8:return a<50?v(1+a,b,g,18):f(v,[0,b,g,18])}else
switch(t[0]){case
2:return a<50?u(1+a,b,g,18,t[1]):f(u,[0,b,g,18,t[1]]);case
3:return a<50?q(1+a,b,g,18,t[1]):f(q,[0,b,g,18,t[1]]);case
0:break;default:return a<50?r(1+a,b,g,18,t[1]):f(r,[0,b,g,18,t[1]])}if(-1===b[6])throw[0,i,jX];b[6]=-1;return a<50?h(1+a,b,g,18):f(h,[0,b,g,18])}if(-1===b[6])throw[0,i,jW];b[6]=-1;return a<50?h(1+a,b,g[1],g[2]):f(h,[0,b,g[1],g[2]]);case
16:if(-1===b[6])throw[0,i,jT];var
S=b[3];if(typeof
S===k)switch(S){case
0:return a<50?O(1+a,b,g):f(O,[0,b,g]);case
5:return a<50?I(1+a,b,g):f(I,[0,b,g]);case
6:return a<50?ak(1+a,b,g):f(ak,[0,b,g]);case
7:return a<50?aj(1+a,b,g):f(aj,[0,b,g]);case
12:return g[3];case
13:return a<50?N(1+a,b,g):f(N,[0,b,g])}if(-1===b[6])throw[0,i,jU];b[6]=-1;return a<50?h(1+a,b,g[1],g[2]):f(h,[0,b,g[1],g[2]]);case
25:if(-1===b[6])throw[0,i,jY];var
U=b[3];if(typeof
U===k)switch(U){case
2:case
6:case
7:case
12:case
15:var
E=g[1],s=E[1],o=E[2],p=[1,E[3],1,g[3]];continue;case
0:return a<50?O(1+a,b,g):f(O,[0,b,g]);case
5:return a<50?I(1+a,b,g):f(I,[0,b,g]);case
13:return a<50?N(1+a,b,g):f(N,[0,b,g])}if(-1===b[6])throw[0,i,jZ];b[6]=-1;return a<50?h(1+a,b,g[1],g[2]):f(h,[0,b,g[1],g[2]]);case
26:if(-1===b[6])throw[0,i,j0];var
V=b[3];if(typeof
V===k)switch(V){case
0:case
2:case
6:case
7:case
12:case
13:case
15:var
F=g[1],s=F[1],o=F[2],p=[1,F[3],3,g[3]];continue;case
5:return a<50?I(1+a,b,g):f(I,[0,b,g])}if(-1===b[6])throw[0,i,j1];b[6]=-1;return a<50?h(1+a,b,g[1],g[2]):f(h,[0,b,g[1],g[2]]);case
27:if(-1===b[6])throw[0,i,j2];var
W=b[3];if(typeof
W===k)switch(W){case
2:case
6:case
7:case
12:case
15:var
G=g[1],s=G[1],o=G[2],p=[1,G[3],0,g[3]];continue;case
0:return a<50?O(1+a,b,g):f(O,[0,b,g]);case
5:return a<50?I(1+a,b,g):f(I,[0,b,g]);case
13:return a<50?N(1+a,b,g):f(N,[0,b,g])}if(-1===b[6])throw[0,i,j3];b[6]=-1;return a<50?h(1+a,b,g[1],g[2]):f(h,[0,b,g[1],g[2]]);case
28:var
H=g[1],s=H[1],o=H[2],p=[1,H[3],4,g[3]];continue;case
29:if(-1===b[6])throw[0,i,j4];var
X=b[3];if(typeof
X===k)switch(X){case
0:case
2:case
6:case
7:case
12:case
13:case
15:var
J=g[1],s=J[1],o=J[2],p=[1,J[3],2,g[3]];continue;case
5:return a<50?I(1+a,b,g):f(I,[0,b,g])}if(-1===b[6])throw[0,i,j5];b[6]=-1;return a<50?h(1+a,b,g[1],g[2]):f(h,[0,b,g[1],g[2]]);case
30:var
K=g[1],s=K[1],o=K[2],p=[2,[0,K[3]],g[3]];continue;case
31:if(-1===b[6])throw[0,i,j6];var
Y=b[3];if(typeof
Y===k)switch(Y){case
0:return a<50?O(1+a,b,g):f(O,[0,b,g]);case
2:m(b);var
Z=g[1],s=Z[1],o=Z[2],p=g[3];continue;case
5:return a<50?I(1+a,b,g):f(I,[0,b,g]);case
6:return a<50?ak(1+a,b,g):f(ak,[0,b,g]);case
7:return a<50?aj(1+a,b,g):f(aj,[0,b,g]);case
13:return a<50?N(1+a,b,g):f(N,[0,b,g])}if(-1===b[6])throw[0,i,j7];b[6]=-1;return a<50?h(1+a,b,g[1],g[2]):f(h,[0,b,g[1],g[2]]);case
32:var
_=g[1],s=_[1],o=_[2],p=[2,0,g[3]];continue;case
33:if(-1===b[6])throw[0,i,j8];var
$=b[3];if(typeof
$===k)switch($){case
2:case
15:var
L=g[1],R=L[2],j=[0,L[1],R,[0,L[3],[0,g[3]]]],M=R-22|0;if(2<M>>>0){if(12!==M)return a<50?n(1+a,0):f(n,[0,0])}else
if(!(2<=M)){if(-1===b[6])throw[0,i,kb];var
Q=b[3];if(typeof
Q===k){if(2===Q){var
l=j[1],D=j[2],z=[0,j[3],0];for(;;){if(22===D){var
ac=l[2],ad=[0,l[3],z],l=l[1],D=ac,z=ad;continue}return 23===D?a<50?at(1+a,b,l[1],l[2],[0,l[3],z]):f(at,[0,b,l[1],l[2],[0,l[3],z]]):a<50?n(1+a,0):f(n,[0,0])}}if(15===Q){var
C=m(b);if(typeof
C!==k)if(1===C[0])return a<50?be(1+a,b,j,22,C[1]):f(be,[0,b,j,22,C[1]]);if(-1===b[6])throw[0,i,kc];b[6]=-1;return a<50?h(1+a,b,j,22):f(h,[0,b,j,22])}}if(-1===b[6])throw[0,i,kd];b[6]=-1;return a<50?h(1+a,b,j[1],j[2]):f(h,[0,b,j[1],j[2]])}if(-1===b[6])throw[0,i,j_];var
P=b[3];if(typeof
P===k){if(2===P)return a<50?at(1+a,b,j[1],j[2],[0,j[3],0]):f(at,[0,b,j[1],j[2],[0,j[3],0]]);if(15===P){var
B=m(b);if(typeof
B!==k)if(1===B[0])return a<50?be(1+a,b,j,23,B[1]):f(be,[0,b,j,23,B[1]]);if(-1===b[6])throw[0,i,j$];b[6]=-1;return a<50?h(1+a,b,j,23):f(h,[0,b,j,23])}}if(-1===b[6])throw[0,i,ka];b[6]=-1;return a<50?h(1+a,b,j[1],j[2]):f(h,[0,b,j[1],j[2]]);case
0:return a<50?O(1+a,b,g):f(O,[0,b,g]);case
5:return a<50?I(1+a,b,g):f(I,[0,b,g]);case
6:return a<50?ak(1+a,b,g):f(ak,[0,b,g]);case
7:return a<50?aj(1+a,b,g):f(aj,[0,b,g]);case
13:return a<50?N(1+a,b,g):f(N,[0,b,g])}if(-1===b[6])throw[0,i,j9];b[6]=-1;return a<50?h(1+a,b,g[1],g[2]):f(h,[0,b,g[1],g[2]]);default:return a<50?n(1+a,0):f(n,[0,0])}}}function
H(a,b,c,d){m(b);return a<50?L(1+a,b,c,d,eG):f(L,[0,b,c,d,eG])}function
G(a,b,c,d){m(b);return a<50?L(1+a,b,c,d,d8):f(L,[0,b,c,d,d8])}function
F(a,b,c,d){m(b);return a<50?L(1+a,b,c,d,d9):f(L,[0,b,c,d,d9])}function
E(a,b,c,d,e){m(b);return a<50?L(1+a,b,c,d,e):f(L,[0,b,c,d,e])}function
D(a,b,c,d){m(b);return a<50?L(1+a,b,c,d,d_):f(L,[0,b,c,d,d_])}function
C(a,b,c,d,e){m(b);return a<50?L(1+a,b,c,d,e):f(L,[0,b,c,d,e])}function
B(a,b,c,d){m(b);return a<50?L(1+a,b,c,d,d$):f(L,[0,b,c,d,d$])}function
w(a,b,c,d){var
l=c,j=d;for(;;){var
e=[0,l,j],g=m(b);if(typeof
g===k)switch(g){case
7:var
l=e,j=32;continue;case
8:return a<50?v(1+a,b,e,32):f(v,[0,b,e,32])}else
switch(g[0]){case
2:return a<50?u(1+a,b,e,32,g[1]):f(u,[0,b,e,32,g[1]]);case
3:return a<50?q(1+a,b,e,32,g[1]):f(q,[0,b,e,32,g[1]]);case
0:break;default:return a<50?r(1+a,b,e,32,g[1]):f(r,[0,b,e,32,g[1]])}if(-1===b[6])throw[0,i,jv];b[6]=-1;return a<50?h(1+a,b,e,32):f(h,[0,b,e,32])}}function
v(a,b,c,d){var
l=c,j=d;for(;;){var
e=[0,l,j],g=m(b);if(typeof
g===k)switch(g){case
7:return a<50?w(1+a,b,e,31):f(w,[0,b,e,31]);case
8:var
l=e,j=31;continue}else
switch(g[0]){case
2:return a<50?u(1+a,b,e,31,g[1]):f(u,[0,b,e,31,g[1]]);case
3:return a<50?q(1+a,b,e,31,g[1]):f(q,[0,b,e,31,g[1]]);case
0:break;default:return a<50?r(1+a,b,e,31,g[1]):f(r,[0,b,e,31,g[1]])}if(-1===b[6])throw[0,i,jw];b[6]=-1;return a<50?h(1+a,b,e,31):f(h,[0,b,e,31])}}function
r(a,b,c,d,e){m(b);return a<50?bc(1+a,b,c,d,[3,e]):f(bc,[0,b,c,d,[3,e]])}function
u(a,b,c,d,e){var
o=c,n=d,l=e;for(;;){var
g=[0,o,n,l],j=m(b);if(typeof
j===k)switch(j){case
7:return a<50?w(1+a,b,g,30):f(w,[0,b,g,30]);case
8:return a<50?v(1+a,b,g,30):f(v,[0,b,g,30])}else
switch(j[0]){case
2:var
o=g,n=30,l=j[1];continue;case
3:return a<50?q(1+a,b,g,30,j[1]):f(q,[0,b,g,30,j[1]]);case
0:break;default:return a<50?r(1+a,b,g,30,j[1]):f(r,[0,b,g,30,j[1]])}if(-1===b[6])throw[0,i,jx];b[6]=-1;return a<50?h(1+a,b,g,30):f(h,[0,b,g,30])}}function
q(a,b,c,d,e){m(b);return a<50?bc(1+a,b,c,d,[0,e]):f(bc,[0,b,c,d,[0,e]])}function
bb(a,b,c,d){var
m=c,g=d,l=0;for(;;){var
e=[0,m,g,l];if(15<=g){if(17===g){var
j=e[1],m=j[1],g=j[2],l=[0,j[3],e[3]];continue}if(37<=g){if(-1===b[6])throw[0,i,jp];var
o=b[3];if(typeof
o===k)if(11===o)return e[3];if(-1===b[6])throw[0,i,jq];b[6]=-1;return a<50?h(1+a,b,e[1],e[2]):f(h,[0,b,e[1],e[2]])}}else{if(3===g){if(-1===b[6])throw[0,i,jr];var
p=b[3];if(typeof
p===k)if(16<=p)return a<50?bd(1+a,b,e,2):f(bd,[0,b,e,2]);if(-1===b[6])throw[0,i,js];b[6]=-1;return a<50?h(1+a,b,e,2):f(h,[0,b,e,2])}if(14<=g){if(-1===b[6])throw[0,i,jt];var
q=b[3];if(typeof
q===k)if(16<=q)return a<50?bd(1+a,b,e,13):f(bd,[0,b,e,13]);if(-1===b[6])throw[0,i,ju];b[6]=-1;return a<50?h(1+a,b,e,13):f(h,[0,b,e,13])}}return a<50?n(1+a,0):f(n,[0,0])}}function
ba(a,b,c,d){var
e=[0,c,d],g=m(b);if(typeof
g===k)switch(g){case
0:return a<50?H(1+a,b,e,36):f(H,[0,b,e,36]);case
5:return a<50?G(1+a,b,e,36):f(G,[0,b,e,36]);case
6:return a<50?F(1+a,b,e,36):f(F,[0,b,e,36]);case
7:return a<50?D(1+a,b,e,36):f(D,[0,b,e,36]);case
13:return a<50?B(1+a,b,e,36):f(B,[0,b,e,36])}else
switch(g[0]){case
0:return a<50?E(1+a,b,e,36,g[1]):f(E,[0,b,e,36,g[1]]);case
1:return a<50?C(1+a,b,e,36,g[1]):f(C,[0,b,e,36,g[1]])}if(-1===b[6])throw[0,i,jy];b[6]=-1;return a<50?h(1+a,b,e,36):f(h,[0,b,e,36])}function
ll(a,b){var
c=b[2],e=j(b[1],c);b[3]=e;b[4]=c[11];b[5]=c[12];var
d=b[6]+1|0;if(0<=d)b[6]=d;return e}function
h(a,b,c,d){var
e=c,f=d;for(;;)switch(f){case
1:var
r=e[2],e=e[1],f=r;continue;case
2:var
s=e[2],e=e[1],f=s;continue;case
3:var
t=e[2],e=e[1],f=t;continue;case
4:throw ao;case
5:var
u=e[2],e=e[1],f=u;continue;case
6:var
v=e[2],e=e[1],f=v;continue;case
7:throw ao;case
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
15:throw ao;case
16:throw ao;case
17:var
D=e[2],e=e[1],f=D;continue;case
18:var
E=e[2],e=e[1],f=E;continue;case
19:throw ao;case
20:var
F=e[2],e=e[1],f=F;continue;case
21:throw ao;case
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
34:throw ao;case
35:var
o=e[2],e=e[1],f=o;continue;case
36:var
p=e[2],e=e[1],f=p;continue;case
37:throw ao;default:var
q=e[2],e=e[1],f=q;continue}}function
ne(a,b){return e(bm(0,a,b))}function
np(a,b,c){return e(aw(0,a,b,c))}function
nq(a,b,c){return e(av(0,a,b,c))}function
nr(a,b,c){return e(bl(0,a,b,c))}function
ns(a,b,c){return e(au(0,a,b,c))}function
nt(a,b){return e(bk(0,a,b))}function
nu(a,b,c){return e(bj(0,a,b,c))}function
nv(a,b,c,d){return e(bi(0,a,b,c,d))}function
nw(a,b,c){return e(bh(0,a,b,c))}function
nx(a,b,c,d){return e(bg(0,a,b,c,d))}function
ny(a,b,c){return e(bf(0,a,b,c))}function
nz(a,b,c,d){return e(at(0,a,b,c,d))}function
nA(a,b,c,d){return e(be(0,a,b,c,d))}function
nB(a,b){return e(O(0,a,b))}function
nC(a,b){return e(I(0,a,b))}function
nD(a,b){return e(ak(0,a,b))}function
nE(a,b){return e(aj(0,a,b))}function
nF(a,b){return e(N(0,a,b))}function
nG(a){return e(n(0,a))}function
nH(a,b,c){return e(bd(0,a,b,c))}function
nI(a,b,c,d){return e(L(0,a,b,c,d))}function
nJ(a,b,c,d){return e(bc(0,a,b,c,d))}function
nK(a,b,c){return e(H(0,a,b,c))}function
nL(a,b,c){return e(G(0,a,b,c))}function
nM(a,b,c){return e(F(0,a,b,c))}function
nN(a,b,c,d){return e(E(0,a,b,c,d))}function
nO(a,b,c){return e(D(0,a,b,c))}function
nf(a,b,c,d){return e(C(0,a,b,c,d))}function
ng(a,b,c){return e(B(0,a,b,c))}function
nh(a,b,c){return e(w(0,a,b,c))}function
ni(a,b,c){return e(v(0,a,b,c))}function
nj(a,b,c,d){return e(r(0,a,b,c,d))}function
nk(a,b,c,d){return e(u(0,a,b,c,d))}function
nl(a,b,c,d){return e(q(0,a,b,c,d))}function
eD(a,b,c){return e(bb(0,a,b,c))}function
eE(a,b,c){return e(ba(0,a,b,c))}function
m(a){return e(ll(0,a))}function
bL(a,b,c){return e(h(0,a,b,c))}function
eF(a,b){var
c=j(a,b);return[0,a,b,c,b[11],b[12],fx]}var
jH=0,jJ=[0,[0,jI,function(a){return Math.atan(a)}],jH],jL=[0,[0,jK,function(a){return Math.acos(a)}],jJ],jN=[0,[0,jM,function(a){return Math.asin(a)}],jL],jf=[0,[0,jO,function(a){return Math.exp(a)}],jN],jh=[0,[0,jg,function(a){return mq(a)}],jf],jj=[0,[0,ji,function(a){return Math.log(a)}],jh],jl=[0,[0,jk,function(a){return Math.tan(a)}],jj],jn=[0,[0,jm,function(a){return Math.cos(a)}],jl],jP=[0,[0,jo,function(a){return Math.sin(a)}],jn],ea=[0,[0,je,function(a){return Math.sqrt(a)}],jP];function
fs(a){a:for(;;){var
h=0;for(;;){var
d=mp(nb,h,a);if(0<=d){a[11]=a[12];var
e=a[12];a[12]=[0,e[1],e[2],e[3],a[4]+a[6]|0]}if(20<d>>>0){j(a[1],a);var
h=d;continue}switch(d){case
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
18:return[3,lS(cC(a,a[5],a[6]))];case
19:var
f=cC(a,a[5],a[6]),b=ea;for(;;){if(b){var
k=b[2],g=0===bS(b[1][1],f)?1:0;if(!g){var
b=k;continue}var
i=g}else
var
i=0;return i?[2,bD(f,ea)]:[1,f]}case
20:return[0,cC(a,a[5],a[6])];default:var
c=a[12];a[12]=[0,c[1],c[2]+1|0,c[4],c[4]];continue a}}}}var
du=[0,kJ],ci=[0,kL],gn=[0,kK],gk=[0,kM];function
eb(a,b){var
c=1-l(T[3],b,a);if(c)throw[0,ci,b];return c}function
ec(a,b,c){try{var
f=l(T[22],b,a)}catch(f){f=A(f);if(f[1]===x)throw[0,ci,b];throw f}var
e=bC(c),d=f!==e?1:0;if(d)throw[0,du,[0,b,f,e]];return d}function
ed(e,b,c,d){return M(function(a){var
d=a[2],b=a[1];eb(e,b);ec(e,b,d);return l(c,b,d)},d)}function
ee(g,b){return t(function(a){var
d=a[2],c=a[1];try{var
e=l(T[22],c,g)}catch(f){f=A(f);if(f[1]===x)throw[0,ci,c];throw f}function
i(a){var
b=a[2],d=a[1];if(b)return b[1];throw[0,gk,[0,c,d]]}function
f(a,b){if(a)if(b){var
g=b[1];return[0,g,f(a[2],b[2])]}if(b){var
h=bC(d);throw[0,du,[0,c,bC(e),h]]}return t(i,a)}return[0,c,f(e,d)]},b)}function
kO(a){return[0,a[1],a[2],a[3]]}function
m7(a){var
i=a[1],j=a[2],n=eq(function(a){var
b=a[2],c=a[1];return t(function(a){return[0,a,b]},c)},j);function
m(a,b){var
c=a[1],d=c[2],e=c[1],f=a[2],h=g(T[4],e,d,b);return[0,h,[0,[0,e,t(function(a){return a[1]},d)],f]]}var
d=ex(m,n,T[1]),c=d[1],h=d[2],o=t(kO,t(function(a){var
b=a[1];return[0,b[1],b[2],a[2]]},h)),e=ee(c,a[3]),k=a[4],f=t(function(a){var
b=a[2],d=a[1];return[0,d,b,ee(c,a[3])]},k),b=l(T[23],bC,c);ed(b,0,function(a,b){return 0},e);M(function(a){eb(b,a[1]);ec(b,a[1],a[2]);function
c(j,b){var
i=a[2];return M(function(a){return ew(a,function(a){var
d=l(he,a,eK);if(d)var
e=d;else{var
b=i;for(;;){if(b){var
h=b[2],c=0===bS(b[1],a)?1:0;if(!c){var
b=h;continue}var
g=c}else
var
g=0;var
e=g;break}}var
f=1-e;if(f)throw[0,gn,[0,j,a]];return f})},b)}return ed(b,a[2],c,a[3])},f);return[0,i,e,f,o]}var
gl=[0,kP],m6=dJ(kN);try{var
aD=eF(fs,m6),c3=0;if(-1===aD[6])throw[0,i,jB];var
cr=aD[3];if(typeof
cr===k)if(11===cr)var
cs=eD(aD,c3,37),bA=1;else
if(14===cr)var
cs=eE(aD,c3,37),bA=1;else
var
bA=0;else
var
bA=0;if(!bA){if(-1===aD[6])throw[0,i,jC];aD[6]=-1;var
cs=bL(aD,c3,37)}}catch(f){throw[0,i,kQ]}function
kR(a){function
b(a){var
b=a[4],c=a[3],d=cw(cs,a[2]);return[0,a[1],d,c,b]}function
c(a){try{var
b=eF(fs,a),o=0;if(-1===b[6])throw[0,i,jD];var
h=b[3];if(typeof
h===k)var
c=0;else
if(1===h[0]){var
g=[0,o,15,h[1]],q=m(b);if(typeof
q===k)if(9===q){var
l=m(b);if(typeof
l===k)if(14<=l)switch(l+da|0){case
1:var
f=1;break;case
2:var
d=eD(b,g,14),c=1,e=0,f=0;break;default:var
d=eE(b,g,14),c=1,e=0,f=0}else
var
f=1;else
var
f=1;if(f){if(-1===b[6])throw[0,i,jF];b[6]=-1;var
d=bL(b,g,14),c=1,e=0}}else
var
e=1;else
var
e=1;if(e){if(-1===b[6])throw[0,i,jG];b[6]=-1;var
d=bL(b,g[1],g[2]),c=1}}else
var
c=0;if(!c){if(-1===b[6])throw[0,i,jE];b[6]=-1;var
d=bL(b,o,15)}}catch(f){var
j=a[12],n=a[6]-a[5]|0,p=ab(n),r=j[2],s=j[4]-j[3]|0;am(a[2],a[5],p,0,n);throw[0,gl,[0,r,s,p]]}return d}return aQ(aQ(aQ(dJ(a),c),b),m7)}function
bH(a){return a?a[4]:0}function
af(a,b,c){var
d=a?a[4]:0,e=c?c[4]:0,f=e<=d?d+1|0:e+1|0;return[0,a,b,c,f]}function
dK(a,b,c){var
f=a?a[4]:0,g=c?c[4]:0;if((g+2|0)<f){if(a){var
d=a[3],j=a[2],h=a[1],l=bH(d);if(l<=bH(h))return af(h,j,af(d,b,c));if(d){var
m=d[2],n=d[1],o=af(d[3],b,c);return af(af(h,j,n),m,o)}return s(gG)}return s(gH)}if((f+2|0)<g){if(c){var
i=c[3],k=c[2],e=c[1],p=bH(e);if(p<=bH(i))return af(af(a,b,e),k,i);if(e){var
q=e[2],r=e[1],t=af(e[3],k,i);return af(af(a,b,r),q,t)}return s(gI)}return s(gJ)}var
u=g<=f?f+1|0:g+1|0;return[0,a,b,c,u]}function
aO(a,b){if(b){var
d=b[3],c=b[2],e=b[1],f=bG(a,c);return 0===f?b:0<=f?dK(e,c,aO(a,d)):dK(aO(a,e),c,d)}return[0,0,a,0,1]}var
fU=0;function
dL(a,b){var
c=b;for(;;){if(c){var
f=c[3],g=c[1],e=bG(a,c[2]),d=0===e?1:0;if(d)return d;var
h=0<=e?f:g,c=h;continue}return 0}}function
kS(a,b){var
g=dG(a[2],b),c=a[3],f=t(function(a){var
b=a[2],c=a[1];function
d(a){return 0}function
e(a){return a3(d,a$(function(a){try{var
c=[0,bD(a,g)],b=c}catch(f){var
b=0}return b?b[1]:[3,a]},a))}return[0,c,aQ(b,function(a){return t(e,a)})]},c);function
d(a,b){return cY(ew,a,b)}function
e(c){var
b=0;return function(a){return ge(b,c,a)}}var
h=ey(function(a){return es(e,d,a)},b);return[0,a[1],h,f]}function
kU(e){function
q(r,b,c){var
u=t(function(a){var
b=a[1];try{var
c=r[4],d=d1(function(a){return ff(a[1],b)},c)}catch(f){f=A(f);if(f[1]===x)return[0,b,0,0];throw f}return d},c),k=d0(kS,u,t(function(a){return a[2]},c)),f=t(function(a){return a[1]},c);if(f){var
g=f[1],j=[0,0],h=[0,0],l=f[2];M(function(a){j[1]++;h[1]=h[1]+a.getLen()|0;return 0},f);var
e=ab(h[1]+(0*(j[1]-1|0)|0)|0);am(g,0,e,0,g.getLen());var
d=[0,g.getLen()];M(function(a){am(m_,0,e,d[1],0);d[1]=d[1]+0|0;am(a,0,e,d[1],a.getLen());d[1]=d[1]+a.getLen()|0;return 0},l);var
i=e}else
var
i=gC;var
a=i;for(;;){if(dL(a,b)){var
a=p(a,kT);continue}var
s=aO(a,b),m=eq(function(a){return a[3]},k),n=function(a){var
b=a[2];return function(a){return b9(b,a)}},o=function(a,b){return cY(n,a,b)},q=function(c){var
b=0;return function(a){return ge(b,c,a)}};return[0,[0,a,ey(function(a){return es(q,o,a)},k),m],s]}}function
f(x,b,c){function
g(a,b,c,d){if(d){var
h=d[2],f=d[1];if(dL(f[1],x)){if(0===b){var
i=g(a,0,c,h);return[0,[0,f,i[1]],i[2],i[3]]}var
n=q(e,a,a4(b)),j=n[1],p=n[2],r=j[2],v=t(function(a){return[3,a]},r),k=g(p,0,c,h);return[0,[0,[0,j[1],v],[0,f,k[1]]],[0,j,k[2]],k[3]]}var
l=g(a,[0,f,b],c,h);return[0,l[1],l[2],l[3]]}if(0===b)return[0,0,c,a];var
o=q(e,a,a4(b)),m=o[1],s=o[2],u=m[2],w=t(function(a){return[3,a]},u);return[0,[0,[0,m[1],w],0],[0,m,c],s]}return g(b,0,0,c)}var
h=e[3],g=aN(function(a){var
b=a[1];return function(a){return aO(b,a)}},h,fU);function
c(a,b){return aN(function(a){var
b=a[1];return function(a){return aO(b,a)}},a,b)}function
d(a,b){return aO(a[1],b)}function
s(a,b){var
e=d(a,b);return c(a[3],e)}var
i=c(e[2],fU),j=aN(s,e[3],i),u=aN(d,e[4],j),a=f(g,u,e[2]),k=a[3],l=a[2],m=a[1],n=e[3],b=dF(ex(function(a,b){var
c=f(g,b,a[3]);return[0,c[3],[0,[0,a[1],a[2],c[1]],c[2]]]},n,k)[2]),o=b[1],r=dZ([0,e[4],[0,l,b[2]]]);return[0,e[1],m,o,r]}function
ct(a){return a}function
ef(a){var
b=[];cS(b,[0,b,b]);return b}var
a1=[0,kV],W=[0,cD([0,function(a,b){return bS(a,b)}])[1]];function
df(a){var
c=a[1];if(3===c[0]){var
d=c[1],b=df(d);if(b!==d)a[1]=[3,b];return b}return a}function
R(a){return df(a)}var
bP=[0,function(a){fP(kW);fP(ck(a));e4(aH,10);dz(aH);cy(aH);cV(0);return mM(2)}];function
aT(a,b){try{var
c=j(a,b)}catch(f){f=A(f);return j(bP[1],f)}return c}function
dh(a,b,c,d){var
g=c,e=d;for(;;)if(typeof
g===k)return a<50?al(1+a,b,e):f(al,[0,b,e]);else
switch(g[0]){case
1:j(g[1],b);return a<50?al(1+a,b,e):f(al,[0,b,e]);case
2:var
i=[0,g[2],e],g=g[1],e=i;continue;default:var
h=g[1][1];if(h){j(h[1],b);return a<50?al(1+a,b,e):f(al,[0,b,e])}else
return a<50?al(1+a,b,e):f(al,[0,b,e])}}function
al(a,b,c){return c?a<50?dh(1+a,b,c[1],c[2]):f(dh,[0,b,c[1],c[2]]):0}function
fR(a,b,c){return e(dh(0,a,b,c))}function
nm(a,b){return e(al(0,a,b))}function
dg(a,b,c){var
e=b,d=c;for(;;)if(typeof
e===k)return a<50?ax(1+a,d):f(ax,[0,d]);else
switch(e[0]){case
1:var
g=e[1];if(g[4]){g[4]=0;g[1][2]=g[2];g[2][1]=g[1]}return a<50?ax(1+a,d):f(ax,[0,d]);case
2:var
i=[0,e[2],d],e=e[1],d=i;continue;default:var
h=e[2];W[1]=e[1];aT(h,0);return a<50?ax(1+a,d):f(ax,[0,d])}}function
ax(a,b){return b?a<50?dg(1+a,b[1],b[2]):f(dg,[0,b[1],b[2]]):0}function
fQ(a,b){return e(dg(0,a,b))}function
nn(a){return e(ax(0,a))}function
cf(a,b){var
c=1===b[0]?b[1][1]===a1?(fQ(a[4],0),1):0:0;return fR(b,a[2],0)}var
ds=[0,0],aY=[0,0,0];function
eg(a){var
b=W[1],c=ds[1]?1:(ds[1]=1,0);return[0,c,b]}function
eh(a){var
e=a[2];if(a[1]){W[1]=e;return 0}for(;;){if(0===aY[1]){ds[1]=0;W[1]=e;return 0}if(0===aY[1])throw[0,gV];aY[1]=aY[1]-1|0;var
b=aY[2],c=b[2];if(c===b)aY[2]=0;else
b[2]=c[2];var
d=c[1];cf(d[1],d[2]);continue}}function
dt(a,b){var
d=[0,b],e=df(a),c=e[1];switch(c[0]){case
1:if(c[1][1]===a1)return 0;break;case
2:var
f=c[1];e[1]=d;var
g=eg(0);cf(f,d);return eh(g)}return s(kX)}function
br(a){var
i=[1,[0,a1]];function
h(a,b){var
d=b;for(;;){var
g=R(d),e=g[1];if(2===e[0]){var
f=e[1],c=f[1];if(typeof
c===k)return 0===c?a:(g[1]=i,[0,[0,f],a]);else{if(0===c[0]){var
d=c[1][1];continue}return aM(h,a,c[1][1])}}return a}}var
c=h(0,a),b=eg(0);M(function(a){fQ(a[1][4],0);return fR(i,a[1][2],0)},c);return eh(b)}function
ei(a,b){return typeof
a===k?b:typeof
b===k?a:[2,a,b]}function
bZ(a){if(typeof
a!==k)switch(a[0]){case
2:var
b=a[1],c=bZ(a[2]);return ei(bZ(b),c);case
1:break;default:if(!a[1][1])return 0}return a}function
fk(a,b){var
f=R(a),j=R(b),l=f[1];if(2===l[0]){var
c=l[1];if(f===j)return 0;var
d=j[1];if(2===d[0]){var
e=d[1];j[1]=[3,f];c[1]=e[1];var
n=ei(c[2],e[2]),m=c[3]+e[3]|0;if(42<m){c[3]=0;c[2]=bZ(n)}else{c[3]=m;c[2]=n}var
g=e[4],h=c[4],o=typeof
h===k?g:typeof
g===k?h:[2,h,g];c[4]=o;return 0}f[1]=d;return cf(c,d)}throw[0,i,kY]}function
cX(a,b){var
d=R(a),c=d[1];if(2===c[0]){var
e=c[1];d[1]=b;return cf(e,b)}throw[0,i,kZ]}function
ae(a){return[0,[0,a]]}var
m9=[0,m$];function
aB(a){return[0,[1,a]]}function
gd(a){return[0,[2,[0,[0,[0,a]],0,0,0]]]}function
dr(a){var
b=[0,[2,[0,1,0,0,0]]];return[0,b,b]}function
ej(a,b){var
c=a[2],d=typeof
c===k?b:[2,b,c];a[2]=d;return 0}function
bO(a,b){return ej(a,[1,b])}function
dc(a,b){var
c=R(a)[1];switch(c[0]){case
1:if(c[1][1]===a1)return aT(b,0);break;case
2:var
d=c[1],f=[0,W[1],b],e=d[4],g=typeof
e===k?f:[2,f,e];d[4]=g;return 0}return 0}function
bQ(a,b){var
e=R(a),c=e[1];switch(c[0]){case
1:return[0,c];case
2:var
f=c[1],d=gd(e),g=W[1];bO(f,function(a){switch(a[0]){case
0:var
e=a[1];W[1]=g;try{var
f=j(b,e),c=f}catch(f){f=A(f);var
c=aB(f)}return fk(d,c);case
1:return cX(d,a);default:throw[0,i,kk]}});return d;case
3:throw[0,i,kl];default:return j(b,c[1])}}function
fi(a,b){try{var
k=j(a,0),g=k}catch(f){f=A(f);var
g=aB(f)}var
e=R(g),c=e[1];switch(c[0]){case
1:return j(b,c[1]);case
2:var
f=c[1],d=gd(e),h=W[1];bO(f,function(a){switch(a[0]){case
0:return cX(d,a);case
1:var
e=a[1];W[1]=h;try{var
f=j(b,e),c=f}catch(f){f=A(f);var
c=aB(f)}return fk(d,c);default:throw[0,i,km]}});return d;case
3:throw[0,i,kn];default:return e}}function
ag(a){try{var
e=j(a,0),c=e}catch(f){f=A(f);var
c=aB(f)}var
b=R(c)[1];switch(b[0]){case
1:return j(bP[1],b[1]);case
2:var
d=b[1];return bO(d,function(a){switch(a[0]){case
0:return 0;case
1:return j(bP[1],a[1]);default:throw[0,i,kq]}});case
3:throw[0,i,kr];default:return 0}}var
bM=[b6,function(a){return fu([0])}];function
ek(a,b){var
c=a,d=b;for(;;){if(c){var
e=c[2],f=c[1];if(2===R(f)[1][0]){br(f);var
c=e;continue}if(0<d){var
c=e,d=d-1|0;continue}M(br,e);return f}throw[0,i,kt]}}var
m8=[0,function(a){return 0}],ai=ef(0),ku=[0,0],dw=[0,kw];function
kv(a){var
e=1-(ai[2]===ai?1:0);if(e){var
b=ef(0);b[1][2]=ai[2];ai[2][1]=b[1];b[1]=ai[1];ai[1][2]=b;ai[1]=ai;ai[2]=ai;ku[1]=0;var
c=b[2];for(;;){var
d=c!==b?1:0;if(d){if(c[4])dt(c[3],0);var
c=c[2];continue}return d}}return e}cp(ky,[0,dw,kx]);var
no=bY(a7,kz)?bY(a7,kA)?bY(a7,kB)?bY(a7,kC)?(s(p(kD,a7)),1):1:0:1:0,bK=16;for(;;){if(!(13<=bK))if(!(dH<(bK*2|0))){var
bK=bK*2|0;continue}if(cm){var
dC=bW(bJ),hB=aX===dC?bJ[1]:b6===dC?dM(bJ):bJ;eM(hB)}var
S=X,aE=null,ce=undefined,el=function(a,b){return a===ce?j(b,0):a};true;false;var
nd=S.Array,eL=function(a,b){return a[b]},dv=[0,kE];cp(kF,[0,dv,{}]);dA(function(a){return a[1]===dv?[0,new
$(a[2].toString())]:0});dA(function(a){return a
instanceof
nd?0:[0,new
$(a.toString())]});var
bN=function(a){return a},d2=function(a,b,c){a.replaceChild(b,c);return 0},ap=function(a){return a.toString()},mY=ap(kH),mW=ap(kf),m3=ap(kg),b0=S.document,d3=function(a,b){return a.createElement(b.toString())},d4=function(a,b){return d3(a,b)};S.HTMLElement===ce;var
aR=function(a,b){var
c=a.toString();return b.tagName.toLowerCase()===c?bN(b):aE},kj=function(a){return aR(kI,a)},ke=function(a){return aR(lm,a)},ln=function(a){return aR(lo,a)},d5=function(a){return aR(lp,a)},lq=function(a){return aR(lr,a)},gg=ml(0),ls=function(a){return aR(lt,a)},lu=db;m8[1]=function(a){return 1===a?(S.setTimeout(cP(kv),0),0):0};var
d6=function(a){return gg.log(a.toString())};bP[1]=function(a){d6(lv);d6(ck(a));return dz(aH)};var
c2=function(d,b,c){var
o=b?b[1]:0,i=[0,aE],a=dr(0),f=a[1],p=a[2];function
h(a){var
b=i[1];return b==aE?0:j(b,0)}dc(f,h);var
n=!!o;function
k(a){h(0);dt(p,a);return!!1}var
e=bN(cP(function(a){if(1-(bN(a)==aE?1:0)){var
c=k(a);if(!(c|0))a.preventDefault();return c}var
d=event,b=k(d);if(!(b|0))d.returnValue=b;return b}));if(c.addEventListener===ce){var
m="on".concat(d),l=function(a){var
c=[0,e,a,[0]];return function(a,b){return mk(c,a,b)}};c.attachEvent(m,l);var
g=function(a){return c.detachEvent(m,l)}}else{c.addEventListener(d,e,n);var
g=function(a){return c.removeEventListener(d,e,n)}}i[1]=bN(g);return f},di=function(n,b,c,d,e){var
m=b?b[1]:0,h=[0,0],i=[0,aB([0,bB,lw])],g=[0,ae(0)],f=dr(0)[1];dc(f,function(a){br(i[1]);if(m)br(g[1]);h[1]=1;return 0});function
k(a){if(h[1])return ae(0);var
b=l(n,c,d);i[1]=b;return bQ(b,function(a){var
c=j(e,a);function
b(a){gg.log(ck(a).toString());return ae(0)}g[1]=fi(function(a){return j(c,f)},b);return bQ(g[1],k)})}ag(function(b){function
a(a){return a[1]===a1?ae(0):aB(a)}return fi(function(a){return k(b)},a)});return f},fj=function(a,b){return c2(mY,a,b)},mX=function(a,b){return c2(mW,a,b)},m4=function(a,b){return c2(m3,a,b)},bt=function(d,b,c){return function(a){return di(m4,d,b,c,a)}},nc=d4(b0,ki);try{var
k7=[0,[0,k6,[0,ap(k5),0]],0],k9=[0,ap(k8),0],la=[0,[0,k$,[0,ap(k_),k9]],k7],ld=[0,[0,lc,[0,ap(lb),0]],la],lg=[0,[0,lf,[0,ap(le),0]],ld];d1(function(a){return nc.style[a[1]]!==ce?1:0},lg)}catch(f){f=A(f);if(f[1]!==x)throw f}cp(ly,[0,dw,lx]);var
bw=function(a,b){return a*b|0},lE=Y,cu=function(a){return bw(lE,a)},d7=function(a,b,c){var
d=cu(c),e=cu(b);return((cu(a)<<16)+(e<<8)|0)+d|0},ch=t(function(a){return[0,a[1].toString(),a[2].toString()]},k2),em=function(a,b){return a?a[1]:b},eA=function(e,b,c){var
d=P(e[1],0);M(function(a){var
f=cA(a[2]),h=l(T[22],a[1],e[2]),g=a[3],c=t(function(a){var
c=a[2],d=j(b,a[1]);return[0,d,cA(t(function(a){var
b=a3(function(a){try{var
b=[0,l(aL[22],a,eK)]}catch(f){f=A(f);if(f[1]===x)return 0;throw f}return b},a),c=a$(function(a){var
b=0,g=f.length-1;for(;;){if(b===g)var
c=0;else{var
d=z(f,b),e=ff(a,d)?[0,[0,b,d]]:0;if(!e){var
b=b+1|0;continue}var
c=e}return[3,er(c)[1]]}},b);return function(b){return a_(function(a){return b[a+1]},c)}},c))]},g);return o(d,h,[0,function(a){return b9(c,a)}])},c);return d},eB=function(a){var
d=a[4],e=a[3],b=aM(iV,aM(iU,ez(iT,a[2]),e),d),f=a[2],k=t(function(a){var
b=a[2],c=a[1];return[0,c,t(function(a){return a_(function(a){try{var
b=l(aL[22],a,hN)}catch(f){f=A(f);if(f[1]===x)throw[0,gm,a];throw f}return b},a)},b)]},f),c=t(function(a){var
c=a[1],d=cA(a[2]);return[0,l(T[22],c,b[2]),d]},k);function
i(a){return b9(c,a)}var
g=a[3],j=eA(b,function(a){return l(T[22],a,b[2])},g),h=a[4];return[0,b,i,j,eA(b,function(a){return a},h)]},eC=function(a,b,c){var
f=a?a[1]:1;function
g(c){var
a=z(b,c[1]),e=c[2];if(a){var
f=a[1],g=function(a){var
b=a[2],c=a[1];return[0,c,cz(function(a){return j(a,e)},b)]},d=ct(f);return function(a){return fw(g,d,a)}}return function(a){return j(a,c)}}if(f<0)aC(iW);var
e=f,d=c;for(;;){if(0===e)return d;var
e=e-1|0,d=function(b){return function(a){return cY(g,b,a)}}(d);continue}},az=function(a,b){var
d=b0.getElementById(a.toString()),c=d==aE?aE:j(b,d);return c==aE?aC(j(aa(k3),a)):c},cT=az(lF,ke),fV=az(lG,ln),dp=az(lH,lq),cg=az(lI,ls),a0=az(lJ,d5),aK=az(k0,d5),dq=az(k1,kj),gh="&",cW=function(a){var
i=S.decodeURIComponent(a);try{var
c=i.slice(1).split(gh),d=function(a){throw[0,x]},h=el(eL(c,0),d),b=S.parseInt(h),g=S.isNaN(b)|0?aC(kG):b,e=function(a){throw[0,x]},f=[0,[0,g,el(eL(c,1),e)]]}catch(f){return 0}return f},gf=function(a,b){cg.value=b;a0.max=aJ((a*14|0)/10|0).toString();a0.value=aJ(a).toString();return aK.value=aJ(a).toString()},c0=function(a,b){var
d=S.location,c=aK.value.concat(gh,cg.value);d.hash=S.encodeURIComponent(c);return ae(0)};ag(function(a){return j(bt(0,0,cg),c0)});ag(function(a){return j(bt(0,0,aK),c0)});ag(function(a){return j(bt(0,0,a0),c0)});ag(function(a){var
c=cW(S.location.hash);if(c)var
b=c[1];else
var
d=ch?ch[1]:aC(g7),b=er(cW(d[2]));gf(b[1],b[2]);return ae(0)});ag(function(a){M(function(a){var
b=d4(b0,kh),c=a[1];b.value=c;b.innerHTML=c;dp.appendChild(b);return 0},ch);return ae(0)});ag(function(a){return di(mX,0,0,dp,function(a,b){var
i=dp.value;try{var
f=[0,bD(i,ch)],c=f}catch(f){var
c=0}var
g=[0,10,d],h=c?cW(c[1]):0,e=em(h,g);gf(e[1],e[2]);var
j=em(c,d);S.location.href=j;return ae(0)})});ag(function(a){function
b(a,b){aK.value=a0.value;return ae(0)}return j(bt(0,0,a0),b)});ag(function(a){function
b(a,b){a0.value=aK.value;return ae(0)}return j(bt(0,0,aK),b)});var
J=[aG,0,0,0],bs=[0,lC],bx=[0,0],fq=function(a){return J};l7(l5(cT,cT.width,cT.height));var
dj=[0,eV(0)],dk=[0,eW(0)],fz=function(a,b){var
d=a?a[1]:1;[0,d];var
c=J[3];J[1]=J[1]+b*Math.cos(c);J[2]=J[2]+b*Math.sin(c);var
e=fq(0),h=e[2],f=bw(dj[1],e[1]),g=bw(dk[1],1-h);return d?lY(f,g):eR(f,g)},fm=[0,0],cU=function(a,b,c){var
e=0<=a?a:0;if(0===e)if(c){if(!c[2]){var
l=c[1];return[0,[0,l,0],l]}var
d=0}else
var
d=1;else
if(1===e){if(c){var
m=c[2],g=c[1];if(m){var
n=m[1];return[0,[0,g,[0,n,0]],n]}var
o=eC(0,b,g);return[0,[0,g,[0,o,0]],o]}var
d=1}else
var
d=0;if(!d)if(c){var
h=c[2],f=c[1];if(h){var
j=cU(e-1|0,b,h);return[0,[0,f,j[1]],j[2]]}var
k=cU(e-1|0,b,[0,eC(0,b,f),0]);return[0,[0,f,k[1]],k[2]]}throw[0,i,k4]},cj=function(a,b,c,d,e){var
f=cU(d,b,e),g=f[2];fm[1]=[0,[0,a,b,c,f[1]]];return function(E,b){var
a=cz(function(a){if(a){var
w=ct(a[1]),u=[0,0],n=[0,8],e=[0,0],p=[0,u],x=function(a){var
b=a[2];return[0,j(E,a[1]),b]};fw(x,w,function(a){var
b=e[1];if(b){var
c=b[2],d=b[1],h=b[3];if(c[1]<d.length-1){o(d,c[1],a);c[1]++;var
f=c[1]===d.length-1?1:0,j=f?(p[1][1]=e[1],p[1]=h,e[1]=0,0):f;return j}throw[0,i,hi]}var
g=n[1];if(g<4096)n[1]=2*n[1]|0;e[1]=[0,P(g,a),[0,1],[0,0]];return 0});p[1][1]=e[1];var
k=u[1],g=0,f=k;for(;;){if(f){var
g=g+f[2][1]|0,f=f[3][1];continue}if(0===g)var
m=[0];else{var
d=k,h=0;for(;;){if(!d)throw[0,cv,hj];var
s=d[2],D=d[3],v=d[1];if(!(h<s[1])){var
d=D[1],h=h-s[1]|0;continue}var
t=P(g,z(v,h)),l=0,b=k;for(;;){if(b){var
q=b[2],r=q[1]-1|0,y=b[3],A=b[1],B=0;if(!(r<0)){var
c=B;for(;;){o(t,l+c|0,z(A,c));var
C=c+1|0;if(r!==c){var
c=C;continue}break}}var
l=l+q[1]|0,b=y[1];continue}var
m=t;break}break}}return[0,function(a){var
c=m.length-1-1|0,d=0;if(!(c<0)){var
b=d;for(;;){j(a,m[b+1]);var
e=b+1|0;if(c!==b){var
b=e;continue}break}}return 0}]}}return 0},c),e=cz(function(a){return a?a[1]:m0},a);return fr(function(a){var
b=a[2],d=z(e,a[1]);function
c(a){return l(a[1],a[2],b)}return fr(c,ct(d))},g)}},b_=d3(b0,mZ);b_.innerHTML="Stop !";ag(function(a){return di(fj,0,0,dq,function(a,b){d2(fV,b_,dq);var
c=dr(0),d=c[1],e=[0,0],g=0.1,l=c[2];function
f(a,b){var
c=db<a?[0,lu,a-db]:[0,a,0],d=c[2],g=c[1],h=d==0?function(a){return dt(l,a)}:function(a){return f(d,a)};e[1]=[0,S.setTimeout(cP(h),g*fF)];return 0}f(g,0);dc(d,function(a){var
b=e[1];return b?S.clearTimeout(b[1]):0});return bQ(d,function(a){function
O(a){return m9}var
L=bQ(fj(0,b_),O);try{var
c=aQ(aQ(new
$(cg.value),kR),kU),o=e0(new
$(aK.value)),q=fm[1];if(q){var
e=q[1],H=e[4],I=e[3],K=e[2];if(e$(e[1],c))var
h=eB(c),m=cj(c,h[3],h[4],o,[0,h[2],0]);else
var
m=cj(c,K,I,o,H)}else
var
l=eB(c),m=cj(c,l[3],l[4],o,[0,l[2],0]);var
N=j(m,function(a,b,c){switch(bD(a,lz)[1]){case
1:return fz(lB,j(z(b,0),c));case
2:var
n=-(j(z(b,0),c)*fJ/180);J[3]=J[3]+n;return 0;case
3:bx[1]=[0,[0,[aG,J[1],J[2],J[3]],bs[1]],bx[1]];return 0;case
4:var
e=bx[1];if(e){var
h=e[1];bx[1]=e[2];var
g=h[1],o=h[2];J[1]=g[1];J[2]=g[2];J[3]=g[3];bs[1]=o;var
f=bs[1];eT(d7(f[1],f[2],f[3]));var
i=fq(0),p=i[2],q=bw(dj[1],i[1]);return eR(q,bw(dk[1],1-p))}throw[0,gT];case
5:var
k=j(z(b,0),c),l=j(z(b,0),c),m=j(z(b,0),c),d=[aG,j(z(b,0),c),m,l,k];bs[1]=d;return eT(d7(d[1],d[2],d[3]));default:return fz(lA,j(z(b,0),c))}});dj[1]=eV(0);dk[1]=eW(0);lX(0);eU(1);bs[1]=lD;J[1]=0;J[2]=0;J[3]=0;bx[1]=0;var
D=ae(j(N,0)),B=D}catch(f){f=A(f);var
B=aB(f)}var
b=[0,L,[0,B,0]],F=0,d=aM(function(a,b){return 2===R(b)[1][0]?a:a+1|0},F,b);if(0<d)if(1===d)var
g=ek(b,0);else{var
u=bW(bM),G=aX===u?bM[1]:b6===u?dM(bM):bM;if(b4<d)var
n=0;else
if(0<d)for(;;){var
x=eM(G),C=e7(x,d);if(((b4-d|0)+1|0)<(x-C|0))continue;var
v=C,n=1;break}else
var
n=0;if(!n)var
v=s(hz);var
g=ek(b,v)}else{var
y=[0,[2,[0,[1,[0,b]],0,0,0]]],p=[],w=[];cS(p,[0,[0,w]]);cS(w,function(a){p[1]=0;M(function(a){var
c=R(a)[1];if(2===c[0]){var
b=c[1],d=b[2];if(typeof
d!==k)if(0===d[0]){b[2]=0;return 0}var
e=b[3]+1|0;return 42<e?(b[3]=0,b[2]=bZ(b[2]),0):(b[3]=e,0)}return 0},b);M(br,b);return cX(y,a)});var
P=[0,p];M(function(a){var
b=R(a)[1];if(2===b[0])return ej(b[1],P);throw[0,i,ks]},b);var
g=y}function
f(a){return d2(fV,dq,b_)}var
r=R(g)[1];switch(r[0]){case
1:aT(f,0);break;case
2:var
t=W[1],E=r[1];bO(E,function(a){switch(a[0]){case
0:W[1]=t;return aT(f,0);case
1:W[1]=t;return aT(f,0);default:throw[0,i,ko]}});break;case
3:throw[0,i,kp];default:aT(f,0)}return g})})});cV(0);return}}(function(){return this}()));
