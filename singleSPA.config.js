/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".singleSPA.config.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export BOOTSTRAPPING */
/* unused harmony export LOADING_SOURCE_CODE */
/* unused harmony export LOAD_ERROR */
/* unused harmony export MOUNTED */
/* unused harmony export MOUNTING */
/* unused harmony export NOT_BOOTSTRAPPED */
/* unused harmony export NOT_LOADED */
/* unused harmony export NOT_MOUNTED */
/* unused harmony export SKIP_BECAUSE_BROKEN */
/* unused harmony export UNLOADING */
/* unused harmony export UNMOUNTING */
/* unused harmony export UPDATING */
/* unused harmony export addErrorHandler */
/* unused harmony export checkActivityFunctions */
/* unused harmony export ensureJQuerySupport */
/* unused harmony export getAppNames */
/* unused harmony export getAppStatus */
/* unused harmony export getMountedApps */
/* unused harmony export mountRootParcel */
/* unused harmony export navigateToUrl */
/* unused harmony export pathToActiveWhen */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bt; });
/* unused harmony export removeErrorHandler */
/* unused harmony export setBootstrapMaxTime */
/* unused harmony export setMountMaxTime */
/* unused harmony export setUnloadMaxTime */
/* unused harmony export setUnmountMaxTime */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Bt; });
/* unused harmony export triggerAppChange */
/* unused harmony export unloadApplication */
/* unused harmony export unregisterApplication */
/* single-spa@5.9.5 - ESM - prod */
var t=Object.freeze({__proto__:null,get start(){return Bt},get ensureJQuerySupport(){return lt},get setBootstrapMaxTime(){return J},get setMountMaxTime(){return H},get setUnmountMaxTime(){return Q},get setUnloadMaxTime(){return V},get registerApplication(){return bt},get unregisterApplication(){return At},get getMountedApps(){return yt},get getAppStatus(){return Ot},get unloadApplication(){return Nt},get checkActivityFunctions(){return Tt},get getAppNames(){return Pt},get pathToActiveWhen(){return Dt},get navigateToUrl(){return et},get triggerAppChange(){return Lt},get addErrorHandler(){return a},get removeErrorHandler(){return c},get mountRootParcel(){return W},get NOT_LOADED(){return l},get LOADING_SOURCE_CODE(){return p},get NOT_BOOTSTRAPPED(){return h},get BOOTSTRAPPING(){return m},get NOT_MOUNTED(){return v},get MOUNTING(){return d},get UPDATING(){return g},get LOAD_ERROR(){return P},get MOUNTED(){return w},get UNLOADING(){return y},get UNMOUNTING(){return E},get SKIP_BECAUSE_BROKEN(){return O}});function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var r=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}).CustomEvent,o=function(){try{var t=new r("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?r:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,n){var e=document.createEvent("CustomEvent");return n?e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail):e.initCustomEvent(t,!1,!1,void 0),e}:function(t,n){var e=document.createEventObject();return e.type=t,n?(e.bubbles=Boolean(n.bubbles),e.cancelable=Boolean(n.cancelable),e.detail=n.detail):(e.bubbles=!1,e.cancelable=!1,e.detail=void 0),e},i=[];function u(t,n,e){var r=f(t,n,e);i.length?i.forEach((function(t){return t(r)})):setTimeout((function(){throw r}))}function a(t){if("function"!=typeof t)throw Error(s(28,!1));i.push(t)}function c(t){if("function"!=typeof t)throw Error(s(29,!1));var n=!1;return i=i.filter((function(e){var r=e===t;return n=n||r,!r})),n}function s(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];return"single-spa minified message #".concat(t,": ").concat(n?n+" ":"","See https://single-spa.js.org/error/?code=").concat(t).concat(r.length?"&arg=".concat(r.join("&arg=")):"")}function f(t,n,e){var r,o="".concat(S(n)," '").concat(A(n),"' died in status ").concat(n.status,": ");if(t instanceof Error){try{t.message=o+t.message}catch(t){}r=t}else{console.warn(s(30,!1,n.status,A(n)));try{r=Error(o+JSON.stringify(t))}catch(n){r=t}}return r.appOrParcelName=A(n),n.status=e,r}var l="NOT_LOADED",p="LOADING_SOURCE_CODE",h="NOT_BOOTSTRAPPED",m="BOOTSTRAPPING",v="NOT_MOUNTED",d="MOUNTING",w="MOUNTED",g="UPDATING",E="UNMOUNTING",y="UNLOADING",P="LOAD_ERROR",O="SKIP_BECAUSE_BROKEN";function b(t){return t.status===w}function T(t){try{return t.activeWhen(window.location)}catch(n){return u(n,t,O),!1}}function A(t){return t.name}function N(t){return Boolean(t.unmountThisParcel)}function S(t){return N(t)?"parcel":"application"}function _(){for(var t=arguments.length-1;t>0;t--)for(var n in arguments[t])"__proto__"!==n&&(arguments[t-1][n]=arguments[t][n]);return arguments[0]}function D(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return t[e];return null}function U(t){return t&&("function"==typeof t||(n=t,Array.isArray(n)&&!D(n,(function(t){return"function"!=typeof t}))));var n}function j(t,n){var e=t[n]||[];0===(e=Array.isArray(e)?e:[e]).length&&(e=[function(){return Promise.resolve()}]);var r=S(t),o=A(t);return function(t){return e.reduce((function(e,i,u){return e.then((function(){var e=i(t);return M(e)?e:Promise.reject(s(15,!1,r,o,n,u))}))}),Promise.resolve())}}function M(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}function L(t,n){return Promise.resolve().then((function(){return t.status!==h?t:(t.status=m,t.bootstrap?q(t,"bootstrap").then(e).catch((function(e){if(n)throw f(e,t,O);return u(e,t,O),t})):Promise.resolve().then(e))}));function e(){return t.status=v,t}}function R(t,n){return Promise.resolve().then((function(){if(t.status!==w)return t;t.status=E;var e=Object.keys(t.parcels).map((function(n){return t.parcels[n].unmountThisParcel()}));return Promise.all(e).then(r,(function(e){return r().then((function(){var r=Error(e.message);if(n)throw f(r,t,O);u(r,t,O)}))})).then((function(){return t}));function r(){return q(t,"unmount").then((function(){t.status=v})).catch((function(e){if(n)throw f(e,t,O);u(e,t,O)}))}}))}var I=!1,x=!1;function B(t,n){return Promise.resolve().then((function(){return t.status!==v?t:(I||(window.dispatchEvent(new o("single-spa:before-first-mount")),I=!0),q(t,"mount").then((function(){return t.status=w,x||(window.dispatchEvent(new o("single-spa:first-mount")),x=!0),t})).catch((function(e){return t.status=w,R(t,!0).then(r,r);function r(){if(n)throw f(e,t,O);return u(e,t,O),t}})))}))}var G=0,C={parcels:{}};function W(){return $.apply(C,arguments)}function $(t,e){var r=this;if(!t||"object"!==n(t)&&"function"!=typeof t)throw Error(s(2,!1));if(t.name&&"string"!=typeof t.name)throw Error(s(3,!1,n(t.name)));if("object"!==n(e))throw Error(s(4,!1,name,n(e)));if(!e.domElement)throw Error(s(5,!1,name));var o,i=G++,u="function"==typeof t,a=u?t:function(){return Promise.resolve(t)},c={id:i,parcels:{},status:u?p:h,customProps:e,parentName:A(r),unmountThisParcel:function(){return y.then((function(){if(c.status!==w)throw Error(s(6,!1,name,c.status));return R(c,!0)})).then((function(t){return c.parentName&&delete r.parcels[c.id],t})).then((function(t){return m(t),t})).catch((function(t){throw c.status=O,d(t),t}))}};r.parcels[i]=c;var l=a();if(!l||"function"!=typeof l.then)throw Error(s(7,!1));var m,d,E=(l=l.then((function(t){if(!t)throw Error(s(8,!1));var n=t.name||"parcel-".concat(i);if(Object.prototype.hasOwnProperty.call(t,"bootstrap")&&!U(t.bootstrap))throw Error(s(9,!1,n));if(!U(t.mount))throw Error(s(10,!1,n));if(!U(t.unmount))throw Error(s(11,!1,n));if(t.update&&!U(t.update))throw Error(s(12,!1,n));var e=j(t,"bootstrap"),r=j(t,"mount"),u=j(t,"unmount");c.status=h,c.name=n,c.bootstrap=e,c.mount=r,c.unmount=u,c.timeouts=z(t.timeouts),t.update&&(c.update=j(t,"update"),o.update=function(t){return c.customProps=t,k(function(t){return Promise.resolve().then((function(){if(t.status!==w)throw Error(s(32,!1,A(t)));return t.status=g,q(t,"update").then((function(){return t.status=w,t})).catch((function(n){throw f(n,t,O)}))}))}(c))})}))).then((function(){return L(c,!0)})),y=E.then((function(){return B(c,!0)})),P=new Promise((function(t,n){m=t,d=n}));return o={mount:function(){return k(Promise.resolve().then((function(){if(c.status!==v)throw Error(s(13,!1,name,c.status));return r.parcels[i]=c,B(c)})))},unmount:function(){return k(c.unmountThisParcel())},getStatus:function(){return c.status},loadPromise:k(l),bootstrapPromise:k(E),mountPromise:k(y),unmountPromise:k(P)}}function k(t){return t.then((function(){return null}))}function K(e){var r=A(e),o="function"==typeof e.customProps?e.customProps(r,window.location):e.customProps;("object"!==n(o)||null===o||Array.isArray(o))&&(o={},console.warn(s(40,!1),r,o));var i=_({},o,{name:r,mountParcel:$.bind(e),singleSpa:t});return N(e)&&(i.unmountSelf=e.unmountThisParcel),i}var F={bootstrap:{millis:4e3,dieOnTimeout:!1,warningMillis:1e3},mount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unmount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unload:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},update:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3}};function J(t,n,e){if("number"!=typeof t||t<=0)throw Error(s(16,!1));F.bootstrap={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function H(t,n,e){if("number"!=typeof t||t<=0)throw Error(s(17,!1));F.mount={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function Q(t,n,e){if("number"!=typeof t||t<=0)throw Error(s(18,!1));F.unmount={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function V(t,n,e){if("number"!=typeof t||t<=0)throw Error(s(19,!1));F.unload={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function q(t,n){var e=t.timeouts[n],r=e.warningMillis,o=S(t);return new Promise((function(i,u){var a=!1,c=!1;t[n](K(t)).then((function(t){a=!0,i(t)})).catch((function(t){a=!0,u(t)})),setTimeout((function(){return l(1)}),r),setTimeout((function(){return l(!0)}),e.millis);var f=s(31,!1,n,o,A(t),e.millis);function l(t){if(!a)if(!0===t)c=!0,e.dieOnTimeout?u(Error(f)):console.error(f);else if(!c){var n=t,o=n*r;console.warn(f),o+r<e.millis&&setTimeout((function(){return l(n+1)}),r)}}}))}function z(t){var n={};for(var e in F)n[e]=_({},F[e],t&&t[e]||{});return n}function X(t){return Promise.resolve().then((function(){return t.loadPromise?t.loadPromise:t.status!==l&&t.status!==P?t:(t.status=p,t.loadPromise=Promise.resolve().then((function(){var o=t.loadApp(K(t));if(!M(o))throw r=!0,Error(s(33,!1,A(t)));return o.then((function(r){var o;t.loadErrorTime=null,"object"!==n(e=r)&&(o=34),Object.prototype.hasOwnProperty.call(e,"bootstrap")&&!U(e.bootstrap)&&(o=35),U(e.mount)||(o=36),U(e.unmount)||(o=37);var i=S(e);if(o){var a;try{a=JSON.stringify(e)}catch(t){}return console.error(s(o,!1,i,A(t),a),e),u(void 0,t,O),t}return e.devtools&&e.devtools.overlays&&(t.devtools.overlays=_({},t.devtools.overlays,e.devtools.overlays)),t.status=h,t.bootstrap=j(e,"bootstrap"),t.mount=j(e,"mount"),t.unmount=j(e,"unmount"),t.unload=j(e,"unload"),t.timeouts=z(e.timeouts),delete t.loadPromise,t}))})).catch((function(n){var e;return delete t.loadPromise,r?e=O:(e=P,t.loadErrorTime=(new Date).getTime()),u(n,t,e),t})));var e,r}))}var Y,Z="undefined"!=typeof window,tt={hashchange:[],popstate:[]},nt=["hashchange","popstate"];function et(t){var n;if("string"==typeof t)n=t;else if(this&&this.href)n=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error(s(14,!1));n=t.currentTarget.href,t.preventDefault()}var e=st(window.location.href),r=st(n);0===n.indexOf("#")?window.location.hash=r.hash:e.host!==r.host&&r.host?window.location.href=n:r.pathname===e.pathname&&r.search===e.search?window.location.hash=r.hash:window.history.pushState(null,null,n)}function rt(t){var n=this;if(t){var e=t[0].type;nt.indexOf(e)>=0&&tt[e].forEach((function(e){try{e.apply(n,t)}catch(t){setTimeout((function(){throw t}))}}))}}function ot(){Rt([],arguments)}function it(t,n){return function(){var e=window.location.href,r=t.apply(this,arguments),o=window.location.href;return Y&&e===o||(Gt()?window.dispatchEvent(ut(window.history.state,n)):Rt([])),r}}function ut(t,n){var e;try{e=new PopStateEvent("popstate",{state:t})}catch(n){(e=document.createEvent("PopStateEvent")).initPopStateEvent("popstate",!1,!1,t)}return e.singleSpa=!0,e.singleSpaTrigger=n,e}if(Z){window.addEventListener("hashchange",ot),window.addEventListener("popstate",ot);var at=window.addEventListener,ct=window.removeEventListener;window.addEventListener=function(t,n){if(!("function"==typeof n&&nt.indexOf(t)>=0)||D(tt[t],(function(t){return t===n})))return at.apply(this,arguments);tt[t].push(n)},window.removeEventListener=function(t,n){if(!("function"==typeof n&&nt.indexOf(t)>=0))return ct.apply(this,arguments);tt[t]=tt[t].filter((function(t){return t!==n}))},window.history.pushState=it(window.history.pushState,"pushState"),window.history.replaceState=it(window.history.replaceState,"replaceState"),window.singleSpaNavigate?console.warn(s(41,!1)):window.singleSpaNavigate=et}function st(t){var n=document.createElement("a");return n.href=t,n}var ft=!1;function lt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!ft){var n=t.fn.on,e=t.fn.off;t.fn.on=function(t,e){return pt.call(this,n,window.addEventListener,t,e,arguments)},t.fn.off=function(t,n){return pt.call(this,e,window.removeEventListener,t,n,arguments)},ft=!0}}function pt(t,n,e,r,o){return"string"!=typeof e?t.apply(this,o):(e.split(/\s+/).forEach((function(t){nt.indexOf(t)>=0&&(n(t,r),e=e.replace(t,""))})),""===e.trim()?this:t.apply(this,o))}var ht={};function mt(t){return Promise.resolve().then((function(){var n=ht[A(t)];if(!n)return t;if(t.status===l)return vt(t,n),t;if(t.status===y)return n.promise.then((function(){return t}));if(t.status!==v&&t.status!==P)return t;var e=t.status===P?Promise.resolve():q(t,"unload");return t.status=y,e.then((function(){return vt(t,n),t})).catch((function(e){return function(t,n,e){delete ht[A(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,u(e,t,O),n.reject(e)}(t,n,e),t}))}))}function vt(t,n){delete ht[A(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=l,n.resolve()}function dt(t,n,e,r){ht[A(t)]={app:t,resolve:e,reject:r},Object.defineProperty(ht[A(t)],"promise",{get:n})}function wt(t){return ht[t]}var gt=[];function Et(){var t=[],n=[],e=[],r=[],o=(new Date).getTime();return gt.forEach((function(i){var u=i.status!==O&&T(i);switch(i.status){case P:u&&o-i.loadErrorTime>=200&&e.push(i);break;case l:case p:u&&e.push(i);break;case h:case v:!u&&wt(A(i))?t.push(i):u&&r.push(i);break;case w:u||n.push(i)}})),{appsToUnload:t,appsToUnmount:n,appsToLoad:e,appsToMount:r}}function yt(){return gt.filter(b).map(A)}function Pt(){return gt.map(A)}function Ot(t){var n=D(gt,(function(n){return A(n)===t}));return n?n.status:null}function bt(t,e,r,o){var i=function(t,e,r,o){var i,u={name:null,loadApp:null,activeWhen:null,customProps:null};return"object"===n(t)?(function(t){if(Array.isArray(t)||null===t)throw Error(s(39,!1));var e=["name","app","activeWhen","customProps"],r=Object.keys(t).reduce((function(t,n){return e.indexOf(n)>=0?t:t.concat(n)}),[]);if(0!==r.length)throw Error(s(38,!1,e.join(", "),r.join(", ")));if("string"!=typeof t.name||0===t.name.length)throw Error(s(20,!1));if("object"!==n(t.app)&&"function"!=typeof t.app)throw Error(s(20,!1));var o=function(t){return"string"==typeof t||"function"==typeof t};if(!(o(t.activeWhen)||Array.isArray(t.activeWhen)&&t.activeWhen.every(o)))throw Error(s(24,!1));if(!_t(t.customProps))throw Error(s(22,!1))}(t),u.name=t.name,u.loadApp=t.app,u.activeWhen=t.activeWhen,u.customProps=t.customProps):(function(t,n,e,r){if("string"!=typeof t||0===t.length)throw Error(s(20,!1));if(!n)throw Error(s(23,!1));if("function"!=typeof e)throw Error(s(24,!1));if(!_t(r))throw Error(s(22,!1))}(t,e,r,o),u.name=t,u.loadApp=e,u.activeWhen=r,u.customProps=o),u.loadApp="function"!=typeof(i=u.loadApp)?function(){return Promise.resolve(i)}:i,u.customProps=function(t){return t||{}}(u.customProps),u.activeWhen=function(t){var n=Array.isArray(t)?t:[t];return n=n.map((function(t){return"function"==typeof t?t:Dt(t)})),function(t){return n.some((function(n){return n(t)}))}}(u.activeWhen),u}(t,e,r,o);if(-1!==Pt().indexOf(i.name))throw Error(s(21,!1,i.name));gt.push(_({loadErrorTime:null,status:l,parcels:{},devtools:{overlays:{options:{},selectors:[]}}},i)),Z&&(lt(),Rt())}function Tt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location;return gt.filter((function(n){return n.activeWhen(t)})).map(A)}function At(t){if(0===gt.filter((function(n){return A(n)===t})).length)throw Error(s(25,!1,t));return Nt(t).then((function(){var n=gt.map(A).indexOf(t);gt.splice(n,1)}))}function Nt(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if("string"!=typeof t)throw Error(s(26,!1));var e=D(gt,(function(n){return A(n)===t}));if(!e)throw Error(s(27,!1,t));var r,o=wt(A(e));if(n&&n.waitForUnmount){if(o)return o.promise;var i=new Promise((function(t,n){dt(e,(function(){return i}),t,n)}));return i}return o?(r=o.promise,St(e,o.resolve,o.reject)):r=new Promise((function(t,n){dt(e,(function(){return r}),t,n),St(e,t,n)})),r}function St(t,n,e){R(t).then(mt).then((function(){n(),setTimeout((function(){Rt()}))})).catch(e)}function _t(t){return!t||"function"==typeof t||"object"===n(t)&&null!==t&&!Array.isArray(t)}function Dt(t,n){var e=function(t,n){var e=0,r=!1,o="^";"/"!==t[0]&&(t="/"+t);for(var i=0;i<t.length;i++){var u=t[i];(!r&&":"===u||r&&"/"===u)&&a(i)}return a(t.length),new RegExp(o,"i");function a(i){var u=t.slice(e,i).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");if(o+=r?"[^/]+/?":u,i===t.length)if(r)n&&(o+="$");else{var a=n?"":".*";o="/"===o.charAt(o.length-1)?"".concat(o).concat(a,"$"):"".concat(o,"(/").concat(a,")?(#.*)?$")}r=!r,e=i}}(t,n);return function(t){var n=t.origin;n||(n="".concat(t.protocol,"//").concat(t.host));var r=t.href.replace(n,"").replace(t.search,"").split("?")[0];return e.test(r)}}var Ut=!1,jt=[],Mt=Z&&window.location.href;function Lt(){return Rt()}function Rt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(Ut)return new Promise((function(t,e){jt.push({resolve:t,reject:e,eventArguments:n})}));var r,i=Et(),u=i.appsToUnload,a=i.appsToUnmount,c=i.appsToLoad,s=i.appsToMount,f=!1,p=Mt,h=Mt=window.location.href;return Gt()?(Ut=!0,r=u.concat(c,a,s),g()):(r=c,d());function m(){f=!0}function d(){return Promise.resolve().then((function(){var t=c.map(X);return Promise.all(t).then(y).then((function(){return[]})).catch((function(t){throw y(),t}))}))}function g(){return Promise.resolve().then((function(){if(window.dispatchEvent(new o(0===r.length?"single-spa:before-no-app-change":"single-spa:before-app-change",P(!0))),window.dispatchEvent(new o("single-spa:before-routing-event",P(!0,{cancelNavigation:m}))),f)return window.dispatchEvent(new o("single-spa:before-mount-routing-event",P(!0))),E(),void et(p);var n=u.map(mt),e=a.map(R).map((function(t){return t.then(mt)})).concat(n),i=Promise.all(e);i.then((function(){window.dispatchEvent(new o("single-spa:before-mount-routing-event",P(!0)))}));var l=c.map((function(t){return X(t).then((function(t){return It(t,i)}))})),h=s.filter((function(t){return c.indexOf(t)<0})).map((function(t){return It(t,i)}));return i.catch((function(t){throw y(),t})).then((function(){return y(),Promise.all(l.concat(h)).catch((function(n){throw t.forEach((function(t){return t.reject(n)})),n})).then(E)}))}))}function E(){var n=yt();t.forEach((function(t){return t.resolve(n)}));try{var e=0===r.length?"single-spa:no-app-change":"single-spa:app-change";window.dispatchEvent(new o(e,P())),window.dispatchEvent(new o("single-spa:routing-event",P()))}catch(t){setTimeout((function(){throw t}))}if(Ut=!1,jt.length>0){var i=jt;jt=[],Rt(i)}return n}function y(){t.forEach((function(t){rt(t.eventArguments)})),rt(n)}function P(){var t,o=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=arguments.length>1?arguments[1]:void 0,m={},d=(e(t={},w,[]),e(t,v,[]),e(t,l,[]),e(t,O,[]),t);o?(c.concat(s).forEach((function(t,n){E(t,w)})),u.forEach((function(t){E(t,l)})),a.forEach((function(t){E(t,v)}))):r.forEach((function(t){E(t)}));var g={detail:{newAppStatuses:m,appsByNewStatus:d,totalAppChanges:r.length,originalEvent:null==n?void 0:n[0],oldUrl:p,newUrl:h,navigationIsCanceled:f}};return i&&_(g.detail,i),g;function E(t,n){var e=A(t);n=n||Ot(e),m[e]=n,(d[n]=d[n]||[]).push(e)}}}function It(t,n){return T(t)?L(t).then((function(t){return n.then((function(){return T(t)?B(t):t}))})):n.then((function(){return t}))}var xt=!1;function Bt(t){var n;xt=!0,t&&t.urlRerouteOnly&&(n=t.urlRerouteOnly,Y=n),Z&&Rt()}function Gt(){return xt}Z&&setTimeout((function(){xt||console.warn(s(1,!1))}),5e3);var Ct={getRawAppData:function(){return[].concat(gt)},reroute:Rt,NOT_LOADED:l,toLoadPromise:X,toBootstrapPromise:L,unregisterApplication:At};Z&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=Ct);
//# sourceMappingURL=single-spa.min.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

Object(single_spa__WEBPACK_IMPORTED_MODULE_0__[/* registerApplication */ "a"])('vue', function () {
  return Promise.all(/* import() */[__webpack_require__.e(2), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, 4));
}, function () {
  return location.pathname === "/vue" || location.pathname === "/" ? true : false;
});
Object(single_spa__WEBPACK_IMPORTED_MODULE_0__[/* registerApplication */ "a"])('react', function () {
  return Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, 5));
}, function () {
  return location.pathname === "/react" || location.pathname === "/" ? true : false;
});
Object(single_spa__WEBPACK_IMPORTED_MODULE_0__[/* registerApplication */ "a"])('vanillajs', function () {
  return __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 3));
}, function () {
  return location.pathname === "/vanillajs" || location.pathname === "/" ? true : false;
});
Object(single_spa__WEBPACK_IMPORTED_MODULE_0__[/* start */ "b"])();

/***/ })
/******/ ]);
//# sourceMappingURL=singleSPA.config.js.map