/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={61:(t,e,r)=>{var n=r(698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new q(n||[]);return a(i,"_invoke",{value:S(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var v={};function p(){}function m(){}function y(){}var g={};f(g,u,(function(){return this}));var L=Object.getPrototypeOf,b=L&&L(L(O([])));b&&b!==r&&i.call(b,u)&&(g=b);var x=y.prototype=p.prototype=Object.create(g);function E(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function r(o,a,c,u){var s=h(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:T}}function T(){return{value:void 0,done:!0}}return m.prototype=y,a(x,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:m,configurable:!0}),m.displayName=f(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},E(w.prototype),f(w.prototype,s,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new w(d(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),f(x,l,"Generator"),f(x,u,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=O,q.prototype={constructor:q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),v}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,r)=>{var n=r(61)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,r){var n=document.documentElement,o="atribute-outside";function i(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((function(t){n.removeEventListener(t,i)})),r())}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){n.addEventListener(t,i)}))})),t.setAttribute(o,""))}function e(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}var o,i,a,c,u,s,l,f,d,h,v=r(687),p=r.n(v);function m(){var t,e=document.querySelectorAll("[data-numero]");t=new MutationObserver((function(r){r[0].target.classList.contains("anima")&&(t.disconnect(),e.forEach((function(t){var e=+t.innerText,r=0,n=e/100,o=setInterval((function(){r+=n,t.innerText=Math.floor(r),r>e&&(t.innerText=e,clearInterval(o))}),10*Math.random())})))}));var r=document.querySelector(".grid-section.numeros");t.observe(r,{attributes:!0})}!function(){var t=document.querySelectorAll('[data-menu="menu"] a[href^="#"');function e(t){t.preventDefault();var e=this.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}t.length&&t.forEach((function(t){t.addEventListener("click",e)}))}(),function(){var t=document.querySelectorAll('[data-scroll="scroll"]'),e=.5*window.innerHeight;function r(){t.forEach((function(t){t.getBoundingClientRect().top-e<0?t.classList.add("anima"):t.classList.contains("anima")&&t.classList.remove("anima")}))}t.length&&(window.addEventListener("scroll",r),r())}(),function(){var t=document.querySelectorAll(".faq-accordion dt"),e="ativo";function r(){this.classList.toggle(e),this.nextElementSibling.classList.toggle(e)}t.length&&(t[0].classList.add(e),t[0].nextElementSibling.classList.add(e),t.forEach((function(t){t.addEventListener("click",r)})))}(),o=document.querySelectorAll(".js-tabmenu li"),i=document.querySelectorAll(".js-tabcontent section"),o.length&&i.length&&(i[0].classList.add("ativo"),o.forEach((function(t,e){t.addEventListener("click",(function(){!function(t){i.forEach((function(t){t.classList.remove("ativo")}));var e=i[t].dataset.anime;i[t].classList.add("ativo",e)}(e)}))}))),function(){var t=document.querySelector("[data-modal=abrir]"),e=document.querySelector("[data-modal=container]"),r=document.querySelector("[data-modal=fechar]");if(t&&e&&r){var n=function(t){t.preventDefault(),e.classList.toggle("ativo")};t.addEventListener("click",n),e.addEventListener("click",(function(t){t.target===this&&n(t)})),r.addEventListener("click",n)}}(),function(){function t(t){var e=function(t){var e=document.createElement("div");e.classList.add("tooltip");var r=t.getAttribute("aria-label");return e.innerText=r,document.body.appendChild(e),e}(this),r={toolTip:"",handleEvent:function(t){e.style.top="".concat(t.pageY+20,"px"),e.style.left="".concat(t.pageX+20,"px")}};r.toolTip=e,this.addEventListener("mousemove",r);var n={element:"",toolTip:"",handleEvent:function(){this.toolTip.remove(),this.element.removeEventListener("mouseleave",n),this.element.removeEventListener("mousemove",r)}};n.element=this,n.toolTip=e,this.addEventListener("mouseleave",n)}document.querySelectorAll("[data-tooltip]").forEach((function(e){e.addEventListener("mouseover",t)}))}(),document.querySelectorAll("[data-dropdown] ").forEach((function(e){function r(e){var r=this;e.preventDefault(),this.classList.add("menu-ativado"),t(this,["touchstart","click"],(function(){r.classList.remove("menu-ativado")}))}["touchstart","click"].forEach((function(t){e.addEventListener(t,r)}))})),function(){var e=document.querySelector("[data-menu=button]"),r=document.querySelector("[data-menu=list]"),n=["touchstart","click"];function o(){e.classList.add("ativar"),r.classList.add("ativar"),t(r,n,(function(){e.classList.remove("ativar"),r.classList.remove("ativar")}))}e&&n.forEach((function(t){return e.addEventListener(t,o)}))}(),c=(a=document.querySelector("[data-semana]")).dataset.semana.split(",").map(Number),u=a.dataset.horario.split(",").map(Number),l=(s=new Date).getHours(),f=s.getDay(),d=-1!==c.indexOf(f),h=l>=u[0]&&l<u[1],d&&h&&a.classList.add("aberto"),function(){function t(){return(t=n(p().mark((function t(e){var r,n,o,i;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=function(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.especie,"</h3><span data-numero>").concat(t.quantidade,"</span>"),e},t.next=3,fetch(e);case 3:return r=t.sent,t.next=6,r.json();case 6:n=t.sent,o=document.querySelector(".numeros-grid"),n.forEach((function(t){var e=i(t);o.appendChild(e),m()}));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}("./numeroAnimaisApi.json")}()})()})();