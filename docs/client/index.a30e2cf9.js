import{S as t,i as s,s as e,e as a,m as i,t as r,b as l,d as n,h as c,f as o,j as h,k as m,l as v,y as f,z as u,n as d,A as g}from"./chunk.df4c7a1f.js";import{_ as k,l as p}from"./chunk.04354f7d.js";function C(t,s,e){const a=Object.create(t);return a.image=s[e].image,a.title=s[e].title,a.path=s[e].path,a}function $(t,s){var e,f,u,d,g,k,p=s.$_(s.title);return{key:t,first:null,c(){e=a("a"),f=a("img"),d=i(),g=a("div"),k=r(p),this.h()},l(t){e=l(t,"A",{href:!0,class:!0},!1);var s=n(e);f=l(s,"IMG",{class:!0,src:!0,alt:!0},!1),n(f).forEach(c),d=o(s,"\n\t\t\t\t"),g=l(s,"DIV",{class:!0},!1);var a=n(g);k=o(a,p),a.forEach(c),s.forEach(c),this.h()},h(){f.className="link-image svelte-29s3ki",f.src=s.image,f.alt=u=s.$_(s.title),g.className="link-text svelte-29s3ki",e.href=s.path,e.className="link-container svelte-29s3ki",this.first=e},m(t,s){h(t,e,s),m(e,f),m(e,d),m(e,g),m(g,k)},p(t,s){t.$_&&u!==(u=s.$_(s.title))&&(f.alt=u),t.$_&&p!==(p=s.$_(s.title))&&v(k,p)},d(t){t&&c(e)}}}function E(t){var s,e,i,v,f;return{c(){s=a("div"),e=r("Cristóvão is a direct reference to Christopher\n\t\t\t("),i=a("code"),v=r("'Cristóvão Colombo' = 'Christopher Columbus'"),f=r("),\n\t\t\tso feel free to call me Chris."),this.h()},l(t){s=l(t,"DIV",{class:!0},!1);var a=n(s);e=o(a,"Cristóvão is a direct reference to Christopher\n\t\t\t("),i=l(a,"CODE",{class:!0},!1);var r=n(i);v=o(r,"'Cristóvão Colombo' = 'Christopher Columbus'"),r.forEach(c),f=o(a,"),\n\t\t\tso feel free to call me Chris."),a.forEach(c),this.h()},h(){i.className="svelte-29s3ki",s.className="curiosity svelte-29s3ki"},m(t,a){h(t,s,a),m(s,e),m(s,i),m(i,v),m(s,f)},d(t){t&&c(s)}}}function _(t){var s,e,g,k,p,_,N,D,I,V,b,j,y,w,x=t.$_("what are you interested in?"),T=[],A=new Map,M=t.items;const O=t=>t.title;for(var z=0;z<M.length;z+=1){let s=C(t,M,z),e=O(s);A.set(e,T[z]=$(e,s))}var G="en"===t.$locale&&E();return{c(){for(s=i(),e=a("h1"),g=a("div"),k=r("Cristóvão"),p=i(),_=a("div"),N=r("Trevisan"),D=i(),I=a("div"),V=a("div"),b=r(x),j=i(),y=a("div"),z=0;z<T.length;z+=1)T[z].c();w=i(),G&&G.c(),this.h()},l(t){s=o(t,"\n\n"),e=l(t,"H1",{class:!0},!1);var a=n(e);g=l(a,"DIV",{},!1);var i=n(g);k=o(i,"Cristóvão"),i.forEach(c),p=o(a,"\n\t"),_=l(a,"DIV",{},!1);var r=n(_);N=o(r,"Trevisan"),r.forEach(c),a.forEach(c),D=o(t,"\n\n\n\n"),I=l(t,"DIV",{class:!0},!1);var h=n(I);V=l(h,"DIV",{class:!0},!1);var m=n(V);b=o(m,x),m.forEach(c),j=o(h,"\n\t"),y=l(h,"DIV",{class:!0},!1);var v=n(y);for(z=0;z<T.length;z+=1)T[z].l(v);v.forEach(c),w=o(h,"\n\n\t"),G&&G.l(h),h.forEach(c),this.h()},h(){document.title=" Cristóvão Trevisan ",e.className="title svelte-29s3ki",V.className="curiosity svelte-29s3ki",y.className="links svelte-29s3ki",I.className="container svelte-29s3ki"},m(t,a){for(h(t,s,a),h(t,e,a),m(e,g),m(g,k),m(e,p),m(e,_),m(_,N),h(t,D,a),h(t,I,a),m(I,V),m(V,b),m(I,j),m(I,y),z=0;z<T.length;z+=1)T[z].m(y,null);m(I,w),G&&G.m(I,null)},p(t,s){t.$_&&x!==(x=s.$_("what are you interested in?"))&&v(b,x);const e=s.items;T=f(T,t,O,1,s,e,A,y,u,$,null,C),"en"===s.$locale?G||((G=E()).c(),G.m(I,null)):G&&(G.d(1),G=null)},i:d,o:d,d(t){for(t&&(c(s),c(e),c(D),c(I)),z=0;z<T.length;z+=1)T[z].d();G&&G.d()}}}function N(t,s,e){let a,i;g(t,k,t=>{e("$_",a=t)}),g(t,p,t=>{e("$locale",i=t)});return{items:[{path:"artist",title:"artist",image:"img/main-links/artist.jpg"},{path:"engineer",title:"engineer",image:"img/main-links/engineer.jpg"}],$_:a,$locale:i}}export default class extends t{constructor(t){super(),s(this,t,N,_,e,[])}}
//# sourceMappingURL=index.a30e2cf9.js.map
