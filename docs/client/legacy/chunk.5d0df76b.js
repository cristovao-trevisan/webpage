import{_ as t,a as n,b as a,c as i,i as s,s as c,d as e,S as f,f as l,v as r,h as o,j as u,l as h,k as v,m as $,o as m,n as p,w as g,g as d,A as E,E as k,r as w,C as b,F as j,t as A}from"./chunk.585d01de.js";function D(t){var n,a;return{c:function(){n=l("div"),a=r(t.title),this.h()},l:function(i){n=o(i,"DIV",{class:!0},!1);var s=u(n);a=h(s,t.title),s.forEach(v),this.h()},h:function(){$(n,"class","title svelte-1ugf982")},m:function(t,i){m(t,n,i),p(n,a)},p:function(t,n){t.title&&g(a,n.title)},d:function(t){t&&v(n)}}}function I(t){var n,a,i,s,c=t.icon;if(c)var e=new c({});var f=t.title&&D(t);return{c:function(){n=l("a"),a=l("div"),e&&e.$$.fragment.c(),i=d(),f&&f.c(),this.h()},l:function(t){n=o(t,"A",{href:!0,class:!0,target:!0},!1);var s=u(n);a=o(s,"DIV",{class:!0},!1);var c=u(a);e&&e.$$.fragment.l(c),c.forEach(v),i=h(s,"\n  "),f&&f.l(s),s.forEach(v),this.h()},h:function(){$(a,"class","icon svelte-1ugf982"),$(n,"href",t.path),$(n,"class","container svelte-1ugf982"),$(n,"target","_blank")},m:function(t,c){m(t,n,c),p(n,a),e&&E(e,a,null),p(n,i),f&&f.m(n,null),s=!0},p:function(t,i){if(c!==(c=i.icon)){if(e){k();var l=e;w(l.$$.fragment,1,function(){b(l)}),j()}c?((e=new c({})).$$.fragment.c(),A(e.$$.fragment,1),E(e,a,null)):e=null}i.title?f?f.p(t,i):((f=D(i)).c(),f.m(n,null)):f&&(f.d(1),f=null),s&&!t.path||$(n,"href",i.path)},i:function(t){s||(e&&A(e.$$.fragment,t),s=!0)},o:function(t){e&&w(e.$$.fragment,t),s=!1},d:function(t){t&&v(n),e&&b(e),f&&f.d()}}}function S(t,n,a){var i=n.icon,s=n.path,c=n.title;return t.$set=function(t){"icon"in t&&a("icon",i=t.icon),"path"in t&&a("path",s=t.path),"title"in t&&a("title",c=t.title)},{icon:i,path:s,title:c}}var V=function(l){function r(t){var f;return n(this,r),f=a(this,i(r).call(this)),s(e(f),t,S,I,c,["icon","path","title"]),f}return t(r,f),r}();export{V as S};
//# sourceMappingURL=chunk.5d0df76b.js.map