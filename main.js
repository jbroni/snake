(()=>{"use strict";var t={222:(t,i,e)=>{let s;function r(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}e.r(i),e.d(i,{CustomStrategy:()=>o}),function(t){t[t.left=37]="left",t[t.up=38]="up",t[t.right=39]="right",t[t.down=40]="down"}(s||(s={}));class o{constructor(){r(this,"grid",void 0),r(this,"GRID_WIDTH",18),r(this,"GRID_HEIGHT",18)}step(t){this.initializeEmptyGrid(),this.placeObstacles(t);const i=t.snake.parts[0],e=this.grid[i.x][i.y],s=this.grid[t.fruit.x][t.fruit.y];let r=this.search(e,s);if(!r){const i=t.snake.parts.slice(-1).pop(),s=this.grid[i.x][i.y];r=this.search(e,s)}if(!r){this.getNeighbors(e).find(t=>!t.isObstacle)}return r?this.getDirection(e,r):t.snake.direction}initializeEmptyGrid(){this.grid=[];for(let t=0;t<this.GRID_WIDTH;t++)this.grid.push([]);for(let t=0;t<this.GRID_WIDTH;t++)for(let i=0;i<this.GRID_HEIGHT;i++)this.grid[t][i]={g:0,h:0,f:0,parent:void 0,position:{x:t,y:i},isObstacle:!1}}placeObstacles(t){const i=t=>{this.grid[t.x][t.y].isObstacle=!0};t.obstacles.forEach(i),t.snake.parts.forEach(i)}search(t,i){let e=[];const s=[];for(e.push(t);e.length>0;){let t;if(e.forEach(i=>{(!t||i.f<t.f)&&(t=i)}),n(t.position,i.position)){let i=t;const e=[];for(;i.parent;)e.push(i),i=i.parent;return e.slice(-1).pop()}e=e.filter(i=>i!==t),s.push(t);const a=this.getNeighbors(t);for(let n=0;n<a.length;n++){const p=a[n];if(h(s,p)||p.isObstacle)continue;const c=t.g+1;let l=!1;h(e,p)?c<p.g&&(l=!0):(l=!0,p.h=(r=p.position,o=i.position,Math.abs(o.x-r.x)+Math.abs(o.y-r.y)),e.push(p)),l&&(p.parent=t,p.g=c,p.f=p.g+p.h)}}var r,o}getNeighbors(t){const i=t.position.x,e=t.position.y,s=0===i?this.GRID_WIDTH-1:i-1,r=i===this.GRID_WIDTH-1?0:i+1,o=0===e?this.GRID_HEIGHT-1:e-1,n=e===this.GRID_HEIGHT-1?0:e+1;return[this.grid[s][e],this.grid[r][e],this.grid[i][o],this.grid[i][n]]}getDirection(t,i){const e=t.position.x,r=t.position.y,o=i.position.x,n=i.position.y;return 0===e&&o===this.GRID_WIDTH-1||e-1===o?s.left:e===this.GRID_WIDTH-1&&0===o||e+1===o?s.right:0===r&&n===this.GRID_HEIGHT-1||r-1===n?s.up:s.down}}function n(t,i){return t.x===i.x&&t.y===i.y}function h(t,i){return t.find(t=>n(t.position,i.position))}}},i={};function e(s){if(i[s])return i[s].exports;var r=i[s]={exports:{}};return t[s](r,r.exports,e),r.exports}e.m=t,e.d=(t,i)=>{for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},e.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.O={},e(222)})();