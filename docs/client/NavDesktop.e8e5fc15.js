import{S as e,i as t,s,l as a,z as n,x as r,p as c,q as l,y as h,d as o,B as i,a as m,t as f,n as u,H as g}from"./chunk.1a0f83e2.js";import{m as p}from"./chunk.ac4dc9d7.js";function v(e,t,s){const a=Object.create(e);return a.path=t[s].path,a.icon=t[s].icon,a.title=t[s].title,a}function d(e){var t,s,u,g,p=e.title;return{c(){t=a("div"),s=a("a"),u=n(p),g=r(),this.h()},l(e){t=c(e,"DIV",{class:!0},!1);var a=l(t);s=c(a,"A",{class:!0,href:!0},!1);var n=l(s);u=h(n,p),n.forEach(o),g=h(a,"\n\t\t"),a.forEach(o),this.h()},h(){s.className="item-title",s.href=e.path,t.className="item-container svelte-p34j56",i(t,"selected",e.segment===e.path)},m(e,a){m(e,t,a),f(t,s),f(s,u),f(t,g)},p(e,s){(e.segment||e.menuRoutes)&&i(t,"selected",s.segment===s.path)},d(e){e&&o(t)}}}function j(e){for(var t,s=p,n=[],r=0;r<s.length;r+=1)n[r]=d(v(e,s,r));return{c(){t=a("nav");for(var e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){t=c(e,"NAV",{class:!0},!1);for(var s=l(t),a=0;a<n.length;a+=1)n[a].l(s);s.forEach(o),this.h()},h(){t.className="container svelte-p34j56"},m(e,s){m(e,t,s);for(var a=0;a<n.length;a+=1)n[a].m(t,null)},p(e,a){if(e.segment||e.menuRoutes){s=p;for(var r=0;r<s.length;r+=1){const c=v(a,s,r);n[r]?n[r].p(e,c):(n[r]=d(c),n[r].c(),n[r].m(t,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=s.length}},i:u,o:u,d(e){e&&o(t),g(n,e)}}}function N(e,t,s){let{segment:a=""}=t;return e.$set=(e=>{"segment"in e&&s("segment",a=e.segment)}),{segment:a}}export default class extends e{constructor(e){super(),t(this,e,N,j,s,["segment"])}}
//# sourceMappingURL=NavDesktop.e8e5fc15.js.map