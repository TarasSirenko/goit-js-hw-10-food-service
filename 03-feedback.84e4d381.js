!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return d.Date.now()};function b(e,t,n){var r,i,a,u,f,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function j(e){return l=e,f=setTimeout(O,t),s?b(e):u}function I(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function O(){var e=g();if(I(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-c);return d?p(n,a-(e-l)):n}(e))}function h(e){return f=void 0,m&&r?b(e):(r=i=void 0,u)}function w(){var e=g(),n=I(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(d)return f=setTimeout(O,t),b(c)}return void 0===f&&(f=setTimeout(O,t)),u}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},w.flush=function(){return void 0===f?u:h(g())},w}function y(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=u.test(e);return o||f.test(e)?c(e.slice(2),o?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var j={form:document.querySelector(".feedback-form"),emailInput:document.querySelector('[name="email"]'),messageInput:document.querySelector('[name="message"]')},I={},O=function(){try{var e=JSON.parse(localStorage.getItem("feedback-form-state"));j.emailInput.value=e.email,j.messageInput.value=e.message,I=e}catch(e){j.emailInput.value="",j.messageInput.value=""}};O();j.form.addEventListener("input",n((function(e){I[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(I))}),500)),j.form.addEventListener("submit",(function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(t),localStorage.removeItem("feedback-form-state"),O()}))}();
//# sourceMappingURL=03-feedback.84e4d381.js.map