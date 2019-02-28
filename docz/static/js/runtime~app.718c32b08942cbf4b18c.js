!function(e){function r(r){for(var t,o,c=r[0],a=r[1],i=r[2],d=r[3]||[],s=0,p=[];s<c.length;s++)o=c[s],A[o]&&p.push(A[o][0]),A[o]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);for(C&&C(r),d.forEach(function(e){if(void 0===A[e]){A[e]=null;var r=document.createElement("link");r.crossOrigin="anonymous",S.nc&&r.setAttribute("nonce",S.nc),r.rel="prefetch",r.as="script",r.href=M(e),document.head.appendChild(r)}});p.length;)p.shift()();return I.push.apply(I,i||[]),n()}function n(){for(var e,r=0;r<I.length;r++){for(var n=I[r],t=!0,o=1;o<n.length;o++){var c=n[o];0!==A[c]&&(t=!1)}t&&(I.splice(r--,1),e=S(S.s=n[0]))}return e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,r){if(!_[e]||!O[e])return;for(var n in O[e]=!1,r)Object.prototype.hasOwnProperty.call(r,n)&&(v[n]=r[n]);0===--b&&0===g&&P()}(e,r),t&&t(e,r)};var o,c=!0,a="718c32b08942cbf4b18c",i=1e4,d={},s=[],p=[];function l(e){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)r._selfAccepted=!0;else if("function"===typeof e)r._selfAccepted=e;else if("object"===typeof e)for(var t=0;t<e.length;t++)r._acceptedDependencies[e[t]]=n||function(){};else r._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"===typeof e)for(var n=0;n<e.length;n++)r._declinedDependencies[e[n]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=r._disposeHandlers.indexOf(e);n>=0&&r._disposeHandlers.splice(n,1)},check:j,apply:x,status:function(e){if(!e)return f;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var r=u.indexOf(e);r>=0&&u.splice(r,1)},data:d[e]};return o=void 0,r}var u=[],f="idle";function h(e){f=e;for(var r=0;r<u.length;r++)u[r].call(null,e)}var m,v,y,b=0,g=0,w={},O={},_={};function E(e){return+e+""===e?+e:e}function j(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return c=e,h("check"),(r=i,r=r||1e4,new Promise(function(e,n){if("undefined"===typeof XMLHttpRequest)return n(new Error("No browser support"));try{var t=new XMLHttpRequest,o=S.p+""+a+".hot-update.json";t.open("GET",o,!0),t.timeout=r,t.send(null)}catch(c){return n(c)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)n(new Error("Manifest request to "+o+" failed."));else{try{var r=JSON.parse(t.responseText)}catch(c){return void n(c)}e(r)}}})).then(function(e){if(!e)return h("idle"),null;O={},w={},_=e.c,y=e.h,h("prepare");var r=new Promise(function(e,r){m={resolve:e,reject:r}});for(var n in v={},A)D(n);return"prepare"===f&&0===g&&0===b&&P(),r});var r}function D(e){_[e]?(O[e]=!0,b++,function(e){var r=document.createElement("script");r.charset="utf-8",r.src=S.p+""+e+"."+a+".hot-update.js",r.crossOrigin="anonymous",document.head.appendChild(r)}(e)):w[e]=!0}function P(){h("ready");var e=m;if(m=null,e)if(c)Promise.resolve().then(function(){return x(c)}).then(function(r){e.resolve(r)},function(r){e.reject(r)});else{var r=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&r.push(E(n));e.resolve(r)}}function x(r){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,t,o,c,i;function p(e){for(var r=[e],n={},t=r.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),a=o.id,i=o.chain;if((c=H[a])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(c.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var d=0;d<c.parents.length;d++){var s=c.parents[d],p=H[s];if(p){if(p.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([s]),moduleId:a,parentId:s};-1===r.indexOf(s)&&(p.hot._acceptedDependencies[a]?(n[s]||(n[s]=[]),l(n[s],[a])):(delete n[s],r.push(s),t.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function l(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}r=r||{};var u={},m=[],b={},g=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var O;i=E(w);var j=!1,D=!1,P=!1,x="";switch((O=v[w]?p(i):{type:"disposed",moduleId:w}).chain&&(x="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":r.onDeclined&&r.onDeclined(O),r.ignoreDeclined||(j=new Error("Aborted because of self decline: "+O.moduleId+x));break;case"declined":r.onDeclined&&r.onDeclined(O),r.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+x));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(O),r.ignoreUnaccepted||(j=new Error("Aborted because "+i+" is not accepted"+x));break;case"accepted":r.onAccepted&&r.onAccepted(O),D=!0;break;case"disposed":r.onDisposed&&r.onDisposed(O),P=!0;break;default:throw new Error("Unexception type "+O.type)}if(j)return h("abort"),Promise.reject(j);if(D)for(i in b[i]=v[i],l(m,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,i)&&(u[i]||(u[i]=[]),l(u[i],O.outdatedDependencies[i]));P&&(l(m,[O.moduleId]),b[i]=g)}var k,I=[];for(t=0;t<m.length;t++)i=m[t],H[i]&&H[i].hot._selfAccepted&&I.push({module:i,errorHandler:H[i].hot._selfAccepted});h("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete A[e]}(e)});for(var M,T,q=m.slice();q.length>0;)if(i=q.pop(),c=H[i]){var U={},C=c.hot._disposeHandlers;for(o=0;o<C.length;o++)(n=C[o])(U);for(d[i]=U,c.hot.active=!1,delete H[i],delete u[i],o=0;o<c.children.length;o++){var N=H[c.children[o]];N&&((k=N.parents.indexOf(i))>=0&&N.parents.splice(k,1))}}for(i in u)if(Object.prototype.hasOwnProperty.call(u,i)&&(c=H[i]))for(T=u[i],o=0;o<T.length;o++)M=T[o],(k=c.children.indexOf(M))>=0&&c.children.splice(k,1);for(i in h("apply"),a=y,b)Object.prototype.hasOwnProperty.call(b,i)&&(e[i]=b[i]);var L=null;for(i in u)if(Object.prototype.hasOwnProperty.call(u,i)&&(c=H[i])){T=u[i];var R=[];for(t=0;t<T.length;t++)if(M=T[t],n=c.hot._acceptedDependencies[M]){if(-1!==R.indexOf(n))continue;R.push(n)}for(t=0;t<R.length;t++){n=R[t];try{n(T)}catch(J){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:i,dependencyId:T[t],error:J}),r.ignoreErrored||L||(L=J)}}}for(t=0;t<I.length;t++){var B=I[t];i=B.module,s=[i];try{S(i)}catch(J){if("function"===typeof B.errorHandler)try{B.errorHandler(J)}catch(z){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:i,error:z,originalError:J}),r.ignoreErrored||L||(L=z),L||(L=J)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:i,error:J}),r.ignoreErrored||L||(L=J)}}return L?(h("fail"),Promise.reject(L)):(h("idle"),new Promise(function(e){e(m)}))}var H={},k={3:0},A={3:0},I=[];function M(e){return S.p+"static/js/"+({1:"src-components-bar-chart-barchart~src-components-barchart-with-nav-map-barchart-map~src-components-m~c86026e3",4:"src-components-bar-chart-barchart",5:"src-components-barchart-with-nav-map-barchart-map",6:"src-components-map-map",7:"src-components-race-for-seat-barchart-barchart",8:"src-index"}[e]||e)+"."+{1:"4205adac",4:"155fe93c",5:"9fe1b587",6:"718dfa88",7:"e6ccb5e8",8:"53e18e9e",9:"a6605d5f"}[e]+".js"}function S(r){if(H[r])return H[r].exports;var n=H[r]={i:r,l:!1,exports:{},hot:l(r),parents:(p=s,s=[],p),children:[]};return e[r].call(n.exports,n,n.exports,function(e){var r=H[e];if(!r)return S;var n=function(n){return r.hot.active?(H[n]?-1===H[n].parents.indexOf(e)&&H[n].parents.push(e):(s=[e],o=n),-1===r.children.indexOf(n)&&r.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),S(n)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return S[e]},set:function(r){S[e]=r}}};for(var c in S)Object.prototype.hasOwnProperty.call(S,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(n,c,t(c));return n.e=function(e){return"ready"===f&&h("prepare"),g++,S.e(e).then(r,function(e){throw r(),e});function r(){g--,"prepare"===f&&(w[e]||D(e),0===g&&0===b&&P())}},n.t=function(e,r){return 1&r&&(e=n(e)),S.t(e,-2&r)},n}(r)),n.l=!0,n.exports}S.e=function(e){var r=[];k[e]?r.push(k[e]):0!==k[e]&&{4:1,5:1,6:1,7:1}[e]&&r.push(k[e]=new Promise(function(r,n){for(var t="static/css/"+({1:"src-components-bar-chart-barchart~src-components-barchart-with-nav-map-barchart-map~src-components-m~c86026e3",4:"src-components-bar-chart-barchart",5:"src-components-barchart-with-nav-map-barchart-map",6:"src-components-map-map",7:"src-components-race-for-seat-barchart-barchart",8:"src-index"}[e]||e)+"."+a+".css",o=S.p+t,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var d=(p=c[i]).getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(d===t||d===o))return r()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){var p;if((d=(p=s[i]).getAttribute("data-href"))===t||d===o)return r()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=r,l.onerror=function(r){var t=r&&r.target&&r.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");c.request=t,delete k[e],l.parentNode.removeChild(l),n(c)},l.href=o,document.getElementsByTagName("head")[0].appendChild(l)}).then(function(){k[e]=0}));var n=A[e];if(0!==n)if(n)r.push(n[2]);else{var t=new Promise(function(r,t){n=A[e]=[r,t]});r.push(n[2]=t);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,S.nc&&c.setAttribute("nonce",S.nc),c.src=M(e),0!==c.src.indexOf(window.location.origin+"/")&&(c.crossOrigin="anonymous"),o=function(r){c.onerror=c.onload=null,clearTimeout(i);var n=A[e];if(0!==n){if(n){var t=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src,a=new Error("Loading chunk "+e+" failed.\n("+t+": "+o+")");a.type=t,a.request=o,n[1](a)}A[e]=void 0}};var i=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(r)},S.m=e,S.c=H,S.d=function(e,r,n){S.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},S.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.t=function(e,r){if(1&r&&(e=S(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(S.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)S.d(n,t,function(r){return e[r]}.bind(null,t));return n},S.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return S.d(r,"a",r),r},S.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},S.p="/elections-dataviz/docz/",S.oe=function(e){throw console.error(e),e},S.h=function(){return a};var T=window.webpackJsonp=window.webpackJsonp||[],q=T.push.bind(T);T.push=r,T=T.slice();for(var U=0;U<T.length;U++)r(T[U]);var C=q;n()}([]);
//# sourceMappingURL=runtime~app.718c32b08942cbf4b18c.js.map