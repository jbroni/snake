var strategy;strategy=(()=>{"use strict";var e={763:(e,r,t)=>{var o={Strategy:()=>t.e(222).then(()=>()=>t(222))},n=e=>t.o(o,e)?o[e]():Promise.resolve().then(()=>{throw new Error('Module "'+e+'" does not exist in container.')}),a=e=>{Object.assign(t.O,e)};t.d(r,{get:()=>n,override:()=>a})}},r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={id:o,loaded:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}return t.m=e,t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce((r,o)=>(t.f[o](e,r),r),[])),t.u=e=>e+".32f6393c4599ba99d7ca.js",t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{t.O={};var r={},o={},n={},a={};t.f.overridables=(i,s)=>{t.o(n,i)&&n[i].forEach(n=>{s.push(t.o(r,n)?r[n]:r[n]=Promise.resolve((t.O[o[n]]||a[n])()).then(t=>{r[n]=0,e[n]=e=>{e.exports=t()}}))})}})(),t.p="https://manfredsteyer.github.io/snake/",(()=>{var e={600:0};t.f.j=(r,o)=>{var n=t.o(e,r)?e[r]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise((t,o)=>{n=e[r]=[t,o]});o.push(n[2]=a);var i,s=t.p+t.u(r),d=document.createElement("script");d.charset="utf-8",d.timeout=120,t.nc&&d.setAttribute("nonce",t.nc),d.src=s;var u=new Error;i=o=>{i=()=>{},d.onerror=d.onload=null,clearTimeout(c);var a=(()=>{if(t.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n))return n[1]})();if(a){var s=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;u.message="Loading chunk "+r+" failed.\n("+s+": "+l+")",u.name="ChunkLoadError",u.type=s,u.request=l,a(u)}};var c=setTimeout(()=>{i({type:"timeout",target:d})},12e4);d.onerror=d.onload=i,document.head.appendChild(d)}};var r=window.webpackJsonpngx_snake=window.webpackJsonpngx_snake||[],o=r.push.bind(r);r.push=function(r){for(var o,a,i=r[0],s=r[1],d=r[3],u=0,c=[];u<i.length;u++)a=i[u],t.o(e,a)&&e[a]&&c.push(e[a][0]),e[a]=0;for(o in s)t.o(s,o)&&(t.m[o]=s[o]);for(d&&d(t),n&&n(r);c.length;)c.shift()()};var n=o})(),t(763)})();