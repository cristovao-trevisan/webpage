import n from"@babel/runtime/helpers/esm/typeof";import"@babel/runtime/helpers/esm/get";import r from"@babel/runtime/helpers/esm/classCallCheck";import t from"@babel/runtime/helpers/esm/createClass";import a from"@babel/runtime/helpers/esm/possibleConstructorReturn";import e from"@babel/runtime/helpers/esm/getPrototypeOf";import i from"@babel/runtime/helpers/esm/inherits";import o from"@babel/runtime/helpers/esm/wrapNativeSuper";import"@babel/runtime/helpers/esm/toConsumableArray";import"@babel/runtime/helpers/esm/defineProperty";function l(n,r){return n(r={exports:{}},r.exports),r.exports}function c(){}function u(n){return n()}function s(n){n.forEach(u)}function d(r){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c,e=[];function i(a){if(o=a,(i=r)!=i?o==o:i!==o||i&&"object"===n(i)||"function"==typeof i){if(r=a,!t)return;e.forEach(function(n){return n[1]()}),e.forEach(function(n){return n[0](r)})}var i,o}return{set:i,update:function(n){i(n(r))},subscribe:function(n){var o=[n,arguments.length>1&&void 0!==arguments[1]?arguments[1]:c];return e.push(o),1===e.length&&(t=a(i)||c),n(r),function(){var n=e.indexOf(o);-1!==n&&e.splice(n,1),0===e.length&&t()}}}}function f(n,r,t){var a=!Array.isArray(n),e=a?[n]:n,i=r.length<2;return{subscribe:d(t,function(n){var t=!1,o=[],l=0,u=c,d=function(){if(!l){u();var t=r(a?o[0]:o,n);i?n(t):u="function"==typeof t?t:c}},f=e.map(function(n,r){return n.subscribe(function(n){o[r]=n,l&=~(1<<r),t&&d()},function(){l|=1<<r})});return t=!0,d(),function(){s(f),u()}}).subscribe}}function h(n){var r;return n.subscribe(function(n){return r=n})(),r}"undefined"!=typeof HTMLElement&&o(HTMLElement);var m=l(function(n,r){var t="{",a="}",e=",",i="#",o="<",l=">",c="</",u="/>",s="'",d="offset:",f=["number","date","time","ordinal","duration","spellout"],h=["plural","select","selectordinal"];function m(n,r){var t=n.pattern,e=t.length,i=[],o=n.index,l=p(n,r);for(l&&i.push(l),l&&n.tokens&&n.tokens.push(["text",t.slice(o,n.index)]);n.index<e;){if(t[n.index]===a){if(!r)throw w(n);break}if(r&&n.tagsType&&t.slice(n.index,n.index+c.length)===c)break;i.push(v(n)),o=n.index,(l=p(n,r))&&i.push(l),l&&n.tokens&&n.tokens.push(["text",t.slice(o,n.index)])}return i}function p(n,r){for(var e=n.pattern,l=e.length,c="plural"===r||"selectordinal"===r,u=!!n.tagsType,d="{style}"===r,f="";n.index<l;){var h=e[n.index];if(h===t||h===a||c&&h===i||u&&h===o||d&&g(h.charCodeAt(0)))break;if(h===s)if((h=e[++n.index])===s)f+=h,++n.index;else if(h===t||h===a||c&&h===i||u&&h===o||d)for(f+=h;++n.index<l;)if((h=e[n.index])===s&&e[n.index+1]===s)f+=s,++n.index;else{if(h===s){++n.index;break}f+=h}else f+=s;else f+=h,++n.index}return f}function g(n){return n>=9&&n<=13||32===n||133===n||160===n||6158===n||n>=8192&&n<=8205||8232===n||8233===n||8239===n||8287===n||8288===n||12288===n||65279===n}function b(n){for(var r=n.pattern,t=r.length,a=n.index;n.index<t&&g(r.charCodeAt(n.index));)++n.index;a<n.index&&n.tokens&&n.tokens.push(["space",n.pattern.slice(a,n.index)])}function v(n){var r=n.pattern;if(r[n.index]===i)return n.tokens&&n.tokens.push(["syntax",i]),++n.index,[i];var s=function(n){var r=n.tagsType;if(!r||n.pattern[n.index]!==o)return;if(n.pattern.slice(n.index,n.index+c.length)===c)throw w(n,null,"closing tag without matching opening tag");n.tokens&&n.tokens.push(["syntax",o]);++n.index;var t=x(n,!0);if(!t)throw w(n,"placeholder id");n.tokens&&n.tokens.push(["id",t]);if(b(n),n.pattern.slice(n.index,n.index+u.length)===u)return n.tokens&&n.tokens.push(["syntax",u]),n.index+=u.length,[t,r];if(n.pattern[n.index]!==l)throw w(n,l);n.tokens&&n.tokens.push(["syntax",l]);++n.index;var a=m(n,r),e=n.index;if(n.pattern.slice(n.index,n.index+c.length)!==c)throw w(n,c+t+l);n.tokens&&n.tokens.push(["syntax",c]);n.index+=c.length;var i=x(n,!0);i&&n.tokens&&n.tokens.push(["id",i]);if(t!==i)throw n.index=e,w(n,c+t+l,c+i+l);if(b(n),n.pattern[n.index]!==l)throw w(n,l);n.tokens&&n.tokens.push(["syntax",l]);return++n.index,[t,r,{children:a}]}(n);if(s)return s;if(r[n.index]!==t)throw w(n,t);n.tokens&&n.tokens.push(["syntax",t]),++n.index,b(n);var h=x(n);if(!h)throw w(n,"placeholder id");n.tokens&&n.tokens.push(["id",h]),b(n);var p=r[n.index];if(p===a)return n.tokens&&n.tokens.push(["syntax",a]),++n.index,[h];if(p!==e)throw w(n,e+" or "+a);n.tokens&&n.tokens.push(["syntax",e]),++n.index,b(n);var g,v=x(n);if(!v)throw w(n,"placeholder type");if(n.tokens&&n.tokens.push(["type",v]),b(n),(p=r[n.index])===a){if(n.tokens&&n.tokens.push(["syntax",a]),"plural"===v||"selectordinal"===v||"select"===v)throw w(n,v+" sub-messages");return++n.index,[h,v]}if(p!==e)throw w(n,e+" or "+a);if(n.tokens&&n.tokens.push(["syntax",e]),++n.index,b(n),"plural"===v||"selectordinal"===v){var M=function(n){var r=n.pattern,t=r.length,a=0;if(r.slice(n.index,n.index+d.length)===d){n.tokens&&n.tokens.push(["offset","offset"],["syntax",":"]),n.index+=d.length,b(n);for(var e=n.index;n.index<t&&((i=r.charCodeAt(n.index))>=48&&i<=57);)++n.index;if(e===n.index)throw w(n,"offset number");n.tokens&&n.tokens.push(["number",r.slice(e,n.index)]),a=+r.slice(e,n.index)}var i;return a}(n);b(n),g=[h,v,M,k(n,v)]}else if("select"===v)g=[h,v,k(n,v)];else if(f.indexOf(v)>=0)g=[h,v,y(n)];else{var j=n.index,D=y(n);b(n),r[n.index]===t&&(n.index=j,D=k(n,v)),g=[h,v,D]}if(b(n),r[n.index]!==a)throw w(n,a);return n.tokens&&n.tokens.push(["syntax",a]),++n.index,g}function x(n,r){for(var c=n.pattern,u=c.length,d="";n.index<u;){var f=c[n.index];if(f===t||f===a||f===e||f===i||f===s||g(f.charCodeAt(0))||r&&(f===o||f===l||"/"===f))break;d+=f,++n.index}return d}function y(n){var r=n.index,t=p(n,"{style}");if(!t)throw w(n,"placeholder style name");return n.tokens&&n.tokens.push(["style",n.pattern.slice(r,n.index)]),t}function k(n,r){for(var t=n.pattern,e=t.length,i={};n.index<e&&t[n.index]!==a;){var o=x(n);if(!o)throw w(n,"sub-message selector");n.tokens&&n.tokens.push(["selector",o]),b(n),i[o]=M(n,r),b(n)}if(!i.other&&h.indexOf(r)>=0)throw w(n,null,null,'"other" sub-message must be specified in '+r);return i}function M(n,r){if(n.pattern[n.index]!==t)throw w(n,t+" to start sub-message");n.tokens&&n.tokens.push(["syntax",t]),++n.index;var e=m(n,r);if(n.pattern[n.index]!==a)throw w(n,a+" to end sub-message");return n.tokens&&n.tokens.push(["syntax",a]),++n.index,e}function w(n,r,t,a){var e=n.pattern,i=e.slice(0,n.index).split(/\r?\n/),o=n.index,l=i.length,c=i.slice(-1)[0].length;return t=t||(n.index>=e.length?"end of message pattern":x(n)||e[n.index]),a||(a=function(n,r){return n?"Expected "+n+" but found "+r:"Unexpected "+r+" found"}(r,t)),new j(a+=" in "+e.replace(/\r?\n/g,"\n"),r,t,o,l,c)}function j(n,r,t,a,e,i){Error.call(this,n),this.name="SyntaxError",this.message=n,this.expected=r,this.found=t,this.offset=a,this.line=e,this.column=i}r=n.exports=function(n,r){return m({pattern:String(n),index:0,tagsType:r&&r.tagsType||null,tokens:r&&r.tokens||null},"")},j.prototype=Object.create(Error.prototype),r.SyntaxError=j}),p=(m.SyntaxError,"long"),g="short",b="numeric",v={number:{decimal:{style:"decimal"},integer:{style:"decimal",maximumFractionDigits:0},currency:{style:"currency",currency:"USD"},percent:{style:"percent"},default:{style:"decimal"}},date:{short:{month:b,day:b,year:"2-digit"},medium:{month:g,day:b,year:b},long:{month:p,day:b,year:b},full:{month:p,day:b,year:b,weekday:p},default:{month:g,day:b,year:b}},time:{short:{hour:b,minute:b},medium:{hour:b,minute:b,second:b},long:{hour:b,minute:b,second:b,timeZoneName:g},full:{hour:b,minute:b,second:b,timeZoneName:g},default:{hour:b,minute:b,second:b}},duration:{default:{hours:{minimumIntegerDigits:1,maximumFractionDigits:0},minutes:{minimumIntegerDigits:2,maximumFractionDigits:0},seconds:{minimumIntegerDigits:2,maximumFractionDigits:3}}},parseNumberPattern:function(n){if(n){var r={},t=n.match(/\b[A-Z]{3}\b/i),a=n.replace(/[^¤]/g,"").length;if(!a&&t&&(a=1),a?(r.style="currency",r.currencyDisplay=1===a?"symbol":2===a?"code":"name",r.currency=t?t[0].toUpperCase():"USD"):n.indexOf("%")>=0&&(r.style="percent"),!/[@#0]/.test(n))return r.style?r:void 0;if(r.useGrouping=n.indexOf(",")>=0,/E\+?[@#0]+/i.test(n)||n.indexOf("@")>=0){var e=n.replace(/E\+?[@#0]+|[^@#0]/gi,"");r.minimumSignificantDigits=Math.min(Math.max(e.replace(/[^@0]/g,"").length,1),21),r.maximumSignificantDigits=Math.min(Math.max(e.length,1),21)}else{for(var i=n.replace(/[^#0.]/g,"").split("."),o=i[0],l=o.length-1;"0"===o[l];)--l;r.minimumIntegerDigits=Math.min(Math.max(o.length-1-l,1),21);var c=i[1]||"";for(l=0;"0"===c[l];)++l;for(r.minimumFractionDigits=Math.min(Math.max(l,0),20);"#"===c[l];)++l;r.maximumFractionDigits=Math.min(Math.max(l,0),20)}return r}},parseDatePattern:function(n){if(n){for(var r={},t=0;t<n.length;){for(var a=n[t],e=1;n[++t]===a;)++e;switch(a){case"G":r.era=5===e?"narrow":4===e?p:g;break;case"y":case"Y":r.year=2===e?"2-digit":b;break;case"M":case"L":e=Math.min(Math.max(e-1,0),4),r.month=[b,"2-digit",g,p,"narrow"][e];break;case"E":case"e":case"c":r.weekday=5===e?"narrow":4===e?p:g;break;case"d":case"D":r.day=2===e?"2-digit":b;break;case"h":case"K":r.hour12=!0,r.hour=2===e?"2-digit":b;break;case"H":case"k":r.hour12=!1,r.hour=2===e?"2-digit":b;break;case"m":r.minute=2===e?"2-digit":b;break;case"s":case"S":r.second=2===e?"2-digit":b;break;case"z":case"Z":case"v":case"V":r.timeZoneName=1===e?g:p}}return Object.keys(r).length?r:void 0}}},x=function(n,r){if("string"==typeof n&&r[n])return n;for(var t=[].concat(n||[]),a=0,e=t.length;a<e;++a)for(var i=t[a].split("-");i.length;){var o=i.join("-");if(r[o])return o;i.pop()}},y="one",k="two",M="few",w="many",j="other",D=[function(n){return 1===+n?y:j},function(n){var r=+n;return 0<=r&&r<=1?y:j},function(n){return 0===Math.floor(Math.abs(+n))||1===+n?y:j},function(n){var r=+n;return 0===r?"zero":1===r?y:2===r?k:3<=r%100&&r%100<=10?M:11<=r%100&&r%100<=99?w:j},function(n){var r=Math.floor(Math.abs(+n)),t=(n+".").split(".")[1].length;return 1===r&&0===t?y:j},function(n){var r=+n;return r%10==1&&r%100!=11?y:2<=r%10&&r%10<=4&&(r%100<12||14<r%100)?M:r%10==0||5<=r%10&&r%10<=9||11<=r%100&&r%100<=14?w:j},function(n){var r=+n;return r%10==1&&r%100!=11&&r%100!=71&&r%100!=91?y:r%10==2&&r%100!=12&&r%100!=72&&r%100!=92?k:(3<=r%10&&r%10<=4||r%10==9)&&(r%100<10||19<r%100)&&(r%100<70||79<r%100)&&(r%100<90||99<r%100)?M:0!==r&&r%1e6==0?w:j},function(n){var r=Math.floor(Math.abs(+n)),t=(n+".").split(".")[1].length,a=+(n+".").split(".")[1];return 0===t&&r%10==1&&r%100!=11||a%10==1&&a%100!=11?y:0===t&&2<=r%10&&r%10<=4&&(r%100<12||14<r%100)||2<=a%10&&a%10<=4&&(a%100<12||14<a%100)?M:j},function(n){var r=Math.floor(Math.abs(+n)),t=(n+".").split(".")[1].length;return 1===r&&0===t?y:2<=r&&r<=4&&0===t?M:0!==t?w:j},function(n){var r=+n;return 0===r?"zero":1===r?y:2===r?k:3===r?M:6===r?w:j},function(n){var r=Math.floor(Math.abs(+n)),t=+(""+n).replace(/^[^.]*.?|0+$/g,"");return 1===+n||0!==t&&(0===r||1===r)?y:j},function(n){var r=Math.floor(Math.abs(+n)),t=(n+".").split(".")[1].length,a=+(n+".").split(".")[1];return 0===t&&r%100==1||a%100==1?y:0===t&&r%100==2||a%100==2?k:0===t&&3<=r%100&&r%100<=4||3<=a%100&&a%100<=4?M:j},function(n){var r=Math.floor(Math.abs(+n));return 0===r||1===r?y:j},function(n){var r=Math.floor(Math.abs(+n)),t=(n+".").split(".")[1].length,a=+(n+".").split(".")[1];return 0===t&&(1===r||2===r||3===r)||0===t&&r%10!=4&&r%10!=6&&r%10!=9||0!==t&&a%10!=4&&a%10!=6&&a%10!=9?y:j},function(n){var r=+n;return 1===r?y:2===r?k:3<=r&&r<=6?M:7<=r&&r<=10?w:j},function(n){var r=+n;return 1===r||11===r?y:2===r||12===r?k:3<=r&&r<=10||13<=r&&r<=19?M:j},function(n){var r=Math.floor(Math.abs(+n)),t=(n+".").split(".")[1].length;return 0===t&&r%10==1?y:0===t&&r%10==2?k:0!==t||r%100!=0&&r%100!=20&&r%100!=40&&r%100!=60&&r%100!=80?0!==t?w:j:M},function(n){var r=Math.floor(Math.abs(+n)),t=(n+".").split(".")[1].length,a=+n;return 1===r&&0===t?y:2===r&&0===t?k:0===t&&(a<0||10<a)&&a%10==0?w:j},function(n){var r=Math.floor(Math.abs(+n)),t=+(""+n).replace(/^[^.]*.?|0+$/g,"");return 0===t&&r%10==1&&r%100!=11||0!==t?y:j},function(n){var r=+n;return 1===r?y:2===r?k:j},function(n){var r=+n;return 0===r?"zero":1===r?y:j},function(n){var r=Math.floor(Math.abs(+n)),t=+n;return 0===t?"zero":0!==r&&1!==r||0===t?j:y},function(n){var r=+(n+".").split(".")[1],t=+n;return t%10==1&&(t%100<11||19<t%100)?y:2<=t%10&&t%10<=9&&(t%100<11||19<t%100)?M:0!==r?w:j},function(n){var r=(n+".").split(".")[1].length,t=+(n+".").split(".")[1],a=+n;return a%10==0||11<=a%100&&a%100<=19||2===r&&11<=t%100&&t%100<=19?"zero":a%10==1&&a%100!=11||2===r&&t%10==1&&t%100!=11||2!==r&&t%10==1?y:j},function(n){var r=Math.floor(Math.abs(+n)),t=(n+".").split(".")[1].length,a=+(n+".").split(".")[1];return 0===t&&r%10==1&&r%100!=11||a%10==1&&a%100!=11?y:j},function(n){var r=Math.floor(Math.abs(+n)),t=(n+".").split(".")[1].length,a=+n;return 1===r&&0===t?y:0!==t||0===a||1!==a&&1<=a%100&&a%100<=19?M:j},function(n){var r=+n;return 1===r?y:0===r||2<=r%100&&r%100<=10?M:11<=r%100&&r%100<=19?w:j},function(n){var r=Math.floor(Math.abs(+n)),t=(n+".").split(".")[1].length;return 1===r&&0===t?y:0===t&&2<=r%10&&r%10<=4&&(r%100<12||14<r%100)?M:0===t&&1!==r&&0<=r%10&&r%10<=1||0===t&&5<=r%10&&r%10<=9||0===t&&12<=r%100&&r%100<=14?w:j},function(n){var r=Math.floor(Math.abs(+n));return 0<=r&&r<=1?y:j},function(n){var r=Math.floor(Math.abs(+n)),t=(n+".").split(".")[1].length;return 0===t&&r%10==1&&r%100!=11?y:0===t&&2<=r%10&&r%10<=4&&(r%100<12||14<r%100)?M:0===t&&r%10==0||0===t&&5<=r%10&&r%10<=9||0===t&&11<=r%100&&r%100<=14?w:j},function(n){var r=+n;return 0===Math.floor(Math.abs(+n))||1===r?y:2<=r&&r<=10?M:j},function(n){var r=Math.floor(Math.abs(+n)),t=+(n+".").split(".")[1],a=+n;return 0===a||1===a||0===r&&1===t?y:j},function(n){var r=Math.floor(Math.abs(+n)),t=(n+".").split(".")[1].length;return 0===t&&r%100==1?y:0===t&&r%100==2?k:0===t&&3<=r%100&&r%100<=4||0!==t?M:j},function(n){var r=+n;return 0<=r&&r<=1||11<=r&&r<=99?y:j},function(n){var r=+n;return 1===r||5===r||7===r||8===r||9===r||10===r?y:2===r||3===r?k:4===r?M:6===r?w:j},function(n){var r=Math.floor(Math.abs(+n));return r%10==1||r%10==2||r%10==5||r%10==7||r%10==8||r%100==20||r%100==50||r%100==70||r%100==80?y:r%10==3||r%10==4||r%1e3==100||r%1e3==200||r%1e3==300||r%1e3==400||r%1e3==500||r%1e3==600||r%1e3==700||r%1e3==800||r%1e3==900?M:0===r||r%10==6||r%100==40||r%100==60||r%100==90?w:j},function(n){var r=+n;return r%10!=2&&r%10!=3||r%100==12||r%100==13?j:M},function(n){var r=+n;return 1===r||3===r?y:2===r?k:4===r?M:j},function(n){var r=+n;return 0===r||7===r||8===r||9===r?"zero":1===r?y:2===r?k:3===r||4===r?M:5===r||6===r?w:j},function(n){var r=+n;return r%10==1&&r%100!=11?y:r%10==2&&r%100!=12?k:r%10==3&&r%100!=13?M:j},function(n){var r=+n;return 1===r?y:2===r||3===r?k:4===r?M:6===r?w:j},function(n){var r=+n;return 1===r||5===r?y:j},function(n){var r=+n;return 11===r||8===r||80===r||800===r?w:j},function(n){var r=Math.floor(Math.abs(+n));return 1===r?y:0===r||2<=r%100&&r%100<=20||r%100==40||r%100==60||r%100==80?w:j},function(n){var r=+n;return r%10==6||r%10==9||r%10==0&&0!==r?w:j},function(n){var r=Math.floor(Math.abs(+n));return r%10==1&&r%100!=11?y:r%10==2&&r%100!=12?k:r%10!=7&&r%10!=8||r%100==17||r%100==18?j:w},function(n){var r=+n;return 1===r?y:2===r||3===r?k:4===r?M:j},function(n){var r=+n;return 1<=r&&r<=4?y:j},function(n){var r=+n;return 1===r||5===r||7<=r&&r<=9?y:2===r||3===r?k:4===r?M:6===r?w:j},function(n){var r=+n;return 1===r?y:r%10==4&&r%100!=14?w:j},function(n){var r=+n;return r%10!=1&&r%10!=2||r%100==11||r%100==12?j:y},function(n){var r=+n;return r%10==6||r%10==9||10===r?M:j},function(n){var r=+n;return r%10==3&&r%100!=13?M:j}],O={af:{cardinal:D[0]},ak:{cardinal:D[1]},am:{cardinal:D[2]},ar:{cardinal:D[3]},ars:{cardinal:D[3]},as:{cardinal:D[2],ordinal:D[34]},asa:{cardinal:D[0]},ast:{cardinal:D[4]},az:{cardinal:D[0],ordinal:D[35]},be:{cardinal:D[5],ordinal:D[36]},bem:{cardinal:D[0]},bez:{cardinal:D[0]},bg:{cardinal:D[0]},bh:{cardinal:D[1]},bn:{cardinal:D[2],ordinal:D[34]},br:{cardinal:D[6]},brx:{cardinal:D[0]},bs:{cardinal:D[7]},ca:{cardinal:D[4],ordinal:D[37]},ce:{cardinal:D[0]},cgg:{cardinal:D[0]},chr:{cardinal:D[0]},ckb:{cardinal:D[0]},cs:{cardinal:D[8]},cy:{cardinal:D[9],ordinal:D[38]},da:{cardinal:D[10]},de:{cardinal:D[4]},dsb:{cardinal:D[11]},dv:{cardinal:D[0]},ee:{cardinal:D[0]},el:{cardinal:D[0]},en:{cardinal:D[4],ordinal:D[39]},eo:{cardinal:D[0]},es:{cardinal:D[0]},et:{cardinal:D[4]},eu:{cardinal:D[0]},fa:{cardinal:D[2]},ff:{cardinal:D[12]},fi:{cardinal:D[4]},fil:{cardinal:D[13],ordinal:D[0]},fo:{cardinal:D[0]},fr:{cardinal:D[12],ordinal:D[0]},fur:{cardinal:D[0]},fy:{cardinal:D[4]},ga:{cardinal:D[14],ordinal:D[0]},gd:{cardinal:D[15]},gl:{cardinal:D[4]},gsw:{cardinal:D[0]},gu:{cardinal:D[2],ordinal:D[40]},guw:{cardinal:D[1]},gv:{cardinal:D[16]},ha:{cardinal:D[0]},haw:{cardinal:D[0]},he:{cardinal:D[17]},hi:{cardinal:D[2],ordinal:D[40]},hr:{cardinal:D[7]},hsb:{cardinal:D[11]},hu:{cardinal:D[0],ordinal:D[41]},hy:{cardinal:D[12],ordinal:D[0]},io:{cardinal:D[4]},is:{cardinal:D[18]},it:{cardinal:D[4],ordinal:D[42]},iu:{cardinal:D[19]},iw:{cardinal:D[17]},jgo:{cardinal:D[0]},ji:{cardinal:D[4]},jmc:{cardinal:D[0]},ka:{cardinal:D[0],ordinal:D[43]},kab:{cardinal:D[12]},kaj:{cardinal:D[0]},kcg:{cardinal:D[0]},kk:{cardinal:D[0],ordinal:D[44]},kkj:{cardinal:D[0]},kl:{cardinal:D[0]},kn:{cardinal:D[2]},ks:{cardinal:D[0]},ksb:{cardinal:D[0]},ksh:{cardinal:D[20]},ku:{cardinal:D[0]},kw:{cardinal:D[19]},ky:{cardinal:D[0]},lag:{cardinal:D[21]},lb:{cardinal:D[0]},lg:{cardinal:D[0]},ln:{cardinal:D[1]},lt:{cardinal:D[22]},lv:{cardinal:D[23]},mas:{cardinal:D[0]},mg:{cardinal:D[1]},mgo:{cardinal:D[0]},mk:{cardinal:D[24],ordinal:D[45]},ml:{cardinal:D[0]},mn:{cardinal:D[0]},mo:{cardinal:D[25],ordinal:D[0]},mr:{cardinal:D[2],ordinal:D[46]},mt:{cardinal:D[26]},nah:{cardinal:D[0]},naq:{cardinal:D[19]},nb:{cardinal:D[0]},nd:{cardinal:D[0]},ne:{cardinal:D[0],ordinal:D[47]},nl:{cardinal:D[4]},nn:{cardinal:D[0]},nnh:{cardinal:D[0]},no:{cardinal:D[0]},nr:{cardinal:D[0]},nso:{cardinal:D[1]},ny:{cardinal:D[0]},nyn:{cardinal:D[0]},om:{cardinal:D[0]},or:{cardinal:D[0],ordinal:D[48]},os:{cardinal:D[0]},pa:{cardinal:D[1]},pap:{cardinal:D[0]},pl:{cardinal:D[27]},prg:{cardinal:D[23]},ps:{cardinal:D[0]},pt:{cardinal:D[28]},"pt-PT":{cardinal:D[4]},rm:{cardinal:D[0]},ro:{cardinal:D[25],ordinal:D[0]},rof:{cardinal:D[0]},ru:{cardinal:D[29]},rwk:{cardinal:D[0]},saq:{cardinal:D[0]},scn:{cardinal:D[4],ordinal:D[42]},sd:{cardinal:D[0]},sdh:{cardinal:D[0]},se:{cardinal:D[19]},seh:{cardinal:D[0]},sh:{cardinal:D[7]},shi:{cardinal:D[30]},si:{cardinal:D[31]},sk:{cardinal:D[8]},sl:{cardinal:D[32]},sma:{cardinal:D[19]},smi:{cardinal:D[19]},smj:{cardinal:D[19]},smn:{cardinal:D[19]},sms:{cardinal:D[19]},sn:{cardinal:D[0]},so:{cardinal:D[0]},sq:{cardinal:D[0],ordinal:D[49]},sr:{cardinal:D[7]},ss:{cardinal:D[0]},ssy:{cardinal:D[0]},st:{cardinal:D[0]},sv:{cardinal:D[4],ordinal:D[50]},sw:{cardinal:D[4]},syr:{cardinal:D[0]},ta:{cardinal:D[0]},te:{cardinal:D[0]},teo:{cardinal:D[0]},ti:{cardinal:D[1]},tig:{cardinal:D[0]},tk:{cardinal:D[0],ordinal:D[51]},tl:{cardinal:D[13],ordinal:D[0]},tn:{cardinal:D[0]},tr:{cardinal:D[0]},ts:{cardinal:D[0]},tzm:{cardinal:D[33]},ug:{cardinal:D[0]},uk:{cardinal:D[29],ordinal:D[52]},ur:{cardinal:D[4]},uz:{cardinal:D[0]},ve:{cardinal:D[0]},vo:{cardinal:D[0]},vun:{cardinal:D[0]},wa:{cardinal:D[1]},wae:{cardinal:D[0]},xh:{cardinal:D[0]},xog:{cardinal:D[0]},yi:{cardinal:D[4]},zu:{cardinal:D[2]},lo:{ordinal:D[0]},ms:{ordinal:D[0]},vi:{ordinal:D[0]}},E=l(function(r,t){function a(r,t,i,o,l){var c=r.map(function(r){return function(r,t,i,o,l){if("string"==typeof r){var c=r;return function(){return c}}var s,d=r[0],f=r[1];if(t&&"#"===r[0]){d=t[0];var h=t[2],m=(o.number||u.number)([d,"number"],i);return function(n){return m(e(d,n)-h,n)}}"plural"===f||"selectordinal"===f?(s={},Object.keys(r[3]).forEach(function(n){s[n]=a(r[3][n],r,i,o,l)}),r=[r[0],r[1],r[2],s]):r[2]&&"object"===n(r[2])&&(s={},Object.keys(r[2]).forEach(function(n){s[n]=a(r[2][n],r,i,o,l)}),r=[r[0],r[1],s]);var p=f&&(o[f]||u[f]);if(p){var g=p(r,i);return function(n){return g(e(d,n),n)}}return l?function(n){return String(e(d,n))}:function(n){return e(d,n)}}(r,t,i,o,l)});return l?1===c.length?c[0]:function(n){for(var r="",t=0;t<c.length;++t)r+=c[t](n);return r}:function(n){return c.reduce(function(r,t){return r.concat(t(n))},[])}}function e(n,r){if(r&&n in r)return r[n];for(var t=n.split("."),a=r,e=0,i=t.length;a&&e<i;++e)a=a[t[e]];return a}function i(n,r){var t=n[2],a=v.number[t]||v.parseNumberPattern(t)||v.number.default;return new Intl.NumberFormat(r,a).format}function o(n,r){var t=n[1],a=n[2],e=v[t][a]||v.parseDatePattern(a)||v[t].default;return new Intl.DateTimeFormat(r,e).format}function l(n,r){var t,a="selectordinal"===n[1]?"ordinal":"cardinal",e=n[2],i=n[3];if(Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf(r).length>0)t=new Intl.PluralRules(r,{type:a});else{var o=x(r,O),l=o&&O[o][a]||c;t={select:l}}return function(n,r){return(i["="+ +n]||i[t.select(n-e)]||i.other)(r)}}function c(){return"other"}(t=r.exports=function(n,r,t){return a(n,null,r||"en",t||{},!0)}).toParts=function(n,r,t){return a(n,null,r||"en",t||{},!1)};var u={number:i,ordinal:i,spellout:i,duration:function(n,r){var t=n[2],a=v.duration[t]||v.duration.default,e=new Intl.NumberFormat(r,a.seconds).format,i=new Intl.NumberFormat(r,a.minutes).format,o=new Intl.NumberFormat(r,a.hours).format,l=/^fi$|^fi-|^da/.test(String(r))?".":":";return function(n,r){if(n=+n,!isFinite(n))return e(n);var t=~~(n/60/60),a=~~(n/60%60),c=(t?o(Math.abs(t))+l:"")+i(Math.abs(a))+l+e(Math.abs(n%60));return n<0?o(-1).replace(o(1),c):c}},date:o,time:o,plural:l,selectordinal:l,select:function(n,r){var t=n[2];return function(n,r){return(t[n]||t.other)(r)}}};t.types=u}),P=(E.toParts,E.types,l(function(r,t){function a(n,r){return Object.keys(r).forEach(function(t){n[t]=r[t]}),n}r.exports=function r(){var t=a({},v),e="en",i={},o=function(n){return n},l=null,c="warning",u={};function s(r,t,a){var i="string"==typeof r?r:r.default,l=h(i,"object"===n(r)&&r.id||o(i),a||e);return(l.format||(l.format=E(m(l.message),a||e,u)))(t)}s.rich=function(r,t,a){var i="string"==typeof r?r:r.default,l=h(i,"object"===n(r)&&r.id||o(i),a||e);return(l.toParts||(l.toParts=E.toParts(m(l.message,{tagsType:d}),a||e,u)))(t)};var d="<>";function f(r,t){var a=r[2];return function(r,t){var e="object"===n(a)?function(n,r){return Object.keys(n).reduce(function(t,a){return t[a]=n[a](r),t},{})}(a,t):a;return"function"==typeof r?r(e):r}}function h(n,r,t){var a=x(t,i)||"en",e=i[a]||(i[a]={}),o=e[r];if("string"==typeof o&&(o=e[r]={message:o}),!o){var u='Translation for "'+r+'" in "'+a+'" is missing';if("warning"===c)"undefined"!=typeof console&&console.warn(u);else if("ignore"!==c)throw new Error(u);var s="function"==typeof l?l(n,r,a)||n:l||n;o=e[r]={message:s}}return o}function p(r,t,a,i,o){"object"===n(a)&&"object"!==n(i)&&(o=i,i=a,a=0);var l=x(o||e,O),c=l&&O[l][r]||g;return i["="+ +t]||i[c(t-a)]||i.other}function g(){return"other"}return u[d]=f,s.setup=function(n){return(n=n||{}).locale&&(e=n.locale),"translations"in n&&(i=n.translations||{}),n.generateId&&(o=n.generateId),"missingReplacement"in n&&(l=n.missingReplacement),n.missingTranslation&&(c=n.missingTranslation),n.formats&&(n.formats.number&&a(t.number,n.formats.number),n.formats.date&&a(t.date,n.formats.date),n.formats.time&&a(t.time,n.formats.time)),n.types&&((u=n.types)[d]=f),{locale:e,translations:i,generateId:o,missingReplacement:l,missingTranslation:c,formats:t,types:u}},s.number=function(n,r,a){var i=r&&t.number[r]||t.parseNumberPattern(r)||t.number.default;return new Intl.NumberFormat(a||e,i).format(n)},s.date=function(n,r,a){var i=r&&t.date[r]||t.parseDatePattern(r)||t.date.default;return new Intl.DateTimeFormat(a||e,i).format(n)},s.time=function(n,r,a){var i=r&&t.time[r]||t.parseDatePattern(r)||t.time.default;return new Intl.DateTimeFormat(a||e,i).format(n)},s.select=function(n,r){return r[n]||r.other},s.custom=function(n,r,t,a){return n[1]in u?u[n[1]](n,r)(t,a):t},s.plural=p.bind(null,"cardinal"),s.selectordinal=p.bind(null,"ordinal"),s.namespace=r,s}()})),I=function(){return(I=Object.assign||function(n){for(var r,t=1,a=arguments.length;t<a;t++)for(var e in r=arguments[t])Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e]);return n}).apply(this,arguments)},T=function(n,r){return n?n+"."+r:r},F=function(r){return Object.keys(r).reduce(function(t,a){var e,i,o;return I({},t,((e={})[a]=(i=r[a],o={},function r(t,a){Object.keys(t).forEach(function(e){var i=t[e];"object"===n(i)?r(i,T(a,e)):o[T(a,e)]=i})}(i,""),o),e))},{})},z=function r(t,a){return void 0===t&&(t={}),Object.keys(a).reduce(function(t,e){return null!==a[e]&&"object"===n(a[e])?t[e]=r(t[e],a[e]):t[e]=a[e],t},t)};function N(n){var r=d(n),t=r.subscribe,a=r.set,e=r.update;return{set:a,subscribe:t,update:function(n){return e(function(r){return z(r,n)})}}}var S,C,A,R=N({missingTranslation:"ignore"}),Z=N({}),L=f(Z,function(n){return Object.keys(n)}),U=(S=d(""),C=S.subscribe,A=S.set,{subscribe:C,update:S.update,set:function(n){""===n||h(Z)[n]?A(n):console.error("[svelte-intl] Couldn't find the \""+n+'" locale.')}}),q=f([U,Z,R],function(n){var r=n[0],t=n[1],a=n[2];return P.setup(I({},a,{locale:r,translations:F(t)})),P}),H=function(n){if(void 0===n&&(n="en"),"undefined"==typeof window)return n;var r=window.navigator.language||window.navigator.languages[0];if(r){var t=h(L);if(t.includes(r))return r;var a=t.find(function(n){return r.startsWith(n)});if(a)return a}return h(U)||n};export{q as _,l as c,H as g,U as l,Z as t};
//# sourceMappingURL=chunk.afa6fe77.js.map
