/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Font/roboto-regular-webfont.woff2 */ \"./src/Font/roboto-regular-webfont.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Font/roboto-regular-webfont.woff */ \"./src/Font/roboto-regular-webfont.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: 'robotoregular';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),\n         url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n    font-family: 'robotoregular', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n#content {\n    width: 90vw;\n    margin: auto;\n}\n\n#new-task-form-container,\n#new-project-form-container {\n    position: fixed;\n    display: none;\n    z-index: 1;\n    width: 100%;\n    margin: auto;\n}\n\n#new-project-form,\n#new-task-form {\n    display: flex;\n    flex-direction: column;\n    width: 400px;\n    padding: 25px;\n    gap: 10px;\n    background-color: whitesmoke;\n    border: 5px solid slategray;\n    border-radius: 8px;\n    margin: auto;\n}\n\n.top-row {\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 20px;\n}\n\n#task-description {\n    width: 200px;\n}\n\n.close-form {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    border: 2px solid black;\n    border-radius: 3px;\n    width: 1.5rem;\n    transition: .12s;\n}\n\n.close-form:hover {\n    cursor: pointer;\n    transform: scale(1.5);\n}\n\n.form-row {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 10px;\n}\n\n#submit-task {\n    margin: auto;\n}\n\n#main-display {\n    display: grid;\n    grid-template-rows: repeat(auto-fill, 1fr);\n    width: 100%;\n    gap: 10px;\n}\n\n.task-headers-row,\n.project-block-title {\n    font-size: 24px;\n    font-weight: bold;\n    background-color: lightgray;\n}\n\n.task-node,\n.task-headers-row {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    width: 100%;\n}\n\n.task-node,\n.task-headers-row,\n.project-block-title,\n.project-task-node {\n    padding: 5px 10px;\n    box-shadow: 4px 3px 3px gray;\n}\n\n.task-node,\n.project-task-node {\n    font-size: 18px;\n}\n\n.name-and-description {\n    display: flex;\n    flex-direction: column;\n    white-space: nowrap;\n}\n\n.task-node-description {\n    font-size: 12px;\n}\n\n.delete-task-button,\n.change-status-button {\n    font-weight: bold;\n}\n\n.project-block {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 10px;\n}\n\n.project-task-node {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    align-items: center;\n    width: 100%;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://top-todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/data-manager.js":
/*!*****************************!*\
  !*** ./src/data-manager.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dataManager: () => (/* binding */ dataManager)\n/* harmony export */ });\n/* harmony import */ var _task_handler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-handler.js */ \"./src/task-handler.js\");\n/* harmony import */ var _project_handler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-handler.js */ \"./src/project-handler.js\");\n/* harmony import */ var _dom_handler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-handler.js */ \"./src/dom-handler.js\");\n\n\n\n\nconst dataManager = (function () {\n    const allTasks = _task_handler_js__WEBPACK_IMPORTED_MODULE_0__.taskManager.masterTaskList;\n    const allProjects = _project_handler_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.masterProjectList;\n\n    function submitProjectForm(event) {\n        event.preventDefault();\n        const projectName = document.querySelector(\"#project-name\").value;\n        if (projectName !== \"\") {\n            const newProject = _project_handler_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.createNewProject(projectName);\n            allProjects.push(newProject);\n            _project_handler_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.makeProjectId();\n            _task_handler_js__WEBPACK_IMPORTED_MODULE_0__.taskManager.sortTasks();\n            _dom_handler_js__WEBPACK_IMPORTED_MODULE_2__.domManager.loadProjectOptions();\n            _dom_handler_js__WEBPACK_IMPORTED_MODULE_2__.domManager.resetProjectForm();\n            console.log(allTasks, allProjects);\n        } else {\n            alert(\"Please fill out all fields.\");\n            return;\n        }\n    }\n\n    function submitTaskForm(event) {\n        event.preventDefault();\n        const taskName = document.querySelector(\"#task-name\").value;\n        const description = document.querySelector(\"#task-description\").value;\n        const priority = document.querySelector(\"#task-priority\").value;\n        const dueDate = document.querySelector(\"#task-due-date\").value;\n        const project = document.querySelector(\"#task-project-select\").value;\n        if (taskName !== \"\" && priority !== \"\" && dueDate !== \"\" && project !== \"\") {\n            const newTask = _task_handler_js__WEBPACK_IMPORTED_MODULE_0__.taskManager.createNewTask(taskName, description, priority, dueDate, project);\n            allTasks.push(newTask);\n            _task_handler_js__WEBPACK_IMPORTED_MODULE_0__.taskManager.makeTaskId();\n            _task_handler_js__WEBPACK_IMPORTED_MODULE_0__.taskManager.sortTasks();\n            _dom_handler_js__WEBPACK_IMPORTED_MODULE_2__.domManager.resetTaskForm();\n            _dom_handler_js__WEBPACK_IMPORTED_MODULE_2__.domManager.renderTasks();\n            console.log(allTasks, allProjects);\n        } else {\n            alert(\"Please fill out all fields.\");\n            return;\n        }\n    }\n\n    const submitProjectButton = document.querySelector(\"#submit-project\");\n    submitProjectButton.addEventListener(\"click\", submitProjectForm);\n\n    const submitTaskButton = document.querySelector(\"#submit-task\");\n    submitTaskButton.addEventListener(\"click\", submitTaskForm);    \n\n    return { submitProjectForm, submitTaskForm };\n})(); \n\n//# sourceURL=webpack://top-todo-list/./src/data-manager.js?");

/***/ }),

/***/ "./src/dom-handler.js":
/*!****************************!*\
  !*** ./src/dom-handler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domManager: () => (/* binding */ domManager)\n/* harmony export */ });\n/* harmony import */ var _task_handler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-handler.js */ \"./src/task-handler.js\");\n/* harmony import */ var _project_handler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-handler.js */ \"./src/project-handler.js\");\n\n\n\nconst domManager = (function () {\n    const mainContainer = document.querySelector(\"#content\");\n    const mainDisplay = document.querySelector(\"#main-display\");\n\n    const allTasks = _task_handler_js__WEBPACK_IMPORTED_MODULE_0__.taskManager.masterTaskList;\n    const allProjects = _project_handler_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.masterProjectList;\n\n    const newProjectForm = document.querySelector(\"#new-project-form-container\");\n    const newProjectButton = document.querySelector(\"#new-project-button\");\n    newProjectButton.addEventListener(\"click\", () => {\n        newProjectForm.style.display = \"block\";\n        newTaskForm.style.display = \"none\";\n    })\n\n    const newTaskForm = document.querySelector(\"#new-task-form-container\");\n    const newTaskButton = document.querySelector(\"#new-task-button\");\n    newTaskButton.addEventListener(\"click\", () => {\n        newTaskForm.style.display = \"block\";\n        newProjectForm.style.display = \"none\";\n    })\n\n    const closeFormButtons = document.querySelectorAll(\".close-form\");\n    closeFormButtons.forEach(closeFormButton => closeFormButton.addEventListener(\"click\", () => {\n        newTaskForm.style.display = \"none\";\n        newProjectForm.style.display = \"none\";\n    }))\n\n    function resetProjectForm() {\n        document.querySelector(\"#new-project-form\").reset();\n        newProjectForm.style.display = \"none\";\n    }\n\n    function resetTaskForm() {\n        document.querySelector(\"#new-task-form\").reset();\n        newTaskForm.style.display = \"none\";\n    }\n\n    function loadProjectOptions() {\n        const projectSelectOptions = document.querySelector(\"#task-project-select\");\n        projectSelectOptions.innerHTML = \"\";\n        for (let i = 0; i < allProjects.length; i++) {\n            const projectOption = document.createElement(\"option\");\n            projectOption.textContent = allProjects[i].projectName;\n            projectOption.value = allProjects[i].projectName;\n            projectSelectOptions.appendChild(projectOption);\n        }\n    }\n\n    function renderTaskHeaders() {\n        const taskHeadersRow = document.createElement(\"div\");\n        taskHeadersRow.innerHTML = \n                            `<div class=\"task-headers-row\">\n                                <div>Task</div>\n                                <div>Due Date</div>\n                                <div>Priority</div>\n                                <div>Project</div>\n                                <div>Status</div>\n                            </div>`;\n\n        mainDisplay.appendChild(taskHeadersRow);\n    }\n\n    function renderTasks() {\n        mainDisplay.innerHTML = \"\";\n        renderTaskHeaders();\n        for (let i = 0; i < allTasks.length; i++) {\n            const taskNode = document.createElement(\"div\");\n\n            taskNode.innerHTML =\n                            `<div class=\"task-node\" data-task-id=\"${allTasks[i].id}\">\n                                <div class=\"name-and-description\">\n                                    <div>${allTasks[i].taskName}</div>\n                                    <div class=\"task-node-description\">${allTasks[i].description}</div>\n                                </div>\n                                <div>${allTasks[i].dueDate}</div>\n                                <div>${allTasks[i].priority}</div>\n                                <div>${allTasks[i].project}</div>\n                                <div class=\"task-status\">${allTasks[i].completed}</div>\n                                <div class=\"task-action-buttons\">\n                                    <button class=\"change-status-button\">Change status</button>\n                                    <button class=\"delete-task-button\">Delete task</button>\n                                </div>\n                            </div>`\n            mainDisplay.appendChild(taskNode);\n\n            if (allTasks[i].priority === \"High\") {\n                taskNode.style.backgroundColor = \"red\";\n            } else if (allTasks[i].priority === \"Medium\") {\n                taskNode.style.backgroundColor = \"yellow\";\n            } else if (allTasks[i].priority === \"Low\") {\n                taskNode.style.backgroundColor = \"green\";\n            }\n        }\n\n        const changeStatusButtons = document.querySelectorAll(\".change-status-button\");\n        changeStatusButtons.forEach((changeStatusButton) => {\n            changeStatusButton.addEventListener(\"click\", (event) => {\n                const taskId = event.target.closest(\".task-node\").getAttribute(\"data-task-id\");\n                changeTaskStatus(taskId);\n            });\n        });\n        const deleteTaskButtons = document.querySelectorAll(\".delete-task-button\");\n        deleteTaskButtons.forEach((deleteTaskButton, i) => {\n            deleteTaskButton.addEventListener(\"click\", () => deleteTask(i));\n        });\n    }\n\n    function renderProjects() {\n        mainDisplay.innerHTML = \"\";\n        for (let i = 0; i < allProjects.length; i++) {\n            const projectBlock = document.createElement(\"div\");\n            const projectTitle = document.createElement(\"div\");\n            projectBlock.classList.add(\"project-block\");\n            projectTitle.innerHTML = \n                                `<div class=\"project-block-title\">\n                                    <div>${allProjects[i].projectName}</div>\n                                </div>`\n            projectBlock.appendChild(projectTitle);\n\n            for (let j = 0; j < allProjects[i].projectTasks.length; j++) {\n                const taskNode = document.createElement(\"div\");\n\n                taskNode.innerHTML =\n                                `<div class=\"project-task-node\">\n                                    <div>${allProjects[i].projectTasks[j].taskName}</div>\n                                    <div><b>Due:</b> ${allProjects[i].projectTasks[j].dueDate}</div>\n                                    <div><b>Priority:</b> ${allProjects[i].projectTasks[j].priority}</div>\n                                </div>`;\n                projectBlock.appendChild(taskNode);\n\n                if (allProjects[i].projectTasks[j].priority === \"High\") {\n                    taskNode.style.backgroundColor = \"red\";\n                } else if (allProjects[i].projectTasks[j].priority === \"Medium\") {\n                    taskNode.style.backgroundColor = \"yellow\";\n                } else if (allProjects[i].projectTasks[j].priority === \"Low\") {\n                    taskNode.style.backgroundColor = \"green\";\n                }\n            }\n            mainDisplay.appendChild(projectBlock);\n        }\n    }\n\n    function changeTaskStatus(taskId) {\n        const taskStatus = document.querySelector(`[data-task-id=\"${taskId}\"] .task-status`);\n        if (allTasks[taskId].completed === false) {\n            allTasks[taskId].completed = true;\n            taskStatus.textContent = \"Completed\";\n        } else {\n            allTasks[taskId].completed = false;\n            taskStatus.textContent = \"In progress\";\n        }\n        console.log(allTasks);\n        return allTasks;\n    }\n    \n    function deleteTask(taskId) {\n        allTasks.splice(taskId, 1);\n        _task_handler_js__WEBPACK_IMPORTED_MODULE_0__.taskManager.makeTaskId();\n        _task_handler_js__WEBPACK_IMPORTED_MODULE_0__.taskManager.sortTasks();\n        renderTasks();\n        console.log(allTasks);\n    }\n\n    const showAllProjectsButton = document.querySelector(\"#display-projects-button\");\n    showAllProjectsButton.addEventListener(\"click\", renderProjects);\n\n    const showAllTasksButton = document.querySelector(\"#display-tasks-button\");\n    showAllTasksButton.addEventListener(\"click\", renderTasks);\n\n    return { resetProjectForm, resetTaskForm, loadProjectOptions, renderTasks, renderProjects };\n})();\n\n\n//# sourceURL=webpack://top-todo-list/./src/dom-handler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _task_handler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-handler.js */ \"./src/task-handler.js\");\n/* harmony import */ var _project_handler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-handler.js */ \"./src/project-handler.js\");\n/* harmony import */ var _data_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-manager.js */ \"./src/data-manager.js\");\n/* harmony import */ var _dom_handler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-handler.js */ \"./src/dom-handler.js\");\n\n\n\n\n\n\nconst allTasks = _task_handler_js__WEBPACK_IMPORTED_MODULE_1__.taskManager.masterTaskList;\nconst allProjects = _project_handler_js__WEBPACK_IMPORTED_MODULE_2__.projectManager.masterProjectList;\n\n_task_handler_js__WEBPACK_IMPORTED_MODULE_1__.taskManager.makeTaskId();\n_task_handler_js__WEBPACK_IMPORTED_MODULE_1__.taskManager.sortTasks();\n_dom_handler_js__WEBPACK_IMPORTED_MODULE_4__.domManager.loadProjectOptions();\n_dom_handler_js__WEBPACK_IMPORTED_MODULE_4__.domManager.renderTasks();\n\nconsole.log(allTasks, allProjects);\n\n\n//# sourceURL=webpack://top-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project-handler.js":
/*!********************************!*\
  !*** ./src/project-handler.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectManager: () => (/* binding */ projectManager)\n/* harmony export */ });\nconst projectManager = (function () {\n    \n    const masterProjectList = [\n        {\n            projectName: \"Default Project\",\n            projectTasks: [],\n        },\n        {\n            projectName: \"Kenny Winker's Tasks\",\n            projectTasks: [],\n        }\n    ];\n    \n    function createNewProject(projectName, projectTasks = []) {\n        return {\n            projectName,\n            projectTasks,\n        }\n    }\n\n    function makeProjectId() {\n        if (masterProjectList.length > 0) {\n            for (let i = 0; i < masterProjectList.length; i++) {\n                masterProjectList[i].id = i;\n            }\n        }\n        return;\n    }\n\n    return { masterProjectList, createNewProject, makeProjectId }\n})();\n\n//# sourceURL=webpack://top-todo-list/./src/project-handler.js?");

/***/ }),

/***/ "./src/task-handler.js":
/*!*****************************!*\
  !*** ./src/task-handler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskManager: () => (/* binding */ taskManager)\n/* harmony export */ });\n/* harmony import */ var _project_handler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-handler.js */ \"./src/project-handler.js\");\n\n\nconst taskManager = (function () {\n    const allProjects = _project_handler_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.masterProjectList; \n    \n    const masterTaskList = [\n        {\n            taskName: \"Go potty\",\n            description: \"Do I really need to describe what I need to do here?\",\n            priority: \"High\",\n            dueDate: \"9/10/2023\",\n            project: \"Default Project\",\n            completed: false,\n        },\n        {\n            taskName: \"Something else\",\n            description: \"\",\n            priority: \"Medium\",\n            dueDate: \"12/31/2023\",\n            project: \"Default Project\",\n            completed: false,\n        },\n        {\n            taskName: \"Digest Stallone cuts\",\n            description: \"Pray this wretched bolus passes with ease.\",\n            priority: \"Low\",\n            dueDate: \"Whenever\",\n            project: \"Kenny Winker's Tasks\",\n            completed: false,\n        }\n    ];\n\n    function createNewTask(taskName, description, priority, dueDate, project, completed = false) {\n        return {\n            taskName,\n            description,\n            priority,\n            dueDate,\n            project,\n            completed\n        }\n    }\n\n    function makeTaskId() {\n        if (masterTaskList.length > 0) {\n            for (let i = 0; i < masterTaskList.length; i++) {\n                masterTaskList[i].id = i;\n            }\n        }\n        return;\n    }\n\n    function sortTasks() {\n        for (let i = 0; i < allProjects.length; i++) {\n            allProjects[i].projectTasks = [];\n            for (let j = 0; j < masterTaskList.length; j++) {\n                if (masterTaskList[j].project === allProjects[i].projectName) {\n                    allProjects[i].projectTasks.push(masterTaskList[j]);\n                } else {\n                    continue;\n                }\n            }\n        }\n        return;\n    }\n\n    return { masterTaskList, createNewTask, makeTaskId, sortTasks }\n})();\n\n\n//# sourceURL=webpack://top-todo-list/./src/task-handler.js?");

/***/ }),

/***/ "./src/Font/roboto-regular-webfont.woff":
/*!**********************************************!*\
  !*** ./src/Font/roboto-regular-webfont.woff ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"99cbdc84cf886cb6d8e2.woff\";\n\n//# sourceURL=webpack://top-todo-list/./src/Font/roboto-regular-webfont.woff?");

/***/ }),

/***/ "./src/Font/roboto-regular-webfont.woff2":
/*!***********************************************!*\
  !*** ./src/Font/roboto-regular-webfont.woff2 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d581dd33a2c04cbf70d1.woff2\";\n\n//# sourceURL=webpack://top-todo-list/./src/Font/roboto-regular-webfont.woff2?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;