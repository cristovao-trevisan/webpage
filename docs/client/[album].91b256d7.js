import{S as e,i as s,s as r,e as t,m as c,b as l,d as i,h as a,f as n,G as o,j as u,k as d,n as f,L as p,H as h,q as v,w as m,x as g,y as x,C as $,v as N}from"./chunk.82b045bf.js";import"./chunk.0be79653.js";import{a as k,A as y}from"./chunk.87e86692.js";function E(e){var s,r,h,v,m,g,x,$,N,k,y,E,b,w;return{c(){s=t("div"),r=t("div"),h=t("div"),v=c(),m=t("img"),g=c(),x=t("img"),$=c(),N=t("div"),k=t("div"),y=c(),E=t("div"),b=t("div"),this.h()},l(e){s=l(e,"DIV",{class:!0},!1);var t=i(s);r=l(t,"DIV",{class:!0},!1);var c=i(r);h=l(c,"DIV",{class:!0},!1),i(h).forEach(a),v=n(c,"\n    "),m=l(c,"IMG",{class:!0,src:!0,alt:!0},!1),i(m).forEach(a),g=n(c,"\n    "),x=l(c,"IMG",{class:!0,src:!0,alt:!0},!1),i(x).forEach(a),$=n(c,"\n    "),N=l(c,"DIV",{class:!0},!1);var o=i(N);k=l(o,"DIV",{class:!0},!1),i(k).forEach(a),o.forEach(a),y=n(c,"\n    "),E=l(c,"DIV",{class:!0},!1);var u=i(E);b=l(u,"DIV",{class:!0},!1),i(b).forEach(a),u.forEach(a),c.forEach(a),t.forEach(a),this.h()},h(){h.className="mask svelte-367gcx",m.className="blur svelte-367gcx",m.src=e.initial,m.alt="loading",x.className="image svelte-367gcx",x.src=e.src,x.alt="high resolution picture",k.className="icon svelte-367gcx",N.className="icon-left svelte-367gcx",b.className="icon svelte-367gcx",E.className="icon-right svelte-367gcx",r.className="container svelte-367gcx",s.className="overlay svelte-367gcx",w=[o(window,"keydown",e.handleKeydown),o(h,"click",e.onClose),o(N,"click",e.onPrevious),o(E,"click",e.onNext)]},m(e,t){u(e,s,t),d(s,r),d(r,h),d(r,v),d(r,m),d(r,g),d(r,x),d(r,$),d(r,N),d(N,k),d(r,y),d(r,E),d(E,b)},p(e,s){e.initial&&(m.src=s.initial),e.src&&(x.src=s.src)},i:f,o:f,d(e){e&&a(s),p(w)}}}function b(e,s,r){let{initial:t,src:c}=s;const l=h(),i=()=>l("close"),a=()=>l("next"),n=()=>l("previous");return e.$set=(e=>{"initial"in e&&r("initial",t=e.initial),"src"in e&&r("src",c=e.src)}),{initial:t,src:c,onClose:i,onNext:a,onPrevious:n,handleKeydown:e=>{"Escape"===e.key?i():"ArrowRight"===e.key?a():"ArrowLeft"===e.key&&n()}}}class w extends e{constructor(e){super(),s(this,e,b,E,r,["initial","src"])}}function I(e,s,r){const t=Object.create(e);return t.picture=s[r],t.index=r,t}function D(e){var s,r=new w({props:{initial:e.folder+"/blur/"+e.selected,src:e.folder+"/2048px/"+e.selected}});return r.$on("close",e.removeSelection),r.$on("next",e.onNext),r.$on("previous",e.onPrevious),{c(){r.$$.fragment.c()},l(e){r.$$.fragment.l(e)},m(e,t){v(r,e,t),s=!0},p(e,s){var t={};(e.folder||e.selected)&&(t.initial=s.folder+"/blur/"+s.selected),(e.folder||e.selected)&&(t.src=s.folder+"/2048px/"+s.selected),r.$set(t)},i(e){s||(r.$$.fragment.i(e),s=!0)},o(e){r.$$.fragment.o(e),s=!1},d(e){r.$destroy(e)}}}function V(e,s){var r,f,p,h,m=new y({props:{initial:s.folder+"/blur/"+s.picture,src:s.folder+"/400px/"+s.picture,alt:"picture-"+s.index}});return{key:e,first:null,c(){r=t("div"),m.$$.fragment.c(),f=c(),this.h()},l(e){r=l(e,"DIV",{class:!0},!1);var s=i(r);m.$$.fragment.l(s),f=n(s,"\n    "),s.forEach(a),this.h()},h(){r.className="image-container hoverlay svelte-1mlpagj",h=o(r,"click",s.selectPicture(s.picture,s.index)),this.first=r},m(e,s){u(e,r,s),v(m,r,null),d(r,f),p=!0},p(e,r){s=r;var t={};(e.folder||e.pictures)&&(t.initial=s.folder+"/blur/"+s.picture),(e.folder||e.pictures)&&(t.src=s.folder+"/400px/"+s.picture),e.pictures&&(t.alt="picture-"+s.index),m.$set(t)},i(e){p||(m.$$.fragment.i(e),p=!0)},o(e){m.$$.fragment.o(e),p=!1},d(e){e&&a(r),m.$destroy(),h()}}}function j(e){var s,r,o,d=[],f=new Map,p=e.selected&&D(e),h=e.pictures;const v=e=>e.picture;for(var k=0;k<h.length;k+=1){let s=I(e,h,k),r=v(s);f.set(r,d[k]=V(r,s))}return{c(){for(p&&p.c(),s=c(),r=t("div"),k=0;k<d.length;k+=1)d[k].c();this.h()},l(e){p&&p.l(e),s=n(e,"\n\n"),r=l(e,"DIV",{class:!0},!1);var t=i(r);for(k=0;k<d.length;k+=1)d[k].l(t);t.forEach(a),this.h()},h(){r.className="container svelte-1mlpagj"},m(e,t){for(p&&p.m(e,t),u(e,s,t),u(e,r,t),k=0;k<d.length;k+=1)d[k].m(r,null);o=!0},p(e,t){t.selected?p?(p.p(e,t),p.i(1)):((p=D(t)).c(),p.i(1),p.m(s.parentNode,s)):p&&(N(),m(()=>{p.d(1),p=null}),p.o(1),g());const c=t.pictures;N(),d=x(d,e,v,1,t,c,f,r,$,V,null,I),g()},i(e){if(!o){p&&p.i();for(var s=0;s<h.length;s+=1)d[s].i();o=!0}},o(e){for(p&&p.o(),k=0;k<d.length;k+=1)d[k].o();o=!1},d(e){for(p&&p.d(e),e&&(a(s),a(r)),k=0;k<d.length;k+=1)d[k].d()}}}async function P(e,s){const{album:r}=e.params,{folder:t,pictures:c}=k.find(e=>e.title===r);return{folder:t,pictures:c}}function A(e,s,r){let{folder:t,pictures:c}=s,l=null,i=-1;return e.$set=(e=>{"folder"in e&&r("folder",t=e.folder),"pictures"in e&&r("pictures",c=e.pictures)}),{folder:t,pictures:c,selected:l,selectPicture:(e,s)=>()=>{r("selected",l=e),i=s},removeSelection:()=>{r("selected",l=null)},onNext:()=>{i<c.length-1&&r("selected",l=c[i+=1])},onPrevious:()=>{i>0&&r("selected",l=c[i-=1])}}}export default class extends e{constructor(e){super(),s(this,e,A,j,r,["folder","pictures"])}}export{P as preload};
//# sourceMappingURL=[album].91b256d7.js.map
