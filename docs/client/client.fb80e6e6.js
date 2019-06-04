import{S as e,i as t,s as r,c as n,e as s,a as o,b as a,d as l,f as i,g as c,h as u,j as p,k as f,l as m,m as g,o as h,t as d,p as $,n as v,q as y,r as S,u as b,v as _,w as E,x as w,y as P}from"./chunk.fca4c666.js";import{w as R}from"./chunk.af794773.js";import{t as x,l as L,g as A}from"./chunk.04354f7d.js";const j={};function C(e,t,r){const n=Object.create(e);return n.locale=t[r],n}function N(e){var t,r;return{c(){t=s("link"),this.h()},l(e){t=o(e,"LINK",{rel:!0,hreflang:!0,href:!0},!1),a(t).forEach(l),this.h()},h(){t.rel="alternate",t.hreflang=e.locale,t.href=r=`${e.segment}?lang=${e.locale}`},m(e,r){i(e,t,r)},p(e,n){e.segment&&r!==(r=`${n.segment}?lang=${n.locale}`)&&(t.href=r)},d(e){e&&l(t)}}}function q(e){var t,r,s;const o=e.$$slots.default,a=n(o,e,null);for(var d=e.locales,$=[],v=0;v<d.length;v+=1)$[v]=N(C(e,d,v));return{c(){a&&a.c(),t=c();for(var e=0;e<$.length;e+=1)$[e].c();r=u()},l(e){a&&a.l(e),t=p(e,"\n");for(var n=0;n<$.length;n+=1)$[n].l(e);r=u()},m(e,n){a&&a.m(e,n),i(e,t,n);for(var o=0;o<$.length;o+=1)$[o].m(document.head,null);f(document.head,r),s=!0},p(e,t){if(a&&a.p&&e.$$scope&&a.p(m(o,t,e,null),g(o,t,null)),e.locales||e.segment){d=t.locales;for(var n=0;n<d.length;n+=1){const s=C(t,d,n);$[n]?$[n].p(e,s):($[n]=N(s),$[n].c(),$[n].m(r.parentNode,r))}for(;n<$.length;n+=1)$[n].d(1);$.length=d.length}},i(e){s||(a&&a.i&&a.i(e),s=!0)},o(e){a&&a.o&&a.o(e),s=!1},d(e){a&&a.d(e),e&&l(t),h($,e),l(r)}}}function O(e,t,r){let{segment:n="",lang:s}=t;s&&L.set(s);let{$$slots:o={},$$scope:a}=t;return e.$set=(e=>{"segment"in e&&r("segment",n=e.segment),"lang"in e&&r("lang",s=e.lang),"$$scope"in e&&r("$$scope",a=e.$$scope)}),{segment:n,lang:s,locales:["pt","en"],$$slots:o,$$scope:a}}x.update({pt:{artist:"Artista",engineer:"Engenheiro",homePage:"Página Inicial",about:"Sobre Mim","what are you interested in?":"No que você está interessado?"},en:{artist:"Artist",engineer:"Engineer",homePage:"Home Page",about:"About","what are you interested in?":"What are you interested in?"}}),L.set(A("pt"));class k extends e{constructor(e){super(),t(this,e,O,q,r,["segment","lang"])}}function U(e){var t,r,n=e.error.stack;return{c(){t=s("pre"),r=d(n)},l(e){t=o(e,"PRE",{},!1);var s=a(t);r=p(s,n),s.forEach(l)},m(e,n){i(e,t,n),f(t,r)},p(e,t){e.error&&n!==(n=t.error.stack)&&$(r,n)},d(e){e&&l(t)}}}function D(e){var t,r,n,m,g,h,y,S,b,_=e.error.message;document.title=t=e.status;var E=e.dev&&e.error.stack&&U(e);return{c(){r=c(),n=s("h1"),m=d(e.status),g=c(),h=s("p"),y=d(_),S=c(),E&&E.c(),b=u(),this.h()},l(t){r=p(t,"\n\n"),n=o(t,"H1",{class:!0},!1);var s=a(n);m=p(s,e.status),s.forEach(l),g=p(t,"\n\n"),h=o(t,"P",{class:!0},!1);var i=a(h);y=p(i,_),i.forEach(l),S=p(t,"\n\n"),E&&E.l(t),b=u(),this.h()},h(){n.className="svelte-8od9u6",h.className="svelte-8od9u6"},m(e,t){i(e,r,t),i(e,n,t),f(n,m),i(e,g,t),i(e,h,t),f(h,y),i(e,S,t),E&&E.m(e,t),i(e,b,t)},p(e,r){e.status&&t!==(t=r.status)&&(document.title=t),e.status&&$(m,r.status),e.error&&_!==(_=r.error.message)&&$(y,_),r.dev&&r.error.stack?E?E.p(e,r):((E=U(r)).c(),E.m(b.parentNode,b)):E&&(E.d(1),E=null)},i:v,o:v,d(e){e&&(l(r),l(n),l(g),l(h),l(S)),E&&E.d(e),e&&l(b)}}}function H(e,t,r){let{status:n,error:s}=t;return e.$set=(e=>{"status"in e&&r("status",n=e.status),"error"in e&&r("error",s=e.error)}),{status:n,error:s,dev:!1}}class I extends e{constructor(e){super(),t(this,e,H,D,r,["status","error"])}}function J(e){var t,r,n=[{segment:e.segments[1]},e.level1.props],s=e.level1.component;function o(e){let t={$$slots:{default:[T]},$$scope:{ctx:e}};for(var r=0;r<n.length;r+=1)t=y(t,n[r]);return{props:t}}if(s)var a=new s(o(e));return{c(){a&&a.$$.fragment.c(),t=u()},l(e){a&&a.$$.fragment.l(e),t=u()},m(e,n){a&&S(a,e,n),i(e,t,n),r=!0},p(e,r){var l=e.segments||e.level1?b(n,[e.segments&&{segment:r.segments[1]},e.level1&&r.level1.props]):{};if((e.$$scope||e.level2)&&(l.$$scope={changed:e,ctx:r}),s!==(s=r.level1.component)){if(a){P();const e=a;E(()=>{e.$destroy()}),e.$$.fragment.o(1),w()}s?((a=new s(o(r))).$$.fragment.c(),a.$$.fragment.i(1),S(a,t.parentNode,t)):a=null}else s&&a.$set(l)},i(e){r||(a&&a.$$.fragment.i(e),r=!0)},o(e){a&&a.$$.fragment.o(e),r=!1},d(e){e&&l(t),a&&a.$destroy(e)}}}function K(e){var t,r=new I({props:{error:e.error,status:e.status}});return{c(){r.$$.fragment.c()},l(e){r.$$.fragment.l(e)},m(e,n){S(r,e,n),t=!0},p(e,t){var n={};e.error&&(n.error=t.error),e.status&&(n.status=t.status),r.$set(n)},i(e){t||(r.$$.fragment.i(e),t=!0)},o(e){r.$$.fragment.o(e),t=!1},d(e){r.$destroy(e)}}}function B(e){var t,r,n=[e.level2.props],s=e.level2.component;function o(e){let t={};for(var r=0;r<n.length;r+=1)t=y(t,n[r]);return{props:t}}if(s)var a=new s(o());return{c(){a&&a.$$.fragment.c(),t=u()},l(e){a&&a.$$.fragment.l(e),t=u()},m(e,n){a&&S(a,e,n),i(e,t,n),r=!0},p(e,r){var l=e.level2?b(n,[r.level2.props]):{};if(s!==(s=r.level2.component)){if(a){P();const e=a;E(()=>{e.$destroy()}),e.$$.fragment.o(1),w()}s?((a=new s(o())).$$.fragment.c(),a.$$.fragment.i(1),S(a,t.parentNode,t)):a=null}else s&&a.$set(l)},i(e){r||(a&&a.$$.fragment.i(e),r=!0)},o(e){a&&a.$$.fragment.o(e),r=!1},d(e){e&&l(t),a&&a.$destroy(e)}}}function T(e){var t,r,n=e.level2&&B(e);return{c(){n&&n.c(),t=u()},l(e){n&&n.l(e),t=u()},m(e,s){n&&n.m(e,s),i(e,t,s),r=!0},p(e,r){r.level2?n?(n.p(e,r),n.i(1)):((n=B(r)).c(),n.i(1),n.m(t.parentNode,t)):n&&(P(),E(()=>{n.d(1),n=null}),n.o(1),w())},i(e){r||(n&&n.i(),r=!0)},o(e){n&&n.o(),r=!1},d(e){n&&n.d(e),e&&l(t)}}}function V(e){var t,r,n,s,o=[K,J],a=[];function c(e){return e.error?0:1}return t=c(e),r=a[t]=o[t](e),{c(){r.c(),n=u()},l(e){r.l(e),n=u()},m(e,r){a[t].m(e,r),i(e,n,r),s=!0},p(e,s){var l=t;(t=c(s))===l?a[t].p(e,s):(P(),E(()=>{a[l].d(1),a[l]=null}),r.o(1),w(),(r=a[t])||(r=a[t]=o[t](s)).c(),r.i(1),r.m(n.parentNode,n))},i(e){s||(r&&r.i(),s=!0)},o(e){r&&r.o(),s=!1},d(e){a[t].d(e),e&&l(n)}}}function W(e){var t,r=[{segment:e.segments[0]},e.level0.props];let n={$$slots:{default:[V]},$$scope:{ctx:e}};for(var s=0;s<r.length;s+=1)n=y(n,r[s]);var o=new k({props:n});return{c(){o.$$.fragment.c()},l(e){o.$$.fragment.l(e)},m(e,r){S(o,e,r),t=!0},p(e,t){var n=e.segments||e.level0?b(r,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1||e.segments||e.level2)&&(n.$$scope={changed:e,ctx:t}),o.$set(n)},i(e){t||(o.$$.fragment.i(e),t=!0)},o(e){o.$$.fragment.o(e),t=!1},d(e){o.$destroy(e)}}}function G(e,t,r){let{stores:n,error:s,status:o,segments:a,level0:l,level1:i=null,level2:c=null}=t;return _(j,n),e.$set=(e=>{"stores"in e&&r("stores",n=e.stores),"error"in e&&r("error",s=e.error),"status"in e&&r("status",o=e.status),"segments"in e&&r("segments",a=e.segments),"level0"in e&&r("level0",l=e.level0),"level1"in e&&r("level1",i=e.level1),"level2"in e&&r("level2",c=e.level2)}),{stores:n,error:s,status:o,segments:a,level0:l,level1:i,level2:c}}class M extends e{constructor(e){super(),t(this,e,G,W,r,["stores","error","status","segments","level0","level1","level2"])}}const X=[],Y=[{js:()=>import("./index.5e53def2.js"),css:["index.5e53def2.css"]},{js:()=>import("./index.c904f617.js"),css:[]},{js:()=>import("./_layout.ab95138e.js"),css:["_layout.ab95138e.css"]},{js:()=>import("./index.6752e40e.js"),css:["index.6752e40e.css"]},{js:()=>import("./about.5b3f9c82.js"),css:[]}],z=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/engineer\/?$/,parts:[{i:1}]},{pattern:/^\/artist\/?$/,parts:[{i:2},{i:3}]},{pattern:/^\/artist\/about\/?$/,parts:[{i:2},{i:4}]}];const F="undefined"!=typeof __SAPPER__&&__SAPPER__;let Q,Z,ee,te=!1,re=[],ne="{}";const se={page:R({}),preloading:R(null),session:R(F&&F.session)};let oe,ae;se.session.subscribe(async e=>{if(oe=e,!te)return;ae=!0;const t=ge(new URL(location.href)),r=Z={},{redirect:n,props:s,branch:o}=await ve(t);r===Z&&await $e(n,o,s,t.page)});let le,ie=null;let ce,ue=1;const pe="undefined"!=typeof history?history:{pushState:(e,t,r)=>{},replaceState:(e,t,r)=>{},scrollRestoration:""},fe={};function me(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,r,n=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[r]&&(t[r]=[t[r]]),"object"==typeof t[r]?t[r].push(n):t[r]=n}),t}function ge(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(F.baseUrl))return null;let t=e.pathname.slice(F.baseUrl.length);if(""===t&&(t="/"),!X.some(e=>e.test(t)))for(let r=0;r<z.length;r+=1){const n=z[r],s=n.pattern.exec(t);if(s){const r=me(e.search),o=n.parts[n.parts.length-1],a=o.params?o.params(s):{},l={path:t,query:r,params:a};return{href:e.href,route:n,match:s,page:l}}}}function he(){return{x:pageXOffset,y:pageYOffset}}async function de(e,t,r,n){if(t)ce=t;else{const e=he();fe[ce]=e,t=ce=++ue,fe[ce]=r?e:{x:0,y:0}}ce=t,Q&&se.preloading.set(!0);const s=ie&&ie.href===e.href?ie.promise:ve(e);ie=null;const o=Z={},{redirect:a,props:l,branch:i}=await s;if(o===Z&&(await $e(a,i,l,e.page),document.activeElement&&document.activeElement.blur(),!r)){let e=fe[t];if(n){const t=document.getElementById(n.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}fe[ce]=e,e&&scrollTo(e.x,e.y)}}async function $e(e,t,r,n){if(e)return function(e,t={replaceState:!1}){const r=ge(new URL(e,document.baseURI));return r?(pe[t.replaceState?"replaceState":"pushState"]({id:ce},"",e),de(r,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(se.page.set(n),se.preloading.set(!1),Q)Q.$set(r);else{r.stores={page:{subscribe:se.page.subscribe},preloading:{subscribe:se.preloading.subscribe},session:se.session},r.level0={props:await ee};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)Se(e.nextSibling);Se(e),Se(t)}Q=new M({target:le,props:r,hydrate:!0})}re=t,ne=JSON.stringify(n.query),te=!0,ae=!1}async function ve(e){const{route:t,page:r}=e,n=r.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[n[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};let l;ee||(ee=F.preloaded[0]||async function(e,t){const{lang:r}=e.query;return{lang:r}}.call(a,{path:r.path,query:r.query,params:{}},oe));let i=1;try{const s=JSON.stringify(r.query),c=t.pattern.exec(r.path);let u=!1;l=await Promise.all(t.parts.map(async(t,l)=>{const p=n[l];if(function(e,t,r,n){if(n!==ne)return!0;const s=re[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(r.slice(1,e+2)))||void 0)}(l,p,c,s)&&(u=!0),o.segments[i]=n[l+1],!t)return{segment:p};const f=i++;if(!ae&&!u&&re[l]&&re[l].part===t.i)return re[l];u=!1;const{default:m,preload:g}=await function(e){const t="string"==typeof e.css?[]:e.css.map(ye);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(Y[t.i]);let h;return h=te||!F.preloaded[l+1]?g?await g.call(a,{path:r.path,query:r.query,params:t.params?t.params(e.match):{}},oe):{}:F.preloaded[l+1],console.log({component:m,props:h,segment:p,match:c,part:t.i}),o[`level${f}`]={component:m,props:h,segment:p,match:c,part:t.i}}))}catch(e){o.error=e,o.status=500,l=[]}return{redirect:s,props:o,branch:l}}function ye(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,r)=>{const n=document.createElement("link");n.rel="stylesheet",n.href=t,n.onload=(()=>e()),n.onerror=r,document.head.appendChild(n)})}function Se(e){e.parentNode.removeChild(e)}function be(e){const t=ge(new URL(e,document.baseURI));if(t)return ie&&e===ie.href||function(e,t){ie={href:e,promise:t}}(e,ve(t)),ie.promise}let _e;function Ee(e){clearTimeout(_e),_e=setTimeout(()=>{we(e)},20)}function we(e){const t=Re(e.target);t&&"prefetch"===t.rel&&be(t.href)}function Pe(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Re(e.target);if(!t)return;if(!t.href)return;const r="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,n=String(r?t.href.baseVal:t.href);if(n===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(r?t.target.baseVal:t.target)return;const s=new URL(n);if(s.pathname===location.pathname&&s.search===location.search)return;const o=ge(s);if(o){de(o,null,t.hasAttribute("sapper-noscroll"),s.hash),e.preventDefault(),pe.pushState({id:ce},"",s.href)}}function Re(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function xe(e){if(fe[ce]=he(),e.state){const t=ge(new URL(location.href));t?de(t,e.state.id):location.href=location.href}else(function(e){ce=e})(ue=ue+1),pe.replaceState({id:ce},"",location.href)}!function(e){var t;"scrollRestoration"in pe&&(pe.scrollRestoration="manual"),t=e.target,le=t,addEventListener("click",Pe),addEventListener("popstate",xe),addEventListener("touchstart",we),addEventListener("mousemove",Ee),Promise.resolve().then(()=>{const{hash:e,href:t}=location;pe.replaceState({id:ue},"",t);const r=new URL(location.href);if(F.error)return function(e){const{pathname:t,search:r}=location,{session:n,preloaded:s,status:o,error:a}=F;ee||(ee=s&&s[0]),$e(null,[],{error:a,status:o,session:n,level0:{props:ee},level1:{props:{status:o,error:a},component:I},segments:s},{path:t,query:me(r),params:{}})}();const n=ge(r);return n?de(n,ue,!0,e):void 0})}({target:document.querySelector("#sapper")});
//# sourceMappingURL=client.fb80e6e6.js.map