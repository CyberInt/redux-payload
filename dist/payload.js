(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["payload"] = factory();
	else
		root["payload"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reduxReuse = __webpack_require__(1);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var identity = function identity(value) {
	  return value;
	};

	/**
	 * Creates a reducer wrapper which return the payload of the action for the
	 * given action type.
	 * @param {string} actionType
	 * @param {function} mapResult - function to be invoked with payload as argument
	 *   before returning it.
	 * @returns {function} a function of signature (reducer) => newReducer
	 */
	var payload = function payload(actionType) {
	  var mapResult = arguments.length <= 1 || arguments[1] === undefined ? identity : arguments[1];
	  return function () {
	    var reducer = arguments.length <= 0 || arguments[0] === undefined ? _reduxReuse.nullReducer : arguments[0];
	    return (0, _reduxReuse.extendReducer)(reducer, _defineProperty({}, actionType, function (_) {
	      var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var payload = _ref.payload;
	      return mapResult(payload);
	    }));
	  };
	};

	exports.default = payload;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extendReducer = __webpack_require__(2);

	Object.defineProperty(exports, 'extendReducer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_extendReducer).default;
	  }
	});

	var _initialReducer = __webpack_require__(3);

	Object.defineProperty(exports, 'initialReducer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_initialReducer).default;
	  }
	});

	var _nullReducer = __webpack_require__(4);

	Object.defineProperty(exports, 'nullReducer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_nullReducer).default;
	  }
	});

	var _withActionFilterReducer = __webpack_require__(5);

	Object.defineProperty(exports, 'withActionFilterReducer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_withActionFilterReducer).default;
	  }
	});

	var _withMapStateReducer = __webpack_require__(6);

	Object.defineProperty(exports, 'withMapStateReducer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_withMapStateReducer).default;
	  }
	});

	var _withPayloadReducer = __webpack_require__(8);

	Object.defineProperty(exports, 'withPayloadReducer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_withPayloadReducer).default;
	  }
	});

	var _withResetReducer = __webpack_require__(9);

	Object.defineProperty(exports, 'withResetReducer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_withResetReducer).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Extends an existing reducer with additional action type handlers
	 * @param {function} reducer - a reducer function
	 * @param {object} handlers - object, where keys are action types
	 *   to be handled and values is a reducer function with signature:
	 *     (state, action) => newState
	 * @returns {function} Reducer function
	 */
	var extendReducer = function extendReducer(reducer, handlers) {
	  return function (state, action) {
	    var stateForReducer = handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action) : state;

	    return reducer(stateForReducer, action);
	  };
	};

	exports.default = extendReducer;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Creates a reducer with passed value as initial state
	 * @param {*} initialState
	 * @returns {function} Reducer function
	 */
	var initialReducer = function initialReducer(initialState) {
	  return function (state) {
	    return typeof state === 'undefined' ? initialState : state;
	  };
	};

	exports.default = initialReducer;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _initialReducer = __webpack_require__(3);

	var _initialReducer2 = _interopRequireDefault(_initialReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * A reducer with null as initial state
	 */
	var nullReducer = (0, _initialReducer2.default)(null);

	exports.default = nullReducer;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _nullReducer = __webpack_require__(4);

	var _nullReducer2 = _interopRequireDefault(_nullReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Creates a reducer wrapper which tests actions with a predicate before
	 * passing to the reducer.
	 * @param {function} predicate - function which is called with action as
	 *   argument and should return truthy value in order to indicate that
	 *   action should be passed to reducer.
	 * @returns {function} a function of signature (reducer) => newReducer
	 */
	var withActionFilterReducer = function withActionFilterReducer(predicate) {
	  return function () {
	    var reducer = arguments.length <= 0 || arguments[0] === undefined ? _nullReducer2.default : arguments[0];
	    return function (state, action) {
	      if (typeof state === 'undefined' || predicate(action)) {
	        return reducer(state, action);
	      }

	      return state;
	    };
	  };
	};

	exports.default = withActionFilterReducer;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _identity = __webpack_require__(7);

	var _identity2 = _interopRequireDefault(_identity);

	var _nullReducer = __webpack_require__(4);

	var _nullReducer2 = _interopRequireDefault(_nullReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * Creates a reducer wrapper which maps state before and after passing to a
	 * reducer, but does it only for passed action types.
	 * @param {function} [mapStateBefore=identity]
	 *   A function with signature: (stateBefore) => newStateBefore, where
	 *   stateBefore is the original state, newStateBefore is passed to the reducer.
	 * @param {function} [mapStateAfter=identity]
	 *   A function with signature: (stateAfter) => newStateAfter, where
	 *   stateAfter is returned by the reducer, newStateAfter is returned to the store.
	 * @param {[string]} [actionTypes]
	 *   Action types to perform map state. Handles all actions if not provided.
	 * @returns {function} a function of signature (reducer) => newReducer
	 */
	var withMapStateReducer = function withMapStateReducer() {
	  var mapStateBefore = arguments.length <= 0 || arguments[0] === undefined ? _identity2.default : arguments[0];
	  var mapStateAfter = arguments.length <= 1 || arguments[1] === undefined ? _identity2.default : arguments[1];
	  var actionTypes = arguments[2];

	  var actionTypesDict = actionTypes && actionTypes.reduce(function (actionType, dict) {
	    return _extends({}, dict, _defineProperty({}, actionType, true));
	  }, {});

	  return function () {
	    var reducer = arguments.length <= 0 || arguments[0] === undefined ? _nullReducer2.default : arguments[0];
	    return function (state, action) {
	      if (actionTypes && !actionTypesDict[action.type]) {
	        return reducer(state, action);
	      }

	      return mapStateAfter(reducer(mapStateBefore(state), action));
	    };
	  };
	};

	exports.default = withMapStateReducer;

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _identity = __webpack_require__(7);

	var _identity2 = _interopRequireDefault(_identity);

	var _extendReducer2 = __webpack_require__(2);

	var _extendReducer3 = _interopRequireDefault(_extendReducer2);

	var _nullReducer = __webpack_require__(4);

	var _nullReducer2 = _interopRequireDefault(_nullReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * Creates a reducer wrapper which return the payload of the action for the
	 * given action type.
	 * @param {string} actionType
	 * @param {function} mapResult - function to be invoked with payload as argument
	 *   before returning it.
	 * @returns {function} a function of signature (reducer) => newReducer
	 */
	var withPayloadReducer = function withPayloadReducer(actionType) {
	  var mapResult = arguments.length <= 1 || arguments[1] === undefined ? _identity2.default : arguments[1];
	  return function () {
	    var reducer = arguments.length <= 0 || arguments[0] === undefined ? _nullReducer2.default : arguments[0];
	    return (0, _extendReducer3.default)(reducer, _defineProperty({}, actionType, function (_) {
	      var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var payload = _ref.payload;
	      return mapResult(payload);
	    }));
	  };
	};

	exports.default = withPayloadReducer;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actionTypes = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _extendReducer = __webpack_require__(2);

	var _extendReducer2 = _interopRequireDefault(_extendReducer);

	var _nullReducer = __webpack_require__(4);

	var _nullReducer2 = _interopRequireDefault(_nullReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * These are private action types reserved by redux-reuse.
	 *
	 * From Redux:
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var actionTypes = exports.actionTypes = {
	  RESET: '@@reduxReuse/RESET'
	};

	/**
	 * Creates a reducer wrapper which resets the state for the given action type(s)
	 * @param {string[]} actionTypes
	 * @returns {function} a function of signature (reducer) => newReducer
	 */
	var withResetReducer = function withResetReducer() {
	  for (var _len = arguments.length, actionTypes = Array(_len), _key = 0; _key < _len; _key++) {
	    actionTypes[_key] = arguments[_key];
	  }

	  return function () {
	    var reducer = arguments.length <= 0 || arguments[0] === undefined ? _nullReducer2.default : arguments[0];
	    return (0, _extendReducer2.default)(reducer, actionTypes.reduce(function (handlers, actionType) {
	      return _extends({}, handlers, _defineProperty({}, actionType, function () {
	        return reducer(undefined, { type: actionTypes.RESET });
	      }));
	    }, {}));
	  };
	};

	exports.default = withResetReducer;

/***/ }
/******/ ])
});
;