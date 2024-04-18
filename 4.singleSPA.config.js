(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "bootstrap", function() { return /* binding */ bootstrap; });
__webpack_require__.d(__webpack_exports__, "mount", function() { return /* binding */ mount; });
__webpack_require__.d(__webpack_exports__, "unmount", function() { return /* binding */ unmount; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(15);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/single-spa-react/lib/esm/single-spa-react.js
var single_spa_react = __webpack_require__(19);

// CONCATENATED MODULE: ./components/react/App.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var App_App = function App() {
  var _useState = Object(react["useState"])(0),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];
  Object(react["useEffect"])(function () {
    window.addEventListener('onIncrement', function () {
      setVal(window.myapp.counter);
    });
    window.addEventListener('onDecrement', function () {
      setVal(window.myapp.counter);
    });
  }, []);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h1", null, "Hello from React"), /*#__PURE__*/react_default.a.createElement("p", null, "Counter is ", val), /*#__PURE__*/react_default.a.createElement("input", {
    type: "button",
    onClick: function onClick() {
      return window.myapp.incrementor();
    },
    value: "+"
  }), /*#__PURE__*/react_default.a.createElement("input", {
    type: "button",
    onClick: function onClick() {
      return window.myapp.decrementor();
    },
    value: "-"
  }));
};
/* harmony default export */ var react_App = (App_App);
// CONCATENATED MODULE: ./components/react/index.js




function domElementGetter() {
  return document.getElementById("react");
}
var reactLifecycles = Object(single_spa_react["a" /* default */])({
  React: react_default.a,
  ReactDOM: react_dom_default.a,
  rootComponent: react_App,
  domElementGetter: domElementGetter
});
var bootstrap = reactLifecycles.bootstrap,
  mount = reactLifecycles.mount,
  unmount = reactLifecycles.unmount;


/***/ })

}]);
//# sourceMappingURL=4.singleSPA.config.js.map