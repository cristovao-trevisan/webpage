import{S as e,a as t,s,e as a,t as r,o as n,d as h,f as o,h as l,j as c,L as p,k as i,l as m,m as u,n as f,K as g,C as d}from"./chunk.af07e894.js";import{_ as v}from"./chunk.c28bb2eb.js";function b(e,t,s){const a=Object.create(e);return a.path=t[s].path,a.icon=t[s].icon,a.title=t[s].title,a}function $(e){var t,s,f,g,d,v=e.$_(e.title);return{c(){t=a("div"),s=a("a"),f=r(v),d=n(),this.h()},l(e){t=h(e,"DIV",{class:!0},!1);var a=o(t);s=h(a,"A",{rel:!0,class:!0,href:!0},!1);var r=o(s);f=l(r,v),r.forEach(c),d=l(a,"\n\t\t"),a.forEach(c),this.h()},h(){s.rel="prefetch",s.className="item-title svelte-vxxkp6",s.href=g=`${e.basepath}/${e.path}`,t.className="item-container svelte-vxxkp6",p(t,"selected",e.parsedSegment===e.path)},m(e,a){i(e,t,a),m(t,s),m(s,f),m(t,d)},p(e,a){(e.$_||e.routes)&&v!==(v=a.$_(a.title))&&u(f,v),(e.basepath||e.routes)&&g!==(g=`${a.basepath}/${a.path}`)&&(s.href=g),(e.parsedSegment||e.routes)&&p(t,"selected",a.parsedSegment===a.path)},d(e){e&&c(t)}}}function x(e){for(var t,s=e.routes,r=[],n=0;n<s.length;n+=1)r[n]=$(b(e,s,n));return{c(){t=a("nav");for(var e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){t=h(e,"NAV",{class:!0},!1);for(var s=o(t),a=0;a<r.length;a+=1)r[a].l(s);s.forEach(c),this.h()},h(){t.className="container svelte-vxxkp6"},m(e,s){i(e,t,s);for(var a=0;a<r.length;a+=1)r[a].m(t,null)},p(e,a){if(e.parsedSegment||e.routes||e.basepath||e.$_){s=a.routes;for(var n=0;n<s.length;n+=1){const h=b(a,s,n);r[n]?r[n].p(e,h):(r[n]=$(h),r[n].c(),r[n].m(t,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=s.length}},i:f,o:f,d(e){e&&c(t),g(r,e)}}}function S(e,t,s){let a;d(e,v,e=>{s("$_",a=e)});let r,{routes:n=[],segment:h="",basepath:o=""}=t;return e.$set=(e=>{"routes"in e&&s("routes",n=e.routes),"segment"in e&&s("segment",h=e.segment),"basepath"in e&&s("basepath",o=e.basepath)}),e.$$.update=((e={segment:1})=>{e.segment&&s("parsedSegment",r="/"===h?"":h||"")}),{routes:n,segment:h,basepath:o,parsedSegment:r,$_:a}}export default class extends e{constructor(e){super(),t(this,e,S,x,s,["routes","segment","basepath"])}}
//# sourceMappingURL=NavDesktop.77d0450a.js.map