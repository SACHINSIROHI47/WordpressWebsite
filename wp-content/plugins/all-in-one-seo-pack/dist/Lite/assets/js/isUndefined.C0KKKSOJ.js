import{a as H,c as D,g as M}from"./_getTag.2pdlGzJ-.js";import{S as w,d as R,g as q,M as K,z as J,U as I,e as b,A as E,f as Q,l as U}from"./helpers.pkmhnyB1.js";var $=w?w.isConcatSpreadable:void 0;function X(n){return R(n)||q(n)||!!($&&n&&n[$])}function m(n,e,a,f,i){var r=-1,t=n.length;for(a||(a=X),i||(i=[]);++r<t;){var s=n[r];e>0&&a(s)?e>1?m(s,e-1,a,f,i):H(i,s):i[i.length]=s}return i}function Rn(n){var e=n==null?0:n.length;return e?m(n,1):[]}var Y="__lodash_hash_undefined__";function Z(n){return this.__data__.set(n,Y),this}function h(n){return this.__data__.has(n)}function L(n){var e=-1,a=n==null?0:n.length;for(this.__data__=new K;++e<a;)this.add(n[e])}L.prototype.add=L.prototype.push=Z;L.prototype.has=h;function W(n,e){for(var a=-1,f=n==null?0:n.length;++a<f;)if(e(n[a],a,n))return!0;return!1}function z(n,e){return n.has(e)}var j=1,V=2;function F(n,e,a,f,i,r){var t=a&j,s=n.length,l=e.length;if(s!=l&&!(t&&l>s))return!1;var g=r.get(n),A=r.get(e);if(g&&A)return g==e&&A==n;var _=-1,u=!0,v=a&V?new L:void 0;for(r.set(n,e),r.set(e,n);++_<s;){var d=n[_],p=e[_];if(f)var y=t?f(p,d,_,e,n,r):f(d,p,_,n,e,r);if(y!==void 0){if(y)continue;u=!1;break}if(v){if(!W(e,function(T,O){if(!z(v,O)&&(d===T||i(d,T,a,f,r)))return v.push(O)})){u=!1;break}}else if(!(d===p||i(d,p,a,f,r))){u=!1;break}}return r.delete(n),r.delete(e),u}function k(n){var e=-1,a=Array(n.size);return n.forEach(function(f,i){a[++e]=[i,f]}),a}function nn(n){var e=-1,a=Array(n.size);return n.forEach(function(f){a[++e]=f}),a}var en=1,rn=2,an="[object Boolean]",fn="[object Date]",sn="[object Error]",tn="[object Map]",un="[object Number]",ln="[object RegExp]",gn="[object Set]",_n="[object String]",dn="[object Symbol]",pn="[object ArrayBuffer]",An="[object DataView]",C=w?w.prototype:void 0,S=C?C.valueOf:void 0;function vn(n,e,a,f,i,r,t){switch(a){case An:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case pn:return!(n.byteLength!=e.byteLength||!r(new I(n),new I(e)));case an:case fn:case un:return J(+n,+e);case sn:return n.name==e.name&&n.message==e.message;case ln:case _n:return n==e+"";case tn:var s=k;case gn:var l=f&en;if(s||(s=nn),n.size!=e.size&&!l)return!1;var g=t.get(n);if(g)return g==e;f|=rn,t.set(n,e);var A=F(s(n),s(e),f,i,r,t);return t.delete(n),A;case dn:if(S)return S.call(n)==S.call(e)}return!1}var yn=1,Tn=Object.prototype,On=Tn.hasOwnProperty;function Pn(n,e,a,f,i,r){var t=a&yn,s=D(n),l=s.length,g=D(e),A=g.length;if(l!=A&&!t)return!1;for(var _=l;_--;){var u=s[_];if(!(t?u in e:On.call(e,u)))return!1}var v=r.get(n),d=r.get(e);if(v&&d)return v==e&&d==n;var p=!0;r.set(n,e),r.set(e,n);for(var y=t;++_<l;){u=s[_];var T=n[u],O=e[u];if(f)var x=t?f(O,T,u,e,n,r):f(T,O,u,n,e,r);if(!(x===void 0?T===O||i(T,O,a,f,r):x)){p=!1;break}y||(y=u=="constructor")}if(p&&!y){var P=n.constructor,c=e.constructor;P!=c&&"constructor"in n&&"constructor"in e&&!(typeof P=="function"&&P instanceof P&&typeof c=="function"&&c instanceof c)&&(p=!1)}return r.delete(n),r.delete(e),p}var cn=1,G="[object Arguments]",B="[object Array]",o="[object Object]",on=Object.prototype,N=on.hasOwnProperty;function wn(n,e,a,f,i,r){var t=R(n),s=R(e),l=t?B:M(n),g=s?B:M(e);l=l==G?o:l,g=g==G?o:g;var A=l==o,_=g==o,u=l==g;if(u&&b(n)){if(!b(e))return!1;t=!0,A=!1}if(u&&!A)return r||(r=new E),t||Q(n)?F(n,e,a,f,i,r):vn(n,e,l,a,f,i,r);if(!(a&cn)){var v=A&&N.call(n,"__wrapped__"),d=_&&N.call(e,"__wrapped__");if(v||d){var p=v?n.value():n,y=d?e.value():e;return r||(r=new E),i(p,y,a,f,r)}}return u?(r||(r=new E),Pn(n,e,a,f,i,r)):!1}function Ln(n,e,a,f,i){return n===e?!0:n==null||e==null||!U(n)&&!U(e)?n!==n&&e!==e:wn(n,e,a,f,Ln,i)}function xn(n){return n===void 0}export{L as S,m as a,Ln as b,z as c,Rn as f,xn as i,nn as s};
