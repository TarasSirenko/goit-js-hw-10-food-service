var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return c.Date.now()};function p(e,t,n){var o,r,i,a,u,f,c=0,l=!1,p=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,u=setTimeout(h,t),l?b(e):a}function I(e){var n=e-f;return void 0===f||n>=t||n<0||p&&e-c>=i}function h(){var e=d();if(I(e))return j(e);u=setTimeout(h,function(e){var n=t-(e-f);return p?m(n,i-(e-c)):n}(e))}function j(e){return u=void 0,y&&o?b(e):(o=r=void 0,a)}function O(){var e=d(),n=I(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(p)return u=setTimeout(h,t),b(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=v(t)||0,g(n)&&(l=!!n.leading,i=(p="maxWait"in n)?s(v(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},O.flush=function(){return void 0===u?a:j(d())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=r.test(e);return u||i.test(e)?a(e.slice(2),u?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const y={form:document.querySelector(".feedback-form"),emailInput:document.querySelector('[name="email"]'),messageInput:document.querySelector('[name="message"]')};let b={};const S=()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));y.emailInput.value=e.email,y.messageInput.value=e.message,b=e}catch{y.emailInput.value="",y.messageInput.value=""}};S();y.form.addEventListener("input",t((e=>{b[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(b))}),500)),y.form.addEventListener("submit",(e=>{e.preventDefault();const t=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(t),localStorage.removeItem("feedback-form-state"),S()}));
//# sourceMappingURL=03-feedback.0805b478.js.map