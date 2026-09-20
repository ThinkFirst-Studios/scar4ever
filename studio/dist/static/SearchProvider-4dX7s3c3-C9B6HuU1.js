import { r as __toESM, t as __commonJSMin } from "./rolldown-runtime-DC62tzP2.js";
import { Pt as SearchContext, r as AppIdCacheContext } from "./_singletons-Wcl3GHa3.js";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-DwkYz3jI.js";
import { t as require_compiler_runtime } from "./compiler-runtime-DyJqaEVl.js";
import { $r as intersection, As as useSchema, Bc as baseKeys, Cc as omit, Cl as useWorkspace, Cr as useSelector, Cs as useGrantsStore, Do as TextWithTone, Ds as useProjectStore, G as PreviewCard$1, Gc as isArray, Hc as isTypedArray, Hr as useIntentLink, Kc as isArguments, Mn as useDocumentPresence, Oc as difference, Ol as defineEvent, Os as useRenderingContextStore, Qi as es2015_default, Rc as _getTag_default, Sl as useSource, So as useCurrentUser, Sr as useActorRef, Ta as SanityDefaultPreview, Tc as dequal, To as Translate, Ts as useKeyValueStore, Uc as isBuffer, Vc as isPrototype, Vt as getPreviewStateObservable, Xl as fromObservable, Yc as useSyncObservable, Zr as Code, _ as DocumentVersionsStatusIndicator, bc as enabled, bt as defineSearchMachine, el as AnimatePresence, eo as useActiveReleases, fc as startCase, g as DocumentVersionsStatus, gc as partition, gt as createSearch, ha as truncateString, jc as uniq, la as Popover$1, m as DocumentPreviewPresence, mo as useValuePreview, os as isRecord$2, qc as useObservable, qn as useSearchMaxFieldDepth, rl as useTelemetry, so as useDocumentVersions, su as startWith, v as EMPTY_ARRAY$10, vl as DEFAULT_STUDIO_CLIENT_OPTIONS, xl as useClient, xn as supportsTouch, xs as useDocumentPreviewStore, yc as createDebug, zc as isArrayLike } from "./PerspectiveProvider-G--c064I-D35SA-7v.js";
import { L as useTranslation$1, O as motion, S as Flex, a as MenuItem$1, b as Box, d as MenuDivider, i as MenuButton$1, l as Menu, n as ErrorBoundary$1, s as Tooltip$1, t as Button$1 } from "./Tab-Dx6d0Ug4-CIXEJQPo.js";
import { t as Subject } from "./Subject-Bs90HcI7.js";
import { J as merge, L as tap, it as map, ut as of } from "./clientStore-BI4D8HhJ-DqPdDJ7L.js";
import { i as getPublishedId } from "./resolveEditInfo-Cz-smq3a-1440fgSt.js";
import { O as isObjectSchemaType } from "./lib-Dl0zCjgC.js";
import { A as Inline, E as studioTheme, Nt as ft, Pt as gt, Q as TextInput, Tt as useMediaIndex, Ut as require_react_dom, Vt as rem, W as useClickOutsideEvent, dt as Stack, ft as Text, gt as Card, i as Badge, j as useGlobalKeyDown, jt as Et, lt as Button, q as Portal, s as Container, wt as useLayer } from "./dist-BUF2sfAx.js";
import { a as isNonNullable, c as removeDupes } from "./draftUtils-D3HJGQaW-B76iRRQL.js";
import { t as WarningOutlineIcon } from "./WarningOutline-CJ9swBlz.js";
import { t as SpinnerIcon } from "./Spinner-nstYs55P.js";
import { t as CloseIcon } from "./Close-DcVQ9bsv.js";
import { t as ChevronDownIcon } from "./ChevronDown-NPV7w9Tk.js";
import { t as CheckmarkIcon } from "./Checkmark-DWv_Dk-l.js";
import { t as ChevronRightIcon } from "./ChevronRight-QOUAT7Lu.js";
import { t as ClockIcon } from "./Clock-CiTooSm2.js";
import { t as SearchIcon } from "./Search-lu_WqsQr.js";
import { t as ErrorOutlineIcon } from "./ErrorOutline-D80hknqi.js";
import { t as ArrowLeftIcon } from "./ArrowLeft-B3PZIaSm.js";
import { t as TrashIcon } from "./Trash-DE9lwjrS.js";
import { t as UnknownIcon } from "./Unknown-B4SfVv9v.js";
import { t as AddIcon } from "./Add-Cn13w4-d.js";
import { t as CommandList } from "./CommandList-DBHgtV_A-DEM2A9cX.js";
import { t as SortIcon } from "./Sort-DOO4-prN.js";
import { t as ControlsIcon } from "./Controls-CBgoQdmE.js";
//#region node_modules/is-hotkey-esm/dist/index.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_compiler_runtime = require_compiler_runtime();
var import_jsx_runtime = require_jsx_runtime();
var IS_MAC = typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
var MODIFIERS = {
	alt: "altKey",
	control: "ctrlKey",
	meta: "metaKey",
	shift: "shiftKey"
};
var ALIASES = {
	add: "+",
	break: "pause",
	cmd: "meta",
	command: "meta",
	ctl: "control",
	ctrl: "control",
	del: "delete",
	down: "arrowdown",
	esc: "escape",
	ins: "insert",
	left: "arrowleft",
	mod: IS_MAC ? "meta" : "control",
	opt: "alt",
	option: "alt",
	return: "enter",
	right: "arrowright",
	space: " ",
	spacebar: " ",
	up: "arrowup",
	win: "meta",
	windows: "meta"
};
var CODES = {
	backspace: 8,
	tab: 9,
	enter: 13,
	shift: 16,
	control: 17,
	alt: 18,
	pause: 19,
	capslock: 20,
	escape: 27,
	" ": 32,
	pageup: 33,
	pagedown: 34,
	end: 35,
	home: 36,
	arrowleft: 37,
	arrowup: 38,
	arrowright: 39,
	arrowdown: 40,
	insert: 45,
	delete: 46,
	meta: 91,
	numlock: 144,
	scrolllock: 145,
	";": 186,
	"=": 187,
	",": 188,
	"-": 189,
	".": 190,
	"/": 191,
	"`": 192,
	"[": 219,
	"\\": 220,
	"]": 221,
	"'": 222
};
for (var f = 1; f < 20; f++) CODES["f" + f] = 111 + f;
function isHotkey(hotkey, options, event) {
	options && !("byKey" in options) && (event = options, options = null), Array.isArray(hotkey) || (hotkey = [hotkey]);
	const array = hotkey.map((string) => parseHotkey(string, options)), check = (e) => array.some((object) => compareHotkey(object, e));
	return event == null ? check : check(event);
}
function parseHotkey(hotkey, options) {
	const byKey = options && options.byKey, ret = {};
	hotkey = hotkey.replace("++", "+add");
	const values = hotkey.split("+"), { length } = values;
	for (const k in MODIFIERS) ret[MODIFIERS[k]] = !1;
	for (let value of values) {
		const optional = value.endsWith("?") && value.length > 1;
		optional && (value = value.slice(0, -1));
		const name = toKeyName(value), modifier = MODIFIERS[name];
		if (value.length > 1 && !modifier && !ALIASES[value] && !CODES[name]) throw new TypeError(`Unknown modifier: "${value}"`);
		(length === 1 || !modifier) && (byKey ? ret.key = name : ret.which = toKeyCode(value)), modifier && (ret[modifier] = optional ? null : !0);
	}
	return ret;
}
function compareHotkey(object, event) {
	for (const key in object) {
		const expected = object[key];
		let actual;
		if (expected != null && (key === "key" && event.key != null ? actual = event.key.toLowerCase() : key === "which" ? actual = expected === 91 && event.which === 93 ? 91 : event.which : actual = event[key], !(actual == null && expected === !1) && actual !== expected)) return !1;
	}
	return !0;
}
function toKeyCode(name) {
	return name = toKeyName(name), CODES[name] || name.toUpperCase().charCodeAt(0);
}
function toKeyName(name) {
	return name = name.toLowerCase(), name = ALIASES[name] || name, name;
}
//#endregion
//#region node_modules/lodash-es/isEmpty.js
/** `Object#toString` result references. */
var mapTag = "[object Map]";
var setTag = "[object Set]";
/** Used to check objects for own properties. */
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
* Checks if `value` is an empty object, collection, map, or set.
*
* Objects are considered empty if they have no own enumerable string keyed
* properties.
*
* Array-like values such as `arguments` objects, arrays, buffers, strings, or
* jQuery-like collections are considered empty if they have a `length` of `0`.
* Similarly, maps and sets are considered empty if they have a `size` of `0`.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is empty, else `false`.
* @example
*
* _.isEmpty(null);
* // => true
*
* _.isEmpty(true);
* // => true
*
* _.isEmpty(1);
* // => true
*
* _.isEmpty([1, 2, 3]);
* // => false
*
* _.isEmpty({ 'a': 1 });
* // => false
*/
function isEmpty(value) {
	if (value == null) return true;
	if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) return !value.length;
	var tag = _getTag_default(value);
	if (tag == mapTag || tag == setTag) return !value.size;
	if (isPrototype(value)) return !baseKeys(value).length;
	for (var key in value) if (hasOwnProperty.call(value, key)) return false;
	return true;
}
//#endregion
//#region node_modules/react-dom/cjs/react-dom-server-legacy.browser.production.js
/**
* @license React
* react-dom-server-legacy.browser.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_server_legacy_browser_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	var ReactDOM = require_react_dom();
	function formatProdErrorMessage(code) {
		var url = "https://react.dev/errors/" + code;
		if (1 < arguments.length) {
			url += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var i = 2; i < arguments.length; i++) url += "&args[]=" + encodeURIComponent(arguments[i]);
		}
		return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_PORTAL_TYPE = Symbol.for("react.portal");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
	var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
	var REACT_CONTEXT_TYPE = Symbol.for("react.context");
	var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
	var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
	var REACT_MEMO_TYPE = Symbol.for("react.memo");
	var REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var REACT_SCOPE_TYPE = Symbol.for("react.scope");
	var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
	var REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden");
	var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
	var REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition");
	var REACT_RECOVERABLE_TYPE = Symbol.for("react.recoverable");
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var REACT_OPTIMISTIC_KEY = Symbol.for("react.optimistic_key");
	var isArrayImpl = Array.isArray;
	function murmurhash3_32_gc(key, seed) {
		var remainder = key.length & 3;
		var bytes = key.length - remainder;
		var h1 = seed;
		for (seed = 0; seed < bytes;) {
			var k1 = key.charCodeAt(seed) & 255 | (key.charCodeAt(++seed) & 255) << 8 | (key.charCodeAt(++seed) & 255) << 16 | (key.charCodeAt(++seed) & 255) << 24;
			++seed;
			k1 = 3432918353 * (k1 & 65535) + ((3432918353 * (k1 >>> 16) & 65535) << 16) & 4294967295;
			k1 = k1 << 15 | k1 >>> 17;
			k1 = 461845907 * (k1 & 65535) + ((461845907 * (k1 >>> 16) & 65535) << 16) & 4294967295;
			h1 ^= k1;
			h1 = h1 << 13 | h1 >>> 19;
			h1 = 5 * (h1 & 65535) + ((5 * (h1 >>> 16) & 65535) << 16) & 4294967295;
			h1 = (h1 & 65535) + 27492 + (((h1 >>> 16) + 58964 & 65535) << 16);
		}
		k1 = 0;
		switch (remainder) {
			case 3: k1 ^= (key.charCodeAt(seed + 2) & 255) << 16;
			case 2: k1 ^= (key.charCodeAt(seed + 1) & 255) << 8;
			case 1: k1 ^= key.charCodeAt(seed) & 255, k1 = 3432918353 * (k1 & 65535) + ((3432918353 * (k1 >>> 16) & 65535) << 16) & 4294967295, k1 = k1 << 15 | k1 >>> 17, h1 ^= 461845907 * (k1 & 65535) + ((461845907 * (k1 >>> 16) & 65535) << 16) & 4294967295;
		}
		h1 ^= key.length;
		h1 ^= h1 >>> 16;
		h1 = 2246822507 * (h1 & 65535) + ((2246822507 * (h1 >>> 16) & 65535) << 16) & 4294967295;
		h1 ^= h1 >>> 13;
		h1 = 3266489909 * (h1 & 65535) + ((3266489909 * (h1 >>> 16) & 65535) << 16) & 4294967295;
		return (h1 ^ h1 >>> 16) >>> 0;
	}
	var assign = Object.assign;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var VALID_ATTRIBUTE_NAME_REGEX = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
	var illegalAttributeNameCache = {};
	var validatedAttributeNameCache = {};
	function isAttributeNameSafe(attributeName) {
		if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) return !0;
		if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return !1;
		if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) return validatedAttributeNameCache[attributeName] = !0;
		illegalAttributeNameCache[attributeName] = !0;
		return !1;
	}
	var unitlessNumbers = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	var aliases = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["maskType", "mask-type"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]);
	var matchHtmlRegExp = /["'&<>]/;
	function escapeTextForBrowser(text) {
		if ("boolean" === typeof text || "number" === typeof text || "bigint" === typeof text) return "" + text;
		text = "" + text;
		var match = matchHtmlRegExp.exec(text);
		if (match) {
			var html = "", index, lastIndex = 0;
			for (index = match.index; index < text.length; index++) {
				switch (text.charCodeAt(index)) {
					case 34:
						match = "&quot;";
						break;
					case 38:
						match = "&amp;";
						break;
					case 39:
						match = "&#x27;";
						break;
					case 60:
						match = "&lt;";
						break;
					case 62:
						match = "&gt;";
						break;
					default: continue;
				}
				lastIndex !== index && (html += text.slice(lastIndex, index));
				lastIndex = index + 1;
				html += match;
			}
			text = lastIndex !== index ? html + text.slice(lastIndex, index) : html;
		}
		return text;
	}
	var uppercasePattern = /([A-Z])/g;
	var msPattern = /^ms-/;
	var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function sanitizeURL(url) {
		return isJavaScriptProtocol.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
	}
	var ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	var ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	var sharedNotPendingObject = {
		pending: !1,
		data: null,
		method: null,
		action: null
	};
	var previousDispatcher = ReactDOMSharedInternals.d;
	ReactDOMSharedInternals.d = {
		f: previousDispatcher.f,
		r: previousDispatcher.r,
		D: prefetchDNS,
		C: preconnect,
		L: preload,
		m: preloadModule,
		X: preinitScript,
		S: preinitStyle,
		M: preinitModuleScript
	};
	var PRELOAD_NO_CREDS = [];
	var currentlyFlushingRenderState = null;
	var scriptRegex = /(<\/|<)(s)(cript)/gi;
	function scriptReplacer(match, prefix, s, suffix) {
		return "" + prefix + ("s" === s ? "\\u0073" : "\\u0053") + suffix;
	}
	function createResumableState(identifierPrefix, externalRuntimeConfig, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
		return {
			idPrefix: void 0 === identifierPrefix ? "" : identifierPrefix,
			nextFormID: 0,
			streamingFormat: 0,
			bootstrapScriptContent,
			bootstrapScripts,
			bootstrapModules,
			instructions: 0,
			hasBody: !1,
			hasHtml: !1,
			unknownResources: {},
			dnsResources: {},
			connectResources: {
				default: {},
				anonymous: {},
				credentials: {}
			},
			imageResources: {},
			styleResources: {},
			scriptResources: {},
			moduleUnknownResources: {},
			moduleScriptResources: {}
		};
	}
	function createFormatContext(insertionMode, selectedValue, tagScope, viewTransition) {
		return {
			insertionMode,
			selectedValue,
			tagScope,
			viewTransition
		};
	}
	function getChildFormatContext(parentContext, type, props) {
		var subtreeScope = parentContext.tagScope & -25;
		switch (type) {
			case "noscript": return createFormatContext(2, null, subtreeScope | 1, null);
			case "select": return createFormatContext(2, null != props.value ? props.value : props.defaultValue, subtreeScope, null);
			case "svg": return createFormatContext(4, null, subtreeScope, null);
			case "picture": return createFormatContext(2, null, subtreeScope | 2, null);
			case "math": return createFormatContext(5, null, subtreeScope, null);
			case "foreignObject": return createFormatContext(2, null, subtreeScope, null);
			case "table": return createFormatContext(6, null, subtreeScope, null);
			case "thead":
			case "tbody":
			case "tfoot": return createFormatContext(7, null, subtreeScope, null);
			case "colgroup": return createFormatContext(9, null, subtreeScope, null);
			case "tr": return createFormatContext(8, null, subtreeScope, null);
			case "head":
				if (2 > parentContext.insertionMode) return createFormatContext(3, null, subtreeScope, null);
				break;
			case "html": if (0 === parentContext.insertionMode) return createFormatContext(1, null, subtreeScope, null);
		}
		return 6 <= parentContext.insertionMode || 2 > parentContext.insertionMode ? createFormatContext(2, null, subtreeScope, null) : null !== parentContext.viewTransition || parentContext.tagScope !== subtreeScope ? createFormatContext(parentContext.insertionMode, parentContext.selectedValue, subtreeScope, null) : parentContext;
	}
	function getSuspenseViewTransition(parentViewTransition) {
		return null === parentViewTransition ? null : {
			update: parentViewTransition.update,
			enter: "none",
			exit: "none",
			share: parentViewTransition.update,
			parentEnter: "none",
			parentExit: "none",
			name: parentViewTransition.autoName,
			autoName: parentViewTransition.autoName,
			nameIdx: 0
		};
	}
	function getSuspenseFallbackFormatContext(resumableState, parentContext) {
		parentContext.tagScope & 32 && (resumableState.instructions |= 128);
		return createFormatContext(parentContext.insertionMode, parentContext.selectedValue, parentContext.tagScope | 12, getSuspenseViewTransition(parentContext.viewTransition));
	}
	function getSuspenseContentFormatContext(resumableState, parentContext) {
		resumableState = getSuspenseViewTransition(parentContext.viewTransition);
		var subtreeScope = parentContext.tagScope | 16;
		null !== resumableState && "none" !== resumableState.share && (subtreeScope |= 64);
		return createFormatContext(parentContext.insertionMode, parentContext.selectedValue, subtreeScope, resumableState);
	}
	function makeId(resumableState, treeId, localId) {
		resumableState = "_" + resumableState.idPrefix + "R_" + treeId;
		0 < localId && (resumableState += "H" + localId.toString(32));
		return resumableState + "_";
	}
	function pushViewTransitionAttributes(target, formatContext) {
		formatContext = formatContext.viewTransition;
		null !== formatContext && ("auto" !== formatContext.name && (pushStringAttribute(target, "vt-name", 0 === formatContext.nameIdx ? formatContext.name : formatContext.name + "_" + formatContext.nameIdx), formatContext.nameIdx++), pushStringAttribute(target, "vt-update", formatContext.update), "none" !== formatContext.enter && pushStringAttribute(target, "vt-enter", formatContext.enter), "none" !== formatContext.exit && pushStringAttribute(target, "vt-exit", formatContext.exit), "none" !== formatContext.share && pushStringAttribute(target, "vt-share", formatContext.share));
	}
	var styleNameCache = /* @__PURE__ */ new Map();
	function pushStyleAttribute(target, style) {
		if ("object" !== typeof style) throw Error(formatProdErrorMessage(62));
		var isFirst = !0, styleName;
		for (styleName in style) if (hasOwnProperty.call(style, styleName)) {
			var styleValue = style[styleName];
			if (null != styleValue && "boolean" !== typeof styleValue && "" !== styleValue) {
				if (0 === styleName.indexOf("--")) {
					var nameChunk = escapeTextForBrowser(styleName);
					styleValue = escapeTextForBrowser(("" + styleValue).trim());
				} else nameChunk = styleNameCache.get(styleName), void 0 === nameChunk && (nameChunk = escapeTextForBrowser(styleName.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-")), styleNameCache.set(styleName, nameChunk)), styleValue = "number" === typeof styleValue ? 0 === styleValue || unitlessNumbers.has(styleName) ? "" + styleValue : styleValue + "px" : escapeTextForBrowser(("" + styleValue).trim());
				isFirst ? (isFirst = !1, target.push(" style=\"", nameChunk, ":", styleValue)) : target.push(";", nameChunk, ":", styleValue);
			}
		}
		isFirst || target.push("\"");
	}
	function pushBooleanAttribute(target, name, value) {
		value && "function" !== typeof value && "symbol" !== typeof value && target.push(" ", name, "=\"\"");
	}
	function pushStringAttribute(target, name, value) {
		"function" !== typeof value && "symbol" !== typeof value && "boolean" !== typeof value && target.push(" ", name, "=\"", escapeTextForBrowser(value), "\"");
	}
	var actionJavaScriptURL = escapeTextForBrowser("javascript:throw new Error('React form unexpectedly submitted.')");
	function pushAdditionalFormField(value, key) {
		this.push("<input type=\"hidden\"");
		validateAdditionalFormField(value);
		pushStringAttribute(this, "name", key);
		pushStringAttribute(this, "value", value);
		this.push("/>");
	}
	function validateAdditionalFormField(value) {
		if ("string" !== typeof value) throw Error(formatProdErrorMessage(480));
	}
	function getCustomFormFields(resumableState, formAction) {
		if ("function" === typeof formAction.$$FORM_ACTION) {
			var id = resumableState.nextFormID++;
			resumableState = resumableState.idPrefix + id;
			try {
				var customFields = formAction.$$FORM_ACTION(resumableState);
				if (customFields) customFields.data?.forEach(validateAdditionalFormField);
				return customFields;
			} catch (x) {
				if ("object" === typeof x && null !== x && "function" === typeof x.then) throw x;
			}
		}
		return null;
	}
	function pushFormActionAttribute(target, resumableState, renderState, formAction, formEncType, formMethod, formTarget, name) {
		var formData = null;
		if ("function" === typeof formAction) {
			var customFields = getCustomFormFields(resumableState, formAction);
			null !== customFields ? (name = customFields.name, formAction = customFields.action || "", formEncType = customFields.encType, formMethod = customFields.method, formTarget = customFields.target, formData = customFields.data) : (target.push(" ", "formAction", "=\"", actionJavaScriptURL, "\""), formTarget = formMethod = formEncType = formAction = name = null, injectFormReplayingRuntime(resumableState, renderState));
		}
		null != name && pushAttribute(target, "name", name);
		null != formAction && pushAttribute(target, "formAction", formAction);
		null != formEncType && pushAttribute(target, "formEncType", formEncType);
		null != formMethod && pushAttribute(target, "formMethod", formMethod);
		null != formTarget && pushAttribute(target, "formTarget", formTarget);
		return formData;
	}
	function pushAttribute(target, name, value) {
		switch (name) {
			case "className":
				pushStringAttribute(target, "class", value);
				break;
			case "tabIndex":
				pushStringAttribute(target, "tabindex", value);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				pushStringAttribute(target, name, value);
				break;
			case "style":
				pushStyleAttribute(target, value);
				break;
			case "src":
			case "href": if ("" === value) break;
			case "action":
			case "formAction":
				if (null == value || "function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) break;
				value = sanitizeURL("" + value);
				target.push(" ", name, "=\"", escapeTextForBrowser(value), "\"");
				break;
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "ref": break;
			case "autoFocus":
			case "multiple":
			case "muted":
				pushBooleanAttribute(target, name.toLowerCase(), value);
				break;
			case "xlinkHref":
				if ("function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) break;
				value = sanitizeURL("" + value);
				target.push(" ", "xlink:href", "=\"", escapeTextForBrowser(value), "\"");
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				"function" !== typeof value && "symbol" !== typeof value && target.push(" ", name, "=\"", escapeTextForBrowser(value), "\"");
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "credentialless":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				value && "function" !== typeof value && "symbol" !== typeof value && target.push(" ", name, "=\"\"");
				break;
			case "capture":
			case "download":
				!0 === value ? target.push(" ", name, "=\"\"") : !1 !== value && "function" !== typeof value && "symbol" !== typeof value && target.push(" ", name, "=\"", escapeTextForBrowser(value), "\"");
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				"function" !== typeof value && "symbol" !== typeof value && !isNaN(value) && 1 <= value && target.push(" ", name, "=\"", escapeTextForBrowser(value), "\"");
				break;
			case "rowSpan":
			case "start":
				"function" === typeof value || "symbol" === typeof value || isNaN(value) || target.push(" ", name, "=\"", escapeTextForBrowser(value), "\"");
				break;
			case "xlinkActuate":
				pushStringAttribute(target, "xlink:actuate", value);
				break;
			case "xlinkArcrole":
				pushStringAttribute(target, "xlink:arcrole", value);
				break;
			case "xlinkRole":
				pushStringAttribute(target, "xlink:role", value);
				break;
			case "xlinkShow":
				pushStringAttribute(target, "xlink:show", value);
				break;
			case "xlinkTitle":
				pushStringAttribute(target, "xlink:title", value);
				break;
			case "xlinkType":
				pushStringAttribute(target, "xlink:type", value);
				break;
			case "xmlBase":
				pushStringAttribute(target, "xml:base", value);
				break;
			case "xmlLang":
				pushStringAttribute(target, "xml:lang", value);
				break;
			case "xmlSpace":
				pushStringAttribute(target, "xml:space", value);
				break;
			default: if (!(2 < name.length) || "o" !== name[0] && "O" !== name[0] || "n" !== name[1] && "N" !== name[1]) {
				if (name = aliases.get(name) || name, isAttributeNameSafe(name)) {
					switch (typeof value) {
						case "function":
						case "symbol": return;
						case "boolean":
							var prefix$8 = name.toLowerCase().slice(0, 5);
							if ("data-" !== prefix$8 && "aria-" !== prefix$8) return;
					}
					target.push(" ", name, "=\"", escapeTextForBrowser(value), "\"");
				}
			}
		}
	}
	function pushInnerHTML(target, innerHTML, children) {
		if (null != innerHTML) {
			if (null != children) throw Error(formatProdErrorMessage(60));
			if ("object" !== typeof innerHTML || !("__html" in innerHTML)) throw Error(formatProdErrorMessage(61));
			innerHTML = innerHTML.__html;
			null !== innerHTML && void 0 !== innerHTML && target.push("" + innerHTML);
		}
	}
	function flattenOptionChildren(children) {
		var content = "";
		React.Children.forEach(children, function(child) {
			null != child && (content += child);
		});
		return content;
	}
	function injectFormReplayingRuntime(resumableState, renderState) {
		if (0 === (resumableState.instructions & 16)) {
			resumableState.instructions |= 16;
			var preamble = renderState.preamble, bootstrapChunks = renderState.bootstrapChunks;
			(preamble.htmlChunks || preamble.headChunks) && 0 === bootstrapChunks.length ? (bootstrapChunks.push(renderState.startInlineScript), pushCompletedShellIdAttribute(bootstrapChunks, resumableState), bootstrapChunks.push(">", "addEventListener(\"submit\",function(a){if(!a.defaultPrevented){var b=a.target,d=a.submitter,c=b.action,e=d;if(d){var f=d.getAttribute(\"formAction\");null!=f&&(c=f,e=null)}\"javascript:throw new Error('React form unexpectedly submitted.')\"===c&&(a.preventDefault(),a=new FormData(b,e),c=b.ownerDocument||b,(c.$$reactFormReplay=c.$$reactFormReplay||[]).push(b,d,a))}});", "<\/script>")) : bootstrapChunks.unshift(renderState.startInlineScript, ">", "addEventListener(\"submit\",function(a){if(!a.defaultPrevented){var b=a.target,d=a.submitter,c=b.action,e=d;if(d){var f=d.getAttribute(\"formAction\");null!=f&&(c=f,e=null)}\"javascript:throw new Error('React form unexpectedly submitted.')\"===c&&(a.preventDefault(),a=new FormData(b,e),c=b.ownerDocument||b,(c.$$reactFormReplay=c.$$reactFormReplay||[]).push(b,d,a))}});", "<\/script>");
		}
	}
	function pushLinkImpl(target, props) {
		target.push(startChunkForTag("link"));
		for (var propKey in props) if (hasOwnProperty.call(props, propKey)) {
			var propValue = props[propKey];
			if (null != propValue) switch (propKey) {
				case "children":
				case "dangerouslySetInnerHTML": throw Error(formatProdErrorMessage(399, "link"));
				default: pushAttribute(target, propKey, propValue);
			}
		}
		target.push("/>");
		return null;
	}
	var styleRegex = /(<\/|<)(s)(tyle)/gi;
	function styleReplacer(match, prefix, s, suffix) {
		return "" + prefix + ("s" === s ? "\\73 " : "\\53 ") + suffix;
	}
	function pushSelfClosing(target, props, tag, formatContext) {
		target.push(startChunkForTag(tag));
		for (var propKey in props) if (hasOwnProperty.call(props, propKey)) {
			var propValue = props[propKey];
			if (null != propValue) switch (propKey) {
				case "children":
				case "dangerouslySetInnerHTML": throw Error(formatProdErrorMessage(399, tag));
				default: pushAttribute(target, propKey, propValue);
			}
		}
		pushViewTransitionAttributes(target, formatContext);
		target.push("/>");
		return null;
	}
	function pushTitleImpl(target, props) {
		target.push(startChunkForTag("title"));
		var children = null, innerHTML = null, propKey;
		for (propKey in props) if (hasOwnProperty.call(props, propKey)) {
			var propValue = props[propKey];
			if (null != propValue) switch (propKey) {
				case "children":
					children = propValue;
					break;
				case "dangerouslySetInnerHTML":
					innerHTML = propValue;
					break;
				default: pushAttribute(target, propKey, propValue);
			}
		}
		target.push(">");
		props = Array.isArray(children) ? 2 > children.length ? children[0] : null : children;
		"function" !== typeof props && "symbol" !== typeof props && null !== props && void 0 !== props && target.push(escapeTextForBrowser("" + props));
		pushInnerHTML(target, innerHTML, children);
		target.push(endChunkForTag("title"));
		return null;
	}
	function pushScriptImpl(target, props) {
		target.push(startChunkForTag("script"));
		var children = null, innerHTML = null, propKey;
		for (propKey in props) if (hasOwnProperty.call(props, propKey)) {
			var propValue = props[propKey];
			if (null != propValue) switch (propKey) {
				case "children":
					children = propValue;
					break;
				case "dangerouslySetInnerHTML":
					innerHTML = propValue;
					break;
				default: pushAttribute(target, propKey, propValue);
			}
		}
		target.push(">");
		pushInnerHTML(target, innerHTML, children);
		"string" === typeof children && target.push(("" + children).replace(scriptRegex, scriptReplacer));
		target.push(endChunkForTag("script"));
		return null;
	}
	function pushStartSingletonElement(target, props, tag, formatContext) {
		target.push(startChunkForTag(tag));
		var innerHTML = tag = null, propKey;
		for (propKey in props) if (hasOwnProperty.call(props, propKey)) {
			var propValue = props[propKey];
			if (null != propValue) switch (propKey) {
				case "children":
					tag = propValue;
					break;
				case "dangerouslySetInnerHTML":
					innerHTML = propValue;
					break;
				default: pushAttribute(target, propKey, propValue);
			}
		}
		pushViewTransitionAttributes(target, formatContext);
		target.push(">");
		pushInnerHTML(target, innerHTML, tag);
		return tag;
	}
	function pushStartGenericElement(target, props, tag, formatContext) {
		target.push(startChunkForTag(tag));
		var innerHTML = tag = null, propKey;
		for (propKey in props) if (hasOwnProperty.call(props, propKey)) {
			var propValue = props[propKey];
			if (null != propValue) switch (propKey) {
				case "children":
					tag = propValue;
					break;
				case "dangerouslySetInnerHTML":
					innerHTML = propValue;
					break;
				default: pushAttribute(target, propKey, propValue);
			}
		}
		pushViewTransitionAttributes(target, formatContext);
		target.push(">");
		pushInnerHTML(target, innerHTML, tag);
		return "string" === typeof tag ? (target.push(escapeTextForBrowser(tag)), null) : tag;
	}
	var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
	var validatedTagCache = /* @__PURE__ */ new Map();
	function startChunkForTag(tag) {
		var tagStartChunk = validatedTagCache.get(tag);
		if (void 0 === tagStartChunk) {
			if (!VALID_TAG_REGEX.test(tag)) throw Error(formatProdErrorMessage(65, tag));
			tagStartChunk = "<" + tag;
			validatedTagCache.set(tag, tagStartChunk);
		}
		return tagStartChunk;
	}
	function pushStartInstance(target$jscomp$0, type, props, resumableState, renderState, preambleState, hoistableState, formatContext, textEmbedded) {
		switch (type) {
			case "div":
			case "span":
			case "svg":
			case "path": break;
			case "a":
				target$jscomp$0.push(startChunkForTag("a"));
				var children = null, innerHTML = null, propKey;
				for (propKey in props) if (hasOwnProperty.call(props, propKey)) {
					var propValue = props[propKey];
					if (null != propValue) switch (propKey) {
						case "children":
							children = propValue;
							break;
						case "dangerouslySetInnerHTML":
							innerHTML = propValue;
							break;
						case "href":
							"" === propValue ? pushStringAttribute(target$jscomp$0, "href", "") : pushAttribute(target$jscomp$0, propKey, propValue);
							break;
						default: pushAttribute(target$jscomp$0, propKey, propValue);
					}
				}
				pushViewTransitionAttributes(target$jscomp$0, formatContext);
				target$jscomp$0.push(">");
				pushInnerHTML(target$jscomp$0, innerHTML, children);
				if ("string" === typeof children) {
					target$jscomp$0.push(escapeTextForBrowser(children));
					var JSCompiler_inline_result = null;
				} else JSCompiler_inline_result = children;
				return JSCompiler_inline_result;
			case "g":
			case "p":
			case "li": break;
			case "select":
				target$jscomp$0.push(startChunkForTag("select"));
				var children$jscomp$0 = null, innerHTML$jscomp$0 = null, propKey$jscomp$0;
				for (propKey$jscomp$0 in props) if (hasOwnProperty.call(props, propKey$jscomp$0)) {
					var propValue$jscomp$0 = props[propKey$jscomp$0];
					if (null != propValue$jscomp$0) switch (propKey$jscomp$0) {
						case "children":
							children$jscomp$0 = propValue$jscomp$0;
							break;
						case "dangerouslySetInnerHTML":
							innerHTML$jscomp$0 = propValue$jscomp$0;
							break;
						case "defaultValue":
						case "value": break;
						default: pushAttribute(target$jscomp$0, propKey$jscomp$0, propValue$jscomp$0);
					}
				}
				pushViewTransitionAttributes(target$jscomp$0, formatContext);
				target$jscomp$0.push(">");
				pushInnerHTML(target$jscomp$0, innerHTML$jscomp$0, children$jscomp$0);
				return children$jscomp$0;
			case "option":
				var selectedValue = formatContext.selectedValue;
				target$jscomp$0.push(startChunkForTag("option"));
				var children$jscomp$1 = null, value = null, selected = null, innerHTML$jscomp$1 = null, propKey$jscomp$1;
				for (propKey$jscomp$1 in props) if (hasOwnProperty.call(props, propKey$jscomp$1)) {
					var propValue$jscomp$1 = props[propKey$jscomp$1];
					if (null != propValue$jscomp$1) switch (propKey$jscomp$1) {
						case "children":
							children$jscomp$1 = propValue$jscomp$1;
							break;
						case "selected":
							selected = propValue$jscomp$1;
							break;
						case "dangerouslySetInnerHTML":
							innerHTML$jscomp$1 = propValue$jscomp$1;
							break;
						case "value": value = propValue$jscomp$1;
						default: pushAttribute(target$jscomp$0, propKey$jscomp$1, propValue$jscomp$1);
					}
				}
				if (null != selectedValue) {
					var stringValue = null !== value ? "" + value : flattenOptionChildren(children$jscomp$1);
					if (isArrayImpl(selectedValue)) {
						for (var i = 0; i < selectedValue.length; i++) if ("" + selectedValue[i] === stringValue) {
							target$jscomp$0.push(" selected=\"\"");
							break;
						}
					} else "" + selectedValue === stringValue && target$jscomp$0.push(" selected=\"\"");
				} else selected && target$jscomp$0.push(" selected=\"\"");
				target$jscomp$0.push(">");
				pushInnerHTML(target$jscomp$0, innerHTML$jscomp$1, children$jscomp$1);
				return children$jscomp$1;
			case "textarea":
				target$jscomp$0.push(startChunkForTag("textarea"));
				var value$jscomp$0 = null, defaultValue = null, children$jscomp$2 = null, propKey$jscomp$2;
				for (propKey$jscomp$2 in props) if (hasOwnProperty.call(props, propKey$jscomp$2)) {
					var propValue$jscomp$2 = props[propKey$jscomp$2];
					if (null != propValue$jscomp$2) switch (propKey$jscomp$2) {
						case "children":
							children$jscomp$2 = propValue$jscomp$2;
							break;
						case "value":
							value$jscomp$0 = propValue$jscomp$2;
							break;
						case "defaultValue":
							defaultValue = propValue$jscomp$2;
							break;
						case "dangerouslySetInnerHTML": throw Error(formatProdErrorMessage(91));
						default: pushAttribute(target$jscomp$0, propKey$jscomp$2, propValue$jscomp$2);
					}
				}
				null === value$jscomp$0 && null !== defaultValue && (value$jscomp$0 = defaultValue);
				pushViewTransitionAttributes(target$jscomp$0, formatContext);
				target$jscomp$0.push(">");
				if (null != children$jscomp$2) {
					if (null != value$jscomp$0) throw Error(formatProdErrorMessage(92));
					if (isArrayImpl(children$jscomp$2)) {
						if (1 < children$jscomp$2.length) throw Error(formatProdErrorMessage(93));
						value$jscomp$0 = "" + children$jscomp$2[0];
					}
					value$jscomp$0 = "" + children$jscomp$2;
				}
				"string" === typeof value$jscomp$0 && "\n" === value$jscomp$0[0] && target$jscomp$0.push("\n");
				null !== value$jscomp$0 && target$jscomp$0.push(escapeTextForBrowser("" + value$jscomp$0));
				return null;
			case "input":
				target$jscomp$0.push(startChunkForTag("input"));
				var name = null, formAction = null, formEncType = null, formMethod = null, formTarget = null, value$jscomp$1 = null, defaultValue$jscomp$0 = null, checked = null, defaultChecked = null, propKey$jscomp$3;
				for (propKey$jscomp$3 in props) if (hasOwnProperty.call(props, propKey$jscomp$3)) {
					var propValue$jscomp$3 = props[propKey$jscomp$3];
					if (null != propValue$jscomp$3) switch (propKey$jscomp$3) {
						case "children":
						case "dangerouslySetInnerHTML": throw Error(formatProdErrorMessage(399, "input"));
						case "name":
							name = propValue$jscomp$3;
							break;
						case "formAction":
							formAction = propValue$jscomp$3;
							break;
						case "formEncType":
							formEncType = propValue$jscomp$3;
							break;
						case "formMethod":
							formMethod = propValue$jscomp$3;
							break;
						case "formTarget":
							formTarget = propValue$jscomp$3;
							break;
						case "defaultChecked":
							defaultChecked = propValue$jscomp$3;
							break;
						case "defaultValue":
							defaultValue$jscomp$0 = propValue$jscomp$3;
							break;
						case "checked":
							checked = propValue$jscomp$3;
							break;
						case "value":
							value$jscomp$1 = propValue$jscomp$3;
							break;
						default: pushAttribute(target$jscomp$0, propKey$jscomp$3, propValue$jscomp$3);
					}
				}
				var formData = pushFormActionAttribute(target$jscomp$0, resumableState, renderState, formAction, formEncType, formMethod, formTarget, name);
				null !== checked ? pushBooleanAttribute(target$jscomp$0, "checked", checked) : null !== defaultChecked && pushBooleanAttribute(target$jscomp$0, "checked", defaultChecked);
				null !== value$jscomp$1 ? pushAttribute(target$jscomp$0, "value", value$jscomp$1) : null !== defaultValue$jscomp$0 && pushAttribute(target$jscomp$0, "value", defaultValue$jscomp$0);
				pushViewTransitionAttributes(target$jscomp$0, formatContext);
				target$jscomp$0.push("/>");
				formData?.forEach(pushAdditionalFormField, target$jscomp$0);
				return null;
			case "button":
				target$jscomp$0.push(startChunkForTag("button"));
				var children$jscomp$3 = null, innerHTML$jscomp$2 = null, name$jscomp$0 = null, formAction$jscomp$0 = null, formEncType$jscomp$0 = null, formMethod$jscomp$0 = null, formTarget$jscomp$0 = null, propKey$jscomp$4;
				for (propKey$jscomp$4 in props) if (hasOwnProperty.call(props, propKey$jscomp$4)) {
					var propValue$jscomp$4 = props[propKey$jscomp$4];
					if (null != propValue$jscomp$4) switch (propKey$jscomp$4) {
						case "children":
							children$jscomp$3 = propValue$jscomp$4;
							break;
						case "dangerouslySetInnerHTML":
							innerHTML$jscomp$2 = propValue$jscomp$4;
							break;
						case "name":
							name$jscomp$0 = propValue$jscomp$4;
							break;
						case "formAction":
							formAction$jscomp$0 = propValue$jscomp$4;
							break;
						case "formEncType":
							formEncType$jscomp$0 = propValue$jscomp$4;
							break;
						case "formMethod":
							formMethod$jscomp$0 = propValue$jscomp$4;
							break;
						case "formTarget":
							formTarget$jscomp$0 = propValue$jscomp$4;
							break;
						default: pushAttribute(target$jscomp$0, propKey$jscomp$4, propValue$jscomp$4);
					}
				}
				var formData$jscomp$0 = pushFormActionAttribute(target$jscomp$0, resumableState, renderState, formAction$jscomp$0, formEncType$jscomp$0, formMethod$jscomp$0, formTarget$jscomp$0, name$jscomp$0);
				pushViewTransitionAttributes(target$jscomp$0, formatContext);
				target$jscomp$0.push(">");
				formData$jscomp$0?.forEach(pushAdditionalFormField, target$jscomp$0);
				pushInnerHTML(target$jscomp$0, innerHTML$jscomp$2, children$jscomp$3);
				if ("string" === typeof children$jscomp$3) {
					target$jscomp$0.push(escapeTextForBrowser(children$jscomp$3));
					var JSCompiler_inline_result$jscomp$0 = null;
				} else JSCompiler_inline_result$jscomp$0 = children$jscomp$3;
				return JSCompiler_inline_result$jscomp$0;
			case "form":
				target$jscomp$0.push(startChunkForTag("form"));
				var children$jscomp$4 = null, innerHTML$jscomp$3 = null, formAction$jscomp$1 = null, formEncType$jscomp$1 = null, formMethod$jscomp$1 = null, formTarget$jscomp$1 = null, propKey$jscomp$5;
				for (propKey$jscomp$5 in props) if (hasOwnProperty.call(props, propKey$jscomp$5)) {
					var propValue$jscomp$5 = props[propKey$jscomp$5];
					if (null != propValue$jscomp$5) switch (propKey$jscomp$5) {
						case "children":
							children$jscomp$4 = propValue$jscomp$5;
							break;
						case "dangerouslySetInnerHTML":
							innerHTML$jscomp$3 = propValue$jscomp$5;
							break;
						case "action":
							formAction$jscomp$1 = propValue$jscomp$5;
							break;
						case "encType":
							formEncType$jscomp$1 = propValue$jscomp$5;
							break;
						case "method":
							formMethod$jscomp$1 = propValue$jscomp$5;
							break;
						case "target":
							formTarget$jscomp$1 = propValue$jscomp$5;
							break;
						default: pushAttribute(target$jscomp$0, propKey$jscomp$5, propValue$jscomp$5);
					}
				}
				var formData$jscomp$1 = null, formActionName = null;
				if ("function" === typeof formAction$jscomp$1) {
					var customFields = getCustomFormFields(resumableState, formAction$jscomp$1);
					null !== customFields ? (formAction$jscomp$1 = customFields.action || "", formEncType$jscomp$1 = customFields.encType, formMethod$jscomp$1 = customFields.method, formTarget$jscomp$1 = customFields.target, formData$jscomp$1 = customFields.data, formActionName = customFields.name) : (target$jscomp$0.push(" ", "action", "=\"", actionJavaScriptURL, "\""), formTarget$jscomp$1 = formMethod$jscomp$1 = formEncType$jscomp$1 = formAction$jscomp$1 = null, injectFormReplayingRuntime(resumableState, renderState));
				}
				null != formAction$jscomp$1 && pushAttribute(target$jscomp$0, "action", formAction$jscomp$1);
				null != formEncType$jscomp$1 && pushAttribute(target$jscomp$0, "encType", formEncType$jscomp$1);
				null != formMethod$jscomp$1 && pushAttribute(target$jscomp$0, "method", formMethod$jscomp$1);
				null != formTarget$jscomp$1 && pushAttribute(target$jscomp$0, "target", formTarget$jscomp$1);
				pushViewTransitionAttributes(target$jscomp$0, formatContext);
				target$jscomp$0.push(">");
				null !== formActionName && (target$jscomp$0.push("<input type=\"hidden\""), pushStringAttribute(target$jscomp$0, "name", formActionName), target$jscomp$0.push("/>"), formData$jscomp$1?.forEach(pushAdditionalFormField, target$jscomp$0));
				pushInnerHTML(target$jscomp$0, innerHTML$jscomp$3, children$jscomp$4);
				if ("string" === typeof children$jscomp$4) {
					target$jscomp$0.push(escapeTextForBrowser(children$jscomp$4));
					var JSCompiler_inline_result$jscomp$1 = null;
				} else JSCompiler_inline_result$jscomp$1 = children$jscomp$4;
				return JSCompiler_inline_result$jscomp$1;
			case "menuitem":
				target$jscomp$0.push(startChunkForTag("menuitem"));
				for (var propKey$jscomp$6 in props) if (hasOwnProperty.call(props, propKey$jscomp$6)) {
					var propValue$jscomp$6 = props[propKey$jscomp$6];
					if (null != propValue$jscomp$6) switch (propKey$jscomp$6) {
						case "children":
						case "dangerouslySetInnerHTML": throw Error(formatProdErrorMessage(400));
						default: pushAttribute(target$jscomp$0, propKey$jscomp$6, propValue$jscomp$6);
					}
				}
				pushViewTransitionAttributes(target$jscomp$0, formatContext);
				target$jscomp$0.push(">");
				return null;
			case "object":
				target$jscomp$0.push(startChunkForTag("object"));
				var children$jscomp$5 = null, innerHTML$jscomp$4 = null, propKey$jscomp$7;
				for (propKey$jscomp$7 in props) if (hasOwnProperty.call(props, propKey$jscomp$7)) {
					var propValue$jscomp$7 = props[propKey$jscomp$7];
					if (null != propValue$jscomp$7) switch (propKey$jscomp$7) {
						case "children":
							children$jscomp$5 = propValue$jscomp$7;
							break;
						case "dangerouslySetInnerHTML":
							innerHTML$jscomp$4 = propValue$jscomp$7;
							break;
						case "data":
							var sanitizedValue = sanitizeURL("" + propValue$jscomp$7);
							if ("" === sanitizedValue) break;
							target$jscomp$0.push(" ", "data", "=\"", escapeTextForBrowser(sanitizedValue), "\"");
							break;
						default: pushAttribute(target$jscomp$0, propKey$jscomp$7, propValue$jscomp$7);
					}
				}
				pushViewTransitionAttributes(target$jscomp$0, formatContext);
				target$jscomp$0.push(">");
				pushInnerHTML(target$jscomp$0, innerHTML$jscomp$4, children$jscomp$5);
				if ("string" === typeof children$jscomp$5) {
					target$jscomp$0.push(escapeTextForBrowser(children$jscomp$5));
					var JSCompiler_inline_result$jscomp$2 = null;
				} else JSCompiler_inline_result$jscomp$2 = children$jscomp$5;
				return JSCompiler_inline_result$jscomp$2;
			case "title":
				var noscriptTagInScope = formatContext.tagScope & 1, isFallback = formatContext.tagScope & 4;
				if (4 === formatContext.insertionMode || noscriptTagInScope || null != props.itemProp) var JSCompiler_inline_result$jscomp$3 = pushTitleImpl(target$jscomp$0, props);
				else isFallback ? JSCompiler_inline_result$jscomp$3 = null : (pushTitleImpl(renderState.hoistableChunks, props), JSCompiler_inline_result$jscomp$3 = void 0);
				return JSCompiler_inline_result$jscomp$3;
			case "link":
				var noscriptTagInScope$jscomp$0 = formatContext.tagScope & 1, isFallback$jscomp$0 = formatContext.tagScope & 4, rel = props.rel, href = props.href, precedence = props.precedence;
				if (4 === formatContext.insertionMode || noscriptTagInScope$jscomp$0 || null != props.itemProp || "string" !== typeof rel || "string" !== typeof href || "" === href) {
					pushLinkImpl(target$jscomp$0, props);
					var JSCompiler_inline_result$jscomp$4 = null;
				} else if ("stylesheet" === props.rel) if ("string" !== typeof precedence || null != props.disabled || props.onLoad || props.onError) JSCompiler_inline_result$jscomp$4 = pushLinkImpl(target$jscomp$0, props);
				else {
					var styleQueue = renderState.styles.get(precedence), resourceState = resumableState.styleResources.hasOwnProperty(href) ? resumableState.styleResources[href] : void 0;
					if (null !== resourceState) {
						resumableState.styleResources[href] = null;
						styleQueue || (styleQueue = {
							precedence: escapeTextForBrowser(precedence),
							rules: [],
							hrefs: [],
							sheets: /* @__PURE__ */ new Map()
						}, renderState.styles.set(precedence, styleQueue));
						var resource = {
							state: 0,
							props: assign({}, props, {
								"data-precedence": props.precedence,
								precedence: null
							})
						};
						if (resourceState) {
							2 === resourceState.length && adoptPreloadCredentials(resource.props, resourceState);
							var preloadResource = renderState.preloads.stylesheets.get(href);
							preloadResource && 0 < preloadResource.length ? preloadResource.length = 0 : resource.state = 1;
						}
						styleQueue.sheets.set(href, resource);
						hoistableState && hoistableState.stylesheets.add(resource);
					} else if (styleQueue) {
						var resource$9 = styleQueue.sheets.get(href);
						resource$9 && hoistableState && hoistableState.stylesheets.add(resource$9);
					}
					textEmbedded && target$jscomp$0.push("<!-- -->");
					JSCompiler_inline_result$jscomp$4 = null;
				}
				else props.onLoad || props.onError ? JSCompiler_inline_result$jscomp$4 = pushLinkImpl(target$jscomp$0, props) : (textEmbedded && target$jscomp$0.push("<!-- -->"), JSCompiler_inline_result$jscomp$4 = isFallback$jscomp$0 ? null : pushLinkImpl(renderState.hoistableChunks, props));
				return JSCompiler_inline_result$jscomp$4;
			case "script":
				var noscriptTagInScope$jscomp$1 = formatContext.tagScope & 1, asyncProp = props.async;
				if ("string" !== typeof props.src || !props.src || !asyncProp || "function" === typeof asyncProp || "symbol" === typeof asyncProp || props.onLoad || props.onError || 4 === formatContext.insertionMode || noscriptTagInScope$jscomp$1 || null != props.itemProp) var JSCompiler_inline_result$jscomp$5 = pushScriptImpl(target$jscomp$0, props);
				else {
					var key = props.src;
					if ("module" === props.type) {
						var resources = resumableState.moduleScriptResources;
						var preloads = renderState.preloads.moduleScripts;
					} else resources = resumableState.scriptResources, preloads = renderState.preloads.scripts;
					var resourceState$jscomp$0 = resources.hasOwnProperty(key) ? resources[key] : void 0;
					if (null !== resourceState$jscomp$0) {
						resources[key] = null;
						var scriptProps = props;
						if (resourceState$jscomp$0) {
							2 === resourceState$jscomp$0.length && (scriptProps = assign({}, props), adoptPreloadCredentials(scriptProps, resourceState$jscomp$0));
							var preloadResource$jscomp$0 = preloads.get(key);
							preloadResource$jscomp$0 && (preloadResource$jscomp$0.length = 0);
						}
						var resource$jscomp$0 = [];
						renderState.scripts.add(resource$jscomp$0);
						pushScriptImpl(resource$jscomp$0, scriptProps);
					}
					textEmbedded && target$jscomp$0.push("<!-- -->");
					JSCompiler_inline_result$jscomp$5 = null;
				}
				return JSCompiler_inline_result$jscomp$5;
			case "style":
				var noscriptTagInScope$jscomp$2 = formatContext.tagScope & 1, precedence$jscomp$0 = props.precedence, href$jscomp$0 = props.href, nonce = props.nonce;
				if (4 === formatContext.insertionMode || noscriptTagInScope$jscomp$2 || null != props.itemProp || "string" !== typeof precedence$jscomp$0 || "string" !== typeof href$jscomp$0 || "" === href$jscomp$0) {
					target$jscomp$0.push(startChunkForTag("style"));
					var children$jscomp$6 = null, innerHTML$jscomp$5 = null, propKey$jscomp$8;
					for (propKey$jscomp$8 in props) if (hasOwnProperty.call(props, propKey$jscomp$8)) {
						var propValue$jscomp$8 = props[propKey$jscomp$8];
						if (null != propValue$jscomp$8) switch (propKey$jscomp$8) {
							case "children":
								children$jscomp$6 = propValue$jscomp$8;
								break;
							case "dangerouslySetInnerHTML":
								innerHTML$jscomp$5 = propValue$jscomp$8;
								break;
							default: pushAttribute(target$jscomp$0, propKey$jscomp$8, propValue$jscomp$8);
						}
					}
					target$jscomp$0.push(">");
					var child = Array.isArray(children$jscomp$6) ? 2 > children$jscomp$6.length ? children$jscomp$6[0] : null : children$jscomp$6;
					"function" !== typeof child && "symbol" !== typeof child && null !== child && void 0 !== child && target$jscomp$0.push(("" + child).replace(styleRegex, styleReplacer));
					pushInnerHTML(target$jscomp$0, innerHTML$jscomp$5, children$jscomp$6);
					target$jscomp$0.push(endChunkForTag("style"));
					var JSCompiler_inline_result$jscomp$6 = null;
				} else {
					var styleQueue$jscomp$0 = renderState.styles.get(precedence$jscomp$0);
					if (null !== (resumableState.styleResources.hasOwnProperty(href$jscomp$0) ? resumableState.styleResources[href$jscomp$0] : void 0)) {
						resumableState.styleResources[href$jscomp$0] = null;
						styleQueue$jscomp$0 || (styleQueue$jscomp$0 = {
							precedence: escapeTextForBrowser(precedence$jscomp$0),
							rules: [],
							hrefs: [],
							sheets: /* @__PURE__ */ new Map()
						}, renderState.styles.set(precedence$jscomp$0, styleQueue$jscomp$0));
						var nonceStyle = renderState.nonce.style;
						if (!nonceStyle || nonceStyle === nonce) {
							styleQueue$jscomp$0.hrefs.push(escapeTextForBrowser(href$jscomp$0));
							var target = styleQueue$jscomp$0.rules, children$jscomp$7 = null, innerHTML$jscomp$6 = null, propKey$jscomp$9;
							for (propKey$jscomp$9 in props) if (hasOwnProperty.call(props, propKey$jscomp$9)) {
								var propValue$jscomp$9 = props[propKey$jscomp$9];
								if (null != propValue$jscomp$9) switch (propKey$jscomp$9) {
									case "children":
										children$jscomp$7 = propValue$jscomp$9;
										break;
									case "dangerouslySetInnerHTML": innerHTML$jscomp$6 = propValue$jscomp$9;
								}
							}
							var child$jscomp$0 = Array.isArray(children$jscomp$7) ? 2 > children$jscomp$7.length ? children$jscomp$7[0] : null : children$jscomp$7;
							"function" !== typeof child$jscomp$0 && "symbol" !== typeof child$jscomp$0 && null !== child$jscomp$0 && void 0 !== child$jscomp$0 && target.push(("" + child$jscomp$0).replace(styleRegex, styleReplacer));
							pushInnerHTML(target, innerHTML$jscomp$6, children$jscomp$7);
						}
					}
					styleQueue$jscomp$0 && hoistableState && hoistableState.styles.add(styleQueue$jscomp$0);
					textEmbedded && target$jscomp$0.push("<!-- -->");
					JSCompiler_inline_result$jscomp$6 = void 0;
				}
				return JSCompiler_inline_result$jscomp$6;
			case "meta":
				var noscriptTagInScope$jscomp$3 = formatContext.tagScope & 1, isFallback$jscomp$1 = formatContext.tagScope & 4;
				if (4 === formatContext.insertionMode || noscriptTagInScope$jscomp$3 || null != props.itemProp) var JSCompiler_inline_result$jscomp$7 = pushSelfClosing(target$jscomp$0, props, "meta", formatContext);
				else textEmbedded && target$jscomp$0.push("<!-- -->"), JSCompiler_inline_result$jscomp$7 = isFallback$jscomp$1 ? null : "string" === typeof props.charSet ? pushSelfClosing(renderState.charsetChunks, props, "meta", formatContext) : "viewport" === props.name ? pushSelfClosing(renderState.viewportChunks, props, "meta", formatContext) : pushSelfClosing(renderState.hoistableChunks, props, "meta", formatContext);
				return JSCompiler_inline_result$jscomp$7;
			case "listing":
			case "pre":
				target$jscomp$0.push(startChunkForTag(type));
				var children$jscomp$8 = null, innerHTML$jscomp$7 = null, propKey$jscomp$10;
				for (propKey$jscomp$10 in props) if (hasOwnProperty.call(props, propKey$jscomp$10)) {
					var propValue$jscomp$10 = props[propKey$jscomp$10];
					if (null != propValue$jscomp$10) switch (propKey$jscomp$10) {
						case "children":
							children$jscomp$8 = propValue$jscomp$10;
							break;
						case "dangerouslySetInnerHTML":
							innerHTML$jscomp$7 = propValue$jscomp$10;
							break;
						default: pushAttribute(target$jscomp$0, propKey$jscomp$10, propValue$jscomp$10);
					}
				}
				pushViewTransitionAttributes(target$jscomp$0, formatContext);
				target$jscomp$0.push(">");
				if (null != innerHTML$jscomp$7) {
					if (null != children$jscomp$8) throw Error(formatProdErrorMessage(60));
					if ("object" !== typeof innerHTML$jscomp$7 || !("__html" in innerHTML$jscomp$7)) throw Error(formatProdErrorMessage(61));
					var html = innerHTML$jscomp$7.__html;
					null !== html && void 0 !== html && ("string" === typeof html && 0 < html.length && "\n" === html[0] ? target$jscomp$0.push("\n", html) : target$jscomp$0.push("" + html));
				}
				"string" === typeof children$jscomp$8 && "\n" === children$jscomp$8[0] && target$jscomp$0.push("\n");
				return children$jscomp$8;
			case "img":
				var pictureOrNoScriptTagInScope = formatContext.tagScope & 3, src = props.src, srcSet = props.srcSet;
				if (!("lazy" === props.loading || !src && !srcSet || "string" !== typeof src && null != src || "string" !== typeof srcSet && null != srcSet || "low" === props.fetchPriority || pictureOrNoScriptTagInScope) && ("string" !== typeof src || ":" !== src[4] || "d" !== src[0] && "D" !== src[0] || "a" !== src[1] && "A" !== src[1] || "t" !== src[2] && "T" !== src[2] || "a" !== src[3] && "A" !== src[3]) && ("string" !== typeof srcSet || ":" !== srcSet[4] || "d" !== srcSet[0] && "D" !== srcSet[0] || "a" !== srcSet[1] && "A" !== srcSet[1] || "t" !== srcSet[2] && "T" !== srcSet[2] || "a" !== srcSet[3] && "A" !== srcSet[3])) {
					null !== hoistableState && formatContext.tagScope & 64 && (hoistableState.suspenseyImages = !0);
					var sizes = "string" === typeof props.sizes ? props.sizes : void 0, key$jscomp$0 = srcSet ? srcSet + "\n" + (sizes || "") : src, promotablePreloads = renderState.preloads.images, resource$jscomp$1 = promotablePreloads.get(key$jscomp$0);
					if (resource$jscomp$1) {
						if ("high" === props.fetchPriority || 10 > renderState.highImagePreloads.size) promotablePreloads.delete(key$jscomp$0), renderState.highImagePreloads.add(resource$jscomp$1);
					} else if (!resumableState.imageResources.hasOwnProperty(key$jscomp$0)) {
						resumableState.imageResources[key$jscomp$0] = PRELOAD_NO_CREDS;
						var input = props.crossOrigin;
						var JSCompiler_inline_result$jscomp$8 = "string" === typeof input ? "use-credentials" === input ? input : "" : void 0;
						var headers = renderState.headers, header;
						headers && 0 < headers.remainingCapacity && "string" !== typeof props.srcSet && ("high" === props.fetchPriority || 500 > headers.highImagePreloads.length) && (header = getPreloadAsHeader(src, "image", {
							imageSrcSet: props.srcSet,
							imageSizes: props.sizes,
							crossOrigin: JSCompiler_inline_result$jscomp$8,
							integrity: props.integrity,
							nonce: props.nonce,
							type: props.type,
							fetchPriority: props.fetchPriority,
							referrerPolicy: props.referrerPolicy
						}), 0 <= (headers.remainingCapacity -= header.length + 2)) ? (renderState.resets.image[key$jscomp$0] = PRELOAD_NO_CREDS, headers.highImagePreloads && (headers.highImagePreloads += ", "), headers.highImagePreloads += header) : (resource$jscomp$1 = [], pushLinkImpl(resource$jscomp$1, {
							rel: "preload",
							as: "image",
							href: srcSet ? void 0 : src,
							imageSrcSet: srcSet,
							imageSizes: sizes,
							crossOrigin: JSCompiler_inline_result$jscomp$8,
							integrity: props.integrity,
							type: props.type,
							fetchPriority: props.fetchPriority,
							referrerPolicy: props.referrerPolicy
						}), "high" === props.fetchPriority || 10 > renderState.highImagePreloads.size ? renderState.highImagePreloads.add(resource$jscomp$1) : (renderState.bulkPreloads.add(resource$jscomp$1), promotablePreloads.set(key$jscomp$0, resource$jscomp$1)));
					}
				}
				return pushSelfClosing(target$jscomp$0, props, "img", formatContext);
			case "base":
			case "area":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "param":
			case "source":
			case "track":
			case "wbr": return pushSelfClosing(target$jscomp$0, props, type, formatContext);
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": break;
			case "head":
				if (2 > formatContext.insertionMode) {
					var preamble = preambleState || renderState.preamble;
					if (preamble.headChunks) throw Error(formatProdErrorMessage(545, "`<head>`"));
					null !== preambleState && target$jscomp$0.push("<!--head-->");
					preamble.headChunks = [];
					var JSCompiler_inline_result$jscomp$9 = pushStartSingletonElement(preamble.headChunks, props, "head", formatContext);
				} else JSCompiler_inline_result$jscomp$9 = pushStartGenericElement(target$jscomp$0, props, "head", formatContext);
				return JSCompiler_inline_result$jscomp$9;
			case "body":
				if (2 > formatContext.insertionMode) {
					var preamble$jscomp$0 = preambleState || renderState.preamble;
					if (preamble$jscomp$0.bodyChunks) throw Error(formatProdErrorMessage(545, "`<body>`"));
					null !== preambleState && target$jscomp$0.push("<!--body-->");
					preamble$jscomp$0.bodyChunks = [];
					var JSCompiler_inline_result$jscomp$10 = pushStartSingletonElement(preamble$jscomp$0.bodyChunks, props, "body", formatContext);
				} else JSCompiler_inline_result$jscomp$10 = pushStartGenericElement(target$jscomp$0, props, "body", formatContext);
				return JSCompiler_inline_result$jscomp$10;
			case "html":
				if (0 === formatContext.insertionMode) {
					var preamble$jscomp$1 = preambleState || renderState.preamble;
					if (preamble$jscomp$1.htmlChunks) throw Error(formatProdErrorMessage(545, "`<html>`"));
					null !== preambleState && target$jscomp$0.push("<!--html-->");
					preamble$jscomp$1.htmlChunks = [""];
					var JSCompiler_inline_result$jscomp$11 = pushStartSingletonElement(preamble$jscomp$1.htmlChunks, props, "html", formatContext);
				} else JSCompiler_inline_result$jscomp$11 = pushStartGenericElement(target$jscomp$0, props, "html", formatContext);
				return JSCompiler_inline_result$jscomp$11;
			default: if (-1 !== type.indexOf("-")) {
				target$jscomp$0.push(startChunkForTag(type));
				var children$jscomp$9 = null, innerHTML$jscomp$8 = null, propKey$jscomp$11;
				for (propKey$jscomp$11 in props) if (hasOwnProperty.call(props, propKey$jscomp$11)) {
					var propValue$jscomp$11 = props[propKey$jscomp$11];
					if (null != propValue$jscomp$11) {
						var attributeName = propKey$jscomp$11;
						switch (propKey$jscomp$11) {
							case "children":
								children$jscomp$9 = propValue$jscomp$11;
								break;
							case "dangerouslySetInnerHTML":
								innerHTML$jscomp$8 = propValue$jscomp$11;
								break;
							case "style":
								pushStyleAttribute(target$jscomp$0, propValue$jscomp$11);
								break;
							case "suppressContentEditableWarning":
							case "suppressHydrationWarning":
							case "ref": break;
							case "className": attributeName = "class";
							default: if (isAttributeNameSafe(propKey$jscomp$11) && "function" !== typeof propValue$jscomp$11 && "symbol" !== typeof propValue$jscomp$11 && !1 !== propValue$jscomp$11) {
								if (!0 === propValue$jscomp$11) propValue$jscomp$11 = "";
								else if ("object" === typeof propValue$jscomp$11) continue;
								target$jscomp$0.push(" ", attributeName, "=\"", escapeTextForBrowser(propValue$jscomp$11), "\"");
							}
						}
					}
				}
				pushViewTransitionAttributes(target$jscomp$0, formatContext);
				target$jscomp$0.push(">");
				pushInnerHTML(target$jscomp$0, innerHTML$jscomp$8, children$jscomp$9);
				return children$jscomp$9;
			}
		}
		return pushStartGenericElement(target$jscomp$0, props, type, formatContext);
	}
	var endTagCache = /* @__PURE__ */ new Map();
	function endChunkForTag(tag) {
		var chunk = endTagCache.get(tag);
		void 0 === chunk && (chunk = "</" + tag + ">", endTagCache.set(tag, chunk));
		return chunk;
	}
	function hoistPreambleState(renderState, preambleState) {
		renderState = renderState.preamble;
		null === renderState.htmlChunks && preambleState.htmlChunks && (renderState.htmlChunks = preambleState.htmlChunks);
		null === renderState.headChunks && preambleState.headChunks && (renderState.headChunks = preambleState.headChunks);
		null === renderState.bodyChunks && preambleState.bodyChunks && (renderState.bodyChunks = preambleState.bodyChunks);
	}
	function writeBootstrap(destination, renderState) {
		renderState = renderState.bootstrapChunks;
		for (var i = 0; i < renderState.length - 1; i++) destination.push(renderState[i]);
		return i < renderState.length ? (i = renderState[i], renderState.length = 0, destination.push(i)) : !0;
	}
	function writeStartPendingSuspenseBoundary(destination, renderState, id) {
		destination.push("<!--$?--><template id=\"");
		if (null === id) throw Error(formatProdErrorMessage(395));
		destination.push(renderState.boundaryPrefix);
		renderState = id.toString(16);
		destination.push(renderState);
		return destination.push("\"></template>");
	}
	function writeStartSegment(destination, renderState, formatContext, id) {
		switch (formatContext.insertionMode) {
			case 0:
			case 1:
			case 3:
			case 2: return destination.push("<div hidden id=\""), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push("\">");
			case 4: return destination.push("<svg aria-hidden=\"true\" style=\"display:none\" id=\""), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push("\">");
			case 5: return destination.push("<math aria-hidden=\"true\" style=\"display:none\" id=\""), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push("\">");
			case 6: return destination.push("<table hidden id=\""), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push("\">");
			case 7: return destination.push("<table hidden><tbody id=\""), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push("\">");
			case 8: return destination.push("<table hidden><tr id=\""), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push("\">");
			case 9: return destination.push("<table hidden><colgroup id=\""), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push("\">");
			default: throw Error(formatProdErrorMessage(397));
		}
	}
	function writeEndSegment(destination, formatContext) {
		switch (formatContext.insertionMode) {
			case 0:
			case 1:
			case 3:
			case 2: return destination.push("</div>");
			case 4: return destination.push("</svg>");
			case 5: return destination.push("</math>");
			case 6: return destination.push("</table>");
			case 7: return destination.push("</tbody></table>");
			case 8: return destination.push("</tr></table>");
			case 9: return destination.push("</colgroup></table>");
			default: throw Error(formatProdErrorMessage(397));
		}
	}
	var regexForJSStringsInInstructionScripts = /[<\u2028\u2029]/g;
	function escapeJSStringsForInstructionScripts(input) {
		return JSON.stringify(input).replace(regexForJSStringsInInstructionScripts, function(match) {
			switch (match) {
				case "<": return "\\u003c";
				case "\u2028": return "\\u2028";
				case "\u2029": return "\\u2029";
				default: throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
			}
		});
	}
	var regexForJSStringsInScripts = /[&><\u2028\u2029]/g;
	function escapeJSObjectForInstructionScripts(input) {
		return JSON.stringify(input).replace(regexForJSStringsInScripts, function(match) {
			switch (match) {
				case "&": return "\\u0026";
				case ">": return "\\u003e";
				case "<": return "\\u003c";
				case "\u2028": return "\\u2028";
				case "\u2029": return "\\u2029";
				default: throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
			}
		});
	}
	var currentlyRenderingBoundaryHasStylesToHoist = !1;
	var destinationHasCapacity = !0;
	function flushStyleTagsLateForBoundary(styleQueue) {
		var rules = styleQueue.rules, hrefs = styleQueue.hrefs, i = 0;
		if (hrefs.length) {
			this.push(currentlyFlushingRenderState.startInlineStyle);
			this.push(" media=\"not all\" data-precedence=\"");
			this.push(styleQueue.precedence);
			for (this.push("\" data-href=\""); i < hrefs.length - 1; i++) this.push(hrefs[i]), this.push(" ");
			this.push(hrefs[i]);
			this.push("\">");
			for (i = 0; i < rules.length; i++) this.push(rules[i]);
			destinationHasCapacity = this.push("</style>");
			currentlyRenderingBoundaryHasStylesToHoist = !0;
			rules.length = 0;
			hrefs.length = 0;
		}
	}
	function hasStylesToHoist(stylesheet) {
		return 2 !== stylesheet.state ? currentlyRenderingBoundaryHasStylesToHoist = !0 : !1;
	}
	function writeHoistablesForBoundary(destination, hoistableState, renderState) {
		currentlyRenderingBoundaryHasStylesToHoist = !1;
		destinationHasCapacity = !0;
		currentlyFlushingRenderState = renderState;
		hoistableState.styles.forEach(flushStyleTagsLateForBoundary, destination);
		currentlyFlushingRenderState = null;
		hoistableState.stylesheets.forEach(hasStylesToHoist);
		currentlyRenderingBoundaryHasStylesToHoist && (renderState.stylesToHoist = !0);
		return destinationHasCapacity;
	}
	function flushResource(resource) {
		for (var i = 0; i < resource.length; i++) this.push(resource[i]);
		resource.length = 0;
	}
	var stylesheetFlushingQueue = [];
	function flushStyleInPreamble(stylesheet) {
		pushLinkImpl(stylesheetFlushingQueue, stylesheet.props);
		for (var i = 0; i < stylesheetFlushingQueue.length; i++) this.push(stylesheetFlushingQueue[i]);
		stylesheetFlushingQueue.length = 0;
		stylesheet.state = 2;
	}
	function flushStylesInPreamble(styleQueue) {
		var hasStylesheets = 0 < styleQueue.sheets.size;
		styleQueue.sheets.forEach(flushStyleInPreamble, this);
		styleQueue.sheets.clear();
		var rules = styleQueue.rules, hrefs = styleQueue.hrefs;
		if (!hasStylesheets || hrefs.length) {
			this.push(currentlyFlushingRenderState.startInlineStyle);
			this.push(" data-precedence=\"");
			this.push(styleQueue.precedence);
			styleQueue = 0;
			if (hrefs.length) {
				for (this.push("\" data-href=\""); styleQueue < hrefs.length - 1; styleQueue++) this.push(hrefs[styleQueue]), this.push(" ");
				this.push(hrefs[styleQueue]);
			}
			this.push("\">");
			for (styleQueue = 0; styleQueue < rules.length; styleQueue++) this.push(rules[styleQueue]);
			this.push("</style>");
			rules.length = 0;
			hrefs.length = 0;
		}
	}
	function preloadLateStyle(stylesheet) {
		if (0 === stylesheet.state) {
			stylesheet.state = 1;
			var props = stylesheet.props;
			pushLinkImpl(stylesheetFlushingQueue, {
				rel: "preload",
				as: "style",
				href: stylesheet.props.href,
				crossOrigin: props.crossOrigin,
				fetchPriority: props.fetchPriority,
				integrity: props.integrity,
				media: props.media,
				hrefLang: props.hrefLang,
				referrerPolicy: props.referrerPolicy
			});
			for (stylesheet = 0; stylesheet < stylesheetFlushingQueue.length; stylesheet++) this.push(stylesheetFlushingQueue[stylesheet]);
			stylesheetFlushingQueue.length = 0;
		}
	}
	function preloadLateStyles(styleQueue) {
		styleQueue.sheets.forEach(preloadLateStyle, this);
		styleQueue.sheets.clear();
	}
	function pushCompletedShellIdAttribute(target, resumableState) {
		0 === (resumableState.instructions & 32) && (resumableState.instructions |= 32, target.push(" id=\"", escapeTextForBrowser("_" + resumableState.idPrefix + "R_"), "\""));
	}
	function writeStyleResourceDependenciesInJS(destination, hoistableState) {
		destination.push("[");
		var nextArrayOpenBrackChunk = "[";
		hoistableState.stylesheets.forEach(function(resource) {
			if (2 !== resource.state) if (3 === resource.state) destination.push(nextArrayOpenBrackChunk), resource = escapeJSObjectForInstructionScripts("" + resource.props.href), destination.push(resource), destination.push("]"), nextArrayOpenBrackChunk = ",[";
			else {
				destination.push(nextArrayOpenBrackChunk);
				var precedence = resource.props["data-precedence"], props = resource.props, coercedHref = sanitizeURL("" + resource.props.href);
				coercedHref = escapeJSObjectForInstructionScripts(coercedHref);
				destination.push(coercedHref);
				precedence = "" + precedence;
				destination.push(",");
				precedence = escapeJSObjectForInstructionScripts(precedence);
				destination.push(precedence);
				for (var propKey in props) if (hasOwnProperty.call(props, propKey) && (precedence = props[propKey], null != precedence)) switch (propKey) {
					case "href":
					case "rel":
					case "precedence":
					case "data-precedence": break;
					case "children":
					case "dangerouslySetInnerHTML": throw Error(formatProdErrorMessage(399, "link"));
					default: writeStyleResourceAttributeInJS(destination, propKey, precedence);
				}
				destination.push("]");
				nextArrayOpenBrackChunk = ",[";
				resource.state = 3;
			}
		});
		destination.push("]");
	}
	function writeStyleResourceAttributeInJS(destination, name, value) {
		var attributeName = name.toLowerCase();
		switch (typeof value) {
			case "function":
			case "symbol": return;
		}
		switch (name) {
			case "innerHTML":
			case "dangerouslySetInnerHTML":
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "style":
			case "ref": return;
			case "className":
				attributeName = "class";
				name = "" + value;
				break;
			case "hidden":
				if (!1 === value) return;
				name = "";
				break;
			case "src":
			case "href":
				value = sanitizeURL(value);
				name = "" + value;
				break;
			default:
				if (2 < name.length && ("o" === name[0] || "O" === name[0]) && ("n" === name[1] || "N" === name[1]) || !isAttributeNameSafe(name)) return;
				name = "" + value;
		}
		destination.push(",");
		attributeName = escapeJSObjectForInstructionScripts(attributeName);
		destination.push(attributeName);
		destination.push(",");
		attributeName = escapeJSObjectForInstructionScripts(name);
		destination.push(attributeName);
	}
	function createHoistableState() {
		return {
			styles: /* @__PURE__ */ new Set(),
			stylesheets: /* @__PURE__ */ new Set(),
			suspenseyImages: !1
		};
	}
	function prefetchDNS(href) {
		var request = currentRequest ? currentRequest : null;
		if (request) {
			var resumableState = request.resumableState, renderState = request.renderState;
			if ("string" === typeof href && href) {
				if (!resumableState.dnsResources.hasOwnProperty(href)) {
					resumableState.dnsResources[href] = null;
					resumableState = renderState.headers;
					var header, JSCompiler_temp;
					if (JSCompiler_temp = resumableState && 0 < resumableState.remainingCapacity) JSCompiler_temp = (header = "<" + ("" + href).replace(regexForHrefInLinkHeaderURLContext, escapeHrefForLinkHeaderURLContextReplacer) + ">; rel=dns-prefetch", 0 <= (resumableState.remainingCapacity -= header.length + 2));
					JSCompiler_temp ? (renderState.resets.dns[href] = null, resumableState.preconnects && (resumableState.preconnects += ", "), resumableState.preconnects += header) : (header = [], pushLinkImpl(header, {
						href,
						rel: "dns-prefetch"
					}), renderState.preconnects.add(header));
				}
				enqueueFlush(request);
			}
		} else previousDispatcher.D(href);
	}
	function preconnect(href, crossOrigin) {
		var request = currentRequest ? currentRequest : null;
		if (request) {
			var resumableState = request.resumableState, renderState = request.renderState;
			if ("string" === typeof href && href) {
				var bucket = "use-credentials" === crossOrigin ? "credentials" : "string" === typeof crossOrigin ? "anonymous" : "default";
				if (!resumableState.connectResources[bucket].hasOwnProperty(href)) {
					resumableState.connectResources[bucket][href] = null;
					resumableState = renderState.headers;
					var header, JSCompiler_temp;
					if (JSCompiler_temp = resumableState && 0 < resumableState.remainingCapacity) {
						JSCompiler_temp = "<" + ("" + href).replace(regexForHrefInLinkHeaderURLContext, escapeHrefForLinkHeaderURLContextReplacer) + ">; rel=preconnect";
						if ("string" === typeof crossOrigin) {
							var escapedCrossOrigin = ("" + crossOrigin).replace(regexForLinkHeaderQuotedParamValueContext, escapeStringForLinkHeaderQuotedParamValueContextReplacer);
							JSCompiler_temp += "; crossorigin=\"" + escapedCrossOrigin + "\"";
						}
						JSCompiler_temp = (header = JSCompiler_temp, 0 <= (resumableState.remainingCapacity -= header.length + 2));
					}
					JSCompiler_temp ? (renderState.resets.connect[bucket][href] = null, resumableState.preconnects && (resumableState.preconnects += ", "), resumableState.preconnects += header) : (bucket = [], pushLinkImpl(bucket, {
						rel: "preconnect",
						href,
						crossOrigin
					}), renderState.preconnects.add(bucket));
				}
				enqueueFlush(request);
			}
		} else previousDispatcher.C(href, crossOrigin);
	}
	function preload(href, as, options) {
		var request = currentRequest ? currentRequest : null;
		if (request) {
			var resumableState = request.resumableState, renderState = request.renderState;
			if (as && href) {
				switch (as) {
					case "image":
						if (options) {
							var imageSrcSet = options.imageSrcSet;
							var imageSizes = options.imageSizes;
							var fetchPriority = options.fetchPriority;
						}
						var key = imageSrcSet ? imageSrcSet + "\n" + (imageSizes || "") : href;
						if (resumableState.imageResources.hasOwnProperty(key)) return;
						resumableState.imageResources[key] = PRELOAD_NO_CREDS;
						resumableState = renderState.headers;
						var header;
						resumableState && 0 < resumableState.remainingCapacity && "string" !== typeof imageSrcSet && "high" === fetchPriority && (header = getPreloadAsHeader(href, as, options), 0 <= (resumableState.remainingCapacity -= header.length + 2)) ? (renderState.resets.image[key] = PRELOAD_NO_CREDS, resumableState.highImagePreloads && (resumableState.highImagePreloads += ", "), resumableState.highImagePreloads += header) : (resumableState = [], pushLinkImpl(resumableState, assign({
							rel: "preload",
							href: imageSrcSet ? void 0 : href,
							as
						}, options)), "high" === fetchPriority ? renderState.highImagePreloads.add(resumableState) : (renderState.bulkPreloads.add(resumableState), renderState.preloads.images.set(key, resumableState)));
						break;
					case "style":
						if (resumableState.styleResources.hasOwnProperty(href)) return;
						imageSrcSet = [];
						pushLinkImpl(imageSrcSet, assign({
							rel: "preload",
							href,
							as
						}, options));
						resumableState.styleResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [options.crossOrigin, options.integrity];
						renderState.preloads.stylesheets.set(href, imageSrcSet);
						renderState.bulkPreloads.add(imageSrcSet);
						break;
					case "script":
						if (resumableState.scriptResources.hasOwnProperty(href)) return;
						imageSrcSet = [];
						renderState.preloads.scripts.set(href, imageSrcSet);
						renderState.bulkPreloads.add(imageSrcSet);
						pushLinkImpl(imageSrcSet, assign({
							rel: "preload",
							href,
							as
						}, options));
						resumableState.scriptResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [options.crossOrigin, options.integrity];
						break;
					default:
						if (resumableState.unknownResources.hasOwnProperty(as)) {
							if (imageSrcSet = resumableState.unknownResources[as], imageSrcSet.hasOwnProperty(href)) return;
						} else imageSrcSet = {}, resumableState.unknownResources[as] = imageSrcSet;
						imageSrcSet[href] = PRELOAD_NO_CREDS;
						if ((resumableState = renderState.headers) && 0 < resumableState.remainingCapacity && "font" === as && (key = getPreloadAsHeader(href, as, options), 0 <= (resumableState.remainingCapacity -= key.length + 2))) renderState.resets.font[href] = PRELOAD_NO_CREDS, resumableState.fontPreloads && (resumableState.fontPreloads += ", "), resumableState.fontPreloads += key;
						else switch (resumableState = [], href = assign({
							rel: "preload",
							href,
							as
						}, options), pushLinkImpl(resumableState, href), as) {
							case "font":
								renderState.fontPreloads.add(resumableState);
								break;
							default: renderState.bulkPreloads.add(resumableState);
						}
				}
				enqueueFlush(request);
			}
		} else previousDispatcher.L(href, as, options);
	}
	function preloadModule(href, options) {
		var request = currentRequest ? currentRequest : null;
		if (request) {
			var resumableState = request.resumableState, renderState = request.renderState;
			if (href) {
				var as = options && "string" === typeof options.as ? options.as : "script";
				switch (as) {
					case "script":
						if (resumableState.moduleScriptResources.hasOwnProperty(href)) return;
						as = [];
						resumableState.moduleScriptResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [options.crossOrigin, options.integrity];
						renderState.preloads.moduleScripts.set(href, as);
						break;
					default:
						if (resumableState.moduleUnknownResources.hasOwnProperty(as)) {
							var resources = resumableState.moduleUnknownResources[as];
							if (resources.hasOwnProperty(href)) return;
						} else resources = {}, resumableState.moduleUnknownResources[as] = resources;
						as = [];
						resources[href] = PRELOAD_NO_CREDS;
				}
				pushLinkImpl(as, assign({
					rel: "modulepreload",
					href
				}, options));
				renderState.bulkPreloads.add(as);
				enqueueFlush(request);
			}
		} else previousDispatcher.m(href, options);
	}
	function preinitStyle(href, precedence, options) {
		var request = currentRequest ? currentRequest : null;
		if (request) {
			var resumableState = request.resumableState, renderState = request.renderState;
			if (href) {
				precedence = precedence || "default";
				var styleQueue = renderState.styles.get(precedence), resourceState = resumableState.styleResources.hasOwnProperty(href) ? resumableState.styleResources[href] : void 0;
				null !== resourceState && (resumableState.styleResources[href] = null, styleQueue || (styleQueue = {
					precedence: escapeTextForBrowser(precedence),
					rules: [],
					hrefs: [],
					sheets: /* @__PURE__ */ new Map()
				}, renderState.styles.set(precedence, styleQueue)), precedence = {
					state: 0,
					props: assign({
						rel: "stylesheet",
						href,
						"data-precedence": precedence
					}, options)
				}, resourceState && (2 === resourceState.length && adoptPreloadCredentials(precedence.props, resourceState), (renderState = renderState.preloads.stylesheets.get(href)) && 0 < renderState.length ? renderState.length = 0 : precedence.state = 1), styleQueue.sheets.set(href, precedence), enqueueFlush(request));
			}
		} else previousDispatcher.S(href, precedence, options);
	}
	function preinitScript(src, options) {
		var request = currentRequest ? currentRequest : null;
		if (request) {
			var resumableState = request.resumableState, renderState = request.renderState;
			if (src) {
				var resourceState = resumableState.scriptResources.hasOwnProperty(src) ? resumableState.scriptResources[src] : void 0;
				null !== resourceState && (resumableState.scriptResources[src] = null, options = assign({
					src,
					async: !0
				}, options), resourceState && (2 === resourceState.length && adoptPreloadCredentials(options, resourceState), src = renderState.preloads.scripts.get(src)) && (src.length = 0), src = [], renderState.scripts.add(src), pushScriptImpl(src, options), enqueueFlush(request));
			}
		} else previousDispatcher.X(src, options);
	}
	function preinitModuleScript(src, options) {
		var request = currentRequest ? currentRequest : null;
		if (request) {
			var resumableState = request.resumableState, renderState = request.renderState;
			if (src) {
				var resourceState = resumableState.moduleScriptResources.hasOwnProperty(src) ? resumableState.moduleScriptResources[src] : void 0;
				null !== resourceState && (resumableState.moduleScriptResources[src] = null, options = assign({
					src,
					type: "module",
					async: !0
				}, options), resourceState && (2 === resourceState.length && adoptPreloadCredentials(options, resourceState), src = renderState.preloads.moduleScripts.get(src)) && (src.length = 0), src = [], renderState.scripts.add(src), pushScriptImpl(src, options), enqueueFlush(request));
			}
		} else previousDispatcher.M(src, options);
	}
	function adoptPreloadCredentials(target, preloadState) {
		target.crossOrigin ??= preloadState[0];
		target.integrity ??= preloadState[1];
	}
	function getPreloadAsHeader(href, as, params) {
		href = ("" + href).replace(regexForHrefInLinkHeaderURLContext, escapeHrefForLinkHeaderURLContextReplacer);
		as = ("" + as).replace(regexForLinkHeaderQuotedParamValueContext, escapeStringForLinkHeaderQuotedParamValueContextReplacer);
		as = "<" + href + ">; rel=preload; as=\"" + as + "\"";
		for (var paramName in params) hasOwnProperty.call(params, paramName) && (href = params[paramName], "string" === typeof href && (as += "; " + paramName.toLowerCase() + "=\"" + ("" + href).replace(regexForLinkHeaderQuotedParamValueContext, escapeStringForLinkHeaderQuotedParamValueContextReplacer) + "\""));
		return as;
	}
	var regexForHrefInLinkHeaderURLContext = /[<>\r\n]/g;
	function escapeHrefForLinkHeaderURLContextReplacer(match) {
		switch (match) {
			case "<": return "%3C";
			case ">": return "%3E";
			case "\n": return "%0A";
			case "\r": return "%0D";
			default: throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
		}
	}
	var regexForLinkHeaderQuotedParamValueContext = /["';,\r\n]/g;
	function escapeStringForLinkHeaderQuotedParamValueContextReplacer(match) {
		switch (match) {
			case "\"": return "%22";
			case "'": return "%27";
			case ";": return "%3B";
			case ",": return "%2C";
			case "\n": return "%0A";
			case "\r": return "%0D";
			default: throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
		}
	}
	function hoistStyleQueueDependency(styleQueue) {
		this.styles.add(styleQueue);
	}
	function hoistStylesheetDependency(stylesheet) {
		this.stylesheets.add(stylesheet);
	}
	function hoistHoistables(parentState, childState) {
		childState.styles.forEach(hoistStyleQueueDependency, parentState);
		childState.stylesheets.forEach(hoistStylesheetDependency, parentState);
		childState.suspenseyImages && (parentState.suspenseyImages = !0);
	}
	function createRenderState(resumableState, generateStaticMarkup) {
		var idPrefix = resumableState.idPrefix, bootstrapChunks = [], bootstrapScriptContent = resumableState.bootstrapScriptContent, bootstrapScripts = resumableState.bootstrapScripts, bootstrapModules = resumableState.bootstrapModules;
		void 0 !== bootstrapScriptContent && (bootstrapChunks.push("<script"), pushCompletedShellIdAttribute(bootstrapChunks, resumableState), bootstrapChunks.push(">", ("" + bootstrapScriptContent).replace(scriptRegex, scriptReplacer), "<\/script>"));
		bootstrapScriptContent = idPrefix + "P:";
		var JSCompiler_object_inline_segmentPrefix_1724 = idPrefix + "S:";
		idPrefix += "B:";
		var JSCompiler_object_inline_preconnects_1738 = /* @__PURE__ */ new Set(), JSCompiler_object_inline_fontPreloads_1739 = /* @__PURE__ */ new Set(), JSCompiler_object_inline_highImagePreloads_1740 = /* @__PURE__ */ new Set(), JSCompiler_object_inline_styles_1741 = /* @__PURE__ */ new Map(), JSCompiler_object_inline_bootstrapScripts_1742 = /* @__PURE__ */ new Set(), JSCompiler_object_inline_scripts_1743 = /* @__PURE__ */ new Set(), JSCompiler_object_inline_bulkPreloads_1744 = /* @__PURE__ */ new Set(), JSCompiler_object_inline_preloads_1745 = {
			images: /* @__PURE__ */ new Map(),
			stylesheets: /* @__PURE__ */ new Map(),
			scripts: /* @__PURE__ */ new Map(),
			moduleScripts: /* @__PURE__ */ new Map()
		};
		if (void 0 !== bootstrapScripts) for (var i = 0; i < bootstrapScripts.length; i++) {
			var scriptConfig = bootstrapScripts[i], src, crossOrigin = void 0, integrity = void 0, props = {
				rel: "preload",
				as: "script",
				fetchPriority: "low",
				nonce: void 0
			};
			"string" === typeof scriptConfig ? props.href = src = scriptConfig : (props.href = src = scriptConfig.src, props.integrity = integrity = "string" === typeof scriptConfig.integrity ? scriptConfig.integrity : void 0, props.crossOrigin = crossOrigin = "string" === typeof scriptConfig || null == scriptConfig.crossOrigin ? void 0 : "use-credentials" === scriptConfig.crossOrigin ? "use-credentials" : "");
			scriptConfig = resumableState;
			var href = src;
			scriptConfig.scriptResources[href] = null;
			scriptConfig.moduleScriptResources[href] = null;
			scriptConfig = [];
			pushLinkImpl(scriptConfig, props);
			JSCompiler_object_inline_bootstrapScripts_1742.add(scriptConfig);
			bootstrapChunks.push("<script src=\"", escapeTextForBrowser(src), "\"");
			"string" === typeof integrity && bootstrapChunks.push(" integrity=\"", escapeTextForBrowser(integrity), "\"");
			"string" === typeof crossOrigin && bootstrapChunks.push(" crossorigin=\"", escapeTextForBrowser(crossOrigin), "\"");
			pushCompletedShellIdAttribute(bootstrapChunks, resumableState);
			bootstrapChunks.push(" async=\"\"><\/script>");
		}
		if (void 0 !== bootstrapModules) for (bootstrapScripts = 0; bootstrapScripts < bootstrapModules.length; bootstrapScripts++) props = bootstrapModules[bootstrapScripts], crossOrigin = src = void 0, integrity = {
			rel: "modulepreload",
			fetchPriority: "low",
			nonce: void 0
		}, "string" === typeof props ? integrity.href = i = props : (integrity.href = i = props.src, integrity.integrity = crossOrigin = "string" === typeof props.integrity ? props.integrity : void 0, integrity.crossOrigin = src = "string" === typeof props || null == props.crossOrigin ? void 0 : "use-credentials" === props.crossOrigin ? "use-credentials" : ""), props = resumableState, scriptConfig = i, props.scriptResources[scriptConfig] = null, props.moduleScriptResources[scriptConfig] = null, props = [], pushLinkImpl(props, integrity), JSCompiler_object_inline_bootstrapScripts_1742.add(props), bootstrapChunks.push("<script type=\"module\" src=\"", escapeTextForBrowser(i), "\""), "string" === typeof crossOrigin && bootstrapChunks.push(" integrity=\"", escapeTextForBrowser(crossOrigin), "\""), "string" === typeof src && bootstrapChunks.push(" crossorigin=\"", escapeTextForBrowser(src), "\""), pushCompletedShellIdAttribute(bootstrapChunks, resumableState), bootstrapChunks.push(" async=\"\"><\/script>");
		return {
			placeholderPrefix: bootstrapScriptContent,
			segmentPrefix: JSCompiler_object_inline_segmentPrefix_1724,
			boundaryPrefix: idPrefix,
			startInlineScript: "<script",
			startInlineStyle: "<style",
			preamble: {
				htmlChunks: null,
				headChunks: null,
				bodyChunks: null
			},
			externalRuntimeScript: null,
			bootstrapChunks,
			importMapChunks: [],
			onHeaders: void 0,
			headers: null,
			resets: {
				font: {},
				dns: {},
				connect: {
					default: {},
					anonymous: {},
					credentials: {}
				},
				image: {},
				style: {}
			},
			charsetChunks: [],
			viewportChunks: [],
			hoistableChunks: [],
			preconnects: JSCompiler_object_inline_preconnects_1738,
			fontPreloads: JSCompiler_object_inline_fontPreloads_1739,
			highImagePreloads: JSCompiler_object_inline_highImagePreloads_1740,
			styles: JSCompiler_object_inline_styles_1741,
			bootstrapScripts: JSCompiler_object_inline_bootstrapScripts_1742,
			scripts: JSCompiler_object_inline_scripts_1743,
			bulkPreloads: JSCompiler_object_inline_bulkPreloads_1744,
			preloads: JSCompiler_object_inline_preloads_1745,
			nonce: {
				script: void 0,
				style: void 0
			},
			stylesToHoist: !1,
			generateStaticMarkup
		};
	}
	function pushTextInstance(target, text, renderState, textEmbedded) {
		if (renderState.generateStaticMarkup) return target.push(escapeTextForBrowser(text)), !1;
		"" === text ? target = textEmbedded : (textEmbedded && target.push("<!-- -->"), target.push(escapeTextForBrowser(text)), target = !0);
		return target;
	}
	function pushSegmentFinale(target, renderState, lastPushedText, textEmbedded) {
		renderState.generateStaticMarkup || lastPushedText && textEmbedded && target.push("<!-- -->");
	}
	var bind = Function.prototype.bind;
	var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	function getComponentNameFromType(type) {
		if (null == type) return null;
		if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
		if ("string" === typeof type) return type;
		switch (type) {
			case REACT_FRAGMENT_TYPE: return "Fragment";
			case REACT_PROFILER_TYPE: return "Profiler";
			case REACT_STRICT_MODE_TYPE: return "StrictMode";
			case REACT_SUSPENSE_TYPE: return "Suspense";
			case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
			case REACT_ACTIVITY_TYPE: return "Activity";
			case REACT_VIEW_TRANSITION_TYPE: return "ViewTransition";
		}
		if ("object" === typeof type) switch (type.$$typeof) {
			case REACT_PORTAL_TYPE: return "Portal";
			case REACT_CONTEXT_TYPE: return type.displayName || "Context";
			case REACT_CONSUMER_TYPE: return (type._context.displayName || "Context") + ".Consumer";
			case REACT_FORWARD_REF_TYPE:
				var innerType = type.render;
				type = type.displayName;
				type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
				return type;
			case REACT_MEMO_TYPE: return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
			case REACT_LAZY_TYPE:
				innerType = type._payload;
				type = type._init;
				try {
					return getComponentNameFromType(type(innerType));
				} catch (x) {}
		}
		return null;
	}
	var emptyContextObject = {};
	var currentActiveSnapshot = null;
	function popToNearestCommonAncestor(prev, next) {
		if (prev !== next) {
			prev.context._currentValue2 = prev.parentValue;
			prev = prev.parent;
			var parentNext = next.parent;
			if (null === prev) {
				if (null !== parentNext) throw Error(formatProdErrorMessage(401));
			} else {
				if (null === parentNext) throw Error(formatProdErrorMessage(401));
				popToNearestCommonAncestor(prev, parentNext);
			}
			next.context._currentValue2 = next.value;
		}
	}
	function popAllPrevious(prev) {
		prev.context._currentValue2 = prev.parentValue;
		prev = prev.parent;
		null !== prev && popAllPrevious(prev);
	}
	function pushAllNext(next) {
		var parentNext = next.parent;
		null !== parentNext && pushAllNext(parentNext);
		next.context._currentValue2 = next.value;
	}
	function popPreviousToCommonLevel(prev, next) {
		prev.context._currentValue2 = prev.parentValue;
		prev = prev.parent;
		if (null === prev) throw Error(formatProdErrorMessage(402));
		prev.depth === next.depth ? popToNearestCommonAncestor(prev, next) : popPreviousToCommonLevel(prev, next);
	}
	function popNextToCommonLevel(prev, next) {
		var parentNext = next.parent;
		if (null === parentNext) throw Error(formatProdErrorMessage(402));
		prev.depth === parentNext.depth ? popToNearestCommonAncestor(prev, parentNext) : popNextToCommonLevel(prev, parentNext);
		next.context._currentValue2 = next.value;
	}
	function switchContext(newSnapshot) {
		var prev = currentActiveSnapshot;
		prev !== newSnapshot && (null === prev ? pushAllNext(newSnapshot) : null === newSnapshot ? popAllPrevious(prev) : prev.depth === newSnapshot.depth ? popToNearestCommonAncestor(prev, newSnapshot) : prev.depth > newSnapshot.depth ? popPreviousToCommonLevel(prev, newSnapshot) : popNextToCommonLevel(prev, newSnapshot), currentActiveSnapshot = newSnapshot);
	}
	var classComponentUpdater = {
		enqueueSetState: function(inst, payload) {
			inst = inst._reactInternals;
			null !== inst.queue && inst.queue.push(payload);
		},
		enqueueReplaceState: function(inst, payload) {
			inst = inst._reactInternals;
			inst.replace = !0;
			inst.queue = [payload];
		},
		enqueueForceUpdate: function() {}
	};
	var emptyTreeContext = {
		id: 1,
		overflow: ""
	};
	function getTreeId(context) {
		var overflow = context.overflow;
		context = context.id;
		return (context & ~(1 << 32 - clz32(context) - 1)).toString(32) + overflow;
	}
	function pushTreeContext(baseContext, totalChildren, index) {
		var baseIdWithLeadingBit = baseContext.id;
		baseContext = baseContext.overflow;
		var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
		baseIdWithLeadingBit &= ~(1 << baseLength);
		index += 1;
		var length = 32 - clz32(totalChildren) + baseLength;
		if (30 < length) {
			var numberOfOverflowBits = baseLength - baseLength % 5;
			length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
			baseIdWithLeadingBit >>= numberOfOverflowBits;
			baseLength -= numberOfOverflowBits;
			return {
				id: 1 << 32 - clz32(totalChildren) + baseLength | index << baseLength | baseIdWithLeadingBit,
				overflow: length + baseContext
			};
		}
		return {
			id: 1 << length | index << baseLength | baseIdWithLeadingBit,
			overflow: baseContext
		};
	}
	var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
	var log = Math.log;
	var LN2 = Math.LN2;
	function clz32Fallback(x) {
		x >>>= 0;
		return 0 === x ? 32 : 31 - (log(x) / LN2 | 0) | 0;
	}
	function noop() {}
	var SuspenseException = Error(formatProdErrorMessage(460));
	function trackUsedThenable(thenableState, thenable, index) {
		index = thenableState[index];
		void 0 === index ? thenableState.push(thenable) : index !== thenable && (thenable.then(noop, noop), thenable = index);
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected":
				thenableState = thenable.reason;
				if (void 0 === thenableState && !("reason" in thenable)) throw Error(formatProdErrorMessage(600));
				throw thenableState;
			default:
				"string" === typeof thenable.status ? thenable.then(noop, noop) : (thenableState = thenable, thenableState.status = "pending", thenableState.then(function(fulfilledValue) {
					if ("pending" === thenable.status) {
						var fulfilledThenable = thenable;
						fulfilledThenable.status = "fulfilled";
						fulfilledThenable.value = fulfilledValue;
					}
				}, function(error) {
					if ("pending" === thenable.status) {
						var rejectedThenable = thenable;
						rejectedThenable.status = "rejected";
						rejectedThenable.reason = error;
					}
				}));
				switch (thenable.status) {
					case "fulfilled": return thenable.value;
					case "rejected": throw thenable.reason;
				}
				suspendedThenable = thenable;
				throw SuspenseException;
		}
	}
	var suspendedThenable = null;
	function getSuspendedThenable() {
		if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
		var thenable = suspendedThenable;
		suspendedThenable = null;
		return thenable;
	}
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is;
	var currentlyRenderingComponent = null;
	var currentlyRenderingTask = null;
	var currentlyRenderingRequest = null;
	var currentlyRenderingKeyPath = null;
	var firstWorkInProgressHook = null;
	var workInProgressHook = null;
	var isReRender = !1;
	var didScheduleRenderPhaseUpdate = !1;
	var localIdCounter = 0;
	var actionStateCounter = 0;
	var actionStateMatchingIndex = -1;
	var thenableIndexCounter = 0;
	var thenableState = null;
	function createRecoverableError(recoverable) {
		recoverable = recoverable._reason;
		if ("function" === typeof recoverable) try {
			var initializedReason = recoverable();
		} catch ($jscomp$unused$catch) {
			initializedReason = "The reason for browser-only rendering could not be determined because its initializer threw.";
		}
		else initializedReason = recoverable;
		initializedReason = Error(formatProdErrorMessage(603), void 0 === recoverable ? void 0 : { cause: initializedReason });
		Object.defineProperty(initializedReason, REACT_RECOVERABLE_TYPE, { value: !0 });
		return initializedReason;
	}
	function isRecoverableError(error) {
		return "object" !== typeof error || null === error ? !1 : !0 === error[REACT_RECOVERABLE_TYPE];
	}
	function cloneRecoverableErrorAsFatal(recoverableError) {
		var fatalRecoverableError = Error(formatProdErrorMessage(604), hasOwnProperty.call(recoverableError, "cause") ? { cause: recoverableError.cause } : void 0);
		recoverableError = recoverableError.stack;
		if (void 0 !== recoverableError) {
			var frameStart = recoverableError.indexOf("\n");
			fatalRecoverableError.stack = fatalRecoverableError.name + ": " + fatalRecoverableError.message + (-1 === frameStart ? "" : recoverableError.slice(frameStart));
		} else fatalRecoverableError.stack = void 0;
		return fatalRecoverableError;
	}
	var renderPhaseUpdates = null;
	var numberOfReRenders = 0;
	function resolveCurrentlyRenderingComponent() {
		if (null === currentlyRenderingComponent) throw Error(formatProdErrorMessage(321));
		return currentlyRenderingComponent;
	}
	function createHook() {
		if (0 < numberOfReRenders) throw Error(formatProdErrorMessage(312));
		return {
			memoizedState: null,
			queue: null,
			next: null
		};
	}
	function createWorkInProgressHook() {
		null === workInProgressHook ? null === firstWorkInProgressHook ? (isReRender = !1, firstWorkInProgressHook = workInProgressHook = createHook()) : (isReRender = !0, workInProgressHook = firstWorkInProgressHook) : null === workInProgressHook.next ? (isReRender = !1, workInProgressHook = workInProgressHook.next = createHook()) : (isReRender = !0, workInProgressHook = workInProgressHook.next);
		return workInProgressHook;
	}
	function getThenableStateAfterSuspending() {
		var state = thenableState;
		thenableState = null;
		return state;
	}
	function resetHooksState() {
		currentlyRenderingKeyPath = currentlyRenderingRequest = currentlyRenderingTask = currentlyRenderingComponent = null;
		didScheduleRenderPhaseUpdate = !1;
		firstWorkInProgressHook = null;
		numberOfReRenders = 0;
		workInProgressHook = renderPhaseUpdates = null;
	}
	function basicStateReducer(state, action) {
		return "function" === typeof action ? action(state) : action;
	}
	function useReducer(reducer, initialArg, init) {
		currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
		workInProgressHook = createWorkInProgressHook();
		if (isReRender) {
			var queue = workInProgressHook.queue;
			initialArg = queue.dispatch;
			if (null !== renderPhaseUpdates && (init = renderPhaseUpdates.get(queue), void 0 !== init)) {
				renderPhaseUpdates.delete(queue);
				queue = workInProgressHook.memoizedState;
				do
					queue = reducer(queue, init.action), init = init.next;
				while (null !== init);
				workInProgressHook.memoizedState = queue;
				return [queue, initialArg];
			}
			return [workInProgressHook.memoizedState, initialArg];
		}
		reducer = reducer === basicStateReducer ? "function" === typeof initialArg ? initialArg() : initialArg : void 0 !== init ? init(initialArg) : initialArg;
		workInProgressHook.memoizedState = reducer;
		reducer = workInProgressHook.queue = {
			last: null,
			dispatch: null
		};
		reducer = reducer.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, reducer);
		return [workInProgressHook.memoizedState, reducer];
	}
	function useMemo(nextCreate, deps) {
		currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
		workInProgressHook = createWorkInProgressHook();
		deps = void 0 === deps ? null : deps;
		if (null !== workInProgressHook) {
			var prevState = workInProgressHook.memoizedState;
			if (null !== prevState && null !== deps) {
				var prevDeps = prevState[1];
				a: if (null === prevDeps) prevDeps = !1;
				else {
					for (var i = 0; i < prevDeps.length && i < deps.length; i++) if (!objectIs(deps[i], prevDeps[i])) {
						prevDeps = !1;
						break a;
					}
					prevDeps = !0;
				}
				if (prevDeps) return prevState[0];
			}
		}
		nextCreate = nextCreate();
		workInProgressHook.memoizedState = [nextCreate, deps];
		return nextCreate;
	}
	function dispatchAction(componentIdentity, queue, action) {
		if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
		if (componentIdentity === currentlyRenderingComponent) if (didScheduleRenderPhaseUpdate = !0, componentIdentity = {
			action,
			next: null
		}, null === renderPhaseUpdates && (renderPhaseUpdates = /* @__PURE__ */ new Map()), action = renderPhaseUpdates.get(queue), void 0 === action) renderPhaseUpdates.set(queue, componentIdentity);
		else {
			for (queue = action; null !== queue.next;) queue = queue.next;
			queue.next = componentIdentity;
		}
	}
	function throwOnUseEffectEventCall() {
		throw Error(formatProdErrorMessage(440));
	}
	function unsupportedStartTransition() {
		throw Error(formatProdErrorMessage(394));
	}
	function unsupportedSetOptimisticState() {
		throw Error(formatProdErrorMessage(479));
	}
	function useActionState(action, initialState, permalink) {
		resolveCurrentlyRenderingComponent();
		var actionStateHookIndex = actionStateCounter++, request = currentlyRenderingRequest;
		if ("function" === typeof action.$$FORM_ACTION) {
			var nextPostbackStateKey = null, componentKeyPath = currentlyRenderingKeyPath;
			request = request.formState;
			var isSignatureEqual = action.$$IS_SIGNATURE_EQUAL;
			if (null !== request && "function" === typeof isSignatureEqual) {
				var postbackKey = request[1];
				isSignatureEqual.call(action, request[2], request[3]) && (nextPostbackStateKey = void 0 !== permalink ? "p" + permalink : "k" + murmurhash3_32_gc(JSON.stringify([
					componentKeyPath,
					null,
					actionStateHookIndex
				]), 0), postbackKey === nextPostbackStateKey && (actionStateMatchingIndex = actionStateHookIndex, initialState = request[0]));
			}
			var boundAction = action.bind(null, initialState);
			action = function(payload) {
				boundAction(payload);
			};
			"function" === typeof boundAction.$$FORM_ACTION && (action.$$FORM_ACTION = function(prefix) {
				prefix = boundAction.$$FORM_ACTION(prefix);
				void 0 !== permalink && (permalink += "", prefix.action = permalink);
				var formData = prefix.data;
				formData && (null === nextPostbackStateKey && (nextPostbackStateKey = void 0 !== permalink ? "p" + permalink : "k" + murmurhash3_32_gc(JSON.stringify([
					componentKeyPath,
					null,
					actionStateHookIndex
				]), 0)), formData.append("$ACTION_KEY", nextPostbackStateKey));
				return prefix;
			});
			return [
				initialState,
				action,
				!1
			];
		}
		var boundAction$22 = action.bind(null, initialState);
		return [
			initialState,
			function(payload) {
				boundAction$22(payload);
			},
			!1
		];
	}
	function unwrapThenable(thenable) {
		var index = thenableIndexCounter;
		thenableIndexCounter += 1;
		null === thenableState && (thenableState = []);
		return trackUsedThenable(thenableState, thenable, index);
	}
	function unsupportedRefresh() {
		throw Error(formatProdErrorMessage(393));
	}
	var HooksDispatcher = {
		readContext: function(context) {
			return context._currentValue2;
		},
		use: function(usable) {
			if (null !== usable && "object" === typeof usable) {
				if ("function" === typeof usable.then) return unwrapThenable(usable);
				if (usable.$$typeof === REACT_RECOVERABLE_TYPE) throw createRecoverableError(usable);
				if (usable.$$typeof === REACT_CONTEXT_TYPE) return usable._currentValue2;
			}
			throw Error(formatProdErrorMessage(438, String(usable)));
		},
		useContext: function(context) {
			resolveCurrentlyRenderingComponent();
			return context._currentValue2;
		},
		useMemo,
		useReducer,
		useRef: function(initialValue) {
			currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
			workInProgressHook = createWorkInProgressHook();
			var previousRef = workInProgressHook.memoizedState;
			return null === previousRef ? (initialValue = { current: initialValue }, workInProgressHook.memoizedState = initialValue) : previousRef;
		},
		useState: function(initialState) {
			return useReducer(basicStateReducer, initialState);
		},
		useInsertionEffect: noop,
		useLayoutEffect: noop,
		useCallback: function(callback, deps) {
			return useMemo(function() {
				return callback;
			}, deps);
		},
		useImperativeHandle: noop,
		useEffect: noop,
		useDebugValue: noop,
		useDeferredValue: function(value, initialValue) {
			resolveCurrentlyRenderingComponent();
			return void 0 !== initialValue ? initialValue : value;
		},
		useTransition: function() {
			resolveCurrentlyRenderingComponent();
			return [!1, unsupportedStartTransition];
		},
		useId: function() {
			var treeId = getTreeId(currentlyRenderingTask.treeContext), resumableState = currentResumableState;
			if (null === resumableState) throw Error(formatProdErrorMessage(404));
			return makeId(resumableState, treeId, localIdCounter++);
		},
		useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
			if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
			return getServerSnapshot();
		},
		useOptimistic: function(passthrough) {
			resolveCurrentlyRenderingComponent();
			return [passthrough, unsupportedSetOptimisticState];
		},
		useActionState,
		useFormState: useActionState,
		useHostTransitionStatus: function() {
			resolveCurrentlyRenderingComponent();
			return sharedNotPendingObject;
		},
		useMemoCache: function(size) {
			for (var data = Array(size), i = 0; i < size; i++) data[i] = REACT_MEMO_CACHE_SENTINEL;
			return data;
		},
		useCacheRefresh: function() {
			return unsupportedRefresh;
		},
		useEffectEvent: function() {
			return throwOnUseEffectEventCall;
		}
	};
	var currentResumableState = null;
	var DefaultAsyncDispatcher = {
		getCacheForType: function() {
			throw Error(formatProdErrorMessage(248));
		},
		cacheSignal: function() {
			throw Error(formatProdErrorMessage(248));
		}
	};
	var prefix;
	var suffix;
	function describeBuiltInComponentFrame(name) {
		if (void 0 === prefix) try {
			throw Error();
		} catch (x) {
			var match = x.stack.trim().match(/\n( *(at )?)/);
			prefix = match && match[1] || "";
			suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + prefix + name + suffix;
	}
	var reentry = !1;
	function describeNativeComponentFrame(fn, construct) {
		if (!fn || reentry) return "";
		reentry = !0;
		var previousPrepareStackTrace = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var RunInRootFrame = { DetermineComponentFrameRoot: function() {
				try {
					if (construct) {
						var Fake = function() {
							throw Error();
						};
						Object.defineProperty(Fake.prototype, "props", { set: function() {
							throw Error();
						} });
						if ("object" === typeof Reflect && Reflect.construct) {
							try {
								Reflect.construct(Fake, []);
							} catch (x) {
								var control = x;
							}
							Reflect.construct(fn, [], Fake);
						} else {
							try {
								Fake.call();
							} catch (x$24) {
								control = x$24;
							}
							Fake = !1;
							try {
								var prevProps = Object.getOwnPropertyDescriptor(fn.prototype, "props");
								Object.defineProperty(fn.prototype, "props", {
									configurable: !0,
									set: function() {
										throw Error();
									}
								});
								Fake = !0;
								new fn();
							} finally {
								Fake && (void 0 !== prevProps ? Object.defineProperty(fn.prototype, "props", prevProps) : delete fn.prototype.props);
							}
						}
					} else {
						try {
							throw Error();
						} catch (x$25) {
							control = x$25;
						}
						(Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
					}
				} catch (sample) {
					if (sample && control && "string" === typeof sample.stack) return [sample.stack, control.stack];
				}
				return [null, null];
			} };
			RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
			namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
			if (sampleStack && controlStack) {
				var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
				for (namePropDescriptor = RunInRootFrame = 0; RunInRootFrame < sampleLines.length && !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot");) RunInRootFrame++;
				for (; namePropDescriptor < controlLines.length && !controlLines[namePropDescriptor].includes("DetermineComponentFrameRoot");) namePropDescriptor++;
				if (RunInRootFrame === sampleLines.length || namePropDescriptor === controlLines.length) for (RunInRootFrame = sampleLines.length - 1, namePropDescriptor = controlLines.length - 1; 1 <= RunInRootFrame && 0 <= namePropDescriptor && sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor];) namePropDescriptor--;
				for (; 1 <= RunInRootFrame && 0 <= namePropDescriptor; RunInRootFrame--, namePropDescriptor--) if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
					if (1 !== RunInRootFrame || 1 !== namePropDescriptor) do
						if (RunInRootFrame--, namePropDescriptor--, 0 > namePropDescriptor || sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
							var frame = "\n" + sampleLines[RunInRootFrame].replace(" at new ", " at ");
							fn.displayName && frame.includes("<anonymous>") && (frame = frame.replace("<anonymous>", fn.displayName));
							return frame;
						}
					while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
					break;
				}
			}
		} finally {
			reentry = !1, Error.prepareStackTrace = previousPrepareStackTrace;
		}
		return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(previousPrepareStackTrace) : "";
	}
	function describeComponentStackByType(type) {
		if ("string" === typeof type) return describeBuiltInComponentFrame(type);
		if ("function" === typeof type) return type.prototype && type.prototype.isReactComponent ? describeNativeComponentFrame(type, !0) : describeNativeComponentFrame(type, !1);
		if ("object" === typeof type && null !== type) {
			switch (type.$$typeof) {
				case REACT_FORWARD_REF_TYPE: return describeNativeComponentFrame(type.render, !1);
				case REACT_MEMO_TYPE: return describeNativeComponentFrame(type.type, !1);
				case REACT_LAZY_TYPE:
					var lazyComponent = type, payload = lazyComponent._payload;
					lazyComponent = lazyComponent._init;
					try {
						type = lazyComponent(payload);
					} catch (x) {
						return describeBuiltInComponentFrame("Lazy");
					}
					return describeComponentStackByType(type);
			}
			if ("string" === typeof type.name) {
				a: {
					payload = type.name;
					lazyComponent = type.env;
					var location = type.debugLocation;
					if (null != location && (type = Error.prepareStackTrace, Error.prepareStackTrace = void 0, location = location.stack, Error.prepareStackTrace = type, location.startsWith("Error: react-stack-top-frame\n") && (location = location.slice(29)), type = location.indexOf("\n"), -1 !== type && (location = location.slice(type + 1)), type = location.indexOf("react_stack_bottom_frame"), -1 !== type && (type = location.lastIndexOf("\n", type)), type = -1 !== type ? location = location.slice(0, type) : "", location = type.lastIndexOf("\n"), type = -1 === location ? type : type.slice(location + 1), -1 !== type.indexOf(payload))) {
						payload = "\n" + type;
						break a;
					}
					payload = describeBuiltInComponentFrame(payload + (lazyComponent ? " [" + lazyComponent + "]" : ""));
				}
				return payload;
			}
		}
		switch (type) {
			case REACT_SUSPENSE_LIST_TYPE: return describeBuiltInComponentFrame("SuspenseList");
			case REACT_SUSPENSE_TYPE: return describeBuiltInComponentFrame("Suspense");
			case REACT_VIEW_TRANSITION_TYPE: return describeBuiltInComponentFrame("ViewTransition");
		}
		return "";
	}
	function isEligibleForOutlining(request, boundary) {
		return (500 < boundary.byteSize || boundary.defer) && null === boundary.preamble;
	}
	function defaultErrorHandler(error) {
		if ("object" === typeof error && null !== error && "string" === typeof error.environmentName) {
			var JSCompiler_inline_result = error.environmentName;
			error = [error].slice(0);
			"string" === typeof error[0] ? error.splice(0, 1, "[%s] " + error[0], " " + JSCompiler_inline_result + " ") : error.splice(0, 0, "[%s]", " " + JSCompiler_inline_result + " ");
			error.unshift(console);
			JSCompiler_inline_result = bind.apply(console.error, error);
			JSCompiler_inline_result();
		} else console.error(error);
		return null;
	}
	function RequestInstance(resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onBrowserBailout, onAllReady, onShellReady, onShellError, onFatalError, formState) {
		var abortSet = /* @__PURE__ */ new Set();
		this.destination = null;
		this.flushScheduled = !1;
		this.resumableState = resumableState;
		this.renderState = renderState;
		this.rootFormatContext = rootFormatContext;
		this.progressiveChunkSize = void 0 === progressiveChunkSize ? 12800 : progressiveChunkSize;
		this.status = 10;
		this.fatalError = null;
		this.aborted = !1;
		this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0;
		this.completedPreambleSegments = this.completedRootSegment = null;
		this.byteSize = 0;
		this.abortableTasks = abortSet;
		this.pingedTasks = [];
		this.currentTask = null;
		this.clientRenderedBoundaries = [];
		this.completedBoundaries = [];
		this.partialBoundaries = [];
		this.postponedState = this.trackedPostpones = null;
		this.onError = void 0 === onError ? defaultErrorHandler : onError;
		this.onBrowserBailout = void 0 === onBrowserBailout ? noop : onBrowserBailout;
		this.onAllReady = void 0 === onAllReady ? noop : onAllReady;
		this.onShellReady = void 0 === onShellReady ? noop : onShellReady;
		this.onShellError = void 0 === onShellError ? noop : onShellError;
		this.onFatalError = void 0 === onFatalError ? noop : onFatalError;
		this.renderLifetimeController = null;
		this.formState = void 0 === formState ? null : formState;
	}
	function createRequest(children, resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onBrowserBailout, onAllReady, onShellReady, onShellError, onFatalError, formState) {
		resumableState = new RequestInstance(resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onBrowserBailout, onAllReady, onShellReady, onShellError, onFatalError, formState);
		renderState = createPendingSegment(resumableState, 0, null, rootFormatContext, !1, !1);
		renderState.parentFlushed = !0;
		children = createRenderTask(resumableState, null, children, -1, null, renderState, null, null, resumableState.abortableTasks, null, rootFormatContext, null, emptyTreeContext, null, null);
		pushComponentStack(children);
		resumableState.pingedTasks.push(children);
		return resumableState;
	}
	var currentRequest = null;
	function pingTask(request, task) {
		request.pingedTasks.push(task);
		1 === request.pingedTasks.length && (request.flushScheduled = null !== request.destination, performWork(request));
	}
	function createSuspenseBoundary(request, row, fallbackAbortableTasks, preamble, defer) {
		fallbackAbortableTasks = {
			status: 0,
			rootSegmentID: -1,
			parentFlushed: !1,
			pendingTasks: 0,
			row,
			completedSegments: [],
			byteSize: 0,
			defer,
			fallbackAbortableTasks,
			errorDigest: null,
			contentState: createHoistableState(),
			fallbackState: createHoistableState(),
			preamble,
			tracked: null
		};
		null !== row && (row.pendingTasks++, preamble = row.boundaries, null !== preamble && (request.allPendingTasks++, fallbackAbortableTasks.pendingTasks++, preamble.push(fallbackAbortableTasks)), request = row.inheritedHoistables, null !== request && hoistHoistables(fallbackAbortableTasks.contentState, request));
		return fallbackAbortableTasks;
	}
	function createRenderTask(request, thenableState, node, childIndex, blockedBoundary, blockedSegment, blockedPreamble, hoistableState, abortSet, keyPath, formatContext, context, treeContext, row, componentStack) {
		request.allPendingTasks++;
		null === blockedBoundary ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
		null !== row && row.pendingTasks++;
		var task = {
			replay: null,
			node,
			childIndex,
			ping: {
				resolve: function() {
					return pingTask(request, task);
				},
				reject: function(error) {
					request.aborted ? task.abortSet.delete(task) && finishAbortedTask(task, request, error) : pingTask(request, task);
				}
			},
			blockedBoundary,
			blockedSegment,
			blockedPreamble,
			hoistableState,
			abortSet,
			keyPath,
			formatContext,
			context,
			treeContext,
			row,
			componentStack,
			thenableState
		};
		abortSet.add(task);
		return task;
	}
	function createReplayTask(request, thenableState, replay, node, childIndex, blockedBoundary, hoistableState, abortSet, keyPath, formatContext, context, treeContext, row, componentStack) {
		request.allPendingTasks++;
		null === blockedBoundary ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
		null !== row && row.pendingTasks++;
		replay.pendingTasks++;
		var task = {
			replay,
			node,
			childIndex,
			ping: {
				resolve: function() {
					return pingTask(request, task);
				},
				reject: function(error) {
					request.aborted ? task.abortSet.delete(task) && finishAbortedTask(task, request, error) : pingTask(request, task);
				}
			},
			blockedBoundary,
			blockedSegment: null,
			blockedPreamble: null,
			hoistableState,
			abortSet,
			keyPath,
			formatContext,
			context,
			treeContext,
			row,
			componentStack,
			thenableState
		};
		abortSet.add(task);
		return task;
	}
	function createPendingSegment(request, index, boundary, parentFormatContext, lastPushedText, textEmbedded) {
		return {
			status: 0,
			parentFlushed: !1,
			id: -1,
			index,
			chunks: [],
			children: [],
			preambleChildren: [],
			parentFormatContext,
			boundary,
			lastPushedText,
			textEmbedded
		};
	}
	function pushComponentStack(task) {
		var node = task.node;
		if ("object" === typeof node && null !== node) switch (node.$$typeof) {
			case REACT_ELEMENT_TYPE: task.componentStack = {
				parent: task.componentStack,
				type: node.type
			};
		}
	}
	function replaceSuspenseComponentStackWithSuspenseFallbackStack(componentStack) {
		return null === componentStack ? null : {
			parent: componentStack.parent,
			type: "Suspense Fallback"
		};
	}
	function getThrownInfo(node$jscomp$0) {
		var errorInfo = {};
		node$jscomp$0 && Object.defineProperty(errorInfo, "componentStack", {
			configurable: !0,
			enumerable: !0,
			get: function() {
				try {
					var info = "", node = node$jscomp$0;
					do
						info += describeComponentStackByType(node.type), node = node.parent;
					while (node);
					var JSCompiler_inline_result = info;
				} catch (x) {
					JSCompiler_inline_result = "\nError generating stack: " + x.message + "\n" + x.stack;
				}
				Object.defineProperty(errorInfo, "componentStack", { value: JSCompiler_inline_result });
				return JSCompiler_inline_result;
			}
		});
		return errorInfo;
	}
	function logRecoverableError(request, error, errorInfo) {
		if (isRecoverableError(error)) return request = request.onBrowserBailout, request(error, errorInfo), "";
		request = request.onError;
		error = request(error, errorInfo);
		if (null == error || "string" === typeof error) return "" === error ? void 0 : error;
	}
	function fatalError(request, error) {
		var onShellError = request.onShellError, onFatalError = request.onFatalError;
		0 !== request.pendingRootTasks && onShellError(error);
		onFatalError(error);
		endRenderLifetime(request);
		null !== request.destination ? (request.status = 13, request.destination.destroy(error)) : (request.status = 12, request.aborted || (request.fatalError = error));
	}
	function finishSuspenseListRow(request, row) {
		unblockSuspenseListRow(request, row.next, row.hoistables);
	}
	function unblockSuspenseListRow(request, unblockedRow, inheritedHoistables) {
		for (; null !== unblockedRow;) {
			null !== inheritedHoistables && (hoistHoistables(unblockedRow.hoistables, inheritedHoistables), unblockedRow.inheritedHoistables = inheritedHoistables);
			var unblockedBoundaries = unblockedRow.boundaries;
			if (null !== unblockedBoundaries) {
				unblockedRow.boundaries = null;
				for (var i = 0; i < unblockedBoundaries.length; i++) {
					var unblockedBoundary = unblockedBoundaries[i];
					null !== inheritedHoistables && hoistHoistables(unblockedBoundary.contentState, inheritedHoistables);
					finishedTask(request, unblockedBoundary, null, null);
				}
			}
			unblockedRow.pendingTasks--;
			if (0 < unblockedRow.pendingTasks) break;
			inheritedHoistables = unblockedRow.hoistables;
			unblockedRow = unblockedRow.next;
		}
	}
	function tryToResolveTogetherRow(request, togetherRow) {
		var boundaries = togetherRow.boundaries;
		if (null !== boundaries && togetherRow.pendingTasks === boundaries.length) {
			for (var allCompleteAndInlinable = !0, i = 0; i < boundaries.length; i++) {
				var rowBoundary = boundaries[i];
				if (1 !== rowBoundary.pendingTasks || rowBoundary.parentFlushed || isEligibleForOutlining(request, rowBoundary)) {
					allCompleteAndInlinable = !1;
					break;
				}
			}
			allCompleteAndInlinable && unblockSuspenseListRow(request, togetherRow, togetherRow.hoistables);
		}
	}
	function createSuspenseListRow(previousRow) {
		var newRow = {
			pendingTasks: 1,
			boundaries: null,
			hoistables: createHoistableState(),
			inheritedHoistables: null,
			together: !1,
			next: null
		};
		null !== previousRow && 0 < previousRow.pendingTasks && (newRow.pendingTasks++, newRow.boundaries = [], previousRow.next = newRow);
		return newRow;
	}
	function renderSuspenseListRows(request, task, keyPath, rows, revealOrder) {
		var prevKeyPath = task.keyPath, prevTreeContext = task.treeContext, prevRow = task.row;
		task.keyPath = keyPath;
		keyPath = rows.length;
		var previousSuspenseListRow = null;
		if (null !== task.replay) {
			var resumeSlots = task.replay.slots;
			if (null !== resumeSlots && "object" === typeof resumeSlots) for (var n = 0; n < keyPath; n++) {
				var i = "backwards" !== revealOrder && "unstable_legacy-backwards" !== revealOrder ? n : keyPath - 1 - n, node = rows[i];
				task.row = previousSuspenseListRow = createSuspenseListRow(previousSuspenseListRow);
				task.treeContext = pushTreeContext(prevTreeContext, keyPath, i);
				var resumeSegmentID = resumeSlots[i];
				"number" === typeof resumeSegmentID ? (resumeNode(request, task, resumeSegmentID, node, i), delete resumeSlots[i]) : renderNode(request, task, node, i);
				0 === --previousSuspenseListRow.pendingTasks && finishSuspenseListRow(request, previousSuspenseListRow);
			}
			else for (resumeSlots = 0; resumeSlots < keyPath; resumeSlots++) n = "backwards" !== revealOrder && "unstable_legacy-backwards" !== revealOrder ? resumeSlots : keyPath - 1 - resumeSlots, i = rows[n], task.row = previousSuspenseListRow = createSuspenseListRow(previousSuspenseListRow), task.treeContext = pushTreeContext(prevTreeContext, keyPath, n), renderNode(request, task, i, n), 0 === --previousSuspenseListRow.pendingTasks && finishSuspenseListRow(request, previousSuspenseListRow);
		} else if ("backwards" !== revealOrder && "unstable_legacy-backwards" !== revealOrder) for (revealOrder = 0; revealOrder < keyPath; revealOrder++) resumeSlots = rows[revealOrder], task.row = previousSuspenseListRow = createSuspenseListRow(previousSuspenseListRow), task.treeContext = pushTreeContext(prevTreeContext, keyPath, revealOrder), renderNode(request, task, resumeSlots, revealOrder), 0 === --previousSuspenseListRow.pendingTasks && finishSuspenseListRow(request, previousSuspenseListRow);
		else {
			resumeSlots = task.blockedSegment;
			n = resumeSlots.children.length;
			i = resumeSlots.chunks.length;
			for (node = 0; node < keyPath; node++) {
				resumeSegmentID = "unstable_legacy-backwards" === revealOrder ? keyPath - 1 - node : node;
				var node$39 = rows[resumeSegmentID];
				task.row = previousSuspenseListRow = createSuspenseListRow(previousSuspenseListRow);
				task.treeContext = pushTreeContext(prevTreeContext, keyPath, resumeSegmentID);
				var newSegment = createPendingSegment(request, i, null, task.formatContext, 0 === resumeSegmentID ? resumeSlots.lastPushedText : !0, !0);
				resumeSlots.children.splice(n, 0, newSegment);
				task.blockedSegment = newSegment;
				try {
					renderNode(request, task, node$39, resumeSegmentID), pushSegmentFinale(newSegment.chunks, request.renderState, newSegment.lastPushedText, newSegment.textEmbedded), newSegment.status = 1, 0 === --previousSuspenseListRow.pendingTasks && finishSuspenseListRow(request, previousSuspenseListRow);
				} catch (thrownValue) {
					throw newSegment.status = request.aborted ? 3 : 4, thrownValue;
				}
			}
			task.blockedSegment = resumeSlots;
			resumeSlots.lastPushedText = !1;
		}
		null !== prevRow && null !== previousSuspenseListRow && 0 < previousSuspenseListRow.pendingTasks && (prevRow.pendingTasks++, previousSuspenseListRow.next = prevRow);
		task.treeContext = prevTreeContext;
		task.row = prevRow;
		task.keyPath = prevKeyPath;
	}
	function renderWithHooks(request, task, keyPath, Component, props, secondArg) {
		var prevThenableState = task.thenableState;
		task.thenableState = null;
		currentlyRenderingComponent = {};
		currentlyRenderingTask = task;
		currentlyRenderingRequest = request;
		currentlyRenderingKeyPath = keyPath;
		actionStateCounter = localIdCounter = 0;
		actionStateMatchingIndex = -1;
		thenableIndexCounter = 0;
		thenableState = prevThenableState;
		for (request = Component(props, secondArg); didScheduleRenderPhaseUpdate;) didScheduleRenderPhaseUpdate = !1, actionStateCounter = localIdCounter = 0, actionStateMatchingIndex = -1, thenableIndexCounter = 0, numberOfReRenders += 1, workInProgressHook = null, request = Component(props, secondArg);
		resetHooksState();
		return request;
	}
	function finishFunctionComponent(request, task, keyPath, children, hasId, actionStateCount, actionStateMatchingIndex) {
		var didEmitActionStateMarkers = !1;
		if (0 !== actionStateCount && null !== request.formState) {
			var segment = task.blockedSegment;
			if (null !== segment) {
				didEmitActionStateMarkers = !0;
				segment = segment.chunks;
				for (var i = 0; i < actionStateCount; i++) i === actionStateMatchingIndex ? segment.push("<!--F!-->") : segment.push("<!--F-->");
			}
		}
		actionStateCount = task.keyPath;
		task.keyPath = keyPath;
		hasId ? (keyPath = task.treeContext, task.treeContext = pushTreeContext(keyPath, 1, 0), renderNode(request, task, children, -1), task.treeContext = keyPath) : didEmitActionStateMarkers ? renderNode(request, task, children, -1) : renderNodeDestructive(request, task, children, -1);
		task.keyPath = actionStateCount;
	}
	function renderElement(request, task, keyPath, type, props, ref) {
		if ("function" === typeof type) if (type.prototype && type.prototype.isReactComponent) {
			var newProps = props;
			if ("ref" in props) {
				newProps = {};
				for (var propName in props) "ref" !== propName && (newProps[propName] = props[propName]);
			}
			var defaultProps = type.defaultProps;
			if (defaultProps) {
				newProps === props && (newProps = assign({}, newProps, props));
				for (var propName$44 in defaultProps) void 0 === newProps[propName$44] && (newProps[propName$44] = defaultProps[propName$44]);
			}
			var JSCompiler_inline_result = newProps;
			var context = emptyContextObject, contextType = type.contextType;
			"object" === typeof contextType && null !== contextType && (context = contextType._currentValue2);
			var JSCompiler_inline_result$jscomp$0 = new type(JSCompiler_inline_result, context);
			var initialState = void 0 !== JSCompiler_inline_result$jscomp$0.state ? JSCompiler_inline_result$jscomp$0.state : null;
			JSCompiler_inline_result$jscomp$0.updater = classComponentUpdater;
			JSCompiler_inline_result$jscomp$0.props = JSCompiler_inline_result;
			JSCompiler_inline_result$jscomp$0.state = initialState;
			var internalInstance = {
				queue: [],
				replace: !1
			};
			JSCompiler_inline_result$jscomp$0._reactInternals = internalInstance;
			var contextType$jscomp$0 = type.contextType;
			JSCompiler_inline_result$jscomp$0.context = "object" === typeof contextType$jscomp$0 && null !== contextType$jscomp$0 ? contextType$jscomp$0._currentValue2 : emptyContextObject;
			var getDerivedStateFromProps = type.getDerivedStateFromProps;
			if ("function" === typeof getDerivedStateFromProps) {
				var partialState = getDerivedStateFromProps(JSCompiler_inline_result, initialState);
				JSCompiler_inline_result$jscomp$0.state = null === partialState || void 0 === partialState ? initialState : assign({}, initialState, partialState);
			}
			if ("function" !== typeof type.getDerivedStateFromProps && "function" !== typeof JSCompiler_inline_result$jscomp$0.getSnapshotBeforeUpdate && ("function" === typeof JSCompiler_inline_result$jscomp$0.UNSAFE_componentWillMount || "function" === typeof JSCompiler_inline_result$jscomp$0.componentWillMount)) {
				var oldState = JSCompiler_inline_result$jscomp$0.state;
				"function" === typeof JSCompiler_inline_result$jscomp$0.componentWillMount && JSCompiler_inline_result$jscomp$0.componentWillMount();
				"function" === typeof JSCompiler_inline_result$jscomp$0.UNSAFE_componentWillMount && JSCompiler_inline_result$jscomp$0.UNSAFE_componentWillMount();
				oldState !== JSCompiler_inline_result$jscomp$0.state && classComponentUpdater.enqueueReplaceState(JSCompiler_inline_result$jscomp$0, JSCompiler_inline_result$jscomp$0.state, null);
				if (null !== internalInstance.queue && 0 < internalInstance.queue.length) {
					var oldQueue = internalInstance.queue, oldReplace = internalInstance.replace;
					internalInstance.queue = null;
					internalInstance.replace = !1;
					if (oldReplace && 1 === oldQueue.length) JSCompiler_inline_result$jscomp$0.state = oldQueue[0];
					else {
						for (var nextState = oldReplace ? oldQueue[0] : JSCompiler_inline_result$jscomp$0.state, dontMutate = !0, i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
							var partial = oldQueue[i], partialState$jscomp$0 = "function" === typeof partial ? partial.call(JSCompiler_inline_result$jscomp$0, nextState, JSCompiler_inline_result, void 0) : partial;
							null != partialState$jscomp$0 && (dontMutate ? (dontMutate = !1, nextState = assign({}, nextState, partialState$jscomp$0)) : assign(nextState, partialState$jscomp$0));
						}
						JSCompiler_inline_result$jscomp$0.state = nextState;
					}
				} else internalInstance.queue = null;
			}
			var nextChildren = JSCompiler_inline_result$jscomp$0.render();
			if (request.aborted) throw null;
			var prevKeyPath = task.keyPath;
			task.keyPath = keyPath;
			renderNodeDestructive(request, task, nextChildren, -1);
			task.keyPath = prevKeyPath;
		} else {
			var value = renderWithHooks(request, task, keyPath, type, props, void 0);
			if (request.aborted) throw null;
			finishFunctionComponent(request, task, keyPath, value, 0 !== localIdCounter, actionStateCounter, actionStateMatchingIndex);
		}
		else if ("string" === typeof type) {
			var segment = task.blockedSegment;
			if (null === segment) {
				var children = props.children, prevContext = task.formatContext, prevKeyPath$jscomp$0 = task.keyPath;
				task.formatContext = getChildFormatContext(prevContext, type, props);
				task.keyPath = keyPath;
				renderNode(request, task, children, -1);
				task.formatContext = prevContext;
				task.keyPath = prevKeyPath$jscomp$0;
			} else {
				var children$41 = pushStartInstance(segment.chunks, type, props, request.resumableState, request.renderState, task.blockedPreamble, task.hoistableState, task.formatContext, segment.lastPushedText);
				segment.lastPushedText = !1;
				var prevContext$42 = task.formatContext, prevKeyPath$43 = task.keyPath;
				task.keyPath = keyPath;
				if (3 === (task.formatContext = getChildFormatContext(prevContext$42, type, props)).insertionMode) {
					var preambleSegment = createPendingSegment(request, 0, null, task.formatContext, !1, !1);
					segment.preambleChildren.push(preambleSegment);
					task.blockedSegment = preambleSegment;
					try {
						renderNode(request, task, children$41, -1), pushSegmentFinale(preambleSegment.chunks, request.renderState, preambleSegment.lastPushedText, preambleSegment.textEmbedded), preambleSegment.status = 1;
					} finally {
						task.blockedSegment = segment;
					}
				} else renderNode(request, task, children$41, -1);
				task.formatContext = prevContext$42;
				task.keyPath = prevKeyPath$43;
				a: {
					var target = segment.chunks, resumableState = request.resumableState;
					switch (type) {
						case "title":
						case "style":
						case "script":
						case "area":
						case "base":
						case "br":
						case "col":
						case "embed":
						case "hr":
						case "img":
						case "input":
						case "keygen":
						case "link":
						case "meta":
						case "param":
						case "source":
						case "track":
						case "wbr": break a;
						case "body":
							if (1 >= prevContext$42.insertionMode) {
								resumableState.hasBody = !0;
								break a;
							}
							break;
						case "html":
							if (0 === prevContext$42.insertionMode) {
								resumableState.hasHtml = !0;
								break a;
							}
							break;
						case "head": if (1 >= prevContext$42.insertionMode) break a;
					}
					target.push(endChunkForTag(type));
				}
				segment.lastPushedText = !1;
			}
		} else {
			switch (type) {
				case REACT_LEGACY_HIDDEN_TYPE:
				case REACT_STRICT_MODE_TYPE:
				case REACT_PROFILER_TYPE:
				case REACT_FRAGMENT_TYPE:
					var prevKeyPath$jscomp$1 = task.keyPath;
					task.keyPath = keyPath;
					renderNodeDestructive(request, task, props.children, -1);
					task.keyPath = prevKeyPath$jscomp$1;
					return;
				case REACT_ACTIVITY_TYPE:
					var segment$jscomp$0 = task.blockedSegment;
					if (null === segment$jscomp$0) {
						if ("hidden" !== props.mode) {
							var prevKeyPath$jscomp$2 = task.keyPath;
							task.keyPath = keyPath;
							renderNode(request, task, props.children, -1);
							task.keyPath = prevKeyPath$jscomp$2;
						}
					} else if ("hidden" !== props.mode) {
						request.renderState.generateStaticMarkup || segment$jscomp$0.chunks.push("<!--&-->");
						segment$jscomp$0.lastPushedText = !1;
						var prevKeyPath$46 = task.keyPath;
						task.keyPath = keyPath;
						renderNode(request, task, props.children, -1);
						task.keyPath = prevKeyPath$46;
						request.renderState.generateStaticMarkup || segment$jscomp$0.chunks.push("<!--/&-->");
						segment$jscomp$0.lastPushedText = !1;
					}
					return;
				case REACT_SUSPENSE_LIST_TYPE:
					a: {
						var children$jscomp$0 = props.children, revealOrder = props.revealOrder;
						if ("independent" !== revealOrder && "together" !== revealOrder) {
							if (isArrayImpl(children$jscomp$0)) {
								renderSuspenseListRows(request, task, keyPath, children$jscomp$0, revealOrder);
								break a;
							}
							var iteratorFn = getIteratorFn(children$jscomp$0);
							if (iteratorFn) {
								var iterator = iteratorFn.call(children$jscomp$0);
								if (iterator) {
									var step = iterator.next();
									if (!step.done) {
										do
											step = iterator.next();
										while (!step.done);
										renderSuspenseListRows(request, task, keyPath, children$jscomp$0, revealOrder);
									}
									break a;
								}
							}
						}
						if ("together" === revealOrder) {
							var prevKeyPath$40 = task.keyPath, prevRow = task.row, newRow = task.row = createSuspenseListRow(null);
							newRow.boundaries = [];
							newRow.together = !0;
							task.keyPath = keyPath;
							renderNodeDestructive(request, task, children$jscomp$0, -1);
							0 === --newRow.pendingTasks && finishSuspenseListRow(request, newRow);
							task.keyPath = prevKeyPath$40;
							task.row = prevRow;
							null !== prevRow && 0 < newRow.pendingTasks && (prevRow.pendingTasks++, newRow.next = prevRow);
						} else {
							var prevKeyPath$jscomp$3 = task.keyPath;
							task.keyPath = keyPath;
							renderNodeDestructive(request, task, children$jscomp$0, -1);
							task.keyPath = prevKeyPath$jscomp$3;
						}
					}
					return;
				case REACT_VIEW_TRANSITION_TYPE:
					var prevContext$jscomp$0 = task.formatContext, prevKeyPath$jscomp$4 = task.keyPath;
					var resumableState$jscomp$0 = request.resumableState;
					if (null == props.name || "auto" === props.name) makeId(resumableState$jscomp$0, getTreeId(task.treeContext), 0);
					task.formatContext = prevContext$jscomp$0;
					task.keyPath = keyPath;
					if (null != props.name && "auto" !== props.name) renderNodeDestructive(request, task, props.children, -1);
					else {
						var prevTreeContext = task.treeContext;
						task.treeContext = pushTreeContext(prevTreeContext, 1, 0);
						renderNode(request, task, props.children, -1);
						task.treeContext = prevTreeContext;
					}
					task.formatContext = prevContext$jscomp$0;
					task.keyPath = prevKeyPath$jscomp$4;
					return;
				case REACT_SCOPE_TYPE: throw Error(formatProdErrorMessage(343));
				case REACT_SUSPENSE_TYPE:
					a: if (null !== task.replay) {
						var prevKeyPath$26 = task.keyPath, prevContext$27 = task.formatContext, prevRow$28 = task.row;
						task.keyPath = keyPath;
						task.formatContext = getSuspenseContentFormatContext(request.resumableState, prevContext$27);
						task.row = null;
						var content$29 = props.children;
						try {
							renderNode(request, task, content$29, -1);
						} finally {
							task.keyPath = prevKeyPath$26, task.formatContext = prevContext$27, task.row = prevRow$28;
						}
					} else {
						var prevKeyPath$jscomp$5 = task.keyPath, prevContext$jscomp$1 = task.formatContext, prevRow$jscomp$0 = task.row, parentBoundary = task.blockedBoundary, parentPreamble = task.blockedPreamble, parentHoistableState = task.hoistableState, parentSegment = task.blockedSegment, fallback = props.fallback, content = props.children, fallbackAbortSet = /* @__PURE__ */ new Set(), newBoundary = createSuspenseBoundary(request, task.row, fallbackAbortSet, null, !1), boundarySegment = createPendingSegment(request, parentSegment.chunks.length, newBoundary, task.formatContext, !1, !1);
						parentSegment.children.push(boundarySegment);
						parentSegment.lastPushedText = !1;
						var contentRootSegment = createPendingSegment(request, 0, null, task.formatContext, !1, !1);
						contentRootSegment.parentFlushed = !0;
						var trackedPostpones = request.trackedPostpones;
						if (null !== trackedPostpones) {
							var suspenseComponentStack = task.componentStack, fallbackKeyPath = [
								keyPath[0],
								"Suspense Fallback",
								keyPath[2]
							];
							if (null !== trackedPostpones) {
								var fallbackReplayNode = [
									fallbackKeyPath[1],
									fallbackKeyPath[2],
									[],
									null
								];
								trackedPostpones.workingMap.set(fallbackKeyPath, fallbackReplayNode);
								newBoundary.tracked = {
									contentKeyPath: keyPath,
									fallbackNode: fallbackReplayNode
								};
							}
							task.blockedSegment = boundarySegment;
							task.blockedPreamble = null === newBoundary.preamble ? null : newBoundary.preamble.fallback;
							task.keyPath = fallbackKeyPath;
							task.formatContext = getSuspenseFallbackFormatContext(request.resumableState, prevContext$jscomp$1);
							task.componentStack = replaceSuspenseComponentStackWithSuspenseFallbackStack(suspenseComponentStack);
							try {
								renderNode(request, task, fallback, -1), pushSegmentFinale(boundarySegment.chunks, request.renderState, boundarySegment.lastPushedText, boundarySegment.textEmbedded), boundarySegment.status = 1;
							} catch (thrownValue) {
								throw boundarySegment.status = request.aborted ? 3 : 4, thrownValue;
							} finally {
								task.blockedSegment = parentSegment, task.blockedPreamble = parentPreamble, task.keyPath = prevKeyPath$jscomp$5, task.formatContext = prevContext$jscomp$1;
							}
							var suspendedPrimaryTask = createRenderTask(request, null, content, -1, newBoundary, contentRootSegment, null === newBoundary.preamble ? null : newBoundary.preamble.content, newBoundary.contentState, task.abortSet, keyPath, getSuspenseContentFormatContext(request.resumableState, task.formatContext), task.context, task.treeContext, null, suspenseComponentStack);
							pushComponentStack(suspendedPrimaryTask);
							request.pingedTasks.push(suspendedPrimaryTask);
						} else {
							task.blockedBoundary = newBoundary;
							task.blockedPreamble = null === newBoundary.preamble ? null : newBoundary.preamble.content;
							task.hoistableState = newBoundary.contentState;
							task.blockedSegment = contentRootSegment;
							task.keyPath = keyPath;
							task.formatContext = getSuspenseContentFormatContext(request.resumableState, prevContext$jscomp$1);
							task.row = null;
							try {
								if (renderNode(request, task, content, -1), pushSegmentFinale(contentRootSegment.chunks, request.renderState, contentRootSegment.lastPushedText, contentRootSegment.textEmbedded), contentRootSegment.status = 1, queueCompletedSegment(newBoundary, contentRootSegment), 0 === newBoundary.pendingTasks && 0 === newBoundary.status) {
									if (newBoundary.status = 1, !isEligibleForOutlining(request, newBoundary)) {
										null !== prevRow$jscomp$0 && 0 === --prevRow$jscomp$0.pendingTasks && finishSuspenseListRow(request, prevRow$jscomp$0);
										0 === request.pendingRootTasks && task.blockedPreamble && preparePreamble(request);
										break a;
									}
								} else null !== prevRow$jscomp$0 && prevRow$jscomp$0.together && tryToResolveTogetherRow(request, prevRow$jscomp$0);
							} catch (thrownValue$30) {
								newBoundary.status = 4;
								if (request.aborted) {
									contentRootSegment.status = 3;
									var error = request.fatalError;
								} else contentRootSegment.status = 4, error = thrownValue$30;
								var thrownInfo = getThrownInfo(task.componentStack);
								newBoundary.errorDigest = logRecoverableError(request, error, thrownInfo);
								untrackBoundary(request, newBoundary);
							} finally {
								task.blockedBoundary = parentBoundary, task.blockedPreamble = parentPreamble, task.hoistableState = parentHoistableState, task.blockedSegment = parentSegment, task.keyPath = prevKeyPath$jscomp$5, task.formatContext = prevContext$jscomp$1, task.row = prevRow$jscomp$0;
							}
							var suspendedFallbackTask = createRenderTask(request, null, fallback, -1, parentBoundary, boundarySegment, null === newBoundary.preamble ? null : newBoundary.preamble.fallback, newBoundary.fallbackState, fallbackAbortSet, [
								keyPath[0],
								"Suspense Fallback",
								keyPath[2]
							], getSuspenseFallbackFormatContext(request.resumableState, task.formatContext), task.context, task.treeContext, task.row, replaceSuspenseComponentStackWithSuspenseFallbackStack(task.componentStack));
							pushComponentStack(suspendedFallbackTask);
							request.pingedTasks.push(suspendedFallbackTask);
						}
					}
					return;
			}
			if ("object" === typeof type && null !== type) switch (type.$$typeof) {
				case REACT_FORWARD_REF_TYPE:
					if ("ref" in props) {
						var propsWithoutRef = {};
						for (var key in props) "ref" !== key && (propsWithoutRef[key] = props[key]);
					} else propsWithoutRef = props;
					finishFunctionComponent(request, task, keyPath, renderWithHooks(request, task, keyPath, type.render, propsWithoutRef, ref), 0 !== localIdCounter, actionStateCounter, actionStateMatchingIndex);
					return;
				case REACT_MEMO_TYPE:
					renderElement(request, task, keyPath, type.type, props, ref);
					return;
				case REACT_CONTEXT_TYPE:
					var children$jscomp$2 = props.children, prevKeyPath$jscomp$6 = task.keyPath, nextValue = props.value;
					var prevValue = type._currentValue2;
					type._currentValue2 = nextValue;
					var prevNode = currentActiveSnapshot, newNode = {
						parent: prevNode,
						depth: null === prevNode ? 0 : prevNode.depth + 1,
						context: type,
						parentValue: prevValue,
						value: nextValue
					};
					currentActiveSnapshot = newNode;
					task.context = newNode;
					task.keyPath = keyPath;
					renderNodeDestructive(request, task, children$jscomp$2, -1);
					var prevSnapshot = currentActiveSnapshot;
					if (null === prevSnapshot) throw Error(formatProdErrorMessage(403));
					prevSnapshot.context._currentValue2 = prevSnapshot.parentValue;
					task.context = currentActiveSnapshot = prevSnapshot.parent;
					task.keyPath = prevKeyPath$jscomp$6;
					return;
				case REACT_CONSUMER_TYPE:
					var render = props.children, newChildren = render(type._context._currentValue2), prevKeyPath$jscomp$7 = task.keyPath;
					task.keyPath = keyPath;
					renderNodeDestructive(request, task, newChildren, -1);
					task.keyPath = prevKeyPath$jscomp$7;
					return;
				case REACT_LAZY_TYPE:
					var init = type._init;
					var Component = init(type._payload);
					if (request.aborted) throw null;
					renderElement(request, task, keyPath, Component, props, ref);
					return;
			}
			throw Error(formatProdErrorMessage(130, null == type ? type : typeof type, ""));
		}
	}
	function resumeNode(request, task, segmentId, node, childIndex) {
		var prevReplay = task.replay, blockedBoundary = task.blockedBoundary, resumedSegment = createPendingSegment(request, 0, null, task.formatContext, !1, !1);
		resumedSegment.id = segmentId;
		resumedSegment.parentFlushed = !0;
		try {
			task.replay = null, task.blockedSegment = resumedSegment, renderNode(request, task, node, childIndex), resumedSegment.status = 1, null === blockedBoundary ? request.completedRootSegment = resumedSegment : (queueCompletedSegment(blockedBoundary, resumedSegment), blockedBoundary.parentFlushed && request.partialBoundaries.push(blockedBoundary));
		} finally {
			task.replay = prevReplay, task.blockedSegment = null;
		}
	}
	function renderNodeDestructive(request, task, node, childIndex) {
		null !== task.replay && "number" === typeof task.replay.slots ? resumeNode(request, task, task.replay.slots, node, childIndex) : (task.node = node, task.childIndex = childIndex, node = task.componentStack, pushComponentStack(task), retryNode(request, task), task.componentStack = node);
	}
	function retryNode(request, task) {
		var node = task.node, childIndex = task.childIndex;
		if (null !== node) {
			if ("object" === typeof node) {
				switch (node.$$typeof) {
					case REACT_ELEMENT_TYPE:
						var type = node.type, key = node.key, props = node.props;
						node = props.ref;
						var ref = void 0 !== node ? node : null, name = getComponentNameFromType(type), keyOrIndex = null == key || key === REACT_OPTIMISTIC_KEY ? -1 === childIndex ? 0 : childIndex : key;
						key = [
							task.keyPath,
							name,
							keyOrIndex
						];
						if (null !== task.replay) a: {
							var replay = task.replay;
							childIndex = replay.nodes;
							for (node = 0; node < childIndex.length; node++) {
								var node$jscomp$0 = childIndex[node];
								if (keyOrIndex === node$jscomp$0[1]) {
									if (4 === node$jscomp$0.length) {
										if (null !== name && name !== node$jscomp$0[0]) throw Error(formatProdErrorMessage(490, node$jscomp$0[0], name));
										var childNodes = node$jscomp$0[2], childSlots = node$jscomp$0[3], currentNode = task.node;
										task.replay = {
											nodes: childNodes,
											slots: childSlots,
											pendingTasks: 1
										};
										try {
											renderElement(request, task, key, type, props, ref);
											if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length) throw Error(formatProdErrorMessage(488));
											task.replay.pendingTasks--;
										} catch (x) {
											if ("object" === typeof x && null !== x && (x === SuspenseException || "function" === typeof x.then || "Maximum call stack size exceeded" === x.message)) throw task.node === currentNode ? task.replay = replay : childIndex.splice(node, 1), x;
											task.replay.pendingTasks--;
											key = getThrownInfo(task.componentStack);
											currentNode = request;
											props = task.blockedBoundary;
											request = request.aborted ? request.fatalError : x;
											key = logRecoverableError(currentNode, request, key);
											abortRemainingReplayNodes(currentNode, props, childNodes, childSlots, request, key);
										}
										task.replay = replay;
									} else {
										if (type !== REACT_SUSPENSE_TYPE) throw Error(formatProdErrorMessage(490, "Suspense", getComponentNameFromType(type) || "Unknown"));
										b: {
											replay = node$jscomp$0[5];
											type = node$jscomp$0[2];
											ref = node$jscomp$0[3];
											name = null === node$jscomp$0[4] ? [] : node$jscomp$0[4][2];
											node$jscomp$0 = null === node$jscomp$0[4] ? null : node$jscomp$0[4][3];
											keyOrIndex = task.keyPath;
											var prevContext = task.formatContext, prevRow = task.row, previousReplaySet = task.replay, parentBoundary = task.blockedBoundary, parentHoistableState = task.hoistableState, content = props.children;
											props = props.fallback;
											var fallbackAbortSet = /* @__PURE__ */ new Set(), resumedBoundary = createSuspenseBoundary(request, task.row, fallbackAbortSet, null, !1);
											resumedBoundary.parentFlushed = !0;
											resumedBoundary.rootSegmentID = replay;
											task.blockedBoundary = resumedBoundary;
											task.hoistableState = resumedBoundary.contentState;
											task.keyPath = key;
											task.formatContext = getSuspenseContentFormatContext(request.resumableState, prevContext);
											task.row = null;
											task.replay = {
												nodes: type,
												slots: ref,
												pendingTasks: 1
											};
											try {
												renderNode(request, task, content, -1);
												if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length) throw Error(formatProdErrorMessage(488));
												task.replay.pendingTasks--;
												if (0 === resumedBoundary.pendingTasks && 0 === resumedBoundary.status) {
													resumedBoundary.status = 1;
													request.completedBoundaries.push(resumedBoundary);
													break b;
												}
											} catch (thrownValue) {
												resumedBoundary.status = 4, childNodes = request.aborted ? request.fatalError : thrownValue, childSlots = getThrownInfo(task.componentStack), currentNode = logRecoverableError(request, childNodes, childSlots), resumedBoundary.errorDigest = currentNode, task.replay.pendingTasks--, request.clientRenderedBoundaries.push(resumedBoundary);
											} finally {
												task.blockedBoundary = parentBoundary, task.hoistableState = parentHoistableState, task.replay = previousReplaySet, task.keyPath = keyOrIndex, task.formatContext = prevContext, task.row = prevRow;
											}
											childNodes = createReplayTask(request, null, {
												nodes: name,
												slots: node$jscomp$0,
												pendingTasks: 0
											}, props, -1, parentBoundary, resumedBoundary.fallbackState, fallbackAbortSet, [
												key[0],
												"Suspense Fallback",
												key[2]
											], getSuspenseFallbackFormatContext(request.resumableState, task.formatContext), task.context, task.treeContext, task.row, replaceSuspenseComponentStackWithSuspenseFallbackStack(task.componentStack));
											pushComponentStack(childNodes);
											request.pingedTasks.push(childNodes);
										}
									}
									childIndex.splice(node, 1);
									break a;
								}
							}
						}
						else renderElement(request, task, key, type, props, ref);
						return;
					case REACT_PORTAL_TYPE: throw Error(formatProdErrorMessage(257));
					case REACT_LAZY_TYPE:
						childNodes = node._init;
						node = childNodes(node._payload);
						if (request.aborted) throw null;
						renderNodeDestructive(request, task, node, childIndex);
						return;
				}
				if (isArrayImpl(node)) {
					renderChildrenArray(request, task, node, childIndex);
					return;
				}
				if (childNodes = getIteratorFn(node)) {
					if (childNodes = childNodes.call(node)) {
						node = childNodes.next();
						if (!node.done) {
							childSlots = [];
							do
								childSlots.push(node.value), node = childNodes.next();
							while (!node.done);
							renderChildrenArray(request, task, childSlots, childIndex);
						}
						return;
					}
				}
				if ("function" === typeof node.then) return task.thenableState = null, renderNodeDestructive(request, task, unwrapThenable(node), childIndex);
				if (node.$$typeof === REACT_CONTEXT_TYPE) return renderNodeDestructive(request, task, node._currentValue2, childIndex);
				childIndex = Object.prototype.toString.call(node);
				throw Error(formatProdErrorMessage(31, "[object Object]" === childIndex ? "object with keys {" + Object.keys(node).join(", ") + "}" : childIndex));
			}
			if ("string" === typeof node) childIndex = task.blockedSegment, null !== childIndex && (childIndex.lastPushedText = pushTextInstance(childIndex.chunks, node, request.renderState, childIndex.lastPushedText));
			else if ("number" === typeof node || "bigint" === typeof node) childIndex = task.blockedSegment, null !== childIndex && (childIndex.lastPushedText = pushTextInstance(childIndex.chunks, "" + node, request.renderState, childIndex.lastPushedText));
		}
	}
	function renderChildrenArray(request, task, children, childIndex) {
		var prevKeyPath = task.keyPath;
		if (-1 !== childIndex && (task.keyPath = [
			task.keyPath,
			"Fragment",
			childIndex
		], null !== task.replay)) {
			for (var replay = task.replay, replayNodes = replay.nodes, j = 0; j < replayNodes.length; j++) {
				var node = replayNodes[j];
				if (node[1] === childIndex) {
					childIndex = node[2];
					node = node[3];
					task.replay = {
						nodes: childIndex,
						slots: node,
						pendingTasks: 1
					};
					try {
						renderChildrenArray(request, task, children, -1);
						if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length) throw Error(formatProdErrorMessage(488));
						task.replay.pendingTasks--;
					} catch (x) {
						if ("object" === typeof x && null !== x && (x === SuspenseException || "function" === typeof x.then)) throw x;
						task.replay.pendingTasks--;
						var thrownInfo = getThrownInfo(task.componentStack);
						children = request;
						var boundary = task.blockedBoundary;
						request = request.aborted ? request.fatalError : x;
						thrownInfo = logRecoverableError(children, request, thrownInfo);
						abortRemainingReplayNodes(children, boundary, childIndex, node, request, thrownInfo);
					}
					task.replay = replay;
					replayNodes.splice(j, 1);
					break;
				}
			}
			task.keyPath = prevKeyPath;
			return;
		}
		replay = task.treeContext;
		replayNodes = children.length;
		if (null !== task.replay && (j = task.replay.slots, null !== j && "object" === typeof j)) {
			for (childIndex = 0; childIndex < replayNodes; childIndex++) node = children[childIndex], task.treeContext = pushTreeContext(replay, replayNodes, childIndex), boundary = j[childIndex], "number" === typeof boundary ? (resumeNode(request, task, boundary, node, childIndex), delete j[childIndex]) : renderNode(request, task, node, childIndex);
			task.treeContext = replay;
			task.keyPath = prevKeyPath;
			return;
		}
		for (j = 0; j < replayNodes; j++) childIndex = children[j], task.treeContext = pushTreeContext(replay, replayNodes, j), renderNode(request, task, childIndex, j);
		task.treeContext = replay;
		task.keyPath = prevKeyPath;
	}
	function trackPostponedBoundary(request, trackedPostpones, boundary) {
		boundary.status = 5;
		boundary.rootSegmentID = request.nextSegmentId++;
		var tracked = boundary.tracked;
		if (null === tracked) throw Error(formatProdErrorMessage(486));
		request = tracked.contentKeyPath;
		if (null === request) throw Error(formatProdErrorMessage(486));
		tracked = tracked.fallbackNode;
		var children = [], boundaryNode = trackedPostpones.workingMap.get(request);
		if (void 0 === boundaryNode) return boundary = [
			request[1],
			request[2],
			children,
			null,
			tracked,
			boundary.rootSegmentID
		], trackedPostpones.workingMap.set(request, boundary), addToReplayParent(boundary, request[0], trackedPostpones), boundary;
		boundaryNode[4] = tracked;
		boundaryNode[5] = boundary.rootSegmentID;
		return boundaryNode;
	}
	function trackPostpone(request, trackedPostpones, task, segment) {
		segment.status = 5;
		var keyPath = task.keyPath, boundary = task.blockedBoundary;
		if (null === boundary) segment.id = request.nextSegmentId++, trackedPostpones.rootSlots = segment.id, null !== request.completedRootSegment && (request.completedRootSegment.status = 5);
		else {
			if (null !== boundary && 0 === boundary.status) {
				var boundaryNode = trackPostponedBoundary(request, trackedPostpones, boundary);
				if (null !== boundary.tracked && boundary.tracked.contentKeyPath === keyPath && -1 === task.childIndex) {
					-1 === segment.id && (segment.id = segment.parentFlushed ? boundary.rootSegmentID : request.nextSegmentId++);
					boundaryNode[3] = segment.id;
					return;
				}
			}
			-1 === segment.id && (segment.id = segment.parentFlushed && null !== boundary ? boundary.rootSegmentID : request.nextSegmentId++);
			if (-1 === task.childIndex) null === keyPath ? trackedPostpones.rootSlots = segment.id : (task = trackedPostpones.workingMap.get(keyPath), void 0 === task ? (task = [
				keyPath[1],
				keyPath[2],
				[],
				segment.id
			], addToReplayParent(task, keyPath[0], trackedPostpones)) : task[3] = segment.id);
			else {
				if (null === keyPath) {
					if (request = trackedPostpones.rootSlots, null === request) request = trackedPostpones.rootSlots = {};
					else if ("number" === typeof request) throw Error(formatProdErrorMessage(491));
				} else if (boundary = trackedPostpones.workingMap, boundaryNode = boundary.get(keyPath), void 0 === boundaryNode) request = {}, boundaryNode = [
					keyPath[1],
					keyPath[2],
					[],
					request
				], boundary.set(keyPath, boundaryNode), addToReplayParent(boundaryNode, keyPath[0], trackedPostpones);
				else if (request = boundaryNode[3], null === request) request = boundaryNode[3] = {};
				else if ("number" === typeof request) throw Error(formatProdErrorMessage(491));
				request[task.childIndex] = segment.id;
			}
		}
	}
	function untrackBoundary(request, boundary) {
		request = request.trackedPostpones;
		null !== request && (boundary = boundary.tracked, null !== boundary && (boundary = boundary.contentKeyPath, null !== boundary && (request = request.workingMap.get(boundary), void 0 !== request && (request.length = 4, request[2] = [], request[3] = null))));
	}
	function spawnNewSuspendedReplayTask(request, task, thenableState) {
		return createReplayTask(request, thenableState, task.replay, task.node, task.childIndex, task.blockedBoundary, task.hoistableState, task.abortSet, task.keyPath, task.formatContext, task.context, task.treeContext, task.row, task.componentStack);
	}
	function spawnNewSuspendedRenderTask(request, task, thenableState) {
		var segment = task.blockedSegment, newSegment = createPendingSegment(request, segment.chunks.length, null, task.formatContext, segment.lastPushedText, !0);
		segment.children.push(newSegment);
		segment.lastPushedText = !1;
		return createRenderTask(request, thenableState, task.node, task.childIndex, task.blockedBoundary, newSegment, task.blockedPreamble, task.hoistableState, task.abortSet, task.keyPath, task.formatContext, task.context, task.treeContext, task.row, task.componentStack);
	}
	function renderNode(request, task, node, childIndex) {
		var previousFormatContext = task.formatContext, previousContext = task.context, previousKeyPath = task.keyPath, previousTreeContext = task.treeContext, previousComponentStack = task.componentStack, segment = task.blockedSegment;
		if (null === segment) {
			segment = task.replay;
			try {
				return renderNodeDestructive(request, task, node, childIndex);
			} catch (thrownValue) {
				if (resetHooksState(), node = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue, !request.aborted && "object" === typeof node && null !== node) {
					if ("function" === typeof node.then) {
						childIndex = thrownValue === SuspenseException ? getThenableStateAfterSuspending() : null;
						request = spawnNewSuspendedReplayTask(request, task, childIndex).ping;
						node.then(request.resolve, request.reject);
						task.formatContext = previousFormatContext;
						task.context = previousContext;
						task.keyPath = previousKeyPath;
						task.treeContext = previousTreeContext;
						task.componentStack = previousComponentStack;
						task.replay = segment;
						switchContext(previousContext);
						return;
					}
					if ("Maximum call stack size exceeded" === node.message) {
						node = thrownValue === SuspenseException ? getThenableStateAfterSuspending() : null;
						node = spawnNewSuspendedReplayTask(request, task, node);
						request.pingedTasks.push(node);
						task.formatContext = previousFormatContext;
						task.context = previousContext;
						task.keyPath = previousKeyPath;
						task.treeContext = previousTreeContext;
						task.componentStack = previousComponentStack;
						task.replay = segment;
						switchContext(previousContext);
						return;
					}
				}
			}
		} else {
			var childrenLength = segment.children.length, chunkLength = segment.chunks.length;
			try {
				return renderNodeDestructive(request, task, node, childIndex);
			} catch (thrownValue$63) {
				if (resetHooksState(), segment.children.length = childrenLength, segment.chunks.length = chunkLength, node = thrownValue$63 === SuspenseException ? getSuspendedThenable() : thrownValue$63, !request.aborted && "object" === typeof node && null !== node) {
					if ("function" === typeof node.then) {
						segment = node;
						node = thrownValue$63 === SuspenseException ? getThenableStateAfterSuspending() : null;
						request = spawnNewSuspendedRenderTask(request, task, node).ping;
						segment.then(request.resolve, request.reject);
						task.formatContext = previousFormatContext;
						task.context = previousContext;
						task.keyPath = previousKeyPath;
						task.treeContext = previousTreeContext;
						task.componentStack = previousComponentStack;
						switchContext(previousContext);
						return;
					}
					if ("Maximum call stack size exceeded" === node.message) {
						segment = thrownValue$63 === SuspenseException ? getThenableStateAfterSuspending() : null;
						segment = spawnNewSuspendedRenderTask(request, task, segment);
						request.pingedTasks.push(segment);
						task.formatContext = previousFormatContext;
						task.context = previousContext;
						task.keyPath = previousKeyPath;
						task.treeContext = previousTreeContext;
						task.componentStack = previousComponentStack;
						switchContext(previousContext);
						return;
					}
				}
			}
		}
		task.formatContext = previousFormatContext;
		task.context = previousContext;
		task.keyPath = previousKeyPath;
		task.treeContext = previousTreeContext;
		switchContext(previousContext);
		throw node;
	}
	function abortTaskSoft(task) {
		var boundary = task.blockedBoundary, segment = task.blockedSegment;
		null !== segment && (segment.status = 3, finishedTask(this, boundary, task.row, segment));
	}
	function abortRemainingReplayNodes(request$jscomp$0, boundary, nodes, slots, error, errorDigest$jscomp$0) {
		for (var i = 0; i < nodes.length; i++) {
			var node = nodes[i];
			if (4 === node.length) abortRemainingReplayNodes(request$jscomp$0, boundary, node[2], node[3], error, errorDigest$jscomp$0);
			else {
				node = node[5];
				var request = request$jscomp$0, errorDigest = errorDigest$jscomp$0, resumedBoundary = createSuspenseBoundary(request, null, /* @__PURE__ */ new Set(), null, !1);
				resumedBoundary.parentFlushed = !0;
				resumedBoundary.rootSegmentID = node;
				resumedBoundary.status = 4;
				resumedBoundary.errorDigest = errorDigest;
				resumedBoundary.parentFlushed && request.clientRenderedBoundaries.push(resumedBoundary);
			}
		}
		nodes.length = 0;
		if (null !== slots) {
			if (null === boundary) throw Error(formatProdErrorMessage(487));
			4 !== boundary.status && (boundary.status = 4, boundary.errorDigest = errorDigest$jscomp$0, boundary.parentFlushed && request$jscomp$0.clientRenderedBoundaries.push(boundary));
			if ("object" === typeof slots) for (var index in slots) delete slots[index];
		}
	}
	function abortTask(task, request) {
		if (task !== request.currentTask) {
			var boundary = task.blockedBoundary;
			task = task.blockedSegment;
			null !== task && (task.status = 3);
			null !== boundary && boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
				return abortTask(fallbackTask, request);
			});
		}
	}
	function finishAbortedTask(task, request, error) {
		if (task !== request.currentTask) {
			var boundary = task.blockedBoundary, segment = task.blockedSegment;
			if (null === segment || 3 === segment.status) {
				var errorInfo = getThrownInfo(task.componentStack), isRecoverableReason = isRecoverableError(error);
				if (null === boundary) {
					boundary = task.replay;
					if (null === boundary) {
						isRecoverableReason || null === request.trackedPostpones || null === segment ? isRecoverableReason ? (task = cloneRecoverableErrorAsFatal(error), logRecoverableError(request, task, errorInfo), 12 !== request.status && 13 !== request.status && fatalError(request, task)) : (logRecoverableError(request, error, errorInfo), 12 !== request.status && 13 !== request.status && fatalError(request, error)) : (boundary = request.trackedPostpones, logRecoverableError(request, error, errorInfo), trackPostpone(request, boundary, task, segment), finishedTask(request, null, task.row, segment));
						return;
					}
					12 !== request.status && 13 !== request.status && (boundary.pendingTasks--, 0 === boundary.pendingTasks && 0 < boundary.nodes.length && (errorInfo = logRecoverableError(request, error, errorInfo), abortRemainingReplayNodes(request, null, boundary.nodes, boundary.slots, error, errorInfo)), request.pendingRootTasks--, 0 === request.pendingRootTasks && completeShell(request));
				} else {
					var trackedPostpones$64 = request.trackedPostpones;
					if (4 !== boundary.status) {
						if (!isRecoverableReason && null !== trackedPostpones$64 && null !== segment) return logRecoverableError(request, error, errorInfo), trackPostpone(request, trackedPostpones$64, task, segment), boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
							return finishAbortedTask(fallbackTask, request, error);
						}), boundary.fallbackAbortableTasks.clear(), finishedTask(request, boundary, task.row, segment);
						boundary.status = 4;
						errorInfo = logRecoverableError(request, error, errorInfo);
						boundary.errorDigest = errorInfo;
						untrackBoundary(request, boundary);
						boundary.parentFlushed && request.clientRenderedBoundaries.push(boundary);
					}
					boundary.pendingTasks--;
					errorInfo = boundary.row;
					null !== errorInfo && 0 === --errorInfo.pendingTasks && finishSuspenseListRow(request, errorInfo);
					boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
						return finishAbortedTask(fallbackTask, request, error);
					});
					boundary.fallbackAbortableTasks.clear();
				}
				task = task.row;
				null !== task && 0 === --task.pendingTasks && finishSuspenseListRow(request, task);
				request.allPendingTasks--;
				0 === request.allPendingTasks && completeAll(request);
			}
		}
	}
	function safelyEmitEarlyPreloads(request, shellComplete) {
		try {
			var renderState = request.renderState, onHeaders = renderState.onHeaders;
			if (onHeaders) {
				var headers = renderState.headers;
				if (headers) {
					renderState.headers = null;
					var linkHeader = headers.preconnects;
					headers.fontPreloads && (linkHeader && (linkHeader += ", "), linkHeader += headers.fontPreloads);
					headers.highImagePreloads && (linkHeader && (linkHeader += ", "), linkHeader += headers.highImagePreloads);
					if (!shellComplete) {
						var queueIter = renderState.styles.values(), queueStep = queueIter.next();
						b: for (; 0 < headers.remainingCapacity && !queueStep.done; queueStep = queueIter.next()) for (var sheetIter = queueStep.value.sheets.values(), sheetStep = sheetIter.next(); 0 < headers.remainingCapacity && !sheetStep.done; sheetStep = sheetIter.next()) {
							var sheet = sheetStep.value, props = sheet.props, key = props.href, props$jscomp$0 = sheet.props, header = getPreloadAsHeader(props$jscomp$0.href, "style", {
								crossOrigin: props$jscomp$0.crossOrigin,
								integrity: props$jscomp$0.integrity,
								nonce: props$jscomp$0.nonce,
								type: props$jscomp$0.type,
								fetchPriority: props$jscomp$0.fetchPriority,
								referrerPolicy: props$jscomp$0.referrerPolicy,
								media: props$jscomp$0.media
							});
							if (0 <= (headers.remainingCapacity -= header.length + 2)) renderState.resets.style[key] = PRELOAD_NO_CREDS, linkHeader && (linkHeader += ", "), linkHeader += header, renderState.resets.style[key] = "string" === typeof props.crossOrigin || "string" === typeof props.integrity ? [props.crossOrigin, props.integrity] : PRELOAD_NO_CREDS;
							else break b;
						}
					}
					linkHeader ? onHeaders({ Link: linkHeader }) : onHeaders({});
				}
			}
		} catch (error) {
			logRecoverableError(request, error, {});
		}
	}
	function completeShell(request) {
		null === request.trackedPostpones && safelyEmitEarlyPreloads(request, !0);
		null === request.trackedPostpones && preparePreamble(request);
		request = request.onShellReady;
		request();
	}
	function completeAll(request) {
		safelyEmitEarlyPreloads(request, null === request.trackedPostpones ? !0 : null === request.completedRootSegment || 5 !== request.completedRootSegment.status);
		preparePreamble(request);
		request = request.onAllReady;
		request();
	}
	function queueCompletedSegment(boundary, segment) {
		if (0 === segment.chunks.length && 1 === segment.children.length && null === segment.children[0].boundary && -1 === segment.children[0].id) {
			var childSegment = segment.children[0];
			childSegment.id = segment.id;
			childSegment.parentFlushed = !0;
			1 !== childSegment.status && 3 !== childSegment.status && 4 !== childSegment.status || queueCompletedSegment(boundary, childSegment);
		} else boundary.completedSegments.push(segment);
	}
	function finishedTask(request, boundary, row, segment) {
		null !== row && (0 === --row.pendingTasks ? finishSuspenseListRow(request, row) : row.together && tryToResolveTogetherRow(request, row));
		request.allPendingTasks--;
		if (null === boundary) {
			if (null !== segment && segment.parentFlushed) {
				if (null !== request.completedRootSegment) throw Error(formatProdErrorMessage(389));
				request.completedRootSegment = segment;
			}
			request.pendingRootTasks--;
			0 === request.pendingRootTasks && completeShell(request);
		} else if (boundary.pendingTasks--, 4 !== boundary.status) if (0 === boundary.pendingTasks) {
			if (0 === boundary.status && (boundary.status = 1), null !== segment && segment.parentFlushed && (1 === segment.status || 3 === segment.status) && queueCompletedSegment(boundary, segment), boundary.parentFlushed && request.completedBoundaries.push(boundary), 1 === boundary.status) row = boundary.row, null !== row && hoistHoistables(row.hoistables, boundary.contentState), isEligibleForOutlining(request, boundary) || (request.allPendingTasks++, boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request), boundary.fallbackAbortableTasks.clear(), null !== row && 0 === --row.pendingTasks && finishSuspenseListRow(request, row), request.allPendingTasks--), 0 === request.pendingRootTasks && null === request.trackedPostpones && null !== boundary.preamble && preparePreamble(request);
			else if (5 === boundary.status && (boundary = boundary.row, null !== boundary)) {
				if (null !== request.trackedPostpones) {
					row = request.trackedPostpones;
					var postponedRow = boundary.next;
					if (null !== postponedRow && (segment = postponedRow.boundaries, null !== segment)) for (postponedRow.boundaries = null, postponedRow = 0; postponedRow < segment.length; postponedRow++) {
						var postponedBoundary = segment[postponedRow];
						trackPostponedBoundary(request, row, postponedBoundary);
						finishedTask(request, postponedBoundary, null, null);
					}
				}
				request.allPendingTasks++;
				0 === --boundary.pendingTasks && finishSuspenseListRow(request, boundary);
				request.allPendingTasks--;
			}
		} else null === segment || !segment.parentFlushed || 1 !== segment.status && 3 !== segment.status || (queueCompletedSegment(boundary, segment), 1 === boundary.completedSegments.length && boundary.parentFlushed && request.partialBoundaries.push(boundary)), boundary = boundary.row, null !== boundary && boundary.together && tryToResolveTogetherRow(request, boundary);
		0 === request.allPendingTasks && completeAll(request);
	}
	function performWork(request$jscomp$1) {
		if (!(request$jscomp$1.aborted || 11 < request$jscomp$1.status)) {
			var prevContext = currentActiveSnapshot, prevDispatcher = ReactSharedInternals.H;
			ReactSharedInternals.H = HooksDispatcher;
			var prevAsyncDispatcher = ReactSharedInternals.A;
			ReactSharedInternals.A = DefaultAsyncDispatcher;
			var prevRequest = currentRequest;
			currentRequest = request$jscomp$1;
			var prevResumableState = currentResumableState;
			currentResumableState = request$jscomp$1.resumableState;
			try {
				var pingedTasks = request$jscomp$1.pingedTasks, i = 0;
				for (; i < pingedTasks.length; i++) {
					var task = pingedTasks[i], request = request$jscomp$1, segment = task.blockedSegment;
					if (null === segment) {
						a: if (0 !== task.replay.pendingTasks) {
							var prevTask = request.currentTask;
							request.currentTask = task;
							switchContext(task.context);
							var startNode = task.node;
							try {
								"number" === typeof task.replay.slots ? resumeNode(request, task, task.replay.slots, task.node, task.childIndex) : retryNode(request, task);
								if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length) throw Error(formatProdErrorMessage(488));
								task.replay.pendingTasks--;
								task.abortSet.delete(task);
								finishedTask(request, task.blockedBoundary, task.row, null);
							} catch (thrownValue) {
								resetHooksState();
								var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
								if (request.aborted) {
									thrownValue === SuspenseException && (task.thenableState = getThenableStateAfterSuspending());
									request.currentTask = prevTask;
									var request$jscomp$0 = request;
									abortTask(task, request$jscomp$0);
									task.abortSet.delete(task);
									finishAbortedTask(task, request$jscomp$0, request$jscomp$0.fatalError);
								} else {
									if ("object" === typeof x && null !== x) {
										if ("function" === typeof x.then) {
											var ping = task.ping;
											x.then(ping.resolve, ping.reject);
											task.thenableState = thrownValue === SuspenseException ? getThenableStateAfterSuspending() : null;
											break a;
										}
										if ("Maximum call stack size exceeded" === x.message && task.node !== startNode) {
											task.thenableState = null;
											request.pingedTasks.push(task);
											break a;
										}
									}
									task.replay.pendingTasks--;
									task.abortSet.delete(task);
									var errorInfo = getThrownInfo(task.componentStack);
									request$jscomp$0 = request;
									var boundary = task.blockedBoundary, error$jscomp$0 = request.aborted ? request.fatalError : x, replayNodes = task.replay.nodes, resumeSlots = task.replay.slots, errorDigest = logRecoverableError(request$jscomp$0, error$jscomp$0, errorInfo);
									abortRemainingReplayNodes(request$jscomp$0, boundary, replayNodes, resumeSlots, error$jscomp$0, errorDigest);
									request.pendingRootTasks--;
									0 === request.pendingRootTasks && completeShell(request);
									request.allPendingTasks--;
									0 === request.allPendingTasks && completeAll(request);
								}
							} finally {
								request.currentTask = prevTask;
							}
						}
					} else a: if (request$jscomp$0 = segment, 0 === request$jscomp$0.status) {
						var prevTask$jscomp$0 = request.currentTask;
						request.currentTask = task;
						switchContext(task.context);
						var childrenLength = request$jscomp$0.children.length, chunkLength = request$jscomp$0.chunks.length, startNode$jscomp$0 = task.node;
						try {
							retryNode(request, task), pushSegmentFinale(request$jscomp$0.chunks, request.renderState, request$jscomp$0.lastPushedText, request$jscomp$0.textEmbedded), task.abortSet.delete(task), request$jscomp$0.status = 1, finishedTask(request, task.blockedBoundary, task.row, request$jscomp$0);
						} catch (thrownValue) {
							resetHooksState();
							request$jscomp$0.children.length = childrenLength;
							request$jscomp$0.chunks.length = chunkLength;
							var x$jscomp$0 = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
							if (request.aborted) thrownValue === SuspenseException && (task.thenableState = getThenableStateAfterSuspending()), request.currentTask = prevTask$jscomp$0, request$jscomp$0 = request, abortTask(task, request$jscomp$0), task.abortSet.delete(task), finishAbortedTask(task, request$jscomp$0, request$jscomp$0.fatalError);
							else {
								if ("object" === typeof x$jscomp$0 && null !== x$jscomp$0) {
									if ("function" === typeof x$jscomp$0.then) {
										request$jscomp$0.status = 0;
										task.thenableState = thrownValue === SuspenseException ? getThenableStateAfterSuspending() : null;
										var ping$jscomp$0 = task.ping;
										x$jscomp$0.then(ping$jscomp$0.resolve, ping$jscomp$0.reject);
										break a;
									}
									if ("Maximum call stack size exceeded" === x$jscomp$0.message && task.node !== startNode$jscomp$0) {
										request$jscomp$0.status = 0;
										task.thenableState = null;
										request.pingedTasks.push(task);
										break a;
									}
								}
								var errorInfo$jscomp$0 = getThrownInfo(task.componentStack);
								task.abortSet.delete(task);
								request$jscomp$0.status = 4;
								var boundary$jscomp$0 = task.blockedBoundary, row = task.row;
								null !== row && 0 === --row.pendingTasks && finishSuspenseListRow(request, row);
								request.allPendingTasks--;
								if (null === boundary$jscomp$0) if (isRecoverableError(x$jscomp$0)) {
									var fatalRecoverableError = cloneRecoverableErrorAsFatal(x$jscomp$0);
									logRecoverableError(request, fatalRecoverableError, errorInfo$jscomp$0);
									fatalError(request, fatalRecoverableError);
								} else logRecoverableError(request, x$jscomp$0, errorInfo$jscomp$0), fatalError(request, x$jscomp$0);
								else {
									var errorDigest$jscomp$0 = logRecoverableError(request, x$jscomp$0, errorInfo$jscomp$0);
									boundary$jscomp$0.pendingTasks--;
									if (4 !== boundary$jscomp$0.status) {
										boundary$jscomp$0.status = 4;
										boundary$jscomp$0.errorDigest = errorDigest$jscomp$0;
										untrackBoundary(request, boundary$jscomp$0);
										var boundaryRow = boundary$jscomp$0.row;
										null !== boundaryRow && (request.allPendingTasks++, 0 === --boundaryRow.pendingTasks && finishSuspenseListRow(request, boundaryRow), request.allPendingTasks--);
										boundary$jscomp$0.parentFlushed && request.clientRenderedBoundaries.push(boundary$jscomp$0);
										0 === request.pendingRootTasks && null === request.trackedPostpones && null !== boundary$jscomp$0.preamble && preparePreamble(request);
									}
									0 === request.allPendingTasks && completeAll(request);
								}
							}
						} finally {
							request.currentTask = prevTask$jscomp$0;
						}
					}
				}
				pingedTasks.splice(0, i);
				null !== request$jscomp$1.destination && flushCompletedQueues(request$jscomp$1, request$jscomp$1.destination);
			} catch (error) {
				logRecoverableError(request$jscomp$1, error, {}), fatalError(request$jscomp$1, error);
			} finally {
				currentResumableState = prevResumableState, ReactSharedInternals.H = prevDispatcher, ReactSharedInternals.A = prevAsyncDispatcher, prevDispatcher === HooksDispatcher && switchContext(prevContext), currentRequest = prevRequest;
			}
		}
	}
	function preparePreambleFromSubtree(request, segment, collectedPreambleSegments) {
		segment.preambleChildren.length && collectedPreambleSegments.push(segment.preambleChildren);
		for (var pendingPreambles = !1, i = 0; i < segment.children.length; i++) pendingPreambles = preparePreambleFromSegment(request, segment.children[i], collectedPreambleSegments) || pendingPreambles;
		return pendingPreambles;
	}
	function preparePreambleFromSegment(request, segment, collectedPreambleSegments) {
		var boundary = segment.boundary;
		if (null === boundary) return preparePreambleFromSubtree(request, segment, collectedPreambleSegments);
		var preamble = boundary.preamble;
		if (null === preamble) return !1;
		switch (boundary.status) {
			case 1:
				hoistPreambleState(request.renderState, preamble.content);
				request.byteSize += boundary.byteSize;
				segment = boundary.completedSegments[0];
				if (!segment) throw Error(formatProdErrorMessage(391));
				return preparePreambleFromSubtree(request, segment, collectedPreambleSegments);
			case 5: if (null !== request.trackedPostpones) return !0;
			case 4: if (1 === segment.status) return hoistPreambleState(request.renderState, preamble.fallback), preparePreambleFromSubtree(request, segment, collectedPreambleSegments);
			default: return !0;
		}
	}
	function preparePreamble(request) {
		if (request.completedRootSegment && null === request.completedPreambleSegments) {
			var collectedPreambleSegments = [], originalRequestByteSize = request.byteSize, hasPendingPreambles = preparePreambleFromSegment(request, request.completedRootSegment, collectedPreambleSegments), preamble = request.renderState.preamble;
			!1 === hasPendingPreambles || preamble.headChunks && preamble.bodyChunks ? request.completedPreambleSegments = collectedPreambleSegments : request.byteSize = originalRequestByteSize;
		}
	}
	function flushSubtree(request, destination, segment, hoistableState) {
		segment.parentFlushed = !0;
		switch (segment.status) {
			case 0: segment.id = request.nextSegmentId++;
			case 5: return hoistableState = segment.id, segment.lastPushedText = !1, segment.textEmbedded = !1, request = request.renderState, destination.push("<template id=\""), destination.push(request.placeholderPrefix), request = hoistableState.toString(16), destination.push(request), destination.push("\"></template>");
			case 1:
				segment.status = 2;
				var r = !0, chunks = segment.chunks, chunkIdx = 0;
				segment = segment.children;
				for (var childIdx = 0; childIdx < segment.length; childIdx++) {
					for (r = segment[childIdx]; chunkIdx < r.index; chunkIdx++) destination.push(chunks[chunkIdx]);
					r = flushSegment(request, destination, r, hoistableState);
				}
				for (; chunkIdx < chunks.length - 1; chunkIdx++) destination.push(chunks[chunkIdx]);
				chunkIdx < chunks.length && (r = destination.push(chunks[chunkIdx]));
				return r;
			case 3: return !0;
			default: throw Error(formatProdErrorMessage(390));
		}
	}
	var flushedByteSize = 0;
	function flushSegment(request, destination, segment, hoistableState) {
		var boundary = segment.boundary;
		if (null === boundary) return flushSubtree(request, destination, segment, hoistableState);
		segment.boundary = null;
		boundary.parentFlushed = !0;
		if (4 === boundary.status) {
			var row = boundary.row;
			null !== row && 0 === --row.pendingTasks && finishSuspenseListRow(request, row);
			request.renderState.generateStaticMarkup || (boundary = boundary.errorDigest, destination.push("<!--$!-->"), destination.push("<template"), null != boundary && (destination.push(" data-dgst=\""), boundary = escapeTextForBrowser(boundary), destination.push(boundary), destination.push("\"")), destination.push("></template>"));
			flushSubtree(request, destination, segment, hoistableState);
			request = request.renderState.generateStaticMarkup ? !0 : destination.push("<!--/$-->");
			return request;
		}
		if (1 !== boundary.status) return 0 === boundary.status && (boundary.rootSegmentID = request.nextSegmentId++), 0 < boundary.completedSegments.length && request.partialBoundaries.push(boundary), writeStartPendingSuspenseBoundary(destination, request.renderState, boundary.rootSegmentID), hoistableState && hoistHoistables(hoistableState, boundary.fallbackState), flushSubtree(request, destination, segment, hoistableState), destination.push("<!--/$-->");
		if (!flushingPartialBoundaries && isEligibleForOutlining(request, boundary) && (flushedByteSize + boundary.byteSize > request.progressiveChunkSize || boundary.defer)) return boundary.rootSegmentID = request.nextSegmentId++, request.completedBoundaries.push(boundary), writeStartPendingSuspenseBoundary(destination, request.renderState, boundary.rootSegmentID), flushSubtree(request, destination, segment, hoistableState), destination.push("<!--/$-->");
		flushedByteSize += boundary.byteSize;
		hoistableState && hoistHoistables(hoistableState, boundary.contentState);
		segment = boundary.row;
		null !== segment && isEligibleForOutlining(request, boundary) && 0 === --segment.pendingTasks && finishSuspenseListRow(request, segment);
		request.renderState.generateStaticMarkup || destination.push("<!--$-->");
		segment = boundary.completedSegments;
		if (1 !== segment.length) throw Error(formatProdErrorMessage(391));
		flushSegment(request, destination, segment[0], hoistableState);
		request = request.renderState.generateStaticMarkup ? !0 : destination.push("<!--/$-->");
		return request;
	}
	function flushSegmentContainer(request, destination, segment, hoistableState) {
		writeStartSegment(destination, request.renderState, segment.parentFormatContext, segment.id);
		flushSegment(request, destination, segment, hoistableState);
		return writeEndSegment(destination, segment.parentFormatContext);
	}
	function flushCompletedBoundary(request, destination, boundary) {
		flushedByteSize = boundary.byteSize;
		for (var completedSegments = boundary.completedSegments, i = 0; i < completedSegments.length; i++) flushPartiallyCompletedSegment(request, destination, boundary, completedSegments[i]);
		completedSegments.length = 0;
		completedSegments = boundary.row;
		null !== completedSegments && isEligibleForOutlining(request, boundary) && 0 === --completedSegments.pendingTasks && finishSuspenseListRow(request, completedSegments);
		writeHoistablesForBoundary(destination, boundary.contentState, request.renderState);
		completedSegments = request.resumableState;
		request = request.renderState;
		i = boundary.rootSegmentID;
		boundary = boundary.contentState;
		var requiresStyleInsertion = request.stylesToHoist, requiresViewTransitions = 0 !== (completedSegments.instructions & 128);
		request.stylesToHoist = !1;
		destination.push(request.startInlineScript);
		destination.push(">");
		requiresStyleInsertion ? (0 === (completedSegments.instructions & 4) && (completedSegments.instructions |= 4, destination.push("$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data=\"$!\",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};")), 0 === (completedSegments.instructions & 2) && (completedSegments.instructions |= 2, destination.push("$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if(\"/$\"===d||\"/&\"===d)if(0===h)break;else h--;else\"$\"!==d&&\"$?\"!==d&&\"$~\"!==d&&\"$!\"!==d&&\"&\"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data=\"$\";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data=\"$~\",$RB.push(a,b),2===$RB.length&&(\"number\"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};")), requiresViewTransitions && 0 === (completedSegments.instructions & 256) && (completedSegments.instructions |= 256, destination.push("$RV=function(B,g){function h(a,c){var e=a.getAttribute(c);e&&(c=a.style,l.push(a,c.viewTransitionName,c.viewTransitionClass),\"auto\"!==e&&(c.viewTransitionClass=e),(a=a.getAttribute(\"vt-name\"))||(a=\"_T_\"+N++ +\"_\"),a=CSS.escape(a)!==a?\"r-\"+btoa(a).replace(/=/g,\"\"):a,c.viewTransitionName=a,C=!0)}var C=!1,N=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var k=g[f].querySelectorAll(\"[vt-share]\"),d=0;d<k.length;d++){var b=k[d];m.set(b.getAttribute(\"vt-name\"),b)}var u=[];for(k=0;k<g.length;k+=2){var D=g[k],x=D.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){b=D;for(f=0;b;){if(8===b.nodeType){var t=b.data;if(\"/$\"===t)if(0===f)break;else f--;else\"$\"!==t&&\"$?\"!==t&&\"$~\"!==t&&\"$!\"!==t||f++}else if(1===b.nodeType){d=b;var E=d.getAttribute(\"vt-name\"),y=m.get(E);h(d,y?\"vt-share\":\"vt-exit\");y&&(h(y,\"vt-share\"),m.set(E,null));for(var F=d.querySelectorAll(\"[vt-share]\"),\nz=0;z<F.length;z++){var G=F[z],H=G.getAttribute(\"vt-name\"),I=m.get(H);I&&(h(G,\"vt-share\"),h(I,\"vt-share\"),m.set(H,null))}var J=d.querySelectorAll(\"[vt-parent-exit]\");for(d=0;d<J.length;d++)h(J[d],\"vt-parent-exit\")}b=b.nextSibling}for(var K=g[k+1],n=K.firstElementChild;n;){null!==m.get(n.getAttribute(\"vt-name\"))&&h(n,\"vt-enter\");var L=n.querySelectorAll(\"[vt-parent-enter]\");for(b=0;b<L.length;b++)h(L[b],\"vt-parent-enter\");n=n.nextElementSibling}b=x;do for(var p=b.firstElementChild;p;){var M=p.getAttribute(\"vt-update\");\nM&&\"none\"!==M&&!l.includes(p)&&h(p,\"vt-update\");p=p.nextElementSibling}while((b=b.parentNode)&&1===b.nodeType&&\"none\"!==b.getAttribute(\"vt-update\"));u.push.apply(u,K.querySelectorAll('img[src]:not([loading=\"lazy\"])'))}}}if(C){var A=document.__reactViewTransition=document.startViewTransition({update:function(){B(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],c={},e=0;e<u.length;c={g:c.g},e++)if(c.g=u[e],!c.g.complete){var q=c.g.getBoundingClientRect();0<q.bottom&&0<q.right&&\nq.top<window.innerHeight&&q.left<window.innerWidth&&(q=new Promise(function(w){return function(r){w.g.addEventListener(\"load\",r);w.g.addEventListener(\"error\",r)}}(c)),a.push(q))}return Promise.race([Promise.all(a),new Promise(function(w){var r=performance.now();setTimeout(w,2300>r&&2E3<r?2300-r:500)})])},types:[]});A.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var c=l[a],e=c.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];\"\"===c.getAttribute(\"style\")&&c.removeAttribute(\"style\")}});\nA.finished.finally(function(){document.__reactViewTransition===A&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}B(g)}.bind(null,$RV);")), 0 === (completedSegments.instructions & 8) ? (completedSegments.instructions |= 8, destination.push("$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll(\"link[data-precedence],style[data-precedence]\"),v=[],k=0;b=e[k++];)\"not all\"===b.getAttribute(\"media\")?v.push(b):(\"LINK\"===b.tagName&&$RM.set(b.getAttribute(\"href\"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement(\"link\");a.href=d;a.rel=\n\"stylesheet\";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute(\"media\");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute(\"data-precedence\");a.removeAttribute(\"media\")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=\n\"$~\";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,\"CSS failed to load\"))};$RR(\"")) : destination.push("$RR(\"")) : (0 === (completedSegments.instructions & 2) && (completedSegments.instructions |= 2, destination.push("$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if(\"/$\"===d||\"/&\"===d)if(0===h)break;else h--;else\"$\"!==d&&\"$?\"!==d&&\"$~\"!==d&&\"$!\"!==d&&\"&\"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data=\"$\";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data=\"$~\",$RB.push(a,b),2===$RB.length&&(\"number\"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};")), requiresViewTransitions && 0 === (completedSegments.instructions & 256) && (completedSegments.instructions |= 256, destination.push("$RV=function(B,g){function h(a,c){var e=a.getAttribute(c);e&&(c=a.style,l.push(a,c.viewTransitionName,c.viewTransitionClass),\"auto\"!==e&&(c.viewTransitionClass=e),(a=a.getAttribute(\"vt-name\"))||(a=\"_T_\"+N++ +\"_\"),a=CSS.escape(a)!==a?\"r-\"+btoa(a).replace(/=/g,\"\"):a,c.viewTransitionName=a,C=!0)}var C=!1,N=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var k=g[f].querySelectorAll(\"[vt-share]\"),d=0;d<k.length;d++){var b=k[d];m.set(b.getAttribute(\"vt-name\"),b)}var u=[];for(k=0;k<g.length;k+=2){var D=g[k],x=D.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){b=D;for(f=0;b;){if(8===b.nodeType){var t=b.data;if(\"/$\"===t)if(0===f)break;else f--;else\"$\"!==t&&\"$?\"!==t&&\"$~\"!==t&&\"$!\"!==t||f++}else if(1===b.nodeType){d=b;var E=d.getAttribute(\"vt-name\"),y=m.get(E);h(d,y?\"vt-share\":\"vt-exit\");y&&(h(y,\"vt-share\"),m.set(E,null));for(var F=d.querySelectorAll(\"[vt-share]\"),\nz=0;z<F.length;z++){var G=F[z],H=G.getAttribute(\"vt-name\"),I=m.get(H);I&&(h(G,\"vt-share\"),h(I,\"vt-share\"),m.set(H,null))}var J=d.querySelectorAll(\"[vt-parent-exit]\");for(d=0;d<J.length;d++)h(J[d],\"vt-parent-exit\")}b=b.nextSibling}for(var K=g[k+1],n=K.firstElementChild;n;){null!==m.get(n.getAttribute(\"vt-name\"))&&h(n,\"vt-enter\");var L=n.querySelectorAll(\"[vt-parent-enter]\");for(b=0;b<L.length;b++)h(L[b],\"vt-parent-enter\");n=n.nextElementSibling}b=x;do for(var p=b.firstElementChild;p;){var M=p.getAttribute(\"vt-update\");\nM&&\"none\"!==M&&!l.includes(p)&&h(p,\"vt-update\");p=p.nextElementSibling}while((b=b.parentNode)&&1===b.nodeType&&\"none\"!==b.getAttribute(\"vt-update\"));u.push.apply(u,K.querySelectorAll('img[src]:not([loading=\"lazy\"])'))}}}if(C){var A=document.__reactViewTransition=document.startViewTransition({update:function(){B(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],c={},e=0;e<u.length;c={g:c.g},e++)if(c.g=u[e],!c.g.complete){var q=c.g.getBoundingClientRect();0<q.bottom&&0<q.right&&\nq.top<window.innerHeight&&q.left<window.innerWidth&&(q=new Promise(function(w){return function(r){w.g.addEventListener(\"load\",r);w.g.addEventListener(\"error\",r)}}(c)),a.push(q))}return Promise.race([Promise.all(a),new Promise(function(w){var r=performance.now();setTimeout(w,2300>r&&2E3<r?2300-r:500)})])},types:[]});A.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var c=l[a],e=c.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];\"\"===c.getAttribute(\"style\")&&c.removeAttribute(\"style\")}});\nA.finished.finally(function(){document.__reactViewTransition===A&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}B(g)}.bind(null,$RV);")), destination.push("$RC(\""));
		completedSegments = i.toString(16);
		destination.push(request.boundaryPrefix);
		destination.push(completedSegments);
		destination.push("\",\"");
		destination.push(request.segmentPrefix);
		destination.push(completedSegments);
		requiresStyleInsertion ? (destination.push("\","), writeStyleResourceDependenciesInJS(destination, boundary)) : destination.push("\"");
		boundary = destination.push(")<\/script>");
		return writeBootstrap(destination, request) && boundary;
	}
	function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
		if (2 === segment.status) return !0;
		var hoistableState = boundary.contentState, segmentID = segment.id;
		if (-1 === segmentID) {
			if (-1 === (segment.id = boundary.rootSegmentID)) throw Error(formatProdErrorMessage(392));
			return flushSegmentContainer(request, destination, segment, hoistableState);
		}
		if (segmentID === boundary.rootSegmentID) return flushSegmentContainer(request, destination, segment, hoistableState);
		flushSegmentContainer(request, destination, segment, hoistableState);
		boundary = request.resumableState;
		request = request.renderState;
		destination.push(request.startInlineScript);
		destination.push(">");
		0 === (boundary.instructions & 1) ? (boundary.instructions |= 1, destination.push("$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS(\"")) : destination.push("$RS(\"");
		destination.push(request.segmentPrefix);
		segmentID = segmentID.toString(16);
		destination.push(segmentID);
		destination.push("\",\"");
		destination.push(request.placeholderPrefix);
		destination.push(segmentID);
		destination = destination.push("\")<\/script>");
		return destination;
	}
	var flushingPartialBoundaries = !1;
	function flushCompletedQueues(request, destination) {
		try {
			if (!(0 < request.pendingRootTasks)) {
				var i, completedRootSegment = request.completedRootSegment;
				if (null !== completedRootSegment) {
					if (5 === completedRootSegment.status) return;
					var completedPreambleSegments = request.completedPreambleSegments;
					if (null === completedPreambleSegments) return;
					flushedByteSize = request.byteSize;
					var resumableState = request.resumableState, renderState = request.renderState, preamble = renderState.preamble, htmlChunks = preamble.htmlChunks, headChunks = preamble.headChunks, i$jscomp$0;
					if (htmlChunks) {
						for (i$jscomp$0 = 0; i$jscomp$0 < htmlChunks.length; i$jscomp$0++) destination.push(htmlChunks[i$jscomp$0]);
						if (headChunks) for (i$jscomp$0 = 0; i$jscomp$0 < headChunks.length; i$jscomp$0++) destination.push(headChunks[i$jscomp$0]);
						else {
							var chunk = startChunkForTag("head");
							destination.push(chunk);
							destination.push(">");
						}
					} else if (headChunks) for (i$jscomp$0 = 0; i$jscomp$0 < headChunks.length; i$jscomp$0++) destination.push(headChunks[i$jscomp$0]);
					var charsetChunks = renderState.charsetChunks;
					for (i$jscomp$0 = 0; i$jscomp$0 < charsetChunks.length; i$jscomp$0++) destination.push(charsetChunks[i$jscomp$0]);
					charsetChunks.length = 0;
					renderState.preconnects.forEach(flushResource, destination);
					renderState.preconnects.clear();
					var viewportChunks = renderState.viewportChunks;
					for (i$jscomp$0 = 0; i$jscomp$0 < viewportChunks.length; i$jscomp$0++) destination.push(viewportChunks[i$jscomp$0]);
					viewportChunks.length = 0;
					renderState.fontPreloads.forEach(flushResource, destination);
					renderState.fontPreloads.clear();
					renderState.highImagePreloads.forEach(flushResource, destination);
					renderState.highImagePreloads.clear();
					currentlyFlushingRenderState = renderState;
					renderState.styles.forEach(flushStylesInPreamble, destination);
					currentlyFlushingRenderState = null;
					var importMapChunks = renderState.importMapChunks;
					for (i$jscomp$0 = 0; i$jscomp$0 < importMapChunks.length; i$jscomp$0++) destination.push(importMapChunks[i$jscomp$0]);
					importMapChunks.length = 0;
					renderState.bootstrapScripts.forEach(flushResource, destination);
					renderState.scripts.forEach(flushResource, destination);
					renderState.scripts.clear();
					renderState.bulkPreloads.forEach(flushResource, destination);
					renderState.bulkPreloads.clear();
					resumableState.instructions |= 32;
					var hoistableChunks = renderState.hoistableChunks;
					for (i$jscomp$0 = 0; i$jscomp$0 < hoistableChunks.length; i$jscomp$0++) destination.push(hoistableChunks[i$jscomp$0]);
					for (resumableState = hoistableChunks.length = 0; resumableState < completedPreambleSegments.length; resumableState++) {
						var segments = completedPreambleSegments[resumableState];
						for (renderState = 0; renderState < segments.length; renderState++) flushSegment(request, destination, segments[renderState], null);
					}
					var preamble$jscomp$0 = request.renderState.preamble, headChunks$jscomp$0 = preamble$jscomp$0.headChunks;
					if (preamble$jscomp$0.htmlChunks || headChunks$jscomp$0) {
						var chunk$jscomp$0 = endChunkForTag("head");
						destination.push(chunk$jscomp$0);
					}
					var bodyChunks = preamble$jscomp$0.bodyChunks;
					if (bodyChunks) for (completedPreambleSegments = 0; completedPreambleSegments < bodyChunks.length; completedPreambleSegments++) destination.push(bodyChunks[completedPreambleSegments]);
					flushSegment(request, destination, completedRootSegment, null);
					request.completedRootSegment = null;
					var renderState$jscomp$0 = request.renderState;
					if (0 !== request.allPendingTasks || 0 !== request.clientRenderedBoundaries.length || 0 !== request.completedBoundaries.length || null !== request.trackedPostpones && (0 !== request.trackedPostpones.rootNodes.length || null !== request.trackedPostpones.rootSlots)) {
						var resumableState$jscomp$0 = request.resumableState;
						if (0 === (resumableState$jscomp$0.instructions & 64)) {
							resumableState$jscomp$0.instructions |= 64;
							destination.push(renderState$jscomp$0.startInlineScript);
							if (0 === (resumableState$jscomp$0.instructions & 32)) {
								resumableState$jscomp$0.instructions |= 32;
								var shellId = "_" + resumableState$jscomp$0.idPrefix + "R_";
								destination.push(" id=\"");
								var chunk$jscomp$1 = escapeTextForBrowser(shellId);
								destination.push(chunk$jscomp$1);
								destination.push("\"");
							}
							destination.push(">");
							destination.push("requestAnimationFrame(function(){$RT=performance.now()});");
							destination.push("<\/script>");
						}
					}
					writeBootstrap(destination, renderState$jscomp$0);
				}
				var renderState$jscomp$1 = request.renderState;
				completedRootSegment = 0;
				var viewportChunks$jscomp$0 = renderState$jscomp$1.viewportChunks;
				for (completedRootSegment = 0; completedRootSegment < viewportChunks$jscomp$0.length; completedRootSegment++) destination.push(viewportChunks$jscomp$0[completedRootSegment]);
				viewportChunks$jscomp$0.length = 0;
				renderState$jscomp$1.preconnects.forEach(flushResource, destination);
				renderState$jscomp$1.preconnects.clear();
				renderState$jscomp$1.fontPreloads.forEach(flushResource, destination);
				renderState$jscomp$1.fontPreloads.clear();
				renderState$jscomp$1.highImagePreloads.forEach(flushResource, destination);
				renderState$jscomp$1.highImagePreloads.clear();
				renderState$jscomp$1.styles.forEach(preloadLateStyles, destination);
				renderState$jscomp$1.scripts.forEach(flushResource, destination);
				renderState$jscomp$1.scripts.clear();
				renderState$jscomp$1.bulkPreloads.forEach(flushResource, destination);
				renderState$jscomp$1.bulkPreloads.clear();
				var hoistableChunks$jscomp$0 = renderState$jscomp$1.hoistableChunks;
				for (completedRootSegment = 0; completedRootSegment < hoistableChunks$jscomp$0.length; completedRootSegment++) destination.push(hoistableChunks$jscomp$0[completedRootSegment]);
				hoistableChunks$jscomp$0.length = 0;
				var clientRenderedBoundaries = request.clientRenderedBoundaries;
				for (i = 0; i < clientRenderedBoundaries.length; i++) {
					var boundary = clientRenderedBoundaries[i];
					renderState$jscomp$1 = destination;
					var resumableState$jscomp$1 = request.resumableState, renderState$jscomp$2 = request.renderState, id = boundary.rootSegmentID, errorDigest = boundary.errorDigest;
					renderState$jscomp$1.push(renderState$jscomp$2.startInlineScript);
					renderState$jscomp$1.push(">");
					0 === (resumableState$jscomp$1.instructions & 4) ? (resumableState$jscomp$1.instructions |= 4, renderState$jscomp$1.push("$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data=\"$!\",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX(\"")) : renderState$jscomp$1.push("$RX(\"");
					renderState$jscomp$1.push(renderState$jscomp$2.boundaryPrefix);
					var chunk$jscomp$2 = id.toString(16);
					renderState$jscomp$1.push(chunk$jscomp$2);
					renderState$jscomp$1.push("\"");
					if (null != errorDigest) if (renderState$jscomp$1.push(","), null == errorDigest) renderState$jscomp$1.push("null");
					else {
						var chunk$jscomp$3 = escapeJSStringsForInstructionScripts(errorDigest);
						renderState$jscomp$1.push(chunk$jscomp$3);
					}
					var JSCompiler_inline_result = renderState$jscomp$1.push(")<\/script>");
					if (!JSCompiler_inline_result) {
						request.destination = null;
						i++;
						clientRenderedBoundaries.splice(0, i);
						return;
					}
				}
				clientRenderedBoundaries.splice(0, i);
				var completedBoundaries = request.completedBoundaries;
				for (i = 0; i < completedBoundaries.length; i++) if (!flushCompletedBoundary(request, destination, completedBoundaries[i])) {
					request.destination = null;
					i++;
					completedBoundaries.splice(0, i);
					return;
				}
				completedBoundaries.splice(0, i);
				flushingPartialBoundaries = !0;
				var partialBoundaries = request.partialBoundaries;
				for (i = 0; i < partialBoundaries.length; i++) {
					var boundary$70 = partialBoundaries[i];
					a: {
						clientRenderedBoundaries = request;
						boundary = destination;
						flushedByteSize = boundary$70.byteSize;
						var completedSegments = boundary$70.completedSegments;
						for (JSCompiler_inline_result = 0; JSCompiler_inline_result < completedSegments.length; JSCompiler_inline_result++) if (!flushPartiallyCompletedSegment(clientRenderedBoundaries, boundary, boundary$70, completedSegments[JSCompiler_inline_result])) {
							JSCompiler_inline_result++;
							completedSegments.splice(0, JSCompiler_inline_result);
							var JSCompiler_inline_result$jscomp$0 = !1;
							break a;
						}
						completedSegments.splice(0, JSCompiler_inline_result);
						var row = boundary$70.row;
						null !== row && row.together && 1 === boundary$70.pendingTasks && (1 === row.pendingTasks ? unblockSuspenseListRow(clientRenderedBoundaries, row, row.hoistables) : row.pendingTasks--);
						JSCompiler_inline_result$jscomp$0 = writeHoistablesForBoundary(boundary, boundary$70.contentState, clientRenderedBoundaries.renderState);
					}
					if (!JSCompiler_inline_result$jscomp$0) {
						request.destination = null;
						i++;
						partialBoundaries.splice(0, i);
						return;
					}
				}
				partialBoundaries.splice(0, i);
				flushingPartialBoundaries = !1;
				var largeBoundaries = request.completedBoundaries;
				for (i = 0; i < largeBoundaries.length; i++) if (!flushCompletedBoundary(request, destination, largeBoundaries[i])) {
					request.destination = null;
					i++;
					largeBoundaries.splice(0, i);
					return;
				}
				largeBoundaries.splice(0, i);
			}
		} finally {
			flushingPartialBoundaries = !1, i = request.postponedState, null !== i && (i.nextSegmentId = request.nextSegmentId), 0 === request.allPendingTasks && 0 === request.clientRenderedBoundaries.length && 0 === request.completedBoundaries.length && (request.flushScheduled = !1, i = request.resumableState, i.hasBody && (partialBoundaries = endChunkForTag("body"), destination.push(partialBoundaries)), i.hasHtml && (i = endChunkForTag("html"), destination.push(i)), endRenderLifetime(request), request.status = 13, destination.push(null), request.destination = null);
		}
	}
	function enqueueFlush(request) {
		if (!1 === request.flushScheduled && 0 === request.pingedTasks.length && null !== request.destination) {
			request.flushScheduled = !0;
			var destination = request.destination;
			destination ? flushCompletedQueues(request, destination) : request.flushScheduled = !1;
		}
	}
	function startFlowing(request, destination) {
		if (12 === request.status) request.status = 13, request = request.fatalError, isRecoverableError(request) && (request = cloneRecoverableErrorAsFatal(request)), destination.destroy(request);
		else if (13 !== request.status && null === request.destination) {
			request.destination = destination;
			try {
				flushCompletedQueues(request, destination);
			} catch (error$72) {
				logRecoverableError(request, error$72, {}), fatalError(request, error$72);
			}
		}
	}
	function finishAbort(request, abortableTasks) {
		try {
			if (0 < abortableTasks.size) {
				var error = request.fatalError;
				abortableTasks.forEach(function(task) {
					return finishAbortedTask(task, request, error);
				});
				abortableTasks.clear();
			}
			null !== request.destination && flushCompletedQueues(request, request.destination);
		} catch (error$73) {
			logRecoverableError(request, error$73, {}), fatalError(request, error$73);
		}
	}
	function endRenderLifetime(request) {
		request = request.renderLifetimeController;
		null !== request && request.abort("The render ended.");
	}
	function abort(request, reason) {
		if (!(request.aborted || 11 !== request.status && 10 !== request.status)) {
			endRenderLifetime(request);
			var isRecoverableReason = "object" === typeof reason && null !== reason && reason.$$typeof === REACT_RECOVERABLE_TYPE;
			request.aborted = !0;
			reason = isRecoverableReason ? createRecoverableError(reason) : void 0 === reason ? Error(formatProdErrorMessage(432)) : "object" === typeof reason && null !== reason && "function" === typeof reason.then ? Error(formatProdErrorMessage(530)) : reason;
			request.fatalError = reason;
			reason = request.abortableTasks;
			reason.forEach(function(task) {
				return abortTask(task, request);
			});
			finishAbort(request, reason);
		}
	}
	function addToReplayParent(node, parentKeyPath, trackedPostpones) {
		if (null === parentKeyPath) trackedPostpones.rootNodes.push(node);
		else {
			var workingMap = trackedPostpones.workingMap, parentNode = workingMap.get(parentKeyPath);
			void 0 === parentNode && (parentNode = [
				parentKeyPath[1],
				parentKeyPath[2],
				[],
				null
			], workingMap.set(parentKeyPath, parentNode), addToReplayParent(parentNode, parentKeyPath[0], trackedPostpones));
			parentNode[2].push(node);
		}
	}
	function onError() {}
	function renderToStringImpl(children, options, generateStaticMarkup, abortReason) {
		var didFatal = !1, fatalError = null, result = "", readyToStream = !1;
		options = createResumableState(options ? options.identifierPrefix : void 0);
		children = createRequest(children, options, createRenderState(options, generateStaticMarkup), createFormatContext(0, null, 0, null), Infinity, onError, void 0, void 0, function() {
			readyToStream = !0;
		}, void 0, void 0, void 0);
		children.flushScheduled = null !== children.destination;
		performWork(children);
		10 === children.status && (children.status = 11);
		null === children.trackedPostpones && safelyEmitEarlyPreloads(children, 0 === children.pendingRootTasks);
		abort(children, abortReason);
		startFlowing(children, {
			push: function(chunk) {
				null !== chunk && (result += chunk);
				return !0;
			},
			destroy: function(error) {
				didFatal = !0;
				fatalError = error;
			}
		});
		if (didFatal && fatalError !== abortReason) throw fatalError;
		if (!readyToStream) throw Error(formatProdErrorMessage(426));
		return result;
	}
	exports.renderToStaticMarkup = function(children, options) {
		return renderToStringImpl(children, options, !0, "The server used \"renderToStaticMarkup\" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to \"renderToReadableStream\" which supports Suspense on the server");
	};
	exports.renderToString = function(children, options) {
		return renderToStringImpl(children, options, !1, "The server used \"renderToString\" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to \"renderToReadableStream\" which supports Suspense on the server");
	};
	exports.version = "19.3.0";
}));
//#endregion
//#region node_modules/react-dom/cjs/react-dom-server.browser.production.js
/**
* @license React
* react-dom-server.browser.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_server_browser_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	var ReactDOM = require_react_dom();
	function formatProdErrorMessage(code) {
		var url = "https://react.dev/errors/" + code;
		if (1 < arguments.length) {
			url += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var i = 2; i < arguments.length; i++) url += "&args[]=" + encodeURIComponent(arguments[i]);
		}
		return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_PORTAL_TYPE = Symbol.for("react.portal");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
	var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
	var REACT_CONTEXT_TYPE = Symbol.for("react.context");
	var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
	var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
	var REACT_MEMO_TYPE = Symbol.for("react.memo");
	var REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var REACT_SCOPE_TYPE = Symbol.for("react.scope");
	var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
	var REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden");
	var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
	var REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition");
	var REACT_RECOVERABLE_TYPE = Symbol.for("react.recoverable");
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var REACT_OPTIMISTIC_KEY = Symbol.for("react.optimistic_key");
	var isArrayImpl = Array.isArray;
	function murmurhash3_32_gc(key, seed) {
		var remainder = key.length & 3;
		var bytes = key.length - remainder;
		var h1 = seed;
		for (seed = 0; seed < bytes;) {
			var k1 = key.charCodeAt(seed) & 255 | (key.charCodeAt(++seed) & 255) << 8 | (key.charCodeAt(++seed) & 255) << 16 | (key.charCodeAt(++seed) & 255) << 24;
			++seed;
			k1 = 3432918353 * (k1 & 65535) + ((3432918353 * (k1 >>> 16) & 65535) << 16) & 4294967295;
			k1 = k1 << 15 | k1 >>> 17;
			k1 = 461845907 * (k1 & 65535) + ((461845907 * (k1 >>> 16) & 65535) << 16) & 4294967295;
			h1 ^= k1;
			h1 = h1 << 13 | h1 >>> 19;
			h1 = 5 * (h1 & 65535) + ((5 * (h1 >>> 16) & 65535) << 16) & 4294967295;
			h1 = (h1 & 65535) + 27492 + (((h1 >>> 16) + 58964 & 65535) << 16);
		}
		k1 = 0;
		switch (remainder) {
			case 3: k1 ^= (key.charCodeAt(seed + 2) & 255) << 16;
			case 2: k1 ^= (key.charCodeAt(seed + 1) & 255) << 8;
			case 1: k1 ^= key.charCodeAt(seed) & 255, k1 = 3432918353 * (k1 & 65535) + ((3432918353 * (k1 >>> 16) & 65535) << 16) & 4294967295, k1 = k1 << 15 | k1 >>> 17, h1 ^= 461845907 * (k1 & 65535) + ((461845907 * (k1 >>> 16) & 65535) << 16) & 4294967295;
		}
		h1 ^= key.length;
		h1 ^= h1 >>> 16;
		h1 = 2246822507 * (h1 & 65535) + ((2246822507 * (h1 >>> 16) & 65535) << 16) & 4294967295;
		h1 ^= h1 >>> 13;
		h1 = 3266489909 * (h1 & 65535) + ((3266489909 * (h1 >>> 16) & 65535) << 16) & 4294967295;
		return (h1 ^ h1 >>> 16) >>> 0;
	}
	var channel = new MessageChannel();
	var taskQueue = [];
	channel.port1.onmessage = function() {
		var task = taskQueue.shift();
		task && task();
	};
	function scheduleWork(callback) {
		taskQueue.push(callback);
		channel.port2.postMessage(null);
	}
	function handleErrorInNextTick(error) {
		setTimeout(function() {
			throw error;
		});
	}
	var LocalPromise = Promise;
	var scheduleMicrotask = "function" === typeof queueMicrotask ? queueMicrotask : function(callback) {
		LocalPromise.resolve(null).then(callback).catch(handleErrorInNextTick);
	};
	var currentView = null;
	var writtenBytes = 0;
	function writeChunk(destination, chunk) {
		if (0 !== chunk.byteLength) if (2048 < chunk.byteLength) 0 < writtenBytes && (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)), currentView = /* @__PURE__ */ new Uint8Array(2048), writtenBytes = 0), destination.enqueue(chunk);
		else {
			var allowableBytes = currentView.length - writtenBytes;
			allowableBytes < chunk.byteLength && (0 === allowableBytes ? destination.enqueue(currentView) : (currentView.set(chunk.subarray(0, allowableBytes), writtenBytes), destination.enqueue(currentView), chunk = chunk.subarray(allowableBytes)), currentView = /* @__PURE__ */ new Uint8Array(2048), writtenBytes = 0);
			currentView.set(chunk, writtenBytes);
			writtenBytes += chunk.byteLength;
		}
	}
	function writeChunkAndReturn(destination, chunk) {
		writeChunk(destination, chunk);
		return !0;
	}
	function completeWriting(destination) {
		currentView && 0 < writtenBytes && (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)), currentView = null, writtenBytes = 0);
	}
	var textEncoder = new TextEncoder();
	function stringToChunk(content) {
		return textEncoder.encode(content);
	}
	function stringToPrecomputedChunk(content) {
		return textEncoder.encode(content);
	}
	function byteLengthOfChunk(chunk) {
		return chunk.byteLength;
	}
	function closeWithError(destination, error) {
		"function" === typeof destination.error ? destination.error(error) : destination.close();
	}
	var assign = Object.assign;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var VALID_ATTRIBUTE_NAME_REGEX = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
	var illegalAttributeNameCache = {};
	var validatedAttributeNameCache = {};
	function isAttributeNameSafe(attributeName) {
		if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) return !0;
		if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return !1;
		if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) return validatedAttributeNameCache[attributeName] = !0;
		illegalAttributeNameCache[attributeName] = !0;
		return !1;
	}
	var unitlessNumbers = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	var aliases = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["maskType", "mask-type"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]);
	var matchHtmlRegExp = /["'&<>]/;
	function escapeTextForBrowser(text) {
		if ("boolean" === typeof text || "number" === typeof text || "bigint" === typeof text) return "" + text;
		text = "" + text;
		var match = matchHtmlRegExp.exec(text);
		if (match) {
			var html = "", index, lastIndex = 0;
			for (index = match.index; index < text.length; index++) {
				switch (text.charCodeAt(index)) {
					case 34:
						match = "&quot;";
						break;
					case 38:
						match = "&amp;";
						break;
					case 39:
						match = "&#x27;";
						break;
					case 60:
						match = "&lt;";
						break;
					case 62:
						match = "&gt;";
						break;
					default: continue;
				}
				lastIndex !== index && (html += text.slice(lastIndex, index));
				lastIndex = index + 1;
				html += match;
			}
			text = lastIndex !== index ? html + text.slice(lastIndex, index) : html;
		}
		return text;
	}
	var uppercasePattern = /([A-Z])/g;
	var msPattern = /^ms-/;
	var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function sanitizeURL(url) {
		return isJavaScriptProtocol.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
	}
	var ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	var ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	var sharedNotPendingObject = {
		pending: !1,
		data: null,
		method: null,
		action: null
	};
	var previousDispatcher = ReactDOMSharedInternals.d;
	ReactDOMSharedInternals.d = {
		f: previousDispatcher.f,
		r: previousDispatcher.r,
		D: prefetchDNS,
		C: preconnect,
		L: preload,
		m: preloadModule,
		X: preinitScript,
		S: preinitStyle,
		M: preinitModuleScript
	};
	var PRELOAD_NO_CREDS = [];
	var currentlyFlushingRenderState = null;
	stringToPrecomputedChunk("\"></template>");
	var startInlineScript = stringToPrecomputedChunk("<script");
	var endInlineScript = stringToPrecomputedChunk("<\/script>");
	var startScriptSrc = stringToPrecomputedChunk("<script src=\"");
	var startModuleSrc = stringToPrecomputedChunk("<script type=\"module\" src=\"");
	var scriptNonce = stringToPrecomputedChunk(" nonce=\"");
	var scriptIntegirty = stringToPrecomputedChunk(" integrity=\"");
	var scriptCrossOrigin = stringToPrecomputedChunk(" crossorigin=\"");
	var endAsyncScript = stringToPrecomputedChunk(" async=\"\"><\/script>");
	var startInlineStyle = stringToPrecomputedChunk("<style");
	var scriptRegex = /(<\/|<)(s)(cript)/gi;
	function scriptReplacer(match, prefix, s, suffix) {
		return "" + prefix + ("s" === s ? "\\u0073" : "\\u0053") + suffix;
	}
	var importMapScriptStart = stringToPrecomputedChunk("<script type=\"importmap\">");
	var importMapScriptEnd = stringToPrecomputedChunk("<\/script>");
	function createRenderState(resumableState, nonce, externalRuntimeConfig, importMap, onHeaders, maxHeadersLength) {
		externalRuntimeConfig = "string" === typeof nonce ? nonce : nonce && nonce.script;
		var inlineScriptWithNonce = void 0 === externalRuntimeConfig ? startInlineScript : stringToPrecomputedChunk("<script nonce=\"" + escapeTextForBrowser(externalRuntimeConfig) + "\""), nonceStyle = "string" === typeof nonce ? void 0 : nonce && nonce.style, inlineStyleWithNonce = void 0 === nonceStyle ? startInlineStyle : stringToPrecomputedChunk("<style nonce=\"" + escapeTextForBrowser(nonceStyle) + "\""), idPrefix = resumableState.idPrefix, bootstrapChunks = [], bootstrapScriptContent = resumableState.bootstrapScriptContent, bootstrapScripts = resumableState.bootstrapScripts, bootstrapModules = resumableState.bootstrapModules;
		void 0 !== bootstrapScriptContent && (bootstrapChunks.push(inlineScriptWithNonce), pushCompletedShellIdAttribute(bootstrapChunks, resumableState), bootstrapChunks.push(endOfStartTag, stringToChunk(("" + bootstrapScriptContent).replace(scriptRegex, scriptReplacer)), endInlineScript));
		bootstrapScriptContent = [];
		void 0 !== importMap && (bootstrapScriptContent.push(void 0 === externalRuntimeConfig ? importMapScriptStart : stringToPrecomputedChunk("<script type=\"importmap\" nonce=\"" + escapeTextForBrowser(externalRuntimeConfig) + "\">")), bootstrapScriptContent.push(stringToChunk(("" + JSON.stringify(importMap)).replace(scriptRegex, scriptReplacer))), bootstrapScriptContent.push(importMapScriptEnd));
		importMap = onHeaders ? {
			preconnects: "",
			fontPreloads: "",
			highImagePreloads: "",
			remainingCapacity: 2 + ("number" === typeof maxHeadersLength ? maxHeadersLength : 2e3)
		} : null;
		onHeaders = {
			placeholderPrefix: stringToPrecomputedChunk(idPrefix + "P:"),
			segmentPrefix: stringToPrecomputedChunk(idPrefix + "S:"),
			boundaryPrefix: stringToPrecomputedChunk(idPrefix + "B:"),
			startInlineScript: inlineScriptWithNonce,
			startInlineStyle: inlineStyleWithNonce,
			preamble: createPreambleState(),
			externalRuntimeScript: null,
			bootstrapChunks,
			importMapChunks: bootstrapScriptContent,
			onHeaders,
			headers: importMap,
			resets: {
				font: {},
				dns: {},
				connect: {
					default: {},
					anonymous: {},
					credentials: {}
				},
				image: {},
				style: {}
			},
			charsetChunks: [],
			viewportChunks: [],
			hoistableChunks: [],
			preconnects: /* @__PURE__ */ new Set(),
			fontPreloads: /* @__PURE__ */ new Set(),
			highImagePreloads: /* @__PURE__ */ new Set(),
			styles: /* @__PURE__ */ new Map(),
			bootstrapScripts: /* @__PURE__ */ new Set(),
			scripts: /* @__PURE__ */ new Set(),
			bulkPreloads: /* @__PURE__ */ new Set(),
			preloads: {
				images: /* @__PURE__ */ new Map(),
				stylesheets: /* @__PURE__ */ new Map(),
				scripts: /* @__PURE__ */ new Map(),
				moduleScripts: /* @__PURE__ */ new Map()
			},
			nonce: {
				script: externalRuntimeConfig,
				style: nonceStyle
			},
			hoistableState: null,
			stylesToHoist: !1
		};
		if (void 0 !== bootstrapScripts) for (importMap = 0; importMap < bootstrapScripts.length; importMap++) idPrefix = bootstrapScripts[importMap], nonceStyle = inlineScriptWithNonce = void 0, inlineStyleWithNonce = {
			rel: "preload",
			as: "script",
			fetchPriority: "low",
			nonce
		}, "string" === typeof idPrefix ? inlineStyleWithNonce.href = maxHeadersLength = idPrefix : (inlineStyleWithNonce.href = maxHeadersLength = idPrefix.src, inlineStyleWithNonce.integrity = nonceStyle = "string" === typeof idPrefix.integrity ? idPrefix.integrity : void 0, inlineStyleWithNonce.crossOrigin = inlineScriptWithNonce = "string" === typeof idPrefix || null == idPrefix.crossOrigin ? void 0 : "use-credentials" === idPrefix.crossOrigin ? "use-credentials" : ""), idPrefix = resumableState, bootstrapScriptContent = maxHeadersLength, idPrefix.scriptResources[bootstrapScriptContent] = null, idPrefix.moduleScriptResources[bootstrapScriptContent] = null, idPrefix = [], pushLinkImpl(idPrefix, inlineStyleWithNonce), onHeaders.bootstrapScripts.add(idPrefix), bootstrapChunks.push(startScriptSrc, stringToChunk(escapeTextForBrowser(maxHeadersLength)), attributeEnd), externalRuntimeConfig && bootstrapChunks.push(scriptNonce, stringToChunk(escapeTextForBrowser(externalRuntimeConfig)), attributeEnd), "string" === typeof nonceStyle && bootstrapChunks.push(scriptIntegirty, stringToChunk(escapeTextForBrowser(nonceStyle)), attributeEnd), "string" === typeof inlineScriptWithNonce && bootstrapChunks.push(scriptCrossOrigin, stringToChunk(escapeTextForBrowser(inlineScriptWithNonce)), attributeEnd), pushCompletedShellIdAttribute(bootstrapChunks, resumableState), bootstrapChunks.push(endAsyncScript);
		if (void 0 !== bootstrapModules) for (nonce = 0; nonce < bootstrapModules.length; nonce++) nonceStyle = bootstrapModules[nonce], maxHeadersLength = importMap = void 0, inlineScriptWithNonce = {
			rel: "modulepreload",
			fetchPriority: "low",
			nonce: externalRuntimeConfig
		}, "string" === typeof nonceStyle ? inlineScriptWithNonce.href = bootstrapScripts = nonceStyle : (inlineScriptWithNonce.href = bootstrapScripts = nonceStyle.src, inlineScriptWithNonce.integrity = maxHeadersLength = "string" === typeof nonceStyle.integrity ? nonceStyle.integrity : void 0, inlineScriptWithNonce.crossOrigin = importMap = "string" === typeof nonceStyle || null == nonceStyle.crossOrigin ? void 0 : "use-credentials" === nonceStyle.crossOrigin ? "use-credentials" : ""), nonceStyle = resumableState, inlineStyleWithNonce = bootstrapScripts, nonceStyle.scriptResources[inlineStyleWithNonce] = null, nonceStyle.moduleScriptResources[inlineStyleWithNonce] = null, nonceStyle = [], pushLinkImpl(nonceStyle, inlineScriptWithNonce), onHeaders.bootstrapScripts.add(nonceStyle), bootstrapChunks.push(startModuleSrc, stringToChunk(escapeTextForBrowser(bootstrapScripts)), attributeEnd), externalRuntimeConfig && bootstrapChunks.push(scriptNonce, stringToChunk(escapeTextForBrowser(externalRuntimeConfig)), attributeEnd), "string" === typeof maxHeadersLength && bootstrapChunks.push(scriptIntegirty, stringToChunk(escapeTextForBrowser(maxHeadersLength)), attributeEnd), "string" === typeof importMap && bootstrapChunks.push(scriptCrossOrigin, stringToChunk(escapeTextForBrowser(importMap)), attributeEnd), pushCompletedShellIdAttribute(bootstrapChunks, resumableState), bootstrapChunks.push(endAsyncScript);
		return onHeaders;
	}
	function createResumableState(identifierPrefix, externalRuntimeConfig, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
		return {
			idPrefix: void 0 === identifierPrefix ? "" : identifierPrefix,
			nextFormID: 0,
			streamingFormat: 0,
			bootstrapScriptContent,
			bootstrapScripts,
			bootstrapModules,
			instructions: 0,
			hasBody: !1,
			hasHtml: !1,
			unknownResources: {},
			dnsResources: {},
			connectResources: {
				default: {},
				anonymous: {},
				credentials: {}
			},
			imageResources: {},
			styleResources: {},
			scriptResources: {},
			moduleUnknownResources: {},
			moduleScriptResources: {}
		};
	}
	function createPreambleState() {
		return {
			htmlChunks: null,
			headChunks: null,
			bodyChunks: null
		};
	}
	function createFormatContext(insertionMode, selectedValue, tagScope, viewTransition) {
		return {
			insertionMode,
			selectedValue,
			tagScope,
			viewTransition
		};
	}
	function createRootFormatContext(namespaceURI) {
		return createFormatContext("http://www.w3.org/2000/svg" === namespaceURI ? 4 : "http://www.w3.org/1998/Math/MathML" === namespaceURI ? 5 : 0, null, 0, null);
	}
	function getChildFormatContext(parentContext, type, props) {
		var subtreeScope = parentContext.tagScope & -25;
		switch (type) {
			case "noscript": return createFormatContext(2, null, subtreeScope | 1, null);
			case "select": return createFormatContext(2, null != props.value ? props.value : props.defaultValue, subtreeScope, null);
			case "svg": return createFormatContext(4, null, subtreeScope, null);
			case "picture": return createFormatContext(2, null, subtreeScope | 2, null);
			case "math": return createFormatContext(5, null, subtreeScope, null);
			case "foreignObject": return createFormatContext(2, null, subtreeScope, null);
			case "table": return createFormatContext(6, null, subtreeScope, null);
			case "thead":
			case "tbody":
			case "tfoot": return createFormatContext(7, null, subtreeScope, null);
			case "colgroup": return createFormatContext(9, null, subtreeScope, null);
			case "tr": return createFormatContext(8, null, subtreeScope, null);
			case "head":
				if (2 > parentContext.insertionMode) return createFormatContext(3, null, subtreeScope, null);
				break;
			case "html": if (0 === parentContext.insertionMode) return createFormatContext(1, null, subtreeScope, null);
		}
		return 6 <= parentContext.insertionMode || 2 > parentContext.insertionMode ? createFormatContext(2, null, subtreeScope, null) : null !== parentContext.viewTransition || parentContext.tagScope !== subtreeScope ? createFormatContext(parentContext.insertionMode, parentContext.selectedValue, subtreeScope, null) : parentContext;
	}
	function getSuspenseViewTransition(parentViewTransition) {
		return null === parentViewTransition ? null : {
			update: parentViewTransition.update,
			enter: "none",
			exit: "none",
			share: parentViewTransition.update,
			parentEnter: "none",
			parentExit: "none",
			name: parentViewTransition.autoName,
			autoName: parentViewTransition.autoName,
			nameIdx: 0
		};
	}
	function getSuspenseFallbackFormatContext(resumableState, parentContext) {
		parentContext.tagScope & 32 && (resumableState.instructions |= 128);
		return createFormatContext(parentContext.insertionMode, parentContext.selectedValue, parentContext.tagScope | 12, getSuspenseViewTransition(parentContext.viewTransition));
	}
	function getSuspenseContentFormatContext(resumableState, parentContext) {
		resumableState = getSuspenseViewTransition(parentContext.viewTransition);
		var subtreeScope = parentContext.tagScope | 16;
		null !== resumableState && "none" !== resumableState.share && (subtreeScope |= 64);
		return createFormatContext(parentContext.insertionMode, parentContext.selectedValue, subtreeScope, resumableState);
	}
	function makeId(resumableState, treeId, localId) {
		resumableState = "_" + resumableState.idPrefix + "R_" + treeId;
		0 < localId && (resumableState += "H" + localId.toString(32));
		return resumableState + "_";
	}
	var textSeparator = stringToPrecomputedChunk("<!-- -->");
	function pushTextInstance(target, text, renderState, textEmbedded) {
		if ("" === text) return textEmbedded;
		textEmbedded && target.push(textSeparator);
		target.push(stringToChunk(escapeTextForBrowser(text)));
		return !0;
	}
	function pushViewTransitionAttributes(target, formatContext) {
		formatContext = formatContext.viewTransition;
		null !== formatContext && ("auto" !== formatContext.name && (pushStringAttribute(target, "vt-name", 0 === formatContext.nameIdx ? formatContext.name : formatContext.name + "_" + formatContext.nameIdx), formatContext.nameIdx++), pushStringAttribute(target, "vt-update", formatContext.update), "none" !== formatContext.enter && pushStringAttribute(target, "vt-enter", formatContext.enter), "none" !== formatContext.exit && pushStringAttribute(target, "vt-exit", formatContext.exit), "none" !== formatContext.share && pushStringAttribute(target, "vt-share", formatContext.share));
	}
	var styleNameCache = /* @__PURE__ */ new Map();
	var styleAttributeStart = stringToPrecomputedChunk(" style=\"");
	var styleAssign = stringToPrecomputedChunk(":");
	var styleSeparator = stringToPrecomputedChunk(";");
	function pushStyleAttribute(target, style) {
		if ("object" !== typeof style) throw Error(formatProdErrorMessage(62));
		var isFirst = !0, styleName;
		for (styleName in style) if (hasOwnProperty.call(style, styleName)) {
			var styleValue = style[styleName];
			if (null != styleValue && "boolean" !== typeof styleValue && "" !== styleValue) {
				if (0 === styleName.indexOf("--")) {
					var nameChunk = stringToChunk(escapeTextForBrowser(styleName));
					styleValue = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
				} else nameChunk = styleNameCache.get(styleName), void 0 === nameChunk && (nameChunk = stringToPrecomputedChunk(escapeTextForBrowser(styleName.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-"))), styleNameCache.set(styleName, nameChunk)), styleValue = "number" === typeof styleValue ? 0 === styleValue || unitlessNumbers.has(styleName) ? stringToChunk("" + styleValue) : stringToChunk(styleValue + "px") : stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
				isFirst ? (isFirst = !1, target.push(styleAttributeStart, nameChunk, styleAssign, styleValue)) : target.push(styleSeparator, nameChunk, styleAssign, styleValue);
			}
		}
		isFirst || target.push(attributeEnd);
	}
	var attributeSeparator = stringToPrecomputedChunk(" ");
	var attributeAssign = stringToPrecomputedChunk("=\"");
	var attributeEnd = stringToPrecomputedChunk("\"");
	var attributeEmptyString = stringToPrecomputedChunk("=\"\"");
	function pushBooleanAttribute(target, name, value) {
		value && "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, stringToChunk(name), attributeEmptyString);
	}
	function pushStringAttribute(target, name, value) {
		"function" !== typeof value && "symbol" !== typeof value && "boolean" !== typeof value && target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
	}
	var actionJavaScriptURL = stringToPrecomputedChunk(escapeTextForBrowser("javascript:throw new Error('React form unexpectedly submitted.')"));
	var startHiddenInputChunk = stringToPrecomputedChunk("<input type=\"hidden\"");
	function pushAdditionalFormField(value, key) {
		this.push(startHiddenInputChunk);
		validateAdditionalFormField(value);
		pushStringAttribute(this, "name", key);
		pushStringAttribute(this, "value", value);
		this.push(endOfStartTagSelfClosing);
	}
	function validateAdditionalFormField(value) {
		if ("string" !== typeof value) throw Error(formatProdErrorMessage(480));
	}
	function getCustomFormFields(resumableState, formAction) {
		if ("function" === typeof formAction.$$FORM_ACTION) {
			var id = resumableState.nextFormID++;
			resumableState = resumableState.idPrefix + id;
			try {
				var customFields = formAction.$$FORM_ACTION(resumableState);
				if (customFields) customFields.data?.forEach(validateAdditionalFormField);
				return customFields;
			} catch (x) {
				if ("object" === typeof x && null !== x && "function" === typeof x.then) throw x;
			}
		}
		return null;
	}
	function pushFormActionAttribute(target, resumableState, renderState, formAction, formEncType, formMethod, formTarget, name) {
		var formData = null;
		if ("function" === typeof formAction) {
			var customFields = getCustomFormFields(resumableState, formAction);
			null !== customFields ? (name = customFields.name, formAction = customFields.action || "", formEncType = customFields.encType, formMethod = customFields.method, formTarget = customFields.target, formData = customFields.data) : (target.push(attributeSeparator, stringToChunk("formAction"), attributeAssign, actionJavaScriptURL, attributeEnd), formTarget = formMethod = formEncType = formAction = name = null, injectFormReplayingRuntime(resumableState, renderState));
		}
		null != name && pushAttribute(target, "name", name);
		null != formAction && pushAttribute(target, "formAction", formAction);
		null != formEncType && pushAttribute(target, "formEncType", formEncType);
		null != formMethod && pushAttribute(target, "formMethod", formMethod);
		null != formTarget && pushAttribute(target, "formTarget", formTarget);
		return formData;
	}
	function pushAttribute(target, name, value) {
		switch (name) {
			case "className":
				pushStringAttribute(target, "class", value);
				break;
			case "tabIndex":
				pushStringAttribute(target, "tabindex", value);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				pushStringAttribute(target, name, value);
				break;
			case "style":
				pushStyleAttribute(target, value);
				break;
			case "src":
			case "href": if ("" === value) break;
			case "action":
			case "formAction":
				if (null == value || "function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) break;
				value = sanitizeURL("" + value);
				target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
				break;
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "ref": break;
			case "autoFocus":
			case "multiple":
			case "muted":
				pushBooleanAttribute(target, name.toLowerCase(), value);
				break;
			case "xlinkHref":
				if ("function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) break;
				value = sanitizeURL("" + value);
				target.push(attributeSeparator, stringToChunk("xlink:href"), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				"function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "credentialless":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				value && "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, stringToChunk(name), attributeEmptyString);
				break;
			case "capture":
			case "download":
				!0 === value ? target.push(attributeSeparator, stringToChunk(name), attributeEmptyString) : !1 !== value && "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				"function" !== typeof value && "symbol" !== typeof value && !isNaN(value) && 1 <= value && target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
				break;
			case "rowSpan":
			case "start":
				"function" === typeof value || "symbol" === typeof value || isNaN(value) || target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
				break;
			case "xlinkActuate":
				pushStringAttribute(target, "xlink:actuate", value);
				break;
			case "xlinkArcrole":
				pushStringAttribute(target, "xlink:arcrole", value);
				break;
			case "xlinkRole":
				pushStringAttribute(target, "xlink:role", value);
				break;
			case "xlinkShow":
				pushStringAttribute(target, "xlink:show", value);
				break;
			case "xlinkTitle":
				pushStringAttribute(target, "xlink:title", value);
				break;
			case "xlinkType":
				pushStringAttribute(target, "xlink:type", value);
				break;
			case "xmlBase":
				pushStringAttribute(target, "xml:base", value);
				break;
			case "xmlLang":
				pushStringAttribute(target, "xml:lang", value);
				break;
			case "xmlSpace":
				pushStringAttribute(target, "xml:space", value);
				break;
			default: if (!(2 < name.length) || "o" !== name[0] && "O" !== name[0] || "n" !== name[1] && "N" !== name[1]) {
				if (name = aliases.get(name) || name, isAttributeNameSafe(name)) {
					switch (typeof value) {
						case "function":
						case "symbol": return;
						case "boolean":
							var prefix$8 = name.toLowerCase().slice(0, 5);
							if ("data-" !== prefix$8 && "aria-" !== prefix$8) return;
					}
					target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
				}
			}
		}
	}
	var endOfStartTag = stringToPrecomputedChunk(">");
	var endOfStartTagSelfClosing = stringToPrecomputedChunk("/>");
	function pushInnerHTML(target, innerHTML, children) {
		if (null != innerHTML) {
			if (null != children) throw Error(formatProdErrorMessage(60));
			if ("object" !== typeof innerHTML || !("__html" in innerHTML)) throw Error(formatProdErrorMessage(61));
			innerHTML = innerHTML.__html;
			null !== innerHTML && void 0 !== innerHTML && target.push(stringToChunk("" + innerHTML));
		}
	}
	function flattenOptionChildren(children) {
		var content = "";
		React.Children.forEach(children, function(child) {
			null != child && (content += child);
		});
		return content;
	}
	var selectedMarkerAttribute = stringToPrecomputedChunk(" selected=\"\"");
	var formReplayingRuntimeScript = stringToPrecomputedChunk("addEventListener(\"submit\",function(a){if(!a.defaultPrevented){var b=a.target,d=a.submitter,c=b.action,e=d;if(d){var f=d.getAttribute(\"formAction\");null!=f&&(c=f,e=null)}\"javascript:throw new Error('React form unexpectedly submitted.')\"===c&&(a.preventDefault(),a=new FormData(b,e),c=b.ownerDocument||b,(c.$$reactFormReplay=c.$$reactFormReplay||[]).push(b,d,a))}});");
	function injectFormReplayingRuntime(resumableState, renderState) {
		if (0 === (resumableState.instructions & 16)) {
			resumableState.instructions |= 16;
			var preamble = renderState.preamble, bootstrapChunks = renderState.bootstrapChunks;
			(preamble.htmlChunks || preamble.headChunks) && 0 === bootstrapChunks.length ? (bootstrapChunks.push(renderState.startInlineScript), pushCompletedShellIdAttribute(bootstrapChunks, resumableState), bootstrapChunks.push(endOfStartTag, formReplayingRuntimeScript, endInlineScript)) : bootstrapChunks.unshift(renderState.startInlineScript, endOfStartTag, formReplayingRuntimeScript, endInlineScript);
		}
	}
	var formStateMarkerIsMatching = stringToPrecomputedChunk("<!--F!-->");
	var formStateMarkerIsNotMatching = stringToPrecomputedChunk("<!--F-->");
	function pushLinkImpl(target, props) {
		target.push(startChunkForTag("link"));
		for (var propKey in props) if (hasOwnProperty.call(props, propKey)) {
			var propValue = props[propKey];
			if (null != propValue) switch (propKey) {
				case "children":
				case "dangerouslySetInnerHTML": throw Error(formatProdErrorMessage(399, "link"));
				default: pushAttribute(target, propKey, propValue);
			}
		}
		target.push(endOfStartTagSelfClosing);
		return null;
	}
	var styleRegex = /(<\/|<)(s)(tyle)/gi;
	function styleReplacer(match, prefix, s, suffix) {
		return "" + prefix + ("s" === s ? "\\73 " : "\\53 ") + suffix;
	}
	function pushSelfClosing(target, props, tag, formatContext) {
		target.push(startChunkForTag(tag));
		for (var propKey in props) if (hasOwnProperty.call(props, propKey)) {
			var propValue = props[propKey];
			if (null != propValue) switch (propKey) {
				case "children":
				case "dangerouslySetInnerHTML": throw Error(formatProdErrorMessage(399, tag));
				default: pushAttribute(target, propKey, propValue);
			}
		}
		pushViewTransitionAttributes(target, formatContext);
		target.push(endOfStartTagSelfClosing);
		return null;
	}
	function pushTitleImpl(target, props) {
		target.push(startChunkForTag("title"));
		var children = null, innerHTML = null, propKey;
		for (propKey in props) if (hasOwnProperty.call(props, propKey)) {
			var propValue = props[propKey];
			if (null != propValue) switch (propKey) {
				case "children":
					children = propValue;
					break;
				case "dangerouslySetInnerHTML":
					innerHTML = propValue;
					break;
				default: pushAttribute(target, propKey, propValue);
			}
		}
		target.push(endOfStartTag);
		props = Array.isArray(children) ? 2 > children.length ? children[0] : null : children;
		"function" !== typeof props && "symbol" !== typeof props && null !== props && void 0 !== props && target.push(stringToChunk(escapeTextForBrowser("" + props)));
		pushInnerHTML(target, innerHTML, children);
		target.push(endChunkForTag("title"));
		return null;
	}
	var headPreambleContributionChunk = stringToPrecomputedChunk("<!--head-->");
	var bodyPreambleContributionChunk = stringToPrecomputedChunk("<!--body-->");
	var htmlPreambleContributionChunk = stringToPrecomputedChunk("<!--html-->");
	function pushScriptImpl(target, props) {
		target.push(startChunkForTag("script"));
		var children = null, innerHTML = null, propKey;
		for (propKey in props) if (hasOwnProperty.call(props, propKey)) {
			var propValue = props[propKey];
			if (null != propValue) switch (propKey) {
				case "children":
					children = propValue;
					break;
				case "dangerouslySetInnerHTML":
					innerHTML = propValue;
					break;
				default: pushAttribute(target, propKey, propValue);
			}
		}
		target.push(endOfStartTag);
		pushInnerHTML(target, innerHTML, children);
		"string" === typeof children && target.push(stringToChunk(("" + children).replace(scriptRegex, scriptReplacer)));
		target.push(endChunkForTag("script"));
		return null;
	}
	function pushStartSingletonElement(target, props, tag, formatContext) {
		target.push(startChunkForTag(tag));
		var innerHTML = tag = null, propKey;
		for (propKey in props) if (hasOwnProperty.call(props, propKey)) {
			var propValue = props[propKey];
			if (null != propValue) switch (propKey) {
				case "children":
					tag = propValue;
					break;
				case "dangerouslySetInnerHTML":
					innerHTML = propValue;
					break;
				default: pushAttribute(target, propKey, propValue);
			}
		}
		pushViewTransitionAttributes(target, formatContext);
		target.push(endOfStartTag);
		pushInnerHTML(target, innerHTML, tag);
		return tag;
	}
	function pushStartGenericElement(target, props, tag, formatContext) {
		target.push(startChunkForTag(tag));
		var innerHTML = tag = null, propKey;
		for (propKey in props) if (hasOwnProperty.call(props, propKey)) {
			var propValue = props[propKey];
			if (null != propValue) switch (propKey) {
				case "children":
					tag = propValue;
					break;
				case "dangerouslySetInnerHTML":
					innerHTML = propValue;
					break;
				default: pushAttribute(target, propKey, propValue);
			}
		}
		pushViewTransitionAttributes(target, formatContext);
		target.push(endOfStartTag);
		pushInnerHTML(target, innerHTML, tag);
		return "string" === typeof tag ? (target.push(stringToChunk(escapeTextForBrowser(tag))), null) : tag;
	}
	var leadingNewline = stringToPrecomputedChunk("\n");
	var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
	var validatedTagCache = /* @__PURE__ */ new Map();
	function startChunkForTag(tag) {
		var tagStartChunk = validatedTagCache.get(tag);
		if (void 0 === tagStartChunk) {
			if (!VALID_TAG_REGEX.test(tag)) throw Error(formatProdErrorMessage(65, tag));
			tagStartChunk = stringToPrecomputedChunk("<" + tag);
			validatedTagCache.set(tag, tagStartChunk);
		}
		return tagStartChunk;
	}
	var doctypeChunk = stringToPrecomputedChunk("<!DOCTYPE html>");
	function pushStartInstance(target$jscomp$0, type, props, resumableState, renderState, preambleState, hoistableState, formatContext, textEmbedded) {
		switch (type) {
			case "div":
			case "span":
			case "svg":
			case "path": break;
			case "a":
				target$jscomp$0.push(startChunkForTag("a"));
				var children = null, innerHTML = null, propKey;
				for (propKey in props) if (hasOwnProperty.call(props, propKey)) {
					var propValue = props[propKey];
					if (null != propValue) switch (propKey) {
						case "children":
							children = propValue;
							break;
						case "dangerouslySetInnerHTML":
							innerHTML = propValue;
							break;
						case "href":
							"" === propValue ? pushStringAttribute(target$jscomp$0, "href", "") : pushAttribute(target$jscomp$0, propKey, propValue);
							break;
						default: pushAttribute(target$jscomp$0, propKey, propValue);
					}
				}
				pushViewTransitionAttributes(target$jscomp$0, formatContext);
				target$jscomp$0.push(endOfStartTag);
				pushInnerHTML(target$jscomp$0, innerHTML, children);
				if ("string" === typeof children) {
					target$jscomp$0.push(stringToChunk(escapeTextForBrowser(children)));
					var JSCompiler_inline_result = null;
				} else JSCompiler_inline_result = children;
				return JSCompiler_inline_result;
			case "g":
			case "p":
			case "li": break;
			case "select":
				target$jscomp$0.push(startChunkForTag("select"));
				var children$jscomp$0 = null, innerHTML$jscomp$0 = null, propKey$jscomp$0;
				for (propKey$jscomp$0 in props) if (hasOwnProperty.call(props, propKey$jscomp$0)) {
					var propValue$jscomp$0 = props[propKey$jscomp$0];
					if (null != propValue$jscomp$0) switch (propKey$jscomp$0) {
						case "children":
							children$jscomp$0 = propValue$jscomp$0;
							break;
						case "dangerouslySetInnerHTML":
							innerHTML$jscomp$0 = propValue$jscomp$0;
							break;
						case "defaultValue":
						case "value": break;
						default: pushAttribute(target$jscomp$0, propKey$jscomp$0, propValue$jscomp$0);
					}
				}
				pushViewTransitionAttributes(target$jscomp$0, formatContext);
				target$jscomp$0.push(endOfStartTag);
				pushInnerHTML(target$jscomp$0, innerHTML$jscomp$0, children$jscomp$0);
				return children$jscomp$0;
			case "option":
				var selectedValue = formatContext.selectedValue;
				target$jscomp$0.push(startChunkForTag("option"));
				var children$jscomp$1 = null, value = null, selected = null, innerHTML$jscomp$1 = null, propKey$jscomp$1;
				for (propKey$jscomp$1 in props) if (hasOwnProperty.call(props, propKey$jscomp$1)) {
					var propValue$jscomp$1 = props[propKey$jscomp$1];
					if (null != propValue$jscomp$1) switch (propKey$jscomp$1) {
						case "children":
							children$jscomp$1 = propValue$jscomp$1;
							break;
						case "selected":
							selected = propValue$jscomp$1;
							break;
						case "dangerouslySetInnerHTML":
							innerHTML$jscomp$1 = propValue$jscomp$1;
							break;
						case "value": value = propValue$jscomp$1;
						default: pushAttribute(target$jscomp$0, propKey$jscomp$1, propValue$jscomp$1);
					}
				}
				if (null != selectedValue) {
					var stringValue = null !== value ? "" + value : flattenOptionChildren(children$jscomp$1);
					if (isArrayImpl(selectedValue)) {
						for (var i = 0; i < selectedValue.length; i++) if ("" + selectedValue[i] === stringValue) {
							target$jscomp$0.push(selectedMarkerAttribute);
							break;
						}
					} else "" + selectedValue === stringValue && target$jscomp$0.push(selectedMarkerAttribute);
				} else selected && target$jscomp$0.push(selectedMarkerAttribute);
				target$jscomp$0.push(endOfStartTag);
				pushInnerHTML(target$jscomp$0, innerHTML$jscomp$1, children$jscomp$1);
				return children$jscomp$1;
			case "textarea":
				target$jscomp$0.push(startChunkForTag("textarea"));
				var value$jscomp$0 = null, defaultValue = null, children$jscomp$2 = null, propKey$jscomp$2;
				for (propKey$jscomp$2 in props) if (hasOwnProperty.call(props, propKey$jscomp$2)) {
					var propValue$jscomp$2 = props[propKey$jscomp$2];
					if (null != propValue$jscomp$2) switch (propKey$jscomp$2) {
						case "children":
							children$jscomp$2 = propValue$jscomp$2;
							break;
						case "value":
							value$jscomp$0 = propValue$jscomp$2;
							break;
						case "defaultValue":
							defaultValue = propValue$jscomp$2;
							break;
						case "dangerouslySetInnerHTML": throw Error(formatProdErrorMessage(91));
						default: pushAttribute(target$jscomp$0, propKey$jscomp$2, propValue$jscomp$2);
					}
				}
				null === value$jscomp$0 && null !== defaultValue && (value$jscomp$0 = defaultValue);
				pushViewTransitionAttributes(target$jscomp$0, formatContext);
				target$jscomp$0.push(endOfStartTag);
				if (null != children$jscomp$2) {
					if (null != value$jscomp$0) throw Error(formatProdErrorMessage(92));
					if (isArrayImpl(children$jscomp$2)) {
						if (1 < children$jscomp$2.length) throw Error(formatProdErrorMessage(93));
						value$jscomp$0 = "" + children$jscomp$2[0];
					}
					value$jscomp$0 = "" + children$jscomp$2;
				}
				"string" === typeof value$jscomp$0 && "\n" === value$jscomp$0[0] && target$jscomp$0.push(leadingNewline);
				null !== value$jscomp$0 && target$jscomp$0.push(stringToChunk(escapeTextForBrowser("" + value$jscomp$0)));
				return null;
			case "input":
				target$jscomp$0.push(startChunkForTag("input"));
				var name = null, formAction = null, formEncType = null, formMethod = null, formTarget = null, value$jscomp$1 = null, defaultValue$jscomp$0 = null, checked = null, defaultChecked = null, propKey$jscomp$3;
				for (propKey$jscomp$3 in props) if (hasOwnProperty.call(props, propKey$jscomp$3)) {
					var propValue$jscomp$3 = props[propKey$jscomp$3];
					if (null != propValue$jscomp$3) switch (propKey$jscomp$3) {
						case "children":
						case "dangerouslySetInnerHTML": throw Error(formatProdErrorMessage(399, "input"));
						case "name":
							name = propValue$jscomp$3;
							break;
						case "formAction":
							formAction = propValue$jscomp$3;
							break;
						case "formEncType":
							formEncType = propValue$jscomp$3;
							break;
						case "formMethod":
							formMethod = propValue$jscomp$3;
							break;
						case "formTarget":
							formTarget = propValue$jscomp$3;
							break;
						case "defaultChecked":
							defaultChecked = propValue$jscomp$3;
							break;
						case "defaultValue":
							defaultValue$jscomp$0 = propValue$jscomp$3;
							break;
						case "checked":
							checked = propValue$jscomp$3;
							break;
						case "value":
							value$jscomp$1 = propValue$jscomp$3;
							break;
						default: pushAttribute(target$jscomp$0, propKey$jscomp$3, propValue$jscomp$3);
					}
				}
				var formData = pushFormActionAttribute(target$jscomp$0, resumableState, renderState, formAction, formEncType, formMethod, formTarget, name);
				null !== checked ? pushBooleanAttribute(target$jscomp$0, "checked", checked) : null !== defaultChecked && pushBooleanAttribute(target$jscomp$0, "checked", defaultChecked);
				null !== value$jscomp$1 ? pushAttribute(target$jscomp$0, "value", value$jscomp$1) : null !== defaultValue$jscomp$0 && pushAttribute(target$jscomp$0, "value", defaultValue$jscomp$0);
				pushViewTransitionAttributes(target$jscomp$0, formatContext);
				target$jscomp$0.push(endOfStartTagSelfClosing);
				formData?.forEach(pushAdditionalFormField, target$jscomp$0);
				return null;
			case "button":
				target$jscomp$0.push(startChunkForTag("button"));
				var children$jscomp$3 = null, innerHTML$jscomp$2 = null, name$jscomp$0 = null, formAction$jscomp$0 = null, formEncType$jscomp$0 = null, formMethod$jscomp$0 = null, formTarget$jscomp$0 = null, propKey$jscomp$4;
				for (propKey$jscomp$4 in props) if (hasOwnProperty.call(props, propKey$jscomp$4)) {
					var propValue$jscomp$4 = props[propKey$jscomp$4];
					if (null != propValue$jscomp$4) switch (propKey$jscomp$4) {
						case "children":
							children$jscomp$3 = propValue$jscomp$4;
							break;
						case "dangerouslySetInnerHTML":
							innerHTML$jscomp$2 = propValue$jscomp$4;
							break;
						case "name":
							name$jscomp$0 = propValue$jscomp$4;
							break;
						case "formAction":
							formAction$jscomp$0 = propValue$jscomp$4;
							break;
						case "formEncType":
							formEncType$jscomp$0 = propValue$jscomp$4;
							break;
						case "formMethod":
							formMethod$jscomp$0 = propValue$jscomp$4;
							break;
						case "formTarget":
							formTarget$jscomp$0 = propValue$jscomp$4;
							break;
						default: pushAttribute(target$jscomp$0, propKey$jscomp$4, propValue$jscomp$4);
					}
				}
				var formData$jscomp$0 = pushFormActionAttribute(target$jscomp$0, resumableState, renderState, formAction$jscomp$0, formEncType$jscomp$0, formMethod$jscomp$0, formTarget$jscomp$0, name$jscomp$0);
				pushViewTransitionAttributes(target$jscomp$0, formatContext);
				target$jscomp$0.push(endOfStartTag);
				formData$jscomp$0?.forEach(pushAdditionalFormField, target$jscomp$0);
				pushInnerHTML(target$jscomp$0, innerHTML$jscomp$2, children$jscomp$3);
				if ("string" === typeof children$jscomp$3) {
					target$jscomp$0.push(stringToChunk(escapeTextForBrowser(children$jscomp$3)));
					var JSCompiler_inline_result$jscomp$0 = null;
				} else JSCompiler_inline_result$jscomp$0 = children$jscomp$3;
				return JSCompiler_inline_result$jscomp$0;
			case "form":
				target$jscomp$0.push(startChunkForTag("form"));
				var children$jscomp$4 = null, innerHTML$jscomp$3 = null, formAction$jscomp$1 = null, formEncType$jscomp$1 = null, formMethod$jscomp$1 = null, formTarget$jscomp$1 = null, propKey$jscomp$5;
				for (propKey$jscomp$5 in props) if (hasOwnProperty.call(props, propKey$jscomp$5)) {
					var propValue$jscomp$5 = props[propKey$jscomp$5];
					if (null != propValue$jscomp$5) switch (propKey$jscomp$5) {
						case "children":
							children$jscomp$4 = propValue$jscomp$5;
							break;
						case "dangerouslySetInnerHTML":
							innerHTML$jscomp$3 = propValue$jscomp$5;
							break;
						case "action":
							formAction$jscomp$1 = propValue$jscomp$5;
							break;
						case "encType":
							formEncType$jscomp$1 = propValue$jscomp$5;
							break;
						case "method":
							formMethod$jscomp$1 = propValue$jscomp$5;
							break;
						case "target":
							formTarget$jscomp$1 = propValue$jscomp$5;
							break;
						default: pushAttribute(target$jscomp$0, propKey$jscomp$5, propValue$jscomp$5);
					}
				}
				var formData$jscomp$1 = null, formActionName = null;
				if ("function" === typeof formAction$jscomp$1) {
					var customFields = getCustomFormFields(resumableState, formAction$jscomp$1);
					null !== customFields ? (formAction$jscomp$1 = customFields.action || "", formEncType$jscomp$1 = customFields.encType, formMethod$jscomp$1 = customFields.method, formTarget$jscomp$1 = customFields.target, formData$jscomp$1 = customFields.data, formActionName = customFields.name) : (target$jscomp$0.push(attributeSeparator, stringToChunk("action"), attributeAssign, actionJavaScriptURL, attributeEnd), formTarget$jscomp$1 = formMethod$jscomp$1 = formEncType$jscomp$1 = formAction$jscomp$1 = null, injectFormReplayingRuntime(resumableState, renderState));
				}
				null != formAction$jscomp$1 && pushAttribute(target$jscomp$0, "action", formAction$jscomp$1);
				null != formEncType$jscomp$1 && pushAttribute(target$jscomp$0, "encType", formEncType$jscomp$1);
				null != formMethod$jscomp$1 && pushAttribute(target$jscomp$0, "method", formMethod$jscomp$1);
				null != formTarget$jscomp$1 && pushAttribute(target$jscomp$0, "target", formTarget$jscomp$1);
				pushViewTransitionAttributes(target$jscomp$0, formatContext);
				target$jscomp$0.push(endOfStartTag);
				null !== formActionName && (target$jscomp$0.push(startHiddenInputChunk), pushStringAttribute(target$jscomp$0, "name", formActionName), target$jscomp$0.push(endOfStartTagSelfClosing), formData$jscomp$1?.forEach(pushAdditionalFormField, target$jscomp$0));
				pushInnerHTML(target$jscomp$0, innerHTML$jscomp$3, children$jscomp$4);
				if ("string" === typeof children$jscomp$4) {
					target$jscomp$0.push(stringToChunk(escapeTextForBrowser(children$jscomp$4)));
					var JSCompiler_inline_result$jscomp$1 = null;
				} else JSCompiler_inline_result$jscomp$1 = children$jscomp$4;
				return JSCompiler_inline_result$jscomp$1;
			case "menuitem":
				target$jscomp$0.push(startChunkForTag("menuitem"));
				for (var propKey$jscomp$6 in props) if (hasOwnProperty.call(props, propKey$jscomp$6)) {
					var propValue$jscomp$6 = props[propKey$jscomp$6];
					if (null != propValue$jscomp$6) switch (propKey$jscomp$6) {
						case "children":
						case "dangerouslySetInnerHTML": throw Error(formatProdErrorMessage(400));
						default: pushAttribute(target$jscomp$0, propKey$jscomp$6, propValue$jscomp$6);
					}
				}
				pushViewTransitionAttributes(target$jscomp$0, formatContext);
				target$jscomp$0.push(endOfStartTag);
				return null;
			case "object":
				target$jscomp$0.push(startChunkForTag("object"));
				var children$jscomp$5 = null, innerHTML$jscomp$4 = null, propKey$jscomp$7;
				for (propKey$jscomp$7 in props) if (hasOwnProperty.call(props, propKey$jscomp$7)) {
					var propValue$jscomp$7 = props[propKey$jscomp$7];
					if (null != propValue$jscomp$7) switch (propKey$jscomp$7) {
						case "children":
							children$jscomp$5 = propValue$jscomp$7;
							break;
						case "dangerouslySetInnerHTML":
							innerHTML$jscomp$4 = propValue$jscomp$7;
							break;
						case "data":
							var sanitizedValue = sanitizeURL("" + propValue$jscomp$7);
							if ("" === sanitizedValue) break;
							target$jscomp$0.push(attributeSeparator, stringToChunk("data"), attributeAssign, stringToChunk(escapeTextForBrowser(sanitizedValue)), attributeEnd);
							break;
						default: pushAttribute(target$jscomp$0, propKey$jscomp$7, propValue$jscomp$7);
					}
				}
				pushViewTransitionAttributes(target$jscomp$0, formatContext);
				target$jscomp$0.push(endOfStartTag);
				pushInnerHTML(target$jscomp$0, innerHTML$jscomp$4, children$jscomp$5);
				if ("string" === typeof children$jscomp$5) {
					target$jscomp$0.push(stringToChunk(escapeTextForBrowser(children$jscomp$5)));
					var JSCompiler_inline_result$jscomp$2 = null;
				} else JSCompiler_inline_result$jscomp$2 = children$jscomp$5;
				return JSCompiler_inline_result$jscomp$2;
			case "title":
				var noscriptTagInScope = formatContext.tagScope & 1, isFallback = formatContext.tagScope & 4;
				if (4 === formatContext.insertionMode || noscriptTagInScope || null != props.itemProp) var JSCompiler_inline_result$jscomp$3 = pushTitleImpl(target$jscomp$0, props);
				else isFallback ? JSCompiler_inline_result$jscomp$3 = null : (pushTitleImpl(renderState.hoistableChunks, props), JSCompiler_inline_result$jscomp$3 = void 0);
				return JSCompiler_inline_result$jscomp$3;
			case "link":
				var noscriptTagInScope$jscomp$0 = formatContext.tagScope & 1, isFallback$jscomp$0 = formatContext.tagScope & 4, rel = props.rel, href = props.href, precedence = props.precedence;
				if (4 === formatContext.insertionMode || noscriptTagInScope$jscomp$0 || null != props.itemProp || "string" !== typeof rel || "string" !== typeof href || "" === href) {
					pushLinkImpl(target$jscomp$0, props);
					var JSCompiler_inline_result$jscomp$4 = null;
				} else if ("stylesheet" === props.rel) if ("string" !== typeof precedence || null != props.disabled || props.onLoad || props.onError) JSCompiler_inline_result$jscomp$4 = pushLinkImpl(target$jscomp$0, props);
				else {
					var styleQueue = renderState.styles.get(precedence), resourceState = resumableState.styleResources.hasOwnProperty(href) ? resumableState.styleResources[href] : void 0;
					if (null !== resourceState) {
						resumableState.styleResources[href] = null;
						styleQueue || (styleQueue = {
							precedence: stringToChunk(escapeTextForBrowser(precedence)),
							rules: [],
							hrefs: [],
							sheets: /* @__PURE__ */ new Map()
						}, renderState.styles.set(precedence, styleQueue));
						var resource = {
							state: 0,
							props: assign({}, props, {
								"data-precedence": props.precedence,
								precedence: null
							})
						};
						if (resourceState) {
							2 === resourceState.length && adoptPreloadCredentials(resource.props, resourceState);
							var preloadResource = renderState.preloads.stylesheets.get(href);
							preloadResource && 0 < preloadResource.length ? preloadResource.length = 0 : resource.state = 1;
						}
						styleQueue.sheets.set(href, resource);
						hoistableState && hoistableState.stylesheets.add(resource);
					} else if (styleQueue) {
						var resource$9 = styleQueue.sheets.get(href);
						resource$9 && hoistableState && hoistableState.stylesheets.add(resource$9);
					}
					textEmbedded && target$jscomp$0.push(textSeparator);
					JSCompiler_inline_result$jscomp$4 = null;
				}
				else props.onLoad || props.onError ? JSCompiler_inline_result$jscomp$4 = pushLinkImpl(target$jscomp$0, props) : (textEmbedded && target$jscomp$0.push(textSeparator), JSCompiler_inline_result$jscomp$4 = isFallback$jscomp$0 ? null : pushLinkImpl(renderState.hoistableChunks, props));
				return JSCompiler_inline_result$jscomp$4;
			case "script":
				var noscriptTagInScope$jscomp$1 = formatContext.tagScope & 1, asyncProp = props.async;
				if ("string" !== typeof props.src || !props.src || !asyncProp || "function" === typeof asyncProp || "symbol" === typeof asyncProp || props.onLoad || props.onError || 4 === formatContext.insertionMode || noscriptTagInScope$jscomp$1 || null != props.itemProp) var JSCompiler_inline_result$jscomp$5 = pushScriptImpl(target$jscomp$0, props);
				else {
					var key = props.src;
					if ("module" === props.type) {
						var resources = resumableState.moduleScriptResources;
						var preloads = renderState.preloads.moduleScripts;
					} else resources = resumableState.scriptResources, preloads = renderState.preloads.scripts;
					var resourceState$jscomp$0 = resources.hasOwnProperty(key) ? resources[key] : void 0;
					if (null !== resourceState$jscomp$0) {
						resources[key] = null;
						var scriptProps = props;
						if (resourceState$jscomp$0) {
							2 === resourceState$jscomp$0.length && (scriptProps = assign({}, props), adoptPreloadCredentials(scriptProps, resourceState$jscomp$0));
							var preloadResource$jscomp$0 = preloads.get(key);
							preloadResource$jscomp$0 && (preloadResource$jscomp$0.length = 0);
						}
						var resource$jscomp$0 = [];
						renderState.scripts.add(resource$jscomp$0);
						pushScriptImpl(resource$jscomp$0, scriptProps);
					}
					textEmbedded && target$jscomp$0.push(textSeparator);
					JSCompiler_inline_result$jscomp$5 = null;
				}
				return JSCompiler_inline_result$jscomp$5;
			case "style":
				var noscriptTagInScope$jscomp$2 = formatContext.tagScope & 1, precedence$jscomp$0 = props.precedence, href$jscomp$0 = props.href, nonce = props.nonce;
				if (4 === formatContext.insertionMode || noscriptTagInScope$jscomp$2 || null != props.itemProp || "string" !== typeof precedence$jscomp$0 || "string" !== typeof href$jscomp$0 || "" === href$jscomp$0) {
					target$jscomp$0.push(startChunkForTag("style"));
					var children$jscomp$6 = null, innerHTML$jscomp$5 = null, propKey$jscomp$8;
					for (propKey$jscomp$8 in props) if (hasOwnProperty.call(props, propKey$jscomp$8)) {
						var propValue$jscomp$8 = props[propKey$jscomp$8];
						if (null != propValue$jscomp$8) switch (propKey$jscomp$8) {
							case "children":
								children$jscomp$6 = propValue$jscomp$8;
								break;
							case "dangerouslySetInnerHTML":
								innerHTML$jscomp$5 = propValue$jscomp$8;
								break;
							default: pushAttribute(target$jscomp$0, propKey$jscomp$8, propValue$jscomp$8);
						}
					}
					target$jscomp$0.push(endOfStartTag);
					var child = Array.isArray(children$jscomp$6) ? 2 > children$jscomp$6.length ? children$jscomp$6[0] : null : children$jscomp$6;
					"function" !== typeof child && "symbol" !== typeof child && null !== child && void 0 !== child && target$jscomp$0.push(stringToChunk(("" + child).replace(styleRegex, styleReplacer)));
					pushInnerHTML(target$jscomp$0, innerHTML$jscomp$5, children$jscomp$6);
					target$jscomp$0.push(endChunkForTag("style"));
					var JSCompiler_inline_result$jscomp$6 = null;
				} else {
					var styleQueue$jscomp$0 = renderState.styles.get(precedence$jscomp$0);
					if (null !== (resumableState.styleResources.hasOwnProperty(href$jscomp$0) ? resumableState.styleResources[href$jscomp$0] : void 0)) {
						resumableState.styleResources[href$jscomp$0] = null;
						styleQueue$jscomp$0 || (styleQueue$jscomp$0 = {
							precedence: stringToChunk(escapeTextForBrowser(precedence$jscomp$0)),
							rules: [],
							hrefs: [],
							sheets: /* @__PURE__ */ new Map()
						}, renderState.styles.set(precedence$jscomp$0, styleQueue$jscomp$0));
						var nonceStyle = renderState.nonce.style;
						if (!nonceStyle || nonceStyle === nonce) {
							styleQueue$jscomp$0.hrefs.push(stringToChunk(escapeTextForBrowser(href$jscomp$0)));
							var target = styleQueue$jscomp$0.rules, children$jscomp$7 = null, innerHTML$jscomp$6 = null, propKey$jscomp$9;
							for (propKey$jscomp$9 in props) if (hasOwnProperty.call(props, propKey$jscomp$9)) {
								var propValue$jscomp$9 = props[propKey$jscomp$9];
								if (null != propValue$jscomp$9) switch (propKey$jscomp$9) {
									case "children":
										children$jscomp$7 = propValue$jscomp$9;
										break;
									case "dangerouslySetInnerHTML": innerHTML$jscomp$6 = propValue$jscomp$9;
								}
							}
							var child$jscomp$0 = Array.isArray(children$jscomp$7) ? 2 > children$jscomp$7.length ? children$jscomp$7[0] : null : children$jscomp$7;
							"function" !== typeof child$jscomp$0 && "symbol" !== typeof child$jscomp$0 && null !== child$jscomp$0 && void 0 !== child$jscomp$0 && target.push(stringToChunk(("" + child$jscomp$0).replace(styleRegex, styleReplacer)));
							pushInnerHTML(target, innerHTML$jscomp$6, children$jscomp$7);
						}
					}
					styleQueue$jscomp$0 && hoistableState && hoistableState.styles.add(styleQueue$jscomp$0);
					textEmbedded && target$jscomp$0.push(textSeparator);
					JSCompiler_inline_result$jscomp$6 = void 0;
				}
				return JSCompiler_inline_result$jscomp$6;
			case "meta":
				var noscriptTagInScope$jscomp$3 = formatContext.tagScope & 1, isFallback$jscomp$1 = formatContext.tagScope & 4;
				if (4 === formatContext.insertionMode || noscriptTagInScope$jscomp$3 || null != props.itemProp) var JSCompiler_inline_result$jscomp$7 = pushSelfClosing(target$jscomp$0, props, "meta", formatContext);
				else textEmbedded && target$jscomp$0.push(textSeparator), JSCompiler_inline_result$jscomp$7 = isFallback$jscomp$1 ? null : "string" === typeof props.charSet ? pushSelfClosing(renderState.charsetChunks, props, "meta", formatContext) : "viewport" === props.name ? pushSelfClosing(renderState.viewportChunks, props, "meta", formatContext) : pushSelfClosing(renderState.hoistableChunks, props, "meta", formatContext);
				return JSCompiler_inline_result$jscomp$7;
			case "listing":
			case "pre":
				target$jscomp$0.push(startChunkForTag(type));
				var children$jscomp$8 = null, innerHTML$jscomp$7 = null, propKey$jscomp$10;
				for (propKey$jscomp$10 in props) if (hasOwnProperty.call(props, propKey$jscomp$10)) {
					var propValue$jscomp$10 = props[propKey$jscomp$10];
					if (null != propValue$jscomp$10) switch (propKey$jscomp$10) {
						case "children":
							children$jscomp$8 = propValue$jscomp$10;
							break;
						case "dangerouslySetInnerHTML":
							innerHTML$jscomp$7 = propValue$jscomp$10;
							break;
						default: pushAttribute(target$jscomp$0, propKey$jscomp$10, propValue$jscomp$10);
					}
				}
				pushViewTransitionAttributes(target$jscomp$0, formatContext);
				target$jscomp$0.push(endOfStartTag);
				if (null != innerHTML$jscomp$7) {
					if (null != children$jscomp$8) throw Error(formatProdErrorMessage(60));
					if ("object" !== typeof innerHTML$jscomp$7 || !("__html" in innerHTML$jscomp$7)) throw Error(formatProdErrorMessage(61));
					var html = innerHTML$jscomp$7.__html;
					null !== html && void 0 !== html && ("string" === typeof html && 0 < html.length && "\n" === html[0] ? target$jscomp$0.push(leadingNewline, stringToChunk(html)) : target$jscomp$0.push(stringToChunk("" + html)));
				}
				"string" === typeof children$jscomp$8 && "\n" === children$jscomp$8[0] && target$jscomp$0.push(leadingNewline);
				return children$jscomp$8;
			case "img":
				var pictureOrNoScriptTagInScope = formatContext.tagScope & 3, src = props.src, srcSet = props.srcSet;
				if (!("lazy" === props.loading || !src && !srcSet || "string" !== typeof src && null != src || "string" !== typeof srcSet && null != srcSet || "low" === props.fetchPriority || pictureOrNoScriptTagInScope) && ("string" !== typeof src || ":" !== src[4] || "d" !== src[0] && "D" !== src[0] || "a" !== src[1] && "A" !== src[1] || "t" !== src[2] && "T" !== src[2] || "a" !== src[3] && "A" !== src[3]) && ("string" !== typeof srcSet || ":" !== srcSet[4] || "d" !== srcSet[0] && "D" !== srcSet[0] || "a" !== srcSet[1] && "A" !== srcSet[1] || "t" !== srcSet[2] && "T" !== srcSet[2] || "a" !== srcSet[3] && "A" !== srcSet[3])) {
					null !== hoistableState && formatContext.tagScope & 64 && (hoistableState.suspenseyImages = !0);
					var sizes = "string" === typeof props.sizes ? props.sizes : void 0, key$jscomp$0 = srcSet ? srcSet + "\n" + (sizes || "") : src, promotablePreloads = renderState.preloads.images, resource$jscomp$1 = promotablePreloads.get(key$jscomp$0);
					if (resource$jscomp$1) {
						if ("high" === props.fetchPriority || 10 > renderState.highImagePreloads.size) promotablePreloads.delete(key$jscomp$0), renderState.highImagePreloads.add(resource$jscomp$1);
					} else if (!resumableState.imageResources.hasOwnProperty(key$jscomp$0)) {
						resumableState.imageResources[key$jscomp$0] = PRELOAD_NO_CREDS;
						var input = props.crossOrigin;
						var JSCompiler_inline_result$jscomp$8 = "string" === typeof input ? "use-credentials" === input ? input : "" : void 0;
						var headers = renderState.headers, header;
						headers && 0 < headers.remainingCapacity && "string" !== typeof props.srcSet && ("high" === props.fetchPriority || 500 > headers.highImagePreloads.length) && (header = getPreloadAsHeader(src, "image", {
							imageSrcSet: props.srcSet,
							imageSizes: props.sizes,
							crossOrigin: JSCompiler_inline_result$jscomp$8,
							integrity: props.integrity,
							nonce: props.nonce,
							type: props.type,
							fetchPriority: props.fetchPriority,
							referrerPolicy: props.referrerPolicy
						}), 0 <= (headers.remainingCapacity -= header.length + 2)) ? (renderState.resets.image[key$jscomp$0] = PRELOAD_NO_CREDS, headers.highImagePreloads && (headers.highImagePreloads += ", "), headers.highImagePreloads += header) : (resource$jscomp$1 = [], pushLinkImpl(resource$jscomp$1, {
							rel: "preload",
							as: "image",
							href: srcSet ? void 0 : src,
							imageSrcSet: srcSet,
							imageSizes: sizes,
							crossOrigin: JSCompiler_inline_result$jscomp$8,
							integrity: props.integrity,
							type: props.type,
							fetchPriority: props.fetchPriority,
							referrerPolicy: props.referrerPolicy
						}), "high" === props.fetchPriority || 10 > renderState.highImagePreloads.size ? renderState.highImagePreloads.add(resource$jscomp$1) : (renderState.bulkPreloads.add(resource$jscomp$1), promotablePreloads.set(key$jscomp$0, resource$jscomp$1)));
					}
				}
				return pushSelfClosing(target$jscomp$0, props, "img", formatContext);
			case "base":
			case "area":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "param":
			case "source":
			case "track":
			case "wbr": return pushSelfClosing(target$jscomp$0, props, type, formatContext);
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": break;
			case "head":
				if (2 > formatContext.insertionMode) {
					var preamble = preambleState || renderState.preamble;
					if (preamble.headChunks) throw Error(formatProdErrorMessage(545, "`<head>`"));
					null !== preambleState && target$jscomp$0.push(headPreambleContributionChunk);
					preamble.headChunks = [];
					var JSCompiler_inline_result$jscomp$9 = pushStartSingletonElement(preamble.headChunks, props, "head", formatContext);
				} else JSCompiler_inline_result$jscomp$9 = pushStartGenericElement(target$jscomp$0, props, "head", formatContext);
				return JSCompiler_inline_result$jscomp$9;
			case "body":
				if (2 > formatContext.insertionMode) {
					var preamble$jscomp$0 = preambleState || renderState.preamble;
					if (preamble$jscomp$0.bodyChunks) throw Error(formatProdErrorMessage(545, "`<body>`"));
					null !== preambleState && target$jscomp$0.push(bodyPreambleContributionChunk);
					preamble$jscomp$0.bodyChunks = [];
					var JSCompiler_inline_result$jscomp$10 = pushStartSingletonElement(preamble$jscomp$0.bodyChunks, props, "body", formatContext);
				} else JSCompiler_inline_result$jscomp$10 = pushStartGenericElement(target$jscomp$0, props, "body", formatContext);
				return JSCompiler_inline_result$jscomp$10;
			case "html":
				if (0 === formatContext.insertionMode) {
					var preamble$jscomp$1 = preambleState || renderState.preamble;
					if (preamble$jscomp$1.htmlChunks) throw Error(formatProdErrorMessage(545, "`<html>`"));
					null !== preambleState && target$jscomp$0.push(htmlPreambleContributionChunk);
					preamble$jscomp$1.htmlChunks = [doctypeChunk];
					var JSCompiler_inline_result$jscomp$11 = pushStartSingletonElement(preamble$jscomp$1.htmlChunks, props, "html", formatContext);
				} else JSCompiler_inline_result$jscomp$11 = pushStartGenericElement(target$jscomp$0, props, "html", formatContext);
				return JSCompiler_inline_result$jscomp$11;
			default: if (-1 !== type.indexOf("-")) {
				target$jscomp$0.push(startChunkForTag(type));
				var children$jscomp$9 = null, innerHTML$jscomp$8 = null, propKey$jscomp$11;
				for (propKey$jscomp$11 in props) if (hasOwnProperty.call(props, propKey$jscomp$11)) {
					var propValue$jscomp$11 = props[propKey$jscomp$11];
					if (null != propValue$jscomp$11) {
						var attributeName = propKey$jscomp$11;
						switch (propKey$jscomp$11) {
							case "children":
								children$jscomp$9 = propValue$jscomp$11;
								break;
							case "dangerouslySetInnerHTML":
								innerHTML$jscomp$8 = propValue$jscomp$11;
								break;
							case "style":
								pushStyleAttribute(target$jscomp$0, propValue$jscomp$11);
								break;
							case "suppressContentEditableWarning":
							case "suppressHydrationWarning":
							case "ref": break;
							case "className": attributeName = "class";
							default: if (isAttributeNameSafe(propKey$jscomp$11) && "function" !== typeof propValue$jscomp$11 && "symbol" !== typeof propValue$jscomp$11 && !1 !== propValue$jscomp$11) {
								if (!0 === propValue$jscomp$11) propValue$jscomp$11 = "";
								else if ("object" === typeof propValue$jscomp$11) continue;
								target$jscomp$0.push(attributeSeparator, stringToChunk(attributeName), attributeAssign, stringToChunk(escapeTextForBrowser(propValue$jscomp$11)), attributeEnd);
							}
						}
					}
				}
				pushViewTransitionAttributes(target$jscomp$0, formatContext);
				target$jscomp$0.push(endOfStartTag);
				pushInnerHTML(target$jscomp$0, innerHTML$jscomp$8, children$jscomp$9);
				return children$jscomp$9;
			}
		}
		return pushStartGenericElement(target$jscomp$0, props, type, formatContext);
	}
	var endTagCache = /* @__PURE__ */ new Map();
	function endChunkForTag(tag) {
		var chunk = endTagCache.get(tag);
		void 0 === chunk && (chunk = stringToPrecomputedChunk("</" + tag + ">"), endTagCache.set(tag, chunk));
		return chunk;
	}
	function hoistPreambleState(renderState, preambleState) {
		renderState = renderState.preamble;
		null === renderState.htmlChunks && preambleState.htmlChunks && (renderState.htmlChunks = preambleState.htmlChunks);
		null === renderState.headChunks && preambleState.headChunks && (renderState.headChunks = preambleState.headChunks);
		null === renderState.bodyChunks && preambleState.bodyChunks && (renderState.bodyChunks = preambleState.bodyChunks);
	}
	function writeBootstrap(destination, renderState) {
		renderState = renderState.bootstrapChunks;
		for (var i = 0; i < renderState.length - 1; i++) writeChunk(destination, renderState[i]);
		return i < renderState.length ? (i = renderState[i], renderState.length = 0, writeChunkAndReturn(destination, i)) : !0;
	}
	var shellTimeRuntimeScript = stringToPrecomputedChunk("requestAnimationFrame(function(){$RT=performance.now()});");
	var placeholder1 = stringToPrecomputedChunk("<template id=\"");
	var placeholder2 = stringToPrecomputedChunk("\"></template>");
	var startActivityBoundary = stringToPrecomputedChunk("<!--&-->");
	var endActivityBoundary = stringToPrecomputedChunk("<!--/&-->");
	var startCompletedSuspenseBoundary = stringToPrecomputedChunk("<!--$-->");
	var startPendingSuspenseBoundary1 = stringToPrecomputedChunk("<!--$?--><template id=\"");
	var startPendingSuspenseBoundary2 = stringToPrecomputedChunk("\"></template>");
	var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk("<!--$!-->");
	var endSuspenseBoundary = stringToPrecomputedChunk("<!--/$-->");
	var clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk("<template");
	var clientRenderedSuspenseBoundaryErrorAttrInterstitial = stringToPrecomputedChunk("\"");
	var clientRenderedSuspenseBoundaryError1A = stringToPrecomputedChunk(" data-dgst=\"");
	stringToPrecomputedChunk(" data-msg=\"");
	stringToPrecomputedChunk(" data-stck=\"");
	stringToPrecomputedChunk(" data-cstck=\"");
	var clientRenderedSuspenseBoundaryError2 = stringToPrecomputedChunk("></template>");
	function writeStartPendingSuspenseBoundary(destination, renderState, id) {
		writeChunk(destination, startPendingSuspenseBoundary1);
		if (null === id) throw Error(formatProdErrorMessage(395));
		writeChunk(destination, renderState.boundaryPrefix);
		writeChunk(destination, stringToChunk(id.toString(16)));
		return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
	}
	var startSegmentHTML = stringToPrecomputedChunk("<div hidden id=\"");
	var startSegmentHTML2 = stringToPrecomputedChunk("\">");
	var endSegmentHTML = stringToPrecomputedChunk("</div>");
	var startSegmentSVG = stringToPrecomputedChunk("<svg aria-hidden=\"true\" style=\"display:none\" id=\"");
	var startSegmentSVG2 = stringToPrecomputedChunk("\">");
	var endSegmentSVG = stringToPrecomputedChunk("</svg>");
	var startSegmentMathML = stringToPrecomputedChunk("<math aria-hidden=\"true\" style=\"display:none\" id=\"");
	var startSegmentMathML2 = stringToPrecomputedChunk("\">");
	var endSegmentMathML = stringToPrecomputedChunk("</math>");
	var startSegmentTable = stringToPrecomputedChunk("<table hidden id=\"");
	var startSegmentTable2 = stringToPrecomputedChunk("\">");
	var endSegmentTable = stringToPrecomputedChunk("</table>");
	var startSegmentTableBody = stringToPrecomputedChunk("<table hidden><tbody id=\"");
	var startSegmentTableBody2 = stringToPrecomputedChunk("\">");
	var endSegmentTableBody = stringToPrecomputedChunk("</tbody></table>");
	var startSegmentTableRow = stringToPrecomputedChunk("<table hidden><tr id=\"");
	var startSegmentTableRow2 = stringToPrecomputedChunk("\">");
	var endSegmentTableRow = stringToPrecomputedChunk("</tr></table>");
	var startSegmentColGroup = stringToPrecomputedChunk("<table hidden><colgroup id=\"");
	var startSegmentColGroup2 = stringToPrecomputedChunk("\">");
	var endSegmentColGroup = stringToPrecomputedChunk("</colgroup></table>");
	function writeStartSegment(destination, renderState, formatContext, id) {
		switch (formatContext.insertionMode) {
			case 0:
			case 1:
			case 3:
			case 2: return writeChunk(destination, startSegmentHTML), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentHTML2);
			case 4: return writeChunk(destination, startSegmentSVG), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentSVG2);
			case 5: return writeChunk(destination, startSegmentMathML), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentMathML2);
			case 6: return writeChunk(destination, startSegmentTable), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentTable2);
			case 7: return writeChunk(destination, startSegmentTableBody), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentTableBody2);
			case 8: return writeChunk(destination, startSegmentTableRow), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentTableRow2);
			case 9: return writeChunk(destination, startSegmentColGroup), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentColGroup2);
			default: throw Error(formatProdErrorMessage(397));
		}
	}
	function writeEndSegment(destination, formatContext) {
		switch (formatContext.insertionMode) {
			case 0:
			case 1:
			case 3:
			case 2: return writeChunkAndReturn(destination, endSegmentHTML);
			case 4: return writeChunkAndReturn(destination, endSegmentSVG);
			case 5: return writeChunkAndReturn(destination, endSegmentMathML);
			case 6: return writeChunkAndReturn(destination, endSegmentTable);
			case 7: return writeChunkAndReturn(destination, endSegmentTableBody);
			case 8: return writeChunkAndReturn(destination, endSegmentTableRow);
			case 9: return writeChunkAndReturn(destination, endSegmentColGroup);
			default: throw Error(formatProdErrorMessage(397));
		}
	}
	var completeSegmentScript1Full = stringToPrecomputedChunk("$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS(\"");
	var completeSegmentScript1Partial = stringToPrecomputedChunk("$RS(\"");
	var completeSegmentScript2 = stringToPrecomputedChunk("\",\"");
	var completeSegmentScriptEnd = stringToPrecomputedChunk("\")<\/script>");
	stringToPrecomputedChunk("<template data-rsi=\"\" data-sid=\"");
	stringToPrecomputedChunk("\" data-pid=\"");
	var completeBoundaryScriptFunctionOnly = stringToPrecomputedChunk("$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if(\"/$\"===d||\"/&\"===d)if(0===h)break;else h--;else\"$\"!==d&&\"$?\"!==d&&\"$~\"!==d&&\"$!\"!==d&&\"&\"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data=\"$\";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data=\"$~\",$RB.push(a,b),2===$RB.length&&(\"number\"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};");
	var completeBoundaryUpgradeToViewTransitionsInstruction = stringToChunk("$RV=function(B,g){function h(a,c){var e=a.getAttribute(c);e&&(c=a.style,l.push(a,c.viewTransitionName,c.viewTransitionClass),\"auto\"!==e&&(c.viewTransitionClass=e),(a=a.getAttribute(\"vt-name\"))||(a=\"_T_\"+N++ +\"_\"),a=CSS.escape(a)!==a?\"r-\"+btoa(a).replace(/=/g,\"\"):a,c.viewTransitionName=a,C=!0)}var C=!1,N=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var k=g[f].querySelectorAll(\"[vt-share]\"),d=0;d<k.length;d++){var b=k[d];m.set(b.getAttribute(\"vt-name\"),b)}var u=[];for(k=0;k<g.length;k+=2){var D=g[k],x=D.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){b=D;for(f=0;b;){if(8===b.nodeType){var t=b.data;if(\"/$\"===t)if(0===f)break;else f--;else\"$\"!==t&&\"$?\"!==t&&\"$~\"!==t&&\"$!\"!==t||f++}else if(1===b.nodeType){d=b;var E=d.getAttribute(\"vt-name\"),y=m.get(E);h(d,y?\"vt-share\":\"vt-exit\");y&&(h(y,\"vt-share\"),m.set(E,null));for(var F=d.querySelectorAll(\"[vt-share]\"),\nz=0;z<F.length;z++){var G=F[z],H=G.getAttribute(\"vt-name\"),I=m.get(H);I&&(h(G,\"vt-share\"),h(I,\"vt-share\"),m.set(H,null))}var J=d.querySelectorAll(\"[vt-parent-exit]\");for(d=0;d<J.length;d++)h(J[d],\"vt-parent-exit\")}b=b.nextSibling}for(var K=g[k+1],n=K.firstElementChild;n;){null!==m.get(n.getAttribute(\"vt-name\"))&&h(n,\"vt-enter\");var L=n.querySelectorAll(\"[vt-parent-enter]\");for(b=0;b<L.length;b++)h(L[b],\"vt-parent-enter\");n=n.nextElementSibling}b=x;do for(var p=b.firstElementChild;p;){var M=p.getAttribute(\"vt-update\");\nM&&\"none\"!==M&&!l.includes(p)&&h(p,\"vt-update\");p=p.nextElementSibling}while((b=b.parentNode)&&1===b.nodeType&&\"none\"!==b.getAttribute(\"vt-update\"));u.push.apply(u,K.querySelectorAll('img[src]:not([loading=\"lazy\"])'))}}}if(C){var A=document.__reactViewTransition=document.startViewTransition({update:function(){B(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],c={},e=0;e<u.length;c={g:c.g},e++)if(c.g=u[e],!c.g.complete){var q=c.g.getBoundingClientRect();0<q.bottom&&0<q.right&&\nq.top<window.innerHeight&&q.left<window.innerWidth&&(q=new Promise(function(w){return function(r){w.g.addEventListener(\"load\",r);w.g.addEventListener(\"error\",r)}}(c)),a.push(q))}return Promise.race([Promise.all(a),new Promise(function(w){var r=performance.now();setTimeout(w,2300>r&&2E3<r?2300-r:500)})])},types:[]});A.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var c=l[a],e=c.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];\"\"===c.getAttribute(\"style\")&&c.removeAttribute(\"style\")}});\nA.finished.finally(function(){document.__reactViewTransition===A&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}B(g)}.bind(null,$RV);");
	var completeBoundaryScript1Partial = stringToPrecomputedChunk("$RC(\"");
	var completeBoundaryWithStylesScript1FullPartial = stringToPrecomputedChunk("$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll(\"link[data-precedence],style[data-precedence]\"),v=[],k=0;b=e[k++];)\"not all\"===b.getAttribute(\"media\")?v.push(b):(\"LINK\"===b.tagName&&$RM.set(b.getAttribute(\"href\"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement(\"link\");a.href=d;a.rel=\n\"stylesheet\";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute(\"media\");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute(\"data-precedence\");a.removeAttribute(\"media\")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=\n\"$~\";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,\"CSS failed to load\"))};$RR(\"");
	var completeBoundaryWithStylesScript1Partial = stringToPrecomputedChunk("$RR(\"");
	var completeBoundaryScript2 = stringToPrecomputedChunk("\",\"");
	var completeBoundaryScript3a = stringToPrecomputedChunk("\",");
	var completeBoundaryScript3b = stringToPrecomputedChunk("\"");
	var completeBoundaryScriptEnd = stringToPrecomputedChunk(")<\/script>");
	stringToPrecomputedChunk("<template data-rci=\"\" data-bid=\"");
	stringToPrecomputedChunk("<template data-rri=\"\" data-bid=\"");
	stringToPrecomputedChunk("\" data-sid=\"");
	stringToPrecomputedChunk("\" data-sty=\"");
	var clientRenderScriptFunctionOnly = stringToPrecomputedChunk("$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data=\"$!\",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};");
	var clientRenderScript1Full = stringToPrecomputedChunk("$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data=\"$!\",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX(\"");
	var clientRenderScript1Partial = stringToPrecomputedChunk("$RX(\"");
	var clientRenderScript1A = stringToPrecomputedChunk("\"");
	var clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(",");
	var clientRenderErrorScriptNull = stringToPrecomputedChunk("null");
	var clientRenderScriptEnd = stringToPrecomputedChunk(")<\/script>");
	stringToPrecomputedChunk("<template data-rxi=\"\" data-bid=\"");
	stringToPrecomputedChunk("\" data-dgst=\"");
	stringToPrecomputedChunk("\" data-msg=\"");
	stringToPrecomputedChunk("\" data-stck=\"");
	stringToPrecomputedChunk("\" data-cstck=\"");
	var regexForJSStringsInInstructionScripts = /[<\u2028\u2029]/g;
	function escapeJSStringsForInstructionScripts(input) {
		return JSON.stringify(input).replace(regexForJSStringsInInstructionScripts, function(match) {
			switch (match) {
				case "<": return "\\u003c";
				case "\u2028": return "\\u2028";
				case "\u2029": return "\\u2029";
				default: throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
			}
		});
	}
	var regexForJSStringsInScripts = /[&><\u2028\u2029]/g;
	function escapeJSObjectForInstructionScripts(input) {
		return JSON.stringify(input).replace(regexForJSStringsInScripts, function(match) {
			switch (match) {
				case "&": return "\\u0026";
				case ">": return "\\u003e";
				case "<": return "\\u003c";
				case "\u2028": return "\\u2028";
				case "\u2029": return "\\u2029";
				default: throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
			}
		});
	}
	var lateStyleTagResourceOpen1 = stringToPrecomputedChunk(" media=\"not all\" data-precedence=\"");
	var lateStyleTagResourceOpen2 = stringToPrecomputedChunk("\" data-href=\"");
	var lateStyleTagResourceOpen3 = stringToPrecomputedChunk("\">");
	var lateStyleTagTemplateClose = stringToPrecomputedChunk("</style>");
	var currentlyRenderingBoundaryHasStylesToHoist = !1;
	var destinationHasCapacity = !0;
	function flushStyleTagsLateForBoundary(styleQueue) {
		var rules = styleQueue.rules, hrefs = styleQueue.hrefs, i = 0;
		if (hrefs.length) {
			writeChunk(this, currentlyFlushingRenderState.startInlineStyle);
			writeChunk(this, lateStyleTagResourceOpen1);
			writeChunk(this, styleQueue.precedence);
			for (writeChunk(this, lateStyleTagResourceOpen2); i < hrefs.length - 1; i++) writeChunk(this, hrefs[i]), writeChunk(this, spaceSeparator);
			writeChunk(this, hrefs[i]);
			writeChunk(this, lateStyleTagResourceOpen3);
			for (i = 0; i < rules.length; i++) writeChunk(this, rules[i]);
			destinationHasCapacity = writeChunkAndReturn(this, lateStyleTagTemplateClose);
			currentlyRenderingBoundaryHasStylesToHoist = !0;
			rules.length = 0;
			hrefs.length = 0;
		}
	}
	function hasStylesToHoist(stylesheet) {
		return 2 !== stylesheet.state ? currentlyRenderingBoundaryHasStylesToHoist = !0 : !1;
	}
	function writeHoistablesForBoundary(destination, hoistableState, renderState) {
		currentlyRenderingBoundaryHasStylesToHoist = !1;
		destinationHasCapacity = !0;
		currentlyFlushingRenderState = renderState;
		hoistableState.styles.forEach(flushStyleTagsLateForBoundary, destination);
		currentlyFlushingRenderState = null;
		hoistableState.stylesheets.forEach(hasStylesToHoist);
		currentlyRenderingBoundaryHasStylesToHoist && (renderState.stylesToHoist = !0);
		return destinationHasCapacity;
	}
	function flushResource(resource) {
		for (var i = 0; i < resource.length; i++) writeChunk(this, resource[i]);
		resource.length = 0;
	}
	var stylesheetFlushingQueue = [];
	function flushStyleInPreamble(stylesheet) {
		pushLinkImpl(stylesheetFlushingQueue, stylesheet.props);
		for (var i = 0; i < stylesheetFlushingQueue.length; i++) writeChunk(this, stylesheetFlushingQueue[i]);
		stylesheetFlushingQueue.length = 0;
		stylesheet.state = 2;
	}
	var styleTagResourceOpen1 = stringToPrecomputedChunk(" data-precedence=\"");
	var styleTagResourceOpen2 = stringToPrecomputedChunk("\" data-href=\"");
	var spaceSeparator = stringToPrecomputedChunk(" ");
	var styleTagResourceOpen3 = stringToPrecomputedChunk("\">");
	var styleTagResourceClose = stringToPrecomputedChunk("</style>");
	function flushStylesInPreamble(styleQueue) {
		var hasStylesheets = 0 < styleQueue.sheets.size;
		styleQueue.sheets.forEach(flushStyleInPreamble, this);
		styleQueue.sheets.clear();
		var rules = styleQueue.rules, hrefs = styleQueue.hrefs;
		if (!hasStylesheets || hrefs.length) {
			writeChunk(this, currentlyFlushingRenderState.startInlineStyle);
			writeChunk(this, styleTagResourceOpen1);
			writeChunk(this, styleQueue.precedence);
			styleQueue = 0;
			if (hrefs.length) {
				for (writeChunk(this, styleTagResourceOpen2); styleQueue < hrefs.length - 1; styleQueue++) writeChunk(this, hrefs[styleQueue]), writeChunk(this, spaceSeparator);
				writeChunk(this, hrefs[styleQueue]);
			}
			writeChunk(this, styleTagResourceOpen3);
			for (styleQueue = 0; styleQueue < rules.length; styleQueue++) writeChunk(this, rules[styleQueue]);
			writeChunk(this, styleTagResourceClose);
			rules.length = 0;
			hrefs.length = 0;
		}
	}
	function preloadLateStyle(stylesheet) {
		if (0 === stylesheet.state) {
			stylesheet.state = 1;
			var props = stylesheet.props;
			pushLinkImpl(stylesheetFlushingQueue, {
				rel: "preload",
				as: "style",
				href: stylesheet.props.href,
				crossOrigin: props.crossOrigin,
				fetchPriority: props.fetchPriority,
				integrity: props.integrity,
				media: props.media,
				hrefLang: props.hrefLang,
				referrerPolicy: props.referrerPolicy
			});
			for (stylesheet = 0; stylesheet < stylesheetFlushingQueue.length; stylesheet++) writeChunk(this, stylesheetFlushingQueue[stylesheet]);
			stylesheetFlushingQueue.length = 0;
		}
	}
	function preloadLateStyles(styleQueue) {
		styleQueue.sheets.forEach(preloadLateStyle, this);
		styleQueue.sheets.clear();
	}
	stringToPrecomputedChunk("<link rel=\"expect\" href=\"#");
	stringToPrecomputedChunk("\" blocking=\"render\"/>");
	var completedShellIdAttributeStart = stringToPrecomputedChunk(" id=\"");
	function pushCompletedShellIdAttribute(target, resumableState) {
		0 === (resumableState.instructions & 32) && (resumableState.instructions |= 32, target.push(completedShellIdAttributeStart, stringToChunk(escapeTextForBrowser("_" + resumableState.idPrefix + "R_")), attributeEnd));
	}
	var arrayFirstOpenBracket = stringToPrecomputedChunk("[");
	var arraySubsequentOpenBracket = stringToPrecomputedChunk(",[");
	var arrayInterstitial = stringToPrecomputedChunk(",");
	var arrayCloseBracket = stringToPrecomputedChunk("]");
	function writeStyleResourceDependenciesInJS(destination, hoistableState) {
		writeChunk(destination, arrayFirstOpenBracket);
		var nextArrayOpenBrackChunk = arrayFirstOpenBracket;
		hoistableState.stylesheets.forEach(function(resource) {
			if (2 !== resource.state) if (3 === resource.state) writeChunk(destination, nextArrayOpenBrackChunk), writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts("" + resource.props.href))), writeChunk(destination, arrayCloseBracket), nextArrayOpenBrackChunk = arraySubsequentOpenBracket;
			else {
				writeChunk(destination, nextArrayOpenBrackChunk);
				var precedence = resource.props["data-precedence"], props = resource.props;
				writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(sanitizeURL("" + resource.props.href))));
				precedence = "" + precedence;
				writeChunk(destination, arrayInterstitial);
				writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(precedence)));
				for (var propKey in props) if (hasOwnProperty.call(props, propKey) && (precedence = props[propKey], null != precedence)) switch (propKey) {
					case "href":
					case "rel":
					case "precedence":
					case "data-precedence": break;
					case "children":
					case "dangerouslySetInnerHTML": throw Error(formatProdErrorMessage(399, "link"));
					default: writeStyleResourceAttributeInJS(destination, propKey, precedence);
				}
				writeChunk(destination, arrayCloseBracket);
				nextArrayOpenBrackChunk = arraySubsequentOpenBracket;
				resource.state = 3;
			}
		});
		writeChunk(destination, arrayCloseBracket);
	}
	function writeStyleResourceAttributeInJS(destination, name, value) {
		var attributeName = name.toLowerCase();
		switch (typeof value) {
			case "function":
			case "symbol": return;
		}
		switch (name) {
			case "innerHTML":
			case "dangerouslySetInnerHTML":
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "style":
			case "ref": return;
			case "className":
				attributeName = "class";
				name = "" + value;
				break;
			case "hidden":
				if (!1 === value) return;
				name = "";
				break;
			case "src":
			case "href":
				value = sanitizeURL(value);
				name = "" + value;
				break;
			default:
				if (2 < name.length && ("o" === name[0] || "O" === name[0]) && ("n" === name[1] || "N" === name[1]) || !isAttributeNameSafe(name)) return;
				name = "" + value;
		}
		writeChunk(destination, arrayInterstitial);
		writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(attributeName)));
		writeChunk(destination, arrayInterstitial);
		writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(name)));
	}
	function createHoistableState() {
		return {
			styles: /* @__PURE__ */ new Set(),
			stylesheets: /* @__PURE__ */ new Set(),
			suspenseyImages: !1
		};
	}
	function prefetchDNS(href) {
		var request = currentRequest ? currentRequest : null;
		if (request) {
			var resumableState = request.resumableState, renderState = request.renderState;
			if ("string" === typeof href && href) {
				if (!resumableState.dnsResources.hasOwnProperty(href)) {
					resumableState.dnsResources[href] = null;
					resumableState = renderState.headers;
					var header, JSCompiler_temp;
					if (JSCompiler_temp = resumableState && 0 < resumableState.remainingCapacity) JSCompiler_temp = (header = "<" + ("" + href).replace(regexForHrefInLinkHeaderURLContext, escapeHrefForLinkHeaderURLContextReplacer) + ">; rel=dns-prefetch", 0 <= (resumableState.remainingCapacity -= header.length + 2));
					JSCompiler_temp ? (renderState.resets.dns[href] = null, resumableState.preconnects && (resumableState.preconnects += ", "), resumableState.preconnects += header) : (header = [], pushLinkImpl(header, {
						href,
						rel: "dns-prefetch"
					}), renderState.preconnects.add(header));
				}
				enqueueFlush(request);
			}
		} else previousDispatcher.D(href);
	}
	function preconnect(href, crossOrigin) {
		var request = currentRequest ? currentRequest : null;
		if (request) {
			var resumableState = request.resumableState, renderState = request.renderState;
			if ("string" === typeof href && href) {
				var bucket = "use-credentials" === crossOrigin ? "credentials" : "string" === typeof crossOrigin ? "anonymous" : "default";
				if (!resumableState.connectResources[bucket].hasOwnProperty(href)) {
					resumableState.connectResources[bucket][href] = null;
					resumableState = renderState.headers;
					var header, JSCompiler_temp;
					if (JSCompiler_temp = resumableState && 0 < resumableState.remainingCapacity) {
						JSCompiler_temp = "<" + ("" + href).replace(regexForHrefInLinkHeaderURLContext, escapeHrefForLinkHeaderURLContextReplacer) + ">; rel=preconnect";
						if ("string" === typeof crossOrigin) {
							var escapedCrossOrigin = ("" + crossOrigin).replace(regexForLinkHeaderQuotedParamValueContext, escapeStringForLinkHeaderQuotedParamValueContextReplacer);
							JSCompiler_temp += "; crossorigin=\"" + escapedCrossOrigin + "\"";
						}
						JSCompiler_temp = (header = JSCompiler_temp, 0 <= (resumableState.remainingCapacity -= header.length + 2));
					}
					JSCompiler_temp ? (renderState.resets.connect[bucket][href] = null, resumableState.preconnects && (resumableState.preconnects += ", "), resumableState.preconnects += header) : (bucket = [], pushLinkImpl(bucket, {
						rel: "preconnect",
						href,
						crossOrigin
					}), renderState.preconnects.add(bucket));
				}
				enqueueFlush(request);
			}
		} else previousDispatcher.C(href, crossOrigin);
	}
	function preload(href, as, options) {
		var request = currentRequest ? currentRequest : null;
		if (request) {
			var resumableState = request.resumableState, renderState = request.renderState;
			if (as && href) {
				switch (as) {
					case "image":
						if (options) {
							var imageSrcSet = options.imageSrcSet;
							var imageSizes = options.imageSizes;
							var fetchPriority = options.fetchPriority;
						}
						var key = imageSrcSet ? imageSrcSet + "\n" + (imageSizes || "") : href;
						if (resumableState.imageResources.hasOwnProperty(key)) return;
						resumableState.imageResources[key] = PRELOAD_NO_CREDS;
						resumableState = renderState.headers;
						var header;
						resumableState && 0 < resumableState.remainingCapacity && "string" !== typeof imageSrcSet && "high" === fetchPriority && (header = getPreloadAsHeader(href, as, options), 0 <= (resumableState.remainingCapacity -= header.length + 2)) ? (renderState.resets.image[key] = PRELOAD_NO_CREDS, resumableState.highImagePreloads && (resumableState.highImagePreloads += ", "), resumableState.highImagePreloads += header) : (resumableState = [], pushLinkImpl(resumableState, assign({
							rel: "preload",
							href: imageSrcSet ? void 0 : href,
							as
						}, options)), "high" === fetchPriority ? renderState.highImagePreloads.add(resumableState) : (renderState.bulkPreloads.add(resumableState), renderState.preloads.images.set(key, resumableState)));
						break;
					case "style":
						if (resumableState.styleResources.hasOwnProperty(href)) return;
						imageSrcSet = [];
						pushLinkImpl(imageSrcSet, assign({
							rel: "preload",
							href,
							as
						}, options));
						resumableState.styleResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [options.crossOrigin, options.integrity];
						renderState.preloads.stylesheets.set(href, imageSrcSet);
						renderState.bulkPreloads.add(imageSrcSet);
						break;
					case "script":
						if (resumableState.scriptResources.hasOwnProperty(href)) return;
						imageSrcSet = [];
						renderState.preloads.scripts.set(href, imageSrcSet);
						renderState.bulkPreloads.add(imageSrcSet);
						pushLinkImpl(imageSrcSet, assign({
							rel: "preload",
							href,
							as
						}, options));
						resumableState.scriptResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [options.crossOrigin, options.integrity];
						break;
					default:
						if (resumableState.unknownResources.hasOwnProperty(as)) {
							if (imageSrcSet = resumableState.unknownResources[as], imageSrcSet.hasOwnProperty(href)) return;
						} else imageSrcSet = {}, resumableState.unknownResources[as] = imageSrcSet;
						imageSrcSet[href] = PRELOAD_NO_CREDS;
						if ((resumableState = renderState.headers) && 0 < resumableState.remainingCapacity && "font" === as && (key = getPreloadAsHeader(href, as, options), 0 <= (resumableState.remainingCapacity -= key.length + 2))) renderState.resets.font[href] = PRELOAD_NO_CREDS, resumableState.fontPreloads && (resumableState.fontPreloads += ", "), resumableState.fontPreloads += key;
						else switch (resumableState = [], href = assign({
							rel: "preload",
							href,
							as
						}, options), pushLinkImpl(resumableState, href), as) {
							case "font":
								renderState.fontPreloads.add(resumableState);
								break;
							default: renderState.bulkPreloads.add(resumableState);
						}
				}
				enqueueFlush(request);
			}
		} else previousDispatcher.L(href, as, options);
	}
	function preloadModule(href, options) {
		var request = currentRequest ? currentRequest : null;
		if (request) {
			var resumableState = request.resumableState, renderState = request.renderState;
			if (href) {
				var as = options && "string" === typeof options.as ? options.as : "script";
				switch (as) {
					case "script":
						if (resumableState.moduleScriptResources.hasOwnProperty(href)) return;
						as = [];
						resumableState.moduleScriptResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [options.crossOrigin, options.integrity];
						renderState.preloads.moduleScripts.set(href, as);
						break;
					default:
						if (resumableState.moduleUnknownResources.hasOwnProperty(as)) {
							var resources = resumableState.moduleUnknownResources[as];
							if (resources.hasOwnProperty(href)) return;
						} else resources = {}, resumableState.moduleUnknownResources[as] = resources;
						as = [];
						resources[href] = PRELOAD_NO_CREDS;
				}
				pushLinkImpl(as, assign({
					rel: "modulepreload",
					href
				}, options));
				renderState.bulkPreloads.add(as);
				enqueueFlush(request);
			}
		} else previousDispatcher.m(href, options);
	}
	function preinitStyle(href, precedence, options) {
		var request = currentRequest ? currentRequest : null;
		if (request) {
			var resumableState = request.resumableState, renderState = request.renderState;
			if (href) {
				precedence = precedence || "default";
				var styleQueue = renderState.styles.get(precedence), resourceState = resumableState.styleResources.hasOwnProperty(href) ? resumableState.styleResources[href] : void 0;
				null !== resourceState && (resumableState.styleResources[href] = null, styleQueue || (styleQueue = {
					precedence: stringToChunk(escapeTextForBrowser(precedence)),
					rules: [],
					hrefs: [],
					sheets: /* @__PURE__ */ new Map()
				}, renderState.styles.set(precedence, styleQueue)), precedence = {
					state: 0,
					props: assign({
						rel: "stylesheet",
						href,
						"data-precedence": precedence
					}, options)
				}, resourceState && (2 === resourceState.length && adoptPreloadCredentials(precedence.props, resourceState), (renderState = renderState.preloads.stylesheets.get(href)) && 0 < renderState.length ? renderState.length = 0 : precedence.state = 1), styleQueue.sheets.set(href, precedence), enqueueFlush(request));
			}
		} else previousDispatcher.S(href, precedence, options);
	}
	function preinitScript(src, options) {
		var request = currentRequest ? currentRequest : null;
		if (request) {
			var resumableState = request.resumableState, renderState = request.renderState;
			if (src) {
				var resourceState = resumableState.scriptResources.hasOwnProperty(src) ? resumableState.scriptResources[src] : void 0;
				null !== resourceState && (resumableState.scriptResources[src] = null, options = assign({
					src,
					async: !0
				}, options), resourceState && (2 === resourceState.length && adoptPreloadCredentials(options, resourceState), src = renderState.preloads.scripts.get(src)) && (src.length = 0), src = [], renderState.scripts.add(src), pushScriptImpl(src, options), enqueueFlush(request));
			}
		} else previousDispatcher.X(src, options);
	}
	function preinitModuleScript(src, options) {
		var request = currentRequest ? currentRequest : null;
		if (request) {
			var resumableState = request.resumableState, renderState = request.renderState;
			if (src) {
				var resourceState = resumableState.moduleScriptResources.hasOwnProperty(src) ? resumableState.moduleScriptResources[src] : void 0;
				null !== resourceState && (resumableState.moduleScriptResources[src] = null, options = assign({
					src,
					type: "module",
					async: !0
				}, options), resourceState && (2 === resourceState.length && adoptPreloadCredentials(options, resourceState), src = renderState.preloads.moduleScripts.get(src)) && (src.length = 0), src = [], renderState.scripts.add(src), pushScriptImpl(src, options), enqueueFlush(request));
			}
		} else previousDispatcher.M(src, options);
	}
	function adoptPreloadCredentials(target, preloadState) {
		target.crossOrigin ??= preloadState[0];
		target.integrity ??= preloadState[1];
	}
	function getPreloadAsHeader(href, as, params) {
		href = ("" + href).replace(regexForHrefInLinkHeaderURLContext, escapeHrefForLinkHeaderURLContextReplacer);
		as = ("" + as).replace(regexForLinkHeaderQuotedParamValueContext, escapeStringForLinkHeaderQuotedParamValueContextReplacer);
		as = "<" + href + ">; rel=preload; as=\"" + as + "\"";
		for (var paramName in params) hasOwnProperty.call(params, paramName) && (href = params[paramName], "string" === typeof href && (as += "; " + paramName.toLowerCase() + "=\"" + ("" + href).replace(regexForLinkHeaderQuotedParamValueContext, escapeStringForLinkHeaderQuotedParamValueContextReplacer) + "\""));
		return as;
	}
	var regexForHrefInLinkHeaderURLContext = /[<>\r\n]/g;
	function escapeHrefForLinkHeaderURLContextReplacer(match) {
		switch (match) {
			case "<": return "%3C";
			case ">": return "%3E";
			case "\n": return "%0A";
			case "\r": return "%0D";
			default: throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
		}
	}
	var regexForLinkHeaderQuotedParamValueContext = /["';,\r\n]/g;
	function escapeStringForLinkHeaderQuotedParamValueContextReplacer(match) {
		switch (match) {
			case "\"": return "%22";
			case "'": return "%27";
			case ";": return "%3B";
			case ",": return "%2C";
			case "\n": return "%0A";
			case "\r": return "%0D";
			default: throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
		}
	}
	function hoistStyleQueueDependency(styleQueue) {
		this.styles.add(styleQueue);
	}
	function hoistStylesheetDependency(stylesheet) {
		this.stylesheets.add(stylesheet);
	}
	function hoistHoistables(parentState, childState) {
		childState.styles.forEach(hoistStyleQueueDependency, parentState);
		childState.stylesheets.forEach(hoistStylesheetDependency, parentState);
		childState.suspenseyImages && (parentState.suspenseyImages = !0);
	}
	function hasSuspenseyContent(hoistableState, flushingInShell) {
		return flushingInShell ? hoistableState.suspenseyImages : 0 < hoistableState.stylesheets.size || hoistableState.suspenseyImages;
	}
	var bind = Function.prototype.bind;
	var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	function getComponentNameFromType(type) {
		if (null == type) return null;
		if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
		if ("string" === typeof type) return type;
		switch (type) {
			case REACT_FRAGMENT_TYPE: return "Fragment";
			case REACT_PROFILER_TYPE: return "Profiler";
			case REACT_STRICT_MODE_TYPE: return "StrictMode";
			case REACT_SUSPENSE_TYPE: return "Suspense";
			case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
			case REACT_ACTIVITY_TYPE: return "Activity";
			case REACT_VIEW_TRANSITION_TYPE: return "ViewTransition";
		}
		if ("object" === typeof type) switch (type.$$typeof) {
			case REACT_PORTAL_TYPE: return "Portal";
			case REACT_CONTEXT_TYPE: return type.displayName || "Context";
			case REACT_CONSUMER_TYPE: return (type._context.displayName || "Context") + ".Consumer";
			case REACT_FORWARD_REF_TYPE:
				var innerType = type.render;
				type = type.displayName;
				type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
				return type;
			case REACT_MEMO_TYPE: return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
			case REACT_LAZY_TYPE:
				innerType = type._payload;
				type = type._init;
				try {
					return getComponentNameFromType(type(innerType));
				} catch (x) {}
		}
		return null;
	}
	var emptyContextObject = {};
	var currentActiveSnapshot = null;
	function popToNearestCommonAncestor(prev, next) {
		if (prev !== next) {
			prev.context._currentValue = prev.parentValue;
			prev = prev.parent;
			var parentNext = next.parent;
			if (null === prev) {
				if (null !== parentNext) throw Error(formatProdErrorMessage(401));
			} else {
				if (null === parentNext) throw Error(formatProdErrorMessage(401));
				popToNearestCommonAncestor(prev, parentNext);
			}
			next.context._currentValue = next.value;
		}
	}
	function popAllPrevious(prev) {
		prev.context._currentValue = prev.parentValue;
		prev = prev.parent;
		null !== prev && popAllPrevious(prev);
	}
	function pushAllNext(next) {
		var parentNext = next.parent;
		null !== parentNext && pushAllNext(parentNext);
		next.context._currentValue = next.value;
	}
	function popPreviousToCommonLevel(prev, next) {
		prev.context._currentValue = prev.parentValue;
		prev = prev.parent;
		if (null === prev) throw Error(formatProdErrorMessage(402));
		prev.depth === next.depth ? popToNearestCommonAncestor(prev, next) : popPreviousToCommonLevel(prev, next);
	}
	function popNextToCommonLevel(prev, next) {
		var parentNext = next.parent;
		if (null === parentNext) throw Error(formatProdErrorMessage(402));
		prev.depth === parentNext.depth ? popToNearestCommonAncestor(prev, parentNext) : popNextToCommonLevel(prev, parentNext);
		next.context._currentValue = next.value;
	}
	function switchContext(newSnapshot) {
		var prev = currentActiveSnapshot;
		prev !== newSnapshot && (null === prev ? pushAllNext(newSnapshot) : null === newSnapshot ? popAllPrevious(prev) : prev.depth === newSnapshot.depth ? popToNearestCommonAncestor(prev, newSnapshot) : prev.depth > newSnapshot.depth ? popPreviousToCommonLevel(prev, newSnapshot) : popNextToCommonLevel(prev, newSnapshot), currentActiveSnapshot = newSnapshot);
	}
	var classComponentUpdater = {
		enqueueSetState: function(inst, payload) {
			inst = inst._reactInternals;
			null !== inst.queue && inst.queue.push(payload);
		},
		enqueueReplaceState: function(inst, payload) {
			inst = inst._reactInternals;
			inst.replace = !0;
			inst.queue = [payload];
		},
		enqueueForceUpdate: function() {}
	};
	var emptyTreeContext = {
		id: 1,
		overflow: ""
	};
	function getTreeId(context) {
		var overflow = context.overflow;
		context = context.id;
		return (context & ~(1 << 32 - clz32(context) - 1)).toString(32) + overflow;
	}
	function pushTreeContext(baseContext, totalChildren, index) {
		var baseIdWithLeadingBit = baseContext.id;
		baseContext = baseContext.overflow;
		var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
		baseIdWithLeadingBit &= ~(1 << baseLength);
		index += 1;
		var length = 32 - clz32(totalChildren) + baseLength;
		if (30 < length) {
			var numberOfOverflowBits = baseLength - baseLength % 5;
			length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
			baseIdWithLeadingBit >>= numberOfOverflowBits;
			baseLength -= numberOfOverflowBits;
			return {
				id: 1 << 32 - clz32(totalChildren) + baseLength | index << baseLength | baseIdWithLeadingBit,
				overflow: length + baseContext
			};
		}
		return {
			id: 1 << length | index << baseLength | baseIdWithLeadingBit,
			overflow: baseContext
		};
	}
	var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
	var log = Math.log;
	var LN2 = Math.LN2;
	function clz32Fallback(x) {
		x >>>= 0;
		return 0 === x ? 32 : 31 - (log(x) / LN2 | 0) | 0;
	}
	function noop() {}
	var SuspenseException = Error(formatProdErrorMessage(460));
	function trackUsedThenable(thenableState, thenable, index) {
		index = thenableState[index];
		void 0 === index ? thenableState.push(thenable) : index !== thenable && (thenable.then(noop, noop), thenable = index);
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected":
				thenableState = thenable.reason;
				if (void 0 === thenableState && !("reason" in thenable)) throw Error(formatProdErrorMessage(600));
				throw thenableState;
			default:
				"string" === typeof thenable.status ? thenable.then(noop, noop) : (thenableState = thenable, thenableState.status = "pending", thenableState.then(function(fulfilledValue) {
					if ("pending" === thenable.status) {
						var fulfilledThenable = thenable;
						fulfilledThenable.status = "fulfilled";
						fulfilledThenable.value = fulfilledValue;
					}
				}, function(error) {
					if ("pending" === thenable.status) {
						var rejectedThenable = thenable;
						rejectedThenable.status = "rejected";
						rejectedThenable.reason = error;
					}
				}));
				switch (thenable.status) {
					case "fulfilled": return thenable.value;
					case "rejected": throw thenable.reason;
				}
				suspendedThenable = thenable;
				throw SuspenseException;
		}
	}
	var suspendedThenable = null;
	function getSuspendedThenable() {
		if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
		var thenable = suspendedThenable;
		suspendedThenable = null;
		return thenable;
	}
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is;
	var currentlyRenderingComponent = null;
	var currentlyRenderingTask = null;
	var currentlyRenderingRequest = null;
	var currentlyRenderingKeyPath = null;
	var firstWorkInProgressHook = null;
	var workInProgressHook = null;
	var isReRender = !1;
	var didScheduleRenderPhaseUpdate = !1;
	var localIdCounter = 0;
	var actionStateCounter = 0;
	var actionStateMatchingIndex = -1;
	var thenableIndexCounter = 0;
	var thenableState = null;
	function createRecoverableError(recoverable) {
		recoverable = recoverable._reason;
		if ("function" === typeof recoverable) try {
			var initializedReason = recoverable();
		} catch ($jscomp$unused$catch) {
			initializedReason = "The reason for browser-only rendering could not be determined because its initializer threw.";
		}
		else initializedReason = recoverable;
		initializedReason = Error(formatProdErrorMessage(603), void 0 === recoverable ? void 0 : { cause: initializedReason });
		Object.defineProperty(initializedReason, REACT_RECOVERABLE_TYPE, { value: !0 });
		return initializedReason;
	}
	function isRecoverableError(error) {
		return "object" !== typeof error || null === error ? !1 : !0 === error[REACT_RECOVERABLE_TYPE];
	}
	function cloneRecoverableErrorAsFatal(recoverableError) {
		var fatalRecoverableError = Error(formatProdErrorMessage(604), hasOwnProperty.call(recoverableError, "cause") ? { cause: recoverableError.cause } : void 0);
		recoverableError = recoverableError.stack;
		if (void 0 !== recoverableError) {
			var frameStart = recoverableError.indexOf("\n");
			fatalRecoverableError.stack = fatalRecoverableError.name + ": " + fatalRecoverableError.message + (-1 === frameStart ? "" : recoverableError.slice(frameStart));
		} else fatalRecoverableError.stack = void 0;
		return fatalRecoverableError;
	}
	var renderPhaseUpdates = null;
	var numberOfReRenders = 0;
	function resolveCurrentlyRenderingComponent() {
		if (null === currentlyRenderingComponent) throw Error(formatProdErrorMessage(321));
		return currentlyRenderingComponent;
	}
	function createHook() {
		if (0 < numberOfReRenders) throw Error(formatProdErrorMessage(312));
		return {
			memoizedState: null,
			queue: null,
			next: null
		};
	}
	function createWorkInProgressHook() {
		null === workInProgressHook ? null === firstWorkInProgressHook ? (isReRender = !1, firstWorkInProgressHook = workInProgressHook = createHook()) : (isReRender = !0, workInProgressHook = firstWorkInProgressHook) : null === workInProgressHook.next ? (isReRender = !1, workInProgressHook = workInProgressHook.next = createHook()) : (isReRender = !0, workInProgressHook = workInProgressHook.next);
		return workInProgressHook;
	}
	function getThenableStateAfterSuspending() {
		var state = thenableState;
		thenableState = null;
		return state;
	}
	function resetHooksState() {
		currentlyRenderingKeyPath = currentlyRenderingRequest = currentlyRenderingTask = currentlyRenderingComponent = null;
		didScheduleRenderPhaseUpdate = !1;
		firstWorkInProgressHook = null;
		numberOfReRenders = 0;
		workInProgressHook = renderPhaseUpdates = null;
	}
	function basicStateReducer(state, action) {
		return "function" === typeof action ? action(state) : action;
	}
	function useReducer(reducer, initialArg, init) {
		currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
		workInProgressHook = createWorkInProgressHook();
		if (isReRender) {
			var queue = workInProgressHook.queue;
			initialArg = queue.dispatch;
			if (null !== renderPhaseUpdates && (init = renderPhaseUpdates.get(queue), void 0 !== init)) {
				renderPhaseUpdates.delete(queue);
				queue = workInProgressHook.memoizedState;
				do
					queue = reducer(queue, init.action), init = init.next;
				while (null !== init);
				workInProgressHook.memoizedState = queue;
				return [queue, initialArg];
			}
			return [workInProgressHook.memoizedState, initialArg];
		}
		reducer = reducer === basicStateReducer ? "function" === typeof initialArg ? initialArg() : initialArg : void 0 !== init ? init(initialArg) : initialArg;
		workInProgressHook.memoizedState = reducer;
		reducer = workInProgressHook.queue = {
			last: null,
			dispatch: null
		};
		reducer = reducer.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, reducer);
		return [workInProgressHook.memoizedState, reducer];
	}
	function useMemo(nextCreate, deps) {
		currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
		workInProgressHook = createWorkInProgressHook();
		deps = void 0 === deps ? null : deps;
		if (null !== workInProgressHook) {
			var prevState = workInProgressHook.memoizedState;
			if (null !== prevState && null !== deps) {
				var prevDeps = prevState[1];
				a: if (null === prevDeps) prevDeps = !1;
				else {
					for (var i = 0; i < prevDeps.length && i < deps.length; i++) if (!objectIs(deps[i], prevDeps[i])) {
						prevDeps = !1;
						break a;
					}
					prevDeps = !0;
				}
				if (prevDeps) return prevState[0];
			}
		}
		nextCreate = nextCreate();
		workInProgressHook.memoizedState = [nextCreate, deps];
		return nextCreate;
	}
	function dispatchAction(componentIdentity, queue, action) {
		if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
		if (componentIdentity === currentlyRenderingComponent) if (didScheduleRenderPhaseUpdate = !0, componentIdentity = {
			action,
			next: null
		}, null === renderPhaseUpdates && (renderPhaseUpdates = /* @__PURE__ */ new Map()), action = renderPhaseUpdates.get(queue), void 0 === action) renderPhaseUpdates.set(queue, componentIdentity);
		else {
			for (queue = action; null !== queue.next;) queue = queue.next;
			queue.next = componentIdentity;
		}
	}
	function throwOnUseEffectEventCall() {
		throw Error(formatProdErrorMessage(440));
	}
	function unsupportedStartTransition() {
		throw Error(formatProdErrorMessage(394));
	}
	function unsupportedSetOptimisticState() {
		throw Error(formatProdErrorMessage(479));
	}
	function useActionState(action, initialState, permalink) {
		resolveCurrentlyRenderingComponent();
		var actionStateHookIndex = actionStateCounter++, request = currentlyRenderingRequest;
		if ("function" === typeof action.$$FORM_ACTION) {
			var nextPostbackStateKey = null, componentKeyPath = currentlyRenderingKeyPath;
			request = request.formState;
			var isSignatureEqual = action.$$IS_SIGNATURE_EQUAL;
			if (null !== request && "function" === typeof isSignatureEqual) {
				var postbackKey = request[1];
				isSignatureEqual.call(action, request[2], request[3]) && (nextPostbackStateKey = void 0 !== permalink ? "p" + permalink : "k" + murmurhash3_32_gc(JSON.stringify([
					componentKeyPath,
					null,
					actionStateHookIndex
				]), 0), postbackKey === nextPostbackStateKey && (actionStateMatchingIndex = actionStateHookIndex, initialState = request[0]));
			}
			var boundAction = action.bind(null, initialState);
			action = function(payload) {
				boundAction(payload);
			};
			"function" === typeof boundAction.$$FORM_ACTION && (action.$$FORM_ACTION = function(prefix) {
				prefix = boundAction.$$FORM_ACTION(prefix);
				void 0 !== permalink && (permalink += "", prefix.action = permalink);
				var formData = prefix.data;
				formData && (null === nextPostbackStateKey && (nextPostbackStateKey = void 0 !== permalink ? "p" + permalink : "k" + murmurhash3_32_gc(JSON.stringify([
					componentKeyPath,
					null,
					actionStateHookIndex
				]), 0)), formData.append("$ACTION_KEY", nextPostbackStateKey));
				return prefix;
			});
			return [
				initialState,
				action,
				!1
			];
		}
		var boundAction$22 = action.bind(null, initialState);
		return [
			initialState,
			function(payload) {
				boundAction$22(payload);
			},
			!1
		];
	}
	function unwrapThenable(thenable) {
		var index = thenableIndexCounter;
		thenableIndexCounter += 1;
		null === thenableState && (thenableState = []);
		return trackUsedThenable(thenableState, thenable, index);
	}
	function unsupportedRefresh() {
		throw Error(formatProdErrorMessage(393));
	}
	var HooksDispatcher = {
		readContext: function(context) {
			return context._currentValue;
		},
		use: function(usable) {
			if (null !== usable && "object" === typeof usable) {
				if ("function" === typeof usable.then) return unwrapThenable(usable);
				if (usable.$$typeof === REACT_RECOVERABLE_TYPE) throw createRecoverableError(usable);
				if (usable.$$typeof === REACT_CONTEXT_TYPE) return usable._currentValue;
			}
			throw Error(formatProdErrorMessage(438, String(usable)));
		},
		useContext: function(context) {
			resolveCurrentlyRenderingComponent();
			return context._currentValue;
		},
		useMemo,
		useReducer,
		useRef: function(initialValue) {
			currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
			workInProgressHook = createWorkInProgressHook();
			var previousRef = workInProgressHook.memoizedState;
			return null === previousRef ? (initialValue = { current: initialValue }, workInProgressHook.memoizedState = initialValue) : previousRef;
		},
		useState: function(initialState) {
			return useReducer(basicStateReducer, initialState);
		},
		useInsertionEffect: noop,
		useLayoutEffect: noop,
		useCallback: function(callback, deps) {
			return useMemo(function() {
				return callback;
			}, deps);
		},
		useImperativeHandle: noop,
		useEffect: noop,
		useDebugValue: noop,
		useDeferredValue: function(value, initialValue) {
			resolveCurrentlyRenderingComponent();
			return void 0 !== initialValue ? initialValue : value;
		},
		useTransition: function() {
			resolveCurrentlyRenderingComponent();
			return [!1, unsupportedStartTransition];
		},
		useId: function() {
			var treeId = getTreeId(currentlyRenderingTask.treeContext), resumableState = currentResumableState;
			if (null === resumableState) throw Error(formatProdErrorMessage(404));
			return makeId(resumableState, treeId, localIdCounter++);
		},
		useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
			if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
			return getServerSnapshot();
		},
		useOptimistic: function(passthrough) {
			resolveCurrentlyRenderingComponent();
			return [passthrough, unsupportedSetOptimisticState];
		},
		useActionState,
		useFormState: useActionState,
		useHostTransitionStatus: function() {
			resolveCurrentlyRenderingComponent();
			return sharedNotPendingObject;
		},
		useMemoCache: function(size) {
			for (var data = Array(size), i = 0; i < size; i++) data[i] = REACT_MEMO_CACHE_SENTINEL;
			return data;
		},
		useCacheRefresh: function() {
			return unsupportedRefresh;
		},
		useEffectEvent: function() {
			return throwOnUseEffectEventCall;
		}
	};
	var currentResumableState = null;
	var DefaultAsyncDispatcher = {
		getCacheForType: function() {
			throw Error(formatProdErrorMessage(248));
		},
		cacheSignal: function() {
			throw Error(formatProdErrorMessage(248));
		}
	};
	var prefix;
	var suffix;
	function describeBuiltInComponentFrame(name) {
		if (void 0 === prefix) try {
			throw Error();
		} catch (x) {
			var match = x.stack.trim().match(/\n( *(at )?)/);
			prefix = match && match[1] || "";
			suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + prefix + name + suffix;
	}
	var reentry = !1;
	function describeNativeComponentFrame(fn, construct) {
		if (!fn || reentry) return "";
		reentry = !0;
		var previousPrepareStackTrace = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var RunInRootFrame = { DetermineComponentFrameRoot: function() {
				try {
					if (construct) {
						var Fake = function() {
							throw Error();
						};
						Object.defineProperty(Fake.prototype, "props", { set: function() {
							throw Error();
						} });
						if ("object" === typeof Reflect && Reflect.construct) {
							try {
								Reflect.construct(Fake, []);
							} catch (x) {
								var control = x;
							}
							Reflect.construct(fn, [], Fake);
						} else {
							try {
								Fake.call();
							} catch (x$24) {
								control = x$24;
							}
							Fake = !1;
							try {
								var prevProps = Object.getOwnPropertyDescriptor(fn.prototype, "props");
								Object.defineProperty(fn.prototype, "props", {
									configurable: !0,
									set: function() {
										throw Error();
									}
								});
								Fake = !0;
								new fn();
							} finally {
								Fake && (void 0 !== prevProps ? Object.defineProperty(fn.prototype, "props", prevProps) : delete fn.prototype.props);
							}
						}
					} else {
						try {
							throw Error();
						} catch (x$25) {
							control = x$25;
						}
						(Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
					}
				} catch (sample) {
					if (sample && control && "string" === typeof sample.stack) return [sample.stack, control.stack];
				}
				return [null, null];
			} };
			RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
			namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
			if (sampleStack && controlStack) {
				var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
				for (namePropDescriptor = RunInRootFrame = 0; RunInRootFrame < sampleLines.length && !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot");) RunInRootFrame++;
				for (; namePropDescriptor < controlLines.length && !controlLines[namePropDescriptor].includes("DetermineComponentFrameRoot");) namePropDescriptor++;
				if (RunInRootFrame === sampleLines.length || namePropDescriptor === controlLines.length) for (RunInRootFrame = sampleLines.length - 1, namePropDescriptor = controlLines.length - 1; 1 <= RunInRootFrame && 0 <= namePropDescriptor && sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor];) namePropDescriptor--;
				for (; 1 <= RunInRootFrame && 0 <= namePropDescriptor; RunInRootFrame--, namePropDescriptor--) if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
					if (1 !== RunInRootFrame || 1 !== namePropDescriptor) do
						if (RunInRootFrame--, namePropDescriptor--, 0 > namePropDescriptor || sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
							var frame = "\n" + sampleLines[RunInRootFrame].replace(" at new ", " at ");
							fn.displayName && frame.includes("<anonymous>") && (frame = frame.replace("<anonymous>", fn.displayName));
							return frame;
						}
					while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
					break;
				}
			}
		} finally {
			reentry = !1, Error.prepareStackTrace = previousPrepareStackTrace;
		}
		return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(previousPrepareStackTrace) : "";
	}
	function describeComponentStackByType(type) {
		if ("string" === typeof type) return describeBuiltInComponentFrame(type);
		if ("function" === typeof type) return type.prototype && type.prototype.isReactComponent ? describeNativeComponentFrame(type, !0) : describeNativeComponentFrame(type, !1);
		if ("object" === typeof type && null !== type) {
			switch (type.$$typeof) {
				case REACT_FORWARD_REF_TYPE: return describeNativeComponentFrame(type.render, !1);
				case REACT_MEMO_TYPE: return describeNativeComponentFrame(type.type, !1);
				case REACT_LAZY_TYPE:
					var lazyComponent = type, payload = lazyComponent._payload;
					lazyComponent = lazyComponent._init;
					try {
						type = lazyComponent(payload);
					} catch (x) {
						return describeBuiltInComponentFrame("Lazy");
					}
					return describeComponentStackByType(type);
			}
			if ("string" === typeof type.name) {
				a: {
					payload = type.name;
					lazyComponent = type.env;
					var location = type.debugLocation;
					if (null != location && (type = Error.prepareStackTrace, Error.prepareStackTrace = void 0, location = location.stack, Error.prepareStackTrace = type, location.startsWith("Error: react-stack-top-frame\n") && (location = location.slice(29)), type = location.indexOf("\n"), -1 !== type && (location = location.slice(type + 1)), type = location.indexOf("react_stack_bottom_frame"), -1 !== type && (type = location.lastIndexOf("\n", type)), type = -1 !== type ? location = location.slice(0, type) : "", location = type.lastIndexOf("\n"), type = -1 === location ? type : type.slice(location + 1), -1 !== type.indexOf(payload))) {
						payload = "\n" + type;
						break a;
					}
					payload = describeBuiltInComponentFrame(payload + (lazyComponent ? " [" + lazyComponent + "]" : ""));
				}
				return payload;
			}
		}
		switch (type) {
			case REACT_SUSPENSE_LIST_TYPE: return describeBuiltInComponentFrame("SuspenseList");
			case REACT_SUSPENSE_TYPE: return describeBuiltInComponentFrame("Suspense");
			case REACT_VIEW_TRANSITION_TYPE: return describeBuiltInComponentFrame("ViewTransition");
		}
		return "";
	}
	function getViewTransitionClassName(defaultClass, eventClass) {
		defaultClass = null == defaultClass || "string" === typeof defaultClass ? defaultClass : defaultClass.default;
		eventClass = null == eventClass || "string" === typeof eventClass ? eventClass : eventClass.default;
		return null == eventClass ? "auto" === defaultClass ? null : defaultClass : "auto" === eventClass ? null : eventClass;
	}
	function isEligibleForOutlining(request, boundary) {
		return (500 < boundary.byteSize || hasSuspenseyContent(boundary.contentState, !1) || boundary.defer) && null === boundary.preamble;
	}
	function defaultErrorHandler(error) {
		if ("object" === typeof error && null !== error && "string" === typeof error.environmentName) {
			var JSCompiler_inline_result = error.environmentName;
			error = [error].slice(0);
			"string" === typeof error[0] ? error.splice(0, 1, "%c%s%c " + error[0], "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + JSCompiler_inline_result + " ", "") : error.splice(0, 0, "%c%s%c", "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + JSCompiler_inline_result + " ", "");
			error.unshift(console);
			JSCompiler_inline_result = bind.apply(console.error, error);
			JSCompiler_inline_result();
		} else console.error(error);
		return null;
	}
	function RequestInstance(resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onBrowserBailout, onAllReady, onShellReady, onShellError, onFatalError, formState) {
		var abortSet = /* @__PURE__ */ new Set();
		this.destination = null;
		this.flushScheduled = !1;
		this.resumableState = resumableState;
		this.renderState = renderState;
		this.rootFormatContext = rootFormatContext;
		this.progressiveChunkSize = void 0 === progressiveChunkSize ? 12800 : progressiveChunkSize;
		this.status = 10;
		this.fatalError = null;
		this.aborted = !1;
		this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0;
		this.completedPreambleSegments = this.completedRootSegment = null;
		this.byteSize = 0;
		this.abortableTasks = abortSet;
		this.pingedTasks = [];
		this.currentTask = null;
		this.clientRenderedBoundaries = [];
		this.completedBoundaries = [];
		this.partialBoundaries = [];
		this.postponedState = this.trackedPostpones = null;
		this.onError = void 0 === onError ? defaultErrorHandler : onError;
		this.onBrowserBailout = void 0 === onBrowserBailout ? noop : onBrowserBailout;
		this.onAllReady = void 0 === onAllReady ? noop : onAllReady;
		this.onShellReady = void 0 === onShellReady ? noop : onShellReady;
		this.onShellError = void 0 === onShellError ? noop : onShellError;
		this.onFatalError = void 0 === onFatalError ? noop : onFatalError;
		this.renderLifetimeController = null;
		this.formState = void 0 === formState ? null : formState;
	}
	function createRequest(children, resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onBrowserBailout, onAllReady, onShellReady, onShellError, onFatalError, formState) {
		resumableState = new RequestInstance(resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onBrowserBailout, onAllReady, onShellReady, onShellError, onFatalError, formState);
		renderState = createPendingSegment(resumableState, 0, null, rootFormatContext, !1, !1);
		renderState.parentFlushed = !0;
		children = createRenderTask(resumableState, null, children, -1, null, renderState, null, null, resumableState.abortableTasks, null, rootFormatContext, null, emptyTreeContext, null, null);
		pushComponentStack(children);
		resumableState.pingedTasks.push(children);
		return resumableState;
	}
	function createPrerenderRequest(children, resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onBrowserBailout, onAllReady, onShellReady, onShellError, onFatalError) {
		children = createRequest(children, resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onBrowserBailout, onAllReady, onShellReady, onShellError, onFatalError, void 0);
		children.trackedPostpones = {
			workingMap: /* @__PURE__ */ new Map(),
			rootNodes: [],
			rootSlots: null
		};
		return children;
	}
	function resumeRequest(children, postponedState, renderState, onError, onBrowserBailout, onAllReady, onShellReady, onShellError, onFatalError) {
		renderState = new RequestInstance(postponedState.resumableState, renderState, postponedState.rootFormatContext, postponedState.progressiveChunkSize, onError, onBrowserBailout, onAllReady, onShellReady, onShellError, onFatalError, null);
		renderState.nextSegmentId = postponedState.nextSegmentId;
		if ("number" === typeof postponedState.replaySlots) return onError = createPendingSegment(renderState, 0, null, postponedState.rootFormatContext, !1, !1), onError.parentFlushed = !0, children = createRenderTask(renderState, null, children, -1, null, onError, null, null, renderState.abortableTasks, null, postponedState.rootFormatContext, null, emptyTreeContext, null, null), pushComponentStack(children), renderState.pingedTasks.push(children), renderState;
		children = createReplayTask(renderState, null, {
			nodes: postponedState.replayNodes,
			slots: postponedState.replaySlots,
			pendingTasks: 0
		}, children, -1, null, null, renderState.abortableTasks, null, postponedState.rootFormatContext, null, emptyTreeContext, null, null);
		pushComponentStack(children);
		renderState.pingedTasks.push(children);
		return renderState;
	}
	function resumeAndPrerenderRequest(children, postponedState, renderState, onError, onBrowserBailout, onAllReady, onShellReady, onShellError, onFatalError) {
		children = resumeRequest(children, postponedState, renderState, onError, onBrowserBailout, onAllReady, onShellReady, onShellError, onFatalError);
		children.trackedPostpones = {
			workingMap: /* @__PURE__ */ new Map(),
			rootNodes: [],
			rootSlots: null
		};
		return children;
	}
	var currentRequest = null;
	function pingTask(request, task) {
		request.pingedTasks.push(task);
		1 === request.pingedTasks.length && (request.flushScheduled = null !== request.destination, null !== request.trackedPostpones || 10 === request.status ? scheduleMicrotask(function() {
			return performWork(request);
		}) : scheduleWork(function() {
			return performWork(request);
		}));
	}
	function createSuspenseBoundary(request, row, fallbackAbortableTasks, preamble, defer) {
		fallbackAbortableTasks = {
			status: 0,
			rootSegmentID: -1,
			parentFlushed: !1,
			pendingTasks: 0,
			row,
			completedSegments: [],
			byteSize: 0,
			defer,
			fallbackAbortableTasks,
			errorDigest: null,
			contentState: createHoistableState(),
			fallbackState: createHoistableState(),
			preamble,
			tracked: null
		};
		null !== row && (row.pendingTasks++, preamble = row.boundaries, null !== preamble && (request.allPendingTasks++, fallbackAbortableTasks.pendingTasks++, preamble.push(fallbackAbortableTasks)), request = row.inheritedHoistables, null !== request && hoistHoistables(fallbackAbortableTasks.contentState, request));
		return fallbackAbortableTasks;
	}
	function createRenderTask(request, thenableState, node, childIndex, blockedBoundary, blockedSegment, blockedPreamble, hoistableState, abortSet, keyPath, formatContext, context, treeContext, row, componentStack) {
		request.allPendingTasks++;
		null === blockedBoundary ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
		null !== row && row.pendingTasks++;
		var task = {
			replay: null,
			node,
			childIndex,
			ping: {
				resolve: function() {
					return pingTask(request, task);
				},
				reject: function(error) {
					request.aborted ? task.abortSet.delete(task) && finishAbortedTask(task, request, error) : pingTask(request, task);
				}
			},
			blockedBoundary,
			blockedSegment,
			blockedPreamble,
			hoistableState,
			abortSet,
			keyPath,
			formatContext,
			context,
			treeContext,
			row,
			componentStack,
			thenableState
		};
		abortSet.add(task);
		return task;
	}
	function createReplayTask(request, thenableState, replay, node, childIndex, blockedBoundary, hoistableState, abortSet, keyPath, formatContext, context, treeContext, row, componentStack) {
		request.allPendingTasks++;
		null === blockedBoundary ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
		null !== row && row.pendingTasks++;
		replay.pendingTasks++;
		var task = {
			replay,
			node,
			childIndex,
			ping: {
				resolve: function() {
					return pingTask(request, task);
				},
				reject: function(error) {
					request.aborted ? task.abortSet.delete(task) && finishAbortedTask(task, request, error) : pingTask(request, task);
				}
			},
			blockedBoundary,
			blockedSegment: null,
			blockedPreamble: null,
			hoistableState,
			abortSet,
			keyPath,
			formatContext,
			context,
			treeContext,
			row,
			componentStack,
			thenableState
		};
		abortSet.add(task);
		return task;
	}
	function createPendingSegment(request, index, boundary, parentFormatContext, lastPushedText, textEmbedded) {
		return {
			status: 0,
			parentFlushed: !1,
			id: -1,
			index,
			chunks: [],
			children: [],
			preambleChildren: [],
			parentFormatContext,
			boundary,
			lastPushedText,
			textEmbedded
		};
	}
	function pushComponentStack(task) {
		var node = task.node;
		if ("object" === typeof node && null !== node) switch (node.$$typeof) {
			case REACT_ELEMENT_TYPE: task.componentStack = {
				parent: task.componentStack,
				type: node.type
			};
		}
	}
	function replaceSuspenseComponentStackWithSuspenseFallbackStack(componentStack) {
		return null === componentStack ? null : {
			parent: componentStack.parent,
			type: "Suspense Fallback"
		};
	}
	function getThrownInfo(node$jscomp$0) {
		var errorInfo = {};
		node$jscomp$0 && Object.defineProperty(errorInfo, "componentStack", {
			configurable: !0,
			enumerable: !0,
			get: function() {
				try {
					var info = "", node = node$jscomp$0;
					do
						info += describeComponentStackByType(node.type), node = node.parent;
					while (node);
					var JSCompiler_inline_result = info;
				} catch (x) {
					JSCompiler_inline_result = "\nError generating stack: " + x.message + "\n" + x.stack;
				}
				Object.defineProperty(errorInfo, "componentStack", { value: JSCompiler_inline_result });
				return JSCompiler_inline_result;
			}
		});
		return errorInfo;
	}
	function logRecoverableError(request, error, errorInfo) {
		if (isRecoverableError(error)) return request = request.onBrowserBailout, request(error, errorInfo), "";
		request = request.onError;
		error = request(error, errorInfo);
		if (null == error || "string" === typeof error) return "" === error ? void 0 : error;
	}
	function fatalError(request, error) {
		var onShellError = request.onShellError, onFatalError = request.onFatalError;
		0 !== request.pendingRootTasks && onShellError(error);
		onFatalError(error);
		endRenderLifetime(request);
		null !== request.destination ? (request.status = 13, closeWithError(request.destination, error)) : (request.status = 12, request.aborted || (request.fatalError = error));
	}
	function finishSuspenseListRow(request, row) {
		unblockSuspenseListRow(request, row.next, row.hoistables);
	}
	function unblockSuspenseListRow(request, unblockedRow, inheritedHoistables) {
		for (; null !== unblockedRow;) {
			null !== inheritedHoistables && (hoistHoistables(unblockedRow.hoistables, inheritedHoistables), unblockedRow.inheritedHoistables = inheritedHoistables);
			var unblockedBoundaries = unblockedRow.boundaries;
			if (null !== unblockedBoundaries) {
				unblockedRow.boundaries = null;
				for (var i = 0; i < unblockedBoundaries.length; i++) {
					var unblockedBoundary = unblockedBoundaries[i];
					null !== inheritedHoistables && hoistHoistables(unblockedBoundary.contentState, inheritedHoistables);
					finishedTask(request, unblockedBoundary, null, null);
				}
			}
			unblockedRow.pendingTasks--;
			if (0 < unblockedRow.pendingTasks) break;
			inheritedHoistables = unblockedRow.hoistables;
			unblockedRow = unblockedRow.next;
		}
	}
	function tryToResolveTogetherRow(request, togetherRow) {
		var boundaries = togetherRow.boundaries;
		if (null !== boundaries && togetherRow.pendingTasks === boundaries.length) {
			for (var allCompleteAndInlinable = !0, i = 0; i < boundaries.length; i++) {
				var rowBoundary = boundaries[i];
				if (1 !== rowBoundary.pendingTasks || rowBoundary.parentFlushed || isEligibleForOutlining(request, rowBoundary)) {
					allCompleteAndInlinable = !1;
					break;
				}
			}
			allCompleteAndInlinable && unblockSuspenseListRow(request, togetherRow, togetherRow.hoistables);
		}
	}
	function createSuspenseListRow(previousRow) {
		var newRow = {
			pendingTasks: 1,
			boundaries: null,
			hoistables: createHoistableState(),
			inheritedHoistables: null,
			together: !1,
			next: null
		};
		null !== previousRow && 0 < previousRow.pendingTasks && (newRow.pendingTasks++, newRow.boundaries = [], previousRow.next = newRow);
		return newRow;
	}
	function renderSuspenseListRows(request, task, keyPath, rows, revealOrder) {
		var prevKeyPath = task.keyPath, prevTreeContext = task.treeContext, prevRow = task.row;
		task.keyPath = keyPath;
		keyPath = rows.length;
		var previousSuspenseListRow = null;
		if (null !== task.replay) {
			var resumeSlots = task.replay.slots;
			if (null !== resumeSlots && "object" === typeof resumeSlots) for (var n = 0; n < keyPath; n++) {
				var i = "backwards" !== revealOrder && "unstable_legacy-backwards" !== revealOrder ? n : keyPath - 1 - n, node = rows[i];
				task.row = previousSuspenseListRow = createSuspenseListRow(previousSuspenseListRow);
				task.treeContext = pushTreeContext(prevTreeContext, keyPath, i);
				var resumeSegmentID = resumeSlots[i];
				"number" === typeof resumeSegmentID ? (resumeNode(request, task, resumeSegmentID, node, i), delete resumeSlots[i]) : renderNode(request, task, node, i);
				0 === --previousSuspenseListRow.pendingTasks && finishSuspenseListRow(request, previousSuspenseListRow);
			}
			else for (resumeSlots = 0; resumeSlots < keyPath; resumeSlots++) n = "backwards" !== revealOrder && "unstable_legacy-backwards" !== revealOrder ? resumeSlots : keyPath - 1 - resumeSlots, i = rows[n], task.row = previousSuspenseListRow = createSuspenseListRow(previousSuspenseListRow), task.treeContext = pushTreeContext(prevTreeContext, keyPath, n), renderNode(request, task, i, n), 0 === --previousSuspenseListRow.pendingTasks && finishSuspenseListRow(request, previousSuspenseListRow);
		} else if ("backwards" !== revealOrder && "unstable_legacy-backwards" !== revealOrder) for (revealOrder = 0; revealOrder < keyPath; revealOrder++) resumeSlots = rows[revealOrder], task.row = previousSuspenseListRow = createSuspenseListRow(previousSuspenseListRow), task.treeContext = pushTreeContext(prevTreeContext, keyPath, revealOrder), renderNode(request, task, resumeSlots, revealOrder), 0 === --previousSuspenseListRow.pendingTasks && finishSuspenseListRow(request, previousSuspenseListRow);
		else {
			resumeSlots = task.blockedSegment;
			n = resumeSlots.children.length;
			i = resumeSlots.chunks.length;
			for (node = 0; node < keyPath; node++) {
				resumeSegmentID = "unstable_legacy-backwards" === revealOrder ? keyPath - 1 - node : node;
				var node$40 = rows[resumeSegmentID];
				task.row = previousSuspenseListRow = createSuspenseListRow(previousSuspenseListRow);
				task.treeContext = pushTreeContext(prevTreeContext, keyPath, resumeSegmentID);
				var newSegment = createPendingSegment(request, i, null, task.formatContext, 0 === resumeSegmentID ? resumeSlots.lastPushedText : !0, !0);
				resumeSlots.children.splice(n, 0, newSegment);
				task.blockedSegment = newSegment;
				try {
					renderNode(request, task, node$40, resumeSegmentID), newSegment.lastPushedText && newSegment.textEmbedded && newSegment.chunks.push(textSeparator), newSegment.status = 1, finishedSegment(request, task.blockedBoundary, newSegment), 0 === --previousSuspenseListRow.pendingTasks && finishSuspenseListRow(request, previousSuspenseListRow);
				} catch (thrownValue) {
					throw newSegment.status = request.aborted ? 3 : 4, thrownValue;
				}
			}
			task.blockedSegment = resumeSlots;
			resumeSlots.lastPushedText = !1;
		}
		null !== prevRow && null !== previousSuspenseListRow && 0 < previousSuspenseListRow.pendingTasks && (prevRow.pendingTasks++, previousSuspenseListRow.next = prevRow);
		task.treeContext = prevTreeContext;
		task.row = prevRow;
		task.keyPath = prevKeyPath;
	}
	function renderWithHooks(request, task, keyPath, Component, props, secondArg) {
		var prevThenableState = task.thenableState;
		task.thenableState = null;
		currentlyRenderingComponent = {};
		currentlyRenderingTask = task;
		currentlyRenderingRequest = request;
		currentlyRenderingKeyPath = keyPath;
		actionStateCounter = localIdCounter = 0;
		actionStateMatchingIndex = -1;
		thenableIndexCounter = 0;
		thenableState = prevThenableState;
		for (request = Component(props, secondArg); didScheduleRenderPhaseUpdate;) didScheduleRenderPhaseUpdate = !1, actionStateCounter = localIdCounter = 0, actionStateMatchingIndex = -1, thenableIndexCounter = 0, numberOfReRenders += 1, workInProgressHook = null, request = Component(props, secondArg);
		resetHooksState();
		return request;
	}
	function finishFunctionComponent(request, task, keyPath, children, hasId, actionStateCount, actionStateMatchingIndex) {
		var didEmitActionStateMarkers = !1;
		if (0 !== actionStateCount && null !== request.formState) {
			var segment = task.blockedSegment;
			if (null !== segment) {
				didEmitActionStateMarkers = !0;
				segment = segment.chunks;
				for (var i = 0; i < actionStateCount; i++) i === actionStateMatchingIndex ? segment.push(formStateMarkerIsMatching) : segment.push(formStateMarkerIsNotMatching);
			}
		}
		actionStateCount = task.keyPath;
		task.keyPath = keyPath;
		hasId ? (keyPath = task.treeContext, task.treeContext = pushTreeContext(keyPath, 1, 0), renderNode(request, task, children, -1), task.treeContext = keyPath) : didEmitActionStateMarkers ? renderNode(request, task, children, -1) : renderNodeDestructive(request, task, children, -1);
		task.keyPath = actionStateCount;
	}
	function renderElement(request, task, keyPath, type, props, ref) {
		if ("function" === typeof type) if (type.prototype && type.prototype.isReactComponent) {
			var newProps = props;
			if ("ref" in props) {
				newProps = {};
				for (var propName in props) "ref" !== propName && (newProps[propName] = props[propName]);
			}
			var defaultProps = type.defaultProps;
			if (defaultProps) {
				newProps === props && (newProps = assign({}, newProps, props));
				for (var propName$45 in defaultProps) void 0 === newProps[propName$45] && (newProps[propName$45] = defaultProps[propName$45]);
			}
			var JSCompiler_inline_result = newProps;
			var context = emptyContextObject, contextType = type.contextType;
			"object" === typeof contextType && null !== contextType && (context = contextType._currentValue);
			var JSCompiler_inline_result$jscomp$0 = new type(JSCompiler_inline_result, context);
			var initialState = void 0 !== JSCompiler_inline_result$jscomp$0.state ? JSCompiler_inline_result$jscomp$0.state : null;
			JSCompiler_inline_result$jscomp$0.updater = classComponentUpdater;
			JSCompiler_inline_result$jscomp$0.props = JSCompiler_inline_result;
			JSCompiler_inline_result$jscomp$0.state = initialState;
			var internalInstance = {
				queue: [],
				replace: !1
			};
			JSCompiler_inline_result$jscomp$0._reactInternals = internalInstance;
			var contextType$jscomp$0 = type.contextType;
			JSCompiler_inline_result$jscomp$0.context = "object" === typeof contextType$jscomp$0 && null !== contextType$jscomp$0 ? contextType$jscomp$0._currentValue : emptyContextObject;
			var getDerivedStateFromProps = type.getDerivedStateFromProps;
			if ("function" === typeof getDerivedStateFromProps) {
				var partialState = getDerivedStateFromProps(JSCompiler_inline_result, initialState);
				JSCompiler_inline_result$jscomp$0.state = null === partialState || void 0 === partialState ? initialState : assign({}, initialState, partialState);
			}
			if ("function" !== typeof type.getDerivedStateFromProps && "function" !== typeof JSCompiler_inline_result$jscomp$0.getSnapshotBeforeUpdate && ("function" === typeof JSCompiler_inline_result$jscomp$0.UNSAFE_componentWillMount || "function" === typeof JSCompiler_inline_result$jscomp$0.componentWillMount)) {
				var oldState = JSCompiler_inline_result$jscomp$0.state;
				"function" === typeof JSCompiler_inline_result$jscomp$0.componentWillMount && JSCompiler_inline_result$jscomp$0.componentWillMount();
				"function" === typeof JSCompiler_inline_result$jscomp$0.UNSAFE_componentWillMount && JSCompiler_inline_result$jscomp$0.UNSAFE_componentWillMount();
				oldState !== JSCompiler_inline_result$jscomp$0.state && classComponentUpdater.enqueueReplaceState(JSCompiler_inline_result$jscomp$0, JSCompiler_inline_result$jscomp$0.state, null);
				if (null !== internalInstance.queue && 0 < internalInstance.queue.length) {
					var oldQueue = internalInstance.queue, oldReplace = internalInstance.replace;
					internalInstance.queue = null;
					internalInstance.replace = !1;
					if (oldReplace && 1 === oldQueue.length) JSCompiler_inline_result$jscomp$0.state = oldQueue[0];
					else {
						for (var nextState = oldReplace ? oldQueue[0] : JSCompiler_inline_result$jscomp$0.state, dontMutate = !0, i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
							var partial = oldQueue[i], partialState$jscomp$0 = "function" === typeof partial ? partial.call(JSCompiler_inline_result$jscomp$0, nextState, JSCompiler_inline_result, void 0) : partial;
							null != partialState$jscomp$0 && (dontMutate ? (dontMutate = !1, nextState = assign({}, nextState, partialState$jscomp$0)) : assign(nextState, partialState$jscomp$0));
						}
						JSCompiler_inline_result$jscomp$0.state = nextState;
					}
				} else internalInstance.queue = null;
			}
			var nextChildren = JSCompiler_inline_result$jscomp$0.render();
			if (request.aborted) throw null;
			var prevKeyPath = task.keyPath;
			task.keyPath = keyPath;
			renderNodeDestructive(request, task, nextChildren, -1);
			task.keyPath = prevKeyPath;
		} else {
			var value = renderWithHooks(request, task, keyPath, type, props, void 0);
			if (request.aborted) throw null;
			finishFunctionComponent(request, task, keyPath, value, 0 !== localIdCounter, actionStateCounter, actionStateMatchingIndex);
		}
		else if ("string" === typeof type) {
			var segment = task.blockedSegment;
			if (null === segment) {
				var children = props.children, prevContext = task.formatContext, prevKeyPath$jscomp$0 = task.keyPath;
				task.formatContext = getChildFormatContext(prevContext, type, props);
				task.keyPath = keyPath;
				renderNode(request, task, children, -1);
				task.formatContext = prevContext;
				task.keyPath = prevKeyPath$jscomp$0;
			} else {
				var children$42 = pushStartInstance(segment.chunks, type, props, request.resumableState, request.renderState, task.blockedPreamble, task.hoistableState, task.formatContext, segment.lastPushedText);
				segment.lastPushedText = !1;
				var prevContext$43 = task.formatContext, prevKeyPath$44 = task.keyPath;
				task.keyPath = keyPath;
				if (3 === (task.formatContext = getChildFormatContext(prevContext$43, type, props)).insertionMode) {
					var preambleSegment = createPendingSegment(request, 0, null, task.formatContext, !1, !1);
					segment.preambleChildren.push(preambleSegment);
					task.blockedSegment = preambleSegment;
					try {
						renderNode(request, task, children$42, -1), preambleSegment.lastPushedText && preambleSegment.textEmbedded && preambleSegment.chunks.push(textSeparator), preambleSegment.status = 1, finishedSegment(request, task.blockedBoundary, preambleSegment);
					} finally {
						task.blockedSegment = segment;
					}
				} else renderNode(request, task, children$42, -1);
				task.formatContext = prevContext$43;
				task.keyPath = prevKeyPath$44;
				a: {
					var target = segment.chunks, resumableState = request.resumableState;
					switch (type) {
						case "title":
						case "style":
						case "script":
						case "area":
						case "base":
						case "br":
						case "col":
						case "embed":
						case "hr":
						case "img":
						case "input":
						case "keygen":
						case "link":
						case "meta":
						case "param":
						case "source":
						case "track":
						case "wbr": break a;
						case "body":
							if (1 >= prevContext$43.insertionMode) {
								resumableState.hasBody = !0;
								break a;
							}
							break;
						case "html":
							if (0 === prevContext$43.insertionMode) {
								resumableState.hasHtml = !0;
								break a;
							}
							break;
						case "head": if (1 >= prevContext$43.insertionMode) break a;
					}
					target.push(endChunkForTag(type));
				}
				segment.lastPushedText = !1;
			}
		} else {
			switch (type) {
				case REACT_LEGACY_HIDDEN_TYPE:
				case REACT_STRICT_MODE_TYPE:
				case REACT_PROFILER_TYPE:
				case REACT_FRAGMENT_TYPE:
					var prevKeyPath$jscomp$1 = task.keyPath;
					task.keyPath = keyPath;
					renderNodeDestructive(request, task, props.children, -1);
					task.keyPath = prevKeyPath$jscomp$1;
					return;
				case REACT_ACTIVITY_TYPE:
					var segment$jscomp$0 = task.blockedSegment;
					if (null === segment$jscomp$0) {
						if ("hidden" !== props.mode) {
							var prevKeyPath$jscomp$2 = task.keyPath;
							task.keyPath = keyPath;
							renderNode(request, task, props.children, -1);
							task.keyPath = prevKeyPath$jscomp$2;
						}
					} else if ("hidden" !== props.mode) {
						segment$jscomp$0.chunks.push(startActivityBoundary);
						segment$jscomp$0.lastPushedText = !1;
						var prevKeyPath$47 = task.keyPath;
						task.keyPath = keyPath;
						renderNode(request, task, props.children, -1);
						task.keyPath = prevKeyPath$47;
						segment$jscomp$0.chunks.push(endActivityBoundary);
						segment$jscomp$0.lastPushedText = !1;
					}
					return;
				case REACT_SUSPENSE_LIST_TYPE:
					a: {
						var children$jscomp$0 = props.children, revealOrder = props.revealOrder;
						if ("independent" !== revealOrder && "together" !== revealOrder) {
							if (isArrayImpl(children$jscomp$0)) {
								renderSuspenseListRows(request, task, keyPath, children$jscomp$0, revealOrder);
								break a;
							}
							var iteratorFn = getIteratorFn(children$jscomp$0);
							if (iteratorFn) {
								var iterator = iteratorFn.call(children$jscomp$0);
								if (iterator) {
									var step = iterator.next();
									if (!step.done) {
										do
											step = iterator.next();
										while (!step.done);
										renderSuspenseListRows(request, task, keyPath, children$jscomp$0, revealOrder);
									}
									break a;
								}
							}
						}
						if ("together" === revealOrder) {
							var prevKeyPath$41 = task.keyPath, prevRow = task.row, newRow = task.row = createSuspenseListRow(null);
							newRow.boundaries = [];
							newRow.together = !0;
							task.keyPath = keyPath;
							renderNodeDestructive(request, task, children$jscomp$0, -1);
							0 === --newRow.pendingTasks && finishSuspenseListRow(request, newRow);
							task.keyPath = prevKeyPath$41;
							task.row = prevRow;
							null !== prevRow && 0 < newRow.pendingTasks && (prevRow.pendingTasks++, newRow.next = prevRow);
						} else {
							var prevKeyPath$jscomp$3 = task.keyPath;
							task.keyPath = keyPath;
							renderNodeDestructive(request, task, children$jscomp$0, -1);
							task.keyPath = prevKeyPath$jscomp$3;
						}
					}
					return;
				case REACT_VIEW_TRANSITION_TYPE:
					var prevContext$jscomp$0 = task.formatContext, prevKeyPath$jscomp$4 = task.keyPath;
					var resumableState$jscomp$0 = request.resumableState;
					if (null != props.name && "auto" !== props.name) var JSCompiler_inline_result$jscomp$2 = props.name;
					else JSCompiler_inline_result$jscomp$2 = makeId(resumableState$jscomp$0, getTreeId(task.treeContext), 0);
					var autoName = JSCompiler_inline_result$jscomp$2, resumableState$jscomp$1 = request.resumableState, update = getViewTransitionClassName(props.default, props.update), enter = getViewTransitionClassName(props.default, props.enter), exit = getViewTransitionClassName(props.default, props.exit), share = getViewTransitionClassName(props.default, props.share), name = props.name;
					update ??= "auto";
					enter ??= "auto";
					exit ??= "auto";
					if (null == name) {
						var parentViewTransition = prevContext$jscomp$0.viewTransition;
						null !== parentViewTransition ? (name = parentViewTransition.name, share = parentViewTransition.share) : (name = "auto", share = "none");
					} else share ??= "auto", prevContext$jscomp$0.tagScope & 4 && (resumableState$jscomp$1.instructions |= 128);
					prevContext$jscomp$0.tagScope & 8 ? resumableState$jscomp$1.instructions |= 128 : exit = "none";
					prevContext$jscomp$0.tagScope & 16 ? resumableState$jscomp$1.instructions |= 128 : enter = "none";
					var viewTransition = {
						update,
						enter,
						exit,
						share,
						parentEnter: "none",
						parentExit: "none",
						name,
						autoName,
						nameIdx: 0
					}, subtreeScope = prevContext$jscomp$0.tagScope & -25;
					subtreeScope = "none" !== update ? subtreeScope | 32 : subtreeScope & -33;
					"none" !== enter && (subtreeScope |= 64);
					task.formatContext = createFormatContext(prevContext$jscomp$0.insertionMode, prevContext$jscomp$0.selectedValue, subtreeScope, viewTransition);
					task.keyPath = keyPath;
					if (null != props.name && "auto" !== props.name) renderNodeDestructive(request, task, props.children, -1);
					else {
						var prevTreeContext = task.treeContext;
						task.treeContext = pushTreeContext(prevTreeContext, 1, 0);
						renderNode(request, task, props.children, -1);
						task.treeContext = prevTreeContext;
					}
					task.formatContext = prevContext$jscomp$0;
					task.keyPath = prevKeyPath$jscomp$4;
					return;
				case REACT_SCOPE_TYPE: throw Error(formatProdErrorMessage(343));
				case REACT_SUSPENSE_TYPE:
					a: if (null !== task.replay) {
						var prevKeyPath$27 = task.keyPath, prevContext$28 = task.formatContext, prevRow$29 = task.row;
						task.keyPath = keyPath;
						task.formatContext = getSuspenseContentFormatContext(request.resumableState, prevContext$28);
						task.row = null;
						var content$30 = props.children;
						try {
							renderNode(request, task, content$30, -1);
						} finally {
							task.keyPath = prevKeyPath$27, task.formatContext = prevContext$28, task.row = prevRow$29;
						}
					} else {
						var prevKeyPath$jscomp$5 = task.keyPath, prevContext$jscomp$1 = task.formatContext, prevRow$jscomp$0 = task.row, parentBoundary = task.blockedBoundary, parentPreamble = task.blockedPreamble, parentHoistableState = task.hoistableState, parentSegment = task.blockedSegment, fallback = props.fallback, content = props.children, fallbackAbortSet = /* @__PURE__ */ new Set(), newBoundary = createSuspenseBoundary(request, task.row, fallbackAbortSet, 2 > task.formatContext.insertionMode ? {
							content: createPreambleState(),
							fallback: createPreambleState()
						} : null, !1), boundarySegment = createPendingSegment(request, parentSegment.chunks.length, newBoundary, task.formatContext, !1, !1);
						parentSegment.children.push(boundarySegment);
						parentSegment.lastPushedText = !1;
						var contentRootSegment = createPendingSegment(request, 0, null, task.formatContext, !1, !1);
						contentRootSegment.parentFlushed = !0;
						var trackedPostpones = request.trackedPostpones;
						if (null !== trackedPostpones) {
							var suspenseComponentStack = task.componentStack, fallbackKeyPath = [
								keyPath[0],
								"Suspense Fallback",
								keyPath[2]
							];
							if (null !== trackedPostpones) {
								var fallbackReplayNode = [
									fallbackKeyPath[1],
									fallbackKeyPath[2],
									[],
									null
								];
								trackedPostpones.workingMap.set(fallbackKeyPath, fallbackReplayNode);
								newBoundary.tracked = {
									contentKeyPath: keyPath,
									fallbackNode: fallbackReplayNode
								};
							}
							task.blockedSegment = boundarySegment;
							task.blockedPreamble = null === newBoundary.preamble ? null : newBoundary.preamble.fallback;
							task.keyPath = fallbackKeyPath;
							task.formatContext = getSuspenseFallbackFormatContext(request.resumableState, prevContext$jscomp$1);
							task.componentStack = replaceSuspenseComponentStackWithSuspenseFallbackStack(suspenseComponentStack);
							try {
								renderNode(request, task, fallback, -1), boundarySegment.lastPushedText && boundarySegment.textEmbedded && boundarySegment.chunks.push(textSeparator), boundarySegment.status = 1, finishedSegment(request, parentBoundary, boundarySegment);
							} catch (thrownValue) {
								throw boundarySegment.status = request.aborted ? 3 : 4, thrownValue;
							} finally {
								task.blockedSegment = parentSegment, task.blockedPreamble = parentPreamble, task.keyPath = prevKeyPath$jscomp$5, task.formatContext = prevContext$jscomp$1;
							}
							var suspendedPrimaryTask = createRenderTask(request, null, content, -1, newBoundary, contentRootSegment, null === newBoundary.preamble ? null : newBoundary.preamble.content, newBoundary.contentState, task.abortSet, keyPath, getSuspenseContentFormatContext(request.resumableState, task.formatContext), task.context, task.treeContext, null, suspenseComponentStack);
							pushComponentStack(suspendedPrimaryTask);
							request.pingedTasks.push(suspendedPrimaryTask);
						} else {
							task.blockedBoundary = newBoundary;
							task.blockedPreamble = null === newBoundary.preamble ? null : newBoundary.preamble.content;
							task.hoistableState = newBoundary.contentState;
							task.blockedSegment = contentRootSegment;
							task.keyPath = keyPath;
							task.formatContext = getSuspenseContentFormatContext(request.resumableState, prevContext$jscomp$1);
							task.row = null;
							try {
								if (renderNode(request, task, content, -1), contentRootSegment.lastPushedText && contentRootSegment.textEmbedded && contentRootSegment.chunks.push(textSeparator), contentRootSegment.status = 1, finishedSegment(request, newBoundary, contentRootSegment), queueCompletedSegment(newBoundary, contentRootSegment), 0 === newBoundary.pendingTasks && 0 === newBoundary.status) {
									if (newBoundary.status = 1, !isEligibleForOutlining(request, newBoundary)) {
										null !== prevRow$jscomp$0 && 0 === --prevRow$jscomp$0.pendingTasks && finishSuspenseListRow(request, prevRow$jscomp$0);
										0 === request.pendingRootTasks && task.blockedPreamble && preparePreamble(request);
										break a;
									}
								} else null !== prevRow$jscomp$0 && prevRow$jscomp$0.together && tryToResolveTogetherRow(request, prevRow$jscomp$0);
							} catch (thrownValue$31) {
								newBoundary.status = 4;
								if (request.aborted) {
									contentRootSegment.status = 3;
									var error = request.fatalError;
								} else contentRootSegment.status = 4, error = thrownValue$31;
								var thrownInfo = getThrownInfo(task.componentStack);
								newBoundary.errorDigest = logRecoverableError(request, error, thrownInfo);
								untrackBoundary(request, newBoundary);
							} finally {
								task.blockedBoundary = parentBoundary, task.blockedPreamble = parentPreamble, task.hoistableState = parentHoistableState, task.blockedSegment = parentSegment, task.keyPath = prevKeyPath$jscomp$5, task.formatContext = prevContext$jscomp$1, task.row = prevRow$jscomp$0;
							}
							var suspendedFallbackTask = createRenderTask(request, null, fallback, -1, parentBoundary, boundarySegment, null === newBoundary.preamble ? null : newBoundary.preamble.fallback, newBoundary.fallbackState, fallbackAbortSet, [
								keyPath[0],
								"Suspense Fallback",
								keyPath[2]
							], getSuspenseFallbackFormatContext(request.resumableState, task.formatContext), task.context, task.treeContext, task.row, replaceSuspenseComponentStackWithSuspenseFallbackStack(task.componentStack));
							pushComponentStack(suspendedFallbackTask);
							request.pingedTasks.push(suspendedFallbackTask);
						}
					}
					return;
			}
			if ("object" === typeof type && null !== type) switch (type.$$typeof) {
				case REACT_FORWARD_REF_TYPE:
					if ("ref" in props) {
						var propsWithoutRef = {};
						for (var key in props) "ref" !== key && (propsWithoutRef[key] = props[key]);
					} else propsWithoutRef = props;
					finishFunctionComponent(request, task, keyPath, renderWithHooks(request, task, keyPath, type.render, propsWithoutRef, ref), 0 !== localIdCounter, actionStateCounter, actionStateMatchingIndex);
					return;
				case REACT_MEMO_TYPE:
					renderElement(request, task, keyPath, type.type, props, ref);
					return;
				case REACT_CONTEXT_TYPE:
					var children$jscomp$2 = props.children, prevKeyPath$jscomp$6 = task.keyPath, nextValue = props.value;
					var prevValue = type._currentValue;
					type._currentValue = nextValue;
					var prevNode = currentActiveSnapshot, newNode = {
						parent: prevNode,
						depth: null === prevNode ? 0 : prevNode.depth + 1,
						context: type,
						parentValue: prevValue,
						value: nextValue
					};
					currentActiveSnapshot = newNode;
					task.context = newNode;
					task.keyPath = keyPath;
					renderNodeDestructive(request, task, children$jscomp$2, -1);
					var prevSnapshot = currentActiveSnapshot;
					if (null === prevSnapshot) throw Error(formatProdErrorMessage(403));
					prevSnapshot.context._currentValue = prevSnapshot.parentValue;
					task.context = currentActiveSnapshot = prevSnapshot.parent;
					task.keyPath = prevKeyPath$jscomp$6;
					return;
				case REACT_CONSUMER_TYPE:
					var render = props.children, newChildren = render(type._context._currentValue), prevKeyPath$jscomp$7 = task.keyPath;
					task.keyPath = keyPath;
					renderNodeDestructive(request, task, newChildren, -1);
					task.keyPath = prevKeyPath$jscomp$7;
					return;
				case REACT_LAZY_TYPE:
					var init = type._init;
					var Component = init(type._payload);
					if (request.aborted) throw null;
					renderElement(request, task, keyPath, Component, props, ref);
					return;
			}
			throw Error(formatProdErrorMessage(130, null == type ? type : typeof type, ""));
		}
	}
	function resumeNode(request, task, segmentId, node, childIndex) {
		var prevReplay = task.replay, blockedBoundary = task.blockedBoundary, resumedSegment = createPendingSegment(request, 0, null, task.formatContext, !1, !1);
		resumedSegment.id = segmentId;
		resumedSegment.parentFlushed = !0;
		try {
			task.replay = null, task.blockedSegment = resumedSegment, renderNode(request, task, node, childIndex), resumedSegment.status = 1, finishedSegment(request, blockedBoundary, resumedSegment), null === blockedBoundary ? request.completedRootSegment = resumedSegment : (queueCompletedSegment(blockedBoundary, resumedSegment), blockedBoundary.parentFlushed && request.partialBoundaries.push(blockedBoundary));
		} finally {
			task.replay = prevReplay, task.blockedSegment = null;
		}
	}
	function renderNodeDestructive(request, task, node, childIndex) {
		null !== task.replay && "number" === typeof task.replay.slots ? resumeNode(request, task, task.replay.slots, node, childIndex) : (task.node = node, task.childIndex = childIndex, node = task.componentStack, pushComponentStack(task), retryNode(request, task), task.componentStack = node);
	}
	function retryNode(request, task) {
		var node = task.node, childIndex = task.childIndex;
		if (null !== node) {
			if ("object" === typeof node) {
				switch (node.$$typeof) {
					case REACT_ELEMENT_TYPE:
						var type = node.type, key = node.key, props = node.props;
						node = props.ref;
						var ref = void 0 !== node ? node : null, name = getComponentNameFromType(type), keyOrIndex = null == key || key === REACT_OPTIMISTIC_KEY ? -1 === childIndex ? 0 : childIndex : key;
						key = [
							task.keyPath,
							name,
							keyOrIndex
						];
						if (null !== task.replay) a: {
							var replay = task.replay;
							childIndex = replay.nodes;
							for (node = 0; node < childIndex.length; node++) {
								var node$jscomp$0 = childIndex[node];
								if (keyOrIndex === node$jscomp$0[1]) {
									if (4 === node$jscomp$0.length) {
										if (null !== name && name !== node$jscomp$0[0]) throw Error(formatProdErrorMessage(490, node$jscomp$0[0], name));
										var childNodes = node$jscomp$0[2], childSlots = node$jscomp$0[3], currentNode = task.node;
										task.replay = {
											nodes: childNodes,
											slots: childSlots,
											pendingTasks: 1
										};
										try {
											renderElement(request, task, key, type, props, ref);
											if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length) throw Error(formatProdErrorMessage(488));
											task.replay.pendingTasks--;
										} catch (x) {
											if ("object" === typeof x && null !== x && (x === SuspenseException || "function" === typeof x.then || "Maximum call stack size exceeded" === x.message)) throw task.node === currentNode ? task.replay = replay : childIndex.splice(node, 1), x;
											task.replay.pendingTasks--;
											key = getThrownInfo(task.componentStack);
											currentNode = request;
											props = task.blockedBoundary;
											request = request.aborted ? request.fatalError : x;
											key = logRecoverableError(currentNode, request, key);
											abortRemainingReplayNodes(currentNode, props, childNodes, childSlots, request, key);
										}
										task.replay = replay;
									} else {
										if (type !== REACT_SUSPENSE_TYPE) throw Error(formatProdErrorMessage(490, "Suspense", getComponentNameFromType(type) || "Unknown"));
										b: {
											replay = node$jscomp$0[5];
											type = node$jscomp$0[2];
											ref = node$jscomp$0[3];
											name = null === node$jscomp$0[4] ? [] : node$jscomp$0[4][2];
											node$jscomp$0 = null === node$jscomp$0[4] ? null : node$jscomp$0[4][3];
											keyOrIndex = task.keyPath;
											var prevContext = task.formatContext, prevRow = task.row, previousReplaySet = task.replay, parentBoundary = task.blockedBoundary, parentHoistableState = task.hoistableState, content = props.children;
											props = props.fallback;
											var fallbackAbortSet = /* @__PURE__ */ new Set(), resumedBoundary = createSuspenseBoundary(request, task.row, fallbackAbortSet, 2 > task.formatContext.insertionMode ? {
												content: createPreambleState(),
												fallback: createPreambleState()
											} : null, !1);
											resumedBoundary.parentFlushed = !0;
											resumedBoundary.rootSegmentID = replay;
											task.blockedBoundary = resumedBoundary;
											task.hoistableState = resumedBoundary.contentState;
											task.keyPath = key;
											task.formatContext = getSuspenseContentFormatContext(request.resumableState, prevContext);
											task.row = null;
											task.replay = {
												nodes: type,
												slots: ref,
												pendingTasks: 1
											};
											try {
												renderNode(request, task, content, -1);
												if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length) throw Error(formatProdErrorMessage(488));
												task.replay.pendingTasks--;
												if (0 === resumedBoundary.pendingTasks && 0 === resumedBoundary.status) {
													resumedBoundary.status = 1;
													request.completedBoundaries.push(resumedBoundary);
													break b;
												}
											} catch (thrownValue) {
												resumedBoundary.status = 4, childNodes = request.aborted ? request.fatalError : thrownValue, childSlots = getThrownInfo(task.componentStack), currentNode = logRecoverableError(request, childNodes, childSlots), resumedBoundary.errorDigest = currentNode, task.replay.pendingTasks--, request.clientRenderedBoundaries.push(resumedBoundary);
											} finally {
												task.blockedBoundary = parentBoundary, task.hoistableState = parentHoistableState, task.replay = previousReplaySet, task.keyPath = keyOrIndex, task.formatContext = prevContext, task.row = prevRow;
											}
											childNodes = createReplayTask(request, null, {
												nodes: name,
												slots: node$jscomp$0,
												pendingTasks: 0
											}, props, -1, parentBoundary, resumedBoundary.fallbackState, fallbackAbortSet, [
												key[0],
												"Suspense Fallback",
												key[2]
											], getSuspenseFallbackFormatContext(request.resumableState, task.formatContext), task.context, task.treeContext, task.row, replaceSuspenseComponentStackWithSuspenseFallbackStack(task.componentStack));
											pushComponentStack(childNodes);
											request.pingedTasks.push(childNodes);
										}
									}
									childIndex.splice(node, 1);
									break a;
								}
							}
						}
						else renderElement(request, task, key, type, props, ref);
						return;
					case REACT_PORTAL_TYPE: throw Error(formatProdErrorMessage(257));
					case REACT_LAZY_TYPE:
						childNodes = node._init;
						node = childNodes(node._payload);
						if (request.aborted) throw null;
						renderNodeDestructive(request, task, node, childIndex);
						return;
				}
				if (isArrayImpl(node)) {
					renderChildrenArray(request, task, node, childIndex);
					return;
				}
				if (childNodes = getIteratorFn(node)) {
					if (childNodes = childNodes.call(node)) {
						node = childNodes.next();
						if (!node.done) {
							childSlots = [];
							do
								childSlots.push(node.value), node = childNodes.next();
							while (!node.done);
							renderChildrenArray(request, task, childSlots, childIndex);
						}
						return;
					}
				}
				if ("function" === typeof node.then) return task.thenableState = null, renderNodeDestructive(request, task, unwrapThenable(node), childIndex);
				if (node.$$typeof === REACT_CONTEXT_TYPE) return renderNodeDestructive(request, task, node._currentValue, childIndex);
				childIndex = Object.prototype.toString.call(node);
				throw Error(formatProdErrorMessage(31, "[object Object]" === childIndex ? "object with keys {" + Object.keys(node).join(", ") + "}" : childIndex));
			}
			if ("string" === typeof node) childIndex = task.blockedSegment, null !== childIndex && (childIndex.lastPushedText = pushTextInstance(childIndex.chunks, node, request.renderState, childIndex.lastPushedText));
			else if ("number" === typeof node || "bigint" === typeof node) childIndex = task.blockedSegment, null !== childIndex && (childIndex.lastPushedText = pushTextInstance(childIndex.chunks, "" + node, request.renderState, childIndex.lastPushedText));
		}
	}
	function renderChildrenArray(request, task, children, childIndex) {
		var prevKeyPath = task.keyPath;
		if (-1 !== childIndex && (task.keyPath = [
			task.keyPath,
			"Fragment",
			childIndex
		], null !== task.replay)) {
			for (var replay = task.replay, replayNodes = replay.nodes, j = 0; j < replayNodes.length; j++) {
				var node = replayNodes[j];
				if (node[1] === childIndex) {
					childIndex = node[2];
					node = node[3];
					task.replay = {
						nodes: childIndex,
						slots: node,
						pendingTasks: 1
					};
					try {
						renderChildrenArray(request, task, children, -1);
						if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length) throw Error(formatProdErrorMessage(488));
						task.replay.pendingTasks--;
					} catch (x) {
						if ("object" === typeof x && null !== x && (x === SuspenseException || "function" === typeof x.then)) throw x;
						task.replay.pendingTasks--;
						var thrownInfo = getThrownInfo(task.componentStack);
						children = request;
						var boundary = task.blockedBoundary;
						request = request.aborted ? request.fatalError : x;
						thrownInfo = logRecoverableError(children, request, thrownInfo);
						abortRemainingReplayNodes(children, boundary, childIndex, node, request, thrownInfo);
					}
					task.replay = replay;
					replayNodes.splice(j, 1);
					break;
				}
			}
			task.keyPath = prevKeyPath;
			return;
		}
		replay = task.treeContext;
		replayNodes = children.length;
		if (null !== task.replay && (j = task.replay.slots, null !== j && "object" === typeof j)) {
			for (childIndex = 0; childIndex < replayNodes; childIndex++) node = children[childIndex], task.treeContext = pushTreeContext(replay, replayNodes, childIndex), boundary = j[childIndex], "number" === typeof boundary ? (resumeNode(request, task, boundary, node, childIndex), delete j[childIndex]) : renderNode(request, task, node, childIndex);
			task.treeContext = replay;
			task.keyPath = prevKeyPath;
			return;
		}
		for (j = 0; j < replayNodes; j++) childIndex = children[j], task.treeContext = pushTreeContext(replay, replayNodes, j), renderNode(request, task, childIndex, j);
		task.treeContext = replay;
		task.keyPath = prevKeyPath;
	}
	function trackPostponedBoundary(request, trackedPostpones, boundary) {
		boundary.status = 5;
		boundary.rootSegmentID = request.nextSegmentId++;
		var tracked = boundary.tracked;
		if (null === tracked) throw Error(formatProdErrorMessage(486));
		request = tracked.contentKeyPath;
		if (null === request) throw Error(formatProdErrorMessage(486));
		tracked = tracked.fallbackNode;
		var children = [], boundaryNode = trackedPostpones.workingMap.get(request);
		if (void 0 === boundaryNode) return boundary = [
			request[1],
			request[2],
			children,
			null,
			tracked,
			boundary.rootSegmentID
		], trackedPostpones.workingMap.set(request, boundary), addToReplayParent(boundary, request[0], trackedPostpones), boundary;
		boundaryNode[4] = tracked;
		boundaryNode[5] = boundary.rootSegmentID;
		return boundaryNode;
	}
	function trackPostpone(request, trackedPostpones, task, segment) {
		segment.status = 5;
		var keyPath = task.keyPath, boundary = task.blockedBoundary;
		if (null === boundary) segment.id = request.nextSegmentId++, trackedPostpones.rootSlots = segment.id, null !== request.completedRootSegment && (request.completedRootSegment.status = 5);
		else {
			if (null !== boundary && 0 === boundary.status) {
				var boundaryNode = trackPostponedBoundary(request, trackedPostpones, boundary);
				if (null !== boundary.tracked && boundary.tracked.contentKeyPath === keyPath && -1 === task.childIndex) {
					-1 === segment.id && (segment.id = segment.parentFlushed ? boundary.rootSegmentID : request.nextSegmentId++);
					boundaryNode[3] = segment.id;
					return;
				}
			}
			-1 === segment.id && (segment.id = segment.parentFlushed && null !== boundary ? boundary.rootSegmentID : request.nextSegmentId++);
			if (-1 === task.childIndex) null === keyPath ? trackedPostpones.rootSlots = segment.id : (task = trackedPostpones.workingMap.get(keyPath), void 0 === task ? (task = [
				keyPath[1],
				keyPath[2],
				[],
				segment.id
			], addToReplayParent(task, keyPath[0], trackedPostpones)) : task[3] = segment.id);
			else {
				if (null === keyPath) {
					if (request = trackedPostpones.rootSlots, null === request) request = trackedPostpones.rootSlots = {};
					else if ("number" === typeof request) throw Error(formatProdErrorMessage(491));
				} else if (boundary = trackedPostpones.workingMap, boundaryNode = boundary.get(keyPath), void 0 === boundaryNode) request = {}, boundaryNode = [
					keyPath[1],
					keyPath[2],
					[],
					request
				], boundary.set(keyPath, boundaryNode), addToReplayParent(boundaryNode, keyPath[0], trackedPostpones);
				else if (request = boundaryNode[3], null === request) request = boundaryNode[3] = {};
				else if ("number" === typeof request) throw Error(formatProdErrorMessage(491));
				request[task.childIndex] = segment.id;
			}
		}
	}
	function untrackBoundary(request, boundary) {
		request = request.trackedPostpones;
		null !== request && (boundary = boundary.tracked, null !== boundary && (boundary = boundary.contentKeyPath, null !== boundary && (request = request.workingMap.get(boundary), void 0 !== request && (request.length = 4, request[2] = [], request[3] = null))));
	}
	function spawnNewSuspendedReplayTask(request, task, thenableState) {
		return createReplayTask(request, thenableState, task.replay, task.node, task.childIndex, task.blockedBoundary, task.hoistableState, task.abortSet, task.keyPath, task.formatContext, task.context, task.treeContext, task.row, task.componentStack);
	}
	function spawnNewSuspendedRenderTask(request, task, thenableState) {
		var segment = task.blockedSegment, newSegment = createPendingSegment(request, segment.chunks.length, null, task.formatContext, segment.lastPushedText, !0);
		segment.children.push(newSegment);
		segment.lastPushedText = !1;
		return createRenderTask(request, thenableState, task.node, task.childIndex, task.blockedBoundary, newSegment, task.blockedPreamble, task.hoistableState, task.abortSet, task.keyPath, task.formatContext, task.context, task.treeContext, task.row, task.componentStack);
	}
	function renderNode(request, task, node, childIndex) {
		var previousFormatContext = task.formatContext, previousContext = task.context, previousKeyPath = task.keyPath, previousTreeContext = task.treeContext, previousComponentStack = task.componentStack, segment = task.blockedSegment;
		if (null === segment) {
			segment = task.replay;
			try {
				return renderNodeDestructive(request, task, node, childIndex);
			} catch (thrownValue) {
				if (resetHooksState(), node = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue, !request.aborted && "object" === typeof node && null !== node) {
					if ("function" === typeof node.then) {
						childIndex = thrownValue === SuspenseException ? getThenableStateAfterSuspending() : null;
						request = spawnNewSuspendedReplayTask(request, task, childIndex).ping;
						node.then(request.resolve, request.reject);
						task.formatContext = previousFormatContext;
						task.context = previousContext;
						task.keyPath = previousKeyPath;
						task.treeContext = previousTreeContext;
						task.componentStack = previousComponentStack;
						task.replay = segment;
						switchContext(previousContext);
						return;
					}
					if ("Maximum call stack size exceeded" === node.message) {
						node = thrownValue === SuspenseException ? getThenableStateAfterSuspending() : null;
						node = spawnNewSuspendedReplayTask(request, task, node);
						request.pingedTasks.push(node);
						task.formatContext = previousFormatContext;
						task.context = previousContext;
						task.keyPath = previousKeyPath;
						task.treeContext = previousTreeContext;
						task.componentStack = previousComponentStack;
						task.replay = segment;
						switchContext(previousContext);
						return;
					}
				}
			}
		} else {
			var childrenLength = segment.children.length, chunkLength = segment.chunks.length;
			try {
				return renderNodeDestructive(request, task, node, childIndex);
			} catch (thrownValue$64) {
				if (resetHooksState(), segment.children.length = childrenLength, segment.chunks.length = chunkLength, node = thrownValue$64 === SuspenseException ? getSuspendedThenable() : thrownValue$64, !request.aborted && "object" === typeof node && null !== node) {
					if ("function" === typeof node.then) {
						segment = node;
						node = thrownValue$64 === SuspenseException ? getThenableStateAfterSuspending() : null;
						request = spawnNewSuspendedRenderTask(request, task, node).ping;
						segment.then(request.resolve, request.reject);
						task.formatContext = previousFormatContext;
						task.context = previousContext;
						task.keyPath = previousKeyPath;
						task.treeContext = previousTreeContext;
						task.componentStack = previousComponentStack;
						switchContext(previousContext);
						return;
					}
					if ("Maximum call stack size exceeded" === node.message) {
						segment = thrownValue$64 === SuspenseException ? getThenableStateAfterSuspending() : null;
						segment = spawnNewSuspendedRenderTask(request, task, segment);
						request.pingedTasks.push(segment);
						task.formatContext = previousFormatContext;
						task.context = previousContext;
						task.keyPath = previousKeyPath;
						task.treeContext = previousTreeContext;
						task.componentStack = previousComponentStack;
						switchContext(previousContext);
						return;
					}
				}
			}
		}
		task.formatContext = previousFormatContext;
		task.context = previousContext;
		task.keyPath = previousKeyPath;
		task.treeContext = previousTreeContext;
		switchContext(previousContext);
		throw node;
	}
	function abortTaskSoft(task) {
		var boundary = task.blockedBoundary, segment = task.blockedSegment;
		null !== segment && (segment.status = 3, finishedTask(this, boundary, task.row, segment));
	}
	function abortRemainingReplayNodes(request$jscomp$0, boundary, nodes, slots, error, errorDigest$jscomp$0) {
		for (var i = 0; i < nodes.length; i++) {
			var node = nodes[i];
			if (4 === node.length) abortRemainingReplayNodes(request$jscomp$0, boundary, node[2], node[3], error, errorDigest$jscomp$0);
			else {
				node = node[5];
				var request = request$jscomp$0, errorDigest = errorDigest$jscomp$0, resumedBoundary = createSuspenseBoundary(request, null, /* @__PURE__ */ new Set(), null, !1);
				resumedBoundary.parentFlushed = !0;
				resumedBoundary.rootSegmentID = node;
				resumedBoundary.status = 4;
				resumedBoundary.errorDigest = errorDigest;
				resumedBoundary.parentFlushed && request.clientRenderedBoundaries.push(resumedBoundary);
			}
		}
		nodes.length = 0;
		if (null !== slots) {
			if (null === boundary) throw Error(formatProdErrorMessage(487));
			4 !== boundary.status && (boundary.status = 4, boundary.errorDigest = errorDigest$jscomp$0, boundary.parentFlushed && request$jscomp$0.clientRenderedBoundaries.push(boundary));
			if ("object" === typeof slots) for (var index in slots) delete slots[index];
		}
	}
	function abortTask(task, request) {
		if (task !== request.currentTask) {
			var boundary = task.blockedBoundary;
			task = task.blockedSegment;
			null !== task && (task.status = 3);
			null !== boundary && boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
				return abortTask(fallbackTask, request);
			});
		}
	}
	function finishAbortedTask(task, request, error) {
		if (task !== request.currentTask) {
			var boundary = task.blockedBoundary, segment = task.blockedSegment;
			if (null === segment || 3 === segment.status) {
				var errorInfo = getThrownInfo(task.componentStack), isRecoverableReason = isRecoverableError(error);
				if (null === boundary) {
					boundary = task.replay;
					if (null === boundary) {
						isRecoverableReason || null === request.trackedPostpones || null === segment ? isRecoverableReason ? (task = cloneRecoverableErrorAsFatal(error), logRecoverableError(request, task, errorInfo), 12 !== request.status && 13 !== request.status && fatalError(request, task)) : (logRecoverableError(request, error, errorInfo), 12 !== request.status && 13 !== request.status && fatalError(request, error)) : (boundary = request.trackedPostpones, logRecoverableError(request, error, errorInfo), trackPostpone(request, boundary, task, segment), finishedTask(request, null, task.row, segment));
						return;
					}
					12 !== request.status && 13 !== request.status && (boundary.pendingTasks--, 0 === boundary.pendingTasks && 0 < boundary.nodes.length && (errorInfo = logRecoverableError(request, error, errorInfo), abortRemainingReplayNodes(request, null, boundary.nodes, boundary.slots, error, errorInfo)), request.pendingRootTasks--, 0 === request.pendingRootTasks && completeShell(request));
				} else {
					var trackedPostpones$65 = request.trackedPostpones;
					if (4 !== boundary.status) {
						if (!isRecoverableReason && null !== trackedPostpones$65 && null !== segment) return logRecoverableError(request, error, errorInfo), trackPostpone(request, trackedPostpones$65, task, segment), boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
							return finishAbortedTask(fallbackTask, request, error);
						}), boundary.fallbackAbortableTasks.clear(), finishedTask(request, boundary, task.row, segment);
						boundary.status = 4;
						errorInfo = logRecoverableError(request, error, errorInfo);
						boundary.errorDigest = errorInfo;
						untrackBoundary(request, boundary);
						boundary.parentFlushed && request.clientRenderedBoundaries.push(boundary);
					}
					boundary.pendingTasks--;
					errorInfo = boundary.row;
					null !== errorInfo && 0 === --errorInfo.pendingTasks && finishSuspenseListRow(request, errorInfo);
					boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
						return finishAbortedTask(fallbackTask, request, error);
					});
					boundary.fallbackAbortableTasks.clear();
				}
				task = task.row;
				null !== task && 0 === --task.pendingTasks && finishSuspenseListRow(request, task);
				request.allPendingTasks--;
				0 === request.allPendingTasks && completeAll(request);
			}
		}
	}
	function safelyEmitEarlyPreloads(request, shellComplete) {
		try {
			var renderState = request.renderState, onHeaders = renderState.onHeaders;
			if (onHeaders) {
				var headers = renderState.headers;
				if (headers) {
					renderState.headers = null;
					var linkHeader = headers.preconnects;
					headers.fontPreloads && (linkHeader && (linkHeader += ", "), linkHeader += headers.fontPreloads);
					headers.highImagePreloads && (linkHeader && (linkHeader += ", "), linkHeader += headers.highImagePreloads);
					if (!shellComplete) {
						var queueIter = renderState.styles.values(), queueStep = queueIter.next();
						b: for (; 0 < headers.remainingCapacity && !queueStep.done; queueStep = queueIter.next()) for (var sheetIter = queueStep.value.sheets.values(), sheetStep = sheetIter.next(); 0 < headers.remainingCapacity && !sheetStep.done; sheetStep = sheetIter.next()) {
							var sheet = sheetStep.value, props = sheet.props, key = props.href, props$jscomp$0 = sheet.props, header = getPreloadAsHeader(props$jscomp$0.href, "style", {
								crossOrigin: props$jscomp$0.crossOrigin,
								integrity: props$jscomp$0.integrity,
								nonce: props$jscomp$0.nonce,
								type: props$jscomp$0.type,
								fetchPriority: props$jscomp$0.fetchPriority,
								referrerPolicy: props$jscomp$0.referrerPolicy,
								media: props$jscomp$0.media
							});
							if (0 <= (headers.remainingCapacity -= header.length + 2)) renderState.resets.style[key] = PRELOAD_NO_CREDS, linkHeader && (linkHeader += ", "), linkHeader += header, renderState.resets.style[key] = "string" === typeof props.crossOrigin || "string" === typeof props.integrity ? [props.crossOrigin, props.integrity] : PRELOAD_NO_CREDS;
							else break b;
						}
					}
					linkHeader ? onHeaders({ Link: linkHeader }) : onHeaders({});
				}
			}
		} catch (error) {
			logRecoverableError(request, error, {});
		}
	}
	function completeShell(request) {
		null === request.trackedPostpones && safelyEmitEarlyPreloads(request, !0);
		null === request.trackedPostpones && preparePreamble(request);
		request = request.onShellReady;
		request();
	}
	function completeAll(request) {
		safelyEmitEarlyPreloads(request, null === request.trackedPostpones ? !0 : null === request.completedRootSegment || 5 !== request.completedRootSegment.status);
		preparePreamble(request);
		request = request.onAllReady;
		request();
	}
	function queueCompletedSegment(boundary, segment) {
		if (0 === segment.chunks.length && 1 === segment.children.length && null === segment.children[0].boundary && -1 === segment.children[0].id) {
			var childSegment = segment.children[0];
			childSegment.id = segment.id;
			childSegment.parentFlushed = !0;
			1 !== childSegment.status && 3 !== childSegment.status && 4 !== childSegment.status || queueCompletedSegment(boundary, childSegment);
		} else boundary.completedSegments.push(segment);
	}
	function finishedSegment(request, boundary, segment) {
		if (null !== byteLengthOfChunk) {
			segment = segment.chunks;
			for (var segmentByteSize = 0, i = 0; i < segment.length; i++) segmentByteSize += segment[i].byteLength;
			null === boundary ? request.byteSize += segmentByteSize : boundary.byteSize += segmentByteSize;
		}
	}
	function finishedTask(request, boundary, row, segment) {
		null !== row && (0 === --row.pendingTasks ? finishSuspenseListRow(request, row) : row.together && tryToResolveTogetherRow(request, row));
		request.allPendingTasks--;
		if (null === boundary) {
			if (null !== segment && segment.parentFlushed) {
				if (null !== request.completedRootSegment) throw Error(formatProdErrorMessage(389));
				request.completedRootSegment = segment;
			}
			request.pendingRootTasks--;
			0 === request.pendingRootTasks && completeShell(request);
		} else if (boundary.pendingTasks--, 4 !== boundary.status) if (0 === boundary.pendingTasks) {
			if (0 === boundary.status && (boundary.status = 1), null !== segment && segment.parentFlushed && (1 === segment.status || 3 === segment.status) && queueCompletedSegment(boundary, segment), boundary.parentFlushed && request.completedBoundaries.push(boundary), 1 === boundary.status) row = boundary.row, null !== row && hoistHoistables(row.hoistables, boundary.contentState), isEligibleForOutlining(request, boundary) || (request.allPendingTasks++, boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request), boundary.fallbackAbortableTasks.clear(), null !== row && 0 === --row.pendingTasks && finishSuspenseListRow(request, row), request.allPendingTasks--), 0 === request.pendingRootTasks && null === request.trackedPostpones && null !== boundary.preamble && preparePreamble(request);
			else if (5 === boundary.status && (boundary = boundary.row, null !== boundary)) {
				if (null !== request.trackedPostpones) {
					row = request.trackedPostpones;
					var postponedRow = boundary.next;
					if (null !== postponedRow && (segment = postponedRow.boundaries, null !== segment)) for (postponedRow.boundaries = null, postponedRow = 0; postponedRow < segment.length; postponedRow++) {
						var postponedBoundary = segment[postponedRow];
						trackPostponedBoundary(request, row, postponedBoundary);
						finishedTask(request, postponedBoundary, null, null);
					}
				}
				request.allPendingTasks++;
				0 === --boundary.pendingTasks && finishSuspenseListRow(request, boundary);
				request.allPendingTasks--;
			}
		} else null === segment || !segment.parentFlushed || 1 !== segment.status && 3 !== segment.status || (queueCompletedSegment(boundary, segment), 1 === boundary.completedSegments.length && boundary.parentFlushed && request.partialBoundaries.push(boundary)), boundary = boundary.row, null !== boundary && boundary.together && tryToResolveTogetherRow(request, boundary);
		0 === request.allPendingTasks && completeAll(request);
	}
	function performWork(request$jscomp$1) {
		if (!(request$jscomp$1.aborted || 11 < request$jscomp$1.status)) {
			var prevContext = currentActiveSnapshot, prevDispatcher = ReactSharedInternals.H;
			ReactSharedInternals.H = HooksDispatcher;
			var prevAsyncDispatcher = ReactSharedInternals.A;
			ReactSharedInternals.A = DefaultAsyncDispatcher;
			var prevRequest = currentRequest;
			currentRequest = request$jscomp$1;
			var prevResumableState = currentResumableState;
			currentResumableState = request$jscomp$1.resumableState;
			try {
				var pingedTasks = request$jscomp$1.pingedTasks, i = 0;
				for (; i < pingedTasks.length; i++) {
					var task = pingedTasks[i], request = request$jscomp$1, segment = task.blockedSegment;
					if (null === segment) {
						a: if (0 !== task.replay.pendingTasks) {
							var prevTask = request.currentTask;
							request.currentTask = task;
							switchContext(task.context);
							var startNode = task.node;
							try {
								"number" === typeof task.replay.slots ? resumeNode(request, task, task.replay.slots, task.node, task.childIndex) : retryNode(request, task);
								if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length) throw Error(formatProdErrorMessage(488));
								task.replay.pendingTasks--;
								task.abortSet.delete(task);
								finishedTask(request, task.blockedBoundary, task.row, null);
							} catch (thrownValue) {
								resetHooksState();
								var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
								if (request.aborted) {
									thrownValue === SuspenseException && (task.thenableState = getThenableStateAfterSuspending());
									request.currentTask = prevTask;
									var request$jscomp$0 = request;
									abortTask(task, request$jscomp$0);
									task.abortSet.delete(task);
									finishAbortedTask(task, request$jscomp$0, request$jscomp$0.fatalError);
								} else {
									if ("object" === typeof x && null !== x) {
										if ("function" === typeof x.then) {
											var ping = task.ping;
											x.then(ping.resolve, ping.reject);
											task.thenableState = thrownValue === SuspenseException ? getThenableStateAfterSuspending() : null;
											break a;
										}
										if ("Maximum call stack size exceeded" === x.message && task.node !== startNode) {
											task.thenableState = null;
											request.pingedTasks.push(task);
											break a;
										}
									}
									task.replay.pendingTasks--;
									task.abortSet.delete(task);
									var errorInfo = getThrownInfo(task.componentStack);
									request$jscomp$0 = request;
									var boundary = task.blockedBoundary, error$jscomp$0 = request.aborted ? request.fatalError : x, replayNodes = task.replay.nodes, resumeSlots = task.replay.slots, errorDigest = logRecoverableError(request$jscomp$0, error$jscomp$0, errorInfo);
									abortRemainingReplayNodes(request$jscomp$0, boundary, replayNodes, resumeSlots, error$jscomp$0, errorDigest);
									request.pendingRootTasks--;
									0 === request.pendingRootTasks && completeShell(request);
									request.allPendingTasks--;
									0 === request.allPendingTasks && completeAll(request);
								}
							} finally {
								request.currentTask = prevTask;
							}
						}
					} else a: if (request$jscomp$0 = segment, 0 === request$jscomp$0.status) {
						var prevTask$jscomp$0 = request.currentTask;
						request.currentTask = task;
						switchContext(task.context);
						var childrenLength = request$jscomp$0.children.length, chunkLength = request$jscomp$0.chunks.length, startNode$jscomp$0 = task.node;
						try {
							retryNode(request, task), request$jscomp$0.lastPushedText && request$jscomp$0.textEmbedded && request$jscomp$0.chunks.push(textSeparator), task.abortSet.delete(task), request$jscomp$0.status = 1, finishedSegment(request, task.blockedBoundary, request$jscomp$0), finishedTask(request, task.blockedBoundary, task.row, request$jscomp$0);
						} catch (thrownValue) {
							resetHooksState();
							request$jscomp$0.children.length = childrenLength;
							request$jscomp$0.chunks.length = chunkLength;
							var x$jscomp$0 = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
							if (request.aborted) thrownValue === SuspenseException && (task.thenableState = getThenableStateAfterSuspending()), request.currentTask = prevTask$jscomp$0, request$jscomp$0 = request, abortTask(task, request$jscomp$0), task.abortSet.delete(task), finishAbortedTask(task, request$jscomp$0, request$jscomp$0.fatalError);
							else {
								if ("object" === typeof x$jscomp$0 && null !== x$jscomp$0) {
									if ("function" === typeof x$jscomp$0.then) {
										request$jscomp$0.status = 0;
										task.thenableState = thrownValue === SuspenseException ? getThenableStateAfterSuspending() : null;
										var ping$jscomp$0 = task.ping;
										x$jscomp$0.then(ping$jscomp$0.resolve, ping$jscomp$0.reject);
										break a;
									}
									if ("Maximum call stack size exceeded" === x$jscomp$0.message && task.node !== startNode$jscomp$0) {
										request$jscomp$0.status = 0;
										task.thenableState = null;
										request.pingedTasks.push(task);
										break a;
									}
								}
								var errorInfo$jscomp$0 = getThrownInfo(task.componentStack);
								task.abortSet.delete(task);
								request$jscomp$0.status = 4;
								var boundary$jscomp$0 = task.blockedBoundary, row = task.row;
								null !== row && 0 === --row.pendingTasks && finishSuspenseListRow(request, row);
								request.allPendingTasks--;
								if (null === boundary$jscomp$0) if (isRecoverableError(x$jscomp$0)) {
									var fatalRecoverableError = cloneRecoverableErrorAsFatal(x$jscomp$0);
									logRecoverableError(request, fatalRecoverableError, errorInfo$jscomp$0);
									fatalError(request, fatalRecoverableError);
								} else logRecoverableError(request, x$jscomp$0, errorInfo$jscomp$0), fatalError(request, x$jscomp$0);
								else {
									var errorDigest$jscomp$0 = logRecoverableError(request, x$jscomp$0, errorInfo$jscomp$0);
									boundary$jscomp$0.pendingTasks--;
									if (4 !== boundary$jscomp$0.status) {
										boundary$jscomp$0.status = 4;
										boundary$jscomp$0.errorDigest = errorDigest$jscomp$0;
										untrackBoundary(request, boundary$jscomp$0);
										var boundaryRow = boundary$jscomp$0.row;
										null !== boundaryRow && (request.allPendingTasks++, 0 === --boundaryRow.pendingTasks && finishSuspenseListRow(request, boundaryRow), request.allPendingTasks--);
										boundary$jscomp$0.parentFlushed && request.clientRenderedBoundaries.push(boundary$jscomp$0);
										0 === request.pendingRootTasks && null === request.trackedPostpones && null !== boundary$jscomp$0.preamble && preparePreamble(request);
									}
									0 === request.allPendingTasks && completeAll(request);
								}
							}
						} finally {
							request.currentTask = prevTask$jscomp$0;
						}
					}
				}
				pingedTasks.splice(0, i);
				null !== request$jscomp$1.destination && flushCompletedQueues(request$jscomp$1, request$jscomp$1.destination);
			} catch (error) {
				logRecoverableError(request$jscomp$1, error, {}), fatalError(request$jscomp$1, error);
			} finally {
				currentResumableState = prevResumableState, ReactSharedInternals.H = prevDispatcher, ReactSharedInternals.A = prevAsyncDispatcher, prevDispatcher === HooksDispatcher && switchContext(prevContext), currentRequest = prevRequest;
			}
		}
	}
	function preparePreambleFromSubtree(request, segment, collectedPreambleSegments) {
		segment.preambleChildren.length && collectedPreambleSegments.push(segment.preambleChildren);
		for (var pendingPreambles = !1, i = 0; i < segment.children.length; i++) pendingPreambles = preparePreambleFromSegment(request, segment.children[i], collectedPreambleSegments) || pendingPreambles;
		return pendingPreambles;
	}
	function preparePreambleFromSegment(request, segment, collectedPreambleSegments) {
		var boundary = segment.boundary;
		if (null === boundary) return preparePreambleFromSubtree(request, segment, collectedPreambleSegments);
		var preamble = boundary.preamble;
		if (null === preamble) return !1;
		switch (boundary.status) {
			case 1:
				hoistPreambleState(request.renderState, preamble.content);
				request.byteSize += boundary.byteSize;
				segment = boundary.completedSegments[0];
				if (!segment) throw Error(formatProdErrorMessage(391));
				return preparePreambleFromSubtree(request, segment, collectedPreambleSegments);
			case 5: if (null !== request.trackedPostpones) return !0;
			case 4: if (1 === segment.status) return hoistPreambleState(request.renderState, preamble.fallback), preparePreambleFromSubtree(request, segment, collectedPreambleSegments);
			default: return !0;
		}
	}
	function preparePreamble(request) {
		if (request.completedRootSegment && null === request.completedPreambleSegments) {
			var collectedPreambleSegments = [], originalRequestByteSize = request.byteSize, hasPendingPreambles = preparePreambleFromSegment(request, request.completedRootSegment, collectedPreambleSegments), preamble = request.renderState.preamble;
			!1 === hasPendingPreambles || preamble.headChunks && preamble.bodyChunks ? request.completedPreambleSegments = collectedPreambleSegments : request.byteSize = originalRequestByteSize;
		}
	}
	function flushSubtree(request, destination, segment, hoistableState) {
		segment.parentFlushed = !0;
		switch (segment.status) {
			case 0: segment.id = request.nextSegmentId++;
			case 5: return hoistableState = segment.id, segment.lastPushedText = !1, segment.textEmbedded = !1, request = request.renderState, writeChunk(destination, placeholder1), writeChunk(destination, request.placeholderPrefix), request = stringToChunk(hoistableState.toString(16)), writeChunk(destination, request), writeChunkAndReturn(destination, placeholder2);
			case 1:
				segment.status = 2;
				var r = !0, chunks = segment.chunks, chunkIdx = 0;
				segment = segment.children;
				for (var childIdx = 0; childIdx < segment.length; childIdx++) {
					for (r = segment[childIdx]; chunkIdx < r.index; chunkIdx++) writeChunk(destination, chunks[chunkIdx]);
					r = flushSegment(request, destination, r, hoistableState);
				}
				for (; chunkIdx < chunks.length - 1; chunkIdx++) writeChunk(destination, chunks[chunkIdx]);
				chunkIdx < chunks.length && (r = writeChunkAndReturn(destination, chunks[chunkIdx]));
				return r;
			case 3: return !0;
			default: throw Error(formatProdErrorMessage(390));
		}
	}
	var flushedByteSize = 0;
	function flushSegment(request, destination, segment, hoistableState) {
		var boundary = segment.boundary;
		if (null === boundary) return flushSubtree(request, destination, segment, hoistableState);
		segment.boundary = null;
		boundary.parentFlushed = !0;
		if (4 === boundary.status) {
			var row = boundary.row;
			null !== row && 0 === --row.pendingTasks && finishSuspenseListRow(request, row);
			boundary = boundary.errorDigest;
			writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
			writeChunk(destination, clientRenderedSuspenseBoundaryError1);
			null != boundary && (writeChunk(destination, clientRenderedSuspenseBoundaryError1A), writeChunk(destination, stringToChunk(escapeTextForBrowser(boundary))), writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial));
			writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2);
			flushSubtree(request, destination, segment, hoistableState);
		} else if (1 !== boundary.status) 0 === boundary.status && (boundary.rootSegmentID = request.nextSegmentId++), 0 < boundary.completedSegments.length && request.partialBoundaries.push(boundary), writeStartPendingSuspenseBoundary(destination, request.renderState, boundary.rootSegmentID), hoistableState && hoistHoistables(hoistableState, boundary.fallbackState), flushSubtree(request, destination, segment, hoistableState);
		else if (!flushingPartialBoundaries && isEligibleForOutlining(request, boundary) && (flushedByteSize + boundary.byteSize > request.progressiveChunkSize || hasSuspenseyContent(boundary.contentState, flushingShell) || boundary.defer)) boundary.rootSegmentID = request.nextSegmentId++, request.completedBoundaries.push(boundary), writeStartPendingSuspenseBoundary(destination, request.renderState, boundary.rootSegmentID), flushSubtree(request, destination, segment, hoistableState);
		else {
			flushedByteSize += boundary.byteSize;
			hoistableState && hoistHoistables(hoistableState, boundary.contentState);
			segment = boundary.row;
			null !== segment && isEligibleForOutlining(request, boundary) && 0 === --segment.pendingTasks && finishSuspenseListRow(request, segment);
			writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
			segment = boundary.completedSegments;
			if (1 !== segment.length) throw Error(formatProdErrorMessage(391));
			flushSegment(request, destination, segment[0], hoistableState);
		}
		return writeChunkAndReturn(destination, endSuspenseBoundary);
	}
	function flushSegmentContainer(request, destination, segment, hoistableState) {
		writeStartSegment(destination, request.renderState, segment.parentFormatContext, segment.id);
		flushSegment(request, destination, segment, hoistableState);
		return writeEndSegment(destination, segment.parentFormatContext);
	}
	function flushCompletedBoundary(request, destination, boundary) {
		flushedByteSize = boundary.byteSize;
		for (var completedSegments = boundary.completedSegments, i = 0; i < completedSegments.length; i++) flushPartiallyCompletedSegment(request, destination, boundary, completedSegments[i]);
		completedSegments.length = 0;
		completedSegments = boundary.row;
		null !== completedSegments && isEligibleForOutlining(request, boundary) && 0 === --completedSegments.pendingTasks && finishSuspenseListRow(request, completedSegments);
		writeHoistablesForBoundary(destination, boundary.contentState, request.renderState);
		completedSegments = request.resumableState;
		request = request.renderState;
		i = boundary.rootSegmentID;
		boundary = boundary.contentState;
		var requiresStyleInsertion = request.stylesToHoist, requiresViewTransitions = 0 !== (completedSegments.instructions & 128);
		request.stylesToHoist = !1;
		writeChunk(destination, request.startInlineScript);
		writeChunk(destination, endOfStartTag);
		requiresStyleInsertion ? (0 === (completedSegments.instructions & 4) && (completedSegments.instructions |= 4, writeChunk(destination, clientRenderScriptFunctionOnly)), 0 === (completedSegments.instructions & 2) && (completedSegments.instructions |= 2, writeChunk(destination, completeBoundaryScriptFunctionOnly)), requiresViewTransitions && 0 === (completedSegments.instructions & 256) && (completedSegments.instructions |= 256, writeChunk(destination, completeBoundaryUpgradeToViewTransitionsInstruction)), 0 === (completedSegments.instructions & 8) ? (completedSegments.instructions |= 8, writeChunk(destination, completeBoundaryWithStylesScript1FullPartial)) : writeChunk(destination, completeBoundaryWithStylesScript1Partial)) : (0 === (completedSegments.instructions & 2) && (completedSegments.instructions |= 2, writeChunk(destination, completeBoundaryScriptFunctionOnly)), requiresViewTransitions && 0 === (completedSegments.instructions & 256) && (completedSegments.instructions |= 256, writeChunk(destination, completeBoundaryUpgradeToViewTransitionsInstruction)), writeChunk(destination, completeBoundaryScript1Partial));
		completedSegments = stringToChunk(i.toString(16));
		writeChunk(destination, request.boundaryPrefix);
		writeChunk(destination, completedSegments);
		writeChunk(destination, completeBoundaryScript2);
		writeChunk(destination, request.segmentPrefix);
		writeChunk(destination, completedSegments);
		requiresStyleInsertion ? (writeChunk(destination, completeBoundaryScript3a), writeStyleResourceDependenciesInJS(destination, boundary)) : writeChunk(destination, completeBoundaryScript3b);
		boundary = writeChunkAndReturn(destination, completeBoundaryScriptEnd);
		return writeBootstrap(destination, request) && boundary;
	}
	function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
		if (2 === segment.status) return !0;
		var hoistableState = boundary.contentState, segmentID = segment.id;
		if (-1 === segmentID) {
			if (-1 === (segment.id = boundary.rootSegmentID)) throw Error(formatProdErrorMessage(392));
			return flushSegmentContainer(request, destination, segment, hoistableState);
		}
		if (segmentID === boundary.rootSegmentID) return flushSegmentContainer(request, destination, segment, hoistableState);
		flushSegmentContainer(request, destination, segment, hoistableState);
		boundary = request.resumableState;
		request = request.renderState;
		writeChunk(destination, request.startInlineScript);
		writeChunk(destination, endOfStartTag);
		0 === (boundary.instructions & 1) ? (boundary.instructions |= 1, writeChunk(destination, completeSegmentScript1Full)) : writeChunk(destination, completeSegmentScript1Partial);
		writeChunk(destination, request.segmentPrefix);
		segmentID = stringToChunk(segmentID.toString(16));
		writeChunk(destination, segmentID);
		writeChunk(destination, completeSegmentScript2);
		writeChunk(destination, request.placeholderPrefix);
		writeChunk(destination, segmentID);
		destination = writeChunkAndReturn(destination, completeSegmentScriptEnd);
		return destination;
	}
	var flushingPartialBoundaries = !1;
	var flushingShell = !1;
	function flushCompletedQueues(request, destination) {
		currentView = /* @__PURE__ */ new Uint8Array(2048);
		writtenBytes = 0;
		try {
			if (!(0 < request.pendingRootTasks)) {
				var i, completedRootSegment = request.completedRootSegment;
				if (null !== completedRootSegment) {
					if (5 === completedRootSegment.status) return;
					var completedPreambleSegments = request.completedPreambleSegments;
					if (null === completedPreambleSegments) return;
					flushedByteSize = request.byteSize;
					var resumableState = request.resumableState, renderState = request.renderState, preamble = renderState.preamble, htmlChunks = preamble.htmlChunks, headChunks = preamble.headChunks, i$jscomp$0;
					if (htmlChunks) {
						for (i$jscomp$0 = 0; i$jscomp$0 < htmlChunks.length; i$jscomp$0++) writeChunk(destination, htmlChunks[i$jscomp$0]);
						if (headChunks) for (i$jscomp$0 = 0; i$jscomp$0 < headChunks.length; i$jscomp$0++) writeChunk(destination, headChunks[i$jscomp$0]);
						else writeChunk(destination, startChunkForTag("head")), writeChunk(destination, endOfStartTag);
					} else if (headChunks) for (i$jscomp$0 = 0; i$jscomp$0 < headChunks.length; i$jscomp$0++) writeChunk(destination, headChunks[i$jscomp$0]);
					var charsetChunks = renderState.charsetChunks;
					for (i$jscomp$0 = 0; i$jscomp$0 < charsetChunks.length; i$jscomp$0++) writeChunk(destination, charsetChunks[i$jscomp$0]);
					charsetChunks.length = 0;
					renderState.preconnects.forEach(flushResource, destination);
					renderState.preconnects.clear();
					var viewportChunks = renderState.viewportChunks;
					for (i$jscomp$0 = 0; i$jscomp$0 < viewportChunks.length; i$jscomp$0++) writeChunk(destination, viewportChunks[i$jscomp$0]);
					viewportChunks.length = 0;
					renderState.fontPreloads.forEach(flushResource, destination);
					renderState.fontPreloads.clear();
					renderState.highImagePreloads.forEach(flushResource, destination);
					renderState.highImagePreloads.clear();
					currentlyFlushingRenderState = renderState;
					renderState.styles.forEach(flushStylesInPreamble, destination);
					currentlyFlushingRenderState = null;
					var importMapChunks = renderState.importMapChunks;
					for (i$jscomp$0 = 0; i$jscomp$0 < importMapChunks.length; i$jscomp$0++) writeChunk(destination, importMapChunks[i$jscomp$0]);
					importMapChunks.length = 0;
					renderState.bootstrapScripts.forEach(flushResource, destination);
					renderState.scripts.forEach(flushResource, destination);
					renderState.scripts.clear();
					renderState.bulkPreloads.forEach(flushResource, destination);
					renderState.bulkPreloads.clear();
					htmlChunks || headChunks || (resumableState.instructions |= 32);
					var hoistableChunks = renderState.hoistableChunks;
					for (i$jscomp$0 = 0; i$jscomp$0 < hoistableChunks.length; i$jscomp$0++) writeChunk(destination, hoistableChunks[i$jscomp$0]);
					for (resumableState = hoistableChunks.length = 0; resumableState < completedPreambleSegments.length; resumableState++) {
						var segments = completedPreambleSegments[resumableState];
						for (renderState = 0; renderState < segments.length; renderState++) flushSegment(request, destination, segments[renderState], null);
					}
					var preamble$jscomp$0 = request.renderState.preamble, headChunks$jscomp$0 = preamble$jscomp$0.headChunks;
					(preamble$jscomp$0.htmlChunks || headChunks$jscomp$0) && writeChunk(destination, endChunkForTag("head"));
					var bodyChunks = preamble$jscomp$0.bodyChunks;
					if (bodyChunks) for (completedPreambleSegments = 0; completedPreambleSegments < bodyChunks.length; completedPreambleSegments++) writeChunk(destination, bodyChunks[completedPreambleSegments]);
					flushingShell = !0;
					flushSegment(request, destination, completedRootSegment, null);
					flushingShell = !1;
					request.completedRootSegment = null;
					var renderState$jscomp$0 = request.renderState;
					if (0 !== request.allPendingTasks || 0 !== request.clientRenderedBoundaries.length || 0 !== request.completedBoundaries.length || null !== request.trackedPostpones && (0 !== request.trackedPostpones.rootNodes.length || null !== request.trackedPostpones.rootSlots)) {
						var resumableState$jscomp$0 = request.resumableState;
						if (0 === (resumableState$jscomp$0.instructions & 64)) {
							resumableState$jscomp$0.instructions |= 64;
							writeChunk(destination, renderState$jscomp$0.startInlineScript);
							if (0 === (resumableState$jscomp$0.instructions & 32)) {
								resumableState$jscomp$0.instructions |= 32;
								var shellId = "_" + resumableState$jscomp$0.idPrefix + "R_";
								writeChunk(destination, completedShellIdAttributeStart);
								writeChunk(destination, stringToChunk(escapeTextForBrowser(shellId)));
								writeChunk(destination, attributeEnd);
							}
							writeChunk(destination, endOfStartTag);
							writeChunk(destination, shellTimeRuntimeScript);
							writeChunkAndReturn(destination, endInlineScript);
						}
					}
					writeBootstrap(destination, renderState$jscomp$0);
				}
				var renderState$jscomp$1 = request.renderState;
				completedRootSegment = 0;
				var viewportChunks$jscomp$0 = renderState$jscomp$1.viewportChunks;
				for (completedRootSegment = 0; completedRootSegment < viewportChunks$jscomp$0.length; completedRootSegment++) writeChunk(destination, viewportChunks$jscomp$0[completedRootSegment]);
				viewportChunks$jscomp$0.length = 0;
				renderState$jscomp$1.preconnects.forEach(flushResource, destination);
				renderState$jscomp$1.preconnects.clear();
				renderState$jscomp$1.fontPreloads.forEach(flushResource, destination);
				renderState$jscomp$1.fontPreloads.clear();
				renderState$jscomp$1.highImagePreloads.forEach(flushResource, destination);
				renderState$jscomp$1.highImagePreloads.clear();
				renderState$jscomp$1.styles.forEach(preloadLateStyles, destination);
				renderState$jscomp$1.scripts.forEach(flushResource, destination);
				renderState$jscomp$1.scripts.clear();
				renderState$jscomp$1.bulkPreloads.forEach(flushResource, destination);
				renderState$jscomp$1.bulkPreloads.clear();
				var hoistableChunks$jscomp$0 = renderState$jscomp$1.hoistableChunks;
				for (completedRootSegment = 0; completedRootSegment < hoistableChunks$jscomp$0.length; completedRootSegment++) writeChunk(destination, hoistableChunks$jscomp$0[completedRootSegment]);
				hoistableChunks$jscomp$0.length = 0;
				var clientRenderedBoundaries = request.clientRenderedBoundaries;
				for (i = 0; i < clientRenderedBoundaries.length; i++) {
					var boundary = clientRenderedBoundaries[i];
					renderState$jscomp$1 = destination;
					var resumableState$jscomp$1 = request.resumableState, renderState$jscomp$2 = request.renderState, id = boundary.rootSegmentID, errorDigest = boundary.errorDigest;
					writeChunk(renderState$jscomp$1, renderState$jscomp$2.startInlineScript);
					writeChunk(renderState$jscomp$1, endOfStartTag);
					0 === (resumableState$jscomp$1.instructions & 4) ? (resumableState$jscomp$1.instructions |= 4, writeChunk(renderState$jscomp$1, clientRenderScript1Full)) : writeChunk(renderState$jscomp$1, clientRenderScript1Partial);
					writeChunk(renderState$jscomp$1, renderState$jscomp$2.boundaryPrefix);
					writeChunk(renderState$jscomp$1, stringToChunk(id.toString(16)));
					writeChunk(renderState$jscomp$1, clientRenderScript1A);
					null != errorDigest && (writeChunk(renderState$jscomp$1, clientRenderErrorScriptArgInterstitial), null == errorDigest ? writeChunk(renderState$jscomp$1, clientRenderErrorScriptNull) : writeChunk(renderState$jscomp$1, stringToChunk(escapeJSStringsForInstructionScripts(errorDigest))));
					var JSCompiler_inline_result = writeChunkAndReturn(renderState$jscomp$1, clientRenderScriptEnd);
					if (!JSCompiler_inline_result) {
						request.destination = null;
						i++;
						clientRenderedBoundaries.splice(0, i);
						return;
					}
				}
				clientRenderedBoundaries.splice(0, i);
				var completedBoundaries = request.completedBoundaries;
				for (i = 0; i < completedBoundaries.length; i++) if (!flushCompletedBoundary(request, destination, completedBoundaries[i])) {
					request.destination = null;
					i++;
					completedBoundaries.splice(0, i);
					return;
				}
				completedBoundaries.splice(0, i);
				completeWriting(destination);
				currentView = /* @__PURE__ */ new Uint8Array(2048);
				writtenBytes = 0;
				flushingPartialBoundaries = !0;
				var partialBoundaries = request.partialBoundaries;
				for (i = 0; i < partialBoundaries.length; i++) {
					var boundary$71 = partialBoundaries[i];
					a: {
						clientRenderedBoundaries = request;
						boundary = destination;
						flushedByteSize = boundary$71.byteSize;
						var completedSegments = boundary$71.completedSegments;
						for (JSCompiler_inline_result = 0; JSCompiler_inline_result < completedSegments.length; JSCompiler_inline_result++) if (!flushPartiallyCompletedSegment(clientRenderedBoundaries, boundary, boundary$71, completedSegments[JSCompiler_inline_result])) {
							JSCompiler_inline_result++;
							completedSegments.splice(0, JSCompiler_inline_result);
							var JSCompiler_inline_result$jscomp$0 = !1;
							break a;
						}
						completedSegments.splice(0, JSCompiler_inline_result);
						var row = boundary$71.row;
						null !== row && row.together && 1 === boundary$71.pendingTasks && (1 === row.pendingTasks ? unblockSuspenseListRow(clientRenderedBoundaries, row, row.hoistables) : row.pendingTasks--);
						JSCompiler_inline_result$jscomp$0 = writeHoistablesForBoundary(boundary, boundary$71.contentState, clientRenderedBoundaries.renderState);
					}
					if (!JSCompiler_inline_result$jscomp$0) {
						request.destination = null;
						i++;
						partialBoundaries.splice(0, i);
						return;
					}
				}
				partialBoundaries.splice(0, i);
				flushingPartialBoundaries = !1;
				var largeBoundaries = request.completedBoundaries;
				for (i = 0; i < largeBoundaries.length; i++) if (!flushCompletedBoundary(request, destination, largeBoundaries[i])) {
					request.destination = null;
					i++;
					largeBoundaries.splice(0, i);
					return;
				}
				largeBoundaries.splice(0, i);
			}
		} finally {
			flushingPartialBoundaries = !1, i = request.postponedState, null !== i && (i.nextSegmentId = request.nextSegmentId), 0 === request.allPendingTasks && 0 === request.clientRenderedBoundaries.length && 0 === request.completedBoundaries.length ? (request.flushScheduled = !1, i = request.resumableState, i.hasBody && writeChunk(destination, endChunkForTag("body")), i.hasHtml && writeChunk(destination, endChunkForTag("html")), completeWriting(destination), endRenderLifetime(request), request.status = 13, destination.close(), request.destination = null) : completeWriting(destination);
		}
	}
	function startWork(request) {
		request.flushScheduled = null !== request.destination;
		scheduleMicrotask(function() {
			return performWork(request);
		});
		scheduleWork(function() {
			10 === request.status && (request.status = 11);
			null === request.trackedPostpones && safelyEmitEarlyPreloads(request, 0 === request.pendingRootTasks);
		});
	}
	function enqueueFlush(request) {
		!1 === request.flushScheduled && 0 === request.pingedTasks.length && null !== request.destination && (request.flushScheduled = !0, scheduleWork(function() {
			var destination = request.destination;
			destination ? flushCompletedQueues(request, destination) : request.flushScheduled = !1;
		}));
	}
	function startFlowing(request, destination) {
		if (12 === request.status) request.status = 13, request = request.fatalError, isRecoverableError(request) && (request = cloneRecoverableErrorAsFatal(request)), closeWithError(destination, request);
		else if (13 !== request.status && null === request.destination) {
			request.destination = destination;
			try {
				flushCompletedQueues(request, destination);
			} catch (error$73) {
				logRecoverableError(request, error$73, {}), fatalError(request, error$73);
			}
		}
	}
	function finishAbort(request, abortableTasks) {
		try {
			if (0 < abortableTasks.size) {
				var error = request.fatalError;
				abortableTasks.forEach(function(task) {
					return finishAbortedTask(task, request, error);
				});
				abortableTasks.clear();
			}
			null !== request.destination && flushCompletedQueues(request, request.destination);
		} catch (error$74) {
			logRecoverableError(request, error$74, {}), fatalError(request, error$74);
		}
	}
	function endRenderLifetime(request) {
		request = request.renderLifetimeController;
		null !== request && request.abort("The render ended.");
	}
	function attachAbortSignal(request, signal) {
		if (signal.aborted) abort(request, signal.reason);
		else {
			var renderLifetimeController = new AbortController();
			request.renderLifetimeController = renderLifetimeController;
			signal.addEventListener("abort", function() {
				abort(request, signal.reason);
			}, { signal: renderLifetimeController.signal });
		}
	}
	function abort(request, reason) {
		if (!(request.aborted || 11 !== request.status && 10 !== request.status)) {
			endRenderLifetime(request);
			var isRecoverableReason = "object" === typeof reason && null !== reason && reason.$$typeof === REACT_RECOVERABLE_TYPE;
			request.aborted = !0;
			reason = isRecoverableReason ? createRecoverableError(reason) : void 0 === reason ? Error(formatProdErrorMessage(432)) : "object" === typeof reason && null !== reason && "function" === typeof reason.then ? Error(formatProdErrorMessage(530)) : reason;
			request.fatalError = reason;
			var abortableTasks = request.abortableTasks;
			abortableTasks.forEach(function(task) {
				return abortTask(task, request);
			});
			scheduleWork(function() {
				return finishAbort(request, abortableTasks);
			});
		}
	}
	function addToReplayParent(node, parentKeyPath, trackedPostpones) {
		if (null === parentKeyPath) trackedPostpones.rootNodes.push(node);
		else {
			var workingMap = trackedPostpones.workingMap, parentNode = workingMap.get(parentKeyPath);
			void 0 === parentNode && (parentNode = [
				parentKeyPath[1],
				parentKeyPath[2],
				[],
				null
			], workingMap.set(parentKeyPath, parentNode), addToReplayParent(parentNode, parentKeyPath[0], trackedPostpones));
			parentNode[2].push(node);
		}
	}
	function getPostponedState(request) {
		var trackedPostpones = request.trackedPostpones;
		if (null === trackedPostpones || 0 === trackedPostpones.rootNodes.length && null === trackedPostpones.rootSlots) return request.trackedPostpones = null;
		var hasFlushableShell = null === request.completedRootSegment || 5 !== request.completedRootSegment.status && null !== request.completedPreambleSegments;
		if (hasFlushableShell) {
			var nextSegmentId = request.nextSegmentId;
			var replaySlots = trackedPostpones.rootSlots;
			var resumableState = request.resumableState;
			resumableState.bootstrapScriptContent = void 0;
			resumableState.bootstrapScripts = void 0;
			resumableState.bootstrapModules = void 0;
		} else {
			nextSegmentId = 0;
			replaySlots = -1;
			resumableState = request.resumableState;
			var renderState = request.renderState;
			resumableState.nextFormID = 0;
			resumableState.hasBody = !1;
			resumableState.hasHtml = !1;
			resumableState.unknownResources = { font: renderState.resets.font };
			resumableState.dnsResources = renderState.resets.dns;
			resumableState.connectResources = renderState.resets.connect;
			resumableState.imageResources = renderState.resets.image;
			resumableState.styleResources = renderState.resets.style;
			resumableState.scriptResources = {};
			resumableState.moduleUnknownResources = {};
			resumableState.moduleScriptResources = {};
			resumableState.instructions = 0;
		}
		trackedPostpones = {
			nextSegmentId,
			rootFormatContext: request.rootFormatContext,
			progressiveChunkSize: request.progressiveChunkSize,
			resumableState: request.resumableState,
			replayNodes: trackedPostpones.rootNodes,
			replaySlots
		};
		hasFlushableShell && (request.postponedState = trackedPostpones);
		return trackedPostpones;
	}
	function ensureCorrectIsomorphicReactVersion() {
		var isomorphicReactPackageVersion = React.version;
		if ("19.3.0" !== isomorphicReactPackageVersion) throw Error(formatProdErrorMessage(527, isomorphicReactPackageVersion, "19.3.0"));
	}
	ensureCorrectIsomorphicReactVersion();
	ensureCorrectIsomorphicReactVersion();
	exports.prerender = function(children, options) {
		return new Promise(function(resolve, reject) {
			var onHeaders = options ? options.onHeaders : void 0, onHeadersImpl;
			onHeaders && (onHeadersImpl = function(headersDescriptor) {
				onHeaders(new Headers(headersDescriptor));
			});
			var resources = createResumableState(options ? options.identifierPrefix : void 0, options ? options.unstable_externalRuntimeSrc : void 0, options ? options.bootstrapScriptContent : void 0, options ? options.bootstrapScripts : void 0, options ? options.bootstrapModules : void 0), request = createPrerenderRequest(children, resources, createRenderState(resources, void 0, options ? options.unstable_externalRuntimeSrc : void 0, options ? options.importMap : void 0, onHeadersImpl, options ? options.maxHeadersLength : void 0), createRootFormatContext(options ? options.namespaceURI : void 0), options ? options.progressiveChunkSize : void 0, options ? options.onError : void 0, options ? options.onBrowserBailout : void 0, function() {
				var stream = new ReadableStream({
					type: "bytes",
					pull: function(controller) {
						startFlowing(request, controller);
					},
					cancel: function(reason) {
						request.destination = null;
						abort(request, reason);
					}
				}, { highWaterMark: 0 });
				stream = {
					postponed: getPostponedState(request),
					prelude: stream
				};
				resolve(stream);
			}, void 0, void 0, reject);
			options && options.signal && attachAbortSignal(request, options.signal);
			startWork(request);
		});
	};
	exports.renderToReadableStream = function(children, options) {
		return new Promise(function(resolve, reject) {
			var onFatalError, onAllReady, allReady = new Promise(function(res, rej) {
				onAllReady = res;
				onFatalError = rej;
			}), onHeaders = options ? options.onHeaders : void 0, onHeadersImpl;
			onHeaders && (onHeadersImpl = function(headersDescriptor) {
				onHeaders(new Headers(headersDescriptor));
			});
			var resumableState = createResumableState(options ? options.identifierPrefix : void 0, options ? options.unstable_externalRuntimeSrc : void 0, options ? options.bootstrapScriptContent : void 0, options ? options.bootstrapScripts : void 0, options ? options.bootstrapModules : void 0), request = createRequest(children, resumableState, createRenderState(resumableState, options ? options.nonce : void 0, options ? options.unstable_externalRuntimeSrc : void 0, options ? options.importMap : void 0, onHeadersImpl, options ? options.maxHeadersLength : void 0), createRootFormatContext(options ? options.namespaceURI : void 0), options ? options.progressiveChunkSize : void 0, options ? options.onError : void 0, options ? options.onBrowserBailout : void 0, onAllReady, function() {
				var stream = new ReadableStream({
					type: "bytes",
					pull: function(controller) {
						startFlowing(request, controller);
					},
					cancel: function(reason) {
						request.destination = null;
						abort(request, reason);
					}
				}, { highWaterMark: 0 });
				stream.allReady = allReady;
				resolve(stream);
			}, function(error) {
				allReady.catch(function() {});
				reject(error);
			}, onFatalError, options ? options.formState : void 0);
			options && options.signal && attachAbortSignal(request, options.signal);
			startWork(request);
		});
	};
	exports.resume = function(children, postponedState, options) {
		return new Promise(function(resolve, reject) {
			var onFatalError, onAllReady, allReady = new Promise(function(res, rej) {
				onAllReady = res;
				onFatalError = rej;
			}), request = resumeRequest(children, postponedState, createRenderState(postponedState.resumableState, options ? options.nonce : void 0, void 0, void 0, void 0, void 0), options ? options.onError : void 0, options ? options.onBrowserBailout : void 0, onAllReady, function() {
				var stream = new ReadableStream({
					type: "bytes",
					pull: function(controller) {
						startFlowing(request, controller);
					},
					cancel: function(reason) {
						request.destination = null;
						abort(request, reason);
					}
				}, { highWaterMark: 0 });
				stream.allReady = allReady;
				resolve(stream);
			}, function(error) {
				allReady.catch(function() {});
				reject(error);
			}, onFatalError);
			options && options.signal && attachAbortSignal(request, options.signal);
			startWork(request);
		});
	};
	exports.resumeAndPrerender = function(children, postponedState, options) {
		return new Promise(function(resolve, reject) {
			var request = resumeAndPrerenderRequest(children, postponedState, createRenderState(postponedState.resumableState, void 0, void 0, void 0, void 0, void 0), options ? options.onError : void 0, options ? options.onBrowserBailout : void 0, function() {
				var stream = new ReadableStream({
					type: "bytes",
					pull: function(controller) {
						startFlowing(request, controller);
					},
					cancel: function(reason) {
						request.destination = null;
						abort(request, reason);
					}
				}, { highWaterMark: 0 });
				stream = {
					postponed: getPostponedState(request),
					prelude: stream
				};
				resolve(stream);
			}, void 0, void 0, reject);
			options && options.signal && attachAbortSignal(request, options.signal);
			startWork(request);
		});
	};
	exports.version = "19.3.0";
}));
//#endregion
//#region node_modules/react-dom/server.browser.js
var require_server_browser = /* @__PURE__ */ __commonJSMin(((exports) => {
	var l = require_react_dom_server_legacy_browser_production();
	var s = require_react_dom_server_browser_production();
	exports.version = l.version;
	exports.renderToString = l.renderToString;
	exports.renderToStaticMarkup = l.renderToStaticMarkup;
	exports.renderToReadableStream = s.renderToReadableStream;
	exports.resume = s.resume;
}));
//#endregion
//#region node_modules/sanity/lib/SearchProvider-4dX7s3c3.js
var import_server_browser = require_server_browser();
var INITIAL_STATE = {
	value: null,
	loading: !0
};
/**
* @beta
* Returns the organization ID for the current project.
* */
function useProjectOrganizationId() {
	let $ = (0, import_compiler_runtime.c)(2), projectStore = useProjectStore(), t0;
	return $[0] === projectStore ? t0 = $[1] : (t0 = projectStore.getOrganizationId().pipe(map(_temp$7), startWith({
		value: null,
		loading: !0
	})), $[0] = projectStore, $[1] = t0), useObservable(t0, INITIAL_STATE);
}
function _temp$7(res) {
	return {
		value: res,
		loading: !1
	};
}
function useRenderingContext() {
	let { renderingContext, getRenderingContext } = useRenderingContextStore();
	return useSyncObservable(renderingContext, getRenderingContext);
}
var StyledButton = gt(Button$1).withConfig({
	displayName: "StyledButton",
	componentId: "sc-aoq3g8-0"
})`position:relative;& > span:nth-child(2){position:absolute;top:6px;right:6px;padding:0;}`;
var Dot = /* @__PURE__ */ gt.div.withConfig({
	displayName: "Dot",
	componentId: "sc-aoq3g8-1"
})({
	width: 4,
	height: 4,
	borderRadius: 3,
	boxShadow: "0 0 0 1px var(--card-bg-color)"
});
/** @hidden @beta */
function StatusButton(props) {
	let $ = (0, import_compiler_runtime.c)(19), disabledProp, label, ref, restProps, t0, tone;
	$[0] === props ? (disabledProp = $[1], label = $[2], ref = $[3], restProps = $[4], t0 = $[5], tone = $[6]) : ({ref, disabled: disabledProp, "aria-label": label, mode: t0, tone, ...restProps} = props, $[0] = props, $[1] = disabledProp, $[2] = label, $[3] = ref, $[4] = restProps, $[5] = t0, $[6] = tone);
	let mode = t0 === void 0 ? "bleed" : t0, t1 = `var(--card-badge-${tone}-dot-color)`, t2;
	$[7] === t1 ? t2 = $[8] : (t2 = { backgroundColor: t1 }, $[7] = t1, $[8] = t2);
	let dotStyle = t2, disabled = !!disabledProp, t3;
	$[9] !== dotStyle || $[10] !== tone ? (t3 = tone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dot, { style: dotStyle }), $[9] = dotStyle, $[10] = tone, $[11] = t3) : t3 = $[11];
	let t4;
	return $[12] !== disabled || $[13] !== label || $[14] !== mode || $[15] !== ref || $[16] !== restProps || $[17] !== t3 ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledButton, {
		"data-ui": "StatusButton",
		...restProps,
		"aria-label": label,
		disabled,
		mode,
		ref,
		children: t3
	}), $[12] = disabled, $[13] = label, $[14] = mode, $[15] = ref, $[16] = restProps, $[17] = t3, $[18] = t4) : t4 = $[18], t4;
}
/**
* Returns whether or not there is a `sanity` entry in an import map in the current document,
* which usually means that this studio is "auto updating".
* @internal
*/
var hasSanityPackageInImportMap = () => !!getSanityImportMapUrl();
var getSanityImportMapUrl = () => {
	if (typeof document > "u" || !("querySelectorAll" in document)) return;
	let importMapEntries = document.querySelectorAll("script[type=\"importmap\"]"), found;
	return Array.from(importMapEntries).some((entry) => {
		if (!entry.textContent) return !1;
		let imports = JSON.parse(entry.textContent).imports || {};
		return "sanity" in imports && (found = imports.sanity, !0);
	}), found;
};
function checkIsStaging() {
	if (typeof globalThis < "u" && globalThis.__SANITY_STAGING__ === !0) return !0;
	let importMapUrl = getSanityImportMapUrl();
	return !!(importMapUrl && importMapUrl.includes("sanity-cdn.work"));
}
/**
* Whether the current environment is staging.
*
* Checks three signals:
* 1. The `__SANITY_STAGING__` build-time constant (set by Vite's `define` when building with
*    `SANITY_INTERNAL_ENV=staging`). This works for traditionally built studios.
* 2. The `globalThis.__SANITY_STAGING__` runtime global. This survives tree-shaking (unlike the
*    bare identifier above, which Vite replaces statically) and can be set by injecting a
*    `<script>` tag before the module scripts run - used for auto-updating staging deploys
*    where the studio code is loaded from the production CDN.
* 3. The import map URL - auto-updating studios load packages from a CDN, and the CDN host
*    encodes the environment (`sanity-cdn.work` for staging, `sanity-cdn.com` for production).
*    Since the import map is how the code gets loaded, it's always available when this runs.
*
* @internal
*/
var isStaging = checkIsStaging();
/**
* @internal
*/
function createFilterDefinitionDictionary(filterDefinitions) {
	return filterDefinitions.reduce((acc, val) => (acc[val.name] = val, acc), {});
}
/**
* @alpha
*/
function defineSearchFilter(filterDef) {
	return filterDef;
}
function getFilterDefinition(definitions, filterName) {
	return definitions[filterName];
}
function getSupportedFieldTypes(filterDefs) {
	return filterDefs.reduce((acc, val) => (val.type === "field" && acc.push(val.fieldType), acc), []);
}
/**
* @internal
*/
function useSearchState() {
	let context = (0, import_react.useContext)(SearchContext);
	if (context === void 0) throw Error("useSearchState must be used within an SearchProvider");
	return context;
}
function getSchemaField(schemaType, fieldPath) {
	let paths = fieldPath.split("."), firstPath = paths[0];
	if (firstPath && isObjectSchemaType(schemaType)) {
		let field = schemaType.fields.find((f) => f.name === firstPath);
		if (field) {
			let nextPath = paths.slice(1).join(".");
			return nextPath ? getSchemaField(field.type, nextPath) : field;
		}
	}
}
function getMissingDocumentFallback(document) {
	return {
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: document.title ? String(document.title) : "Missing document" }),
		subtitle: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: document.title ? `Missing document ID: ${document._id}` : `Document ID: ${document._id}` }),
		media: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WarningOutlineIcon, {})
	};
}
var EMPTY$1 = {};
/**
* Obtain document preview values used in <SanityPreview> and <SanityDefaultPreview> components.
* Also displays fallback values if the document cannot be found.
*
* @internal
*/
function getPreviewValueWithFallback({ snapshot, original, fallback }) {
	return snapshot || original || getMissingDocumentFallback(fallback || EMPTY$1);
}
var INITIAL_PREVIEW_STATE = {
	snapshot: null,
	isLoading: !0,
	original: null
};
var SearchResultItemPreviewBox = gt(Box).withConfig({
	displayName: "SearchResultItemPreviewBox",
	componentId: "sc-rxs4k6-0"
})`@supports (-webkit-overflow-scrolling:touch){* [data-ui='Box']{background-attachment:scroll;}}`;
/**
* @internal
*/
function SearchResultItemPreview(t0) {
	let $ = (0, import_compiler_runtime.c)(35), { documentId, documentType, layout, presence, schemaType, showBadge: t1, perspective, variant } = t0, showBadge = t1 === void 0 || t1, documentPreviewStore = useDocumentPreviewStore(), t2;
	$[0] !== documentId || $[1] !== documentPreviewStore || $[2] !== perspective || $[3] !== schemaType || $[4] !== variant ? (t2 = getPreviewStateObservable(documentPreviewStore, schemaType, documentId, perspective, void 0, variant), $[0] = documentId, $[1] = documentPreviewStore, $[2] = perspective, $[3] = schemaType, $[4] = variant, $[5] = t2) : t2 = $[5];
	let observable = t2, t3;
	$[6] !== documentId || $[7] !== documentType ? (t3 = {
		_id: documentId,
		_type: documentType
	}, $[6] = documentId, $[7] = documentType, $[8] = t3) : t3 = $[8];
	let documentStub = t3, { isLoading, snapshot, original } = useObservable(observable, INITIAL_PREVIEW_STATE), t4;
	$[9] === documentId ? t4 = $[10] : (t4 = { documentId }, $[9] = documentId, $[10] = t4);
	let { versions } = useDocumentVersions(t4), t5;
	bb0: {
		if (isLoading) {
			t5 = null;
			break bb0;
		}
		let t6;
		$[11] === presence ? t6 = $[12] : (t6 = presence && presence.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentPreviewPresence, { presence }), $[11] = presence, $[12] = t6);
		let t7;
		$[13] !== schemaType.title || $[14] !== showBadge ? (t7 = showBadge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: schemaType.title }), $[13] = schemaType.title, $[14] = showBadge, $[15] = t7) : t7 = $[15];
		let t8;
		$[16] === versions ? t8 = $[17] : (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentVersionsStatusIndicator, { documentVersions: versions }), $[16] = versions, $[17] = t8);
		let t9;
		$[18] !== t6 || $[19] !== t7 || $[20] !== t8 ? (t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
			alignItems: "center",
			gap: 3,
			children: [
				t6,
				t7,
				t8
			]
		}), $[18] = t6, $[19] = t7, $[20] = t8, $[21] = t9) : t9 = $[21], t5 = t9;
	}
	let status = t5, t6;
	$[22] === documentId ? t6 = $[23] : (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentVersionsStatus, { documentGroupId: documentId }), $[22] = documentId, $[23] = t6);
	let tooltip = t6, t7;
	$[24] !== documentStub || $[25] !== original || $[26] !== snapshot ? (t7 = getPreviewValueWithFallback({
		snapshot,
		original,
		fallback: documentStub
	}), $[24] = documentStub, $[25] = original, $[26] = snapshot, $[27] = t7) : t7 = $[27];
	let t8 = isLoading ?? !0, t9 = layout || "default", t10;
	return $[28] !== schemaType.icon || $[29] !== status || $[30] !== t7 || $[31] !== t8 || $[32] !== t9 || $[33] !== tooltip ? (t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchResultItemPreviewBox, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SanityDefaultPreview, {
		...t7,
		isPlaceholder: t8,
		layout: t9,
		icon: schemaType.icon,
		status,
		tooltip
	}) }), $[28] = schemaType.icon, $[29] = status, $[30] = t7, $[31] = t8, $[32] = t9, $[33] = tooltip, $[34] = t10) : t10 = $[34], t10;
}
function SearchResultItem(t0) {
	let $ = (0, import_compiler_runtime.c)(71), disableIntentLink, documentId, documentType, layout, onClick, onItemSelect, previewPerspective, previewVariant, rest;
	$[0] === t0 ? (disableIntentLink = $[1], documentId = $[2], documentType = $[3], layout = $[4], onClick = $[5], onItemSelect = $[6], previewPerspective = $[7], previewVariant = $[8], rest = $[9]) : ({disableIntentLink, documentId, documentType, layout, onClick, onItemSelect, previewPerspective, previewVariant, ...rest} = t0, $[0] = t0, $[1] = disableIntentLink, $[2] = documentId, $[3] = documentType, $[4] = layout, $[5] = onClick, $[6] = onItemSelect, $[7] = previewPerspective, $[8] = previewVariant, $[9] = rest);
	let schema = useSchema(), t1;
	$[10] !== documentType || $[11] !== schema ? (t1 = schema.get(documentType), $[10] = documentType, $[11] = schema, $[12] = t1) : t1 = $[12];
	let type = t1, documentPresence = useDocumentPresence(documentId);
	type?.name;
	let t2;
	$[13] === documentId ? t2 = $[14] : (t2 = getPublishedId(documentId), $[13] = documentId, $[14] = t2);
	let t3 = type?.name, t4;
	$[15] !== t2 || $[16] !== t3 ? (t4 = {
		id: t2,
		type: t3
	}, $[15] = t2, $[16] = t3, $[17] = t4) : t4 = $[17];
	let params = t4, t5;
	$[18] === params ? t5 = $[19] : (t5 = {
		intent: "edit",
		params
	}, $[18] = params, $[19] = t5);
	let { onClick: onIntentClick, href } = useIntentLink(t5), { state } = useSearchState(), { t } = useTranslation$1(), grantsStore = useGrantsStore(), t6;
	$[20] !== documentId || $[21] !== documentType || $[22] !== grantsStore || $[23] !== state.canDisableAction ? (t6 = state.canDisableAction ? grantsStore.checkDocumentPermission("create", {
		_id: documentId,
		_type: documentType
	}) : of(null), $[20] = documentId, $[21] = documentType, $[22] = grantsStore, $[23] = state.canDisableAction, $[24] = t6) : t6 = $[24];
	let hasCreatePermission = useSyncObservable(t6, null)?.granted, t7;
	$[25] !== documentId || $[26] !== state.disabledDocumentIds ? (t7 = state.disabledDocumentIds?.some((id) => id.includes(getPublishedId(documentId))), $[25] = documentId, $[26] = state.disabledDocumentIds, $[27] = t7) : t7 = $[27];
	let existsInRelease = t7, disabledAction = !hasCreatePermission && state.canDisableAction || existsInRelease, t8;
	$[28] !== documentId || $[29] !== documentType ? (t8 = {
		_id: documentId,
		_type: documentType
	}, $[28] = documentId, $[29] = documentType, $[30] = t8) : t8 = $[30];
	let documentStub = t8, t9;
	$[31] !== documentStub || $[32] !== previewPerspective || $[33] !== previewVariant || $[34] !== type ? (t9 = {
		enabled: !0,
		schemaType: type,
		value: documentStub,
		perspectiveStack: previewPerspective,
		variant: previewVariant
	}, $[31] = documentStub, $[32] = previewPerspective, $[33] = previewVariant, $[34] = type, $[35] = t9) : t9 = $[35];
	let preview = useValuePreview(t9), t10;
	$[36] !== disableIntentLink || $[37] !== documentId || $[38] !== documentType || $[39] !== onClick || $[40] !== onIntentClick || $[41] !== onItemSelect || $[42] !== preview ? (t10 = (e) => {
		onItemSelect?.({
			_id: documentId,
			_type: documentType,
			title: preview.value?.title
		}), disableIntentLink || onIntentClick(e), onClick?.(e);
	}, $[36] = disableIntentLink, $[37] = documentId, $[38] = documentType, $[39] = onClick, $[40] = onIntentClick, $[41] = onItemSelect, $[42] = preview, $[43] = t10) : t10 = $[43];
	let handleClick = t10;
	if (!type) return null;
	let t11 = disabledAction ? void 0 : "a", t12 = disabledAction || disableIntentLink ? void 0 : href, t13 = disabledAction ? "none" : void 0, t14 = disabledAction ? .5 : 1, t15;
	$[44] !== t13 || $[45] !== t14 ? (t15 = {
		pointerEvents: t13,
		opacity: t14
	}, $[44] = t13, $[45] = t14, $[46] = t15) : t15 = $[46];
	let t16;
	$[47] !== documentId || $[48] !== documentPresence || $[49] !== documentType || $[50] !== layout || $[51] !== previewPerspective || $[52] !== previewVariant || $[53] !== type ? (t16 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchResultItemPreview, {
		documentId,
		documentType,
		layout,
		perspective: previewPerspective,
		variant: previewVariant,
		presence: documentPresence,
		schemaType: type
	}), $[47] = documentId, $[48] = documentPresence, $[49] = documentType, $[50] = layout, $[51] = previewPerspective, $[52] = previewVariant, $[53] = type, $[54] = t16) : t16 = $[54];
	let t17;
	$[55] !== handleClick || $[56] !== t11 || $[57] !== t12 || $[58] !== t15 || $[59] !== t16 ? (t17 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewCard$1, {
		as: t11,
		"data-as": "a",
		flex: 1,
		href: t12,
		onClick: handleClick,
		radius: 2,
		tabIndex: -1,
		style: t15,
		children: t16
	}), $[55] = handleClick, $[56] = t11, $[57] = t12, $[58] = t15, $[59] = t16, $[60] = t17) : t17 = $[60];
	let t18;
	$[61] !== rest || $[62] !== t17 ? (t18 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		...rest,
		children: t17
	}), $[61] = rest, $[62] = t17, $[63] = t18) : t18 = $[63];
	let content = t18, t19;
	$[64] !== existsInRelease || $[65] !== t ? (t19 = t(existsInRelease ? "release.action.already-exists-in-release" : "release.action.permission.error"), $[64] = existsInRelease, $[65] = t, $[66] = t19) : t19 = $[66];
	let tooltipContent = t19, t20;
	return $[67] !== content || $[68] !== disabledAction || $[69] !== tooltipContent ? (t20 = disabledAction ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
		content: tooltipContent,
		placement: "top",
		children: content
	}) : content, $[67] = content, $[68] = disabledAction, $[69] = tooltipContent, $[70] = t20) : t20 = $[70], t20;
}
var GLOBAL_SEARCH_KEY_MODIFIER = typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform) ? "Cmd" : "Ctrl";
var POPOVER_INPUT_PADDING = studioTheme.space[4];
/**
* Compares two sets of search terms for equality, treating schema type name as type identity.
*
* Compiled schema types are cyclic object graphs, so a generic deep comparison of two distinct
* type instances can recurse without terminating. Within a workspace the name identifies the
* type, and comparing names also avoids walking the type graph.
*
* @internal
*/
function isEqualSearchTerms(a, b) {
	if (a === b) return !0;
	let { types: aTypes, ...aRest } = a, { types: bTypes, ...bRest } = b;
	return aTypes.length === bTypes.length && aTypes.every((type, index) => type.name === bTypes[index].name) && dequal(aRest, bRest);
}
/**
* Check if current search terms are valid.
*
* By default, completely empty search terms (no search query, types or filter) are considered invalid,
* unless `allowEmptyQueries` is true.
*/
function hasSearchableTerms({ allowEmptyQueries, terms }) {
	let hasQuery = allowEmptyQueries ? !0 : terms.query.length > 0, hasFilter = !!terms.filter, hasSelectedTypes = terms.types.length > 0;
	return hasQuery || hasFilter || hasSelectedTypes;
}
var isDocumentType = (type) => !!(type.type && type.type.name === "document");
var isObjectType = (type) => type.jsonType === "object";
var isIgnoredType = (type) => type.name.startsWith("sanity.") && type.name !== "sanity.previewUrlSecret";
var getSearchableTypes = (schema, explicitlyAllowedTypes = []) => schema.getTypeNames().map((typeName) => schema.get(typeName)).filter(isNonNullable).filter((type) => isDocumentType(type) && !isIgnoredType(type) || explicitlyAllowedTypes.includes(type.name)).filter(isObjectType);
/**
* Returns a list of all available document types filtered by a search string.
* Types containing the search string in its `title` or `name` will be returned.
*/
function getSelectableOmnisearchTypes(schema, typeFilter) {
	return getSearchableOmnisearchTypes(schema).filter((type) => inTypeFilter(type, typeFilter)).sort(sortTypes);
}
/**
* Return all searchable document types that are visible to omnisearch.
* Documents with `__experimental_omnisearch_visibility: false` will be hidden.
*/
function getSearchableOmnisearchTypes(schema) {
	return getSearchableTypes(schema).filter((type) => type.__experimental_omnisearch_visibility !== !1);
}
function sortTypes(a, b) {
	return (a.title ?? a.name).localeCompare(b.title ?? b.name);
}
function inTypeFilter(type, typeFilter) {
	return !typeFilter || (type.title ?? type.name).toLowerCase().includes(typeFilter?.toLowerCase());
}
function sanitizeRequest(request) {
	return {
		...request,
		terms: {
			...request.terms,
			filter: request.terms.filter?.trim(),
			query: request.terms.query.trim()
		}
	};
}
function isEqualSearchRequest(a, b) {
	if (a === b) return !0;
	if (!a || !b) return !1;
	let { terms: aTerms, ...aRest } = a, { terms: bTerms, ...bRest } = b;
	return isEqualSearchTerms(aTerms, bTerms) && dequal(aRest, bRest);
}
function isEqualSearchState(a, b) {
	if (a === b) return !0;
	let { error: aError, terms: aTerms, ...aRest } = a, { error: bError, terms: bTerms, ...bRest } = b;
	return (aError === bError || aError !== null && bError !== null && aError.name === bError.name && aError.message === bError.message) && isEqualSearchTerms(aTerms, bTerms) && dequal(aRest, bRest);
}
function useSearch(t0) {
	let $ = (0, import_compiler_runtime.c)(37), { allowEmptyQueries, initialState, onComplete, onError, onStart, schema } = t0, client = useClient(DEFAULT_STUDIO_CLIENT_OPTIONS), maxFieldDepth = useSearchMaxFieldDepth(), { strategy } = useWorkspace().search, t1;
	$[0] !== client || $[1] !== maxFieldDepth || $[2] !== schema || $[3] !== strategy ? (t1 = createSearch(getSearchableOmnisearchTypes(schema), client, {
		tag: "search.global",
		unique: !0,
		strategy,
		maxDepth: maxFieldDepth
	}), $[0] = client, $[1] = maxFieldDepth, $[2] = schema, $[3] = strategy, $[4] = t1) : t1 = $[4];
	let search = t1, [machine] = (0, import_react.useState)(_temp$6), t2;
	if ($[5] !== allowEmptyQueries || $[6] !== machine || $[7] !== search) {
		let t3;
		$[9] === search ? t3 = $[10] : (t3 = (t4) => {
			let { input } = t4;
			return search(input.query.terms, input.query.options);
		}, $[9] = search, $[10] = t3);
		let t4;
		$[11] === allowEmptyQueries ? t4 = $[12] : (t4 = (t5) => {
			let { context: context_0 } = t5;
			return context_0.query !== null && hasSearchableTerms({
				allowEmptyQueries,
				terms: context_0.query.terms
			});
		}, $[11] = allowEmptyQueries, $[12] = t4), t2 = machine.provide({
			actors: { search: fromObservable(t3) },
			guards: {
				"is same query": _temp2$2,
				"should search": t4
			},
			delays: { debounce: _temp3 }
		}), $[5] = allowEmptyQueries, $[6] = machine, $[7] = search, $[8] = t2;
	} else t2 = $[8];
	let t3;
	$[13] === Symbol.for("react.memo_cache_sentinel") ? (t3 = { input: {} }, $[13] = t3) : t3 = $[13];
	let actorRef = useActorRef(t2, t3), t4;
	$[14] === onStart ? t4 = $[15] : (t4 = () => onStart?.(), $[14] = onStart, $[15] = t4);
	let handleSearchStarted = (0, import_react.useEffectEvent)(t4), t5;
	$[16] === onComplete ? t5 = $[17] : (t5 = (result) => onComplete?.({
		hits: result.hits,
		nextCursor: result.nextCursor
	}), $[16] = onComplete, $[17] = t5);
	let handleSearchCompleted = (0, import_react.useEffectEvent)(t5), t6;
	$[18] === onComplete ? t6 = $[19] : (t6 = () => onComplete?.({
		hits: [],
		nextCursor: void 0
	}), $[18] = onComplete, $[19] = t6);
	let handleSearchSkipped = (0, import_react.useEffectEvent)(t6), t7;
	$[20] === onError ? t7 = $[21] : (t7 = (error) => onError?.(error), $[20] = onError, $[21] = t7);
	let handleSearchFailed = (0, import_react.useEffectEvent)(t7), t8;
	$[22] !== actorRef || $[23] !== handleSearchCompleted || $[24] !== handleSearchFailed || $[25] !== handleSearchSkipped || $[26] !== handleSearchStarted ? (t8 = () => {
		let subscriptions = [
			actorRef.on("search started", () => handleSearchStarted()),
			actorRef.on("search completed", (event_0) => handleSearchCompleted(event_0.result)),
			actorRef.on("search skipped", () => handleSearchSkipped()),
			actorRef.on("search failed", (event_1) => handleSearchFailed(event_1.error))
		];
		return () => subscriptions.forEach(_temp4);
	}, $[22] = actorRef, $[23] = handleSearchCompleted, $[24] = handleSearchFailed, $[25] = handleSearchSkipped, $[26] = handleSearchStarted, $[27] = t8) : t8 = $[27];
	let t9;
	$[28] === actorRef ? t9 = $[29] : (t9 = [actorRef], $[28] = actorRef, $[29] = t9), (0, import_react.useEffect)(t8, t9);
	let [initialSearchState] = (0, import_react.useState)(initialState), t10;
	$[30] === initialSearchState ? t10 = $[31] : (t10 = (state) => {
		let { error: error_0, query, result: result_0, searchInterrupted, settledQuery } = state.context;
		if (query === null || state.matches("debouncing") && settledQuery === null && !searchInterrupted) return initialSearchState;
		let activeQuery = state.matches("debouncing") ? settledQuery ?? query : query;
		return {
			error: error_0,
			hits: state.matches({ searching: "pending" }) ? [] : result_0?.hits ?? [],
			loading: state.matches("searching") || state.matches("debouncing") && searchInterrupted,
			options: activeQuery.options,
			terms: activeQuery.terms
		};
	}, $[30] = initialSearchState, $[31] = t10);
	let searchState = useSelector(actorRef, t10, isEqualSearchState), t11;
	$[32] === actorRef ? t11 = $[33] : (t11 = (request) => actorRef.send({
		type: "search",
		query: sanitizeRequest(request)
	}), $[32] = actorRef, $[33] = t11);
	let handleSearch = t11, t12;
	return $[34] !== handleSearch || $[35] !== searchState ? (t12 = {
		handleSearch,
		searchState
	}, $[34] = handleSearch, $[35] = searchState, $[36] = t12) : t12 = $[36], t12;
}
function _temp4(subscription) {
	return subscription.unsubscribe();
}
function _temp3(t0) {
	let { context: context_1 } = t0;
	return context_1.query?.debounceTime || 300;
}
function _temp2$2(t0) {
	let { context, event } = t0;
	return isEqualSearchRequest(context.query, event.query);
}
function _temp$6() {
	return defineSearchMachine();
}
/**
* From the list of provided document types, return as many type names as possible that can fit
* within the `availableCharacters` parameter, formatted by title where available. Includes the
* number of remaining types that were _not_ included in the returned array of types, so a UI can
* choose to display a "+x more" suffix.
*
* @see documentTypesTruncated for a helper function that returns a formatted string
*
* @param options - Options object
* @returns An object containing truncated list of types, as well as number of excluded types
* @internal
*/
function getDocumentTypesTruncated({ availableCharacters = 40, types }) {
	if (types.length === 0) return {
		remainingCount: 0,
		types: []
	};
	/**
	* Get the total number of visible document types whose titles fit within `availableCharacters` count.
	* The first document is always included, regardless of whether it fits within `availableCharacters` or not.
	*/
	let visibleTypes = types.reduce((function() {
		let remaining = availableCharacters;
		return function(acc, val, index) {
			let title = typeTitle(val);
			return remaining -= title.length, (index === 0 || availableCharacters > title.length && remaining > title.length) && acc.push(val), acc;
		};
	})(), []);
	return {
		remainingCount: types.length - visibleTypes.length,
		types: visibleTypes.map(typeTitle)
	};
}
/**
* From the list of provided document types, return as many type names as possible that can fit
* within the `availableCharacters` parameter, formatted by title where available. Includes the
* number of remaining types that were _not_ included in the returned array of types, so a UI can
* choose to display a "+x more" suffix.
*
* @param options - Options object
* @returns A formatted string of types
* @internal
*/
function documentTypesTruncated({ t, availableCharacters, types }) {
	if (types.length === 0) return t("search.document-type-list-all-types");
	let { remainingCount, types: visibleTypes } = getDocumentTypesTruncated({
		availableCharacters,
		types
	});
	return t(remainingCount > 0 ? "search.document-type-list-truncated" : "search.document-type-list", {
		count: remainingCount,
		types: visibleTypes,
		formatParams: { types: {
			style: "short",
			type: "unit"
		} }
	});
}
function typeTitle(schemaType) {
	return schemaType.title ?? schemaType.name;
}
var CustomTextInputBox = /* @__PURE__ */ gt(Box).withConfig({
	displayName: "CustomTextInputBox",
	componentId: "sc-bea6wu-0"
})(({ $background, $smallClearButton }) => ft`width:100%;input + span{background:${({ theme }) => $background ? theme.sanity.color.card.disabled.bg2 : "transparent"};}[data-qa='clear-button']{background:none;box-shadow:none;display:flex;transform:${$smallClearButton ? "scale(0.8)" : "scale(1)"};&:hover{opacity:0.5;}}`);
function CustomTextInput(props) {
	let $ = (0, import_compiler_runtime.c)(12), $background, $smallClearButton, ref, rest;
	$[0] === props ? ($background = $[1], $smallClearButton = $[2], ref = $[3], rest = $[4]) : ({ref, $background, $smallClearButton, ...rest} = props, $[0] = props, $[1] = $background, $[2] = $smallClearButton, $[3] = ref, $[4] = rest);
	let t0;
	$[5] !== ref || $[6] !== rest ? (t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
		...rest,
		ref
	}), $[5] = ref, $[6] = rest, $[7] = t0) : t0 = $[7];
	let t1;
	return $[8] !== $background || $[9] !== $smallClearButton || $[10] !== t0 ? (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomTextInputBox, {
		$background,
		$smallClearButton,
		children: t0
	}), $[8] = $background, $[9] = $smallClearButton, $[10] = t0, $[11] = t1) : t1 = $[11], t1;
}
function createAppIdCache() {
	let appIdCache = {};
	return { get: async (args) => {
		let { projectId, appIdFetcher } = args, cacheElement = appIdCache[projectId];
		return cacheElement || (cacheElement = (async () => {
			try {
				return await appIdFetcher(projectId);
			} catch (error) {
				console.error(error), appIdCache[projectId] = void 0;
				return;
			}
		})(), appIdCache[projectId] = cacheElement, cacheElement);
	} };
}
/**
* @internal
*/
function AppIdCacheProvider(props) {
	let $ = (0, import_compiler_runtime.c)(5), { children } = props, parentCache = (0, import_react.useContext)(AppIdCacheContext), t0;
	$[0] === parentCache ? t0 = $[1] : (t0 = parentCache || createAppIdCache(), $[0] = parentCache, $[1] = t0);
	let cache = t0, t1;
	return $[2] !== cache || $[3] !== children ? (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIdCacheContext.Provider, {
		value: cache,
		children
	}), $[2] = cache, $[3] = children, $[4] = t1) : t1 = $[4], t1;
}
/**
* @internal
*/
function useAppIdCache() {
	let cache = (0, import_react.useContext)(AppIdCacheContext);
	if (!cache) throw Error("AppIdCache: missing context value. Ensure the component is wrapped in a AppIdCacheProvider.");
	return cache;
}
async function checkStudioManifestExists(studioHostUrl) {
	let url = `${studioHostUrl}/static/create-manifest.json`;
	try {
		let response = await fetch(url, { method: "HEAD" });
		return response.status == 404 ? !1 : response.status > 299 ? (console.error(`Failed to get manifest from ${url}`, response), !1) : !0;
	} catch (e) {
		return console.error(`Failed to fetch from ${url}`, e), !1;
	}
}
var internalUrlSuffix = isStaging ? "studio.sanity.work" : "sanity.studio";
async function fetchStudiosWithUrl(client, projectId, internalSuffix) {
	return (await client.request({
		method: "GET",
		url: `/projects/${projectId}/user-applications`
	})).map((app) => ({
		...app,
		studioUrl: getStudioUrl(app, internalSuffix)
	}));
}
async function fetchCreateCompatibleAppId(args) {
	let { projectId, client, fallbackOrigin, internalSuffix = internalUrlSuffix, checkStudioManifest = checkStudioManifestExists, origin = window.location?.origin } = args, appsWithStudioUrl = await fetchStudiosWithUrl(client, projectId, internalSuffix), appMatchingOrigin = appsWithStudioUrl.find((app) => app && origin && app.studioUrl?.startsWith(origin));
	return appMatchingOrigin?.appHost && await checkStudioManifest(getStudioUrl(appMatchingOrigin, internalSuffix)) ? {
		appId: appMatchingOrigin.id,
		studioApps: appsWithStudioUrl
	} : {
		appId: appsWithStudioUrl.find((app) => app && fallbackOrigin && app.studioUrl?.startsWith(`https://${fallbackOrigin}`))?.id,
		studioApps: appsWithStudioUrl
	};
}
function getStudioUrl(app, internalSuffix) {
	return app.urlType === "internal" ? `https://${app.appHost}.${internalSuffix}` : app.appHost;
}
/**
* Fetches & caches the Studio appId for the current origin.
*
* @internal
*/
function useStudioAppIdStore(config) {
	let $ = (0, import_compiler_runtime.c)(9), t0;
	$[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = { apiVersion: "2024-09-01" }, $[0] = t0) : t0 = $[0];
	let client = useClient(t0), cache = useAppIdCache(), { projectId } = useSource(), t1;
	$[1] !== client || $[2] !== config.fallbackStudioOrigin ? (t1 = (pId) => fetchCreateCompatibleAppId({
		projectId: pId,
		client,
		fallbackOrigin: config.fallbackStudioOrigin
	}), $[1] = client, $[2] = config.fallbackStudioOrigin, $[3] = t1) : t1 = $[3];
	let appIdFetcher = t1, t2;
	return $[4] !== appIdFetcher || $[5] !== cache || $[6] !== config.enabled || $[7] !== projectId ? (t2 = {
		projectId,
		cache,
		appIdFetcher,
		enabled: config.enabled
	}, $[4] = appIdFetcher, $[5] = cache, $[6] = config.enabled, $[7] = projectId, $[8] = t2) : t2 = $[8], useStudioAppIdStoreInner(t2);
}
function useStudioAppIdStoreInner(props) {
	let $ = (0, import_compiler_runtime.c)(9), { cache, enabled, appIdFetcher, projectId } = props, [loading, setLoading] = (0, import_react.useState)(!1), [studioApp, setStudioApp] = (0, import_react.useState)(), t0, t1;
	$[0] !== appIdFetcher || $[1] !== cache || $[2] !== enabled || $[3] !== projectId ? (t0 = () => {
		let mounted = !0;
		return enabled && async function getAppId() {
			if (projectId) {
				setLoading(!0);
				try {
					let entry = await cache.get({
						projectId,
						appIdFetcher
					});
					mounted && setStudioApp(entry);
				} catch {
					mounted && setStudioApp(void 0);
				}
				mounted && setLoading(!1);
			}
		}().catch(console.error), () => {
			mounted = !1, setLoading(!1);
		};
	}, t1 = [
		setLoading,
		appIdFetcher,
		cache,
		enabled,
		projectId
	], $[0] = appIdFetcher, $[1] = cache, $[2] = enabled, $[3] = projectId, $[4] = t0, $[5] = t1) : (t0 = $[4], t1 = $[5]), (0, import_react.useEffect)(t0, t1);
	let t2;
	return $[6] !== loading || $[7] !== studioApp ? (t2 = {
		loading,
		studioApp
	}, $[6] = loading, $[7] = studioApp, $[8] = t2) : t2 = $[8], t2;
}
function createOperatorDefinitionDictionary(operatorDefinitions) {
	return operatorDefinitions.reduce((acc, val) => (acc[val.type] = val, acc), {});
}
function getOperatorDefinition(operators, operatorType) {
	return operatorType ? operators[operatorType] : void 0;
}
function getOperatorInitialValue(operators, operatorType) {
	return getOperatorDefinition(operators, operatorType)?.initialValue;
}
function buildSearchFilter(filterDefinition, fieldId) {
	return {
		fieldId,
		filterName: filterDefinition.name,
		operatorType: filterDefinition?.operators.find((operator) => operator.type === "item")?.name || ""
	};
}
function generateFilterQuery({ fieldDefinitions, filterDefinitions, filters, operatorDefinitions }) {
	return filters.filter((filter) => validateFilter({
		filter,
		filterDefinitions,
		fieldDefinitions,
		operatorDefinitions
	})).map((filter) => getOperatorDefinition(operatorDefinitions, filter.operatorType)?.groqFilter({
		fieldPath: resolveFieldPath({
			filter,
			fieldDefinitions,
			filterDefinitions
		}),
		value: filter?.value
	})).filter((filter) => !isEmpty(filter)).filter(isNonNullable).join(" && ");
}
function getFieldFromFilter(fields, filter) {
	return filter?.fieldId ? fields[filter.fieldId] : void 0;
}
function getFilterKey(filter) {
	return [filter.filterName, ...filter.fieldId ? [filter.fieldId] : []].join("-");
}
function narrowDocumentTypes({ fieldDefinitions, filters, types }) {
	let selectedDocumentTypes = types.map((type) => type.name), filteredDocumentTypes = Object.values(fieldDefinitions).filter((field) => filters.map((filter) => filter?.fieldId).includes(field.id)).filter((field) => field.documentTypes.length > 0).map((field) => field.documentTypes), intersectingDocumentTypes = intersection(...filteredDocumentTypes), documentTypes = [];
	return selectedDocumentTypes.length > 0 && documentTypes.push(selectedDocumentTypes), intersectingDocumentTypes.length > 0 && documentTypes.push(intersectingDocumentTypes), intersection(...documentTypes).sort();
}
function resolveFieldPath({ filter, fieldDefinitions, filterDefinitions }) {
	let fieldDefinition = getFieldFromFilter(fieldDefinitions, filter), filterDefinition = getFilterDefinition(filterDefinitions, filter.filterName);
	if (filterDefinition) switch (filterDefinition.type) {
		case "field": return fieldDefinition?.fieldPath;
		case "pinned": return filterDefinition?.fieldPath;
		default: return;
	}
}
/**
* Validate if the supplied filter:
* - has a valid filter defintion
* - has a valid field definition (if it references a fieldId)
* - has a valid operator (if present)
*/
function validateFilter({ filter, filterDefinitions, fieldDefinitions, operatorDefinitions }) {
	let filterDef = getFilterDefinition(filterDefinitions, filter.filterName), operatorDef = getOperatorDefinition(operatorDefinitions, filter.operatorType), fieldDef = getFieldFromFilter(fieldDefinitions, filter);
	return !(!filterDef || !operatorDef || filter.fieldId && !fieldDef || filterDef.type === "field" && (!fieldDef?.fieldPath || !filter.fieldId || !operatorDef.groqFilter({
		fieldPath: fieldDef.fieldPath,
		value: filter.value
	})) || filterDef.type === "pinned" && !operatorDef.groqFilter({
		fieldPath: filterDef.fieldPath,
		value: filter.value
	}));
}
var isEscape$1 = isHotkey("escape");
var HiddenOverlay = gt.div.withConfig({
	displayName: "HiddenOverlay",
	componentId: "sc-m6eu4e-0"
})`background:transparent;height:100%;left:0;position:fixed;top:0;width:100%;z-index:-1;`;
function FilterPopoverWrapper(t0) {
	let $ = (0, import_compiler_runtime.c)(15), { anchorElement, children, onClose } = t0, { isTopLayer } = useLayer(), t1;
	$[0] !== isTopLayer || $[1] !== onClose ? (t1 = (event) => {
		isEscape$1(event) && isTopLayer && onClose();
	}, $[0] = isTopLayer, $[1] = onClose, $[2] = t1) : t1 = $[2], useGlobalKeyDown(t1);
	let popoverOffset = usePopoverOffset(anchorElement || null), t2;
	$[3] === onClose ? t2 = $[4] : (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiddenOverlay, { onClick: onClose }), $[3] = onClose, $[4] = t2);
	let t3 = `min(calc(100vh - ${popoverOffset}px - 5px - ${POPOVER_INPUT_PADDING}px), 500px`, t4;
	$[5] === t3 ? t4 = $[6] : (t4 = {
		maxHeight: t3,
		zIndex: 1
	}, $[5] = t3, $[6] = t4);
	let t5;
	$[7] === children ? t5 = $[8] : (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, { children }), $[7] = children, $[8] = t5);
	let t6;
	$[9] !== t4 || $[10] !== t5 ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(es2015_default, {
		autoFocus: !1,
		returnFocus: !0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			display: "flex",
			overflow: "hidden",
			radius: 3,
			style: t4,
			children: t5
		})
	}), $[9] = t4, $[10] = t5, $[11] = t6) : t6 = $[11];
	let t7;
	return $[12] !== t2 || $[13] !== t6 ? (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [t2, t6] }), $[12] = t2, $[13] = t6, $[14] = t7) : t7 = $[14], t7;
}
function calcPopoverOffset(element) {
	let rect = element.getBoundingClientRect();
	return rect.y + rect.height + 5;
}
function usePopoverOffset(element) {
	let $ = (0, import_compiler_runtime.c)(10), t0;
	$[0] === element ? t0 = $[1] : (t0 = element && calcPopoverOffset(element), $[0] = element, $[1] = t0);
	let [offset, setOffset] = (0, import_react.useState)(t0), t1;
	$[2] === element ? t1 = $[3] : (t1 = () => {
		element && setOffset(calcPopoverOffset(element));
	}, $[2] = element, $[3] = t1);
	let handleWindowResize = t1, t2, t3;
	$[4] === element ? (t2 = $[5], t3 = $[6]) : (t2 = () => {
		element && setOffset(calcPopoverOffset(element));
	}, t3 = [element], $[4] = element, $[5] = t2, $[6] = t3), (0, import_react.useEffect)(t2, t3);
	let t4, t5;
	return $[7] === handleWindowResize ? (t4 = $[8], t5 = $[9]) : (t4 = () => (window.addEventListener("resize", handleWindowResize), () => window.removeEventListener("resize", handleWindowResize)), t5 = [handleWindowResize], $[7] = handleWindowResize, $[8] = t4, $[9] = t5), (0, import_react.useEffect)(t4, t5), offset;
}
var SearchHeaderBox = gt(Box).withConfig({
	displayName: "SearchHeaderBox",
	componentId: "sc-70dbnr-0"
})`border-bottom:1px solid ${({ theme }) => theme.sanity.color.base.border};flex-shrink:0;`;
var SearchHeaderContentFlex = gt(Flex).withConfig({
	displayName: "SearchHeaderContentFlex",
	componentId: "sc-70dbnr-1"
})`box-sizing:border-box;`;
function FilterPopoverContentHeader(t0) {
	let $ = (0, import_compiler_runtime.c)(11), { ref, ariaInputLabel, onChange, onClear, typeFilter } = t0, { state: t1 } = useSearchState(), { fullscreen } = t1, { t } = useTranslation$1(), t2 = !!typeFilter, t3 = fullscreen ? 2 : 1, t4;
	$[0] === t ? t4 = $[1] : (t4 = t("search.filter-placeholder"), $[0] = t, $[1] = t4);
	let t5;
	return $[2] !== ariaInputLabel || $[3] !== onChange || $[4] !== onClear || $[5] !== ref || $[6] !== t2 || $[7] !== t3 || $[8] !== t4 || $[9] !== typeFilter ? (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchHeaderBox, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchHeaderContentFlex, {
		alignItems: "center",
		flexBasis: "0%",
		flexGrow: 1,
		padding: 1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomTextInput, {
			__unstable_disableFocusRing: !0,
			$smallClearButton: !0,
			"aria-label": ariaInputLabel,
			autoComplete: "off",
			border: !1,
			clearButton: t2,
			fontSize: t3,
			icon: SearchIcon,
			muted: !0,
			onChange,
			onClear,
			placeholder: t4,
			ref,
			spellCheck: !1,
			radius: 2,
			value: typeFilter
		})
	}) }), $[2] = ariaInputLabel, $[3] = onChange, $[4] = onClear, $[5] = ref, $[6] = t2, $[7] = t3, $[8] = t4, $[9] = typeFilter, $[10] = t5) : t5 = $[10], t5;
}
/**
* Creates a flat list of filter menu items based on the current filter text input.
*/
function createFilterMenuItems({ documentTypesNarrowed, fieldDefinitions, filterDefinitions, schema, titleFilter, types, t }) {
	let fieldFilters = Object.values(fieldDefinitions).filter((fieldDef) => includesTitleInFieldDefinition(fieldDef, titleFilter)).map((fieldDef) => {
		let filterDef = getFilterDefinition(filterDefinitions, fieldDef.filterName);
		return filterDef ? buildSearchFilter(filterDef, fieldDef.id) : null;
	}).filter(isNonNullable), pinnedItems = buildPinnedMenuItems({
		fieldDefinitions,
		filterDefinitions,
		titleFilter
	});
	return documentTypesNarrowed.length === 0 ? [...pinnedItems, ...filterGroup({
		fieldDefinitions,
		filterDefinitions,
		filters: fieldFilters,
		headerTitle: t("search.filter-all-fields-header"),
		id: "field"
	})] : [...pinnedItems, ...buildFieldMenuItemsNarrowed({
		documentTypesNarrowed,
		fieldDefinitions,
		filterDefinitions,
		filters: fieldFilters,
		schema,
		types,
		t
	})];
}
function filterGroup({ fieldDefinitions, filterDefinitions, filters, id, headerTitle, tone }) {
	let header = {
		title: headerTitle || "",
		tone: tone || "default",
		type: "header"
	}, filterItems = filters.map((filter) => ({
		fieldDefinition: getFieldFromFilter(fieldDefinitions, filter),
		filterDefinition: getFilterDefinition(filterDefinitions, filter.filterName),
		filter,
		group: id,
		tone: tone || "default",
		type: "filter"
	}));
	return filterItems.length > 0 ? [...headerTitle ? [header] : [], ...filterItems] : [];
}
/**
* Construct a flat list of narrowed field menu items, including shared fields.
* Shared fields should always appear first.
*/
function buildFieldMenuItemsNarrowed({ documentTypesNarrowed, fieldDefinitions, filterDefinitions, filters, schema, types, t }) {
	let sharedFilters = filters.filter((filter) => sharesDocumentTypes(documentTypesNarrowed, getFieldFromFilter(fieldDefinitions, filter))), sharedItems = documentTypesNarrowed.length > 1 && types.length > 1 ? filterGroup({
		fieldDefinitions,
		filterDefinitions,
		filters: sharedFilters,
		headerTitle: t("search.filter-shared-fields-header"),
		id: "shared",
		tone: "primary"
	}) : [], groupedItems = documentTypesNarrowed.map((documentType) => {
		let docType = schema.get(documentType);
		return {
			title: docType?.title || startCase(docType?.name) || "(Unknown type)",
			documentType
		};
	}).sort((a, b) => a.title.localeCompare(b.title)).flatMap(({ documentType, title }) => filterGroup({
		fieldDefinitions,
		filterDefinitions,
		filters: filters.filter((filter) => {
			let fieldDefinition = getFieldFromFilter(fieldDefinitions, filter);
			return includesDocumentTypes([documentType], fieldDefinition);
		}),
		id: title,
		headerTitle: title
	}));
	return [...sharedItems, ...groupedItems];
}
/**
* Construct a flat list of all pinned filter menu items (both ungrouped and grouped).
* Un-grouped items should always appear first.
*/
function buildPinnedMenuItems({ fieldDefinitions, filterDefinitions, titleFilter }) {
	let ungroupedPinnedFilters = Object.values(filterDefinitions).filter(isPinnedFilterDefWithoutGroup).filter((filterDef) => includesTitleInPinnedFilterDefinition(filterDef, titleFilter)).map((filterDef) => buildSearchFilter(filterDef)), groupedPinnedFilters = Object.values(filterDefinitions).filter(isPinnedFilterDefWithGroup).filter((filterDef) => includesTitleInPinnedFilterDefinition(filterDef, titleFilter)).reduce((acc, val) => (acc[val.group] = acc[val.group] || [], acc[val.group].push(buildSearchFilter(val)), acc), {});
	return [...filterGroup({
		fieldDefinitions,
		filterDefinitions,
		filters: ungroupedPinnedFilters,
		id: "pinned-ungrouped",
		tone: "primary"
	}), ...Object.entries(groupedPinnedFilters).flatMap(([groupTitle, filters]) => filterGroup({
		fieldDefinitions,
		filterDefinitions,
		filters,
		headerTitle: groupTitle,
		id: groupTitle,
		tone: "primary"
	}))];
}
function includesDocumentTypes(documentTypes, fieldDefinition) {
	return fieldDefinition?.documentTypes.some((type) => documentTypes.includes(type));
}
function includesTitleInFieldDefinition(field, currentTitle) {
	return field.titlePath.join("/").toLowerCase().includes(currentTitle.toLowerCase());
}
function includesTitleInPinnedFilterDefinition(filter, currentTitle) {
	return filter.title.toLowerCase().includes(currentTitle.toLowerCase());
}
function isPinnedFilterDefWithGroup(filterDef) {
	return filterDef.type === "pinned" && filterDef?.group !== void 0;
}
function isPinnedFilterDefWithoutGroup(filterDef) {
	return filterDef.type === "pinned" && filterDef?.group === void 0;
}
function sharesDocumentTypes(documentTypes, fieldDefinition) {
	return difference(documentTypes, fieldDefinition?.documentTypes || []).length === 0;
}
function FilterTitle(t0) {
	let $ = (0, import_compiler_runtime.c)(9), { filter, maxLength } = t0, { state: t1 } = useSearchState(), { definitions } = t1, t2;
	bb0: {
		let t3;
		$[0] !== definitions.filters || $[1] !== filter.filterName ? (t3 = getFilterDefinition(definitions.filters, filter.filterName), $[0] = definitions.filters, $[1] = filter.filterName, $[2] = t3) : t3 = $[2];
		let filterDef = t3;
		switch (filterDef?.type) {
			case "field": {
				let t4;
				$[3] !== definitions.fields || $[4] !== filter ? (t4 = getFieldFromFilter(definitions.fields, filter), $[3] = definitions.fields, $[4] = filter, $[5] = t4) : t4 = $[5];
				let fieldDefinition = t4;
				if (fieldDefinition?.titlePath) {
					t2 = fieldDefinition.titlePath[fieldDefinition.titlePath.length - 1];
					break bb0;
				}
				t2 = null;
				break bb0;
			}
			case "pinned":
				t2 = filterDef.title;
				break bb0;
			default: t2 = null;
		}
	}
	let title = t2;
	if (!title) return null;
	let t3;
	return $[6] !== maxLength || $[7] !== title ? (t3 = maxLength && title.length > maxLength ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [title.slice(0, maxLength), "…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: title }), $[6] = maxLength, $[7] = title, $[8] = t3) : t3 = $[8], t3;
}
function FilterIcon(t0) {
	let $ = (0, import_compiler_runtime.c)(6), { filter } = t0, { state: t1 } = useSearchState(), { definitions } = t1, t2;
	$[0] !== definitions.filters || $[1] !== filter.filterName ? (t2 = getFilterDefinition(definitions.filters, filter.filterName)?.icon, $[0] = definitions.filters, $[1] = filter.filterName, $[2] = t2) : t2 = $[2];
	let Icon = t2;
	if (Icon) {
		let t3;
		return $[3] === Icon ? t3 = $[4] : (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), $[3] = Icon, $[4] = t3), t3;
	}
	let t3;
	return $[5] === Symbol.for("react.memo_cache_sentinel") ? (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnknownIcon, {}), $[5] = t3) : t3 = $[5], t3;
}
function FilterDetails(t0) {
	let $ = (0, import_compiler_runtime.c)(18), { filter } = t0, { state: t1 } = useSearchState(), { definitions } = t1, T0, t2, t3;
	if ($[0] !== definitions.fields || $[1] !== filter) {
		let fieldDefinition = getFieldFromFilter(definitions.fields, filter);
		T0 = Stack, t2 = 2, t3 = fieldDefinition?.titlePath && fieldDefinition.titlePath?.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
			marginLeft: 4,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				muted: !0,
				size: 0,
				children: fieldDefinition.titlePath.slice(0, -1).map((pathTitle, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: pathTitle }), index !== fieldDefinition.titlePath.length - 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						opacity: .75,
						paddingLeft: "0.25em",
						paddingRight: "0.25em"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRightIcon, {})
				})] }, index))
			})
		}), $[0] = definitions.fields, $[1] = filter, $[2] = T0, $[3] = t2, $[4] = t3;
	} else T0 = $[2], t2 = $[3], t3 = $[4];
	let t4;
	$[5] === Symbol.for("react.memo_cache_sentinel") ? (t4 = { flexShrink: 0 }, $[5] = t4) : t4 = $[5];
	let t5;
	$[6] === filter ? t5 = $[7] : (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		style: t4,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			size: 1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterIcon, { filter })
		})
	}), $[6] = filter, $[7] = t5);
	let t6;
	$[8] === filter ? t6 = $[9] : (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
		size: 1,
		weight: "medium",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterTitle, { filter })
	}), $[8] = filter, $[9] = t6);
	let t7;
	$[10] !== t5 || $[11] !== t6 ? (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
		alignItems: "flex-start",
		gap: 3,
		children: [t5, t6]
	}), $[10] = t5, $[11] = t6, $[12] = t7) : t7 = $[12];
	let t8;
	return $[13] !== T0 || $[14] !== t2 || $[15] !== t3 || $[16] !== t7 ? (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(T0, {
		gap: t2,
		children: [t3, t7]
	}), $[13] = T0, $[14] = t2, $[15] = t3, $[16] = t7, $[17] = t8) : t8 = $[17], t8;
}
/**
* Convert a field value to a string (if it's a React element) and remove HTML tags.
* If the field value is a string, pass through as-is.
*/
function sanitizeFieldValue(name) {
	if ((0, import_react.isValidElement)(name)) try {
		return stripHtmlTags((0, import_server_browser.renderToString)(name));
	} catch (err) {
		return console.warn("A field title or description contains a React component that could not be rendered. This is likely caused by a component that requires runtime context. Use a string or JSX containing HTML elements only.", err), "";
	}
	return typeof name == "string" ? name : "";
}
function stripHtmlTags(str) {
	return new DOMParser().parseFromString(str, "text/html")?.body.textContent || "";
}
function FilterTooltip(t0) {
	let $ = (0, import_compiler_runtime.c)(60), { children, fieldDefinition, filterDefinition, visible } = t0, { state: t1 } = useSearchState(), { documentTypesNarrowed } = t1, { t } = useTranslation$1(), schema = useSchema(), T0, T1, T2, t2, t3, t4, t5, t6, t7, t8, t9;
	if ($[0] !== documentTypesNarrowed.length || $[1] !== fieldDefinition || $[2] !== filterDefinition || $[3] !== schema || $[4] !== t) {
		let fieldDefinitionDocumentTypeTitles = fieldDefinition?.documentTypes ? fieldDefinition.documentTypes.map((d) => {
			let defType = schema.get(d);
			return defType?.title || startCase(defType?.name);
		}).filter(isNonNullable).sort() : EMPTY_ARRAY$10;
		if ($[16] !== fieldDefinition || $[17] !== schema || $[18] !== t) {
			let fieldDefinitionDescription;
			if (fieldDefinition?.documentTypes) {
				let t10;
				if ($[28] !== fieldDefinition.documentTypes || $[29] !== fieldDefinition.fieldPath || $[30] !== schema) {
					let t11;
					$[32] !== fieldDefinition.fieldPath || $[33] !== schema ? (t11 = (d_0) => {
						let defType_0 = schema.get(d_0);
						if (defType_0) {
							let field = getSchemaField(defType_0, fieldDefinition.fieldPath);
							return field?.type.description && sanitizeFieldValue(field?.type.description);
						}
						return null;
					}, $[32] = fieldDefinition.fieldPath, $[33] = schema, $[34] = t11) : t11 = $[34];
					let descriptions = fieldDefinition.documentTypes.map(t11).filter(isNonNullable).sort();
					t10 = uniq(descriptions), $[28] = fieldDefinition.documentTypes, $[29] = fieldDefinition.fieldPath, $[30] = schema, $[31] = t10;
				} else t10 = $[31];
				let uniqueDescriptions = t10;
				uniqueDescriptions.length === 1 && (fieldDefinitionDescription = uniqueDescriptions[0]);
			}
			T2 = Tooltip$1, T1 = Card, t7 = "default", t8 = 2, $[35] === Symbol.for("react.memo_cache_sentinel") ? (t9 = { maxWidth: "250px" }, $[35] = t9) : t9 = $[35], T0 = Stack, t2 = 4, $[36] !== fieldDefinition || $[37] !== t ? (t3 = fieldDefinition && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
				gap: 3,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					muted: !0,
					size: 1,
					weight: "medium",
					children: t("search.filter-field-tooltip-name")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextWithTone, {
					size: 1,
					style: { fontFamily: "monospace" },
					tone: "primary",
					textOverflow: "ellipsis",
					children: fieldDefinition?.name
				})]
			}), $[36] = fieldDefinition, $[37] = t, $[38] = t3) : t3 = $[38], t4 = fieldDefinitionDescription && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
				gap: 3,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					muted: !0,
					size: 1,
					weight: "medium",
					children: t("search.filter-field-tooltip-description")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					muted: !0,
					size: 1,
					children: truncateString(fieldDefinitionDescription, 256)
				})]
			}), $[16] = fieldDefinition, $[17] = schema, $[18] = t, $[19] = T0, $[20] = T1, $[21] = T2, $[22] = t2, $[23] = t3, $[24] = t4, $[25] = t7, $[26] = t8, $[27] = t9;
		} else T0 = $[19], T1 = $[20], T2 = $[21], t2 = $[22], t3 = $[23], t4 = $[24], t7 = $[25], t8 = $[26], t9 = $[27];
		$[39] === filterDefinition ? t5 = $[40] : (t5 = filterDefinition?.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			muted: !0,
			size: 1,
			children: truncateString(filterDefinition.description, 256)
		}), $[39] = filterDefinition, $[40] = t5), t6 = !documentTypesNarrowed.length && fieldDefinitionDocumentTypeTitles.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
			gap: 2,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
				alignItems: "center",
				gap: 1,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					muted: !0,
					size: 1,
					weight: "medium",
					children: t("search.filter-field-tooltip-used-in-document-types")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					padding: 1,
					radius: 2,
					tone: "transparent",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						size: 1,
						muted: !0,
						children: fieldDefinitionDocumentTypeTitles.length
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
				size: 1,
				weight: "regular",
				muted: !0,
				children: [fieldDefinitionDocumentTypeTitles.slice(0, 10).join(", "), fieldDefinitionDocumentTypeTitles?.length > 10 ? ` +${fieldDefinitionDocumentTypeTitles.length - 10} more` : ""]
			})]
		}), $[0] = documentTypesNarrowed.length, $[1] = fieldDefinition, $[2] = filterDefinition, $[3] = schema, $[4] = t, $[5] = T0, $[6] = T1, $[7] = T2, $[8] = t2, $[9] = t3, $[10] = t4, $[11] = t5, $[12] = t6, $[13] = t7, $[14] = t8, $[15] = t9;
	} else T0 = $[5], T1 = $[6], T2 = $[7], t2 = $[8], t3 = $[9], t4 = $[10], t5 = $[11], t6 = $[12], t7 = $[13], t8 = $[14], t9 = $[15];
	let t10;
	$[41] !== T0 || $[42] !== t2 || $[43] !== t3 || $[44] !== t4 || $[45] !== t5 || $[46] !== t6 ? (t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(T0, {
		gap: t2,
		children: [
			t3,
			t4,
			t5,
			t6
		]
	}), $[41] = T0, $[42] = t2, $[43] = t3, $[44] = t4, $[45] = t5, $[46] = t6, $[47] = t10) : t10 = $[47];
	let t11;
	$[48] !== T1 || $[49] !== t10 || $[50] !== t7 || $[51] !== t8 || $[52] !== t9 ? (t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T1, {
		tone: t7,
		radius: t8,
		style: t9,
		children: t10
	}), $[48] = T1, $[49] = t10, $[50] = t7, $[51] = t8, $[52] = t9, $[53] = t11) : t11 = $[53];
	let t12 = !visible, t13;
	$[54] === Symbol.for("react.memo_cache_sentinel") ? (t13 = ["left"], $[54] = t13) : t13 = $[54];
	let t14;
	return $[55] !== T2 || $[56] !== children || $[57] !== t11 || $[58] !== t12 ? (t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T2, {
		content: t11,
		disabled: t12,
		fallbackPlacements: t13,
		placement: "right",
		portal: !0,
		children
	}), $[55] = T2, $[56] = children, $[57] = t11, $[58] = t12, $[59] = t14) : t14 = $[59], t14;
}
var MenuItemFilter = (0, import_react.memo)(function MenuItemFilter(t0) {
	let $ = (0, import_compiler_runtime.c)(29), item, onClose, rest;
	$[0] === t0 ? (item = $[1], onClose = $[2], rest = $[3]) : ({item, onClose, ...rest} = t0, $[0] = t0, $[1] = item, $[2] = onClose, $[3] = rest);
	let { dispatch, state: t1 } = useSearchState(), { filters } = t1, t2;
	$[4] !== dispatch || $[5] !== item.filter || $[6] !== onClose ? (t2 = () => {
		dispatch({
			filter: item.filter,
			type: "TERMS_FILTERS_ADD"
		}), onClose?.();
	}, $[4] = dispatch, $[5] = item.filter, $[6] = onClose, $[7] = t2) : t2 = $[7];
	let handleClick = t2, t3;
	if ($[8] !== filters || $[9] !== item.filter) {
		let t4;
		$[11] === item.filter ? t4 = $[12] : (t4 = (f) => getFilterKey(f) === getFilterKey(item.filter), $[11] = item.filter, $[12] = t4), t3 = filters.find(t4), $[8] = filters, $[9] = item.filter, $[10] = t3;
	} else t3 = $[10];
	let isAlreadyActive = !!t3, tooltipEnabled = !!(item.fieldDefinition || item.filterDefinition.description), t4 = isAlreadyActive ? void 0 : handleClick, t5;
	$[13] === Symbol.for("react.memo_cache_sentinel") ? (t5 = {
		position: "relative",
		whiteSpace: "normal",
		width: "100%"
	}, $[13] = t5) : t5 = $[13];
	let t6 = item?.tone, t7;
	$[14] === item.filter ? t7 = $[15] : (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		padding: 3,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterDetails, { filter: item.filter })
	}), $[14] = item.filter, $[15] = t7);
	let t8;
	$[16] !== item.fieldDefinition || $[17] !== item.filterDefinition || $[18] !== t7 || $[19] !== tooltipEnabled ? (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterTooltip, {
		fieldDefinition: item.fieldDefinition,
		filterDefinition: item.filterDefinition,
		visible: tooltipEnabled,
		children: t7
	}), $[16] = item.fieldDefinition, $[17] = item.filterDefinition, $[18] = t7, $[19] = tooltipEnabled, $[20] = t8) : t8 = $[20];
	let t9;
	$[21] !== isAlreadyActive || $[22] !== t4 || $[23] !== t6 || $[24] !== t8 ? (t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		disabled: isAlreadyActive,
		fontSize: 1,
		justify: "flex-start",
		mode: "bleed",
		onClick: t4,
		padding: 0,
		style: t5,
		tabIndex: -1,
		tone: t6,
		children: t8
	}), $[21] = isAlreadyActive, $[22] = t4, $[23] = t6, $[24] = t8, $[25] = t9) : t9 = $[25];
	let t10;
	return $[26] !== rest || $[27] !== t9 ? (t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		...rest,
		children: t9
	}), $[26] = rest, $[27] = t9, $[28] = t10) : t10 = $[28], t10;
});
var MenuItemHeader = (0, import_react.memo)(function MenuItemHeader(t0) {
	let $ = (0, import_compiler_runtime.c)(5), { item } = t0, t1 = item?.tone, t2;
	$[0] === item.title ? t2 = $[1] : (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
		muted: !0,
		size: 1,
		textOverflow: "ellipsis",
		weight: "medium",
		children: item.title
	}), $[0] = item.title, $[1] = t2);
	let t3;
	return $[2] !== t1 || $[3] !== t2 ? (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		paddingTop: 1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			borderBottom: !0,
			paddingX: 2,
			paddingY: 3,
			tone: t1,
			children: t2
		})
	}), $[2] = t1, $[3] = t2, $[4] = t3) : t3 = $[4], t3;
});
var POPOVER_STYLES$1 = { width: "300px" };
function AddFilterPopoverContent(t0) {
	let $ = (0, import_compiler_runtime.c)(39), { onClose } = t0, [inputElement, setInputElement] = (0, import_react.useState)(null), [titleFilter, setTitleFilter] = (0, import_react.useState)(""), { t } = useTranslation$1(), t1;
	$[0] === Symbol.for("react.memo_cache_sentinel") ? (t1 = (e) => setTitleFilter(e.currentTarget.value), $[0] = t1) : t1 = $[0];
	let handleFilterChange = t1, t2;
	$[1] === Symbol.for("react.memo_cache_sentinel") ? (t2 = () => setTitleFilter(""), $[1] = t2) : t2 = $[1];
	let handleFilterClear = t2, schema = useSchema(), { state: t3 } = useSearchState(), { documentTypesNarrowed, definitions, filters, terms: t4 } = t3, { types } = t4, t5;
	$[2] !== definitions.fields || $[3] !== definitions.filters || $[4] !== documentTypesNarrowed || $[5] !== schema || $[6] !== t || $[7] !== titleFilter || $[8] !== types ? (t5 = createFilterMenuItems({
		documentTypesNarrowed,
		fieldDefinitions: definitions.fields,
		filterDefinitions: definitions.filters,
		schema,
		titleFilter,
		types,
		t
	}), $[2] = definitions.fields, $[3] = definitions.filters, $[4] = documentTypesNarrowed, $[5] = schema, $[6] = t, $[7] = titleFilter, $[8] = types, $[9] = t5) : t5 = $[9];
	let filteredMenuItems = t5, t6;
	$[10] === onClose ? t6 = $[11] : (t6 = (item) => item.type === "filter" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItemFilter, {
		item,
		onClose,
		paddingBottom: 1
	}) : item.type === "header" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItemHeader, { item }) : null, $[10] = onClose, $[11] = t6);
	let renderItem = t6, t7;
	$[12] !== filteredMenuItems || $[13] !== filters ? (t7 = (index) => {
		let filterItem = filteredMenuItems[index];
		return filterItem.type !== "filter" || !!filters.find((f) => getFilterKey(f) === getFilterKey(filterItem.filter));
	}, $[12] = filteredMenuItems, $[13] = filters, $[14] = t7) : t7 = $[14];
	let getItemDisabled = t7, t8;
	$[15] === filteredMenuItems ? t8 = $[16] : (t8 = (index_0) => {
		let menuItem = filteredMenuItems[index_0];
		switch (menuItem.type) {
			case "filter": return [...menuItem.group ? [menuItem.group] : [], getFilterKey(menuItem.filter)].join("-");
			case "header": return `${menuItem.type}-${menuItem.title}`;
			default: return index_0;
		}
	}, $[15] = filteredMenuItems, $[16] = t8);
	let getItemKey = t8, t9;
	$[17] === t ? t9 = $[18] : (t9 = t("search.filter-by-title-aria-label"), $[17] = t, $[18] = t9);
	let t10;
	$[19] !== t9 || $[20] !== titleFilter ? (t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPopoverContentHeader, {
		ariaInputLabel: t9,
		onChange: handleFilterChange,
		onClear: handleFilterClear,
		ref: setInputElement,
		typeFilter: titleFilter
	}), $[19] = t9, $[20] = titleFilter, $[21] = t10) : t10 = $[21];
	let t11;
	$[22] !== filteredMenuItems || $[23] !== getItemDisabled || $[24] !== getItemKey || $[25] !== inputElement || $[26] !== renderItem || $[27] !== t ? (t11 = filteredMenuItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandList, {
		activeItemDataAttr: "data-hovered",
		ariaLabel: t("search.filters-aria-label", { count: filteredMenuItems.length }),
		autoFocus: "input",
		getItemDisabled,
		getItemKey,
		inputElement,
		itemHeight: 45,
		items: filteredMenuItems,
		overscan: 20,
		padding: 1,
		paddingBottom: 0,
		renderItem
	}), $[22] = filteredMenuItems, $[23] = getItemDisabled, $[24] = getItemKey, $[25] = inputElement, $[26] = renderItem, $[27] = t, $[28] = t11) : t11 = $[28];
	let t12;
	$[29] !== filteredMenuItems.length || $[30] !== t || $[31] !== titleFilter ? (t12 = filteredMenuItems.length == 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		padding: 3,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			muted: !0,
			size: 1,
			textOverflow: "ellipsis",
			children: t("search.filter-no-matches-found", { filter: titleFilter })
		})
	}), $[29] = filteredMenuItems.length, $[30] = t, $[31] = titleFilter, $[32] = t12) : t12 = $[32];
	let t13;
	$[33] !== t11 || $[34] !== t12 ? (t13 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, { children: [t11, t12] }), $[33] = t11, $[34] = t12, $[35] = t13) : t13 = $[35];
	let t14;
	return $[36] !== t10 || $[37] !== t13 ? (t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
		flexDirection: "column",
		style: POPOVER_STYLES$1,
		children: [t10, t13]
	}), $[36] = t10, $[37] = t13, $[38] = t14) : t14 = $[38], t14;
}
function AddFilterButton() {
	let $ = (0, import_compiler_runtime.c)(18), [open, setOpen] = (0, import_react.useState)(!1), [buttonElement, setButtonElement] = (0, import_react.useState)(null), popoverRef = (0, import_react.useRef)(null), { t } = useTranslation$1(), { state: t0 } = useSearchState(), { fullscreen } = t0, t1;
	$[0] === Symbol.for("react.memo_cache_sentinel") ? (t1 = () => setOpen(!1), $[0] = t1) : t1 = $[0];
	let handleClose = t1, t2;
	$[1] === Symbol.for("react.memo_cache_sentinel") ? (t2 = () => setOpen(!0), $[1] = t2) : t2 = $[1];
	let handleOpen = t2, t3;
	$[2] === buttonElement ? t3 = $[3] : (t3 = () => [buttonElement, popoverRef.current], $[2] = buttonElement, $[3] = t3), useClickOutsideEvent(handleClose, t3);
	let t4;
	$[4] === Symbol.for("react.memo_cache_sentinel") ? (t4 = [
		5,
		0,
		0,
		0
	], $[4] = t4) : t4 = $[4];
	let t5;
	$[5] === Symbol.for("react.memo_cache_sentinel") ? (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddFilterPopoverContent, { onClose: handleClose }), $[5] = t5) : t5 = $[5];
	let t6;
	$[6] === buttonElement ? t6 = $[7] : (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPopoverWrapper, {
		anchorElement: buttonElement,
		onClose: handleClose,
		children: t5
	}), $[6] = buttonElement, $[7] = t6);
	let t7 = fullscreen ? "large" : "default", t8;
	$[8] === t ? t8 = $[9] : (t8 = t("search.action.add-filter"), $[8] = t, $[9] = t8);
	let t9;
	$[10] !== open || $[11] !== t7 || $[12] !== t8 ? (t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
		icon: AddIcon,
		mode: "bleed",
		onClick: handleOpen,
		size: t7,
		ref: setButtonElement,
		selected: open,
		text: t8
	}), $[10] = open, $[11] = t7, $[12] = t8, $[13] = t9) : t9 = $[13];
	let t10;
	return $[14] !== open || $[15] !== t6 || $[16] !== t9 ? (t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover$1, {
		__unstable_margins: t4,
		content: t6,
		open,
		placement: "bottom-start",
		radius: 3,
		ref: popoverRef,
		portal: !0,
		children: t9
	}), $[14] = open, $[15] = t6, $[16] = t9, $[17] = t10) : t10 = $[17], t10;
}
var DocumentTypeFilterItem = (0, import_react.memo)(function TypeFilterItem(t0) {
	let $ = (0, import_compiler_runtime.c)(23), rest, selected, type;
	$[0] === t0 ? (rest = $[1], selected = $[2], type = $[3]) : ({selected, type, ...rest} = t0, $[0] = t0, $[1] = rest, $[2] = selected, $[3] = type);
	let { dispatch } = useSearchState(), t1;
	$[4] !== dispatch || $[5] !== type ? (t1 = () => {
		dispatch({
			type: "TERMS_TYPE_ADD",
			schemaType: type
		});
	}, $[4] = dispatch, $[5] = type, $[6] = t1) : t1 = $[6];
	let handleTypeAdd = t1, t2;
	$[7] !== dispatch || $[8] !== type ? (t2 = () => {
		dispatch({
			type: "TERMS_TYPE_REMOVE",
			schemaType: type
		});
	}, $[7] = dispatch, $[8] = type, $[9] = t2) : t2 = $[9];
	let handleTypeRemove = t2, t3;
	$[10] !== handleTypeAdd || $[11] !== handleTypeRemove || $[12] !== selected ? (t3 = () => {
		selected ? handleTypeRemove() : handleTypeAdd();
	}, $[10] = handleTypeAdd, $[11] = handleTypeRemove, $[12] = selected, $[13] = t3) : t3 = $[13];
	let handleClick = t3, t4 = type.title ?? type.name, t5 = selected && CheckmarkIcon, t6 = type.title ?? type.name, t7 = selected ? "primary" : "default", t8;
	$[14] !== handleClick || $[15] !== t4 || $[16] !== t5 || $[17] !== t6 || $[18] !== t7 ? (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
		iconRight: t5,
		justify: "flex-start",
		mode: "bleed",
		onClick: handleClick,
		width: "fill",
		size: "large",
		tabIndex: -1,
		text: t6,
		tone: t7
	}, t4), $[14] = handleClick, $[15] = t4, $[16] = t5, $[17] = t6, $[18] = t7, $[19] = t8) : t8 = $[19];
	let t9;
	return $[20] !== rest || $[21] !== t8 ? (t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		...rest,
		children: t8
	}), $[20] = rest, $[21] = t8, $[22] = t9) : t9 = $[22], t9;
});
var ClearButtonBox = gt(Box).withConfig({
	displayName: "ClearButtonBox",
	componentId: "sc-dhifej-0"
})`border-top:1px solid ${({ theme }) => theme.sanity.color.base.border};flex-shrink:0;`;
var POPOVER_STYLES = { width: "250px" };
function DocumentTypesPopoverContent() {
	let $ = (0, import_compiler_runtime.c)(37), [inputElement, setInputElement] = (0, import_react.useState)(null), [typeFilter, setTypeFilter] = (0, import_react.useState)(""), commandListRef = (0, import_react.useRef)(null), { t } = useTranslation$1(), schema = useSchema(), { dispatch, state: t0 } = useSearchState(), { terms: t1 } = t0, { types: selectedTypes } = t1, [selectedTypesSnapshot, setSelectedTypesSnapshot] = (0, import_react.useState)(selectedTypes), documentTypeItems = useGetDocumentTypeItems(schema, selectedTypes, selectedTypesSnapshot, typeFilter), t2;
	$[0] === Symbol.for("react.memo_cache_sentinel") ? (t2 = (e) => setTypeFilter(e.currentTarget.value), $[0] = t2) : t2 = $[0];
	let handleFilterChange = t2, t3;
	$[1] === Symbol.for("react.memo_cache_sentinel") ? (t3 = () => setTypeFilter(""), $[1] = t3) : t3 = $[1];
	let handleFilterClear = t3, t4;
	$[2] === dispatch ? t4 = $[3] : (t4 = () => {
		setSelectedTypesSnapshot([]), dispatch({ type: "TERMS_TYPES_CLEAR" }), commandListRef?.current?.focusInputElement(), commandListRef?.current?.scrollToIndex(0);
	}, $[2] = dispatch, $[3] = t4);
	let handleTypesClear = t4, t5;
	$[4] === documentTypeItems ? t5 = $[5] : (t5 = (index) => {
		let virtualItem = documentTypeItems[index];
		switch (virtualItem.type) {
			case "divider": return `${virtualItem.type}-${index}`;
			case "header": return `${virtualItem.type}-${virtualItem.title}`;
			case "item": return `${virtualItem.type}-${virtualItem.item.name}`;
			default: return index;
		}
	}, $[4] = documentTypeItems, $[5] = t5);
	let getItemKey = t5, renderItem = _temp$5, t6;
	$[6] === documentTypeItems ? t6 = $[7] : (t6 = (index_0) => documentTypeItems[index_0].type !== "item", $[6] = documentTypeItems, $[7] = t6);
	let getItemDisabled = t6, t7;
	$[8] === documentTypeItems ? t7 = $[9] : (t7 = (index_1) => {
		let item_1 = documentTypeItems[index_1];
		return item_1.type === "item" && item_1.selected;
	}, $[8] = documentTypeItems, $[9] = t7);
	let getItemSelected = t7, t8;
	$[10] === t ? t8 = $[11] : (t8 = t("search.action.filter-by-document-type-aria-label"), $[10] = t, $[11] = t8);
	let t9;
	$[12] !== t8 || $[13] !== typeFilter ? (t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPopoverContentHeader, {
		ariaInputLabel: t8,
		onChange: handleFilterChange,
		onClear: handleFilterClear,
		ref: setInputElement,
		typeFilter
	}), $[12] = t8, $[13] = typeFilter, $[14] = t9) : t9 = $[14];
	let t10;
	$[15] !== documentTypeItems || $[16] !== getItemDisabled || $[17] !== getItemKey || $[18] !== getItemSelected || $[19] !== inputElement || $[20] !== t ? (t10 = documentTypeItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandList, {
		activeItemDataAttr: "data-hovered",
		ariaLabel: t("search.document-types-aria-label"),
		ariaMultiselectable: !0,
		autoFocus: "input",
		getItemDisabled,
		getItemSelected,
		getItemKey,
		inputElement,
		itemHeight: 37,
		items: documentTypeItems,
		overscan: 20,
		padding: 1,
		paddingBottom: 0,
		ref: commandListRef,
		renderItem
	}), $[15] = documentTypeItems, $[16] = getItemDisabled, $[17] = getItemKey, $[18] = getItemSelected, $[19] = inputElement, $[20] = t, $[21] = t10) : t10 = $[21];
	let t11;
	$[22] !== documentTypeItems.length || $[23] !== t || $[24] !== typeFilter ? (t11 = !documentTypeItems.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		padding: 3,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			muted: !0,
			size: 1,
			textOverflow: "ellipsis",
			children: t("search.document-types-no-matches-found", { filter: typeFilter })
		})
	}), $[22] = documentTypeItems.length, $[23] = t, $[24] = typeFilter, $[25] = t11) : t11 = $[25];
	let t12;
	$[26] !== t10 || $[27] !== t11 ? (t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, { children: [t10, t11] }), $[26] = t10, $[27] = t11, $[28] = t12) : t12 = $[28];
	let t13;
	$[29] !== handleTypesClear || $[30] !== selectedTypes || $[31] !== typeFilter ? (t13 = !typeFilter && selectedTypes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClearButton, {
		onClick: handleTypesClear,
		selectedTypes
	}), $[29] = handleTypesClear, $[30] = selectedTypes, $[31] = typeFilter, $[32] = t13) : t13 = $[32];
	let t14;
	return $[33] !== t12 || $[34] !== t13 || $[35] !== t9 ? (t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
		flexDirection: "column",
		style: POPOVER_STYLES,
		children: [
			t9,
			t12,
			t13
		]
	}), $[33] = t12, $[34] = t13, $[35] = t9, $[36] = t14) : t14 = $[36], t14;
}
function _temp$5(item) {
	return item.type === "divider" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		paddingY: 1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuDivider, {})
	}) : item.type === "header" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		margin: 2,
		padding: 1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			muted: !0,
			size: 1,
			weight: "medium",
			children: item.title
		})
	}) : item.type === "item" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentTypeFilterItem, {
		paddingBottom: 1,
		selected: item.selected,
		type: item.item
	}) : null;
}
function ClearButton(t0) {
	let $ = (0, import_compiler_runtime.c)(9), { onClick, selectedTypes } = t0, { t } = useTranslation$1(), t1;
	$[0] === t ? t1 = $[1] : (t1 = t("search.action.clear-type-filters-aria-label"), $[0] = t, $[1] = t1);
	let t2 = selectedTypes.length === 0, t3;
	$[2] === t ? t3 = $[3] : (t3 = t("search.action.clear-type-filters-label"), $[2] = t, $[3] = t3);
	let t4;
	return $[4] !== onClick || $[5] !== t1 || $[6] !== t2 || $[7] !== t3 ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClearButtonBox, {
		padding: 1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
			"aria-label": t1,
			"data-name": "type-filter-button",
			disabled: t2,
			mode: "bleed",
			onClick,
			text: t3,
			tone: "primary"
		}) })
	}), $[4] = onClick, $[5] = t1, $[6] = t2, $[7] = t3, $[8] = t4) : t4 = $[8], t4;
}
function useGetDocumentTypeItems(schema, selectedTypes, selectedTypesSnapshot, typeFilter) {
	let $ = (0, import_compiler_runtime.c)(5), items;
	if ($[0] !== schema || $[1] !== selectedTypes || $[2] !== selectedTypesSnapshot || $[3] !== typeFilter) {
		let [itemsSelected, itemsUnselected] = partition(getSelectableOmnisearchTypes(schema, typeFilter), (type) => selectedTypesSnapshot.includes(type)), hasSelectedItems = itemsSelected.length > 0, hasUnselectedItems = itemsSelected.length > 0;
		items = [], hasSelectedItems && items.push({
			title: "Selected",
			type: "header"
		}), itemsSelected.forEach((item) => items.push({
			item,
			selected: selectedTypes.includes(item),
			type: "item"
		})), hasSelectedItems && hasUnselectedItems && items.push({ type: "divider" }), itemsUnselected.forEach((item_0) => items.push({
			item: item_0,
			selected: selectedTypes.includes(item_0),
			type: "item"
		})), $[0] = schema, $[1] = selectedTypes, $[2] = selectedTypesSnapshot, $[3] = typeFilter, $[4] = items;
	} else items = $[4];
	return items;
}
var FALLBACK_PLACEMENTS = ["top-start", "bottom-start"];
function DocumentTypesButton() {
	let $ = (0, import_compiler_runtime.c)(19), [open, setOpen] = (0, import_react.useState)(!1), [buttonElement, setButtonElement] = (0, import_react.useState)(null), popoverRef = (0, import_react.useRef)(null), { state: t0 } = useSearchState(), { fullscreen, terms: t1 } = t0, { types } = t1, { t } = useTranslation$1(), t2;
	$[0] === Symbol.for("react.memo_cache_sentinel") ? (t2 = () => setOpen(!1), $[0] = t2) : t2 = $[0];
	let handleClose = t2, t3;
	$[1] === Symbol.for("react.memo_cache_sentinel") ? (t3 = () => setOpen(!0), $[1] = t3) : t3 = $[1];
	let handleOpen = t3, t4;
	$[2] === buttonElement ? t4 = $[3] : (t4 = () => [buttonElement, popoverRef.current], $[2] = buttonElement, $[3] = t4), useClickOutsideEvent(handleClose, t4);
	let t5;
	$[4] !== t || $[5] !== types ? (t5 = documentTypesTruncated({
		types,
		t
	}), $[4] = t, $[5] = types, $[6] = t5) : t5 = $[6];
	let title = t5, t6;
	$[7] === Symbol.for("react.memo_cache_sentinel") ? (t6 = [
		5,
		0,
		0,
		0
	], $[7] = t6) : t6 = $[7];
	let t7;
	$[8] === Symbol.for("react.memo_cache_sentinel") ? (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentTypesPopoverContent, {}), $[8] = t7) : t7 = $[8];
	let t8;
	$[9] === buttonElement ? t8 = $[10] : (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPopoverWrapper, {
		anchorElement: buttonElement,
		onClose: handleClose,
		children: t7
	}), $[9] = buttonElement, $[10] = t8);
	let t9 = fullscreen ? "large" : "default", t10;
	$[11] !== open || $[12] !== t9 || $[13] !== title ? (t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
		iconRight: ChevronDownIcon,
		mode: "ghost",
		onClick: handleOpen,
		size: t9,
		ref: setButtonElement,
		selected: open,
		text: title,
		tone: "default"
	}), $[11] = open, $[12] = t9, $[13] = title, $[14] = t10) : t10 = $[14];
	let t11;
	return $[15] !== open || $[16] !== t10 || $[17] !== t8 ? (t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover$1, {
		__unstable_margins: t6,
		content: t8,
		open,
		placement: "bottom-start",
		fallbackPlacements: FALLBACK_PLACEMENTS,
		portal: !0,
		radius: 3,
		ref: popoverRef,
		children: t10
	}), $[15] = open, $[16] = t10, $[17] = t8, $[18] = t11) : t11 = $[18], t11;
}
var CustomBox = gt(Box).withConfig({
	displayName: "CustomBox",
	componentId: "sc-3b05nr-0"
})`flex-shrink:${({ $flexShrink = 0 }) => $flexShrink};`;
function Field(t0) {
	let $ = (0, import_compiler_runtime.c)(9), { filter, fontSize, fullscreen } = t0, t1 = +!!fullscreen, t2 = fullscreen ? 25 : 40, t3;
	$[0] !== filter || $[1] !== t2 ? (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterTitle, {
		filter,
		maxLength: t2
	}), $[0] = filter, $[1] = t2, $[2] = t3) : t3 = $[2];
	let t4;
	$[3] !== fontSize || $[4] !== t3 ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextWithTone, {
		tone: "default",
		size: fontSize,
		textOverflow: "ellipsis",
		weight: "medium",
		children: t3
	}), $[3] = fontSize, $[4] = t3, $[5] = t4) : t4 = $[5];
	let t5;
	return $[6] !== t1 || $[7] !== t4 ? (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomBox, {
		$flexShrink: t1,
		children: t4
	}), $[6] = t1, $[7] = t4, $[8] = t5) : t5 = $[8], t5;
}
function Operator(t0) {
	let $ = (0, import_compiler_runtime.c)(3), { children, fontSize, showContent } = t0;
	if (!showContent) return null;
	let t1;
	return $[0] !== children || $[1] !== fontSize ? (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomBox, {
		$flexShrink: 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextWithTone, {
			tone: "default",
			size: fontSize,
			textOverflow: "ellipsis",
			weight: "regular",
			children
		})
	}), $[0] = children, $[1] = fontSize, $[2] = t1) : t1 = $[2], t1;
}
function Value(t0) {
	let $ = (0, import_compiler_runtime.c)(7), { buttonValueComponent: ButtonValue, children, filterValue, fontSize, showContent } = t0;
	if (!showContent) return null;
	let t1;
	$[0] !== ButtonValue || $[1] !== children || $[2] !== filterValue ? (t1 = ButtonValue ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonValue, { value: filterValue }) : children, $[0] = ButtonValue, $[1] = children, $[2] = filterValue, $[3] = t1) : t1 = $[3];
	let t2;
	return $[4] !== fontSize || $[5] !== t1 ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomBox, {
		$flexShrink: 1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextWithTone, {
			tone: "default",
			size: fontSize,
			textOverflow: "ellipsis",
			weight: "medium",
			children: t1
		})
	}), $[4] = fontSize, $[5] = t1, $[6] = t2) : t2 = $[6], t2;
}
function FilterLabel(t0) {
	let $ = (0, import_compiler_runtime.c)(20), { filter, fontSize: t1, showContent: t2 } = t0, fontSize = t1 === void 0 ? 1 : t1, showContent = t2 === void 0 || t2, { t } = useTranslation$1(), { state: t3 } = useSearchState(), { definitions, fullscreen } = t3, t4;
	$[0] !== definitions.operators || $[1] !== filter.operatorType ? (t4 = getOperatorDefinition(definitions.operators, filter.operatorType), $[0] = definitions.operators, $[1] = filter.operatorType, $[2] = t4) : t4 = $[2];
	let operator = t4, t5 = operator?.buttonValueComponent, t6;
	$[3] !== filter || $[4] !== fontSize || $[5] !== fullscreen || $[6] !== showContent || $[7] !== t5 ? (t6 = {
		buttonValueComponent: t5,
		filter,
		filterValue: filter.value,
		fontSize,
		fullscreen,
		showContent
	}, $[3] = filter, $[4] = fontSize, $[5] = fullscreen, $[6] = showContent, $[7] = t5, $[8] = t6) : t6 = $[8];
	let componentProps = t6;
	if (operator?.descriptionKey || console.warn("Missing `descriptionKey` for operator `%s`", filter.operatorType), !showContent || !operator?.descriptionKey) {
		let t7;
		return $[9] === componentProps ? t7 = $[10] : (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
			alignItems: "center",
			gap: 1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { ...componentProps })
		}), $[9] = componentProps, $[10] = t7), t7;
	}
	let t7 = operator?.descriptionKey, t8;
	$[11] === Symbol.for("react.memo_cache_sentinel") ? (t8 = {
		Field,
		Operator,
		Value
	}, $[11] = t8) : t8 = $[11];
	let t9;
	$[12] !== filter || $[13] !== t ? (t9 = getFilterValues(filter, t), $[12] = filter, $[13] = t, $[14] = t9) : t9 = $[14];
	let t10;
	return $[15] !== componentProps || $[16] !== t || $[17] !== t7 || $[18] !== t9 ? (t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
		alignItems: "center",
		gap: 1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Translate, {
			t,
			i18nKey: t7,
			components: t8,
			componentProps,
			values: t9
		})
	}), $[15] = componentProps, $[16] = t, $[17] = t7, $[18] = t9, $[19] = t10) : t10 = $[19], t10;
}
function getFilterValues(filter, t) {
	let values = {};
	return typeof filter.value == "number" && (values.count = filter.value), isStringOrNumber(filter.value) && (values.value = filter.value), typeof filter.value == "boolean" && (values.value = filter.value ? t("search.filter-boolean-true") : t("search.filter-boolean-false")), isRecord$2(filter.value) && "from" in filter.value && isStringOrNumber(filter.value.from) && (values.from = filter.value.from), isRecord$2(filter.value) && "to" in filter.value && isStringOrNumber(filter.value.to) && (values.to = filter.value.to), values;
}
function isStringOrNumber(value) {
	return typeof value == "string" || typeof value == "number";
}
function FilterError(props) {
	let $ = (0, import_compiler_runtime.c)(15), { t } = useTranslation$1(), t0;
	$[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextWithTone, {
		tone: "critical",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorOutlineIcon, {})
	}), $[0] = t0) : t0 = $[0];
	let t1;
	$[1] === t ? t1 = $[2] : (t1 = t("search.error.display-filter-title"), $[1] = t, $[2] = t1);
	let t2;
	$[3] === t1 ? t2 = $[4] : (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextWithTone, {
		size: 1,
		tone: "critical",
		weight: "medium",
		children: t1
	}), $[3] = t1, $[4] = t2);
	let t3;
	$[5] === t ? t3 = $[6] : (t3 = t("search.error.display-filter-description"), $[5] = t, $[6] = t3);
	let t4;
	$[7] === t3 ? t4 = $[8] : (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextWithTone, {
		size: 1,
		tone: "critical",
		children: t3
	}), $[7] = t3, $[8] = t4);
	let t5;
	$[9] !== t2 || $[10] !== t4 ? (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
		alignItems: "flex-start",
		gap: 3,
		children: [t0, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
			gap: 4,
			children: [t2, t4]
		})]
	}), $[9] = t2, $[10] = t4, $[11] = t5) : t5 = $[11];
	let t6;
	return $[12] !== props || $[13] !== t5 ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		...props,
		children: t5
	}), $[12] = props, $[13] = t5, $[14] = t6) : t6 = $[14], t6;
}
function CustomMenuItem$1(t0) {
	let $ = (0, import_compiler_runtime.c)(11), { onClick, operator, selected } = t0, t1;
	$[0] !== onClick || $[1] !== operator.type ? (t1 = () => onClick(operator.type), $[0] = onClick, $[1] = operator.type, $[2] = t1) : t1 = $[2];
	let handleClick = t1, { t } = useTranslation$1(), t2;
	$[3] !== operator.nameKey || $[4] !== t ? (t2 = t(operator.nameKey), $[3] = operator.nameKey, $[4] = t, $[5] = t2) : t2 = $[5];
	let t3 = operator?.icon, t4;
	return $[6] !== handleClick || $[7] !== selected || $[8] !== t2 || $[9] !== t3 ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem$1, {
		onClick: handleClick,
		pressed: selected,
		tone: "default",
		text: t2,
		iconRight: t3
	}), $[6] = handleClick, $[7] = selected, $[8] = t2, $[9] = t3, $[10] = t4) : t4 = $[10], t4;
}
function OperatorsMenuButton(t0) {
	let $ = (0, import_compiler_runtime.c)(38), { filter, operator } = t0, menuButtonId = (0, import_react.useId)(), { t } = useTranslation$1(), { dispatch, state } = useSearchState(), T0, T1, T2, t1, t2, t3, t4;
	if ($[0] !== dispatch || $[1] !== filter || $[2] !== menuButtonId || $[3] !== operator || $[4] !== state.definitions.filters || $[5] !== state.definitions.operators || $[6] !== t) {
		t4 = Symbol.for("react.early_return_sentinel");
		bb0: {
			let operatorItems = getFilterDefinition(state.definitions.filters, filter.filterName)?.operators, t5;
			$[14] !== dispatch || $[15] !== filter ? (t5 = (operatorType) => {
				dispatch({
					filterKey: getFilterKey(filter),
					operatorType,
					type: "TERMS_FILTERS_SET_OPERATOR"
				});
			}, $[14] = dispatch, $[15] = filter, $[16] = t5) : t5 = $[16];
			let handleClick = t5;
			if (!operator || !operatorItems || operatorItems.length <= 1) {
				t4 = null;
				break bb0;
			}
			T2 = Inline, T1 = MenuButton$1;
			let t6;
			$[17] !== operator.nameKey || $[18] !== t ? (t6 = t(operator.nameKey), $[17] = operator.nameKey, $[18] = t, $[19] = t6) : t6 = $[19], $[20] === t6 ? t2 = $[21] : (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				mode: "ghost",
				iconRight: ChevronDownIcon,
				text: t6
			}), $[20] = t6, $[21] = t2), t3 = menuButtonId || "", T0 = Menu;
			let t7;
			$[22] !== handleClick || $[23] !== operator.type || $[24] !== state.definitions.operators ? (t7 = (item, index) => {
				if (item.type === "item") {
					let menuOperator = getOperatorDefinition(state.definitions.operators, item.name);
					return menuOperator ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomMenuItem$1, {
						onClick: handleClick,
						operator: menuOperator,
						selected: operator.type === item.name
					}, index) : null;
				}
				return item.type === "divider" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuDivider, {}, index) : null;
			}, $[22] = handleClick, $[23] = operator.type, $[24] = state.definitions.operators, $[25] = t7) : t7 = $[25], t1 = operatorItems.map(t7);
		}
		$[0] = dispatch, $[1] = filter, $[2] = menuButtonId, $[3] = operator, $[4] = state.definitions.filters, $[5] = state.definitions.operators, $[6] = t, $[7] = T0, $[8] = T1, $[9] = T2, $[10] = t1, $[11] = t2, $[12] = t3, $[13] = t4;
	} else T0 = $[7], T1 = $[8], T2 = $[9], t1 = $[10], t2 = $[11], t3 = $[12], t4 = $[13];
	if (t4 !== Symbol.for("react.early_return_sentinel")) return t4;
	let t5;
	$[26] !== T0 || $[27] !== t1 ? (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T0, { children: t1 }), $[26] = T0, $[27] = t1, $[28] = t5) : t5 = $[28];
	let t6;
	$[29] === Symbol.for("react.memo_cache_sentinel") ? (t6 = {
		placement: "bottom-start",
		constrainSize: !0,
		portal: !1,
		radius: 2
	}, $[29] = t6) : t6 = $[29];
	let t7;
	$[30] !== T1 || $[31] !== t2 || $[32] !== t3 || $[33] !== t5 ? (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T1, {
		button: t2,
		id: t3,
		menu: t5,
		popover: t6
	}), $[30] = T1, $[31] = t2, $[32] = t3, $[33] = t5, $[34] = t7) : t7 = $[34];
	let t8;
	return $[35] !== T2 || $[36] !== t7 ? (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T2, { children: t7 }), $[35] = T2, $[36] = t7, $[37] = t8) : t8 = $[37], t8;
}
function FilterForm(t0) {
	let $ = (0, import_compiler_runtime.c)(45), { filter } = t0, [errorParams, setErrorParams] = (0, import_react.useState)(null), { dispatch, state: t1 } = useSearchState(), { definitions, fullscreen } = t1, t2;
	$[0] !== definitions.filters || $[1] !== filter.filterName ? (t2 = getFilterDefinition(definitions.filters, filter.filterName), $[0] = definitions.filters, $[1] = filter.filterName, $[2] = t2) : t2 = $[2];
	let filterDefinition = t2, t3;
	$[3] !== definitions.operators || $[4] !== filter.operatorType ? (t3 = getOperatorDefinition(definitions.operators, filter.operatorType), $[3] = definitions.operators, $[4] = filter.operatorType, $[5] = t3) : t3 = $[5];
	let operator = t3, t4;
	$[6] !== definitions.fields || $[7] !== filter ? (t4 = getFieldFromFilter(definitions.fields, filter), $[6] = definitions.fields, $[7] = filter, $[8] = t4) : t4 = $[8];
	let fieldDefinition = t4, t5;
	$[9] === filter ? t5 = $[10] : (t5 = getFilterKey(filter), $[9] = filter, $[10] = t5);
	let filterKey = t5, t6;
	$[11] !== dispatch || $[12] !== filter ? (t6 = () => {
		dispatch({
			filterKey: getFilterKey(filter),
			type: "TERMS_FILTERS_REMOVE"
		});
	}, $[11] = dispatch, $[12] = filter, $[13] = t6) : t6 = $[13];
	let handleClose = t6, t7;
	$[14] !== dispatch || $[15] !== filterKey ? (t7 = (value) => {
		dispatch({
			filterKey,
			type: "TERMS_FILTERS_SET_VALUE",
			value
		});
	}, $[14] = dispatch, $[15] = filterKey, $[16] = t7) : t7 = $[16];
	let handleValueChange = t7, t8;
	$[17] === Symbol.for("react.memo_cache_sentinel") ? (t8 = (params) => {
		setErrorParams(params);
	}, $[17] = t8) : t8 = $[17];
	let handleCatchError = t8, Component = operator?.inputComponent;
	if (errorParams) {
		let t9;
		return $[18] === Symbol.for("react.memo_cache_sentinel") ? (t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterError, { padding: 4 }), $[18] = t9) : t9 = $[18], t9;
	}
	let t9;
	$[19] !== Component || $[20] !== fieldDefinition || $[21] !== filter.operatorType || $[22] !== filter.value || $[23] !== handleValueChange ? (t9 = Component && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		borderTop: !0,
		padding: 3,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
			fieldDefinition,
			onChange: handleValueChange,
			value: filter.value
		}, filter.operatorType)
	}), $[19] = Component, $[20] = fieldDefinition, $[21] = filter.operatorType, $[22] = filter.value, $[23] = handleValueChange, $[24] = t9) : t9 = $[24];
	let t10;
	$[25] === filter ? t10 = $[26] : (t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		paddingLeft: 1,
		paddingRight: 2,
		paddingY: 1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterDetails, { filter })
	}), $[25] = filter, $[26] = t10);
	let t11;
	$[27] !== fullscreen || $[28] !== handleClose ? (t11 = fullscreen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
		icon: TrashIcon,
		mode: "bleed",
		onClick: handleClose,
		tone: "critical",
		tooltipProps: { content: "Remove filter" }
	}), $[27] = fullscreen, $[28] = handleClose, $[29] = t11) : t11 = $[29];
	let t12;
	$[30] !== t10 || $[31] !== t11 ? (t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
		alignItems: "flex-start",
		gap: 3,
		justifyContent: "space-between",
		children: [t10, t11]
	}), $[30] = t10, $[31] = t11, $[32] = t12) : t12 = $[32];
	let t13;
	$[33] === filterDefinition ? t13 = $[34] : (t13 = filterDefinition?.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		border: !0,
		padding: 3,
		radius: 2,
		tone: "transparent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			muted: !0,
			size: 1,
			children: filterDefinition.description
		})
	}), $[33] = filterDefinition, $[34] = t13);
	let t14;
	$[35] !== filter || $[36] !== operator ? (t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OperatorsMenuButton, {
		filter,
		operator
	}), $[35] = filter, $[36] = operator, $[37] = t14) : t14 = $[37];
	let t15;
	$[38] !== t12 || $[39] !== t13 || $[40] !== t14 ? (t15 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		padding: 3,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
			gap: 3,
			children: [
				t12,
				t13,
				t14
			]
		})
	}), $[38] = t12, $[39] = t13, $[40] = t14, $[41] = t15) : t15 = $[41];
	let t16;
	return $[42] !== t15 || $[43] !== t9 ? (t16 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBoundary$1, {
		onCatch: handleCatchError,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(es2015_default, {
			autoFocus: !supportsTouch,
			returnFocus: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
				flexDirection: "column-reverse",
				children: [t9, t15]
			})
		})
	}), $[42] = t15, $[43] = t9, $[44] = t16) : t16 = $[44], t16;
}
var ContainerFlex = gt(Flex).withConfig({
	displayName: "ContainerFlex",
	componentId: "sc-1m26ze-0"
})`max-width:480px;min-width:150px;overflow:hidden;overflow:clip;width:100%;`;
function FilterPopoverContent(t0) {
	let $ = (0, import_compiler_runtime.c)(6), { filter } = t0, t1, t2;
	$[0] === filter ? (t1 = $[1], t2 = $[2]) : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterForm, { filter }), t2 = !1, $[0] = filter, $[1] = t1, $[2] = t2);
	let t3;
	return $[3] !== t1 || $[4] !== t2 ? (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContainerFlex, {
		flexDirection: "column",
		children: [t1, t2]
	}), $[3] = t1, $[4] = t2, $[5] = t3) : t3 = $[5], t3;
}
var CloseButton = gt(Button).withConfig({
	displayName: "CloseButton",
	componentId: "sc-2fazkr-0"
})`border-radius:${({ theme }) => `0 ${rem(theme.sanity.radius[2])} ${rem(theme.sanity.radius[2])} 0`};`;
var CloseCard = gt(Card).withConfig({
	displayName: "CloseCard",
	componentId: "sc-2fazkr-1"
})`position:absolute;right:0;`;
var ContainerDiv = gt.div.withConfig({
	displayName: "ContainerDiv",
	componentId: "sc-2fazkr-2"
})`align-items:center;display:inline-flex;max-width:100%;position:relative;`;
var LabelButton = gt(Button).withConfig({
	displayName: "LabelButton",
	componentId: "sc-2fazkr-3"
})`border:none;width:100%;`;
function FilterButton(t0) {
	let $ = (0, import_compiler_runtime.c)(45), { filter, initialOpen } = t0, [open, setOpen] = (0, import_react.useState)(initialOpen), [buttonElement, setButtonElement] = (0, import_react.useState)(null), popoverRef = (0, import_react.useRef)(null), { dispatch, state: t1 } = useSearchState(), { definitions, fullscreen } = t1, { t } = useTranslation$1(), t2;
	$[0] === Symbol.for("react.memo_cache_sentinel") ? (t2 = () => setOpen(!1), $[0] = t2) : t2 = $[0];
	let handleClose = t2, t3;
	$[1] === Symbol.for("react.memo_cache_sentinel") ? (t3 = () => setOpen(!0), $[1] = t3) : t3 = $[1];
	let handleOpen = t3, t4;
	$[2] !== dispatch || $[3] !== filter ? (t4 = () => dispatch({
		filterKey: getFilterKey(filter),
		type: "TERMS_FILTERS_REMOVE"
	}), $[2] = dispatch, $[3] = filter, $[4] = t4) : t4 = $[4];
	let handleRemove = t4, t5;
	$[5] === handleRemove ? t5 = $[6] : (t5 = (event) => {
		["Backspace", "Delete"].includes(event.key) && handleRemove();
	}, $[5] = handleRemove, $[6] = t5);
	let handleKeyDown = t5, t6;
	$[7] === buttonElement ? t6 = $[8] : (t6 = () => [buttonElement, popoverRef.current], $[7] = buttonElement, $[8] = t6), useClickOutsideEvent(handleClose, t6);
	let t7;
	$[9] !== definitions.fields || $[10] !== definitions.filters || $[11] !== definitions.operators || $[12] !== filter ? (t7 = validateFilter({
		fieldDefinitions: definitions.fields,
		filter,
		filterDefinitions: definitions.filters,
		operatorDefinitions: definitions.operators
	}), $[9] = definitions.fields, $[10] = definitions.filters, $[11] = definitions.operators, $[12] = filter, $[13] = t7) : t7 = $[13];
	let isValid = t7, t8;
	$[14] === Symbol.for("react.memo_cache_sentinel") ? (t8 = [
		5,
		0,
		0,
		0
	], $[14] = t8) : t8 = $[14];
	let t9;
	$[15] === filter ? t9 = $[16] : (t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPopoverContent, { filter }), $[15] = filter, $[16] = t9);
	let t10;
	$[17] !== buttonElement || $[18] !== t9 ? (t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPopoverWrapper, {
		anchorElement: buttonElement,
		onClose: handleClose,
		children: t9
	}), $[17] = buttonElement, $[18] = t9, $[19] = t10) : t10 = $[19];
	let t11 = isValid ? "primary" : "transparent", t12 = fullscreen ? 3 : 2, t13 = fullscreen ? 3 : 5, t14 = fullscreen ? 3 : 2, t15;
	$[20] !== filter || $[21] !== isValid ? (t15 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterLabel, {
		filter,
		showContent: isValid
	}), $[20] = filter, $[21] = isValid, $[22] = t15) : t15 = $[22];
	let t16;
	$[23] !== handleKeyDown || $[24] !== t12 || $[25] !== t13 || $[26] !== t14 || $[27] !== t15 ? (t16 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelButton, {
		mode: "bleed",
		onClick: handleOpen,
		onKeyDown: handleKeyDown,
		paddingLeft: t12,
		paddingRight: t13,
		paddingY: t14,
		ref: setButtonElement,
		children: t15
	}), $[23] = handleKeyDown, $[24] = t12, $[25] = t13, $[26] = t14, $[27] = t15, $[28] = t16) : t16 = $[28];
	let t17;
	$[29] !== t11 || $[30] !== t16 ? (t17 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		__unstable_focusRing: !0,
		display: "flex",
		radius: 2,
		tone: t11,
		children: t16
	}), $[29] = t11, $[30] = t16, $[31] = t17) : t17 = $[31];
	let t18;
	$[32] !== fullscreen || $[33] !== handleKeyDown || $[34] !== handleRemove || $[35] !== isValid || $[36] !== t ? (t18 = !fullscreen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseCard, {
		__unstable_focusRing: !0,
		display: "flex",
		radius: 2,
		tone: isValid ? "primary" : "transparent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseButton, {
			"aria-label": t("search.action.remove-filter-aria-label"),
			fontSize: 1,
			icon: CloseIcon,
			mode: "bleed",
			onClick: handleRemove,
			onKeyDown: handleKeyDown,
			padding: 2,
			radius: 2
		})
	}), $[32] = fullscreen, $[33] = handleKeyDown, $[34] = handleRemove, $[35] = isValid, $[36] = t, $[37] = t18) : t18 = $[37];
	let t19;
	$[38] !== t17 || $[39] !== t18 ? (t19 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContainerDiv, { children: [t17, t18] }), $[38] = t17, $[39] = t18, $[40] = t19) : t19 = $[40];
	let t20;
	return $[41] !== open || $[42] !== t10 || $[43] !== t19 ? (t20 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover$1, {
		__unstable_margins: t8,
		content: t10,
		constrainSize: !0,
		open,
		overflow: "auto",
		placement: "bottom-start",
		portal: !0,
		radius: 3,
		ref: popoverRef,
		children: t19
	}), $[41] = open, $[42] = t10, $[43] = t19, $[44] = t20) : t20 = $[44], t20;
}
/**
* @internal
*/
function Filters(t0) {
	let $ = (0, import_compiler_runtime.c)(36), { showTypeFilter: t1 } = t0, showTypeFilter = t1 === void 0 || t1, { dispatch, state: t2 } = useSearchState(), { filters, fullscreen, lastAddedFilter, terms: t3 } = t2, { types } = t3, { t } = useTranslation$1(), [isMounted, setIsMounted] = (0, import_react.useState)(!1), t4;
	$[0] !== dispatch || $[1] !== showTypeFilter ? (t4 = () => {
		showTypeFilter && dispatch({ type: "TERMS_TYPES_CLEAR" }), dispatch({ type: "TERMS_FILTERS_CLEAR" });
	}, $[0] = dispatch, $[1] = showTypeFilter, $[2] = t4) : t4 = $[2];
	let handleClear = t4, clearFiltersButtonVisible = filters.length > 0 || showTypeFilter && types.length > 0, t5, t6;
	$[3] === Symbol.for("react.memo_cache_sentinel") ? (t5 = () => {
		setIsMounted(!0);
	}, t6 = [], $[3] = t5, $[4] = t6) : (t5 = $[3], t6 = $[4]), (0, import_react.useEffect)(t5, t6);
	let t7;
	$[5] === lastAddedFilter ? t7 = $[6] : (t7 = lastAddedFilter && getFilterKey(lastAddedFilter), $[5] = lastAddedFilter, $[6] = t7);
	let lastAddedFilterKey = t7, t8 = fullscreen ? "large" : "default", t9;
	$[7] === t ? t9 = $[8] : (t9 = t("search.action.clear-filters"), $[7] = t, $[8] = t9);
	let t10;
	$[9] !== handleClear || $[10] !== t8 || $[11] !== t9 ? (t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
		mode: "bleed",
		onClick: handleClear,
		size: t8,
		text: t9,
		tone: "critical"
	}), $[9] = handleClear, $[10] = t8, $[11] = t9, $[12] = t10) : t10 = $[12];
	let clearFiltersButton = t10, t11;
	$[13] === showTypeFilter ? t11 = $[14] : (t11 = showTypeFilter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentTypesButton, {}), $[13] = showTypeFilter, $[14] = t11);
	let t12;
	$[15] !== filters || $[16] !== isMounted || $[17] !== lastAddedFilterKey ? (t12 = filters?.map((filter) => {
		let key = getFilterKey(filter);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterButton, {
			filter,
			initialOpen: isMounted && lastAddedFilterKey === key
		}, key);
	}), $[15] = filters, $[16] = isMounted, $[17] = lastAddedFilterKey, $[18] = t12) : t12 = $[18];
	let t13;
	$[19] === fullscreen ? t13 = $[20] : (t13 = !fullscreen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddFilterButton, {}), $[19] = fullscreen, $[20] = t13);
	let t14;
	$[21] !== t11 || $[22] !== t12 || $[23] !== t13 ? (t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
		flexBasis: "0%",
		flexGrow: 1,
		gap: 2,
		flexWrap: "wrap",
		children: [
			t11,
			t12,
			t13
		]
	}), $[21] = t11, $[22] = t12, $[23] = t13, $[24] = t14) : t14 = $[24];
	let t15 = clearFiltersButtonVisible && !fullscreen && clearFiltersButton, t16;
	$[25] !== t14 || $[26] !== t15 ? (t16 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
		alignItems: "flex-start",
		gap: 3,
		justifyContent: "space-between",
		padding: 2,
		children: [t14, t15]
	}), $[25] = t14, $[26] = t15, $[27] = t16) : t16 = $[27];
	let t17;
	$[28] !== clearFiltersButton || $[29] !== clearFiltersButtonVisible || $[30] !== fullscreen ? (t17 = fullscreen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
		justifyContent: "space-between",
		paddingBottom: 2,
		paddingX: 2,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddFilterButton, {}), clearFiltersButtonVisible && clearFiltersButton]
	}), $[28] = clearFiltersButton, $[29] = clearFiltersButtonVisible, $[30] = fullscreen, $[31] = t17) : t17 = $[31];
	let t18;
	$[32] === Symbol.for("react.memo_cache_sentinel") ? (t18 = !1, $[32] = t18) : t18 = $[32];
	let t19;
	return $[33] !== t16 || $[34] !== t17 ? (t19 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		t16,
		t17,
		t18
	] }), $[33] = t16, $[34] = t17, $[35] = t19) : t19 = $[35], t19;
}
var rotate = Et`from{transform:rotate(0deg);}to{transform:rotate(360deg);}`;
var AnimatedSpinnerIcon = gt(SpinnerIcon).withConfig({
	displayName: "AnimatedSpinnerIcon",
	componentId: "sc-gk3ib6-0"
})`animation:${rotate} 500ms linear infinite;height:round(1em,2px);width:round(1em,2px);`;
var FilterDiv = gt.div.withConfig({
	displayName: "FilterDiv",
	componentId: "sc-gk3ib6-1"
})`line-height:0;position:relative;`;
/**
* @internal
*/
function SearchHeader(t0) {
	let $ = (0, import_compiler_runtime.c)(48), { ref, ariaInputLabel, onClose } = t0, isMountedRef = (0, import_react.useRef)(!1), { t } = useTranslation$1(), { dispatch, state: t1 } = useSearchState(), { filters, filtersVisible, fullscreen, result: t2, terms } = t1, { loading } = t2, { types, query } = terms, t3;
	$[0] === terms ? t3 = $[1] : (t3 = hasSearchableTerms({ terms }), $[0] = terms, $[1] = t3);
	let hasValidTerms = t3, t4;
	$[2] !== ariaInputLabel || $[3] !== hasValidTerms || $[4] !== t ? (t4 = t(ariaInputLabel || hasValidTerms ? "search.search-results-aria-label" : "search.recent-searches-aria-label"), $[2] = ariaInputLabel, $[3] = hasValidTerms, $[4] = t, $[5] = t4) : t4 = $[5];
	let ariaLabel = t4, t5;
	$[6] !== dispatch || $[7] !== filtersVisible ? (t5 = () => dispatch({
		type: "FILTERS_VISIBLE_SET",
		visible: !filtersVisible
	}), $[6] = dispatch, $[7] = filtersVisible, $[8] = t5) : t5 = $[8];
	let handleFiltersToggle = t5, t6;
	$[9] === dispatch ? t6 = $[10] : (t6 = (e) => dispatch({
		type: "TERMS_QUERY_SET",
		query: e.currentTarget.value
	}), $[9] = dispatch, $[10] = t6);
	let handleQueryChange = t6, t7;
	$[11] === dispatch ? t7 = $[12] : (t7 = () => {
		dispatch({
			type: "TERMS_QUERY_SET",
			query: ""
		});
	}, $[11] = dispatch, $[12] = t7);
	let handleQueryClear = t7, t8, t9;
	$[13] !== dispatch || $[14] !== fullscreen ? (t8 = () => {
		fullscreen || dispatch({
			type: "FILTERS_VISIBLE_SET",
			visible: !0
		});
	}, t9 = [dispatch, fullscreen], $[13] = dispatch, $[14] = fullscreen, $[15] = t8, $[16] = t9) : (t8 = $[15], t9 = $[16]), (0, import_react.useEffect)(t8, t9);
	let t10, t11;
	$[17] === Symbol.for("react.memo_cache_sentinel") ? (t10 = () => {
		isMountedRef.current = !0;
	}, t11 = [], $[17] = t10, $[18] = t11) : (t10 = $[17], t11 = $[18]), (0, import_react.useEffect)(t10, t11);
	let notificationBadgeVisible = filters.length > 0 || types.length > 0, t12 = fullscreen ? 2 : 1, t13 = fullscreen ? 2 : 1, t14;
	$[19] !== fullscreen || $[20] !== onClose || $[21] !== t ? (t14 = fullscreen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
		"aria-label": t("search.action.close-search-aria-label"),
		icon: ArrowLeftIcon,
		mode: "bleed",
		onClick: onClose,
		size: "large",
		tooltipProps: { content: t("search.action.close-search-aria-label") }
	}), $[19] = fullscreen, $[20] = onClose, $[21] = t, $[22] = t14) : t14 = $[22];
	let t15 = !!query, t16;
	$[23] === Symbol.for("react.memo_cache_sentinel") ? (t16 = [
		2,
		2,
		1
	], $[23] = t16) : t16 = $[23];
	let t17 = loading ? AnimatedSpinnerIcon : SearchIcon, t18;
	$[24] === t ? t18 = $[25] : (t18 = t("search.placeholder"), $[24] = t, $[25] = t18);
	let t19;
	$[26] !== ariaLabel || $[27] !== fullscreen || $[28] !== handleQueryChange || $[29] !== handleQueryClear || $[30] !== query || $[31] !== ref || $[32] !== t15 || $[33] !== t17 || $[34] !== t18 ? (t19 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		flexBasis: "0%",
		flexGrow: 1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomTextInput, {
			__unstable_disableFocusRing: !0,
			$background: fullscreen,
			$smallClearButton: fullscreen,
			"aria-label": ariaLabel,
			autoComplete: "off",
			border: !1,
			clearButton: t15,
			fontSize: t16,
			icon: t17,
			onChange: handleQueryChange,
			onClear: handleQueryClear,
			placeholder: t18,
			radius: 2,
			ref,
			spellCheck: !1,
			value: query
		})
	}), $[26] = ariaLabel, $[27] = fullscreen, $[28] = handleQueryChange, $[29] = handleQueryClear, $[30] = query, $[31] = ref, $[32] = t15, $[33] = t17, $[34] = t18, $[35] = t19) : t19 = $[35];
	let t20;
	$[36] !== filtersVisible || $[37] !== fullscreen || $[38] !== handleFiltersToggle || $[39] !== notificationBadgeVisible || $[40] !== t ? (t20 = fullscreen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterDiv, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusButton, {
		"aria-expanded": filtersVisible,
		"aria-label": t("search.action.toggle-filters-aria-label", { context: filtersVisible ? "hide" : "show" }),
		icon: ControlsIcon,
		mode: "bleed",
		onClick: handleFiltersToggle,
		selected: filtersVisible,
		size: "large",
		tone: notificationBadgeVisible ? "primary" : void 0,
		tooltipProps: { content: t("search.action.toggle-filters-label", { context: filtersVisible ? "hide" : "show" }) }
	}) }), $[36] = filtersVisible, $[37] = fullscreen, $[38] = handleFiltersToggle, $[39] = notificationBadgeVisible, $[40] = t, $[41] = t20) : t20 = $[41];
	let t21;
	return $[42] !== t12 || $[43] !== t13 || $[44] !== t14 || $[45] !== t19 || $[46] !== t20 ? (t21 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		flex: "none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
			alignItems: "center",
			flexBasis: "0%",
			flexGrow: 1,
			gap: t12,
			padding: t13,
			children: [
				t14,
				t19,
				t20
			]
		})
	}), $[42] = t12, $[43] = t13, $[44] = t14, $[45] = t19, $[46] = t20, $[47] = t21) : t21 = $[47], t21;
}
var isSearchHotKey = isHotkey("mod+k");
var isEscape = isHotkey("escape");
/**
* This hook binds a global shortcut combination, as well as the ESC key, to open / close callbacks.
*
* It will prevent the ESC key from firing `onClose` callbacks if it's not the top most layer
* (i.e. if a nested dialog is mounted).
*/
function useSearchHotkeys(t0) {
	let $ = (0, import_compiler_runtime.c)(7), { open, onClose, onOpen } = t0, { isTopLayer } = useLayer(), t1;
	$[0] === onClose ? t1 = $[1] : (t1 = () => {
		onClose?.();
	}, $[0] = onClose, $[1] = t1);
	let handleClose = t1, t2;
	$[2] !== handleClose || $[3] !== isTopLayer || $[4] !== onOpen || $[5] !== open ? (t2 = (event) => {
		isSearchHotKey(event) && (event.preventDefault(), open ? handleClose() : onOpen?.()), isEscape(event) && open && isTopLayer && handleClose();
	}, $[2] = handleClose, $[3] = isTopLayer, $[4] = onOpen, $[5] = open, $[6] = t2) : t2 = $[6], useGlobalKeyDown(t2);
}
function SearchWrapper(t0) {
	let $ = (0, import_compiler_runtime.c)(24), { children, hasValidTerms, onClose, onOpen, open } = t0, isMountedRef = (0, import_react.useRef)(!1), { dispatch, searchCommandList, setOnClose, state: t1 } = useSearchState(), { result } = t1, t2;
	$[0] !== dispatch || $[1] !== onClose || $[2] !== searchCommandList ? (t2 = () => {
		dispatch({
			index: searchCommandList?.getTopIndex() ?? -1,
			type: "LAST_ACTIVE_INDEX_SET"
		}), onClose();
	}, $[0] = dispatch, $[1] = onClose, $[2] = searchCommandList, $[3] = t2) : t2 = $[3];
	let handleClose = t2, t3;
	$[4] !== handleClose || $[5] !== onOpen || $[6] !== open ? (t3 = {
		onClose: handleClose,
		onOpen,
		open
	}, $[4] = handleClose, $[5] = onOpen, $[6] = open, $[7] = t3) : t3 = $[7], useSearchHotkeys(t3);
	let t4, t5;
	$[8] !== handleClose || $[9] !== setOnClose ? (t4 = () => {
		setOnClose(() => handleClose);
	}, t5 = [handleClose, setOnClose], $[8] = handleClose, $[9] = setOnClose, $[10] = t4, $[11] = t5) : (t4 = $[10], t5 = $[11]), (0, import_react.useEffect)(t4, t5);
	let t6, t7;
	$[12] !== dispatch || $[13] !== hasValidTerms || $[14] !== result.loaded ? (t6 = () => {
		(!hasValidTerms || result.loaded) && isMountedRef.current && dispatch({
			index: 0,
			type: "LAST_ACTIVE_INDEX_SET"
		});
	}, t7 = [
		dispatch,
		hasValidTerms,
		result.loaded
	], $[12] = dispatch, $[13] = hasValidTerms, $[14] = result.loaded, $[15] = t6, $[16] = t7) : (t6 = $[15], t7 = $[16]), (0, import_react.useEffect)(t6, t7);
	let t8, t9;
	$[17] !== dispatch || $[18] !== hasValidTerms || $[19] !== open ? (t8 = () => {
		!hasValidTerms && isMountedRef.current && !open && dispatch({ type: "ORDERING_RESET" });
	}, t9 = [
		dispatch,
		hasValidTerms,
		open
	], $[17] = dispatch, $[18] = hasValidTerms, $[19] = open, $[20] = t8, $[21] = t9) : (t8 = $[20], t9 = $[21]), (0, import_react.useEffect)(t8, t9);
	let t10, t11;
	return $[22] === Symbol.for("react.memo_cache_sentinel") ? (t10 = () => {
		isMountedRef?.current || (isMountedRef.current = !0);
	}, t11 = [], $[22] = t10, $[23] = t11) : (t10 = $[22], t11 = $[23]), (0, import_react.useEffect)(t10, t11), children;
}
function createFieldDefinitions(schema, filterDefinitions) {
	let searchableDocumentTypeNames = getSearchableOmnisearchTypes(schema).map((s) => s.name), { documentTypes, objectTypes } = (schema._original?.types || []).filter((t) => (!isDocumentObjectDefinition(t) || searchableDocumentTypeNames.includes(t.name)) && t.name !== "slug" && !t.name.startsWith("sanity.")).reduce((acc, schemaType) => (isDocumentObjectDefinition(schemaType) && (acc.documentTypes[schemaType.name] = schemaType), isObjectDefinition(schemaType) && (acc.objectTypes[schemaType.name] = schemaType), acc), {
		documentTypes: {},
		objectTypes: {}
	}) || {
		documentTypes: {},
		objectTypes: {}
	};
	return getDocumentFieldDefinitions(getSupportedFieldTypes(filterDefinitions), documentTypes, objectTypes);
}
function createFieldDefinitionDictionary(fieldDefinitions) {
	return fieldDefinitions.reduce((acc, val) => (acc[val.id] = val, acc), {});
}
function generateFieldId(field) {
	return [
		field.type,
		field.fieldPath,
		field.title
	].join("-");
}
function getDocumentFieldDefinitions(supportedFieldTypes, documentTypes, objectTypes) {
	let supportedFieldTypeSet = new Set(supportedFieldTypes);
	function addFieldDefinitionRecursive({ acc, defType, depth = 0, documentType, prevFieldPath, prevTitlePath }) {
		if (depth > 3) return;
		let isInternalField = defType.name.startsWith("_"), title = defType?.title ? sanitizeFieldValue(defType.title) : startCase(defType.name), fieldPath = prevFieldPath ? `${prevFieldPath}.${defType.name}` : defType.name, titlePath = prevTitlePath ? [...prevTitlePath, title] : [title], existingObject = objectTypes[defType.type], existingDocument = documentTypes[defType.type], inlineObject = isObjectDefinition(defType) ? defType : null, targetObject = existingDocument || existingObject || inlineObject;
		if (targetObject) {
			for (let field of targetObject.fields ?? []) addFieldDefinitionRecursive({
				acc,
				defType: field,
				depth: depth + 1,
				documentType,
				prevFieldPath: fieldPath,
				prevTitlePath: titlePath
			});
			return;
		}
		supportedFieldTypeSet.has(defType.type) && acc.push({
			documentTypes: documentType && !isInternalField ? [documentType] : [],
			fieldPath,
			filterName: resolveFilterName(defType),
			id: "",
			name: defType.name,
			titlePath,
			title,
			type: defType.type
		});
	}
	let fieldDefinitions = [];
	for (let documentType of Object.values(documentTypes)) {
		let documentFields = [];
		for (let documentField of documentType.fields ?? []) addFieldDefinitionRecursive({
			acc: documentFields,
			defType: documentField,
			documentType: documentType.name
		});
		fieldDefinitions.push(...documentFields.map(addFieldDefinitionId));
	}
	let consolidatedFieldDefinitionMap = /* @__PURE__ */ new Map();
	for (let fieldDefinitionWithId of fieldDefinitions) {
		let consolidated = consolidatedFieldDefinitionMap.get(fieldDefinitionWithId.id);
		if (consolidated) {
			consolidated.documentTypes.push(...fieldDefinitionWithId.documentTypes);
			continue;
		}
		consolidatedFieldDefinitionMap.set(fieldDefinitionWithId.id, fieldDefinitionWithId);
	}
	let consolidatedFieldDefinitions = Array.from(consolidatedFieldDefinitionMap.values());
	return consolidatedFieldDefinitions.sort(sortFieldDefinitions), consolidatedFieldDefinitions;
}
/**
* Create unique ID as a hash from documentTypes, full field path, filter and field types
*/
function addFieldDefinitionId(field) {
	return {
		...field,
		id: generateFieldId(field)
	};
}
function isArrayOfPrimitives(schemaType) {
	return isArrayDefinition(schemaType) ? schemaType.of.every((item) => [
		"boolean",
		"number",
		"string"
	].includes(item.type)) && (schemaType.options?.list ? schemaType.options.list.length > 0 : !1) : !1;
}
function isArrayDefinition(schemaType) {
	return schemaType.type === "array";
}
function isDocumentObjectDefinition(schemaType) {
	return schemaType.type === "document";
}
function isObjectDefinition(schemaType) {
	return schemaType.type === "object";
}
function isStringDefinition(schemaType) {
	return schemaType.type === "string";
}
function isStringListDefinition(schemaType) {
	return isStringDefinition(schemaType) && schemaType.options?.list ? schemaType.options.list.length > 0 : !1;
}
function resolveFilterName(schemaType) {
	if (isStringListDefinition(schemaType)) return "stringList";
	if (isArrayDefinition(schemaType)) {
		if (schemaType.of.some((item) => item.type === "reference")) return "arrayReferences";
		if (schemaType.of.find((item) => item.type === "block")) return "portableText";
		if (isArrayOfPrimitives(schemaType)) return "arrayList";
	}
	return schemaType.type;
}
/**
* Sort definitions by title, joined titlePath and fieldPath (in that order)
*/
function sortFieldDefinitions(a, b) {
	return a.title.localeCompare(b.title) || a.titlePath.slice(0, -1).join("/").localeCompare(b.titlePath.slice(0, -1).join("/")) || a.fieldPath.localeCompare(b.fieldPath);
}
var defaultValue = {
	version: 3,
	recentSearches: []
};
function useStoredSearch() {
	let $ = (0, import_compiler_runtime.c)(12), keyValueStore = useKeyValueStore(), client = useClient(DEFAULT_STUDIO_CLIENT_OPTIONS), t0;
	$[0] === client ? t0 = $[1] : (t0 = client.config(), $[0] = client, $[1] = t0);
	let { dataset } = t0, keyValueStoreKey = `studio.search.recent.${dataset}`, t1;
	$[2] === Symbol.for("react.memo_cache_sentinel") ? (t1 = new Subject(), $[2] = t1) : t1 = $[2];
	let optimisticWrites$ = t1, t2;
	$[3] !== keyValueStore || $[4] !== keyValueStoreKey ? (t2 = merge(keyValueStore.getKey(keyValueStoreKey).pipe(tap((raw) => {
		let data = raw;
		data && data.version !== 3 && keyValueStore.setKey(keyValueStoreKey, defaultValue);
	}), map(_temp$4)), optimisticWrites$).pipe(startWith(defaultValue)), $[3] = keyValueStore, $[4] = keyValueStoreKey, $[5] = t2) : t2 = $[5];
	let value = useSyncObservable(t2, defaultValue), t3;
	$[6] !== keyValueStore || $[7] !== keyValueStoreKey ? (t3 = (newValue) => {
		optimisticWrites$.next(newValue), keyValueStore.setKey(keyValueStoreKey, newValue);
	}, $[6] = keyValueStore, $[7] = keyValueStoreKey, $[8] = t3) : t3 = $[8];
	let set = t3, t4;
	return $[9] !== set || $[10] !== value ? (t4 = [value, set], $[9] = set, $[10] = value, $[11] = t4) : t4 = $[11], t4;
}
function _temp$4(raw_0) {
	let data_0 = raw_0;
	return !data_0 || data_0.version !== 3 ? defaultValue : data_0;
}
function useRecentSearchesStore() {
	let $ = (0, import_compiler_runtime.c)(18), [storedSearch, setStoredSearch] = useStoredSearch(), schema = useSchema(), { search: t0 } = useSource(), { operators, filters } = t0, t1;
	$[0] !== filters || $[1] !== schema ? (t1 = createFieldDefinitionDictionary(createFieldDefinitions(schema, filters)), $[0] = filters, $[1] = schema, $[2] = t1) : t1 = $[2];
	let t2;
	$[3] === filters ? t2 = $[4] : (t2 = createFilterDefinitionDictionary(filters), $[3] = filters, $[4] = t2);
	let t3;
	$[5] === operators ? t3 = $[6] : (t3 = createOperatorDefinitionDictionary(operators), $[5] = operators, $[6] = t3);
	let t4;
	$[7] !== t1 || $[8] !== t2 || $[9] !== t3 ? (t4 = {
		fieldDefinitions: t1,
		filterDefinitions: t2,
		operatorDefinitions: t3
	}, $[7] = t1, $[8] = t2, $[9] = t3, $[10] = t4) : t4 = $[10];
	let { fieldDefinitions, filterDefinitions, operatorDefinitions } = t4, t5;
	return $[11] !== fieldDefinitions || $[12] !== filterDefinitions || $[13] !== operatorDefinitions || $[14] !== schema || $[15] !== setStoredSearch || $[16] !== storedSearch ? (t5 = {
		addSearch: (searchTerm, searchFilters) => {
			let validStoredFilters = (searchFilters || []).map(_temp$3).filter((filter_0) => validateFilter({
				fieldDefinitions,
				filter: filter_0,
				filterDefinitions,
				operatorDefinitions
			})), newSearchItem = {
				created: (/* @__PURE__ */ new Date()).toISOString(),
				filters: validStoredFilters,
				terms: {
					query: searchTerm.query.trim(),
					typeNames: searchTerm.types.map(_temp2$1)
				}
			}, newRecent = {
				version: 3,
				recentSearches: [newSearchItem, ...storedSearch.recentSearches.filter((r) => !dequal(omit(r, "created"), omit(newSearchItem, "created")))].slice(0, 5)
			};
			return setStoredSearch(newRecent), getRecentSearchTerms({
				fieldDefinitions,
				filterDefinitions,
				operatorDefinitions,
				schema,
				storedSearch: newRecent,
				setStoredSearch
			});
		},
		getRecentSearches: () => getRecentSearchTerms({
			fieldDefinitions,
			filterDefinitions,
			operatorDefinitions,
			schema,
			storedSearch,
			setStoredSearch
		}),
		removeSearch: () => {
			let newRecent_0 = {
				...storedSearch,
				recentSearches: []
			};
			return setStoredSearch(newRecent_0), getRecentSearchTerms({
				fieldDefinitions,
				filterDefinitions,
				operatorDefinitions,
				schema,
				storedSearch: newRecent_0,
				setStoredSearch
			});
		},
		removeSearchAtIndex: (index) => {
			if (index < 0 || index > storedSearch.recentSearches.length) return getRecentSearchTerms({
				fieldDefinitions,
				filterDefinitions,
				operatorDefinitions,
				schema,
				storedSearch,
				setStoredSearch
			});
			let newRecent_1 = {
				...storedSearch,
				recentSearches: [...storedSearch.recentSearches.slice(0, index), ...storedSearch.recentSearches.slice(index + 1)]
			};
			return setStoredSearch(newRecent_1), getRecentSearchTerms({
				fieldDefinitions,
				filterDefinitions,
				operatorDefinitions,
				schema,
				storedSearch: newRecent_1,
				setStoredSearch
			});
		}
	}, $[11] = fieldDefinitions, $[12] = filterDefinitions, $[13] = operatorDefinitions, $[14] = schema, $[15] = setStoredSearch, $[16] = storedSearch, $[17] = t5) : t5 = $[17], t5;
}
function _temp2$1(s) {
	return s.name;
}
function _temp$3(filter) {
	return {
		fieldId: filter.fieldId,
		filterName: filter.filterName,
		operatorType: filter.operatorType,
		value: filter.value
	};
}
/**
* Get a list of recent searches from Local Storage.
* Recent searches contain full document schema types.
*/
function getRecentSearchTerms({ schema, fieldDefinitions, filterDefinitions, operatorDefinitions, storedSearch, setStoredSearch }) {
	return sanitizeStoredSearch({
		studioSchema: schema,
		filterDefinitions,
		fieldDefinitions,
		operatorDefinitions,
		storedSearch,
		setStoredSearch
	}).recentSearches.filter((r) => !!r.terms).map((r, index) => ({
		__recent: {
			index,
			timestamp: new Date(r.created).getTime()
		},
		filters: r.filters,
		query: r.terms.query,
		types: r.terms.typeNames.map((typeName) => schema.get(typeName)).filter((s) => !!(s && s.jsonType === "object"))
	}));
}
/**
* Sanitize stored search.
*
* Ignore searches containing:
* - Any number of invalid document schema types
* - Document types hidden from omnisearch with __experimental_omnisearch_visibility
* - Invalid filters
*
* This mutates Local Storage if any invalid terms are found.
*/
function sanitizeStoredSearch({ fieldDefinitions, filterDefinitions, operatorDefinitions, studioSchema, storedSearch, setStoredSearch }) {
	let searchableTypeNames = getSearchableOmnisearchTypes(studioSchema).map((schema) => schema.name), newStoredSearch = {
		version: 3,
		recentSearches: storedSearch.recentSearches.filter((recentSearch) => recentSearch.terms.typeNames.every((typeName) => searchableTypeNames.includes(typeName)) && recentSearch.filters.every((filter) => validateFilter({
			fieldDefinitions,
			filter,
			filterDefinitions,
			operatorDefinitions
		})))
	};
	return newStoredSearch.recentSearches.length < storedSearch.recentSearches.length && setStoredSearch(newStoredSearch), newStoredSearch;
}
function PaddedControlsIcon() {
	let $ = (0, import_compiler_runtime.c)(1), t0;
	return $[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlsIcon, { style: { padding: "0 0.25rem" } }), $[0] = t0) : t0 = $[0], t0;
}
function Instructions() {
	let $ = (0, import_compiler_runtime.c)(3), { t } = useTranslation$1(), t0;
	$[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = { ControlsIcon: PaddedControlsIcon }, $[0] = t0) : t0 = $[0];
	let t1;
	return $[1] === t ? t1 = $[2] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
		alignItems: "center",
		flexDirection: "column",
		gap: 4,
		paddingX: 4,
		paddingY: 5,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inline, {
			gap: 3,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				muted: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Translate, {
					t,
					i18nKey: "search.instructions",
					components: t0
				})
			})
		})
	}), $[1] = t, $[2] = t1), t1;
}
var RecentSearchClicked = defineEvent({
	name: "Recent Search Viewed",
	version: 1,
	description: "User clicked on a recent search item to reapply it"
});
var GlobalSearchLatencyMeasured = defineEvent({
	name: "Global Search Latency Measured",
	version: 1,
	description: "Time from a global navbar search being dispatched (post-debounce) to its results arriving or failing.",
	maxSampleRate: 3e4
});
function DocumentTypesPill(t0) {
	let $ = (0, import_compiler_runtime.c)(6), { availableCharacters, types } = t0, { t } = useTranslation$1(), t1;
	$[0] !== availableCharacters || $[1] !== t || $[2] !== types ? (t1 = documentTypesTruncated({
		availableCharacters,
		types,
		t
	}), $[0] = availableCharacters, $[1] = t, $[2] = types, $[3] = t1) : t1 = $[3];
	let title = t1, t2;
	return $[4] === title ? t2 = $[5] : (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		border: !0,
		padding: 2,
		radius: 2,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			muted: !0,
			size: 1,
			children: title
		})
	}), $[4] = title, $[5] = t2), t2;
}
var FilterPillCard = gt(Card).withConfig({
	displayName: "FilterPillCard",
	componentId: "sc-aszysm-0"
})`cursor:default;`;
function FilterPill(t0) {
	let $ = (0, import_compiler_runtime.c)(2), { filter } = t0, t1;
	return $[0] === filter ? t1 = $[1] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPillCard, {
		border: !0,
		padding: 2,
		radius: 2,
		tone: "primary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterLabel, { filter })
	}), $[0] = filter, $[1] = t1), t1;
}
var RecentSearchItemButton = gt(Button).withConfig({
	displayName: "RecentSearchItemButton",
	componentId: "sc-7kcr6f-0"
})`border-radius:${({ theme }) => rem(theme.sanity.radius[2])};cursor:default;width:100%;`;
var SearchItemPillsBox = gt(Box).withConfig({
	displayName: "SearchItemPillsBox",
	componentId: "sc-7kcr6f-1"
})`flex-shrink:3;`;
var SearchItemQueryFlex = gt(Flex).withConfig({
	displayName: "SearchItemQueryFlex",
	componentId: "sc-7kcr6f-2"
})`flex-shrink:2;`;
var CloseButtonDiv = gt.div.withConfig({
	displayName: "CloseButtonDiv",
	componentId: "sc-7kcr6f-3"
})`opacity:0.8;visibility:hidden;@media (hover:hover){${RecentSearchItemButton}:hover &{visibility:visible;}&:hover{opacity:0.4;}}`;
function RecentSearchItem(t0) {
	let $ = (0, import_compiler_runtime.c)(37), index, rest, t1, value;
	$[0] === t0 ? (index = $[1], rest = $[2], t1 = $[3], value = $[4]) : ({index, maxVisibleTypePillChars: t1, value, ...rest} = t0, $[0] = t0, $[1] = index, $[2] = rest, $[3] = t1, $[4] = value);
	let maxVisibleTypePillChars = t1 === void 0 ? 40 : t1, { dispatch } = useSearchState(), recentSearchesStore = useRecentSearchesStore(), telemetry = useTelemetry(), availableCharacters = maxVisibleTypePillChars - value.query.length, t2;
	$[5] !== dispatch || $[6] !== recentSearchesStore || $[7] !== telemetry || $[8] !== value ? (t2 = () => {
		dispatch({
			type: "TERMS_SET",
			filters: value?.filters,
			terms: value
		}), recentSearchesStore && recentSearchesStore?.addSearch(value, value?.filters), telemetry.log(RecentSearchClicked);
	}, $[5] = dispatch, $[6] = recentSearchesStore, $[7] = telemetry, $[8] = value, $[9] = t2) : t2 = $[9];
	let handleClick = t2, t3;
	$[10] !== index || $[11] !== recentSearchesStore ? (t3 = (event) => {
		event.stopPropagation(), recentSearchesStore && recentSearchesStore?.removeSearchAtIndex(index);
	}, $[10] = index, $[11] = recentSearchesStore, $[12] = t3) : t3 = $[12];
	let handleDelete = t3, t4;
	$[13] === Symbol.for("react.memo_cache_sentinel") ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Inline, {
		paddingY: 2,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			muted: !0,
			size: 1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClockIcon, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "​" })]
	}), $[13] = t4) : t4 = $[13];
	let t5;
	$[14] === value.query ? t5 = $[15] : (t5 = value.query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchItemQueryFlex, {
		alignItems: "center",
		paddingY: 2,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			muted: !0,
			size: 1,
			textOverflow: "ellipsis",
			weight: "medium",
			children: value.query
		})
	}), $[14] = value.query, $[15] = t5);
	let t6;
	$[16] !== availableCharacters || $[17] !== value.types ? (t6 = value.types.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchItemPillsBox, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentTypesPill, {
		availableCharacters,
		types: value.types
	}) }), $[16] = availableCharacters, $[17] = value.types, $[18] = t6) : t6 = $[18];
	let t7;
	$[19] === value.filters ? t7 = $[20] : (t7 = value?.filters?.map(_temp$2), $[19] = value.filters, $[20] = t7);
	let t8;
	$[21] !== t5 || $[22] !== t6 || $[23] !== t7 ? (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
		alignItems: "stretch",
		flexBasis: "0%",
		flexGrow: 1,
		gap: 2,
		justifyContent: "flex-start",
		marginLeft: 3,
		flexWrap: "wrap",
		children: [
			t5,
			t6,
			t7
		]
	}), $[21] = t5, $[22] = t6, $[23] = t7, $[24] = t8) : t8 = $[24];
	let t9;
	$[25] === Symbol.for("react.memo_cache_sentinel") ? (t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
		padding: 2,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			size: 1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseIcon, {})
		})
	}), $[25] = t9) : t9 = $[25];
	let t10;
	$[26] === handleDelete ? t10 = $[27] : (t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
		alignItems: "center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseButtonDiv, {
			onClick: handleDelete,
			children: t9
		})
	}), $[26] = handleDelete, $[27] = t10);
	let t11;
	$[28] !== t10 || $[29] !== t8 ? (t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
		alignItems: "stretch",
		children: [
			t4,
			t8,
			t10
		]
	}), $[28] = t10, $[29] = t8, $[30] = t11) : t11 = $[30];
	let t12;
	$[31] !== handleClick || $[32] !== t11 ? (t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentSearchItemButton, {
		mode: "bleed",
		onClick: handleClick,
		paddingLeft: 3,
		paddingRight: 1,
		paddingY: 1,
		tabIndex: -1,
		children: t11
	}), $[31] = handleClick, $[32] = t11, $[33] = t12) : t12 = $[33];
	let t13;
	return $[34] !== rest || $[35] !== t12 ? (t13 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		...rest,
		children: t12
	}), $[34] = rest, $[35] = t12, $[36] = t13) : t13 = $[36], t13;
}
function _temp$2(filter, i) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPill, { filter }, i);
}
var RecentSearchesBox = gt(Card).withConfig({
	displayName: "RecentSearchesBox",
	componentId: "sc-4ex4ge-0"
})`overflow-x:hidden;overflow-y:auto;position:relative;`;
function RecentSearches(t0) {
	let $ = (0, import_compiler_runtime.c)(17), { inputElement } = t0, { state: t1 } = useSearchState(), { filtersVisible, fullscreen } = t1, recentSearchesStore = useRecentSearchesStore(), t2;
	$[0] === recentSearchesStore ? t2 = $[1] : (t2 = recentSearchesStore?.getRecentSearches(), $[0] = recentSearchesStore, $[1] = t2);
	let recentSearches = t2, commandListRef = (0, import_react.useRef)(null), { t } = useTranslation$1(), t3;
	$[2] === recentSearchesStore ? t3 = $[3] : (t3 = () => {
		recentSearchesStore && recentSearchesStore.removeSearch(), commandListRef?.current?.focusInputElement();
	}, $[2] = recentSearchesStore, $[3] = t3);
	let handleClearRecentSearchesClick = t3, maxVisibleTypePillChars = useMediaIndex() < 2 ? 20 : 40, t4;
	$[4] === maxVisibleTypePillChars ? t4 = $[5] : (t4 = (item, t5) => {
		let { virtualIndex } = t5;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentSearchItem, {
			index: virtualIndex,
			maxVisibleTypePillChars,
			paddingBottom: 1,
			value: item
		});
	}, $[4] = maxVisibleTypePillChars, $[5] = t4);
	let renderItem = t4, hasRecentSearches = !!recentSearches.length, t5 = hasRecentSearches || !hasRecentSearches && !filtersVisible && fullscreen, t6;
	$[6] !== filtersVisible || $[7] !== fullscreen || $[8] !== handleClearRecentSearchesClick || $[9] !== inputElement || $[10] !== recentSearches || $[11] !== renderItem || $[12] !== t ? (t6 = recentSearches.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
			paddingBottom: 2,
			paddingTop: 4,
			paddingX: 3,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				muted: !0,
				size: 1,
				weight: "medium",
				children: t("search.recent-searches-label")
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandList, {
			activeItemDataAttr: "data-hovered",
			ariaLabel: t("search.recent-searches-aria-label"),
			inputElement,
			initialIndex: 0,
			itemHeight: 36,
			items: recentSearches,
			paddingX: 2,
			paddingY: 1,
			renderItem
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
			paddingBottom: 2,
			paddingTop: 1,
			paddingX: 2,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				mode: "bleed",
				onClick: handleClearRecentSearchesClick,
				tone: "default",
				text: t("search.action.clear-recent-searches"),
				muted: !0
			})
		})
	] }) : !filtersVisible && fullscreen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instructions, {}), $[6] = filtersVisible, $[7] = fullscreen, $[8] = handleClearRecentSearchesClick, $[9] = inputElement, $[10] = recentSearches, $[11] = renderItem, $[12] = t, $[13] = t6) : t6 = $[13];
	let t7;
	return $[14] !== t5 || $[15] !== t6 ? (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentSearchesBox, {
		borderTop: t5,
		flex: 1,
		children: t6
	}), $[14] = t5, $[15] = t6, $[16] = t7) : t7 = $[16], t7;
}
function NoResults() {
	let $ = (0, import_compiler_runtime.c)(11), { t } = useTranslation$1(), t0;
	$[0] === t ? t0 = $[1] : (t0 = t("search.no-results-title"), $[0] = t, $[1] = t0);
	let t1;
	$[2] === t0 ? t1 = $[3] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
		align: "center",
		muted: !0,
		size: 1,
		weight: "medium",
		children: t0
	}), $[2] = t0, $[3] = t1);
	let t2;
	$[4] === t ? t2 = $[5] : (t2 = t("search.no-results-help-description"), $[4] = t, $[5] = t2);
	let t3;
	$[6] === t2 ? t3 = $[7] : (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
		align: "center",
		muted: !0,
		size: 1,
		children: t2
	}), $[6] = t2, $[7] = t3);
	let t4;
	return $[8] !== t1 || $[9] !== t3 ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		width: 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
			"aria-live": "assertive",
			gap: 4,
			paddingX: 4,
			paddingY: 5,
			children: [t1, t3]
		})
	}), $[8] = t1, $[9] = t3, $[10] = t4) : t4 = $[10], t4;
}
function SearchError() {
	let $ = (0, import_compiler_runtime.c)(12), { t } = useTranslation$1(), t0;
	$[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		marginBottom: 1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextWithTone, {
			tone: "critical",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WarningOutlineIcon, {})
		})
	}), $[0] = t0) : t0 = $[0];
	let t1;
	$[1] === t ? t1 = $[2] : (t1 = t("search.error.unspecified-error-title"), $[1] = t, $[2] = t1);
	let t2;
	$[3] === t1 ? t2 = $[4] : (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextWithTone, {
		size: 2,
		tone: "critical",
		weight: "medium",
		children: t1
	}), $[3] = t1, $[4] = t2);
	let t3;
	$[5] === t ? t3 = $[6] : (t3 = t("search.error.unspecified-error-help-description"), $[5] = t, $[6] = t3);
	let t4;
	$[7] === t3 ? t4 = $[8] : (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextWithTone, {
		size: 1,
		tone: "critical",
		children: t3
	}), $[7] = t3, $[8] = t4);
	let t5;
	return $[9] !== t2 || $[10] !== t4 ? (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
		alignItems: "center",
		"aria-live": "assertive",
		flexDirection: "column",
		flexBasis: "0%",
		flexGrow: 1,
		gap: 3,
		marginY: 2,
		padding: 4,
		children: [
			t0,
			t2,
			t4
		]
	}), $[9] = t2, $[10] = t4, $[11] = t5) : t5 = $[11], t5;
}
var getOrderings = ({ searchStrategy }) => ({
	createdAsc: {
		ignoreScore: !0,
		sort: {
			direction: "asc",
			field: "_createdAt"
		},
		titleKey: "search.ordering.created-ascending-label"
	},
	createdDesc: {
		ignoreScore: !0,
		sort: {
			direction: "desc",
			field: "_createdAt"
		},
		titleKey: "search.ordering.created-descending-label"
	},
	relevance: {
		customMeasurementLabel: "relevance",
		...searchStrategy === "groqLegacy" ? { sort: {
			direction: "desc",
			field: "_updatedAt"
		} } : {},
		titleKey: "search.ordering.best-match-label"
	},
	updatedAsc: {
		ignoreScore: !0,
		sort: {
			direction: "asc",
			field: "_updatedAt"
		},
		titleKey: "search.ordering.updated-ascending-label"
	},
	updatedDesc: {
		ignoreScore: !0,
		sort: {
			direction: "desc",
			field: "_updatedAt"
		},
		titleKey: "search.ordering.updated-descending-label"
	}
});
var SortMenuContentFlex = gt(Flex).withConfig({
	displayName: "SortMenuContentFlex",
	componentId: "sc-9cdluj-0"
})`box-sizing:border-box;`;
function isSearchDivider(item) {
	return item.type === "divider";
}
function CustomMenuItem(t0) {
	let $ = (0, import_compiler_runtime.c)(13), { ordering } = t0, { t } = useTranslation$1(), { dispatch, state: t1 } = useSearchState(), { ordering: currentOrdering } = t1, t2;
	$[0] !== dispatch || $[1] !== ordering ? (t2 = () => {
		dispatch({
			ordering,
			type: "ORDERING_SET"
		});
	}, $[0] = dispatch, $[1] = ordering, $[2] = t2) : t2 = $[2];
	let handleClick = t2, t3;
	$[3] !== currentOrdering || $[4] !== ordering ? (t3 = dequal(currentOrdering, ordering), $[3] = currentOrdering, $[4] = ordering, $[5] = t3) : t3 = $[5];
	let isSelected = t3, t4;
	$[6] !== ordering.titleKey || $[7] !== t ? (t4 = t(ordering.titleKey), $[6] = ordering.titleKey, $[7] = t, $[8] = t4) : t4 = $[8];
	let t5;
	return $[9] !== handleClick || $[10] !== isSelected || $[11] !== t4 ? (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem$1, {
		onClick: handleClick,
		pressed: isSelected,
		tone: "default",
		text: t4
	}), $[9] = handleClick, $[10] = isSelected, $[11] = t4, $[12] = t5) : t5 = $[12], t5;
}
function SortMenu() {
	let $ = (0, import_compiler_runtime.c)(50), { t } = useTranslation$1(), { strategy: searchStrategy } = useWorkspace().search, { state: t0 } = useSearchState(), { ordering } = t0, menuButtonId = (0, import_react.useId)(), t1;
	$[0] === searchStrategy ? t1 = $[1] : (t1 = getOrderings({ searchStrategy }), $[0] = searchStrategy, $[1] = t1);
	let orderings = t1, t2;
	$[2] === Symbol.for("react.memo_cache_sentinel") ? (t2 = { type: "divider" }, $[2] = t2) : t2 = $[2];
	let t3;
	$[3] === Symbol.for("react.memo_cache_sentinel") ? (t3 = { type: "divider" }, $[3] = t3) : t3 = $[3];
	let t4;
	$[4] !== orderings.createdAsc || $[5] !== orderings.createdDesc || $[6] !== orderings.relevance || $[7] !== orderings.updatedAsc || $[8] !== orderings.updatedDesc ? (t4 = [
		orderings.relevance,
		t2,
		orderings.createdAsc,
		orderings.createdDesc,
		t3,
		orderings.updatedAsc,
		orderings.updatedDesc
	], $[4] = orderings.createdAsc, $[5] = orderings.createdDesc, $[6] = orderings.relevance, $[7] = orderings.updatedAsc, $[8] = orderings.updatedDesc, $[9] = t4) : t4 = $[9];
	let menuOrderings = t4, T0, T1, T2, T3, t10, t11, t12, t13, t5, t6, t7, t8, t9;
	if ($[10] !== menuOrderings || $[11] !== ordering || $[12] !== t) {
		t13 = Symbol.for("react.early_return_sentinel");
		bb0: {
			let currentMenuItem = menuOrderings.find((item) => dequal(ordering, item) && !isSearchDivider(item));
			if (!currentMenuItem) {
				t13 = null;
				break bb0;
			}
			T3 = Card, t12 = !0, T2 = SortMenuContentFlex, t8 = "center", t9 = "0%", t10 = 1, t11 = 2, T1 = MenuButton$1, T0 = Button$1, t5 = "bleed", t6 = SortIcon, t7 = t(currentMenuItem.titleKey);
		}
		$[10] = menuOrderings, $[11] = ordering, $[12] = t, $[13] = T0, $[14] = T1, $[15] = T2, $[16] = T3, $[17] = t10, $[18] = t11, $[19] = t12, $[20] = t13, $[21] = t5, $[22] = t6, $[23] = t7, $[24] = t8, $[25] = t9;
	} else T0 = $[13], T1 = $[14], T2 = $[15], T3 = $[16], t10 = $[17], t11 = $[18], t12 = $[19], t13 = $[20], t5 = $[21], t6 = $[22], t7 = $[23], t8 = $[24], t9 = $[25];
	if (t13 !== Symbol.for("react.early_return_sentinel")) return t13;
	let t14;
	$[26] !== T0 || $[27] !== t5 || $[28] !== t6 || $[29] !== t7 ? (t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T0, {
		mode: t5,
		icon: t6,
		text: t7
	}), $[26] = T0, $[27] = t5, $[28] = t6, $[29] = t7, $[30] = t14) : t14 = $[30];
	let t15 = menuButtonId || "", t16;
	$[31] === menuOrderings ? t16 = $[32] : (t16 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { children: menuOrderings.map(_temp$1) }), $[31] = menuOrderings, $[32] = t16);
	let t17;
	$[33] === Symbol.for("react.memo_cache_sentinel") ? (t17 = {
		placement: "bottom-start",
		portal: !0,
		radius: 2
	}, $[33] = t17) : t17 = $[33];
	let t18;
	$[34] !== T1 || $[35] !== t14 || $[36] !== t15 || $[37] !== t16 ? (t18 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T1, {
		button: t14,
		id: t15,
		menu: t16,
		popover: t17
	}), $[34] = T1, $[35] = t14, $[36] = t15, $[37] = t16, $[38] = t18) : t18 = $[38];
	let t19;
	$[39] !== T2 || $[40] !== t10 || $[41] !== t11 || $[42] !== t18 || $[43] !== t8 || $[44] !== t9 ? (t19 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T2, {
		alignItems: t8,
		flexBasis: t9,
		flexGrow: t10,
		padding: t11,
		children: t18
	}), $[39] = T2, $[40] = t10, $[41] = t11, $[42] = t18, $[43] = t8, $[44] = t9, $[45] = t19) : t19 = $[45];
	let t20;
	return $[46] !== T3 || $[47] !== t12 || $[48] !== t19 ? (t20 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T3, {
		borderBottom: t12,
		children: t19
	}), $[46] = T3, $[47] = t12, $[48] = t19, $[49] = t20) : t20 = $[49], t20;
}
function _temp$1(item_0, index) {
	return isSearchDivider(item_0) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuDivider, {}, index) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomMenuItem, { ordering: item_0 }, index);
}
var DebugScoreCard = gt(Card).withConfig({
	displayName: "DebugScoreCard",
	componentId: "sc-1w8b29-0"
})`cursor:help;left:0;position:absolute;top:0;`;
function DebugOverlay(t0) {
	let $ = (0, import_compiler_runtime.c)(18), { data } = t0, { score } = data, tone = "default";
	score <= .1 ? tone = "critical" : score >= .5 && (tone = "primary");
	let T0, T1, t1, t2;
	if ($[0] !== data.stories) {
		let matchingStories = data.stories.filter(_temp);
		T1 = Tooltip$1, T0 = Stack, t1 = 2, t2 = matchingStories.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: matchingStories.map(_temp2) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
			size: 0,
			children: "No matches"
		}), $[0] = data.stories, $[1] = T0, $[2] = T1, $[3] = t1, $[4] = t2;
	} else T0 = $[1], T1 = $[2], t1 = $[3], t2 = $[4];
	let t3;
	$[5] !== T0 || $[6] !== t1 || $[7] !== t2 ? (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T0, {
		gap: t1,
		children: t2
	}), $[5] = T0, $[6] = t1, $[7] = t2, $[8] = t3) : t3 = $[8];
	let t4;
	$[9] === score ? t4 = $[10] : (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Code, {
		size: 0,
		children: ["score: ", score]
	}), $[9] = score, $[10] = t4);
	let t5;
	$[11] !== t4 || $[12] !== tone ? (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DebugScoreCard, {
		padding: 1,
		shadow: 1,
		tone,
		children: t4
	}), $[11] = t4, $[12] = tone, $[13] = t5) : t5 = $[13];
	let t6;
	return $[14] !== T1 || $[15] !== t3 || $[16] !== t5 ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T1, {
		content: t3,
		placement: "bottom-start",
		portal: !0,
		children: t5
	}) }), $[14] = T1, $[15] = t3, $[16] = t5, $[17] = t6) : t6 = $[17], t6;
}
function _temp2(story_0) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Inline, {
		gap: 3,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
			size: 0,
			weight: "medium",
			children: story_0.path
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
			size: 0,
			children: story_0.why
		})]
	}, story_0.path);
}
function _temp(story) {
	return story.score > 0;
}
var SearchResultsInnerFlex = gt(Flex).withConfig({
	displayName: "SearchResultsInnerFlex",
	componentId: "sc-nkzb46-0"
})`opacity:${({ $loadingFirstPage }) => $loadingFirstPage ? .5 : 1};overflow-x:hidden;overflow-y:auto;position:relative;transition:300ms opacity;width:100%;`;
function SearchResults(t0) {
	let $ = (0, import_compiler_runtime.c)(37), { disableIntentLink, inputElement, onItemSelect, previewPerspective, previewVariant } = t0, { dispatch, onClose, setSearchCommandList, state: t1 } = useSearchState(), { debug, filters, fullscreen, lastActiveIndex, result, terms, cursor } = t1, { t } = useTranslation$1(), recentSearchesStore = useRecentSearchesStore(), deferredHits = (0, import_react.useDeferredValue)(result.hits), isPending = deferredHits !== result.hits, hasSearchResults = deferredHits.length > 0 && result.hits.length > 0, hasNoSearchResults = result.hits.length === 0 && result.loaded, hasError = result.error, t2;
	$[0] !== filters || $[1] !== onClose || $[2] !== recentSearchesStore || $[3] !== terms ? (t2 = (e) => {
		recentSearchesStore && recentSearchesStore.addSearch(terms, filters), !e.metaKey && !e.ctrlKey && onClose?.();
	}, $[0] = filters, $[1] = onClose, $[2] = recentSearchesStore, $[3] = terms, $[4] = t2) : t2 = $[4];
	let handleSearchResultClick = t2, t3;
	$[5] === dispatch ? t3 = $[6] : (t3 = () => {
		dispatch({ type: "PAGE_INCREMENT" });
	}, $[5] = dispatch, $[6] = t3);
	let handleEndReached = t3, t4;
	$[7] !== debug || $[8] !== disableIntentLink || $[9] !== handleSearchResultClick || $[10] !== onItemSelect || $[11] !== previewPerspective || $[12] !== previewVariant ? (t4 = (item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchResultItem, {
		disableIntentLink,
		documentId: item.hit._id || "",
		documentType: item.hit._type,
		onClick: handleSearchResultClick,
		onItemSelect,
		previewPerspective,
		previewVariant,
		paddingY: 1
	}), debug && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DebugOverlay, { data: item })] }), $[7] = debug, $[8] = disableIntentLink, $[9] = handleSearchResultClick, $[10] = onItemSelect, $[11] = previewPerspective, $[12] = previewVariant, $[13] = t4) : t4 = $[13];
	let renderItem = t4, t5 = fullscreen || !!(hasError || hasSearchResults || hasNoSearchResults), t6;
	$[14] === hasSearchResults ? t6 = $[15] : (t6 = hasSearchResults && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortMenu, {}), $[14] = hasSearchResults, $[15] = t6);
	let t7 = result.loading && cursor === null, t8 = result.loading || isPending, t9;
	$[16] !== deferredHits || $[17] !== handleEndReached || $[18] !== hasError || $[19] !== hasNoSearchResults || $[20] !== hasSearchResults || $[21] !== inputElement || $[22] !== lastActiveIndex || $[23] !== renderItem || $[24] !== setSearchCommandList || $[25] !== t ? (t9 = hasError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchError, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [hasSearchResults && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandList, {
		activeItemDataAttr: "data-hovered",
		ariaLabel: t("search.search-results-label"),
		"data-testid": "search-results",
		fixedHeight: !0,
		initialIndex: lastActiveIndex,
		inputElement,
		itemHeight: 57,
		items: deferredHits,
		overscan: 4,
		onEndReached: handleEndReached,
		paddingX: 2,
		paddingY: 1,
		ref: setSearchCommandList,
		renderItem
	}), hasNoSearchResults && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoResults, {})] }), $[16] = deferredHits, $[17] = handleEndReached, $[18] = hasError, $[19] = hasNoSearchResults, $[20] = hasSearchResults, $[21] = inputElement, $[22] = lastActiveIndex, $[23] = renderItem, $[24] = setSearchCommandList, $[25] = t, $[26] = t9) : t9 = $[26];
	let t10;
	$[27] !== t7 || $[28] !== t8 || $[29] !== t9 ? (t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchResultsInnerFlex, {
		$loadingFirstPage: t7,
		"aria-busy": t8,
		flexBasis: "0%",
		flexGrow: 1,
		children: t9
	}), $[27] = t7, $[28] = t8, $[29] = t9, $[30] = t10) : t10 = $[30];
	let t11;
	$[31] !== t10 || $[32] !== t6 ? (t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
		flexDirection: "column",
		height: "100%",
		children: [t6, t10]
	}), $[31] = t10, $[32] = t6, $[33] = t11) : t11 = $[33];
	let t12;
	return $[34] !== t11 || $[35] !== t5 ? (t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		borderTop: t5,
		flex: 1,
		children: t11
	}) }), $[34] = t11, $[35] = t5, $[36] = t12) : t12 = $[36], t12;
}
var ANIMATION_TRANSITION = {
	duration: .4,
	type: "spring"
};
var CARD_VARIANTS = {
	open: {
		opacity: 1,
		scale: 1,
		x: "-50%"
	},
	closed: {
		opacity: 0,
		scale: .99,
		x: "-50%"
	}
};
var OVERLAY_VARIANTS = {
	open: { opacity: 1 },
	closed: { opacity: 0 }
};
var MotionOverlay = gt(motion.create(Card)).withConfig({
	displayName: "MotionOverlay",
	componentId: "sc-vb8t0f-0"
})`background-color:var(--card-backdrop-color);bottom:0;left:0;position:absolute;right:0;top:0;`;
var SearchMotionCard = gt(motion.create(Card)).withConfig({
	displayName: "SearchMotionCard",
	componentId: "sc-vb8t0f-1"
})`display:flex !important;flex-direction:column;left:50%;max-height:min( calc(100vh - ${12}vh - ${POPOVER_INPUT_PADDING}px),${735}px );position:absolute;top:${12}vh;width:min(calc(100vw - ${POPOVER_INPUT_PADDING * 2}px),${800}px);`;
/**
* @internal
*/
function SearchPopover(t0) {
	let $ = (0, import_compiler_runtime.c)(23), { disableFocusLock, disableIntentLink, onClose, onItemSelect, onOpen, previewPerspective, previewVariant, open } = t0, [inputElement, setInputElement] = (0, import_react.useState)(null), popoverElement = (0, import_react.useRef)(null), { isTopLayer, zIndex } = useLayer(), { onClose: onSearchClose, state: t1 } = useSearchState(), { filtersVisible, terms } = t1, t2;
	$[0] === terms ? t2 = $[1] : (t2 = hasSearchableTerms({ terms }), $[0] = terms, $[1] = t2);
	let hasValidTerms = t2, t3;
	$[2] === Symbol.for("react.memo_cache_sentinel") ? (t3 = () => [popoverElement.current], $[2] = t3) : t3 = $[2], useClickOutsideEvent(isTopLayer && open && !!onSearchClose && onSearchClose, t3);
	let t4;
	$[3] !== disableFocusLock || $[4] !== disableIntentLink || $[5] !== filtersVisible || $[6] !== hasValidTerms || $[7] !== inputElement || $[8] !== onClose || $[9] !== onItemSelect || $[10] !== open || $[11] !== previewPerspective || $[12] !== previewVariant || $[13] !== zIndex ? (t4 = open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(es2015_default, {
		autoFocus: !supportsTouch,
		disabled: disableFocusLock,
		returnFocus: !0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionOverlay, {
			animate: "open",
			exit: "closed",
			initial: "closed",
			style: { zIndex },
			transition: ANIMATION_TRANSITION,
			variants: OVERLAY_VARIANTS
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SearchMotionCard, {
			animate: "open",
			exit: "closed",
			initial: "closed",
			overflow: "hidden",
			radius: 3,
			ref: popoverElement,
			shadow: 2,
			style: { zIndex },
			transition: ANIMATION_TRANSITION,
			variants: CARD_VARIANTS,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchHeader, {
					onClose,
					ref: setInputElement
				}),
				filtersVisible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					borderTop: !0,
					flex: "none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filters, {})
				}),
				hasValidTerms ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchResults, {
					inputElement,
					onItemSelect,
					disableIntentLink,
					previewPerspective,
					previewVariant
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentSearches, { inputElement })
			]
		})]
	}) }), $[3] = disableFocusLock, $[4] = disableIntentLink, $[5] = filtersVisible, $[6] = hasValidTerms, $[7] = inputElement, $[8] = onClose, $[9] = onItemSelect, $[10] = open, $[11] = previewPerspective, $[12] = previewVariant, $[13] = zIndex, $[14] = t4) : t4 = $[14];
	let t5;
	$[15] === t4 ? t5 = $[16] : (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: t4 }), $[15] = t4, $[16] = t5);
	let t6;
	return $[17] !== hasValidTerms || $[18] !== onClose || $[19] !== onOpen || $[20] !== open || $[21] !== t5 ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchWrapper, {
		hasValidTerms,
		onClose,
		onOpen,
		open,
		children: t5
	}), $[17] = hasValidTerms, $[18] = onClose, $[19] = onOpen, $[20] = open, $[21] = t5, $[22] = t6) : t6 = $[22], t6;
}
function isRecentSearchTerms(terms) {
	return terms.__recent !== void 0;
}
var rootName = "core:studio:navbar:search:";
function debugWithName(name) {
	let namespace = `${rootName}${name}`;
	return enabled(namespace) ? createDebug(namespace) : createDebug(rootName);
}
function isDebugMode() {
	return typeof window > "u" ? !1 : window.location.hash.slice(1).split(";").includes("_debug_search_score");
}
function initialSearchState({ currentUser, fullscreen, definitions, pagination, strategy }) {
	return {
		currentUser,
		debug: isDebugMode(),
		documentTypesNarrowed: [],
		filters: [],
		filtersVisible: !0,
		fullscreen,
		lastActiveIndex: -1,
		ordering: getOrderings({ searchStrategy: strategy }).relevance,
		...pagination,
		result: {
			error: null,
			hasLocal: !1,
			hits: [],
			loaded: !1,
			loading: !1
		},
		terms: {
			query: "",
			types: []
		},
		definitions,
		strategy
	};
}
var debug = debugWithName("reducer");
function searchReducer(state, action) {
	let prefix = "🔍";
	switch (action.type.startsWith("SEARCH_REQUEST") && (prefix = "🚨"), action.type.startsWith("RECENT_SEARCHES") && (prefix = "💾"), debug(prefix, action), action.type) {
		case "FILTERS_VISIBLE_SET": return {
			...state,
			filtersVisible: action.visible
		};
		case "LAST_ACTIVE_INDEX_SET": return {
			...state,
			lastActiveIndex: action.index
		};
		case "ORDERING_RESET": return {
			...state,
			ordering: getOrderings({ searchStrategy: state.strategy }).relevance,
			terms: stripRecent(state.terms),
			cursor: null,
			nextCursor: null,
			result: {
				...state.result,
				hasLocal: !1
			}
		};
		case "ORDERING_SET": return {
			...state,
			ordering: action.ordering,
			terms: stripRecent(state.terms),
			cursor: null,
			nextCursor: null,
			result: {
				...state.result,
				hasLocal: !1
			}
		};
		case "PAGE_INCREMENT": return {
			...state,
			cursor: state.nextCursor ?? state.cursor,
			nextCursor: null,
			terms: stripRecent(state.terms)
		};
		case "SEARCH_CLEAR": return {
			...state,
			cursor: null,
			nextCursor: null,
			result: {
				...state.result,
				hasLocal: !1,
				hits: []
			}
		};
		case "SEARCH_REQUEST_COMPLETE": return {
			...state,
			nextCursor: action.nextCursor ?? null,
			result: {
				...state.result,
				error: null,
				hasLocal: !0,
				hits: removeDupes([...state.result.hasLocal ? state.result.hits : [], ...action.hits].map(({ hit }) => hit)).map((hit) => ({ hit })),
				loaded: !0,
				loading: !1
			}
		};
		case "SEARCH_REQUEST_ERROR": return {
			...state,
			result: {
				...state.result,
				error: action.error,
				loaded: !1,
				loading: !1
			}
		};
		case "SEARCH_REQUEST_START": return {
			...state,
			result: {
				...state.result,
				loaded: !1,
				loading: !0
			}
		};
		case "TERMS_FILTERS_ADD": {
			let newFilter = {
				...action.filter,
				value: getOperatorInitialValue(state.definitions.operators, action.filter.operatorType)
			}, filters = [...state.filters, newFilter];
			return {
				...state,
				documentTypesNarrowed: narrowDocumentTypes({
					fieldDefinitions: state.definitions.fields,
					filters,
					types: state.terms.types
				}),
				filters,
				lastAddedFilter: newFilter,
				cursor: null,
				nextCursor: null,
				terms: {
					...state.terms,
					filter: generateFilterQuery({
						fieldDefinitions: state.definitions.fields,
						filterDefinitions: state.definitions.filters,
						filters,
						operatorDefinitions: state.definitions.operators
					})
				},
				result: {
					...state.result,
					hasLocal: !1
				}
			};
		}
		case "TERMS_FILTERS_CLEAR": {
			let filters = [];
			return {
				...state,
				documentTypesNarrowed: narrowDocumentTypes({
					fieldDefinitions: state.definitions.fields,
					filters,
					types: state.terms.types
				}),
				filters,
				cursor: null,
				nextCursor: null,
				terms: {
					...state.terms,
					filter: generateFilterQuery({
						fieldDefinitions: state.definitions.fields,
						filterDefinitions: state.definitions.filters,
						filters,
						operatorDefinitions: state.definitions.operators
					})
				},
				result: {
					...state.result,
					hasLocal: !1
				}
			};
		}
		case "TERMS_FILTERS_REMOVE": {
			let index = state.filters.findIndex((filter) => getFilterKey(filter) === action.filterKey), filters = [...state.filters.slice(0, index), ...state.filters.slice(index + 1)];
			return {
				...state,
				documentTypesNarrowed: narrowDocumentTypes({
					fieldDefinitions: state.definitions.fields,
					filters,
					types: state.terms.types
				}),
				filters,
				cursor: null,
				nextCursor: null,
				terms: {
					...state.terms,
					filter: generateFilterQuery({
						fieldDefinitions: state.definitions.fields,
						filterDefinitions: state.definitions.filters,
						filters,
						operatorDefinitions: state.definitions.operators
					})
				},
				result: {
					...state.result,
					hasLocal: !1
				}
			};
		}
		case "TERMS_FILTERS_SET_OPERATOR": {
			let matchedFilter = state.filters.find((filter) => getFilterKey(filter) === action.filterKey), currentOperator = getOperatorDefinition(state.definitions.operators, matchedFilter?.operatorType), nextOperator = getOperatorDefinition(state.definitions.operators, action.operatorType), nextInitialValue = nextOperator?.initialValue, inputComponentChanged = currentOperator?.inputComponent != nextOperator?.inputComponent, filters = state.filters.map((filter) => getFilterKey(filter) === action.filterKey ? {
				...filter,
				operatorType: action.operatorType,
				...inputComponentChanged ? { value: nextInitialValue } : {}
			} : filter);
			return {
				...state,
				filters,
				cursor: null,
				nextCursor: null,
				terms: {
					...state.terms,
					filter: generateFilterQuery({
						fieldDefinitions: state.definitions.fields,
						filterDefinitions: state.definitions.filters,
						filters,
						operatorDefinitions: state.definitions.operators
					})
				},
				result: {
					...state.result,
					hasLocal: !1
				}
			};
		}
		case "TERMS_FILTERS_SET_VALUE": {
			let filters = state.filters.map((filter) => getFilterKey(filter) === action.filterKey ? {
				...filter,
				value: action.value
			} : filter);
			return {
				...state,
				filters,
				cursor: null,
				nextCursor: null,
				terms: {
					...state.terms,
					filter: generateFilterQuery({
						fieldDefinitions: state.definitions.fields,
						filterDefinitions: state.definitions.filters,
						filters,
						operatorDefinitions: state.definitions.operators
					})
				},
				result: {
					...state.result,
					hasLocal: !1
				}
			};
		}
		case "TERMS_QUERY_SET": return {
			...state,
			cursor: null,
			nextCursor: null,
			result: {
				...state.result,
				loaded: !1,
				hasLocal: !1
			},
			terms: stripRecent({
				...state.terms,
				query: action.query
			})
		};
		case "TERMS_SET": {
			let filters = action.filters || [], types = [...state.terms.types || [], ...action.terms.types].sort(sortTypes);
			return {
				...state,
				documentTypesNarrowed: narrowDocumentTypes({
					fieldDefinitions: state.definitions.fields,
					filters,
					types
				}),
				filters,
				lastAddedFilter: null,
				cursor: null,
				nextCursor: null,
				result: {
					...state.result,
					loaded: !1,
					hasLocal: !1
				},
				terms: {
					...action.terms,
					filter: generateFilterQuery({
						fieldDefinitions: state.definitions.fields,
						filterDefinitions: state.definitions.filters,
						filters,
						operatorDefinitions: state.definitions.operators
					})
				}
			};
		}
		case "TERMS_TYPE_ADD": {
			let types = [...state.terms.types || [], action.schemaType].sort(sortTypes), documentTypesNarrowed = narrowDocumentTypes({
				fieldDefinitions: state.definitions.fields,
				filters: [],
				types
			}), filters = state.filters.filter((f) => {
				let fieldDefinition = getFieldFromFilter(state.definitions.fields, f);
				return !fieldDefinition || fieldDefinition.documentTypes.length === 0 || documentTypesNarrowed.every((type) => fieldDefinition.documentTypes.findIndex((t) => t === type) > -1);
			});
			return {
				...state,
				documentTypesNarrowed,
				filters,
				cursor: null,
				nextCursor: null,
				result: {
					...state.result,
					loaded: !1,
					hasLocal: !1
				},
				terms: stripRecent({
					...state.terms,
					filter: generateFilterQuery({
						fieldDefinitions: state.definitions.fields,
						filterDefinitions: state.definitions.filters,
						operatorDefinitions: state.definitions.operators,
						filters
					}),
					types
				})
			};
		}
		case "TERMS_TYPE_REMOVE": {
			let types = (state.terms.types || []).filter((s) => s !== action.schemaType);
			return {
				...state,
				documentTypesNarrowed: narrowDocumentTypes({
					fieldDefinitions: state.definitions.fields,
					filters: state.filters,
					types
				}),
				cursor: null,
				nextCursor: null,
				result: {
					...state.result,
					loaded: !1,
					hasLocal: !1
				},
				terms: stripRecent({
					...state.terms,
					types
				})
			};
		}
		case "TERMS_TYPES_CLEAR": {
			let types = [];
			return {
				...state,
				documentTypesNarrowed: narrowDocumentTypes({
					fieldDefinitions: state.definitions.fields,
					filters: state.filters,
					types
				}),
				cursor: null,
				nextCursor: null,
				result: {
					...state.result,
					loaded: !1,
					hasLocal: !1
				},
				terms: stripRecent({
					...state.terms,
					types: []
				})
			};
		}
		default: return state;
	}
}
/**
* This function is used to strip __recent from terms, generally whenever there's a change in
* search terms or options that would otherwise trigger an additional search request.
* (e.g. updating the search query, changing a sort filter, adding / removing document types)
*
* This is done so we can better disambiguate between requests sent as a result of clicking a 'recent search'
* for purposes of measurement.
*
*/
function stripRecent(terms) {
	if (isRecentSearchTerms(terms)) {
		let { __recent, ...rest } = terms;
		return rest;
	}
	return terms;
}
/**
* @internal
*/
function SearchProvider(t0) {
	let $ = (0, import_compiler_runtime.c)(92), { children, fullscreen, disabledDocumentIds, canDisableAction } = t0, [onClose, setOnClose] = (0, import_react.useState)(null), [searchCommandList, setSearchCommandList] = (0, import_react.useState)(null), { data: releases } = useActiveReleases(), schema = useSchema(), currentUser = useCurrentUser(), { search: t1 } = useSource(), { operators, filters, strategy } = t1, telemetry = useTelemetry(), searchStartRef = (0, import_react.useRef)(null), searchStartTermsRef = (0, import_react.useRef)(null), t2;
	$[0] !== filters || $[1] !== schema ? (t2 = createFieldDefinitionDictionary(createFieldDefinitions(schema, filters)), $[0] = filters, $[1] = schema, $[2] = t2) : t2 = $[2];
	let t3;
	$[3] === filters ? t3 = $[4] : (t3 = createFilterDefinitionDictionary(filters), $[3] = filters, $[4] = t3);
	let t4;
	$[5] === operators ? t4 = $[6] : (t4 = createOperatorDefinitionDictionary(operators), $[5] = operators, $[6] = t4);
	let t5;
	$[7] !== t2 || $[8] !== t3 || $[9] !== t4 ? (t5 = {
		fieldDefinitions: t2,
		filterDefinitions: t3,
		operatorDefinitions: t4
	}, $[7] = t2, $[8] = t3, $[9] = t4, $[10] = t5) : t5 = $[10];
	let { fieldDefinitions, filterDefinitions, operatorDefinitions } = t5, t6;
	$[11] !== currentUser || $[12] !== fieldDefinitions || $[13] !== filterDefinitions || $[14] !== fullscreen || $[15] !== operatorDefinitions || $[16] !== strategy ? (t6 = initialSearchState({
		currentUser,
		fullscreen,
		definitions: {
			fields: fieldDefinitions,
			operators: operatorDefinitions,
			filters: filterDefinitions
		},
		pagination: {
			cursor: null,
			nextCursor: null
		},
		strategy
	}), $[11] = currentUser, $[12] = fieldDefinitions, $[13] = filterDefinitions, $[14] = fullscreen, $[15] = operatorDefinitions, $[16] = strategy, $[17] = t6) : t6 = $[17];
	let initialState = t6, [state, dispatch] = (0, import_react.useReducer)(searchReducer, initialState), { documentTypesNarrowed, filters: currentFilters, ordering, cursor, result, terms } = state, isMountedRef = (0, import_react.useRef)(!1), previousOrderingRef = (0, import_react.useRef)(initialState.ordering), previousCursorRef = (0, import_react.useRef)(initialState.cursor), previousTermsRef = (0, import_react.useRef)(initialState.terms), currentTermsRef = (0, import_react.useRef)(terms), t7, t8;
	$[18] === terms ? (t7 = $[19], t8 = $[20]) : (t7 = () => {
		currentTermsRef.current = terms;
	}, t8 = [terms], $[18] = terms, $[19] = t7, $[20] = t8), (0, import_react.useEffect)(t7, t8);
	let t9;
	$[21] !== strategy || $[22] !== telemetry ? (t9 = (searchResult) => {
		let t0$0 = searchStartRef.current, startTerms = searchStartTermsRef.current;
		searchStartRef.current = null, searchStartTermsRef.current = null, dispatch({
			...searchResult,
			type: "SEARCH_REQUEST_COMPLETE"
		}), t0$0 !== null && startTerms !== null && telemetry.log(GlobalSearchLatencyMeasured, {
			durationMs: performance.now() - t0$0,
			queryLength: startTerms.query.length,
			typeFilterCount: startTerms.types.length,
			resultCount: searchResult.hits.length,
			strategy: strategy ?? null,
			errored: !1
		});
	}, $[21] = strategy, $[22] = telemetry, $[23] = t9) : t9 = $[23];
	let handleSearchComplete = t9, t10;
	$[24] !== strategy || $[25] !== telemetry ? (t10 = (error) => {
		let t0_0 = searchStartRef.current, startTerms_0 = searchStartTermsRef.current;
		searchStartRef.current = null, searchStartTermsRef.current = null, dispatch({
			error,
			type: "SEARCH_REQUEST_ERROR"
		}), t0_0 !== null && startTerms_0 !== null && telemetry.log(GlobalSearchLatencyMeasured, {
			durationMs: performance.now() - t0_0,
			queryLength: startTerms_0.query.length,
			typeFilterCount: startTerms_0.types.length,
			resultCount: 0,
			strategy: strategy ?? null,
			errored: !0
		});
	}, $[24] = strategy, $[25] = telemetry, $[26] = t10) : t10 = $[26];
	let handleSearchError = t10, t11;
	$[27] === Symbol.for("react.memo_cache_sentinel") ? (t11 = () => {
		let currentTerms = currentTermsRef.current;
		hasSearchableTerms({ terms: currentTerms }) ? (searchStartRef.current = performance.now(), searchStartTermsRef.current = currentTerms) : (searchStartRef.current = null, searchStartTermsRef.current = null), dispatch({ type: "SEARCH_REQUEST_START" });
	}, $[27] = t11) : t11 = $[27];
	let handleSearchStart = t11, t12;
	$[28] !== result || $[29] !== terms ? (t12 = {
		...result,
		terms
	}, $[28] = result, $[29] = terms, $[30] = t12) : t12 = $[30];
	let t13;
	$[31] !== handleSearchComplete || $[32] !== handleSearchError || $[33] !== schema || $[34] !== t12 ? (t13 = {
		initialState: t12,
		onComplete: handleSearchComplete,
		onError: handleSearchError,
		onStart: handleSearchStart,
		schema
	}, $[31] = handleSearchComplete, $[32] = handleSearchError, $[33] = schema, $[34] = t12, $[35] = t13) : t13 = $[35];
	let { handleSearch, searchState } = useSearch(t13), t14;
	$[36] === terms ? t14 = $[37] : (t14 = hasSearchableTerms({ terms }), $[36] = terms, $[37] = t14);
	let hasValidTerms = t14, t15;
	if ($[38] !== documentTypesNarrowed || $[39] !== schema) {
		let t16;
		$[41] === schema ? t16 = $[42] : (t16 = (documentType) => schema.get(documentType), $[41] = schema, $[42] = t16), t15 = documentTypesNarrowed.map(t16), $[38] = documentTypesNarrowed, $[39] = schema, $[40] = t15;
	} else t15 = $[40];
	let documentTypes = t15, t16;
	if ($[43] !== currentFilters || $[44] !== fieldDefinitions || $[45] !== filterDefinitions || $[46] !== operatorDefinitions) {
		let t17;
		$[48] !== fieldDefinitions || $[49] !== filterDefinitions || $[50] !== operatorDefinitions ? (t17 = (filter) => validateFilter({
			fieldDefinitions,
			filter,
			filterDefinitions,
			operatorDefinitions
		}), $[48] = fieldDefinitions, $[49] = filterDefinitions, $[50] = operatorDefinitions, $[51] = t17) : t17 = $[51], t16 = currentFilters.filter(t17), $[43] = currentFilters, $[44] = fieldDefinitions, $[45] = filterDefinitions, $[46] = operatorDefinitions, $[47] = t16;
	} else t16 = $[47];
	let completeFilters = t16, t17;
	$[52] !== completeFilters.length || $[53] !== cursor || $[54] !== documentTypes || $[55] !== handleSearch || $[56] !== ordering || $[57] !== strategy || $[58] !== terms ? (t17 = () => {
		let orderingChanged = !dequal(ordering, previousOrderingRef.current), cursorChanged = cursor !== previousCursorRef.current, termsChanged = !isEqualSearchTerms(terms, previousTermsRef.current);
		if (orderingChanged || cursorChanged || termsChanged) {
			let sortLabel = "findability-sort:";
			(ordering?.customMeasurementLabel || ordering.sort) && (sortLabel = "findability-sort:" + (ordering?.customMeasurementLabel || `${ordering.sort?.field} ${ordering.sort?.direction}`)), handleSearch({
				options: {
					comments: [
						...isRecentSearchTerms(terms) ? [`findability-recent-search:${terms.__recent.index}`] : [],
						`findability-selected-types:${terms.types.length}`,
						sortLabel,
						"findability-source: global",
						`findability-filter-count:${completeFilters.length}`
					],
					limit: strategy === "groq2024" ? 25 : 1e3,
					skipSortByScore: ordering.ignoreScore,
					...ordering.sort ? { sort: [ordering.sort] } : {},
					cursor: cursor || void 0,
					perspective: "raw"
				},
				terms: {
					...terms,
					...documentTypes ? { types: documentTypes } : {}
				}
			}), cursorChanged && (previousCursorRef.current = cursor);
		}
		previousOrderingRef.current = ordering, previousTermsRef.current = terms;
	}, $[52] = completeFilters.length, $[53] = cursor, $[54] = documentTypes, $[55] = handleSearch, $[56] = ordering, $[57] = strategy, $[58] = terms, $[59] = t17) : t17 = $[59];
	let t18;
	$[60] !== completeFilters.length || $[61] !== currentFilters || $[62] !== cursor || $[63] !== documentTypes || $[64] !== handleSearch || $[65] !== hasValidTerms || $[66] !== ordering || $[67] !== releases || $[68] !== searchState.terms || $[69] !== strategy || $[70] !== terms ? (t18 = [
		completeFilters.length,
		currentFilters,
		documentTypes,
		handleSearch,
		hasValidTerms,
		ordering,
		searchState.terms,
		terms,
		cursor,
		strategy,
		releases
	], $[60] = completeFilters.length, $[61] = currentFilters, $[62] = cursor, $[63] = documentTypes, $[64] = handleSearch, $[65] = hasValidTerms, $[66] = ordering, $[67] = releases, $[68] = searchState.terms, $[69] = strategy, $[70] = terms, $[71] = t18) : t18 = $[71], (0, import_react.useEffect)(t17, t18);
	let t19;
	$[72] !== hasValidTerms || $[73] !== result.hits ? (t19 = () => {
		!hasValidTerms && isMountedRef?.current && result.hits.length > 0 && dispatch({ type: "SEARCH_CLEAR" }), isMountedRef.current = !0;
	}, $[72] = hasValidTerms, $[73] = result.hits, $[74] = t19) : t19 = $[74];
	let t20;
	$[75] !== hasValidTerms || $[76] !== result.hits || $[77] !== terms.query || $[78] !== terms.types ? (t20 = [
		dispatch,
		hasValidTerms,
		result.hits,
		terms.query,
		terms.types
	], $[75] = hasValidTerms, $[76] = result.hits, $[77] = terms.query, $[78] = terms.types, $[79] = t20) : t20 = $[79], (0, import_react.useEffect)(t19, t20);
	let t21;
	$[80] !== canDisableAction || $[81] !== disabledDocumentIds || $[82] !== fullscreen || $[83] !== state ? (t21 = {
		...state,
		fullscreen,
		disabledDocumentIds,
		canDisableAction
	}, $[80] = canDisableAction, $[81] = disabledDocumentIds, $[82] = fullscreen, $[83] = state, $[84] = t21) : t21 = $[84];
	let t22;
	$[85] !== onClose || $[86] !== searchCommandList || $[87] !== t21 ? (t22 = {
		dispatch,
		onClose,
		searchCommandList,
		setSearchCommandList,
		setOnClose,
		state: t21
	}, $[85] = onClose, $[86] = searchCommandList, $[87] = t21, $[88] = t22) : t22 = $[88];
	let value = t22, t23;
	return $[89] !== children || $[90] !== value ? (t23 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchContext.Provider, {
		value,
		children
	}), $[89] = children, $[90] = value, $[91] = t23) : t23 = $[91], t23;
}
//#endregion
export { useProjectOrganizationId as C, useStudioAppIdStore as D, useSearchState as E, require_server_browser as O, isStaging as S, useSearch as T, getSanityImportMapUrl as _, RecentSearches as a, hasSanityPackageInImportMap as b, SearchProvider as c, SearchResults as d, SearchWrapper as f, getPreviewValueWithFallback as g, getDocumentTypesTruncated as h, GLOBAL_SEARCH_KEY_MODIFIER as i, isHotkey as k, SearchResultItem as l, defineSearchFilter as m, CustomTextInput as n, SearchHeader as o, StatusButton as p, Filters as r, SearchPopover as s, AppIdCacheProvider as t, SearchResultItemPreview as u, getSchemaField as v, useRenderingContext as w, hasSearchableTerms as x, getSearchableTypes as y };
