"use strict";var um=Object.create;var tr=Object.defineProperty;var lm=Object.getOwnPropertyDescriptor;var pm=Object.getOwnPropertyNames;var dm=Object.getPrototypeOf,hm=Object.prototype.hasOwnProperty;var fm=(s,M)=>()=>(M||s((M={exports:{}}).exports,M),M.exports),mm=(s,M)=>{for(var te in M)tr(s,te,{get:M[te],enumerable:!0})},os=(s,M,te,H)=>{if(M&&typeof M=="object"||typeof M=="function")for(let q of pm(M))!hm.call(s,q)&&q!==te&&tr(s,q,{get:()=>M[q],enumerable:!(H=lm(M,q))||H.enumerable});return s};var ym=(s,M,te)=>(te=s!=null?um(dm(s)):{},os(M||!s||!s.__esModule?tr(te,"default",{value:s,enumerable:!0}):te,s)),gm=s=>os(tr({},"__esModule",{value:!0}),s);var ss=fm((Et,an)=>{(function(){var s,M="4.17.21",te=200,H="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",q="Expected a function",ps="Invalid `variable` option passed into `_.template`",nr="__lodash_hash_undefined__",ds=500,on="__lodash_placeholder__",He=1,ki=2,mt=4,yt=1,sn=2,he=1,it=2,Ai=4,Ce=8,gt=16,Fe=32,bt=64,Ne=128,Nt=256,rr=512,hs=30,fs="...",ms=800,ys=16,Ri=1,gs=2,bs=3,at=1/0,Ke=9007199254740991,vs=17976931348623157e292,cn=NaN,Ie=4294967295,Ts=Ie-1,xs=Ie>>>1,ws=[["ary",Ne],["bind",he],["bindKey",it],["curry",Ce],["curryRight",gt],["flip",rr],["partial",Fe],["partialRight",bt],["rearg",Nt]],vt="[object Arguments]",un="[object Array]",_s="[object AsyncFunction]",Vt="[object Boolean]",Bt="[object Date]",js="[object DOMException]",ln="[object Error]",pn="[object Function]",Oi="[object GeneratorFunction]",_e="[object Map]",Ut="[object Number]",ks="[object Null]",Ve="[object Object]",Ci="[object Promise]",As="[object Proxy]",qt="[object RegExp]",je="[object Set]",Wt="[object String]",dn="[object Symbol]",Rs="[object Undefined]",Mt="[object WeakMap]",Os="[object WeakSet]",Pt="[object ArrayBuffer]",Tt="[object DataView]",ir="[object Float32Array]",ar="[object Float64Array]",or="[object Int8Array]",sr="[object Int16Array]",cr="[object Int32Array]",ur="[object Uint8Array]",lr="[object Uint8ClampedArray]",pr="[object Uint16Array]",dr="[object Uint32Array]",Cs=/\b__p \+= '';/g,Fs=/\b(__p \+=) '' \+/g,Is=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Fi=/&(?:amp|lt|gt|quot|#39);/g,Ii=/[&<>"']/g,Ss=RegExp(Fi.source),Ls=RegExp(Ii.source),Es=/<%-([\s\S]+?)%>/g,Ns=/<%([\s\S]+?)%>/g,Si=/<%=([\s\S]+?)%>/g,Vs=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Bs=/^\w*$/,Us=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,hr=/[\\^$.*+?()[\]{}|]/g,qs=RegExp(hr.source),fr=/^\s+/,Ws=/\s/,Ms=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ps=/\{\n\/\* \[wrapped with (.+)\] \*/,zs=/,? & /,Ds=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Gs=/[()=,{}\[\]\/\s]/,Hs=/\\(\\)?/g,Ks=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Li=/\w*$/,$s=/^[-+]0x[0-9a-f]+$/i,Zs=/^0b[01]+$/i,Ys=/^\[object .+?Constructor\]$/,Js=/^0o[0-7]+$/i,Xs=/^(?:0|[1-9]\d*)$/,Qs=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,hn=/($^)/,ec=/['\n\r\u2028\u2029\\]/g,fn="\\ud800-\\udfff",tc="\\u0300-\\u036f",nc="\\ufe20-\\ufe2f",rc="\\u20d0-\\u20ff",Ei=tc+nc+rc,Ni="\\u2700-\\u27bf",Vi="a-z\\xdf-\\xf6\\xf8-\\xff",ic="\\xac\\xb1\\xd7\\xf7",ac="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",oc="\\u2000-\\u206f",sc=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Bi="A-Z\\xc0-\\xd6\\xd8-\\xde",Ui="\\ufe0e\\ufe0f",qi=ic+ac+oc+sc,mr="['\u2019]",cc="["+fn+"]",Wi="["+qi+"]",mn="["+Ei+"]",Mi="\\d+",uc="["+Ni+"]",Pi="["+Vi+"]",zi="[^"+fn+qi+Mi+Ni+Vi+Bi+"]",yr="\\ud83c[\\udffb-\\udfff]",lc="(?:"+mn+"|"+yr+")",Di="[^"+fn+"]",gr="(?:\\ud83c[\\udde6-\\uddff]){2}",br="[\\ud800-\\udbff][\\udc00-\\udfff]",xt="["+Bi+"]",Gi="\\u200d",Hi="(?:"+Pi+"|"+zi+")",pc="(?:"+xt+"|"+zi+")",Ki="(?:"+mr+"(?:d|ll|m|re|s|t|ve))?",$i="(?:"+mr+"(?:D|LL|M|RE|S|T|VE))?",Zi=lc+"?",Yi="["+Ui+"]?",dc="(?:"+Gi+"(?:"+[Di,gr,br].join("|")+")"+Yi+Zi+")*",hc="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",fc="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ji=Yi+Zi+dc,mc="(?:"+[uc,gr,br].join("|")+")"+Ji,yc="(?:"+[Di+mn+"?",mn,gr,br,cc].join("|")+")",gc=RegExp(mr,"g"),bc=RegExp(mn,"g"),vr=RegExp(yr+"(?="+yr+")|"+yc+Ji,"g"),vc=RegExp([xt+"?"+Pi+"+"+Ki+"(?="+[Wi,xt,"$"].join("|")+")",pc+"+"+$i+"(?="+[Wi,xt+Hi,"$"].join("|")+")",xt+"?"+Hi+"+"+Ki,xt+"+"+$i,fc,hc,Mi,mc].join("|"),"g"),Tc=RegExp("["+Gi+fn+Ei+Ui+"]"),xc=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,wc=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],_c=-1,V={};V[ir]=V[ar]=V[or]=V[sr]=V[cr]=V[ur]=V[lr]=V[pr]=V[dr]=!0,V[vt]=V[un]=V[Pt]=V[Vt]=V[Tt]=V[Bt]=V[ln]=V[pn]=V[_e]=V[Ut]=V[Ve]=V[qt]=V[je]=V[Wt]=V[Mt]=!1;var N={};N[vt]=N[un]=N[Pt]=N[Tt]=N[Vt]=N[Bt]=N[ir]=N[ar]=N[or]=N[sr]=N[cr]=N[_e]=N[Ut]=N[Ve]=N[qt]=N[je]=N[Wt]=N[dn]=N[ur]=N[lr]=N[pr]=N[dr]=!0,N[ln]=N[pn]=N[Mt]=!1;var jc={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},kc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ac={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Rc={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Oc=parseFloat,Cc=parseInt,Xi=typeof global=="object"&&global&&global.Object===Object&&global,Fc=typeof self=="object"&&self&&self.Object===Object&&self,K=Xi||Fc||Function("return this")(),Tr=typeof Et=="object"&&Et&&!Et.nodeType&&Et,ot=Tr&&typeof an=="object"&&an&&!an.nodeType&&an,Qi=ot&&ot.exports===Tr,xr=Qi&&Xi.process,fe=function(){try{var l=ot&&ot.require&&ot.require("util").types;return l||xr&&xr.binding&&xr.binding("util")}catch{}}(),ea=fe&&fe.isArrayBuffer,ta=fe&&fe.isDate,na=fe&&fe.isMap,ra=fe&&fe.isRegExp,ia=fe&&fe.isSet,aa=fe&&fe.isTypedArray;function oe(l,h,d){switch(d.length){case 0:return l.call(h);case 1:return l.call(h,d[0]);case 2:return l.call(h,d[0],d[1]);case 3:return l.call(h,d[0],d[1],d[2])}return l.apply(h,d)}function Ic(l,h,d,b){for(var _=-1,I=l==null?0:l.length;++_<I;){var D=l[_];h(b,D,d(D),l)}return b}function me(l,h){for(var d=-1,b=l==null?0:l.length;++d<b&&h(l[d],d,l)!==!1;);return l}function Sc(l,h){for(var d=l==null?0:l.length;d--&&h(l[d],d,l)!==!1;);return l}function oa(l,h){for(var d=-1,b=l==null?0:l.length;++d<b;)if(!h(l[d],d,l))return!1;return!0}function $e(l,h){for(var d=-1,b=l==null?0:l.length,_=0,I=[];++d<b;){var D=l[d];h(D,d,l)&&(I[_++]=D)}return I}function yn(l,h){var d=l==null?0:l.length;return!!d&&wt(l,h,0)>-1}function wr(l,h,d){for(var b=-1,_=l==null?0:l.length;++b<_;)if(d(h,l[b]))return!0;return!1}function B(l,h){for(var d=-1,b=l==null?0:l.length,_=Array(b);++d<b;)_[d]=h(l[d],d,l);return _}function Ze(l,h){for(var d=-1,b=h.length,_=l.length;++d<b;)l[_+d]=h[d];return l}function _r(l,h,d,b){var _=-1,I=l==null?0:l.length;for(b&&I&&(d=l[++_]);++_<I;)d=h(d,l[_],_,l);return d}function Lc(l,h,d,b){var _=l==null?0:l.length;for(b&&_&&(d=l[--_]);_--;)d=h(d,l[_],_,l);return d}function jr(l,h){for(var d=-1,b=l==null?0:l.length;++d<b;)if(h(l[d],d,l))return!0;return!1}var Ec=kr("length");function Nc(l){return l.split("")}function Vc(l){return l.match(Ds)||[]}function sa(l,h,d){var b;return d(l,function(_,I,D){if(h(_,I,D))return b=I,!1}),b}function gn(l,h,d,b){for(var _=l.length,I=d+(b?1:-1);b?I--:++I<_;)if(h(l[I],I,l))return I;return-1}function wt(l,h,d){return h===h?$c(l,h,d):gn(l,ca,d)}function Bc(l,h,d,b){for(var _=d-1,I=l.length;++_<I;)if(b(l[_],h))return _;return-1}function ca(l){return l!==l}function ua(l,h){var d=l==null?0:l.length;return d?Rr(l,h)/d:cn}function kr(l){return function(h){return h==null?s:h[l]}}function Ar(l){return function(h){return l==null?s:l[h]}}function la(l,h,d,b,_){return _(l,function(I,D,E){d=b?(b=!1,I):h(d,I,D,E)}),d}function Uc(l,h){var d=l.length;for(l.sort(h);d--;)l[d]=l[d].value;return l}function Rr(l,h){for(var d,b=-1,_=l.length;++b<_;){var I=h(l[b]);I!==s&&(d=d===s?I:d+I)}return d}function Or(l,h){for(var d=-1,b=Array(l);++d<l;)b[d]=h(d);return b}function qc(l,h){return B(h,function(d){return[d,l[d]]})}function pa(l){return l&&l.slice(0,ma(l)+1).replace(fr,"")}function se(l){return function(h){return l(h)}}function Cr(l,h){return B(h,function(d){return l[d]})}function zt(l,h){return l.has(h)}function da(l,h){for(var d=-1,b=l.length;++d<b&&wt(h,l[d],0)>-1;);return d}function ha(l,h){for(var d=l.length;d--&&wt(h,l[d],0)>-1;);return d}function Wc(l,h){for(var d=l.length,b=0;d--;)l[d]===h&&++b;return b}var Mc=Ar(jc),Pc=Ar(kc);function zc(l){return"\\"+Rc[l]}function Dc(l,h){return l==null?s:l[h]}function _t(l){return Tc.test(l)}function Gc(l){return xc.test(l)}function Hc(l){for(var h,d=[];!(h=l.next()).done;)d.push(h.value);return d}function Fr(l){var h=-1,d=Array(l.size);return l.forEach(function(b,_){d[++h]=[_,b]}),d}function fa(l,h){return function(d){return l(h(d))}}function Ye(l,h){for(var d=-1,b=l.length,_=0,I=[];++d<b;){var D=l[d];(D===h||D===on)&&(l[d]=on,I[_++]=d)}return I}function bn(l){var h=-1,d=Array(l.size);return l.forEach(function(b){d[++h]=b}),d}function Kc(l){var h=-1,d=Array(l.size);return l.forEach(function(b){d[++h]=[b,b]}),d}function $c(l,h,d){for(var b=d-1,_=l.length;++b<_;)if(l[b]===h)return b;return-1}function Zc(l,h,d){for(var b=d+1;b--;)if(l[b]===h)return b;return b}function jt(l){return _t(l)?Jc(l):Ec(l)}function ke(l){return _t(l)?Xc(l):Nc(l)}function ma(l){for(var h=l.length;h--&&Ws.test(l.charAt(h)););return h}var Yc=Ar(Ac);function Jc(l){for(var h=vr.lastIndex=0;vr.test(l);)++h;return h}function Xc(l){return l.match(vr)||[]}function Qc(l){return l.match(vc)||[]}var eu=function l(h){h=h==null?K:Je.defaults(K.Object(),h,Je.pick(K,wc));var d=h.Array,b=h.Date,_=h.Error,I=h.Function,D=h.Math,E=h.Object,Ir=h.RegExp,tu=h.String,ye=h.TypeError,vn=d.prototype,nu=I.prototype,kt=E.prototype,Tn=h["__core-js_shared__"],xn=nu.toString,L=kt.hasOwnProperty,ru=0,ya=function(){var e=/[^.]+$/.exec(Tn&&Tn.keys&&Tn.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),wn=kt.toString,iu=xn.call(E),au=K._,ou=Ir("^"+xn.call(L).replace(hr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_n=Qi?h.Buffer:s,Xe=h.Symbol,jn=h.Uint8Array,ga=_n?_n.allocUnsafe:s,kn=fa(E.getPrototypeOf,E),ba=E.create,va=kt.propertyIsEnumerable,An=vn.splice,Ta=Xe?Xe.isConcatSpreadable:s,Dt=Xe?Xe.iterator:s,st=Xe?Xe.toStringTag:s,Rn=function(){try{var e=dt(E,"defineProperty");return e({},"",{}),e}catch{}}(),su=h.clearTimeout!==K.clearTimeout&&h.clearTimeout,cu=b&&b.now!==K.Date.now&&b.now,uu=h.setTimeout!==K.setTimeout&&h.setTimeout,On=D.ceil,Cn=D.floor,Sr=E.getOwnPropertySymbols,lu=_n?_n.isBuffer:s,xa=h.isFinite,pu=vn.join,du=fa(E.keys,E),G=D.max,Y=D.min,hu=b.now,fu=h.parseInt,wa=D.random,mu=vn.reverse,Lr=dt(h,"DataView"),Gt=dt(h,"Map"),Er=dt(h,"Promise"),At=dt(h,"Set"),Ht=dt(h,"WeakMap"),Kt=dt(E,"create"),Fn=Ht&&new Ht,Rt={},yu=ht(Lr),gu=ht(Gt),bu=ht(Er),vu=ht(At),Tu=ht(Ht),In=Xe?Xe.prototype:s,$t=In?In.valueOf:s,_a=In?In.toString:s;function a(e){if(W(e)&&!j(e)&&!(e instanceof C)){if(e instanceof ge)return e;if(L.call(e,"__wrapped__"))return ko(e)}return new ge(e)}var Ot=function(){function e(){}return function(t){if(!U(t))return{};if(ba)return ba(t);e.prototype=t;var n=new e;return e.prototype=s,n}}();function Sn(){}function ge(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=s}a.templateSettings={escape:Es,evaluate:Ns,interpolate:Si,variable:"",imports:{_:a}},a.prototype=Sn.prototype,a.prototype.constructor=a,ge.prototype=Ot(Sn.prototype),ge.prototype.constructor=ge;function C(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ie,this.__views__=[]}function xu(){var e=new C(this.__wrapped__);return e.__actions__=ne(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=ne(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=ne(this.__views__),e}function wu(){if(this.__filtered__){var e=new C(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function _u(){var e=this.__wrapped__.value(),t=this.__dir__,n=j(e),r=t<0,i=n?e.length:0,o=Nl(0,i,this.__views__),c=o.start,u=o.end,p=u-c,f=r?u:c-1,m=this.__iteratees__,y=m.length,g=0,v=Y(p,this.__takeCount__);if(!n||!r&&i==p&&v==p)return Ka(e,this.__actions__);var x=[];e:for(;p--&&g<v;){f+=t;for(var A=-1,w=e[f];++A<y;){var O=m[A],F=O.iteratee,le=O.type,ee=F(w);if(le==gs)w=ee;else if(!ee){if(le==Ri)continue e;break e}}x[g++]=w}return x}C.prototype=Ot(Sn.prototype),C.prototype.constructor=C;function ct(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function ju(){this.__data__=Kt?Kt(null):{},this.size=0}function ku(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function Au(e){var t=this.__data__;if(Kt){var n=t[e];return n===nr?s:n}return L.call(t,e)?t[e]:s}function Ru(e){var t=this.__data__;return Kt?t[e]!==s:L.call(t,e)}function Ou(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Kt&&t===s?nr:t,this}ct.prototype.clear=ju,ct.prototype.delete=ku,ct.prototype.get=Au,ct.prototype.has=Ru,ct.prototype.set=Ou;function Be(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Cu(){this.__data__=[],this.size=0}function Fu(e){var t=this.__data__,n=Ln(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():An.call(t,n,1),--this.size,!0}function Iu(e){var t=this.__data__,n=Ln(t,e);return n<0?s:t[n][1]}function Su(e){return Ln(this.__data__,e)>-1}function Lu(e,t){var n=this.__data__,r=Ln(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}Be.prototype.clear=Cu,Be.prototype.delete=Fu,Be.prototype.get=Iu,Be.prototype.has=Su,Be.prototype.set=Lu;function Ue(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Eu(){this.size=0,this.__data__={hash:new ct,map:new(Gt||Be),string:new ct}}function Nu(e){var t=Gn(this,e).delete(e);return this.size-=t?1:0,t}function Vu(e){return Gn(this,e).get(e)}function Bu(e){return Gn(this,e).has(e)}function Uu(e,t){var n=Gn(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}Ue.prototype.clear=Eu,Ue.prototype.delete=Nu,Ue.prototype.get=Vu,Ue.prototype.has=Bu,Ue.prototype.set=Uu;function ut(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Ue;++t<n;)this.add(e[t])}function qu(e){return this.__data__.set(e,nr),this}function Wu(e){return this.__data__.has(e)}ut.prototype.add=ut.prototype.push=qu,ut.prototype.has=Wu;function Ae(e){var t=this.__data__=new Be(e);this.size=t.size}function Mu(){this.__data__=new Be,this.size=0}function Pu(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function zu(e){return this.__data__.get(e)}function Du(e){return this.__data__.has(e)}function Gu(e,t){var n=this.__data__;if(n instanceof Be){var r=n.__data__;if(!Gt||r.length<te-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Ue(r)}return n.set(e,t),this.size=n.size,this}Ae.prototype.clear=Mu,Ae.prototype.delete=Pu,Ae.prototype.get=zu,Ae.prototype.has=Du,Ae.prototype.set=Gu;function ja(e,t){var n=j(e),r=!n&&ft(e),i=!n&&!r&&rt(e),o=!n&&!r&&!i&&St(e),c=n||r||i||o,u=c?Or(e.length,tu):[],p=u.length;for(var f in e)(t||L.call(e,f))&&!(c&&(f=="length"||i&&(f=="offset"||f=="parent")||o&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||Pe(f,p)))&&u.push(f);return u}function ka(e){var t=e.length;return t?e[Gr(0,t-1)]:s}function Hu(e,t){return Hn(ne(e),lt(t,0,e.length))}function Ku(e){return Hn(ne(e))}function Nr(e,t,n){(n!==s&&!Re(e[t],n)||n===s&&!(t in e))&&qe(e,t,n)}function Zt(e,t,n){var r=e[t];(!(L.call(e,t)&&Re(r,n))||n===s&&!(t in e))&&qe(e,t,n)}function Ln(e,t){for(var n=e.length;n--;)if(Re(e[n][0],t))return n;return-1}function $u(e,t,n,r){return Qe(e,function(i,o,c){t(r,i,n(i),c)}),r}function Aa(e,t){return e&&Le(t,$(t),e)}function Zu(e,t){return e&&Le(t,ie(t),e)}function qe(e,t,n){t=="__proto__"&&Rn?Rn(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function Vr(e,t){for(var n=-1,r=t.length,i=d(r),o=e==null;++n<r;)i[n]=o?s:yi(e,t[n]);return i}function lt(e,t,n){return e===e&&(n!==s&&(e=e<=n?e:n),t!==s&&(e=e>=t?e:t)),e}function be(e,t,n,r,i,o){var c,u=t&He,p=t&ki,f=t&mt;if(n&&(c=i?n(e,r,i,o):n(e)),c!==s)return c;if(!U(e))return e;var m=j(e);if(m){if(c=Bl(e),!u)return ne(e,c)}else{var y=J(e),g=y==pn||y==Oi;if(rt(e))return Ya(e,u);if(y==Ve||y==vt||g&&!i){if(c=p||g?{}:yo(e),!u)return p?Al(e,Zu(c,e)):kl(e,Aa(c,e))}else{if(!N[y])return i?e:{};c=Ul(e,y,u)}}o||(o=new Ae);var v=o.get(e);if(v)return v;o.set(e,c),Go(e)?e.forEach(function(w){c.add(be(w,t,n,w,e,o))}):zo(e)&&e.forEach(function(w,O){c.set(O,be(w,t,n,O,e,o))});var x=f?p?ni:ti:p?ie:$,A=m?s:x(e);return me(A||e,function(w,O){A&&(O=w,w=e[O]),Zt(c,O,be(w,t,n,O,e,o))}),c}function Yu(e){var t=$(e);return function(n){return Ra(n,e,t)}}function Ra(e,t,n){var r=n.length;if(e==null)return!r;for(e=E(e);r--;){var i=n[r],o=t[i],c=e[i];if(c===s&&!(i in e)||!o(c))return!1}return!0}function Oa(e,t,n){if(typeof e!="function")throw new ye(q);return nn(function(){e.apply(s,n)},t)}function Yt(e,t,n,r){var i=-1,o=yn,c=!0,u=e.length,p=[],f=t.length;if(!u)return p;n&&(t=B(t,se(n))),r?(o=wr,c=!1):t.length>=te&&(o=zt,c=!1,t=new ut(t));e:for(;++i<u;){var m=e[i],y=n==null?m:n(m);if(m=r||m!==0?m:0,c&&y===y){for(var g=f;g--;)if(t[g]===y)continue e;p.push(m)}else o(t,y,r)||p.push(m)}return p}var Qe=to(Se),Ca=to(Ur,!0);function Ju(e,t){var n=!0;return Qe(e,function(r,i,o){return n=!!t(r,i,o),n}),n}function En(e,t,n){for(var r=-1,i=e.length;++r<i;){var o=e[r],c=t(o);if(c!=null&&(u===s?c===c&&!ue(c):n(c,u)))var u=c,p=o}return p}function Xu(e,t,n,r){var i=e.length;for(n=k(n),n<0&&(n=-n>i?0:i+n),r=r===s||r>i?i:k(r),r<0&&(r+=i),r=n>r?0:Ko(r);n<r;)e[n++]=t;return e}function Fa(e,t){var n=[];return Qe(e,function(r,i,o){t(r,i,o)&&n.push(r)}),n}function Z(e,t,n,r,i){var o=-1,c=e.length;for(n||(n=Wl),i||(i=[]);++o<c;){var u=e[o];t>0&&n(u)?t>1?Z(u,t-1,n,r,i):Ze(i,u):r||(i[i.length]=u)}return i}var Br=no(),Ia=no(!0);function Se(e,t){return e&&Br(e,t,$)}function Ur(e,t){return e&&Ia(e,t,$)}function Nn(e,t){return $e(t,function(n){return ze(e[n])})}function pt(e,t){t=tt(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[Ee(t[n++])];return n&&n==r?e:s}function Sa(e,t,n){var r=t(e);return j(e)?r:Ze(r,n(e))}function X(e){return e==null?e===s?Rs:ks:st&&st in E(e)?El(e):Kl(e)}function qr(e,t){return e>t}function Qu(e,t){return e!=null&&L.call(e,t)}function el(e,t){return e!=null&&t in E(e)}function tl(e,t,n){return e>=Y(t,n)&&e<G(t,n)}function Wr(e,t,n){for(var r=n?wr:yn,i=e[0].length,o=e.length,c=o,u=d(o),p=1/0,f=[];c--;){var m=e[c];c&&t&&(m=B(m,se(t))),p=Y(m.length,p),u[c]=!n&&(t||i>=120&&m.length>=120)?new ut(c&&m):s}m=e[0];var y=-1,g=u[0];e:for(;++y<i&&f.length<p;){var v=m[y],x=t?t(v):v;if(v=n||v!==0?v:0,!(g?zt(g,x):r(f,x,n))){for(c=o;--c;){var A=u[c];if(!(A?zt(A,x):r(e[c],x,n)))continue e}g&&g.push(x),f.push(v)}}return f}function nl(e,t,n,r){return Se(e,function(i,o,c){t(r,n(i),o,c)}),r}function Jt(e,t,n){t=tt(t,e),e=To(e,t);var r=e==null?e:e[Ee(Te(t))];return r==null?s:oe(r,e,n)}function La(e){return W(e)&&X(e)==vt}function rl(e){return W(e)&&X(e)==Pt}function il(e){return W(e)&&X(e)==Bt}function Xt(e,t,n,r,i){return e===t?!0:e==null||t==null||!W(e)&&!W(t)?e!==e&&t!==t:al(e,t,n,r,Xt,i)}function al(e,t,n,r,i,o){var c=j(e),u=j(t),p=c?un:J(e),f=u?un:J(t);p=p==vt?Ve:p,f=f==vt?Ve:f;var m=p==Ve,y=f==Ve,g=p==f;if(g&&rt(e)){if(!rt(t))return!1;c=!0,m=!1}if(g&&!m)return o||(o=new Ae),c||St(e)?ho(e,t,n,r,i,o):Sl(e,t,p,n,r,i,o);if(!(n&yt)){var v=m&&L.call(e,"__wrapped__"),x=y&&L.call(t,"__wrapped__");if(v||x){var A=v?e.value():e,w=x?t.value():t;return o||(o=new Ae),i(A,w,n,r,o)}}return g?(o||(o=new Ae),Ll(e,t,n,r,i,o)):!1}function ol(e){return W(e)&&J(e)==_e}function Mr(e,t,n,r){var i=n.length,o=i,c=!r;if(e==null)return!o;for(e=E(e);i--;){var u=n[i];if(c&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++i<o;){u=n[i];var p=u[0],f=e[p],m=u[1];if(c&&u[2]){if(f===s&&!(p in e))return!1}else{var y=new Ae;if(r)var g=r(f,m,p,e,t,y);if(!(g===s?Xt(m,f,yt|sn,r,y):g))return!1}}return!0}function Ea(e){if(!U(e)||Pl(e))return!1;var t=ze(e)?ou:Ys;return t.test(ht(e))}function sl(e){return W(e)&&X(e)==qt}function cl(e){return W(e)&&J(e)==je}function ul(e){return W(e)&&Xn(e.length)&&!!V[X(e)]}function Na(e){return typeof e=="function"?e:e==null?ae:typeof e=="object"?j(e)?Ua(e[0],e[1]):Ba(e):is(e)}function Pr(e){if(!tn(e))return du(e);var t=[];for(var n in E(e))L.call(e,n)&&n!="constructor"&&t.push(n);return t}function ll(e){if(!U(e))return Hl(e);var t=tn(e),n=[];for(var r in e)r=="constructor"&&(t||!L.call(e,r))||n.push(r);return n}function zr(e,t){return e<t}function Va(e,t){var n=-1,r=re(e)?d(e.length):[];return Qe(e,function(i,o,c){r[++n]=t(i,o,c)}),r}function Ba(e){var t=ii(e);return t.length==1&&t[0][2]?bo(t[0][0],t[0][1]):function(n){return n===e||Mr(n,e,t)}}function Ua(e,t){return oi(e)&&go(t)?bo(Ee(e),t):function(n){var r=yi(n,e);return r===s&&r===t?gi(n,e):Xt(t,r,yt|sn)}}function Vn(e,t,n,r,i){e!==t&&Br(t,function(o,c){if(i||(i=new Ae),U(o))pl(e,t,c,n,Vn,r,i);else{var u=r?r(ci(e,c),o,c+"",e,t,i):s;u===s&&(u=o),Nr(e,c,u)}},ie)}function pl(e,t,n,r,i,o,c){var u=ci(e,n),p=ci(t,n),f=c.get(p);if(f){Nr(e,n,f);return}var m=o?o(u,p,n+"",e,t,c):s,y=m===s;if(y){var g=j(p),v=!g&&rt(p),x=!g&&!v&&St(p);m=p,g||v||x?j(u)?m=u:P(u)?m=ne(u):v?(y=!1,m=Ya(p,!0)):x?(y=!1,m=Ja(p,!0)):m=[]:rn(p)||ft(p)?(m=u,ft(u)?m=$o(u):(!U(u)||ze(u))&&(m=yo(p))):y=!1}y&&(c.set(p,m),i(m,p,r,o,c),c.delete(p)),Nr(e,n,m)}function qa(e,t){var n=e.length;if(n)return t+=t<0?n:0,Pe(t,n)?e[t]:s}function Wa(e,t,n){t.length?t=B(t,function(o){return j(o)?function(c){return pt(c,o.length===1?o[0]:o)}:o}):t=[ae];var r=-1;t=B(t,se(T()));var i=Va(e,function(o,c,u){var p=B(t,function(f){return f(o)});return{criteria:p,index:++r,value:o}});return Uc(i,function(o,c){return jl(o,c,n)})}function dl(e,t){return Ma(e,t,function(n,r){return gi(e,r)})}function Ma(e,t,n){for(var r=-1,i=t.length,o={};++r<i;){var c=t[r],u=pt(e,c);n(u,c)&&Qt(o,tt(c,e),u)}return o}function hl(e){return function(t){return pt(t,e)}}function Dr(e,t,n,r){var i=r?Bc:wt,o=-1,c=t.length,u=e;for(e===t&&(t=ne(t)),n&&(u=B(e,se(n)));++o<c;)for(var p=0,f=t[o],m=n?n(f):f;(p=i(u,m,p,r))>-1;)u!==e&&An.call(u,p,1),An.call(e,p,1);return e}function Pa(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==o){var o=i;Pe(i)?An.call(e,i,1):$r(e,i)}}return e}function Gr(e,t){return e+Cn(wa()*(t-e+1))}function fl(e,t,n,r){for(var i=-1,o=G(On((t-e)/(n||1)),0),c=d(o);o--;)c[r?o:++i]=e,e+=n;return c}function Hr(e,t){var n="";if(!e||t<1||t>Ke)return n;do t%2&&(n+=e),t=Cn(t/2),t&&(e+=e);while(t);return n}function R(e,t){return ui(vo(e,t,ae),e+"")}function ml(e){return ka(Lt(e))}function yl(e,t){var n=Lt(e);return Hn(n,lt(t,0,n.length))}function Qt(e,t,n,r){if(!U(e))return e;t=tt(t,e);for(var i=-1,o=t.length,c=o-1,u=e;u!=null&&++i<o;){var p=Ee(t[i]),f=n;if(p==="__proto__"||p==="constructor"||p==="prototype")return e;if(i!=c){var m=u[p];f=r?r(m,p,u):s,f===s&&(f=U(m)?m:Pe(t[i+1])?[]:{})}Zt(u,p,f),u=u[p]}return e}var za=Fn?function(e,t){return Fn.set(e,t),e}:ae,gl=Rn?function(e,t){return Rn(e,"toString",{configurable:!0,enumerable:!1,value:vi(t),writable:!0})}:ae;function bl(e){return Hn(Lt(e))}function ve(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var o=d(i);++r<i;)o[r]=e[r+t];return o}function vl(e,t){var n;return Qe(e,function(r,i,o){return n=t(r,i,o),!n}),!!n}function Bn(e,t,n){var r=0,i=e==null?r:e.length;if(typeof t=="number"&&t===t&&i<=xs){for(;r<i;){var o=r+i>>>1,c=e[o];c!==null&&!ue(c)&&(n?c<=t:c<t)?r=o+1:i=o}return i}return Kr(e,t,ae,n)}function Kr(e,t,n,r){var i=0,o=e==null?0:e.length;if(o===0)return 0;t=n(t);for(var c=t!==t,u=t===null,p=ue(t),f=t===s;i<o;){var m=Cn((i+o)/2),y=n(e[m]),g=y!==s,v=y===null,x=y===y,A=ue(y);if(c)var w=r||x;else f?w=x&&(r||g):u?w=x&&g&&(r||!v):p?w=x&&g&&!v&&(r||!A):v||A?w=!1:w=r?y<=t:y<t;w?i=m+1:o=m}return Y(o,Ts)}function Da(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var c=e[n],u=t?t(c):c;if(!n||!Re(u,p)){var p=u;o[i++]=c===0?0:c}}return o}function Ga(e){return typeof e=="number"?e:ue(e)?cn:+e}function ce(e){if(typeof e=="string")return e;if(j(e))return B(e,ce)+"";if(ue(e))return _a?_a.call(e):"";var t=e+"";return t=="0"&&1/e==-at?"-0":t}function et(e,t,n){var r=-1,i=yn,o=e.length,c=!0,u=[],p=u;if(n)c=!1,i=wr;else if(o>=te){var f=t?null:Fl(e);if(f)return bn(f);c=!1,i=zt,p=new ut}else p=t?[]:u;e:for(;++r<o;){var m=e[r],y=t?t(m):m;if(m=n||m!==0?m:0,c&&y===y){for(var g=p.length;g--;)if(p[g]===y)continue e;t&&p.push(y),u.push(m)}else i(p,y,n)||(p!==u&&p.push(y),u.push(m))}return u}function $r(e,t){return t=tt(t,e),e=To(e,t),e==null||delete e[Ee(Te(t))]}function Ha(e,t,n,r){return Qt(e,t,n(pt(e,t)),r)}function Un(e,t,n,r){for(var i=e.length,o=r?i:-1;(r?o--:++o<i)&&t(e[o],o,e););return n?ve(e,r?0:o,r?o+1:i):ve(e,r?o+1:0,r?i:o)}function Ka(e,t){var n=e;return n instanceof C&&(n=n.value()),_r(t,function(r,i){return i.func.apply(i.thisArg,Ze([r],i.args))},n)}function Zr(e,t,n){var r=e.length;if(r<2)return r?et(e[0]):[];for(var i=-1,o=d(r);++i<r;)for(var c=e[i],u=-1;++u<r;)u!=i&&(o[i]=Yt(o[i]||c,e[u],t,n));return et(Z(o,1),t,n)}function $a(e,t,n){for(var r=-1,i=e.length,o=t.length,c={};++r<i;){var u=r<o?t[r]:s;n(c,e[r],u)}return c}function Yr(e){return P(e)?e:[]}function Jr(e){return typeof e=="function"?e:ae}function tt(e,t){return j(e)?e:oi(e,t)?[e]:jo(S(e))}var Tl=R;function nt(e,t,n){var r=e.length;return n=n===s?r:n,!t&&n>=r?e:ve(e,t,n)}var Za=su||function(e){return K.clearTimeout(e)};function Ya(e,t){if(t)return e.slice();var n=e.length,r=ga?ga(n):new e.constructor(n);return e.copy(r),r}function Xr(e){var t=new e.constructor(e.byteLength);return new jn(t).set(new jn(e)),t}function xl(e,t){var n=t?Xr(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}function wl(e){var t=new e.constructor(e.source,Li.exec(e));return t.lastIndex=e.lastIndex,t}function _l(e){return $t?E($t.call(e)):{}}function Ja(e,t){var n=t?Xr(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Xa(e,t){if(e!==t){var n=e!==s,r=e===null,i=e===e,o=ue(e),c=t!==s,u=t===null,p=t===t,f=ue(t);if(!u&&!f&&!o&&e>t||o&&c&&p&&!u&&!f||r&&c&&p||!n&&p||!i)return 1;if(!r&&!o&&!f&&e<t||f&&n&&i&&!r&&!o||u&&n&&i||!c&&i||!p)return-1}return 0}function jl(e,t,n){for(var r=-1,i=e.criteria,o=t.criteria,c=i.length,u=n.length;++r<c;){var p=Xa(i[r],o[r]);if(p){if(r>=u)return p;var f=n[r];return p*(f=="desc"?-1:1)}}return e.index-t.index}function Qa(e,t,n,r){for(var i=-1,o=e.length,c=n.length,u=-1,p=t.length,f=G(o-c,0),m=d(p+f),y=!r;++u<p;)m[u]=t[u];for(;++i<c;)(y||i<o)&&(m[n[i]]=e[i]);for(;f--;)m[u++]=e[i++];return m}function eo(e,t,n,r){for(var i=-1,o=e.length,c=-1,u=n.length,p=-1,f=t.length,m=G(o-u,0),y=d(m+f),g=!r;++i<m;)y[i]=e[i];for(var v=i;++p<f;)y[v+p]=t[p];for(;++c<u;)(g||i<o)&&(y[v+n[c]]=e[i++]);return y}function ne(e,t){var n=-1,r=e.length;for(t||(t=d(r));++n<r;)t[n]=e[n];return t}function Le(e,t,n,r){var i=!n;n||(n={});for(var o=-1,c=t.length;++o<c;){var u=t[o],p=r?r(n[u],e[u],u,n,e):s;p===s&&(p=e[u]),i?qe(n,u,p):Zt(n,u,p)}return n}function kl(e,t){return Le(e,ai(e),t)}function Al(e,t){return Le(e,fo(e),t)}function qn(e,t){return function(n,r){var i=j(n)?Ic:$u,o=t?t():{};return i(n,e,T(r,2),o)}}function Ct(e){return R(function(t,n){var r=-1,i=n.length,o=i>1?n[i-1]:s,c=i>2?n[2]:s;for(o=e.length>3&&typeof o=="function"?(i--,o):s,c&&Q(n[0],n[1],c)&&(o=i<3?s:o,i=1),t=E(t);++r<i;){var u=n[r];u&&e(t,u,r,o)}return t})}function to(e,t){return function(n,r){if(n==null)return n;if(!re(n))return e(n,r);for(var i=n.length,o=t?i:-1,c=E(n);(t?o--:++o<i)&&r(c[o],o,c)!==!1;);return n}}function no(e){return function(t,n,r){for(var i=-1,o=E(t),c=r(t),u=c.length;u--;){var p=c[e?u:++i];if(n(o[p],p,o)===!1)break}return t}}function Rl(e,t,n){var r=t&he,i=en(e);function o(){var c=this&&this!==K&&this instanceof o?i:e;return c.apply(r?n:this,arguments)}return o}function ro(e){return function(t){t=S(t);var n=_t(t)?ke(t):s,r=n?n[0]:t.charAt(0),i=n?nt(n,1).join(""):t.slice(1);return r[e]()+i}}function Ft(e){return function(t){return _r(ns(ts(t).replace(gc,"")),e,"")}}function en(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=Ot(e.prototype),r=e.apply(n,t);return U(r)?r:n}}function Ol(e,t,n){var r=en(e);function i(){for(var o=arguments.length,c=d(o),u=o,p=It(i);u--;)c[u]=arguments[u];var f=o<3&&c[0]!==p&&c[o-1]!==p?[]:Ye(c,p);if(o-=f.length,o<n)return co(e,t,Wn,i.placeholder,s,c,f,s,s,n-o);var m=this&&this!==K&&this instanceof i?r:e;return oe(m,this,c)}return i}function io(e){return function(t,n,r){var i=E(t);if(!re(t)){var o=T(n,3);t=$(t),n=function(u){return o(i[u],u,i)}}var c=e(t,n,r);return c>-1?i[o?t[c]:c]:s}}function ao(e){return Me(function(t){var n=t.length,r=n,i=ge.prototype.thru;for(e&&t.reverse();r--;){var o=t[r];if(typeof o!="function")throw new ye(q);if(i&&!c&&Dn(o)=="wrapper")var c=new ge([],!0)}for(r=c?r:n;++r<n;){o=t[r];var u=Dn(o),p=u=="wrapper"?ri(o):s;p&&si(p[0])&&p[1]==(Ne|Ce|Fe|Nt)&&!p[4].length&&p[9]==1?c=c[Dn(p[0])].apply(c,p[3]):c=o.length==1&&si(o)?c[u]():c.thru(o)}return function(){var f=arguments,m=f[0];if(c&&f.length==1&&j(m))return c.plant(m).value();for(var y=0,g=n?t[y].apply(this,f):m;++y<n;)g=t[y].call(this,g);return g}})}function Wn(e,t,n,r,i,o,c,u,p,f){var m=t&Ne,y=t&he,g=t&it,v=t&(Ce|gt),x=t&rr,A=g?s:en(e);function w(){for(var O=arguments.length,F=d(O),le=O;le--;)F[le]=arguments[le];if(v)var ee=It(w),pe=Wc(F,ee);if(r&&(F=Qa(F,r,i,v)),o&&(F=eo(F,o,c,v)),O-=pe,v&&O<f){var z=Ye(F,ee);return co(e,t,Wn,w.placeholder,n,F,z,u,p,f-O)}var Oe=y?n:this,Ge=g?Oe[e]:e;return O=F.length,u?F=$l(F,u):x&&O>1&&F.reverse(),m&&p<O&&(F.length=p),this&&this!==K&&this instanceof w&&(Ge=A||en(Ge)),Ge.apply(Oe,F)}return w}function oo(e,t){return function(n,r){return nl(n,e,t(r),{})}}function Mn(e,t){return function(n,r){var i;if(n===s&&r===s)return t;if(n!==s&&(i=n),r!==s){if(i===s)return r;typeof n=="string"||typeof r=="string"?(n=ce(n),r=ce(r)):(n=Ga(n),r=Ga(r)),i=e(n,r)}return i}}function Qr(e){return Me(function(t){return t=B(t,se(T())),R(function(n){var r=this;return e(t,function(i){return oe(i,r,n)})})})}function Pn(e,t){t=t===s?" ":ce(t);var n=t.length;if(n<2)return n?Hr(t,e):t;var r=Hr(t,On(e/jt(t)));return _t(t)?nt(ke(r),0,e).join(""):r.slice(0,e)}function Cl(e,t,n,r){var i=t&he,o=en(e);function c(){for(var u=-1,p=arguments.length,f=-1,m=r.length,y=d(m+p),g=this&&this!==K&&this instanceof c?o:e;++f<m;)y[f]=r[f];for(;p--;)y[f++]=arguments[++u];return oe(g,i?n:this,y)}return c}function so(e){return function(t,n,r){return r&&typeof r!="number"&&Q(t,n,r)&&(n=r=s),t=De(t),n===s?(n=t,t=0):n=De(n),r=r===s?t<n?1:-1:De(r),fl(t,n,r,e)}}function zn(e){return function(t,n){return typeof t=="string"&&typeof n=="string"||(t=xe(t),n=xe(n)),e(t,n)}}function co(e,t,n,r,i,o,c,u,p,f){var m=t&Ce,y=m?c:s,g=m?s:c,v=m?o:s,x=m?s:o;t|=m?Fe:bt,t&=~(m?bt:Fe),t&Ai||(t&=~(he|it));var A=[e,t,i,v,y,x,g,u,p,f],w=n.apply(s,A);return si(e)&&xo(w,A),w.placeholder=r,wo(w,e,t)}function ei(e){var t=D[e];return function(n,r){if(n=xe(n),r=r==null?0:Y(k(r),292),r&&xa(n)){var i=(S(n)+"e").split("e"),o=t(i[0]+"e"+(+i[1]+r));return i=(S(o)+"e").split("e"),+(i[0]+"e"+(+i[1]-r))}return t(n)}}var Fl=At&&1/bn(new At([,-0]))[1]==at?function(e){return new At(e)}:wi;function uo(e){return function(t){var n=J(t);return n==_e?Fr(t):n==je?Kc(t):qc(t,e(t))}}function We(e,t,n,r,i,o,c,u){var p=t&it;if(!p&&typeof e!="function")throw new ye(q);var f=r?r.length:0;if(f||(t&=~(Fe|bt),r=i=s),c=c===s?c:G(k(c),0),u=u===s?u:k(u),f-=i?i.length:0,t&bt){var m=r,y=i;r=i=s}var g=p?s:ri(e),v=[e,t,n,r,i,m,y,o,c,u];if(g&&Gl(v,g),e=v[0],t=v[1],n=v[2],r=v[3],i=v[4],u=v[9]=v[9]===s?p?0:e.length:G(v[9]-f,0),!u&&t&(Ce|gt)&&(t&=~(Ce|gt)),!t||t==he)var x=Rl(e,t,n);else t==Ce||t==gt?x=Ol(e,t,u):(t==Fe||t==(he|Fe))&&!i.length?x=Cl(e,t,n,r):x=Wn.apply(s,v);var A=g?za:xo;return wo(A(x,v),e,t)}function lo(e,t,n,r){return e===s||Re(e,kt[n])&&!L.call(r,n)?t:e}function po(e,t,n,r,i,o){return U(e)&&U(t)&&(o.set(t,e),Vn(e,t,s,po,o),o.delete(t)),e}function Il(e){return rn(e)?s:e}function ho(e,t,n,r,i,o){var c=n&yt,u=e.length,p=t.length;if(u!=p&&!(c&&p>u))return!1;var f=o.get(e),m=o.get(t);if(f&&m)return f==t&&m==e;var y=-1,g=!0,v=n&sn?new ut:s;for(o.set(e,t),o.set(t,e);++y<u;){var x=e[y],A=t[y];if(r)var w=c?r(A,x,y,t,e,o):r(x,A,y,e,t,o);if(w!==s){if(w)continue;g=!1;break}if(v){if(!jr(t,function(O,F){if(!zt(v,F)&&(x===O||i(x,O,n,r,o)))return v.push(F)})){g=!1;break}}else if(!(x===A||i(x,A,n,r,o))){g=!1;break}}return o.delete(e),o.delete(t),g}function Sl(e,t,n,r,i,o,c){switch(n){case Tt:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Pt:return!(e.byteLength!=t.byteLength||!o(new jn(e),new jn(t)));case Vt:case Bt:case Ut:return Re(+e,+t);case ln:return e.name==t.name&&e.message==t.message;case qt:case Wt:return e==t+"";case _e:var u=Fr;case je:var p=r&yt;if(u||(u=bn),e.size!=t.size&&!p)return!1;var f=c.get(e);if(f)return f==t;r|=sn,c.set(e,t);var m=ho(u(e),u(t),r,i,o,c);return c.delete(e),m;case dn:if($t)return $t.call(e)==$t.call(t)}return!1}function Ll(e,t,n,r,i,o){var c=n&yt,u=ti(e),p=u.length,f=ti(t),m=f.length;if(p!=m&&!c)return!1;for(var y=p;y--;){var g=u[y];if(!(c?g in t:L.call(t,g)))return!1}var v=o.get(e),x=o.get(t);if(v&&x)return v==t&&x==e;var A=!0;o.set(e,t),o.set(t,e);for(var w=c;++y<p;){g=u[y];var O=e[g],F=t[g];if(r)var le=c?r(F,O,g,t,e,o):r(O,F,g,e,t,o);if(!(le===s?O===F||i(O,F,n,r,o):le)){A=!1;break}w||(w=g=="constructor")}if(A&&!w){var ee=e.constructor,pe=t.constructor;ee!=pe&&"constructor"in e&&"constructor"in t&&!(typeof ee=="function"&&ee instanceof ee&&typeof pe=="function"&&pe instanceof pe)&&(A=!1)}return o.delete(e),o.delete(t),A}function Me(e){return ui(vo(e,s,Oo),e+"")}function ti(e){return Sa(e,$,ai)}function ni(e){return Sa(e,ie,fo)}var ri=Fn?function(e){return Fn.get(e)}:wi;function Dn(e){for(var t=e.name+"",n=Rt[t],r=L.call(Rt,t)?n.length:0;r--;){var i=n[r],o=i.func;if(o==null||o==e)return i.name}return t}function It(e){var t=L.call(a,"placeholder")?a:e;return t.placeholder}function T(){var e=a.iteratee||Ti;return e=e===Ti?Na:e,arguments.length?e(arguments[0],arguments[1]):e}function Gn(e,t){var n=e.__data__;return Ml(t)?n[typeof t=="string"?"string":"hash"]:n.map}function ii(e){for(var t=$(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,go(i)]}return t}function dt(e,t){var n=Dc(e,t);return Ea(n)?n:s}function El(e){var t=L.call(e,st),n=e[st];try{e[st]=s;var r=!0}catch{}var i=wn.call(e);return r&&(t?e[st]=n:delete e[st]),i}var ai=Sr?function(e){return e==null?[]:(e=E(e),$e(Sr(e),function(t){return va.call(e,t)}))}:_i,fo=Sr?function(e){for(var t=[];e;)Ze(t,ai(e)),e=kn(e);return t}:_i,J=X;(Lr&&J(new Lr(new ArrayBuffer(1)))!=Tt||Gt&&J(new Gt)!=_e||Er&&J(Er.resolve())!=Ci||At&&J(new At)!=je||Ht&&J(new Ht)!=Mt)&&(J=function(e){var t=X(e),n=t==Ve?e.constructor:s,r=n?ht(n):"";if(r)switch(r){case yu:return Tt;case gu:return _e;case bu:return Ci;case vu:return je;case Tu:return Mt}return t});function Nl(e,t,n){for(var r=-1,i=n.length;++r<i;){var o=n[r],c=o.size;switch(o.type){case"drop":e+=c;break;case"dropRight":t-=c;break;case"take":t=Y(t,e+c);break;case"takeRight":e=G(e,t-c);break}}return{start:e,end:t}}function Vl(e){var t=e.match(Ps);return t?t[1].split(zs):[]}function mo(e,t,n){t=tt(t,e);for(var r=-1,i=t.length,o=!1;++r<i;){var c=Ee(t[r]);if(!(o=e!=null&&n(e,c)))break;e=e[c]}return o||++r!=i?o:(i=e==null?0:e.length,!!i&&Xn(i)&&Pe(c,i)&&(j(e)||ft(e)))}function Bl(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&L.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function yo(e){return typeof e.constructor=="function"&&!tn(e)?Ot(kn(e)):{}}function Ul(e,t,n){var r=e.constructor;switch(t){case Pt:return Xr(e);case Vt:case Bt:return new r(+e);case Tt:return xl(e,n);case ir:case ar:case or:case sr:case cr:case ur:case lr:case pr:case dr:return Ja(e,n);case _e:return new r;case Ut:case Wt:return new r(e);case qt:return wl(e);case je:return new r;case dn:return _l(e)}}function ql(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(Ms,`{
/* [wrapped with `+t+`] */
`)}function Wl(e){return j(e)||ft(e)||!!(Ta&&e&&e[Ta])}function Pe(e,t){var n=typeof e;return t=t??Ke,!!t&&(n=="number"||n!="symbol"&&Xs.test(e))&&e>-1&&e%1==0&&e<t}function Q(e,t,n){if(!U(n))return!1;var r=typeof t;return(r=="number"?re(n)&&Pe(t,n.length):r=="string"&&t in n)?Re(n[t],e):!1}function oi(e,t){if(j(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||ue(e)?!0:Bs.test(e)||!Vs.test(e)||t!=null&&e in E(t)}function Ml(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function si(e){var t=Dn(e),n=a[t];if(typeof n!="function"||!(t in C.prototype))return!1;if(e===n)return!0;var r=ri(n);return!!r&&e===r[0]}function Pl(e){return!!ya&&ya in e}var zl=Tn?ze:ji;function tn(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||kt;return e===n}function go(e){return e===e&&!U(e)}function bo(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==s||e in E(n))}}function Dl(e){var t=Yn(e,function(r){return n.size===ds&&n.clear(),r}),n=t.cache;return t}function Gl(e,t){var n=e[1],r=t[1],i=n|r,o=i<(he|it|Ne),c=r==Ne&&n==Ce||r==Ne&&n==Nt&&e[7].length<=t[8]||r==(Ne|Nt)&&t[7].length<=t[8]&&n==Ce;if(!(o||c))return e;r&he&&(e[2]=t[2],i|=n&he?0:Ai);var u=t[3];if(u){var p=e[3];e[3]=p?Qa(p,u,t[4]):u,e[4]=p?Ye(e[3],on):t[4]}return u=t[5],u&&(p=e[5],e[5]=p?eo(p,u,t[6]):u,e[6]=p?Ye(e[5],on):t[6]),u=t[7],u&&(e[7]=u),r&Ne&&(e[8]=e[8]==null?t[8]:Y(e[8],t[8])),e[9]==null&&(e[9]=t[9]),e[0]=t[0],e[1]=i,e}function Hl(e){var t=[];if(e!=null)for(var n in E(e))t.push(n);return t}function Kl(e){return wn.call(e)}function vo(e,t,n){return t=G(t===s?e.length-1:t,0),function(){for(var r=arguments,i=-1,o=G(r.length-t,0),c=d(o);++i<o;)c[i]=r[t+i];i=-1;for(var u=d(t+1);++i<t;)u[i]=r[i];return u[t]=n(c),oe(e,this,u)}}function To(e,t){return t.length<2?e:pt(e,ve(t,0,-1))}function $l(e,t){for(var n=e.length,r=Y(t.length,n),i=ne(e);r--;){var o=t[r];e[r]=Pe(o,n)?i[o]:s}return e}function ci(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var xo=_o(za),nn=uu||function(e,t){return K.setTimeout(e,t)},ui=_o(gl);function wo(e,t,n){var r=t+"";return ui(e,ql(r,Zl(Vl(r),n)))}function _o(e){var t=0,n=0;return function(){var r=hu(),i=ys-(r-n);if(n=r,i>0){if(++t>=ms)return arguments[0]}else t=0;return e.apply(s,arguments)}}function Hn(e,t){var n=-1,r=e.length,i=r-1;for(t=t===s?r:t;++n<t;){var o=Gr(n,i),c=e[o];e[o]=e[n],e[n]=c}return e.length=t,e}var jo=Dl(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Us,function(n,r,i,o){t.push(i?o.replace(Hs,"$1"):r||n)}),t});function Ee(e){if(typeof e=="string"||ue(e))return e;var t=e+"";return t=="0"&&1/e==-at?"-0":t}function ht(e){if(e!=null){try{return xn.call(e)}catch{}try{return e+""}catch{}}return""}function Zl(e,t){return me(ws,function(n){var r="_."+n[0];t&n[1]&&!yn(e,r)&&e.push(r)}),e.sort()}function ko(e){if(e instanceof C)return e.clone();var t=new ge(e.__wrapped__,e.__chain__);return t.__actions__=ne(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function Yl(e,t,n){(n?Q(e,t,n):t===s)?t=1:t=G(k(t),0);var r=e==null?0:e.length;if(!r||t<1)return[];for(var i=0,o=0,c=d(On(r/t));i<r;)c[o++]=ve(e,i,i+=t);return c}function Jl(e){for(var t=-1,n=e==null?0:e.length,r=0,i=[];++t<n;){var o=e[t];o&&(i[r++]=o)}return i}function Xl(){var e=arguments.length;if(!e)return[];for(var t=d(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return Ze(j(n)?ne(n):[n],Z(t,1))}var Ql=R(function(e,t){return P(e)?Yt(e,Z(t,1,P,!0)):[]}),ep=R(function(e,t){var n=Te(t);return P(n)&&(n=s),P(e)?Yt(e,Z(t,1,P,!0),T(n,2)):[]}),tp=R(function(e,t){var n=Te(t);return P(n)&&(n=s),P(e)?Yt(e,Z(t,1,P,!0),s,n):[]});function np(e,t,n){var r=e==null?0:e.length;return r?(t=n||t===s?1:k(t),ve(e,t<0?0:t,r)):[]}function rp(e,t,n){var r=e==null?0:e.length;return r?(t=n||t===s?1:k(t),t=r-t,ve(e,0,t<0?0:t)):[]}function ip(e,t){return e&&e.length?Un(e,T(t,3),!0,!0):[]}function ap(e,t){return e&&e.length?Un(e,T(t,3),!0):[]}function op(e,t,n,r){var i=e==null?0:e.length;return i?(n&&typeof n!="number"&&Q(e,t,n)&&(n=0,r=i),Xu(e,t,n,r)):[]}function Ao(e,t,n){var r=e==null?0:e.length;if(!r)return-1;var i=n==null?0:k(n);return i<0&&(i=G(r+i,0)),gn(e,T(t,3),i)}function Ro(e,t,n){var r=e==null?0:e.length;if(!r)return-1;var i=r-1;return n!==s&&(i=k(n),i=n<0?G(r+i,0):Y(i,r-1)),gn(e,T(t,3),i,!0)}function Oo(e){var t=e==null?0:e.length;return t?Z(e,1):[]}function sp(e){var t=e==null?0:e.length;return t?Z(e,at):[]}function cp(e,t){var n=e==null?0:e.length;return n?(t=t===s?1:k(t),Z(e,t)):[]}function up(e){for(var t=-1,n=e==null?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r}function Co(e){return e&&e.length?e[0]:s}function lp(e,t,n){var r=e==null?0:e.length;if(!r)return-1;var i=n==null?0:k(n);return i<0&&(i=G(r+i,0)),wt(e,t,i)}function pp(e){var t=e==null?0:e.length;return t?ve(e,0,-1):[]}var dp=R(function(e){var t=B(e,Yr);return t.length&&t[0]===e[0]?Wr(t):[]}),hp=R(function(e){var t=Te(e),n=B(e,Yr);return t===Te(n)?t=s:n.pop(),n.length&&n[0]===e[0]?Wr(n,T(t,2)):[]}),fp=R(function(e){var t=Te(e),n=B(e,Yr);return t=typeof t=="function"?t:s,t&&n.pop(),n.length&&n[0]===e[0]?Wr(n,s,t):[]});function mp(e,t){return e==null?"":pu.call(e,t)}function Te(e){var t=e==null?0:e.length;return t?e[t-1]:s}function yp(e,t,n){var r=e==null?0:e.length;if(!r)return-1;var i=r;return n!==s&&(i=k(n),i=i<0?G(r+i,0):Y(i,r-1)),t===t?Zc(e,t,i):gn(e,ca,i,!0)}function gp(e,t){return e&&e.length?qa(e,k(t)):s}var bp=R(Fo);function Fo(e,t){return e&&e.length&&t&&t.length?Dr(e,t):e}function vp(e,t,n){return e&&e.length&&t&&t.length?Dr(e,t,T(n,2)):e}function Tp(e,t,n){return e&&e.length&&t&&t.length?Dr(e,t,s,n):e}var xp=Me(function(e,t){var n=e==null?0:e.length,r=Vr(e,t);return Pa(e,B(t,function(i){return Pe(i,n)?+i:i}).sort(Xa)),r});function wp(e,t){var n=[];if(!(e&&e.length))return n;var r=-1,i=[],o=e.length;for(t=T(t,3);++r<o;){var c=e[r];t(c,r,e)&&(n.push(c),i.push(r))}return Pa(e,i),n}function li(e){return e==null?e:mu.call(e)}function _p(e,t,n){var r=e==null?0:e.length;return r?(n&&typeof n!="number"&&Q(e,t,n)?(t=0,n=r):(t=t==null?0:k(t),n=n===s?r:k(n)),ve(e,t,n)):[]}function jp(e,t){return Bn(e,t)}function kp(e,t,n){return Kr(e,t,T(n,2))}function Ap(e,t){var n=e==null?0:e.length;if(n){var r=Bn(e,t);if(r<n&&Re(e[r],t))return r}return-1}function Rp(e,t){return Bn(e,t,!0)}function Op(e,t,n){return Kr(e,t,T(n,2),!0)}function Cp(e,t){var n=e==null?0:e.length;if(n){var r=Bn(e,t,!0)-1;if(Re(e[r],t))return r}return-1}function Fp(e){return e&&e.length?Da(e):[]}function Ip(e,t){return e&&e.length?Da(e,T(t,2)):[]}function Sp(e){var t=e==null?0:e.length;return t?ve(e,1,t):[]}function Lp(e,t,n){return e&&e.length?(t=n||t===s?1:k(t),ve(e,0,t<0?0:t)):[]}function Ep(e,t,n){var r=e==null?0:e.length;return r?(t=n||t===s?1:k(t),t=r-t,ve(e,t<0?0:t,r)):[]}function Np(e,t){return e&&e.length?Un(e,T(t,3),!1,!0):[]}function Vp(e,t){return e&&e.length?Un(e,T(t,3)):[]}var Bp=R(function(e){return et(Z(e,1,P,!0))}),Up=R(function(e){var t=Te(e);return P(t)&&(t=s),et(Z(e,1,P,!0),T(t,2))}),qp=R(function(e){var t=Te(e);return t=typeof t=="function"?t:s,et(Z(e,1,P,!0),s,t)});function Wp(e){return e&&e.length?et(e):[]}function Mp(e,t){return e&&e.length?et(e,T(t,2)):[]}function Pp(e,t){return t=typeof t=="function"?t:s,e&&e.length?et(e,s,t):[]}function pi(e){if(!(e&&e.length))return[];var t=0;return e=$e(e,function(n){if(P(n))return t=G(n.length,t),!0}),Or(t,function(n){return B(e,kr(n))})}function Io(e,t){if(!(e&&e.length))return[];var n=pi(e);return t==null?n:B(n,function(r){return oe(t,s,r)})}var zp=R(function(e,t){return P(e)?Yt(e,t):[]}),Dp=R(function(e){return Zr($e(e,P))}),Gp=R(function(e){var t=Te(e);return P(t)&&(t=s),Zr($e(e,P),T(t,2))}),Hp=R(function(e){var t=Te(e);return t=typeof t=="function"?t:s,Zr($e(e,P),s,t)}),Kp=R(pi);function $p(e,t){return $a(e||[],t||[],Zt)}function Zp(e,t){return $a(e||[],t||[],Qt)}var Yp=R(function(e){var t=e.length,n=t>1?e[t-1]:s;return n=typeof n=="function"?(e.pop(),n):s,Io(e,n)});function So(e){var t=a(e);return t.__chain__=!0,t}function Jp(e,t){return t(e),e}function Kn(e,t){return t(e)}var Xp=Me(function(e){var t=e.length,n=t?e[0]:0,r=this.__wrapped__,i=function(o){return Vr(o,e)};return t>1||this.__actions__.length||!(r instanceof C)||!Pe(n)?this.thru(i):(r=r.slice(n,+n+(t?1:0)),r.__actions__.push({func:Kn,args:[i],thisArg:s}),new ge(r,this.__chain__).thru(function(o){return t&&!o.length&&o.push(s),o}))});function Qp(){return So(this)}function ed(){return new ge(this.value(),this.__chain__)}function td(){this.__values__===s&&(this.__values__=Ho(this.value()));var e=this.__index__>=this.__values__.length,t=e?s:this.__values__[this.__index__++];return{done:e,value:t}}function nd(){return this}function rd(e){for(var t,n=this;n instanceof Sn;){var r=ko(n);r.__index__=0,r.__values__=s,t?i.__wrapped__=r:t=r;var i=r;n=n.__wrapped__}return i.__wrapped__=e,t}function id(){var e=this.__wrapped__;if(e instanceof C){var t=e;return this.__actions__.length&&(t=new C(this)),t=t.reverse(),t.__actions__.push({func:Kn,args:[li],thisArg:s}),new ge(t,this.__chain__)}return this.thru(li)}function ad(){return Ka(this.__wrapped__,this.__actions__)}var od=qn(function(e,t,n){L.call(e,n)?++e[n]:qe(e,n,1)});function sd(e,t,n){var r=j(e)?oa:Ju;return n&&Q(e,t,n)&&(t=s),r(e,T(t,3))}function cd(e,t){var n=j(e)?$e:Fa;return n(e,T(t,3))}var ud=io(Ao),ld=io(Ro);function pd(e,t){return Z($n(e,t),1)}function dd(e,t){return Z($n(e,t),at)}function hd(e,t,n){return n=n===s?1:k(n),Z($n(e,t),n)}function Lo(e,t){var n=j(e)?me:Qe;return n(e,T(t,3))}function Eo(e,t){var n=j(e)?Sc:Ca;return n(e,T(t,3))}var fd=qn(function(e,t,n){L.call(e,n)?e[n].push(t):qe(e,n,[t])});function md(e,t,n,r){e=re(e)?e:Lt(e),n=n&&!r?k(n):0;var i=e.length;return n<0&&(n=G(i+n,0)),Qn(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&wt(e,t,n)>-1}var yd=R(function(e,t,n){var r=-1,i=typeof t=="function",o=re(e)?d(e.length):[];return Qe(e,function(c){o[++r]=i?oe(t,c,n):Jt(c,t,n)}),o}),gd=qn(function(e,t,n){qe(e,n,t)});function $n(e,t){var n=j(e)?B:Va;return n(e,T(t,3))}function bd(e,t,n,r){return e==null?[]:(j(t)||(t=t==null?[]:[t]),n=r?s:n,j(n)||(n=n==null?[]:[n]),Wa(e,t,n))}var vd=qn(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]});function Td(e,t,n){var r=j(e)?_r:la,i=arguments.length<3;return r(e,T(t,4),n,i,Qe)}function xd(e,t,n){var r=j(e)?Lc:la,i=arguments.length<3;return r(e,T(t,4),n,i,Ca)}function wd(e,t){var n=j(e)?$e:Fa;return n(e,Jn(T(t,3)))}function _d(e){var t=j(e)?ka:ml;return t(e)}function jd(e,t,n){(n?Q(e,t,n):t===s)?t=1:t=k(t);var r=j(e)?Hu:yl;return r(e,t)}function kd(e){var t=j(e)?Ku:bl;return t(e)}function Ad(e){if(e==null)return 0;if(re(e))return Qn(e)?jt(e):e.length;var t=J(e);return t==_e||t==je?e.size:Pr(e).length}function Rd(e,t,n){var r=j(e)?jr:vl;return n&&Q(e,t,n)&&(t=s),r(e,T(t,3))}var Od=R(function(e,t){if(e==null)return[];var n=t.length;return n>1&&Q(e,t[0],t[1])?t=[]:n>2&&Q(t[0],t[1],t[2])&&(t=[t[0]]),Wa(e,Z(t,1),[])}),Zn=cu||function(){return K.Date.now()};function Cd(e,t){if(typeof t!="function")throw new ye(q);return e=k(e),function(){if(--e<1)return t.apply(this,arguments)}}function No(e,t,n){return t=n?s:t,t=e&&t==null?e.length:t,We(e,Ne,s,s,s,s,t)}function Vo(e,t){var n;if(typeof t!="function")throw new ye(q);return e=k(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=s),n}}var di=R(function(e,t,n){var r=he;if(n.length){var i=Ye(n,It(di));r|=Fe}return We(e,r,t,n,i)}),Bo=R(function(e,t,n){var r=he|it;if(n.length){var i=Ye(n,It(Bo));r|=Fe}return We(t,r,e,n,i)});function Uo(e,t,n){t=n?s:t;var r=We(e,Ce,s,s,s,s,s,t);return r.placeholder=Uo.placeholder,r}function qo(e,t,n){t=n?s:t;var r=We(e,gt,s,s,s,s,s,t);return r.placeholder=qo.placeholder,r}function Wo(e,t,n){var r,i,o,c,u,p,f=0,m=!1,y=!1,g=!0;if(typeof e!="function")throw new ye(q);t=xe(t)||0,U(n)&&(m=!!n.leading,y="maxWait"in n,o=y?G(xe(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g);function v(z){var Oe=r,Ge=i;return r=i=s,f=z,c=e.apply(Ge,Oe),c}function x(z){return f=z,u=nn(O,t),m?v(z):c}function A(z){var Oe=z-p,Ge=z-f,as=t-Oe;return y?Y(as,o-Ge):as}function w(z){var Oe=z-p,Ge=z-f;return p===s||Oe>=t||Oe<0||y&&Ge>=o}function O(){var z=Zn();if(w(z))return F(z);u=nn(O,A(z))}function F(z){return u=s,g&&r?v(z):(r=i=s,c)}function le(){u!==s&&Za(u),f=0,r=p=i=u=s}function ee(){return u===s?c:F(Zn())}function pe(){var z=Zn(),Oe=w(z);if(r=arguments,i=this,p=z,Oe){if(u===s)return x(p);if(y)return Za(u),u=nn(O,t),v(p)}return u===s&&(u=nn(O,t)),c}return pe.cancel=le,pe.flush=ee,pe}var Fd=R(function(e,t){return Oa(e,1,t)}),Id=R(function(e,t,n){return Oa(e,xe(t)||0,n)});function Sd(e){return We(e,rr)}function Yn(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new ye(q);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var c=e.apply(this,r);return n.cache=o.set(i,c)||o,c};return n.cache=new(Yn.Cache||Ue),n}Yn.Cache=Ue;function Jn(e){if(typeof e!="function")throw new ye(q);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function Ld(e){return Vo(2,e)}var Ed=Tl(function(e,t){t=t.length==1&&j(t[0])?B(t[0],se(T())):B(Z(t,1),se(T()));var n=t.length;return R(function(r){for(var i=-1,o=Y(r.length,n);++i<o;)r[i]=t[i].call(this,r[i]);return oe(e,this,r)})}),hi=R(function(e,t){var n=Ye(t,It(hi));return We(e,Fe,s,t,n)}),Mo=R(function(e,t){var n=Ye(t,It(Mo));return We(e,bt,s,t,n)}),Nd=Me(function(e,t){return We(e,Nt,s,s,s,t)});function Vd(e,t){if(typeof e!="function")throw new ye(q);return t=t===s?t:k(t),R(e,t)}function Bd(e,t){if(typeof e!="function")throw new ye(q);return t=t==null?0:G(k(t),0),R(function(n){var r=n[t],i=nt(n,0,t);return r&&Ze(i,r),oe(e,this,i)})}function Ud(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new ye(q);return U(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Wo(e,t,{leading:r,maxWait:t,trailing:i})}function qd(e){return No(e,1)}function Wd(e,t){return hi(Jr(t),e)}function Md(){if(!arguments.length)return[];var e=arguments[0];return j(e)?e:[e]}function Pd(e){return be(e,mt)}function zd(e,t){return t=typeof t=="function"?t:s,be(e,mt,t)}function Dd(e){return be(e,He|mt)}function Gd(e,t){return t=typeof t=="function"?t:s,be(e,He|mt,t)}function Hd(e,t){return t==null||Ra(e,t,$(t))}function Re(e,t){return e===t||e!==e&&t!==t}var Kd=zn(qr),$d=zn(function(e,t){return e>=t}),ft=La(function(){return arguments}())?La:function(e){return W(e)&&L.call(e,"callee")&&!va.call(e,"callee")},j=d.isArray,Zd=ea?se(ea):rl;function re(e){return e!=null&&Xn(e.length)&&!ze(e)}function P(e){return W(e)&&re(e)}function Yd(e){return e===!0||e===!1||W(e)&&X(e)==Vt}var rt=lu||ji,Jd=ta?se(ta):il;function Xd(e){return W(e)&&e.nodeType===1&&!rn(e)}function Qd(e){if(e==null)return!0;if(re(e)&&(j(e)||typeof e=="string"||typeof e.splice=="function"||rt(e)||St(e)||ft(e)))return!e.length;var t=J(e);if(t==_e||t==je)return!e.size;if(tn(e))return!Pr(e).length;for(var n in e)if(L.call(e,n))return!1;return!0}function eh(e,t){return Xt(e,t)}function th(e,t,n){n=typeof n=="function"?n:s;var r=n?n(e,t):s;return r===s?Xt(e,t,s,n):!!r}function fi(e){if(!W(e))return!1;var t=X(e);return t==ln||t==js||typeof e.message=="string"&&typeof e.name=="string"&&!rn(e)}function nh(e){return typeof e=="number"&&xa(e)}function ze(e){if(!U(e))return!1;var t=X(e);return t==pn||t==Oi||t==_s||t==As}function Po(e){return typeof e=="number"&&e==k(e)}function Xn(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ke}function U(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function W(e){return e!=null&&typeof e=="object"}var zo=na?se(na):ol;function rh(e,t){return e===t||Mr(e,t,ii(t))}function ih(e,t,n){return n=typeof n=="function"?n:s,Mr(e,t,ii(t),n)}function ah(e){return Do(e)&&e!=+e}function oh(e){if(zl(e))throw new _(H);return Ea(e)}function sh(e){return e===null}function ch(e){return e==null}function Do(e){return typeof e=="number"||W(e)&&X(e)==Ut}function rn(e){if(!W(e)||X(e)!=Ve)return!1;var t=kn(e);if(t===null)return!0;var n=L.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&xn.call(n)==iu}var mi=ra?se(ra):sl;function uh(e){return Po(e)&&e>=-Ke&&e<=Ke}var Go=ia?se(ia):cl;function Qn(e){return typeof e=="string"||!j(e)&&W(e)&&X(e)==Wt}function ue(e){return typeof e=="symbol"||W(e)&&X(e)==dn}var St=aa?se(aa):ul;function lh(e){return e===s}function ph(e){return W(e)&&J(e)==Mt}function dh(e){return W(e)&&X(e)==Os}var hh=zn(zr),fh=zn(function(e,t){return e<=t});function Ho(e){if(!e)return[];if(re(e))return Qn(e)?ke(e):ne(e);if(Dt&&e[Dt])return Hc(e[Dt]());var t=J(e),n=t==_e?Fr:t==je?bn:Lt;return n(e)}function De(e){if(!e)return e===0?e:0;if(e=xe(e),e===at||e===-at){var t=e<0?-1:1;return t*vs}return e===e?e:0}function k(e){var t=De(e),n=t%1;return t===t?n?t-n:t:0}function Ko(e){return e?lt(k(e),0,Ie):0}function xe(e){if(typeof e=="number")return e;if(ue(e))return cn;if(U(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=U(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=pa(e);var n=Zs.test(e);return n||Js.test(e)?Cc(e.slice(2),n?2:8):$s.test(e)?cn:+e}function $o(e){return Le(e,ie(e))}function mh(e){return e?lt(k(e),-Ke,Ke):e===0?e:0}function S(e){return e==null?"":ce(e)}var yh=Ct(function(e,t){if(tn(t)||re(t)){Le(t,$(t),e);return}for(var n in t)L.call(t,n)&&Zt(e,n,t[n])}),Zo=Ct(function(e,t){Le(t,ie(t),e)}),er=Ct(function(e,t,n,r){Le(t,ie(t),e,r)}),gh=Ct(function(e,t,n,r){Le(t,$(t),e,r)}),bh=Me(Vr);function vh(e,t){var n=Ot(e);return t==null?n:Aa(n,t)}var Th=R(function(e,t){e=E(e);var n=-1,r=t.length,i=r>2?t[2]:s;for(i&&Q(t[0],t[1],i)&&(r=1);++n<r;)for(var o=t[n],c=ie(o),u=-1,p=c.length;++u<p;){var f=c[u],m=e[f];(m===s||Re(m,kt[f])&&!L.call(e,f))&&(e[f]=o[f])}return e}),xh=R(function(e){return e.push(s,po),oe(Yo,s,e)});function wh(e,t){return sa(e,T(t,3),Se)}function _h(e,t){return sa(e,T(t,3),Ur)}function jh(e,t){return e==null?e:Br(e,T(t,3),ie)}function kh(e,t){return e==null?e:Ia(e,T(t,3),ie)}function Ah(e,t){return e&&Se(e,T(t,3))}function Rh(e,t){return e&&Ur(e,T(t,3))}function Oh(e){return e==null?[]:Nn(e,$(e))}function Ch(e){return e==null?[]:Nn(e,ie(e))}function yi(e,t,n){var r=e==null?s:pt(e,t);return r===s?n:r}function Fh(e,t){return e!=null&&mo(e,t,Qu)}function gi(e,t){return e!=null&&mo(e,t,el)}var Ih=oo(function(e,t,n){t!=null&&typeof t.toString!="function"&&(t=wn.call(t)),e[t]=n},vi(ae)),Sh=oo(function(e,t,n){t!=null&&typeof t.toString!="function"&&(t=wn.call(t)),L.call(e,t)?e[t].push(n):e[t]=[n]},T),Lh=R(Jt);function $(e){return re(e)?ja(e):Pr(e)}function ie(e){return re(e)?ja(e,!0):ll(e)}function Eh(e,t){var n={};return t=T(t,3),Se(e,function(r,i,o){qe(n,t(r,i,o),r)}),n}function Nh(e,t){var n={};return t=T(t,3),Se(e,function(r,i,o){qe(n,i,t(r,i,o))}),n}var Vh=Ct(function(e,t,n){Vn(e,t,n)}),Yo=Ct(function(e,t,n,r){Vn(e,t,n,r)}),Bh=Me(function(e,t){var n={};if(e==null)return n;var r=!1;t=B(t,function(o){return o=tt(o,e),r||(r=o.length>1),o}),Le(e,ni(e),n),r&&(n=be(n,He|ki|mt,Il));for(var i=t.length;i--;)$r(n,t[i]);return n});function Uh(e,t){return Jo(e,Jn(T(t)))}var qh=Me(function(e,t){return e==null?{}:dl(e,t)});function Jo(e,t){if(e==null)return{};var n=B(ni(e),function(r){return[r]});return t=T(t),Ma(e,n,function(r,i){return t(r,i[0])})}function Wh(e,t,n){t=tt(t,e);var r=-1,i=t.length;for(i||(i=1,e=s);++r<i;){var o=e==null?s:e[Ee(t[r])];o===s&&(r=i,o=n),e=ze(o)?o.call(e):o}return e}function Mh(e,t,n){return e==null?e:Qt(e,t,n)}function Ph(e,t,n,r){return r=typeof r=="function"?r:s,e==null?e:Qt(e,t,n,r)}var Xo=uo($),Qo=uo(ie);function zh(e,t,n){var r=j(e),i=r||rt(e)||St(e);if(t=T(t,4),n==null){var o=e&&e.constructor;i?n=r?new o:[]:U(e)?n=ze(o)?Ot(kn(e)):{}:n={}}return(i?me:Se)(e,function(c,u,p){return t(n,c,u,p)}),n}function Dh(e,t){return e==null?!0:$r(e,t)}function Gh(e,t,n){return e==null?e:Ha(e,t,Jr(n))}function Hh(e,t,n,r){return r=typeof r=="function"?r:s,e==null?e:Ha(e,t,Jr(n),r)}function Lt(e){return e==null?[]:Cr(e,$(e))}function Kh(e){return e==null?[]:Cr(e,ie(e))}function $h(e,t,n){return n===s&&(n=t,t=s),n!==s&&(n=xe(n),n=n===n?n:0),t!==s&&(t=xe(t),t=t===t?t:0),lt(xe(e),t,n)}function Zh(e,t,n){return t=De(t),n===s?(n=t,t=0):n=De(n),e=xe(e),tl(e,t,n)}function Yh(e,t,n){if(n&&typeof n!="boolean"&&Q(e,t,n)&&(t=n=s),n===s&&(typeof t=="boolean"?(n=t,t=s):typeof e=="boolean"&&(n=e,e=s)),e===s&&t===s?(e=0,t=1):(e=De(e),t===s?(t=e,e=0):t=De(t)),e>t){var r=e;e=t,t=r}if(n||e%1||t%1){var i=wa();return Y(e+i*(t-e+Oc("1e-"+((i+"").length-1))),t)}return Gr(e,t)}var Jh=Ft(function(e,t,n){return t=t.toLowerCase(),e+(n?es(t):t)});function es(e){return bi(S(e).toLowerCase())}function ts(e){return e=S(e),e&&e.replace(Qs,Mc).replace(bc,"")}function Xh(e,t,n){e=S(e),t=ce(t);var r=e.length;n=n===s?r:lt(k(n),0,r);var i=n;return n-=t.length,n>=0&&e.slice(n,i)==t}function Qh(e){return e=S(e),e&&Ls.test(e)?e.replace(Ii,Pc):e}function ef(e){return e=S(e),e&&qs.test(e)?e.replace(hr,"\\$&"):e}var tf=Ft(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}),nf=Ft(function(e,t,n){return e+(n?" ":"")+t.toLowerCase()}),rf=ro("toLowerCase");function af(e,t,n){e=S(e),t=k(t);var r=t?jt(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return Pn(Cn(i),n)+e+Pn(On(i),n)}function of(e,t,n){e=S(e),t=k(t);var r=t?jt(e):0;return t&&r<t?e+Pn(t-r,n):e}function sf(e,t,n){e=S(e),t=k(t);var r=t?jt(e):0;return t&&r<t?Pn(t-r,n)+e:e}function cf(e,t,n){return n||t==null?t=0:t&&(t=+t),fu(S(e).replace(fr,""),t||0)}function uf(e,t,n){return(n?Q(e,t,n):t===s)?t=1:t=k(t),Hr(S(e),t)}function lf(){var e=arguments,t=S(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var pf=Ft(function(e,t,n){return e+(n?"_":"")+t.toLowerCase()});function df(e,t,n){return n&&typeof n!="number"&&Q(e,t,n)&&(t=n=s),n=n===s?Ie:n>>>0,n?(e=S(e),e&&(typeof t=="string"||t!=null&&!mi(t))&&(t=ce(t),!t&&_t(e))?nt(ke(e),0,n):e.split(t,n)):[]}var hf=Ft(function(e,t,n){return e+(n?" ":"")+bi(t)});function ff(e,t,n){return e=S(e),n=n==null?0:lt(k(n),0,e.length),t=ce(t),e.slice(n,n+t.length)==t}function mf(e,t,n){var r=a.templateSettings;n&&Q(e,t,n)&&(t=s),e=S(e),t=er({},t,r,lo);var i=er({},t.imports,r.imports,lo),o=$(i),c=Cr(i,o),u,p,f=0,m=t.interpolate||hn,y="__p += '",g=Ir((t.escape||hn).source+"|"+m.source+"|"+(m===Si?Ks:hn).source+"|"+(t.evaluate||hn).source+"|$","g"),v="//# sourceURL="+(L.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++_c+"]")+`
`;e.replace(g,function(w,O,F,le,ee,pe){return F||(F=le),y+=e.slice(f,pe).replace(ec,zc),O&&(u=!0,y+=`' +
__e(`+O+`) +
'`),ee&&(p=!0,y+=`';
`+ee+`;
__p += '`),F&&(y+=`' +
((__t = (`+F+`)) == null ? '' : __t) +
'`),f=pe+w.length,w}),y+=`';
`;var x=L.call(t,"variable")&&t.variable;if(!x)y=`with (obj) {
`+y+`
}
`;else if(Gs.test(x))throw new _(ps);y=(p?y.replace(Cs,""):y).replace(Fs,"$1").replace(Is,"$1;"),y="function("+(x||"obj")+`) {
`+(x?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(u?", __e = _.escape":"")+(p?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+y+`return __p
}`;var A=rs(function(){return I(o,v+"return "+y).apply(s,c)});if(A.source=y,fi(A))throw A;return A}function yf(e){return S(e).toLowerCase()}function gf(e){return S(e).toUpperCase()}function bf(e,t,n){if(e=S(e),e&&(n||t===s))return pa(e);if(!e||!(t=ce(t)))return e;var r=ke(e),i=ke(t),o=da(r,i),c=ha(r,i)+1;return nt(r,o,c).join("")}function vf(e,t,n){if(e=S(e),e&&(n||t===s))return e.slice(0,ma(e)+1);if(!e||!(t=ce(t)))return e;var r=ke(e),i=ha(r,ke(t))+1;return nt(r,0,i).join("")}function Tf(e,t,n){if(e=S(e),e&&(n||t===s))return e.replace(fr,"");if(!e||!(t=ce(t)))return e;var r=ke(e),i=da(r,ke(t));return nt(r,i).join("")}function xf(e,t){var n=hs,r=fs;if(U(t)){var i="separator"in t?t.separator:i;n="length"in t?k(t.length):n,r="omission"in t?ce(t.omission):r}e=S(e);var o=e.length;if(_t(e)){var c=ke(e);o=c.length}if(n>=o)return e;var u=n-jt(r);if(u<1)return r;var p=c?nt(c,0,u).join(""):e.slice(0,u);if(i===s)return p+r;if(c&&(u+=p.length-u),mi(i)){if(e.slice(u).search(i)){var f,m=p;for(i.global||(i=Ir(i.source,S(Li.exec(i))+"g")),i.lastIndex=0;f=i.exec(m);)var y=f.index;p=p.slice(0,y===s?u:y)}}else if(e.indexOf(ce(i),u)!=u){var g=p.lastIndexOf(i);g>-1&&(p=p.slice(0,g))}return p+r}function wf(e){return e=S(e),e&&Ss.test(e)?e.replace(Fi,Yc):e}var _f=Ft(function(e,t,n){return e+(n?" ":"")+t.toUpperCase()}),bi=ro("toUpperCase");function ns(e,t,n){return e=S(e),t=n?s:t,t===s?Gc(e)?Qc(e):Vc(e):e.match(t)||[]}var rs=R(function(e,t){try{return oe(e,s,t)}catch(n){return fi(n)?n:new _(n)}}),jf=Me(function(e,t){return me(t,function(n){n=Ee(n),qe(e,n,di(e[n],e))}),e});function kf(e){var t=e==null?0:e.length,n=T();return e=t?B(e,function(r){if(typeof r[1]!="function")throw new ye(q);return[n(r[0]),r[1]]}):[],R(function(r){for(var i=-1;++i<t;){var o=e[i];if(oe(o[0],this,r))return oe(o[1],this,r)}})}function Af(e){return Yu(be(e,He))}function vi(e){return function(){return e}}function Rf(e,t){return e==null||e!==e?t:e}var Of=ao(),Cf=ao(!0);function ae(e){return e}function Ti(e){return Na(typeof e=="function"?e:be(e,He))}function Ff(e){return Ba(be(e,He))}function If(e,t){return Ua(e,be(t,He))}var Sf=R(function(e,t){return function(n){return Jt(n,e,t)}}),Lf=R(function(e,t){return function(n){return Jt(e,n,t)}});function xi(e,t,n){var r=$(t),i=Nn(t,r);n==null&&!(U(t)&&(i.length||!r.length))&&(n=t,t=e,e=this,i=Nn(t,$(t)));var o=!(U(n)&&"chain"in n)||!!n.chain,c=ze(e);return me(i,function(u){var p=t[u];e[u]=p,c&&(e.prototype[u]=function(){var f=this.__chain__;if(o||f){var m=e(this.__wrapped__),y=m.__actions__=ne(this.__actions__);return y.push({func:p,args:arguments,thisArg:e}),m.__chain__=f,m}return p.apply(e,Ze([this.value()],arguments))})}),e}function Ef(){return K._===this&&(K._=au),this}function wi(){}function Nf(e){return e=k(e),R(function(t){return qa(t,e)})}var Vf=Qr(B),Bf=Qr(oa),Uf=Qr(jr);function is(e){return oi(e)?kr(Ee(e)):hl(e)}function qf(e){return function(t){return e==null?s:pt(e,t)}}var Wf=so(),Mf=so(!0);function _i(){return[]}function ji(){return!1}function Pf(){return{}}function zf(){return""}function Df(){return!0}function Gf(e,t){if(e=k(e),e<1||e>Ke)return[];var n=Ie,r=Y(e,Ie);t=T(t),e-=Ie;for(var i=Or(r,t);++n<e;)t(n);return i}function Hf(e){return j(e)?B(e,Ee):ue(e)?[e]:ne(jo(S(e)))}function Kf(e){var t=++ru;return S(e)+t}var $f=Mn(function(e,t){return e+t},0),Zf=ei("ceil"),Yf=Mn(function(e,t){return e/t},1),Jf=ei("floor");function Xf(e){return e&&e.length?En(e,ae,qr):s}function Qf(e,t){return e&&e.length?En(e,T(t,2),qr):s}function em(e){return ua(e,ae)}function tm(e,t){return ua(e,T(t,2))}function nm(e){return e&&e.length?En(e,ae,zr):s}function rm(e,t){return e&&e.length?En(e,T(t,2),zr):s}var im=Mn(function(e,t){return e*t},1),am=ei("round"),om=Mn(function(e,t){return e-t},0);function sm(e){return e&&e.length?Rr(e,ae):0}function cm(e,t){return e&&e.length?Rr(e,T(t,2)):0}return a.after=Cd,a.ary=No,a.assign=yh,a.assignIn=Zo,a.assignInWith=er,a.assignWith=gh,a.at=bh,a.before=Vo,a.bind=di,a.bindAll=jf,a.bindKey=Bo,a.castArray=Md,a.chain=So,a.chunk=Yl,a.compact=Jl,a.concat=Xl,a.cond=kf,a.conforms=Af,a.constant=vi,a.countBy=od,a.create=vh,a.curry=Uo,a.curryRight=qo,a.debounce=Wo,a.defaults=Th,a.defaultsDeep=xh,a.defer=Fd,a.delay=Id,a.difference=Ql,a.differenceBy=ep,a.differenceWith=tp,a.drop=np,a.dropRight=rp,a.dropRightWhile=ip,a.dropWhile=ap,a.fill=op,a.filter=cd,a.flatMap=pd,a.flatMapDeep=dd,a.flatMapDepth=hd,a.flatten=Oo,a.flattenDeep=sp,a.flattenDepth=cp,a.flip=Sd,a.flow=Of,a.flowRight=Cf,a.fromPairs=up,a.functions=Oh,a.functionsIn=Ch,a.groupBy=fd,a.initial=pp,a.intersection=dp,a.intersectionBy=hp,a.intersectionWith=fp,a.invert=Ih,a.invertBy=Sh,a.invokeMap=yd,a.iteratee=Ti,a.keyBy=gd,a.keys=$,a.keysIn=ie,a.map=$n,a.mapKeys=Eh,a.mapValues=Nh,a.matches=Ff,a.matchesProperty=If,a.memoize=Yn,a.merge=Vh,a.mergeWith=Yo,a.method=Sf,a.methodOf=Lf,a.mixin=xi,a.negate=Jn,a.nthArg=Nf,a.omit=Bh,a.omitBy=Uh,a.once=Ld,a.orderBy=bd,a.over=Vf,a.overArgs=Ed,a.overEvery=Bf,a.overSome=Uf,a.partial=hi,a.partialRight=Mo,a.partition=vd,a.pick=qh,a.pickBy=Jo,a.property=is,a.propertyOf=qf,a.pull=bp,a.pullAll=Fo,a.pullAllBy=vp,a.pullAllWith=Tp,a.pullAt=xp,a.range=Wf,a.rangeRight=Mf,a.rearg=Nd,a.reject=wd,a.remove=wp,a.rest=Vd,a.reverse=li,a.sampleSize=jd,a.set=Mh,a.setWith=Ph,a.shuffle=kd,a.slice=_p,a.sortBy=Od,a.sortedUniq=Fp,a.sortedUniqBy=Ip,a.split=df,a.spread=Bd,a.tail=Sp,a.take=Lp,a.takeRight=Ep,a.takeRightWhile=Np,a.takeWhile=Vp,a.tap=Jp,a.throttle=Ud,a.thru=Kn,a.toArray=Ho,a.toPairs=Xo,a.toPairsIn=Qo,a.toPath=Hf,a.toPlainObject=$o,a.transform=zh,a.unary=qd,a.union=Bp,a.unionBy=Up,a.unionWith=qp,a.uniq=Wp,a.uniqBy=Mp,a.uniqWith=Pp,a.unset=Dh,a.unzip=pi,a.unzipWith=Io,a.update=Gh,a.updateWith=Hh,a.values=Lt,a.valuesIn=Kh,a.without=zp,a.words=ns,a.wrap=Wd,a.xor=Dp,a.xorBy=Gp,a.xorWith=Hp,a.zip=Kp,a.zipObject=$p,a.zipObjectDeep=Zp,a.zipWith=Yp,a.entries=Xo,a.entriesIn=Qo,a.extend=Zo,a.extendWith=er,xi(a,a),a.add=$f,a.attempt=rs,a.camelCase=Jh,a.capitalize=es,a.ceil=Zf,a.clamp=$h,a.clone=Pd,a.cloneDeep=Dd,a.cloneDeepWith=Gd,a.cloneWith=zd,a.conformsTo=Hd,a.deburr=ts,a.defaultTo=Rf,a.divide=Yf,a.endsWith=Xh,a.eq=Re,a.escape=Qh,a.escapeRegExp=ef,a.every=sd,a.find=ud,a.findIndex=Ao,a.findKey=wh,a.findLast=ld,a.findLastIndex=Ro,a.findLastKey=_h,a.floor=Jf,a.forEach=Lo,a.forEachRight=Eo,a.forIn=jh,a.forInRight=kh,a.forOwn=Ah,a.forOwnRight=Rh,a.get=yi,a.gt=Kd,a.gte=$d,a.has=Fh,a.hasIn=gi,a.head=Co,a.identity=ae,a.includes=md,a.indexOf=lp,a.inRange=Zh,a.invoke=Lh,a.isArguments=ft,a.isArray=j,a.isArrayBuffer=Zd,a.isArrayLike=re,a.isArrayLikeObject=P,a.isBoolean=Yd,a.isBuffer=rt,a.isDate=Jd,a.isElement=Xd,a.isEmpty=Qd,a.isEqual=eh,a.isEqualWith=th,a.isError=fi,a.isFinite=nh,a.isFunction=ze,a.isInteger=Po,a.isLength=Xn,a.isMap=zo,a.isMatch=rh,a.isMatchWith=ih,a.isNaN=ah,a.isNative=oh,a.isNil=ch,a.isNull=sh,a.isNumber=Do,a.isObject=U,a.isObjectLike=W,a.isPlainObject=rn,a.isRegExp=mi,a.isSafeInteger=uh,a.isSet=Go,a.isString=Qn,a.isSymbol=ue,a.isTypedArray=St,a.isUndefined=lh,a.isWeakMap=ph,a.isWeakSet=dh,a.join=mp,a.kebabCase=tf,a.last=Te,a.lastIndexOf=yp,a.lowerCase=nf,a.lowerFirst=rf,a.lt=hh,a.lte=fh,a.max=Xf,a.maxBy=Qf,a.mean=em,a.meanBy=tm,a.min=nm,a.minBy=rm,a.stubArray=_i,a.stubFalse=ji,a.stubObject=Pf,a.stubString=zf,a.stubTrue=Df,a.multiply=im,a.nth=gp,a.noConflict=Ef,a.noop=wi,a.now=Zn,a.pad=af,a.padEnd=of,a.padStart=sf,a.parseInt=cf,a.random=Yh,a.reduce=Td,a.reduceRight=xd,a.repeat=uf,a.replace=lf,a.result=Wh,a.round=am,a.runInContext=l,a.sample=_d,a.size=Ad,a.snakeCase=pf,a.some=Rd,a.sortedIndex=jp,a.sortedIndexBy=kp,a.sortedIndexOf=Ap,a.sortedLastIndex=Rp,a.sortedLastIndexBy=Op,a.sortedLastIndexOf=Cp,a.startCase=hf,a.startsWith=ff,a.subtract=om,a.sum=sm,a.sumBy=cm,a.template=mf,a.times=Gf,a.toFinite=De,a.toInteger=k,a.toLength=Ko,a.toLower=yf,a.toNumber=xe,a.toSafeInteger=mh,a.toString=S,a.toUpper=gf,a.trim=bf,a.trimEnd=vf,a.trimStart=Tf,a.truncate=xf,a.unescape=wf,a.uniqueId=Kf,a.upperCase=_f,a.upperFirst=bi,a.each=Lo,a.eachRight=Eo,a.first=Co,xi(a,function(){var e={};return Se(a,function(t,n){L.call(a.prototype,n)||(e[n]=t)}),e}(),{chain:!1}),a.VERSION=M,me(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){a[e].placeholder=a}),me(["drop","take"],function(e,t){C.prototype[e]=function(n){n=n===s?1:G(k(n),0);var r=this.__filtered__&&!t?new C(this):this.clone();return r.__filtered__?r.__takeCount__=Y(n,r.__takeCount__):r.__views__.push({size:Y(n,Ie),type:e+(r.__dir__<0?"Right":"")}),r},C.prototype[e+"Right"]=function(n){return this.reverse()[e](n).reverse()}}),me(["filter","map","takeWhile"],function(e,t){var n=t+1,r=n==Ri||n==bs;C.prototype[e]=function(i){var o=this.clone();return o.__iteratees__.push({iteratee:T(i,3),type:n}),o.__filtered__=o.__filtered__||r,o}}),me(["head","last"],function(e,t){var n="take"+(t?"Right":"");C.prototype[e]=function(){return this[n](1).value()[0]}}),me(["initial","tail"],function(e,t){var n="drop"+(t?"":"Right");C.prototype[e]=function(){return this.__filtered__?new C(this):this[n](1)}}),C.prototype.compact=function(){return this.filter(ae)},C.prototype.find=function(e){return this.filter(e).head()},C.prototype.findLast=function(e){return this.reverse().find(e)},C.prototype.invokeMap=R(function(e,t){return typeof e=="function"?new C(this):this.map(function(n){return Jt(n,e,t)})}),C.prototype.reject=function(e){return this.filter(Jn(T(e)))},C.prototype.slice=function(e,t){e=k(e);var n=this;return n.__filtered__&&(e>0||t<0)?new C(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==s&&(t=k(t),n=t<0?n.dropRight(-t):n.take(t-e)),n)},C.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},C.prototype.toArray=function(){return this.take(Ie)},Se(C.prototype,function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),r=/^(?:head|last)$/.test(t),i=a[r?"take"+(t=="last"?"Right":""):t],o=r||/^find/.test(t);i&&(a.prototype[t]=function(){var c=this.__wrapped__,u=r?[1]:arguments,p=c instanceof C,f=u[0],m=p||j(c),y=function(O){var F=i.apply(a,Ze([O],u));return r&&g?F[0]:F};m&&n&&typeof f=="function"&&f.length!=1&&(p=m=!1);var g=this.__chain__,v=!!this.__actions__.length,x=o&&!g,A=p&&!v;if(!o&&m){c=A?c:new C(this);var w=e.apply(c,u);return w.__actions__.push({func:Kn,args:[y],thisArg:s}),new ge(w,g)}return x&&A?e.apply(this,u):(w=this.thru(y),x?r?w.value()[0]:w.value():w)})}),me(["pop","push","shift","sort","splice","unshift"],function(e){var t=vn[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);a.prototype[e]=function(){var i=arguments;if(r&&!this.__chain__){var o=this.value();return t.apply(j(o)?o:[],i)}return this[n](function(c){return t.apply(j(c)?c:[],i)})}}),Se(C.prototype,function(e,t){var n=a[t];if(n){var r=n.name+"";L.call(Rt,r)||(Rt[r]=[]),Rt[r].push({name:t,func:n})}}),Rt[Wn(s,it).name]=[{name:"wrapper",func:s}],C.prototype.clone=xu,C.prototype.reverse=wu,C.prototype.value=_u,a.prototype.at=Xp,a.prototype.chain=Qp,a.prototype.commit=ed,a.prototype.next=td,a.prototype.plant=rd,a.prototype.reverse=id,a.prototype.toJSON=a.prototype.valueOf=a.prototype.value=ad,a.prototype.first=a.prototype.head,Dt&&(a.prototype[Dt]=nd),a},Je=eu();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(K._=Je,define(function(){return Je})):ot?((ot.exports=Je)._=Je,Tr._=Je):K._=Je}).call(Et)});var vm={};mm(vm,{default:()=>ls});module.exports=gm(vm);var de=require("@raycast/api"),us=ym(ss());var cs=[{name:"add",category:"Math",description:"Adds two numbers.",since:"3.4.0",examples:[`add(6, 4);
// => 10`],params:[{name:"augend",type:"number",description:"The first number in an addition.",optional:!1},{name:"addend",type:"number",description:"The second number in an addition.",optional:!1}],returns:{type:"number",description:"Returns the total."}},{name:"after",category:"Function",description:"The opposite of `before`; this method creates a function that invokes\n`func` once it's called `n` or more times.",since:"0.1.0",examples:[`var saves = ['profile', 'settings'];

var done = after(saves.length, function() {
  console.log('done saving!');
});

forEach(saves, function(type) {
  asyncSave({ 'type': type, 'complete': done });
});
// => Logs 'done saving!' after the two async saves have completed.`],params:[{name:"n",type:"number",description:"The number of calls before `func` is invoked.",optional:!1},{name:"func",type:"Function",description:"The function to restrict.",optional:!1}],returns:{type:"Function",description:"Returns the new restricted function."}},{name:"ary",category:"Function",description:"Creates a function that invokes `func`, with up to `n` arguments,\nignoring any additional arguments.",since:"3.0.0",examples:[`map(['6', '8', '10'], ary(parseInt, 1));
// => [6, 8, 10]`],params:[{name:"func",type:"Function",description:"The function to cap arguments for.",optional:!1},{name:"n=func.length",type:"number",description:"The arity cap.",optional:!0,defaultValue:"func.length"}],returns:{type:"Function",description:"Returns the new capped function."}},{name:"assign",category:"Object",description:`Assigns own enumerable string keyed properties of source objects to the
destination object. Source objects are applied from left to right.
Subsequent sources overwrite property assignments of previous sources.
<br>
<br>
**Note:** This method mutates \`object\` and is loosely based on
[\`Object.assign\`](https://mdn.io/Object/assign).`,since:"0.10.0",examples:[`function Foo() {
  this.a = 1;
}

function Bar() {
  this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

assign({ 'a': 0 }, new Foo, new Bar);
// => { 'a': 1, 'c': 3 }`],params:[{name:"object",type:"Object",description:"The destination object.",optional:!1},{name:"sources",type:"...Object",description:"The source objects.",optional:!0}],returns:{type:"Object",description:"Returns `object`."}},{name:"assignIn",category:"Object",description:"This method is like `assign` except that it iterates over own and\ninherited source properties.\n<br>\n<br>\n**Note:** This method mutates `object`.",since:"4.0.0",examples:[`function Foo() {
  this.a = 1;
}

function Bar() {
  this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

assignIn({ 'a': 0 }, new Foo, new Bar);
// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }`],params:[{name:"object",type:"Object",description:"The destination object.",optional:!1},{name:"sources",type:"...Object",description:"The source objects.",optional:!0}],returns:{type:"Object",description:"Returns `object`."}},{name:"assignInWith",category:"Object",description:"This method is like `assignIn` except that it accepts `customizer`\nwhich is invoked to produce the assigned values. If `customizer` returns\n`undefined`, assignment is handled by the method instead. The `customizer`\nis invoked with five arguments: *(objValue, srcValue, key, object, source)*.\n<br>\n<br>\n**Note:** This method mutates `object`.",since:"4.0.0",examples:[`function customizer(objValue, srcValue) {
  return isUndefined(objValue) ? srcValue : objValue;
}

var defaults = partialRight(assignInWith, customizer);

defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }`],params:[{name:"object",type:"Object",description:"The destination object.",optional:!1},{name:"sources",type:"...Object",description:"The source objects.",optional:!1},{name:"customizer",type:"Function",description:"The function to customize assigned values.",optional:!0}],returns:{type:"Object",description:"Returns `object`."}},{name:"assignWith",category:"Object",description:"This method is like `assign` except that it accepts `customizer`\nwhich is invoked to produce the assigned values. If `customizer` returns\n`undefined`, assignment is handled by the method instead. The `customizer`\nis invoked with five arguments: *(objValue, srcValue, key, object, source)*.\n<br>\n<br>\n**Note:** This method mutates `object`.",since:"4.0.0",examples:[`function customizer(objValue, srcValue) {
  return isUndefined(objValue) ? srcValue : objValue;
}

var defaults = partialRight(assignWith, customizer);

defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }`],params:[{name:"object",type:"Object",description:"The destination object.",optional:!1},{name:"sources",type:"...Object",description:"The source objects.",optional:!1},{name:"customizer",type:"Function",description:"The function to customize assigned values.",optional:!0}],returns:{type:"Object",description:"Returns `object`."}},{name:"at",category:"Object",description:"Creates an array of values corresponding to `paths` of `object`.",since:"1.0.0",examples:[`var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

at(object, ['a[0].b.c', 'a[1]']);
// => [3, 4]`],params:[{name:"object",type:"Object",description:"The object to iterate over.",optional:!1},{name:"paths",type:"...(string|string[])",description:"The property paths to pick.",optional:!0}],returns:{type:"Array",description:"Returns the picked values."}},{name:"attempt",category:"Util",description:"Attempts to invoke `func`, returning either the result or the caught error\nobject. Any additional arguments are provided to `func` when it's invoked.",since:"3.0.0",examples:[`// Avoid throwing errors for invalid selectors.
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');

if (isError(elements)) {
  elements = [];
}`],params:[{name:"func",type:"Function",description:"The function to attempt.",optional:!1},{name:"args",type:"...*",description:"The arguments to invoke `func` with.",optional:!0}],returns:{type:"*",description:"Returns the `func` result or error object."}},{name:"before",category:"Function",description:"Creates a function that invokes `func`, with the `this` binding and arguments\nof the created function, while it's called less than `n` times. Subsequent\ncalls to the created function return the result of the last `func` invocation.",since:"3.0.0",examples:[`jQuery(element).on('click', before(5, addContactToList));
// => Allows adding up to 4 contacts to the list.`],params:[{name:"n",type:"number",description:"The number of calls at which `func` is no longer invoked.",optional:!1},{name:"func",type:"Function",description:"The function to restrict.",optional:!1}],returns:{type:"Function",description:"Returns the new restricted function."}},{name:"bind",category:"Function",description:'Creates a function that invokes `func` with the `this` binding of `thisArg`\nand `partials` prepended to the arguments it receives.\n<br>\n<br>\nThe `bind.placeholder` value, which defaults to `_` in monolithic builds,\nmay be used as a placeholder for partially applied arguments.\n<br>\n<br>\n**Note:** Unlike native `Function#bind`, this method doesn\'t set the "length"\nproperty of bound functions.',since:"0.1.0",examples:[`function greet(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
}

var object = { 'user': 'fred' };

var bound = bind(greet, object, 'hi');
bound('!');
// => 'hi fred!'

// Bound with placeholders.
var bound = bind(greet, object, _, '!');
bound('hi');
// => 'hi fred!'`],params:[{name:"func",type:"Function",description:"The function to bind.",optional:!1},{name:"thisArg",type:"*",description:"The `this` binding of `func`.",optional:!1},{name:"partials",type:"...*",description:"The arguments to be partially applied.",optional:!0}],returns:{type:"Function",description:"Returns the new bound function."}},{name:"bindAll",category:"Util",description:`Binds methods of an object to the object itself, overwriting the existing
method.
<br>
<br>
**Note:** This method doesn't set the "length" property of bound functions.`,since:"0.1.0",examples:[`var view = {
  'label': 'docs',
  'click': function() {
    console.log('clicked ' + this.label);
  }
};

bindAll(view, ['click']);
jQuery(element).on('click', view.click);
// => Logs 'clicked docs' when clicked.`],params:[{name:"object",type:"Object",description:"The object to bind and assign the bound methods to.",optional:!1},{name:"methodNames",type:"...(string|string[])",description:"The object method names to bind.",optional:!1}],returns:{type:"Object",description:"Returns `object`."}},{name:"bindKey",category:"Function",description:`Creates a function that invokes the method at \`object[key]\` with \`partials\`
prepended to the arguments it receives.
<br>
<br>
This method differs from \`bind\` by allowing bound functions to reference
methods that may be redefined or don't yet exist. See
[Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
for more details.
<br>
<br>
The \`bindKey.placeholder\` value, which defaults to \`_\` in monolithic
builds, may be used as a placeholder for partially applied arguments.`,since:"0.10.0",examples:[`var object = {
  'user': 'fred',
  'greet': function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
};

var bound = bindKey(object, 'greet', 'hi');
bound('!');
// => 'hi fred!'

object.greet = function(greeting, punctuation) {
  return greeting + 'ya ' + this.user + punctuation;
};

bound('!');
// => 'hiya fred!'

// Bound with placeholders.
var bound = bindKey(object, 'greet', _, '!');
bound('hi');
// => 'hiya fred!'`],params:[{name:"object",type:"Object",description:"The object to invoke the method on.",optional:!1},{name:"key",type:"string",description:"The key of the method.",optional:!1},{name:"partials",type:"...*",description:"The arguments to be partially applied.",optional:!0}],returns:{type:"Function",description:"Returns the new bound function."}},{name:"camelCase",category:"String",description:"Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).",since:"3.0.0",examples:[`camelCase('Foo Bar');
// => 'fooBar'

camelCase('--foo-bar--');
// => 'fooBar'

camelCase('__FOO_BAR__');
// => 'fooBar'`],params:[{name:"string=''",type:"string",description:"The string to convert.",optional:!0,defaultValue:"''"}],returns:{type:"string",description:"Returns the camel cased string."}},{name:"capitalize",category:"String",description:"Converts the first character of `string` to upper case and the remaining\nto lower case.",since:"3.0.0",examples:[`capitalize('FRED');
// => 'Fred'`],params:[{name:"string=''",type:"string",description:"The string to capitalize.",optional:!0,defaultValue:"''"}],returns:{type:"string",description:"Returns the capitalized string."}},{name:"castArray",category:"Lang",description:"Casts `value` as an array if it's not one.",since:"4.4.0",examples:[`castArray(1);
// => [1]

castArray({ 'a': 1 });
// => [{ 'a': 1 }]

castArray('abc');
// => ['abc']

castArray(null);
// => [null]

castArray(undefined);
// => [undefined]

castArray();
// => []

var array = [1, 2, 3];
console.log(castArray(array) === array);
// => true`],params:[{name:"value",type:"*",description:"The value to inspect.",optional:!1}],returns:{type:"Array",description:"Returns the cast array."}},{name:"ceil",category:"Math",description:"Computes `number` rounded up to `precision`.",since:"3.10.0",examples:[`ceil(4.006);
// => 5

ceil(6.004, 2);
// => 6.01

ceil(6040, -2);
// => 6100`],params:[{name:"number",type:"number",description:"The number to round up.",optional:!1},{name:"precision=0",type:"number",description:"The precision to round up to.",optional:!0,defaultValue:"0"}],returns:{type:"number",description:"Returns the rounded up number."}},{name:"chain",category:"Seq",description:"Creates a `lodash` wrapper instance that wraps `value` with explicit method\nchain sequences enabled. The result of such sequences must be unwrapped\nwith `_#value`.",since:"1.3.0",examples:[`var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];

var youngest = _
  .chain(users)
  .sortBy('age')
  .map(function(o) {
    return o.user + ' is ' + o.age;
  })
  .head()
  .value();
// => 'pebbles is 1'`],params:[{name:"value",type:"*",description:"The value to wrap.",optional:!1}],returns:{type:"Object",description:"Returns the new `lodash` wrapper instance."}},{name:"chunk",category:"Array",description:"Creates an array of elements split into groups the length of `size`.\nIf `array` can't be split evenly, the final chunk will be the remaining\nelements.",since:"3.0.0",examples:[`chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]`],params:[{name:"array",type:"Array",description:"The array to process.",optional:!1},{name:"size=1",type:"number",description:"The length of each chunk",optional:!0,defaultValue:"1"}],returns:{type:"Array",description:"Returns the new array of chunks."}},{name:"clamp",category:"Number",description:"Clamps `number` within the inclusive `lower` and `upper` bounds.",since:"4.0.0",examples:[`clamp(-10, -5, 5);
// => -5

clamp(10, -5, 5);
// => 5`],params:[{name:"number",type:"number",description:"The number to clamp.",optional:!1},{name:"lower",type:"number",description:"The lower bound.",optional:!0},{name:"upper",type:"number",description:"The upper bound.",optional:!1}],returns:{type:"number",description:"Returns the clamped number."}},{name:"clone",category:"Lang",description:`Creates a shallow clone of \`value\`.
<br>
<br>
**Note:** This method is loosely based on the
[structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
and supports cloning arrays, array buffers, booleans, date objects, maps,
numbers, \`Object\` objects, regexes, sets, strings, symbols, and typed
arrays. The own enumerable properties of \`arguments\` objects are cloned
as plain objects. An empty object is returned for uncloneable values such
as error objects, functions, DOM nodes, and WeakMaps.`,since:"0.1.0",examples:[`var objects = [{ 'a': 1 }, { 'b': 2 }];

var shallow = clone(objects);
console.log(shallow[0] === objects[0]);
// => true`],params:[{name:"value",type:"*",description:"The value to clone.",optional:!1}],returns:{type:"*",description:"Returns the cloned value."}},{name:"cloneDeep",category:"Lang",description:"This method is like `clone` except that it recursively clones `value`.",since:"1.0.0",examples:[`var objects = [{ 'a': 1 }, { 'b': 2 }];

var deep = cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false`],params:[{name:"value",type:"*",description:"The value to recursively clone.",optional:!1}],returns:{type:"*",description:"Returns the deep cloned value."}},{name:"cloneDeepWith",category:"Lang",description:"This method is like `cloneWith` except that it recursively clones `value`.",since:"4.0.0",examples:[`function customizer(value) {
  if (isElement(value)) {
    return value.cloneNode(true);
  }
}

var el = cloneDeepWith(document.body, customizer);

console.log(el === document.body);
// => false
console.log(el.nodeName);
// => 'BODY'
console.log(el.childNodes.length);
// => 20`],params:[{name:"value",type:"*",description:"The value to recursively clone.",optional:!1},{name:"customizer",type:"Function",description:"The function to customize cloning.",optional:!0}],returns:{type:"*",description:"Returns the deep cloned value."}},{name:"cloneWith",category:"Lang",description:"This method is like `clone` except that it accepts `customizer` which\nis invoked to produce the cloned value. If `customizer` returns `undefined`,\ncloning is handled by the method instead. The `customizer` is invoked with\nup to four arguments; *(value [, index|key, object, stack])*.",since:"4.0.0",examples:[`function customizer(value) {
  if (isElement(value)) {
    return value.cloneNode(false);
  }
}

var el = cloneWith(document.body, customizer);

console.log(el === document.body);
// => false
console.log(el.nodeName);
// => 'BODY'
console.log(el.childNodes.length);
// => 0`],params:[{name:"value",type:"*",description:"The value to clone.",optional:!1},{name:"customizer",type:"Function",description:"The function to customize cloning.",optional:!0}],returns:{type:"*",description:"Returns the cloned value."}},{name:"compact",category:"Array",description:'Creates an array with all falsey values removed. The values `false`, `null`,\n`0`, `""`, `undefined`, and `NaN` are falsey.',since:"0.1.0",examples:[`compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]`],params:[{name:"array",type:"Array",description:"The array to compact.",optional:!1}],returns:{type:"Array",description:"Returns the new array of filtered values."}},{name:"concat",category:"Array",description:"Creates a new array concatenating `array` with any additional arrays\nand/or values.",since:"4.0.0",examples:[`var array = [1];
var other = concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]`],params:[{name:"array",type:"Array",description:"The array to concatenate.",optional:!1},{name:"values",type:"...*",description:"The values to concatenate.",optional:!0}],returns:{type:"Array",description:"Returns the new concatenated array."}},{name:"cond",category:"Util",description:"Creates a function that iterates over `pairs` and invokes the corresponding\nfunction of the first predicate to return truthy. The predicate-function\npairs are invoked with the `this` binding and arguments of the created\nfunction.",since:"4.0.0",examples:[`var func = cond([
  [matches({ 'a': 1 }),           constant('matches A')],
  [conforms({ 'b': isNumber }), constant('matches B')],
  [stubTrue,                      constant('no match')]
]);

func({ 'a': 1, 'b': 2 });
// => 'matches A'

func({ 'a': 0, 'b': 1 });
// => 'matches B'

func({ 'a': '1', 'b': '2' });
// => 'no match'`],params:[{name:"pairs",type:"Array",description:"The predicate-function pairs.",optional:!1}],returns:{type:"Function",description:"Returns the new composite function."}},{name:"conforms",category:"Util",description:"Creates a function that invokes the predicate properties of `source` with\nthe corresponding property values of a given object, returning `true` if\nall predicates return truthy, else `false`.\n<br>\n<br>\n**Note:** The created function is equivalent to `conformsTo` with\n`source` partially applied.",since:"4.0.0",examples:[`var objects = [
  { 'a': 2, 'b': 1 },
  { 'a': 1, 'b': 2 }
];

filter(objects, conforms({ 'b': function(n) { return n > 1; } }));
// => [{ 'a': 1, 'b': 2 }]`],params:[{name:"source",type:"Object",description:"The object of property predicates to conform to.",optional:!1}],returns:{type:"Function",description:"Returns the new spec function."}},{name:"conformsTo",category:"Lang",description:"Checks if `object` conforms to `source` by invoking the predicate\nproperties of `source` with the corresponding property values of `object`.\n<br>\n<br>\n**Note:** This method is equivalent to `conforms` when `source` is\npartially applied.",since:"4.14.0",examples:[`var object = { 'a': 1, 'b': 2 };

conformsTo(object, { 'b': function(n) { return n > 1; } });
// => true

conformsTo(object, { 'b': function(n) { return n > 2; } });
// => false`],params:[{name:"object",type:"Object",description:"The object to inspect.",optional:!1},{name:"source",type:"Object",description:"The object of property predicates to conform to.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `object` conforms, else `false`."}},{name:"constant",category:"Util",description:"Creates a function that returns `value`.",since:"2.4.0",examples:[`var objects = times(2, constant({ 'a': 1 }));

console.log(objects);
// => [{ 'a': 1 }, { 'a': 1 }]

console.log(objects[0] === objects[1]);
// => true`],params:[{name:"value",type:"*",description:"The value to return from the new function.",optional:!1}],returns:{type:"Function",description:"Returns the new constant function."}},{name:"countBy",category:"Collection",description:"Creates an object composed of keys generated from the results of running\neach element of `collection` thru `iteratee`. The corresponding value of\neach key is the number of times the key was returned by `iteratee`. The\niteratee is invoked with one argument: *(value)*.",since:"0.5.0",examples:[`countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }

// The \`property\` iteratee shorthand.
countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }`],params:[{name:"collection",type:"Array|Object",description:"The collection to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The iteratee to transform keys.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Object",description:"Returns the composed aggregate object."}},{name:"create",category:"Object",description:"Creates an object that inherits from the `prototype` object. If a\n`properties` object is given, its own enumerable string keyed properties\nare assigned to the created object.",since:"2.3.0",examples:[`function Shape() {
  this.x = 0;
  this.y = 0;
}

function Circle() {
  Shape.call(this);
}

Circle.prototype = create(Shape.prototype, {
  'constructor': Circle
});

var circle = new Circle;
circle instanceof Circle;
// => true

circle instanceof Shape;
// => true`],params:[{name:"prototype",type:"Object",description:"The object to inherit from.",optional:!1},{name:"properties",type:"Object",description:"The properties to assign to the object.",optional:!0}],returns:{type:"Object",description:"Returns the new object."}},{name:"curry",category:"Function",description:'Creates a function that accepts arguments of `func` and either invokes\n`func` returning its result, if at least `arity` number of arguments have\nbeen provided, or returns a function that accepts the remaining `func`\narguments, and so on. The arity of `func` may be specified if `func.length`\nis not sufficient.\n<br>\n<br>\nThe `curry.placeholder` value, which defaults to `_` in monolithic builds,\nmay be used as a placeholder for provided arguments.\n<br>\n<br>\n**Note:** This method doesn\'t set the "length" property of curried functions.',since:"2.0.0",examples:[`var abc = function(a, b, c) {
  return [a, b, c];
};

var curried = curry(abc);

curried(1)(2)(3);
// => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]

// Curried with placeholders.
curried(1)(_, 3)(2);
// => [1, 2, 3]`],params:[{name:"func",type:"Function",description:"The function to curry.",optional:!1},{name:"arity=func.length",type:"number",description:"The arity of `func`.",optional:!0,defaultValue:"func.length"}],returns:{type:"Function",description:"Returns the new curried function."}},{name:"curryRight",category:"Function",description:'This method is like `curry` except that arguments are applied to `func`\nin the manner of `partialRight` instead of `partial`.\n<br>\n<br>\nThe `curryRight.placeholder` value, which defaults to `_` in monolithic\nbuilds, may be used as a placeholder for provided arguments.\n<br>\n<br>\n**Note:** This method doesn\'t set the "length" property of curried functions.',since:"3.0.0",examples:[`var abc = function(a, b, c) {
  return [a, b, c];
};

var curried = curryRight(abc);

curried(3)(2)(1);
// => [1, 2, 3]

curried(2, 3)(1);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]

// Curried with placeholders.
curried(3)(1, _)(2);
// => [1, 2, 3]`],params:[{name:"func",type:"Function",description:"The function to curry.",optional:!1},{name:"arity=func.length",type:"number",description:"The arity of `func`.",optional:!0,defaultValue:"func.length"}],returns:{type:"Function",description:"Returns the new curried function."}},{name:"debounce",category:"Function",description:"Creates a debounced function that delays invoking `func` until after `wait`\nmilliseconds have elapsed since the last time the debounced function was\ninvoked. The debounced function comes with a `cancel` method to cancel\ndelayed `func` invocations and a `flush` method to immediately invoke them.\nProvide `options` to indicate whether `func` should be invoked on the\nleading and/or trailing edge of the `wait` timeout. The `func` is invoked\nwith the last arguments provided to the debounced function. Subsequent\ncalls to the debounced function return the result of the last `func`\ninvocation.\n<br>\n<br>\n**Note:** If `leading` and `trailing` options are `true`, `func` is\ninvoked on the trailing edge of the timeout only if the debounced function\nis invoked more than once during the `wait` timeout.\n<br>\n<br>\nIf `wait` is `0` and `leading` is `false`, `func` invocation is deferred\nuntil to the next tick, similar to `setTimeout` with a timeout of `0`.\n<br>\n<br>\nSee [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\nfor details over the differences between `debounce` and `throttle`.",since:"0.1.0",examples:[`// Avoid costly calculations while the window size is in flux.
jQuery(window).on('resize', debounce(calculateLayout, 150));

// Invoke \`sendMail\` when clicked, debouncing subsequent calls.
jQuery(element).on('click', debounce(sendMail, 300, {
  'leading': true,
  'trailing': false
}));

// Ensure \`batchLog\` is invoked once after 1 second of debounced calls.
var debounced = debounce(batchLog, 250, { 'maxWait': 1000 });
var source = new EventSource('/stream');
jQuery(source).on('message', debounced);

// Cancel the trailing debounced invocation.
jQuery(window).on('popstate', debounced.cancel);`],params:[{name:"func",type:"Function",description:"The function to debounce.",optional:!1},{name:"wait=0",type:"number",description:"The number of milliseconds to delay.",optional:!0,defaultValue:"0"},{name:"options={}",type:"Object",description:"The options object.",optional:!0,defaultValue:"{}"},{name:"options.leading=false",type:"boolean",description:"Specify invoking on the leading edge of the timeout.",optional:!0,defaultValue:"false"},{name:"options.maxWait",type:"number",description:"The maximum time `func` is allowed to be delayed before it's invoked.",optional:!0},{name:"options.trailing=true",type:"boolean",description:"Specify invoking on the trailing edge of the timeout.",optional:!0,defaultValue:"true"}],returns:{type:"Function",description:"Returns the new debounced function."}},{name:"deburr",category:"String",description:`Deburrs \`string\` by converting
[Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
letters to basic Latin letters and removing
[combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).`,since:"3.0.0",examples:[`deburr('d\xE9j\xE0 vu');
// => 'deja vu'`],params:[{name:"string=''",type:"string",description:"The string to deburr.",optional:!0,defaultValue:"''"}],returns:{type:"string",description:"Returns the deburred string."}},{name:"defaults",category:"Object",description:`Assigns own and inherited enumerable string keyed properties of source
objects to the destination object for all destination properties that
resolve to \`undefined\`. Source objects are applied from left to right.
Once a property is set, additional values of the same property are ignored.
<br>
<br>
**Note:** This method mutates \`object\`.`,since:"0.1.0",examples:[`defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }`],params:[{name:"object",type:"Object",description:"The destination object.",optional:!1},{name:"sources",type:"...Object",description:"The source objects.",optional:!0}],returns:{type:"Object",description:"Returns `object`."}},{name:"defaultsDeep",category:"Object",description:"This method is like `defaults` except that it recursively assigns\ndefault properties.\n<br>\n<br>\n**Note:** This method mutates `object`.",since:"3.10.0",examples:[`defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
// => { 'a': { 'b': 2, 'c': 3 } }`],params:[{name:"object",type:"Object",description:"The destination object.",optional:!1},{name:"sources",type:"...Object",description:"The source objects.",optional:!0}],returns:{type:"Object",description:"Returns `object`."}},{name:"defaultTo",category:"Util",description:"Checks `value` to determine whether a default value should be returned in\nits place. The `defaultValue` is returned if `value` is `NaN`, `null`,\nor `undefined`.",since:"4.14.0",examples:[`defaultTo(1, 10);
// => 1

defaultTo(undefined, 10);
// => 10`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1},{name:"defaultValue",type:"*",description:"The default value.",optional:!1}],returns:{type:"*",description:"Returns the resolved value."}},{name:"defer",category:"Function",description:"Defers invoking the `func` until the current call stack has cleared. Any\nadditional arguments are provided to `func` when it's invoked.",since:"0.1.0",examples:[`defer(function(text) {
  console.log(text);
}, 'deferred');
// => Logs 'deferred' after one millisecond.`],params:[{name:"func",type:"Function",description:"The function to defer.",optional:!1},{name:"args",type:"...*",description:"The arguments to invoke `func` with.",optional:!0}],returns:{type:"number",description:"Returns the timer id."}},{name:"delay",category:"Function",description:"Invokes `func` after `wait` milliseconds. Any additional arguments are\nprovided to `func` when it's invoked.",since:"0.1.0",examples:[`delay(function(text) {
  console.log(text);
}, 1000, 'later');
// => Logs 'later' after one second.`],params:[{name:"func",type:"Function",description:"The function to delay.",optional:!1},{name:"wait",type:"number",description:"The number of milliseconds to delay invocation.",optional:!1},{name:"args",type:"...*",description:"The arguments to invoke `func` with.",optional:!0}],returns:{type:"number",description:"Returns the timer id."}},{name:"difference",category:"Array",description:"Creates an array of `array` values not included in the other given arrays\nusing [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\nfor equality comparisons. The order and references of result values are\ndetermined by the first array.\n<br>\n<br>\n**Note:** Unlike `pullAll`, this method returns a new array.",since:"0.1.0",examples:[`difference([2, 1], [2, 3]);
// => [1]`],params:[{name:"array",type:"Array",description:"The array to inspect.",optional:!1},{name:"values",type:"...Array",description:"The values to exclude.",optional:!0}],returns:{type:"Array",description:"Returns the new array of filtered values."}},{name:"differenceBy",category:"Array",description:"This method is like `difference` except that it accepts `iteratee` which\nis invoked for each element of `array` and `values` to generate the criterion\nby which they're compared. The order and references of result values are\ndetermined by the first array. The iteratee is invoked with one argument:<br>\n*(value)*.\n<br>\n<br>\n**Note:** Unlike `pullAllBy`, this method returns a new array.",since:"4.0.0",examples:[`differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2]

// The \`property\` iteratee shorthand.
differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]`],params:[{name:"array",type:"Array",description:"The array to inspect.",optional:!1},{name:"values",type:"...Array",description:"The values to exclude.",optional:!0},{name:"iteratee=_.identity",type:"Function",description:"The iteratee invoked per element.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Array",description:"Returns the new array of filtered values."}},{name:"differenceWith",category:"Array",description:"This method is like `difference` except that it accepts `comparator`\nwhich is invoked to compare elements of `array` to `values`. The order and\nreferences of result values are determined by the first array. The comparator\nis invoked with two arguments: *(arrVal, othVal)*.\n<br>\n<br>\n**Note:** Unlike `pullAllWith`, this method returns a new array.",since:"4.0.0",examples:[`var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

differenceWith(objects, [{ 'x': 1, 'y': 2 }], isEqual);
// => [{ 'x': 2, 'y': 1 }]`],params:[{name:"array",type:"Array",description:"The array to inspect.",optional:!1},{name:"values",type:"...Array",description:"The values to exclude.",optional:!0},{name:"comparator",type:"Function",description:"The comparator invoked per element.",optional:!0}],returns:{type:"Array",description:"Returns the new array of filtered values."}},{name:"divide",category:"Math",description:"Divide two numbers.",since:"4.7.0",examples:[`divide(6, 4);
// => 1.5`],params:[{name:"dividend",type:"number",description:"The first number in a division.",optional:!1},{name:"divisor",type:"number",description:"The second number in a division.",optional:!1}],returns:{type:"number",description:"Returns the quotient."}},{name:"drop",category:"Array",description:"Creates a slice of `array` with `n` elements dropped from the beginning.",since:"0.5.0",examples:[`drop([1, 2, 3]);
// => [2, 3]

drop([1, 2, 3], 2);
// => [3]

drop([1, 2, 3], 5);
// => []

drop([1, 2, 3], 0);
// => [1, 2, 3]`],params:[{name:"array",type:"Array",description:"The array to query.",optional:!1},{name:"n=1",type:"number",description:"The number of elements to drop.",optional:!0,defaultValue:"1"}],returns:{type:"Array",description:"Returns the slice of `array`."}},{name:"dropRight",category:"Array",description:"Creates a slice of `array` with `n` elements dropped from the end.",since:"3.0.0",examples:[`dropRight([1, 2, 3]);
// => [1, 2]

dropRight([1, 2, 3], 2);
// => [1]

dropRight([1, 2, 3], 5);
// => []

dropRight([1, 2, 3], 0);
// => [1, 2, 3]`],params:[{name:"array",type:"Array",description:"The array to query.",optional:!1},{name:"n=1",type:"number",description:"The number of elements to drop.",optional:!0,defaultValue:"1"}],returns:{type:"Array",description:"Returns the slice of `array`."}},{name:"dropRightWhile",category:"Array",description:"Creates a slice of `array` excluding elements dropped from the end.\nElements are dropped until `predicate` returns falsey. The predicate is\ninvoked with three arguments: *(value, index, array)*.",since:"3.0.0",examples:[`var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

dropRightWhile(users, function(o) { return !o.active; });
// => objects for ['barney']

// The \`matches\` iteratee shorthand.
dropRightWhile(users, { 'user': 'pebbles', 'active': false });
// => objects for ['barney', 'fred']

// The \`matchesProperty\` iteratee shorthand.
dropRightWhile(users, ['active', false]);
// => objects for ['barney']

// The \`property\` iteratee shorthand.
dropRightWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']`],params:[{name:"array",type:"Array",description:"The array to query.",optional:!1},{name:"predicate=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Array",description:"Returns the slice of `array`."}},{name:"dropWhile",category:"Array",description:"Creates a slice of `array` excluding elements dropped from the beginning.\nElements are dropped until `predicate` returns falsey. The predicate is\ninvoked with three arguments: *(value, index, array)*.",since:"3.0.0",examples:[`var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

dropWhile(users, function(o) { return !o.active; });
// => objects for ['pebbles']

// The \`matches\` iteratee shorthand.
dropWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['fred', 'pebbles']

// The \`matchesProperty\` iteratee shorthand.
dropWhile(users, ['active', false]);
// => objects for ['pebbles']

// The \`property\` iteratee shorthand.
dropWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']`],params:[{name:"array",type:"Array",description:"The array to query.",optional:!1},{name:"predicate=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Array",description:"Returns the slice of `array`."}},{name:"endsWith",category:"String",description:"Checks if `string` ends with the given target string.",since:"3.0.0",examples:[`endsWith('abc', 'c');
// => true

endsWith('abc', 'b');
// => false

endsWith('abc', 'b', 2);
// => true`],params:[{name:"string=''",type:"string",description:"The string to inspect.",optional:!0,defaultValue:"''"},{name:"target",type:"string",description:"The string to search for.",optional:!0},{name:"position=string.length",type:"number",description:"The position to search up to.",optional:!0,defaultValue:"string.length"}],returns:{type:"boolean",description:"Returns `true` if `string` ends with `target`,\n else `false`."}},{name:"eq",category:"Lang",description:"Performs a\n[`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\ncomparison between two values to determine if they are equivalent.",since:"4.0.0",examples:[`var object = { 'a': 1 };
var other = { 'a': 1 };

eq(object, object);
// => true

eq(object, other);
// => false

eq('a', 'a');
// => true

eq('a', Object('a'));
// => false

eq(NaN, NaN);
// => true`],params:[{name:"value",type:"*",description:"The value to compare.",optional:!1},{name:"other",type:"*",description:"The other value to compare.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if the values are equivalent, else `false`."}},{name:"escape",category:"Properties",description:"(RegExp): Used to detect `data` property values to be HTML-escaped.",examples:[],params:[]},{name:"escape",category:"String",description:`Converts the characters "&", "<", ">", '"', and "'" in \`string\` to their
corresponding HTML entities.
<br>
<br>
**Note:** No other characters are escaped. To escape additional
characters use a third-party library like [_he_](https://mths.be/he).
<br>
<br>
Though the ">" character is escaped for symmetry, characters like
">" and "/" don't need escaping in HTML and have no special meaning
unless they're part of a tag or unquoted attribute value. See
[Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
*(under "semi-related fun fact")* for more details.
<br>
<br>
When working with HTML you should always
[quote attribute values](http://wonko.com/post/html-escaping) to reduce
XSS vectors.`,since:"0.1.0",examples:[`escape('fred, barney, & pebbles');
// => 'fred, barney, &amp; pebbles'`],params:[{name:"string=''",type:"string",description:"The string to escape.",optional:!0,defaultValue:"''"}],returns:{type:"string",description:"Returns the escaped string."}},{name:"escapeRegExp",category:"String",description:'Escapes the `RegExp` special characters "^", "$", "\\", ".", "*", "+",\n"?", "(", ")", "[", "]", "{", "}", and "|" in `string`.',since:"3.0.0",examples:[`escapeRegExp('[lodash](https://lodash.com/)');
// => '\\[lodash\\]\\(https://lodash\\.com/\\)'`],params:[{name:"string=''",type:"string",description:"The string to escape.",optional:!0,defaultValue:"''"}],returns:{type:"string",description:"Returns the escaped string."}},{name:"evaluate",category:"Properties",description:"(RegExp): Used to detect code to be evaluated.",examples:[],params:[]},{name:"every",category:"Collection",description:"Checks if `predicate` returns truthy for **all** elements of `collection`.\nIteration is stopped once `predicate` returns falsey. The predicate is\ninvoked with three arguments: *(value, index|key, collection)*.\n<br>\n<br>\n**Note:** This method returns `true` for\n[empty collections](https://en.wikipedia.org/wiki/Empty_set) because\n[everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of\nelements of empty collections.",since:"0.1.0",examples:[`every([true, 1, null, 'yes'], Boolean);
// => false

var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': false }
];

// The \`matches\` iteratee shorthand.
every(users, { 'user': 'barney', 'active': false });
// => false

// The \`matchesProperty\` iteratee shorthand.
every(users, ['active', false]);
// => true

// The \`property\` iteratee shorthand.
every(users, 'active');
// => false`],params:[{name:"collection",type:"Array|Object",description:"The collection to iterate over.",optional:!1},{name:"predicate=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"boolean",description:"Returns `true` if all elements pass the predicate check,\n else `false`."}},{name:"fill",category:"Array",description:"Fills elements of `array` with `value` from `start` up to, but not\nincluding, `end`.\n<br>\n<br>\n**Note:** This method mutates `array`.",since:"3.2.0",examples:[`var array = [1, 2, 3];

fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']

fill(Array(3), 2);
// => [2, 2, 2]

fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]`],params:[{name:"array",type:"Array",description:"The array to fill.",optional:!1},{name:"value",type:"*",description:"The value to fill `array` with.",optional:!1},{name:"start=0",type:"number",description:"The start position.",optional:!0,defaultValue:"0"},{name:"end=array.length",type:"number",description:"The end position.",optional:!0,defaultValue:"array.length"}],returns:{type:"Array",description:"Returns `array`."}},{name:"filter",category:"Collection",description:"Iterates over elements of `collection`, returning an array of all elements\n`predicate` returns truthy for. The predicate is invoked with three\narguments: *(value, index|key, collection)*.\n<br>\n<br>\n**Note:** Unlike `remove`, this method returns a new array.",since:"0.1.0",examples:[`var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

filter(users, function(o) { return !o.active; });
// => objects for ['fred']

// The \`matches\` iteratee shorthand.
filter(users, { 'age': 36, 'active': true });
// => objects for ['barney']

// The \`matchesProperty\` iteratee shorthand.
filter(users, ['active', false]);
// => objects for ['fred']

// The \`property\` iteratee shorthand.
filter(users, 'active');
// => objects for ['barney']

// Combining several predicates using \`overEvery\` or \`overSome\`.
filter(users, overSome([{ 'age': 36 }, ['age', 40]]));
// => objects for ['fred', 'barney']`],params:[{name:"collection",type:"Array|Object",description:"The collection to iterate over.",optional:!1},{name:"predicate=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Array",description:"Returns the new filtered array."}},{name:"find",category:"Collection",description:"Iterates over elements of `collection`, returning the first element\n`predicate` returns truthy for. The predicate is invoked with three\narguments: *(value, index|key, collection)*.",since:"0.1.0",examples:[`var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

find(users, function(o) { return o.age < 40; });
// => object for 'barney'

// The \`matches\` iteratee shorthand.
find(users, { 'age': 1, 'active': true });
// => object for 'pebbles'

// The \`matchesProperty\` iteratee shorthand.
find(users, ['active', false]);
// => object for 'fred'

// The \`property\` iteratee shorthand.
find(users, 'active');
// => object for 'barney'`],params:[{name:"collection",type:"Array|Object",description:"The collection to inspect.",optional:!1},{name:"predicate=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"},{name:"fromIndex=0",type:"number",description:"The index to search from.",optional:!0,defaultValue:"0"}],returns:{type:"*",description:"Returns the matched element, else `undefined`."}},{name:"findIndex",category:"Array",description:"This method is like `find` except that it returns the index of the first\nelement `predicate` returns truthy for instead of the element itself.",since:"1.1.0",examples:[`var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

findIndex(users, function(o) { return o.user == 'barney'; });
// => 0

// The \`matches\` iteratee shorthand.
findIndex(users, { 'user': 'fred', 'active': false });
// => 1

// The \`matchesProperty\` iteratee shorthand.
findIndex(users, ['active', false]);
// => 0

// The \`property\` iteratee shorthand.
findIndex(users, 'active');
// => 2`],params:[{name:"array",type:"Array",description:"The array to inspect.",optional:!1},{name:"predicate=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"},{name:"fromIndex=0",type:"number",description:"The index to search from.",optional:!0,defaultValue:"0"}],returns:{type:"number",description:"Returns the index of the found element, else `-1`."}},{name:"findKey",category:"Object",description:"This method is like `find` except that it returns the key of the first\nelement `predicate` returns truthy for instead of the element itself.",since:"1.1.0",examples:[`var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};

findKey(users, function(o) { return o.age < 40; });
// => 'barney' (iteration order is not guaranteed)

// The \`matches\` iteratee shorthand.
findKey(users, { 'age': 1, 'active': true });
// => 'pebbles'

// The \`matchesProperty\` iteratee shorthand.
findKey(users, ['active', false]);
// => 'fred'

// The \`property\` iteratee shorthand.
findKey(users, 'active');
// => 'barney'`],params:[{name:"object",type:"Object",description:"The object to inspect.",optional:!1},{name:"predicate=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"*",description:"Returns the key of the matched element,\n else `undefined`."}},{name:"findLast",category:"Collection",description:"This method is like `find` except that it iterates over elements of\n`collection` from right to left.",since:"2.0.0",examples:[`findLast([1, 2, 3, 4], function(n) {
  return n % 2 == 1;
});
// => 3`],params:[{name:"collection",type:"Array|Object",description:"The collection to inspect.",optional:!1},{name:"predicate=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"},{name:"fromIndex=collection.length-1",type:"number",description:"The index to search from.",optional:!0,defaultValue:"collection.length-1"}],returns:{type:"*",description:"Returns the matched element, else `undefined`."}},{name:"findLastIndex",category:"Array",description:"This method is like `findIndex` except that it iterates over elements\nof `collection` from right to left.",since:"2.0.0",examples:[`var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

findLastIndex(users, function(o) { return o.user == 'pebbles'; });
// => 2

// The \`matches\` iteratee shorthand.
findLastIndex(users, { 'user': 'barney', 'active': true });
// => 0

// The \`matchesProperty\` iteratee shorthand.
findLastIndex(users, ['active', false]);
// => 2

// The \`property\` iteratee shorthand.
findLastIndex(users, 'active');
// => 0`],params:[{name:"array",type:"Array",description:"The array to inspect.",optional:!1},{name:"predicate=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"},{name:"fromIndex=array.length-1",type:"number",description:"The index to search from.",optional:!0,defaultValue:"array.length-1"}],returns:{type:"number",description:"Returns the index of the found element, else `-1`."}},{name:"findLastKey",category:"Object",description:"This method is like `findKey` except that it iterates over elements of\na collection in the opposite order.",since:"2.0.0",examples:[`var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};

findLastKey(users, function(o) { return o.age < 40; });
// => returns 'pebbles' assuming \`findKey\` returns 'barney'

// The \`matches\` iteratee shorthand.
findLastKey(users, { 'age': 36, 'active': true });
// => 'barney'

// The \`matchesProperty\` iteratee shorthand.
findLastKey(users, ['active', false]);
// => 'fred'

// The \`property\` iteratee shorthand.
findLastKey(users, 'active');
// => 'pebbles'`],params:[{name:"object",type:"Object",description:"The object to inspect.",optional:!1},{name:"predicate=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"*",description:"Returns the key of the matched element,\n else `undefined`."}},{name:"flatMap",category:"Collection",description:"Creates a flattened array of values by running each element in `collection`\nthru `iteratee` and flattening the mapped results. The iteratee is invoked\nwith three arguments: *(value, index|key, collection)*.",since:"4.0.0",examples:[`function duplicate(n) {
  return [n, n];
}

flatMap([1, 2], duplicate);
// => [1, 1, 2, 2]`],params:[{name:"collection",type:"Array|Object",description:"The collection to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Array",description:"Returns the new flattened array."}},{name:"flatMapDeep",category:"Collection",description:"This method is like `flatMap` except that it recursively flattens the\nmapped results.",since:"4.7.0",examples:[`function duplicate(n) {
  return [[[n, n]]];
}

flatMapDeep([1, 2], duplicate);
// => [1, 1, 2, 2]`],params:[{name:"collection",type:"Array|Object",description:"The collection to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Array",description:"Returns the new flattened array."}},{name:"flatMapDepth",category:"Collection",description:"This method is like `flatMap` except that it recursively flattens the\nmapped results up to `depth` times.",since:"4.7.0",examples:[`function duplicate(n) {
  return [[[n, n]]];
}

flatMapDepth([1, 2], duplicate, 2);
// => [[1, 1], [2, 2]]`],params:[{name:"collection",type:"Array|Object",description:"The collection to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"},{name:"depth=1",type:"number",description:"The maximum recursion depth.",optional:!0,defaultValue:"1"}],returns:{type:"Array",description:"Returns the new flattened array."}},{name:"flatten",category:"Array",description:"Flattens `array` a single level deep.",since:"0.1.0",examples:[`flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]`],params:[{name:"array",type:"Array",description:"The array to flatten.",optional:!1}],returns:{type:"Array",description:"Returns the new flattened array."}},{name:"flattenDeep",category:"Array",description:"Recursively flattens `array`.",since:"3.0.0",examples:[`flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]`],params:[{name:"array",type:"Array",description:"The array to flatten.",optional:!1}],returns:{type:"Array",description:"Returns the new flattened array."}},{name:"flattenDepth",category:"Array",description:"Recursively flatten `array` up to `depth` times.",since:"4.4.0",examples:[`var array = [1, [2, [3, [4]], 5]];

flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]

flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]`],params:[{name:"array",type:"Array",description:"The array to flatten.",optional:!1},{name:"depth=1",type:"number",description:"The maximum recursion depth.",optional:!0,defaultValue:"1"}],returns:{type:"Array",description:"Returns the new flattened array."}},{name:"flip",category:"Function",description:"Creates a function that invokes `func` with arguments reversed.",since:"4.0.0",examples:[`var flipped = flip(function() {
  return toArray(arguments);
});

flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']`],params:[{name:"func",type:"Function",description:"The function to flip arguments for.",optional:!1}],returns:{type:"Function",description:"Returns the new flipped function."}},{name:"floor",category:"Math",description:"Computes `number` rounded down to `precision`.",since:"3.10.0",examples:[`floor(4.006);
// => 4

floor(0.046, 2);
// => 0.04

floor(4060, -2);
// => 4000`],params:[{name:"number",type:"number",description:"The number to round down.",optional:!1},{name:"precision=0",type:"number",description:"The precision to round down to.",optional:!0,defaultValue:"0"}],returns:{type:"number",description:"Returns the rounded down number."}},{name:"flow",category:"Util",description:"Creates a function that returns the result of invoking the given functions\nwith the `this` binding of the created function, where each successive\ninvocation is supplied the return value of the previous.",since:"3.0.0",examples:[`function square(n) {
  return n * n;
}

var addSquare = flow([add, square]);
addSquare(1, 2);
// => 9`],params:[{name:"funcs",type:"...(Function|Function[])",description:"The functions to invoke.",optional:!0}],returns:{type:"Function",description:"Returns the new composite function."}},{name:"flowRight",category:"Util",description:"This method is like `flow` except that it creates a function that\ninvokes the given functions from right to left.",since:"3.0.0",examples:[`function square(n) {
  return n * n;
}

var addSquare = flowRight([square, add]);
addSquare(1, 2);
// => 9`],params:[{name:"funcs",type:"...(Function|Function[])",description:"The functions to invoke.",optional:!0}],returns:{type:"Function",description:"Returns the new composite function."}},{name:"forEach",category:"Collection",description:'Iterates over elements of `collection` and invokes `iteratee` for each element.\nThe iteratee is invoked with three arguments: *(value, index|key, collection)*.\nIteratee functions may exit iteration early by explicitly returning `false`.\n<br>\n<br>\n**Note:** As with other "Collections" methods, objects with a "length"\nproperty are iterated like arrays. To avoid this behavior use `forIn`\nor `forOwn` for object iteration.',since:"0.1.0",examples:[`forEach([1, 2], function(value) {
  console.log(value);
});
// => Logs \`1\` then \`2\`.

forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).`],params:[{name:"collection",type:"Array|Object",description:"The collection to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"*",description:"Returns `collection`."}},{name:"forEachRight",category:"Collection",description:"This method is like `forEach` except that it iterates over elements of\n`collection` from right to left.",since:"2.0.0",examples:["forEachRight([1, 2], function(value) {\n  console.log(value);\n});\n// => Logs `2` then `1`."],params:[{name:"collection",type:"Array|Object",description:"The collection to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"*",description:"Returns `collection`."}},{name:"forIn",category:"Object",description:"Iterates over own and inherited enumerable string keyed properties of an\nobject and invokes `iteratee` for each property. The iteratee is invoked\nwith three arguments: *(value, key, object)*. Iteratee functions may exit\niteration early by explicitly returning `false`.",since:"0.3.0",examples:[`function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

forIn(new Foo, function(value, key) {
  console.log(key);
});
// => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).`],params:[{name:"object",type:"Object",description:"The object to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Object",description:"Returns `object`."}},{name:"forInRight",category:"Object",description:"This method is like `forIn` except that it iterates over properties of\n`object` in the opposite order.",since:"2.0.0",examples:[`function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

forInRight(new Foo, function(value, key) {
  console.log(key);
});
// => Logs 'c', 'b', then 'a' assuming \`forIn\` logs 'a', 'b', then 'c'.`],params:[{name:"object",type:"Object",description:"The object to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Object",description:"Returns `object`."}},{name:"forOwn",category:"Object",description:"Iterates over own enumerable string keyed properties of an object and\ninvokes `iteratee` for each property. The iteratee is invoked with three\narguments: *(value, key, object)*. Iteratee functions may exit iteration\nearly by explicitly returning `false`.",since:"0.3.0",examples:[`function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

forOwn(new Foo, function(value, key) {
  console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).`],params:[{name:"object",type:"Object",description:"The object to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Object",description:"Returns `object`."}},{name:"forOwnRight",category:"Object",description:"This method is like `forOwn` except that it iterates over properties of\n`object` in the opposite order.",since:"2.0.0",examples:[`function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

forOwnRight(new Foo, function(value, key) {
  console.log(key);
});
// => Logs 'b' then 'a' assuming \`forOwn\` logs 'a' then 'b'.`],params:[{name:"object",type:"Object",description:"The object to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Object",description:"Returns `object`."}},{name:"fromPairs",category:"Array",description:"The inverse of `toPairs`; this method returns an object composed\nfrom key-value `pairs`.",since:"4.0.0",examples:[`fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }`],params:[{name:"pairs",type:"Array",description:"The key-value pairs.",optional:!1}],returns:{type:"Object",description:"Returns the new object."}},{name:"functions",category:"Object",description:"Creates an array of function property names from own enumerable properties\nof `object`.",since:"0.1.0",examples:[`function Foo() {
  this.a = constant('a');
  this.b = constant('b');
}

Foo.prototype.c = constant('c');

functions(new Foo);
// => ['a', 'b']`],params:[{name:"object",type:"Object",description:"The object to inspect.",optional:!1}],returns:{type:"Array",description:"Returns the function names."}},{name:"functionsIn",category:"Object",description:"Creates an array of function property names from own and inherited\nenumerable properties of `object`.",since:"4.0.0",examples:[`function Foo() {
  this.a = constant('a');
  this.b = constant('b');
}

Foo.prototype.c = constant('c');

functionsIn(new Foo);
// => ['a', 'b', 'c']`],params:[{name:"object",type:"Object",description:"The object to inspect.",optional:!1}],returns:{type:"Array",description:"Returns the function names."}},{name:"get",category:"Object",description:"Gets the value at `path` of `object`. If the resolved value is\n`undefined`, the `defaultValue` is returned in its place.",since:"3.7.0",examples:[`var object = { 'a': [{ 'b': { 'c': 3 } }] };

get(object, 'a[0].b.c');
// => 3

get(object, ['a', '0', 'b', 'c']);
// => 3

get(object, 'a.b.c', 'default');
// => 'default'`],params:[{name:"object",type:"Object",description:"The object to query.",optional:!1},{name:"path",type:"Array|string",description:"The path of the property to get.",optional:!1},{name:"defaultValue",type:"*",description:"The value returned for `undefined` resolved values.",optional:!0}],returns:{type:"*",description:"Returns the resolved value."}},{name:"groupBy",category:"Collection",description:"Creates an object composed of keys generated from the results of running\neach element of `collection` thru `iteratee`. The order of grouped values\nis determined by the order they occur in `collection`. The corresponding\nvalue of each key is an array of elements responsible for generating the\nkey. The iteratee is invoked with one argument: *(value)*.",since:"0.1.0",examples:[`groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }

// The \`property\` iteratee shorthand.
groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }`],params:[{name:"collection",type:"Array|Object",description:"The collection to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The iteratee to transform keys.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Object",description:"Returns the composed aggregate object."}},{name:"gt",category:"Lang",description:"Checks if `value` is greater than `other`.",since:"3.9.0",examples:[`gt(3, 1);
// => true

gt(3, 3);
// => false

gt(1, 3);
// => false`],params:[{name:"value",type:"*",description:"The value to compare.",optional:!1},{name:"other",type:"*",description:"The other value to compare.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is greater than `other`,\n else `false`."}},{name:"gte",category:"Lang",description:"Checks if `value` is greater than or equal to `other`.",since:"3.9.0",examples:[`gte(3, 1);
// => true

gte(3, 3);
// => true

gte(1, 3);
// => false`],params:[{name:"value",type:"*",description:"The value to compare.",optional:!1},{name:"other",type:"*",description:"The other value to compare.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is greater than or equal to\n `other`, else `false`."}},{name:"has",category:"Object",description:"Checks if `path` is a direct property of `object`.",since:"0.1.0",examples:[`var object = { 'a': { 'b': 2 } };
var other = create({ 'a': create({ 'b': 2 }) });

has(object, 'a');
// => true

has(object, 'a.b');
// => true

has(object, ['a', 'b']);
// => true

has(other, 'a');
// => false`],params:[{name:"object",type:"Object",description:"The object to query.",optional:!1},{name:"path",type:"Array|string",description:"The path to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `path` exists, else `false`."}},{name:"hasIn",category:"Object",description:"Checks if `path` is a direct or inherited property of `object`.",since:"4.0.0",examples:[`var object = create({ 'a': create({ 'b': 2 }) });

hasIn(object, 'a');
// => true

hasIn(object, 'a.b');
// => true

hasIn(object, ['a', 'b']);
// => true

hasIn(object, 'b');
// => false`],params:[{name:"object",type:"Object",description:"The object to query.",optional:!1},{name:"path",type:"Array|string",description:"The path to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `path` exists, else `false`."}},{name:"head",category:"Array",description:"Gets the first element of `array`.",since:"0.1.0",examples:[`head([1, 2, 3]);
// => 1

head([]);
// => undefined`],params:[{name:"array",type:"Array",description:"The array to query.",optional:!1}],returns:{type:"*",description:"Returns the first element of `array`."}},{name:"identity",category:"Util",description:"This method returns the first argument it receives.",since:"0.1.0",examples:[`var object = { 'a': 1 };

console.log(identity(object) === object);
// => true`],params:[{name:"value",type:"*",description:"Any value.",optional:!1}],returns:{type:"*",description:"Returns `value`."}},{name:"imports",category:"Properties",description:"(Object): Used to import variables into the compiled template.",examples:[],params:[]},{name:"includes",category:"Collection",description:"Checks if `value` is in `collection`. If `collection` is a string, it's\nchecked for a substring of `value`, otherwise\n[`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\nis used for equality comparisons. If `fromIndex` is negative, it's used as\nthe offset from the end of `collection`.",since:"0.1.0",examples:[`includes([1, 2, 3], 1);
// => true

includes([1, 2, 3], 1, 2);
// => false

includes({ 'a': 1, 'b': 2 }, 1);
// => true

includes('abcd', 'bc');
// => true`],params:[{name:"collection",type:"Array|Object|string",description:"The collection to inspect.",optional:!1},{name:"value",type:"*",description:"The value to search for.",optional:!1},{name:"fromIndex=0",type:"number",description:"The index to search from.",optional:!0,defaultValue:"0"}],returns:{type:"boolean",description:"Returns `true` if `value` is found, else `false`."}},{name:"indexOf",category:"Array",description:"Gets the index at which the first occurrence of `value` is found in `array`\nusing [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\nfor equality comparisons. If `fromIndex` is negative, it's used as the\noffset from the end of `array`.",since:"0.1.0",examples:[`indexOf([1, 2, 1, 2], 2);
// => 1

// Search from the \`fromIndex\`.
indexOf([1, 2, 1, 2], 2, 2);
// => 3`],params:[{name:"array",type:"Array",description:"The array to inspect.",optional:!1},{name:"value",type:"*",description:"The value to search for.",optional:!1},{name:"fromIndex=0",type:"number",description:"The index to search from.",optional:!0,defaultValue:"0"}],returns:{type:"number",description:"Returns the index of the matched value, else `-1`."}},{name:"initial",category:"Array",description:"Gets all but the last element of `array`.",since:"0.1.0",examples:[`initial([1, 2, 3]);
// => [1, 2]`],params:[{name:"array",type:"Array",description:"The array to query.",optional:!1}],returns:{type:"Array",description:"Returns the slice of `array`."}},{name:"inRange",category:"Number",description:"Checks if `n` is between `start` and up to, but not including, `end`. If\n`end` is not specified, it's set to `start` with `start` then set to `0`.\nIf `start` is greater than `end` the params are swapped to support\nnegative ranges.",since:"3.3.0",examples:[`inRange(3, 2, 4);
// => true

inRange(4, 8);
// => true

inRange(4, 2);
// => false

inRange(2, 2);
// => false

inRange(1.2, 2);
// => true

inRange(5.2, 4);
// => false

inRange(-3, -2, -6);
// => true`],params:[{name:"number",type:"number",description:"The number to check.",optional:!1},{name:"start=0",type:"number",description:"The start of the range.",optional:!0,defaultValue:"0"},{name:"end",type:"number",description:"The end of the range.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `number` is in the range, else `false`."}},{name:"interpolate",category:"Properties",description:"(RegExp): Used to detect `data` property values to inject.",examples:[],params:[]},{name:"intersection",category:"Array",description:`Creates an array of unique values that are included in all given arrays
using [\`SameValueZero\`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
for equality comparisons. The order and references of result values are
determined by the first array.`,since:"0.1.0",examples:[`intersection([2, 1], [2, 3]);
// => [2]`],params:[{name:"arrays",type:"...Array",description:"The arrays to inspect.",optional:!0}],returns:{type:"Array",description:"Returns the new array of intersecting values."}},{name:"intersectionBy",category:"Array",description:"This method is like `intersection` except that it accepts `iteratee`\nwhich is invoked for each element of each `arrays` to generate the criterion\nby which they're compared. The order and references of result values are\ndetermined by the first array. The iteratee is invoked with one argument:<br>\n*(value)*.",since:"4.0.0",examples:[`intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [2.1]

// The \`property\` iteratee shorthand.
intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }]`],params:[{name:"arrays",type:"...Array",description:"The arrays to inspect.",optional:!0},{name:"iteratee=_.identity",type:"Function",description:"The iteratee invoked per element.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Array",description:"Returns the new array of intersecting values."}},{name:"intersectionWith",category:"Array",description:"This method is like `intersection` except that it accepts `comparator`\nwhich is invoked to compare elements of `arrays`. The order and references\nof result values are determined by the first array. The comparator is\ninvoked with two arguments: *(arrVal, othVal)*.",since:"4.0.0",examples:[`var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

intersectionWith(objects, others, isEqual);
// => [{ 'x': 1, 'y': 2 }]`],params:[{name:"arrays",type:"...Array",description:"The arrays to inspect.",optional:!0},{name:"comparator",type:"Function",description:"The comparator invoked per element.",optional:!0}],returns:{type:"Array",description:"Returns the new array of intersecting values."}},{name:"invert",category:"Object",description:"Creates an object composed of the inverted keys and values of `object`.\nIf `object` contains duplicate values, subsequent values overwrite\nproperty assignments of previous values.",since:"0.7.0",examples:[`var object = { 'a': 1, 'b': 2, 'c': 1 };

invert(object);
// => { '1': 'c', '2': 'b' }`],params:[{name:"object",type:"Object",description:"The object to invert.",optional:!1}],returns:{type:"Object",description:"Returns the new inverted object."}},{name:"invertBy",category:"Object",description:"This method is like `invert` except that the inverted object is generated\nfrom the results of running each element of `object` thru `iteratee`. The\ncorresponding inverted value of each inverted key is an array of keys\nresponsible for generating the inverted value. The iteratee is invoked\nwith one argument: *(value)*.",since:"4.1.0",examples:[`var object = { 'a': 1, 'b': 2, 'c': 1 };

invertBy(object);
// => { '1': ['a', 'c'], '2': ['b'] }

invertBy(object, function(value) {
  return 'group' + value;
});
// => { 'group1': ['a', 'c'], 'group2': ['b'] }`],params:[{name:"object",type:"Object",description:"The object to invert.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The iteratee invoked per element.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Object",description:"Returns the new inverted object."}},{name:"invoke",category:"Object",description:"Invokes the method at `path` of `object`.",since:"4.0.0",examples:[`var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };

invoke(object, 'a[0].b.c.slice', 1, 3);
// => [2, 3]`],params:[{name:"object",type:"Object",description:"The object to query.",optional:!1},{name:"path",type:"Array|string",description:"The path of the method to invoke.",optional:!1},{name:"args",type:"...*",description:"The arguments to invoke the method with.",optional:!0}],returns:{type:"*",description:"Returns the result of the invoked method."}},{name:"invokeMap",category:"Collection",description:"Invokes the method at `path` of each element in `collection`, returning\nan array of the results of each invoked method. Any additional arguments\nare provided to each invoked method. If `path` is a function, it's invoked\nfor, and `this` bound to, each element in `collection`.",since:"4.0.0",examples:[`invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
// => [[1, 5, 7], [1, 2, 3]]

invokeMap([123, 456], String.prototype.split, '');
// => [['1', '2', '3'], ['4', '5', '6']]`],params:[{name:"collection",type:"Array|Object",description:"The collection to iterate over.",optional:!1},{name:"path",type:"Array|Function|string",description:"The path of the method to invoke or the function invoked per iteration.",optional:!1},{name:"args",type:"...*",description:"The arguments to invoke each method with.",optional:!0}],returns:{type:"Array",description:"Returns the array of results."}},{name:"isArguments",category:"Lang",description:"Checks if `value` is likely an `arguments` object.",since:"0.1.0",examples:[`isArguments(function() { return arguments; }());
// => true

isArguments([1, 2, 3]);
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is an `arguments` object,\n else `false`."}},{name:"isArray",category:"Lang",description:"Checks if `value` is classified as an `Array` object.",since:"0.1.0",examples:[`isArray([1, 2, 3]);
// => true

isArray(document.body.children);
// => false

isArray('abc');
// => false

isArray(noop);
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is an array, else `false`."}},{name:"isArrayBuffer",category:"Lang",description:"Checks if `value` is classified as an `ArrayBuffer` object.",since:"4.3.0",examples:[`isArrayBuffer(new ArrayBuffer(2));
// => true

isArrayBuffer(new Array(2));
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is an array buffer, else `false`."}},{name:"isArrayLike",category:"Lang",description:"Checks if `value` is array-like. A value is considered array-like if it's\nnot a function and has a `value.length` that's an integer greater than or\nequal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.",since:"4.0.0",examples:[`isArrayLike([1, 2, 3]);
// => true

isArrayLike(document.body.children);
// => true

isArrayLike('abc');
// => true

isArrayLike(noop);
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is array-like, else `false`."}},{name:"isArrayLikeObject",category:"Lang",description:"This method is like `isArrayLike` except that it also checks if `value`\nis an object.",since:"4.0.0",examples:[`isArrayLikeObject([1, 2, 3]);
// => true

isArrayLikeObject(document.body.children);
// => true

isArrayLikeObject('abc');
// => false

isArrayLikeObject(noop);
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is an array-like object,\n else `false`."}},{name:"isBoolean",category:"Lang",description:"Checks if `value` is classified as a boolean primitive or object.",since:"0.1.0",examples:[`isBoolean(false);
// => true

isBoolean(null);
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is a boolean, else `false`."}},{name:"isBuffer",category:"Lang",description:"Checks if `value` is a buffer.",since:"4.3.0",examples:[`isBuffer(new Buffer(2));
// => true

isBuffer(new Uint8Array(2));
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is a buffer, else `false`."}},{name:"isDate",category:"Lang",description:"Checks if `value` is classified as a `Date` object.",since:"0.1.0",examples:[`isDate(new Date);
// => true

isDate('Mon April 23 2012');
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is a date object, else `false`."}},{name:"isElement",category:"Lang",description:"Checks if `value` is likely a DOM element.",since:"0.1.0",examples:[`isElement(document.body);
// => true

isElement('<body>');
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is a DOM element, else `false`."}},{name:"isEmpty",category:"Lang",description:"Checks if `value` is an empty object, collection, map, or set.\n<br>\n<br>\nObjects are considered empty if they have no own enumerable string keyed\nproperties.\n<br>\n<br>\nArray-like values such as `arguments` objects, arrays, buffers, strings, or\njQuery-like collections are considered empty if they have a `length` of `0`.\nSimilarly, maps and sets are considered empty if they have a `size` of `0`.",since:"0.1.0",examples:[`isEmpty(null);
// => true

isEmpty(true);
// => true

isEmpty(1);
// => true

isEmpty([1, 2, 3]);
// => false

isEmpty({ 'a': 1 });
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is empty, else `false`."}},{name:"isEqual",category:"Lang",description:`Performs a deep comparison between two values to determine if they are
equivalent.
<br>
<br>
**Note:** This method supports comparing arrays, array buffers, booleans,
date objects, error objects, maps, numbers, \`Object\` objects, regexes,
sets, strings, symbols, and typed arrays. \`Object\` objects are compared
by their own, not inherited, enumerable properties. Functions and DOM
nodes are compared by strict equality, i.e. \`===\`.`,since:"0.1.0",examples:[`var object = { 'a': 1 };
var other = { 'a': 1 };

isEqual(object, other);
// => true

object === other;
// => false`],params:[{name:"value",type:"*",description:"The value to compare.",optional:!1},{name:"other",type:"*",description:"The other value to compare.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if the values are equivalent, else `false`."}},{name:"isEqualWith",category:"Lang",description:"This method is like `isEqual` except that it accepts `customizer` which\nis invoked to compare values. If `customizer` returns `undefined`, comparisons\nare handled by the method instead. The `customizer` is invoked with up to\nsix arguments: *(objValue, othValue [, index|key, object, other, stack])*.",since:"4.0.0",examples:[`function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}

function customizer(objValue, othValue) {
  if (isGreeting(objValue) && isGreeting(othValue)) {
    return true;
  }
}

var array = ['hello', 'goodbye'];
var other = ['hi', 'goodbye'];

isEqualWith(array, other, customizer);
// => true`],params:[{name:"value",type:"*",description:"The value to compare.",optional:!1},{name:"other",type:"*",description:"The other value to compare.",optional:!1},{name:"customizer",type:"Function",description:"The function to customize comparisons.",optional:!0}],returns:{type:"boolean",description:"Returns `true` if the values are equivalent, else `false`."}},{name:"isError",category:"Lang",description:"Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,\n`SyntaxError`, `TypeError`, or `URIError` object.",since:"3.0.0",examples:[`isError(new Error);
// => true

isError(Error);
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is an error object, else `false`."}},{name:"isFinite",category:"Lang",description:"Checks if `value` is a finite primitive number.\n<br>\n<br>\n**Note:** This method is based on\n[`Number.isFinite`](https://mdn.io/Number/isFinite).",since:"0.1.0",examples:[`isFinite(3);
// => true

isFinite(Number.MIN_VALUE);
// => true

isFinite(Infinity);
// => false

isFinite('3');
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is a finite number, else `false`."}},{name:"isFunction",category:"Lang",description:"Checks if `value` is classified as a `Function` object.",since:"0.1.0",examples:[`isFunction(_);
// => true

isFunction(/abc/);
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is a function, else `false`."}},{name:"isInteger",category:"Lang",description:"Checks if `value` is an integer.\n<br>\n<br>\n**Note:** This method is based on\n[`Number.isInteger`](https://mdn.io/Number/isInteger).",since:"4.0.0",examples:[`isInteger(3);
// => true

isInteger(Number.MIN_VALUE);
// => false

isInteger(Infinity);
// => false

isInteger('3');
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is an integer, else `false`."}},{name:"isLength",category:"Lang",description:"Checks if `value` is a valid array-like length.\n<br>\n<br>\n**Note:** This method is loosely based on\n[`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).",since:"4.0.0",examples:[`isLength(3);
// => true

isLength(Number.MIN_VALUE);
// => false

isLength(Infinity);
// => false

isLength('3');
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is a valid length, else `false`."}},{name:"isMap",category:"Lang",description:"Checks if `value` is classified as a `Map` object.",since:"4.3.0",examples:[`isMap(new Map);
// => true

isMap(new WeakMap);
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is a map, else `false`."}},{name:"isMatch",category:"Lang",description:"Performs a partial deep comparison between `object` and `source` to\ndetermine if `object` contains equivalent property values.\n<br>\n<br>\n**Note:** This method is equivalent to `matches` when `source` is\npartially applied.\n<br>\n<br>\nPartial comparisons will match empty array and empty object `source`\nvalues against any array or object value, respectively. See `isEqual`\nfor a list of supported value comparisons.",since:"3.0.0",examples:[`var object = { 'a': 1, 'b': 2 };

isMatch(object, { 'b': 2 });
// => true

isMatch(object, { 'b': 1 });
// => false`],params:[{name:"object",type:"Object",description:"The object to inspect.",optional:!1},{name:"source",type:"Object",description:"The object of property values to match.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `object` is a match, else `false`."}},{name:"isMatchWith",category:"Lang",description:"This method is like `isMatch` except that it accepts `customizer` which\nis invoked to compare values. If `customizer` returns `undefined`, comparisons\nare handled by the method instead. The `customizer` is invoked with five\narguments: *(objValue, srcValue, index|key, object, source)*.",since:"4.0.0",examples:[`function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}

function customizer(objValue, srcValue) {
  if (isGreeting(objValue) && isGreeting(srcValue)) {
    return true;
  }
}

var object = { 'greeting': 'hello' };
var source = { 'greeting': 'hi' };

isMatchWith(object, source, customizer);
// => true`],params:[{name:"object",type:"Object",description:"The object to inspect.",optional:!1},{name:"source",type:"Object",description:"The object of property values to match.",optional:!1},{name:"customizer",type:"Function",description:"The function to customize comparisons.",optional:!0}],returns:{type:"boolean",description:"Returns `true` if `object` is a match, else `false`."}},{name:"isNaN",category:"Lang",description:"Checks if `value` is `NaN`.\n<br>\n<br>\n**Note:** This method is based on\n[`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as\nglobal [`isNaN`](https://mdn.io/isNaN) which returns `true` for\n`undefined` and other non-number values.",since:"0.1.0",examples:[`isNaN(NaN);
// => true

isNaN(new Number(NaN));
// => true

isNaN(undefined);
// => true

isNaN(undefined);
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is `NaN`, else `false`."}},{name:"isNative",category:"Lang",description:`Checks if \`value\` is a pristine native function.
<br>
<br>
**Note:** This method can't reliably detect native functions in the presence
of the core-js package because core-js circumvents this kind of detection.
Despite multiple requests, the core-js maintainer has made it clear: any
attempt to fix the detection will be obstructed. As a result, we're left
with little choice but to throw an error. Unfortunately, this also affects
packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
which rely on core-js.`,since:"3.0.0",examples:[`isNative(Array.prototype.push);
// => true

isNative(_);
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is a native function,\n else `false`."}},{name:"isNil",category:"Lang",description:"Checks if `value` is `null` or `undefined`.",since:"4.0.0",examples:[`isNil(null);
// => true

isNil(void 0);
// => true

isNil(NaN);
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is nullish, else `false`."}},{name:"isNull",category:"Lang",description:"Checks if `value` is `null`.",since:"0.1.0",examples:[`isNull(null);
// => true

isNull(void 0);
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is `null`, else `false`."}},{name:"isNumber",category:"Lang",description:"Checks if `value` is classified as a `Number` primitive or object.\n<br>\n<br>\n**Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are\nclassified as numbers, use the `isFinite` method.",since:"0.1.0",examples:[`isNumber(3);
// => true

isNumber(Number.MIN_VALUE);
// => true

isNumber(Infinity);
// => true

isNumber('3');
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is a number, else `false`."}},{name:"isObject",category:"Lang",description:"Checks if `value` is the\n[language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\nof `Object`. *(e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)*",since:"0.1.0",examples:[`isObject({});
// => true

isObject([1, 2, 3]);
// => true

isObject(noop);
// => true

isObject(null);
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is an object, else `false`."}},{name:"isObjectLike",category:"Lang",description:'Checks if `value` is object-like. A value is object-like if it\'s not `null`\nand has a `typeof` result of "object".',since:"4.0.0",examples:[`isObjectLike({});
// => true

isObjectLike([1, 2, 3]);
// => true

isObjectLike(noop);
// => false

isObjectLike(null);
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is object-like, else `false`."}},{name:"isPlainObject",category:"Lang",description:"Checks if `value` is a plain object, that is, an object created by the\n`Object` constructor or one with a `[[Prototype]]` of `null`.",since:"0.8.0",examples:[`function Foo() {
  this.a = 1;
}

isPlainObject(new Foo);
// => false

isPlainObject([1, 2, 3]);
// => false

isPlainObject({ 'x': 0, 'y': 0 });
// => true

isPlainObject(Object.create(null));
// => true`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is a plain object, else `false`."}},{name:"isRegExp",category:"Lang",description:"Checks if `value` is classified as a `RegExp` object.",since:"0.1.0",examples:[`isRegExp(/abc/);
// => true

isRegExp('/abc/');
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is a regexp, else `false`."}},{name:"isSafeInteger",category:"Lang",description:`Checks if \`value\` is a safe integer. An integer is safe if it's an IEEE-754
double precision number which isn't the result of a rounded unsafe integer.
<br>
<br>
**Note:** This method is based on
[\`Number.isSafeInteger\`](https://mdn.io/Number/isSafeInteger).`,since:"4.0.0",examples:[`isSafeInteger(3);
// => true

isSafeInteger(Number.MIN_VALUE);
// => false

isSafeInteger(Infinity);
// => false

isSafeInteger('3');
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is a safe integer, else `false`."}},{name:"isSet",category:"Lang",description:"Checks if `value` is classified as a `Set` object.",since:"4.3.0",examples:[`isSet(new Set);
// => true

isSet(new WeakSet);
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is a set, else `false`."}},{name:"isString",category:"Lang",description:"Checks if `value` is classified as a `String` primitive or object.",since:"0.1.0",examples:[`isString('abc');
// => true

isString(1);
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is a string, else `false`."}},{name:"isSymbol",category:"Lang",description:"Checks if `value` is classified as a `Symbol` primitive or object.",since:"4.0.0",examples:[`isSymbol(Symbol.iterator);
// => true

isSymbol('abc');
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is a symbol, else `false`."}},{name:"isTypedArray",category:"Lang",description:"Checks if `value` is classified as a typed array.",since:"3.0.0",examples:[`isTypedArray(new Uint8Array);
// => true

isTypedArray([]);
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is a typed array, else `false`."}},{name:"isUndefined",category:"Lang",description:"Checks if `value` is `undefined`.",since:"0.1.0",examples:[`isUndefined(void 0);
// => true

isUndefined(null);
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is `undefined`, else `false`."}},{name:"isWeakMap",category:"Lang",description:"Checks if `value` is classified as a `WeakMap` object.",since:"4.3.0",examples:[`isWeakMap(new WeakMap);
// => true

isWeakMap(new Map);
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is a weak map, else `false`."}},{name:"isWeakSet",category:"Lang",description:"Checks if `value` is classified as a `WeakSet` object.",since:"4.3.0",examples:[`isWeakSet(new WeakSet);
// => true

isWeakSet(new Set);
// => false`],params:[{name:"value",type:"*",description:"The value to check.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is a weak set, else `false`."}},{name:"iteratee",category:"Util",description:"Creates a function that invokes `func` with the arguments of the created\nfunction. If `func` is a property name, the created function returns the\nproperty value for a given element. If `func` is an array or object, the\ncreated function returns `true` for elements that contain the equivalent\nsource properties, otherwise it returns `false`.",since:"4.0.0",examples:[`var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

// The \`matches\` iteratee shorthand.
filter(users, iteratee({ 'user': 'barney', 'active': true }));
// => [{ 'user': 'barney', 'age': 36, 'active': true }]

// The \`matchesProperty\` iteratee shorthand.
filter(users, iteratee(['user', 'fred']));
// => [{ 'user': 'fred', 'age': 40 }]

// The \`property\` iteratee shorthand.
map(users, iteratee('user'));
// => ['barney', 'fred']

// Create custom iteratee shorthands.
iteratee = wrap(iteratee, function(iteratee, func) {
  return !isRegExp(func) ? iteratee(func) : function(string) {
    return func.test(string);
  };
});

filter(['abc', 'def'], /ef/);
// => ['def']`],params:[{name:"func=_.identity",type:"*",description:"The value to convert to a callback.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Function",description:"Returns the callback."}},{name:"join",category:"Array",description:"Converts all elements in `array` into a string separated by `separator`.",since:"4.0.0",examples:[`join(['a', 'b', 'c'], '~');
// => 'a~b~c'`],params:[{name:"array",type:"Array",description:"The array to convert.",optional:!1},{name:"separator=','",type:"string",description:"The element separator.",optional:!0,defaultValue:"','"}],returns:{type:"string",description:"Returns the joined string."}},{name:"kebabCase",category:"String",description:"Converts `string` to\n[kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).",since:"3.0.0",examples:[`kebabCase('Foo Bar');
// => 'foo-bar'

kebabCase('fooBar');
// => 'foo-bar'

kebabCase('__FOO_BAR__');
// => 'foo-bar'`],params:[{name:"string=''",type:"string",description:"The string to convert.",optional:!0,defaultValue:"''"}],returns:{type:"string",description:"Returns the kebab cased string."}},{name:"keyBy",category:"Collection",description:"Creates an object composed of keys generated from the results of running\neach element of `collection` thru `iteratee`. The corresponding value of\neach key is the last element responsible for generating the key. The\niteratee is invoked with one argument: *(value)*.",since:"4.0.0",examples:[`var array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];

keyBy(array, function(o) {
  return String.fromCharCode(o.code);
});
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }

keyBy(array, 'dir');
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }`],params:[{name:"collection",type:"Array|Object",description:"The collection to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The iteratee to transform keys.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Object",description:"Returns the composed aggregate object."}},{name:"keys",category:"Object",description:`Creates an array of the own enumerable property names of \`object\`.
<br>
<br>
**Note:** Non-object values are coerced to objects. See the
[ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
for more details.`,since:"0.1.0",examples:[`function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

keys(new Foo);
// => ['a', 'b'] (iteration order is not guaranteed)

keys('hi');
// => ['0', '1']`],params:[{name:"object",type:"Object",description:"The object to query.",optional:!1}],returns:{type:"Array",description:"Returns the array of property names."}},{name:"keysIn",category:"Object",description:`Creates an array of the own and inherited enumerable property names of \`object\`.
<br>
<br>
**Note:** Non-object values are coerced to objects.`,since:"3.0.0",examples:[`function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

keysIn(new Foo);
// => ['a', 'b', 'c'] (iteration order is not guaranteed)`],params:[{name:"object",type:"Object",description:"The object to query.",optional:!1}],returns:{type:"Array",description:"Returns the array of property names."}},{name:"last",category:"Array",description:"Gets the last element of `array`.",since:"0.1.0",examples:[`last([1, 2, 3]);
// => 3`],params:[{name:"array",type:"Array",description:"The array to query.",optional:!1}],returns:{type:"*",description:"Returns the last element of `array`."}},{name:"lastIndexOf",category:"Array",description:"This method is like `indexOf` except that it iterates over elements of\n`array` from right to left.",since:"0.1.0",examples:[`lastIndexOf([1, 2, 1, 2], 2);
// => 3

// Search from the \`fromIndex\`.
lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1`],params:[{name:"array",type:"Array",description:"The array to inspect.",optional:!1},{name:"value",type:"*",description:"The value to search for.",optional:!1},{name:"fromIndex=array.length-1",type:"number",description:"The index to search from.",optional:!0,defaultValue:"array.length-1"}],returns:{type:"number",description:"Returns the index of the matched value, else `-1`."}},{name:"lowerCase",category:"String",description:"Converts `string`, as space separated words, to lower case.",since:"4.0.0",examples:[`lowerCase('--Foo-Bar--');
// => 'foo bar'

lowerCase('fooBar');
// => 'foo bar'

lowerCase('__FOO_BAR__');
// => 'foo bar'`],params:[{name:"string=''",type:"string",description:"The string to convert.",optional:!0,defaultValue:"''"}],returns:{type:"string",description:"Returns the lower cased string."}},{name:"lowerFirst",category:"String",description:"Converts the first character of `string` to lower case.",since:"4.0.0",examples:[`lowerFirst('Fred');
// => 'fred'

lowerFirst('FRED');
// => 'fRED'`],params:[{name:"string=''",type:"string",description:"The string to convert.",optional:!0,defaultValue:"''"}],returns:{type:"string",description:"Returns the converted string."}},{name:"lt",category:"Lang",description:"Checks if `value` is less than `other`.",since:"3.9.0",examples:[`lt(1, 3);
// => true

lt(3, 3);
// => false

lt(3, 1);
// => false`],params:[{name:"value",type:"*",description:"The value to compare.",optional:!1},{name:"other",type:"*",description:"The other value to compare.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is less than `other`,\n else `false`."}},{name:"lte",category:"Lang",description:"Checks if `value` is less than or equal to `other`.",since:"3.9.0",examples:[`lte(1, 3);
// => true

lte(3, 3);
// => true

lte(3, 1);
// => false`],params:[{name:"value",type:"*",description:"The value to compare.",optional:!1},{name:"other",type:"*",description:"The other value to compare.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if `value` is less than or equal to\n `other`, else `false`."}},{name:"map",category:"Collection",description:"Creates an array of values by running each element in `collection` thru\n`iteratee`. The iteratee is invoked with three arguments:<br>\n*(value, index|key, collection)*.\n<br>\n<br>\nMany lodash methods are guarded to work as iteratees for methods like\n`every`, `filter`, `map`, `mapValues`, `reject`, and `some`.\n<br>\n<br>\nThe guarded methods are:<br>\n`ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,\n`fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,\n`sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,\n`template`, `trim`, `trimEnd`, `trimStart`, and `words`",since:"0.1.0",examples:[`function square(n) {
  return n * n;
}

map([4, 8], square);
// => [16, 64]

map({ 'a': 4, 'b': 8 }, square);
// => [16, 64] (iteration order is not guaranteed)

var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

// The \`property\` iteratee shorthand.
map(users, 'user');
// => ['barney', 'fred']`],params:[{name:"collection",type:"Array|Object",description:"The collection to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Array",description:"Returns the new mapped array."}},{name:"mapKeys",category:"Object",description:"The opposite of `mapValues`; this method creates an object with the\nsame values as `object` and keys generated by running each own enumerable\nstring keyed property of `object` thru `iteratee`. The iteratee is invoked\nwith three arguments: *(value, key, object)*.",since:"3.8.0",examples:[`mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
  return key + value;
});
// => { 'a1': 1, 'b2': 2 }`],params:[{name:"object",type:"Object",description:"The object to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Object",description:"Returns the new mapped object."}},{name:"mapValues",category:"Object",description:"Creates an object with the same keys as `object` and values generated\nby running each own enumerable string keyed property of `object` thru\n`iteratee`. The iteratee is invoked with three arguments:<br>\n*(value, key, object)*.",since:"2.4.0",examples:[`var users = {
  'fred':    { 'user': 'fred',    'age': 40 },
  'pebbles': { 'user': 'pebbles', 'age': 1 }
};

mapValues(users, function(o) { return o.age; });
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)

// The \`property\` iteratee shorthand.
mapValues(users, 'age');
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)`],params:[{name:"object",type:"Object",description:"The object to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Object",description:"Returns the new mapped object."}},{name:"matches",category:"Util",description:"Creates a function that performs a partial deep comparison between a given\nobject and `source`, returning `true` if the given object has equivalent\nproperty values, else `false`.\n<br>\n<br>\n**Note:** The created function is equivalent to `isMatch` with `source`\npartially applied.\n<br>\n<br>\nPartial comparisons will match empty array and empty object `source`\nvalues against any array or object value, respectively. See `isEqual`\nfor a list of supported value comparisons.\n<br>\n<br>\n**Note:** Multiple values can be checked by combining several matchers\nusing `overSome`",since:"3.0.0",examples:[`var objects = [
  { 'a': 1, 'b': 2, 'c': 3 },
  { 'a': 4, 'b': 5, 'c': 6 }
];

filter(objects, matches({ 'a': 4, 'c': 6 }));
// => [{ 'a': 4, 'b': 5, 'c': 6 }]

// Checking for several possible values
filter(objects, overSome([matches({ 'a': 1 }), matches({ 'a': 4 })]));
// => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]`],params:[{name:"source",type:"Object",description:"The object of property values to match.",optional:!1}],returns:{type:"Function",description:"Returns the new spec function."}},{name:"matchesProperty",category:"Util",description:"Creates a function that performs a partial deep comparison between the\nvalue at `path` of a given object to `srcValue`, returning `true` if the\nobject value is equivalent, else `false`.\n<br>\n<br>\n**Note:** Partial comparisons will match empty array and empty object\n`srcValue` values against any array or object value, respectively. See\n`isEqual` for a list of supported value comparisons.\n<br>\n<br>\n**Note:** Multiple values can be checked by combining several matchers\nusing `overSome`",since:"3.2.0",examples:[`var objects = [
  { 'a': 1, 'b': 2, 'c': 3 },
  { 'a': 4, 'b': 5, 'c': 6 }
];

find(objects, matchesProperty('a', 4));
// => { 'a': 4, 'b': 5, 'c': 6 }

// Checking for several possible values
filter(objects, overSome([matchesProperty('a', 1), matchesProperty('a', 4)]));
// => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]`],params:[{name:"path",type:"Array|string",description:"The path of the property to get.",optional:!1},{name:"srcValue",type:"*",description:"The value to match.",optional:!1}],returns:{type:"Function",description:"Returns the new spec function."}},{name:"max",category:"Math",description:"Computes the maximum value of `array`. If `array` is empty or falsey,\n`undefined` is returned.",since:"0.1.0",examples:[`max([4, 2, 8, 6]);
// => 8

max([]);
// => undefined`],params:[{name:"array",type:"Array",description:"The array to iterate over.",optional:!1}],returns:{type:"*",description:"Returns the maximum value."}},{name:"maxBy",category:"Math",description:"This method is like `max` except that it accepts `iteratee` which is\ninvoked for each element in `array` to generate the criterion by which\nthe value is ranked. The iteratee is invoked with one argument: *(value)*.",since:"4.0.0",examples:[`var objects = [{ 'n': 1 }, { 'n': 2 }];

maxBy(objects, function(o) { return o.n; });
// => { 'n': 2 }

// The \`property\` iteratee shorthand.
maxBy(objects, 'n');
// => { 'n': 2 }`],params:[{name:"array",type:"Array",description:"The array to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The iteratee invoked per element.",optional:!0,defaultValue:"_.identity"}],returns:{type:"*",description:"Returns the maximum value."}},{name:"mean",category:"Math",description:"Computes the mean of the values in `array`.",since:"4.0.0",examples:[`mean([4, 2, 8, 6]);
// => 5`],params:[{name:"array",type:"Array",description:"The array to iterate over.",optional:!1}],returns:{type:"number",description:"Returns the mean."}},{name:"meanBy",category:"Math",description:"This method is like `mean` except that it accepts `iteratee` which is\ninvoked for each element in `array` to generate the value to be averaged.\nThe iteratee is invoked with one argument: *(value)*.",since:"4.7.0",examples:[`var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

meanBy(objects, function(o) { return o.n; });
// => 5

// The \`property\` iteratee shorthand.
meanBy(objects, 'n');
// => 5`],params:[{name:"array",type:"Array",description:"The array to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The iteratee invoked per element.",optional:!0,defaultValue:"_.identity"}],returns:{type:"number",description:"Returns the mean."}},{name:"memoize",category:"Function",description:"Creates a function that memoizes the result of `func`. If `resolver` is\nprovided, it determines the cache key for storing the result based on the\narguments provided to the memoized function. By default, the first argument\nprovided to the memoized function is used as the map cache key. The `func`\nis invoked with the `this` binding of the memoized function.\n<br>\n<br>\n**Note:** The cache is exposed as the `cache` property on the memoized\nfunction. Its creation may be customized by replacing the `memoize.Cache`\nconstructor with one whose instances implement the\n[`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)\nmethod interface of `clear`, `delete`, `get`, `has`, and `set`.",since:"0.1.0",examples:[`var object = { 'a': 1, 'b': 2 };
var other = { 'c': 3, 'd': 4 };

var values = memoize(values);
values(object);
// => [1, 2]

values(other);
// => [3, 4]

object.a = 2;
values(object);
// => [1, 2]

// Modify the result cache.
values.cache.set(object, ['a', 'b']);
values(object);
// => ['a', 'b']

// Replace \`memoize.Cache\`.
memoize.Cache = WeakMap;`],params:[{name:"func",type:"Function",description:"The function to have its output memoized.",optional:!1},{name:"resolver",type:"Function",description:"The function to resolve the cache key.",optional:!0}],returns:{type:"Function",description:"Returns the new memoized function."}},{name:"merge",category:"Object",description:`This method is like \`assign\` except that it recursively merges own and
inherited enumerable string keyed properties of source objects into the
destination object. Source properties that resolve to \`undefined\` are
skipped if a destination value exists. Array and plain object properties
are merged recursively. Other objects and value types are overridden by
assignment. Source objects are applied from left to right. Subsequent
sources overwrite property assignments of previous sources.
<br>
<br>
**Note:** This method mutates \`object\`.`,since:"0.5.0",examples:[`var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};

var other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};

merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }`],params:[{name:"object",type:"Object",description:"The destination object.",optional:!1},{name:"sources",type:"...Object",description:"The source objects.",optional:!0}],returns:{type:"Object",description:"Returns `object`."}},{name:"mergeWith",category:"Object",description:"This method is like `merge` except that it accepts `customizer` which\nis invoked to produce the merged values of the destination and source\nproperties. If `customizer` returns `undefined`, merging is handled by the\nmethod instead. The `customizer` is invoked with six arguments:<br>\n*(objValue, srcValue, key, object, source, stack)*.\n<br>\n<br>\n**Note:** This method mutates `object`.",since:"4.0.0",examples:[`function customizer(objValue, srcValue) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

var object = { 'a': [1], 'b': [2] };
var other = { 'a': [3], 'b': [4] };

mergeWith(object, other, customizer);
// => { 'a': [1, 3], 'b': [2, 4] }`],params:[{name:"object",type:"Object",description:"The destination object.",optional:!1},{name:"sources",type:"...Object",description:"The source objects.",optional:!1},{name:"customizer",type:"Function",description:"The function to customize assigned values.",optional:!1}],returns:{type:"Object",description:"Returns `object`."}},{name:"method",category:"Util",description:"Creates a function that invokes the method at `path` of a given object.\nAny additional arguments are provided to the invoked method.",since:"3.7.0",examples:[`var objects = [
  { 'a': { 'b': constant(2) } },
  { 'a': { 'b': constant(1) } }
];

map(objects, method('a.b'));
// => [2, 1]

map(objects, method(['a', 'b']));
// => [2, 1]`],params:[{name:"path",type:"Array|string",description:"The path of the method to invoke.",optional:!1},{name:"args",type:"...*",description:"The arguments to invoke the method with.",optional:!0}],returns:{type:"Function",description:"Returns the new invoker function."}},{name:"methodOf",category:"Util",description:"The opposite of `method`; this method creates a function that invokes\nthe method at a given path of `object`. Any additional arguments are\nprovided to the invoked method.",since:"3.7.0",examples:[`var array = times(3, constant),
    object = { 'a': array, 'b': array, 'c': array };

map(['a[2]', 'c[0]'], methodOf(object));
// => [2, 0]

map([['a', '2'], ['c', '0']], methodOf(object));
// => [2, 0]`],params:[{name:"object",type:"Object",description:"The object to query.",optional:!1},{name:"args",type:"...*",description:"The arguments to invoke the method with.",optional:!0}],returns:{type:"Function",description:"Returns the new invoker function."}},{name:"min",category:"Math",description:"Computes the minimum value of `array`. If `array` is empty or falsey,\n`undefined` is returned.",since:"0.1.0",examples:[`min([4, 2, 8, 6]);
// => 2

min([]);
// => undefined`],params:[{name:"array",type:"Array",description:"The array to iterate over.",optional:!1}],returns:{type:"*",description:"Returns the minimum value."}},{name:"minBy",category:"Math",description:"This method is like `min` except that it accepts `iteratee` which is\ninvoked for each element in `array` to generate the criterion by which\nthe value is ranked. The iteratee is invoked with one argument: *(value)*.",since:"4.0.0",examples:[`var objects = [{ 'n': 1 }, { 'n': 2 }];

minBy(objects, function(o) { return o.n; });
// => { 'n': 1 }

// The \`property\` iteratee shorthand.
minBy(objects, 'n');
// => { 'n': 1 }`],params:[{name:"array",type:"Array",description:"The array to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The iteratee invoked per element.",optional:!0,defaultValue:"_.identity"}],returns:{type:"*",description:"Returns the minimum value."}},{name:"mixin",category:"Util",description:"Adds all own enumerable string keyed function properties of a source\nobject to the destination object. If `object` is a function, then methods\nare added to its prototype as well.\n<br>\n<br>\n**Note:** Use `runInContext` to create a pristine `lodash` function to\navoid conflicts caused by modifying the original.",since:"0.1.0",examples:[`function vowels(string) {
  return filter(string, function(v) {
    return /[aeiou]/i.test(v);
  });
}

mixin({ 'vowels': vowels });
vowels('fred');
// => ['e']

_('fred').vowels().value();
// => ['e']

mixin({ 'vowels': vowels }, { 'chain': false });
_('fred').vowels();
// => ['e']`],params:[{name:"object=lodash",type:"Function|Object",description:"The destination object.",optional:!0,defaultValue:"lodash"},{name:"source",type:"Object",description:"The object of functions to add.",optional:!1},{name:"options={}",type:"Object",description:"The options object.",optional:!0,defaultValue:"{}"},{name:"options.chain=true",type:"boolean",description:"Specify whether mixins are chainable.",optional:!0,defaultValue:"true"}],returns:{type:"*",description:"Returns `object`."}},{name:"multiply",category:"Math",description:"Multiply two numbers.",since:"4.7.0",examples:[`multiply(6, 4);
// => 24`],params:[{name:"multiplier",type:"number",description:"The first number in a multiplication.",optional:!1},{name:"multiplicand",type:"number",description:"The second number in a multiplication.",optional:!1}],returns:{type:"number",description:"Returns the product."}},{name:"negate",category:"Function",description:"Creates a function that negates the result of the predicate `func`. The\n`func` predicate is invoked with the `this` binding and arguments of the\ncreated function.",since:"3.0.0",examples:[`function isEven(n) {
  return n % 2 == 0;
}

filter([1, 2, 3, 4, 5, 6], negate(isEven));
// => [1, 3, 5]`],params:[{name:"predicate",type:"Function",description:"The predicate to negate.",optional:!1}],returns:{type:"Function",description:"Returns the new negated function."}},{name:"noConflict",category:"Util",description:"Reverts the `_` variable to its previous value and returns a reference to\nthe `lodash` function.",since:"0.1.0",examples:["var lodash = noConflict();"],params:[],returns:{type:"Function",description:"Returns the `lodash` function."}},{name:"noop",category:"Util",description:"This method returns `undefined`.",since:"2.3.0",examples:[`times(2, noop);
// => [undefined, undefined]`],params:[]},{name:"now",category:"Date",description:"Gets the timestamp of the number of milliseconds that have elapsed since\nthe Unix epoch *(1 January `1970 00`:00:00 UTC)*.",since:"2.4.0",examples:[`defer(function(stamp) {
  console.log(now() - stamp);
}, now());
// => Logs the number of milliseconds it took for the deferred invocation.`],params:[],returns:{type:"number",description:"Returns the timestamp."}},{name:"nth",category:"Array",description:"Gets the element at index `n` of `array`. If `n` is negative, the nth\nelement from the end is returned.",since:"4.11.0",examples:[`var array = ['a', 'b', 'c', 'd'];

nth(array, 1);
// => 'b'

nth(array, -2);
// => 'c';`],params:[{name:"array",type:"Array",description:"The array to query.",optional:!1},{name:"n=0",type:"number",description:"The index of the element to return.",optional:!0,defaultValue:"0"}],returns:{type:"*",description:"Returns the nth element of `array`."}},{name:"nthArg",category:"Util",description:"Creates a function that gets the argument at index `n`. If `n` is negative,\nthe nth argument from the end is returned.",since:"4.0.0",examples:[`var func = nthArg(1);
func('a', 'b', 'c', 'd');
// => 'b'

var func = nthArg(-2);
func('a', 'b', 'c', 'd');
// => 'c'`],params:[{name:"n=0",type:"number",description:"The index of the argument to return.",optional:!0,defaultValue:"0"}],returns:{type:"Function",description:"Returns the new pass-thru function."}},{name:"omit",category:"Object",description:"The opposite of `pick`; this method creates an object composed of the\nown and inherited enumerable property paths of `object` that are not omitted.\n<br>\n<br>\n**Note:** This method is considerably slower than `pick`.",since:"0.1.0",examples:[`var object = { 'a': 1, 'b': '2', 'c': 3 };

omit(object, ['a', 'c']);
// => { 'b': '2' }`],params:[{name:"object",type:"Object",description:"The source object.",optional:!1},{name:"paths",type:"...(string|string[])",description:"The property paths to omit.",optional:!0}],returns:{type:"Object",description:"Returns the new object."}},{name:"omitBy",category:"Object",description:"The opposite of `pickBy`; this method creates an object composed of\nthe own and inherited enumerable string keyed properties of `object` that\n`predicate` doesn't return truthy for. The predicate is invoked with two\narguments: *(value, key)*.",since:"4.0.0",examples:[`var object = { 'a': 1, 'b': '2', 'c': 3 };

omitBy(object, isNumber);
// => { 'b': '2' }`],params:[{name:"object",type:"Object",description:"The source object.",optional:!1},{name:"predicate=_.identity",type:"Function",description:"The function invoked per property.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Object",description:"Returns the new object."}},{name:"once",category:"Function",description:"Creates a function that is restricted to invoking `func` once. Repeat calls\nto the function return the value of the first invocation. The `func` is\ninvoked with the `this` binding and arguments of the created function.",since:"0.1.0",examples:[`var initialize = once(createApplication);
initialize();
initialize();
// => \`createApplication\` is invoked once`],params:[{name:"func",type:"Function",description:"The function to restrict.",optional:!1}],returns:{type:"Function",description:"Returns the new restricted function."}},{name:"orderBy",category:"Collection",description:'This method is like `sortBy` except that it allows specifying the sort\norders of the iteratees to sort by. If `orders` is unspecified, all values\nare sorted in ascending order. Otherwise, specify an order of "desc" for\ndescending or "asc" for ascending sort order of corresponding values.',since:"4.0.0",examples:[`var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];

// Sort by \`user\` in ascending order and by \`age\` in descending order.
orderBy(users, ['user', 'age'], ['asc', 'desc']);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]`],params:[{name:"collection",type:"Array|Object",description:"The collection to iterate over.",optional:!1},{name:"iteratees=[_.identity]",type:"Array[]|Function[]|Object[]|string[]",description:"The iteratees to sort by.",optional:!0,defaultValue:"[_.identity]"},{name:"orders",type:"string[]",description:"The sort orders of `iteratees`.",optional:!0}],returns:{type:"Array",description:"Returns the new sorted array."}},{name:"over",category:"Util",description:"Creates a function that invokes `iteratees` with the arguments it receives\nand returns their results.",since:"4.0.0",examples:[`var func = over([Math.max, Math.min]);

func(1, 2, 3, 4);
// => [4, 1]`],params:[{name:"iteratees=[_.identity]",type:"...(Function|Function[])",description:"The iteratees to invoke.",optional:!0,defaultValue:"[_.identity]"}],returns:{type:"Function",description:"Returns the new function."}},{name:"overArgs",category:"Function",description:"Creates a function that invokes `func` with its arguments transformed.",since:"4.0.0",examples:[`function doubled(n) {
  return n * 2;
}

function square(n) {
  return n * n;
}

var func = overArgs(function(x, y) {
  return [x, y];
}, [square, doubled]);

func(9, 3);
// => [81, 6]

func(10, 5);
// => [100, 10]`],params:[{name:"func",type:"Function",description:"The function to wrap.",optional:!1},{name:"transforms=[_.identity]",type:"...(Function|Function[])",description:"The argument transforms.",optional:!0,defaultValue:"[_.identity]"}],returns:{type:"Function",description:"Returns the new function."}},{name:"overEvery",category:"Util",description:"Creates a function that checks if **all** of the `predicates` return\ntruthy when invoked with the arguments it receives.\n<br>\n<br>\nFollowing shorthands are possible for providing predicates.\nPass an `Object` and it will be used as an parameter for `matches` to create the predicate.\nPass an `Array` of parameters for `matchesProperty` and the predicate will be created using them.",since:"4.0.0",examples:[`var func = overEvery([Boolean, isFinite]);

func('1');
// => true

func(null);
// => false

func(NaN);
// => false`],params:[{name:"predicates=[_.identity]",type:"...(Function|Function[])",description:"The predicates to check.",optional:!0,defaultValue:"[_.identity]"}],returns:{type:"Function",description:"Returns the new function."}},{name:"overSome",category:"Util",description:"Creates a function that checks if **any** of the `predicates` return\ntruthy when invoked with the arguments it receives.\n<br>\n<br>\nFollowing shorthands are possible for providing predicates.\nPass an `Object` and it will be used as an parameter for `matches` to create the predicate.\nPass an `Array` of parameters for `matchesProperty` and the predicate will be created using them.",since:"4.0.0",examples:[`var func = overSome([Boolean, isFinite]);

func('1');
// => true

func(null);
// => true

func(NaN);
// => false

var matchesFunc = overSome([{ 'a': 1 }, { 'a': 2 }])
var matchesPropertyFunc = overSome([['a', 1], ['a', 2]])`],params:[{name:"predicates=[_.identity]",type:"...(Function|Function[])",description:"The predicates to check.",optional:!0,defaultValue:"[_.identity]"}],returns:{type:"Function",description:"Returns the new function."}},{name:"pad",category:"String",description:"Pads `string` on the left and right sides if it's shorter than `length`.\nPadding characters are truncated if they can't be evenly divided by `length`.",since:"3.0.0",examples:[`pad('abc', 8);
// => '  abc   '

pad('abc', 8, '_-');
// => '_-abc_-_'

pad('abc', 3);
// => 'abc'`],params:[{name:"string=''",type:"string",description:"The string to pad.",optional:!0,defaultValue:"''"},{name:"length=0",type:"number",description:"The padding length.",optional:!0,defaultValue:"0"},{name:"chars=' '",type:"string",description:"The string used as padding.",optional:!0,defaultValue:"' '"}],returns:{type:"string",description:"Returns the padded string."}},{name:"padEnd",category:"String",description:"Pads `string` on the right side if it's shorter than `length`. Padding\ncharacters are truncated if they exceed `length`.",since:"4.0.0",examples:[`padEnd('abc', 6);
// => 'abc   '

padEnd('abc', 6, '_-');
// => 'abc_-_'

padEnd('abc', 3);
// => 'abc'`],params:[{name:"string=''",type:"string",description:"The string to pad.",optional:!0,defaultValue:"''"},{name:"length=0",type:"number",description:"The padding length.",optional:!0,defaultValue:"0"},{name:"chars=' '",type:"string",description:"The string used as padding.",optional:!0,defaultValue:"' '"}],returns:{type:"string",description:"Returns the padded string."}},{name:"padStart",category:"String",description:"Pads `string` on the left side if it's shorter than `length`. Padding\ncharacters are truncated if they exceed `length`.",since:"4.0.0",examples:[`padStart('abc', 6);
// => '   abc'

padStart('abc', 6, '_-');
// => '_-_abc'

padStart('abc', 3);
// => 'abc'`],params:[{name:"string=''",type:"string",description:"The string to pad.",optional:!0,defaultValue:"''"},{name:"length=0",type:"number",description:"The padding length.",optional:!0,defaultValue:"0"},{name:"chars=' '",type:"string",description:"The string used as padding.",optional:!0,defaultValue:"' '"}],returns:{type:"string",description:"Returns the padded string."}},{name:"parseInt",category:"String",description:"Converts `string` to an integer of the specified radix. If `radix` is\n`undefined` or `0`, a `radix` of `10` is used unless `value` is a\nhexadecimal, in which case a `radix` of `16` is used.\n<br>\n<br>\n**Note:** This method aligns with the\n[ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.",since:"1.1.0",examples:[`parseInt('08');
// => 8

map(['6', '08', '10'], parseInt);
// => [6, 8, 10]`],params:[{name:"string",type:"string",description:"The string to convert.",optional:!1},{name:"radix=10",type:"number",description:"The radix to interpret `value` by.",optional:!0,defaultValue:"10"}],returns:{type:"number",description:"Returns the converted integer."}},{name:"partial",category:"Function",description:'Creates a function that invokes `func` with `partials` prepended to the\narguments it receives. This method is like `bind` except it does **not**\nalter the `this` binding.\n<br>\n<br>\nThe `partial.placeholder` value, which defaults to `_` in monolithic\nbuilds, may be used as a placeholder for partially applied arguments.\n<br>\n<br>\n**Note:** This method doesn\'t set the "length" property of partially\napplied functions.',since:"0.2.0",examples:[`function greet(greeting, name) {
  return greeting + ' ' + name;
}

var sayHelloTo = partial(greet, 'hello');
sayHelloTo('fred');
// => 'hello fred'

// Partially applied with placeholders.
var greetFred = partial(greet, _, 'fred');
greetFred('hi');
// => 'hi fred'`],params:[{name:"func",type:"Function",description:"The function to partially apply arguments to.",optional:!1},{name:"partials",type:"...*",description:"The arguments to be partially applied.",optional:!0}],returns:{type:"Function",description:"Returns the new partially applied function."}},{name:"partialRight",category:"Function",description:`This method is like \`partial\` except that partially applied arguments
are appended to the arguments it receives.
<br>
<br>
The \`partialRight.placeholder\` value, which defaults to \`_\` in monolithic
builds, may be used as a placeholder for partially applied arguments.
<br>
<br>
**Note:** This method doesn't set the "length" property of partially
applied functions.`,since:"1.0.0",examples:[`function greet(greeting, name) {
  return greeting + ' ' + name;
}

var greetFred = partialRight(greet, 'fred');
greetFred('hi');
// => 'hi fred'

// Partially applied with placeholders.
var sayHelloTo = partialRight(greet, 'hello', _);
sayHelloTo('fred');
// => 'hello fred'`],params:[{name:"func",type:"Function",description:"The function to partially apply arguments to.",optional:!1},{name:"partials",type:"...*",description:"The arguments to be partially applied.",optional:!0}],returns:{type:"Function",description:"Returns the new partially applied function."}},{name:"partition",category:"Collection",description:"Creates an array of elements split into two groups, the first of which\ncontains elements `predicate` returns truthy for, the second of which\ncontains elements `predicate` returns falsey for. The predicate is\ninvoked with one argument: *(value)*.",since:"3.0.0",examples:[`var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];

partition(users, function(o) { return o.active; });
// => objects for [['fred'], ['barney', 'pebbles']]

// The \`matches\` iteratee shorthand.
partition(users, { 'age': 1, 'active': false });
// => objects for [['pebbles'], ['barney', 'fred']]

// The \`matchesProperty\` iteratee shorthand.
partition(users, ['active', false]);
// => objects for [['barney', 'pebbles'], ['fred']]

// The \`property\` iteratee shorthand.
partition(users, 'active');
// => objects for [['fred'], ['barney', 'pebbles']]`],params:[{name:"collection",type:"Array|Object",description:"The collection to iterate over.",optional:!1},{name:"predicate=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Array",description:"Returns the array of grouped elements."}},{name:"pick",category:"Object",description:"Creates an object composed of the picked `object` properties.",since:"0.1.0",examples:[`var object = { 'a': 1, 'b': '2', 'c': 3 };

pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }`],params:[{name:"object",type:"Object",description:"The source object.",optional:!1},{name:"paths",type:"...(string|string[])",description:"The property paths to pick.",optional:!0}],returns:{type:"Object",description:"Returns the new object."}},{name:"pickBy",category:"Object",description:"Creates an object composed of the `object` properties `predicate` returns\ntruthy for. The predicate is invoked with two arguments: *(value, key)*.",since:"4.0.0",examples:[`var object = { 'a': 1, 'b': '2', 'c': 3 };

pickBy(object, isNumber);
// => { 'a': 1, 'c': 3 }`],params:[{name:"object",type:"Object",description:"The source object.",optional:!1},{name:"predicate=_.identity",type:"Function",description:"The function invoked per property.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Object",description:"Returns the new object."}},{name:"property",category:"Util",description:"Creates a function that returns the value at `path` of a given object.",since:"2.4.0",examples:[`var objects = [
  { 'a': { 'b': 2 } },
  { 'a': { 'b': 1 } }
];

map(objects, property('a.b'));
// => [2, 1]

map(sortBy(objects, property(['a', 'b'])), 'a.b');
// => [1, 2]`],params:[{name:"path",type:"Array|string",description:"The path of the property to get.",optional:!1}],returns:{type:"Function",description:"Returns the new accessor function."}},{name:"propertyOf",category:"Util",description:"The opposite of `property`; this method creates a function that returns\nthe value at a given path of `object`.",since:"3.0.0",examples:[`var array = [0, 1, 2],
    object = { 'a': array, 'b': array, 'c': array };

map(['a[2]', 'c[0]'], propertyOf(object));
// => [2, 0]

map([['a', '2'], ['c', '0']], propertyOf(object));
// => [2, 0]`],params:[{name:"object",type:"Object",description:"The object to query.",optional:!1}],returns:{type:"Function",description:"Returns the new accessor function."}},{name:"prototype.at",category:"Seq",description:"This method is the wrapper version of `at`.",since:"1.0.0",examples:[`var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

_(object).at(['a[0].b.c', 'a[1]']).value();
// => [3, 4]`],params:[{name:"paths",type:"...(string|string[])",description:"The property paths to pick.",optional:!0}],returns:{type:"Object",description:"Returns the new `lodash` wrapper instance."}},{name:"prototype.chain",category:"Seq",description:"Creates a `lodash` wrapper instance with explicit method chain sequences enabled.",since:"0.1.0",examples:[`var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

// A sequence without explicit chaining.
_(users).head();
// => { 'user': 'barney', 'age': 36 }

// A sequence with explicit chaining.
_(users)
  .chain()
  .head()
  .pick('user')
  .value();
// => { 'user': 'barney' }`],params:[],returns:{type:"Object",description:"Returns the new `lodash` wrapper instance."}},{name:"prototype.commit",category:"Seq",description:"Executes the chain sequence and returns the wrapped result.",since:"3.2.0",examples:[`var array = [1, 2];
var wrapped = _(array).push(3);

console.log(array);
// => [1, 2]

wrapped = wrapped.commit();
console.log(array);
// => [1, 2, 3]

wrapped.last();
// => 3

console.log(array);
// => [1, 2, 3]`],params:[],returns:{type:"Object",description:"Returns the new `lodash` wrapper instance."}},{name:"prototype.next",category:"Seq",description:`Gets the next value on a wrapped object following the
[iterator protocol](https://mdn.io/iteration_protocols#iterator).`,since:"4.0.0",examples:[`var wrapped = _([1, 2]);

wrapped.next();
// => { 'done': false, 'value': 1 }

wrapped.next();
// => { 'done': false, 'value': 2 }

wrapped.next();
// => { 'done': true, 'value': undefined }`],params:[],returns:{type:"Object",description:"Returns the next iterator value."}},{name:"prototype.plant",category:"Seq",description:"Creates a clone of the chain sequence planting `value` as the wrapped value.",since:"3.2.0",examples:[`function square(n) {
  return n * n;
}

var wrapped = _([1, 2]).map(square);
var other = wrapped.plant([3, 4]);

other.value();
// => [9, 16]

wrapped.value();
// => [1, 4]`],params:[{name:"value",type:"*",description:"The value to plant.",optional:!1}],returns:{type:"Object",description:"Returns the new `lodash` wrapper instance."}},{name:"prototype.reverse",category:"Seq",description:`This method is the wrapper version of \`reverse\`.
<br>
<br>
**Note:** This method mutates the wrapped array.`,since:"0.1.0",examples:[`var array = [1, 2, 3];

_(array).reverse().value()
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]`],params:[],returns:{type:"Object",description:"Returns the new `lodash` wrapper instance."}},{name:"prototype.Symbol.iterator",category:"Seq",description:"Enables the wrapper to be iterable.",since:"4.0.0",examples:[`var wrapped = _([1, 2]);

wrapped[Symbol.iterator]() === wrapped;
// => true

Array.from(wrapped);
// => [1, 2]`],params:[],returns:{type:"Object",description:"Returns the wrapper object."}},{name:"prototype.value",category:"Seq",description:"Executes the chain sequence to resolve the unwrapped value.",since:"0.1.0",examples:[`_([1, 2, 3]).value();
// => [1, 2, 3]`],params:[],returns:{type:"*",description:"Returns the resolved unwrapped value."}},{name:"pull",category:"Array",description:"Removes all given values from `array` using\n[`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\nfor equality comparisons.\n<br>\n<br>\n**Note:** Unlike `without`, this method mutates `array`. Use `remove`\nto remove elements from an array by predicate.",since:"2.0.0",examples:[`var array = ['a', 'b', 'c', 'a', 'b', 'c'];

pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']`],params:[{name:"array",type:"Array",description:"The array to modify.",optional:!1},{name:"values",type:"...*",description:"The values to remove.",optional:!0}],returns:{type:"Array",description:"Returns `array`."}},{name:"pullAll",category:"Array",description:"This method is like `pull` except that it accepts an array of values to remove.\n<br>\n<br>\n**Note:** Unlike `difference`, this method mutates `array`.",since:"4.0.0",examples:[`var array = ['a', 'b', 'c', 'a', 'b', 'c'];

pullAll(array, ['a', 'c']);
console.log(array);
// => ['b', 'b']`],params:[{name:"array",type:"Array",description:"The array to modify.",optional:!1},{name:"values",type:"Array",description:"The values to remove.",optional:!1}],returns:{type:"Array",description:"Returns `array`."}},{name:"pullAllBy",category:"Array",description:"This method is like `pullAll` except that it accepts `iteratee` which is\ninvoked for each element of `array` and `values` to generate the criterion\nby which they're compared. The iteratee is invoked with one argument: *(value)*.\n<br>\n<br>\n**Note:** Unlike `differenceBy`, this method mutates `array`.",since:"4.0.0",examples:[`var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];

pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array);
// => [{ 'x': 2 }]`],params:[{name:"array",type:"Array",description:"The array to modify.",optional:!1},{name:"values",type:"Array",description:"The values to remove.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The iteratee invoked per element.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Array",description:"Returns `array`."}},{name:"pullAllWith",category:"Array",description:"This method is like `pullAll` except that it accepts `comparator` which\nis invoked to compare elements of `array` to `values`. The comparator is\ninvoked with two arguments: *(arrVal, othVal)*.\n<br>\n<br>\n**Note:** Unlike `differenceWith`, this method mutates `array`.",since:"4.6.0",examples:[`var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];

pullAllWith(array, [{ 'x': 3, 'y': 4 }], isEqual);
console.log(array);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]`],params:[{name:"array",type:"Array",description:"The array to modify.",optional:!1},{name:"values",type:"Array",description:"The values to remove.",optional:!1},{name:"comparator",type:"Function",description:"The comparator invoked per element.",optional:!0}],returns:{type:"Array",description:"Returns `array`."}},{name:"pullAt",category:"Array",description:"Removes elements from `array` corresponding to `indexes` and returns an\narray of removed elements.\n<br>\n<br>\n**Note:** Unlike `at`, this method mutates `array`.",since:"3.0.0",examples:[`var array = ['a', 'b', 'c', 'd'];
var pulled = pullAt(array, [1, 3]);

console.log(array);
// => ['a', 'c']

console.log(pulled);
// => ['b', 'd']`],params:[{name:"array",type:"Array",description:"The array to modify.",optional:!1},{name:"indexes",type:"...(number|number[])",description:"The indexes of elements to remove.",optional:!0}],returns:{type:"Array",description:"Returns the new array of removed elements."}},{name:"random",category:"Number",description:"Produces a random number between the inclusive `lower` and `upper` bounds.\nIf only one argument is provided a number between `0` and the given number\nis returned. If `floating` is `true`, or either `lower` or `upper` are\nfloats, a floating-point number is returned instead of an integer.\n<br>\n<br>\n**Note:** JavaScript follows the IEEE-754 standard for resolving\nfloating-point values which can produce unexpected results.",since:"0.7.0",examples:[`random(0, 5);
// => an integer between 0 and 5

random(5);
// => also an integer between 0 and 5

random(5, true);
// => a floating-point number between 0 and 5

random(1.2, 5.2);
// => a floating-point number between 1.2 and 5.2`],params:[{name:"lower=0",type:"number",description:"The lower bound.",optional:!0,defaultValue:"0"},{name:"upper=1",type:"number",description:"The upper bound.",optional:!0,defaultValue:"1"},{name:"floating",type:"boolean",description:"Specify returning a floating-point number.",optional:!0}],returns:{type:"number",description:"Returns the random number."}},{name:"range",category:"Util",description:"Creates an array of numbers *(positive and/or negative)* progressing from\n`start` up to, but not including, `end`. A step of `-1` is used if a negative\n`start` is specified without an `end` or `step`. If `end` is not specified,\nit's set to `start` with `start` then set to `0`.\n<br>\n<br>\n**Note:** JavaScript follows the IEEE-754 standard for resolving\nfloating-point values which can produce unexpected results.",since:"0.1.0",examples:[`range(4);
// => [0, 1, 2, 3]

range(-4);
// => [0, -1, -2, -3]

range(1, 5);
// => [1, 2, 3, 4]

range(0, 20, 5);
// => [0, 5, 10, 15]

range(0, -4, -1);
// => [0, -1, -2, -3]

range(1, 4, 0);
// => [1, 1, 1]

range(0);
// => []`],params:[{name:"start=0",type:"number",description:"The start of the range.",optional:!0,defaultValue:"0"},{name:"end",type:"number",description:"The end of the range.",optional:!1},{name:"step=1",type:"number",description:"The value to increment or decrement by.",optional:!0,defaultValue:"1"}],returns:{type:"Array",description:"Returns the range of numbers."}},{name:"rangeRight",category:"Util",description:"This method is like `range` except that it populates values in\ndescending order.",since:"4.0.0",examples:[`rangeRight(4);
// => [3, 2, 1, 0]

rangeRight(-4);
// => [-3, -2, -1, 0]

rangeRight(1, 5);
// => [4, 3, 2, 1]

rangeRight(0, 20, 5);
// => [15, 10, 5, 0]

rangeRight(0, -4, -1);
// => [-3, -2, -1, 0]

rangeRight(1, 4, 0);
// => [1, 1, 1]

rangeRight(0);
// => []`],params:[{name:"start=0",type:"number",description:"The start of the range.",optional:!0,defaultValue:"0"},{name:"end",type:"number",description:"The end of the range.",optional:!1},{name:"step=1",type:"number",description:"The value to increment or decrement by.",optional:!0,defaultValue:"1"}],returns:{type:"Array",description:"Returns the range of numbers."}},{name:"rearg",category:"Function",description:"Creates a function that invokes `func` with arguments arranged according\nto the specified `indexes` where the argument value at the first index is\nprovided as the first argument, the argument value at the second index is\nprovided as the second argument, and so on.",since:"3.0.0",examples:[`var rearged = rearg(function(a, b, c) {
  return [a, b, c];
}, [2, 0, 1]);

rearged('b', 'c', 'a')
// => ['a', 'b', 'c']`],params:[{name:"func",type:"Function",description:"The function to rearrange arguments for.",optional:!1},{name:"indexes",type:"...(number|number[])",description:"The arranged argument indexes.",optional:!1}],returns:{type:"Function",description:"Returns the new function."}},{name:"reduce",category:"Collection",description:"Reduces `collection` to a value which is the accumulated result of running\neach element in `collection` thru `iteratee`, where each successive\ninvocation is supplied the return value of the previous. If `accumulator`\nis not given, the first element of `collection` is used as the initial\nvalue. The iteratee is invoked with four arguments:<br>\n*(accumulator, value, index|key, collection)*.\n<br>\n<br>\nMany lodash methods are guarded to work as iteratees for methods like\n`reduce`, `reduceRight`, and `transform`.\n<br>\n<br>\nThe guarded methods are:<br>\n`assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,\nand `sortBy`",since:"0.1.0",examples:[`reduce([1, 2], function(sum, n) {
  return sum + n;
}, 0);
// => 3

reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});
// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)`],params:[{name:"collection",type:"Array|Object",description:"The collection to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"},{name:"accumulator",type:"*",description:"The initial value.",optional:!0}],returns:{type:"*",description:"Returns the accumulated value."}},{name:"reduceRight",category:"Collection",description:"This method is like `reduce` except that it iterates over elements of\n`collection` from right to left.",since:"0.1.0",examples:[`var array = [[0, 1], [2, 3], [4, 5]];

reduceRight(array, function(flattened, other) {
  return flattened.concat(other);
}, []);
// => [4, 5, 2, 3, 0, 1]`],params:[{name:"collection",type:"Array|Object",description:"The collection to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"},{name:"accumulator",type:"*",description:"The initial value.",optional:!0}],returns:{type:"*",description:"Returns the accumulated value."}},{name:"reject",category:"Collection",description:"The opposite of `filter`; this method returns the elements of `collection`\nthat `predicate` does **not** return truthy for.",since:"0.1.0",examples:[`var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];

reject(users, function(o) { return !o.active; });
// => objects for ['fred']

// The \`matches\` iteratee shorthand.
reject(users, { 'age': 40, 'active': true });
// => objects for ['barney']

// The \`matchesProperty\` iteratee shorthand.
reject(users, ['active', false]);
// => objects for ['fred']

// The \`property\` iteratee shorthand.
reject(users, 'active');
// => objects for ['barney']`],params:[{name:"collection",type:"Array|Object",description:"The collection to iterate over.",optional:!1},{name:"predicate=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Array",description:"Returns the new filtered array."}},{name:"remove",category:"Array",description:"Removes all elements from `array` that `predicate` returns truthy for\nand returns an array of the removed elements. The predicate is invoked\nwith three arguments: *(value, index, array)*.\n<br>\n<br>\n**Note:** Unlike `filter`, this method mutates `array`. Use `pull`\nto pull elements from an array by value.",since:"2.0.0",examples:[`var array = [1, 2, 3, 4];
var evens = remove(array, function(n) {
  return n % 2 == 0;
});

console.log(array);
// => [1, 3]

console.log(evens);
// => [2, 4]`],params:[{name:"array",type:"Array",description:"The array to modify.",optional:!1},{name:"predicate=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Array",description:"Returns the new array of removed elements."}},{name:"repeat",category:"String",description:"Repeats the given string `n` times.",since:"3.0.0",examples:[`repeat('*', 3);
// => '***'

repeat('abc', 2);
// => 'abcabc'

repeat('abc', 0);
// => ''`],params:[{name:"string=''",type:"string",description:"The string to repeat.",optional:!0,defaultValue:"''"},{name:"n=1",type:"number",description:"The number of times to repeat the string.",optional:!0,defaultValue:"1"}],returns:{type:"string",description:"Returns the repeated string."}},{name:"replace",category:"String",description:"Replaces matches for `pattern` in `string` with `replacement`.\n<br>\n<br>\n**Note:** This method is based on\n[`String#replace`](https://mdn.io/String/replace).",since:"4.0.0",examples:[`replace('Hi Fred', 'Fred', 'Barney');
// => 'Hi Barney'`],params:[{name:"string=''",type:"string",description:"The string to modify.",optional:!0,defaultValue:"''"},{name:"pattern",type:"RegExp|string",description:"The pattern to replace.",optional:!1},{name:"replacement",type:"Function|string",description:"The match replacement.",optional:!1}],returns:{type:"string",description:"Returns the modified string."}},{name:"rest",category:"Function",description:"Creates a function that invokes `func` with the `this` binding of the\ncreated function and arguments from `start` and beyond provided as\nan array.\n<br>\n<br>\n**Note:** This method is based on the\n[rest parameter](https://mdn.io/rest_parameters).",since:"4.0.0",examples:[`var say = rest(function(what, names) {
  return what + ' ' + initial(names).join(', ') +
    (size(names) > 1 ? ', & ' : '') + last(names);
});

say('hello', 'fred', 'barney', 'pebbles');
// => 'hello fred, barney, & pebbles'`],params:[{name:"func",type:"Function",description:"The function to apply a rest parameter to.",optional:!1},{name:"start=func.length-1",type:"number",description:"The start position of the rest parameter.",optional:!0,defaultValue:"func.length-1"}],returns:{type:"Function",description:"Returns the new function."}},{name:"result",category:"Object",description:"This method is like `get` except that if the resolved value is a\nfunction it's invoked with the `this` binding of its parent object and\nits result is returned.",since:"0.1.0",examples:[`var object = { 'a': [{ 'b': { 'c1': 3, 'c2': constant(4) } }] };

result(object, 'a[0].b.c1');
// => 3

result(object, 'a[0].b.c2');
// => 4

result(object, 'a[0].b.c3', 'default');
// => 'default'

result(object, 'a[0].b.c3', constant('default'));
// => 'default'`],params:[{name:"object",type:"Object",description:"The object to query.",optional:!1},{name:"path",type:"Array|string",description:"The path of the property to resolve.",optional:!1},{name:"defaultValue",type:"*",description:"The value returned for `undefined` resolved values.",optional:!0}],returns:{type:"*",description:"Returns the resolved value."}},{name:"reverse",category:"Array",description:"Reverses `array` so that the first element becomes the last, the second\nelement becomes the second to last, and so on.\n<br>\n<br>\n**Note:** This method mutates `array` and is based on\n[`Array#reverse`](https://mdn.io/Array/reverse).",since:"4.0.0",examples:[`var array = [1, 2, 3];

reverse(array);
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]`],params:[{name:"array",type:"Array",description:"The array to modify.",optional:!1}],returns:{type:"Array",description:"Returns `array`."}},{name:"round",category:"Math",description:"Computes `number` rounded to `precision`.",since:"3.10.0",examples:[`round(4.006);
// => 4

round(4.006, 2);
// => 4.01

round(4060, -2);
// => 4100`],params:[{name:"number",type:"number",description:"The number to round.",optional:!1},{name:"precision=0",type:"number",description:"The precision to round to.",optional:!0,defaultValue:"0"}],returns:{type:"number",description:"Returns the rounded number."}},{name:"runInContext",category:"Util",description:"Create a new pristine `lodash` function using the `context` object.",since:"1.1.0",examples:[`mixin({ 'foo': constant('foo') });

var lodash = runInContext();
lodash.mixin({ 'bar': lodash.constant('bar') });

isFunction(foo);
// => true
isFunction(bar);
// => false

lodash.isFunction(lodash.foo);
// => false
lodash.isFunction(lodash.bar);
// => true

// Create a suped-up \`defer\` in Node.js.
var defer = runInContext({ 'setTimeout': setImmediate }).defer;`],params:[{name:"context=root",type:"Object",description:"The context object.",optional:!0,defaultValue:"root"}],returns:{type:"Function",description:"Returns a new `lodash` function."}},{name:"sample",category:"Collection",description:"Gets a random element from `collection`.",since:"2.0.0",examples:[`sample([1, 2, 3, 4]);
// => 2`],params:[{name:"collection",type:"Array|Object",description:"The collection to sample.",optional:!1}],returns:{type:"*",description:"Returns the random element."}},{name:"sampleSize",category:"Collection",description:"Gets `n` random elements at unique keys from `collection` up to the\nsize of `collection`.",since:"4.0.0",examples:[`sampleSize([1, 2, 3], 2);
// => [3, 1]

sampleSize([1, 2, 3], 4);
// => [2, 3, 1]`],params:[{name:"collection",type:"Array|Object",description:"The collection to sample.",optional:!1},{name:"n=1",type:"number",description:"The number of elements to sample.",optional:!0,defaultValue:"1"}],returns:{type:"Array",description:"Returns the random elements."}},{name:"set",category:"Object",description:"Sets the value at `path` of `object`. If a portion of `path` doesn't exist,\nit's created. Arrays are created for missing index properties while objects\nare created for all other missing properties. Use `setWith` to customize\n`path` creation.\n<br>\n<br>\n**Note:** This method mutates `object`.",since:"3.7.0",examples:[`var object = { 'a': [{ 'b': { 'c': 3 } }] };

set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c);
// => 4

set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z);
// => 5`],params:[{name:"object",type:"Object",description:"The object to modify.",optional:!1},{name:"path",type:"Array|string",description:"The path of the property to set.",optional:!1},{name:"value",type:"*",description:"The value to set.",optional:!1}],returns:{type:"Object",description:"Returns `object`."}},{name:"setWith",category:"Object",description:"This method is like `set` except that it accepts `customizer` which is\ninvoked to produce the objects of `path`.  If `customizer` returns `undefined`\npath creation is handled by the method instead. The `customizer` is invoked\nwith three arguments: *(nsValue, key, nsObject)*.\n<br>\n<br>\n**Note:** This method mutates `object`.",since:"4.0.0",examples:[`var object = {};

setWith(object, '[0][1]', 'a', Object);
// => { '0': { '1': 'a' } }`],params:[{name:"object",type:"Object",description:"The object to modify.",optional:!1},{name:"path",type:"Array|string",description:"The path of the property to set.",optional:!1},{name:"value",type:"*",description:"The value to set.",optional:!1},{name:"customizer",type:"Function",description:"The function to customize assigned values.",optional:!0}],returns:{type:"Object",description:"Returns `object`."}},{name:"shuffle",category:"Collection",description:`Creates an array of shuffled values, using a version of the
[Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).`,since:"0.1.0",examples:[`shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]`],params:[{name:"collection",type:"Array|Object",description:"The collection to shuffle.",optional:!1}],returns:{type:"Array",description:"Returns the new shuffled array."}},{name:"size",category:"Collection",description:"Gets the size of `collection` by returning its length for array-like\nvalues or the number of own enumerable string keyed properties for objects.",since:"0.1.0",examples:[`size([1, 2, 3]);
// => 3

size({ 'a': 1, 'b': 2 });
// => 2

size('pebbles');
// => 7`],params:[{name:"collection",type:"Array|Object|string",description:"The collection to inspect.",optional:!1}],returns:{type:"number",description:"Returns the collection size."}},{name:"slice",category:"Array",description:"Creates a slice of `array` from `start` up to, but not including, `end`.\n<br>\n<br>\n**Note:** This method is used instead of\n[`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are\nreturned.",since:"3.0.0",examples:[],params:[{name:"array",type:"Array",description:"The array to slice.",optional:!1},{name:"start=0",type:"number",description:"The start position.",optional:!0,defaultValue:"0"},{name:"end=array.length",type:"number",description:"The end position.",optional:!0,defaultValue:"array.length"}],returns:{type:"Array",description:"Returns the slice of `array`."}},{name:"snakeCase",category:"String",description:"Converts `string` to\n[snake case](https://en.wikipedia.org/wiki/Snake_case).",since:"3.0.0",examples:[`snakeCase('Foo Bar');
// => 'foo_bar'

snakeCase('fooBar');
// => 'foo_bar'

snakeCase('--FOO-BAR--');
// => 'foo_bar'`],params:[{name:"string=''",type:"string",description:"The string to convert.",optional:!0,defaultValue:"''"}],returns:{type:"string",description:"Returns the snake cased string."}},{name:"some",category:"Collection",description:"Checks if `predicate` returns truthy for **any** element of `collection`.\nIteration is stopped once `predicate` returns truthy. The predicate is\ninvoked with three arguments: *(value, index|key, collection)*.",since:"0.1.0",examples:[`some([null, 0, 'yes', false], Boolean);
// => true

var users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
];

// The \`matches\` iteratee shorthand.
some(users, { 'user': 'barney', 'active': false });
// => false

// The \`matchesProperty\` iteratee shorthand.
some(users, ['active', false]);
// => true

// The \`property\` iteratee shorthand.
some(users, 'active');
// => true`],params:[{name:"collection",type:"Array|Object",description:"The collection to iterate over.",optional:!1},{name:"predicate=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"boolean",description:"Returns `true` if any element passes the predicate check,\n else `false`."}},{name:"sortBy",category:"Collection",description:`Creates an array of elements, sorted in ascending order by the results of
running each element in a collection thru each iteratee. This method
performs a stable sort, that is, it preserves the original sort order of
equal elements. The iteratees are invoked with one argument: *(value)*.`,since:"0.1.0",examples:[`var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 30 },
  { 'user': 'barney', 'age': 34 }
];

sortBy(users, [function(o) { return o.user; }]);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]

sortBy(users, ['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]`],params:[{name:"collection",type:"Array|Object",description:"The collection to iterate over.",optional:!1},{name:"iteratees=[_.identity]",type:"...(Function|Function[])",description:"The iteratees to sort by.",optional:!0,defaultValue:"[_.identity]"}],returns:{type:"Array",description:"Returns the new sorted array."}},{name:"sortedIndex",category:"Array",description:"Uses a binary search to determine the lowest index at which `value`\nshould be inserted into `array` in order to maintain its sort order.",since:"0.1.0",examples:[`sortedIndex([30, 50], 40);
// => 1`],params:[{name:"array",type:"Array",description:"The sorted array to inspect.",optional:!1},{name:"value",type:"*",description:"The value to evaluate.",optional:!1}],returns:{type:"number",description:"Returns the index at which `value` should be inserted\n into `array`."}},{name:"sortedIndexBy",category:"Array",description:"This method is like `sortedIndex` except that it accepts `iteratee`\nwhich is invoked for `value` and each element of `array` to compute their\nsort ranking. The iteratee is invoked with one argument: *(value)*.",since:"4.0.0",examples:[`var objects = [{ 'x': 4 }, { 'x': 5 }];

sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
// => 0

// The \`property\` iteratee shorthand.
sortedIndexBy(objects, { 'x': 4 }, 'x');
// => 0`],params:[{name:"array",type:"Array",description:"The sorted array to inspect.",optional:!1},{name:"value",type:"*",description:"The value to evaluate.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The iteratee invoked per element.",optional:!0,defaultValue:"_.identity"}],returns:{type:"number",description:"Returns the index at which `value` should be inserted\n into `array`."}},{name:"sortedIndexOf",category:"Array",description:"This method is like `indexOf` except that it performs a binary\nsearch on a sorted `array`.",since:"4.0.0",examples:[`sortedIndexOf([4, 5, 5, 5, 6], 5);
// => 1`],params:[{name:"array",type:"Array",description:"The array to inspect.",optional:!1},{name:"value",type:"*",description:"The value to search for.",optional:!1}],returns:{type:"number",description:"Returns the index of the matched value, else `-1`."}},{name:"sortedLastIndex",category:"Array",description:"This method is like `sortedIndex` except that it returns the highest\nindex at which `value` should be inserted into `array` in order to\nmaintain its sort order.",since:"3.0.0",examples:[`sortedLastIndex([4, 5, 5, 5, 6], 5);
// => 4`],params:[{name:"array",type:"Array",description:"The sorted array to inspect.",optional:!1},{name:"value",type:"*",description:"The value to evaluate.",optional:!1}],returns:{type:"number",description:"Returns the index at which `value` should be inserted\n into `array`."}},{name:"sortedLastIndexBy",category:"Array",description:"This method is like `sortedLastIndex` except that it accepts `iteratee`\nwhich is invoked for `value` and each element of `array` to compute their\nsort ranking. The iteratee is invoked with one argument: *(value)*.",since:"4.0.0",examples:[`var objects = [{ 'x': 4 }, { 'x': 5 }];

sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
// => 1

// The \`property\` iteratee shorthand.
sortedLastIndexBy(objects, { 'x': 4 }, 'x');
// => 1`],params:[{name:"array",type:"Array",description:"The sorted array to inspect.",optional:!1},{name:"value",type:"*",description:"The value to evaluate.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The iteratee invoked per element.",optional:!0,defaultValue:"_.identity"}],returns:{type:"number",description:"Returns the index at which `value` should be inserted\n into `array`."}},{name:"sortedLastIndexOf",category:"Array",description:"This method is like `lastIndexOf` except that it performs a binary\nsearch on a sorted `array`.",since:"4.0.0",examples:[`sortedLastIndexOf([4, 5, 5, 5, 6], 5);
// => 3`],params:[{name:"array",type:"Array",description:"The array to inspect.",optional:!1},{name:"value",type:"*",description:"The value to search for.",optional:!1}],returns:{type:"number",description:"Returns the index of the matched value, else `-1`."}},{name:"sortedUniq",category:"Array",description:"This method is like `uniq` except that it's designed and optimized\nfor sorted arrays.",since:"4.0.0",examples:[`sortedUniq([1, 1, 2]);
// => [1, 2]`],params:[{name:"array",type:"Array",description:"The array to inspect.",optional:!1}],returns:{type:"Array",description:"Returns the new duplicate free array."}},{name:"sortedUniqBy",category:"Array",description:"This method is like `uniqBy` except that it's designed and optimized\nfor sorted arrays.",since:"4.0.0",examples:[`sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
// => [1.1, 2.3]`],params:[{name:"array",type:"Array",description:"The array to inspect.",optional:!1},{name:"iteratee",type:"Function",description:"The iteratee invoked per element.",optional:!0}],returns:{type:"Array",description:"Returns the new duplicate free array."}},{name:"split",category:"String",description:"Splits `string` by `separator`.\n<br>\n<br>\n**Note:** This method is based on\n[`String#split`](https://mdn.io/String/split).",since:"4.0.0",examples:[`split('a-b-c', '-', 2);
// => ['a', 'b']`],params:[{name:"string=''",type:"string",description:"The string to split.",optional:!0,defaultValue:"''"},{name:"separator",type:"RegExp|string",description:"The separator pattern to split by.",optional:!1},{name:"limit",type:"number",description:"The length to truncate results to.",optional:!0}],returns:{type:"Array",description:"Returns the string segments."}},{name:"spread",category:"Function",description:"Creates a function that invokes `func` with the `this` binding of the\ncreate function and an array of arguments much like\n[`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).\n<br>\n<br>\n**Note:** This method is based on the\n[spread operator](https://mdn.io/spread_operator).",since:"3.2.0",examples:[`var say = spread(function(who, what) {
  return who + ' says ' + what;
});

say(['fred', 'hello']);
// => 'fred says hello'

var numbers = Promise.all([
  Promise.resolve(40),
  Promise.resolve(36)
]);

numbers.then(spread(function(x, y) {
  return x + y;
}));
// => a Promise of 76`],params:[{name:"func",type:"Function",description:"The function to spread arguments over.",optional:!1},{name:"start=0",type:"number",description:"The start position of the spread.",optional:!0,defaultValue:"0"}],returns:{type:"Function",description:"Returns the new function."}},{name:"startCase",category:"String",description:"Converts `string` to\n[start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).",since:"3.1.0",examples:[`startCase('--foo-bar--');
// => 'Foo Bar'

startCase('fooBar');
// => 'Foo Bar'

startCase('__FOO_BAR__');
// => 'FOO BAR'`],params:[{name:"string=''",type:"string",description:"The string to convert.",optional:!0,defaultValue:"''"}],returns:{type:"string",description:"Returns the start cased string."}},{name:"startsWith",category:"String",description:"Checks if `string` starts with the given target string.",since:"3.0.0",examples:[`startsWith('abc', 'a');
// => true

startsWith('abc', 'b');
// => false

startsWith('abc', 'b', 1);
// => true`],params:[{name:"string=''",type:"string",description:"The string to inspect.",optional:!0,defaultValue:"''"},{name:"target",type:"string",description:"The string to search for.",optional:!0},{name:"position=0",type:"number",description:"The position to search from.",optional:!0,defaultValue:"0"}],returns:{type:"boolean",description:"Returns `true` if `string` starts with `target`,\n else `false`."}},{name:"stubArray",category:"Util",description:"This method returns a new empty array.",since:"4.13.0",examples:[`var arrays = times(2, stubArray);

console.log(arrays);
// => [[], []]

console.log(arrays[0] === arrays[1]);
// => false`],params:[],returns:{type:"Array",description:"Returns the new empty array."}},{name:"stubFalse",category:"Util",description:"This method returns `false`.",since:"4.13.0",examples:[`times(2, stubFalse);
// => [false, false]`],params:[],returns:{type:"boolean",description:"Returns `false`."}},{name:"stubObject",category:"Util",description:"This method returns a new empty object.",since:"4.13.0",examples:[`var objects = times(2, stubObject);

console.log(objects);
// => [{}, {}]

console.log(objects[0] === objects[1]);
// => false`],params:[],returns:{type:"Object",description:"Returns the new empty object."}},{name:"stubString",category:"Util",description:"This method returns an empty string.",since:"4.13.0",examples:[`times(2, stubString);
// => ['', '']`],params:[],returns:{type:"string",description:"Returns the empty string."}},{name:"stubTrue",category:"Util",description:"This method returns `true`.",since:"4.13.0",examples:[`times(2, stubTrue);
// => [true, true]`],params:[],returns:{type:"boolean",description:"Returns `true`."}},{name:"subtract",category:"Math",description:"Subtract two numbers.",since:"4.0.0",examples:[`subtract(6, 4);
// => 2`],params:[{name:"minuend",type:"number",description:"The first number in a subtraction.",optional:!1},{name:"subtrahend",type:"number",description:"The second number in a subtraction.",optional:!1}],returns:{type:"number",description:"Returns the difference."}},{name:"sum",category:"Math",description:"Computes the sum of the values in `array`.",since:"3.4.0",examples:[`sum([4, 2, 8, 6]);
// => 20`],params:[{name:"array",type:"Array",description:"The array to iterate over.",optional:!1}],returns:{type:"number",description:"Returns the sum."}},{name:"sumBy",category:"Math",description:"This method is like `sum` except that it accepts `iteratee` which is\ninvoked for each element in `array` to generate the value to be summed.\nThe iteratee is invoked with one argument: *(value)*.",since:"4.0.0",examples:[`var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

sumBy(objects, function(o) { return o.n; });
// => 20

// The \`property\` iteratee shorthand.
sumBy(objects, 'n');
// => 20`],params:[{name:"array",type:"Array",description:"The array to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The iteratee invoked per element.",optional:!0,defaultValue:"_.identity"}],returns:{type:"number",description:"Returns the sum."}},{name:"tail",category:"Array",description:"Gets all but the first element of `array`.",since:"4.0.0",examples:[`tail([1, 2, 3]);
// => [2, 3]`],params:[{name:"array",type:"Array",description:"The array to query.",optional:!1}],returns:{type:"Array",description:"Returns the slice of `array`."}},{name:"take",category:"Array",description:"Creates a slice of `array` with `n` elements taken from the beginning.",since:"0.1.0",examples:[`take([1, 2, 3]);
// => [1]

take([1, 2, 3], 2);
// => [1, 2]

take([1, 2, 3], 5);
// => [1, 2, 3]

take([1, 2, 3], 0);
// => []`],params:[{name:"array",type:"Array",description:"The array to query.",optional:!1},{name:"n=1",type:"number",description:"The number of elements to take.",optional:!0,defaultValue:"1"}],returns:{type:"Array",description:"Returns the slice of `array`."}},{name:"takeRight",category:"Array",description:"Creates a slice of `array` with `n` elements taken from the end.",since:"3.0.0",examples:[`takeRight([1, 2, 3]);
// => [3]

takeRight([1, 2, 3], 2);
// => [2, 3]

takeRight([1, 2, 3], 5);
// => [1, 2, 3]

takeRight([1, 2, 3], 0);
// => []`],params:[{name:"array",type:"Array",description:"The array to query.",optional:!1},{name:"n=1",type:"number",description:"The number of elements to take.",optional:!0,defaultValue:"1"}],returns:{type:"Array",description:"Returns the slice of `array`."}},{name:"takeRightWhile",category:"Array",description:"Creates a slice of `array` with elements taken from the end. Elements are\ntaken until `predicate` returns falsey. The predicate is invoked with\nthree arguments: *(value, index, array)*.",since:"3.0.0",examples:[`var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

takeRightWhile(users, function(o) { return !o.active; });
// => objects for ['fred', 'pebbles']

// The \`matches\` iteratee shorthand.
takeRightWhile(users, { 'user': 'pebbles', 'active': false });
// => objects for ['pebbles']

// The \`matchesProperty\` iteratee shorthand.
takeRightWhile(users, ['active', false]);
// => objects for ['fred', 'pebbles']

// The \`property\` iteratee shorthand.
takeRightWhile(users, 'active');
// => []`],params:[{name:"array",type:"Array",description:"The array to query.",optional:!1},{name:"predicate=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Array",description:"Returns the slice of `array`."}},{name:"takeWhile",category:"Array",description:"Creates a slice of `array` with elements taken from the beginning. Elements\nare taken until `predicate` returns falsey. The predicate is invoked with\nthree arguments: *(value, index, array)*.",since:"3.0.0",examples:[`var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

takeWhile(users, function(o) { return !o.active; });
// => objects for ['barney', 'fred']

// The \`matches\` iteratee shorthand.
takeWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['barney']

// The \`matchesProperty\` iteratee shorthand.
takeWhile(users, ['active', false]);
// => objects for ['barney', 'fred']

// The \`property\` iteratee shorthand.
takeWhile(users, 'active');
// => []`],params:[{name:"array",type:"Array",description:"The array to query.",optional:!1},{name:"predicate=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Array",description:"Returns the slice of `array`."}},{name:"tap",category:"Seq",description:'This method invokes `interceptor` and returns `value`. The interceptor\nis invoked with one argument; *(value)*. The purpose of this method is to\n"tap into" a method chain sequence in order to modify intermediate results.',since:"0.1.0",examples:[`_([1, 2, 3])
 .tap(function(array) {
   // Mutate input array.
   array.pop();
 })
 .reverse()
 .value();
// => [2, 1]`],params:[{name:"value",type:"*",description:"The value to provide to `interceptor`.",optional:!1},{name:"interceptor",type:"Function",description:"The function to invoke.",optional:!1}],returns:{type:"*",description:"Returns `value`."}},{name:"template",category:"String",description:`Creates a compiled template function that can interpolate data properties
in "interpolate" delimiters, HTML-escape interpolated data properties in
"escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
properties may be accessed as free variables in the template. If a setting
object is given, it takes precedence over \`templateSettings\` values.
<br>
<br>
**Note:** In the development build \`template\` utilizes
[sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
for easier debugging.
<br>
<br>
For more information on precompiling templates see
[lodash's custom builds documentation](https://lodash.com/custom-builds).
<br>
<br>
For more information on Chrome extension sandboxes see
[Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).`,since:"0.1.0",examples:[`// Use the "interpolate" delimiter to create a compiled template.
var compiled = template('hello <%= user %>!');
compiled({ 'user': 'fred' });
// => 'hello fred!'

// Use the HTML "escape" delimiter to escape data property values.
var compiled = template('<b><%- value %></b>');
compiled({ 'value': '<script>' });
// => '<b>&lt;script&gt;</b>'

// Use the "evaluate" delimiter to execute JavaScript and generate HTML.
var compiled = template('<% forEach(users, function(user) { %><li><%- user %></li><% }); %>');
compiled({ 'users': ['fred', 'barney'] });
// => '<li>fred</li><li>barney</li>'

// Use the internal \`print\` function in "evaluate" delimiters.
var compiled = template('<% print("hello " + user); %>!');
compiled({ 'user': 'barney' });
// => 'hello barney!'

// Use the ES template literal delimiter as an "interpolate" delimiter.
// Disable support by replacing the "interpolate" delimiter.
var compiled = template('hello \${ user }!');
compiled({ 'user': 'pebbles' });
// => 'hello pebbles!'

// Use backslashes to treat delimiters as plain text.
var compiled = template('<%= "\\\\<%- value %\\\\>" %>');
compiled({ 'value': 'ignored' });
// => '<%- value %>'

// Use the \`imports\` option to import \`jQuery\` as \`jq\`.
var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
var compiled = template(text, { 'imports': { 'jq': jQuery } });
compiled({ 'users': ['fred', 'barney'] });
// => '<li>fred</li><li>barney</li>'

// Use the \`sourceURL\` option to specify a custom sourceURL for the template.
var compiled = template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
compiled(data);
// => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.

// Use the \`variable\` option to ensure a with-statement isn't used in the compiled template.
var compiled = template('hi <%= data.user %>!', { 'variable': 'data' });
compiled.source;
// => function(data) {
//   var __t, __p = '';
//   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
//   return __p;
// }

// Use custom template delimiters.
templateSettings.interpolate = /{{([\\s\\S]+?)}}/g;
var compiled = template('hello {{ user }}!');
compiled({ 'user': 'mustache' });
// => 'hello mustache!'

// Use the \`source\` property to inline compiled templates for meaningful
// line numbers in error messages and stack traces.
fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\\
  var JST = {\\
    "main": ' + template(mainText).source + '\\
  };\\
');`],params:[{name:"string=''",type:"string",description:"The template string.",optional:!0,defaultValue:"''"},{name:"options={}",type:"Object",description:"The options object.",optional:!0,defaultValue:"{}"},{name:"options.escape=_.templateSettings.escape",type:"RegExp",description:'The HTML "escape" delimiter.',optional:!0,defaultValue:"_.templateSettings.escape"},{name:"options.evaluate=_.templateSettings.evaluate",type:"RegExp",description:'The "evaluate" delimiter.',optional:!0,defaultValue:"_.templateSettings.evaluate"},{name:"options.imports=_.templateSettings.imports",type:"Object",description:"An object to import into the template as free variables.",optional:!0,defaultValue:"_.templateSettings.imports"},{name:"options.interpolate=_.templateSettings.interpolate",type:"RegExp",description:'The "interpolate" delimiter.',optional:!0,defaultValue:"_.templateSettings.interpolate"},{name:"options.sourceURL='lodash.templateSources[n]'",type:"string",description:"The sourceURL of the compiled template.",optional:!0,defaultValue:"'lodash.templateSources[n]'"},{name:"options.variable='obj'",type:"string",description:"The data object variable name.",optional:!0,defaultValue:"'obj'"}],returns:{type:"Function",description:"Returns the compiled template function."}},{name:"templateSettings",category:"Properties",description:`(Object): By default, the template delimiters used by lodash are like those in
embedded Ruby *(ERB)* as well as ES2015 template strings. Change the
following template settings to use alternative delimiters.`,examples:[],params:[]},{name:"throttle",category:"Function",description:"Creates a throttled function that only invokes `func` at most once per\nevery `wait` milliseconds. The throttled function comes with a `cancel`\nmethod to cancel delayed `func` invocations and a `flush` method to\nimmediately invoke them. Provide `options` to indicate whether `func`\nshould be invoked on the leading and/or trailing edge of the `wait`\ntimeout. The `func` is invoked with the last arguments provided to the\nthrottled function. Subsequent calls to the throttled function return the\nresult of the last `func` invocation.\n<br>\n<br>\n**Note:** If `leading` and `trailing` options are `true`, `func` is\ninvoked on the trailing edge of the timeout only if the throttled function\nis invoked more than once during the `wait` timeout.\n<br>\n<br>\nIf `wait` is `0` and `leading` is `false`, `func` invocation is deferred\nuntil to the next tick, similar to `setTimeout` with a timeout of `0`.\n<br>\n<br>\nSee [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\nfor details over the differences between `throttle` and `debounce`.",since:"0.1.0",examples:[`// Avoid excessively updating the position while scrolling.
jQuery(window).on('scroll', throttle(updatePosition, 100));

// Invoke \`renewToken\` when the click event is fired, but not more than once every 5 minutes.
var throttled = throttle(renewToken, 300000, { 'trailing': false });
jQuery(element).on('click', throttled);

// Cancel the trailing throttled invocation.
jQuery(window).on('popstate', throttled.cancel);`],params:[{name:"func",type:"Function",description:"The function to throttle.",optional:!1},{name:"wait=0",type:"number",description:"The number of milliseconds to throttle invocations to.",optional:!0,defaultValue:"0"},{name:"options={}",type:"Object",description:"The options object.",optional:!0,defaultValue:"{}"},{name:"options.leading=true",type:"boolean",description:"Specify invoking on the leading edge of the timeout.",optional:!0,defaultValue:"true"},{name:"options.trailing=true",type:"boolean",description:"Specify invoking on the trailing edge of the timeout.",optional:!0,defaultValue:"true"}],returns:{type:"Function",description:"Returns the new throttled function."}},{name:"thru",category:"Seq",description:'This method is like `tap` except that it returns the result of `interceptor`.\nThe purpose of this method is to "pass thru" values replacing intermediate\nresults in a method chain sequence.',since:"3.0.0",examples:[`_('  abc  ')
 .chain()
 .trim()
 .thru(function(value) {
   return [value];
 })
 .value();
// => ['abc']`],params:[{name:"value",type:"*",description:"The value to provide to `interceptor`.",optional:!1},{name:"interceptor",type:"Function",description:"The function to invoke.",optional:!1}],returns:{type:"*",description:"Returns the result of `interceptor`."}},{name:"times",category:"Util",description:"Invokes the iteratee `n` times, returning an array of the results of\neach invocation. The iteratee is invoked with one argument; *(index)*.",since:"0.1.0",examples:[`times(3, String);
// => ['0', '1', '2']

 times(4, constant(0));
// => [0, 0, 0, 0]`],params:[{name:"n",type:"number",description:"The number of times to invoke `iteratee`.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Array",description:"Returns the array of results."}},{name:"toArray",category:"Lang",description:"Converts `value` to an array.",since:"0.1.0",examples:[`toArray({ 'a': 1, 'b': 2 });
// => [1, 2]

toArray('abc');
// => ['a', 'b', 'c']

toArray(1);
// => []

toArray(null);
// => []`],params:[{name:"value",type:"*",description:"The value to convert.",optional:!1}],returns:{type:"Array",description:"Returns the converted array."}},{name:"toFinite",category:"Lang",description:"Converts `value` to a finite number.",since:"4.12.0",examples:[`toFinite(3.2);
// => 3.2

toFinite(Number.MIN_VALUE);
// => 5e-324

toFinite(Infinity);
// => 1.7976931348623157e+308

toFinite('3.2');
// => 3.2`],params:[{name:"value",type:"*",description:"The value to convert.",optional:!1}],returns:{type:"number",description:"Returns the converted number."}},{name:"toInteger",category:"Lang",description:"Converts `value` to an integer.\n<br>\n<br>\n**Note:** This method is loosely based on\n[`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).",since:"4.0.0",examples:[`toInteger(3.2);
// => 3

toInteger(Number.MIN_VALUE);
// => 0

toInteger(Infinity);
// => 1.7976931348623157e+308

toInteger('3.2');
// => 3`],params:[{name:"value",type:"*",description:"The value to convert.",optional:!1}],returns:{type:"number",description:"Returns the converted integer."}},{name:"toLength",category:"Lang",description:`Converts \`value\` to an integer suitable for use as the length of an
array-like object.
<br>
<br>
**Note:** This method is based on
[\`ToLength\`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).`,since:"4.0.0",examples:[`toLength(3.2);
// => 3

toLength(Number.MIN_VALUE);
// => 0

toLength(Infinity);
// => 4294967295

toLength('3.2');
// => 3`],params:[{name:"value",type:"*",description:"The value to convert.",optional:!1}],returns:{type:"number",description:"Returns the converted integer."}},{name:"toLower",category:"String",description:"Converts `string`, as a whole, to lower case just like\n[String#toLowerCase](https://mdn.io/toLowerCase).",since:"4.0.0",examples:[`toLower('--Foo-Bar--');
// => '--foo-bar--'

toLower('fooBar');
// => 'foobar'

toLower('__FOO_BAR__');
// => '__foo_bar__'`],params:[{name:"string=''",type:"string",description:"The string to convert.",optional:!0,defaultValue:"''"}],returns:{type:"string",description:"Returns the lower cased string."}},{name:"toNumber",category:"Lang",description:"Converts `value` to a number.",since:"4.0.0",examples:[`toNumber(3.2);
// => 3.2

toNumber(Number.MIN_VALUE);
// => 5e-324

toNumber(Infinity);
// => Infinity

toNumber('3.2');
// => 3.2`],params:[{name:"value",type:"*",description:"The value to process.",optional:!1}],returns:{type:"number",description:"Returns the number."}},{name:"toPairs",category:"Object",description:"Creates an array of own enumerable string keyed-value pairs for `object`\nwhich can be consumed by `fromPairs`. If `object` is a map or set, its\nentries are returned.",since:"4.0.0",examples:[`function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

toPairs(new Foo);
// => [['a', 1], ['b', 2]] (iteration order is not guaranteed)`],params:[{name:"object",type:"Object",description:"The object to query.",optional:!1}],returns:{type:"Array",description:"Returns the key-value pairs."}},{name:"toPairsIn",category:"Object",description:"Creates an array of own and inherited enumerable string keyed-value pairs\nfor `object` which can be consumed by `fromPairs`. If `object` is a map\nor set, its entries are returned.",since:"4.0.0",examples:[`function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

toPairsIn(new Foo);
// => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)`],params:[{name:"object",type:"Object",description:"The object to query.",optional:!1}],returns:{type:"Array",description:"Returns the key-value pairs."}},{name:"toPath",category:"Util",description:"Converts `value` to a property path array.",since:"4.0.0",examples:[`toPath('a.b.c');
// => ['a', 'b', 'c']

toPath('a[0].b.c');
// => ['a', '0', 'b', 'c']`],params:[{name:"value",type:"*",description:"The value to convert.",optional:!1}],returns:{type:"Array",description:"Returns the new property path array."}},{name:"toPlainObject",category:"Lang",description:"Converts `value` to a plain object flattening inherited enumerable string\nkeyed properties of `value` to own properties of the plain object.",since:"3.0.0",examples:[`function Foo() {
  this.b = 2;
}

Foo.prototype.c = 3;

assign({ 'a': 1 }, new Foo);
// => { 'a': 1, 'b': 2 }

assign({ 'a': 1 }, toPlainObject(new Foo));
// => { 'a': 1, 'b': 2, 'c': 3 }`],params:[{name:"value",type:"*",description:"The value to convert.",optional:!1}],returns:{type:"Object",description:"Returns the converted plain object."}},{name:"toSafeInteger",category:"Lang",description:"Converts `value` to a safe integer. A safe integer can be compared and\nrepresented correctly.",since:"4.0.0",examples:[`toSafeInteger(3.2);
// => 3

toSafeInteger(Number.MIN_VALUE);
// => 0

toSafeInteger(Infinity);
// => 9007199254740991

toSafeInteger('3.2');
// => 3`],params:[{name:"value",type:"*",description:"The value to convert.",optional:!1}],returns:{type:"number",description:"Returns the converted integer."}},{name:"toString",category:"Lang",description:"Converts `value` to a string. An empty string is returned for `null`\nand `undefined` values. The sign of `-0` is preserved.",since:"4.0.0",examples:[`toString(null);
// => ''

toString(-0);
// => '-0'

toString([1, 2, 3]);
// => '1,2,3'`],params:[{name:"value",type:"*",description:"The value to convert.",optional:!1}],returns:{type:"string",description:"Returns the converted string."}},{name:"toUpper",category:"String",description:"Converts `string`, as a whole, to upper case just like\n[String#toUpperCase](https://mdn.io/toUpperCase).",since:"4.0.0",examples:[`toUpper('--foo-bar--');
// => '--FOO-BAR--'

toUpper('fooBar');
// => 'FOOBAR'

toUpper('__foo_bar__');
// => '__FOO_BAR__'`],params:[{name:"string=''",type:"string",description:"The string to convert.",optional:!0,defaultValue:"''"}],returns:{type:"string",description:"Returns the upper cased string."}},{name:"transform",category:"Object",description:"An alternative to `reduce`; this method transforms `object` to a new\n`accumulator` object which is the result of running each of its own\nenumerable string keyed properties thru `iteratee`, with each invocation\npotentially mutating the `accumulator` object. If `accumulator` is not\nprovided, a new object with the same `[[Prototype]]` will be used. The\niteratee is invoked with four arguments: *(accumulator, value, key, object)*.\nIteratee functions may exit iteration early by explicitly returning `false`.",since:"1.3.0",examples:[`transform([2, 3, 4], function(result, n) {
  result.push(n *= n);
  return n % 2 == 0;
}, []);
// => [4, 9]

transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
}, {});
// => { '1': ['a', 'c'], '2': ['b'] }`],params:[{name:"object",type:"Object",description:"The object to iterate over.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The function invoked per iteration.",optional:!0,defaultValue:"_.identity"},{name:"accumulator",type:"*",description:"The custom accumulator value.",optional:!0}],returns:{type:"*",description:"Returns the accumulated value."}},{name:"trim",category:"String",description:"Removes leading and trailing whitespace or specified characters from `string`.",since:"3.0.0",examples:[`trim('  abc  ');
// => 'abc'

trim('-_-abc-_-', '_-');
// => 'abc'

map(['  foo  ', '  bar  '], trim);
// => ['foo', 'bar']`],params:[{name:"string=''",type:"string",description:"The string to trim.",optional:!0,defaultValue:"''"},{name:"chars=whitespace",type:"string",description:"The characters to trim.",optional:!0,defaultValue:"whitespace"}],returns:{type:"string",description:"Returns the trimmed string."}},{name:"trimEnd",category:"String",description:"Removes trailing whitespace or specified characters from `string`.",since:"4.0.0",examples:[`trimEnd('  abc  ');
// => '  abc'

trimEnd('-_-abc-_-', '_-');
// => '-_-abc'`],params:[{name:"string=''",type:"string",description:"The string to trim.",optional:!0,defaultValue:"''"},{name:"chars=whitespace",type:"string",description:"The characters to trim.",optional:!0,defaultValue:"whitespace"}],returns:{type:"string",description:"Returns the trimmed string."}},{name:"trimStart",category:"String",description:"Removes leading whitespace or specified characters from `string`.",since:"4.0.0",examples:[`trimStart('  abc  ');
// => 'abc  '

trimStart('-_-abc-_-', '_-');
// => 'abc-_-'`],params:[{name:"string=''",type:"string",description:"The string to trim.",optional:!0,defaultValue:"''"},{name:"chars=whitespace",type:"string",description:"The characters to trim.",optional:!0,defaultValue:"whitespace"}],returns:{type:"string",description:"Returns the trimmed string."}},{name:"truncate",category:"String",description:`Truncates \`string\` if it's longer than the given maximum string length.
The last characters of the truncated string are replaced with the omission
string which defaults to "...".`,since:"4.0.0",examples:[`truncate('hi-diddly-ho there, neighborino');
// => 'hi-diddly-ho there, neighbo...'

truncate('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': ' '
});
// => 'hi-diddly-ho there,...'

truncate('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': /,? +/
});
// => 'hi-diddly-ho there...'

truncate('hi-diddly-ho there, neighborino', {
  'omission': ' [...]'
});
// => 'hi-diddly-ho there, neig [...]'`],params:[{name:"string=''",type:"string",description:"The string to truncate.",optional:!0,defaultValue:"''"},{name:"options={}",type:"Object",description:"The options object.",optional:!0,defaultValue:"{}"},{name:"options.length=30",type:"number",description:"The maximum string length.",optional:!0,defaultValue:"30"},{name:"options.omission='...'",type:"string",description:"The string to indicate text is omitted.",optional:!0,defaultValue:"'...'"},{name:"options.separator",type:"RegExp|string",description:"The separator pattern to truncate to.",optional:!0}],returns:{type:"string",description:"Returns the truncated string."}},{name:"unary",category:"Function",description:`Creates a function that accepts up to one argument, ignoring any
additional arguments.`,since:"4.0.0",examples:[`map(['6', '8', '10'], unary(parseInt));
// => [6, 8, 10]`],params:[{name:"func",type:"Function",description:"The function to cap arguments for.",optional:!1}],returns:{type:"Function",description:"Returns the new capped function."}},{name:"unescape",category:"String",description:"The inverse of `escape`; this method converts the HTML entities\n`&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to\ntheir corresponding characters.\n<br>\n<br>\n**Note:** No other HTML entities are unescaped. To unescape additional\nHTML entities use a third-party library like [_he_](https://mths.be/he).",since:"0.6.0",examples:[`unescape('fred, barney, &amp; pebbles');
// => 'fred, barney, & pebbles'`],params:[{name:"string=''",type:"string",description:"The string to unescape.",optional:!0,defaultValue:"''"}],returns:{type:"string",description:"Returns the unescaped string."}},{name:"union",category:"Array",description:"Creates an array of unique values, in order, from all given arrays using\n[`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\nfor equality comparisons.",since:"0.1.0",examples:[`union([2], [1, 2]);
// => [2, 1]`],params:[{name:"arrays",type:"...Array",description:"The arrays to inspect.",optional:!0}],returns:{type:"Array",description:"Returns the new array of combined values."}},{name:"unionBy",category:"Array",description:"This method is like `union` except that it accepts `iteratee` which is\ninvoked for each element of each `arrays` to generate the criterion by\nwhich uniqueness is computed. Result values are chosen from the first\narray in which the value occurs. The iteratee is invoked with one argument:<br>\n*(value)*.",since:"4.0.0",examples:[`unionBy([2.1], [1.2, 2.3], Math.floor);
// => [2.1, 1.2]

// The \`property\` iteratee shorthand.
unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]`],params:[{name:"arrays",type:"...Array",description:"The arrays to inspect.",optional:!0},{name:"iteratee=_.identity",type:"Function",description:"The iteratee invoked per element.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Array",description:"Returns the new array of combined values."}},{name:"unionWith",category:"Array",description:"This method is like `union` except that it accepts `comparator` which\nis invoked to compare elements of `arrays`. Result values are chosen from\nthe first array in which the value occurs. The comparator is invoked\nwith two arguments: *(arrVal, othVal)*.",since:"4.0.0",examples:[`var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

unionWith(objects, others, isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]`],params:[{name:"arrays",type:"...Array",description:"The arrays to inspect.",optional:!0},{name:"comparator",type:"Function",description:"The comparator invoked per element.",optional:!0}],returns:{type:"Array",description:"Returns the new array of combined values."}},{name:"uniq",category:"Array",description:`Creates a duplicate-free version of an array, using
[\`SameValueZero\`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
for equality comparisons, in which only the first occurrence of each element
is kept. The order of result values is determined by the order they occur
in the array.`,since:"0.1.0",examples:[`uniq([2, 1, 2]);
// => [2, 1]`],params:[{name:"array",type:"Array",description:"The array to inspect.",optional:!1}],returns:{type:"Array",description:"Returns the new duplicate free array."}},{name:"uniqBy",category:"Array",description:"This method is like `uniq` except that it accepts `iteratee` which is\ninvoked for each element in `array` to generate the criterion by which\nuniqueness is computed. The order of result values is determined by the\norder they occur in the array. The iteratee is invoked with one argument:<br>\n*(value)*.",since:"4.0.0",examples:[`uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]

// The \`property\` iteratee shorthand.
uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]`],params:[{name:"array",type:"Array",description:"The array to inspect.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The iteratee invoked per element.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Array",description:"Returns the new duplicate free array."}},{name:"uniqueId",category:"Util",description:"Generates a unique ID. If `prefix` is given, the ID is appended to it.",since:"0.1.0",examples:[`uniqueId('contact_');
// => 'contact_104'

uniqueId();
// => '105'`],params:[{name:"prefix=''",type:"string",description:"The value to prefix the ID with.",optional:!0,defaultValue:"''"}],returns:{type:"string",description:"Returns the unique ID."}},{name:"uniqWith",category:"Array",description:"This method is like `uniq` except that it accepts `comparator` which\nis invoked to compare elements of `array`. The order of result values is\ndetermined by the order they occur in the array.The comparator is invoked\nwith two arguments: *(arrVal, othVal)*.",since:"4.0.0",examples:[`var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];

uniqWith(objects, isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]`],params:[{name:"array",type:"Array",description:"The array to inspect.",optional:!1},{name:"comparator",type:"Function",description:"The comparator invoked per element.",optional:!0}],returns:{type:"Array",description:"Returns the new duplicate free array."}},{name:"unset",category:"Object",description:"Removes the property at `path` of `object`.\n<br>\n<br>\n**Note:** This method mutates `object`.",since:"4.0.0",examples:[`var object = { 'a': [{ 'b': { 'c': 7 } }] };
unset(object, 'a[0].b.c');
// => true

console.log(object);
// => { 'a': [{ 'b': {} }] };

unset(object, ['a', '0', 'b', 'c']);
// => true

console.log(object);
// => { 'a': [{ 'b': {} }] };`],params:[{name:"object",type:"Object",description:"The object to modify.",optional:!1},{name:"path",type:"Array|string",description:"The path of the property to unset.",optional:!1}],returns:{type:"boolean",description:"Returns `true` if the property is deleted, else `false`."}},{name:"unzip",category:"Array",description:"This method is like `zip` except that it accepts an array of grouped\nelements and creates an array regrouping the elements to their pre-zip\nconfiguration.",since:"1.2.0",examples:[`var zipped = zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]

unzip(zipped);
// => [['a', 'b'], [1, 2], [true, false]]`],params:[{name:"array",type:"Array",description:"The array of grouped elements to process.",optional:!1}],returns:{type:"Array",description:"Returns the new array of regrouped elements."}},{name:"unzipWith",category:"Array",description:"This method is like `unzip` except that it accepts `iteratee` to specify\nhow regrouped values should be combined. The iteratee is invoked with the\nelements of each group: *(...group)*.",since:"3.8.0",examples:[`var zipped = zip([1, 2], [10, 20], [100, 200]);
// => [[1, 10, 100], [2, 20, 200]]

unzipWith(zipped, add);
// => [3, 30, 300]`],params:[{name:"array",type:"Array",description:"The array of grouped elements to process.",optional:!1},{name:"iteratee=_.identity",type:"Function",description:"The function to combine regrouped values.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Array",description:"Returns the new array of regrouped elements."}},{name:"update",category:"Object",description:"This method is like `set` except that accepts `updater` to produce the\nvalue to set. Use `updateWith` to customize `path` creation. The `updater`\nis invoked with one argument: *(value)*.\n<br>\n<br>\n**Note:** This method mutates `object`.",since:"4.6.0",examples:[`var object = { 'a': [{ 'b': { 'c': 3 } }] };

update(object, 'a[0].b.c', function(n) { return n * n; });
console.log(object.a[0].b.c);
// => 9

update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
console.log(object.x[0].y.z);
// => 0`],params:[{name:"object",type:"Object",description:"The object to modify.",optional:!1},{name:"path",type:"Array|string",description:"The path of the property to set.",optional:!1},{name:"updater",type:"Function",description:"The function to produce the updated value.",optional:!1}],returns:{type:"Object",description:"Returns `object`."}},{name:"updateWith",category:"Object",description:"This method is like `update` except that it accepts `customizer` which is\ninvoked to produce the objects of `path`.  If `customizer` returns `undefined`\npath creation is handled by the method instead. The `customizer` is invoked\nwith three arguments: *(nsValue, key, nsObject)*.\n<br>\n<br>\n**Note:** This method mutates `object`.",since:"4.6.0",examples:[`var object = {};

updateWith(object, '[0][1]', constant('a'), Object);
// => { '0': { '1': 'a' } }`],params:[{name:"object",type:"Object",description:"The object to modify.",optional:!1},{name:"path",type:"Array|string",description:"The path of the property to set.",optional:!1},{name:"updater",type:"Function",description:"The function to produce the updated value.",optional:!1},{name:"customizer",type:"Function",description:"The function to customize assigned values.",optional:!0}],returns:{type:"Object",description:"Returns `object`."}},{name:"upperCase",category:"String",description:"Converts `string`, as space separated words, to upper case.",since:"4.0.0",examples:[`upperCase('--foo-bar');
// => 'FOO BAR'

upperCase('fooBar');
// => 'FOO BAR'

upperCase('__foo_bar__');
// => 'FOO BAR'`],params:[{name:"string=''",type:"string",description:"The string to convert.",optional:!0,defaultValue:"''"}],returns:{type:"string",description:"Returns the upper cased string."}},{name:"upperFirst",category:"String",description:"Converts the first character of `string` to upper case.",since:"4.0.0",examples:[`upperFirst('fred');
// => 'Fred'

upperFirst('FRED');
// => 'FRED'`],params:[{name:"string=''",type:"string",description:"The string to convert.",optional:!0,defaultValue:"''"}],returns:{type:"string",description:"Returns the converted string."}},{name:"values",category:"Object",description:`Creates an array of the own enumerable string keyed property values of \`object\`.
<br>
<br>
**Note:** Non-object values are coerced to objects.`,since:"0.1.0",examples:[`function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

values(new Foo);
// => [1, 2] (iteration order is not guaranteed)

values('hi');
// => ['h', 'i']`],params:[{name:"object",type:"Object",description:"The object to query.",optional:!1}],returns:{type:"Array",description:"Returns the array of property values."}},{name:"valuesIn",category:"Object",description:`Creates an array of the own and inherited enumerable string keyed property
values of \`object\`.
<br>
<br>
**Note:** Non-object values are coerced to objects.`,since:"3.0.0",examples:[`function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

valuesIn(new Foo);
// => [1, 2, 3] (iteration order is not guaranteed)`],params:[{name:"object",type:"Object",description:"The object to query.",optional:!1}],returns:{type:"Array",description:"Returns the array of property values."}},{name:"variable",category:"Properties",description:"(string): Used to reference the data object in the template text.",examples:[],params:[]},{name:"VERSION",category:"Properties",description:"(string): The semantic version number.",examples:[],params:[]},{name:"without",category:"Array",description:`Creates an array excluding all given values using
[\`SameValueZero\`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
for equality comparisons.
<br>
<br>
**Note:** Unlike \`pull\`, this method returns a new array.`,since:"0.1.0",examples:[`without([2, 1, 2, 3], 1, 2);
// => [3]`],params:[{name:"array",type:"Array",description:"The array to inspect.",optional:!1},{name:"values",type:"...*",description:"The values to exclude.",optional:!0}],returns:{type:"Array",description:"Returns the new array of filtered values."}},{name:"words",category:"String",description:"Splits `string` into an array of its words.",since:"3.0.0",examples:[`words('fred, barney, & pebbles');
// => ['fred', 'barney', 'pebbles']

words('fred, barney, & pebbles', /[^, ]+/g);
// => ['fred', 'barney', '&', 'pebbles']`],params:[{name:"string=''",type:"string",description:"The string to inspect.",optional:!0,defaultValue:"''"},{name:"pattern",type:"RegExp|string",description:"The pattern to match words.",optional:!0}],returns:{type:"Array",description:"Returns the words of `string`."}},{name:"wrap",category:"Function",description:"Creates a function that provides `value` to `wrapper` as its first\nargument. Any additional arguments provided to the function are appended\nto those provided to the `wrapper`. The wrapper is invoked with the `this`\nbinding of the created function.",since:"0.1.0",examples:[`var p = wrap(escape, function(func, text) {
  return '<p>' + func(text) + '</p>';
});

p('fred, barney, & pebbles');
// => '<p>fred, barney, &amp; pebbles</p>'`],params:[{name:"value",type:"*",description:"The value to wrap.",optional:!1},{name:"wrapper=identity",type:"Function",description:"The wrapper function.",optional:!0,defaultValue:"identity"}],returns:{type:"Function",description:"Returns the new function."}},{name:"xor",category:"Array",description:`Creates an array of unique values that is the
[symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
of the given arrays. The order of result values is determined by the order
they occur in the arrays.`,since:"2.4.0",examples:[`xor([2, 1], [2, 3]);
// => [1, 3]`],params:[{name:"arrays",type:"...Array",description:"The arrays to inspect.",optional:!0}],returns:{type:"Array",description:"Returns the new array of filtered values."}},{name:"xorBy",category:"Array",description:"This method is like `xor` except that it accepts `iteratee` which is\ninvoked for each element of each `arrays` to generate the criterion by\nwhich by which they're compared. The order of result values is determined\nby the order they occur in the arrays. The iteratee is invoked with one\nargument: *(value)*.",since:"4.0.0",examples:[`xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2, 3.4]

// The \`property\` iteratee shorthand.
xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 2 }]`],params:[{name:"arrays",type:"...Array",description:"The arrays to inspect.",optional:!0},{name:"iteratee=_.identity",type:"Function",description:"The iteratee invoked per element.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Array",description:"Returns the new array of filtered values."}},{name:"xorWith",category:"Array",description:"This method is like `xor` except that it accepts `comparator` which is\ninvoked to compare elements of `arrays`. The order of result values is\ndetermined by the order they occur in the arrays. The comparator is invoked\nwith two arguments: *(arrVal, othVal)*.",since:"4.0.0",examples:[`var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

xorWith(objects, others, isEqual);
// => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]`],params:[{name:"arrays",type:"...Array",description:"The arrays to inspect.",optional:!0},{name:"comparator",type:"Function",description:"The comparator invoked per element.",optional:!0}],returns:{type:"Array",description:"Returns the new array of filtered values."}},{name:"zip",category:"Array",description:`Creates an array of grouped elements, the first of which contains the
first elements of the given arrays, the second of which contains the
second elements of the given arrays, and so on.`,since:"0.1.0",examples:[`zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]`],params:[{name:"arrays",type:"...Array",description:"The arrays to process.",optional:!0}],returns:{type:"Array",description:"Returns the new array of grouped elements."}},{name:"zipObject",category:"Array",description:"This method is like `fromPairs` except that it accepts two arrays,\none of property identifiers and one of corresponding values.",since:"0.4.0",examples:[`zipObject(['a', 'b'], [1, 2]);
// => { 'a': 1, 'b': 2 }`],params:[{name:"props=[]",type:"Array",description:"The property identifiers.",optional:!0,defaultValue:"[]"},{name:"values=[]",type:"Array",description:"The property values.",optional:!0,defaultValue:"[]"}],returns:{type:"Object",description:"Returns the new object."}},{name:"zipObjectDeep",category:"Array",description:"This method is like `zipObject` except that it supports property paths.",since:"4.1.0",examples:[`zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }`],params:[{name:"props=[]",type:"Array",description:"The property identifiers.",optional:!0,defaultValue:"[]"},{name:"values=[]",type:"Array",description:"The property values.",optional:!0,defaultValue:"[]"}],returns:{type:"Object",description:"Returns the new object."}},{name:"zipWith",category:"Array",description:"This method is like `zip` except that it accepts `iteratee` to specify\nhow grouped values should be combined. The iteratee is invoked with the\nelements of each group: *(...group)*.",since:"3.8.0",examples:[`zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
  return a + b + c;
});
// => [111, 222]`],params:[{name:"arrays",type:"...Array",description:"The arrays to process.",optional:!0},{name:"iteratee=_.identity",type:"Function",description:"The function to combine grouped values.",optional:!0,defaultValue:"_.identity"}],returns:{type:"Array",description:"Returns the new array of grouped elements."}}];var we=require("react/jsx-runtime");function ls(){let s=(0,us.groupBy)(cs,"category");return(0,we.jsx)(de.List,{isShowingDetail:!0,searchBarPlaceholder:"Search functions...",children:Object.entries(s).map(([M,te])=>(0,we.jsx)(de.List.Section,{title:M,children:te.map(H=>(0,we.jsx)(de.List.Item,{title:H.name,detail:(0,we.jsx)(de.List.Item.Detail,{markdown:`# ${H.name}

${H.description}

### Arguments

${H.params.map(q=>`- **${q.name} *(${q.type})***: ${q.description}`).join(`
`)}

${H.returns?`### Returns

- ***(${H.returns.type})***: ${H.returns.description}

`:""}### Example

\`\`\`js
${H.examples.join(`

`)}
\`\`\``}),actions:(0,we.jsxs)(de.ActionPanel,{children:[(0,we.jsx)(de.Action.OpenInBrowser,{url:`https://lodash.com/docs/#${H.name}`}),(0,we.jsxs)(de.ActionPanel.Section,{children:[(0,we.jsx)(de.Action.CopyToClipboard,{title:"Copy Name",content:H.name}),(0,we.jsx)(de.Action.CopyToClipboard,{title:"Copy URL",content:`https://lodash.com/docs/#${H.name}`}),(0,we.jsx)(de.Action.CopyToClipboard,{title:"Copy Import",content:`import { ${H.name} } from "lodash"`})]})]})},H.name))},M))})}
/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
