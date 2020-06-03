module.exports = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require('../../../ssr-module-cache.js') // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }) // Execute the module function
    /******/
    /******/ /******/ var threw = true
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__,
      )
      /******/ threw = false
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId]
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true // Return the exports of the module
    /******/
    /******/ /******/ return module.exports
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      })
      /******/
    }
    /******/
  } // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      })
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true })
    /******/
  } // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode,
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value)
    /******/ if (mode & 8) return value
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value
    /******/ var ns = Object.create(null)
    /******/ __webpack_require__.r(ns)
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    })
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key]
          }.bind(null, key),
        )
    /******/ return ns
    /******/
  } // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default']
          }
        : /******/ function getModuleExports() {
            return module
          }
    /******/ __webpack_require__.d(getter, 'a', getter)
    /******/ return getter
    /******/
  } // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  } // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0))
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ '../next-server/lib/utils':
      /*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("next/dist/next-server/lib/utils.js");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n',
        )

        /***/
      },

    /***/ './components/Meta.js':
      /*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = "/Users/lucyking/Documents/Client projects/AVA-Breathing-Space-Web/components/Meta.js";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Meta = () => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 3\n  }\n}, __jsx("meta", {\n  charSet: "utf-8",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }\n}), __jsx("meta", {\n  httpEquiv: "X-UA-Compatible",\n  content: "IE=edge",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }\n}), __jsx("meta", {\n  name: "viewport",\n  content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }\n}), __jsx("meta", {\n  name: "description",\n  content: "Helping you find the right support at the right time",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }\n}), __jsx("meta", {\n  name: "keywords",\n  content: "support",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }\n}), __jsx("title", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }\n}, "Breathing Space"), __jsx("link", {\n  rel: "manifest",\n  href: "/manifest.json",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }\n}), __jsx("link", {\n  rel: "apple-touch-icon",\n  sizes: "180x180",\n  href: "/apple-touch-icon.png",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }\n}), __jsx("link", {\n  rel: "icon",\n  type: "image/png",\n  sizes: "32x32",\n  href: "/favicon-32x32.png",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }\n}), __jsx("link", {\n  rel: "icon",\n  type: "image/png",\n  sizes: "16x16",\n  href: "/favicon-16x16.png",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }\n}), __jsx("link", {\n  rel: "manifest",\n  href: "/site.webmanifest",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }\n}), __jsx("meta", {\n  name: "theme-color",\n  content: "#2196f3",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }\n}));\n\n/* harmony default export */ __webpack_exports__["default"] = (Meta);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01ldGEuanM/NGMzNSJdLCJuYW1lcyI6WyJNZXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUNYLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQU0sU0FBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUU7QUFBTSxXQUFTLEVBQUMsaUJBQWhCO0FBQWtDLFNBQU8sRUFBQyxTQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsRUFHRTtBQUNFLE1BQUksRUFBQyxVQURQO0FBRUUsU0FBTyxFQUFDLHFGQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFIRixFQU9FO0FBQ0UsTUFBSSxFQUFDLGFBRFA7QUFFRSxTQUFPLEVBQUMsc0RBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVBGLEVBV0U7QUFBTSxNQUFJLEVBQUMsVUFBWDtBQUFzQixTQUFPLEVBQUMsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVhGLEVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaRixFQWNFO0FBQU0sS0FBRyxFQUFDLFVBQVY7QUFBcUIsTUFBSSxFQUFDLGdCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBZEYsRUFnQkU7QUFBTSxLQUFHLEVBQUMsa0JBQVY7QUFBNkIsT0FBSyxFQUFDLFNBQW5DO0FBQTZDLE1BQUksRUFBQyx1QkFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWhCRixFQWlCRTtBQUFNLEtBQUcsRUFBQyxNQUFWO0FBQWlCLE1BQUksRUFBQyxXQUF0QjtBQUFrQyxPQUFLLEVBQUMsT0FBeEM7QUFBZ0QsTUFBSSxFQUFDLG9CQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBakJGLEVBa0JFO0FBQU0sS0FBRyxFQUFDLE1BQVY7QUFBaUIsTUFBSSxFQUFDLFdBQXRCO0FBQWtDLE9BQUssRUFBQyxPQUF4QztBQUFnRCxNQUFJLEVBQUMsb0JBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFsQkYsRUFtQkU7QUFBTSxLQUFHLEVBQUMsVUFBVjtBQUFxQixNQUFJLEVBQUMsbUJBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFuQkYsRUFxQkU7QUFBTSxNQUFJLEVBQUMsYUFBWDtBQUF5QixTQUFPLEVBQUMsU0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQXJCRixDQURGOztBQTBCZUEsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01ldGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IE1ldGEgPSAoKSA9PiAoXG4gIDxIZWFkPlxuICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgIDxtZXRhXG4gICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEsbWluaW11bS1zY2FsZT0xLG1heGltdW0tc2NhbGU9MSx1c2VyLXNjYWxhYmxlPW5vXCJcbiAgICAvPlxuICAgIDxtZXRhXG4gICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgY29udGVudD1cIkhlbHBpbmcgeW91IGZpbmQgdGhlIHJpZ2h0IHN1cHBvcnQgYXQgdGhlIHJpZ2h0IHRpbWVcIlxuICAgIC8+XG4gICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cInN1cHBvcnRcIiAvPlxuICAgIDx0aXRsZT5CcmVhdGhpbmcgU3BhY2U8L3RpdGxlPlxuXG4gICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL21hbmlmZXN0Lmpzb25cIiAvPlxuXG4gICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxuICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIzMngzMlwiIGhyZWY9XCIvZmF2aWNvbi0zMngzMi5wbmdcIiAvPlxuICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxuICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cblxuICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMjE5NmYzXCIgLz5cbiAgPC9IZWFkPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNZXRhXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Meta.js\n',
        )

        /***/
      },

    /***/ './components/Page.js':
      /*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = "/Users/lucyking/Documents/Client projects/AVA-Breathing-Space-Web/components/Page.js";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Page = ({\n  children\n}) => __jsx("main", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 1,\n    columnNumber: 32\n  }\n}, children);\n\n/* harmony default export */ __webpack_exports__["default"] = (Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2UuanM/MTc1YyJdLCJuYW1lcyI6WyJQYWdlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFPQSxRQUFQLENBQS9COztBQUVlRCxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBhZ2UgPSAoeyBjaGlsZHJlbiB9KSA9PiA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuXG5leHBvcnQgZGVmYXVsdCBQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Page.js\n',
        )

        /***/
      },

    /***/ './lib/withData.js':
      /*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst createClient = () => new apollo_boost__WEBPACK_IMPORTED_MODULE_1___default.a({\n  uri: \'https://is8j72h6.api.sanity.io/v1/graphql/production/default\'\n});\n\n/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(createClient));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvd2l0aERhdGEuanM/ZGJmMSJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJBcG9sbG9DbGllbnQiLCJ1cmkiLCJ3aXRoQXBvbGxvIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsTUFDbkIsSUFBSUMsbURBQUosQ0FBaUI7QUFDZkMsS0FBRyxFQUFFO0FBRFUsQ0FBakIsQ0FERjs7QUFLZUMsc0hBQVUsQ0FBQ0gsWUFBRCxDQUF6QiIsImZpbGUiOiIuL2xpYi93aXRoRGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3aXRoQXBvbGxvIGZyb20gJ25leHQtd2l0aC1hcG9sbG8nXG5pbXBvcnQgQXBvbGxvQ2xpZW50IGZyb20gJ2Fwb2xsby1ib29zdCdcblxuY29uc3QgY3JlYXRlQ2xpZW50ID0gKCkgPT5cbiAgbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgdXJpOiAnaHR0cHM6Ly9pczhqNzJoNi5hcGkuc2FuaXR5LmlvL3YxL2dyYXBocWwvcHJvZHVjdGlvbi9kZWZhdWx0JyxcbiAgfSlcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhjcmVhdGVDbGllbnQpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/withData.js\n',
        )

        /***/
      },

    /***/ './node_modules/next/app.js':
      /*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n',
        )

        /***/
      },

    /***/ './node_modules/next/dist/pages/_app.js':
      /*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict'
        eval(
          "\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.Container = Container;\nexports.createUrl = createUrl;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  // Kept here for backwards compatibility.\n  // When someone ended App they could call `super.componentDidCatch`.\n  // @deprecated This method is no longer needed. Errors are caught at the top level\n  componentDidCatch(error, _errorInfo) {\n    throw error;\n  }\n\n  render() {\n    const {\n      router,\n      Component,\n      pageProps,\n      __N_SSG,\n      __N_SSP\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy\n    // methods like getStaticProps and getServerSideProps\n    !(__N_SSG || __N_SSP) ? {\n      url: createUrl(router)\n    } : {}));\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nlet warnContainer;\nlet warnUrl;\n\nif (true) {\n  warnContainer = (0, _utils.execOnce)(() => {\n    console.warn(`Warning: the \\`Container\\` in \\`_app\\` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated`);\n  });\n  warnUrl = (0, _utils.execOnce)(() => {\n    console.error(`Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated`);\n  });\n} // @deprecated noop for now until removal\n\n\nfunction Container(p) {\n  if (true) warnContainer();\n  return p.children;\n}\n\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  const {\n    pathname,\n    asPath,\n    query\n  } = router;\n  return {\n    get query() {\n      if (true) warnUrl();\n      return query;\n    },\n\n    get pathname() {\n      if (true) warnUrl();\n      return pathname;\n    },\n\n    get asPath() {\n      if (true) warnUrl();\n      return asPath;\n    },\n\n    back: () => {\n      if (true) warnUrl();\n      router.back();\n    },\n    push: (url, as) => {\n      if (true) warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: (href, as) => {\n      if (true) warnUrl();\n      const pushRoute = as ? href : '';\n      const pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: (url, as) => {\n      if (true) warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: (href, as) => {\n      if (true) warnUrl();\n      const replaceRoute = as ? href : '';\n      const replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3g/MmMzNSJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7OztBQWVBOzs7OztBQUlBLGtDQUFrQztBQUFBO0FBQWxDO0FBQWtDLENBQWxDLEVBR3lDO0FBQ3ZDLFFBQU1BLFNBQVMsR0FBRyxNQUFNLDJDQUF4QixHQUF3QixDQUF4QjtBQUNBLFNBQU87QUFBUDtBQUFPLEdBQVA7QUFHYTs7QUFBQSxrQkFBMkNDLGVBQU1DLFNBQWpELENBR2I7QUFJQTtBQUNBO0FBQ0E7QUFDQUMsbUJBQWlCLG9CQUE0QztBQUMzRDtBQUdGQzs7QUFBQUEsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFxRCxLQUEzRDtBQUdBLHdCQUNFLHFFQUdJO0FBQ0E7QUFDSSxNQUFFQyxPQUFPLElBQVQsV0FBd0I7QUFBRUMsU0FBRyxFQUFFQyxTQUFTLENBQXhDLE1BQXdDO0FBQWhCLEtBQXhCLEdBTlYsRUFDRSxFQURGO0FBZkY7O0FBQUE7OztBQUhtQkMsRyxDQUlaQyxtQkFKWUQsR0FJVUUsa0JBSlZGO0FBQUFBLEcsQ0FLWkcsZUFMWUgsR0FLTUUsa0JBTE5GO0FBK0JyQjtBQUNBOztBQUVBLFVBQTJDO0FBQ3pDSSxlQUFhLEdBQUcscUJBQVMsTUFBTTtBQUM3QkMsV0FBTyxDQUFQQTtBQURGRCxHQUFnQixDQUFoQkE7QUFNQUUsU0FBTyxHQUFHLHFCQUFTLE1BQU07QUFDdkJELFdBQU8sQ0FBUEE7QUFERkMsR0FBVSxDQUFWQTtBQU9GLEMsQ0FBQTs7O0FBQ08sc0JBQTJCO0FBQ2hDLFlBQTJDRixhQUFhO0FBQ3hELFNBQU9HLENBQUMsQ0FBUjtBQUdLOztBQUFBLDJCQUFtQztBQUN4QztBQUNBLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFOO0FBQ0EsU0FBTztBQUNMLGdCQUFZO0FBQ1YsZ0JBQTJDRCxPQUFPO0FBQ2xEO0FBSEc7O0FBS0wsbUJBQWU7QUFDYixnQkFBMkNBLE9BQU87QUFDbEQ7QUFQRzs7QUFTTCxpQkFBYTtBQUNYLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVhHOztBQWFMRSxRQUFJLEVBQUUsTUFBTTtBQUNWLGdCQUEyQ0YsT0FBTztBQUNsREcsWUFBTSxDQUFOQTtBQWZHO0FBaUJMQyxRQUFJLEVBQUUsYUFBOEI7QUFDbEMsZ0JBQTJDSixPQUFPO0FBQ2xELGFBQU9HLE1BQU0sQ0FBTkEsVUFBUCxFQUFPQSxDQUFQO0FBbkJHO0FBcUJMRSxVQUFNLEVBQUUsY0FBK0I7QUFDckMsZ0JBQTJDTCxPQUFPO0FBQ2xELFlBQU1NLFNBQVMsR0FBR0MsRUFBRSxVQUFwQjtBQUNBLFlBQU1DLE9BQU8sR0FBR0QsRUFBRSxJQUFsQjtBQUVBLGFBQU9KLE1BQU0sQ0FBTkEsZ0JBQVAsT0FBT0EsQ0FBUDtBQTFCRztBQTRCTE0sV0FBTyxFQUFFLGFBQThCO0FBQ3JDLGdCQUEyQ1QsT0FBTztBQUNsRCxhQUFPRyxNQUFNLENBQU5BLGFBQVAsRUFBT0EsQ0FBUDtBQTlCRztBQWdDTE8sYUFBUyxFQUFFLGNBQStCO0FBQ3hDLGdCQUEyQ1YsT0FBTztBQUNsRCxZQUFNVyxZQUFZLEdBQUdKLEVBQUUsVUFBdkI7QUFDQSxZQUFNSyxVQUFVLEdBQUdMLEVBQUUsSUFBckI7QUFFQSxhQUFPSixNQUFNLENBQU5BLHNCQUFQLFVBQU9BLENBQVA7QUFyQ0o7QUFBTyxHQUFQO0FBd0NEIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n",
        )

        /***/
      },

    /***/ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js':
      /*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    "default": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/MDJiYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js\n',
        )

        /***/
      },

    /***/ './pages/_app.js':
      /*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwindcss/resolveConfig */ "tailwindcss/resolveConfig");\n/* harmony import */ var tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");\n/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tailwind.config.js */ "./tailwind.config.js");\n/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");\nvar _jsxFileName = "/Users/lucyking/Documents/Client projects/AVA-Breathing-Space-Web/pages/_app.js";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n //eslint-disable-line\n\n //eslint-disable-line\n\n\n\nconst {\n  theme\n} = tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_3___default()(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_6___default.a);\n\nclass BreathingSpace extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {\n  static async getInitialProps({\n    Component,\n    ctx\n  }) {\n    let pageProps = {};\n\n    if (Component.getInitialProps) {\n      pageProps = await Component.getInitialProps(ctx);\n    }\n\n    pageProps.query = ctx.query;\n    return {\n      pageProps\n    };\n  }\n\n  render() {\n    const {\n      Component,\n      apollo,\n      pageProps\n    } = this.props;\n    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {\n      client: apollo,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 7\n      }\n    }, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {\n      theme: theme,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }\n    }, __jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_9__["default"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 11\n      }\n    }), __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_8__["default"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }\n    }, __jsx(Component, _extends({}, pageProps, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }\n    })))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withData__WEBPACK_IMPORTED_MODULE_5__["default"])(BreathingSpace));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsidGhlbWUiLCJyZXNvbHZlQ29uZmlnIiwidGFpbHdpbmRDb25maWciLCJCcmVhdGhpbmdTcGFjZSIsIkFwcCIsImdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsInF1ZXJ5IiwicmVuZGVyIiwiYXBvbGxvIiwicHJvcHMiLCJ3aXRoRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUNtRDs7Q0FDdEI7O0FBRTdCO0FBQ0E7QUFFQSxNQUFNO0FBQUVBO0FBQUYsSUFBWUMsZ0VBQWEsQ0FBQ0MsMERBQUQsQ0FBL0I7O0FBRUEsTUFBTUMsY0FBTixTQUE2QkMsK0NBQTdCLENBQWlDO0FBQy9CLGVBQWFDLGVBQWIsQ0FBNkI7QUFBRUMsYUFBRjtBQUFhQztBQUFiLEdBQTdCLEVBQWlEO0FBQy9DLFFBQUlDLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxRQUFJRixTQUFTLENBQUNELGVBQWQsRUFBK0I7QUFDN0JHLGVBQVMsR0FBRyxNQUFNRixTQUFTLENBQUNELGVBQVYsQ0FBMEJFLEdBQTFCLENBQWxCO0FBQ0Q7O0FBRURDLGFBQVMsQ0FBQ0MsS0FBVixHQUFrQkYsR0FBRyxDQUFDRSxLQUF0QjtBQUNBLFdBQU87QUFBRUQ7QUFBRixLQUFQO0FBQ0Q7O0FBRURFLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRUosZUFBRjtBQUFhSyxZQUFiO0FBQXFCSDtBQUFyQixRQUFtQyxLQUFLSSxLQUE5QztBQUNBLFdBQ0UsTUFBQywyREFBRDtBQUFnQixZQUFNLEVBQUVELE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLCtEQUFEO0FBQWUsV0FBSyxFQUFFWCxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLFNBQUQsZUFBZVEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREYsQ0FGRixDQURGLENBREY7QUFVRDs7QUF2QjhCOztBQTBCbEJLLDRIQUFRLENBQUNWLGNBQUQsQ0FBdkIiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHJlc29sdmVDb25maWcgZnJvbSAndGFpbHdpbmRjc3MvcmVzb2x2ZUNvbmZpZydcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9saWIvd2l0aERhdGEnXG5pbXBvcnQgdGFpbHdpbmRDb25maWcgZnJvbSAnLi4vdGFpbHdpbmQuY29uZmlnLmpzJyAvL2VzbGludC1kaXNhYmxlLWxpbmVcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LmNzcycgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG5cbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZSdcbmltcG9ydCBNZXRhIGZyb20gJy4uL2NvbXBvbmVudHMvTWV0YSdcblxuY29uc3QgeyB0aGVtZSB9ID0gcmVzb2x2ZUNvbmZpZyh0YWlsd2luZENvbmZpZylcblxuY2xhc3MgQnJlYXRoaW5nU3BhY2UgZXh0ZW5kcyBBcHAge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xuICAgIGxldCBwYWdlUHJvcHMgPSB7fVxuICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgICB9XG5cbiAgICBwYWdlUHJvcHMucXVlcnkgPSBjdHgucXVlcnlcbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBhcG9sbG8sIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG99PlxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxNZXRhIC8+XG4gICAgICAgICAgPFBhZ2U+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9QYWdlPlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YShCcmVhdGhpbmdTcGFjZSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n',
        )

        /***/
      },

    /***/ './styles/index.css':
      /*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          '//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9pbmRleC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/index.css\n',
        )

        /***/
      },

    /***/ './tailwind.config.js':
      /*!****************************!*\
  !*** ./tailwind.config.js ***!
  \****************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          "const screens = {\n  sm: '640px',\n  md: '768px',\n  lg: '1024px',\n  xl: '1280px'\n};\nmodule.exports = {\n  purge: ['./components/**/*.js', './pages/**/*.js'],\n  theme: {\n    screens,\n    media: {\n      sm: `(min-width: ${screens.sm})`,\n      md: `(min-width: ${screens.md})`,\n      lg: `(min-width: ${screens.lg})`,\n      xl: `(min-width: ${screens.xl})`\n    },\n    extend: {\n      spacing: {\n        '1d5': '0.375rem',\n        // 6px\n        '2d5': '0.625rem',\n        // 10px\n        '3d5': '0.875rem',\n        // 14px\n        '4': '1rem',\n        // 16px\n        '4d5': '1.125rem',\n        // 18px\n        '5': '1.25rem',\n        // 20px\n        '5d5': '1.375rem',\n        // 22px\n        '6': '1.5rem',\n        // 24px\n        '9': '2.25rem',\n        // 36px\n        '9d5': '2.375rem',\n        // 38px\n        '10': '2.5rem',\n        // 40px\n        '10d5': '2.625rem',\n        // 42px\n        '11': '2.75rem',\n        // 44px\n        '11d5': '2.875rem',\n        // 46px\n        '12': '3.75rem',\n        // 60px\n        '17': '4.25rem',\n        // 68px\n        '18': '4.5rem',\n        // 72px\n        '20': '5rem',\n        // 80px\n        '27': '6.75rem',\n        // 108px\n        '30': '7.5rem',\n        // 120px\n        '40': '10rem',\n        // 160px\n        '43': '10.75rem',\n        // 172px\n        '65': '16.25rem' // 260px\n\n      },\n      width: {\n        '49/100': '49%'\n      },\n      borderRadius: {\n        '11': '2.75rem' // 44px\n\n      }\n    },\n    fontSize: {\n      sm: '0.875rem',\n      // 14px\n      base: '1rem',\n      // 16px\n      lg: '1.25rem',\n      // 20px\n      xl: '1.5rem',\n      // 24px\n      xxl: '1.875rem',\n      // 30px\n      header: '2.75rem' // 44px\n\n    },\n    lineHeight: {\n      xs: '90%',\n      sm: '94%',\n      base: '110%',\n      lg: '120%'\n    },\n    colors: {\n      // full tint colours\n      darkpurple: '#7C64B2',\n      teal: '#2B8393',\n      softred: '#F57479',\n      // pastel colours\n      lightviolet: '#DAD1EE',\n      lightteal: '#C7ECEF',\n      coral: '#FCD6D7',\n      // tones\n      black: '#453E53',\n      gray: '#9A96AB',\n      lightgray: '#E0E0EB',\n      lightestgray: '#FAFAFA',\n      white: '#FFFFFF',\n      // gradients\n      tealcoral: 'radial-gradient(115.8% 115.5% at 120.99% -26.5%, rgba(79, 202, 209, 0.5) 0%, rgba(252, 214, 215, 0.5) 100%)',\n      teallilac: 'radial-gradient(145.19% 158% at 100% 100%, rgba(206, 219, 255, 0.5) 8.85%, rgba(225, 173, 255, 0.5) 100%)',\n      graylilac: 'radial-gradient(89.16% 86.13% at 75.86% 17.87%, rgba(235, 235, 235, 0.5) 0%, rgba(225, 173, 255, 0.5) 100%)',\n      palebluecornflower: 'radial-gradient(122.94% 120.33% at 80.37% 73.33%, rgba(252, 214, 215, 0.5) 0%, rgba(210, 133, 255, 0.5) 100%)',\n      lightteallightviolet: 'radial-gradient(144.42% 132.5% at -59.01% -59.5%, rgba(79, 202, 209, 0.75) 0%, rgba(218, 209, 238, 0.75) 100%)',\n      cornflowerlightviolet: 'radial-gradient(93.59% 91.2% at 93.59% 91.2%, rgba(127, 162, 255, 0.5) 1.64%, rgba(218, 209, 238, 0.5) 100%)',\n      grayteal: 'radial-gradient(146.37% 136.96% at 90.47% 33.54%, rgba(224, 224, 235, 0.5) 0%, rgba(79, 202, 209, 0.5) 100%)'\n    },\n    fontFamily: {\n      serif: ['Caladea', 'Georgia', 'Cambria', 'Times New Roman', 'Times'],\n      sans: ['Karla', '-apple-system', 'BlinkMacSystemFont', '\"Segoe UI\"', 'Roboto', '\"Helvetica Neue\"', 'Arial', '\"Noto Sans\"', 'sans-serif', '\"Apple Color Emoji\"', '\"Segoe UI Emoji\"', '\"Segoe UI Symbol\"', '\"Noto Color Emoji\"'],\n      title: ['Porpara', 'Karla', '-apple-system', 'BlinkMacSystemFont', '\"Segoe UI\"', 'Roboto', '\"Helvetica Neue\"', 'Arial', '\"Noto Sans\"', 'sans-serif', '\"Apple Color Emoji\"', '\"Segoe UI Emoji\"', '\"Segoe UI Symbol\"', '\"Noto Color Emoji\"']\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90YWlsd2luZC5jb25maWcuanM/ZDI2YyJdLCJuYW1lcyI6WyJzY3JlZW5zIiwic20iLCJtZCIsImxnIiwieGwiLCJtb2R1bGUiLCJleHBvcnRzIiwicHVyZ2UiLCJ0aGVtZSIsIm1lZGlhIiwiZXh0ZW5kIiwic3BhY2luZyIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJiYXNlIiwieHhsIiwiaGVhZGVyIiwibGluZUhlaWdodCIsInhzIiwiY29sb3JzIiwiZGFya3B1cnBsZSIsInRlYWwiLCJzb2Z0cmVkIiwibGlnaHR2aW9sZXQiLCJsaWdodHRlYWwiLCJjb3JhbCIsImJsYWNrIiwiZ3JheSIsImxpZ2h0Z3JheSIsImxpZ2h0ZXN0Z3JheSIsIndoaXRlIiwidGVhbGNvcmFsIiwidGVhbGxpbGFjIiwiZ3JheWxpbGFjIiwicGFsZWJsdWVjb3JuZmxvd2VyIiwibGlnaHR0ZWFsbGlnaHR2aW9sZXQiLCJjb3JuZmxvd2VybGlnaHR2aW9sZXQiLCJncmF5dGVhbCIsImZvbnRGYW1pbHkiLCJzZXJpZiIsInNhbnMiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsT0FBTyxHQUFHO0FBQ2RDLElBQUUsRUFBRSxPQURVO0FBRWRDLElBQUUsRUFBRSxPQUZVO0FBR2RDLElBQUUsRUFBRSxRQUhVO0FBSWRDLElBQUUsRUFBRTtBQUpVLENBQWhCO0FBT0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmQyxPQUFLLEVBQUUsQ0FBQyxzQkFBRCxFQUF5QixpQkFBekIsQ0FEUTtBQUVmQyxPQUFLLEVBQUU7QUFDTFIsV0FESztBQUVMUyxTQUFLLEVBQUU7QUFDTFIsUUFBRSxFQUFHLGVBQWNELE9BQU8sQ0FBQ0MsRUFBRyxHQUR6QjtBQUVMQyxRQUFFLEVBQUcsZUFBY0YsT0FBTyxDQUFDRSxFQUFHLEdBRnpCO0FBR0xDLFFBQUUsRUFBRyxlQUFjSCxPQUFPLENBQUNHLEVBQUcsR0FIekI7QUFJTEMsUUFBRSxFQUFH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WUwsa0JBWkssRUFhTCxtQkFiSyxFQWNMLG9CQWRLO0FBakJHO0FBdEZQO0FBRlEsQ0FBakIiLCJmaWxlIjoiLi90YWlsd2luZC5jb25maWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzY3JlZW5zID0ge1xuICBzbTogJzY0MHB4JyxcbiAgbWQ6ICc3NjhweCcsXG4gIGxnOiAnMTAyNHB4JyxcbiAgeGw6ICcxMjgwcHgnLFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHVyZ2U6IFsnLi9jb21wb25lbnRzLyoqLyouanMnLCAnLi9wYWdlcy8qKi8qLmpzJ10sXG4gIHRoZW1lOiB7XG4gICAgc2NyZWVucyxcbiAgICBtZWRpYToge1xuICAgICAgc206IGAobWluLXdpZHRoOiAke3NjcmVlbnMuc219KWAsXG4gICAgICBtZDogYChtaW4td2lkdGg6ICR7c2NyZWVucy5tZH0pYCxcbiAgICAgIGxnOiBgKG1pbi13aWR0aDogJHtzY3JlZW5zLmxnfSlgLFxuICAgICAgeGw6IGAobWluLXdpZHRoOiAke3NjcmVlbnMueGx9KWAsXG4gICAgfSxcbiAgICBleHRlbmQ6IHtcbiAgICAgIHNwYWNpbmc6IHtcbiAgICAgICAgJzFkNSc6ICcwLjM3NXJlbScsIC8vIDZweFxuICAgICAgICAnMmQ1JzogJzAuNjI1cmVtJywgLy8gMTBweFxuICAgICAgICAnM2Q1JzogJzAuODc1cmVtJywgLy8gMTRweFxuICAgICAgICAnNCc6ICcxcmVtJywgLy8gMTZweFxuICAgICAgICAnNGQ1JzogJzEuMTI1cmVtJywgLy8gMThweFxuICAgICAgICAnNSc6ICcxLjI1cmVtJywgLy8gMjBweFxuICAgICAgICAnNWQ1JzogJzEuMzc1cmVtJywgLy8gMjJweFxuICAgICAgICAnNic6ICcxLjVyZW0nLCAvLyAyNHB4XG4gICAgICAgICc5JzogJzIuMjVyZW0nLCAvLyAzNnB4XG4gICAgICAgICc5ZDUnOiAnMi4zNzVyZW0nLCAvLyAzOHB4XG4gICAgICAgICcxMCc6ICcyLjVyZW0nLCAvLyA0MHB4XG4gICAgICAgICcxMGQ1JzogJzIuNjI1cmVtJywgLy8gNDJweFxuICAgICAgICAnMTEnOiAnMi43NXJlbScsIC8vIDQ0cHhcbiAgICAgICAgJzExZDUnOiAnMi44NzVyZW0nLCAvLyA0NnB4XG4gICAgICAgICcxMic6ICczLjc1cmVtJywgLy8gNjBweFxuICAgICAgICAnMTcnOiAnNC4yNXJlbScsIC8vIDY4cHhcbiAgICAgICAgJzE4JzogJzQuNXJlbScsIC8vIDcycHhcbiAgICAgICAgJzIwJzogJzVyZW0nLCAvLyA4MHB4XG4gICAgICAgICcyNyc6ICc2Ljc1cmVtJywgLy8gMTA4cHhcbiAgICAgICAgJzMwJzogJzcuNXJlbScsIC8vIDEyMHB4XG4gICAgICAgICc0MCc6ICcxMHJlbScsIC8vIDE2MHB4XG4gICAgICAgICc0Myc6ICcxMC43NXJlbScsIC8vIDE3MnB4XG4gICAgICAgICc2NSc6ICcxNi4yNXJlbScsIC8vIDI2MHB4XG4gICAgICB9LFxuICAgICAgd2lkdGg6IHtcbiAgICAgICAgJzQ5LzEwMCc6ICc0OSUnLFxuICAgICAgfSxcbiAgICAgIGJvcmRlclJhZGl1czoge1xuICAgICAgICAnMTEnOiAnMi43NXJlbScsIC8vIDQ0cHhcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmb250U2l6ZToge1xuICAgICAgc206ICcwLjg3NXJlbScsIC8vIDE0cHhcbiAgICAgIGJhc2U6ICcxcmVtJywgLy8gMTZweFxuICAgICAgbGc6ICcxLjI1cmVtJywgLy8gMjBweFxuICAgICAgeGw6ICcxLjVyZW0nLCAvLyAyNHB4XG4gICAgICB4eGw6ICcxLjg3NXJlbScsIC8vIDMwcHhcbiAgICAgIGhlYWRlcjogJzIuNzVyZW0nLCAvLyA0NHB4XG4gICAgfSxcbiAgICBsaW5lSGVpZ2h0OiB7XG4gICAgICB4czogJzkwJScsXG4gICAgICBzbTogJzk0JScsXG4gICAgICBiYXNlOiAnMTEwJScsXG4gICAgICBsZzogJzEyMCUnLFxuICAgIH0sXG4gICAgY29sb3JzOiB7XG4gICAgICAvLyBmdWxsIHRpbnQgY29sb3Vyc1xuICAgICAgZGFya3B1cnBsZTogJyM3QzY0QjInLFxuICAgICAgdGVhbDogJyMyQjgzOTMnLFxuICAgICAgc29mdHJlZDogJyNGNTc0NzknLFxuICAgICAgLy8gcGFzdGVsIGNvbG91cnNcbiAgICAgIGxpZ2h0dmlvbGV0OiAnI0RBRDFFRScsXG4gICAgICBsaWdodHRlYWw6ICcjQzdFQ0VGJyxcbiAgICAgIGNvcmFsOiAnI0ZDRDZENycsXG4gICAgICAvLyB0b25lc1xuICAgICAgYmxhY2s6ICcjNDUzRTUzJyxcbiAgICAgIGdyYXk6ICcjOUE5NkFCJyxcbiAgICAgIGxpZ2h0Z3JheTogJyNFMEUwRUInLFxuICAgICAgbGlnaHRlc3RncmF5OiAnI0ZBRkFGQScsXG4gICAgICB3aGl0ZTogJyNGRkZGRkYnLFxuICAgICAgLy8gZ3JhZGllbnRzXG4gICAgICB0ZWFsY29yYWw6XG4gICAgICAgICdyYWRpYWwtZ3JhZGllbnQoMTE1LjglIDExNS41JSBhdCAxMjAuOTklIC0yNi41JSwgcmdiYSg3OSwgMjAyLCAyMDksIDAuNSkgMCUsIHJnYmEoMjUyLCAyMTQsIDIxNSwgMC41KSAxMDAlKScsXG4gICAgICB0ZWFsbGlsYWM6XG4gICAgICAgICdyYWRpYWwtZ3JhZGllbnQoMTQ1LjE5JSAxNTglIGF0IDEwMCUgMTAwJSwgcmdiYSgyMDYsIDIxOSwgMjU1LCAwLjUpIDguODUlLCByZ2JhKDIyNSwgMTczLCAyNTUsIDAuNSkgMTAwJSknLFxuICAgICAgZ3JheWxpbGFjOlxuICAgICAgICAncmFkaWFsLWdyYWRpZW50KDg5LjE2JSA4Ni4xMyUgYXQgNzUuODYlIDE3Ljg3JSwgcmdiYSgyMzUsIDIzNSwgMjM1LCAwLjUpIDAlLCByZ2JhKDIyNSwgMTczLCAyNTUsIDAuNSkgMTAwJSknLFxuICAgICAgcGFsZWJsdWVjb3JuZmxvd2VyOlxuICAgICAgICAncmFkaWFsLWdyYWRpZW50KDEyMi45NCUgMTIwLjMzJSBhdCA4MC4zNyUgNzMuMzMlLCByZ2JhKDI1MiwgMjE0LCAyMTUsIDAuNSkgMCUsIHJnYmEoMjEwLCAxMzMsIDI1NSwgMC41KSAxMDAlKScsXG4gICAgICBsaWdodHRlYWxsaWdodHZpb2xldDpcbiAgICAgICAgJ3JhZGlhbC1ncmFkaWVudCgxNDQuNDIlIDEzMi41JSBhdCAtNTkuMDElIC01OS41JSwgcmdiYSg3OSwgMjAyLCAyMDksIDAuNzUpIDAlLCByZ2JhKDIxOCwgMjA5LCAyMzgsIDAuNzUpIDEwMCUpJyxcbiAgICAgIGNvcm5mbG93ZXJsaWdodHZpb2xldDpcbiAgICAgICAgJ3JhZGlhbC1ncmFkaWVudCg5My41OSUgOTEuMiUgYXQgOTMuNTklIDkxLjIlLCByZ2JhKDEyNywgMTYyLCAyNTUsIDAuNSkgMS42NCUsIHJnYmEoMjE4LCAyMDksIDIzOCwgMC41KSAxMDAlKScsXG4gICAgICBncmF5dGVhbDpcbiAgICAgICAgJ3JhZGlhbC1ncmFkaWVudCgxNDYuMzclIDEzNi45NiUgYXQgOTAuNDclIDMzLjU0JSwgcmdiYSgyMjQsIDIyNCwgMjM1LCAwLjUpIDAlLCByZ2JhKDc5LCAyMDIsIDIwOSwgMC41KSAxMDAlKScsXG4gICAgfSxcbiAgICBmb250RmFtaWx5OiB7XG4gICAgICBzZXJpZjogWydDYWxhZGVhJywgJ0dlb3JnaWEnLCAnQ2FtYnJpYScsICdUaW1lcyBOZXcgUm9tYW4nLCAnVGltZXMnXSxcbiAgICAgIHNhbnM6IFtcbiAgICAgICAgJ0thcmxhJyxcbiAgICAgICAgJy1hcHBsZS1zeXN0ZW0nLFxuICAgICAgICAnQmxpbmtNYWNTeXN0ZW1Gb250JyxcbiAgICAgICAgJ1wiU2Vnb2UgVUlcIicsXG4gICAgICAgICdSb2JvdG8nLFxuICAgICAgICAnXCJIZWx2ZXRpY2EgTmV1ZVwiJyxcbiAgICAgICAgJ0FyaWFsJyxcbiAgICAgICAgJ1wiTm90byBTYW5zXCInLFxuICAgICAgICAnc2Fucy1zZXJpZicsXG4gICAgICAgICdcIkFwcGxlIENvbG9yIEVtb2ppXCInLFxuICAgICAgICAnXCJTZWdvZSBVSSBFbW9qaVwiJyxcbiAgICAgICAgJ1wiU2Vnb2UgVUkgU3ltYm9sXCInLFxuICAgICAgICAnXCJOb3RvIENvbG9yIEVtb2ppXCInLFxuICAgICAgXSxcbiAgICAgIHRpdGxlOiBbXG4gICAgICAgICdQb3JwYXJhJyxcbiAgICAgICAgJ0thcmxhJyxcbiAgICAgICAgJy1hcHBsZS1zeXN0ZW0nLFxuICAgICAgICAnQmxpbmtNYWNTeXN0ZW1Gb250JyxcbiAgICAgICAgJ1wiU2Vnb2UgVUlcIicsXG4gICAgICAgICdSb2JvdG8nLFxuICAgICAgICAnXCJIZWx2ZXRpY2EgTmV1ZVwiJyxcbiAgICAgICAgJ0FyaWFsJyxcbiAgICAgICAgJ1wiTm90byBTYW5zXCInLFxuICAgICAgICAnc2Fucy1zZXJpZicsXG4gICAgICAgICdcIkFwcGxlIENvbG9yIEVtb2ppXCInLFxuICAgICAgICAnXCJTZWdvZSBVSSBFbW9qaVwiJyxcbiAgICAgICAgJ1wiU2Vnb2UgVUkgU3ltYm9sXCInLFxuICAgICAgICAnXCJOb3RvIENvbG9yIEVtb2ppXCInLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./tailwind.config.js\n",
        )

        /***/
      },

    /***/ 0:
      /*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! private-next-pages/_app.js */ './pages/_app.js',
        )

        /***/
      },

    /***/ 'apollo-boost':
      /*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("apollo-boost");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tYm9vc3RcIj8wNTlmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImFwb2xsby1ib29zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1ib29zdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-boost\n',
        )

        /***/
      },

    /***/ 'next-with-apollo':
      /*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("next-with-apollo");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXdpdGgtYXBvbGxvXCI/YmE1YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LXdpdGgtYXBvbGxvLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC13aXRoLWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-with-apollo\n',
        )

        /***/
      },

    /***/ 'next/head':
      /*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("next/head");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n',
        )

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n',
        )

        /***/
      },

    /***/ 'react-apollo':
      /*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-apollo");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIj8yMGU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWFwb2xsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-apollo\n',
        )

        /***/
      },

    /***/ 'styled-components':
      /*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("styled-components");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n',
        )

        /***/
      },

    /***/ 'tailwindcss/resolveConfig':
      /*!********************************************!*\
  !*** external "tailwindcss/resolveConfig" ***!
  \********************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("tailwindcss/resolveConfig");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0YWlsd2luZGNzcy9yZXNvbHZlQ29uZmlnXCI/YjVkOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ0YWlsd2luZGNzcy9yZXNvbHZlQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGFpbHdpbmRjc3MvcmVzb2x2ZUNvbmZpZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///tailwindcss/resolveConfig\n',
        )

        /***/
      },

    /******/
  },
)
