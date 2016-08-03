(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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

	var Prllx = __webpack_require__(1);
	var animations = [{
	    el: document.querySelector('#box-1'),
	    start: 0,
	    end: 500,
	    transitions: {
	        translateY: [0, 800]
	    }
	}];

	new Prllx(document.body, animations, {
	    scroll: false
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assign = __webpack_require__(2);
	var Prllx = function Prllx(el, animations, options) {
	    var self = this;

	    self.wWidth = window.width;
	    self.el = el;

	    self.scrollTop = 0;
	    self.scrollDirection = 0;
	    self.isStarted = false;
	    self.animations = [];
	    self.animationsOrigin = animations || [];
	    self.targets = {};

	    self.initialized = false;

	    self.options = {
	        autoStart: true,
	        translateZ: true,
	        itemClass: 'prllx__item'
	    };

	    self.options = assign(self.options, options);

	    if (self.options.onBeforeResize && typeof self.options.onBeforeResize === 'function') {
	        self.onBeforeResize = self.options.onBeforeResize;
	    }
	    self.initialize();
	};

	Prllx.prototype = {
	    utils: __webpack_require__(31),
	    setAnimation: __webpack_require__(32),
	    resetAnimations: __webpack_require__(34),
	    // scrollTo: require('./scrollTo'),
	    animate: __webpack_require__(35),
	    initialize: __webpack_require__(36),
	    start: __webpack_require__(38),
	    stop: __webpack_require__(39),
	    loop: __webpack_require__(40),
	    scroll: __webpack_require__(44),
	    mousewheel: __webpack_require__(51),
	    touch: __webpack_require__(55),
	    keyboard: __webpack_require__(56),
	    addControls: __webpack_require__(45),
	    resize: __webpack_require__(46),
	    setScrollTop: __webpack_require__(49),
	    setScrollLimit: __webpack_require__(50)
	    // jump: require('./jump')
	};

	module.exports = Prllx;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(3),
	    copyObject = __webpack_require__(5),
	    createAssigner = __webpack_require__(7),
	    isArrayLike = __webpack_require__(9),
	    isPrototype = __webpack_require__(20),
	    keys = __webpack_require__(21);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

	/**
	 * Assigns own enumerable properties of source objects to the destination
	 * object. Source objects are applied from left to right. Subsequent sources
	 * overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * function Foo() {
	 *   this.c = 3;
	 * }
	 *
	 * function Bar() {
	 *   this.e = 5;
	 * }
	 *
	 * Foo.prototype.d = 4;
	 * Bar.prototype.f = 6;
	 *
	 * _.assign({ 'a': 1 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3, 'e': 5 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	module.exports = assign;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(4);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	module.exports = assignValue;


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var copyObjectWith = __webpack_require__(6);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object) {
	  return copyObjectWith(source, props, object);
	}

	module.exports = copyObject;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(3);

	/**
	 * This function is like `copyObject` except that it accepts a function to
	 * customize copied values.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObjectWith(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : source[key];

	    assignValue(object, key, newValue);
	  }
	  return object;
	}

	module.exports = copyObjectWith;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var isIterateeCall = __webpack_require__(8),
	    rest = __webpack_require__(16);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return rest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = typeof customizer == 'function'
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(4),
	    isArrayLike = __webpack_require__(9),
	    isIndex = __webpack_require__(15),
	    isObject = __webpack_require__(13);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(10),
	    isFunction = __webpack_require__(12),
	    isLength = __webpack_require__(14);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(11);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 14 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 15 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(17),
	    toInteger = __webpack_require__(18);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://mdn.io/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.rest(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function rest(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, array);
	      case 1: return func.call(this, args[0], array);
	      case 2: return func.call(this, args[0], args[1], array);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = rest;


/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {...*} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  var length = args.length;
	  switch (length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(19);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This function is loosely based on [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3');
	 * // => 3
	 */
	function toInteger(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  var remainder = value % 1;
	  return value === value ? (remainder ? value - remainder : value) : 0;
	}

	module.exports = toInteger;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(12),
	    isObject = __webpack_require__(13);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3);
	 * // => 3
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3');
	 * // => 3
	 */
	function toNumber(value) {
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 20 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(22),
	    baseKeys = __webpack_require__(23),
	    indexKeys = __webpack_require__(24),
	    isArrayLike = __webpack_require__(9),
	    isIndex = __webpack_require__(15),
	    isPrototype = __webpack_require__(20);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;


/***/ },
/* 22 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var getPrototypeOf = Object.getPrototypeOf;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return hasOwnProperty.call(object, key) ||
	    (typeof object == 'object' && key in object && getPrototypeOf(object) === null);
	}

	module.exports = baseHas;


/***/ },
/* 23 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;

	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}

	module.exports = baseKeys;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(25),
	    isArguments = __webpack_require__(26),
	    isArray = __webpack_require__(29),
	    isLength = __webpack_require__(14),
	    isString = __webpack_require__(30);

	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}

	module.exports = indexKeys;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(27);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(9),
	    isObjectLike = __webpack_require__(28);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(29),
	    isObjectLike = __webpack_require__(28);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';
	/* jshint ignore:start */

	module.exports = {
	    getTime: Date.now || function getTime() {
	        return new Date().getTime();
	    },

	    setScrollDirection: function setScrollDirection(newScrollTop, currentScrollTop) {
	        return newScrollTop > currentScrollTop ? 1 : -1;
	    },

	    getProgress: function getProgress(animation, scrollTop) {
	        var progress = (animation.start - scrollTop) / (animation.start - animation.end);

	        if (animation.hasOwnProperty('easing') && self.ease.hasOwnProperty(animation.easing)) {
	            progress = self.ease[animation.easing](null, progress, 0, 1, 1);
	        }

	        return progress;
	    },

	    extend: function extend(target, obj) {
	        for (var key in obj) {
	            target[key] = obj[key];
	        }
	    },

	    ease: {

	        easeInQuad: function easeInQuad(x, t, b, c, d) {
	            return c * (t /= d) * t + b;
	        },

	        easeOutQuad: function easeOutQuad(x, t, b, c, d) {
	            return -c * (t /= d) * (t - 2) + b;
	        },

	        easeInOutQuad: function easeInOutQuad(x, t, b, c, d) {
	            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
	            return -c / 2 * (--t * (t - 2) - 1) + b;
	        },

	        easeInCubic: function easeInCubic(x, t, b, c, d) {
	            return c * (t /= d) * t * t + b;
	        },

	        easeOutCubic: function easeOutCubic(x, t, b, c, d) {
	            return c * ((t = t / d - 1) * t * t + 1) + b;
	        },

	        easeInOutCubic: function easeInOutCubic(x, t, b, c, d) {
	            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
	            return c / 2 * ((t -= 2) * t * t + 2) + b;
	        },

	        easeInQuart: function easeInQuart(x, t, b, c, d) {
	            return c * (t /= d) * t * t * t + b;
	        },

	        easeOutQuart: function easeOutQuart(x, t, b, c, d) {
	            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	        },

	        easeInOutQuart: function easeInOutQuart(x, t, b, c, d) {
	            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
	            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	        },

	        easeInQuint: function easeInQuint(x, t, b, c, d) {
	            return c * (t /= d) * t * t * t * t + b;
	        },

	        easeOutQuint: function easeOutQuint(x, t, b, c, d) {
	            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	        },

	        easeInOutQuint: function easeInOutQuint(x, t, b, c, d) {
	            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
	            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	        },

	        easeInSine: function easeInSine(x, t, b, c, d) {
	            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	        },

	        easeOutSine: function easeOutSine(x, t, b, c, d) {
	            return c * Math.sin(t / d * (Math.PI / 2)) + b;
	        },

	        easeInOutSine: function easeInOutSine(x, t, b, c, d) {
	            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	        },

	        easeInExpo: function easeInExpo(x, t, b, c, d) {
	            return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	        },

	        easeOutExpo: function easeOutExpo(x, t, b, c, d) {
	            return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	        },

	        easeInOutExpo: function easeInOutExpo(x, t, b, c, d) {
	            if (t == 0) return b;
	            if (t == d) return b + c;
	            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
	            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	        },

	        easeInCirc: function easeInCirc(x, t, b, c, d) {
	            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	        },

	        easeOutCirc: function easeOutCirc(x, t, b, c, d) {
	            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	        },

	        easeInOutCirc: function easeInOutCirc(x, t, b, c, d) {
	            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
	            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	        },

	        easeInElastic: function easeInElastic(x, t, b, c, d) {
	            var s = 1.70158;var p = 0;var a = c;
	            if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;
	            if (a < Math.abs(c)) {
	                a = c;var s = p / 4;
	            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
	            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	        },

	        easeOutElastic: function easeOutElastic(x, t, b, c, d) {
	            var s = 1.70158;var p = 0;var a = c;
	            if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;
	            if (a < Math.abs(c)) {
	                a = c;var s = p / 4;
	            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
	            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	        },

	        easeInOutElastic: function easeInOutElastic(x, t, b, c, d) {
	            var s = 1.70158;var p = 0;var a = c;
	            if (t == 0) return b;if ((t /= d / 2) == 2) return b + c;if (!p) p = d * (.3 * 1.5);
	            if (a < Math.abs(c)) {
	                a = c;var s = p / 4;
	            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
	            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	        },

	        easeInBack: function easeInBack(x, t, b, c, d, s) {
	            if (s == undefined) s = 1.70158;
	            return c * (t /= d) * t * ((s + 1) * t - s) + b;
	        },

	        easeOutBack: function easeOutBack(x, t, b, c, d, s) {
	            if (s == undefined) s = 1.70158;
	            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	        },

	        easeInOutBack: function easeInOutBack(x, t, b, c, d, s) {
	            if (s == undefined) s = 1.70158;
	            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
	            return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
	        },

	        easeInBounce: function easeInBounce(x, t, b, c, d) {
	            return c - $.easing.easeOutBounce(x, d - t, 0, c, d) + b;
	        },

	        easeOutBounce: function easeOutBounce(x, t, b, c, d) {
	            if ((t /= d) < 1 / 2.75) {
	                return c * (7.5625 * t * t) + b;
	            } else if (t < 2 / 2.75) {
	                return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
	            } else if (t < 2.5 / 2.75) {
	                return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
	            } else {
	                return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
	            }
	        }

	    }
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(33);

	module.exports = function (animation, index, update) {
	    var self = this,
	        newAnimation = {};

	    // Store a reference in the
	    // animationsOrigin array
	    // only if this is not an update.
	    if (!update) {
	        self.animationsOrigin.push(animation);
	    }

	    newAnimation.el = animation.el;

	    if (!self.initialized) {
	        newAnimation.el.classList.add(self.options.itemClass);
	    }

	    if (animation.breakpoint && animation.breakpoint > self.wWidth) {
	        return;
	    }

	    if (animation.anchor) {
	        self.targets[animation.anchor] = animation.start();
	    }

	    if (typeof animation.start === 'function') {
	        newAnimation.start = animation.start();
	    } else {
	        newAnimation.start = animation.start;
	    }

	    if (typeof animation.end === 'function') {
	        newAnimation.end = animation.end();
	    } else {
	        newAnimation.end = animation.end;
	    }

	    if (animation.hasOwnProperty('transitions')) {
	        newAnimation.transitions = {};

	        for (var key in animation.transitions) {
	            newAnimation.transitions[key] = [];

	            if (typeof animation.transitions[key][0] === 'function') {
	                newAnimation.transitions[key][0] = animation.transitions[key][0]();
	            } else {
	                newAnimation.transitions[key][0] = animation.transitions[key][0];
	            }

	            if (typeof animation.transitions[key][1] === 'function') {
	                newAnimation.transitions[key][1] = animation.transitions[key][1]();
	            } else {
	                newAnimation.transitions[key][1] = animation.transitions[key][1];
	            }

	            newAnimation.transitions[key][2] = animation.transitions[key][2];
	        }
	    }

	    if (animation.ease) {
	        newAnimation.ease = animation.ease;
	    }

	    if (animation.onStart) {
	        newAnimation.onStart = animation.onStart;
	    }

	    if (animation.onEnd) {
	        newAnimation.onEnd = animation.onEnd;
	    }

	    if (animation.onScroll) {
	        newAnimation.onScroll = animation.onScroll;
	    }

	    if (index) {
	        self.animations[index] = newAnimation;
	    } else {
	        self.animations.push(newAnimation);
	    }
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	/*
	 * classList.js: Cross-browser full element.classList implementation.
	 * 2014-07-23
	 *
	 * By Eli Grey, http://eligrey.com
	 * Public Domain.
	 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
	 */

	/*global self, document, DOMException */

	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

	/* Copied from MDN:
	 * https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
	 */

	if ("document" in window.self) {

	  // Full polyfill for browsers with no classList support
	  // Including IE < Edge missing SVGElement.classList
	  if (!("classList" in document.createElement("_"))
	    || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

	  (function (view) {

	    "use strict";

	    if (!('Element' in view)) return;

	    var
	        classListProp = "classList"
	      , protoProp = "prototype"
	      , elemCtrProto = view.Element[protoProp]
	      , objCtr = Object
	      , strTrim = String[protoProp].trim || function () {
	        return this.replace(/^\s+|\s+$/g, "");
	      }
	      , arrIndexOf = Array[protoProp].indexOf || function (item) {
	        var
	            i = 0
	          , len = this.length
	        ;
	        for (; i < len; i++) {
	          if (i in this && this[i] === item) {
	            return i;
	          }
	        }
	        return -1;
	      }
	      // Vendors: please allow content code to instantiate DOMExceptions
	      , DOMEx = function (type, message) {
	        this.name = type;
	        this.code = DOMException[type];
	        this.message = message;
	      }
	      , checkTokenAndGetIndex = function (classList, token) {
	        if (token === "") {
	          throw new DOMEx(
	              "SYNTAX_ERR"
	            , "An invalid or illegal string was specified"
	          );
	        }
	        if (/\s/.test(token)) {
	          throw new DOMEx(
	              "INVALID_CHARACTER_ERR"
	            , "String contains an invalid character"
	          );
	        }
	        return arrIndexOf.call(classList, token);
	      }
	      , ClassList = function (elem) {
	        var
	            trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
	          , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
	          , i = 0
	          , len = classes.length
	        ;
	        for (; i < len; i++) {
	          this.push(classes[i]);
	        }
	        this._updateClassName = function () {
	          elem.setAttribute("class", this.toString());
	        };
	      }
	      , classListProto = ClassList[protoProp] = []
	      , classListGetter = function () {
	        return new ClassList(this);
	      }
	    ;
	    // Most DOMException implementations don't allow calling DOMException's toString()
	    // on non-DOMExceptions. Error's toString() is sufficient here.
	    DOMEx[protoProp] = Error[protoProp];
	    classListProto.item = function (i) {
	      return this[i] || null;
	    };
	    classListProto.contains = function (token) {
	      token += "";
	      return checkTokenAndGetIndex(this, token) !== -1;
	    };
	    classListProto.add = function () {
	      var
	          tokens = arguments
	        , i = 0
	        , l = tokens.length
	        , token
	        , updated = false
	      ;
	      do {
	        token = tokens[i] + "";
	        if (checkTokenAndGetIndex(this, token) === -1) {
	          this.push(token);
	          updated = true;
	        }
	      }
	      while (++i < l);

	      if (updated) {
	        this._updateClassName();
	      }
	    };
	    classListProto.remove = function () {
	      var
	          tokens = arguments
	        , i = 0
	        , l = tokens.length
	        , token
	        , updated = false
	        , index
	      ;
	      do {
	        token = tokens[i] + "";
	        index = checkTokenAndGetIndex(this, token);
	        while (index !== -1) {
	          this.splice(index, 1);
	          updated = true;
	          index = checkTokenAndGetIndex(this, token);
	        }
	      }
	      while (++i < l);

	      if (updated) {
	        this._updateClassName();
	      }
	    };
	    classListProto.toggle = function (token, force) {
	      token += "";

	      var
	          result = this.contains(token)
	        , method = result ?
	          force !== true && "remove"
	        :
	          force !== false && "add"
	      ;

	      if (method) {
	        this[method](token);
	      }

	      if (force === true || force === false) {
	        return force;
	      } else {
	        return !result;
	      }
	    };
	    classListProto.toString = function () {
	      return this.join(" ");
	    };

	    if (objCtr.defineProperty) {
	      var classListPropDesc = {
	          get: classListGetter
	        , enumerable: true
	        , configurable: true
	      };
	      try {
	        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	      } catch (ex) { // IE 8 doesn't support enumerable:true
	        if (ex.number === -0x7FF5EC54) {
	          classListPropDesc.enumerable = false;
	          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	        }
	      }
	    } else if (objCtr[protoProp].__defineGetter__) {
	      elemCtrProto.__defineGetter__(classListProp, classListGetter);
	    }

	    }(window.self));

	    } else {
	    // There is full or partial native classList support, so just check if we need
	    // to normalize the add/remove and toggle APIs.

	    (function () {
	      "use strict";

	      var testElement = document.createElement("_");

	      testElement.classList.add("c1", "c2");

	      // Polyfill for IE 10/11 and Firefox <26, where classList.add and
	      // classList.remove exist but support only one argument at a time.
	      if (!testElement.classList.contains("c2")) {
	        var createMethod = function(method) {
	          var original = DOMTokenList.prototype[method];

	          DOMTokenList.prototype[method] = function(token) {
	            var i, len = arguments.length;

	            for (i = 0; i < len; i++) {
	              token = arguments[i];
	              original.call(this, token);
	            }
	          };
	        };
	        createMethod('add');
	        createMethod('remove');
	      }

	      testElement.classList.toggle("c3", false);

	      // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	      // support the second argument.
	      if (testElement.classList.contains("c3")) {
	        var _toggle = DOMTokenList.prototype.toggle;

	        DOMTokenList.prototype.toggle = function(token, force) {
	          if (1 in arguments && !this.contains(token) === !force) {
	            return force;
	          } else {
	            return _toggle.call(this, token);
	          }
	        };

	      }

	      testElement = null;
	    }());
	  }
	}


/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
	    var self = this;
	    self.animations = [];

	    for (var i = 0; i < self.animationsOrigin.length; i++) {
	        self.setAnimation(self.animationsOrigin[i], null, true);
	    }

	    if (!self.initialized) {
	        self.initialized = true;
	    }
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	var vendorPrefixes = ['-webkit', '-moz', '-ms'],
	    vendorPrefixedCssProperties = ['transform'];

	var getProgress = function getProgress(current, scrollTop) {

	    var progress = (current.start - scrollTop) / (current.start - current.end);

	    // if (animation.hasOwnProperty('easing') &&
	    //     self.ease.hasOwnProperty(animation.easing)) {
	    //     progress = self.ease[animation.easing](null, progress, 0, 1, 1);
	    // }

	    return progress;
	};

	var applyCss = function applyCss(el, css) {
	    for (var key in css) {
	        el.style[key] = css[key];

	        if (vendorPrefixedCssProperties.indexOf(key) !== -1) {
	            for (var k = 0; k < vendorPrefixes.length; k++) {
	                el.style[vendorPrefixes[k]] = css[key];
	            }
	        }
	    }
	};

	var animate = function animate(current, prog) {
	    var self = this,
	        progress,
	        start,
	        end,
	        now,
	        unit,
	        styles = {},
	        translateZ = '',
	        //'translateZ(0)',
	    translate3dObj = {
	        x: 0,
	        y: 0,
	        z: 0
	    },
	        translate3d,
	        transform3d = false;

	    progress = typeof prog === 'undefined' ? getProgress(current, self.scrollTop) : prog;

	    for (var key in current.transitions) {
	        if (current.transitions.hasOwnProperty(key)) {
	            start = current.transitions[key][0];
	            end = current.transitions[key][1];
	            now = start + (end - start) * progress;
	            unit = 'px';

	            if (current.transitions[key][2]) {
	                unit = current.transitions[key][2];
	            }

	            switch (key) {
	                case 'translateX':
	                    now = unit === 'px' ? Math.round(now) : Math.round(now * 100) / 100;
	                    translate3dObj.x = now + unit;
	                    transform3d = true;
	                    break;

	                case 'translateY':
	                    now = unit === 'px' ? Math.round(now) : Math.round(now * 100) / 100;
	                    translate3dObj.y = now + unit;
	                    transform3d = true;
	                    break;

	                case 'scale':
	                    styles.transform = styles.transform || '';
	                    styles.transform += 'scale(' + now + ') ' + translateZ;
	                    break;

	                case 'rotate':
	                    now = Math.round(now);
	                    styles.transform = styles.transform || '';
	                    styles.transform += 'rotate(' + now + 'deg) ' + translateZ;
	                    break;

	                case 'opacity':
	                    now = Math.round(now * 100) / 100;
	                    styles.opacity = now;
	                    break;

	                default:
	                    styles[key] = now + unit;
	            }
	        }
	    }

	    if (transform3d) {
	        styles.transform = styles.transform || '';
	        translate3d = 'translate3d(' + translate3dObj.x + ',' + translate3dObj.y + ',' + translate3dObj.z + ') ';
	        styles.transform = styles.transform + translate3d;
	    }

	    if (styles.transform) {
	        styles.transform = styles.transform.substring(0, styles.transform.length - 1);
	    }

	    applyCss(current.el, styles);
	};

	module.exports = animate;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(37);
	__webpack_require__(33);
	module.exports = function () {
	    var self = this;

	    document.body.classList.add('prllx');
	    document.scrollingElement.scrollTop = 0;

	    self.resize();
	    self.setScrollLimit();

	    if (self.options.onBeforeStart) {
	        self.options.onBeforeStart();
	    }

	    if (self.options.autoStart) {
	        self.start();
	    }

	    self.addControls();
	    self.resetAnimations();
	    self.loop();
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	/*! https://mths.be/scrollingelement v1.5.1 by @diegoperini & @mathias | MIT license */
	if (!('scrollingElement' in document)) (function() {

		function computeStyle(element) {
			if (window.getComputedStyle) {
				// Support Firefox < 4 which throws on a single parameter.
				return getComputedStyle(element, null);
			}
			// Support Internet Explorer < 9.
			return element.currentStyle;
		}

		function isBodyElement(element) {
			// The `instanceof` check gives the correct result for e.g. `body` in a
			// non-HTML namespace.
			if (window.HTMLBodyElement) {
				return element instanceof HTMLBodyElement;
			}
			// Fall back to a `tagName` check for old browsers.
			return /body/i.test(element.tagName);
		}

		function getNextBodyElement(frameset) {
			// We use this function to be correct per spec in case `document.body` is
			// a `frameset` but there exists a later `body`. Since `document.body` is
			// a `frameset`, we know the root is an `html`, and there was no `body`
			// before the `frameset`, so we just need to look at siblings after the
			// `frameset`.
			var current = frameset;
			while (current = current.nextSibling) {
				if (current.nodeType == 1 && isBodyElement(current)) {
					return current;
				}
			}
			// No `body` found.
			return null;
		}

		// Note: standards mode / quirks mode can be toggled at runtime via
		// `document.write`.
		var isCompliantCached;
		var isCompliant = function() {
			var isStandardsMode = /^CSS1/.test(document.compatMode);
			if (!isStandardsMode) {
				// In quirks mode, the result is equivalent to the non-compliant
				// standards mode behavior.
				return false;
			}
			if (isCompliantCached === void 0) {
				// When called for the first time, check whether the browser is
				// standard-compliant, and cache the result.
				var iframe = document.createElement('iframe');
				iframe.style.height = '1px';
				(document.body || document.documentElement || document).appendChild(iframe);
				var doc = iframe.contentWindow.document;
				doc.write('<!DOCTYPE html><div style="height:9999em">x</div>');
				doc.close();
				isCompliantCached = doc.documentElement.scrollHeight > doc.body.scrollHeight;
				iframe.parentNode.removeChild(iframe);
			}
			return isCompliantCached;
		};

		function isRendered(style) {
			return style.display != 'none' && !(style.visibility == 'collapse' &&
				/^table-(.+-group|row|column)$/.test(style.display));
		}

		function isScrollable(body) {
			// A `body` element is scrollable if `body` and `html` both have
			// non-`visible` overflow and are both being rendered.
			var bodyStyle = computeStyle(body);
			var htmlStyle = computeStyle(document.documentElement);
			return bodyStyle.overflow != 'visible' && htmlStyle.overflow != 'visible' &&
				isRendered(bodyStyle) && isRendered(htmlStyle);
		}

		var scrollingElement = function() {
			if (isCompliant()) {
				return document.documentElement;
			}
			var body = document.body;
			// Note: `document.body` could be a `frameset` element, or `null`.
			// `tagName` is uppercase in HTML, but lowercase in XML.
			var isFrameset = body && !/body/i.test(body.tagName);
			body = isFrameset ? getNextBodyElement(body) : body;
			// If `body` is itself scrollable, it is not the `scrollingElement`.
			return body && isScrollable(body) ? null : body;
		};

		if (Object.defineProperty) {
			// Support modern browsers that lack a native implementation.
			Object.defineProperty(document, 'scrollingElement', {
				'get': scrollingElement
			});
		} else if (document.__defineGetter__) {
			// Support Firefox ≤ 3.6.9, Safari ≤ 4.1.3.
			document.__defineGetter__('scrollingElement', scrollingElement);
		} else {
			// IE ≤ 4 lacks `attachEvent`, so it only gets this one assignment. IE ≤ 7
			// gets it too, but the value is updated later (see `propertychange`).
			document.scrollingElement = scrollingElement();
			document.attachEvent && document.attachEvent('onpropertychange', function() {
				// This is for IE ≤ 7 only.
				// A `propertychange` event fires when `<body>` is parsed because
				// `document.activeElement` then changes.
				if (window.event.propertyName == 'activeElement') {
					document.scrollingElement = scrollingElement();
				}
			});
		}
	}());


/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
	    var self = this;
	    self.isStarted = true;
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
	    var self = this;
	    self.isStarted = false;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var raf = __webpack_require__(41);

	var lastY,
	    current,
	    scrollDirection,
	    paused = false;

	var getScrollDirection = function getScrollDirection(newScrollTop, currentScrollTop) {
	    if (newScrollTop > currentScrollTop) {
	        return 'down';
	    } else if (newScrollTop < currentScrollTop) {
	        return 'up';
	    }
	    return false;
	};

	var loop = function loop() {
	    var self = this;

	    if (self.scrollTop === lastY) {
	        paused = true;
	    } else {
	        paused = false;
	    }

	    scrollDirection = getScrollDirection(self.scrollTop, lastY);
	    lastY = self.scrollTop;

	    for (var i = 0, len = self.animations.length; i < len; i++) {
	        current = self.animations[i];

	        if (current.start <= self.scrollTop && current.end >= self.scrollTop) {
	            self.animate(current);
	        }

	        if (scrollDirection === 'down') {
	            // Mark active on way down.
	            if (current.start <= self.scrollTop && current.end > self.scrollTop && !current.active) {

	                current.active = true;
	                current.atStart = false;

	                if (typeof current.onStart === 'function') {
	                    current.onStart.call(this, scrollDirection);
	                }
	            }

	            // Unmark active on way down.
	            if (current.end <= self.scrollTop && !current.atEnd) {

	                self.animate(current, 1);
	                current.active = false;
	                current.atStart = false;
	                current.atEnd = true;

	                if (typeof current.onEnd === 'function') {
	                    current.onEnd.call(this, scrollDirection);
	                }
	            }
	        }

	        if (scrollDirection === 'up') {
	            // Mark as active on way up.
	            if (current.end >= self.scrollTop && current.start < self.scrollTop && !current.active) {

	                current.active = true;
	                current.atEnd = false;
	                current.atStart = false;

	                if (typeof current.onStart === 'function') {
	                    current.onStart.call(this, scrollDirection);
	                }
	            }

	            // Unmark active on way up.
	            if (current.start >= self.scrollTop && !current.atStart && current.active) {

	                self.animate(current, 0);
	                current.active = false;
	                current.atStart = true;
	                current.atEnd = false;

	                if (typeof current.onEnd === 'function') {
	                    current.onEnd.call(this, scrollDirection);
	                }
	            }
	        }

	        if (typeof current.onScroll === 'function') {
	            current.onScroll.call(current, scrollDirection, self.scrollTop);
	        }
	    }

	    lastY = self.scrollTop;
	    raf(function () {
	        self.loop();
	    });
	};

	module.exports = loop;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(42)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}

	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60

	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }

	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}

	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function() {
	  root.requestAnimationFrame = raf
	  root.cancelAnimationFrame = caf
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;

	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }

	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)))

/***/ },
/* 43 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        return setTimeout(fun, 0);
	    } else {
	        return cachedSetTimeout.call(null, fun, 0);
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        clearTimeout(marker);
	    } else {
	        cachedClearTimeout.call(null, marker);
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(37);

	module.exports = function () {
	    var self = this;

	    window.addEventListener('scroll', function () {
	        var scrollTop = document.scrollingElement.scrollTop;
	        var delta = self.scrollTop - scrollTop;
	        self.setScrollTop(delta);
	    });
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
	    var self = this;

	    if (self.options.scroll) {
	        self.scroll();
	    } else {
	        self.mousewheel();
	        self.touch();
	        self.keyboard();
	    }
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(33);
	var debounce = __webpack_require__(47);

	module.exports = function () {
	    var self = this,
	        waitForStart = false;

	    function beforeWindowResize() {
	        document.body.classList.add('resizing');
	    }

	    function afterWindowResize() {
	        if (!self.isStarted) {
	            waitForStart = true;
	        }
	        self.stop();

	        self.wWidth = window.innerWidth;

	        if (self.options.onBeforeResize) {
	            self.options.onBeforeResize();
	        }

	        self.resetAnimations();
	        self.setScrollLimit();

	        document.body.classList.remove('resizing');

	        if (!waitForStart) {
	            self.start();
	        }
	    }

	    window.addEventListener('resize', debounce(beforeWindowResize, 200, {}, true));
	    window.addEventListener('resize', debounce(afterWindowResize, 300));
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13),
	    now = __webpack_require__(48),
	    toNumber = __webpack_require__(19);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide an options object to indicate whether `func` should be invoked on
	 * the leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent calls
	 * to the debounced function return the result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=false] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	 *  delayed before it's invoked.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var args,
	      maxTimeoutId,
	      result,
	      stamp,
	      thisArg,
	      timeoutId,
	      trailingCall,
	      lastCalled = 0,
	      leading = false,
	      maxWait = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxWait = 'maxWait' in options && nativeMax(toNumber(options.maxWait) || 0, wait);
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function cancel() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    if (maxTimeoutId) {
	      clearTimeout(maxTimeoutId);
	    }
	    lastCalled = 0;
	    args = maxTimeoutId = thisArg = timeoutId = trailingCall = undefined;
	  }

	  function complete(isCalled, id) {
	    if (id) {
	      clearTimeout(id);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	    if (isCalled) {
	      lastCalled = now();
	      result = func.apply(thisArg, args);
	      if (!timeoutId && !maxTimeoutId) {
	        args = thisArg = undefined;
	      }
	    }
	  }

	  function delayed() {
	    var remaining = wait - (now() - stamp);
	    if (remaining <= 0 || remaining > wait) {
	      complete(trailingCall, maxTimeoutId);
	    } else {
	      timeoutId = setTimeout(delayed, remaining);
	    }
	  }

	  function flush() {
	    if ((timeoutId && trailingCall) || (maxTimeoutId && trailing)) {
	      result = func.apply(thisArg, args);
	    }
	    cancel();
	    return result;
	  }

	  function maxDelayed() {
	    complete(trailing, timeoutId);
	  }

	  function debounced() {
	    args = arguments;
	    stamp = now();
	    thisArg = this;
	    trailingCall = trailing && (timeoutId || !leading);

	    if (maxWait === false) {
	      var leadingCall = leading && !timeoutId;
	    } else {
	      if (!lastCalled && !maxTimeoutId && !leading) {
	        lastCalled = stamp;
	      }
	      var remaining = maxWait - (stamp - lastCalled);

	      var isCalled = (remaining <= 0 || remaining > maxWait) &&
	        (leading || maxTimeoutId);

	      if (isCalled) {
	        if (maxTimeoutId) {
	          maxTimeoutId = clearTimeout(maxTimeoutId);
	        }
	        lastCalled = stamp;
	        result = func.apply(thisArg, args);
	      }
	      else if (!maxTimeoutId) {
	        maxTimeoutId = setTimeout(maxDelayed, remaining);
	      }
	    }
	    if (isCalled && timeoutId) {
	      timeoutId = clearTimeout(timeoutId);
	    }
	    else if (!timeoutId && wait !== maxWait) {
	      timeoutId = setTimeout(delayed, wait);
	    }
	    if (leadingCall) {
	      isCalled = true;
	      result = func.apply(thisArg, args);
	    }
	    if (isCalled && !timeoutId && !maxTimeoutId) {
	      args = thisArg = undefined;
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	module.exports = debounce;


/***/ },
/* 48 */
/***/ function(module, exports) {

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @type {Function}
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = Date.now;

	module.exports = now;


/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (d) {
	    var self = this;
	    var newScrollTop = self.scrollTop - d;

	    if (self.isStarted && newScrollTop !== self.scrollTop) {
	        self.scrollDirection = self.utils.setScrollDirection(newScrollTop, self.scrollTop);
	        self.scrollTop = Math.min(Math.max(newScrollTop, 0), self.scrollLimit);
	    }
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
	    var self = this;
	    self.scrollLimit = self.el.offsetHeight - window.innerHeight;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mousewheel = __webpack_require__(52);

	module.exports = function () {
	    var self = this,
	        scrollSpeed = 0.5;

	    mousewheel(function (dx, dy, dz, ev) {
	        self.setScrollTop(dy * scrollSpeed);
	    });
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var toPX = __webpack_require__(53)

	module.exports = mouseWheelListen

	function mouseWheelListen(element, callback, noScroll) {
	  if(typeof element === 'function') {
	    noScroll = !!callback
	    callback = element
	    element = window
	  }
	  var lineHeight = toPX('ex', element)
	  var listener = function(ev) {
	    if(noScroll) {
	      ev.preventDefault()
	    }
	    var dx = ev.deltaX || 0
	    var dy = ev.deltaY || 0
	    var dz = ev.deltaZ || 0
	    var mode = ev.deltaMode
	    var scale = 1
	    switch(mode) {
	      case 1:
	        scale = lineHeight
	      break
	      case 2:
	        scale = window.innerHeight
	      break
	    }
	    dx *= scale
	    dy *= scale
	    dz *= scale
	    if(dx || dy || dz) {
	      return callback(dx, dy, dz, ev)
	    }
	  }
	  element.addEventListener('wheel', listener)
	  return listener
	}


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var parseUnit = __webpack_require__(54)

	module.exports = toPX

	var PIXELS_PER_INCH = 96

	function getPropertyInPX(element, prop) {
	  var parts = parseUnit(getComputedStyle(element).getPropertyValue(prop))
	  return parts[0] * toPX(parts[1], element)
	}

	//This brutal hack is needed
	function getSizeBrutal(unit, element) {
	  var testDIV = document.createElement('div')
	  testDIV.style['font-size'] = '128' + unit
	  element.appendChild(testDIV)
	  var size = getPropertyInPX(testDIV, 'font-size') / 128
	  element.removeChild(testDIV)
	  return size
	}

	function toPX(str, element) {
	  element = element || document.body
	  str = (str || 'px').trim().toLowerCase()
	  if(element === window || element === document) {
	    element = document.body 
	  }
	  switch(str) {
	    case '%':  //Ambiguous, not sure if we should use width or height
	      return element.clientHeight / 100.0
	    case 'ch':
	    case 'ex':
	      return getSizeBrutal(str, element)
	    case 'em':
	      return getPropertyInPX(element, 'font-size')
	    case 'rem':
	      return getPropertyInPX(document.body, 'font-size')
	    case 'vw':
	      return window.innerWidth/100
	    case 'vh':
	      return window.innerHeight/100
	    case 'vmin':
	      return Math.min(window.innerWidth, window.innerHeight) / 100
	    case 'vmax':
	      return Math.max(window.innerWidth, window.innerHeight) / 100
	    case 'in':
	      return PIXELS_PER_INCH
	    case 'cm':
	      return PIXELS_PER_INCH / 2.54
	    case 'mm':
	      return PIXELS_PER_INCH / 25.4
	    case 'pt':
	      return PIXELS_PER_INCH / 72
	    case 'pc':
	      return PIXELS_PER_INCH / 6
	  }
	  return 1
	}

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function parseUnit(str, out) {
	    if (!out)
	        out = [ 0, '' ]

	    str = String(str)
	    var num = parseFloat(str, 10)
	    out[0] = num
	    out[1] = str.match(/[\d.\-\+]*\s*(.*)/)[1] || ''
	    return out
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var raf = __webpack_require__(41);

	module.exports = function () {
	    var self = this,
	        pressed = false,
	        lastY = 0,
	        velocity,
	        amplitude,
	        ticker,
	        frame,
	        timestamp,
	        target,
	        timeConstant = 325;

	    function tap(e) {
	        pressed = true;
	        lastY = getPositionY(e);

	        velocity = amplitude = 0;
	        frame = self.scrollTop;
	        timestamp = self.utils.getTime();
	        clearInterval(ticker);
	        ticker = setInterval(track, 100);
	    }

	    function drag(e) {
	        var y, delta;

	        if (pressed) {
	            y = getPositionY(e);
	            delta = lastY - y;

	            if (delta > 2 || delta < -2) {
	                lastY = y;
	                self.setScrollTop(-delta);
	            }
	        }

	        e.preventDefault();
	    }

	    function release(e) {
	        pressed = false;

	        clearInterval(ticker);
	        if (velocity > 10 || velocity < -10) {
	            amplitude = 0.8 * velocity;
	            target = Math.round(self.scrollTop + amplitude);
	            timestamp = self.utils.getTime();
	            raf(autoScroll);
	        }
	    }

	    function getPositionY(e) {
	        if (e.targetTouches && e.targetTouches.length >= 1) {
	            return e.targetTouches[0].clientY;
	        }

	        return e.clientY;
	    }

	    function autoScroll() {
	        var elapsed, delta;

	        if (amplitude) {
	            elapsed = Date.now() - timestamp;
	            delta = -amplitude * Math.exp(-elapsed / timeConstant);
	            if (delta > 0.5 || delta < -0.5) {
	                self.scrollTop = target + delta;
	                raf(autoScroll);
	            } else {
	                self.scrollTop = target;
	            }
	        }
	    }

	    function track() {
	        var now, elapsed, delta, v;

	        now = self.utils.getTime();
	        elapsed = now - timestamp;
	        timestamp = now;
	        delta = self.scrollTop - frame;
	        frame = self.scrollTop;

	        v = 1000 * delta / (1 + elapsed);
	        velocity = 0.8 * v + 0.2 * velocity;
	    }

	    self.el.addEventListener('mousedown', tap);
	    self.el.addEventListener('mousemove', drag);
	    self.el.addEventListener('mouseup', release);

	    self.el.addEventListener('touchstart', tap);
	    self.el.addEventListener('touchmove', drag);
	    self.el.addEventListener('touchend', release);
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
	    var self = this,
	        timer,
	        direction,
	        keyDown,
	        speed = 6;

	    function onKeyDown(e) {
	        if (e.keyCode !== 40 && e.keyCode !== 38) {
	            return;
	        }

	        direction = e.keyCode === 38 ? 1 : -1;

	        if (!keyDown) {
	            keyDown = true;
	            timer = setInterval(function () {
	                self.setScrollTop(speed * direction);
	            }, 20);
	        }
	    }

	    function onKeyUp(e) {
	        if (keyDown) {
	            clearInterval(timer);
	            keyDown = false;
	        }
	    }

	    document.body.addEventListener('keydown', onKeyDown);
	    document.body.addEventListener('keyup', onKeyUp);
	};

/***/ }
/******/ ])
});
;