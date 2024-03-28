(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"/* CSS RESET: use box-sizing model; remove default margin & form typography\nstyles; set buttons to display block; set base (pre UA stylesheet) font size; */\n*, *::before, *::after { box-sizing: border-box; }\n* { margin: 0; }\ninput, button, textarea, select { font: inherit; }\nbutton { display: block; cursor: pointer; }\n:root{ font-size: 16px; }  /*chrome default*/\n/* imported google fonts examples */\n/* .roboto { font-family: \"Roboto\"; font-weight: 400,500; font-style: normal; } */\n/* variables---------------------------------------------------------------- */\n:root{\n  --black: hsl(0, 0%, 0%);\n  --white: hsl(0, 0%, 100%);\n  --transparent: hsl(0, 0%, 0%, 0);\n  /* tailwind blue palette based, then hue shifted ... CHANGE TO SKY PALETTE to OCD level MATCH TICTACTOE PROJECT */\n  --bg950: hsl(199, 91%, 9%);\n  --bg900: hsl(197, 86%, 16%);\n  --bg800: hsl(196, 88%, 20%);\n  --bg700: hsl(196, 94%, 24%);\n  --bg600: hsl(194, 94%, 30%);\n  --mg500: hsl(193, 84%, 39%);\n  --fg400: hsl(191, 64%, 52%);\n  --fg300: hsl(189, 72%, 67%);\n  --fg200: hsl(185, 76%, 80%);\n  --fg100: hsl(182, 80%, 90%);\n  --fg50:  hsl(185, 81%, 96%);\n\n}\n/* animations */\n@keyframes spinCW {\n  0% {\n    transform: rotate( 0turn );\n  }\n  100% {\n    transform: rotate( 1turn );\n  }\n}\n\n/* main CSS */\nbody{\n  font-family: 'Roboto', Arial, Helvetica, sans-serif;\n  background-color: var(--fg400);\n  h1 {\n    text-align: center;\n    font-weight: 400;\n    margin: 0 0 1rem 0;\n    padding: 0.25rem 0;\n    color: var(--white);\n    background: linear-gradient( to bottom, var(--bg700), var(--transparent) );\n  }\n}\n.weatherDiv {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--fg100);\n  #cityInput {\n    background-color: var(--fg200);\n    border-style: dashed;\n    border-color: var(--white);\n    color: var(--bg900);\n    width: 12rem;\n  }\n  #cityInput::placeholder {\n    color: var(--fg400);\n  }\n  .weatherCondition {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    padding: 0 0.5rem;\n    .iconFrame {\n      width: 64px;\n      height: 64px;\n      margin: 1rem 0 0 0;\n      background-color: var(--mg500);\n      box-shadow: 0 0 12px 1px var(--white);\n      .icon {\n        width: inherit;\n        height: inherit;\n        background-size: cover;\n        background-position: center;\n      }\n      .loading {\n        animation: spinCW 1.5s linear infinite;\n      }\n    }\n  }\n  .searchNote {\n    font-size: 0.9rem;\n    margin: 3rem 1rem;\n    color: var(--bg600);\n    background: linear-gradient( to bottom, var(--fg100), var(--transparent) );\n  }\n}\n","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;+EAC+E;AAC/E,yBAAyB,sBAAsB,EAAE;AACjD,IAAI,SAAS,EAAE;AACf,kCAAkC,aAAa,EAAE;AACjD,SAAS,cAAc,EAAE,eAAe,EAAE;AAC1C,OAAO,eAAe,EAAE,GAAG,iBAAiB;AAC5C,mCAAmC;AACnC,iFAAiF;AACjF,8EAA8E;AAC9E;EACE,uBAAuB;EACvB,yBAAyB;EACzB,gCAAgC;EAChC,iHAAiH;EACjH,0BAA0B;EAC1B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;;AAE7B;AACA,eAAe;AACf;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,0BAA0B;EAC5B;AACF;;AAEA,aAAa;AACb;EACE,mDAAmD;EACnD,8BAA8B;EAC9B;IACE,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,0EAA0E;EAC5E;AACF;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,mBAAmB;EACnB;IACE,8BAA8B;IAC9B,oBAAoB;IACpB,0BAA0B;IAC1B,mBAAmB;IACnB,YAAY;EACd;EACA;IACE,mBAAmB;EACrB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,iBAAiB;IACjB;MACE,WAAW;MACX,YAAY;MACZ,kBAAkB;MAClB,8BAA8B;MAC9B,qCAAqC;MACrC;QACE,cAAc;QACd,eAAe;QACf,sBAAsB;QACtB,2BAA2B;MAC7B;MACA;QACE,sCAAsC;MACxC;IACF;EACF;EACA;IACE,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,0EAA0E;EAC5E;AACF",sourcesContent:["/* CSS RESET: use box-sizing model; remove default margin & form typography\nstyles; set buttons to display block; set base (pre UA stylesheet) font size; */\n*, *::before, *::after { box-sizing: border-box; }\n* { margin: 0; }\ninput, button, textarea, select { font: inherit; }\nbutton { display: block; cursor: pointer; }\n:root{ font-size: 16px; }  /*chrome default*/\n/* imported google fonts examples */\n/* .roboto { font-family: \"Roboto\"; font-weight: 400,500; font-style: normal; } */\n/* variables---------------------------------------------------------------- */\n:root{\n  --black: hsl(0, 0%, 0%);\n  --white: hsl(0, 0%, 100%);\n  --transparent: hsl(0, 0%, 0%, 0);\n  /* tailwind blue palette based, then hue shifted ... CHANGE TO SKY PALETTE to OCD level MATCH TICTACTOE PROJECT */\n  --bg950: hsl(199, 91%, 9%);\n  --bg900: hsl(197, 86%, 16%);\n  --bg800: hsl(196, 88%, 20%);\n  --bg700: hsl(196, 94%, 24%);\n  --bg600: hsl(194, 94%, 30%);\n  --mg500: hsl(193, 84%, 39%);\n  --fg400: hsl(191, 64%, 52%);\n  --fg300: hsl(189, 72%, 67%);\n  --fg200: hsl(185, 76%, 80%);\n  --fg100: hsl(182, 80%, 90%);\n  --fg50:  hsl(185, 81%, 96%);\n\n}\n/* animations */\n@keyframes spinCW {\n  0% {\n    transform: rotate( 0turn );\n  }\n  100% {\n    transform: rotate( 1turn );\n  }\n}\n\n/* main CSS */\nbody{\n  font-family: 'Roboto', Arial, Helvetica, sans-serif;\n  background-color: var(--fg400);\n  h1 {\n    text-align: center;\n    font-weight: 400;\n    margin: 0 0 1rem 0;\n    padding: 0.25rem 0;\n    color: var(--white);\n    background: linear-gradient( to bottom, var(--bg700), var(--transparent) );\n  }\n}\n.weatherDiv {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--fg100);\n  #cityInput {\n    background-color: var(--fg200);\n    border-style: dashed;\n    border-color: var(--white);\n    color: var(--bg900);\n    width: 12rem;\n  }\n  #cityInput::placeholder {\n    color: var(--fg400);\n  }\n  .weatherCondition {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    padding: 0 0.5rem;\n    .iconFrame {\n      width: 64px;\n      height: 64px;\n      margin: 1rem 0 0 0;\n      background-color: var(--mg500);\n      box-shadow: 0 0 12px 1px var(--white);\n      .icon {\n        width: inherit;\n        height: inherit;\n        background-size: cover;\n        background-position: center;\n      }\n      .loading {\n        animation: spinCW 1.5s linear infinite;\n      }\n    }\n  }\n  .searchNote {\n    font-size: 0.9rem;\n    margin: 3rem 1rem;\n    color: var(--bg600);\n    background: linear-gradient( to bottom, var(--fg100), var(--transparent) );\n  }\n}\n"],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(i[A]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var A=n[s],c=r.base?A[0]+r.base:A[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var d=t(u),p={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==d)e[d].references++,e[d].updater(p);else{var m=o(p,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var A=r(n,o),c=0;c<a.length;c++){var l=t(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=A}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),s=t(56),A=t.n(s),c=t(540),l=t.n(c),u=t(113),d=t.n(u),p=t(365),m={};m.styleTagTransform=d(),m.setAttributes=A(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(p.A,m),p.A&&p.A.locals&&p.A.locals,t.p;const f=n=>console.log(n);document.querySelector("#cityInput").addEventListener("focusout",(n=>{n.stopPropagation(),document.querySelector(".weatherCondition .icon").style.backgroundImage='url("./assets/loading.svg")',document.querySelector(".weatherCondition .icon").classList.add("loading"),document.querySelector("#conditionSpan").textContent="Loading...",document.querySelector("#celsiusSpan").textContent="",document.querySelector("#fahrenheitSpan").textContent="",(async n=>{try{const e=await fetch(`https://api.weatherapi.com/v1/current.json?key=4eee2a31767b465e93a211647242603&q=${n.trim().toLowerCase()}`,{mode:"cors"});if(!e.ok)throw document.querySelector(".weatherCondition .icon").style.backgroundImage="none",document.querySelector("#conditionSpan").textContent="❌",document.querySelector("#celsiusSpan").textContent="❌",document.querySelector("#fahrenheitSpan").textContent="❌",new Error("Network response was not ok");(async n=>{f(n);const e=`https:${n.current.condition.icon}`;await(async n=>new Promise(((e,t)=>{const r=new Image;r.addEventListener("load",(()=>e())),r.addEventListener("error",(n=>t(n))),r.src=n})))(e),document.querySelector(".weatherCondition .icon").style.backgroundImage=`url(${e})`,document.querySelector(".weatherCondition .icon").classList.remove("loading"),document.querySelector("#conditionSpan").textContent=`${n.current.condition.text}`,document.querySelector("#celsiusSpan").textContent=`${n.current.temp_c} ℃`,document.querySelector("#fahrenheitSpan").textContent=`${n.current.temp_f} ℉`})(await e.json())}catch(n){f(n)}})(n.target.value?n.target.value:n.target.placeholder)}))})()})();
//# sourceMappingURL=main.bundle.js.map