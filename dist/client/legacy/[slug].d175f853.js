import{_ as t,a as s,b as n,c as a,i as e,d as o,s as r,S as i,B as u,t as c,D as p,C as f,u as h,v as l,j as m,f as v,x as d,I as x,n as b}from"./chunk.605ae403.js";import{_ as j,a as g}from"./chunk.836d822b.js";function k(t){var s,n,a,e,o,r,i=t.post.title,j=t.post.html;return document.title=s=t.post.title,{c:function(){n=u(),a=c("h1"),e=p(i),o=u(),r=c("div"),this.h()},l:function(t){n=f(t,"\n\n"),a=h(t,"H1",{},!1);var s=l(a);e=f(s,i),s.forEach(m),o=f(t,"\n\n"),r=h(t,"DIV",{class:!0},!1),l(r).forEach(m),this.h()},h:function(){r.className="content svelte-gnxal1"},m:function(t,s){v(t,n,s),v(t,a,s),d(a,e),v(t,o,s),v(t,r,s),r.innerHTML=j},p:function(t,n){t.post&&s!==(s=n.post.title)&&(document.title=s),t.post&&i!==(i=n.post.title)&&x(e,i),t.post&&j!==(j=n.post.html)&&(r.innerHTML=j)},i:b,o:b,d:function(t){t&&(m(n),m(a),m(o),m(r))}}}function y(t){return H.apply(this,arguments)}function H(){return(H=j(g.mark(function t(s){var n,a,e;return g.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.params,s.query,t.next=3,this.fetch("blog/".concat(n.slug,".json"));case 3:return a=t.sent,t.next=6,a.json();case 6:if(e=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{post:e});case 11:this.error(a.status,e.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function w(t,s,n){var a=s.post;return t.$set=function(t){"post"in t&&n("post",a=t.post)},{post:a}}export default(function(u){function c(t){var i;return s(this,c),i=n(this,a(c).call(this)),e(o(i),t,w,k,r,["post"]),i}return t(c,i),c}());export{y as preload};
//# sourceMappingURL=[slug].d175f853.js.map