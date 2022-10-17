function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const n=void 0!==t&&"[object global]"==={}.toString.call(t);function r(e,t){return 0===e.indexOf(t.toLowerCase())?e:`${t.toLowerCase()}${e.substr(0,1).toUpperCase()}${e.substr(1)}`}function i(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function o(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function s(e){return/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e)}function a(e={}){const t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(i=r,!isNaN(parseFloat(i))&&isFinite(i)&&Math.floor(i)==i)return`https://vimeo.com/${r}`;var i;if(o(r))return r.replace("http:","https:");if(t)throw new TypeError(`“${t}” is not a valid video id.`);throw new TypeError(`“${r}” is not a vimeo.com url.`)}const u=void 0!==Array.prototype.indexOf,c="undefined"!=typeof window&&void 0!==window.postMessage;if(!(n||u&&c))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),r=function(e,t,r){n?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:r}):e[t]=r};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(r(this,"_id",o("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function n(e,n){if(!i(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function o(e){return e+"_"+s()+"."+s()}function s(){return Math.random().toString().substring(2)}return r(e.prototype,"delete",(function(e){if(n(this,"delete"),!i(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),r(e.prototype,"get",(function(e){if(n(this,"get"),i(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),r(e.prototype,"has",(function(e){if(n(this,"has"),!i(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),r(e.prototype,"set",(function(e,t){if(n(this,"set"),!i(e))throw new TypeError("Invalid value used as weak map key");var o=e[this._id];return o&&o[0]===e?(o[1]=t,this):(r(e,this._id,[e,t]),this)})),r(e,"_polyfill",!0),e}()}function i(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{});var l,d,f,h={};
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/f=function(){var e,t,n,r=Object.prototype.toString,i="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(t){e=function(e,t,n){return e[t]=n,e}}function o(e,r){n.add(e,r),t||(t=i(n.drain))}function s(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function a(){for(var e=0;e<this.chain.length;e++)u(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function u(e,t,n){var r,i;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(i=s(r))?i.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}}function c(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=s(e))?o((function(){var r=new f(n);try{t.call(e,(function(){c.apply(r,arguments)}),(function(){l.apply(r,arguments)}))}catch(e){l.call(r,e)}})):(n.msg=e,n.state=1,n.chain.length>0&&o(a,n))}catch(e){l.call(new f(n),e)}}}function l(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&o(a,t))}function d(e,t,n,r){for(var i=0;i<t.length;i++)!function(i){e.resolve(t[i]).then((function(e){n(i,e)}),r)}(i)}function f(e){this.def=e,this.triggered=!1}function h(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function m(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new h(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&o(a,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){c.call(t,e)}),(function(e){l.call(t,e)}))}catch(e){l.call(t,e)}}n=function(){var e,n,r;function i(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,o){r=new i(t,o),n?n.next=r:e=r,n=r,r=void 0},drain:function(){var r=e;for(e=n=t=void 0;r;)r.fn.call(r.self),r=r.next}}}();var p=e({},"constructor",m,!1);return m.prototype=p,e(p,"__NPO__",0,!1),e(m,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(m,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(m,"all",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var i=e.length,o=Array(i),s=0;d(t,e,(function(e,t){o[e]=t,++s===i&&n(o)}),r)}))})),e(m,"race",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");d(t,e,(function(e,t){n(t)}),r)}))})),m},(d=void 0!==t?t:h)[l="Promise"]=d[l]||f(),h?h=d[l]:"function"==typeof define&&define.amd&&define((function(){return d[l]}));const m=new WeakMap;function p(e,t,n){const r=m.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),m.set(e.element,r)}function g(e,t){return(m.get(e.element)||{})[t]||[]}function w(e,t,n){const r=m.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],m.set(e.element,r),!0;const i=r[t].indexOf(n);return-1!==i&&r[t].splice(i,1),m.set(e.element,r),r[t]&&0===r[t].length}function y(e,t){const n=g(e,t);if(n.length<1)return!1;const r=n.shift();return w(e,t,r),r}function v(e,t){const n=m.get(e);m.set(t,n),m.delete(e)}function b(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function E(e,t,n){if(!e.element.contentWindow||!e.element.contentWindow.postMessage)return;let r={method:t};void 0!==n&&(r.value=n);const i=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));i>=8&&i<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}function T(e,t){let n,r=[];if((t=b(t)).event){if("error"===t.event){g(e,t.data.method).forEach((n=>{const r=new Error(t.data.message);r.name=t.data.name,n.reject(r),w(e,t.data.method,n)}))}r=g(e,`event:${t.event}`),n=t.data}else if(t.method){const i=y(e,t.method);i&&(r.push(i),n=t.value)}r.forEach((t=>{try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(e){}}))}const P=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function _(e,t={}){return P.reduce(((t,n)=>{const r=e.getAttribute(`data-vimeo-${n}`);return(r||""===r)&&(t[n]=""===r?1:r),t}),t)}function M({html:e},t){if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");const n=document.createElement("div");return n.innerHTML=e,t.appendChild(n.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function N(e,t={},n){return new Promise(((r,i)=>{if(!o(e))throw new TypeError(`“${e}” is not a vimeo.com url.`);let s=`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(e)}`;for(const e in t)t.hasOwnProperty(e)&&(s+=`&${e}=${encodeURIComponent(t[e])}`);const a="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;a.open("GET",s,!0),a.onload=function(){if(404!==a.status)if(403!==a.status)try{const t=JSON.parse(a.responseText);if(403===t.domain_status_code)return M(t,n),void i(new Error(`“${e}” is not embeddable.`));r(t)}catch(e){i(e)}else i(new Error(`“${e}” is not embeddable.`));else i(new Error(`“${e}” was not found.`))},a.onerror=function(){const e=a.status?` (${a.status})`:"";i(new Error(`There was an error fetching the embed code from Vimeo${e}.`))},a.send()}))}const k=new WeakMap,F=new WeakMap;let j={};n||(j=function(){const e=function(){let e;const t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];let n=0;const r=t.length,i={};for(;n<r;n++)if(e=t[n],e&&e[1]in document){for(n=0;n<e.length;n++)i[t[0][n]]=e[n];return i}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},n={request:t=>new Promise(((r,i)=>{const o=function(){n.off("fullscreenchange",o),r()};n.on("fullscreenchange",o);const s=(t=t||document.documentElement)[e.requestFullscreen]();s instanceof Promise&&s.then(o).catch(i)})),exit:()=>new Promise(((t,r)=>{if(!n.isFullscreen)return void t();const i=function(){n.off("fullscreenchange",i),t()};n.on("fullscreenchange",i);const o=document[e.exitFullscreen]();o instanceof Promise&&o.then(i).catch(r)})),on(e,n){const r=t[e];r&&document.addEventListener(r,n)},off(e,n){const r=t[e];r&&document.removeEventListener(r,n)}};return Object.defineProperties(n,{isFullscreen:{get:()=>Boolean(document[e.fullscreenElement])},element:{enumerable:!0,get:()=>document[e.fullscreenElement]},isEnabled:{enumerable:!0,get:()=>Boolean(document[e.fullscreenEnabled])}}),n}(),function(e=document){const t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=e=>{"console"in window&&console.error&&console.error(`There was an error creating an embed: ${e}`)};t.forEach((e=>{try{if(null!==e.getAttribute("data-vimeo-defer"))return;const t=_(e);N(a(t),t,e).then((t=>M(t,e))).catch(n)}catch(e){n(e)}}))}(),function(e=document){if(window.VimeoPlayerResizeEmbeds_)return;window.VimeoPlayerResizeEmbeds_=!0,window.addEventListener("message",(t=>{if(!o(t.origin))return;if(!t.data||"spacechange"!==t.data.event)return;const n=e.querySelectorAll("iframe");for(let e=0;e<n.length;e++)if(n[e].contentWindow===t.source){n[e].parentElement.style.paddingBottom=`${t.data.data[0].bottom}px`;break}}))}(),function(e=document){if(window.VimeoSeoMetadataAppended)return;window.VimeoSeoMetadataAppended=!0,window.addEventListener("message",(t=>{if(!o(t.origin))return;const n=b(t.data);if(!n||"ready"!==n.event)return;const r=e.querySelectorAll("iframe");for(let e=0;e<r.length;e++){const n=r[e],i=n.contentWindow===t.source;s(n.src)&&i&&new x(n).callMethod("appendVideoMetadata",window.location.href)}}))}(),function(e=document){if(window.VimeoCheckedUrlTimeParam)return;window.VimeoCheckedUrlTimeParam=!0;const t=e=>{"console"in window&&console.error&&console.error(`There was an error getting video Id: ${e}`)};window.addEventListener("message",(n=>{if(!o(n.origin))return;const r=b(n.data);if(!r||"ready"!==r.event)return;const i=e.querySelectorAll("iframe");for(let e=0;e<i.length;e++){const r=i[e],o=r.contentWindow===n.source;if(s(r.src)&&o){const e=new x(r);e.getVideoId().then((t=>{const n=new RegExp(`[?&]vimeo_t_${t}=([^&#]*)`).exec(window.location.href);if(n&&n[1]){const t=decodeURI(n[1]);e.setCurrentTime(t)}})).catch(t)}}}))}());var x=class{callMethod(t,n={}){return new(e(h))(((e,r)=>this.ready().then((()=>{p(this,t,{resolve:e,reject:r}),E(this,t,n)})).catch(r)))}get(t){return new(e(h))(((e,n)=>(t=r(t,"get"),this.ready().then((()=>{p(this,t,{resolve:e,reject:n}),E(this,t)})).catch(n))))}set(t,n){return new(e(h))(((e,i)=>{if(t=r(t,"set"),null==n)throw new TypeError("There must be a value to set.");return this.ready().then((()=>{p(this,t,{resolve:e,reject:i}),E(this,t,n)})).catch(i)}))}on(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===g(this,`event:${e}`).length&&this.callMethod("addEventListener",e).catch((()=>{})),p(this,`event:${e}`,t)}off(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");w(this,`event:${e}`,t)&&this.callMethod("removeEventListener",e).catch((e=>{}))}loadVideo(e){return this.callMethod("loadVideo",e)}ready(){const t=F.get(this)||new(e(h))(((e,t)=>{t(new Error("Unknown player. Probably unloaded."))}));return e(h).resolve(t)}addCuePoint(e,t={}){return this.callMethod("addCuePoint",{time:e,data:t})}removeCuePoint(e){return this.callMethod("removeCuePoint",e)}enableTextTrack(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}disableTextTrack(){return this.callMethod("disableTextTrack")}pause(){return this.callMethod("pause")}play(){return this.callMethod("play")}requestFullscreen(){return j.isEnabled?j.request(this.element):this.callMethod("requestFullscreen")}exitFullscreen(){return j.isEnabled?j.exit():this.callMethod("exitFullscreen")}getFullscreen(){return j.isEnabled?e(h).resolve(j.isFullscreen):this.get("fullscreen")}requestPictureInPicture(){return this.callMethod("requestPictureInPicture")}exitPictureInPicture(){return this.callMethod("exitPictureInPicture")}getPictureInPicture(){return this.get("pictureInPicture")}unload(){return this.callMethod("unload")}destroy(){return new(e(h))((e=>{if(F.delete(this),k.delete(this.element),this._originalElement&&(k.delete(this._originalElement),this._originalElement.removeAttribute("data-vimeo-initialized")),this.element&&"IFRAME"===this.element.nodeName&&this.element.parentNode&&(this.element.parentNode.parentNode&&this._originalElement&&this._originalElement!==this.element.parentNode?this.element.parentNode.parentNode.removeChild(this.element.parentNode):this.element.parentNode.removeChild(this.element)),this.element&&"DIV"===this.element.nodeName&&this.element.parentNode){this.element.removeAttribute("data-vimeo-initialized");const e=this.element.querySelector("iframe");e&&e.parentNode&&(e.parentNode.parentNode&&this._originalElement&&this._originalElement!==e.parentNode?e.parentNode.parentNode.removeChild(e.parentNode):e.parentNode.removeChild(e))}this._window.removeEventListener("message",this._onMessage),j.isEnabled&&j.off("fullscreenchange",this.fullscreenchangeHandler),e()}))}getAutopause(){return this.get("autopause")}setAutopause(e){return this.set("autopause",e)}getBuffered(){return this.get("buffered")}getCameraProps(){return this.get("cameraProps")}setCameraProps(e){return this.set("cameraProps",e)}getChapters(){return this.get("chapters")}getCurrentChapter(){return this.get("currentChapter")}getColor(){return this.get("color")}setColor(e){return this.set("color",e)}getCuePoints(){return this.get("cuePoints")}getCurrentTime(){return this.get("currentTime")}setCurrentTime(e){return this.set("currentTime",e)}getDuration(){return this.get("duration")}getEnded(){return this.get("ended")}getLoop(){return this.get("loop")}setLoop(e){return this.set("loop",e)}setMuted(e){return this.set("muted",e)}getMuted(){return this.get("muted")}getPaused(){return this.get("paused")}getPlaybackRate(){return this.get("playbackRate")}setPlaybackRate(e){return this.set("playbackRate",e)}getPlayed(){return this.get("played")}getQualities(){return this.get("qualities")}getQuality(){return this.get("quality")}setQuality(e){return this.set("quality",e)}getSeekable(){return this.get("seekable")}getSeeking(){return this.get("seeking")}getTextTracks(){return this.get("textTracks")}getVideoEmbedCode(){return this.get("videoEmbedCode")}getVideoId(){return this.get("videoId")}getVideoTitle(){return this.get("videoTitle")}getVideoWidth(){return this.get("videoWidth")}getVideoHeight(){return this.get("videoHeight")}getVideoUrl(){return this.get("videoUrl")}getVolume(){return this.get("volume")}setVolume(e){return this.set("volume",e)}constructor(t,n={}){if(window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!i(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){const e=t.querySelector("iframe");e&&(t=e)}if("IFRAME"===t.nodeName&&!o(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(k.has(t))return k.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";const r=new(e(h))(((e,r)=>{if(this._onMessage=t=>{if(!o(t.origin)||this.element.contentWindow!==t.source)return;"*"===this.origin&&(this.origin=t.origin);const n=b(t.data);if(n&&"error"===n.event&&n.data&&"ready"===n.data.method){const e=new Error(n.data.message);return e.name=n.data.name,void r(e)}const i=n&&"ready"===n.event,s=n&&"ping"===n.method;if(i||s)return this.element.setAttribute("data-ready","true"),void e();T(this,n)},this._window.addEventListener("message",this._onMessage),"IFRAME"!==this.element.nodeName){const e=_(t,n);N(a(e),e,t).then((e=>{const n=M(e,t);return this.element=n,this._originalElement=t,v(t,n),k.set(this.element,this),e})).catch(r)}}));if(F.set(this,r),k.set(this.element,this),"IFRAME"===this.element.nodeName&&E(this,"ping"),j.isEnabled){const e=()=>j.exit();this.fullscreenchangeHandler=()=>{j.isFullscreen?p(this,"event:exitFullscreen",e):w(this,"event:exitFullscreen",e),this.ready().then((()=>{E(this,"fullscreenchange",j.isFullscreen)}))},j.on("fullscreenchange",this.fullscreenchangeHandler)}return this}};const C=document.querySelector("iframe");var S={},$=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,q=/^0o[0-7]+$/i,I=parseInt,V="object"==typeof t&&t&&t.Object===Object&&t,R="object"==typeof self&&self&&self.Object===Object&&self,W=V||R||Function("return this")(),L=Object.prototype.toString,z=Math.max,U=Math.min,D=function(){return W.Date.now()};function H(e,t,n){var r,i,o,s,a,u,c=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,o=i;return r=i=void 0,c=t,s=e.apply(o,n)}function m(e){return c=e,a=setTimeout(g,t),l?h(e):s}function p(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=o}function g(){var e=D();if(p(e))return w(e);a=setTimeout(g,function(e){var n=t-(e-u);return d?U(n,o-(e-c)):n}(e))}function w(e){return a=void 0,f&&r?h(e):(r=i=void 0,s)}function y(){var e=D(),n=p(e);if(r=arguments,i=this,u=e,n){if(void 0===a)return m(u);if(d)return a=setTimeout(g,t),h(u)}return void 0===a&&(a=setTimeout(g,t)),s}return t=Q(t)||0,B(n)&&(l=!!n.leading,o=(d="maxWait"in n)?z(Q(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=u=i=a=void 0},y.flush=function(){return void 0===a?s:w(D())},y}function B(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Q(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==L.call(e)}(e))return NaN;if(B(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=B(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace($,"");var n=O.test(e);return n||q.test(e)?I(e.slice(2),n?2:8):A.test(e)?NaN:+e}S=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return B(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),H(e,t,{leading:r,maxWait:t,trailing:i})};const J=new x(C);try{!function(){const e=JSON.parse(localStorage.getItem("videoplayer-current-time")).seconds;J.setCurrentTime(e)}()}catch{J.setCurrentTime(0)}J.on("timeupdate",S((function(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e))}),1e3)),localStorage.removeItem("videoplayer-current-time");
//# sourceMappingURL=02-video.4ad578d4.js.map
