import{_ as t,a as n,b as e,c as a,i as s,d as r,s as c,S as i,t as o,D as u,B as h,u as f,v as l,C as m,j as v,F as g,f as p,x as d,n as j,M as P}from"./chunk.605ae403.js";import{m as N}from"./chunk.b973cf34.js";function b(t,n,e){var a=Object.create(t);return a.path=n[e].path,a.icon=n[e].icon,a.title=n[e].title,a}function E(t){var n,e,a,s,r=t.title;return{c:function(){n=o("div"),e=o("a"),a=u(r),s=h(),this.h()},l:function(t){n=f(t,"DIV",{class:!0},!1);var c=l(n);e=f(c,"A",{class:!0,href:!0},!1);var i=l(e);a=m(i,r),i.forEach(v),s=m(c,"\n\t\t"),c.forEach(v),this.h()},h:function(){e.className="item-title",e.href=t.path,n.className="item-container svelte-p34j56",g(n,"selected",t.currentPath===t.path)},m:function(t,r){p(t,n,r),d(n,e),d(e,a),d(n,s)},p:function(t,e){(t.currentPath||t.menuRoutes)&&g(n,"selected",e.currentPath===e.path)},d:function(t){t&&v(n)}}}function $(t){for(var n,e=N,a=[],s=0;s<e.length;s+=1)a[s]=E(b(t,e,s));return{c:function(){n=o("nav");for(var t=0;t<a.length;t+=1)a[t].c();this.h()},l:function(t){n=f(t,"NAV",{class:!0},!1);for(var e=l(n),s=0;s<a.length;s+=1)a[s].l(e);e.forEach(v),this.h()},h:function(){n.className="container svelte-p34j56"},m:function(t,e){p(t,n,e);for(var s=0;s<a.length;s+=1)a[s].m(n,null)},p:function(t,s){if(t.currentPath||t.menuRoutes){e=N;for(var r=0;r<e.length;r+=1){var c=b(s,e,r);a[r]?a[r].p(t,c):(a[r]=E(c),a[r].c(),a[r].m(n,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=e.length}},i:j,o:j,d:function(t){t&&v(n),P(a,t)}}}function k(t,n,e){var a,s=n.segment;return t.$set=function(t){"segment"in t&&e("segment",s=t.segment)},t.$$.update=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{segment:1}).segment&&e("currentPath",a="/".concat(s||""))},{segment:s,currentPath:a}}export default(function(o){function u(t){var i;return n(this,u),i=e(this,a(u).call(this)),s(r(i),t,k,$,c,["segment"]),i}return t(u,i),u}());
//# sourceMappingURL=NavDesktop.c02125e9.js.map