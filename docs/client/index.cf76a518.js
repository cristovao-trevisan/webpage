import{S as t,i as e,s,e as a,m as r,t as i,b as l,d as n,h as c,f as o,j as f,k as h,l as m,y as v,z as u,n as d,A as g}from"./chunk.df4c7a1f.js";import{_ as p,l as C}from"./chunk.04354f7d.js";function b(t,e,s){const a=Object.create(t);return a.image=e[s].image,a.title=e[s].title,a.path=e[s].path,a}function j(t,e){var s,v,u,d,g,p,C=e.$_(e.title);return{key:t,first:null,c(){s=a("a"),v=a("img"),d=r(),g=a("div"),p=i(C),this.h()},l(t){s=l(t,"A",{href:!0,class:!0},!1);var e=n(s);v=l(e,"IMG",{class:!0,src:!0,alt:!0},!1),n(v).forEach(c),d=o(e,"\n\t\t\t\t"),g=l(e,"DIV",{class:!0},!1);var a=n(g);p=o(a,C),a.forEach(c),e.forEach(c),this.h()},h(){v.className="link-image svelte-17jmffb",v.src=e.image,v.alt=u=e.$_(e.title),g.className="link-text svelte-17jmffb",s.href=e.path,s.className="link-container svelte-17jmffb",this.first=s},m(t,e){f(t,s,e),h(s,v),h(s,d),h(s,g),h(g,p)},p(t,e){t.$_&&u!==(u=e.$_(e.title))&&(v.alt=u),t.$_&&C!==(C=e.$_(e.title))&&m(p,C)},d(t){t&&c(s)}}}function $(t){var e,s,r,m,v;return{c(){e=a("div"),s=i("Cristóvão is a direct reference to Christopher\n\t\t\t("),r=a("code"),m=i("'Cristóvão Colombo' = 'Christopher Columbus'"),v=i("),\n\t\t\tso feel free to call me Chris."),this.h()},l(t){e=l(t,"DIV",{class:!0},!1);var a=n(e);s=o(a,"Cristóvão is a direct reference to Christopher\n\t\t\t("),r=l(a,"CODE",{class:!0},!1);var i=n(r);m=o(i,"'Cristóvão Colombo' = 'Christopher Columbus'"),i.forEach(c),v=o(a,"),\n\t\t\tso feel free to call me Chris."),a.forEach(c),this.h()},h(){r.className="svelte-17jmffb",e.className="curiosity svelte-17jmffb"},m(t,a){f(t,e,a),h(e,s),h(e,r),h(r,m),h(e,v)},d(t){t&&c(e)}}}function E(t){var e,s,g,p,C,E,_,k,N,D,I,V,y,w,x=t.$_("what are you interested in?"),T=[],A=new Map,M=t.items;const O=t=>t.title;for(var z=0;z<M.length;z+=1){let e=b(t,M,z),s=O(e);A.set(s,T[z]=j(s,e))}var G="en"===t.$locale&&$();return{c(){for(e=r(),s=a("h1"),g=a("div"),p=i("Cristóvão"),C=r(),E=a("div"),_=i("Trevisan"),k=r(),N=a("div"),D=a("div"),I=i(x),V=r(),y=a("div"),z=0;z<T.length;z+=1)T[z].c();w=r(),G&&G.c(),this.h()},l(t){e=o(t,"\n\n"),s=l(t,"H1",{class:!0},!1);var a=n(s);g=l(a,"DIV",{},!1);var r=n(g);p=o(r,"Cristóvão"),r.forEach(c),C=o(a,"\n\t"),E=l(a,"DIV",{},!1);var i=n(E);_=o(i,"Trevisan"),i.forEach(c),a.forEach(c),k=o(t,"\n\n\n\n"),N=l(t,"DIV",{class:!0},!1);var f=n(N);D=l(f,"DIV",{class:!0},!1);var h=n(D);I=o(h,x),h.forEach(c),V=o(f,"\n\t"),y=l(f,"DIV",{class:!0},!1);var m=n(y);for(z=0;z<T.length;z+=1)T[z].l(m);m.forEach(c),w=o(f,"\n\n\t"),G&&G.l(f),f.forEach(c),this.h()},h(){document.title=" Cristóvão Trevisan ",s.className="title svelte-17jmffb",D.className="curiosity svelte-17jmffb",y.className="links svelte-17jmffb",N.className="container svelte-17jmffb"},m(t,a){for(f(t,e,a),f(t,s,a),h(s,g),h(g,p),h(s,C),h(s,E),h(E,_),f(t,k,a),f(t,N,a),h(N,D),h(D,I),h(N,V),h(N,y),z=0;z<T.length;z+=1)T[z].m(y,null);h(N,w),G&&G.m(N,null)},p(t,e){t.$_&&x!==(x=e.$_("what are you interested in?"))&&m(I,x);const s=e.items;T=v(T,t,O,1,e,s,A,y,u,j,null,b),"en"===e.$locale?G||((G=$()).c(),G.m(N,null)):G&&(G.d(1),G=null)},i:d,o:d,d(t){for(t&&(c(e),c(s),c(k),c(N)),z=0;z<T.length;z+=1)T[z].d();G&&G.d()}}}function _(t,e,s){let a,r;g(t,p,t=>{s("$_",a=t)}),g(t,C,t=>{s("$locale",r=t)});return{items:[{path:"artist",title:"artist",image:"img/main-links/artist.jpg"},{path:"engineer",title:"engineer",image:"img/main-links/engineer.jpg"}],$_:a,$locale:r}}export default class extends t{constructor(t){super(),e(this,t,_,E,s,[])}}
//# sourceMappingURL=index.cf76a518.js.map