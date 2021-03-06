// { "framework": "Vue" }

/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};

    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {

        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId])
        /******/
            return installedModules[moduleId].exports;

        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            exports: {},
            /******/
            id: moduleId,
            /******/
            loaded: false
                /******/
        };

        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        /******/ // Flag the module as loaded
        /******/
        module.loaded = true;

        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }


    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;

    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;

    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";

    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(0);
    /******/
})
/************************************************************************/
/******/
([
    /* 0 */
    /***/
    function(module, exports, __webpack_require__) {

        var __vue_exports__, __vue_options__
        var __vue_styles__ = []

        /* styles */
        __vue_styles__.push(__webpack_require__(1))

        /* script */
        __vue_exports__ = __webpack_require__(2)

        /* template */
        var __vue_template__ = __webpack_require__(3)
        __vue_options__ = __vue_exports__ = __vue_exports__ || {}
        if (
            typeof __vue_exports__.default === "object" ||
            typeof __vue_exports__.default === "function"
        ) {
            if (Object.keys(__vue_exports__).some(function(key) {
                    return key !== "default" && key !== "__esModule"
                })) {
                console.error("named exports are not supported in *.vue files.")
            }
            __vue_options__ = __vue_exports__ = __vue_exports__.default
        }
        if (typeof __vue_options__ === "function") {
            __vue_options__ = __vue_options__.options
        }
        __vue_options__.__file = "/usr/src/app/raw/73b9d33116f41ca7fdc3fe8008215fb7.native.entry.vue"
        __vue_options__.render = __vue_template__.render
        __vue_options__.staticRenderFns = __vue_template__.staticRenderFns
        __vue_options__.style = __vue_options__.style || {}
        __vue_styles__.forEach(function(module) {
            for (var name in module) {
                __vue_options__.style[name] = module[name]
            }
        })

        module.exports = __vue_exports__
        module.exports.el = '#root'
        new Vue(module.exports)


        /***/
    },
    /* 1 */
    /***/
    function(module, exports) {

        module.exports = {
            "panel": {
                "width": 600,
                "height": 300,
                "marginLeft": 75,
                "marginTop": 35,
                "marginBottom": 35,
                "flexDirection": "column",
                "justifyContent": "center",
                "borderWidth": 2,
                "borderStyle": "solid",
                "borderColor": "rgb(162,217,192)",
                "backgroundColor": "rgba(162,217,192,0.2)"
            },
            "text": {
                "fontSize": 80,
                "textAlign": "center",
                "color": "#41B883"
            }
        }

        /***/
    },
    /* 2 */
    /***/
    function(module, exports) {

        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        //
        //
        //
        //
        //
        //
        //
        //

        exports.default = {
            data: function data() {
                return {
                    labels: ['A', 'B', 'C', 'D', 'E', 'F']
                };
            }
        };

        /***/
    },
    /* 3 */
    /***/
    function(module, exports) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('list', {
                    staticClass: ["list"]
                }, _vm._l((_vm.labels), function(name) {
                    return _c('cell', {
                        staticClass: ["cell"],
                        appendAsTree: true,
                        attrs: {
                            "append": "tree"
                        }
                    }, [_c('div', {
                        staticClass: ["panel"]
                    }, [_c('text', {
                        staticClass: ["text"]
                    }, [_vm._v(_vm._s(name))])])])
                }))
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true

        /***/
    }
    /******/
]);
