import{S as e,a as t,s as n,w as s,l as o,C as r,p as a,D as l,t as c,g as $,q as i,y as h,z as u,A as p,J as f,x as m,n as d,c as g,e as v,d as k,f as b,j as w,K as D,k as _,m as E,o as T,L as x,b as M,h as C,u as I,v as N,M as V,N as y,E as O,I as S}from"./chunk.1732d770.js";import{r as R,l as j,a as L,_ as A}from"./chunk.2994a429.js";import{M as q}from"./chunk.ceb0f11d.js";import{m as z}from"./chunk.602b7b13.js";const H=()=>{if("undefined"==typeof window)return{width:800,height:600};return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}};var P=R(H(),e=>{if("undefined"==typeof window)return;const t=((e,t)=>{let n=null;return()=>{n||(n=setTimeout(()=>{n=null,t()},e))}})(200,()=>e(H()));return window.addEventListener("resize",t,!1),()=>window.removeEventListener("resize",t,!1)});function W(e){var t,n,i=[e.props],f=e.Default;function d(e){let t={};for(var n=0;n<i.length;n+=1)t=m(t,i[n]);return{props:t}}if(f)var g=new f(d());return{c(){g&&g.$$.fragment.c(),t=s()},l(e){g&&g.$$.fragment.l(e),t=s()},m(e,s){g&&h(g,e,s),o(e,t,s),n=!0},p(e,n){var s=e.props?u(i,[n.props]):{};if(f!==(f=n.Default)){if(g){r();const e=g;a(e.$$.fragment,1,()=>{p(e)}),l()}f?((g=new f(d())).$$.fragment.c(),c(g.$$.fragment,1),h(g,t.parentNode,t)):g=null}else f&&g.$set(s)},i(e){n||(g&&c(g.$$.fragment,e),n=!0)},o(e){g&&a(g.$$.fragment,e),n=!1},d(e){e&&$(t),g&&p(g,e)}}}function B(e){var t,n,r;let l={ctx:e,current:null,pending:U,then:K,catch:J,value:"Result",error:"null",blocks:[,,,]};return f(n=e.Component(),l),{c(){t=s(),l.block.c()},l(e){t=s(),l.block.l(e)},m(e,n){o(e,t,n),l.block.m(e,l.anchor=n),l.mount=()=>t.parentNode,l.anchor=t,r=!0},p(t,s){e=s,l.ctx=e,"Component"in t&&n!==(n=e.Component())&&f(n,l)||l.block.p(t,m(m({},e),l.resolved))},i(e){r||(c(l.block),r=!0)},o(e){for(let e=0;e<3;e+=1){const t=l.blocks[e];a(t)}r=!1},d(e){e&&$(t),l.block.d(e),l=null}}}function J(e){return{c:d,l:d,m:d,p:d,i:d,o:d,d:d}}function K(e){var t,n,i=[e.props],f=e.Result.default;function d(e){let t={};for(var n=0;n<i.length;n+=1)t=m(t,i[n]);return{props:t}}if(f)var g=new f(d());return{c(){g&&g.$$.fragment.c(),t=s()},l(e){g&&g.$$.fragment.l(e),t=s()},m(e,s){g&&h(g,e,s),o(e,t,s),n=!0},p(e,n){var s=e.props?u(i,[n.props]):{};if(f!==(f=n.Result.default)){if(g){r();const e=g;a(e.$$.fragment,1,()=>{p(e)}),l()}f?((g=new f(d())).$$.fragment.c(),c(g.$$.fragment,1),h(g,t.parentNode,t)):g=null}else f&&g.$set(s)},i(e){n||(g&&c(g.$$.fragment,e),n=!0)},o(e){g&&a(g.$$.fragment,e),n=!1},d(e){e&&$(t),g&&p(g,e)}}}function U(e){var t,n,i=[e.props],f=e.Default;function d(e){let t={};for(var n=0;n<i.length;n+=1)t=m(t,i[n]);return{props:t}}if(f)var g=new f(d());return{c(){g&&g.$$.fragment.c(),t=s()},l(e){g&&g.$$.fragment.l(e),t=s()},m(e,s){g&&h(g,e,s),o(e,t,s),n=!0},p(e,n){var s=e.props?u(i,[n.props]):{};if(f!==(f=n.Default)){if(g){r();const e=g;a(e.$$.fragment,1,()=>{p(e)}),l()}f?((g=new f(d())).$$.fragment.c(),c(g.$$.fragment,1),h(g,t.parentNode,t)):g=null}else f&&g.$set(s)},i(e){n||(g&&c(g.$$.fragment,e),n=!0)},o(e){g&&a(g.$$.fragment,e),n=!1},d(e){e&&$(t),g&&p(g,e)}}}function F(e){var t,n,i,h,u=[B,W],p=[];function f(e){return e.Component&&e.Component!==e.Default?0:1}return t=f(e),n=p[t]=u[t](e),{c(){n.c(),i=s()},l(e){n.l(e),i=s()},m(e,n){p[t].m(e,n),o(e,i,n),h=!0},p(e,s){var o=t;(t=f(s))===o?p[t].p(e,s):(r(),a(p[o],1,()=>{p[o]=null}),l(),(n=p[t])||(n=p[t]=u[t](s)).c(),c(n,1),n.m(i.parentNode,i))},i(e){h||(c(n),h=!0)},o(e){a(n),h=!1},d(e){p[t].d(e),e&&$(i)}}}function G(e,t,n){let s;i(e,P,e=>{n("$dimensions",s=e)});let o,r,{Default:a,Mobile:l,Desktop:c,props:$,widthThreshhold:h=500,heightThreshhold:u=null}=t,p=a;return e.$set=e=>{"Default"in e&&n("Default",a=e.Default),"Mobile"in e&&n("Mobile",l=e.Mobile),"Desktop"in e&&n("Desktop",c=e.Desktop),"props"in e&&n("props",$=e.props),"widthThreshhold"in e&&n("widthThreshhold",h=e.widthThreshhold),"heightThreshhold"in e&&n("heightThreshhold",u=e.heightThreshhold)},e.$$.update=(e={$dimensions:1,widthThreshhold:1,width:1,Mobile:1,heightThreshhold:1,height:1,Desktop:1})=>{e.$dimensions&&n("width",o=s.width),e.$dimensions&&n("height",r=s.height),(e.widthThreshhold||e.width||e.Mobile||e.heightThreshhold||e.height||e.Desktop)&&n("Component",p=h&&o<h?l:u&&r<u?l:c)},{Default:a,Mobile:l,Desktop:c,props:$,widthThreshhold:h,heightThreshhold:u,Component:p}}class Q extends e{constructor(e){super(),t(this,e,G,F,n,["Default","Mobile","Desktop","props","widthThreshhold","heightThreshhold"])}}function X(e){var t,n,s,r;const l=e.$$slots.default,i=g(l,e,null);return{c(){t=v("div"),n=v("button"),i&&i.c(),this.h()},l(e){t=k(e,"DIV",{},!1);var s=b(t);n=k(s,"BUTTON",{class:!0},!1);var o=b(n);i&&i.l(o),o.forEach($),s.forEach($),this.h()},h(){w(n,"class","button hoverlay svelte-ycbo5o"),r=D(n,"click",e.onClick)},m(e,r){o(e,t,r),_(t,n),i&&i.m(n,null),s=!0},p(e,t){i&&i.p&&e.$$scope&&i.p(E(l,t,e,null),T(l,t,null))},i(e){s||(c(i,e),s=!0)},o(e){a(i,e),s=!1},d(e){e&&$(t),i&&i.d(e),r()}}}function Y(e,t,n){const s=x();let{$$slots:o={},$$scope:r}=t;return e.$set=e=>{"$$scope"in e&&n("$$scope",r=e.$$scope)},{onClick:()=>s("click"),$$slots:o,$$scope:r}}class Z extends e{constructor(e){super(),t(this,e,Y,X,n,[])}}function ee(e){var t,n=new q({props:{alt:"open navigation"}});return{c(){n.$$.fragment.c()},l(e){n.$$.fragment.l(e)},m(e,s){h(n,e,s),t=!0},p:d,i(e){t||(c(n.$$.fragment,e),t=!0)},o(e){a(n.$$.fragment,e),t=!1},d(e){p(n,e)}}}function te(e){var t,n,s,r;const l=e.$$slots.default,i=g(l,e,null);var u=new Z({props:{$$slots:{default:[ee]},$$scope:{ctx:e}}});return u.$on("click",e.onMenu),{c(){t=v("div"),n=v("div"),i&&i.c(),s=M(),u.$$.fragment.c(),this.h()},l(e){t=k(e,"DIV",{class:!0},!1);var o=b(t);n=k(o,"DIV",{class:!0},!1);var r=b(n);i&&i.l(r),s=C(r,"\n\n    "),u.$$.fragment.l(r),r.forEach($),o.forEach($),this.h()},h(){w(n,"class","container nav-icon svelte-1io6qkd"),w(t,"class","margin svelte-1io6qkd")},m(e,a){o(e,t,a),_(t,n),i&&i.m(n,null),_(n,s),h(u,n,null),r=!0},p(e,t){i&&i.p&&e.$$scope&&i.p(E(l,t,e,null),T(l,t,null));var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),u.$set(n)},i(e){r||(c(i,e),c(u.$$.fragment,e),r=!0)},o(e){a(i,e),a(u.$$.fragment,e),r=!1},d(e){e&&$(t),i&&i.d(e),p(u)}}}function ne(e,t,n){const s=x();let{$$slots:o={},$$scope:r}=t;return e.$set=e=>{"$$scope"in e&&n("$$scope",r=e.$$scope)},{onMenu:()=>s("menu"),$$slots:o,$$scope:r}}class se extends e{constructor(e){super(),t(this,e,ne,te,n,[])}}function oe(e){var t,n,s,r,l,i,h;const u=e.$$slots.default,p=g(u,e,null);return{c(){t=v("div"),n=v("div"),s=M(),r=v("div"),p&&p.c(),this.h()},l(e){t=k(e,"DIV",{hidden:!0},!1);var o=b(t);n=k(o,"DIV",{class:!0},!1),b(n).forEach($),s=C(o,"\n\t"),r=k(o,"DIV",{class:!0},!1);var a=b(r);p&&p.l(a),a.forEach($),o.forEach($),this.h()},h(){w(n,"class","overlay mask svelte-19kxwur"),w(r,"class","overlay container svelte-19kxwur"),t.hidden=l=!e.open,h=D(n,"click",e.onClose)},m(e,a){o(e,t,a),_(t,n),_(t,s),_(t,r),p&&p.m(r,null),i=!0},p(e,n){p&&p.p&&e.$$scope&&p.p(E(u,n,e,null),T(u,n,null)),i&&!e.open||l===(l=!n.open)||(t.hidden=l)},i(e){i||(c(p,e),i=!0)},o(e){a(p,e),i=!1},d(e){e&&$(t),p&&p.d(e),h()}}}function re(e,t,n){let{open:s=!1}=t;const o=x();let{$$slots:r={},$$scope:a}=t;return e.$set=e=>{"open"in e&&n("open",s=e.open),"$$scope"in e&&n("$$scope",a=e.$$scope)},{open:s,onClose:()=>o("close"),$$slots:r,$$scope:a}}class ae extends e{constructor(e){super(),t(this,e,re,oe,n,["open"])}}function le(e,t,n){const s=Object.create(e);return s.l=t[n],s}function ce(e){var t,n,s,r,a=e.l;return{c(){t=v("option"),n=I(a),s=M(),this.h()},l(e){t=k(e,"OPTION",{value:!0},!1);var o=b(t);n=C(o,a),s=C(o," "),o.forEach($),this.h()},h(){t.__value=r=e.l,t.value=t.__value},m(e,r){o(e,t,r),_(t,n),_(t,s)},p(e,s){e.$locales&&a!==(a=s.l)&&N(n,a),e.$locales&&r!==(r=s.l)&&(t.__value=r),t.value=t.__value},d(e){e&&$(t)}}}function $e(e){for(var t,n,s,r=e.$locales,a=[],l=0;l<r.length;l+=1)a[l]=ce(le(e,r,l));return{c(){t=v("select");for(var e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=k(e,"SELECT",{value:!0},!1);for(var n=b(t),s=0;s<a.length;s+=1)a[s].l(n);n.forEach($),this.h()},h(){s=D(t,"change",e.setLocale)},m(s,r){o(s,t,r);for(var l=0;l<a.length;l+=1)a[l].m(t,null);n=e.$locale;for(var c=0;c<t.options.length;c+=1){var $=t.options[c];if($.__value===n){$.selected=!0;break}}},p(e,s){if(e.$locales){r=s.$locales;for(var o=0;o<r.length;o+=1){const n=le(s,r,o);a[o]?a[o].p(e,n):(a[o]=ce(n),a[o].c(),a[o].m(t,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=r.length}if(e.$locale&&n!==(n=s.$locale))for(var l=0;l<t.options.length;l+=1){var c=t.options[l];if(c.__value===n){c.selected=!0;break}}},i:d,o:d,d(e){e&&$(t),V(a,e),s()}}}function ie(e,t,n){let s,o;i(e,j,e=>{n("$locale",s=e)}),i(e,L,e=>{n("$locales",o=e)});return{setLocale:e=>j.set(e.target.value),$locale:s,$locales:o}}class he extends e{constructor(e){super(),t(this,e,ie,$e,n,[])}}function ue(e,t,n){const s=Object.create(e);return s.path=t[n].path,s.icon=t[n].icon,s.title=t[n].title,s}function pe(e){var t,n,s=e.$_(e.currentRoute.title);return{c(){t=v("div"),n=I(s),this.h()},l(e){t=k(e,"DIV",{class:!0},!1);var o=b(t);n=C(o,s),o.forEach($),this.h()},h(){w(t,"class","page-title svelte-1kau3dk")},m(e,s){o(e,t,s),_(t,n)},p(e,t){(e.$_||e.currentRoute)&&s!==(s=t.$_(t.currentRoute.title))&&N(n,s)},d(e){e&&$(t)}}}function fe(e,t){var n,s,i,u,f,m,d,g,E,T,x=t.$_(t.title),V=t.icon;if(V)var O=new V({});return{key:e,first:null,c(){n=v("a"),s=v("div"),O&&O.$$.fragment.c(),i=M(),u=v("div"),f=I(x),d=M(),this.h()},l(e){n=k(e,"A",{rel:!0,href:!0,class:!0},!1);var t=b(n);s=k(t,"DIV",{class:!0},!1);var o=b(s);O&&O.$$.fragment.l(o),o.forEach($),i=C(t,"\n\t\t\t\t"),u=k(t,"DIV",{class:!0,href:!0},!1);var r=b(u);f=C(r,x),r.forEach($),d=C(t,"\n\t\t\t"),t.forEach($),this.h()},h(){w(s,"class","item-icon svelte-1kau3dk"),w(u,"class","item-title"),w(u,"href",m=t.path),w(n,"rel","prefetch"),w(n,"href",g=`${t.basepath}/${t.path}`),w(n,"class","item-container svelte-1kau3dk"),y(n,"selected",t.path===t.parsedSegment),T=D(n,"click",t.toggleMenu),this.first=n},m(e,t){o(e,n,t),_(n,s),O&&h(O,s,null),_(n,i),_(n,u),_(u,f),_(n,d),E=!0},p(e,t){if(V!==(V=t.icon)){if(O){r();const e=O;a(e.$$.fragment,1,()=>{p(e)}),l()}V?((O=new V({})).$$.fragment.c(),c(O.$$.fragment,1),h(O,s,null)):O=null}E&&!e.$_&&!e.routes||x===(x=t.$_(t.title))||N(f,x),E&&!e.routes||m===(m=t.path)||w(u,"href",m),E&&!e.basepath&&!e.routes||g===(g=`${t.basepath}/${t.path}`)||w(n,"href",g),(e.routes||e.parsedSegment)&&y(n,"selected",t.path===t.parsedSegment)},i(e){E||(O&&c(O.$$.fragment,e),E=!0)},o(e){O&&a(O.$$.fragment,e),E=!1},d(e){e&&$(n),O&&p(O),T()}}}function me(e){var t,n,s,i,u=[],f=new Map,m=e.routes;const d=e=>e.path;for(var g=0;g<m.length;g+=1){let t=ue(e,m,g),n=d(t);f.set(n,u[g]=fe(n,t))}var D=new he({});return{c(){for(t=v("nav"),g=0;g<u.length;g+=1)u[g].c();n=M(),s=v("div"),D.$$.fragment.c(),this.h()},l(e){t=k(e,"NAV",{class:!0},!1);var o=b(t);for(g=0;g<u.length;g+=1)u[g].l(o);o.forEach($),n=C(e,"\n\t"),s=k(e,"DIV",{class:!0},!1);var r=b(s);D.$$.fragment.l(r),r.forEach($),this.h()},h(){w(t,"class","container noise svelte-1kau3dk"),w(s,"class","language-container svelte-1kau3dk")},m(e,r){for(o(e,t,r),g=0;g<u.length;g+=1)u[g].m(t,null);o(e,n,r),o(e,s,r),h(D,s,null),i=!0},p(e,n){const s=n.routes;r(),u=O(u,e,d,1,n,s,f,t,S,fe,null,ue),l()},i(e){if(!i){for(var t=0;t<m.length;t+=1)c(u[t]);c(D.$$.fragment,e),i=!0}},o(e){for(g=0;g<u.length;g+=1)a(u[g]);a(D.$$.fragment,e),i=!1},d(e){for(e&&$(t),g=0;g<u.length;g+=1)u[g].d();e&&($(n),$(s)),p(D)}}}function de(e){var t,n,s=new se({props:{$$slots:{default:[pe]},$$scope:{ctx:e}}});s.$on("menu",e.toggleMenu);var r=new ae({props:{open:e.menuOpen,$$slots:{default:[me]},$$scope:{ctx:e}}});return r.$on("close",e.toggleMenu),{c(){s.$$.fragment.c(),t=M(),r.$$.fragment.c()},l(e){s.$$.fragment.l(e),t=C(e,"\n\n"),r.$$.fragment.l(e)},m(e,a){h(s,e,a),o(e,t,a),h(r,e,a),n=!0},p(e,t){var n={};(e.$$scope||e.$_||e.currentRoute)&&(n.$$scope={changed:e,ctx:t}),s.$set(n);var o={};e.menuOpen&&(o.open=t.menuOpen),(e.$$scope||e.routes||e.basepath||e.parsedSegment||e.$_)&&(o.$$scope={changed:e,ctx:t}),r.$set(o)},i(e){n||(c(s.$$.fragment,e),c(r.$$.fragment,e),n=!0)},o(e){a(s.$$.fragment,e),a(r.$$.fragment,e),n=!1},d(e){p(s,e),e&&$(t),p(r,e)}}}function ge(e,t,n){let s;i(e,A,e=>{n("$_",s=e)});let{segment:o="",routes:r=[],basepath:a=""}=t,l=!1;let c,$;return e.$set=e=>{"segment"in e&&n("segment",o=e.segment),"routes"in e&&n("routes",r=e.routes),"basepath"in e&&n("basepath",a=e.basepath)},e.$$.update=(e={segment:1,routes:1,parsedSegment:1})=>{e.segment&&n("parsedSegment",c="/"===o?"":o||""),(e.routes||e.parsedSegment)&&n("currentRoute",$=r.find(e=>e.path===c))},{segment:o,routes:r,basepath:a,menuOpen:l,toggleMenu:()=>{n("menuOpen",l=!l)},parsedSegment:c,currentRoute:$,$_:s}}class ve extends e{constructor(e){super(),t(this,e,ge,de,n,["segment","routes","basepath"])}}function ke(e){var t,n,s,r,l,i=new Q({props:{Default:ve,Desktop:we,props:{segment:e.segment,routes:z,basepath:be}}});const u=e.$$slots.default,f=g(u,e,null);return{c(){t=v("meta"),s=M(),i.$$.fragment.c(),r=M(),f&&f.c(),this.h()},l(e){t=k(e,"META",{name:!0,content:!0},!1),b(t).forEach($),s=C(e,"\n\n"),i.$$.fragment.l(e),r=C(e,"\n\n"),f&&f.l(e),this.h()},h(){w(t,"name","Description"),w(t,"content",n=e.$_("metaDescription")+", "+e.$_("artistPage.metaDescription"))},m(e,n){_(document.head,t),o(e,s,n),h(i,e,n),o(e,r,n),f&&f.m(e,n),l=!0},p(e,s){l&&!e.$_||n===(n=s.$_("metaDescription")+", "+s.$_("artistPage.metaDescription"))||w(t,"content",n);var o={};e.NavMobile&&(o.Default=ve),(e.segment||e.routes||e.basepath)&&(o.props={segment:s.segment,routes:z,basepath:be}),i.$set(o),f&&f.p&&e.$$scope&&f.p(E(u,s,e,null),T(u,s,null))},i(e){l||(c(i.$$.fragment,e),c(f,e),l=!0)},o(e){a(i.$$.fragment,e),a(f,e),l=!1},d(e){$(t),e&&$(s),p(i,e),e&&$(r),f&&f.d(e)}}}const be="artist";function we(){return import("./NavDesktop.968b9b08.js")}function De(e,t,n){let s;i(e,A,e=>{n("$_",s=e)});let{segment:o}=t,{$$slots:r={},$$scope:a}=t;return e.$set=e=>{"segment"in e&&n("segment",o=e.segment),"$$scope"in e&&n("$$scope",a=e.$$scope)},{segment:o,$_:s,$$slots:r,$$scope:a}}export default class extends e{constructor(e){super(),t(this,e,De,ke,n,["segment"])}}
//# sourceMappingURL=_layout.a61a537c.js.map