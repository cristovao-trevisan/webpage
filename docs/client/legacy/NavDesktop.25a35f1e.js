import{_ as t,a as e,b as a,c as n,i as s,d as r,s as o,S as c,h as i,t as h,q as u,j as f,k as l,l as p,m,Q as v,n as g,o as d,p as b,u as $,P as x,H as S}from"./chunk.05fd7ce5.js";import{_}from"./chunk.cca16f1b.js";function k(t,e,a){var n=Object.create(t);return n.path=e[a].path,n.icon=e[a].icon,n.title=e[a].title,n}function j(t){var e,a,n,s,r,o=t.$_(t.title);return{c:function(){e=i("div"),a=i("a"),n=h(o),r=u(),this.h()},l:function(t){e=f(t,"DIV",{class:!0},!1);var s=l(e);a=f(s,"A",{rel:!0,class:!0,href:!0},!1);var c=l(a);n=p(c,o),c.forEach(m),r=p(s,"\n\t\t"),s.forEach(m),this.h()},h:function(){a.rel="prefetch",a.className="item-title svelte-vxxkp6",a.href=s="".concat(t.basepath,"/").concat(t.path),e.className="item-container svelte-vxxkp6",v(e,"selected",t.parsedSegment===t.path)},m:function(t,s){g(t,e,s),d(e,a),d(a,n),d(e,r)},p:function(t,r){(t.$_||t.routes)&&o!==(o=r.$_(r.title))&&b(n,o),(t.basepath||t.routes)&&s!==(s="".concat(r.basepath,"/").concat(r.path))&&(a.href=s),(t.parsedSegment||t.routes)&&v(e,"selected",r.parsedSegment===r.path)},d:function(t){t&&m(e)}}}function N(t){for(var e,a=t.routes,n=[],s=0;s<a.length;s+=1)n[s]=j(k(t,a,s));return{c:function(){e=i("nav");for(var t=0;t<n.length;t+=1)n[t].c();this.h()},l:function(t){e=f(t,"NAV",{class:!0},!1);for(var a=l(e),s=0;s<n.length;s+=1)n[s].l(a);a.forEach(m),this.h()},h:function(){e.className="container svelte-vxxkp6"},m:function(t,a){g(t,e,a);for(var s=0;s<n.length;s+=1)n[s].m(e,null)},p:function(t,s){if(t.parsedSegment||t.routes||t.basepath||t.$_){a=s.routes;for(var r=0;r<a.length;r+=1){var o=k(s,a,r);n[r]?n[r].p(t,o):(n[r]=j(o),n[r].c(),n[r].m(e,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=a.length}},i:$,o:$,d:function(t){t&&m(e),x(n,t)}}}function E(t,e,a){var n;S(t,_,function(t){a("$_",n=t)});var s,r=e.routes,o=void 0===r?[]:r,c=e.segment,i=void 0===c?"":c,h=e.basepath,u=void 0===h?"":h;return t.$set=function(t){"routes"in t&&a("routes",o=t.routes),"segment"in t&&a("segment",i=t.segment),"basepath"in t&&a("basepath",u=t.basepath)},t.$$.update=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{segment:1}).segment&&a("parsedSegment",s="/"===i?"":i||"")},{routes:o,segment:i,basepath:u,parsedSegment:s,$_:n}}export default(function(i){function h(t){var c;return e(this,h),c=a(this,n(h).call(this)),s(r(c),t,E,N,o,["routes","segment","basepath"]),c}return t(h,c),h}());
//# sourceMappingURL=NavDesktop.25a35f1e.js.map
