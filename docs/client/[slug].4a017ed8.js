import{S as t,i as s,s as a,x as o,l as e,z as n,y as i,p as r,q as p,d as l,a as c,t as u,E as h,n as f}from"./chunk.1a0f83e2.js";function m(t){var s,a,m,d,x,g,v=t.post.title,j=t.post.html;return document.title=s=t.post.title,{c(){a=o(),m=e("h1"),d=n(v),x=o(),g=e("div"),this.h()},l(t){a=i(t,"\n\n"),m=r(t,"H1",{},!1);var s=p(m);d=i(s,v),s.forEach(l),x=i(t,"\n\n"),g=r(t,"DIV",{class:!0},!1),p(g).forEach(l),this.h()},h(){g.className="content svelte-gnxal1"},m(t,s){c(t,a,s),c(t,m,s),u(m,d),c(t,x,s),c(t,g,s),g.innerHTML=j},p(t,a){t.post&&s!==(s=a.post.title)&&(document.title=s),t.post&&v!==(v=a.post.title)&&h(d,v),t.post&&j!==(j=a.post.html)&&(g.innerHTML=j)},i:f,o:f,d(t){t&&(l(a),l(m),l(x),l(g))}}}async function d({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),o=await a.json();if(200===a.status)return{post:o};this.error(a.status,o.message)}function x(t,s,a){let{post:o}=s;return t.$set=(t=>{"post"in t&&a("post",o=t.post)}),{post:o}}export default class extends t{constructor(t){super(),s(this,t,x,m,a,["post"])}}export{d as preload};
//# sourceMappingURL=[slug].4a017ed8.js.map