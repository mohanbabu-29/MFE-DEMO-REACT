(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "bootstrap", function() { return /* binding */ bootstrap; });
__webpack_require__.d(__webpack_exports__, "mount", function() { return /* binding */ mount; });
__webpack_require__.d(__webpack_exports__, "unmount", function() { return /* binding */ unmount; });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.js
var vue = __webpack_require__(10);
var vue_default = /*#__PURE__*/__webpack_require__.n(vue);

// EXTERNAL MODULE: ./node_modules/single-spa-vue/lib/single-spa-vue.js
var single_spa_vue = __webpack_require__(8);
var single_spa_vue_default = /*#__PURE__*/__webpack_require__.n(single_spa_vue);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/vue/App.vue?vue&type=template&id=e7143b3e
var Appvue_type_template_id_e7143b3e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('h1', [_vm._v("Hello from Vue")]), _vm._v(" "), _c('h4', [_vm._v("My value is " + _vm._s(_vm.count))]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "button",
      "value": "+"
    },
    on: {
      "click": _vm.handleIncrement
    }
  }), _vm._v(" "), _c('input', {
    attrs: {
      "type": "button",
      "value": "-"
    },
    on: {
      "click": _vm.handleDecrement
    }
  })]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/vue/App.vue?vue&type=template&id=e7143b3e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./components/vue/App.vue?vue&type=script&lang=js
/* harmony default export */ var Appvue_type_script_lang_js = ({
  name: 'app',
  data: function data() {
    return {
      count: window.myapp.counter
    };
  },
  mounted: function mounted() {
    var _this = this;
    window.addEventListener('onIncrement', function () {
      _this.count = window.myapp.counter;
    });
    window.addEventListener('onDecrement', function () {
      _this.count = window.myapp.counter;
    });
  },
  methods: {
    handleIncrement: function handleIncrement() {
      window.myapp.incrementor();
    },
    handleDecrement: function handleDecrement() {
      window.myapp.decrementor();
    }
  }
});
// CONCATENATED MODULE: ./components/vue/App.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_Appvue_type_script_lang_js = (Appvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/vue/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  vue_Appvue_type_script_lang_js,
  Appvue_type_template_id_e7143b3e_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// CONCATENATED MODULE: ./components/vue/index.js



var vueLifecycles = single_spa_vue_default()({
  Vue: vue_default.a,
  appOptions: {
    el: '#vue',
    render: function render(r) {
      return r(App);
    }
  }
});
var bootstrap = vueLifecycles.bootstrap,
  mount = vueLifecycles.mount,
  unmount = vueLifecycles.unmount;


/***/ })

}]);
//# sourceMappingURL=5.singleSPA.config.js.map