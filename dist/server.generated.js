module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/app/helpers/auth/auth.js":
/*!*****************************************!*\
  !*** ./server/app/helpers/auth/auth.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-http */ \"passport-http\");\n/* harmony import */ var passport_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_http__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var passport_oauth2_client_password__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport-oauth2-client-password */ \"passport-oauth2-client-password\");\n/* harmony import */ var passport_oauth2_client_password__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport_oauth2_client_password__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var passport_http_bearer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport-http-bearer */ \"passport-http-bearer\");\n/* harmony import */ var passport_http_bearer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport_http_bearer__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/core */ \"./server/config/core.js\");\n/* harmony import */ var _models_client_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/client.model */ \"./server/app/models/client.model.js\");\n/* harmony import */ var _models_accessToken_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/accessToken.model */ \"./server/app/models/accessToken.model.js\");\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/user.model */ \"./server/app/models/user.model.js\");\n\n\n\n\n\n\n\n\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.use(new passport_http__WEBPACK_IMPORTED_MODULE_1__[\"BasicStrategy\"](function (username, password, done) {\n  _models_client_model__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({\n    clientId: username\n  }, function (err, client) {\n    if (err) {\n      return done(err);\n    }\n\n    if (!client) {\n      return done(null, false);\n    }\n\n    if (client.clientSecret != password) {\n      return done(null, false);\n    }\n\n    return done(null, client);\n  });\n}));\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.use(new passport_oauth2_client_password__WEBPACK_IMPORTED_MODULE_2__[\"Strategy\"](function (clientId, clientSecret, done) {\n  _models_client_model__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({\n    clientId: clientId\n  }, function (err, client) {\n    if (err) {\n      return done(err);\n    }\n\n    if (!client) {\n      return done(null, false);\n    }\n\n    if (client.clientSecret !== clientSecret) {\n      return done(null, false);\n    }\n\n    return done(null, client);\n  });\n}));\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.use(new passport_http_bearer__WEBPACK_IMPORTED_MODULE_3__[\"Strategy\"](function (accessToken, done) {\n  _models_accessToken_model__WEBPACK_IMPORTED_MODULE_6__[\"default\"].findOne({\n    token: accessToken\n  }, function (err, token) {\n    if (err) {\n      return done(err);\n    }\n\n    if (!token) {\n      return done(null, false);\n    }\n\n    if (Math.round((Date.now() - token.created) / 1000) > _config_core__WEBPACK_IMPORTED_MODULE_4__[\"tokenLife\"]) {\n      _models_accessToken_model__WEBPACK_IMPORTED_MODULE_6__[\"default\"].remove({\n        token: accessToken\n      }, function (err) {\n        if (err) {\n          return done(err);\n        }\n      });\n      return done(null, false, {\n        message: 'Token expired'\n      });\n    }\n\n    _models_user_model__WEBPACK_IMPORTED_MODULE_7__[\"default\"].findById(token.userId, function (err, user) {\n      if (err) {\n        return done(err);\n      }\n\n      if (!user) {\n        return done(null, false, {\n          message: 'Unknown user'\n        });\n      }\n\n      var info = {\n        scope: '*'\n      };\n      done(null, user, info);\n    });\n  });\n}));\n\n//# sourceURL=webpack:///./server/app/helpers/auth/auth.js?");

/***/ }),

/***/ "./server/app/helpers/auth/oauth2.js":
/*!*******************************************!*\
  !*** ./server/app/helpers/auth/oauth2.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var oauth2orize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! oauth2orize */ \"oauth2orize\");\n/* harmony import */ var oauth2orize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(oauth2orize__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/core */ \"./server/config/core.js\");\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/user.model */ \"./server/app/models/user.model.js\");\n/* harmony import */ var _models_refreshToken_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/refreshToken.model */ \"./server/app/models/refreshToken.model.js\");\n/* harmony import */ var _models_accessToken_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/accessToken.model */ \"./server/app/models/accessToken.model.js\");\n\n\n\n\n\n\n // create OAuth 2.0 server\n\nvar server = oauth2orize__WEBPACK_IMPORTED_MODULE_0___default.a.createServer(); // Generic error handler\n\nvar errFn = function errFn(cb, err) {\n  if (err) {\n    return cb(err);\n  }\n}; // Destroy any old tokens and generates a new access and refresh token\n\n\nvar generateTokens = function generateTokens(data, done) {\n  _models_refreshToken_model__WEBPACK_IMPORTED_MODULE_5__[\"default\"].remove(data, function (err) {\n    if (err) {\n      return done(err);\n    }\n  });\n  _models_accessToken_model__WEBPACK_IMPORTED_MODULE_6__[\"default\"].remove(data, function (err) {\n    if (err) {\n      return done(err);\n    }\n  });\n  tokenValue = crypto__WEBPACK_IMPORTED_MODULE_2___default.a.randomBytes(32).toString('hex');\n  refreshTokenValue = crypto__WEBPACK_IMPORTED_MODULE_2___default.a.randomBytes(32).toString('hex');\n  var tokenValue = crypto__WEBPACK_IMPORTED_MODULE_2___default.a.randomBytes(32).toString('hex');\n  var refreshTokenValue = crypto__WEBPACK_IMPORTED_MODULE_2___default.a.randomBytes(32).toString('hex');\n  data.token = tokenValue;\n  var token = new _models_accessToken_model__WEBPACK_IMPORTED_MODULE_6__[\"default\"](data);\n  data.token = refreshTokenValue;\n  var refreshToken = new _models_accessToken_model__WEBPACK_IMPORTED_MODULE_6__[\"default\"](data);\n  refreshToken.save(function (err) {\n    if (err) {\n      return done(err);\n    }\n  });\n  var info = {\n    scope: '*'\n  };\n  token.save(function (err, token) {\n    if (err) {\n      return done(err);\n    }\n\n    done(null, tokenValue, refreshTokenValue, {\n      'expires_in': _config_core__WEBPACK_IMPORTED_MODULE_3__[\"tokenLife\"]\n    });\n  });\n}; // Exchange email & password for access token\n\n\nserver.exchange(oauth2orize__WEBPACK_IMPORTED_MODULE_0___default.a.exchange.password(function (client, username, password, scope, done) {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n    email: username\n  }, function (err, user) {\n    if (err) {\n      return done(err);\n    }\n\n    if (!user || !user.authenticate(password)) {\n      return done(null, false);\n    }\n\n    var model = {\n      userId: user.userId,\n      clientId: client.clientId\n    };\n    generateTokens(model, done);\n  });\n})); // Exchange refreshToken for access token\n\nserver.exchange(oauth2orize__WEBPACK_IMPORTED_MODULE_0___default.a.exchange.refreshToken(function (client, refreshToken, scope, done) {\n  _models_refreshToken_model__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({\n    token: refreshToken,\n    clientId: client.clientId\n  }, function (err, token) {\n    if (err) {\n      return done(err);\n    }\n\n    if (!token) {\n      return done(null, false);\n    }\n\n    _models_user_model__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findById(token.userId, function (err, user) {\n      if (err) {\n        return done(err);\n      }\n\n      if (!user) {\n        return done(null, false);\n      }\n\n      var model = {\n        userId: user.userId,\n        clientId: client.clientId\n      };\n      generateTokens(model, done);\n    });\n  });\n}));\nvar token = [passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate(['basic', 'oauth2-client-password'], {\n  session: false\n}), server.token(), server.errorHandler()];\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  token: token,\n  generateTokens: generateTokens\n});\n\n//# sourceURL=webpack:///./server/app/helpers/auth/oauth2.js?");

/***/ }),

/***/ "./server/app/helpers/common/commonMethods.js":
/*!****************************************************!*\
  !*** ./server/app/helpers/common/commonMethods.js ***!
  \****************************************************/
/*! exports provided: _substrCount, _sendResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_substrCount\", function() { return _substrCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_sendResponse\", function() { return _sendResponse; });\n/*\n * @Author: Nisal Madusanka(EruliaF) \n * @Date: 2018-12-28 10:20:20 \n * @Last Modified by: Nisal Madusanka(EruliaF)\n * @Last Modified time: 2018-12-29 07:38:57\n */\n\n/**\n * @Author: Nisal Madusanka(EruliaF) \n * @description Get specific character count from a string\n * @param {*} string string\n * @param {*} specificKey  sub string\n */\nvar _substrCount = function _substrCount(string, specificKey) {\n  return string.split(specificKey).length - 1;\n};\n\nvar _sendResponse = function _sendResponse(statusArray, data) {\n  var overWriteStatus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  return {\n    \"status\": overWriteStatus.status ? overWriteStatus.status : statusArray.status,\n    \"statusCode\": overWriteStatus.statusCode ? overWriteStatus.statusCode : statusArray.statusCode,\n    \"result\": data,\n    \"description\": overWriteStatus.description ? overWriteStatus.description : statusArray.description\n  };\n};\n\n\n\n//# sourceURL=webpack:///./server/app/helpers/common/commonMethods.js?");

/***/ }),

/***/ "./server/app/helpers/common/grid-fs.js":
/*!**********************************************!*\
  !*** ./server/app/helpers/common/grid-fs.js ***!
  \**********************************************/
/*! exports provided: putFile, sendFileToResponce, findOne, deleteFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"putFile\", function() { return putFile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendFileToResponce\", function() { return sendFileToResponce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findOne\", function() { return findOne; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteFile\", function() { return deleteFile; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/*\n * @Author: Nisal Madusanka(EruliaF) \n * @Date: 2019-01-11 20:05:00 \n * @Last Modified by: Nisal Madusanka(EruliaF)\n * @Last Modified time: 2019-01-12 10:50:22\n */\n\n\n/**\n * @Author: Nisal Madusanka(EruliaF) \n * @description Add New File To mongo GridFS Store...\n * @param {String} filePath uploaded File parth\n * @param {ObjectId} ObjectId primary key\n * @param {String} fileName File name\n * @param {chunkSizeBytes:null,metadata:null,contentType:null,aliases:null,disableMD5:false} options \n * @param {function} cb callback Function\n */\n\nvar putFile = function putFile(filePath, ObjectId, fileName, options, cb) {\n  var dbObj = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.db;\n  var bucket = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.mongo.GridFSBucket(dbObj);\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.createReadStream(filePath).pipe(bucket.openUploadStreamWithId(ObjectId, fileName, options)).on('error', function (error) {\n    cb(error);\n  }).on('finish', function () {\n    cb(null);\n  });\n};\n\nvar sendFileToResponce = function sendFileToResponce(id, res, cb) {\n  var dbObj = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.db;\n  var bucket = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.mongo.GridFSBucket(dbObj);\n  bucket.openDownloadStream(id).pipe(res).on('error', function (error) {\n    cb(error);\n  });\n};\n\nvar findOne = function findOne(filter, cb) {\n  var dbObj = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.db;\n  dbObj.collection('fs.files').findOne(filter, function (error, result) {\n    if (error) {\n      cb(error);\n    } else {\n      cb(null, result);\n    }\n  });\n};\n\nvar deleteFile = function deleteFile(objectID, cb) {\n  var dbObj = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.db;\n  var bucket = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.mongo.GridFSBucket(dbObj);\n  bucket.delete(objectID, function (error) {\n    if (error) {\n      cb(error);\n    } else {\n      cb(null);\n    }\n  });\n};\n\n\n\n//# sourceURL=webpack:///./server/app/helpers/common/grid-fs.js?");

/***/ }),

/***/ "./server/app/helpers/common/manageUploads.js":
/*!****************************************************!*\
  !*** ./server/app/helpers/common/manageUploads.js ***!
  \****************************************************/
/*! exports provided: uploadImage, initImage, getImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uploadImage\", function() { return uploadImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initImage\", function() { return initImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getImage\", function() { return getImage; });\n/* harmony import */ var _grid_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid-fs */ \"./server/app/helpers/common/grid-fs.js\");\n\n\nvar getImage = function getImage(objectId, cb) {\n  Object(_grid_fs__WEBPACK_IMPORTED_MODULE_0__[\"findOne\"])({\n    _id: objectId\n  }, cb);\n};\n\nvar initImage = function initImage(objectId, cb) {\n  getImage(objectId, function (error, file) {\n    if (!error) {\n      if (file) {\n        Object(_grid_fs__WEBPACK_IMPORTED_MODULE_0__[\"deleteFile\"])(objectId, cb);\n      } else {\n        cb(null);\n      }\n    } else {\n      cb(error);\n    }\n  });\n};\n\nvar uploadImage = function uploadImage(objectId, file, cb) {\n  if (file) {\n    initImage(objectId, function (error) {\n      if (!error) {\n        Object(_grid_fs__WEBPACK_IMPORTED_MODULE_0__[\"putFile\"])(file.path, objectId, file.originalname, {\n          \"contentType\": file.mimetype\n        }, cb);\n      } else {\n        cb(error);\n      }\n    });\n  } else {\n    cb(null);\n  }\n};\n\n\n\n//# sourceURL=webpack:///./server/app/helpers/common/manageUploads.js?");

/***/ }),

/***/ "./server/app/helpers/dbErrorHandler.js":
/*!**********************************************!*\
  !*** ./server/app/helpers/dbErrorHandler.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * Get unique error field name\n */\n\nvar getUniqueErrorMessage = function getUniqueErrorMessage(err) {\n  var output;\n\n  try {\n    var fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n  } catch (ex) {\n    output = 'Unique field already exists';\n  }\n\n  return output;\n};\n/**\n * Get the error message from error object\n */\n\n\nvar getErrorMessage = function getErrorMessage(err) {\n  var message = '';\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n\n      default:\n        message = 'Something went wrong';\n    }\n  } else {\n    for (var errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n\n  return message;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getErrorMessage: getErrorMessage\n});\n\n//# sourceURL=webpack:///./server/app/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/app/helpers/validation/validate.js":
/*!***************************************************!*\
  !*** ./server/app/helpers/validation/validate.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Validate; });\n/* harmony import */ var _config_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/validation */ \"./server/config/validation.js\");\n/* harmony import */ var _validateMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validateMethods */ \"./server/app/helpers/validation/validateMethods.js\");\n/* harmony import */ var _helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/common/commonMethods */ \"./server/app/helpers/common/commonMethods.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nvar Validate =\n/*#__PURE__*/\nfunction () {\n  function Validate() {\n    var rulesList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    var filedsList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var messageList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n    _classCallCheck(this, Validate);\n\n    this.rulesList = rulesList;\n    this.filedsList = filedsList;\n    this.messageList = messageList;\n  }\n\n  _createClass(Validate, [{\n    key: \"validateForm\",\n    value: function validateForm(values) {\n      var errorList = {};\n      errorList['_status'] = false;\n\n      for (var rulesKey in this.rulesList) {\n        if (rulesKey.indexOf('*') > -1) {\n          var subKeyItems = rulesKey.split(\"*\");\n          var subFormKeys = null;\n\n          for (var subItemKey in subKeyItems) {\n            if (subKeyItems.length - 1 == subItemKey) {\n              subFormKeys = this.generateFinalFildsKeys(subFormKeys, subKeyItems[subItemKey]);\n            } else {\n              subFormKeys = this.getSubFiledList(values, subKeyItems[subItemKey], subFormKeys);\n            }\n          }\n\n          for (var formKey in subFormKeys) {\n            var validateResult = this.runValidation(formKey, values, rulesKey);\n\n            if (validateResult) {\n              errorList['_status'] = true;\n              errorList[formKey] = validateResult;\n            }\n          }\n        } else {\n          var _validateResult = this.runValidation(rulesKey, values, rulesKey);\n\n          if (_validateResult) {\n            errorList['_status'] = true;\n            errorList[rulesKey] = _validateResult;\n          }\n        }\n      }\n\n      return errorList;\n    }\n  }, {\n    key: \"getSubFiledList\",\n    value: function getSubFiledList(values, curentKey, subFormKeys) {\n      if (subFormKeys) {\n        var fildList = {};\n\n        for (var key in subFormKeys) {\n          var newFildList = this.generateSubFilds(values, key + curentKey);\n          fildList = _objectSpread({}, fildList, newFildList);\n        }\n\n        return fildList;\n      } else {\n        return this.generateSubFilds(values, curentKey);\n      }\n    }\n  }, {\n    key: \"generateSubFilds\",\n    value: function generateSubFilds(values, curentKey) {\n      var newKeyArray = {};\n      var status = true;\n      var arrayKey = 0;\n\n      while (status) {\n        if (lodash__WEBPACK_IMPORTED_MODULE_3___default.a.has(values, curentKey + arrayKey) == true) {\n          newKeyArray[curentKey + arrayKey] = curentKey + arrayKey;\n        } else {\n          status = false;\n        }\n\n        arrayKey++;\n      }\n\n      return newKeyArray;\n    }\n  }, {\n    key: \"generateFinalFildsKeys\",\n    value: function generateFinalFildsKeys(keyList, finalKey) {\n      var returnList = {};\n\n      for (var key in keyList) {\n        returnList[key + finalKey] = key + finalKey;\n      }\n\n      return returnList;\n    }\n  }, {\n    key: \"runValidation\",\n    value: function runValidation(inputKey, values, rulesKey) {\n      var filedName = this.getFiledName(rulesKey);\n      var subRulesSet = this.rulesList[rulesKey].split(\"|\");\n      return this.checkValidity(values, inputKey, subRulesSet, rulesKey);\n    }\n  }, {\n    key: \"getFiledName\",\n    value: function getFiledName(key) {\n      if (this.filedsList) {\n        if (this.filedsList.hasOwnProperty(key)) {\n          return this.filedsList[key];\n        } else {\n          return key;\n        }\n      } else {\n        return key;\n      }\n    }\n  }, {\n    key: \"checkValidity\",\n    value: function checkValidity(values, key, subRulesSet, mainKey) {\n      try {\n        for (var ruleKey in subRulesSet) {\n          var param = null;\n          var method = subRulesSet[ruleKey];\n\n          if (subRulesSet[ruleKey].includes(\":\")) {\n            param = subRulesSet[ruleKey].split(\":\");\n            method = param[0];\n            param = param[1].split(\",\");\n          } else {\n            param = null;\n          }\n\n          var message = this.getMessage(mainKey, method);\n          var result = _validateMethods__WEBPACK_IMPORTED_MODULE_1__[method](key, values, param, message, this.filedsList);\n\n          if (result) {\n            return result;\n          }\n        }\n\n        return false;\n      } catch (ex) {\n        console.log('----------------Validation Exception-------------------' + '\\n' + 'Exception occurred at executing ---- ' + subRulesSet[ruleKey] + '\\n' + '' + ex + '\\n' + '------------------------------------------------');\n        return {\n          message: ex\n        };\n      }\n    }\n  }, {\n    key: \"getMessage\",\n    value: function getMessage(key, method) {\n      try {\n        var messsage = this.messageList && this.messageList.hasOwnProperty(\"\".concat(key, \".\").concat(method)) ? this.messageList[\"\".concat(key, \".\").concat(method)] : _config_validation__WEBPACK_IMPORTED_MODULE_0__[\"errorMessage\"][method];\n        messsage = messsage.replace(\":attribute\", this.filedsList.hasOwnProperty(key) ? this.filedsList[key] : key);\n        return messsage;\n      } catch (ex) {\n        console.log('----------------Validation Exception-------------------' + '\\n' + 'Exception occurred at executing ---- getMessage-' + method + '\\n' + '' + ex + '\\n' + '------------------------------------------------');\n        return 'Error..';\n      }\n    }\n  }]);\n\n  return Validate;\n}();\n\n\n\n//# sourceURL=webpack:///./server/app/helpers/validation/validate.js?");

/***/ }),

/***/ "./server/app/helpers/validation/validateMethods.js":
/*!**********************************************************!*\
  !*** ./server/app/helpers/validation/validateMethods.js ***!
  \**********************************************************/
/*! exports provided: required */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"required\", function() { return required; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nfunction formatInput(formValue, key) {\n  var value = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(formValue, key, \"\");\n\n  var type = _typeof(value);\n\n  switch (type) {\n    case \"string\":\n      {\n        formValue = value.trim();\n        break;\n      }\n\n    default:\n      {\n        break;\n      }\n  }\n\n  return formValue;\n}\n\nfunction required(key, values, param, message, filedList) {\n  try {\n    var formValue = formatInput(values, key);\n\n    if (formValue) {\n      return false;\n    } else {\n      return message;\n    }\n  } catch (ex) {\n    console.log(\"----------------Validation Exception At (required)-------------------\", \"Input Key - \".concat(key), \"Exception - \".concat(ex));\n    return true;\n  }\n}\n\n\n\n//# sourceURL=webpack:///./server/app/helpers/validation/validateMethods.js?");

/***/ }),

/***/ "./server/app/http/controllers/auth.controller.js":
/*!********************************************************!*\
  !*** ./server/app/http/controllers/auth.controller.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/user.model */ \"./server/app/models/user.model.js\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_client_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/client.model */ \"./server/app/models/client.model.js\");\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/dbErrorHandler */ \"./server/app/helpers/dbErrorHandler.js\");\n/* harmony import */ var _helpers_auth_oauth2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/auth/oauth2 */ \"./server/app/helpers/auth/oauth2.js\");\n/* harmony import */ var _config_apiResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/apiResponse */ \"./server/config/apiResponse.js\");\n/* harmony import */ var _helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/common/commonMethods */ \"./server/app/helpers/common/commonMethods.js\");\n\n\n\n\n\n\n\n\nvar registerUser = function registerUser(req, res) {\n  var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n  user.save(function (err, result) {\n    if (err) {\n      return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_5__[\"exceptionResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_6__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_5__[\"exceptionResponse\"], _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)));\n    }\n\n    _helpers_auth_oauth2__WEBPACK_IMPORTED_MODULE_4__[\"default\"].generateTokens({\n      userId: user._id,\n      clientId: \"android\"\n    }, function (ex, tokenValue, refreshTokenValue, expires) {\n      if (ex) {\n        return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_5__[\"exceptionResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_6__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_5__[\"exceptionResponse\"], ex));\n      } else {\n        return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_5__[\"successResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_6__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_5__[\"successResponse\"], {\n          access_token: tokenValue,\n          refresh_token: refreshTokenValue,\n          expires_in: expires.expires_in,\n          token_type: \"Bearer\"\n        }));\n      }\n    });\n  });\n};\n\nvar getUserInfo = function getUserInfo(req, res) {\n  req.user.salt = undefined;\n  req.user.hashed_password = undefined;\n  return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_5__[\"successResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_6__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_5__[\"successResponse\"], req.user));\n};\n\nvar requireSignin = passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate(\"bearer\", {\n  session: false\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  registerUser: registerUser,\n  requireSignin: requireSignin,\n  getUserInfo: getUserInfo\n});\n\n//# sourceURL=webpack:///./server/app/http/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/app/http/controllers/shop.controller.js":
/*!********************************************************!*\
  !*** ./server/app/http/controllers/shop.controller.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_shop_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/shop.model */ \"./server/app/models/shop.model.js\");\n/* harmony import */ var _helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/common/commonMethods */ \"./server/app/helpers/common/commonMethods.js\");\n/* harmony import */ var _config_apiResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/apiResponse */ \"./server/config/apiResponse.js\");\n/* harmony import */ var _helpers_common_manageUploads__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/common/manageUploads */ \"./server/app/helpers/common/manageUploads.js\");\n/* harmony import */ var _helpers_common_grid_fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/common/grid-fs */ \"./server/app/helpers/common/grid-fs.js\");\n/*\n * @Author: Nisal Madusanka(EruliaF) \n * @Date: 2019-01-12 14:05:38 \n * @Last Modified by: Nisal Madusanka(EruliaF)\n * @Last Modified time: 2019-01-13 11:29:31\n */\n\n\n\n\n\n\n\nvar getShopByID = function getShopByID(req, res, next, id) {\n  _models_shop_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id).populate('owner', \"_id name email profile\").exec(function (error, shop) {\n    if (error) {\n      return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"exceptionResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_2__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"exceptionResponse\"], error));\n    }\n\n    req.currentShop = shop;\n    next();\n  });\n};\n\nvar getShopData = function getShopData(req, res) {\n  return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"successResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_2__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"successResponse\"], req.currentShop));\n};\n\nvar create = function create(req, res) {\n  var formData = req.body;\n  formData[\"owner\"] = req.profile._id;\n  var shop = new _models_shop_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"](formData);\n  shop.save(function (err, shopObj) {\n    if (err) {\n      return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"exceptionResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_2__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"exceptionResponse\"], error));\n    } else {\n      Object(_helpers_common_manageUploads__WEBPACK_IMPORTED_MODULE_4__[\"uploadImage\"])(shopObj._id, req.file, function (error) {\n        if (error) {\n          return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"successResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_2__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"successResponse\"], shopObj));\n        } else {\n          return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"successResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_2__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"successResponse\"], shopObj));\n        }\n      });\n    }\n  });\n};\n\nvar edit = function edit(req, res) {\n  var shop = req.currentShop;\n  Object(_helpers_common_manageUploads__WEBPACK_IMPORTED_MODULE_4__[\"uploadImage\"])(shop._id, req.file, function (error) {\n    if (error) {\n      return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"exceptionResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_2__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"exceptionResponse\"], error));\n    } else {\n      shop.name = req.body.name;\n      shop.description = req.body.description;\n      shop.address = req.body.address;\n      shop.contact = req.body.contact;\n      shop.updated = Date.now();\n      shop.save(function (error, shopData) {\n        if (error) {\n          return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"exceptionResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_2__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"exceptionResponse\"], error));\n        }\n\n        return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"successResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_2__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"successResponse\"], shopData));\n      });\n    }\n  });\n};\n\nvar getShopsByUser = function getShopsByUser(req, res) {\n  _models_shop_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n    owner: req.profile._id\n  }, function (error, shops) {\n    if (error) {\n      return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"exceptionResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_2__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"exceptionResponse\"], error));\n    }\n\n    return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"successResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_2__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"successResponse\"], shops));\n  });\n};\n\nvar getShopLogo = function getShopLogo(req, res, next) {\n  Object(_helpers_common_manageUploads__WEBPACK_IMPORTED_MODULE_4__[\"getImage\"])(req.currentShop._id, function (error, file) {\n    if (error) {\n      next();\n    } else {\n      if (file) {\n        res.header('Content-Length', file.length);\n        res.header('Content-Type', file.contentType);\n        Object(_helpers_common_grid_fs__WEBPACK_IMPORTED_MODULE_5__[\"sendFileToResponce\"])(req.currentShop._id, res, function (error) {\n          if (error) {\n            next();\n          }\n        });\n      } else {\n        next();\n      }\n    }\n  });\n};\n\nvar defaultShopImage = function defaultShopImage(req, res) {\n  res.header('Content-Type', \"image/png\");\n  fs__WEBPACK_IMPORTED_MODULE_0___default.a.ReadStream(\"./assets/default-shop-imh.png\").pipe(res).on(\"error\", function (error) {\n    return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"exceptionResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_2__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_3__[\"exceptionResponse\"], error));\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getShopByID: getShopByID,\n  getShopsByUser: getShopsByUser,\n  create: create,\n  edit: edit,\n  getShopLogo: getShopLogo,\n  defaultShopImage: defaultShopImage,\n  getShopData: getShopData\n});\n\n//# sourceURL=webpack:///./server/app/http/controllers/shop.controller.js?");

/***/ }),

/***/ "./server/app/http/controllers/user.controller.js":
/*!********************************************************!*\
  !*** ./server/app/http/controllers/user.controller.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user.model */ \"./server/app/models/user.model.js\");\n/* harmony import */ var _config_apiResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/apiResponse */ \"./server/config/apiResponse.js\");\n/* harmony import */ var _helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/common/commonMethods */ \"./server/app/helpers/common/commonMethods.js\");\n/* harmony import */ var _helpers_common_manageUploads__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/common/manageUploads */ \"./server/app/helpers/common/manageUploads.js\");\n/* harmony import */ var _helpers_common_grid_fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/common/grid-fs */ \"./server/app/helpers/common/grid-fs.js\");\n/*\n * @Author: Nisal Madusanka(EruliaF) \n * @Date: 2019-01-12 11:15:50 \n * @Last Modified by: Nisal Madusanka(EruliaF)\n * @Last Modified time: 2019-01-12 16:44:37\n */\n\n\n\n\n\n\n\nvar getUserByID = function getUserByID(req, res, next, id) {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id).exec(function (error, user) {\n    if (error) {\n      return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_2__[\"exceptionResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_3__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_2__[\"exceptionResponse\"], error));\n    }\n\n    req.profile = user;\n    next();\n  });\n};\n\nvar getProfileInfo = function getProfileInfo(req, res) {\n  req.profile.salt = undefined;\n  req.profile.hashed_password = undefined;\n  return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_2__[\"successResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_3__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_2__[\"successResponse\"], req.profile));\n};\n\nvar updateUser = function updateUser(req, res) {\n  var user = req.profile;\n  Object(_helpers_common_manageUploads__WEBPACK_IMPORTED_MODULE_4__[\"uploadImage\"])(user._id, req.file, function (error) {\n    if (error) {\n      return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_2__[\"exceptionResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_3__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_2__[\"exceptionResponse\"], error));\n    } else {\n      user.email = req.body.email;\n      user.name = req.body.name;\n      user.profile.about = req.body.about;\n      user.profile.address = req.body.address;\n      user.profile.contact = req.body.contact;\n      user.updated = Date.now();\n      user.save(function (error, userdata) {\n        if (error) {\n          return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_2__[\"exceptionResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_3__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_2__[\"exceptionResponse\"], error));\n        }\n\n        userdata.salt = undefined;\n        userdata.hashed_password = undefined;\n        return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_2__[\"successResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_3__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_2__[\"successResponse\"], userdata));\n      });\n    }\n  });\n};\n\nvar getUserProfileImage = function getUserProfileImage(req, res, next) {\n  Object(_helpers_common_manageUploads__WEBPACK_IMPORTED_MODULE_4__[\"getImage\"])(req.profile._id, function (error, file) {\n    if (error) {\n      next();\n    } else {\n      if (file) {\n        res.header('Content-Length', file.length);\n        res.header('Content-Type', file.contentType);\n        Object(_helpers_common_grid_fs__WEBPACK_IMPORTED_MODULE_5__[\"sendFileToResponce\"])(req.profile._id, res, function (error) {\n          if (error) {\n            next();\n          }\n        });\n      } else {\n        next();\n      }\n    }\n  });\n};\n\nvar defaultProfileImage = function defaultProfileImage(req, res) {\n  res.header('Content-Type', \"image/png\");\n  fs__WEBPACK_IMPORTED_MODULE_0___default.a.ReadStream(\"./assets/default-profile-img.png\").pipe(res).on(\"error\", function (error) {\n    return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_2__[\"exceptionResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_3__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_2__[\"exceptionResponse\"], error));\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getUserByID: getUserByID,\n  getProfileInfo: getProfileInfo,\n  updateUser: updateUser,\n  getUserProfileImage: getUserProfileImage,\n  defaultProfileImage: defaultProfileImage\n});\n\n//# sourceURL=webpack:///./server/app/http/controllers/user.controller.js?");

/***/ }),

/***/ "./server/app/http/middleware/core/multipartFrom.js":
/*!**********************************************************!*\
  !*** ./server/app/http/middleware/core/multipartFrom.js ***!
  \**********************************************************/
/*! exports provided: fileUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fileUpload\", function() { return fileUpload; });\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);\n\nvar fileUpload = multer__WEBPACK_IMPORTED_MODULE_0___default()({\n  dest: './tmp/'\n});\n\n\n//# sourceURL=webpack:///./server/app/http/middleware/core/multipartFrom.js?");

/***/ }),

/***/ "./server/app/http/requests/auth/authRequest.js":
/*!******************************************************!*\
  !*** ./server/app/http/requests/auth/authRequest.js ***!
  \******************************************************/
/*! exports provided: validateRegister, validateLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateRegister\", function() { return validateRegister; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateLogin\", function() { return validateLogin; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_validation_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/validation/validate */ \"./server/app/helpers/validation/validate.js\");\n/* harmony import */ var _config_apiResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config/apiResponse */ \"./server/config/apiResponse.js\");\n/* harmony import */ var _helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/common/commonMethods */ \"./server/app/helpers/common/commonMethods.js\");\n\n\n\n\n\nvar validateRegister = function validateRegister(req, res, next) {\n  var rules = {\n    name: \"required\",\n    email: \"required\",\n    password: \"required\"\n  };\n  var message = {\n    'name.required': \"Please enter the Name.\",\n    'email.required': \"Please enter the E-mail.\",\n    'password.required': \"Please enter the Password.\"\n  };\n  var validateObj = new _helpers_validation_validate__WEBPACK_IMPORTED_MODULE_1__[\"default\"](rules, {}, message);\n  var errors = validateObj.validateForm(req.body);\n\n  if (errors._status == true) {\n    //show Form Error   \n    delete errors[\"_status\"];\n    return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_2__[\"formErrorResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_3__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_2__[\"formErrorResponse\"], errors));\n  } else {\n    next();\n  }\n};\n\nvar validateLogin = function validateLogin(req, res, next) {\n  var rules = {\n    username: \"required\",\n    password: \"required\"\n  };\n  var message = {\n    'username.required': \"Please enter the E-mail.\",\n    'password.required': \"Please enter the Password.\"\n  };\n  var validateObj = new _helpers_validation_validate__WEBPACK_IMPORTED_MODULE_1__[\"default\"](rules, {}, message);\n  var errors = validateObj.validateForm(req.body);\n\n  if (errors._status == true) {\n    //show Form Error   \n    delete errors[\"_status\"];\n    return res.status(_config_apiResponse__WEBPACK_IMPORTED_MODULE_2__[\"formErrorResponse\"].httpStatus).json(Object(_helpers_common_commonMethods__WEBPACK_IMPORTED_MODULE_3__[\"_sendResponse\"])(_config_apiResponse__WEBPACK_IMPORTED_MODULE_2__[\"formErrorResponse\"], errors));\n  } else {\n    next();\n  }\n};\n\n\n\n//# sourceURL=webpack:///./server/app/http/requests/auth/authRequest.js?");

/***/ }),

/***/ "./server/app/models/accessToken.model.js":
/*!************************************************!*\
  !*** ./server/app/models/accessToken.model.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar accessTokenSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  userId: {\n    type: String,\n    required: true\n  },\n  clientId: {\n    type: String,\n    required: true\n  },\n  token: {\n    type: String,\n    unique: true,\n    required: true\n  },\n  created: {\n    type: Date,\n    default: Date.now\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('AccessToken', accessTokenSchema));\n\n//# sourceURL=webpack:///./server/app/models/accessToken.model.js?");

/***/ }),

/***/ "./server/app/models/client.model.js":
/*!*******************************************!*\
  !*** ./server/app/models/client.model.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar clientSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    unique: true,\n    required: true\n  },\n  clientId: {\n    type: String,\n    unique: true,\n    required: true\n  },\n  clientSecret: {\n    type: String,\n    required: true\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Client', clientSchema));\n\n//# sourceURL=webpack:///./server/app/models/client.model.js?");

/***/ }),

/***/ "./server/app/models/refreshToken.model.js":
/*!*************************************************!*\
  !*** ./server/app/models/refreshToken.model.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar refreshTokenSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  userId: {\n    type: String,\n    required: true\n  },\n  clientId: {\n    type: String,\n    required: true\n  },\n  token: {\n    type: String,\n    unique: true,\n    required: true\n  },\n  created: {\n    type: Date,\n    default: Date.now\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('RefreshToken', refreshTokenSchema));\n\n//# sourceURL=webpack:///./server/app/models/refreshToken.model.js?");

/***/ }),

/***/ "./server/app/models/shop.model.js":
/*!*****************************************!*\
  !*** ./server/app/models/shop.model.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar shopSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    trim: true\n  },\n  description: {\n    type: String,\n    trim: true\n  },\n  address: {\n    type: String,\n    trim: true\n  },\n  contact: {\n    type: String,\n    trim: true\n  },\n  owner: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: 'User'\n  },\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Shop', shopSchema));\n\n//# sourceURL=webpack:///./server/app/models/shop.model.js?");

/***/ }),

/***/ "./server/app/models/user.model.js":
/*!*****************************************!*\
  !*** ./server/app/models/user.model.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar profileSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  photo: {\n    data: Buffer,\n    contentType: String\n  },\n  about: {\n    type: String,\n    trim: true\n  },\n  address: {\n    type: String,\n    trim: true\n  },\n  contact: {\n    type: String,\n    trim: true\n  }\n});\nvar userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: \"Name is required\"\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: \"Email already exists\",\n    required: \"Email is required\"\n  },\n  hashed_password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  salt: String,\n  seller: {\n    type: Boolean,\n    default: false\n  },\n  profile: {\n    type: profileSchema,\n    default: profileSchema\n  },\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  }\n});\nuserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\nuserSchema.virtual('userId').get(function () {\n  return this._id;\n});\nuserSchema.methods = {\n  authenticate: function authenticate(plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function encryptPassword(password) {\n    if (!password) return '';\n\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_1___default.a.createHmac('sha1', this.salt).update(password).digest('hex');\n    } catch (err) {\n      return '';\n    }\n  },\n  makeSalt: function makeSalt() {\n    return Math.round(new Date().valueOf() * Math.random()) + '';\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', userSchema));\n\n//# sourceURL=webpack:///./server/app/models/user.model.js?");

/***/ }),

/***/ "./server/app/routes/auth.routes.js":
/*!******************************************!*\
  !*** ./server/app/routes/auth.routes.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _http_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/controllers/auth.controller */ \"./server/app/http/controllers/auth.controller.js\");\n/* harmony import */ var _helpers_auth_oauth2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/auth/oauth2 */ \"./server/app/helpers/auth/oauth2.js\");\n/* harmony import */ var _http_requests_auth_authRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http/requests/auth/authRequest */ \"./server/app/http/requests/auth/authRequest.js\");\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/auth/register').post(_http_requests_auth_authRequest__WEBPACK_IMPORTED_MODULE_3__[\"validateRegister\"], _http_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].registerUser);\nrouter.route('/oauth/token').post(_http_requests_auth_authRequest__WEBPACK_IMPORTED_MODULE_3__[\"validateLogin\"], _helpers_auth_oauth2__WEBPACK_IMPORTED_MODULE_2__[\"default\"].token);\nrouter.route('/auth/userInfo').get(_http_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _http_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getUserInfo);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/app/routes/auth.routes.js?");

/***/ }),

/***/ "./server/app/routes/shop.routes.js":
/*!******************************************!*\
  !*** ./server/app/routes/shop.routes.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _http_controllers_shop_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/controllers/shop.controller */ \"./server/app/http/controllers/shop.controller.js\");\n/* harmony import */ var _http_controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http/controllers/user.controller */ \"./server/app/http/controllers/user.controller.js\");\n/* harmony import */ var _http_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http/controllers/auth.controller */ \"./server/app/http/controllers/auth.controller.js\");\n/* harmony import */ var _http_middleware_core_multipartFrom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http/middleware/core/multipartFrom */ \"./server/app/http/middleware/core/multipartFrom.js\");\n //controllers\n\n\n\n //middleware\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route(\"/shops-by-user/:userID\").get(_http_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].requireSignin, _http_controllers_shop_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getShopsByUser);\nrouter.route(\"/shop-create/:userID\").post(_http_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].requireSignin, _http_middleware_core_multipartFrom__WEBPACK_IMPORTED_MODULE_4__[\"fileUpload\"].single(\"logo\"), _http_controllers_shop_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\nrouter.route(\"/shop/:shopID\").get(_http_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].requireSignin, _http_controllers_shop_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getShopData).put(_http_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].requireSignin, _http_middleware_core_multipartFrom__WEBPACK_IMPORTED_MODULE_4__[\"fileUpload\"].single(\"logo\"), _http_controllers_shop_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].edit);\nrouter.route(\"/shop-logo/:shopID\").get(_http_controllers_shop_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getShopLogo, _http_controllers_shop_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].defaultShopImage);\nrouter.param(\"shopID\", _http_controllers_shop_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getShopByID);\nrouter.param(\"userID\", _http_controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getUserByID);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/app/routes/shop.routes.js?");

/***/ }),

/***/ "./server/app/routes/user.routes.js":
/*!******************************************!*\
  !*** ./server/app/routes/user.routes.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _http_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/controllers/user.controller */ \"./server/app/http/controllers/user.controller.js\");\n/* harmony import */ var _http_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http/controllers/auth.controller */ \"./server/app/http/controllers/auth.controller.js\");\n/* harmony import */ var _http_middleware_core_multipartFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http/middleware/core/multipartFrom */ \"./server/app/http/middleware/core/multipartFrom.js\");\n //controllers\n\n\n //midd\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route(\"/user/:userID\").get(_http_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _http_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProfileInfo).put(_http_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _http_middleware_core_multipartFrom__WEBPACK_IMPORTED_MODULE_3__[\"fileUpload\"].single(\"proPic\"), _http_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateUser);\nrouter.route(\"/user/profile-image/:userID\").get(_http_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getUserProfileImage, _http_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].defaultProfileImage);\nrouter.param(\"userID\", _http_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getUserByID);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/app/routes/user.routes.js?");

/***/ }),

/***/ "./server/bootstrap/devBundle.js":
/*!***************************************!*\
  !*** ./server/bootstrap/devBundle.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../webpack.config.client */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar compile = function compile(app) {\n  if (true) {\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_0___default()(_webpack_config_client__WEBPACK_IMPORTED_MODULE_2___default.a);\n    var middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler, {\n      publicPath: _webpack_config_client__WEBPACK_IMPORTED_MODULE_2___default.a.output.publicPath\n    });\n    app.use(middleware);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  compile: compile\n});\n\n//# sourceURL=webpack:///./server/bootstrap/devBundle.js?");

/***/ }),

/***/ "./server/bootstrap/express.js":
/*!*************************************!*\
  !*** ./server/bootstrap/express.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./devBundle */ \"./server/bootstrap/devBundle.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../template */ \"./template.js\");\n/* harmony import */ var _app_routes_auth_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/routes/auth.routes */ \"./server/app/routes/auth.routes.js\");\n/* harmony import */ var _app_routes_user_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/routes/user.routes */ \"./server/app/routes/user.routes.js\");\n/* harmony import */ var _app_routes_shop_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/routes/shop.routes */ \"./server/app/routes/shop.routes.js\");\n\n\n\n\n\n\n\n\n\n\n\n__webpack_require__(/*! ../app/helpers/auth/auth */ \"./server/app/helpers/auth/auth.js\");\n\n\n\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n_devBundle__WEBPACK_IMPORTED_MODULE_8__[\"default\"].compile(app); // parse body params and attache them to req.body\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n  extended: true\n}));\napp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()()); // secure apps by setting various HTTP headers\n\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()()); // enable CORS - Cross Origin Resource Sharing\n\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()()); //Loggg Http requests\n\napp.use(morgan__WEBPACK_IMPORTED_MODULE_7___default()('dev')); //passport init\n\napp.use(passport__WEBPACK_IMPORTED_MODULE_6___default.a.initialize());\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'dist'))); // mount routes\n\napp.use('/api', _app_routes_auth_routes__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\napp.use('/api', _app_routes_user_routes__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\napp.use('/api', _app_routes_shop_routes__WEBPACK_IMPORTED_MODULE_12__[\"default\"]); //Front-end\n\napp.get('*', function (req, res) {\n  res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_9__[\"default\"])());\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./server/bootstrap/express.js?");

/***/ }),

/***/ "./server/config/apiResponse.js":
/*!**************************************!*\
  !*** ./server/config/apiResponse.js ***!
  \**************************************/
/*! exports provided: successResponse, formErrorResponse, badRequestResponse, exceptionResponse, customResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"successResponse\", function() { return successResponse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formErrorResponse\", function() { return formErrorResponse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"badRequestResponse\", function() { return badRequestResponse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exceptionResponse\", function() { return exceptionResponse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"customResponse\", function() { return customResponse; });\n/*\n * @Author: Nisal Madusanka(EruliaF) \n * @Date: 2018-12-29 07:23:29 \n * @Last Modified by: Nisal Madusanka(EruliaF)\n * @Last Modified time: 2018-12-29 07:44:05\n */\nvar successResponse = {\n  'code': '01',\n  'status': 'success',\n  'description': 'Action successfully completed',\n  'httpStatus': '200'\n};\nvar formErrorResponse = {\n  'code': '02',\n  'status': 'validation-error',\n  'description': 'Validation false',\n  'httpStatus': '400'\n};\nvar badRequestResponse = {\n  'code': '03',\n  'status': 'error',\n  'description': 'Bad Request',\n  'httpStatus': '400'\n};\nvar exceptionResponse = {\n  'code': '04',\n  'status': 'error',\n  'description': 'Exception occurred while processing the request',\n  'httpStatus': '400'\n};\nvar customResponse = {\n  'code': '05',\n  'status': 'custom',\n  'description': 'custom Response',\n  'httpStatus': '200'\n};\n\n//# sourceURL=webpack:///./server/config/apiResponse.js?");

/***/ }),

/***/ "./server/config/core.js":
/*!*******************************!*\
  !*** ./server/config/core.js ***!
  \*******************************/
/*! exports provided: env, port, baseUrl, mongoDBUrl, tokenLife */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"env\", function() { return env; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"port\", function() { return port; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"baseUrl\", function() { return baseUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mongoDBUrl\", function() { return mongoDBUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tokenLife\", function() { return tokenLife; });\nvar env = \"development\" || false;\nvar port = process.env.PORT || 3000;\nvar baseUrl = \"http://localhost:\".concat(port, \"/\");\nvar mongoDBUrl = 'mongodb://localhost:27017/emarket';\nvar apiVersion = \"api/v2.2/\";\nvar tokenLife = 360000;\n\n\n//# sourceURL=webpack:///./server/config/core.js?");

/***/ }),

/***/ "./server/config/validation.js":
/*!*************************************!*\
  !*** ./server/config/validation.js ***!
  \*************************************/
/*! exports provided: errorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"errorMessage\", function() { return errorMessage; });\n/*\n * @Author: Nisal Madusanka(EruliaF)\n * @Description:\n * @Date: 2018-05-10 09:25:52\n * @Last Modified by: Nisal Madusanka(EruliaF)\n * @Last Modified time: 2018-12-27 19:06:34\n */\nvar errorMessage = {\n  required: \"Please enter the :attribute\",\n  max: \"The :attribute may not be greater than :max.\",\n  min: \"The :attribute must be at least :min.\",\n  maxAmount: \"The :attribute may not be greater than :max.\",\n  minAmount: \"The :attribute must be at least :min.\",\n  digits: \"The :attribute must have :min digits.\",\n  between: \"The :attribute must be between :min and :max.\",\n  string: \"The :attribute must be a string.\",\n  numeric: \"The :attribute must be a number.\",\n  email: \"The :attribute must be a valid email address.\",\n  requiredIf: \"The :attribute field is required when :other is :value.\",\n  after_or_equal: 'The :attribute must be a date after or equal to :startDate.'\n};\n\n//# sourceURL=webpack:///./server/config/validation.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bootstrap_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap/express */ \"./server/bootstrap/express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/core */ \"./server/config/core.js\");\n\n\n // Connection URL\n\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(_config_core__WEBPACK_IMPORTED_MODULE_2__[\"mongoDBUrl\"]);\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on('error', function () {\n  throw new Error(\"unable to connect to database: \".concat(_config_core__WEBPACK_IMPORTED_MODULE_2__[\"mongoDBUrl\"]));\n}); //mongoose.set('debug', true);\n\n_bootstrap_express__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listen(_config_core__WEBPACK_IMPORTED_MODULE_2__[\"port\"], function (err) {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config_core__WEBPACK_IMPORTED_MODULE_2__[\"port\"]);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return \"<!doctype html>\\n      <html lang=\\\"en\\\">\\n        <head>\\n          <meta charset=\\\"utf-8\\\">\\n          <title>E-Market</title>\\n\\n          <link rel=\\\"stylesheet\\\" href=\\\"/dist/style.css\\\"> \\n        </head>       \\n        <body>\\n            \\n          <div id=\\\"root\\\"></div>\\n\\n          <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n        </body>\\n      </html>\";\n});\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar ExtractTextPlugin = __webpack_require__(/*! extract-text-webpack-plugin */ \"extract-text-webpack-plugin\");\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: \"eval-source-map\",\n  entry: [\"@babel/polyfill\", path.join(CURRENT_WORKING_DIR, \"client/index.js\"), path.join(CURRENT_WORKING_DIR, \"client/style/app.scss\")],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, \"/dist\"),\n    filename: \"bundle.js\",\n    publicPath: \"/dist/\"\n  },\n  module: {\n    rules: [{\n      test: /\\.(js|jsx)$/,\n      exclude: /node_modules/,\n      use: [\"babel-loader\"]\n    }, {\n      test: /\\.(sass|scss)$/,\n      use: ExtractTextPlugin.extract({\n        fallback: 'style-loader',\n        use: ['css-loader', 'sass-loader']\n      })\n    }]\n  },\n  plugins: [new webpack.NoEmitOnErrorsPlugin(), new ExtractTextPlugin({\n    filename: path.join(CURRENT_WORKING_DIR, \"/dist/style.css\")\n  })]\n};\nmodule.exports = config;\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/eruliaf/WorkPlace/NodeJS/emarket/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "extract-text-webpack-plugin":
/*!**********************************************!*\
  !*** external "extract-text-webpack-plugin" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"extract-text-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22extract-text-webpack-plugin%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");\n\n//# sourceURL=webpack:///external_%22multer%22?");

/***/ }),

/***/ "oauth2orize":
/*!******************************!*\
  !*** external "oauth2orize" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"oauth2orize\");\n\n//# sourceURL=webpack:///external_%22oauth2orize%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-http":
/*!********************************!*\
  !*** external "passport-http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-http\");\n\n//# sourceURL=webpack:///external_%22passport-http%22?");

/***/ }),

/***/ "passport-http-bearer":
/*!***************************************!*\
  !*** external "passport-http-bearer" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-http-bearer\");\n\n//# sourceURL=webpack:///external_%22passport-http-bearer%22?");

/***/ }),

/***/ "passport-oauth2-client-password":
/*!**************************************************!*\
  !*** external "passport-oauth2-client-password" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-oauth2-client-password\");\n\n//# sourceURL=webpack:///external_%22passport-oauth2-client-password%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ })

/******/ });