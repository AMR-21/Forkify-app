function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},a=t.parcelRequire3a11;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequire3a11=a),a.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("27Lyk").register(JSON.parse('{"f9fpV":"index.3bb3d916.js","eyyUD":"icons.c14567a0.svg"}'));var o,s,c={},l=function(e){return e&&e.Math==Math&&e};c=l("object"==typeof globalThis&&globalThis)||l("object"==typeof window&&window)||l("object"==typeof self&&self)||l("object"==typeof t&&t)||function(){return this}()||Function("return this")();var u,d;u=!(d=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,f={};p=!d((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h,v=Function.prototype.call;f=p?v.bind(v):function(){return v.apply(v,arguments)};var g={}.propertyIsEnumerable,m=Object.getOwnPropertyDescriptor,y=m&&!g.call({1:2},1);h=y?function(e){var t=m(this,e);return!!t&&t.enumerable}:g;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,E={},k={},S=Function.prototype,O=S.bind,T=S.call,x=p&&O.bind(T,T),N=(k=p?function(e){return e&&x(e)}:function(e){return e&&function(){return T.apply(e,arguments)}})({}.toString),L=k("".slice);w=function(e){return L(N(e),8,-1)};var $=Object,j=k("".split);E=d((function(){return!$("z").propertyIsEnumerable(0)}))?function(e){return"String"==w(e)?j(e,""):$(e)}:$;var P,H;H=function(e){return null==e};var I=TypeError;P=function(e){if(H(e))throw I("Can't call method on "+e);return e},_=function(e){return E(P(e))};var A,M,C,R={},q={},U="object"==typeof document&&document.all,F=(C={all:U,IS_HTMLDDA:void 0===U&&void 0!==U}).all;q=C.IS_HTMLDDA?function(e){return"function"==typeof e||e===F}:function(e){return"function"==typeof e};var D=C.all;R=C.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:q(e)||e===D}:function(e){return"object"==typeof e?null!==e:q(e)};var G,V={},z=function(e){return q(e)?e:void 0};G=function(e,t){return arguments.length<2?z(c[e]):c[e]&&c[e][t]};var B={};B=k({}.isPrototypeOf);var Q,W,Y,J={};J=G("navigator","userAgent")||"";var X,K,Z=c.process,ee=c.Deno,te=Z&&Z.versions||ee&&ee.version,ne=te&&te.v8;ne&&(K=(X=ne.split("."))[0]>0&&X[0]<4?1:+(X[0]+X[1])),!K&&J&&(!(X=J.match(/Edge\/(\d+)/))||X[1]>=74)&&(X=J.match(/Chrome\/(\d+)/))&&(K=+X[1]),Y=K,W=!!Object.getOwnPropertySymbols&&!d((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Y&&Y<41})),Q=W&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var re=Object;V=Q?function(e){return"symbol"==typeof e}:function(e){var t=G("Symbol");return q(t)&&B(t.prototype,re(e))};var ie,ae,oe,se=String;oe=function(e){try{return se(e)}catch(e){return"Object"}};var ce=TypeError;ae=function(e){if(q(e))return e;throw ce(oe(e)+" is not a function")},ie=function(e,t){var n=e[t];return H(n)?void 0:ae(n)};var le,ue=TypeError;le=function(e,t){var n,r;if("string"===t&&q(n=e.toString)&&!R(r=f(n,e)))return r;if(q(n=e.valueOf)&&!R(r=f(n,e)))return r;if("string"!==t&&q(n=e.toString)&&!R(r=f(n,e)))return r;throw ue("Can't convert object to primitive value")};var de;var pe,fe={},he=Object.defineProperty;pe=function(e,t){try{he(c,e,{value:t,configurable:!0,writable:!0})}catch(n){c[e]=t}return t};var ve=c["__core-js_shared__"]||pe("__core-js_shared__",{});fe=ve,(de=function(e,t){return fe[e]||(fe[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.25.3",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.3/LICENSE",source:"https://github.com/zloirock/core-js"});var ge,me={},ye=Object;ge=function(e){return ye(P(e))};var be=k({}.hasOwnProperty);me=Object.hasOwn||function(e,t){return be(ge(e),t)};var _e,we=0,Ee=Math.random(),ke=k(1..toString);_e=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ke(++we+Ee,36)};var Se=de("wks"),Oe=c.Symbol,Te=Oe&&Oe.for,xe=Q?Oe:Oe&&Oe.withoutSetter||_e,Ne=TypeError,Le=function(e){if(!me(Se,e)||!W&&"string"!=typeof Se[e]){var t="Symbol."+e;W&&me(Oe,e)?Se[e]=Oe[e]:Se[e]=Q&&Te?Te(t):xe(t)}return Se[e]}("toPrimitive");M=function(e,t){if(!R(e)||V(e))return e;var n,r=ie(e,Le);if(r){if(void 0===t&&(t="default"),n=f(r,e,t),!R(n)||V(n))return n;throw Ne("Can't convert object to primitive value")}return void 0===t&&(t="number"),le(e,t)},A=function(e){var t=M(e,"string");return V(t)?t:t+""};var $e,je,Pe=c.document,He=R(Pe)&&R(Pe.createElement);je=function(e){return He?Pe.createElement(e):{}},$e=!u&&!d((function(){return 7!=Object.defineProperty(je("div"),"a",{get:function(){return 7}}).a}));var Ie,Ae,Me=Object.getOwnPropertyDescriptor,Ce=s=u?Me:function(e,t){if(e=_(e),t=A(t),$e)try{return Me(e,t)}catch(e){}if(me(e,t))return b(!f(h,e,t),e[t])},Re={};Ae=u&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var qe,Ue=String,Fe=TypeError;qe=function(e){if(R(e))return e;throw Fe(Ue(e)+" is not an object")};var De=TypeError,Ge=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor;Ie=u?Ae?function(e,t,n){if(qe(e),t=A(t),qe(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=Ve(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Ge(e,t,n)}:Ge:function(e,t,n){if(qe(e),t=A(t),qe(n),$e)try{return Ge(e,t,n)}catch(e){}if("get"in n||"set"in n)throw De("Accessors not supported");return"value"in n&&(e[t]=n.value),e},Re=u?function(e,t,n){return Ie(e,t,b(1,n))}:function(e,t,n){return e[t]=n,e};var ze,Be,Qe=Function.prototype,We=u&&Object.getOwnPropertyDescriptor,Ye=me(Qe,"name"),Je={EXISTS:Ye,PROPER:Ye&&"something"===function(){}.name,CONFIGURABLE:Ye&&(!u||u&&We(Qe,"name").configurable)}.CONFIGURABLE,Xe={},Ke=k(Function.toString);q(fe.inspectSource)||(fe.inspectSource=function(e){return Ke(e)}),Xe=fe.inspectSource;var Ze,et,tt=c.WeakMap;et=q(tt)&&/native code/.test(String(tt));var nt,rt=de("keys");nt=function(e){return rt[e]||(rt[e]=_e(e))};var it={};it={};var at,ot,st,ct=c.TypeError,lt=c.WeakMap;if(et||fe.state){var ut=fe.state||(fe.state=new lt),dt=k(ut.get),pt=k(ut.has),ft=k(ut.set);at=function(e,t){if(pt(ut,e))throw ct("Object already initialized");return t.facade=e,ft(ut,e,t),t},ot=function(e){return dt(ut,e)||{}},st=function(e){return pt(ut,e)}}else{var ht=nt("state");it[ht]=!0,at=function(e,t){if(me(e,ht))throw ct("Object already initialized");return t.facade=e,Re(e,ht,t),t},ot=function(e){return me(e,ht)?e[ht]:{}},st=function(e){return me(e,ht)}}var vt=(Ze={set:at,get:ot,has:st,enforce:function(e){return st(e)?ot(e):at(e,{})},getterFor:function(e){return function(t){var n;if(!R(t)||(n=ot(t)).type!==e)throw ct("Incompatible receiver, "+e+" required");return n}}}).enforce,gt=Ze.get,mt=Object.defineProperty,yt=u&&!d((function(){return 8!==mt((function(){}),"length",{value:8}).length})),bt=String(String).split("String"),_t=Be=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!me(e,"name")||Je&&e.name!==t)&&(u?mt(e,"name",{value:t,configurable:!0}):e.name=t),yt&&n&&me(n,"arity")&&e.length!==n.arity&&mt(e,"length",{value:n.arity});try{n&&me(n,"constructor")&&n.constructor?u&&mt(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=vt(e);return me(r,"source")||(r.source=bt.join("string"==typeof t?t:"")),e};Function.prototype.toString=_t((function(){return q(this)&&gt(this).source||Xe(this)}),"toString"),ze=function(e,t,n,r){r||(r={});var i=r.enumerable,a=void 0!==r.name?r.name:t;if(q(n)&&Be(n,a,r),r.global)i?e[t]=n:pe(t,n);else{try{r.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=n:Ie(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var wt,Et,kt,St,Ot,Tt={},xt={},Nt=Math.ceil,Lt=Math.floor;xt=Math.trunc||function(e){var t=+e;return(t>0?Lt:Nt)(t)},Ot=function(e){var t=+e;return t!=t||0===t?0:xt(t)};var $t=Math.max,jt=Math.min;St=function(e,t){var n=Ot(e);return n<0?$t(n+t,0):jt(n,t)};var Pt,Ht,It=Math.min;Ht=function(e){return e>0?It(Ot(e),9007199254740991):0},Pt=function(e){return Ht(e.length)};var At=function(e){return function(t,n,r){var i,a=_(t),o=Pt(a),s=St(r,o);if(e&&n!=n){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===n)return e||s||0;return!e&&-1}},Mt={includes:At(!0),indexOf:At(!1)}.indexOf,Ct=k([].push);kt=function(e,t){var n,r=_(e),i=0,a=[];for(n in r)!me(it,n)&&me(r,n)&&Ct(a,n);for(;t.length>i;)me(r,n=t[i++])&&(~Mt(a,n)||Ct(a,n));return a};var Rt,qt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Et=Object.getOwnPropertyNames||function(e){return kt(e,qt)},Rt=Object.getOwnPropertySymbols;var Ut=k([].concat);Tt=G("Reflect","ownKeys")||function(e){var t=Et(qe(e));return Rt?Ut(t,Rt(e)):t},wt=function(e,t,n){for(var r=Tt(t),i=Ie,a=s,o=0;o<r.length;o++){var c=r[o];me(e,c)||n&&me(n,c)||i(e,c,a(t,c))}};var Ft={},Dt=/#|\.prototype\./,Gt=function(e,t){var n=zt[Vt(e)];return n==Qt||n!=Bt&&(q(t)?d(t):!!t)},Vt=Gt.normalize=function(e){return String(e).replace(Dt,".").toLowerCase()},zt=Gt.data={},Bt=Gt.NATIVE="N",Qt=Gt.POLYFILL="P";Ft=Gt,o=function(e,t){var n,r,i,a,o,s=e.target,l=e.global,u=e.stat;if(n=l?c:u?c[s]||pe(s,{}):(c[s]||{}).prototype)for(r in t){if(a=t[r],i=e.dontCallGetSet?(o=Ce(n,r))&&o.value:n[r],!Ft(l?r:s+(u?".":"#")+r,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;wt(a,i)}(e.sham||i&&i.sham)&&Re(a,"sham",!0),ze(n,r,a,e)}};var Wt,Yt={},Jt=Function.prototype,Xt=Jt.apply,Kt=Jt.call;Yt="object"==typeof Reflect&&Reflect.apply||(p?Kt.bind(Xt):function(){return Kt.apply(Xt,arguments)});var Zt,en=k(k.bind);Zt=function(e,t){return ae(e),void 0===t?e:p?en(e,t):function(){return e.apply(t,arguments)}};var tn={};tn=G("document","documentElement");var nn={};nn=k([].slice);var rn,an=TypeError;rn=function(e,t){if(e<t)throw an("Not enough arguments");return e};var on;on=/(?:ipad|iphone|ipod).*applewebkit/i.test(J);var sn;sn="process"==w(c.process);var cn,ln,un,dn,pn=c.setImmediate,fn=c.clearImmediate,hn=c.process,vn=c.Dispatch,gn=c.Function,mn=c.MessageChannel,yn=c.String,bn=0,_n={};try{cn=c.location}catch(e){}var wn=function(e){if(me(_n,e)){var t=_n[e];delete _n[e],t()}},En=function(e){return function(){wn(e)}},kn=function(e){wn(e.data)},Sn=function(e){c.postMessage(yn(e),cn.protocol+"//"+cn.host)};pn&&fn||(pn=function(e){rn(arguments.length,1);var t=q(e)?e:gn(e),n=nn(arguments,1);return _n[++bn]=function(){Yt(t,void 0,n)},ln(bn),bn},fn=function(e){delete _n[e]},sn?ln=function(e){hn.nextTick(En(e))}:vn&&vn.now?ln=function(e){vn.now(En(e))}:mn&&!on?(dn=(un=new mn).port2,un.port1.onmessage=kn,ln=Zt(dn.postMessage,dn)):c.addEventListener&&q(c.postMessage)&&!c.importScripts&&cn&&"file:"!==cn.protocol&&!d(Sn)?(ln=Sn,c.addEventListener("message",kn,!1)):ln="onreadystatechange"in je("script")?function(e){tn.appendChild(je("script")).onreadystatechange=function(){tn.removeChild(this),wn(e)}}:function(e){setTimeout(En(e),0)});var On=(Wt={set:pn,clear:fn}).clear;o({global:!0,bind:!0,enumerable:!0,forced:c.clearImmediate!==On},{clearImmediate:On});var Tn=Wt.set;o({global:!0,bind:!0,enumerable:!0,forced:c.setImmediate!==Tn},{setImmediate:Tn});const xn=async(e,t)=>{try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]);if(!i.ok)throw new Error;return await i.json()}catch(e){throw e}var n},Nn={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},Ln=e=>{const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},$n=(e=1)=>(Nn.search.page=e,Nn.search.results.slice(10*(e-1),10*e)),jn=()=>{localStorage.setItem("bookmarks",JSON.stringify(Nn.bookmarks))},Pn=e=>{Nn.bookmarks.push(e),Nn.recipe.bookmarked=!0,jn()};(()=>{const e=localStorage.getItem("bookmarks");e&&(Nn.bookmarks=JSON.parse(e))})();var Hn;Hn=new URL(a("27Lyk").resolve("eyyUD"),import.meta.url).toString();var In;var An="undefined"==typeof document?void 0:document,Mn=!!An&&"content"in An.createElement("template"),Cn=!!An&&An.createRange&&"createContextualFragment"in An.createRange();function Rn(e){return e=e.trim(),Mn?function(e){var t=An.createElement("template");return t.innerHTML=e,t.content.childNodes[0]}(e):Cn?function(e){return In||(In=An.createRange()).selectNode(An.body),In.createContextualFragment(e).childNodes[0]}(e):function(e){var t=An.createElement("body");return t.innerHTML=e,t.childNodes[0]}(e)}function qn(e,t){var n,r,i=e.nodeName,a=t.nodeName;return i===a||(n=i.charCodeAt(0),r=a.charCodeAt(0),n<=90&&r>=97?i===a.toUpperCase():r<=90&&n>=97&&a===i.toUpperCase())}function Un(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n))}var Fn={OPTION:function(e,t){var n=e.parentNode;if(n){var r=n.nodeName.toUpperCase();"OPTGROUP"===r&&(r=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==r||n.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),n.selectedIndex=-1)}Un(e,t,"selected")},INPUT:function(e,t){Un(e,t,"checked"),Un(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var r=e.firstChild;if(r){var i=r.nodeValue;if(i==n||!n&&i==e.placeholder)return;r.nodeValue=n}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var n,r,i=-1,a=0,o=e.firstChild;o;)if("OPTGROUP"===(r=o.nodeName&&o.nodeName.toUpperCase()))o=(n=o).firstChild;else{if("OPTION"===r){if(o.hasAttribute("selected")){i=a;break}a++}!(o=o.nextSibling)&&n&&(o=n.nextSibling,n=null)}e.selectedIndex=i}}};function Dn(){}function Gn(e){if(e)return e.getAttribute&&e.getAttribute("id")||e.id}var Vn,zn=(Vn=function(e,t){var n,r,i,a,o=t.attributes;if(11!==t.nodeType&&11!==e.nodeType){for(var s=o.length-1;s>=0;s--)r=(n=o[s]).name,i=n.namespaceURI,a=n.value,i?(r=n.localName||r,e.getAttributeNS(i,r)!==a&&("xmlns"===n.prefix&&(r=n.name),e.setAttributeNS(i,r,a))):e.getAttribute(r)!==a&&e.setAttribute(r,a);for(var c=e.attributes,l=c.length-1;l>=0;l--)r=(n=c[l]).name,(i=n.namespaceURI)?(r=n.localName||r,t.hasAttributeNS(i,r)||e.removeAttributeNS(i,r)):t.hasAttribute(r)||e.removeAttribute(r)}},function(e,t,n){if(n||(n={}),"string"==typeof t)if("#document"===e.nodeName||"HTML"===e.nodeName||"BODY"===e.nodeName){var r=t;(t=An.createElement("html")).innerHTML=r}else t=Rn(t);var i=n.getNodeKey||Gn,a=n.onBeforeNodeAdded||Dn,o=n.onNodeAdded||Dn,s=n.onBeforeElUpdated||Dn,c=n.onElUpdated||Dn,l=n.onBeforeNodeDiscarded||Dn,u=n.onNodeDiscarded||Dn,d=n.onBeforeElChildrenUpdated||Dn,p=!0===n.childrenOnly,f=Object.create(null),h=[];function v(e){h.push(e)}function g(e,t){if(1===e.nodeType)for(var n=e.firstChild;n;){var r=void 0;t&&(r=i(n))?v(r):(u(n),n.firstChild&&g(n,t)),n=n.nextSibling}}function m(e,t,n){!1!==l(e)&&(t&&t.removeChild(e),u(e),g(e,n))}function y(e){o(e);for(var t=e.firstChild;t;){var n=t.nextSibling,r=i(t);if(r){var a=f[r];a&&qn(t,a)?(t.parentNode.replaceChild(a,t),b(a,t)):y(t)}else y(t);t=n}}function b(e,t,n){var r=i(t);if(r&&delete f[r],!n){if(!1===s(e,t))return;if(Vn(e,t),c(e),!1===d(e,t))return}"TEXTAREA"!==e.nodeName?function(e,t){var n,r,o,s,c,l=t.firstChild,u=e.firstChild;e:for(;l;){for(s=l.nextSibling,n=i(l);u;){if(o=u.nextSibling,l.isSameNode&&l.isSameNode(u)){l=s,u=o;continue e}r=i(u);var d=u.nodeType,p=void 0;if(d===l.nodeType&&(1===d?(n?n!==r&&((c=f[n])?o===c?p=!1:(e.insertBefore(c,u),r?v(r):m(u,e,!0),u=c):p=!1):r&&(p=!1),(p=!1!==p&&qn(u,l))&&b(u,l)):3!==d&&8!=d||(p=!0,u.nodeValue!==l.nodeValue&&(u.nodeValue=l.nodeValue))),p){l=s,u=o;continue e}r?v(r):m(u,e,!0),u=o}if(n&&(c=f[n])&&qn(c,l))e.appendChild(c),b(c,l);else{var h=a(l);!1!==h&&(h&&(l=h),l.actualize&&(l=l.actualize(e.ownerDocument||An)),e.appendChild(l),y(l))}l=s,u=o}!function(e,t,n){for(;t;){var r=t.nextSibling;(n=i(t))?v(n):m(t,e,!0),t=r}}(e,u,r);var g=Fn[e.nodeName];g&&g(e,t)}(e,t):Fn.TEXTAREA(e,t)}!function e(t){if(1===t.nodeType||11===t.nodeType)for(var n=t.firstChild;n;){var r=i(n);r&&(f[r]=n),e(n),n=n.nextSibling}}(e);var _,w,E=e,k=E.nodeType,S=t.nodeType;if(!p)if(1===k)1===S?qn(e,t)||(u(e),E=function(e,t){for(var n=e.firstChild;n;){var r=n.nextSibling;t.appendChild(n),n=r}return t}(e,(_=t.nodeName,(w=t.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==w?An.createElementNS(w,_):An.createElement(_)))):E=t;else if(3===k||8===k){if(S===k)return E.nodeValue!==t.nodeValue&&(E.nodeValue=t.nodeValue),E;E=t}if(E===t)u(e);else{if(t.isSameNode&&t.isSameNode(E))return;if(b(E,t,p),h)for(var O=0,T=h.length;O<T;O++){var x=f[h[O]];x&&m(x,x.parentNode,!1)}}return!p&&E!==e&&e.parentNode&&(E.actualize&&(E=E.actualize(e.ownerDocument||An)),e.parentNode.replaceChild(E,e)),E});class Bn{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateHtml();if(!t)return n;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateHtml(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentEl.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||zn(n,e)}))}_clear(){this._parentEl.innerHTML=""}renderSpinner(){const e=`\n       <div class="spinner">\n          <svg>\n            <use href="${n(Hn)}#icon-loader"></use>\n          </svg>\n       </div>`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n          <div class="error">\n            <div>\n              <svg>\n                <use href="${n(Hn)}#icon-alert-triangle"></use>\n              </svg>\n            </div>\n            <p>${e}</p>\n          </div> \n    `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n        <div class="message">\n          <div>\n            <svg>\n              <use href="${n(Hn)}#icon-smile"></use>\n            </svg>\n          </div>\n          <p>${e}</p>\n        </div>\n    `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}}var Qn;function Wn(e,t,n,r,i){const a=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&a.push(t);let o=0,s=1,c=e,l=t;for(;o<=a.length;)c%a[o]==0&&l%a[o]==0?(s*=a[o],c/=a[o],l/=a[o]):o++;return function(e,t,n,r){return 1===e&&1===t?`${n=`${r}${(parseInt(n)+1).toString()}`}`:0===t?`${r}${n}`:"0"==n?`${r}${t}/${e}`:`${r}${n} ${t}/${e}`}(l,c,n,r)}Qn=function(e){let t;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";const n=e.toString(),r=n.split(".");let i,a=r[0];if("0"==i&&"0"!==a)return a;if("0"==i&&"0"==a)return"0";if(i=n.length>=17?r[1].slice(0,r[1].length-1):r[1],"99"==i&&"0"!==a)return`${a} 99/100`;if("99"==i&&"0"==a)return"99/100";if(1-parseFloat(`.${i}`)<.0011&&(i="999"),null==i)return a;let o=i.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(o&&i.length>2){let e=o[0].split("").reverse().join(""),n=o[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let n=0;n<e.length;n++)t/=e[0]/e[n];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,n,r,i){const a=!0,o=e.length-n.length>=1?e.length-n.length:1,s=Math.pow(10,o),c=parseFloat(`0.${e}`),l=Math.pow(10,t.length),u=Math.round((c*l-c)*Math.pow(10,o));return Wn(u,(l-1)*s,r,i,a)}(i,n,e,a,t)}return function(e,t,n){const r=!1,i=parseInt(e,10),a=Math.pow(10,e.length);return Wn(i,a,t,n,r)}(i,a,t)};var Yn=new class extends Bn{_parentEl=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="Start by searching for a recipe or an ingredient. Have fun!";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerServings(e){this._parentEl.addEventListener("click",(t=>{const n=t.target.closest(".btn--tiny");if(!n)return;const{updateTo:r}=n.dataset;+r>0&&e(+r)}))}addHandlerBookmark(e){this._parentEl.addEventListener("click",(t=>{t.target.closest(".btn--bookmark")&&e()}))}_generateHtml(){return`\n        <figure class="recipe__fig">\n          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n          <h1 class="recipe__title">\n            <span>${this._data.title}</span>\n          </h1>\n        </figure>\n        <div class="recipe__details">\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(Hn)}#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n            <span class="recipe__info-text">minutes</span>\n          </div>\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(Hn)}#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n            <span class="recipe__info-text">servings</span>\n            <div class="recipe__info-buttons">\n              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n                <svg>\n                  <use href="${n(Hn)}#icon-minus-circle"></use>\n                </svg>\n              </button>\n              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n                <svg>\n                  <use href="${n(Hn)}#icon-plus-circle"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n            <svg>\n              <use href="${n(Hn)}#icon-user"></use>\n            </svg>\n          </div>\n          <button class="btn--round btn--bookmark">\n            <svg class="">\n              <use href="${n(Hn)}#icon-bookmark${this._data?.bookmarked?"-fill":""}"></use>\n            </svg>\n          </button>\n        </div>\n        <div class="recipe__ingredients">\n          <h2 class="heading--2">Recipe ingredients</h2>\n          <ul class="recipe__ingredient-list">\n          ${this._data.ingredients.map((e=>this.#e(e))).join("\n")}\n          </ul>\n        </div>\n        <div class="recipe__directions">\n          <h2 class="heading--2">How to cook it</h2>\n          <p class="recipe__directions-text">\n            This recipe was carefully designed and tested by\n            <span class="recipe__publisher">${this._data.publisher}</span>. Please\n            check out directions at their website.\n          </p>\n          <a\n            class="btn--small recipe__btn"\n            href="${this._data.sourceUrl}"\n            target="_blank"\n          >\n            <span>Directions</span>\n            <svg class="search__icon">\n              <use href="${n(Hn)}#icon-arrow-right"></use>\n            </svg>\n          </a>\n        </div>\n  `}#e(e){return`<li class="recipe__ingredient">\n              <svg class="recipe__icon">\n                <use href="${n(Hn)}#icon-check"></use>\n              </svg>\n              <div class="recipe__quantity">${e.quantity?n(Qn)(e.quantity):""}</div>\n              <div class="recipe__description">\n                <span class="recipe__unit">${e.unit}</span>\n                ${e.description}\n              </div>\n            </li>`}};var Jn=new class extends Bn{_parentEl="";_generateHtml(){const e=window.location.hash.slice(1);return`\n          <li class="preview">\n            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n              <figure class="preview__fig">\n                <img src="${this._data.image}" alt="${this._data.title}" />\n              </figure>\n              <div class="preview__data">\n                <h4 class="preview__title">${this._data.title}</h4>\n                <p class="preview__publisher">${this._data.publisher}</p>\n                <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n                  <svg>\n                    <use href="${n(Hn)}#icon-user"></use>\n                  </svg>\n                </div>\n              </div>\n            </a>\n          </li>\n  `}};var Xn=new class extends Bn{_parentEl=document.querySelector(".results");_searchEl=document.querySelector(".search");_queryInput=document.querySelector(".search__field");_errorMessage="No recipes found for this query! Please try again";addHandlerSearch(e){this._searchEl.addEventListener("submit",(t=>{t.preventDefault(),e()}))}getQuery(){return this._queryInput.value}clearQuery(){this._queryInput.value="",this._queryInput.blur()}_generateHtml(){return this._data.map((e=>Jn.render(e,!1))).join("\n")}};var Kn=new class extends Bn{_parentEl=document.querySelector(".pagination");_data;addHandlerClick(e){this._parentEl.addEventListener("click",(t=>{const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_generateHtml(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?this.#t(e):e===t?this.#n(e):e<t?`${this.#n(e)}\n              ${this.#t(e)}`:void 0}#t(e){return`  <button class="btn--inline pagination__btn--next" data-goto="${e+1}">\n                <span>Page ${e+1}</span>\n                <svg class="search__icon">\n                  <use href="${n(Hn)}#icon-arrow-right"></use>\n                </svg>\n              </button>`}#n(e){return`  <button class="btn--inline pagination__btn--prev" data-goto="${e-1}">\n                <svg class="search__icon">\n                  <use href="${n(Hn)}#icon-arrow-left"></use>\n                </svg>\n               <span>Page ${e-1}</span>\n              </button>`}};var Zn=new class extends Bn{_parentEl=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it!";addHandlerRender(e){window.addEventListener("load",e)}_generateHtml(){return this._data.map((e=>Jn.render(e,!1))).join("\n")}};var er=new class extends Bn{_parentEl=document.querySelector(".upload");_windowEl=document.querySelector(".add-recipe-window");_overlayEl=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_errorMessage="Invalid input data";_message="Recipe was successfully uploaded";constructor(){super(),this.addHandlerShowModal(),this.addHandlerHideModal()}_toggleModal(){this._windowEl.classList.toggle("hidden"),this._overlayEl.classList.toggle("hidden")}addHandlerShowModal(){this._btnOpen.addEventListener("click",this._toggleModal.bind(this))}addHandlerHideModal(){this._btnClose.addEventListener("click",this._toggleModal.bind(this))}addHandlerUpload(e){this._parentEl.addEventListener("submit",(t=>{t.preventDefault();const n=[...new FormData(this._parentEl)],r=Object.fromEntries(n);e(r)}))}_generateHtml(){return`\n    <div class="upload__column">\n          <h3 class="upload__heading">Recipe data</h3>\n          <label>Title</label>\n          <input value="TEST" required name="title" type="text" />\n          <label>URL</label>\n          <input value="TEST" required name="sourceUrl" type="text" />\n          <label>Image URL</label>\n          <input value="TEST" required name="image" type="text" />\n          <label>Publisher</label>\n          <input value="TEST" required name="publisher" type="text" />\n          <label>Prep time</label>\n          <input value="23" required name="cookingTime" type="number" />\n          <label>Servings</label>\n          <input value="23" required name="servings" type="number" />\n        </div>\n\n        <div class="upload__column">\n          <h3 class="upload__heading">Ingredients</h3>\n          <label>Ingredient 1</label>\n          <input\n            value="0.5,kg,Rice"\n            type="text"\n            required\n            name="ingredient-1"\n            placeholder="Format: 'Quantity,Unit,Description'"\n          />\n          <label>Ingredient 2</label>\n          <input\n            value="1,,Avocado"\n            type="text"\n            name="ingredient-2"\n            placeholder="Format: 'Quantity,Unit,Description'"\n          />\n          <label>Ingredient 3</label>\n          <input\n            value=",,salt"\n            type="text"\n            name="ingredient-3"\n            placeholder="Format: 'Quantity,Unit,Description'"\n          />\n          <label>Ingredient 4</label>\n          <input\n            type="text"\n            name="ingredient-4"\n            placeholder="Format: 'Quantity,Unit,Description'"\n          />\n          <label>Ingredient 5</label>\n          <input\n            type="text"\n            name="ingredient-5"\n            placeholder="Format: 'Quantity,Unit,Description'"\n          />\n          <label>Ingredient 6</label>\n          <input\n            type="text"\n            name="ingredient-6"\n            placeholder="Format: 'Quantity,Unit,Description'"\n          />\n        </div>\n\n        <button class="btn upload__btn">\n          <svg>\n            <use href="${icons}#icon-upload-cloud"></use>\n          </svg>\n          <span>Upload</span>\n        </button>        \n  `}},tr=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,a=Object.create(i.prototype),o=new N(r||[]);return a._invoke=function(e,t,n){var r=d;return function(i,a){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw a;return $()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=O(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?h:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(e,n,o),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",p="suspendedYield",f="executing",h="completed",v={};function g(){}function m(){}function y(){}var b={};c(b,a,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==n&&r.call(w,a)&&(b=w);var E=y.prototype=g.prototype=Object.create(b);function k(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,a,o,s){var c=u(e[i],e,a);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(d).then((function(e){l.value=e,o(l)}),(function(e){return n("throw",e,o,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function O(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=u(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function L(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:$}}function $(){return{value:t,done:!0}}return m.prototype=y,c(E,"constructor",y),c(y,"constructor",m),m.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},k(S.prototype),c(S.prototype,o,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new S(l(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},k(E),c(E,s,"Generator"),c(E,a,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;x(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:L(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=tr}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=tr:Function("r","regeneratorRuntime = r")(tr)}const nr=async()=>{try{const e=window.location.hash.slice(1);if(!e)return;Yn.renderSpinner(),await(async e=>{try{const t=await xn(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=f632cd0b-0ccd-4bee-b285-64f749f8fcb0`);Nn.recipe=Ln(t),Nn.recipe.bookmarked=Nn.bookmarks.some((t=>t.id===e))}catch(e){throw e}})(e),Xn.update($n(Nn.search.page)),Zn.update(Nn.bookmarks),Yn.render(Nn.recipe)}catch(e){console.log(e),Yn.renderError()}},rr=async()=>{try{const e=Xn.getQuery();if(!e)return;Xn.renderSpinner(),await(async e=>{try{Nn.search.query=e;const t=await xn(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=f632cd0b-0ccd-4bee-b285-64f749f8fcb0`);Nn.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})))}catch(e){throw e}})(e),Xn.render($n()),Xn.clearQuery(),Kn.render(Nn.search)}catch(e){Xn.renderError()}},ir=e=>{Xn.render($n(e)),Kn.render(Nn.search)},ar=e=>{(e=>{Nn.recipe.ingredients.forEach((t=>{t.quantity*=e/Nn.recipe.servings})),Nn.recipe.servings=e})(e),Yn.update(Nn.recipe)},or=()=>{Nn.recipe.bookmarked?(e=>{const t=Nn.bookmarks.findIndex((t=>t.id===e));Nn.bookmarks.splice(t,1),Nn.recipe.bookmarked=!1,jn()})(Nn.recipe.id):Pn(Nn.recipe),Yn.update(Nn.recipe),Zn.render(Nn.bookmarks)},sr=()=>{Zn.render(Nn.bookmarks)},cr=async e=>{try{er.renderSpinner(),await(async e=>{try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient format! Please use the correct format");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await xn("https://forkify-api.herokuapp.com/api/v2/recipes/?key=f632cd0b-0ccd-4bee-b285-64f749f8fcb0",n);Nn.recipe=Ln(r),Pn(Nn.recipe)}catch(e){throw e}})(e),Yn.render(Nn.recipe),er.renderMessage(),Zn.render(Nn.bookmarks),window.location.hash="",window.history.pushState(null,"",`#${Nn.recipe.id}`),setTimeout((()=>{er._toggleModal()}),1e3)}catch(e){console.log(e),er.renderError()}};Zn.addHandlerRender(sr),Yn.addHandlerRender(nr),Yn.addHandlerServings(ar),Yn.addHandlerBookmark(or),Xn.addHandlerSearch(rr),Kn.addHandlerClick(ir),er.addHandlerUpload(cr);
//# sourceMappingURL=index.3bb3d916.js.map