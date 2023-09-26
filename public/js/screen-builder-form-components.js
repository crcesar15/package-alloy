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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@alloyidentity/web-sdk/dist/index.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/@alloyidentity/web-sdk/dist/index.es.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return alloy; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var queryString$1 = {};

var strictUriEncode = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp('(' + token + ')|([^%]+?)', 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return [decodeURIComponent(components.join(''))];
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher) || [];

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher) || [];
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

var decodeUriComponent = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};

var splitOnFirst = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};

var filterObj = function (obj, predicate) {
	var ret = {};
	var keys = Object.keys(obj);
	var isArr = Array.isArray(predicate);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var val = obj[key];

		if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
			ret[key] = val;
		}
	}

	return ret;
};

(function (exports) {
	const strictUriEncode$1 = strictUriEncode;
	const decodeComponent = decodeUriComponent;
	const splitOnFirst$1 = splitOnFirst;
	const filterObject = filterObj;

	const isNullOrUndefined = value => value === null || value === undefined;

	function encoderForArrayFormat(options) {
		switch (options.arrayFormat) {
			case 'index':
				return key => (result, value) => {
					const index = result.length;

					if (
						value === undefined ||
						(options.skipNull && value === null) ||
						(options.skipEmptyString && value === '')
					) {
						return result;
					}

					if (value === null) {
						return [...result, [encode(key, options), '[', index, ']'].join('')];
					}

					return [
						...result,
						[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
					];
				};

			case 'bracket':
				return key => (result, value) => {
					if (
						value === undefined ||
						(options.skipNull && value === null) ||
						(options.skipEmptyString && value === '')
					) {
						return result;
					}

					if (value === null) {
						return [...result, [encode(key, options), '[]'].join('')];
					}

					return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
				};

			case 'comma':
			case 'separator':
				return key => (result, value) => {
					if (value === null || value === undefined || value.length === 0) {
						return result;
					}

					if (result.length === 0) {
						return [[encode(key, options), '=', encode(value, options)].join('')];
					}

					return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
				};

			default:
				return key => (result, value) => {
					if (
						value === undefined ||
						(options.skipNull && value === null) ||
						(options.skipEmptyString && value === '')
					) {
						return result;
					}

					if (value === null) {
						return [...result, encode(key, options)];
					}

					return [...result, [encode(key, options), '=', encode(value, options)].join('')];
				};
		}
	}

	function parserForArrayFormat(options) {
		let result;

		switch (options.arrayFormat) {
			case 'index':
				return (key, value, accumulator) => {
					result = /\[(\d*)\]$/.exec(key);

					key = key.replace(/\[\d*\]$/, '');

					if (!result) {
						accumulator[key] = value;
						return;
					}

					if (accumulator[key] === undefined) {
						accumulator[key] = {};
					}

					accumulator[key][result[1]] = value;
				};

			case 'bracket':
				return (key, value, accumulator) => {
					result = /(\[\])$/.exec(key);
					key = key.replace(/\[\]$/, '');

					if (!result) {
						accumulator[key] = value;
						return;
					}

					if (accumulator[key] === undefined) {
						accumulator[key] = [value];
						return;
					}

					accumulator[key] = [].concat(accumulator[key], value);
				};

			case 'comma':
			case 'separator':
				return (key, value, accumulator) => {
					const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
					const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
					value = isEncodedArray ? decode(value, options) : value;
					const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
					accumulator[key] = newValue;
				};

			default:
				return (key, value, accumulator) => {
					if (accumulator[key] === undefined) {
						accumulator[key] = value;
						return;
					}

					accumulator[key] = [].concat(accumulator[key], value);
				};
		}
	}

	function validateArrayFormatSeparator(value) {
		if (typeof value !== 'string' || value.length !== 1) {
			throw new TypeError('arrayFormatSeparator must be single character string');
		}
	}

	function encode(value, options) {
		if (options.encode) {
			return options.strict ? strictUriEncode$1(value) : encodeURIComponent(value);
		}

		return value;
	}

	function decode(value, options) {
		if (options.decode) {
			return decodeComponent(value);
		}

		return value;
	}

	function keysSorter(input) {
		if (Array.isArray(input)) {
			return input.sort();
		}

		if (typeof input === 'object') {
			return keysSorter(Object.keys(input))
				.sort((a, b) => Number(a) - Number(b))
				.map(key => input[key]);
		}

		return input;
	}

	function removeHash(input) {
		const hashStart = input.indexOf('#');
		if (hashStart !== -1) {
			input = input.slice(0, hashStart);
		}

		return input;
	}

	function getHash(url) {
		let hash = '';
		const hashStart = url.indexOf('#');
		if (hashStart !== -1) {
			hash = url.slice(hashStart);
		}

		return hash;
	}

	function extract(input) {
		input = removeHash(input);
		const queryStart = input.indexOf('?');
		if (queryStart === -1) {
			return '';
		}

		return input.slice(queryStart + 1);
	}

	function parseValue(value, options) {
		if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
			value = Number(value);
		} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
			value = value.toLowerCase() === 'true';
		}

		return value;
	}

	function parse(query, options) {
		options = Object.assign({
			decode: true,
			sort: true,
			arrayFormat: 'none',
			arrayFormatSeparator: ',',
			parseNumbers: false,
			parseBooleans: false
		}, options);

		validateArrayFormatSeparator(options.arrayFormatSeparator);

		const formatter = parserForArrayFormat(options);

		// Create an object with no prototype
		const ret = Object.create(null);

		if (typeof query !== 'string') {
			return ret;
		}

		query = query.trim().replace(/^[?#&]/, '');

		if (!query) {
			return ret;
		}

		for (const param of query.split('&')) {
			if (param === '') {
				continue;
			}

			let [key, value] = splitOnFirst$1(options.decode ? param.replace(/\+/g, ' ') : param, '=');

			// Missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
			formatter(decode(key, options), value, ret);
		}

		for (const key of Object.keys(ret)) {
			const value = ret[key];
			if (typeof value === 'object' && value !== null) {
				for (const k of Object.keys(value)) {
					value[k] = parseValue(value[k], options);
				}
			} else {
				ret[key] = parseValue(value, options);
			}
		}

		if (options.sort === false) {
			return ret;
		}

		return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
			const value = ret[key];
			if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
				// Sort object keys, not values
				result[key] = keysSorter(value);
			} else {
				result[key] = value;
			}

			return result;
		}, Object.create(null));
	}

	exports.extract = extract;
	exports.parse = parse;

	exports.stringify = (object, options) => {
		if (!object) {
			return '';
		}

		options = Object.assign({
			encode: true,
			strict: true,
			arrayFormat: 'none',
			arrayFormatSeparator: ','
		}, options);

		validateArrayFormatSeparator(options.arrayFormatSeparator);

		const shouldFilter = key => (
			(options.skipNull && isNullOrUndefined(object[key])) ||
			(options.skipEmptyString && object[key] === '')
		);

		const formatter = encoderForArrayFormat(options);

		const objectCopy = {};

		for (const key of Object.keys(object)) {
			if (!shouldFilter(key)) {
				objectCopy[key] = object[key];
			}
		}

		const keys = Object.keys(objectCopy);

		if (options.sort !== false) {
			keys.sort(options.sort);
		}

		return keys.map(key => {
			const value = object[key];

			if (value === undefined) {
				return '';
			}

			if (value === null) {
				return encode(key, options);
			}

			if (Array.isArray(value)) {
				return value
					.reduce(formatter(key), [])
					.join('&');
			}

			return encode(key, options) + '=' + encode(value, options);
		}).filter(x => x.length > 0).join('&');
	};

	exports.parseUrl = (url, options) => {
		options = Object.assign({
			decode: true
		}, options);

		const [url_, hash] = splitOnFirst$1(url, '#');

		return Object.assign(
			{
				url: url_.split('?')[0] || '',
				query: parse(extract(url), options)
			},
			options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
		);
	};

	exports.stringifyUrl = (object, options) => {
		options = Object.assign({
			encode: true,
			strict: true
		}, options);

		const url = removeHash(object.url).split('?')[0] || '';
		const queryFromUrl = exports.extract(object.url);
		const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

		const query = Object.assign(parsedQueryFromUrl, object.query);
		let queryString = exports.stringify(query, options);
		if (queryString) {
			queryString = `?${queryString}`;
		}

		let hash = getHash(object.url);
		if (object.fragmentIdentifier) {
			hash = `#${encode(object.fragmentIdentifier, options)}`;
		}

		return `${url}${queryString}${hash}`;
	};

	exports.pick = (input, filter, options) => {
		options = Object.assign({
			parseFragmentIdentifier: true
		}, options);

		const {url, query, fragmentIdentifier} = exports.parseUrl(input, options);
		return exports.stringifyUrl({
			url,
			query: filterObject(query, filter),
			fragmentIdentifier
		}, options);
	};

	exports.exclude = (input, filter, options) => {
		const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);

		return exports.pick(input, exclusionFilter, options);
	}; 
} (queryString$1));

var queryString = /*@__PURE__*/getDefaultExportFromCjs(queryString$1);

var config = {
    iframe: 'https://docv-iframe.alloy.co/',
    codeless: 'https://alloysdk.alloy.co/',
    api: 'https://docv-prod-api.alloy.co/'
};

var dist = {};

var v1$1 = {};

var rngBrowser = {};

Object.defineProperty(rngBrowser, "__esModule", {
  value: true
});
rngBrowser.default = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);

function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var stringify$1 = {};

var validate$1 = {};

var regex = {};

Object.defineProperty(regex, "__esModule", {
  value: true
});
regex.default = void 0;
var _default$c = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
regex.default = _default$c;

Object.defineProperty(validate$1, "__esModule", {
  value: true
});
validate$1.default = void 0;

var _regex = _interopRequireDefault$8(regex);

function _interopRequireDefault$8(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default$b = validate;
validate$1.default = _default$b;

Object.defineProperty(stringify$1, "__esModule", {
  value: true
});
stringify$1.default = void 0;
stringify$1.unsafeStringify = unsafeStringify;

var _validate$2 = _interopRequireDefault$7(validate$1);

function _interopRequireDefault$7(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate$2.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default$a = stringify;
stringify$1.default = _default$a;

Object.defineProperty(v1$1, "__esModule", {
  value: true
});
v1$1.default = void 0;

var _rng$1 = _interopRequireDefault$6(rngBrowser);

var _stringify$2 = stringify$1;

function _interopRequireDefault$6(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng$1.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify$2.unsafeStringify)(b);
}

var _default$9 = v1;
v1$1.default = _default$9;

var v3$1 = {};

var v35$1 = {};

var parse$1 = {};

Object.defineProperty(parse$1, "__esModule", {
  value: true
});
parse$1.default = void 0;

var _validate$1 = _interopRequireDefault$5(validate$1);

function _interopRequireDefault$5(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate$1.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

var _default$8 = parse;
parse$1.default = _default$8;

Object.defineProperty(v35$1, "__esModule", {
  value: true
});
v35$1.URL = v35$1.DNS = void 0;
v35$1.default = v35;

var _stringify$1 = stringify$1;

var _parse = _interopRequireDefault$4(parse$1);

function _interopRequireDefault$4(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
v35$1.DNS = DNS;
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
v35$1.URL = URL;

function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify$1.unsafeStringify)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

var md5Browser = {};

Object.defineProperty(md5Browser, "__esModule", {
  value: true
});
md5Browser.default = void 0;

/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = '0123456789abcdef';

  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 0xff;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;

  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));

  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  const lsw = (x & 0xffff) + (y & 0xffff);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

var _default$7 = md5;
md5Browser.default = _default$7;

Object.defineProperty(v3$1, "__esModule", {
  value: true
});
v3$1.default = void 0;

var _v$1 = _interopRequireDefault$3(v35$1);

var _md = _interopRequireDefault$3(md5Browser);

function _interopRequireDefault$3(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v3 = (0, _v$1.default)('v3', 0x30, _md.default);
var _default$6 = v3;
v3$1.default = _default$6;

var v4$1 = {};

var nativeBrowser = {};

Object.defineProperty(nativeBrowser, "__esModule", {
  value: true
});
nativeBrowser.default = void 0;
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var _default$5 = {
  randomUUID
};
nativeBrowser.default = _default$5;

Object.defineProperty(v4$1, "__esModule", {
  value: true
});
v4$1.default = void 0;

var _native = _interopRequireDefault$2(nativeBrowser);

var _rng = _interopRequireDefault$2(rngBrowser);

var _stringify = stringify$1;

function _interopRequireDefault$2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  if (_native.default.randomUUID && !buf && !options) {
    return _native.default.randomUUID();
  }

  options = options || {};

  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.unsafeStringify)(rnds);
}

var _default$4 = v4;
v4$1.default = _default$4;

var v5$1 = {};

var sha1Browser = {};

Object.defineProperty(sha1Browser, "__esModule", {
  value: true
});
sha1Browser.default = void 0;

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);

  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);

    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }

    M[i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);

    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }

    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

var _default$3 = sha1;
sha1Browser.default = _default$3;

Object.defineProperty(v5$1, "__esModule", {
  value: true
});
v5$1.default = void 0;

var _v = _interopRequireDefault$1(v35$1);

var _sha = _interopRequireDefault$1(sha1Browser);

function _interopRequireDefault$1(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default$2 = v5;
v5$1.default = _default$2;

var nil = {};

Object.defineProperty(nil, "__esModule", {
  value: true
});
nil.default = void 0;
var _default$1 = '00000000-0000-0000-0000-000000000000';
nil.default = _default$1;

var version$1 = {};

Object.defineProperty(version$1, "__esModule", {
  value: true
});
version$1.default = void 0;

var _validate = _interopRequireDefault(validate$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.slice(14, 15), 16);
}

var _default = version;
version$1.default = _default;

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Object.defineProperty(exports, "NIL", {
	  enumerable: true,
	  get: function () {
	    return _nil.default;
	  }
	});
	Object.defineProperty(exports, "parse", {
	  enumerable: true,
	  get: function () {
	    return _parse.default;
	  }
	});
	Object.defineProperty(exports, "stringify", {
	  enumerable: true,
	  get: function () {
	    return _stringify.default;
	  }
	});
	Object.defineProperty(exports, "v1", {
	  enumerable: true,
	  get: function () {
	    return _v.default;
	  }
	});
	Object.defineProperty(exports, "v3", {
	  enumerable: true,
	  get: function () {
	    return _v2.default;
	  }
	});
	Object.defineProperty(exports, "v4", {
	  enumerable: true,
	  get: function () {
	    return _v3.default;
	  }
	});
	Object.defineProperty(exports, "v5", {
	  enumerable: true,
	  get: function () {
	    return _v4.default;
	  }
	});
	Object.defineProperty(exports, "validate", {
	  enumerable: true,
	  get: function () {
	    return _validate.default;
	  }
	});
	Object.defineProperty(exports, "version", {
	  enumerable: true,
	  get: function () {
	    return _version.default;
	  }
	});

	var _v = _interopRequireDefault(v1$1);

	var _v2 = _interopRequireDefault(v3$1);

	var _v3 = _interopRequireDefault(v4$1);

	var _v4 = _interopRequireDefault(v5$1);

	var _nil = _interopRequireDefault(nil);

	var _version = _interopRequireDefault(version$1);

	var _validate = _interopRequireDefault(validate$1);

	var _stringify = _interopRequireDefault(stringify$1);

	var _parse = _interopRequireDefault(parse$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } 
} (dist));

var embedNeuroId = (function (siteId, production) {
    var identityId;
    sessionStorage.setItem('neuroIdOpen', 'true');
    if (!sessionStorage.getItem('identityId')) {
        identityId = dist.v4();
        sessionStorage.setItem('identityId', identityId);
    }
    else {
        identityId = sessionStorage.getItem('identityId');
    }
    // slice 'form_' off the siteId
    var siteIdString = production ? siteId.slice(5) : (siteId + "-test").slice(5);
    // Create script
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "//scripts.neuro-id.com/c/nid-" + siteIdString + ".js";
    script.async = true;
    window.nid = window.nid || function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (window.nid.q = window.nid.q || []).push(args);
    };
    // Add script to document 
    document.head.appendChild(script);
    window.nid('identify', identityId);
    return identityId;
});
var removeNeuroId = function () {
    // creates a check to avoid calling closeSession more than once
    if (sessionStorage.getItem('neuroIdOpen') === "true" && window.nid) {
        window.nid('closeSession');
        sessionStorage.setItem('neuroIdOpen', 'false');
    }
};

var embedSocure = (function (socurePublicToken) { return __awaiter(void 0, void 0, void 0, function () {
    var script, socureDeviceId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                script = document.createElement('script');
                script.src = 'https://scripts.alloy.com/devicer.min.js';
                script.type = 'text/javascript';
                script.async = true;
                script.setAttribute('data-status', 'loading');
                // Add script to document body
                document.head.appendChild(script);
                return [4 /*yield*/, new Promise(function (resolve) {
                        // get device Id from devicer library
                        var getDeviceId = function () {
                            // remove listener after enter the first time
                            script.removeEventListener('load', getDeviceId);
                            var deviceFPOptions = {
                                publicKey: socurePublicToken,
                                userConsent: true,
                                endpoint: 'device.alloy.com',
                                context: 'homepage',
                            };
                            try {
                                // get device ID
                                devicer.run(deviceFPOptions, function (response) {
                                    resolve(response.sessionId);
                                });
                            }
                            catch (err) {
                                resolve('');
                            }
                        };
                        // wait to script to be fully loaded
                        script.addEventListener('load', getDeviceId);
                    })];
            case 1:
                socureDeviceId = _a.sent();
                return [2 /*return*/, socureDeviceId];
        }
    });
}); });

var embedIovation = (function () { return __awaiter(void 0, void 0, void 0, function () {
    var delay, script, firstPartyId, thirdPartyScript, thirdPartyId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                window.IGLOO = window.IGLOO || {
                    loader: {
                        uri_hook: '/iojs/',
                        version: 'general5',
                        subkey: '5FExse+oA1134BhiwCF2EeQ1TfisPJGha4CpVG2nd7E=',
                    }
                };
                delay = function (milliseconds) {
                    return new Promise(function (resolve) { return setTimeout(resolve, milliseconds); });
                };
                script = document.createElement('script');
                script.src = 'https://scripts.alloy.com/iovation.js';
                script.type = 'text/javascript';
                script.async = true;
                script.setAttribute('data-status', 'loading');
                document.head.appendChild(script);
                return [4 /*yield*/, new Promise(function (resolve) {
                        var getFirstPartyId = function () { return __awaiter(void 0, void 0, void 0, function () {
                            var id;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        script.removeEventListener('load', getFirstPartyId);
                                        // TODO: refactor to remove delay
                                        return [4 /*yield*/, delay(500)];
                                    case 1:
                                        // TODO: refactor to remove delay
                                        _b.sent();
                                        try {
                                            id = (_a = window.IGLOO.getBlackbox()) === null || _a === void 0 ? void 0 : _a.blackbox;
                                            resolve(id);
                                        }
                                        catch (err) {
                                            resolve('');
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        script.addEventListener('load', getFirstPartyId);
                    })];
            case 1:
                firstPartyId = _a.sent();
                thirdPartyScript = document.createElement('script');
                thirdPartyScript.src = 'https://ci-mpsnare.iovation.com/snare.js';
                thirdPartyScript.type = 'text/javascript';
                thirdPartyScript.async = true;
                document.head.appendChild(thirdPartyScript);
                return [4 /*yield*/, new Promise(function (resolve) {
                        var getThirdPartyId = function () { return __awaiter(void 0, void 0, void 0, function () {
                            var id;
                            var _a;
                            return __generator(this, function (_b) {
                                thirdPartyScript.removeEventListener('load', getThirdPartyId);
                                try {
                                    id = typeof (ioGetBlackbox) === 'function' ? (_a = ioGetBlackbox()) === null || _a === void 0 ? void 0 : _a.blackbox : null;
                                    resolve(id);
                                }
                                catch (err) {
                                    resolve('');
                                }
                                return [2 /*return*/];
                            });
                        }); };
                        thirdPartyScript.addEventListener('load', getThirdPartyId);
                    })];
            case 2:
                thirdPartyId = _a.sent();
                return [2 /*return*/, thirdPartyId || firstPartyId];
        }
    });
}); });

var FetchError = /** @class */ (function (_super) {
    __extends(FetchError, _super);
    function FetchError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'FetchError';
        _this.message = message || 'An error occurred while fetching the data.';
        return _this;
    }
    return FetchError;
}(Error));

var COMMON_HEADERS = {
    'X-Alloy-Sdk-Platform': 'Web',
    'X-Alloy-Sdk-Version': '1',
    'Content-Type': 'application/json',
};
function isWeb() {
    return typeof document !== 'undefined';
}
function commonFetch(_a) {
    var url = _a.url, method = _a.method, headers = _a.headers, fetchOptions = _a.fetchOptions, data = _a.data;
    return __awaiter(this, void 0, void 0, function () {
        var options, response, error, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    options = __assign({ method: method, headers: __assign(__assign(__assign({}, COMMON_HEADERS), { 'X-Parent-Domain': (isWeb()) ? document.referrer : '' }), headers) }, fetchOptions);
                    if (method && data && ['POST', 'PUT'].includes(method)) {
                        options.body = JSON.stringify(data);
                    }
                    return [4 /*yield*/, fetch("" + config.api + url, options)];
                case 1:
                    response = _c.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    error = new FetchError();
                    _b = error;
                    return [4 /*yield*/, response.json()];
                case 2:
                    _b.info = _c.sent();
                    error.status = response.status;
                    throw error;
                case 3: return [2 /*return*/, response.json()];
            }
        });
    });
}

var fetchAuthInit = function (id) {
    return commonFetch({
        url: 'auth/init',
        method: 'POST',
        fetchOptions: {
            body: JSON.stringify({
                id: id,
            }),
        },
    });
};
var fetchPublicInfo = function (key, accessToken) {
    return commonFetch({
        url: "client/public/" + key,
        headers: {
            'Authorization': "Bearer " + accessToken,
            'alloy-journey-application-sync': 'true'
        },
        method: 'GET',
    });
};
var generateJourneyApplication = function (journeyToken, accessToken, journeyData, production) {
    if (production === void 0) { production = false; }
    return commonFetch({
        url: "v1/journeys/" + journeyToken + "/applications?production=true",
        headers: {
            'Authorization': "Bearer " + accessToken,
            'alloy-journey-application-sync': 'true',
            'alloy-sandbox': production ? 'false' : 'true',
        },
        method: 'POST',
        fetchOptions: {
            body: JSON.stringify(__assign({}, journeyData))
        }
    });
};
var generateEvaluation = function (accessToken, evaluationData, entityToken, externalEntityId, production) {
    if (production === void 0) { production = false; }
    return commonFetch({
        url: "evaluations?production=true",
        headers: __assign(__assign(__assign({ 'Authorization': "Bearer " + accessToken, 'Content-Type': 'application/json' }, (entityToken && { 'Alloy-Entity-Token': entityToken })), (externalEntityId && {
            'Alloy-External-Entity-ID': externalEntityId,
        })), { 'alloy-sandbox': production ? 'false' : 'true' }),
        method: 'POST',
        fetchOptions: {
            body: JSON.stringify(__assign({}, evaluationData))
        }
    });
};

var getEmbeddedDataSources = function (_a) {
    var socureDeviceId = _a.socureDeviceId, neuroIdEnabled = _a.neuroIdEnabled, neuroIdSiteId = _a.neuroIdSiteId, iovationBlackboxId = _a.iovationBlackboxId;
    var sources = {};
    if (socureDeviceId)
        sources.socure_session_id = socureDeviceId;
    if (neuroIdEnabled && neuroIdSiteId) {
        var identityId = sessionStorage.getItem('identityId');
        sources.neuro_user_id = identityId;
        sources.site_id = neuroIdSiteId;
    }
    if (iovationBlackboxId) {
        sources.iovation_blackbox = iovationBlackboxId;
    }
    return sources;
};

var alloyId = 'alloy';
var alloyInitParams = { key: '' };
var alloyCallback;
var iframeSrc;
var createEvaluation = function () { return __awaiter(void 0, void 0, void 0, function () {
    var key, entityToken, evaluationData, production, externalEntityId, socureDeviceId, iovationBlackboxId, neuroIdSiteId, token, neuroIdEnabled, currEntityToken, embeddedDataSources, data, evaluation;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                removeNeuroId();
                key = alloyInitParams.key, entityToken = alloyInitParams.entityToken, evaluationData = alloyInitParams.evaluationData, production = alloyInitParams.production, externalEntityId = alloyInitParams.externalEntityId, socureDeviceId = alloyInitParams.socureDeviceId, iovationBlackboxId = alloyInitParams.iovationBlackboxId, neuroIdSiteId = alloyInitParams.neuroIdSiteId;
                return [4 /*yield*/, fetchAuthInit(key)];
            case 1:
                token = (_a.sent()).access_token;
                neuroIdEnabled = !!neuroIdSiteId;
                currEntityToken = entityToken;
                embeddedDataSources = getEmbeddedDataSources({ socureDeviceId: socureDeviceId, neuroIdEnabled: neuroIdEnabled, neuroIdSiteId: neuroIdSiteId, iovationBlackboxId: iovationBlackboxId });
                data = __assign(__assign({}, evaluationData), embeddedDataSources);
                return [4 /*yield*/, generateEvaluation(token, data, currEntityToken, externalEntityId, production)];
            case 2:
                evaluation = _a.sent();
                return [2 /*return*/, evaluation];
        }
    });
}); };
var createJourneyApplication = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var key, journeyToken, production, socureDeviceId, iovationBlackboxId, neuroIdSiteId, journeyData, token, neuroIdEnabled, embeddedDataSources_1, journeyApplicationResponse;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                removeNeuroId();
                key = alloyInitParams.key, journeyToken = alloyInitParams.journeyToken, production = alloyInitParams.production, socureDeviceId = alloyInitParams.socureDeviceId, iovationBlackboxId = alloyInitParams.iovationBlackboxId, neuroIdSiteId = alloyInitParams.neuroIdSiteId;
                if (!journeyToken) return [3 /*break*/, 3];
                journeyData = data;
                return [4 /*yield*/, fetchAuthInit(key)];
            case 1:
                token = (_b.sent()).access_token;
                neuroIdEnabled = !!neuroIdSiteId;
                embeddedDataSources_1 = getEmbeddedDataSources({ socureDeviceId: socureDeviceId, neuroIdEnabled: neuroIdEnabled, neuroIdSiteId: neuroIdSiteId, iovationBlackboxId: iovationBlackboxId });
                if (Object.keys(embeddedDataSources_1).length >= 1) {
                    journeyData.entities = (_a = data.entities) === null || _a === void 0 ? void 0 : _a.map(function (entity) {
                        var entityWithDeviceId = entity;
                        entityWithDeviceId.data = __assign(__assign({}, entityWithDeviceId.data), embeddedDataSources_1);
                        return entityWithDeviceId;
                    });
                }
                return [4 /*yield*/, generateJourneyApplication(journeyToken, token, journeyData, production)];
            case 2:
                journeyApplicationResponse = _b.sent();
                alloyInitParams.journeyApplicationToken = journeyApplicationResponse.journey_application_token;
                return [2 /*return*/, journeyApplicationResponse];
            case 3: return [2 /*return*/, null];
        }
    });
}); };
var close = function () {
    removeNeuroId();
    var element = document.getElementById(alloyId);
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
};
var fetchClientServices = function (key) { return __awaiter(void 0, void 0, void 0, function () {
    var accessToken, publicInfo, neuroIdEnabled, neuroIdSiteId, isIovationEnabled;
    var _a, _b, _c, _d, _e, _f, _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0: return [4 /*yield*/, fetchAuthInit(key)];
            case 1:
                accessToken = (_h.sent()).access_token;
                return [4 /*yield*/, fetchPublicInfo(key, accessToken)];
            case 2:
                publicInfo = _h.sent();
                neuroIdEnabled = ((_b = (_a = publicInfo) === null || _a === void 0 ? void 0 : _a.services) === null || _b === void 0 ? void 0 : _b.neuro_id) || false;
                neuroIdSiteId = ((_e = (_d = (_c = publicInfo) === null || _c === void 0 ? void 0 : _c.services) === null || _d === void 0 ? void 0 : _d.neuro_id) === null || _e === void 0 ? void 0 : _e.siteId) || '';
                isIovationEnabled = ((_g = (_f = publicInfo) === null || _f === void 0 ? void 0 : _f.services) === null || _g === void 0 ? void 0 : _g.iovation) || false;
                return [2 /*return*/, { neuroIdEnabled: neuroIdEnabled, neuroIdSiteId: neuroIdSiteId, isIovationEnabled: isIovationEnabled }];
        }
    });
}); };
var init = function (_a) {
    var key = _a.key, entityToken = _a.entityToken, externalEntityId = _a.externalEntityId, evaluationData = _a.evaluationData, production = _a.production, maxEvaluationAttempts = _a.maxEvaluationAttempts, documents = _a.documents, selfie = _a.selfie, color = _a.color, customStyle = _a.customStyle, forceMobile = _a.forceMobile, validationPreChecks = _a.validationPreChecks, showHeader = _a.showHeader, journeyApplicationToken = _a.journeyApplicationToken, journeyToken = _a.journeyToken, isLegacy = _a.isLegacy, isNext = _a.isNext, isSingleEntity = _a.isSingleEntity, socurePublicToken = _a.socurePublicToken, isReactNative = _a.isReactNative;
    return __awaiter(void 0, void 0, void 0, function () {
        var socureDeviceId, _b, neuroIdEnabled, neuroIdSiteId, isIovationEnabled, identityId, blackboxId, themeString, componentOverrideString, themeObject, componentOverrideObject;
        var _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    alloyInitParams.key = key;
                    if (entityToken) {
                        alloyInitParams.entityToken = entityToken;
                    }
                    if (externalEntityId) {
                        alloyInitParams.externalEntityId = externalEntityId;
                    }
                    if (production) {
                        alloyInitParams.production = production;
                    }
                    if (maxEvaluationAttempts) {
                        alloyInitParams.maxEvaluationAttempts = maxEvaluationAttempts;
                    }
                    if (documents) {
                        alloyInitParams.documents = documents;
                    }
                    if (selfie) {
                        alloyInitParams.selfie = selfie;
                    }
                    if (forceMobile) {
                        alloyInitParams.forceMobile = forceMobile;
                    }
                    if (showHeader === false) {
                        alloyInitParams.showHeader = showHeader;
                    }
                    if (validationPreChecks) {
                        alloyInitParams.validationPreChecks = validationPreChecks;
                    }
                    if (journeyApplicationToken) {
                        alloyInitParams.journeyApplicationToken = journeyApplicationToken;
                    }
                    if (journeyToken) {
                        alloyInitParams.journeyToken = journeyToken;
                    }
                    if (isLegacy) {
                        alloyInitParams.isLegacy = isLegacy;
                    }
                    if (isNext) {
                        alloyInitParams.isNext = isNext;
                    }
                    if (isSingleEntity) {
                        alloyInitParams.isSingleEntity = isSingleEntity;
                    }
                    if (!socurePublicToken) return [3 /*break*/, 2];
                    alloyInitParams.socurePublicToken = socurePublicToken;
                    return [4 /*yield*/, embedSocure(socurePublicToken)];
                case 1:
                    socureDeviceId = _e.sent();
                    alloyInitParams.socureDeviceId = socureDeviceId;
                    _e.label = 2;
                case 2: return [4 /*yield*/, fetchClientServices(key)];
                case 3:
                    _b = _e.sent(), neuroIdEnabled = _b.neuroIdEnabled, neuroIdSiteId = _b.neuroIdSiteId, isIovationEnabled = _b.isIovationEnabled;
                    if (neuroIdEnabled && neuroIdSiteId) {
                        alloyInitParams.neuroIdSiteId = neuroIdSiteId;
                        identityId = embedNeuroId(neuroIdSiteId, production || false);
                        // neuroUserId is alloy's internal mapping for identityId
                        alloyInitParams.neuroUserId = identityId;
                    }
                    if (!isIovationEnabled) return [3 /*break*/, 5];
                    return [4 /*yield*/, embedIovation()];
                case 4:
                    blackboxId = _e.sent();
                    alloyInitParams.iovationBlackboxId = blackboxId;
                    _e.label = 5;
                case 5:
                    if (isReactNative) {
                        alloyInitParams.isReactNative = isReactNative;
                    }
                    themeString = JSON.stringify((_c = customStyle) === null || _c === void 0 ? void 0 : _c.theme);
                    componentOverrideString = JSON.stringify((_d = customStyle) === null || _d === void 0 ? void 0 : _d.componentOverride);
                    themeObject = {
                        theme: themeString,
                    };
                    componentOverrideObject = {
                        componentOverride: componentOverrideString,
                    };
                    iframeSrc = "" + queryString.stringify(alloyInitParams) + (evaluationData ? "&" + queryString.stringify(evaluationData) : '') + (color ? "&" + queryString.stringify(color) : '') + (themeObject.theme ? "&" + queryString.stringify(themeObject) : '') + (componentOverrideObject.componentOverride
                        ? "&" + queryString.stringify(componentOverrideObject)
                        : '');
                    if (evaluationData) {
                        alloyInitParams.evaluationData = evaluationData;
                    }
                    return [2 /*return*/, alloyInitParams];
            }
        });
    });
};
var getPublicUrl = function () {
    var publicUrl = config.iframe + "?" + iframeSrc;
    if (alloyInitParams.isNext) {
        publicUrl = config.codeless + "?" + iframeSrc;
    }
    if (alloyInitParams.journeyApplicationToken && !publicUrl.includes('journeyApplicationToken')) {
        publicUrl = config.codeless + "?" + iframeSrc + "&journeyApplicationToken=" + alloyInitParams.journeyApplicationToken;
    }
    return publicUrl;
};
var open = function (cb, anchorElement) {
    removeNeuroId();
    var eventListener = function (event) {
        window.removeEventListener('message', eventListener);
        var isAlloyUrl = event.origin === 'https://docv-iframe.alloy.co' ||
            event.origin === 'https://alloysdk.alloy.co' ||
            event.origin === 'https://alloysdk-qa.alloy.co';
        if (!isAlloyUrl || !alloyCallback) {
            return;
        }
        alloyCallback(event.data);
        close();
    };
    window.addEventListener('message', eventListener);
    alloyCallback = cb;
    if (!alloyInitParams.key) {
        // eslint-disable-next-line no-console
        console.error('The Alloy framework has not been initialized. You are missing the sdk key in your initialize parameters.');
    }
    else {
        var alloyHeadStyles = document.getElementById('alloy-iframe-style');
        if (!alloyHeadStyles) {
            // This is so that legacy DocV isn't impacted by our height increase.
            var iframeHeight = alloyInitParams.isNext ? '720px' : '37.5rem';
            document.head.insertAdjacentHTML('beforeend', "<style id=\"alloy-iframe-style\">\n        @keyframes fade {\n          0%, 40% { opacity: 0 }\n          80% { opacity: 1 }\n        }\n        @keyframes slideopen {\n          from {\n            margin-top: 100%;\n          }\n        \n          to {\n            margin-top: 0%;\n          }\n        }\n        .alloy-container {\n          height: 100%;\n          width: 100%;\n          position: fixed;\n          top: 0;\n          transform: none;\n          left: 0;\n          z-index: 2;\n        }\n        @media (min-width: 768px) {\n          .alloy-container {\n            animation: slideopen 1s linear;\n            height: " + iframeHeight + ";\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            transform: translate(-50%, -50%);\n            width: 50rem;\n          }\n        }\n        .alloy-iframe {\n            animation: fade 1.5s linear;\n            border: 0;\n            opacity: 1;\n            height: 100%;\n            max-height: 100%;\n            width: 100%;\n        }\n        @media (min-width: 768px) {\n            .alloy-iframe {\n              border-radius: 1rem;\n              box-shadow: 0 10px 20px 0 rgba(63,83,92,0.3);\n              overflow: scroll;\n            }\n          }</style>");
        }
        var container = document.getElementById(alloyId);
        if (!container) {
            container = document.createElement('div');
            container.className = 'alloy-container';
            var alloyIframe = document.createElement('iframe');
            alloyIframe.id = 'alloyIframe';
            alloyIframe.src = getPublicUrl();
            alloyIframe.allow = 'camera';
            alloyIframe.className = 'alloy-iframe';
            container.id = alloyId;
            document.body.appendChild(container);
            container.appendChild(alloyIframe);
            if (anchorElement && document.getElementById('alloy')) {
                var idAnchor = document.getElementById(anchorElement);
                var classAnchor = document.getElementsByClassName(anchorElement);
                if (idAnchor) {
                    idAnchor.insertAdjacentElement('afterbegin', document.getElementById('alloy'));
                }
                else if (classAnchor[0]) {
                    classAnchor[0].insertAdjacentElement('afterbegin', document.getElementById('alloy'));
                }
            }
        }
    }
};
var alloy = {
    init: init,
    open: open,
    close: close,
    createJourneyApplication: createJourneyApplication,
    createEvaluation: createEvaluation,
    getPublicUrl: getPublicUrl,
};


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AlloyRender.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AlloyRender.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alloyidentity_web_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @alloyidentity/web-sdk */ "./node_modules/@alloyidentity/web-sdk/dist/index.es.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      myName: "",
      alloyInitParams: {
        key: "a7fcdfe0-7226-4be9-a8bf-6c0fdb497c9b",
        journeyApplicationToken: "JA-iYSmwNe7djplfNNcNNPH",
        production: false,
        journeyToken: "J-zT8lr6acygRQmePjBA5",
        isReactNative: false,
        isNext: false,
        customStyle: {
          theme: {
            primaryColor: "#F46A35",
            backgroundColor: "#ffffff",
            textColor: "#121212",
            borderRadius: "10px"
          }
        }
      }
    };
  },
  mounted: function mounted() {
    _alloyidentity_web_sdk__WEBPACK_IMPORTED_MODULE_0__["default"].init(this.alloyInitParams);
  },
  methods: {
    onInput: function onInput(value) {
      this.$emit("input", value);
    },
    callback: function callback(data) {
      console.log(data);
    },
    openAlloy: function openAlloy() {
      _alloyidentity_web_sdk__WEBPACK_IMPORTED_MODULE_0__["default"].open(this.callback, "alloy-box");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AlloyRender.vue?vue&type=template&id=53b39f26&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AlloyRender.vue?vue&type=template&id=53b39f26& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b-button", {
    attrs: {
      variant: "info"
    },
    on: {
      click: function click($event) {
        return _vm.openAlloy();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-user-check"
  }), _vm._v(" Alloy Verification\n  ")]), _vm._v(" "), _c("div", {
    attrs: {
      id: "alloy-box"
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/AlloyRender.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/AlloyRender.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlloyRender_vue_vue_type_template_id_53b39f26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlloyRender.vue?vue&type=template&id=53b39f26& */ "./resources/js/components/AlloyRender.vue?vue&type=template&id=53b39f26&");
/* harmony import */ var _AlloyRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlloyRender.vue?vue&type=script&lang=js& */ "./resources/js/components/AlloyRender.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlloyRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlloyRender_vue_vue_type_template_id_53b39f26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlloyRender_vue_vue_type_template_id_53b39f26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AlloyRender.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AlloyRender.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/AlloyRender.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlloyRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AlloyRender.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AlloyRender.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlloyRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AlloyRender.vue?vue&type=template&id=53b39f26&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/AlloyRender.vue?vue&type=template&id=53b39f26& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AlloyRender_vue_vue_type_template_id_53b39f26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./AlloyRender.vue?vue&type=template&id=53b39f26& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AlloyRender.vue?vue&type=template&id=53b39f26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AlloyRender_vue_vue_type_template_id_53b39f26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AlloyRender_vue_vue_type_template_id_53b39f26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/screen-builder-form-components.js":
/*!********************************************************!*\
  !*** ./resources/js/screen-builder-form-components.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AlloyRender_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AlloyRender.vue */ "./resources/js/components/AlloyRender.vue");

// import AlloyInspector from "./components/AlloyInspector.vue";

Vue.component("AlloyRender", _components_AlloyRender_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
// Vue.component("AlloyInspector", AlloyInspector);

window.ProcessMaker.EventBus.$on("screen-builder-init", function (manager) {
  var initialControls = [];
  initialControls.push({
    editorComponent: _components_AlloyRender_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    editorBinding: "AlloyRender",
    rendererComponent: _components_AlloyRender_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    rendererBinding: "AlloyRender",
    control: {
      label: "Alloy Verification",
      component: "AlloyRender",
      "editor-component": "AlloyRender",
      "editor-control": "AlloyRender",
      config: {
        label: "Alloy Render",
        name: "new_alloy_component",
        validation: "",
        fontSize: "1em",
        icon: "fas fa-id-card",
        helper: null,
        apiToken: null
      },
      inspector: [{
        type: "FormInput",
        field: "name",
        config: {
          label: "Variable Name",
          name: "Variable Name",
          helper: "A variable name is a symbolic name to reference information.",
          validation: "regex:/^(?:[A-Z_.a-z])(?:[0-9A-Z_.a-z])*$/|required"
        }
      }]
    }
  });
  for (var i = 0; i < initialControls.length; i++) {
    manager.addControl(initialControls[i].control, initialControls[i].rendererComponent, initialControls[i].rendererBinding, initialControls[i].builderComponent, initialControls[i].builderBinding);
  }
});

/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi ./resources/js/screen-builder-form-components.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/processmaker/packages/package-alloy/resources/js/screen-builder-form-components.js */"./resources/js/screen-builder-form-components.js");


/***/ })

/******/ });