(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = singleSpaHtml;

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var defaultOpts = {
    template: "",
    domElementGetter: null
  };

  function singleSpaHtml(opts) {
    if (!opts) {
      throw Error("single-spa-html must be called with an opts object");
    }

    opts = _objectSpread(_objectSpread({}, defaultOpts), opts);

    if ((typeof opts.template !== "string" || opts.template.trim().length === 0) && typeof opts.template !== "function") {
      throw Error("single-spa-html must be passed a 'template' opt that is a non empty string or function");
    }

    if (opts.domElementGetter && typeof opts.domElementGetter !== "function") {
      throw Error("single-spa-html was given 'opts.domElementGetter', but it isn't a function");
    }

    return {
      bootstrap: bootstrap.bind(null, opts),
      mount: mount.bind(null, opts),
      unmount: unmount.bind(null, opts)
    };
  }

  function bootstrap(opts, props) {
    return Promise.resolve();
  }

  function mount(opts, props) {
    return Promise.resolve(typeof opts.template === "function" ? opts.template(props) : opts.template).then(function (template) {
      var domElementGetter = chooseDomElementGetter(opts, props);
      var domEl = domElementGetter(props);

      if (!domEl) {
        throw Error("single-spa-html: domElementGetter did not return a valid dom element");
      }

      domEl.innerHTML = template;
    });
  }

  function unmount(opts, props) {
    return Promise.resolve().then(function () {
      var domElementGetter = chooseDomElementGetter(opts, props);
      var domEl = domElementGetter(props);

      if (!domEl) {
        throw Error("single-spa-html: domElementGetter did not return a valid dom element");
      }

      domEl.innerHTML = "";
    });
  }

  function chooseDomElementGetter(opts, props) {
    if (props.domElement) {
      return function () {
        return props.domElement;
      };
    } else if (props.domElementGetter) {
      return props.domElementGetter;
    } else if (opts.domElementGetter) {
      return opts.domElementGetter;
    } else {
      return defaultDomElementGetter(props);
    }
  }

  function defaultDomElementGetter(props) {
    var name = props.appName || props.name;

    if (!name) {
      throw Error("single-spa-html was not given an application name as a prop, so it can't make a unique dom element container for the ht l application");
    }

    var htmlId = "single-spa-application:".concat(name);
    return function defaultDomEl() {
      var domElement = document.getElementById(htmlId);

      if (!domElement) {
        domElement = document.createElement("div");
        domElement.id = htmlId;
        document.body.appendChild(domElement);
      }

      return domElement;
    };
  }
});
//# sourceMappingURL=single-spa-html.js.map

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount", function() { return mount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmount", function() { return unmount; });
/* harmony import */ var single_spa_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var single_spa_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(single_spa_html__WEBPACK_IMPORTED_MODULE_0__);

var htmlLifecycles = single_spa_html__WEBPACK_IMPORTED_MODULE_0___default()({
  template: "<h1>Hello from VanillaJS</h1>\n  <h2>Counter value is <span id=\"counterVal\"></span></h2>\n  <input type=\"button\" onclick=\"window.myapp.incrementor()\" value=\"+\"></input>\n  <input type=\"button\" onclick=\"window.myapp.decrementor()\" value=\"-\"></input>\n  "
});
htmlLifecycles.originalMount = htmlLifecycles.mount;
htmlLifecycles.mount = function (opts, props) {
  return htmlLifecycles.originalMount(opts, props).then(function () {
    var el = document.querySelector('#counterVal');
    el.innerText = window.myapp.counter;
    window.addEventListener('onIncrement', function () {
      el.innerText = window.myapp.counter;
    });
    window.addEventListener('onDecrement', function () {
      el.innerText = window.myapp.counter;
    });
  });
}.bind(htmlLifecycles);
var bootstrap = htmlLifecycles.bootstrap,
  mount = htmlLifecycles.mount,
  unmount = htmlLifecycles.unmount;


/***/ })

}]);
//# sourceMappingURL=3.js.map