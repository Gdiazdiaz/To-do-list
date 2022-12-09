"use strict";(self.webpackChunkto_do_list=self.webpackChunkto_do_list||[]).push([[179],{426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"body {\r\n  background-color: #d3d3d3;\r\n  padding: 0;\r\n}\r\n\r\n.project-container {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  top: 10px;\r\n  left: 10px;\r\n  right: 10px;\r\n  bottom: 10px;\r\n  background-color: #fff;\r\n  margin: 0;\r\n}\r\n\r\n.menu-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 0;\r\n  padding: 0 10px;\r\n  border-bottom: #d3d3d3 solid 1px;\r\n}\r\n\r\n.menu-text {\r\n  align-self: center;\r\n}\r\n\r\n.reload {\r\n  width: 15px;\r\n  height: 15px;\r\n  align-self: center;\r\n}\r\n\r\n.add-container {\r\n  border-bottom: #d3d3d3 solid 1px;\r\n  height: 45px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n#form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 0 10px;\r\n}\r\n\r\n.add-task {\r\n  border: none;\r\n  font-style: italic;\r\n  font-size: 15px;\r\n  outline: none;\r\n}\r\n\r\n.submit-button {\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\n.enter {\r\n  width: 15px;\r\n  height: 15px;\r\n  align-self: center;\r\n}\r\n\r\n.list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0 10px;\r\n  align-items: center;\r\n  border-bottom: #d3d3d3 solid 1px;\r\n}\r\n\r\n.content-div {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  height: 45px;\r\n}\r\n\r\n.content {\r\n  border: none;\r\n  text-decoration: none;\r\n}\r\n\r\n.clear-btn {\r\n  border: none;\r\n  height: 45px;\r\n  opacity: 0.6;\r\n}\r\n\r\n.item-menu {\r\n  height: 35px;\r\n  width: 30px;\r\n  opacity: 0.6;\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n\r\n.trashcan {\r\n  height: 25px;\r\n  width: 25px;\r\n  opacity: 0.6;\r\n  display: none;\r\n}\r\n\r\n.false {\r\n  text-decoration: none;\r\n}\r\n\r\n.true {\r\n  text-decoration: line-through;\r\n  opacity: 0.5;\r\n}\r\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},286:(n,e,t)=>{t.d(e,{iQ:()=>k,IY:()=>S,wq:()=>w});var r=t(379),o=t.n(r),a=t(795),i=t.n(a),c=t(569),s=t.n(c),l=t(565),d=t.n(l),u=t(216),p=t.n(u),f=t(589),h=t.n(f),m=t(426),v={};function g(n){for(let e=0;e<n.length;e++)n[e].index=e;return n}v.styleTagTransform=h(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;let y=w;document.querySelector(".clear-btn").addEventListener("click",(function(){y=w.filter((n=>!0!==n.completed)),localStorage.setItem("tasks",JSON.stringify(y)),g(y),localStorage.setItem("tasks",JSON.stringify(y)),window.location.reload()}));const x=document.querySelector(".list-container"),b=document.querySelector("#form");let w=JSON.parse(localStorage.getItem("tasks"))||[];class k{constructor(n="",e=!1,t=0,r=""){this.description=n,this.completed=e,this.index=t,this.chbox=r}}function S(){!function(n){let e=0;for(let t=0;t<n.length;t++)for(let r=t;r<n.length;r++)n[r].index<n[t].index&&(e=n[r],n[r]=n[t],n[t]=e);w=n}(w);let n="";w.forEach((e=>{n+=`<div class="task">\n      <div class="content-div"><input class="checkbox" name="${e.index}" type="checkbox" ${e.chbox}>\n      <input class="content ${e.completed}" value="${e.description}"></div>\n      <svg class="item-menu" id="menu" xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" id="mainIconPathAttribute"></path> </svg>\n      <svg class="trashcan" id="${e.index}" xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" id="mainIconPathAttribute" fill="#737373"></path> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" id="mainIconPathAttribute" fill="#737373"></path> </svg>\n  </div>`})),x.innerHTML=n,document.querySelectorAll(".content").forEach((n=>{const e=n.parentElement.parentElement.children[1],t=n.parentElement.parentElement.children[2],r=n.value;n.addEventListener("focus",(()=>{e.style.display="none",t.style.display="block"})),n.addEventListener("blur",(()=>{if(e.style.display="block",t.style.display="none",n.value!=r){let e=0;for(;e!=t.id;)e++;w[e].description=n.value,localStorage.setItem("tasks",JSON.stringify(w))}}))})),document.querySelectorAll(".trashcan").forEach((n=>{n.addEventListener("mousedown",(()=>function(n){let e=0;for(;e!=n;)e++;w.splice(e,1),g(w),localStorage.setItem("tasks",JSON.stringify(w)),S()}(n.id)))})),document.querySelectorAll(".checkbox").forEach((n=>{n.addEventListener("change",(()=>{!function(n){if(n.checked){let e=0;for(;e!=n.name;)e++;w[e].completed=!0,w[e].chbox="checked"}else{let e=0;for(;e!=n.name;)e++;w[e].completed=!1,w[e].chbox="!checked"}localStorage.setItem("tasks",JSON.stringify(w))}(n);const e=n.parentElement.children[1];n.checked?(e.style.textDecoration="line-through",e.style.opacity="0.5"):(e.style.textDecoration="none",e.style.opacity="1")}))}))}b.addEventListener("submit",(n=>{n.preventDefault();const e=document.querySelector(".add-task"),t=w.length;!function(n,e,t){const r=new k(n,!1,t);w.push(r),localStorage.setItem("tasks",JSON.stringify(w)),S()}(e.value,0,t),e.value=""})),S()}},n=>{n(n.s=286)}]);