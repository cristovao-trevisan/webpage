!function(){"use strict";const e=["client/chunk.35138915.js","client/chunk.df4c7a1f.js","client/index.a30e2cf9.js","client/index.40808469.js","client/client.1ede07a6.js","client/chunk.5ee26ff1.js","client/index.6434bf63.js","client/about.3d5f643c.js","client/NavDesktop.a653ad4b.js","client/chunk.04354f7d.js","client/_layout.8268cb40.js"].concat(["service-worker-index.html",".nojekyll","favicon.png","fonts/street-slab/STRSL___.eot","fonts/street-slab/STRSL___.svg","fonts/street-slab/STRSL___.ttf","fonts/street-slab/STRSL___.woff","global.css","great-success.png","img/full/familia-nada-danca.jpg","img/full/o-pensador-com-duvida.png","img/main-links/artist.jpg","img/main-links/engineer.jpg","logo-192.png","logo-512.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1559632261845").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1559632261845"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1559632261845").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
