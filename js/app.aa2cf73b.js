(function(e){function n(n){for(var r,a,u=n[0],l=n[1],i=n[2],d=0,h=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(n);while(h.length)h.shift()();return c.push.apply(c,i||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(c.splice(n--,1),e=l(l.s=t[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-7d807aa6":"461c9b7d","chunk-62458b78":"0ca7616d","chunk-29590bba":"e8757097","chunk-787e3e4d":"14185124","chunk-2187c04e":"1b1ab42c","chunk-2d0d3390":"dfd85c99","chunk-d010e83e":"77a508cb","chunk-50e864e5":"c2540db7","chunk-e9c60a8e":"6edf0b35","chunk-c142b9d2":"ef13f56d"}[e]+".js"}function l(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t={"chunk-7d807aa6":1,"chunk-62458b78":1,"chunk-787e3e4d":1,"chunk-2187c04e":1,"chunk-d010e83e":1,"chunk-50e864e5":1,"chunk-e9c60a8e":1,"chunk-c142b9d2":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-7d807aa6":"8952a0c5","chunk-62458b78":"13ad6d36","chunk-29590bba":"31d6cfe0","chunk-787e3e4d":"069c8b7d","chunk-2187c04e":"15290f63","chunk-2d0d3390":"31d6cfe0","chunk-d010e83e":"140828a3","chunk-50e864e5":"c71b74f3","chunk-e9c60a8e":"887d003b","chunk-c142b9d2":"fbe1b00e"}[e]+".css",o=l.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===o))return n()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){i=h[u],d=i.getAttribute("data-href");if(d===r||d===o)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],s.parentNode.removeChild(s),t(c)},s.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(s)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=c);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=u(e);var h=new Error;i=function(n){d.onerror=d.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",h.name="ChunkLoadError",h.type=r,h.request=a,t[1](h)}o[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(n)},l.m=e,l.c=r,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)l.d(t,r,function(n){return e[n]}.bind(null,r));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/dokodemodoa5-front-end/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=n,i=i.slice();for(var h=0;h<i.length;h++)n(i[h]);var s=d;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",{staticStyle:{background:"white"}},[t("v-main",[t("router-view")],1),t("v-footer",{attrs:{padless:""}},[t("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e._v(" 2021 — "),t("strong",[e._v("Hack Money")])])],1)],1)},o=[],c={name:"App",data:()=>({})},u=c,l=t("2877"),i=t("6544"),d=t.n(i),h=t("7496"),s=t("62ad"),f=t("553a"),p=t("f6c4"),b=Object(l["a"])(u,a,o,!1,null,null,null),m=b.exports;d()(b,{VApp:h["a"],VCol:s["a"],VFooter:f["a"],VMain:p["a"]});var k=t("8c4f");r["a"].use(k["a"]);const v=[{path:"/",name:"Home",component:()=>Promise.all([t.e("chunk-7d807aa6"),t.e("chunk-c142b9d2")]).then(t.bind(null,"bb51")),meta:{title:"Dokodemodoa | The Explorer"}},{path:"/Blockchain",name:"Blockchain",component:()=>Promise.all([t.e("chunk-7d807aa6"),t.e("chunk-62458b78"),t.e("chunk-29590bba"),t.e("chunk-d010e83e"),t.e("chunk-50e864e5")]).then(t.bind(null,"e43f")),meta:{title:"Blockchain | The Explorer"}},{path:"/Layer2",name:"Layer2",component:()=>Promise.all([t.e("chunk-7d807aa6"),t.e("chunk-62458b78"),t.e("chunk-d010e83e"),t.e("chunk-e9c60a8e")]).then(t.bind(null,"5e87")),meta:{title:"Layer2 | The Explorer"}},{path:"/Defi",name:"Defi",component:()=>Promise.all([t.e("chunk-7d807aa6"),t.e("chunk-62458b78"),t.e("chunk-29590bba"),t.e("chunk-787e3e4d"),t.e("chunk-2d0d3390")]).then(t.bind(null,"5c9e")),meta:{title:"Defi | The Explorer"}},{path:"/Umbrella",name:"Umbrella",component:()=>Promise.all([t.e("chunk-7d807aa6"),t.e("chunk-62458b78"),t.e("chunk-29590bba"),t.e("chunk-787e3e4d"),t.e("chunk-2187c04e")]).then(t.bind(null,"da67")),meta:{title:"Umbrella | Subgraph based on The Graph"}}],g=new k["a"]({mode:"hash",routes:v});g.beforeEach((e,n,t)=>{e.meta.title&&(document.title=e.meta.title),t()});var y=g,w=t("2f62");r["a"].use(w["a"]);var E=new w["a"].Store({state:{},mutations:{},actions:{},modules:{}}),P=t("f309");r["a"].use(P["a"]);var x=new P["a"]({});t("ed18").config(),r["a"].config.productionTip=!1,new r["a"]({router:y,store:E,vuetify:x,render:function(e){return e(m)}}).$mount("#app")}});
//# sourceMappingURL=app.aa2cf73b.js.map