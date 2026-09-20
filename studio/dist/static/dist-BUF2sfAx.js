import { r as __toESM, t as __commonJSMin } from "./rolldown-runtime-DC62tzP2.js";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-DwkYz3jI.js";
import { t as require_compiler_runtime } from "./compiler-runtime-DyJqaEVl.js";
import { t as SpinnerIcon } from "./Spinner-nstYs55P.js";
import { t as CloseIcon } from "./Close-DcVQ9bsv.js";
import { t as ChevronDownIcon } from "./ChevronDown-NPV7w9Tk.js";
import { t as CheckmarkIcon } from "./Checkmark-DWv_Dk-l.js";
import { t as RemoveIcon } from "./Remove-CLxJ31vj.js";
//#region node_modules/react-dom/cjs/react-dom.production.js
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	function formatProdErrorMessage(code) {
		var url = "https://react.dev/errors/" + code;
		if (1 < arguments.length) {
			url += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var i = 2; i < arguments.length; i++) url += "&args[]=" + encodeURIComponent(arguments[i]);
		}
		return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function noop() {}
	var Internals = {
		d: {
			f: noop,
			r: function() {
				throw Error(formatProdErrorMessage(522));
			},
			D: noop,
			C: noop,
			L: noop,
			m: noop,
			X: noop,
			S: noop,
			M: noop
		},
		p: 0,
		findDOMNode: null
	};
	var REACT_PORTAL_TYPE = Symbol.for("react.portal");
	var REACT_RECOVERABLE_TYPE = Symbol.for("react.recoverable");
	var REACT_OPTIMISTIC_KEY = Symbol.for("react.optimistic_key");
	function createPortal$1(children, containerInfo, implementation) {
		var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		return {
			$$typeof: REACT_PORTAL_TYPE,
			key: null == key ? null : key === REACT_OPTIMISTIC_KEY ? REACT_OPTIMISTIC_KEY : "" + key,
			children,
			containerInfo,
			implementation
		};
	}
	var ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function getCrossOriginStringAs(as, input) {
		if ("font" === as) return "";
		if ("string" === typeof input) return "use-credentials" === input ? input : "";
	}
	exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
	exports.browser = function(reason) {
		return {
			$$typeof: REACT_RECOVERABLE_TYPE,
			_reason: reason
		};
	};
	exports.createPortal = function(children, container) {
		var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType) throw Error(formatProdErrorMessage(299));
		return createPortal$1(children, container, null, key);
	};
	exports.flushSync = function(fn) {
		var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
		try {
			if (ReactSharedInternals.T = null, Internals.p = 2, fn) return fn();
		} finally {
			ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f();
		}
	};
	exports.preconnect = function(href, options) {
		"string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
	};
	exports.prefetchDNS = function(href) {
		"string" === typeof href && Internals.d.D(href);
	};
	exports.preinit = function(href, options) {
		if ("string" === typeof href && options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
			"style" === as ? Internals.d.S(href, "string" === typeof options.precedence ? options.precedence : void 0, {
				crossOrigin,
				integrity,
				fetchPriority
			}) : "script" === as && Internals.d.X(href, {
				crossOrigin,
				integrity,
				fetchPriority,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0
			});
		}
	};
	exports.preinitModule = function(href, options) {
		if ("string" === typeof href) if ("object" === typeof options && null !== options) {
			if (null == options.as || "script" === options.as) {
				var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
				Internals.d.M(href, {
					crossOrigin,
					integrity: "string" === typeof options.integrity ? options.integrity : void 0,
					nonce: "string" === typeof options.nonce ? options.nonce : void 0,
					fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0
				});
			}
		} else options ?? Internals.d.M(href);
	};
	exports.preload = function(href, options) {
		if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
			Internals.d.L(href, as, {
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0,
				type: "string" === typeof options.type ? options.type : void 0,
				fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
				referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
				imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
				imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
				media: "string" === typeof options.media ? options.media : void 0
			});
		}
	};
	exports.preloadModule = function(href, options) {
		if ("string" === typeof href) if (options) {
			var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
			Internals.d.m(href, {
				as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0,
				fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0
			});
		} else Internals.d.m(href);
	};
	exports.requestFormReset = function(form) {
		Internals.d.r(form);
	};
	exports.unstable_batchedUpdates = function(fn, a) {
		return fn(a);
	};
	exports.useFormState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useFormState(action, initialState, permalink);
	};
	exports.useFormStatus = function() {
		return ReactSharedInternals.H.useHostTransitionStatus();
	};
	exports.version = "19.3.0";
}));
//#endregion
//#region node_modules/react-dom/index.js
var require_react_dom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	checkDCE();
	module.exports = require_react_dom_production();
}));
//#endregion
//#region node_modules/@sanity/ui/dist/getTheme_v2-y09KqtEb.js
var defaultThemeConfig = {
	_version: 2,
	avatar: {
		sizes: [
			{
				distance: -4,
				size: 19
			},
			{
				distance: -4,
				size: 25
			},
			{
				distance: -8,
				size: 33
			},
			{
				distance: -12,
				size: 49
			}
		],
		focusRing: {
			offset: 1,
			width: 1
		}
	},
	button: {
		textWeight: "medium",
		border: { width: 1 },
		focusRing: {
			offset: -1,
			width: 1
		}
	},
	card: {
		border: { width: 1 },
		focusRing: {
			offset: -1,
			width: 1
		},
		shadow: { outline: .5 }
	},
	container: [
		320,
		640,
		960,
		1280,
		1600,
		1920
	],
	media: [
		360,
		600,
		900,
		1200,
		1800,
		2400
	],
	layer: {
		dialog: { zOffset: 600 },
		popover: { zOffset: 400 },
		tooltip: { zOffset: 200 }
	},
	radius: [
		0,
		1,
		3,
		6,
		9,
		12,
		21
	],
	shadow: [
		null,
		{
			umbra: [
				0,
				0,
				0,
				0
			],
			penumbra: [
				0,
				0,
				0,
				0
			],
			ambient: [
				0,
				0,
				0,
				0
			]
		},
		{
			umbra: [
				0,
				3,
				5,
				-2
			],
			penumbra: [
				0,
				6,
				10,
				0
			],
			ambient: [
				0,
				1,
				18,
				1
			]
		},
		{
			umbra: [
				0,
				7,
				8,
				-4
			],
			penumbra: [
				0,
				12,
				17,
				2
			],
			ambient: [
				0,
				5,
				22,
				4
			]
		},
		{
			umbra: [
				0,
				9,
				11,
				-5
			],
			penumbra: [
				0,
				18,
				28,
				2
			],
			ambient: [
				0,
				7,
				34,
				6
			]
		},
		{
			umbra: [
				0,
				11,
				15,
				-7
			],
			penumbra: [
				0,
				24,
				38,
				3
			],
			ambient: [
				0,
				9,
				46,
				8
			]
		}
	],
	space: [
		0,
		4,
		8,
		12,
		20,
		32,
		52,
		84,
		136,
		220
	],
	input: {
		border: { width: 1 },
		checkbox: {
			size: 17,
			focusRing: {
				offset: -1,
				width: 1
			}
		},
		radio: {
			size: 17,
			markSize: 9,
			focusRing: {
				offset: -1,
				width: 1
			}
		},
		switch: {
			width: 25,
			height: 17,
			padding: 5,
			transitionDurationMs: 150,
			transitionTimingFunction: "ease-out",
			focusRing: {
				offset: 1,
				width: 1
			}
		},
		select: { focusRing: {
			offset: -1,
			width: 1
		} },
		text: { focusRing: {
			offset: -1,
			width: 1
		} }
	},
	style: { button: { root: { transition: "background-color 100ms,border-color 100ms,color 100ms" } } }
};
var cache$1$1 = /* @__PURE__ */ new WeakMap();
/** @internal */
function themeColor_v0_v2(color_v0) {
	let cached_v2 = cache$1$1.get(color_v0);
	if (cached_v2) return cached_v2;
	let base = stateThemeColor_v0_v2(color_v0, color_v0.card.enabled), color_v2 = {
		_blend: color_v0._blend || (color_v0.dark ? "screen" : "multiply"),
		_dark: color_v0.dark,
		accent: base.accent,
		avatar: base.avatar,
		backdrop: color_v0.base.shadow.ambient,
		badge: base.badge,
		bg: color_v0.base.bg,
		border: color_v0.base.border,
		button: {
			default: stateTonesThemeColor_v0_v2(color_v0, color_v0.button.default),
			ghost: stateTonesThemeColor_v0_v2(color_v0, color_v0.button.ghost),
			bleed: stateTonesThemeColor_v0_v2(color_v0, color_v0.button.bleed)
		},
		code: base.code,
		fg: color_v0.base.fg,
		focusRing: color_v0.base.focusRing,
		icon: base.muted.fg,
		input: {
			default: inputStatesThemeColor_v0_v2(color_v0.input.default),
			invalid: inputStatesThemeColor_v0_v2(color_v0.input.invalid)
		},
		kbd: base.kbd,
		link: base.link,
		muted: {
			...base.muted,
			bg: color_v0.selectable?.default.enabled.bg2 || color_v0.base.bg
		},
		selectable: stateTonesThemeColor_v0_v2(color_v0, color_v0.selectable || color_v0.muted),
		shadow: color_v0.base.shadow,
		skeleton: {
			from: color_v0.skeleton?.from || color_v0.base.border,
			to: color_v0.skeleton?.to || color_v0.base.border
		},
		syntax: color_v0.syntax
	};
	return cache$1$1.set(color_v0, color_v2), color_v2;
}
function stateTonesThemeColor_v0_v2(v0, t) {
	return {
		default: {
			enabled: stateThemeColor_v0_v2(v0, t.default.enabled),
			hovered: stateThemeColor_v0_v2(v0, t.default.hovered),
			pressed: stateThemeColor_v0_v2(v0, t.default.pressed),
			selected: stateThemeColor_v0_v2(v0, t.default.selected),
			disabled: stateThemeColor_v0_v2(v0, t.default.disabled)
		},
		neutral: {
			enabled: stateThemeColor_v0_v2(v0, t.default.enabled),
			hovered: stateThemeColor_v0_v2(v0, t.default.hovered),
			pressed: stateThemeColor_v0_v2(v0, t.default.pressed),
			selected: stateThemeColor_v0_v2(v0, t.default.selected),
			disabled: stateThemeColor_v0_v2(v0, t.default.disabled)
		},
		primary: {
			enabled: stateThemeColor_v0_v2(v0, t.primary.enabled),
			hovered: stateThemeColor_v0_v2(v0, t.primary.hovered),
			pressed: stateThemeColor_v0_v2(v0, t.primary.pressed),
			selected: stateThemeColor_v0_v2(v0, t.primary.selected),
			disabled: stateThemeColor_v0_v2(v0, t.primary.disabled)
		},
		suggest: {
			enabled: stateThemeColor_v0_v2(v0, t.primary.enabled),
			hovered: stateThemeColor_v0_v2(v0, t.primary.hovered),
			pressed: stateThemeColor_v0_v2(v0, t.primary.pressed),
			selected: stateThemeColor_v0_v2(v0, t.primary.selected),
			disabled: stateThemeColor_v0_v2(v0, t.primary.disabled)
		},
		positive: {
			enabled: stateThemeColor_v0_v2(v0, t.positive.enabled),
			hovered: stateThemeColor_v0_v2(v0, t.positive.hovered),
			pressed: stateThemeColor_v0_v2(v0, t.positive.pressed),
			selected: stateThemeColor_v0_v2(v0, t.positive.selected),
			disabled: stateThemeColor_v0_v2(v0, t.positive.disabled)
		},
		caution: {
			enabled: stateThemeColor_v0_v2(v0, t.caution.enabled),
			hovered: stateThemeColor_v0_v2(v0, t.caution.hovered),
			pressed: stateThemeColor_v0_v2(v0, t.caution.pressed),
			selected: stateThemeColor_v0_v2(v0, t.caution.selected),
			disabled: stateThemeColor_v0_v2(v0, t.caution.disabled)
		},
		critical: {
			enabled: stateThemeColor_v0_v2(v0, t.critical.enabled),
			hovered: stateThemeColor_v0_v2(v0, t.critical.hovered),
			pressed: stateThemeColor_v0_v2(v0, t.critical.pressed),
			selected: stateThemeColor_v0_v2(v0, t.critical.selected),
			disabled: stateThemeColor_v0_v2(v0, t.critical.disabled)
		}
	};
}
function stateThemeColor_v0_v2(v0, state) {
	return {
		...state,
		avatar: {
			gray: {
				bg: v0.spot.gray,
				fg: v0.base.bg
			},
			blue: {
				bg: v0.spot.blue,
				fg: v0.base.bg
			},
			purple: {
				bg: v0.spot.purple,
				fg: v0.base.bg
			},
			magenta: {
				bg: v0.spot.magenta,
				fg: v0.base.bg
			},
			red: {
				bg: v0.spot.red,
				fg: v0.base.bg
			},
			orange: {
				bg: v0.spot.orange,
				fg: v0.base.bg
			},
			yellow: {
				bg: v0.spot.yellow,
				fg: v0.base.bg
			},
			green: {
				bg: v0.spot.green,
				fg: v0.base.bg
			},
			cyan: {
				bg: v0.spot.cyan,
				fg: v0.base.bg
			}
		},
		badge: {
			default: {
				bg: v0.muted.default.enabled.bg,
				fg: v0.muted.default.enabled.fg,
				dot: v0.muted.default.enabled.muted.fg,
				icon: v0.muted.default.enabled.muted.fg
			},
			neutral: {
				bg: v0.muted.transparent.enabled.bg,
				fg: v0.muted.transparent.enabled.fg,
				dot: v0.muted.transparent.enabled.muted.fg,
				icon: v0.muted.transparent.enabled.muted.fg
			},
			primary: {
				bg: v0.muted.primary.enabled.bg,
				fg: v0.muted.primary.enabled.fg,
				dot: v0.muted.primary.enabled.muted.fg,
				icon: v0.muted.primary.enabled.muted.fg
			},
			suggest: {
				bg: v0.muted.primary.enabled.bg,
				fg: v0.muted.primary.enabled.fg,
				dot: v0.muted.primary.enabled.muted.fg,
				icon: v0.muted.primary.enabled.muted.fg
			},
			positive: {
				bg: v0.muted.positive.enabled.bg,
				fg: v0.muted.positive.enabled.fg,
				dot: v0.muted.positive.enabled.muted.fg,
				icon: v0.muted.positive.enabled.muted.fg
			},
			caution: {
				bg: v0.muted.caution.enabled.bg,
				fg: v0.muted.caution.enabled.fg,
				dot: v0.muted.caution.enabled.muted.fg,
				icon: v0.muted.caution.enabled.muted.fg
			},
			critical: {
				bg: v0.muted.critical.enabled.bg,
				fg: v0.muted.critical.enabled.fg,
				dot: v0.muted.critical.enabled.muted.fg,
				icon: v0.muted.critical.enabled.muted.fg
			}
		},
		kbd: {
			bg: v0.muted.default.enabled.bg,
			fg: v0.muted.default.enabled.fg,
			border: v0.muted.default.enabled.border
		},
		muted: {
			...v0.muted.default.enabled.muted,
			bg: state.bg2 || state.bg
		},
		skeleton: {
			from: state.skeleton?.from || state.border,
			to: state.skeleton?.to || state.border
		}
	};
}
function inputStatesThemeColor_v0_v2(states) {
	return {
		enabled: inputStateThemeColor_v0_v2(states.enabled),
		disabled: inputStateThemeColor_v0_v2(states.disabled),
		readOnly: inputStateThemeColor_v0_v2(states.readOnly),
		hovered: inputStateThemeColor_v0_v2(states.hovered)
	};
}
function inputStateThemeColor_v0_v2(state) {
	return {
		bg: state.bg,
		border: state.border,
		fg: state.fg,
		muted: { bg: state.bg2 },
		placeholder: state.placeholder
	};
}
var cache$3 = /* @__PURE__ */ new WeakMap();
/** @public */
function getTheme_v2(theme) {
	if (theme.sanity.v2?._resolved) return theme.sanity.v2;
	let cached_v2 = cache$3.get(theme);
	if (cached_v2) return cached_v2;
	let v2 = {
		_version: 2,
		_resolved: !0,
		avatar: {
			...defaultThemeConfig.avatar,
			...theme.sanity.avatar
		},
		button: {
			...defaultThemeConfig.button,
			...theme.sanity.button
		},
		card: defaultThemeConfig.card,
		color: themeColor_v0_v2(theme.sanity.color),
		container: theme.sanity.container,
		font: theme.sanity.fonts,
		input: {
			...defaultThemeConfig.input,
			...theme.sanity.input,
			checkbox: {
				...defaultThemeConfig.input.checkbox,
				...theme.sanity.input.checkbox
			},
			radio: {
				...defaultThemeConfig.input.radio,
				...theme.sanity.input.radio
			},
			switch: {
				...defaultThemeConfig.input.switch,
				...theme.sanity.input.switch
			}
		},
		layer: theme.sanity.layer ?? defaultThemeConfig.layer,
		media: theme.sanity.media,
		radius: theme.sanity.radius,
		shadow: theme.sanity.shadows,
		space: theme.sanity.space,
		style: theme.sanity.styles
	};
	return cache$3.set(theme, v2), v2;
}
//#endregion
//#region node_modules/@sanity/ui/dist/helpers-C8xxXAQC.js
/**
* @internal
*/
var EMPTY_ARRAY = [];
var EMPTY_RECORD = {};
var POPOVER_MOTION_DURATION = .2;
var POPOVER_MOTION_PROPS = {
	variants: {
		initial: {
			scale: .97,
			willChange: "transform"
		},
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: POPOVER_MOTION_DURATION / 2 }
		},
		scaleIn: { scale: 1 },
		scaleOut: { scale: .97 }
	},
	transition: {
		type: "spring",
		visualDuration: POPOVER_MOTION_DURATION,
		bounce: .25
	},
	initial: ["hidden", "initial"],
	animate: ["visible", "scaleIn"],
	exit: ["hidden", "scaleOut"]
};
/**
* @internal
*/
function _fillCSSObject(keys, value) {
	return keys.reduce((style, key) => (style[key] = value, style), {});
}
/**
* @public
*/
function rem(pixelValue) {
	return pixelValue === 0 ? 0 : `${pixelValue / 16}rem`;
}
/**
* @internal
*/
function _responsive(media, values, callback) {
	return (values?.map(callback) || []).map((statement, mediaIndex) => mediaIndex === 0 ? statement : { [`@media screen and (min-width: ${media[mediaIndex - 1]}px)`]: statement });
}
/**
* @internal
*/
function _getArrayProp(val, defaultVal) {
	return val === void 0 ? defaultVal || EMPTY_ARRAY : Array.isArray(val) ? val : [val];
}
/**
* @internal
*/
function _getResponsiveSpace(theme, props, spaceIndexes = EMPTY_ARRAY) {
	if (!Array.isArray(spaceIndexes)) throw Error("the property must be array of numbers");
	if (spaceIndexes.length === 0) return null;
	let { media, space } = getTheme_v2(theme);
	return _responsive(media, spaceIndexes, (spaceIndex) => _fillCSSObject(props, rem(space[spaceIndex])));
}
//#endregion
//#region node_modules/@sanity/ui/dist/getScopedTheme-C-sZsyAz.js
/**
* Defines a lazy, self-replacing property on `obj`.
*
* On first access the `factory` is called and the getter is replaced with the
* computed plain value — subsequent reads have zero overhead.
*
* The property is enumerable (visible in `Object.keys` / spread) in both states.
*
* @internal
*/
function defineLazyProperty(obj, key, factory) {
	Object.defineProperty(obj, key, {
		get() {
			let value = factory();
			return Object.defineProperty(obj, key, {
				value,
				enumerable: !0,
				writable: !1,
				configurable: !1
			}), value;
		},
		enumerable: !0,
		configurable: !0
	});
}
/** @internal */
function is_v2(themeProp) {
	return themeProp._version === 2;
}
/**
* Apply `neutral` and `suggest` if they're not already part of the color object,
* as this was introduced in v2.9, but is not compatible with v2.0.
*
* @param color - The color object to upgrade
* @returns The upgraded color object. Returns as-is if already upgraded.
* @internal
*/
function themeColor_v0_v2_9(color) {
	if ("neutral" in color.badge) return color;
	let colors = color;
	return {
		...colors,
		badge: {
			...colors.badge,
			neutral: colors.badge.default,
			suggest: colors.badge.primary
		},
		button: {
			bleed: {
				...colors.button.bleed,
				neutral: colors.button.bleed.default,
				suggest: colors.button.bleed.primary
			},
			default: {
				...colors.button.default,
				neutral: colors.button.default.default,
				suggest: colors.button.default.primary
			},
			ghost: {
				...colors.button.ghost,
				neutral: colors.button.ghost.default,
				suggest: colors.button.ghost.primary
			}
		},
		selectable: {
			...colors.selectable,
			neutral: colors.selectable.default,
			suggest: colors.selectable.primary
		}
	};
}
var cache$2 = /* @__PURE__ */ new WeakMap();
/** @internal */
function v0_v2(v0) {
	if (v0.v2) return v0.v2;
	let cached_v2 = cache$2.get(v0);
	if (cached_v2) return cached_v2;
	let { avatar, button, color, container, focusRing: _unused_focusRing, fonts: font, input, layer, media, radius, shadows: shadow, space, styles: style } = v0, v2 = {
		_version: 2,
		avatar: {
			...defaultThemeConfig.avatar,
			...avatar
		},
		button: {
			...defaultThemeConfig.button,
			...button
		},
		card: defaultThemeConfig.card,
		color: {
			light: {
				transparent: themeColor_v0_v2(color.light.transparent),
				default: themeColor_v0_v2(color.light.default),
				neutral: themeColor_v0_v2(color.light.transparent),
				primary: themeColor_v0_v2(color.light.primary),
				suggest: themeColor_v0_v2(color.light.primary),
				positive: themeColor_v0_v2(color.light.positive),
				caution: themeColor_v0_v2(color.light.caution),
				critical: themeColor_v0_v2(color.light.critical)
			},
			dark: {
				transparent: themeColor_v0_v2(color.dark.transparent),
				default: themeColor_v0_v2(color.dark.default),
				neutral: themeColor_v0_v2(color.dark.transparent),
				primary: themeColor_v0_v2(color.dark.primary),
				suggest: themeColor_v0_v2(color.dark.primary),
				positive: themeColor_v0_v2(color.dark.positive),
				caution: themeColor_v0_v2(color.dark.caution),
				critical: themeColor_v0_v2(color.dark.critical)
			}
		},
		container,
		font,
		input: {
			...defaultThemeConfig.input,
			...input,
			checkbox: {
				...defaultThemeConfig.input.checkbox,
				...input.checkbox
			},
			radio: {
				...defaultThemeConfig.input.radio,
				...input.radio
			},
			switch: {
				...defaultThemeConfig.input.switch,
				...input.switch
			}
		},
		layer: layer ?? defaultThemeConfig.layer,
		media,
		radius,
		shadow,
		space,
		style
	};
	return cache$2.set(v0, v2), v2;
}
var cache$1 = /* @__PURE__ */ new WeakMap();
var V0_TONES = [
	"transparent",
	"default",
	"primary",
	"positive",
	"caution",
	"critical"
];
function lazyV0Scheme(schemeKey, color) {
	let scheme = {};
	for (let tone of V0_TONES) defineLazyProperty(scheme, tone, () => themeColor_v2_v0(color[schemeKey][tone]));
	return scheme;
}
/** @internal */
function v2_v0(v2) {
	let cachedTheme = cache$1.get(v2);
	if (cachedTheme) return cachedTheme;
	let { avatar, button, color, container, font: fonts, input, media, radius, shadow: shadows, space, style: styles } = v2, v0Color = {};
	defineLazyProperty(v0Color, "light", () => lazyV0Scheme("light", color)), defineLazyProperty(v0Color, "dark", () => lazyV0Scheme("dark", color));
	let theme = {
		_version: 0,
		avatar,
		button,
		container,
		color: v0Color,
		focusRing: input.text.focusRing,
		fonts,
		input,
		media,
		radius,
		shadows,
		space,
		styles,
		v2
	};
	return cache$1.set(v2, theme), theme;
}
function themeColor_v2_v0(color_v2) {
	return {
		base: {
			bg: color_v2.bg,
			fg: color_v2.fg,
			border: color_v2.border,
			focusRing: color_v2.focusRing,
			shadow: color_v2.shadow
		},
		button: color_v2.button,
		card: color_v2.selectable.default,
		dark: color_v2._dark,
		input: {
			default: inputStatesThemeColor_v2_v0(color_v2.input.default),
			invalid: inputStatesThemeColor_v2_v0(color_v2.input.invalid)
		},
		muted: {
			...color_v2.button.ghost,
			transparent: color_v2.button.ghost.default
		},
		solid: {
			...color_v2.button.default,
			transparent: color_v2.button.default.default
		},
		selectable: color_v2.selectable,
		spot: {
			gray: color_v2.avatar.gray.bg,
			blue: color_v2.avatar.blue.bg,
			purple: color_v2.avatar.purple.bg,
			magenta: color_v2.avatar.magenta.bg,
			red: color_v2.avatar.red.bg,
			orange: color_v2.avatar.orange.bg,
			yellow: color_v2.avatar.yellow.bg,
			green: color_v2.avatar.green.bg,
			cyan: color_v2.avatar.cyan.bg
		},
		syntax: color_v2.syntax
	};
}
function inputStatesThemeColor_v2_v0(t) {
	return {
		enabled: inputStateThemeColor_v2_v0(t.enabled),
		disabled: inputStateThemeColor_v2_v0(t.disabled),
		readOnly: inputStateThemeColor_v2_v0(t.readOnly),
		hovered: inputStateThemeColor_v2_v0(t.hovered)
	};
}
function inputStateThemeColor_v2_v0(t) {
	return {
		bg: t.bg,
		bg2: t.muted.bg,
		border: t.border,
		fg: t.fg,
		placeholder: t.placeholder
	};
}
var cache = /* @__PURE__ */ new Map();
/** @internal */
function getScopedTheme(themeProp, scheme, tone) {
	let cachedTheme = _getCachedTheme(themeProp, scheme, tone);
	if (cachedTheme) return cachedTheme;
	let v0 = is_v2(themeProp) ? v2_v0(themeProp) : themeProp, v2 = is_v2(themeProp) ? themeProp : v0_v2(themeProp), layer_v0 = v0.layer || defaultThemeConfig.layer, colorScheme_v2 = v2.color[scheme] || v2.color.light, color_v2_9 = themeColor_v0_v2_9(colorScheme_v2[tone] || colorScheme_v2.default), layer_v2 = v2.layer || defaultThemeConfig.layer, { color: _v0Color, ...v0Rest } = v0, sanity = {
		...v0Rest,
		layer: layer_v0,
		v2: {
			...v2,
			_resolved: !0,
			color: color_v2_9,
			layer: layer_v2
		}
	};
	defineLazyProperty(sanity, "color", () => {
		let colorScheme_v0 = v0.color[scheme] || v0.color.light;
		return colorScheme_v0[tone] || colorScheme_v0.default;
	});
	let theme = { sanity };
	return _setCachedTheme(themeProp, scheme, tone, theme), theme;
}
function _getCachedTheme(rootTheme, scheme, tone) {
	let schemeCache = cache.get(scheme);
	if (!schemeCache) return;
	let toneCache = schemeCache.get(tone);
	if (toneCache) return toneCache.get(rootTheme);
}
function _setCachedTheme(rootTheme, scheme, tone, theme) {
	cache.has(scheme) || cache.set(scheme, /* @__PURE__ */ new Map());
	let schemeCache = cache.get(scheme);
	schemeCache.has(tone) || schemeCache.set(tone, /* @__PURE__ */ new WeakMap()), schemeCache.get(tone).set(rootTheme, theme);
}
//#endregion
//#region node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var NAMESPACE = "@namespace";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
//#endregion
//#region node_modules/stylis/src/Utility.js
/**
* @param {number}
* @return {number}
*/
var abs = Math.abs;
/**
* @param {number}
* @return {string}
*/
var from = String.fromCharCode;
/**
* @param {object}
* @return {object}
*/
var assign = Object.assign;
/**
* @param {string} value
* @param {number} length
* @return {number}
*/
function hash(value, length) {
	return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
/**
* @param {string} value
* @return {string}
*/
function trim(value) {
	return value.trim();
}
/**
* @param {string} value
* @param {RegExp} pattern
* @return {string?}
*/
function match(value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value;
}
/**
* @param {string} value
* @param {(string|RegExp)} pattern
* @param {string} replacement
* @return {string}
*/
function replace(value, pattern, replacement) {
	return value.replace(pattern, replacement);
}
/**
* @param {string} value
* @param {string} search
* @param {number} position
* @return {number}
*/
function indexof(value, search, position) {
	return value.indexOf(search, position);
}
/**
* @param {string} value
* @param {number} index
* @return {number}
*/
function charat(value, index) {
	return value.charCodeAt(index) | 0;
}
/**
* @param {string} value
* @param {number} begin
* @param {number} end
* @return {string}
*/
function substr(value, begin, end) {
	return value.slice(begin, end);
}
/**
* @param {string} value
* @return {number}
*/
function strlen(value) {
	return value.length;
}
/**
* @param {any[]} value
* @return {number}
*/
function sizeof(value) {
	return value.length;
}
/**
* @param {any} value
* @param {any[]} array
* @return {any}
*/
function append(value, array) {
	return array.push(value), value;
}
/**
* @param {string[]} array
* @param {function} callback
* @return {string}
*/
function combine(array, callback) {
	return array.map(callback).join("");
}
/**
* @param {string[]} array
* @param {RegExp} pattern
* @return {string[]}
*/
function filter(array, pattern) {
	return array.filter(function(value) {
		return !match(value, pattern);
	});
}
//#endregion
//#region node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
/**
* @param {string} value
* @param {object | null} root
* @param {object | null} parent
* @param {string} type
* @param {string[] | string} props
* @param {object[] | string} children
* @param {object[]} siblings
* @param {number} length
*/
function node(value, root, parent, type, props, children, length, siblings) {
	return {
		value,
		root,
		parent,
		type,
		props,
		children,
		line,
		column,
		length,
		return: "",
		siblings
	};
}
/**
* @param {object} root
* @param {object} props
* @return {object}
*/
function copy(root, props) {
	return assign(node("", null, null, "", null, null, 0, root.siblings), root, { length: -root.length }, props);
}
/**
* @param {object} root
*/
function lift(root) {
	while (root.root) root = copy(root.root, { children: [root] });
	append(root, root.siblings);
}
/**
* @return {number}
*/
function char() {
	return character;
}
/**
* @return {number}
*/
function prev() {
	character = position > 0 ? charat(characters, --position) : 0;
	if (column--, character === 10) column = 1, line--;
	return character;
}
/**
* @return {number}
*/
function next() {
	character = position < length ? charat(characters, position++) : 0;
	if (column++, character === 10) column = 1, line++;
	return character;
}
/**
* @return {number}
*/
function peek() {
	return charat(characters, position);
}
/**
* @return {number}
*/
function caret() {
	return position;
}
/**
* @param {number} begin
* @param {number} end
* @return {string}
*/
function slice(begin, end) {
	return substr(characters, begin, end);
}
/**
* @param {number} type
* @return {number}
*/
function token(type) {
	switch (type) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
/**
* @param {string} value
* @return {any[]}
*/
function alloc(value) {
	return line = column = 1, length = strlen(characters = value), position = 0, [];
}
/**
* @param {any} value
* @return {any}
*/
function dealloc(value) {
	return characters = "", value;
}
/**
* @param {number} type
* @return {string}
*/
function delimit(type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
/**
* @param {number} type
* @return {string}
*/
function whitespace(type) {
	while (character = peek()) if (character < 33) next();
	else break;
	return token(type) > 2 || token(character) > 3 ? "" : " ";
}
/**
* @param {number} index
* @param {number} count
* @return {string}
*/
function escaping(index, count) {
	while (--count && next()) if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
/**
* @param {number} type
* @return {number}
*/
function delimiter(type) {
	while (next()) switch (character) {
		case type: return position;
		case 34:
		case 39:
			if (type !== 34 && type !== 39) delimiter(character);
			break;
		case 40:
			if (type === 41) delimiter(type);
			break;
		case 92: next();
	}
	return position;
}
/**
* @param {number} type
* @param {number} index
* @return {number}
*/
function commenter(type, index) {
	while (next()) if (type + character === 57) break;
	else if (type + character === 84 && peek() === 47) break;
	return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
/**
* @param {number} index
* @return {string}
*/
function identifier(index) {
	while (!token(peek())) next();
	return slice(index, position);
}
//#endregion
//#region node_modules/stylis/src/Parser.js
/**
* @param {string} value
* @return {object[]}
*/
function compile(value) {
	return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {string[]} rule
* @param {string[]} rules
* @param {string[]} rulesets
* @param {number[]} pseudo
* @param {number[]} points
* @param {string[]} declarations
* @return {object}
*/
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = "";
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;
	while (scanning) switch (previous = character, character = next()) {
		case 40: if (previous != 108 && charat(characters, length - 1) == 58) {
			if (indexof(characters += replace(delimit(character), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1) ampersand = -1;
			break;
		}
		case 34:
		case 39:
		case 91:
			characters += delimit(character);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			characters += whitespace(previous);
			break;
		case 92:
			characters += escaping(caret() - 1, 7);
			continue;
		case 47:
			switch (peek()) {
				case 42:
				case 47:
					append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
					if ((token(previous || 1) == 5 || token(peek() || 1) == 5) && strlen(characters) && substr(characters, -1, void 0) !== " ") characters += " ";
					break;
				default: characters += "/";
			}
			break;
		case 123 * variable: points[index++] = strlen(characters) * ampersand;
		case 125 * variable:
		case 59:
		case 0:
			switch (character) {
				case 0:
				case 125: scanning = 0;
				case 59 + offset:
					if (ampersand == -1) characters = replace(characters, /\f/g, "");
					if (property > 0 && (strlen(characters) - length || variable === 0 && previous === 47)) append(property > 32 ? declaration(characters + ";", rule, parent, length - 1, declarations) : declaration(replace(characters, " ", "") + ";", rule, parent, length - 2, declarations), declarations);
					break;
				case 59: characters += ";";
				default:
					append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);
					if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);
					else {
						switch (atrule) {
							case 99: if (charat(characters, 3) === 110) break;
							case 108: if (charat(characters, 2) === 97) break;
							default: offset = 0;
							case 100:
							case 109:
							case 115:
						}
						if (offset) parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
						else parse(characters, reference, reference, reference, [""], children, 0, points, children);
					}
			}
			index = offset = property = 0, variable = ampersand = 1, type = characters = "", length = pseudo;
			break;
		case 58: length = 1 + strlen(characters), property = previous;
		default:
			if (variable < 1) {
				if (character == 123) --variable;
				else if (character == 125 && variable++ == 0 && prev() == 125) continue;
			}
			switch (characters += from(character), character * variable) {
				case 38:
					ampersand = offset > 0 ? 1 : (characters += "\f", -1);
					break;
				case 44:
					points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
					break;
				case 64:
					if (peek() === 45) characters += delimit(next());
					atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
					break;
				case 45: if (previous === 45 && strlen(characters) == 2) variable = 0;
			}
	}
	return rulesets;
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {number} index
* @param {number} offset
* @param {string[]} rules
* @param {number[]} points
* @param {string} type
* @param {string[]} props
* @param {string[]} children
* @param {number} length
* @param {object[]} siblings
* @return {object}
*/
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [""];
	var size = sizeof(rule);
	for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length, siblings);
}
/**
* @param {number} value
* @param {object} root
* @param {object?} parent
* @param {object[]} siblings
* @return {object}
*/
function comment(value, root, parent, siblings) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {number} length
* @param {object[]} siblings
* @return {object}
*/
function declaration(value, root, parent, length, siblings) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length, siblings);
}
//#endregion
//#region node_modules/stylis/src/Prefixer.js
/**
* @param {string} value
* @param {number} length
* @param {object[]} children
* @return {string}
*/
function prefix(value, length, children) {
	switch (hash(value, length)) {
		case 5103: return WEBKIT + "print-" + value + value;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599: return WEBKIT + value + value;
		case 4855: return WEBKIT + value.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + value;
		case 4789: return MOZ + value + value;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756: return WEBKIT + value + MOZ + value + MS + value + value;
		case 5936: switch (charat(value, length + 11)) {
			case 114: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
			case 108: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
			case 45: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
		}
		case 6828:
		case 4268:
		case 2903: return WEBKIT + value + MS + value + value;
		case 6165: return WEBKIT + value + MS + "flex-" + value + value;
		case 5187: return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
		case 5443: return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (!match(value, /flex-|baseline/) ? MS + "grid-row-" + replace(value, /flex-|-self/g, "") : "") + value;
		case 4675: return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
		case 5548: return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
		case 5292: return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
		case 6060: return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
		case 4554: return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
		case 6187: return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
		case 5495:
		case 3959: return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
		case 4968: return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /space-between/, "justify") + WEBKIT + value + value;
		case 4200:
			if (!match(value, /flex-|baseline/)) return MS + "grid-column-align" + substr(value, length) + value;
			break;
		case 2592:
		case 3360: return MS + replace(value, "template-", "") + value;
		case 4384:
		case 3616:
			if (children && children.some(function(element, index) {
				return length = index, match(element.props, /grid-\w+-end/);
			})) return ~indexof(value + (children = children[length].value), "span", 0) ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span", 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";";
			return MS + replace(value, "-start", "") + value;
		case 4896:
		case 4128: return children && children.some(function(element) {
			return match(element.props, /grid-\w+-start/);
		}) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
		case 4095:
		case 3583:
		case 4068:
		case 2532: return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
				case 109: if (charat(value, length + 4) !== 45) break;
				case 102: return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length + 3) == 108 ? "$3" : "$2-$3")) + value;
				case 115: return ~indexof(value, "stretch", 0) ? prefix(replace(value, "stretch", "fill-available"), length, children) + value : value;
			}
			break;
		case 5152:
		case 5920: return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_, a, b, c, d, e, f) {
			return MS + a + ":" + b + f + (c ? MS + a + "-span:" + (d ? e : +e - +b) + f : "") + value;
		});
		case 4949:
			if (charat(value, length + 6) === 121) return replace(value, ":", ":" + WEBKIT) + value;
			break;
		case 6444:
			switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
				case 120: return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
				case 100: return replace(value, ":", ":" + MS) + value;
			}
			break;
		case 5719:
		case 2647:
		case 2135:
		case 3927:
		case 2391: return replace(value, "scroll-", "scroll-snap-") + value;
	}
	return value;
}
//#endregion
//#region node_modules/stylis/src/Serializer.js
/**
* @param {object[]} children
* @param {function} callback
* @return {string}
*/
function serialize(children, callback) {
	var output = "";
	for (var i = 0; i < children.length; i++) output += callback(children[i], i, children, callback) || "";
	return output;
}
/**
* @param {object} element
* @param {number} index
* @param {object[]} children
* @param {function} callback
* @return {string}
*/
function stringify(element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break;
		case IMPORT:
		case NAMESPACE:
		case DECLARATION: return element.return = element.return || element.value;
		case COMMENT: return "";
		case KEYFRAMES: return element.return = element.value + "{" + serialize(element.children, callback) + "}";
		case RULESET: if (!strlen(element.value = element.props.join(","))) return "";
	}
	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
//#endregion
//#region node_modules/stylis/src/Middleware.js
/**
* @param {function[]} collection
* @return {function}
*/
function middleware(collection) {
	var length = sizeof(collection);
	return function(element, index, children, callback) {
		var output = "";
		for (var i = 0; i < length; i++) output += collection[i](element, index, children, callback) || "";
		return output;
	};
}
/**
* @param {function} callback
* @return {function}
*/
function rulesheet(callback) {
	return function(element) {
		if (!element.root) {
			if (element = element.return) callback(element);
		}
	};
}
/**
* @param {object} element
* @param {number} index
* @param {object[]} children
* @param {function} callback
*/
function prefixer(element, index, children, callback) {
	if (element.length > -1) {
		if (!element.return) switch (element.type) {
			case DECLARATION:
				element.return = prefix(element.value, element.length, children);
				return;
			case KEYFRAMES: return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
			case RULESET: if (element.length) return combine(children = element.props, function(value) {
				switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
					case ":read-only":
					case ":read-write":
						lift(copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] }));
						lift(copy(element, { props: [value] }));
						assign(element, { props: filter(children, callback) });
						break;
					case "::placeholder":
						lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }));
						lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }));
						lift(copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] }));
						lift(copy(element, { props: [value] }));
						assign(element, { props: filter(children, callback) });
				}
				return "";
			});
		}
	}
}
//#endregion
//#region node_modules/styled-components/dist/styled-components.browser.esm.js
var import_compiler_runtime = require_compiler_runtime();
var import_react = /* @__PURE__ */ __toESM(require_react());
var r;
var i;
var c$11 = "undefined" != typeof process && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled";
var a = "active";
var l = "data-styled-version";
var u = "6.5.3";
var h = "/*!sc*/\n";
var d = "undefined" != typeof window && "undefined" != typeof document;
function p(e) {
	if ("undefined" != typeof process && true) {
		const t = {}[e];
		if (void 0 !== t && "" !== t) return "false" !== t;
	}
}
var f = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : null !== (i = null !== (r = p("REACT_APP_SC_DISABLE_SPEEDY")) && void 0 !== r ? r : p("SC_DISABLE_SPEEDY")) && void 0 !== i ? i : "undefined" != typeof process && false);
var m = "sc-keyframes-";
var y = {};
function v(e, ...t) {
	return /* @__PURE__ */ new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length > 0 ? ` Args: ${t.join(", ")}` : ""}`);
}
var b = /* @__PURE__ */ new Map();
var w = /* @__PURE__ */ new Map();
var N = 1;
var C = (e) => {
	if (b.has(e)) return b.get(e);
	for (; w.has(N);) N++;
	const t = N++;
	return b.set(e, t), w.set(t, e), t;
};
var O = (e) => w.get(e);
var E = (e, t) => {
	N = t + 1, b.set(e, t), w.set(t, e);
};
var I = Object.freeze([]);
var $ = Object.freeze({});
function R(e, t, n = $) {
	return e.theme !== n.theme && e.theme || t || n.theme;
}
var j = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var x = /(^-|-$)/g;
function T(e) {
	return e.replace(j, "-").replace(x, "");
}
var k = /(a)(d)/gi;
var D = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97));
function V(e) {
	let t, n = "";
	for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = D(t % 52) + n;
	return (D(t % 52) + n).replace(k, "$1-$2");
}
var M = 5381;
var G = (e, t) => {
	let n = t.length;
	for (; n;) e = 33 * e ^ t.charCodeAt(--n);
	return e;
};
var F = (e) => G(M, e);
function z(e) {
	return V(F(e) >>> 0);
}
function W(e) {
	return e.displayName || e.name || "Component";
}
function L(e) {
	return "string" == typeof e && true;
}
function B(e) {
	return L(e) ? `styled.${e}` : `Styled(${W(e)})`;
}
var q = Symbol.for("react.memo");
var H = Symbol.for("react.forward_ref");
var Y = {
	contextType: !0,
	defaultProps: !0,
	displayName: !0,
	getDerivedStateFromError: !0,
	getDerivedStateFromProps: !0,
	propTypes: !0,
	type: !0
};
var U = {
	name: !0,
	length: !0,
	prototype: !0,
	caller: !0,
	callee: !0,
	arguments: !0,
	arity: !0
};
var J = {
	$$typeof: !0,
	compare: !0,
	defaultProps: !0,
	displayName: !0,
	propTypes: !0,
	type: !0
};
var X = {
	[H]: {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	},
	[q]: J
};
function K(e) {
	return ("type" in (t = e) && t.type.$$typeof) === q ? J : "$$typeof" in e ? X[e.$$typeof] : Y;
	var t;
}
var Q = Object.defineProperty;
var Z = Object.getOwnPropertyNames;
var ee = Object.getOwnPropertySymbols;
var te = Object.getOwnPropertyDescriptor;
var ne = Object.getPrototypeOf;
var oe = Object.prototype;
function se(e, t, n) {
	if ("string" != typeof t) {
		const o = ne(t);
		o && o !== oe && se(e, o, n);
		const s = Z(t).concat(ee(t)), r = K(e), i = K(t);
		for (let o = 0; o < s.length; ++o) {
			const c = s[o];
			if (!(c in U || n && n[c] || i && c in i || r && c in r)) {
				const n = te(t, c);
				try {
					Q(e, c, n);
				} catch (e) {}
			}
		}
	}
	return e;
}
function re(e) {
	return "function" == typeof e;
}
var ie = Symbol.for("react.forward_ref");
function ce(e) {
	return null != e && ("object" == typeof e || "function" == typeof e) && e.$$typeof === ie && "styledComponentId" in e;
}
function ae(e, t) {
	return e && t ? e + " " + t : e || t || "";
}
function le(e, t) {
	return e.join(t || "");
}
function ue(e) {
	return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function he(e, t, n = !1) {
	if (!n && !ue(e) && !Array.isArray(e)) return t;
	if (Array.isArray(t)) for (let n = 0; n < t.length; n++) e[n] = he(e[n], t[n]);
	else if (ue(t)) for (const n in t) e[n] = he(e[n], t[n]);
	return e;
}
function de(e, t) {
	Object.defineProperty(e, "toString", { value: t });
}
var pe = class {
	constructor(e) {
		this.groupSizes = /* @__PURE__ */ new Uint32Array(512), this.length = 512, this.tag = e, this._cGroup = 0, this._cIndex = 0;
	}
	indexOfGroup(e) {
		if (e === this._cGroup) return this._cIndex;
		let t = this._cIndex;
		if (e > this._cGroup) for (let n = this._cGroup; n < e; n++) t += this.groupSizes[n];
		else for (let n = this._cGroup - 1; n >= e; n--) t -= this.groupSizes[n];
		return this._cGroup = e, this._cIndex = t, t;
	}
	insertRules(e, t) {
		if (e >= this.groupSizes.length) {
			const t = this.groupSizes, n = t.length;
			let o = n;
			for (; e >= o;) if (o <<= 1, o < 0) throw v(16, `${e}`);
			this.groupSizes = new Uint32Array(o), this.groupSizes.set(t), this.length = o;
			for (let e = n; e < o; e++) this.groupSizes[e] = 0;
		}
		let n = this.indexOfGroup(e + 1), o = 0;
		for (let s = 0, r = t.length; s < r; s++) this.tag.insertRule(n, t[s]) && (this.groupSizes[e]++, n++, o++);
		o > 0 && this._cGroup > e && (this._cIndex += o);
	}
	clearGroup(e) {
		if (e < this.length) {
			const t = this.groupSizes[e], n = this.indexOfGroup(e), o = n + t;
			this.groupSizes[e] = 0;
			for (let e = n; e < o; e++) this.tag.deleteRule(n);
			t > 0 && this._cGroup > e && (this._cIndex -= t);
		}
	}
	getGroup(e) {
		let t = "";
		if (e >= this.length || 0 === this.groupSizes[e]) return t;
		const n = this.groupSizes[e], o = this.indexOfGroup(e), s = o + n;
		for (let e = o; e < s; e++) t += this.tag.getRule(e) + h;
		return t;
	}
};
var fe = `style[${c$11}][${l}="${u}"]`;
var me = new RegExp(`^${c$11}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`);
var ye = (e) => "undefined" != typeof ShadowRoot && e instanceof ShadowRoot || "host" in e && 11 === e.nodeType;
var ge = (e) => {
	if (!e) return document;
	if (ye(e)) return e;
	if ("getRootNode" in e) {
		const t = e.getRootNode();
		if (ye(t)) return t;
	}
	return document;
};
var ve = (e, t, n) => {
	const o = n.split(",");
	let s;
	for (let n = 0, r = o.length; n < r; n++) (s = o[n]) && e.registerName(t, s);
};
var Se = (e, t) => {
	var n;
	const o = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(h), s = [];
	for (let t = 0, n = o.length; t < n; t++) {
		const n = o[t].trim();
		if (!n) continue;
		const r = n.match(me);
		if (r) {
			const t = 0 | parseInt(r[1], 10), n = r[2];
			0 !== t && (E(n, t), ve(e, n, r[3]), e.getTag().insertRules(t, s)), s.length = 0;
		} else s.push(n);
	}
};
var be = (e) => {
	const t = ge(e.options.target).querySelectorAll(fe);
	for (let n = 0, o = t.length; n < o; n++) {
		const o = t[n];
		o && o.getAttribute(c$11) !== a && (Se(e, o), o.parentNode && o.parentNode.removeChild(o));
	}
};
var we = !1;
function Ne() {
	if (!1 !== we) return we;
	if ("undefined" != typeof document) {
		const e = document.head.querySelector("meta[property=\"csp-nonce\"]");
		if (e) return we = e.nonce || e.getAttribute("content") || void 0;
		const t = document.head.querySelector("meta[name=\"sc-nonce\"]");
		if (t) return we = t.getAttribute("content") || void 0;
	}
	return we = "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0;
}
var Ce = (e, t) => {
	const n = document.head, o = e || n, s = document.createElement("style"), r = ((e) => {
		const t = Array.from(e.querySelectorAll(`style[${c$11}]`));
		return t[t.length - 1];
	})(o), i = void 0 !== r ? r.nextSibling : null;
	s.setAttribute(c$11, a), s.setAttribute(l, u);
	const h = t || Ne();
	return h && s.setAttribute("nonce", h), o.insertBefore(s, i), s;
};
var Oe = class {
	constructor(e, t) {
		this.element = Ce(e, t), this.element.appendChild(document.createTextNode("")), this.sheet = ((e) => {
			var t;
			if (e.sheet) return e.sheet;
			const n = null !== (t = e.getRootNode().styleSheets) && void 0 !== t ? t : document.styleSheets;
			for (let t = 0, o = n.length; t < o; t++) {
				const o = n[t];
				if (o.ownerNode === e) return o;
			}
			throw v(17);
		})(this.element), this.length = 0;
	}
	insertRule(e, t) {
		try {
			return this.sheet.insertRule(t, e), this.length++, !0;
		} catch (e) {
			return !1;
		}
	}
	deleteRule(e) {
		this.sheet.deleteRule(e), this.length--;
	}
	getRule(e) {
		const t = this.sheet.cssRules[e];
		return t && t.cssText ? t.cssText : "";
	}
};
var Ee = class {
	constructor(e, t) {
		this.element = Ce(e, t), this.nodes = this.element.childNodes, this.length = 0;
	}
	insertRule(e, t) {
		if (e <= this.length && e >= 0) {
			const n = document.createTextNode(t);
			return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0;
		}
		return !1;
	}
	deleteRule(e) {
		this.element.removeChild(this.nodes[e]), this.length--;
	}
	getRule(e) {
		return e < this.length ? this.nodes[e].textContent : "";
	}
};
var Ae = d;
var Pe = {
	isServer: !d,
	useCSSOMInjection: !f
};
var _e = class _e {
	static registerId(e) {
		return C(e);
	}
	constructor(e = $, t = {}, n) {
		this.options = Object.assign(Object.assign({}, Pe), e), this.gs = t, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(n), this.server = !!e.isServer, !this.server && d && Ae && (Ae = !1, be(this)), de(this, () => ((e) => {
			const t = e.getTag(), { length: n } = t;
			let o = "";
			for (let s = 0; s < n; s++) {
				const n = O(s);
				if (void 0 === n) continue;
				const r = e.names.get(n);
				if (void 0 === r || !r.size) continue;
				const i = t.getGroup(s);
				if (0 === i.length) continue;
				const a = c$11 + ".g" + s + "[id=\"" + n + "\"]";
				let l = "";
				for (const e of r) e.length > 0 && (l += e + ",");
				o += i + a + "{content:\"" + l + "\"}/*!sc*/\n";
			}
			return o;
		})(this));
	}
	rehydrate() {
		!this.server && d && be(this);
	}
	reconstructWithOptions(e, t = !0) {
		const n = new _e(Object.assign(Object.assign({}, this.options), e), this.gs, t && this.names || void 0);
		return n.keyframeIds = new Set(this.keyframeIds), !this.server && d && e.target !== this.options.target && ge(this.options.target) !== ge(e.target) && be(n), n;
	}
	allocateGSInstance(e) {
		return this.gs[e] = (this.gs[e] || 0) + 1;
	}
	getTag() {
		return this.tag || (this.tag = (e = (({ useCSSOMInjection: e, target: t, nonce: n }) => e ? new Oe(t, n) : new Ee(t, n))(this.options), new pe(e)));
		var e;
	}
	hasNameForId(e, t) {
		var n, o;
		return null !== (o = null === (n = this.names.get(e)) || void 0 === n ? void 0 : n.has(t)) && void 0 !== o && o;
	}
	registerName(e, t) {
		C(e), e.startsWith(m) && this.keyframeIds.add(e);
		const n = this.names.get(e);
		n ? n.add(t) : this.names.set(e, /* @__PURE__ */ new Set([t]));
	}
	insertRules(e, t, n) {
		this.registerName(e, t), this.getTag().insertRules(C(e), n);
	}
	clearNames(e) {
		this.names.has(e) && this.names.get(e).clear();
	}
	clearRules(e) {
		this.getTag().clearGroup(C(e)), this.clearNames(e);
	}
	clearTag() {
		this.tag = void 0;
	}
};
var Ie = /* @__PURE__ */ new WeakSet();
var $e = {
	animationIterationCount: 1,
	aspectRatio: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexShrink: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	scale: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
};
function Re(e, t) {
	return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || e in $e || e.startsWith("--") ? String(t).trim() : t + "px";
}
var je = 47;
function xe(e) {
	if (45 === e.charCodeAt(0) && 45 === e.charCodeAt(1)) return e;
	let t = "";
	for (let n = 0; n < e.length; n++) {
		const o = e.charCodeAt(n);
		t += o >= 65 && o <= 90 ? "-" + String.fromCharCode(o + 32) : e[n];
	}
	return t.startsWith("ms-") ? "-" + t : t;
}
var Te = Symbol.for("sc-keyframes");
function ke(e) {
	return "object" == typeof e && null !== e && Te in e;
}
function De(e) {
	return re(e) && !(e.prototype && e.prototype.isReactComponent);
}
var Ve = (e) => null == e || !1 === e || "" === e;
var Me = Symbol.for("react.client.reference");
function Ge(e) {
	return e.$$typeof === Me;
}
function ze(e, t) {
	for (const n in e) {
		const o = e[n];
		e.hasOwnProperty(n) && !Ve(o) && (Array.isArray(o) && Ie.has(o) || re(o) ? t.push(xe(n) + ":", o, ";") : ue(o) ? (t.push(n + " {"), ze(o, t), t.push("}")) : t.push(xe(n) + ": " + Re(n, o) + ";"));
	}
}
function We(e, t, n, o, s = []) {
	if (Ve(e)) return s;
	const r = typeof e;
	if ("string" === r) return s.push(e), s;
	if ("function" === r) {
		if (Ge(e)) return s;
		if (De(e) && t) return We(e(t), t, n, o, s);
		return s.push(e), s;
	}
	if (Array.isArray(e)) {
		for (let r = 0; r < e.length; r++) We(e[r], t, n, o, s);
		return s;
	}
	return ce(e) ? (s.push(`.${e.styledComponentId}`), s) : ke(e) ? (n ? (e.inject(n, o), s.push(e.getName(o))) : s.push(e), s) : Ge(e) ? s : ue(e) ? e.toString !== Object.prototype.toString ? (s.push(e.toString()), s) : (ze(e, s), s) : (s.push(e.toString()), s);
}
var Le = F(u);
var Be = class {
	constructor(e, t, n) {
		this.rules = e, this.componentId = t, this.baseHash = G(Le, t), this.baseStyle = n, _e.registerId(t);
	}
	generateAndInjectStyles(e, t, n) {
		let o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n) : "";
		{
			let s = "";
			for (let o = 0; o < this.rules.length; o++) {
				const r = this.rules[o];
				if ("string" == typeof r) s += r;
				else if (r) if (De(r)) {
					const o = r(e);
					"string" == typeof o ? s += o : null != o && !1 !== o && (s += le(We(o, e, t, n)));
				} else s += le(We(r, e, t, n));
			}
			if (s) {
				this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
				const e = n.hash ? n.hash + s : s;
				let r = this.dynamicNameCache.get(e);
				if (!r) {
					if (r = V(G(G(this.baseHash, n.hash), s) >>> 0), this.dynamicNameCache.size >= 200) {
						const e = this.dynamicNameCache.keys().next().value;
						void 0 !== e && this.dynamicNameCache.delete(e);
					}
					this.dynamicNameCache.set(e, r);
				}
				if (!t.hasNameForId(this.componentId, r)) {
					const e = n(s, "." + r, void 0, this.componentId);
					t.insertRules(this.componentId, r, e);
				}
				o = ae(o, r);
			}
		}
		return o;
	}
};
var qe = /&/g;
function He(e, t) {
	let n = 0;
	for (; --t >= 0 && 92 === e.charCodeAt(t);) n++;
	return !(1 & ~n);
}
function Ye(e) {
	const t = e.length;
	let n = "", o = 0, s = 0, r = 0, i = !1, c = !1;
	for (let a = 0; a < t; a++) {
		const l = e.charCodeAt(a);
		if (0 !== r || i || l !== je || 42 !== e.charCodeAt(a + 1)) if (i) 42 === l && e.charCodeAt(a + 1) === je && (i = !1, a++);
		else if (34 !== l && 39 !== l || He(e, a)) {
			if (0 === r) if (123 === l) s++;
			else if (125 === l) {
				if (s--, s < 0) {
					c = !0;
					let n = a + 1;
					for (; n < t;) {
						const t = e.charCodeAt(n);
						if (59 === t || 10 === t) break;
						n++;
					}
					n < t && 59 === e.charCodeAt(n) && n++, s = 0, a = n - 1, o = n;
					continue;
				}
				0 === s && (n += e.substring(o, a + 1), o = a + 1);
			} else 59 === l && 0 === s && (n += e.substring(o, a + 1), o = a + 1);
		} else 0 === r ? r = l : r === l && (r = 0);
		else i = !0, a++;
	}
	return c || 0 !== s || 0 !== r ? (o < t && 0 === s && 0 === r && (n += e.substring(o)), n) : e;
}
function Ue(e, t) {
	const n = t + " ", o = "," + n;
	for (let s = 0; s < e.length; s++) {
		const r = e[s];
		if ("rule" === r.type) {
			r.value = (n + r.value).replaceAll(",", o);
			const e = r.props, t = [];
			for (let o = 0; o < e.length; o++) t[o] = n + e[o];
			r.props = t;
		}
		Array.isArray(r.children) && "@keyframes" !== r.type && Ue(r.children, t);
	}
	return e;
}
function Je({ options: e = $, plugins: t = I } = $) {
	let n, s, r;
	const i = (e, t, o) => o.startsWith(s) && o.endsWith(s) && o.replaceAll(s, "").length > 0 ? `.${n}` : e, c = t.slice();
	c.push((e) => {
		e.type === "rule" && e.value.includes("&") && (r || (r = new RegExp(`\\${s}\\b`, "g")), e.props[0] = e.props[0].replace(qe, s).replace(r, i));
	}), e.prefix && c.push(prefixer), c.push(stringify);
	let a = [];
	const l = middleware(c.concat(rulesheet((e) => a.push(e)))), u = (t, i = "", c = "", u = "&") => {
		n = u, s = i, r = void 0;
		const h = function(e) {
			const t = -1 !== e.indexOf("//"), n = -1 !== e.indexOf("}");
			if (!t && !n) return e;
			if (!t) return Ye(e);
			const o = e.length;
			let s = "", r = 0, i = 0, c = 0, a = 0, l = 0, u = !1;
			for (; i < o;) {
				const t = e.charCodeAt(i);
				if (34 !== t && 39 !== t || He(e, i)) if (0 === c) if (t === je && i + 1 < o && 42 === e.charCodeAt(i + 1)) {
					for (i += 2; i + 1 < o && (42 !== e.charCodeAt(i) || e.charCodeAt(i + 1) !== je);) i++;
					i += 2;
				} else if (40 !== t) if (41 !== t) if (a > 0) i++;
				else if (42 === t && i + 1 < o && e.charCodeAt(i + 1) === je) s += e.substring(r, i), i += 2, r = i, u = !0;
				else if (t === je && i + 1 < o && e.charCodeAt(i + 1) === je) {
					for (s += e.substring(r, i); i < o && 10 !== e.charCodeAt(i);) i++;
					r = i, u = !0;
				} else 123 === t ? l++ : 125 === t && l--, i++;
				else a > 0 && a--, i++;
				else a++, i++;
				else i++;
				else 0 === c ? c = t : c === t && (c = 0), i++;
			}
			return u ? (r < o && (s += e.substring(r)), 0 === l ? s : Ye(s)) : 0 === l ? e : Ye(e);
		}(t);
		let d = compile(c || i ? c + " " + i + " { " + h + " }" : h);
		return e.namespace && (d = Ue(d, e.namespace)), a = [], serialize(d, l), a;
	}, h = e;
	let d = M;
	for (let e = 0; e < t.length; e++) t[e].name || v(15), d = G(d, t[e].name);
	return null != h && h.namespace && (d = G(d, h.namespace)), null != h && h.prefix && (d = G(d, "p")), u.hash = d !== M ? d.toString() : "", u;
}
var Xe = new _e();
var Ke = Je();
var Qe = import_react.createContext({
	shouldForwardProp: void 0,
	styleSheet: Xe,
	stylis: Ke,
	stylisPlugins: void 0
});
Qe.Consumer;
function et() {
	return import_react.useContext(Qe);
}
var nt = import_react.createContext(void 0);
nt.Consumer;
function st() {
	const e = import_react.useContext(nt);
	if (!e) throw v(18);
	return e;
}
function rt(e) {
	const n = import_react.useContext(nt), o = import_react.useMemo(() => function(e, t) {
		if (!e) throw v(14);
		if (re(e)) return e(t);
		if (Array.isArray(e) || "object" != typeof e) throw v(8);
		return t ? Object.assign(Object.assign({}, t), e) : e;
	}(e.theme, n), [e.theme, n]);
	return e.children ? import_react.createElement(nt.Provider, { value: o }, e.children) : null;
}
var it = Object.prototype.hasOwnProperty;
var ct = {};
function at(e, t) {
	const n = "string" != typeof e ? "sc" : T(e);
	ct[n] = (ct[n] || 0) + 1;
	const o = n + "-" + z(u + n + ct[n]);
	return t ? t + "-" + o : o;
}
function ut(o, s, r) {
	const i = ce(o), c = o, a = !L(o), { attrs: l = I, componentId: u = at(s.displayName, s.parentComponentId), displayName: h = B(o) } = s, d = s.displayName && s.componentId ? T(s.displayName) + "-" + s.componentId : s.componentId || u, p = i && c.attrs ? c.attrs.concat(l).filter(Boolean) : l;
	let { shouldForwardProp: f } = s;
	if (i && c.shouldForwardProp) {
		const e = c.shouldForwardProp;
		if (s.shouldForwardProp) {
			const t = s.shouldForwardProp;
			f = (n, o) => e(n, o) && t(n, o);
		} else f = e;
	}
	const m = new Be(r, d, i ? c.componentStyle : void 0);
	function y(o, s) {
		return function(o, s, r) {
			const { attrs: i, componentStyle: c, defaultProps: a, foldedComponentIds: l, styledComponentId: u, target: h } = o, d = import_react.useContext(nt), p = et(), f = o.shouldForwardProp || p.shouldForwardProp;
			const m = R(s, d, a) || $;
			let y, g;
			{
				const e = import_react.useRef(null), n = e.current;
				if (null !== n && n[1] === m && n[2] === p.styleSheet && n[3] === p.stylis && n[7] === c && function(e, t, n) {
					const o = e, s = t;
					let r = 0;
					for (const e in s) if (it.call(s, e) && (r++, o[e] !== s[e])) return !1;
					return r === n;
				}(n[0], s, n[4])) y = n[5], g = n[6];
				else {
					y = function(e, t, n) {
						const o = Object.assign(Object.assign({}, t), {
							className: void 0,
							theme: n
						}), s = e.length > 1;
						for (let n = 0; n < e.length; n++) {
							const r = e[n], i = re(r) ? r(s ? Object.assign({}, o) : o) : r;
							for (const e in i) "className" === e ? o.className = ae(o.className, i[e]) : "style" === e ? o.style = Object.assign(Object.assign({}, o.style), i[e]) : e in t && void 0 === t[e] || (o[e] = i[e]);
						}
						return "className" in t && "string" == typeof t.className && (o.className = ae(o.className, t.className)), o;
					}(i, s, m), g = c.generateAndInjectStyles(y, p.styleSheet, p.stylis);
					let t = 0;
					for (const e in s) it.call(s, e) && t++;
					e.current = [
						s,
						m,
						p.styleSheet,
						p.stylis,
						t,
						y,
						g,
						c
					];
				}
			}
			const v = y.as || h, S = function(t, n, o, s) {
				const r = {};
				for (const i in t) void 0 === t[i] || "$" === i[0] || "as" === i || "theme" === i && t.theme === o || ("forwardedAs" === i ? r.as = t.forwardedAs : s && !s(i, n) || (r[i] = t[i]));
				return r;
			}(y, v, m, f);
			let b = ae(l, u);
			return g && (b += " " + g), y.className && (b += " " + y.className), S[L(v) && v.includes("-") ? "class" : "className"] = b, r && (S.ref = r), (0, import_react.createElement)(v, S);
		}(g, o, s);
	}
	y.displayName = h;
	let g = import_react.forwardRef(y);
	return g.attrs = p, g.componentStyle = m, g.displayName = h, g.shouldForwardProp = f, g.foldedComponentIds = i ? ae(c.foldedComponentIds, c.styledComponentId) : "", g.styledComponentId = d, g.target = i ? c.target : o, Object.defineProperty(g, "defaultProps", {
		get() {
			return this._foldedDefaultProps;
		},
		set(e) {
			this._foldedDefaultProps = i ? function(e, ...t) {
				for (const n of t) he(e, n, !0);
				return e;
			}({}, c.defaultProps, e) : e;
		}
	}), de(g, () => `.${g.styledComponentId}`), a && se(g, o, {
		attrs: !0,
		componentStyle: !0,
		displayName: !0,
		foldedComponentIds: !0,
		shouldForwardProp: !0,
		styledComponentId: !0,
		target: !0
	}), g;
}
var ht = /* @__PURE__ */ new Set([
	"a",
	"abbr",
	"address",
	"area",
	"article",
	"aside",
	"audio",
	"b",
	"bdi",
	"bdo",
	"blockquote",
	"body",
	"button",
	"br",
	"canvas",
	"caption",
	"cite",
	"code",
	"col",
	"colgroup",
	"data",
	"datalist",
	"dd",
	"del",
	"details",
	"dfn",
	"dialog",
	"div",
	"dl",
	"dt",
	"em",
	"embed",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"header",
	"hgroup",
	"hr",
	"html",
	"i",
	"iframe",
	"img",
	"input",
	"ins",
	"kbd",
	"label",
	"legend",
	"li",
	"main",
	"map",
	"mark",
	"menu",
	"meter",
	"nav",
	"object",
	"ol",
	"optgroup",
	"option",
	"output",
	"p",
	"picture",
	"pre",
	"progress",
	"q",
	"rp",
	"rt",
	"ruby",
	"s",
	"samp",
	"search",
	"section",
	"select",
	"slot",
	"small",
	"span",
	"strong",
	"sub",
	"summary",
	"sup",
	"table",
	"tbody",
	"td",
	"template",
	"textarea",
	"tfoot",
	"th",
	"thead",
	"time",
	"tr",
	"u",
	"ul",
	"var",
	"video",
	"wbr",
	"circle",
	"clipPath",
	"defs",
	"ellipse",
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence",
	"filter",
	"foreignObject",
	"g",
	"image",
	"line",
	"linearGradient",
	"marker",
	"mask",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"radialGradient",
	"rect",
	"stop",
	"svg",
	"switch",
	"symbol",
	"text",
	"textPath",
	"tspan",
	"use"
]);
function dt(e, t) {
	const n = [e[0]];
	for (let o = 0, s = t.length; o < s; o += 1) n.push(t[o], e[o + 1]);
	return n;
}
var pt = (e) => (Ie.add(e), e);
function ft(e, ...t) {
	if (re(e) || ue(e)) return pt(We(dt(I, [e, ...t])));
	const n = e;
	return 0 === t.length && 1 === n.length && "string" == typeof n[0] ? We(n) : pt(We(dt(n, t)));
}
function mt(e, t, n = $) {
	if (!t) throw v(1, t);
	const o = (o, ...s) => e(t, n, ft(o, ...s));
	return o.attrs = (o) => mt(e, t, Object.assign(Object.assign({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) })), o.withConfig = (o) => mt(e, t, Object.assign(Object.assign({}, n), o)), o;
}
var yt = (e) => mt(ut, e);
var gt = yt;
ht.forEach((e) => {
	gt[e] = yt(e);
});
var vt = class {
	constructor(e, t) {
		this.instanceRules = /* @__PURE__ */ new Map(), this.rules = e, this.componentId = t, this.isStatic = function(e) {
			for (let t = 0; t < e.length; t += 1) {
				const n = e[t];
				if (re(n) && !ce(n)) return !1;
			}
			return !0;
		}(e), _e.registerId(this.componentId);
	}
	removeStyles(e, t) {
		this.instanceRules.delete(e), this.rebuildGroup(t);
	}
	renderStyles(e, t, n, o) {
		const s = this.componentId;
		if (this.isStatic) {
			if (n.hasNameForId(s, s + e)) this.instanceRules.has(e) || this.computeRules(e, t, n, o);
			else {
				const r = this.computeRules(e, t, n, o);
				n.insertRules(s, r.name, r.rules);
			}
			return;
		}
		const r = this.instanceRules.get(e);
		if (this.computeRules(e, t, n, o), !n.server && r) {
			const t = r.rules, n = this.instanceRules.get(e).rules;
			if (t.length === n.length) {
				let e = !0;
				for (let o = 0; o < t.length; o++) if (t[o] !== n[o]) {
					e = !1;
					break;
				}
				if (e) return;
			}
		}
		this.rebuildGroup(n);
	}
	computeRules(e, t, n, o) {
		const s = le(We(this.rules, t, n, o)), r = {
			name: this.componentId + e,
			rules: o(s, "")
		};
		return this.instanceRules.set(e, r), r;
	}
	rebuildGroup(e) {
		const t = this.componentId;
		e.clearRules(t);
		for (const n of this.instanceRules.values()) e.insertRules(t, n.name, n.rules);
	}
};
function St(e, ...n) {
	const o = ft(e, ...n), s = `sc-global-${z(JSON.stringify(o))}`, r = new vt(o, s);
	const i = (e) => {
		const n = et(), i = import_react.useContext(nt);
		let a;
		{
			const e = import_react.useRef(null);
			null === e.current && (e.current = n.styleSheet.allocateGSInstance(s)), a = e.current;
		}
		n.styleSheet.server && c(a, e, n.styleSheet, i, n.stylis);
		{
			const o = r.isStatic ? [
				a,
				n.styleSheet,
				r
			] : [
				a,
				e,
				n.styleSheet,
				i,
				n.stylis,
				r
			], l = import_react.useRef(r);
			import_react.useLayoutEffect(() => {
				n.styleSheet.server || (l.current !== r && (n.styleSheet.clearRules(s), l.current = r), c(a, e, n.styleSheet, i, n.stylis));
			}, o), import_react.useLayoutEffect(() => () => {
				n.styleSheet.server || r.removeStyles(a, n.styleSheet);
			}, [
				a,
				n.styleSheet,
				r
			]);
		}
		return n.styleSheet.server && r.instanceRules.delete(a), null;
	};
	function c(e, t, n, o, s) {
		if (r.isStatic) r.renderStyles(e, y, n, s);
		else {
			const c = Object.assign(Object.assign({}, t), { theme: R(t, o, i.defaultProps) });
			r.renderStyles(e, c, n, s);
		}
	}
	return import_react.memo(i);
}
var Ct;
var Ot = class {
	constructor(e, t) {
		this[Ct] = !0, this.inject = (e, t = Ke) => {
			const n = this.getName(t);
			if (!e.hasNameForId(this.id, n)) {
				const o = t(this.rules, n, "@keyframes");
				e.insertRules(this.id, n, o);
			}
		}, this.name = e, this.id = m + e, this.rules = t, C(this.id), de(this, () => {
			throw v(12, String(this.name));
		});
	}
	getName(e = Ke) {
		return e.hash ? this.name + V(+e.hash >>> 0) : this.name;
	}
};
function Et(e, ...t) {
	const n = le(ft(e, ...t));
	return new Ot(z(n), n);
}
Ct = Te;
`${c$11}`;
`${c$11}`;
`${c$11}`;
//#endregion
//#region node_modules/react-is/cjs/react-is.production.js
/**
* @license React
* react-is.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_is_production = /* @__PURE__ */ __commonJSMin(((exports) => {
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
	var REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition");
	var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	exports.isValidElementType = function(type) {
		return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_VIEW_TRANSITION_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? !0 : !1;
	};
}));
//#endregion
//#region node_modules/react-is/index.js
var require_react_is = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_is_production();
}));
//#endregion
//#region node_modules/@sanity/ui/dist/useLayer-ONr7wTUN.js
var import_jsx_runtime = require_jsx_runtime();
var import_react_is = /* @__PURE__ */ __toESM(require_react_is(), 1);
var BASE_STYLE$1$1 = { "&[data-as=\"ul\"],&[data-as=\"ol\"]": { listStyle: "none" } };
var BOX_SIZING = {
	content: "content-box",
	border: "border-box"
};
var BOX_HEIGHT = {
	stretch: "stretch",
	fill: "100%"
};
function boxStyle() {
	return BASE_STYLE$1$1;
}
function responsiveBoxStyle() {
	return [
		responsiveBoxSizingStyle,
		responsiveBoxHeightStyle,
		responsiveBoxOverflowStyle,
		responsiveBoxDisplayStyle
	];
}
function responsiveBoxDisplayStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$display, (display) => ({ "&:not([hidden])": { display } }));
}
function responsiveBoxSizingStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$sizing, (sizing) => ({ boxSizing: BOX_SIZING[sizing] }));
}
function responsiveBoxHeightStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$height, (height) => ({ height: BOX_HEIGHT[height] }));
}
function responsiveBoxOverflowStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$overflow, (overflow) => ({ overflow }));
}
var BASE_STYLE$3 = {
	minWidth: 0,
	minHeight: 0
};
function flexItemStyle() {
	return [BASE_STYLE$3, responsiveFlexItemStyle];
}
function responsiveFlexItemStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return props.$flex ? _responsive(media, props.$flex, (flex) => ({ flex: `${flex}` })) : EMPTY_ARRAY;
}
function responsiveGridItemStyle() {
	return [
		responsiveGridItemRowStyle,
		responsiveGridItemRowStartStyle,
		responsiveGridItemRowEndStyle,
		responsiveGridItemColumnStyle,
		responsiveGridItemColumnStartStyle,
		responsiveGridItemColumnEndStyle
	];
}
var GRID_ITEM_ROW = {
	auto: "auto",
	full: "1 / -1"
};
var GRID_ITEM_COLUMN = {
	auto: "auto",
	full: "1 / -1"
};
function responsiveGridItemRowStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$row, (row) => typeof row == "number" ? { gridRow: `span ${row} / span ${row}` } : { gridRow: GRID_ITEM_ROW[row] });
}
function responsiveGridItemRowStartStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$rowStart, (rowStart) => ({ gridRowStart: `${rowStart}` }));
}
function responsiveGridItemRowEndStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$rowEnd, (rowEnd) => ({ gridRowEnd: `${rowEnd}` }));
}
function responsiveGridItemColumnStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$column, (column) => typeof column == "number" ? { gridColumn: `span ${column} / span ${column}` } : { gridColumn: GRID_ITEM_COLUMN[column] });
}
function responsiveGridItemColumnStartStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$columnStart, (columnStart) => ({ gridColumnStart: `${columnStart}` }));
}
function responsiveGridItemColumnEndStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$columnEnd, (columnEnd) => ({ gridColumnEnd: `${columnEnd}` }));
}
function responsiveMarginStyle(props) {
	let { theme } = props;
	return [
		_getResponsiveSpace(theme, ["margin"], props.$margin),
		_getResponsiveSpace(theme, ["marginLeft", "marginRight"], props.$marginX),
		_getResponsiveSpace(theme, ["marginTop", "marginBottom"], props.$marginY),
		_getResponsiveSpace(theme, ["marginTop"], props.$marginTop),
		_getResponsiveSpace(theme, ["marginRight"], props.$marginRight),
		_getResponsiveSpace(theme, ["marginBottom"], props.$marginBottom),
		_getResponsiveSpace(theme, ["marginLeft"], props.$marginLeft)
	].filter(Boolean);
}
function responsivePaddingStyle(props) {
	let { theme } = props;
	return [
		_getResponsiveSpace(theme, ["padding"], props.$padding),
		_getResponsiveSpace(theme, ["paddingLeft", "paddingRight"], props.$paddingX),
		_getResponsiveSpace(theme, ["paddingTop", "paddingBottom"], props.$paddingY),
		_getResponsiveSpace(theme, ["paddingTop"], props.$paddingTop),
		_getResponsiveSpace(theme, ["paddingRight"], props.$paddingRight),
		_getResponsiveSpace(theme, ["paddingBottom"], props.$paddingBottom),
		_getResponsiveSpace(theme, ["paddingLeft"], props.$paddingLeft)
	].filter(Boolean);
}
var StyledBox = /* @__PURE__ */ gt.div.withConfig({
	displayName: "StyledBox",
	componentId: "sc-ok8ezo-0"
})(boxStyle, flexItemStyle, responsiveBoxStyle, responsiveGridItemStyle, responsiveMarginStyle, responsivePaddingStyle);
var Box = function Box(props) {
	let $ = (0, import_compiler_runtime.c)(110), flex, gridColumn, gridColumnEnd, gridColumnStart, gridRow, gridRowEnd, gridRowStart, height, marginBottom, marginLeft, marginRight, marginTop, marginX, marginY, overflow, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingX, paddingY, ref, restProps, sizing, t0, t1, t2, t3;
	$[0] === props ? (flex = $[1], gridColumn = $[2], gridColumnEnd = $[3], gridColumnStart = $[4], gridRow = $[5], gridRowEnd = $[6], gridRowStart = $[7], height = $[8], marginBottom = $[9], marginLeft = $[10], marginRight = $[11], marginTop = $[12], marginX = $[13], marginY = $[14], overflow = $[15], paddingBottom = $[16], paddingLeft = $[17], paddingRight = $[18], paddingTop = $[19], paddingX = $[20], paddingY = $[21], ref = $[22], restProps = $[23], sizing = $[24], t0 = $[25], t1 = $[26], t2 = $[27], t3 = $[28]) : ({as: t0, ref, gridColumn, gridColumnStart, gridColumnEnd, display: t1, flex, height, margin: t2, marginX, marginY, marginTop, marginRight, marginBottom, marginLeft, overflow, padding: t3, paddingX, paddingY, paddingTop, paddingRight, paddingBottom, paddingLeft, gridRow, gridRowStart, gridRowEnd, sizing, ...restProps} = props, $[0] = props, $[1] = flex, $[2] = gridColumn, $[3] = gridColumnEnd, $[4] = gridColumnStart, $[5] = gridRow, $[6] = gridRowEnd, $[7] = gridRowStart, $[8] = height, $[9] = marginBottom, $[10] = marginLeft, $[11] = marginRight, $[12] = marginTop, $[13] = marginX, $[14] = marginY, $[15] = overflow, $[16] = paddingBottom, $[17] = paddingLeft, $[18] = paddingRight, $[19] = paddingTop, $[20] = paddingX, $[21] = paddingY, $[22] = ref, $[23] = restProps, $[24] = sizing, $[25] = t0, $[26] = t1, $[27] = t2, $[28] = t3);
	let asProp = t0 === void 0 ? "div" : t0, display = t1 === void 0 ? "block" : t1, margin = t2 === void 0 ? 0 : t2, padding = t3 === void 0 ? 0 : t3, t4 = typeof asProp == "string" ? asProp : void 0, t5;
	$[29] === gridColumn ? t5 = $[30] : (t5 = _getArrayProp(gridColumn), $[29] = gridColumn, $[30] = t5);
	let t6;
	$[31] === gridColumnStart ? t6 = $[32] : (t6 = _getArrayProp(gridColumnStart), $[31] = gridColumnStart, $[32] = t6);
	let t7;
	$[33] === gridColumnEnd ? t7 = $[34] : (t7 = _getArrayProp(gridColumnEnd), $[33] = gridColumnEnd, $[34] = t7);
	let t8;
	$[35] === display ? t8 = $[36] : (t8 = _getArrayProp(display), $[35] = display, $[36] = t8);
	let t9;
	$[37] === flex ? t9 = $[38] : (t9 = _getArrayProp(flex), $[37] = flex, $[38] = t9);
	let t10;
	$[39] === height ? t10 = $[40] : (t10 = _getArrayProp(height), $[39] = height, $[40] = t10);
	let t11;
	$[41] === margin ? t11 = $[42] : (t11 = _getArrayProp(margin), $[41] = margin, $[42] = t11);
	let t12;
	$[43] === marginX ? t12 = $[44] : (t12 = _getArrayProp(marginX), $[43] = marginX, $[44] = t12);
	let t13;
	$[45] === marginY ? t13 = $[46] : (t13 = _getArrayProp(marginY), $[45] = marginY, $[46] = t13);
	let t14;
	$[47] === marginTop ? t14 = $[48] : (t14 = _getArrayProp(marginTop), $[47] = marginTop, $[48] = t14);
	let t15;
	$[49] === marginRight ? t15 = $[50] : (t15 = _getArrayProp(marginRight), $[49] = marginRight, $[50] = t15);
	let t16;
	$[51] === marginBottom ? t16 = $[52] : (t16 = _getArrayProp(marginBottom), $[51] = marginBottom, $[52] = t16);
	let t17;
	$[53] === marginLeft ? t17 = $[54] : (t17 = _getArrayProp(marginLeft), $[53] = marginLeft, $[54] = t17);
	let t18;
	$[55] === overflow ? t18 = $[56] : (t18 = _getArrayProp(overflow), $[55] = overflow, $[56] = t18);
	let t19;
	$[57] === padding ? t19 = $[58] : (t19 = _getArrayProp(padding), $[57] = padding, $[58] = t19);
	let t20;
	$[59] === paddingX ? t20 = $[60] : (t20 = _getArrayProp(paddingX), $[59] = paddingX, $[60] = t20);
	let t21;
	$[61] === paddingY ? t21 = $[62] : (t21 = _getArrayProp(paddingY), $[61] = paddingY, $[62] = t21);
	let t22;
	$[63] === paddingTop ? t22 = $[64] : (t22 = _getArrayProp(paddingTop), $[63] = paddingTop, $[64] = t22);
	let t23;
	$[65] === paddingRight ? t23 = $[66] : (t23 = _getArrayProp(paddingRight), $[65] = paddingRight, $[66] = t23);
	let t24;
	$[67] === paddingBottom ? t24 = $[68] : (t24 = _getArrayProp(paddingBottom), $[67] = paddingBottom, $[68] = t24);
	let t25;
	$[69] === paddingLeft ? t25 = $[70] : (t25 = _getArrayProp(paddingLeft), $[69] = paddingLeft, $[70] = t25);
	let t26;
	$[71] === gridRow ? t26 = $[72] : (t26 = _getArrayProp(gridRow), $[71] = gridRow, $[72] = t26);
	let t27;
	$[73] === gridRowStart ? t27 = $[74] : (t27 = _getArrayProp(gridRowStart), $[73] = gridRowStart, $[74] = t27);
	let t28;
	$[75] === gridRowEnd ? t28 = $[76] : (t28 = _getArrayProp(gridRowEnd), $[75] = gridRowEnd, $[76] = t28);
	let t29;
	$[77] === sizing ? t29 = $[78] : (t29 = _getArrayProp(sizing), $[77] = sizing, $[78] = t29);
	let t30 = asProp, t31;
	return $[79] !== props.children || $[80] !== ref || $[81] !== restProps || $[82] !== t10 || $[83] !== t11 || $[84] !== t12 || $[85] !== t13 || $[86] !== t14 || $[87] !== t15 || $[88] !== t16 || $[89] !== t17 || $[90] !== t18 || $[91] !== t19 || $[92] !== t20 || $[93] !== t21 || $[94] !== t22 || $[95] !== t23 || $[96] !== t24 || $[97] !== t25 || $[98] !== t26 || $[99] !== t27 || $[100] !== t28 || $[101] !== t29 || $[102] !== t30 || $[103] !== t4 || $[104] !== t5 || $[105] !== t6 || $[106] !== t7 || $[107] !== t8 || $[108] !== t9 ? (t31 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledBox, {
		"data-as": t4,
		"data-ui": "Box",
		...restProps,
		$column: t5,
		$columnStart: t6,
		$columnEnd: t7,
		$display: t8,
		$flex: t9,
		$height: t10,
		$margin: t11,
		$marginX: t12,
		$marginY: t13,
		$marginTop: t14,
		$marginRight: t15,
		$marginBottom: t16,
		$marginLeft: t17,
		$overflow: t18,
		$padding: t19,
		$paddingX: t20,
		$paddingY: t21,
		$paddingTop: t22,
		$paddingRight: t23,
		$paddingBottom: t24,
		$paddingLeft: t25,
		$row: t26,
		$rowStart: t27,
		$rowEnd: t28,
		$sizing: t29,
		as: t30,
		ref,
		children: props.children
	}), $[79] = props.children, $[80] = ref, $[81] = restProps, $[82] = t10, $[83] = t11, $[84] = t12, $[85] = t13, $[86] = t14, $[87] = t15, $[88] = t16, $[89] = t17, $[90] = t18, $[91] = t19, $[92] = t20, $[93] = t21, $[94] = t22, $[95] = t23, $[96] = t24, $[97] = t25, $[98] = t26, $[99] = t27, $[100] = t28, $[101] = t29, $[102] = t30, $[103] = t4, $[104] = t5, $[105] = t6, $[106] = t7, $[107] = t8, $[108] = t9, $[109] = t31) : t31 = $[109], t31;
};
function responsiveRadiusStyle(props) {
	let { media, radius } = getTheme_v2(props.theme);
	return _responsive(media, props.$radius, (value) => {
		let borderRadius = 0;
		return typeof value == "number" && (borderRadius = rem(radius[value])), value === "full" && (borderRadius = "9999px"), { borderRadius };
	});
}
/**
* @public
*/
function useTheme$1() {
	return st();
}
/**
* @public
*/
function useTheme_v2() {
	let $ = (0, import_compiler_runtime.c)(2), t0 = st(), t1;
	return $[0] === t0 ? t1 = $[1] : (t1 = getTheme_v2(t0), $[0] = t0, $[1] = t1), t1;
}
/**
* @internal
*/
function _cardColorStyle(base, color, checkered = !1) {
	return {
		"--card-backdrop-color": base.backdrop,
		"--card-focus-ring-color": base.focusRing,
		"--card-shadow-outline-color": base.shadow.outline,
		"--card-shadow-umbra-color": base.shadow.umbra,
		"--card-shadow-penumbra-color": base.shadow.penumbra,
		"--card-shadow-ambient-color": base.shadow.ambient,
		"--card-accent-fg-color": color.accent.fg,
		"--card-avatar-gray-bg-color": color.avatar.gray.bg,
		"--card-avatar-gray-fg-color": color.avatar.gray.fg,
		"--card-avatar-blue-bg-color": color.avatar.blue.bg,
		"--card-avatar-blue-fg-color": color.avatar.blue.fg,
		"--card-avatar-purple-bg-color": color.avatar.purple.bg,
		"--card-avatar-purple-fg-color": color.avatar.purple.fg,
		"--card-avatar-magenta-bg-color": color.avatar.magenta.bg,
		"--card-avatar-magenta-fg-color": color.avatar.magenta.fg,
		"--card-avatar-red-bg-color": color.avatar.red.bg,
		"--card-avatar-red-fg-color": color.avatar.red.fg,
		"--card-avatar-orange-bg-color": color.avatar.orange.bg,
		"--card-avatar-orange-fg-color": color.avatar.orange.fg,
		"--card-avatar-yellow-bg-color": color.avatar.yellow.bg,
		"--card-avatar-yellow-fg-color": color.avatar.yellow.fg,
		"--card-avatar-green-bg-color": color.avatar.green.bg,
		"--card-avatar-green-fg-color": color.avatar.green.fg,
		"--card-avatar-cyan-bg-color": color.avatar.cyan.bg,
		"--card-avatar-cyan-fg-color": color.avatar.cyan.fg,
		"--card-bg-color": color.bg,
		"--card-bg-image": checkered ? `repeating-conic-gradient(${color.bg} 0% 25%, ${color.muted.bg} 0% 50%)` : void 0,
		"--card-border-color": color.border,
		"--card-badge-default-bg-color": color.badge.default.bg,
		"--card-badge-default-dot-color": color.badge.default.dot,
		"--card-badge-default-fg-color": color.badge.default.fg,
		"--card-badge-default-icon-color": color.badge.default.icon,
		"--card-badge-neutral-bg-color": color.badge.neutral?.bg,
		"--card-badge-neutral-dot-color": color.badge.neutral?.dot,
		"--card-badge-neutral-fg-color": color.badge.neutral?.fg,
		"--card-badge-neutral-icon-color": color.badge.neutral?.icon,
		"--card-badge-primary-bg-color": color.badge.primary.bg,
		"--card-badge-primary-dot-color": color.badge.primary.dot,
		"--card-badge-primary-fg-color": color.badge.primary.fg,
		"--card-badge-primary-icon-color": color.badge.primary.icon,
		"--card-badge-suggest-bg-color": color.badge.suggest?.bg,
		"--card-badge-suggest-dot-color": color.badge.suggest?.dot,
		"--card-badge-suggest-fg-color": color.badge.suggest?.fg,
		"--card-badge-suggest-icon-color": color.badge.suggest?.icon,
		"--card-badge-positive-bg-color": color.badge.positive.bg,
		"--card-badge-positive-dot-color": color.badge.positive.dot,
		"--card-badge-positive-fg-color": color.badge.positive.fg,
		"--card-badge-positive-icon-color": color.badge.positive.icon,
		"--card-badge-caution-bg-color": color.badge.caution.bg,
		"--card-badge-caution-dot-color": color.badge.caution.dot,
		"--card-badge-caution-fg-color": color.badge.caution.fg,
		"--card-badge-caution-icon-color": color.badge.caution.icon,
		"--card-badge-critical-bg-color": color.badge.critical.bg,
		"--card-badge-critical-dot-color": color.badge.critical.dot,
		"--card-badge-critical-fg-color": color.badge.critical.fg,
		"--card-badge-critical-icon-color": color.badge.critical.icon,
		"--card-code-bg-color": color.code.bg,
		"--card-code-fg-color": color.code.fg,
		"--card-fg-color": color.fg,
		"--card-icon-color": color.icon,
		"--card-kbd-bg-color": color.kbd.bg,
		"--card-kbd-border-color": color.kbd.border,
		"--card-kbd-fg-color": color.kbd.fg,
		"--card-link-fg-color": color.link.fg,
		"--card-muted-bg-color": color.muted.bg,
		"--card-muted-fg-color": color.muted.fg,
		"--card-skeleton-color-from": color.skeleton.from,
		"--card-skeleton-color-to": color.skeleton.to,
		"--card-bg2-color": color.muted.bg,
		"--card-link-color": color.link.fg,
		"--card-hairline-soft-color": color.border,
		"--card-hairline-hard-color": color.border
	};
}
function focusRingBorderStyle(border) {
	return `inset 0 0 0 ${border.width}px ${border.color}`;
}
function focusRingStyle(opts) {
	let { base, border, focusRing } = opts, focusRingOutsetWidth = focusRing.offset + focusRing.width, focusRingInsetWidth = 0 - focusRing.offset, bgColor = base ? base.bg : "var(--card-bg-color)";
	return [
		focusRingInsetWidth > 0 && `inset 0 0 0 ${focusRingInsetWidth}px var(--card-focus-ring-color)`,
		border && focusRingBorderStyle(border),
		focusRingInsetWidth < 0 && `0 0 0 ${0 - focusRingInsetWidth}px ${bgColor}`,
		focusRingOutsetWidth > 0 && `0 0 0 ${focusRingOutsetWidth}px var(--card-focus-ring-color)`
	].filter(Boolean).join(",");
}
function responsiveBorderStyle() {
	return [
		border,
		borderTop,
		borderRight,
		borderBottom,
		borderLeft
	];
}
function border(props) {
	let { card, media } = getTheme_v2(props.theme), borderStyle = `${card.border?.width ?? 1}px solid var(--card-border-color)`;
	return _responsive(media, props.$border, (value) => value ? { "&&": { border: borderStyle } } : { "&&": { border: 0 } });
}
function borderTop(props) {
	let { card, media } = getTheme_v2(props.theme), borderStyle = `${card.border?.width ?? 1}px solid var(--card-border-color)`;
	return _responsive(media, props.$borderTop, (value) => value ? { "&&": { borderTop: borderStyle } } : { "&&": { borderTop: 0 } });
}
function borderRight(props) {
	let { card, media } = getTheme_v2(props.theme), borderStyle = `${card.border?.width ?? 1}px solid var(--card-border-color)`;
	return _responsive(media, props.$borderRight, (value) => value ? { "&&": { borderRight: borderStyle } } : { "&&": { borderRight: 0 } });
}
function borderBottom(props) {
	let { card, media } = getTheme_v2(props.theme), borderStyle = `${card.border?.width ?? 1}px solid var(--card-border-color)`;
	return _responsive(media, props.$borderBottom, (value) => value ? { "&&": { borderBottom: borderStyle } } : { "&&": { borderBottom: 0 } });
}
function borderLeft(props) {
	let { card, media } = getTheme_v2(props.theme), borderStyle = `${card.border?.width ?? 1}px solid var(--card-border-color)`;
	return _responsive(media, props.$borderLeft, (value) => value ? { "&&": { borderLeft: borderStyle } } : { "&&": { borderLeft: 0 } });
}
function toBoxShadow(shadow, color) {
	return `${shadow.map(rem).join(" ")} ${color}`;
}
function shadowStyle(shadow, outlineWidth = 1) {
	return shadow ? { boxShadow: `${`0 0 0 ${rem(outlineWidth)} var(--card-shadow-outline-color)`}, ${toBoxShadow(shadow.umbra, "var(--card-shadow-umbra-color)")}, ${toBoxShadow(shadow.penumbra, "var(--card-shadow-penumbra-color)")}, ${toBoxShadow(shadow.ambient, "var(--card-shadow-ambient-color)")}` } : EMPTY_RECORD;
}
function responsiveShadowStyle(props) {
	let { card, media, shadow } = getTheme_v2(props.theme);
	return _responsive(media, props.$shadow, (index) => shadowStyle(shadow[index], card.shadow.outline));
}
/**
* Gets the global scope instance in a given environment.
*
* The strategy is to return the most modern, and if not, the most common:
* - The `globalThis` variable is the modern approach to accessing the global scope
* - The `window` variable is the global scope in a web browser
* - The `self` variable is the global scope in workers and others
* - The `global` variable is the global scope in Node.js
*/
function getGlobalScope() {
	if (typeof globalThis < "u") return globalThis;
	if (typeof window < "u") return window;
	if (typeof self < "u") return self;
	if (typeof global < "u") return global;
	throw Error("@sanity/ui: could not locate global scope");
}
var globalScope = getGlobalScope();
/**
* As `@sanity/ui` is declared as a dependency, and may be duplicated, sometimes across major versions
* it's critical that vital react contexts are shared even when there is a duplicate.
* If we used a model similar to `sanity` itself, or `styled-components`, this would be unnecessary as
* those libraries enforce single instances.
* Since we don't enforce it we have to support a sanity plugin being able to call hooks like `useToast`, and then
* read the context setup by `sanity`, which calls `ToastProvider`, even if the provider and hook are different instances in memory.
* It's also why it's vital that all changes to globally scoped providers remain fully backwards compatible to v1.
*/
function createGlobalScopedContext(key, defaultValue) {
	let symbol = Symbol.for(key);
	/**
	* Prevent errors about re-renders on React SSR on Next.js App Router
	*/
	if (typeof document > "u") {
		let context = (0, import_react.createContext)(defaultValue);
		return context.displayName = key, context;
	}
	return globalScope[symbol] = globalScope[symbol] || (0, import_react.createContext)(defaultValue), globalScope[symbol];
}
/**
* @internal
*/
var ThemeContext = createGlobalScopedContext("@sanity/ui/context/theme", null);
/**
* @public
*/
function ThemeProvider$1(props) {
	let $ = (0, import_compiler_runtime.c)(15), parentTheme = (0, import_react.useContext)(ThemeContext), { children } = props, scheme = props.scheme ?? (parentTheme?.scheme || "light"), rootTheme = props.theme ?? (parentTheme?.theme || null), tone = props.tone ?? (parentTheme?.tone || "default"), t0;
	bb0: {
		if (!rootTheme) {
			t0 = null;
			break bb0;
		}
		let t1;
		$[0] !== rootTheme || $[1] !== scheme || $[2] !== tone ? (t1 = {
			version: 0,
			theme: rootTheme,
			scheme,
			tone
		}, $[0] = rootTheme, $[1] = scheme, $[2] = tone, $[3] = t1) : t1 = $[3], t0 = t1;
	}
	let themeContext = t0, t1;
	bb1: {
		if (!rootTheme) {
			t1 = null;
			break bb1;
		}
		let t2;
		$[4] !== rootTheme || $[5] !== scheme || $[6] !== tone ? (t2 = getScopedTheme(rootTheme, scheme, tone), $[4] = rootTheme, $[5] = scheme, $[6] = tone, $[7] = t2) : t2 = $[7], t1 = t2;
	}
	let theme = t1;
	if (!theme) {
		let t2;
		return $[8] === Symbol.for("react.memo_cache_sentinel") ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", { children: "ThemeProvider: no \"theme\" property provided" }), $[8] = t2) : t2 = $[8], t2;
	}
	let t2;
	$[9] !== children || $[10] !== theme ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(rt, {
		theme,
		children
	}), $[9] = children, $[10] = theme, $[11] = t2) : t2 = $[11];
	let t3;
	return $[12] !== t2 || $[13] !== themeContext ? (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: themeContext,
		children: t2
	}), $[12] = t2, $[13] = themeContext, $[14] = t3) : t3 = $[14], t3;
}
/**
* @public
*/
function useRootTheme() {
	let value = (0, import_react.useContext)(ThemeContext);
	if (!value) throw Error("useRootTheme(): missing context value");
	return value;
}
/**
* @public
*/
function ThemeColorProvider(props) {
	let $ = (0, import_compiler_runtime.c)(5), { children, scheme, tone } = props, root = useRootTheme(), t0 = scheme || root.scheme, t1;
	return $[0] !== children || $[1] !== root.theme || $[2] !== t0 || $[3] !== tone ? (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider$1, {
		scheme: t0,
		theme: root.theme,
		tone,
		children
	}), $[0] = children, $[1] = root.theme, $[2] = t0, $[3] = tone, $[4] = t1) : t1 = $[4], t1;
}
function cardStyle(props) {
	return [cardBaseStyle(props), cardColorStyle(props)];
}
function cardBaseStyle(props) {
	let { $checkered } = props, { space } = getTheme_v2(props.theme);
	return ft`${$checkered && ft`background-size:${space[3]}px ${space[3]}px;background-position:50% 50%;background-image:var(--card-bg-image);`} &[data-as='button']{-webkit-font-smoothing:inherit;appearance:none;outline:none;font:inherit;text-align:inherit;border:0;width:-moz-available;width:-webkit-fill-available;width:stretch;}&[data-as='a']{outline:none;text-decoration:none;}&[data-as='pre']{font:inherit;}`;
}
function cardColorStyle(props) {
	let { $checkered, $focusRing, $muted } = props, { card, color, style } = getTheme_v2(props.theme), border = {
		width: card.border.width,
		color: "var(--card-border-color)"
	};
	return ft`color-scheme:${color._dark ? "dark" : "light"};${_cardColorStyle(color, color, $checkered)} background-color:${$muted ? "var(--card-muted-bg-color)" : "var(--card-bg-color)"};color:var(--card-fg-color);&[data-as='button']{--card-focus-ring-box-shadow:none;cursor:default;box-shadow:var(--card-focus-ring-box-shadow);&:disabled{${_cardColorStyle(color, color.selectable.default.disabled, $checkered)}}&:not(:disabled){&[data-pressed]{${_cardColorStyle(color, color.selectable.default.pressed, $checkered)}}&[data-selected]{${_cardColorStyle(color, color.selectable.default.selected, $checkered)}}@media (hover:hover){&:not([data-pressed]):not([data-selected]){&[data-hovered],&:hover{${_cardColorStyle(color, color.selectable.default.hovered, $checkered)}}&:active{${_cardColorStyle(color, color.selectable.default.pressed, $checkered)}}}}&:focus-visible{--card-focus-ring-box-shadow:${$focusRing ? focusRingStyle({
		base: color,
		border,
		focusRing: card.focusRing
	}) : void 0};}}}&[data-as='a']{cursor:pointer;box-shadow:var(--card-focus-ring-box-shadow);&[data-disabled]{${_cardColorStyle(color, color.selectable.default.disabled, $checkered)}}&:not([data-disabled]){&[data-pressed]{${_cardColorStyle(color, color.selectable.default.pressed, $checkered)}}&[data-selected]{${_cardColorStyle(color, color.selectable.default.selected, $checkered)}}@media (hover:hover){&:not([data-pressed]):not([data-selected]){&[data-hovered],&:hover{${_cardColorStyle(color, color.selectable.default.hovered, $checkered)}}&:active{${_cardColorStyle(color, color.selectable.default.pressed, $checkered)}}}}&:focus-visible{--card-focus-ring-box-shadow:${$focusRing ? focusRingStyle({
		base: color,
		border,
		focusRing: card.focusRing
	}) : void 0};}}}${style?.card?.root}`;
}
var StyledCard = /* @__PURE__ */ gt(Box).withConfig({
	displayName: "StyledCard",
	componentId: "sc-immb6s-0"
})(responsiveBorderStyle, responsiveRadiusStyle, responsiveShadowStyle, cardStyle);
function CardComponent(props) {
	let $ = (0, import_compiler_runtime.c)(57), asProp, border, borderBottom, borderLeft, borderRight, borderTop, muted, pressed, ref, restProps, scheme, selected, shadow, t0, t1, t2, t3;
	$[0] === props ? (asProp = $[1], border = $[2], borderBottom = $[3], borderLeft = $[4], borderRight = $[5], borderTop = $[6], muted = $[7], pressed = $[8], ref = $[9], restProps = $[10], scheme = $[11], selected = $[12], shadow = $[13], t0 = $[14], t1 = $[15], t2 = $[16], t3 = $[17]) : ({__unstable_checkered: t0, __unstable_focusRing: t1, as: asProp, border, borderTop, borderRight, borderBottom, borderLeft, muted, pressed, radius: t2, ref, scheme, selected, shadow, tone: t3, ...restProps} = props, $[0] = props, $[1] = asProp, $[2] = border, $[3] = borderBottom, $[4] = borderLeft, $[5] = borderRight, $[6] = borderTop, $[7] = muted, $[8] = pressed, $[9] = ref, $[10] = restProps, $[11] = scheme, $[12] = selected, $[13] = shadow, $[14] = t0, $[15] = t1, $[16] = t2, $[17] = t3);
	let checkered = t0 !== void 0 && t0, focusRing = t1 !== void 0 && t1, radius = t2 === void 0 ? 0 : t2, toneProp = t3 === void 0 ? "default" : t3, as = (0, import_react_is.isValidElementType)(asProp) ? asProp : "div", rootTheme = useRootTheme(), tone = toneProp === "inherit" ? rootTheme.tone : toneProp, t4 = typeof as == "string" ? as : void 0, t5 = rootTheme.scheme, t6;
	$[18] === border ? t6 = $[19] : (t6 = _getArrayProp(border), $[18] = border, $[19] = t6);
	let t7;
	$[20] === borderTop ? t7 = $[21] : (t7 = _getArrayProp(borderTop), $[20] = borderTop, $[21] = t7);
	let t8;
	$[22] === borderRight ? t8 = $[23] : (t8 = _getArrayProp(borderRight), $[22] = borderRight, $[23] = t8);
	let t9;
	$[24] === borderBottom ? t9 = $[25] : (t9 = _getArrayProp(borderBottom), $[24] = borderBottom, $[25] = t9);
	let t10;
	$[26] === borderLeft ? t10 = $[27] : (t10 = _getArrayProp(borderLeft), $[26] = borderLeft, $[27] = t10);
	let t11 = muted ?? !1, t12;
	$[28] === radius ? t12 = $[29] : (t12 = _getArrayProp(radius), $[28] = radius, $[29] = t12);
	let t13;
	$[30] === shadow ? t13 = $[31] : (t13 = _getArrayProp(shadow), $[30] = shadow, $[31] = t13);
	let t14 = checkered ? "" : void 0, t15 = pressed ? "" : void 0, t16 = selected ? "" : void 0, t17;
	$[32] !== as || $[33] !== checkered || $[34] !== focusRing || $[35] !== ref || $[36] !== restProps || $[37] !== rootTheme.scheme || $[38] !== selected || $[39] !== t10 || $[40] !== t11 || $[41] !== t12 || $[42] !== t13 || $[43] !== t14 || $[44] !== t15 || $[45] !== t16 || $[46] !== t4 || $[47] !== t6 || $[48] !== t7 || $[49] !== t8 || $[50] !== t9 || $[51] !== tone ? (t17 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledCard, {
		"data-as": t4,
		"data-scheme": t5,
		"data-ui": "Card",
		"data-tone": tone,
		...restProps,
		$border: t6,
		$borderTop: t7,
		$borderRight: t8,
		$borderBottom: t9,
		$borderLeft: t10,
		$checkered: checkered,
		$focusRing: focusRing,
		$muted: t11,
		$radius: t12,
		$shadow: t13,
		$tone: tone,
		"data-checkered": t14,
		"data-pressed": t15,
		"data-selected": t16,
		forwardedAs: as,
		ref,
		selected
	}), $[32] = as, $[33] = checkered, $[34] = focusRing, $[35] = ref, $[36] = restProps, $[37] = rootTheme.scheme, $[38] = selected, $[39] = t10, $[40] = t11, $[41] = t12, $[42] = t13, $[43] = t14, $[44] = t15, $[45] = t16, $[46] = t4, $[47] = t6, $[48] = t7, $[49] = t8, $[50] = t9, $[51] = tone, $[52] = t17) : t17 = $[52];
	let t18;
	return $[53] !== scheme || $[54] !== t17 || $[55] !== tone ? (t18 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeColorProvider, {
		scheme,
		tone,
		children: t17
	}), $[53] = scheme, $[54] = t17, $[55] = tone, $[56] = t18) : t18 = $[56], t18;
}
/**
* The `Card` component acts much like a `Box`, but with a background and foreground color.
* Components within a `Card` inherit its colors.
*
* @public
*/
var Card = CardComponent;
function _getMediaQuery(media, index) {
	return index === 0 ? `screen and (max-width: ${media[index] - 1}px)` : index === media.length ? `screen and (min-width: ${media[index - 1]}px)` : `screen and (min-width: ${media[index - 1]}px) and (max-width: ${media[index] - 1}px)`;
}
function _createMediaStore(media) {
	let mediaLen = media.length, sizes, getSizes = () => {
		if (!sizes) {
			sizes = [];
			for (let index = mediaLen; index > -1; --index) {
				let mediaQuery = _getMediaQuery(media, index);
				sizes.push({
					index,
					mq: window.matchMedia(mediaQuery)
				});
			}
		}
		return sizes;
	}, getSnapshot = () => {
		for (let { index, mq } of getSizes()) if (mq.matches) return index;
		return 0;
	}, subscribe = (onStoreChange) => {
		let disposeFns = [];
		for (let { mq } of getSizes()) {
			let handleChange = () => {
				mq.matches && onStoreChange();
			};
			mq.addEventListener("change", handleChange), disposeFns.push(() => mq.removeEventListener("change", handleChange));
		}
		return () => {
			for (let disposeFn of disposeFns) disposeFn();
		};
	};
	return {
		getSnapshot,
		subscribe
	};
}
/**
* Only called during server-side rendering, and hydration if using hydrateRoot
* Since the server environment doesn't have access to the DOM, we can't determine the current value of the media query
* and we assume `(prefers-color-scheme: light)` since it's the most common scheme
*
* @link https://beta.reactjs.org/apis/react/useSyncExternalStore#adding-support-for-server-rendering
*/
function getServerSnapshot() {
	return 0;
}
/**
* This API might change. DO NOT USE IN PRODUCTION.
* @beta
*/
function useMediaIndex() {
	let $ = (0, import_compiler_runtime.c)(2), { media } = useTheme_v2(), t0;
	$[0] === media ? t0 = $[1] : (t0 = _createMediaStore(media), $[0] = media, $[1] = t0);
	let store = t0;
	return (0, import_react.useSyncExternalStore)(store.subscribe, store.getSnapshot, getServerSnapshot);
}
/**
* Efficiently subscribes to `window.matchMedia` queries
*
* @param getServerSnapshot - Only called during server-side rendering, and hydration if using hydrateRoot. Required if the hook is called during SSR (https://react.dev/reference/react/useSyncExternalStore#adding-support-for-server-rendering)
*
* @public
*/
function useMatchMedia(mediaQueryString, getServerSnapshot) {
	let $ = (0, import_compiler_runtime.c)(4);
	(0, import_react.useDebugValue)(mediaQueryString);
	let t0;
	$[0] === mediaQueryString ? t0 = $[1] : (t0 = (onStoreChange) => {
		let media = window.matchMedia(mediaQueryString);
		return media.addEventListener("change", onStoreChange), () => media.removeEventListener("change", onStoreChange);
	}, $[0] = mediaQueryString, $[1] = t0);
	let t1;
	return $[2] === mediaQueryString ? t1 = $[3] : (t1 = () => window.matchMedia(mediaQueryString).matches, $[2] = mediaQueryString, $[3] = t1), (0, import_react.useSyncExternalStore)(t0, t1, getServerSnapshot);
}
/**
* Returns true if motion should be reduced
*
* @param getServerSnapshot - Only called during server-side rendering, and hydration if using hydrateRoot. Since the server environment doesn't have access to the DOM, we can't determine the current value of the media query and we assume `(prefers-reduced-motion: no-preference)` since it's the most common scheme (https://react.dev/reference/react/useSyncExternalStore#adding-support-for-server-rendering)
*
* If you persist the detected preference in a cookie or a header then you may implement your own server snapshot to read it.
* Chrome supports reading the `prefers-reduced-motion` media query from a header if the server response: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Motion
* @example https://gist.github.com/stipsan/0c0f839a27842249cada893e9fb7767b
*
* @public
*/
function usePrefersReducedMotion(t0) {
	return useMatchMedia("(prefers-reduced-motion: reduce)", t0 === void 0 ? _temp$7 : t0);
}
function _temp$7() {
	return !1;
}
function isRecord$1(value) {
	return !(!value || typeof value != "object" || Array.isArray(value));
}
function getLayerContext(contextValue) {
	if (!isRecord$1(contextValue) || contextValue.version !== 0) throw Error("the context value is not compatible");
	if (!contextValue) throw Error("components using `useLayer()` should be wrapped in a <LayerProvider>.");
	if (contextValue.version === 0) return contextValue;
	throw Error("could not get layer context");
}
var LayerContext = createGlobalScopedContext("@sanity/ui/context/layer", null);
var initialLayerState = {
	childLayers: /* @__PURE__ */ new Map(),
	childrenWithoutLevel: 0
};
/** @internal */
function layerReducer(state, action) {
	let { level } = action;
	switch (action.type) {
		case "child/register": {
			if (level === void 0) return {
				...state,
				childrenWithoutLevel: state.childrenWithoutLevel + 1
			};
			let childLayers = new Map(state.childLayers);
			return childLayers.set(level, (childLayers.get(level) ?? 0) + 1), {
				...state,
				childLayers
			};
		}
		case "child/unregister": {
			if (level === void 0) return {
				...state,
				childrenWithoutLevel: state.childrenWithoutLevel - 1
			};
			let childLayers = new Map(state.childLayers), count = childLayers.get(level) ?? 0;
			return count === 1 ? childLayers.delete(level) : childLayers.set(level, count - 1), {
				...state,
				childLayers
			};
		}
		default: return state;
	}
}
/**
* @public
*/
function LayerProvider(props) {
	let $ = (0, import_compiler_runtime.c)(19), { children, zOffset: t0 } = props, zOffsetProp = t0 === void 0 ? 0 : t0, parentContextValue = (0, import_react.useContext)(LayerContext), t1;
	$[0] === parentContextValue ? t1 = $[1] : (t1 = parentContextValue && getLayerContext(parentContextValue), $[0] = parentContextValue, $[1] = t1);
	let parent = t1, parentRegisterChild = parent?.registerChild, level = (parent?.level ?? 0) + 1, t2;
	$[2] === zOffsetProp ? t2 = $[3] : (t2 = _getArrayProp(zOffsetProp), $[2] = zOffsetProp, $[3] = t2);
	let zOffset = t2, maxMediaIndex = zOffset.length - 1, mediaIndex = Math.min(useMediaIndex(), maxMediaIndex), zIndex = parent ? parent.zIndex + zOffset[mediaIndex] : zOffset[mediaIndex], [t3, dispatch] = (0, import_react.useReducer)(layerReducer, initialLayerState), { childLayers, childrenWithoutLevel } = t3, size = childLayers.size + childrenWithoutLevel, isTopLayer = size === 0, t4;
	$[4] === parentRegisterChild ? t4 = $[5] : (t4 = (childLevel) => {
		let parentDispose = parentRegisterChild?.(childLevel);
		return dispatch({
			type: "child/register",
			level: childLevel
		}), () => {
			dispatch({
				type: "child/unregister",
				level: childLevel
			}), parentDispose?.();
		};
	}, $[4] = parentRegisterChild, $[5] = t4);
	let registerChild = t4, t5, t6;
	$[6] !== level || $[7] !== parentRegisterChild ? (t5 = () => parentRegisterChild?.(level), t6 = [level, parentRegisterChild], $[6] = level, $[7] = parentRegisterChild, $[8] = t5, $[9] = t6) : (t5 = $[8], t6 = $[9]), (0, import_react.useEffect)(t5, t6);
	let t7;
	$[10] !== isTopLayer || $[11] !== level || $[12] !== registerChild || $[13] !== size || $[14] !== zIndex ? (t7 = {
		version: 0,
		isTopLayer,
		level,
		registerChild,
		size,
		zIndex
	}, $[10] = isTopLayer, $[11] = level, $[12] = registerChild, $[13] = size, $[14] = zIndex, $[15] = t7) : t7 = $[15];
	let value = t7, t8;
	return $[16] !== children || $[17] !== value ? (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayerContext.Provider, {
		value,
		children
	}), $[16] = children, $[17] = value, $[18] = t8) : t8 = $[18], t8;
}
/**
* @public
*/
function useLayer() {
	let $ = (0, import_compiler_runtime.c)(2), value = (0, import_react.useContext)(LayerContext);
	if (!value) throw Error("useLayer(): missing context value");
	try {
		let t1;
		return $[0] === value ? t1 = $[1] : (t1 = getLayerContext(value), $[0] = value, $[1] = t1), t1;
	} catch (t0) {
		let err = t0;
		throw err instanceof Error ? Error(`useLayer(): ${err.message}`) : Error(`useLayer(): ${err}`);
	}
}
//#endregion
//#region node_modules/@sanity/ui/dist/flex-JVQRW_e_.js
var BASE_STYLE$2 = { "&&:not([hidden])": { display: "flex" } };
function responsiveFlexStyle() {
	return [
		BASE_STYLE$2,
		responsiveFlexAlignStyle,
		responsiveFlexGapStyle,
		responsiveFlexWrapStyle,
		responsiveFlexJustifyStyle,
		responsiveFlexDirectionStyle
	];
}
function responsiveFlexAlignStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$align, (align) => ({ alignItems: align }));
}
function responsiveFlexGapStyle(props) {
	let { media, space } = getTheme_v2(props.theme);
	return _responsive(media, props.$gap, (gap) => ({ gap: gap ? rem(space[gap]) : void 0 }));
}
function responsiveFlexWrapStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$wrap, (wrap) => ({ flexWrap: wrap }));
}
function responsiveFlexJustifyStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$justify, (justify) => ({ justifyContent: justify }));
}
function responsiveFlexDirectionStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$direction, (direction) => ({ flexDirection: direction }));
}
var StyledFlex = /* @__PURE__ */ gt(Box).withConfig({
	displayName: "StyledFlex",
	componentId: "sc-f161j9-0"
})(flexItemStyle, responsiveFlexStyle);
function FlexComponent(props) {
	let $ = (0, import_compiler_runtime.c)(28), align, as, gap, justify, ref, restProps, t0, wrap;
	$[0] === props ? (align = $[1], as = $[2], gap = $[3], justify = $[4], ref = $[5], restProps = $[6], t0 = $[7], wrap = $[8]) : ({align, as, direction: t0, gap, justify, ref, wrap, ...restProps} = props, $[0] = props, $[1] = align, $[2] = as, $[3] = gap, $[4] = justify, $[5] = ref, $[6] = restProps, $[7] = t0, $[8] = wrap);
	let direction = t0 === void 0 ? "row" : t0, t1;
	$[9] === align ? t1 = $[10] : (t1 = _getArrayProp(align), $[9] = align, $[10] = t1);
	let t2;
	$[11] === direction ? t2 = $[12] : (t2 = _getArrayProp(direction), $[11] = direction, $[12] = t2);
	let t3;
	$[13] === gap ? t3 = $[14] : (t3 = _getArrayProp(gap), $[13] = gap, $[14] = t3);
	let t4;
	$[15] === justify ? t4 = $[16] : (t4 = _getArrayProp(justify), $[15] = justify, $[16] = t4);
	let t5;
	$[17] === wrap ? t5 = $[18] : (t5 = _getArrayProp(wrap), $[17] = wrap, $[18] = t5);
	let t6;
	return $[19] !== as || $[20] !== ref || $[21] !== restProps || $[22] !== t1 || $[23] !== t2 || $[24] !== t3 || $[25] !== t4 || $[26] !== t5 ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledFlex, {
		"data-ui": "Flex",
		...restProps,
		$align: t1,
		$direction: t2,
		$gap: t3,
		$justify: t4,
		$wrap: t5,
		forwardedAs: as,
		ref
	}), $[19] = as, $[20] = ref, $[21] = restProps, $[22] = t1, $[23] = t2, $[24] = t3, $[25] = t4, $[26] = t5, $[27] = t6) : t6 = $[27], t6;
}
/**
* The `Flex` component is a wrapper component for flexible elements (`Box`, `Card` and `Flex`).
*
* @public
*/
var Flex = FlexComponent;
//#endregion
//#region node_modules/@sanity/ui/dist/responsiveFont-CilwaORG.js
/**
* A utility function getting responsive font styles.
* @internal
*/
function responsiveFont(fontKey, props) {
	let { $size, $weight } = props, { font, media } = getTheme_v2(props.theme), { family, sizes, weights } = font[fontKey], fontWeight = $weight && weights[$weight] || weights.regular, defaultSize = sizes[2], base = {
		position: "relative",
		fontFamily: family,
		fontWeight: `${fontWeight}`,
		padding: "1px 0",
		margin: 0,
		"&:before": {
			content: "\"\"",
			display: "block",
			height: 0
		},
		"&:after": {
			content: "\"\"",
			display: "block",
			height: 0
		},
		"& > code, & > span": { display: "block" },
		"&:not([hidden])": { display: "block" }
	};
	return $size ? [base, ..._responsive(media, $size, (sizeIndex) => fontSize(sizes[sizeIndex] || defaultSize))] : (responsiveFont.warned ||= (console.warn("No size specified for responsive font", {
		fontKey,
		$size,
		props,
		base
	}), !0), [base]);
}
function fontSize(size) {
	let { ascenderHeight, descenderHeight, fontSize, iconSize, letterSpacing, lineHeight } = size, negHeight = ascenderHeight + descenderHeight, capHeight = lineHeight - negHeight, iconOffset = (capHeight - iconSize) / 2, customIconSize = Math.floor(fontSize * 1.125 / 2) * 2 + 1, customIconOffset = (capHeight - customIconSize) / 2;
	return {
		fontSize: rem(fontSize),
		lineHeight: `calc(${lineHeight} / ${fontSize})`,
		letterSpacing: rem(letterSpacing),
		transform: `translateY(${rem(descenderHeight)})`,
		"&:before": { marginTop: `calc(${rem(0 - negHeight)} - 1px)` },
		"&:after": { marginBottom: "-1px" },
		"& svg:not([data-sanity-icon])": {
			fontSize: `calc(${customIconSize} / 16 * 1rem)`,
			margin: rem(customIconOffset)
		},
		"& [data-sanity-icon]": {
			fontSize: `calc(${iconSize} / 16 * 1rem)`,
			margin: rem(iconOffset)
		}
	};
}
//#endregion
//#region node_modules/@sanity/ui/dist/stack-Bue-701Y.js
/**
* Get responsive text align styles.
* @internal
*/
function responsiveTextAlignStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$align, (textAlign) => ({ textAlign }));
}
/**
* Get responsive CSS for the `text` font style.
* @internal
*/
function responsiveTextFont(props) {
	return responsiveFont("text", props);
}
var spanWithTextOverflow = "elmvdc0";
/** @internal */
function SpanWithTextOverflow(props) {
	let $ = (0, import_compiler_runtime.c)(2), t0;
	return $[0] === props.children ? t0 = $[1] : (t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: spanWithTextOverflow,
		children: props.children
	}), $[0] = props.children, $[1] = t0), t0;
}
function textBaseStyle(props) {
	let { $accent, $muted } = props, { font } = getTheme_v2(props.theme);
	return ft`color:var(--card-fg-color);${$accent && ft`color:var(--card-accent-fg-color);`} ${$muted && ft`color:var(--card-muted-fg-color);`} & code{font-family:${font.code.family};border-radius:1px;background-color:var(--card-code-bg-color);color:var(--card-code-fg-color);}& a{text-decoration:none;border-radius:1px;color:var(--card-link-color);outline:none;@media (hover:hover){&:hover{text-decoration:underline;}}&:focus{box-shadow:0 0 0 1px var(--card-bg-color),0 0 0 3px var(--card-focus-ring-color);}&:focus:not(:focus-visible){box-shadow:none;}}& strong{font-weight:${font.text.weights.bold};}& svg{display:inline;max-width:unset;}& [data-sanity-icon]{vertical-align:baseline;color:var(--card-icon-color);& path{vector-effect:non-scaling-stroke !important;}}`;
}
var StyledText = /* @__PURE__ */ gt.div.withConfig({
	displayName: "StyledText",
	componentId: "sc-300p63-0"
})(responsiveTextFont, responsiveTextAlignStyle, textBaseStyle);
function TextComponent(props) {
	let $ = (0, import_compiler_runtime.c)(27), align, childrenProp, ref, restProps, t0, t1, t2, textOverflow, weight;
	$[0] === props ? (align = $[1], childrenProp = $[2], ref = $[3], restProps = $[4], t0 = $[5], t1 = $[6], t2 = $[7], textOverflow = $[8], weight = $[9]) : ({accent: t0, align, children: childrenProp, muted: t1, ref, size: t2, textOverflow, weight, ...restProps} = props, $[0] = props, $[1] = align, $[2] = childrenProp, $[3] = ref, $[4] = restProps, $[5] = t0, $[6] = t1, $[7] = t2, $[8] = textOverflow, $[9] = weight);
	let accent = t0 !== void 0 && t0, muted = t1 !== void 0 && t1, size = t2 === void 0 ? 2 : t2, children = childrenProp;
	if (textOverflow === "ellipsis") {
		let t3;
		$[10] === children ? t3 = $[11] : (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpanWithTextOverflow, { children }), $[10] = children, $[11] = t3), children = t3;
	}
	let t3;
	$[12] === align ? t3 = $[13] : (t3 = _getArrayProp(align), $[12] = align, $[13] = t3);
	let t4;
	$[14] === size ? t4 = $[15] : (t4 = _getArrayProp(size), $[14] = size, $[15] = t4);
	let t5;
	$[16] === children ? t5 = $[17] : (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }), $[16] = children, $[17] = t5);
	let t6;
	return $[18] !== accent || $[19] !== muted || $[20] !== ref || $[21] !== restProps || $[22] !== t3 || $[23] !== t4 || $[24] !== t5 || $[25] !== weight ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledText, {
		"data-ui": "Text",
		...restProps,
		$accent: accent,
		$align: t3,
		$muted: muted,
		ref,
		$size: t4,
		$weight: weight,
		children: t5
	}), $[18] = accent, $[19] = muted, $[20] = ref, $[21] = restProps, $[22] = t3, $[23] = t4, $[24] = t5, $[25] = weight, $[26] = t6) : t6 = $[26], t6;
}
/**
* The `Text` component is an agile, themed typographic element.
*
* @public
*/
var Text = TextComponent;
var BASE_STYLE$1 = {
	"&&:not([hidden])": { display: "grid" },
	"&[data-as=\"ul\"],&[data-as=\"ol\"]": { listStyle: "none" },
	gridTemplateColumns: "minmax(0, 1fr)",
	gridAutoRows: "min-content"
};
function stackBaseStyle() {
	return BASE_STYLE$1;
}
function responsiveStackSpaceStyle(props) {
	let { media, space } = getTheme_v2(props.theme);
	return _responsive(media, props.$space, (spaceIndex) => ({ gridGap: rem(space[spaceIndex]) }));
}
var StyledStack = /* @__PURE__ */ gt(Box).withConfig({
	displayName: "StyledStack",
	componentId: "sc-z8vnhh-0"
})(stackBaseStyle, responsiveStackSpaceStyle);
function StackComponent(props) {
	let $ = (0, import_compiler_runtime.c)(13), as, gap, ref, restProps;
	$[0] === props ? (as = $[1], gap = $[2], ref = $[3], restProps = $[4]) : ({as, gap, ref, ...restProps} = props, $[0] = props, $[1] = as, $[2] = gap, $[3] = ref, $[4] = restProps);
	let t0 = typeof as == "string" ? as : void 0, t1;
	$[5] === gap ? t1 = $[6] : (t1 = _getArrayProp(gap), $[5] = gap, $[6] = t1);
	let t2;
	return $[7] !== as || $[8] !== ref || $[9] !== restProps || $[10] !== t0 || $[11] !== t1 ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledStack, {
		"data-as": t0,
		"data-ui": "Stack",
		...restProps,
		$space: t1,
		forwardedAs: as,
		ref
	}), $[7] = as, $[8] = ref, $[9] = restProps, $[10] = t0, $[11] = t1, $[12] = t2) : t2 = $[12], t2;
}
/**
* The `Stack` component is used to place elements on top of each other.
*
* @public
*/
var Stack = StackComponent;
//#endregion
//#region node_modules/@sanity/ui/dist/button-D8Ge5vTw.js
var spinnerIcon = "_1b6o2se1";
/**
* Indicate that something is loading for an indeterminate amount of time.
*
* @public
*/
function Spinner(props) {
	let $ = (0, import_compiler_runtime.c)(3), t0;
	$[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpinnerIcon, { className: spinnerIcon }), $[0] = t0) : t0 = $[0];
	let t1;
	return $[1] === props ? t1 = $[2] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
		"data-ui": "Spinner",
		...props,
		children: t0
	}), $[1] = props, $[2] = t1), t1;
}
/**
* @internal
*/
function buttonBaseStyles(props) {
	let { $width } = props, { style } = getTheme_v2(props.theme);
	return ft`${style?.button};-webkit-font-smoothing:inherit;appearance:none;display:inline-flex;align-items:center;font:inherit;border:0;outline:none;user-select:none;text-decoration:none;border:0;box-sizing:border-box;padding:0;margin:0;white-space:nowrap;text-align:left;position:relative;vertical-align:top;${$width === "fill" && ft`width:-moz-available;width:-webkit-fill-available;width:stretch;`} & > span{display:block;flex:1;min-width:0;border-radius:inherit;}&::-moz-focus-inner{border:0;padding:0;}`;
}
function combineBoxShadow(...boxShadows) {
	return boxShadows.filter(Boolean).join(",");
}
/**
* @internal
*/
function buttonColorStyles(props) {
	let { $mode } = props, { button, color: baseColor, style } = getTheme_v2(props.theme);
	props.$mode;
	let mode = baseColor.button[$mode] || baseColor.button.default, color = mode[props.$tone] || mode.default, border = {
		width: button.border.width,
		color: "var(--card-border-color)"
	};
	return [
		_cardColorStyle(baseColor, color.enabled),
		{
			backgroundColor: "var(--card-bg-color)",
			color: "var(--card-fg-color)",
			boxShadow: focusRingBorderStyle(border),
			"&:disabled, &[data-disabled=\"true\"]": _cardColorStyle(baseColor, color.disabled),
			"&:not([data-disabled='true'])": {
				boxShadow: combineBoxShadow(focusRingBorderStyle(border), void 0),
				"&:focus": { boxShadow: focusRingStyle({
					base: baseColor,
					border: {
						width: 2,
						color: baseColor.bg
					},
					focusRing: button.focusRing
				}) },
				"&:focus:not(:focus-visible)": { boxShadow: combineBoxShadow(focusRingBorderStyle(border), void 0) },
				"@media (hover: hover)": {
					"&:hover": _cardColorStyle(baseColor, color.hovered),
					"&:active": _cardColorStyle(baseColor, color.pressed),
					"&[data-hovered]": _cardColorStyle(baseColor, color.hovered)
				},
				"&[data-selected]": _cardColorStyle(baseColor, color.pressed)
			}
		},
		style?.button?.root
	].filter(Boolean);
}
var StyledButton = /* @__PURE__ */ gt.button.withConfig({
	displayName: "StyledButton",
	componentId: "sc-d920a4-0"
})(responsiveRadiusStyle, buttonBaseStyles, buttonColorStyles);
function ButtonComponent(props) {
	let $ = (0, import_compiler_runtime.c)(87), IconComponent, IconRightComponent, children, disabled, loading, paddingBottomProp, paddingLeftProp, paddingRightProp, paddingTopProp, paddingXProp, paddingYProp, ref, restProps, selected, t0, t1, t2, t3, t4, t5, t6, t7, t8, text, textAlign, textWeight, width;
	$[0] === props ? (IconComponent = $[1], IconRightComponent = $[2], children = $[3], disabled = $[4], loading = $[5], paddingBottomProp = $[6], paddingLeftProp = $[7], paddingRightProp = $[8], paddingTopProp = $[9], paddingXProp = $[10], paddingYProp = $[11], ref = $[12], restProps = $[13], selected = $[14], t0 = $[15], t1 = $[16], t2 = $[17], t3 = $[18], t4 = $[19], t5 = $[20], t6 = $[21], t7 = $[22], t8 = $[23], text = $[24], textAlign = $[25], textWeight = $[26], width = $[27]) : ({children, disabled, ref, fontSize: t0, icon: IconComponent, iconRight: IconRightComponent, justify: t1, loading, mode: t2, padding: t3, paddingX: paddingXProp, paddingY: paddingYProp, paddingTop: paddingTopProp, paddingBottom: paddingBottomProp, paddingLeft: paddingLeftProp, paddingRight: paddingRightProp, radius: t4, selected, gap: t5, text, textAlign, textWeight, tone: t6, type: t7, muted: t8, width, ...restProps} = props, $[0] = props, $[1] = IconComponent, $[2] = IconRightComponent, $[3] = children, $[4] = disabled, $[5] = loading, $[6] = paddingBottomProp, $[7] = paddingLeftProp, $[8] = paddingRightProp, $[9] = paddingTopProp, $[10] = paddingXProp, $[11] = paddingYProp, $[12] = ref, $[13] = restProps, $[14] = selected, $[15] = t0, $[16] = t1, $[17] = t2, $[18] = t3, $[19] = t4, $[20] = t5, $[21] = t6, $[22] = t7, $[23] = t8, $[24] = text, $[25] = textAlign, $[26] = textWeight, $[27] = width);
	let fontSize = t0 === void 0 ? 1 : t0, justifyProp = t1 === void 0 ? "center" : t1, mode = t2 === void 0 ? "default" : t2, paddingProp = t3 === void 0 ? 3 : t3, radiusProp = t4 === void 0 ? 2 : t4, gap = t5 === void 0 ? 3 : t5, tone = t6 === void 0 ? "default" : t6, type = t7 === void 0 ? "button" : t7, muted = t8 !== void 0 && t8, { button } = useTheme_v2(), t9;
	$[28] === justifyProp ? t9 = $[29] : (t9 = _getArrayProp(justifyProp), $[28] = justifyProp, $[29] = t9);
	let justify = t9, t10;
	$[30] === paddingProp ? t10 = $[31] : (t10 = _getArrayProp(paddingProp), $[30] = paddingProp, $[31] = t10);
	let padding = t10, t11;
	$[32] === paddingXProp ? t11 = $[33] : (t11 = _getArrayProp(paddingXProp), $[32] = paddingXProp, $[33] = t11);
	let paddingX = t11, t12;
	$[34] === paddingYProp ? t12 = $[35] : (t12 = _getArrayProp(paddingYProp), $[34] = paddingYProp, $[35] = t12);
	let paddingY = t12, t13;
	$[36] === paddingTopProp ? t13 = $[37] : (t13 = _getArrayProp(paddingTopProp), $[36] = paddingTopProp, $[37] = t13);
	let paddingTop = t13, t14;
	$[38] === paddingBottomProp ? t14 = $[39] : (t14 = _getArrayProp(paddingBottomProp), $[38] = paddingBottomProp, $[39] = t14);
	let paddingBottom = t14, t15;
	$[40] === paddingLeftProp ? t15 = $[41] : (t15 = _getArrayProp(paddingLeftProp), $[40] = paddingLeftProp, $[41] = t15);
	let paddingLeft = t15, t16;
	$[42] === paddingRightProp ? t16 = $[43] : (t16 = _getArrayProp(paddingRightProp), $[42] = paddingRightProp, $[43] = t16);
	let paddingRight = t16, t17;
	$[44] === radiusProp ? t17 = $[45] : (t17 = _getArrayProp(radiusProp), $[44] = radiusProp, $[45] = t17);
	let radius = t17, t18;
	$[46] === gap ? t18 = $[47] : (t18 = _getArrayProp(gap), $[46] = gap, $[47] = t18);
	let spacing = t18, t19;
	$[48] !== padding || $[49] !== paddingBottom || $[50] !== paddingLeft || $[51] !== paddingRight || $[52] !== paddingTop || $[53] !== paddingX || $[54] !== paddingY ? (t19 = {
		padding,
		paddingX,
		paddingY,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight
	}, $[48] = padding, $[49] = paddingBottom, $[50] = paddingLeft, $[51] = paddingRight, $[52] = paddingTop, $[53] = paddingX, $[54] = paddingY, $[55] = t19) : t19 = $[55];
	let boxProps = t19, t20 = !!(loading || disabled), t21 = selected ? "" : void 0, t22 = !!(loading || disabled), t23;
	$[56] === loading ? t23 = $[57] : (t23 = !!loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "_2mi48t0",
		"data-ui": "ButtonLoading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {})
	}), $[56] = loading, $[57] = t23);
	let t24;
	$[58] !== IconComponent || $[59] !== IconRightComponent || $[60] !== boxProps || $[61] !== button || $[62] !== fontSize || $[63] !== justify || $[64] !== muted || $[65] !== spacing || $[66] !== text || $[67] !== textAlign || $[68] !== textWeight ? (t24 = (IconComponent || text || IconRightComponent) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		as: "span",
		...boxProps,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
			as: "span",
			justify,
			gap: spacing,
			children: [
				IconComponent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
					size: fontSize,
					children: [(0, import_react.isValidElement)(IconComponent) && IconComponent, (0, import_react_is.isValidElementType)(IconComponent) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, {})]
				}),
				text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					muted,
					align: textAlign,
					size: fontSize,
					textOverflow: "ellipsis",
					weight: textWeight ?? button.textWeight,
					children: text
				}) }),
				IconRightComponent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
					size: fontSize,
					children: [(0, import_react.isValidElement)(IconRightComponent) && IconRightComponent, (0, import_react_is.isValidElementType)(IconRightComponent) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconRightComponent, {})]
				})
			]
		})
	}), $[58] = IconComponent, $[59] = IconRightComponent, $[60] = boxProps, $[61] = button, $[62] = fontSize, $[63] = justify, $[64] = muted, $[65] = spacing, $[66] = text, $[67] = textAlign, $[68] = textWeight, $[69] = t24) : t24 = $[69];
	let t25;
	$[70] !== boxProps || $[71] !== children ? (t25 = children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		as: "span",
		...boxProps,
		children
	}), $[70] = boxProps, $[71] = children, $[72] = t25) : t25 = $[72];
	let t26;
	return $[73] !== mode || $[74] !== radius || $[75] !== ref || $[76] !== restProps || $[77] !== t20 || $[78] !== t21 || $[79] !== t22 || $[80] !== t23 || $[81] !== t24 || $[82] !== t25 || $[83] !== tone || $[84] !== type || $[85] !== width ? (t26 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledButton, {
		"data-ui": "Button",
		...restProps,
		$mode: mode,
		$radius: radius,
		$tone: tone,
		"data-disabled": t20,
		"data-selected": t21,
		disabled: t22,
		ref,
		type,
		$width: width,
		children: [
			t23,
			t24,
			t25
		]
	}), $[73] = mode, $[74] = radius, $[75] = ref, $[76] = restProps, $[77] = t20, $[78] = t21, $[79] = t22, $[80] = t23, $[81] = t24, $[82] = t25, $[83] = tone, $[84] = type, $[85] = width, $[86] = t26) : t26 = $[86], t26;
}
/**
* @public
*/
var Button = ButtonComponent;
//#endregion
//#region node_modules/clsx/dist/lite.mjs
function clsx() {
	for (var t, r = 0, e = "", n = arguments.length; r < n; r++) (t = arguments[r]) && "string" == typeof t && (e += (e && " ") + t);
	return e;
}
//#endregion
//#region node_modules/@sanity/ui/dist/element-BYgCE_iK.js
/**
* @internal
*/
function _isEnterToClickElement(element) {
	return isHTMLAnchorElement(element) || isHTMLButtonElement(element);
}
/**
* @internal
*/
function isHTMLElement(node) {
	return node instanceof Node && node.nodeType === Node.ELEMENT_NODE;
}
/**
* @internal
*/
function isHTMLAnchorElement(element) {
	return isHTMLElement(element) && element.nodeName === "A";
}
/**
* @internal
*/
function isHTMLInputElement(element) {
	return isHTMLElement(element) && element.nodeName === "INPUT";
}
/**
* @internal
*/
function isHTMLButtonElement(element) {
	return isHTMLElement(element) && element.nodeName === "BUTTON";
}
/**
* @internal
*/
function isHTMLSelectElement(element) {
	return isHTMLElement(element) && element.nodeName === "SELECT";
}
/**
* @internal
*/
function isHTMLTextAreaElement(element) {
	return isHTMLElement(element) && element.nodeName === "TEXTAREA";
}
/**
* @internal
*/
function containsOrEqualsElement(element, node) {
	return element.contains(node) || element === node;
}
//#endregion
//#region node_modules/@sanity/ui/dist/textInput-C83gG7N5.js
/**
* @internal
*/
function _raf(fn) {
	let frameId = requestAnimationFrame(fn);
	return () => {
		cancelAnimationFrame(frameId);
	};
}
/**
* @internal
*/
function _raf2(fn) {
	let innerDispose = null, outerDispose = _raf(() => {
		innerDispose = _raf(fn);
	});
	return () => {
		innerDispose && innerDispose(), outerDispose();
	};
}
/**
* @internal
*/
function _hasFocus(element) {
	return !!document.activeElement && element.contains(document.activeElement);
}
/**
* @internal
*/
function isFocusable(element) {
	return element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null ? !0 : isHTMLAnchorElement(element) ? !!element.href && element.rel !== "ignore" : isHTMLInputElement(element) ? element.type !== "hidden" && element.type !== "file" && !element.disabled : isHTMLButtonElement(element) || isHTMLSelectElement(element) || isHTMLTextAreaElement(element) ? !element.disabled : !1;
}
/**
* @internal
*/
function attemptFocus(element) {
	if (!isFocusable(element)) return !1;
	try {
		element.focus();
	} catch {}
	return document.activeElement === element;
}
/**
* @internal
*/
function focusFirstDescendant(element) {
	for (let i = 0; i < element.childNodes.length; i++) {
		let child = element.childNodes[i];
		if (isHTMLElement(child) && (attemptFocus(child) || focusFirstDescendant(child))) return !0;
	}
	return !1;
}
/**
* @internal
*/
function focusLastDescendant(element) {
	for (let i = element.childNodes.length - 1; i >= 0; i--) {
		let child = element.childNodes[i];
		if (isHTMLElement(child) && (attemptFocus(child) || focusLastDescendant(child))) return !0;
	}
	return !1;
}
/**
* @beta
*/
function useCustomValidity(ref, customValidity) {
	let $ = (0, import_compiler_runtime.c)(4), t0, t1;
	$[0] !== customValidity || $[1] !== ref ? (t0 = () => {
		ref.current?.setCustomValidity(customValidity || "");
	}, t1 = [customValidity, ref], $[0] = customValidity, $[1] = ref, $[2] = t0, $[3] = t1) : (t0 = $[2], t1 = $[3]), (0, import_react.useEffect)(t0, t1);
}
function responsiveInputPaddingStyle(props) {
	let { $fontSize, $iconLeft, $iconRight, $padding, $space } = props, { font, media, space } = getTheme_v2(props.theme), len = Math.max($padding.length, $space.length, $fontSize.length), _padding = [], _space = [], _fontSize = [];
	for (let i = 0; i < len; i += 1) _fontSize[i] = $fontSize[i] === void 0 ? _fontSize[i - 1] : $fontSize[i], _padding[i] = $padding[i] === void 0 ? _padding[i - 1] : $padding[i], _space[i] = $space[i] === void 0 ? _space[i - 1] : $space[i];
	return _responsive(media, _padding, (_, i) => {
		let size = font.text.sizes[_fontSize[i]] || font.text.sizes[2], emSize = size.lineHeight - size.ascenderHeight - size.descenderHeight, p = space[_padding[i]], s = space[_space[i]], styles = {
			paddingTop: rem(p - size.ascenderHeight),
			paddingRight: rem(p),
			paddingBottom: rem(p - size.descenderHeight),
			paddingLeft: rem(p)
		};
		return $iconRight && (styles.paddingRight = rem(p + emSize + s)), $iconLeft && (styles.paddingLeft = rem(p + emSize + s)), styles;
	});
}
function responsiveInputPaddingIconRightStyle(props) {
	return responsiveInputPaddingStyle({
		...props,
		$iconRight: !0
	});
}
function textInputBaseStyle(props) {
	let { $scheme, $tone, $weight } = props, { color, font } = getTheme_v2(props.theme);
	return ft`appearance:none;background:none;border:0;border-radius:0;outline:none;width:100%;box-sizing:border-box;font-family:${font.text.family};font-weight:${$weight && font.text.weights[$weight] || font.text.weights.regular};margin:0;position:relative;z-index:1;display:block;&:-webkit-autofill,&:-webkit-autofill:hover,&:-webkit-autofill:focus,&:-webkit-autofill:active{-webkit-text-fill-color:var(--input-fg-color) !important;transition:background-color 5000s;transition-delay:86400s;}&[data-as='textarea']{resize:none;}color:var(--input-fg-color);&::placeholder{color:var(--input-placeholder-color);}&[data-scheme='${$scheme}'][data-tone='${$tone}']{--input-fg-color:${color.input.default.enabled.fg};--input-placeholder-color:${color.input.default.enabled.placeholder};&:not(:invalid):not(:disabled):not(:read-only){--input-fg-color:${color.input.default.enabled.fg};--input-placeholder-color:${color.input.default.enabled.placeholder};}&:not(:invalid):disabled{--input-fg-color:${color.input.default.disabled.fg};--input-placeholder-color:${color.input.default.disabled.placeholder};}&:invalid{--input-fg-color:${color.input.invalid.enabled.fg};--input-placeholder-color:${color.input.invalid.enabled.placeholder};}&:read-only{--input-fg-color:${color.input.default.readOnly.fg};--input-placeholder-color:${color.input.default.readOnly.placeholder};}}`;
}
function textInputFontSizeStyle(props) {
	let { font, media } = getTheme_v2(props.theme);
	return _responsive(media, props.$fontSize, (sizeIndex) => {
		let size = font.text.sizes[sizeIndex] || font.text.sizes[2];
		return {
			fontSize: rem(size.fontSize),
			lineHeight: `${size.lineHeight / size.fontSize}`
		};
	});
}
function textInputRepresentationStyle(props) {
	let { $hasPrefix, $hasSuffix, $scheme, $tone, $unstableDisableFocusRing } = props, { color, input } = getTheme_v2(props.theme);
	return ft`--input-box-shadow:none;position:absolute;top:0;left:0;right:0;bottom:0;display:block;pointer-events:none;z-index:0;background-color:var(--card-bg-color);box-shadow:var(--input-box-shadow);border-top-left-radius:${$hasPrefix ? 0 : void 0};border-bottom-left-radius:${$hasPrefix ? 0 : void 0};border-top-right-radius:${$hasSuffix ? 0 : void 0};border-bottom-right-radius:${$hasSuffix ? 0 : void 0};&[data-scheme='${$scheme}'][data-tone='${$tone}']{--card-bg-color:${color.input.default.enabled.bg};--card-fg-color:${color.input.default.enabled.fg};*:not(:disabled) + &[data-border]{--input-box-shadow:${focusRingBorderStyle({
		color: color.input.default.enabled.border,
		width: input.border.width
	})};}*:not(:disabled):invalid + &{--card-bg-color:${color.input.invalid.enabled.bg};--card-fg-color:${color.input.invalid.enabled.fg};&[data-border]{--input-box-shadow:${focusRingBorderStyle({
		color: color.input.invalid.enabled.border,
		width: input.border.width
	})};}}*:not(:disabled):focus + &{&[data-border]{--input-box-shadow:${$unstableDisableFocusRing ? void 0 : focusRingStyle({
		border: {
			color: color.input.default.enabled.border,
			width: input.border.width
		},
		focusRing: input.text.focusRing
	})};}&:not([data-border]){--input-box-shadow:${$unstableDisableFocusRing ? void 0 : focusRingStyle({ focusRing: input.text.focusRing })};}}*:not(:invalid):disabled + &{--card-bg-color:${color.input.default.disabled.bg} !important;--card-fg-color:${color.input.default.disabled.fg} !important;--card-icon-color:${color.input.default.disabled.fg} !important;&[data-border]{--input-box-shadow:${focusRingBorderStyle({
		color: color.input.default.disabled.border,
		width: input.border.width
	})};}}*:invalid:disabled + &{--card-bg-color:${color.input.invalid.disabled.bg} !important;--card-fg-color:${color.input.invalid.disabled.fg} !important;--card-icon-color:${color.input.invalid.disabled.fg} !important;&[data-border]{--input-box-shadow:${focusRingBorderStyle({
		color: color.input.invalid.disabled.border,
		width: input.border.width
	})};}}*:not(:invalid):read-only + &{--card-bg-color:${color.input.default.readOnly.bg} !important;--card-fg-color:${color.input.default.readOnly.fg} !important;}*:invalid:read-only + &{--card-bg-color:${color.input.invalid.readOnly.bg} !important;--card-fg-color:${color.input.invalid.readOnly.fg} !important;}@media (hover:hover){*:not(:disabled):not(:read-only):not(:invalid):hover + &{--card-bg-color:${color.input.default.hovered.bg};--card-fg-color:${color.input.default.hovered.fg};}*:invalid:not(:disabled):not(:read-only):hover + &{--card-bg-color:${color.input.invalid.hovered.bg};--card-fg-color:${color.input.invalid.hovered.fg};}*:not(:disabled):not(:read-only):not(:invalid):not(:focus):hover + &[data-border]{--input-box-shadow:${focusRingBorderStyle({
		color: color.input.default.hovered.border,
		width: input.border.width
	})};}*:invalid:not(:disabled):not(:read-only):not(:focus):hover + &[data-border]{--input-box-shadow:${focusRingBorderStyle({
		color: color.input.invalid.hovered.border,
		width: input.border.width
	})};}}}`;
}
var inputRoot = "_1lyk8y2";
var textAreaRoot = "_1lyk8y1 _1lyk8y0";
var textInputRoot = "_1lyk8y0";
var CLEAR_BUTTON_BOX_STYLE = { zIndex: 2 };
var Prefix = gt(Card).attrs({ forwardedAs: "span" }).withConfig({
	displayName: "Prefix",
	componentId: "sc-k29dck-0"
})`border-top-right-radius:0;border-bottom-right-radius:0;& > span{display:block;margin:-1px;}`;
var Suffix = gt(Card).attrs({ forwardedAs: "span" }).withConfig({
	displayName: "Suffix",
	componentId: "sc-k29dck-1"
})`border-top-left-radius:0;border-bottom-left-radius:0;& > span{display:block;margin:-1px;}`;
var Input$4 = /* @__PURE__ */ gt.input.withConfig({
	displayName: "Input",
	componentId: "sc-k29dck-2"
})(responsiveInputPaddingStyle, textInputBaseStyle, textInputFontSizeStyle);
var Presentation$1 = /* @__PURE__ */ gt.span.withConfig({
	displayName: "Presentation",
	componentId: "sc-k29dck-3"
})(responsiveRadiusStyle, textInputRepresentationStyle);
var RightCard = gt(Card).withConfig({
	displayName: "RightCard",
	componentId: "sc-k29dck-4"
})`background-color:transparent;position:absolute;top:0;right:0;`;
/**
* Single line text input.
*
* @public
*/
function TextInput(props) {
	let $ = (0, import_compiler_runtime.c)(93), IconComponent, IconRightComponent, __unstable_disableFocusRing, clearButton, customValidity, forwardedRef, onClear, prefix, readOnly, restProps, suffix, t0, t1, t2, t3, t4, t5, t6, weight;
	$[0] === props ? (IconComponent = $[1], IconRightComponent = $[2], __unstable_disableFocusRing = $[3], clearButton = $[4], customValidity = $[5], forwardedRef = $[6], onClear = $[7], prefix = $[8], readOnly = $[9], restProps = $[10], suffix = $[11], t0 = $[12], t1 = $[13], t2 = $[14], t3 = $[15], t4 = $[16], t5 = $[17], t6 = $[18], weight = $[19]) : ({__unstable_disableFocusRing, border: t0, clearButton, disabled: t1, fontSize: t2, gap: t3, icon: IconComponent, iconRight: IconRightComponent, onClear, padding: t4, prefix, radius: t5, readOnly, ref: forwardedRef, suffix, customValidity, type: t6, weight, ...restProps} = props, $[0] = props, $[1] = IconComponent, $[2] = IconRightComponent, $[3] = __unstable_disableFocusRing, $[4] = clearButton, $[5] = customValidity, $[6] = forwardedRef, $[7] = onClear, $[8] = prefix, $[9] = readOnly, $[10] = restProps, $[11] = suffix, $[12] = t0, $[13] = t1, $[14] = t2, $[15] = t3, $[16] = t4, $[17] = t5, $[18] = t6, $[19] = weight);
	let border = t0 === void 0 || t0, disabled = t1 !== void 0 && t1, fontSizeProp = t2 === void 0 ? 2 : t2, gap = t3 === void 0 ? 3 : t3, paddingProp = t4 === void 0 ? 3 : t4, radiusProp = t5 === void 0 ? 2 : t5, type = t6 === void 0 ? "text" : t6, ref = (0, import_react.useRef)(null), rootTheme = useRootTheme(), t7;
	$[20] === fontSizeProp ? t7 = $[21] : (t7 = _getArrayProp(fontSizeProp), $[20] = fontSizeProp, $[21] = t7);
	let fontSize = t7, t8;
	$[22] === paddingProp ? t8 = $[23] : (t8 = _getArrayProp(paddingProp), $[22] = paddingProp, $[23] = t8);
	let padding = t8, t9;
	$[24] === radiusProp ? t9 = $[25] : (t9 = _getArrayProp(radiusProp), $[24] = radiusProp, $[25] = t9);
	let radius = t9, t10;
	$[26] === gap ? t10 = $[27] : (t10 = _getArrayProp(gap), $[26] = gap, $[27] = t10);
	let space = t10, $hasClearButton = !!clearButton, $hasIcon = !!IconComponent, $hasIconRight = !!IconRightComponent, $hasSuffix = !!suffix, $hasPrefix = !!prefix, t11;
	$[28] === Symbol.for("react.memo_cache_sentinel") ? (t11 = () => ref.current, $[28] = t11) : t11 = $[28], (0, import_react.useImperativeHandle)(forwardedRef, t11), useCustomValidity(ref, customValidity);
	let handleClearMouseDown = _temp$6, t12;
	$[29] === onClear ? t12 = $[30] : (t12 = (event_0) => {
		event_0.preventDefault(), event_0.stopPropagation(), onClear && onClear(), ref.current?.focus();
	}, $[29] = onClear, $[30] = t12);
	let handleClearClick = t12, t13;
	$[31] !== prefix || $[32] !== radius ? (t13 = prefix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prefix, {
		borderTop: !0,
		borderLeft: !0,
		borderBottom: !0,
		radius,
		sizing: "border",
		tone: "inherit",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: prefix })
	}), $[31] = prefix, $[32] = radius, $[33] = t13) : t13 = $[33];
	let prefixNode = t13, t14 = border ? "" : void 0, t15;
	$[34] !== IconComponent || $[35] !== fontSize || $[36] !== padding ? (t15 = IconComponent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		className: "_8fnjkq0",
		padding,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
			size: fontSize,
			children: [(0, import_react.isValidElement)(IconComponent) && IconComponent, (0, import_react_is.isValidElementType)(IconComponent) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, {})]
		})
	}), $[34] = IconComponent, $[35] = fontSize, $[36] = padding, $[37] = t15) : t15 = $[37];
	let t16;
	$[38] !== $hasClearButton || $[39] !== IconRightComponent || $[40] !== fontSize || $[41] !== padding ? (t16 = !$hasClearButton && IconRightComponent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		className: "_8fnjkq1",
		padding,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
			size: fontSize,
			children: [(0, import_react.isValidElement)(IconRightComponent) && IconRightComponent, (0, import_react_is.isValidElementType)(IconRightComponent) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconRightComponent, {})]
		})
	}), $[38] = $hasClearButton, $[39] = IconRightComponent, $[40] = fontSize, $[41] = padding, $[42] = t16) : t16 = $[42];
	let t17;
	$[43] !== $hasPrefix || $[44] !== $hasSuffix || $[45] !== __unstable_disableFocusRing || $[46] !== radius || $[47] !== rootTheme.scheme || $[48] !== rootTheme.tone || $[49] !== t14 || $[50] !== t15 || $[51] !== t16 ? (t17 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Presentation$1, {
		$hasPrefix,
		$unstableDisableFocusRing: __unstable_disableFocusRing,
		$hasSuffix,
		$radius: radius,
		$scheme: rootTheme.scheme,
		$tone: rootTheme.tone,
		"data-border": t14,
		"data-scheme": rootTheme.scheme,
		"data-tone": rootTheme.tone,
		children: [t15, t16]
	}), $[43] = $hasPrefix, $[44] = $hasSuffix, $[45] = __unstable_disableFocusRing, $[46] = radius, $[47] = rootTheme.scheme, $[48] = rootTheme.tone, $[49] = t14, $[50] = t15, $[51] = t16, $[52] = t17) : t17 = $[52];
	let presentationNode = t17, t18;
	$[53] === padding ? t18 = $[54] : (t18 = padding.map(_temp2$1), $[53] = padding, $[54] = t18);
	let clearButtonBoxPadding = t18, t19;
	$[55] === padding ? t19 = $[56] : (t19 = padding.map(_temp3), $[55] = padding, $[56] = t19);
	let clearButtonPadding = t19, clearButtonProps = typeof clearButton == "object" ? clearButton : EMPTY_RECORD, t20;
	$[57] !== clearButton || $[58] !== clearButtonBoxPadding || $[59] !== clearButtonPadding || $[60] !== clearButtonProps || $[61] !== customValidity || $[62] !== disabled || $[63] !== fontSize || $[64] !== handleClearClick || $[65] !== radius || $[66] !== readOnly ? (t20 = !disabled && !readOnly && clearButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RightCard, {
		forwardedAs: "span",
		padding: clearButtonBoxPadding,
		style: CLEAR_BUTTON_BOX_STYLE,
		tone: customValidity ? "critical" : "inherit",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			"aria-label": "Clear",
			"data-qa": "clear-button",
			fontSize,
			icon: CloseIcon,
			mode: "bleed",
			padding: clearButtonPadding,
			radius,
			...clearButtonProps,
			className: clsx("_8fnjkq2", clearButtonProps.className),
			onClick: handleClearClick,
			onMouseDown: handleClearMouseDown
		})
	}), $[57] = clearButton, $[58] = clearButtonBoxPadding, $[59] = clearButtonPadding, $[60] = clearButtonProps, $[61] = customValidity, $[62] = disabled, $[63] = fontSize, $[64] = handleClearClick, $[65] = radius, $[66] = readOnly, $[67] = t20) : t20 = $[67];
	let clearButtonNode = t20, t21;
	$[68] !== radius || $[69] !== suffix ? (t21 = suffix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Suffix, {
		borderTop: !0,
		borderRight: !0,
		borderBottom: !0,
		radius,
		sizing: "border",
		tone: "inherit",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: suffix })
	}), $[68] = radius, $[69] = suffix, $[70] = t21) : t21 = $[70];
	let suffixNode = t21, t22 = $hasIconRight || $hasClearButton, t23;
	$[71] !== $hasIcon || $[72] !== disabled || $[73] !== fontSize || $[74] !== padding || $[75] !== readOnly || $[76] !== restProps || $[77] !== rootTheme.scheme || $[78] !== rootTheme.tone || $[79] !== space || $[80] !== t22 || $[81] !== type || $[82] !== weight ? (t23 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$4, {
		"data-as": "input",
		"data-scheme": rootTheme.scheme,
		"data-tone": rootTheme.tone,
		...restProps,
		$fontSize: fontSize,
		$iconLeft: $hasIcon,
		$iconRight: t22,
		$padding: padding,
		$scheme: rootTheme.scheme,
		$space: space,
		$tone: rootTheme.tone,
		$weight: weight,
		disabled,
		readOnly,
		ref,
		type
	}), $[71] = $hasIcon, $[72] = disabled, $[73] = fontSize, $[74] = padding, $[75] = readOnly, $[76] = restProps, $[77] = rootTheme.scheme, $[78] = rootTheme.tone, $[79] = space, $[80] = t22, $[81] = type, $[82] = weight, $[83] = t23) : t23 = $[83];
	let t24;
	$[84] !== clearButtonNode || $[85] !== presentationNode || $[86] !== t23 ? (t24 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: inputRoot,
		children: [
			t23,
			presentationNode,
			clearButtonNode
		]
	}), $[84] = clearButtonNode, $[85] = presentationNode, $[86] = t23, $[87] = t24) : t24 = $[87];
	let t25;
	return $[88] !== prefixNode || $[89] !== rootTheme.tone || $[90] !== suffixNode || $[91] !== t24 ? (t25 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		as: "span",
		className: textInputRoot,
		"data-ui": "TextInput",
		display: "flex",
		tone: rootTheme.tone,
		children: [
			prefixNode,
			t24,
			suffixNode
		]
	}), $[88] = prefixNode, $[89] = rootTheme.tone, $[90] = suffixNode, $[91] = t24, $[92] = t25) : t25 = $[92], t25;
}
function _temp3(v_0) {
	return v_0 === 0 || v_0 === 1 ? 0 : v_0 === 2 ? 1 : v_0 - 1;
}
function _temp2$1(v) {
	return v === 0 ? 0 : v === 1 || v === 2 ? 1 : v - 2;
}
function _temp$6(event) {
	event.preventDefault(), event.stopPropagation();
}
//#endregion
//#region node_modules/@sanity/ui/dist/useElementSize-BJvbGHq8.js
/**
* @internal
*/
var _elementSizeObserver = _createElementSizeObserver();
function _createElementRectValueListener() {
	return { subscribe(element, subscriber) {
		let resizeObserver = new ResizeObserver(([entry]) => {
			subscriber({
				_contentRect: entry.contentRect,
				border: {
					width: entry.borderBoxSize[0].inlineSize,
					height: entry.borderBoxSize[0].blockSize
				},
				content: {
					width: entry.contentRect.width,
					height: entry.contentRect.height
				}
			});
		});
		return resizeObserver.observe(element), () => {
			resizeObserver.unobserve(element), resizeObserver.disconnect();
		};
	} };
}
function _createElementSizeObserver() {
	let disposeCache = /* @__PURE__ */ new WeakMap(), subscribersCache = /* @__PURE__ */ new WeakMap();
	return { subscribe(element, subscriber) {
		let subscribers = subscribersCache.get(element) || [], dispose = disposeCache.get(element);
		return subscribersCache.has(element) || (subscribersCache.set(element, subscribers), dispose = _createElementRectValueListener().subscribe(element, (elementRect) => {
			for (let sub of subscribers) sub(elementRect);
		})), subscribers.push(subscriber), () => {
			let idx = subscribers.indexOf(subscriber);
			idx > -1 && subscribers.splice(idx, 1), subscribers.length === 0 && dispose && dispose();
		};
	} };
}
/**
* Subscribe to the size of a DOM element.
* @beta
*/
function useElementSize(element) {
	let $ = (0, import_compiler_runtime.c)(3), [size, setSize] = (0, import_react.useState)(null), t0, t1;
	return $[0] === element ? (t0 = $[1], t1 = $[2]) : (t0 = () => {
		if (element) return _elementSizeObserver.subscribe(element, setSize);
	}, t1 = [element], $[0] = element, $[1] = t0, $[2] = t1), (0, import_react.useEffect)(t0, t1), size;
}
//#endregion
//#region node_modules/@vanilla-extract/private/dist/vanilla-extract-private.esm.js
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
function getVarName(variable) {
	var matches = variable.match(/^var\((.*)\)$/);
	if (matches) return matches[1];
	return variable;
}
function get(obj, path) {
	var result = obj;
	for (var key of path) {
		if (!(key in result)) throw new Error("Path ".concat(path.join(" -> "), " does not exist in object"));
		result = result[key];
	}
	return result;
}
function walkObject(obj, fn) {
	var path = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
	var clone = {};
	for (var key in obj) {
		var _value = obj[key];
		var currentPath = [...path, key];
		if (typeof _value === "string" || typeof _value === "number" || _value == null) clone[key] = fn(_value, currentPath);
		else if (typeof _value === "object" && !Array.isArray(_value)) clone[key] = walkObject(_value, fn, currentPath);
		else console.warn("Skipping invalid key \"".concat(currentPath.join("."), "\". Should be a string, number, null or object. Received: \"").concat(Array.isArray(_value) ? "Array" : typeof _value, "\""));
	}
	return clone;
}
//#endregion
//#region node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js
function assignInlineVars(varsOrContract, tokens) {
	var styles = {};
	if (typeof tokens === "object") {
		var _contract = varsOrContract;
		walkObject(tokens, (value, path) => {
			if (value == null) return;
			var varName = get(_contract, path);
			styles[getVarName(varName)] = String(value);
		});
	} else {
		var _vars = varsOrContract;
		for (var varName in _vars) {
			var value = _vars[varName];
			if (value == null) continue;
			styles[getVarName(varName)] = value;
		}
	}
	Object.defineProperty(styles, "toString", {
		value: function value() {
			return Object.keys(this).map((key) => "".concat(key, ":").concat(this[key])).join(";");
		},
		writable: false
	});
	return styles;
}
//#endregion
//#region node_modules/@sanity/ui/dist/arrow-D-raLuvE.js
var BoundaryElementContext = createGlobalScopedContext("@sanity/ui/context/boundaryElement", null);
var DEFAULT_VALUE = {
	version: 0,
	element: null
};
/**
* @public
*/
function useBoundaryElement() {
	let value = (0, import_react.useContext)(BoundaryElementContext);
	if (value && (!isRecord$1(value) || value.version !== 0)) throw Error("useBoundaryElement(): the context value is not compatible");
	return value || DEFAULT_VALUE;
}
var key = "@sanity/ui/context/portal";
var elementKey = Symbol.for(`${key}/element`);
globalScope[elementKey] = null;
var PortalContext = createGlobalScopedContext(key, {
	version: 0,
	boundaryElement: null,
	get element() {
		return typeof document > "u" ? null : globalScope[elementKey] ? globalScope[elementKey] : (globalScope[elementKey] = document.createElement("div"), globalScope[elementKey].setAttribute("data-portal", ""), document.body.appendChild(globalScope[elementKey]), globalScope[elementKey]);
	}
});
/**
* @public
*/
function usePortal() {
	let value = (0, import_react.useContext)(PortalContext);
	if (!value) throw Error("usePortal(): missing context value");
	if (!isRecord$1(value) || value.version !== 0) throw Error("usePortal(): the context value is not compatible");
	return value;
}
/**
* @public
*/
function Portal(props) {
	let $ = (0, import_compiler_runtime.c)(3), { children, __unstable_name: name } = props, portal = usePortal(), portalElement = (name ? portal.elements && portal.elements[name] : portal.element) || portal.elements?.default;
	if (!portalElement) return null;
	let t0;
	return $[0] !== children || $[1] !== portalElement ? (t0 = (0, import_react_dom.createPortal)(children, portalElement), $[0] = children, $[1] = portalElement, $[2] = t0) : t0 = $[2], t0;
}
function moveTowardsLength(movingPoint, targetPoint, amount) {
	let width = targetPoint.x - movingPoint.x, height = targetPoint.y - movingPoint.y, distance = Math.sqrt(width * width + height * height);
	return moveTowardsFractional(movingPoint, targetPoint, Math.min(1, amount / distance));
}
function moveTowardsFractional(movingPoint, targetPoint, fraction) {
	return {
		x: movingPoint.x + (targetPoint.x - movingPoint.x) * fraction,
		y: movingPoint.y + (targetPoint.y - movingPoint.y) * fraction
	};
}
function getRoundedCommands(points) {
	let len = points.length, cmds = [];
	for (let i = 0; i < len; i += 1) {
		let point = points[i], prevPoint = points[i - 1], nextPoint = points[i + 1];
		if (prevPoint && point.radius) {
			let curveStart = moveTowardsLength(point, prevPoint, point.radius), curveEnd = moveTowardsLength(point, nextPoint, point.radius), startControl = moveTowardsFractional(curveStart, point, .5), endControl = moveTowardsFractional(point, curveEnd, .5);
			cmds.push({
				type: "point",
				...curveStart
			}), cmds.push({
				type: "curve",
				curveEnd,
				startControl,
				endControl
			});
		} else cmds.push({
			type: "point",
			...point
		});
	}
	return cmds;
}
function compileCommands(cmds) {
	return cmds.map((n, idx) => n.type === "point" ? `${idx === 0 ? "M" : "L"} ${n.x} ${n.y}` : n.type === "curve" ? `C ${n.startControl.x} ${n.startControl.y} ${n.endControl.x} ${n.endControl.y} ${n.curveEnd.x} ${n.curveEnd.y}` : "").join(" ");
}
var arrow = "_62mlcb1";
var arrowShape = "_62mlcb3";
var arrowSize = "var(--_62mlcb0)";
var arrowStroke = "_62mlcb2";
/** @internal */
function Arrow(props) {
	let $ = (0, import_compiler_runtime.c)(44), className, h, ref, restProps, style, t0, w;
	$[0] === props ? (className = $[1], h = $[2], ref = $[3], restProps = $[4], style = $[5], t0 = $[6], w = $[7]) : ({className, width: w, height: h, radius: t0, ref, style, ...restProps} = props, $[0] = props, $[1] = className, $[2] = h, $[3] = ref, $[4] = restProps, $[5] = style, $[6] = t0, $[7] = w);
	let radius = t0 === void 0 ? 0 : t0, { card } = useTheme_v2(), strokeMaskId = `stroke-mask-${(0, import_react.useId)()}`, strokeWidth = card.shadow.outline, center = w / 2, t1;
	$[8] !== center || $[9] !== h || $[10] !== radius || $[11] !== w ? (t1 = compileCommands(getRoundedCommands([
		{
			x: 0,
			y: 0
		},
		{
			x: radius,
			y: 0,
			radius
		},
		{
			x: center,
			y: h - 1,
			radius
		},
		{
			x: w - radius,
			y: 0,
			radius
		},
		{
			x: w,
			y: 0
		}
	])), $[8] = center, $[9] = h, $[10] = radius, $[11] = w, $[12] = t1) : t1 = $[12];
	let path = t1, strokePath = `${path}`, fillPath = `${path} M ${w} -1 M 0 -1 Z`, t2;
	$[13] === className ? t2 = $[14] : (t2 = clsx(arrow, className), $[13] = className, $[14] = t2);
	let t3 = `${w}px`, t4;
	$[15] === t3 ? t4 = $[16] : (t4 = assignInlineVars({ [arrowSize]: t3 }), $[15] = t3, $[16] = t4);
	let t5;
	$[17] !== style || $[18] !== t4 ? (t5 = {
		...style,
		...t4
	}, $[17] = style, $[18] = t4, $[19] = t5) : t5 = $[19];
	let t6 = `0 0 ${w} ${w}`, t7;
	$[20] !== strokeWidth || $[21] !== w ? (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: 0,
		y: strokeWidth,
		width: w,
		height: w,
		fill: "white"
	}), $[20] = strokeWidth, $[21] = w, $[22] = t7) : t7 = $[22];
	let t8;
	$[23] !== strokeMaskId || $[24] !== t7 ? (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mask", {
		id: strokeMaskId,
		children: t7
	}), $[23] = strokeMaskId, $[24] = t7, $[25] = t8) : t8 = $[25];
	let t9 = `url(#${strokeMaskId})`, t10 = strokeWidth * 2, t11;
	$[26] !== strokePath || $[27] !== t10 || $[28] !== t9 ? (t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		className: arrowStroke,
		d: strokePath,
		mask: t9,
		strokeWidth: t10
	}), $[26] = strokePath, $[27] = t10, $[28] = t9, $[29] = t11) : t11 = $[29];
	let t12;
	$[30] === fillPath ? t12 = $[31] : (t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		className: arrowShape,
		d: fillPath
	}), $[30] = fillPath, $[31] = t12);
	let t13;
	$[32] !== t11 || $[33] !== t12 || $[34] !== t6 || $[35] !== t8 || $[36] !== w ? (t13 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: w,
		height: w,
		viewBox: t6,
		children: [
			t8,
			t11,
			t12
		]
	}), $[32] = t11, $[33] = t12, $[34] = t6, $[35] = t8, $[36] = w, $[37] = t13) : t13 = $[37];
	let t14;
	return $[38] !== ref || $[39] !== restProps || $[40] !== t13 || $[41] !== t2 || $[42] !== t5 ? (t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-ui": "Arrow",
		...restProps,
		className: t2,
		ref,
		style: t5,
		children: t13
	}), $[38] = ref, $[39] = restProps, $[40] = t13, $[41] = t2, $[42] = t5, $[43] = t14) : t14 = $[43], t14;
}
//#endregion
//#region node_modules/use-effect-event/dist/index.js
var context = import_react.createContext(!0);
function forbiddenInRender() {
	throw Error("A function wrapped in useEffectEvent can't be called during rendering.");
}
var isInvalidExecutionContextForEventFunction = "use" in import_react.default ? () => {
	try {
		return import_react.use(context);
	} catch {
		return !1;
	}
} : () => !1;
/**
* This is a ponyfill of the `useEffectEvent` hook that became stable in React 19.2:
* https://react.dev/reference/react/useEffectEvent
* It also works on React 18.3 and React 19.0/19.1, where the native hook doesn't exist yet.
*
* It deliberately differs from the native hook in two ways:
* 1. The returned function has a stable identity: the same function is returned on every
*    render (the native hook returns a new closure each render). Linters ported from the
*    React Compiler (e.g. oxlint's `react/exhaustive-effect-dependencies`) only exempt the
*    native hook from effect dependency arrays, so they push callers into listing this
*    ponyfill's functions as dependencies — with a stable identity that's harmless, where an
*    unstable one would re-fire the effect on every render.
* 2. It doesn't reproduce the React 19.2 bug where the native hook keeps reading first-render
*    values inside `React.memo`/`React.forwardRef` components:
*    https://github.com/facebook/react/issues/34818
* @public
*/
function useEffectEvent(fn) {
	/**
	* For both React 18 and 19 we set the ref to the forbiddenInRender function, to catch illegal calls to the function during render.
	* Once the insertion effect runs, we set the ref to the actual function.
	*/
	let ref = import_react.useRef(forbiddenInRender);
	import_react.useInsertionEffect(() => {
		ref.current = fn;
	}, [fn]);
	/**
	* The stable wrapper is created exactly once per component instance — `useState` with a lazy
	* initializer guarantees the identity survives re-renders — and reads `ref.current` on every
	* call, so it always invokes the latest `fn` without ever being stale.
	*/
	let [stableFn] = import_react.useState(() => ((...args) => {
		isInvalidExecutionContextForEventFunction() && forbiddenInRender();
		let latestFn = ref.current;
		return latestFn(...args);
	}));
	return stableFn;
}
//#endregion
//#region node_modules/@sanity/ui/dist/useClickOutsideEvent-wGLGWBZN.js
/**
* @public
*/
function useClickOutsideEvent(listener, t0, boundaryElement) {
	let $ = (0, import_compiler_runtime.c)(9), elementsArg = t0 === void 0 ? _temp$5 : t0, t1;
	$[0] !== boundaryElement || $[1] !== elementsArg || $[2] !== listener ? (t1 = (evt) => {
		if (!listener) return;
		let target = evt.target;
		if (!(target instanceof Node)) return;
		let resolvedBoundaryElement = boundaryElement?.();
		if (resolvedBoundaryElement && !resolvedBoundaryElement.contains(target)) return;
		let elements = elementsArg().flat();
		for (let el of elements) if (el && (target === el || el.contains(target))) return;
		listener(evt);
	}, $[0] = boundaryElement, $[1] = elementsArg, $[2] = listener, $[3] = t1) : t1 = $[3];
	let onEvent = useEffectEvent(t1), hasListener = !!listener, t2;
	$[4] !== hasListener || $[5] !== onEvent ? (t2 = () => {
		if (!hasListener) return;
		let handleEvent = (evt_0) => onEvent(evt_0);
		return document.addEventListener("mousedown", handleEvent), () => {
			document.removeEventListener("mousedown", handleEvent);
		};
	}, $[4] = hasListener, $[5] = onEvent, $[6] = t2) : t2 = $[6];
	let t3;
	$[7] === hasListener ? t3 = $[8] : (t3 = [hasListener], $[7] = hasListener, $[8] = t3), (0, import_react.useEffect)(t2, t3), (0, import_react.useDebugValue)(listener ? "MouseDown On" : "MouseDown Off");
}
function _temp$5() {
	return EMPTY_ARRAY;
}
//#endregion
//#region node_modules/@sanity/color/dist/index.js
/**
* Color hue keys.
* @public
*/
var COLOR_HUES = [
	"gray",
	"blue",
	"purple",
	"magenta",
	"red",
	"orange",
	"yellow",
	"green",
	"cyan"
];
var COLOR_TINTS = [
	"50",
	"100",
	"200",
	"300",
	"400",
	"500",
	"600",
	"700",
	"800",
	"900",
	"950"
];
/** @public */
var black = {
	title: "Black",
	hex: "#0d0e12"
};
var white = {
	title: "White",
	hex: "#ffffff"
};
var gray = {
	50: {
		title: "Gray 50",
		hex: "#f6f6f8"
	},
	100: {
		title: "Gray 100",
		hex: "#eeeef1"
	},
	200: {
		title: "Gray 200",
		hex: "#e3e4e8"
	},
	300: {
		title: "Gray 300",
		hex: "#bbbdc9"
	},
	400: {
		title: "Gray 400",
		hex: "#9499ad"
	},
	500: {
		title: "Gray 500",
		hex: "#727892"
	},
	600: {
		title: "Gray 600",
		hex: "#515870"
	},
	700: {
		title: "Gray 700",
		hex: "#383d51"
	},
	800: {
		title: "Gray 800",
		hex: "#252837"
	},
	900: {
		title: "Gray 900",
		hex: "#1b1d27"
	},
	950: {
		title: "Gray 950",
		hex: "#13141b"
	}
};
var blue = {
	50: {
		title: "Blue 50",
		hex: "#f5f8ff"
	},
	100: {
		title: "Blue 100",
		hex: "#e5edff"
	},
	200: {
		title: "Blue 200",
		hex: "#dbe5ff"
	},
	300: {
		title: "Blue 300",
		hex: "#a8bfff"
	},
	400: {
		title: "Blue 400",
		hex: "#7595ff"
	},
	500: {
		title: "Blue 500",
		hex: "#556bfc"
	},
	600: {
		title: "Blue 600",
		hex: "#4043e7"
	},
	700: {
		title: "Blue 700",
		hex: "#2927aa"
	},
	800: {
		title: "Blue 800",
		hex: "#192457"
	},
	900: {
		title: "Blue 900",
		hex: "#161a41"
	},
	950: {
		title: "Blue 950",
		hex: "#101228"
	}
};
var purple = {
	50: {
		title: "Purple 50",
		hex: "#f8f5ff"
	},
	100: {
		title: "Purple 100",
		hex: "#f1ebff"
	},
	200: {
		title: "Purple 200",
		hex: "#ece1fe"
	},
	300: {
		title: "Purple 300",
		hex: "#ccb1fc"
	},
	400: {
		title: "Purple 400",
		hex: "#b087f7"
	},
	500: {
		title: "Purple 500",
		hex: "#8f57ef"
	},
	600: {
		title: "Purple 600",
		hex: "#721fe5"
	},
	700: {
		title: "Purple 700",
		hex: "#4c1a9e"
	},
	800: {
		title: "Purple 800",
		hex: "#2f1862"
	},
	900: {
		title: "Purple 900",
		hex: "#23173f"
	},
	950: {
		title: "Purple 950",
		hex: "#181128"
	}
};
var magenta = {
	50: {
		title: "Magenta 50",
		hex: "#fef6f9"
	},
	100: {
		title: "Magenta 100",
		hex: "#fde8ef"
	},
	200: {
		title: "Magenta 200",
		hex: "#fcdee9"
	},
	300: {
		title: "Magenta 300",
		hex: "#f7abc5"
	},
	400: {
		title: "Magenta 400",
		hex: "#f0709b"
	},
	500: {
		title: "Magenta 500",
		hex: "#e72767"
	},
	600: {
		title: "Magenta 600",
		hex: "#b11651"
	},
	700: {
		title: "Magenta 700",
		hex: "#7c1342"
	},
	800: {
		title: "Magenta 800",
		hex: "#4b1130"
	},
	900: {
		title: "Magenta 900",
		hex: "#341325"
	},
	950: {
		title: "Magenta 950",
		hex: "#1f0f14"
	}
};
var red = {
	50: {
		title: "Red 50",
		hex: "#fff6f5"
	},
	100: {
		title: "Red 100",
		hex: "#ffe7e5"
	},
	200: {
		title: "Red 200",
		hex: "#ffdedc"
	},
	300: {
		title: "Red 300",
		hex: "#fdada5"
	},
	400: {
		title: "Red 400",
		hex: "#f77769"
	},
	500: {
		title: "Red 500",
		hex: "#ef4434"
	},
	600: {
		title: "Red 600",
		hex: "#cc2819"
	},
	700: {
		title: "Red 700",
		hex: "#8b2018"
	},
	800: {
		title: "Red 800",
		hex: "#4d1714"
	},
	900: {
		title: "Red 900",
		hex: "#321615"
	},
	950: {
		title: "Red 950",
		hex: "#1e1011"
	}
};
var orange = {
	50: {
		title: "Orange 50",
		hex: "#fff7f0"
	},
	100: {
		title: "Orange 100",
		hex: "#ffeadb"
	},
	200: {
		title: "Orange 200",
		hex: "#ffddc7"
	},
	300: {
		title: "Orange 300",
		hex: "#ffb685"
	},
	400: {
		title: "Orange 400",
		hex: "#ff8e42"
	},
	500: {
		title: "Orange 500",
		hex: "#fa6400"
	},
	600: {
		title: "Orange 600",
		hex: "#b14802"
	},
	700: {
		title: "Orange 700",
		hex: "#7c3404"
	},
	800: {
		title: "Orange 800",
		hex: "#461e07"
	},
	900: {
		title: "Orange 900",
		hex: "#32160b"
	},
	950: {
		title: "Orange 950",
		hex: "#21120d"
	}
};
var yellow = {
	50: {
		title: "Yellow 50",
		hex: "#fefae1"
	},
	100: {
		title: "Yellow 100",
		hex: "#fcf3bb"
	},
	200: {
		title: "Yellow 200",
		hex: "#f9e994"
	},
	300: {
		title: "Yellow 300",
		hex: "#f7d455"
	},
	400: {
		title: "Yellow 400",
		hex: "#f9bc15"
	},
	500: {
		title: "Yellow 500",
		hex: "#d28a04"
	},
	600: {
		title: "Yellow 600",
		hex: "#965908"
	},
	700: {
		title: "Yellow 700",
		hex: "#653a0b"
	},
	800: {
		title: "Yellow 800",
		hex: "#3b220c"
	},
	900: {
		title: "Yellow 900",
		hex: "#271a11"
	},
	950: {
		title: "Yellow 950",
		hex: "#181410"
	}
};
var green = {
	50: {
		title: "Green 50",
		hex: "#e7fef5"
	},
	100: {
		title: "Green 100",
		hex: "#c5fce8"
	},
	200: {
		title: "Green 200",
		hex: "#a9f9dc"
	},
	300: {
		title: "Green 300",
		hex: "#59f3ba"
	},
	400: {
		title: "Green 400",
		hex: "#0ff0a1"
	},
	500: {
		title: "Green 500",
		hex: "#04b97a"
	},
	600: {
		title: "Green 600",
		hex: "#01794f"
	},
	700: {
		title: "Green 700",
		hex: "#015133"
	},
	800: {
		title: "Green 800",
		hex: "#023120"
	},
	900: {
		title: "Green 900",
		hex: "#06231a"
	},
	950: {
		title: "Green 950",
		hex: "#071715"
	}
};
var hues = {
	gray,
	blue,
	purple,
	magenta,
	red,
	orange,
	yellow,
	green,
	cyan: {
		50: {
			title: "Cyan 50",
			hex: "#e7fefe"
		},
		100: {
			title: "Cyan 100",
			hex: "#c5fcfc"
		},
		200: {
			title: "Cyan 200",
			hex: "#96f8f8"
		},
		300: {
			title: "Cyan 300",
			hex: "#62efef"
		},
		400: {
			title: "Cyan 400",
			hex: "#18e2e2"
		},
		500: {
			title: "Cyan 500",
			hex: "#04b8be"
		},
		600: {
			title: "Cyan 600",
			hex: "#037782"
		},
		700: {
			title: "Cyan 700",
			hex: "#024950"
		},
		800: {
			title: "Cyan 800",
			hex: "#042f34"
		},
		900: {
			title: "Cyan 900",
			hex: "#072227"
		},
		950: {
			title: "Cyan 950",
			hex: "#0d181c"
		}
	}
};
var color = {
	black,
	white,
	...hues
};
//#endregion
//#region node_modules/@sanity/ui/dist/factory-BzXTX8_Q.js
var defaultThemeFonts = {
	code: {
		family: "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",
		weights: {
			regular: 400,
			medium: 500,
			semibold: 600,
			bold: 700
		},
		sizes: [
			{
				ascenderHeight: 4,
				descenderHeight: 4,
				fontSize: 10,
				iconSize: 17,
				lineHeight: 15,
				letterSpacing: 0
			},
			{
				ascenderHeight: 5,
				descenderHeight: 5,
				fontSize: 13,
				iconSize: 21,
				lineHeight: 19,
				letterSpacing: 0
			},
			{
				ascenderHeight: 6,
				descenderHeight: 6,
				fontSize: 16,
				iconSize: 25,
				lineHeight: 23,
				letterSpacing: 0
			},
			{
				ascenderHeight: 7,
				descenderHeight: 7,
				fontSize: 19,
				iconSize: 29,
				lineHeight: 27,
				letterSpacing: 0
			},
			{
				ascenderHeight: 8,
				descenderHeight: 8,
				fontSize: 22,
				iconSize: 33,
				lineHeight: 31,
				letterSpacing: 0
			}
		]
	},
	heading: {
		family: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Liberation Sans\", Helvetica, Arial, system-ui, sans-serif",
		weights: {
			regular: 700,
			medium: 800,
			semibold: 900,
			bold: 900
		},
		sizes: [
			{
				ascenderHeight: 5,
				descenderHeight: 5,
				fontSize: 13,
				iconSize: 17,
				lineHeight: 19,
				letterSpacing: 0
			},
			{
				ascenderHeight: 6,
				descenderHeight: 6,
				fontSize: 16,
				iconSize: 25,
				lineHeight: 23,
				letterSpacing: 0
			},
			{
				ascenderHeight: 7,
				descenderHeight: 7,
				fontSize: 21,
				iconSize: 33,
				lineHeight: 29,
				letterSpacing: 0
			},
			{
				ascenderHeight: 8,
				descenderHeight: 8,
				fontSize: 27,
				iconSize: 41,
				lineHeight: 35,
				letterSpacing: 0
			},
			{
				ascenderHeight: 9.5,
				descenderHeight: 8.5,
				fontSize: 33,
				iconSize: 49,
				lineHeight: 41,
				letterSpacing: 0
			},
			{
				ascenderHeight: 10.5,
				descenderHeight: 9.5,
				fontSize: 38,
				iconSize: 53,
				lineHeight: 47,
				letterSpacing: 0
			}
		]
	},
	label: {
		family: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Liberation Sans\", system-ui, sans-serif",
		weights: {
			regular: 600,
			medium: 700,
			semibold: 800,
			bold: 900
		},
		sizes: [
			{
				ascenderHeight: 2,
				descenderHeight: 2,
				fontSize: 8.1,
				iconSize: 13,
				lineHeight: 10,
				letterSpacing: .5
			},
			{
				ascenderHeight: 2,
				descenderHeight: 2,
				fontSize: 9.5,
				iconSize: 15,
				lineHeight: 11,
				letterSpacing: .5
			},
			{
				ascenderHeight: 2,
				descenderHeight: 2,
				fontSize: 10.8,
				iconSize: 17,
				lineHeight: 12,
				letterSpacing: .5
			},
			{
				ascenderHeight: 2,
				descenderHeight: 2,
				fontSize: 12.25,
				iconSize: 19,
				lineHeight: 13,
				letterSpacing: .5
			},
			{
				ascenderHeight: 2,
				descenderHeight: 2,
				fontSize: 13.6,
				iconSize: 21,
				lineHeight: 14,
				letterSpacing: .5
			},
			{
				ascenderHeight: 2,
				descenderHeight: 2,
				fontSize: 15,
				iconSize: 23,
				lineHeight: 15,
				letterSpacing: .5
			}
		]
	},
	text: {
		family: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Liberation Sans\", Helvetica, Arial, system-ui, sans-serif",
		weights: {
			regular: 400,
			medium: 500,
			semibold: 600,
			bold: 700
		},
		sizes: [
			{
				ascenderHeight: 4,
				descenderHeight: 4,
				fontSize: 10,
				iconSize: 17,
				lineHeight: 15,
				letterSpacing: 0
			},
			{
				ascenderHeight: 5,
				descenderHeight: 5,
				fontSize: 13,
				iconSize: 21,
				lineHeight: 19,
				letterSpacing: 0
			},
			{
				ascenderHeight: 6,
				descenderHeight: 6,
				fontSize: 15,
				iconSize: 25,
				lineHeight: 23,
				letterSpacing: 0
			},
			{
				ascenderHeight: 7,
				descenderHeight: 7,
				fontSize: 18,
				iconSize: 29,
				lineHeight: 27,
				letterSpacing: 0
			},
			{
				ascenderHeight: 8,
				descenderHeight: 8,
				fontSize: 21,
				iconSize: 33,
				lineHeight: 31,
				letterSpacing: 0
			}
		]
	}
};
var THEME_COLOR_BLEND_MODES = ["multiply", "screen"];
var THEME_COLOR_CARD_TONES = [
	"transparent",
	"default",
	"neutral",
	"primary",
	"suggest",
	"positive",
	"caution",
	"critical"
];
var THEME_COLOR_STATE_TONES = [
	"default",
	"neutral",
	"primary",
	"suggest",
	"positive",
	"caution",
	"critical"
];
var THEME_COLOR_STATES = [
	"enabled",
	"hovered",
	"pressed",
	"selected",
	"disabled"
];
var THEME_COLOR_BUTTON_MODES = [
	"default",
	"ghost",
	"bleed"
];
var THEME_COLOR_INPUT_MODES = ["default", "invalid"];
var THEME_COLOR_INPUT_STATES = [
	"enabled",
	"hovered",
	"readOnly",
	"disabled"
];
var THEME_COLOR_AVATAR_COLORS = COLOR_HUES;
/** @internal */
function isColorBlendModeValue(str) {
	return THEME_COLOR_BLEND_MODES.includes(str);
}
/** @internal */
function isColorHueKey(str) {
	return COLOR_HUES.includes(str);
}
/** @internal */
function isColorTintKey(str) {
	return COLOR_TINTS.includes(str);
}
[...THEME_COLOR_AVATAR_COLORS];
[...THEME_COLOR_CARD_TONES];
[...THEME_COLOR_STATE_TONES];
[...THEME_COLOR_STATES];
[...THEME_COLOR_INPUT_MODES];
[...THEME_COLOR_INPUT_STATES];
/** @internal */
function isColorValue(str) {
	return str === "black" || str === "white";
}
/** @internal */
function isColorOpacityValue(str) {
	return str === "0" || /^0\.[0-9]+$/.test(str) || str === "1";
}
function isColorMixPercentValue(str) {
	return /^\d+%$/.test(str);
}
/** @internal */
function parseTokenValue(str) {
	let segments = str.split("/"), nextSegment = segments.shift() || "", [segment0, segment0mix] = nextSegment.split(" ");
	if (isColorTintKey(segment0)) {
		let tint = segment0, segment1 = segments.shift() || "";
		return isColorMixPercentValue(segment0mix) ? {
			type: "color",
			tint,
			mix: Number(segment0mix.slice(0, -1)) / 100
		} : isColorOpacityValue(segment1) ? {
			type: "color",
			tint,
			opacity: Number(segment1)
		} : {
			type: "color",
			tint
		};
	}
	if (isColorValue(segment0)) {
		let key = segment0, segment1 = segments.shift() || "";
		return isColorMixPercentValue(segment0mix) ? {
			type: "color",
			key,
			mix: Number(segment0mix.slice(0, -1)) / 100
		} : isColorOpacityValue(segment1) ? {
			type: "color",
			key,
			opacity: Number(segment1)
		} : {
			type: "color",
			key
		};
	}
	if (isColorHueKey(segment0)) {
		let hue = segment0;
		nextSegment = segments.shift() || "";
		let [segment1, segment1mix] = nextSegment.split(" ");
		if (isColorTintKey(segment1)) {
			let tint = segment1, segment2 = segments.shift() || "";
			return isColorMixPercentValue(segment1mix) ? {
				type: "color",
				hue,
				tint,
				mix: Number(segment1mix.slice(0, -1)) / 100
			} : isColorOpacityValue(segment2) ? {
				type: "color",
				hue,
				tint,
				opacity: Number(segment2)
			} : {
				type: "color",
				hue,
				tint
			};
		}
		return {
			type: "hue",
			value: hue
		};
	}
	if (isColorBlendModeValue(segment0)) return {
		type: "blendMode",
		value: segment0
	};
}
function compileColorTokenValue(node) {
	let key = "";
	return key = node.key === "black" || node.key === "white" ? node.key : `${node.hue}/${node.tint}`, node.mix === void 0 ? (node.opacity !== void 0 && (key += `/${node.opacity}`), key) : `${key} ${node.mix * 100}%`;
}
var DEFAULT_COLOR_TOKEN_VALUE = ["500", "500"];
function resolveColorTokenValue(context, value = DEFAULT_COLOR_TOKEN_VALUE) {
	let { hue, scheme } = context, node = parseTokenValue(value[scheme === "light" ? 0 : 1]);
	if (!node || node.type !== "color") throw Error(`Invalid color token: ${value[0]}`);
	return compileColorTokenValue({
		...node,
		hue: node.hue || hue
	});
}
var defaultColorTokens = {
	base: {
		"*": {
			_blend: ["multiply", "screen"],
			accent: { fg: ["purple/600", "purple/400"] },
			avatar: { "*": {
				_blend: ["screen", "multiply"],
				bg: ["500", "400"],
				fg: ["white", "black"]
			} },
			backdrop: ["gray/200/0.5", "black/0.5"],
			badge: {
				"*": {
					bg: ["100", "900"],
					fg: ["600", "400"],
					icon: ["500", "500"],
					dot: ["500", "500"]
				},
				positive: {
					bg: ["200 50%", "900"],
					fg: ["600", "500"]
				},
				caution: {
					bg: ["200 50%", "900"],
					fg: ["600", "500"]
				}
			},
			bg: ["50", "950"],
			border: ["200", "800"],
			code: {
				bg: ["50", "950"],
				fg: ["600", "400"]
			},
			fg: ["800", "200"],
			focusRing: ["blue/500", "blue/500"],
			icon: ["600", "400"],
			kbd: {
				bg: ["white", "black"],
				fg: ["600", "400"],
				border: ["200", "800"]
			},
			link: { fg: ["blue/600", "blue/300"] },
			muted: {
				bg: ["50", "950"],
				fg: ["700 75%", "300 75%"]
			},
			shadow: {
				outline: ["500/0.3", "500/0.4"],
				umbra: ["gray/500/0.1", "black/0.2"],
				penumbra: ["gray/500/0.07", "black/0.14"],
				ambient: ["gray/500/0.06", "black/0.12"]
			},
			skeleton: {
				from: ["100", "900"],
				to: ["100 50%", "900 50%"]
			}
		},
		transparent: { bg: ["50", "black"] },
		default: {
			bg: ["white", "950"],
			fg: ["800", "200"],
			muted: { fg: ["600", "400"] }
		},
		primary: { _hue: "blue" },
		suggest: { _hue: "purple" },
		positive: {
			_hue: "green",
			shadow: { outline: ["500/0.4", "500/0.4"] }
		},
		caution: {
			_hue: "yellow",
			shadow: { outline: ["600/0.3", "500/0.4"] }
		},
		critical: { _hue: "red" }
	},
	button: {
		default: {
			"*": {
				"*": {
					_blend: ["screen", "multiply"],
					accent: { fg: ["purple/300", "purple/700"] },
					avatar: { "*": {
						_blend: ["screen", "multiply"],
						bg: ["500", "400"],
						fg: ["white", "black"]
					} },
					badge: { "*": {
						bg: ["900", "100"],
						fg: ["400", "600"],
						dot: ["500", "500"],
						icon: ["500", "500"]
					} },
					bg: ["500", "400"],
					border: ["500/0", "400/0"],
					code: {
						bg: ["500 20%", "400 20%"],
						fg: ["200", "600"]
					},
					fg: ["white", "black"],
					icon: ["100 70%", "900 70%"],
					kbd: {
						bg: ["black", "white"],
						fg: ["200", "600"],
						border: ["800", "200"]
					},
					link: { fg: ["blue/200", "blue/600"] },
					muted: {
						bg: ["950", "50"],
						fg: ["100 70%", "900 70%"]
					},
					skeleton: {
						from: ["900", "100"],
						to: ["900 50%", "100 50%"]
					}
				},
				hovered: {
					bg: ["600", "300"],
					border: ["700/0", "300/0"]
				},
				pressed: { bg: ["700", "300"] },
				selected: { bg: ["700", "300"] },
				disabled: {
					_hue: "gray",
					accent: { fg: ["100 70%", "900 70%"] },
					avatar: { "*": {
						_blend: ["screen", "multiply"],
						bg: ["gray/500", "gray/400"],
						fg: ["white", "black"]
					} },
					badge: { "*": {
						bg: ["gray/700", "gray/300"],
						fg: ["white", "black"],
						dot: ["white", "black"],
						icon: ["white", "black"]
					} },
					bg: ["300", "600"],
					code: {
						bg: ["950", "50"],
						fg: ["300", "600"]
					},
					fg: ["300", "600"],
					muted: {
						bg: ["950", "50"],
						fg: ["300", "600"]
					},
					kbd: {
						bg: ["black", "white"],
						fg: ["white", "black"],
						border: ["700", "300"]
					},
					link: { fg: ["100 70%", "900 70%"] }
				}
			},
			default: {
				"*": {
					avatar: { "*": {
						_blend: ["screen", "multiply"],
						bg: ["500", "400"],
						fg: ["white", "black"]
					} },
					bg: ["800", "200"],
					muted: {
						bg: ["950", "50"],
						fg: ["400", "600"]
					}
				},
				hovered: { bg: ["900", "100"] },
				pressed: { bg: ["black", "white"] },
				selected: { bg: ["black", "white"] }
			}
		},
		ghost: {
			"*": {
				"*": {
					_blend: ["multiply", "screen"],
					accent: { fg: ["purple/700 60%", "purple/300 70%"] },
					avatar: { "*": {
						_blend: ["screen", "multiply"],
						bg: ["500", "400"],
						fg: ["white", "black"]
					} },
					badge: { "*": {
						bg: ["100", "900"],
						fg: ["600", "400"],
						dot: ["500", "500"],
						icon: ["500", "500"]
					} },
					bg: ["50", "950"],
					border: ["100", "900"],
					code: {
						bg: ["500 10%", "400 10%"],
						fg: ["700 60%", "400 60%"]
					},
					fg: ["600", "400"],
					icon: ["700 60%", "300 60%"],
					kbd: {
						bg: ["white", "black"],
						fg: ["600", "400"],
						border: ["200", "800"]
					},
					link: { fg: ["blue/700 60%", "blue/300 60%"] },
					muted: {
						bg: ["100", "950"],
						fg: ["700 60%", "300 60%"]
					},
					skeleton: {
						from: ["100", "900"],
						to: ["100 50%", "900 50%"]
					}
				},
				hovered: {
					bg: ["100", "900"],
					fg: ["700", "300"]
				},
				pressed: {
					bg: ["200", "800"],
					fg: ["800", "200"]
				},
				selected: {
					bg: ["200", "800"],
					fg: ["800", "200"]
				},
				disabled: {
					_hue: "gray",
					accent: { fg: ["200", "800"] },
					avatar: { "*": {
						_blend: ["screen", "multiply"],
						bg: ["gray/100", "gray/900"],
						fg: ["white", "black"]
					} },
					badge: { "*": {
						_hue: "gray",
						bg: ["50", "950"],
						fg: ["gray/200", "gray/800"],
						dot: ["gray/200", "gray/800"],
						icon: ["gray/200", "gray/800"]
					} },
					border: ["100", "900"],
					code: {
						bg: ["50", "950"],
						fg: ["200", "800"]
					},
					fg: ["400", "600"],
					icon: ["300", "700"],
					muted: { fg: ["300", "700"] },
					kbd: {
						bg: ["white", "black"],
						fg: ["200", "800"],
						border: ["100", "900"]
					},
					link: { fg: ["200", "800"] }
				}
			},
			positive: { "*": { border: ["600 20%", "800"] } },
			caution: { "*": { border: ["600 20%", "800"] } }
		},
		bleed: { "*": {
			"*": {
				_blend: ["multiply", "screen"],
				accent: { fg: ["purple/700 70%", "purple/300 70%"] },
				avatar: { "*": {
					_blend: ["screen", "multiply"],
					bg: ["500", "400"],
					fg: ["white", "black"]
				} },
				badge: { "*": {
					bg: ["100", "900"],
					fg: ["600", "400"],
					dot: ["500", "500"],
					icon: ["500", "500"]
				} },
				bg: ["white", "black"],
				border: ["white/0", "black/0"],
				code: {
					bg: ["50", "950"],
					fg: ["700 75%", "300 75%"]
				},
				fg: ["700", "300"],
				icon: ["700 75%", "300 75%"],
				kbd: {
					bg: ["white", "black"],
					fg: ["700", "300"],
					border: ["200", "800"]
				},
				link: { fg: ["blue/700 70%", "blue/300 70%"] },
				muted: {
					bg: ["100", "950"],
					fg: ["700 75%", "300 75%"]
				},
				skeleton: {
					from: ["100", "900"],
					to: ["100 50%", "900 50%"]
				}
			},
			hovered: {
				bg: ["50", "900"],
				fg: ["800", "200"],
				icon: ["800 70%", "300 70%"]
			},
			pressed: {
				bg: ["100", "800"],
				fg: ["800", "200"],
				icon: ["800 70%", "200 70%"]
			},
			selected: {
				bg: ["100", "900"],
				fg: ["800", "200"],
				icon: ["800 60%", "200 60%"]
			},
			disabled: {
				_hue: "gray",
				accent: { fg: ["200", "800"] },
				avatar: { "*": {
					_blend: ["screen", "multiply"],
					bg: ["gray/100", "gray/900"],
					fg: ["white", "black"]
				} },
				badge: { "*": {
					_hue: "gray",
					bg: ["50", "950"],
					fg: ["gray/200", "gray/800"],
					dot: ["gray/200", "gray/800"],
					icon: ["gray/200", "gray/800"]
				} },
				code: {
					bg: ["50", "950"],
					fg: ["200", "800"]
				},
				fg: ["400", "600"],
				icon: ["300", "700"],
				muted: { fg: ["400", "600"] },
				kbd: {
					bg: ["white", "black"],
					fg: ["200", "800"],
					border: ["100", "900"]
				},
				link: { fg: ["200", "800"] }
			}
		} }
	},
	input: {
		"*": {
			"*": {
				_blend: ["multiply", "screen"],
				bg: ["white", "black"],
				border: ["200", "700"],
				fg: ["black", "200"],
				muted: { bg: ["50", "950"] },
				placeholder: ["400", "600"]
			},
			hovered: { border: ["300", "700"] },
			readOnly: {
				bg: ["50", "950"],
				border: ["200", "800"],
				fg: ["800", "200"]
			},
			disabled: {
				bg: ["50", "950"],
				fg: ["400", "600"],
				border: ["100", "900"],
				placeholder: ["200", "800 50%"]
			}
		},
		invalid: { "*": {
			_hue: "red",
			bg: ["100", "950"]
		} }
	},
	selectable: {
		"*": {
			"*": {
				_blend: ["multiply", "screen"],
				accent: { fg: ["purple/700 70%", "purple/300 70%"] },
				avatar: { "*": {
					_blend: ["screen", "multiply"],
					bg: ["500", "400"],
					fg: ["white", "black"]
				} },
				badge: { "*": {
					bg: ["100", "900"],
					fg: ["600", "400"],
					dot: ["500", "500"],
					icon: ["500", "500"]
				} },
				bg: ["white", "black"],
				border: ["200", "800"],
				code: {
					bg: ["50", "950"],
					fg: ["600", "400"]
				},
				fg: ["700", "300"],
				icon: ["700 75%", "300 75%"],
				kbd: {
					bg: ["white", "black"],
					fg: ["600", "400"],
					border: ["200", "800"]
				},
				link: { fg: ["blue/700 70%", "blue/300 70%"] },
				muted: {
					bg: ["50", "950"],
					fg: ["700 75%", "300 75%"]
				},
				skeleton: {
					from: ["100", "900"],
					to: ["100 50%", "900 50%"]
				}
			},
			hovered: { bg: ["50", "950"] },
			pressed: { bg: ["100", "900"] },
			selected: {
				_blend: ["screen", "multiply"],
				accent: { fg: ["purple/300", "purple/700"] },
				avatar: { "*": {
					_blend: ["multiply", "screen"],
					bg: ["white", "black"],
					fg: ["black", "white"]
				} },
				badge: { "*": {
					bg: ["900", "100"],
					fg: ["400", "600"],
					dot: ["500", "500"],
					icon: ["500", "500"]
				} },
				bg: ["500", "400"],
				border: ["500 20%", "400 20%"],
				code: {
					bg: ["500 20%", "400 20%"],
					fg: ["200", "600"]
				},
				fg: ["white", "black"],
				icon: ["100 70%", "900 70%"],
				kbd: {
					bg: ["black", "white"],
					fg: ["200", "600"],
					border: ["800", "200"]
				},
				link: { fg: ["blue/200", "blue/600"] },
				muted: {
					bg: ["500 10%", "400 10%"],
					fg: ["100 70%", "900 70%"]
				},
				skeleton: {
					from: ["900", "100"],
					to: ["900 50%", "100 50%"]
				}
			},
			disabled: {
				_hue: "gray",
				accent: { fg: ["200", "800"] },
				avatar: { "*": {
					_blend: ["screen", "multiply"],
					bg: ["gray/100", "gray/900"],
					fg: ["white", "black"]
				} },
				badge: { "*": {
					_hue: "gray",
					bg: ["50", "950"],
					fg: ["gray/200", "gray/800"],
					dot: ["gray/200", "gray/800"],
					icon: ["gray/200", "gray/800"]
				} },
				border: ["100", "900"],
				code: {
					bg: ["50", "950"],
					fg: ["200", "800"]
				},
				fg: ["200", "800"],
				icon: ["200", "800"],
				kbd: {
					bg: ["white", "black"],
					fg: ["200", "800"],
					border: ["100", "900"]
				},
				link: { fg: ["200", "800"] },
				muted: {
					bg: ["50 50%", "950 50%"],
					fg: ["200", "800"]
				}
			}
		},
		default: { selected: { _hue: "blue" } },
		critical: { disabled: { bg: ["50 50%", "950 50%"] } }
	},
	syntax: {
		atrule: ["purple/600", "purple/400"],
		attrName: ["green/600", "green/400"],
		attrValue: ["yellow/600", "yellow/400"],
		attribute: ["yellow/600", "yellow/400"],
		boolean: ["purple/600", "purple/400"],
		builtin: ["purple/600", "purple/400"],
		cdata: ["yellow/600", "yellow/400"],
		char: ["yellow/600", "yellow/400"],
		class: ["orange/600", "orange/400"],
		className: ["cyan/600", "cyan/400"],
		comment: ["gray/400", "gray/600"],
		constant: ["purple/600", "purple/400"],
		deleted: ["red/600", "red/400"],
		entity: ["red/600", "red/400"],
		function: ["green/600", "green/400"],
		hexcode: ["blue/600", "blue/400"],
		id: ["purple/600", "purple/400"],
		important: ["purple/600", "purple/400"],
		inserted: ["yellow/600", "yellow/400"],
		keyword: ["magenta/600", "magenta/400"],
		number: ["purple/600", "purple/400"],
		operator: ["magenta/600", "magenta/400"],
		property: ["blue/600", "blue/400"],
		pseudoClass: ["yellow/600", "yellow/400"],
		pseudoElement: ["yellow/600", "yellow/400"],
		punctuation: ["gray/600", "gray/400"],
		regex: ["blue/600", "blue/400"],
		selector: ["red/600", "red/400"],
		string: ["yellow/600", "yellow/400"],
		symbol: ["purple/600", "purple/400"],
		tag: ["red/600", "red/400"],
		unit: ["orange/600", "orange/400"],
		url: ["red/600", "red/400"],
		variable: ["red/600", "red/400"]
	}
};
function isRecord(value) {
	return !(!value || typeof value != "object" || Array.isArray(value));
}
function merge(...records) {
	let _records = records.filter(Boolean);
	return _records.length === 0 ? {} : _records.reduce(_merge, {});
}
function _merge(acc, source) {
	for (let key of Object.keys(source)) {
		let prevValue = acc[key], nextValue = source[key];
		acc[key] = isRecord(prevValue) && isRecord(nextValue) ? merge(prevValue, nextValue) : nextValue;
	}
	return acc;
}
/**
* Convert a tree of color tokens from a sparse format to a dense format.
*/
function resolveColorTokens(inputTokens) {
	let tokens = merge(defaultColorTokens, inputTokens);
	return {
		base: resolveBaseColorTokens(tokens),
		button: resolveButtonColorTokens(tokens),
		input: resolveInputColorTokens(tokens),
		selectable: resolveSelectableColorTokens(tokens),
		syntax: tokens.syntax
	};
}
function resolveBaseColorTokens(sparseTokens) {
	let tokens = {};
	for (let tone of THEME_COLOR_CARD_TONES) tokens[tone] = resolveBaseColorTones(sparseTokens, tone);
	return tokens;
}
function resolveBaseColorTones(inputTokens, tone) {
	let spec = merge(inputTokens?.base?.["*"], inputTokens?.base?.[tone]), hue = spec._hue || inputTokens?.base?.[tone]?._hue || "gray";
	return {
		...spec,
		_hue: hue,
		avatar: COLOR_HUES.reduce((acc, hue) => ({
			...acc,
			[hue]: merge({ _hue: hue }, spec.avatar?.["*"], spec.avatar?.[hue])
		}), {}),
		badge: THEME_COLOR_STATE_TONES.reduce((acc, tone) => ({
			...acc,
			[tone]: {
				_hue: inputTokens?.base?.[tone]?._hue || hue,
				...spec.badge?.["*"],
				...spec.badge?.[tone]
			}
		}), {})
	};
}
function resolveButtonColorTokens(inputTokens) {
	let tokens = {};
	for (let mode of THEME_COLOR_BUTTON_MODES) tokens[mode] = resolveButtonToneColorTokens(inputTokens, mode);
	return tokens;
}
function resolveButtonToneColorTokens(inputTokens, mode) {
	let tokens = {};
	for (let tone of THEME_COLOR_STATE_TONES) tokens[tone] = resolveButtonModeColorTokens(inputTokens, mode, tone);
	return tokens;
}
function resolveButtonModeColorTokens(inputTokens, mode, tone) {
	let tokens = {};
	for (let state of THEME_COLOR_STATES) tokens[state] = resolveButtonStateColorTokens(inputTokens, tone, mode, state);
	return tokens;
}
function resolveButtonStateColorTokens(inputTokens, tone, mode, state) {
	let spec = merge(inputTokens?.button?.[mode]?.["*"]?.["*"], inputTokens?.button?.[mode]?.[tone]?.["*"], inputTokens?.button?.[mode]?.["*"]?.[state], inputTokens?.button?.[mode]?.[tone]?.[state]), hue = spec._hue || inputTokens?.base?.[tone]?._hue;
	return {
		...spec,
		_hue: hue,
		avatar: COLOR_HUES.reduce((acc, hue) => ({
			...acc,
			[hue]: merge({ _hue: hue }, spec.avatar?.["*"], spec.avatar?.[hue])
		}), {}),
		badge: THEME_COLOR_STATE_TONES.reduce((acc, tone) => ({
			...acc,
			[tone]: {
				_hue: inputTokens?.base?.[tone]?._hue || hue,
				...spec.badge?.["*"],
				...spec.badge?.[tone]
			}
		}), {})
	};
}
function resolveInputColorTokens(inputTokens) {
	let tokens = {};
	for (let mode of THEME_COLOR_INPUT_MODES) tokens[mode] = resolveInputModeColorTokens(inputTokens, mode);
	return tokens;
}
function resolveInputModeColorTokens(inputTokens, mode) {
	let states = {};
	for (let state of THEME_COLOR_INPUT_STATES) states[state] = resolveInputStateColorTokens(inputTokens, mode, state);
	return states;
}
function resolveInputStateColorTokens(inputTokens, mode, state) {
	let spec = merge(inputTokens?.input?.["*"]?.["*"], inputTokens?.input?.[mode]?.["*"], inputTokens?.input?.["*"]?.[state], inputTokens?.input?.[mode]?.[state]), hue = spec._hue || inputTokens?.input?.[mode]?._hue;
	return {
		...spec,
		_hue: hue
	};
}
function resolveSelectableColorTokens(inputTokens) {
	let tokens = {};
	for (let tone of THEME_COLOR_STATE_TONES) tokens[tone] = resolveSelectableToneColorTokens(inputTokens, tone);
	return tokens;
}
function resolveSelectableToneColorTokens(inputTokens, tone) {
	let states = { _hue: inputTokens?.selectable?.[tone]?._hue || inputTokens?.base?.[tone]?._hue };
	for (let state of THEME_COLOR_STATES) states[state] = resolveSelectableStateColorTokens(inputTokens, tone, state);
	return states;
}
function resolveSelectableStateColorTokens(inputTokens, tone, state) {
	let spec = merge(inputTokens?.selectable?.["*"]?.["*"], inputTokens?.selectable?.[tone]?.["*"], inputTokens?.selectable?.["*"]?.[state], inputTokens?.selectable?.[tone]?.[state]), hue = spec._hue || inputTokens?.base?.[tone]?._hue;
	return {
		...spec,
		_hue: hue,
		avatar: COLOR_HUES.reduce((acc, hue) => ({
			...acc,
			[hue]: merge({ _hue: hue }, spec.avatar?.["*"], spec.avatar?.[hue])
		}), {}),
		badge: THEME_COLOR_STATE_TONES.reduce((acc, tone) => ({
			...acc,
			[tone]: {
				_hue: inputTokens?.base?.[tone]?._hue || hue,
				...spec.badge?.["*"],
				...spec.badge?.[tone]
			}
		}), {})
	};
}
function buildColorTheme(config) {
	let resolvedConfig = {
		...config,
		color: resolveColorTokens(config?.color)
	}, schemes = {};
	return defineLazyProperty(schemes, "light", () => buildColorScheme({ scheme: "light" }, resolvedConfig)), defineLazyProperty(schemes, "dark", () => buildColorScheme({ scheme: "dark" }, resolvedConfig)), schemes;
}
function buildColorScheme(options, config) {
	let { scheme } = options, colorScheme = {};
	for (let tone of THEME_COLOR_CARD_TONES) defineLazyProperty(colorScheme, tone, () => buildCardColorTheme({
		scheme,
		tone
	}, config));
	return colorScheme;
}
function buildCardColorTheme(options, config) {
	let { scheme, tone } = options, tokens = config?.color?.base?.[tone], context = {
		hue: tokens?._hue || "gray",
		scheme
	};
	return {
		_blend: (tokens?._blend || ["multiply", "screen"])[scheme === "light" ? 0 : 1],
		_dark: scheme === "dark",
		accent: { fg: resolveColorTokenValue(context, tokens?.accent?.fg) },
		avatar: buildAvatarColorTheme({ scheme }, tokens),
		backdrop: resolveColorTokenValue(context, tokens?.backdrop),
		badge: buildBadgeColorTheme(tokens?.badge, { scheme }, config),
		bg: resolveColorTokenValue(context, tokens?.bg),
		border: resolveColorTokenValue(context, tokens?.border),
		button: buildButtonColorTheme({
			scheme,
			tone
		}, config),
		code: {
			bg: resolveColorTokenValue(context, tokens?.code?.bg),
			fg: resolveColorTokenValue(context, tokens?.code?.fg)
		},
		fg: resolveColorTokenValue(context, tokens?.fg),
		focusRing: resolveColorTokenValue(context, tokens?.focusRing),
		icon: resolveColorTokenValue(context, tokens?.icon),
		input: buildInputColorTheme({
			scheme,
			tone
		}, config),
		kbd: {
			bg: resolveColorTokenValue(context, tokens?.kbd?.bg),
			fg: resolveColorTokenValue(context, tokens?.kbd?.fg),
			border: resolveColorTokenValue(context, tokens?.kbd?.border)
		},
		link: { fg: resolveColorTokenValue(context, tokens?.link?.fg) },
		muted: {
			bg: resolveColorTokenValue(context, tokens?.muted?.bg),
			fg: resolveColorTokenValue(context, tokens?.muted?.fg)
		},
		selectable: buildSelectableColorTheme({
			scheme,
			tone
		}, config),
		shadow: buildShadowColorTheme({
			scheme,
			tone
		}, config),
		skeleton: {
			from: resolveColorTokenValue(context, tokens?.skeleton?.from),
			to: resolveColorTokenValue(context, tokens?.skeleton?.to)
		},
		syntax: buildSyntaxColorTheme({ scheme }, config)
	};
}
function buildShadowColorTheme(options, config) {
	let { scheme, tone } = options, tokens = config?.color?.base?.[tone], context = {
		hue: tokens?._hue || "gray",
		scheme
	};
	return {
		outline: resolveColorTokenValue(context, tokens?.shadow?.outline),
		umbra: resolveColorTokenValue(context, tokens?.shadow?.umbra),
		penumbra: resolveColorTokenValue(context, tokens?.shadow?.penumbra),
		ambient: resolveColorTokenValue(context, tokens?.shadow?.ambient)
	};
}
function buildAvatarColorTheme(options, stateTokens) {
	let { scheme } = options;
	return {
		gray: _buildAvatarColorTheme({
			color: "gray",
			scheme
		}, stateTokens),
		blue: _buildAvatarColorTheme({
			color: "blue",
			scheme
		}, stateTokens),
		purple: _buildAvatarColorTheme({
			color: "purple",
			scheme
		}, stateTokens),
		magenta: _buildAvatarColorTheme({
			color: "magenta",
			scheme
		}, stateTokens),
		red: _buildAvatarColorTheme({
			color: "red",
			scheme
		}, stateTokens),
		orange: _buildAvatarColorTheme({
			color: "orange",
			scheme
		}, stateTokens),
		yellow: _buildAvatarColorTheme({
			color: "yellow",
			scheme
		}, stateTokens),
		green: _buildAvatarColorTheme({
			color: "green",
			scheme
		}, stateTokens),
		cyan: _buildAvatarColorTheme({
			color: "cyan",
			scheme
		}, stateTokens)
	};
}
function _buildAvatarColorTheme(options, stateTokens) {
	let { color, scheme } = options, tokens = stateTokens?.avatar?.[color], context = {
		hue: tokens?._hue || "gray",
		scheme
	};
	return {
		_blend: (tokens?._blend || ["screen", "multiply"])[scheme === "light" ? 0 : 1],
		bg: resolveColorTokenValue(context, tokens?.bg),
		fg: resolveColorTokenValue(context, tokens?.fg)
	};
}
function buildBadgeColorTheme(tokens, options, config) {
	let { scheme } = options, colorBadge = {};
	for (let tone of THEME_COLOR_STATE_TONES) colorBadge[tone] = _buildBadgeColorTheme(tokens, {
		scheme,
		tone
	}, config);
	return colorBadge;
}
function _buildBadgeColorTheme(parentTokens, options, config) {
	let { scheme, tone } = options, tokens = parentTokens?.[tone], context = {
		hue: tokens?._hue || config?.color?.base?.[tone]?._hue || "gray",
		scheme
	};
	return {
		bg: resolveColorTokenValue(context, tokens?.bg),
		fg: resolveColorTokenValue(context, tokens?.fg),
		dot: resolveColorTokenValue(context, tokens?.dot),
		icon: resolveColorTokenValue(context, tokens?.icon)
	};
}
function buildButtonColorTheme(options, config) {
	let { scheme, tone: cardTone } = options, modes = {};
	for (let mode of THEME_COLOR_BUTTON_MODES) modes[mode] = buildButtonTonesColorTheme({
		cardTone,
		scheme,
		mode
	}, config);
	return modes;
}
function buildButtonTonesColorTheme(options, config) {
	let { cardTone, mode, scheme } = options, tones = {};
	for (let tone of THEME_COLOR_STATE_TONES) tones[tone] = buildButtonStatesColorTheme({
		cardTone,
		mode,
		scheme,
		tone
	}, config);
	return tones;
}
function buildButtonStatesColorTheme(options, config) {
	let { cardTone, mode, scheme, tone } = options, states = {};
	for (let state of THEME_COLOR_STATES) states[state] = buildButtonStateColorTheme({
		cardTone,
		mode,
		tone,
		scheme,
		state
	}, config);
	return states;
}
function buildButtonStateColorTheme(options, config) {
	let { cardTone, mode, tone, scheme, state } = options, cardTokens = config?.color?.base?.[cardTone], tokens = config?.color?.button?.[mode]?.[tone]?.[state], hue = tokens?._hue || cardTokens?._hue || "gray", blendMode = tokens?._blend || ["screen", "multiply"], context = {
		hue,
		scheme
	};
	return {
		_blend: blendMode[scheme === "light" ? 0 : 1],
		accent: { fg: resolveColorTokenValue(context, tokens?.accent?.fg) },
		avatar: buildAvatarColorTheme({ scheme }, tokens),
		badge: buildBadgeColorTheme(tokens?.badge, { scheme }, config),
		bg: resolveColorTokenValue(context, tokens?.bg),
		border: resolveColorTokenValue(context, tokens?.border),
		code: {
			bg: resolveColorTokenValue(context, tokens?.code?.bg),
			fg: resolveColorTokenValue(context, tokens?.code?.fg)
		},
		fg: resolveColorTokenValue(context, tokens?.fg),
		icon: resolveColorTokenValue(context, tokens?.icon),
		muted: {
			bg: resolveColorTokenValue(context, tokens?.muted?.bg),
			fg: resolveColorTokenValue(context, tokens?.muted?.fg)
		},
		kbd: {
			bg: resolveColorTokenValue(context, tokens?.kbd?.bg),
			fg: resolveColorTokenValue(context, tokens?.kbd?.fg),
			border: resolveColorTokenValue(context, tokens?.kbd?.border)
		},
		link: { fg: resolveColorTokenValue(context, tokens?.link?.fg) },
		skeleton: {
			from: resolveColorTokenValue(context, tokens?.skeleton?.from),
			to: resolveColorTokenValue(context, tokens?.skeleton?.to)
		}
	};
}
function buildInputColorTheme(options, config) {
	let { scheme, tone } = options;
	return {
		default: buildInputStatesColorTheme({
			mode: "default",
			scheme,
			tone
		}, config),
		invalid: buildInputStatesColorTheme({
			mode: "invalid",
			scheme,
			tone
		}, config)
	};
}
function buildInputStatesColorTheme(options, config) {
	let { mode, scheme, tone } = options;
	return {
		enabled: buildInputStateColorTheme({
			mode,
			scheme,
			state: "enabled",
			cardTone: tone
		}, config),
		hovered: buildInputStateColorTheme({
			mode,
			scheme,
			state: "hovered",
			cardTone: tone
		}, config),
		readOnly: buildInputStateColorTheme({
			mode,
			scheme,
			state: "readOnly",
			cardTone: tone
		}, config),
		disabled: buildInputStateColorTheme({
			mode,
			scheme,
			state: "disabled",
			cardTone: tone
		}, config)
	};
}
function buildInputStateColorTheme(options, config) {
	let { cardTone, mode, scheme, state } = options, cardTokens = config?.color?.base?.[cardTone], tokens = config?.color?.input?.[mode]?.[state], hue = tokens?._hue || cardTokens?._hue || "gray", blendMode = tokens?._blend || ["screen", "multiply"], context = {
		hue,
		scheme
	};
	return {
		_blend: blendMode[scheme === "light" ? 0 : 1],
		bg: resolveColorTokenValue(context, tokens?.bg),
		border: resolveColorTokenValue(context, tokens?.border),
		fg: resolveColorTokenValue(context, tokens?.fg),
		muted: { bg: resolveColorTokenValue(context, tokens?.muted?.bg) },
		placeholder: resolveColorTokenValue(context, tokens?.placeholder)
	};
}
function buildSelectableColorTheme(options, config) {
	let { scheme, tone: cardTone } = options, tones = {};
	for (let tone of THEME_COLOR_STATE_TONES) tones[tone] = buildSelectableStatesColorTheme({
		cardTone,
		scheme,
		tone
	}, config);
	return tones;
}
function buildSelectableStatesColorTheme(options, config) {
	let { cardTone, scheme, tone } = options, states = {};
	for (let state of THEME_COLOR_STATES) states[state] = buildSelectableStateColorTheme({
		cardTone,
		tone,
		scheme,
		state
	}, config);
	return states;
}
function buildSelectableStateColorTheme(options, config) {
	let { cardTone, scheme, state, tone } = options, cardTokens = config?.color?.base?.[cardTone], tokens = config?.color?.selectable?.[tone]?.[state], hue = tokens?._hue || cardTokens?._hue || "gray", blendMode = tokens?._blend || ["screen", "multiply"], context = {
		hue,
		scheme
	};
	return {
		_blend: blendMode[scheme === "light" ? 0 : 1],
		accent: { fg: resolveColorTokenValue(context, tokens?.accent?.fg) },
		avatar: buildAvatarColorTheme({ scheme }, tokens),
		badge: buildBadgeColorTheme(tokens?.badge, { scheme }, config),
		bg: resolveColorTokenValue(context, tokens?.bg),
		border: resolveColorTokenValue(context, tokens?.border),
		code: {
			bg: resolveColorTokenValue(context, tokens?.code?.bg),
			fg: resolveColorTokenValue(context, tokens?.code?.fg)
		},
		fg: resolveColorTokenValue(context, tokens?.fg),
		icon: resolveColorTokenValue(context, tokens?.icon),
		muted: {
			bg: resolveColorTokenValue(context, tokens?.muted?.bg),
			fg: resolveColorTokenValue(context, tokens?.muted?.fg)
		},
		kbd: {
			bg: resolveColorTokenValue(context, tokens?.kbd?.bg),
			fg: resolveColorTokenValue(context, tokens?.kbd?.fg),
			border: resolveColorTokenValue(context, tokens?.kbd?.border)
		},
		link: { fg: resolveColorTokenValue(context, tokens?.link?.fg) },
		skeleton: {
			from: resolveColorTokenValue(context, tokens?.skeleton?.from),
			to: resolveColorTokenValue(context, tokens?.skeleton?.to)
		}
	};
}
function buildSyntaxColorTheme(options, config) {
	let { scheme } = options, tokens = config?.color?.syntax, context = {
		hue: "gray",
		scheme
	};
	return {
		atrule: resolveColorTokenValue(context, tokens?.atrule),
		attrName: resolveColorTokenValue(context, tokens?.attrName),
		attrValue: resolveColorTokenValue(context, tokens?.attrValue),
		attribute: resolveColorTokenValue(context, tokens?.attribute),
		boolean: resolveColorTokenValue(context, tokens?.boolean),
		builtin: resolveColorTokenValue(context, tokens?.builtin),
		cdata: resolveColorTokenValue(context, tokens?.cdata),
		char: resolveColorTokenValue(context, tokens?.char),
		class: resolveColorTokenValue(context, tokens?.class),
		className: resolveColorTokenValue(context, tokens?.className),
		comment: resolveColorTokenValue(context, tokens?.comment),
		constant: resolveColorTokenValue(context, tokens?.constant),
		deleted: resolveColorTokenValue(context, tokens?.deleted),
		doctype: resolveColorTokenValue(context, tokens?.doctype),
		entity: resolveColorTokenValue(context, tokens?.entity),
		function: resolveColorTokenValue(context, tokens?.function),
		hexcode: resolveColorTokenValue(context, tokens?.hexcode),
		id: resolveColorTokenValue(context, tokens?.id),
		important: resolveColorTokenValue(context, tokens?.important),
		inserted: resolveColorTokenValue(context, tokens?.inserted),
		keyword: resolveColorTokenValue(context, tokens?.keyword),
		number: resolveColorTokenValue(context, tokens?.number),
		operator: resolveColorTokenValue(context, tokens?.operator),
		prolog: resolveColorTokenValue(context, tokens?.prolog),
		property: resolveColorTokenValue(context, tokens?.property),
		pseudoClass: resolveColorTokenValue(context, tokens?.pseudoClass),
		pseudoElement: resolveColorTokenValue(context, tokens?.pseudoElement),
		punctuation: resolveColorTokenValue(context, tokens?.punctuation),
		regex: resolveColorTokenValue(context, tokens?.regex),
		selector: resolveColorTokenValue(context, tokens?.selector),
		string: resolveColorTokenValue(context, tokens?.string),
		symbol: resolveColorTokenValue(context, tokens?.symbol),
		tag: resolveColorTokenValue(context, tokens?.tag),
		unit: resolveColorTokenValue(context, tokens?.unit),
		url: resolveColorTokenValue(context, tokens?.url),
		variable: resolveColorTokenValue(context, tokens?.variable)
	};
}
var defaultColorPalette = color;
function mixChannel(b, s, weight) {
	return b + (s - b) * weight;
}
/**
* Apply the \`mix\` blend mode
* @internal
*/
function mix(b, s, weight) {
	return {
		r: mixChannel(b.r, s.r, weight),
		g: mixChannel(b.g, s.g, weight),
		b: mixChannel(b.b, s.b, weight)
	};
}
function lerp(x, y, a) {
	return x * (1 - a) + y * a;
}
function invlerp(x, y, a) {
	return clamp((a - x) / (y - x));
}
function clamp(a, min = 0, max = 1) {
	return Math.min(max, Math.max(min, a));
}
function range(x1, y1, x2, y2, a) {
	return lerp(x2, y2, invlerp(x1, y1, a));
}
function round(value) {
	return Math.round(value);
}
/**
* @internal
*/
function hexToRgb(hex) {
	if (hex.length === 4) {
		let hexR = hex.slice(1, 2), hexG = hex.slice(2, 3), hexB = hex.slice(3, 4);
		return {
			r: parseInt(hexR + hexR, 16),
			g: parseInt(hexG + hexG, 16),
			b: parseInt(hexB + hexB, 16)
		};
	}
	return {
		r: parseInt(hex.slice(1, 3), 16),
		g: parseInt(hex.slice(3, 5), 16),
		b: parseInt(hex.slice(5, 7), 16)
	};
}
/**
* @internal
*/
function rgbaToRGBA(rgba) {
	let values = rgba.replace(/rgba\(|\)/g, "").split(",");
	return {
		r: parseInt(values[0]),
		g: parseInt(values[1]),
		b: parseInt(values[2]),
		a: parseFloat(values[3])
	};
}
/**
* @internal
*/
function rgbToHex(color) {
	let r = round(clamp(Math.round(color.r), 0, 255)), g = round(clamp(Math.round(color.g), 0, 255)), b = round(clamp(Math.round(color.b), 0, 255));
	return "a" in color ? `rgba(${r},${g},${b},${color.a})` : "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
/**
* @internal
*/
function hslToRgb(hsl) {
	let s = hsl.s / 100, l = hsl.l / 100, c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(hsl.h / 60 % 2 - 1)), m = l - c / 2, r = 0, g = 0, b = 0;
	return 0 <= hsl.h && hsl.h < 60 ? (r = c, g = x, b = 0) : 60 <= hsl.h && hsl.h < 120 ? (r = x, g = c, b = 0) : 120 <= hsl.h && hsl.h < 180 ? (r = 0, g = c, b = x) : 180 <= hsl.h && hsl.h < 240 ? (r = 0, g = x, b = c) : 240 <= hsl.h && hsl.h < 300 ? (r = x, g = 0, b = c) : 300 <= hsl.h && hsl.h < 360 && (r = c, g = 0, b = x), {
		r: Math.round((r + m) * 255),
		g: Math.round((g + m) * 255),
		b: Math.round((b + m) * 255)
	};
}
var HSL_RE = /hsl\(\s*(\d+)\s*,\s*((\d+(?:\.\d+)?)%)\s*,\s*((\d+(?:\.\d+)?)%)\s*\)/i;
function isHexChars(str) {
	for (let c of str) if ("0123456789ABCDEFabcdef".indexOf(c) === -1) return !1;
	return !0;
}
function isHex(str) {
	return str[0] !== "#" || str.length !== 4 && str.length !== 7 ? !1 : isHexChars(str.slice(1));
}
function parseHsl(str) {
	let res = HSL_RE.exec(str);
	if (!res) throw Error(`parseHsl: string is not a HSL color: "${str}"`);
	return {
		h: parseInt(res[1]),
		s: parseFloat(res[3]),
		l: parseFloat(res[5])
	};
}
/**
* @internal
*/
function parseColor(color) {
	if (!color) return {
		r: 0,
		g: 0,
		b: 0
	};
	if (typeof color != "string") throw Error("parseColor: expected a string");
	if (isHex(color)) return hexToRgb(color);
	if (color.startsWith("hsl(")) return hslToRgb(parseHsl(color));
	if (color.startsWith("rgba(")) return rgbaToRGBA(color);
	throw Error(`parseColor: unexpected color format: "${color}"`);
}
/**
* @internal
*/
function rgba$1(color, a) {
	let rgb = parseColor(color);
	return `rgba(${rgb.r},${rgb.g},${rgb.b},${a})`;
}
function multiplyChannel(b, s) {
	return b * s;
}
/**
* Apply the \`multiply\` blend mode
* Source: https://www.w3.org/TR/compositing-1/#blendingmultiply
* @internal
*/
function multiply(b, s) {
	return {
		r: multiplyChannel(b.r / 255, s.r / 255) * 255,
		g: multiplyChannel(b.g / 255, s.g / 255) * 255,
		b: multiplyChannel(b.b / 255, s.b / 255) * 255
	};
}
function screenChannel(b, s) {
	return b + s - b * s;
}
/**
* Apply the \`screen\` blend mode
* Source: https://www.w3.org/TR/compositing-1/#blendingscreen
* @internal
*/
function screen(b, s) {
	return {
		r: screenChannel(b.r / 255, s.r / 255) * 255,
		g: screenChannel(b.g / 255, s.g / 255) * 255,
		b: screenChannel(b.b / 255, s.b / 255) * 255
	};
}
var RGB_RANGE = [0, 255];
function mixThemeColor(value, options) {
	let { blendMode } = options, color = parseColor(value), black = parseColor(options.black), white = parseColor(options.white), bg = options.bg ? parseColor(options.bg) : blendMode === "multiply" ? white : black, paletteRange = {
		r: [black.r, white.r],
		g: [black.g, white.g],
		b: [black.b, white.b]
	}, convertedBgColor = {
		r: clamp(range(...paletteRange.r, ...RGB_RANGE, bg.r), ...RGB_RANGE),
		g: clamp(range(...paletteRange.g, ...RGB_RANGE, bg.g), ...RGB_RANGE),
		b: clamp(range(...paletteRange.b, ...RGB_RANGE, bg.b), ...RGB_RANGE)
	}, convertedColor = {
		r: clamp(range(...paletteRange.r, ...RGB_RANGE, color.r), ...RGB_RANGE),
		g: clamp(range(...paletteRange.g, ...RGB_RANGE, color.g), ...RGB_RANGE),
		b: clamp(range(...paletteRange.b, ...RGB_RANGE, color.b), ...RGB_RANGE)
	}, resultColor = blendMode === "multiply" ? multiply(convertedBgColor, convertedColor) : screen(convertedBgColor, convertedColor);
	return rgbToHex({
		r: clamp(range(...RGB_RANGE, ...paletteRange.r, resultColor.r), ...paletteRange.r),
		g: clamp(range(...RGB_RANGE, ...paletteRange.g, resultColor.g), ...paletteRange.g),
		b: clamp(range(...RGB_RANGE, ...paletteRange.b, resultColor.b), ...paletteRange.b)
	});
}
function renderColorValue(str, options) {
	let { bg, blendMode, colorPalette } = options;
	if (bg === "white") throw Error("Cannot blend with white background");
	let node = parseTokenValue(str);
	if (!node || node.type !== "color") throw Error(`Invalid color token value: ${str}`);
	let hex = "";
	if (node.key === "black" && (hex = renderColorHex(colorPalette.black)), node.key === "white" && (hex = renderColorHex(colorPalette.white)), node.hue && node.tint && (hex = renderColorHex(colorPalette[node.hue][node.tint])), !hex) throw Error(`Invalid color token value: ${str}`);
	let hexBeforeMix = hex, mixOptions = {
		blendMode,
		bg,
		black: renderColorHex(colorPalette.black),
		white: renderColorHex(colorPalette.white)
	};
	try {
		hex = mixThemeColor(hex, mixOptions), bg && node.mix !== void 0 && (hex = rgbToHex(mix(hexToRgb(bg), hexToRgb(hex), node.mix)));
	} catch (err) {
		throw console.warn("could not blend", hex, mixOptions), err;
	}
	return hex === "#aN" && (console.warn(`invalid color token value: ${str}`), hex = hexBeforeMix), node.opacity !== void 0 && (hex = rgba$1(hex, node.opacity)), hex;
}
function renderColorHex(color) {
	return typeof color == "string" ? color : color.hex;
}
function renderThemeColorSchemes(value, config) {
	let colorPalette = config?.palette ?? defaultColorPalette, schemes = {};
	return defineLazyProperty(schemes, "light", () => renderThemeColorScheme(colorPalette, value.light)), defineLazyProperty(schemes, "dark", () => renderThemeColorScheme(colorPalette, value.dark)), schemes;
}
function renderThemeColorScheme(colorPalette, value) {
	let renderedDefaultTone = renderThemeColor(value.default, { colorPalette }), bg = renderedDefaultTone.bg;
	if (bg === "white") throw Error("Cannot blend with white background");
	let scheme = { default: renderedDefaultTone };
	for (let tone of THEME_COLOR_CARD_TONES) {
		if (tone === "default") continue;
		let opts = tone === "transparent" ? { colorPalette } : {
			bg,
			colorPalette
		};
		defineLazyProperty(scheme, tone, () => renderThemeColor(value[tone], opts));
	}
	return scheme;
}
function renderThemeColor(value, options) {
	let { colorPalette, bg } = options, blendMode = value._blend || "multiply", baseBg = renderColorValue(value.bg, {
		colorPalette,
		bg,
		blendMode
	}), colorOptions = {
		colorPalette,
		bg: baseBg,
		blendMode
	}, button = renderThemeColorButton(value.button, {
		baseBg,
		blendMode,
		colorPalette
	}), selectable = renderThemeColorSelectable(value.selectable, {
		colorPalette,
		baseBg,
		blendMode
	}), shadow = {
		outline: renderColorValue(value.shadow.outline, colorOptions),
		umbra: renderColorValue(value.shadow.umbra, {
			...colorOptions,
			bg: void 0,
			colorPalette: {
				...colorPalette,
				black: "#000000"
			}
		}),
		penumbra: renderColorValue(value.shadow.penumbra, {
			...colorOptions,
			bg: void 0,
			colorPalette: {
				...colorPalette,
				black: "#000000"
			}
		}),
		ambient: renderColorValue(value.shadow.ambient, {
			...colorOptions,
			bg: void 0,
			colorPalette: {
				...colorPalette,
				black: "#000000"
			}
		})
	};
	return {
		_blend: blendMode,
		_dark: value._dark,
		accent: { fg: renderColorValue(value.accent.fg, colorOptions) },
		avatar: renderThemeColorAvatar(value.avatar, {
			baseBg,
			colorPalette,
			blendMode
		}),
		backdrop: renderColorValue(value.backdrop, colorOptions),
		badge: renderThemeColorBadge(value.badge, {
			baseBg,
			colorPalette,
			blendMode
		}),
		bg: baseBg,
		border: renderColorValue(value.border, colorOptions),
		button,
		code: {
			bg: renderColorValue(value.code.bg, colorOptions),
			fg: renderColorValue(value.code.fg, colorOptions)
		},
		fg: renderColorValue(value.fg, colorOptions),
		focusRing: renderColorValue(value.focusRing, colorOptions),
		icon: renderColorValue(value.icon, colorOptions),
		input: renderThemeColorInput(value.input, {
			baseBg,
			colorPalette,
			blendMode
		}),
		kbd: renderThemeColorKBD(value.kbd, {
			baseBg,
			colorPalette,
			blendMode
		}),
		link: { fg: renderColorValue(value.link.fg, colorOptions) },
		muted: {
			bg: renderColorValue(value.muted.bg, colorOptions),
			fg: renderColorValue(value.muted.fg, colorOptions)
		},
		shadow,
		skeleton: {
			from: renderColorValue(value.skeleton.from, colorOptions),
			to: renderColorValue(value.skeleton.to, colorOptions)
		},
		syntax: renderSyntaxColorTheme(value.syntax, {
			baseBg,
			colorPalette,
			blendMode
		}),
		selectable
	};
}
function renderThemeColorKBD(value, options) {
	let { baseBg, blendMode, colorPalette } = options, rootOptions = {
		bg: baseBg,
		blendMode,
		colorPalette
	}, bg = renderColorValue(value.bg, rootOptions), colorOptions = {
		bg,
		blendMode,
		colorPalette
	};
	return {
		bg,
		fg: renderColorValue(value.fg, colorOptions),
		border: renderColorValue(value.border, colorOptions)
	};
}
function renderThemeColorAvatar(value, options) {
	let colorAvatar = {};
	for (let hue of COLOR_HUES) colorAvatar[hue] = renderThemeColorAvatarColor(value[hue], options);
	return colorAvatar;
}
function renderThemeColorAvatarColor(value, options) {
	let { baseBg, blendMode: rootBlendMode, colorPalette } = options, blendMode = value._blend || "multiply", rootOptions = {
		bg: baseBg,
		blendMode: rootBlendMode,
		colorPalette
	}, bg = renderColorValue(value.bg, rootOptions), colorOptions = {
		bg,
		blendMode,
		colorPalette
	};
	return {
		_blend: blendMode,
		bg,
		fg: renderColorValue(value.fg, colorOptions)
	};
}
function renderThemeColorBadge(value, options) {
	let colorBadge = {};
	for (let tone of THEME_COLOR_STATE_TONES) colorBadge[tone] = renderThemeColorBadgeColor(value[tone], options);
	return colorBadge;
}
function renderThemeColorBadgeColor(value, options) {
	let { baseBg, blendMode: rootBlendMode, colorPalette } = options, blendMode = rootBlendMode, rootOptions = {
		bg: baseBg,
		blendMode: rootBlendMode,
		colorPalette
	}, bg = renderColorValue(value.bg, rootOptions), colorOptions = {
		bg,
		blendMode,
		colorPalette
	};
	return {
		bg,
		dot: renderColorValue(value.dot, colorOptions),
		fg: renderColorValue(value.fg, colorOptions),
		icon: renderColorValue(value.icon, colorOptions)
	};
}
function renderThemeColorButton(value, options) {
	return {
		default: renderThemeColorButtonTones(value.default, options),
		ghost: renderThemeColorButtonTones(value.ghost, options),
		bleed: renderThemeColorButtonTones(value.bleed, options)
	};
}
function renderThemeColorButtonTones(value, options) {
	let colorButtonMode = {};
	for (let tone of THEME_COLOR_STATE_TONES) colorButtonMode[tone] = renderThemeColorButtonStates(value[tone], options);
	return colorButtonMode;
}
function renderThemeColorButtonStates(value, options) {
	return {
		enabled: renderThemeColorState(value.enabled, options),
		hovered: renderThemeColorState(value.hovered, options),
		pressed: renderThemeColorState(value.pressed, options),
		selected: renderThemeColorState(value.selected, options),
		disabled: renderThemeColorState(value.disabled, options)
	};
}
function renderThemeColorState(value, options) {
	let { baseBg, blendMode: rootBlendMode, colorPalette } = options, blendMode = value._blend || "multiply", rootOptions = {
		bg: baseBg,
		blendMode: rootBlendMode,
		colorPalette
	}, bg = renderColorValue(value.bg, rootOptions), colorOptions = {
		bg,
		blendMode,
		colorPalette
	};
	return {
		_blend: blendMode,
		accent: { fg: renderColorValue(value.accent.fg, colorOptions) },
		avatar: renderThemeColorAvatar(value.avatar, {
			baseBg: bg,
			colorPalette,
			blendMode
		}),
		badge: renderThemeColorBadge(value.badge, {
			baseBg: bg,
			colorPalette,
			blendMode
		}),
		bg,
		border: renderColorValue(value.border, colorOptions),
		code: {
			bg: renderColorValue(value.code.bg, colorOptions),
			fg: renderColorValue(value.code.fg, colorOptions)
		},
		fg: renderColorValue(value.fg, colorOptions),
		icon: renderColorValue(value.icon, colorOptions),
		link: { fg: renderColorValue(value.link.fg, colorOptions) },
		muted: {
			bg: renderColorValue(value.muted.bg, colorOptions),
			fg: renderColorValue(value.muted.fg, colorOptions)
		},
		kbd: {
			bg: renderColorValue(value.kbd.bg, colorOptions),
			fg: renderColorValue(value.kbd.fg, colorOptions),
			border: renderColorValue(value.kbd.border, colorOptions)
		},
		skeleton: {
			from: renderColorValue(value.skeleton?.from, colorOptions),
			to: renderColorValue(value.skeleton?.to, colorOptions)
		}
	};
}
function renderThemeColorInput(value, options) {
	return {
		default: renderInputStatesColorTheme(value.default, options),
		invalid: renderInputStatesColorTheme(value.invalid, options)
	};
}
function renderInputStatesColorTheme(value, options) {
	return {
		enabled: renderInputStateColorTheme(value.enabled, options),
		hovered: renderInputStateColorTheme(value.hovered, options),
		readOnly: renderInputStateColorTheme(value.readOnly, options),
		disabled: renderInputStateColorTheme(value.disabled, options)
	};
}
function renderInputStateColorTheme(value, options) {
	let { baseBg, blendMode: rootBlendMode, colorPalette } = options, blendMode = value._blend || "multiply", rootOptions = {
		colorPalette,
		bg: baseBg,
		blendMode: rootBlendMode
	}, bg = renderColorValue(value.bg, rootOptions), colorOptions = {
		colorPalette,
		bg,
		blendMode
	};
	return {
		_blend: blendMode,
		bg,
		border: renderColorValue(value.border, colorOptions),
		fg: renderColorValue(value.fg, colorOptions),
		muted: { bg: renderColorValue(value.muted.bg, colorOptions) },
		placeholder: renderColorValue(value.placeholder, colorOptions)
	};
}
function renderThemeColorSelectable(value, options) {
	let colorSelectable = {};
	for (let tone of THEME_COLOR_STATE_TONES) colorSelectable[tone] = renderThemeColorSelectableStates(value[tone], options);
	return colorSelectable;
}
function renderThemeColorSelectableStates(value, options) {
	return {
		enabled: renderThemeColorState(value.enabled, options),
		hovered: renderThemeColorState(value.hovered, options),
		pressed: renderThemeColorState(value.pressed, options),
		selected: renderThemeColorState(value.selected, options),
		disabled: renderThemeColorState(value.disabled, options)
	};
}
function renderSyntaxColorTheme(value, options) {
	let { colorPalette, baseBg, blendMode } = options, colorOptions = {
		colorPalette,
		bg: baseBg,
		blendMode
	};
	return {
		atrule: renderColorValue(value.atrule, colorOptions),
		attrName: renderColorValue(value.attrName, colorOptions),
		attrValue: renderColorValue(value.attrValue, colorOptions),
		attribute: renderColorValue(value.attribute, colorOptions),
		boolean: renderColorValue(value.boolean, colorOptions),
		builtin: renderColorValue(value.builtin, colorOptions),
		cdata: renderColorValue(value.cdata, colorOptions),
		char: renderColorValue(value.char, colorOptions),
		class: renderColorValue(value.class, colorOptions),
		className: renderColorValue(value.className, colorOptions),
		comment: renderColorValue(value.comment, colorOptions),
		constant: renderColorValue(value.constant, colorOptions),
		deleted: renderColorValue(value.deleted, colorOptions),
		doctype: renderColorValue(value.doctype, colorOptions),
		entity: renderColorValue(value.entity, colorOptions),
		function: renderColorValue(value.function, colorOptions),
		hexcode: renderColorValue(value.hexcode, colorOptions),
		id: renderColorValue(value.id, colorOptions),
		important: renderColorValue(value.important, colorOptions),
		inserted: renderColorValue(value.inserted, colorOptions),
		keyword: renderColorValue(value.keyword, colorOptions),
		number: renderColorValue(value.number, colorOptions),
		operator: renderColorValue(value.operator, colorOptions),
		prolog: renderColorValue(value.prolog, colorOptions),
		property: renderColorValue(value.property, colorOptions),
		pseudoClass: renderColorValue(value.pseudoClass, colorOptions),
		pseudoElement: renderColorValue(value.pseudoElement, colorOptions),
		punctuation: renderColorValue(value.punctuation, colorOptions),
		regex: renderColorValue(value.regex, colorOptions),
		selector: renderColorValue(value.selector, colorOptions),
		string: renderColorValue(value.string, colorOptions),
		symbol: renderColorValue(value.symbol, colorOptions),
		tag: renderColorValue(value.tag, colorOptions),
		unit: renderColorValue(value.unit, colorOptions),
		url: renderColorValue(value.url, colorOptions),
		variable: renderColorValue(value.variable, colorOptions)
	};
}
/** @internal */
function buildTheme(config) {
	let colorTheme = buildColorTheme(config);
	return v2_v0({
		_version: 2,
		avatar: config?.avatar ?? defaultThemeConfig.avatar,
		button: config?.button ?? defaultThemeConfig.button,
		card: config?.card ?? defaultThemeConfig.card,
		color: renderThemeColorSchemes(colorTheme, config),
		container: config?.container ?? defaultThemeConfig.container,
		font: config?.font ?? defaultThemeFonts,
		input: config?.input ?? defaultThemeConfig.input,
		layer: config?.layer ?? defaultThemeConfig.layer,
		media: config?.media ?? defaultThemeConfig.media,
		radius: config?.radius ?? defaultThemeConfig.radius,
		shadow: config?.shadow ?? defaultThemeConfig.shadow,
		space: config?.space ?? defaultThemeConfig.space,
		style: config?.style ?? defaultThemeConfig.style
	});
}
var colors = {
	default: {
		lightest: "hsl(0, 0%, 95%)",
		lighter: "hsl(0, 0%, 70%)",
		light: "hsl(0, 0%, 65%)",
		base: "hsl(0, 0%, 50%)",
		dark: "hsl(0, 0%, 35%)",
		darker: "hsl(0, 0%, 20%)",
		darkest: "hsl(0, 0%, 5%)"
	},
	transparent: {
		lightest: "hsl(240, 100%, 95%)",
		lighter: "hsl(240, 100%, 70%)",
		light: "hsl(240, 100%, 65%)",
		base: "hsl(240, 100%, 50%)",
		dark: "hsl(240, 100%, 35%)",
		darker: "hsl(240, 100%, 20%)",
		darkest: "hsl(240, 100%, 5%)"
	},
	primary: {
		lightest: "hsl(240, 100%, 95%)",
		lighter: "hsl(240, 100%, 70%)",
		light: "hsl(240, 100%, 65%)",
		base: "hsl(240, 100%, 50%)",
		dark: "hsl(240, 100%, 35%)",
		darker: "hsl(240, 100%, 20%)",
		darkest: "hsl(240, 100%, 5%)"
	},
	positive: {
		lightest: "hsl(120, 100%, 95%)",
		lighter: "hsl(120, 100%, 70%)",
		light: "hsl(120, 100%, 65%)",
		base: "hsl(120, 100%, 50%)",
		dark: "hsl(120, 100%, 35%)",
		darker: "hsl(120, 100%, 20%)",
		darkest: "hsl(120, 100%, 5%)"
	},
	caution: {
		lightest: "hsl(60, 100%, 95%)",
		lighter: "hsl(60, 100%, 70%)",
		light: "hsl(60, 100%, 65%)",
		base: "hsl(60, 100%, 50%)",
		dark: "hsl(60, 100%, 35%)",
		darker: "hsl(60, 100%, 20%)",
		darkest: "hsl(60, 100%, 5%)"
	},
	critical: {
		lightest: "hsl(0, 100%, 95%)",
		lighter: "hsl(0, 100%, 70%)",
		light: "hsl(0, 100%, 65%)",
		base: "hsl(0, 100%, 50%)",
		dark: "hsl(0, 100%, 35%)",
		darker: "hsl(0, 100%, 20%)",
		darkest: "hsl(0, 100%, 5%)"
	}
};
colors.transparent.darkest, colors.transparent.lightest, colors.transparent.lightest, colors.transparent.darkest, colors.transparent.darker, colors.transparent.lighter, colors.transparent.base, colors.transparent.base, colors.primary.darkest, colors.primary.lightest, colors.primary.lightest, colors.primary.darkest, colors.primary.darker, colors.primary.lighter, colors.primary.base, colors.primary.base, colors.positive.darkest, colors.positive.lightest, colors.positive.lightest, colors.positive.darkest, colors.positive.darker, colors.positive.lighter, colors.positive.base, colors.positive.base, colors.caution.darkest, colors.caution.lightest, colors.caution.lightest, colors.caution.darkest, colors.caution.darker, colors.caution.lighter, colors.caution.base, colors.caution.base, colors.critical.darkest, colors.critical.lightest, colors.critical.lightest, colors.critical.darkest, colors.critical.darker, colors.critical.lighter, colors.critical.base, colors.critical.base;
//#endregion
//#region node_modules/@sanity/ui/dist/hotkeys-DTjEz_u3.js
/**
* Adds global keydown event listener to the window.
*
* @param onKeyDown - The function to call when a keydown event is triggered.
* @param options - The options to pass to the addEventListener function (example, capture: true)
* @beta
*/
function useGlobalKeyDown(onKeyDown, options) {
	let $ = (0, import_compiler_runtime.c)(7), t0;
	$[0] === onKeyDown ? t0 = $[1] : (t0 = (event) => onKeyDown(event), $[0] = onKeyDown, $[1] = t0);
	let handleKeyDown = useEffectEvent(t0), t1;
	$[2] !== handleKeyDown || $[3] !== options ? (t1 = () => {
		let handler = (event_0) => handleKeyDown(event_0);
		return window.addEventListener("keydown", handler, options), () => window.removeEventListener("keydown", handler, options);
	}, $[2] = handleKeyDown, $[3] = options, $[4] = t1) : t1 = $[4];
	let t2;
	$[5] === options ? t2 = $[6] : (t2 = [options], $[5] = options, $[6] = t2), (0, import_react.useEffect)(t1, t2);
}
function inlineBaseStyle() {
	return {
		lineHeight: "0",
		"&&:not([hidden])": { display: "block" },
		"& > div": {
			display: "inline-block",
			verticalAlign: "middle"
		}
	};
}
function inlineSpaceStyle(props) {
	let { media, space } = getTheme_v2(props.theme);
	return _responsive(media, props.$space, (spaceIndex) => {
		let _space = rem(spaceIndex === .5 ? space[1] / 2 : space[spaceIndex]);
		return {
			margin: `-${_space} 0 0 -${_space}`,
			"& > div": { padding: `${_space} 0 0 ${_space}` }
		};
	});
}
var StyledInline = /* @__PURE__ */ gt(Box).withConfig({
	displayName: "StyledInline",
	componentId: "sc-ntfhm-0"
})(inlineBaseStyle, inlineSpaceStyle);
function InlineComponent(props) {
	let $ = (0, import_compiler_runtime.c)(16), as, childrenProp, gap, ref, restProps;
	$[0] === props ? (as = $[1], childrenProp = $[2], gap = $[3], ref = $[4], restProps = $[5]) : ({as, children: childrenProp, gap, ref, ...restProps} = props, $[0] = props, $[1] = as, $[2] = childrenProp, $[3] = gap, $[4] = ref, $[5] = restProps);
	let t0;
	$[6] === childrenProp ? t0 = $[7] : (t0 = import_react.Children.map(childrenProp, _temp$4), $[6] = childrenProp, $[7] = t0);
	let children = t0, t1;
	$[8] === gap ? t1 = $[9] : (t1 = _getArrayProp(gap), $[8] = gap, $[9] = t1);
	let t2;
	return $[10] !== as || $[11] !== children || $[12] !== ref || $[13] !== restProps || $[14] !== t1 ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledInline, {
		"data-ui": "Inline",
		...restProps,
		$space: t1,
		forwardedAs: as,
		ref,
		children
	}), $[10] = as, $[11] = children, $[12] = ref, $[13] = restProps, $[14] = t1, $[15] = t2) : t2 = $[15], t2;
}
function _temp$4(child) {
	return child && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: child });
}
/**
* The `Inline` component is a layout utility for aligning and spacing items horizontally.
*
* @public
*/
var Inline = InlineComponent;
function kbdStyle() {
	return ft`--card-bg-color:var(--card-kbd-bg-color);--card-border-color:var(--card-kbd-border-color);--card-fg-color:var(--card-kbd-fg-color);box-shadow:inset 0 0 0 1px var(--card-border-color);background:var(--card-bg-color);font:inherit;vertical-align:top;&:not([hidden]){display:inline-block;}`;
}
var StyledKBD = /* @__PURE__ */ gt.kbd.withConfig({
	displayName: "StyledKBD",
	componentId: "sc-d2v61l-0"
})(responsiveRadiusStyle, kbdStyle);
function KBDComponent(props) {
	let $ = (0, import_compiler_runtime.c)(20), children, ref, restProps, t0, t1, t2;
	$[0] === props ? (children = $[1], ref = $[2], restProps = $[3], t0 = $[4], t1 = $[5], t2 = $[6]) : ({children, fontSize: t0, padding: t1, radius: t2, ref, ...restProps} = props, $[0] = props, $[1] = children, $[2] = ref, $[3] = restProps, $[4] = t0, $[5] = t1, $[6] = t2);
	let fontSize = t0 === void 0 ? 0 : t0, padding = t1 === void 0 ? 1 : t1, radius = t2 === void 0 ? 2 : t2, t3;
	$[7] === radius ? t3 = $[8] : (t3 = _getArrayProp(radius), $[7] = radius, $[8] = t3);
	let t4;
	$[9] !== children || $[10] !== fontSize ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
		as: "span",
		size: fontSize,
		weight: "semibold",
		children
	}), $[9] = children, $[10] = fontSize, $[11] = t4) : t4 = $[11];
	let t5;
	$[12] !== padding || $[13] !== t4 ? (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		as: "span",
		padding,
		children: t4
	}), $[12] = padding, $[13] = t4, $[14] = t5) : t5 = $[14];
	let t6;
	return $[15] !== ref || $[16] !== restProps || $[17] !== t3 || $[18] !== t5 ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledKBD, {
		"data-ui": "KBD",
		...restProps,
		$radius: t3,
		ref,
		children: t5
	}), $[15] = ref, $[16] = restProps, $[17] = t3, $[18] = t5, $[19] = t6) : t6 = $[19], t6;
}
/**
* Used to define some text as keyboard input.
*
* @public
*/
var KBD = KBDComponent;
var hotkeys = "_1ljw6pi0";
var Key = gt(KBD).withConfig({
	displayName: "Key",
	componentId: "sc-ttp6vu-0"
})`&:not([hidden]){display:block;}`;
/**
* Represent hotkeys (a keyboard combination) with semantic `<kbd>` elements.
*
* @public
*/
function Hotkeys(props) {
	let $ = (0, import_compiler_runtime.c)(31), className, fontSize, keys, padding, radius, ref, restProps, t0;
	$[0] === props ? (className = $[1], fontSize = $[2], keys = $[3], padding = $[4], radius = $[5], ref = $[6], restProps = $[7], t0 = $[8]) : ({className, fontSize, gap: t0, keys, padding, radius, ref, ...restProps} = props, $[0] = props, $[1] = className, $[2] = fontSize, $[3] = keys, $[4] = padding, $[5] = radius, $[6] = ref, $[7] = restProps, $[8] = t0);
	let gap = t0 === void 0 ? .5 : t0, t1;
	$[9] === gap ? t1 = $[10] : (t1 = _getArrayProp(gap), $[9] = gap, $[10] = t1);
	let spacing = t1;
	if (!keys || keys.length === 0) {
		let t2;
		return $[11] === Symbol.for("react.memo_cache_sentinel") ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {}), $[11] = t2) : t2 = $[11], t2;
	}
	let t2;
	$[12] === className ? t2 = $[13] : (t2 = clsx(hotkeys, className), $[12] = className, $[13] = t2);
	let t3;
	if ($[14] !== fontSize || $[15] !== keys || $[16] !== padding || $[17] !== radius) {
		let t4;
		$[19] !== fontSize || $[20] !== padding || $[21] !== radius ? (t4 = (key, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, {
			fontSize,
			padding,
			radius,
			children: key
		}, i), $[19] = fontSize, $[20] = padding, $[21] = radius, $[22] = t4) : t4 = $[22], t3 = keys.map(t4), $[14] = fontSize, $[15] = keys, $[16] = padding, $[17] = radius, $[18] = t3;
	} else t3 = $[18];
	let t4;
	$[23] !== spacing || $[24] !== t3 ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inline, {
		as: "span",
		gap: spacing,
		children: t3
	}), $[23] = spacing, $[24] = t3, $[25] = t4) : t4 = $[25];
	let t5;
	return $[26] !== ref || $[27] !== restProps || $[28] !== t2 || $[29] !== t4 ? (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
		className: t2,
		"data-ui": "Hotkeys",
		ref,
		...restProps,
		children: t4
	}), $[26] = ref, $[27] = restProps, $[28] = t2, $[29] = t4, $[30] = t5) : t5 = $[30], t5;
}
//#endregion
//#region node_modules/@sanity/ui/dist/layer-dwv5h6E7.js
var layer = "_1xz6t3i0";
function LayerChildren(props) {
	let $ = (0, import_compiler_runtime.c)(29), children, className, forwardedRef, onActivate, onFocus, restProps, t0, t1;
	$[0] === props ? (children = $[1], className = $[2], forwardedRef = $[3], onActivate = $[4], onFocus = $[5], restProps = $[6], t0 = $[7], t1 = $[8]) : ({as: t0, children, className, onActivate, onFocus, ref: forwardedRef, style: t1, ...restProps} = props, $[0] = props, $[1] = children, $[2] = className, $[3] = forwardedRef, $[4] = onActivate, $[5] = onFocus, $[6] = restProps, $[7] = t0, $[8] = t1);
	let as = t0 === void 0 ? "div" : t0, style = t1 === void 0 ? EMPTY_RECORD : t1, { zIndex, isTopLayer } = useLayer(), lastFocusedRef = (0, import_react.useRef)(null), ref = (0, import_react.useRef)(null), isTopLayerRef = (0, import_react.useRef)(isTopLayer), t2;
	$[9] === Symbol.for("react.memo_cache_sentinel") ? (t2 = () => ref.current, $[9] = t2) : t2 = $[9], (0, import_react.useImperativeHandle)(forwardedRef, t2);
	let t3, t4;
	$[10] !== isTopLayer || $[11] !== onActivate ? (t3 = () => {
		isTopLayerRef.current !== isTopLayer && isTopLayer && onActivate?.({ activeElement: lastFocusedRef.current }), isTopLayerRef.current = isTopLayer;
	}, t4 = [isTopLayer, onActivate], $[10] = isTopLayer, $[11] = onActivate, $[12] = t3, $[13] = t4) : (t3 = $[12], t4 = $[13]), (0, import_react.useEffect)(t3, t4);
	let t5;
	$[14] !== isTopLayer || $[15] !== onFocus ? (t5 = (event) => {
		onFocus?.(event);
		let rootElement = ref.current, target = document.activeElement;
		isTopLayer && rootElement && target && isHTMLElement(target) && containsOrEqualsElement(rootElement, target) && (lastFocusedRef.current = target);
	}, $[14] = isTopLayer, $[15] = onFocus, $[16] = t5) : t5 = $[16];
	let handleFocus = t5, Component = as, t6;
	$[17] === className ? t6 = $[18] : (t6 = clsx(layer, className), $[17] = className, $[18] = t6);
	let t7;
	$[19] !== style || $[20] !== zIndex ? (t7 = {
		...style,
		zIndex
	}, $[19] = style, $[20] = zIndex, $[21] = t7) : t7 = $[21];
	let t8;
	return $[22] !== Component || $[23] !== children || $[24] !== handleFocus || $[25] !== restProps || $[26] !== t6 || $[27] !== t7 ? (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		"data-ui": "Layer",
		...restProps,
		className: t6,
		onFocus: handleFocus,
		ref,
		style: t7,
		children
	}), $[22] = Component, $[23] = children, $[24] = handleFocus, $[25] = restProps, $[26] = t6, $[27] = t7, $[28] = t8) : t8 = $[28], t8;
}
/**
* @public
*/
function Layer(props) {
	let $ = (0, import_compiler_runtime.c)(10), children, restProps, t0;
	$[0] === props ? (children = $[1], restProps = $[2], t0 = $[3]) : ({children, zOffset: t0, ...restProps} = props, $[0] = props, $[1] = children, $[2] = restProps, $[3] = t0);
	let zOffset = t0 === void 0 ? 1 : t0, t1;
	$[4] !== children || $[5] !== restProps ? (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayerChildren, {
		...restProps,
		children
	}), $[4] = children, $[5] = restProps, $[6] = t1) : t1 = $[6];
	let t2;
	return $[7] !== t1 || $[8] !== zOffset ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayerProvider, {
		zOffset,
		children: t1
	}), $[7] = t1, $[8] = zOffset, $[9] = t2) : t2 = $[9], t2;
}
//#endregion
//#region node_modules/@sanity/ui/dist/index.js
var rgba = rgba$1;
var studioTheme = buildTheme();
var BASE_STYLE = {
	width: "100%",
	margin: "0 auto"
};
function containerBaseStyle() {
	return BASE_STYLE;
}
function responsiveContainerWidthStyle(props) {
	let { container, media } = getTheme_v2(props.theme);
	return _responsive(media, props.$width, (val) => ({ maxWidth: val === "auto" ? "none" : rem(container[val]) }));
}
var StyledContainer = /* @__PURE__ */ gt(Box).withConfig({
	displayName: "StyledContainer",
	componentId: "sc-bmdunn-0"
})(containerBaseStyle, responsiveContainerWidthStyle);
function ContainerComponent(props) {
	let $ = (0, import_compiler_runtime.c)(12), as, ref, restProps, t0;
	$[0] === props ? (as = $[1], ref = $[2], restProps = $[3], t0 = $[4]) : ({as, ref, width: t0, ...restProps} = props, $[0] = props, $[1] = as, $[2] = ref, $[3] = restProps, $[4] = t0);
	let width = t0 === void 0 ? 2 : t0, t1;
	$[5] === width ? t1 = $[6] : (t1 = _getArrayProp(width), $[5] = width, $[6] = t1);
	let t2;
	return $[7] !== as || $[8] !== ref || $[9] !== restProps || $[10] !== t1 ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledContainer, {
		"data-ui": "Container",
		...restProps,
		$width: t1,
		forwardedAs: as,
		ref
	}), $[7] = as, $[8] = ref, $[9] = restProps, $[10] = t1, $[11] = t2) : t2 = $[11], t2;
}
/**
* The `Container` component wraps content layout in a defined set of widths.
*
* @public
*/
var Container = ContainerComponent;
function dialogStyle({ theme }) {
	let { color } = getTheme_v2(theme);
	return { background: color.backdrop };
}
function responsiveDialogPositionStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$position, (position) => ({ "&&": { position } }));
}
/**
* @internal
*/
var DialogContext = createGlobalScopedContext("@sanity/ui/context/dialog", { version: 0 });
/**
* This API might change. DO NOT USE IN PRODUCTION.
* @beta
*/
function useDialog() {
	return (0, import_react.useContext)(DialogContext);
}
var dialogCard = "_1a85unk5";
var dialogContainer = "_1a85unk4";
var dialogContent = "_1a85unk8";
var dialogLayer = "_1a85unk0";
var dialogLayout = "_1a85unk6";
function isTargetWithinScope(boundaryElement, portalElement, target) {
	return !boundaryElement || !portalElement || containsOrEqualsElement(boundaryElement, target) || containsOrEqualsElement(portalElement, target);
}
var StyledDialog = /* @__PURE__ */ gt(Layer).withConfig({
	displayName: "StyledDialog",
	componentId: "sc-drvqzp-0"
})(responsivePaddingStyle, dialogStyle, responsiveDialogPositionStyle);
function DialogCard(props) {
	let $ = (0, import_compiler_runtime.c)(44), { __unstable_autoFocus: autoFocus, __unstable_hideCloseButton: hideCloseButton, children, contentRef: forwardedContentRef, footer, header, id, onClickOutside, onClose, portal: portalProp, radius: radiusProp, ref: forwardedRef, scheme, shadow: shadowProp, width: widthProp } = props, portal = usePortal(), portalElement = portalProp ? portal.elements?.[portalProp] || null : portal.element, boundaryElement = useBoundaryElement().element, t0;
	$[0] === radiusProp ? t0 = $[1] : (t0 = _getArrayProp(radiusProp), $[0] = radiusProp, $[1] = t0);
	let radius = t0, t1;
	$[2] === shadowProp ? t1 = $[3] : (t1 = _getArrayProp(shadowProp), $[2] = shadowProp, $[3] = t1);
	let shadow = t1, t2;
	$[4] === widthProp ? t2 = $[5] : (t2 = _getArrayProp(widthProp), $[4] = widthProp, $[5] = t2);
	let width = t2, ref = (0, import_react.useRef)(null), contentRef = (0, import_react.useRef)(null), { isTopLayer } = useLayer(), labelId = `${id}_label`, showCloseButton = !!onClose && hideCloseButton === !1, showHeader = !!header || showCloseButton, t3;
	$[6] === Symbol.for("react.memo_cache_sentinel") ? (t3 = () => ref.current, $[6] = t3) : t3 = $[6], (0, import_react.useImperativeHandle)(forwardedRef, t3);
	let t4;
	$[7] === Symbol.for("react.memo_cache_sentinel") ? (t4 = () => contentRef.current, $[7] = t4) : t4 = $[7], (0, import_react.useImperativeHandle)(forwardedContentRef, t4);
	let t5, t6;
	$[8] === autoFocus ? (t5 = $[9], t6 = $[10]) : (t5 = () => {
		autoFocus && ref.current && focusFirstDescendant(ref.current);
	}, t6 = [autoFocus, ref], $[8] = autoFocus, $[9] = t5, $[10] = t6), (0, import_react.useEffect)(t5, t6);
	let t7;
	$[11] !== boundaryElement || $[12] !== isTopLayer || $[13] !== onClose || $[14] !== portalElement ? (t7 = (event) => {
		if (!isTopLayer || !onClose) return;
		let target = document.activeElement;
		(!target || isTargetWithinScope(boundaryElement, portalElement, target)) && event.key === "Escape" && (event.preventDefault(), event.stopPropagation(), onClose());
	}, $[11] = boundaryElement, $[12] = isTopLayer, $[13] = onClose, $[14] = portalElement, $[15] = t7) : t7 = $[15], useGlobalKeyDown(t7);
	let t8;
	$[16] !== boundaryElement || $[17] !== isTopLayer || $[18] !== onClickOutside || $[19] !== portalElement ? (t8 = isTopLayer && onClickOutside && ((event_0) => {
		let target_0 = event_0.target;
		(!target_0 || isTargetWithinScope(boundaryElement, portalElement, target_0)) && onClickOutside();
	}), $[16] = boundaryElement, $[17] = isTopLayer, $[18] = onClickOutside, $[19] = portalElement, $[20] = t8) : t8 = $[20];
	let t9;
	$[21] === Symbol.for("react.memo_cache_sentinel") ? (t9 = () => [ref.current], $[21] = t9) : t9 = $[21], useClickOutsideEvent(t8, t9);
	let t10;
	$[22] !== header || $[23] !== labelId || $[24] !== onClose || $[25] !== showCloseButton || $[26] !== showHeader ? (t10 = showHeader && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		className: "_1a85unk7",
		"data-ui": "DialogHeader",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
			align: "flex-start",
			padding: 3,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
				flex: 1,
				padding: 2,
				children: header && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					id: labelId,
					size: 1,
					weight: "semibold",
					children: header
				})
			}), showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
				flex: "none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					"aria-label": "Close dialog",
					disabled: !onClose,
					icon: CloseIcon,
					mode: "bleed",
					onClick: onClose,
					padding: 2
				})
			})]
		})
	}), $[22] = header, $[23] = labelId, $[24] = onClose, $[25] = showCloseButton, $[26] = showHeader, $[27] = t10) : t10 = $[27];
	let t11;
	$[28] === children ? t11 = $[29] : (t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		className: dialogContent,
		"data-ui": "DialogContent",
		flex: 1,
		ref: contentRef,
		tabIndex: -1,
		children
	}), $[28] = children, $[29] = t11);
	let t12;
	$[30] === footer ? t12 = $[31] : (t12 = footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		className: "_1a85unk9",
		"data-ui": "DialogFooter",
		children: footer
	}), $[30] = footer, $[31] = t12);
	let t13;
	$[32] !== t10 || $[33] !== t11 || $[34] !== t12 ? (t13 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
		className: dialogLayout,
		direction: "column",
		flex: 1,
		children: [
			t10,
			t11,
			t12
		]
	}), $[32] = t10, $[33] = t11, $[34] = t12, $[35] = t13) : t13 = $[35];
	let t14;
	$[36] !== radius || $[37] !== scheme || $[38] !== shadow || $[39] !== t13 ? (t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: dialogCard,
		display: "flex",
		radius,
		ref,
		scheme,
		shadow,
		children: t13
	}), $[36] = radius, $[37] = scheme, $[38] = shadow, $[39] = t13, $[40] = t14) : t14 = $[40];
	let t15;
	return $[41] !== t14 || $[42] !== width ? (t15 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		className: dialogContainer,
		"data-ui": "DialogCard",
		display: "flex",
		width,
		children: t14
	}), $[41] = t14, $[42] = width, $[43] = t15) : t15 = $[43], t15;
}
/**
* The Dialog component.
*
* @public
*/
function Dialog(props) {
	let $ = (0, import_compiler_runtime.c)(75), dialog = useDialog(), { layer } = useTheme_v2(), _positionProp, _zOffsetProp, children, className, contentRef, footer, header, id, onActivate, onClickOutside, onClose, onFocus, portalProp, ref, restProps, scheme, t0, t1, t2, t3, t4, t5, t6;
	$[0] === props ? (_positionProp = $[1], _zOffsetProp = $[2], children = $[3], className = $[4], contentRef = $[5], footer = $[6], header = $[7], id = $[8], onActivate = $[9], onClickOutside = $[10], onClose = $[11], onFocus = $[12], portalProp = $[13], ref = $[14], restProps = $[15], scheme = $[16], t0 = $[17], t1 = $[18], t2 = $[19], t3 = $[20], t4 = $[21], t5 = $[22], t6 = $[23]) : ({__unstable_autoFocus: t0, __unstable_hideCloseButton: t1, cardRadius: t2, cardShadow: t3, children, contentRef, footer, header, id, onActivate, onClickOutside, onClose, onFocus, padding: t4, portal: portalProp, position: _positionProp, ref, scheme, width: t5, zOffset: _zOffsetProp, animate: t6, className, ...restProps} = props, $[0] = props, $[1] = _positionProp, $[2] = _zOffsetProp, $[3] = children, $[4] = className, $[5] = contentRef, $[6] = footer, $[7] = header, $[8] = id, $[9] = onActivate, $[10] = onClickOutside, $[11] = onClose, $[12] = onFocus, $[13] = portalProp, $[14] = ref, $[15] = restProps, $[16] = scheme, $[17] = t0, $[18] = t1, $[19] = t2, $[20] = t3, $[21] = t4, $[22] = t5, $[23] = t6);
	let autoFocus = t0 === void 0 || t0, hideCloseButton = t1 !== void 0 && t1, cardRadiusProp = t2 === void 0 ? 4 : t2, cardShadow = t3 === void 0 ? 3 : t3, paddingProp = t4 === void 0 ? 3 : t4, widthProp = t5 === void 0 ? 0 : t5, _animate = t6 !== void 0 && t6, positionProp = _positionProp ?? (dialog.position || "fixed"), zOffsetProp = _zOffsetProp ?? (dialog.zOffset || layer.dialog.zOffset), animate = !usePrefersReducedMotion() && _animate, portal = usePortal(), portalElement = portalProp ? portal.elements?.[portalProp] || null : portal.element, boundaryElement = useBoundaryElement().element, t7;
	$[24] === cardRadiusProp ? t7 = $[25] : (t7 = _getArrayProp(cardRadiusProp), $[24] = cardRadiusProp, $[25] = t7);
	let cardRadius = t7, t8;
	$[26] === paddingProp ? t8 = $[27] : (t8 = _getArrayProp(paddingProp), $[26] = paddingProp, $[27] = t8);
	let padding = t8, t9;
	$[28] === positionProp ? t9 = $[29] : (t9 = _getArrayProp(positionProp), $[28] = positionProp, $[29] = t9);
	let position = t9, t10;
	$[30] === widthProp ? t10 = $[31] : (t10 = _getArrayProp(widthProp), $[30] = widthProp, $[31] = t10);
	let width = t10, t11;
	$[32] === zOffsetProp ? t11 = $[33] : (t11 = _getArrayProp(zOffsetProp), $[32] = zOffsetProp, $[33] = t11);
	let zOffset = t11, preDivRef = (0, import_react.useRef)(null), postDivRef = (0, import_react.useRef)(null), cardRef = (0, import_react.useRef)(null), focusedElementRef = (0, import_react.useRef)(null), t12;
	$[34] === onFocus ? t12 = $[35] : (t12 = (event) => {
		onFocus?.(event);
		let target = event.target, cardElement = cardRef.current;
		if (cardElement && target === preDivRef.current) {
			focusLastDescendant(cardElement);
			return;
		}
		if (cardElement && target === postDivRef.current) {
			focusFirstDescendant(cardElement);
			return;
		}
		isHTMLElement(event.target) && (focusedElementRef.current = event.target);
	}, $[34] = onFocus, $[35] = t12);
	let handleFocus = t12, labelId = `${id}_label`, rootClickTimeoutRef = (0, import_react.useRef)(void 0), t13;
	$[36] !== boundaryElement || $[37] !== portalElement ? (t13 = () => {
		rootClickTimeoutRef.current && clearTimeout(rootClickTimeoutRef.current), rootClickTimeoutRef.current = setTimeout(() => {
			let activeElement = document.activeElement;
			if (activeElement && !isTargetWithinScope(boundaryElement, portalElement, activeElement)) {
				let target_0 = focusedElementRef.current;
				if (!target_0 || !document.body.contains(target_0)) {
					let cardElement_0 = cardRef.current;
					cardElement_0 && focusFirstDescendant(cardElement_0);
					return;
				}
				target_0.focus();
			}
		}, 0);
	}, $[36] = boundaryElement, $[37] = portalElement, $[38] = t13) : t13 = $[38];
	let handleRootClick = t13, t14 = animate && "_1a85unk3", t15;
	$[39] !== className || $[40] !== t14 ? (t15 = clsx(dialogLayer, t14, className), $[39] = className, $[40] = t14, $[41] = t15) : t15 = $[41];
	let t16;
	$[42] === Symbol.for("react.memo_cache_sentinel") ? (t16 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: preDivRef,
		tabIndex: 0
	}), $[42] = t16) : t16 = $[42];
	let t17;
	$[43] !== autoFocus || $[44] !== cardRadius || $[45] !== cardShadow || $[46] !== children || $[47] !== contentRef || $[48] !== footer || $[49] !== header || $[50] !== hideCloseButton || $[51] !== id || $[52] !== onClickOutside || $[53] !== onClose || $[54] !== portalProp || $[55] !== scheme || $[56] !== width ? (t17 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogCard, {
		__unstable_autoFocus: autoFocus,
		__unstable_hideCloseButton: hideCloseButton,
		contentRef,
		footer,
		header,
		id,
		onClickOutside,
		onClose,
		portal: portalProp,
		radius: cardRadius,
		ref: cardRef,
		scheme,
		shadow: cardShadow,
		width,
		children
	}), $[43] = autoFocus, $[44] = cardRadius, $[45] = cardShadow, $[46] = children, $[47] = contentRef, $[48] = footer, $[49] = header, $[50] = hideCloseButton, $[51] = id, $[52] = onClickOutside, $[53] = onClose, $[54] = portalProp, $[55] = scheme, $[56] = width, $[57] = t17) : t17 = $[57];
	let t18;
	$[58] === Symbol.for("react.memo_cache_sentinel") ? (t18 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: postDivRef,
		tabIndex: 0
	}), $[58] = t18) : t18 = $[58];
	let t19;
	$[59] !== handleFocus || $[60] !== handleRootClick || $[61] !== id || $[62] !== labelId || $[63] !== onActivate || $[64] !== padding || $[65] !== position || $[66] !== ref || $[67] !== restProps || $[68] !== t15 || $[69] !== t17 || $[70] !== zOffset ? (t19 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledDialog, {
		...restProps,
		$padding: padding,
		$position: position,
		"aria-labelledby": labelId,
		className: t15,
		"aria-modal": !0,
		"data-ui": "Dialog",
		id,
		onActivate,
		onClick: handleRootClick,
		onFocus: handleFocus,
		ref,
		role: "dialog",
		zOffset,
		children: [
			t16,
			t17,
			t18
		]
	}), $[59] = handleFocus, $[60] = handleRootClick, $[61] = id, $[62] = labelId, $[63] = onActivate, $[64] = padding, $[65] = position, $[66] = ref, $[67] = restProps, $[68] = t15, $[69] = t17, $[70] = zOffset, $[71] = t19) : t19 = $[71];
	let t20;
	return $[72] !== portalProp || $[73] !== t19 ? (t20 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
		__unstable_name: portalProp,
		children: t19
	}), $[72] = portalProp, $[73] = t19, $[74] = t20) : t20 = $[74], t20;
}
/**
* This API might change. DO NOT USE IN PRODUCTION.
* @beta
*/
function DialogProvider(props) {
	let $ = (0, import_compiler_runtime.c)(6), { children, position, zOffset } = props, t0;
	$[0] !== position || $[1] !== zOffset ? (t0 = {
		version: 0,
		position,
		zOffset
	}, $[0] = position, $[1] = zOffset, $[2] = t0) : t0 = $[2];
	let contextValue = t0, t1;
	return $[3] !== children || $[4] !== contextValue ? (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContext.Provider, {
		value: contextValue,
		children
	}), $[3] = children, $[4] = contextValue, $[5] = t1) : t1 = $[5], t1;
}
var skeleton = "fnwpv81";
var skeletonAnimated = "fnwpv84";
var skeletonHidden = "fnwpv83";
var skeletonStatic = "fnwpv85";
var skeletonVisible = "fnwpv82";
var StyledSkeleton$1 = /* @__PURE__ */ gt(Box).withConfig({
	displayName: "StyledSkeleton",
	componentId: "sc-qq1bsx-0"
})(responsiveRadiusStyle);
/**
* This API might change. DO NOT USE IN PRODUCTION.
* @beta
*/
function Skeleton(props) {
	let $ = (0, import_compiler_runtime.c)(21), className, delay, radius, ref, restProps, t0;
	$[0] === props ? (className = $[1], delay = $[2], radius = $[3], ref = $[4], restProps = $[5], t0 = $[6]) : ({animated: t0, className, delay, radius, ref, ...restProps} = props, $[0] = props, $[1] = className, $[2] = delay, $[3] = radius, $[4] = ref, $[5] = restProps, $[6] = t0);
	let animated = t0 !== void 0 && t0, [visible, setVisible] = (0, import_react.useState)(!delay), t1, t2;
	$[7] === delay ? (t1 = $[8], t2 = $[9]) : (t1 = () => {
		if (!delay) return;
		let timeout = setTimeout(() => {
			setVisible(!0);
		}, delay);
		return () => {
			clearTimeout(timeout);
		};
	}, t2 = [delay], $[7] = delay, $[8] = t1, $[9] = t2), (0, import_react.useEffect)(t1, t2);
	let t3;
	$[10] === radius ? t3 = $[11] : (t3 = _getArrayProp(radius), $[10] = radius, $[11] = t3);
	let t4 = !delay || visible ? skeletonVisible : skeletonHidden, t5 = animated ? skeletonAnimated : skeletonStatic, t6;
	$[12] !== className || $[13] !== t4 || $[14] !== t5 ? (t6 = clsx(skeleton, t4, t5, className), $[12] = className, $[13] = t4, $[14] = t5, $[15] = t6) : t6 = $[15];
	let t7;
	return $[16] !== ref || $[17] !== restProps || $[18] !== t3 || $[19] !== t6 ? (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledSkeleton$1, {
		"data-ui": "Skeleton",
		...restProps,
		$radius: t3,
		className: t6,
		ref
	}), $[16] = ref, $[17] = restProps, $[18] = t3, $[19] = t6, $[20] = t7) : t7 = $[20], t7;
}
var StyledSkeleton = /* @__PURE__ */ gt(Skeleton).withConfig({
	displayName: "StyledSkeleton",
	componentId: "sc-pe7hmi-0"
})((props) => {
	let { $size, $style } = props, { font, media } = getTheme_v2(props.theme), fontStyle = font[$style];
	return _responsive(media, $size, (sizeIndex) => {
		let fontSize = fontStyle.sizes[sizeIndex];
		return { height: fontSize.lineHeight - fontSize.ascenderHeight - fontSize.descenderHeight };
	});
});
/**
* This API might change. DO NOT USE IN PRODUCTION.
* @beta
*/
function TextSkeleton(props) {
	let $ = (0, import_compiler_runtime.c)(8), restProps, t0;
	$[0] === props ? (restProps = $[1], t0 = $[2]) : ({size: t0, ...restProps} = props, $[0] = props, $[1] = restProps, $[2] = t0);
	let size = t0 === void 0 ? 2 : t0, t1;
	$[3] === size ? t1 = $[4] : (t1 = _getArrayProp(size), $[3] = size, $[4] = t1);
	let $size = t1, t2;
	return $[5] !== $size || $[6] !== restProps ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledSkeleton, {
		"data-ui": "TextSkeleton",
		...restProps,
		$size,
		$style: "text"
	}), $[5] = $size, $[6] = restProps, $[7] = t2) : t2 = $[7], t2;
}
var tab = "gpfraw0";
/**
* @public
*/
function Tab(props) {
	let $ = (0, import_compiler_runtime.c)(35), className, focused, forwardedRef, icon, id, label, onClick, onFocus, restProps, selected, t0, t1;
	$[0] === props ? (className = $[1], focused = $[2], forwardedRef = $[3], icon = $[4], id = $[5], label = $[6], onClick = $[7], onFocus = $[8], restProps = $[9], selected = $[10], t0 = $[11], t1 = $[12]) : ({className, icon, id, focused, fontSize: t0, label, onClick, onFocus, padding: t1, ref: forwardedRef, selected, ...restProps} = props, $[0] = props, $[1] = className, $[2] = focused, $[3] = forwardedRef, $[4] = icon, $[5] = id, $[6] = label, $[7] = onClick, $[8] = onFocus, $[9] = restProps, $[10] = selected, $[11] = t0, $[12] = t1);
	let fontSize = t0 === void 0 ? 1 : t0, padding = t1 === void 0 ? 2 : t1, ref = (0, import_react.useRef)(null), focusedRef = (0, import_react.useRef)(!1), t2;
	$[13] === Symbol.for("react.memo_cache_sentinel") ? (t2 = () => ref.current, $[13] = t2) : t2 = $[13], (0, import_react.useImperativeHandle)(forwardedRef, t2);
	let t3;
	$[14] === Symbol.for("react.memo_cache_sentinel") ? (t3 = () => {
		focusedRef.current = !1;
	}, $[14] = t3) : t3 = $[14];
	let handleBlur = t3, t4;
	$[15] === onFocus ? t4 = $[16] : (t4 = (event) => {
		focusedRef.current = !0, onFocus && onFocus(event);
	}, $[15] = onFocus, $[16] = t4);
	let handleFocus = t4, t5, t6;
	$[17] === focused ? (t5 = $[18], t6 = $[19]) : (t5 = () => {
		focused && !focusedRef.current && (ref.current && ref.current.focus(), focusedRef.current = !0);
	}, t6 = [focused], $[17] = focused, $[18] = t5, $[19] = t6), (0, import_react.useEffect)(t5, t6);
	let t7;
	$[20] === className ? t7 = $[21] : (t7 = clsx(tab, className), $[20] = className, $[21] = t7);
	let t8 = selected ? "true" : "false", t9 = selected ? 0 : -1, t10;
	return $[22] !== fontSize || $[23] !== handleFocus || $[24] !== icon || $[25] !== id || $[26] !== label || $[27] !== onClick || $[28] !== padding || $[29] !== restProps || $[30] !== selected || $[31] !== t7 || $[32] !== t8 || $[33] !== t9 ? (t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		className: t7,
		"data-ui": "Tab",
		...restProps,
		"aria-selected": t8,
		fontSize,
		icon,
		id,
		mode: "bleed",
		onClick,
		onBlur: handleBlur,
		onFocus: handleFocus,
		padding,
		ref,
		role: "tab",
		selected,
		tabIndex: t9,
		text: label,
		type: "button"
	}), $[22] = fontSize, $[23] = handleFocus, $[24] = icon, $[25] = id, $[26] = label, $[27] = onClick, $[28] = padding, $[29] = restProps, $[30] = selected, $[31] = t7, $[32] = t8, $[33] = t9, $[34] = t10) : t10 = $[34], t10;
}
var tabList = "_11igkzi0";
/**
* @public
*/
function TabList(props) {
	let $ = (0, import_compiler_runtime.c)(20), childrenProp, className, ref, restProps;
	$[0] === props ? (childrenProp = $[1], className = $[2], ref = $[3], restProps = $[4]) : ({children: childrenProp, className, ref, ...restProps} = props, $[0] = props, $[1] = childrenProp, $[2] = className, $[3] = ref, $[4] = restProps);
	let [focusedIndex, setFocusedIndex] = (0, import_react.useState)(-1), t0;
	if ($[5] !== childrenProp || $[6] !== focusedIndex) {
		let children = import_react.Children.toArray(childrenProp).filter(import_react.isValidElement), t1;
		$[8] === focusedIndex ? t1 = $[9] : (t1 = (child, childIndex) => (0, import_react.cloneElement)(child, {
			focused: focusedIndex === childIndex,
			key: childIndex,
			onFocus: () => setFocusedIndex(childIndex)
		}), $[8] = focusedIndex, $[9] = t1), t0 = children.map(t1), $[5] = childrenProp, $[6] = focusedIndex, $[7] = t0;
	} else t0 = $[7];
	let tabs = t0, numTabs = tabs.length, t1;
	$[10] === numTabs ? t1 = $[11] : (t1 = (event) => {
		event.key === "ArrowLeft" && setFocusedIndex((prevIndex) => (prevIndex + numTabs - 1) % numTabs), event.key === "ArrowRight" && setFocusedIndex((prevIndex_0) => (prevIndex_0 + 1) % numTabs);
	}, $[10] = numTabs, $[11] = t1);
	let handleKeyDown = t1, t2;
	$[12] === className ? t2 = $[13] : (t2 = clsx(tabList, className), $[12] = className, $[13] = t2);
	let t3;
	return $[14] !== handleKeyDown || $[15] !== ref || $[16] !== restProps || $[17] !== t2 || $[18] !== tabs ? (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inline, {
		className: t2,
		"data-ui": "TabList",
		...restProps,
		onKeyDown: handleKeyDown,
		ref,
		role: "tablist",
		children: tabs
	}), $[14] = handleKeyDown, $[15] = ref, $[16] = restProps, $[17] = t2, $[18] = tabs, $[19] = t3) : t3 = $[19], t3;
}
/**
* @public
*/
function TabPanel(props) {
	let $ = (0, import_compiler_runtime.c)(8), flex, restProps;
	$[0] === props ? (flex = $[1], restProps = $[2]) : ({flex, ...restProps} = props, $[0] = props, $[1] = flex, $[2] = restProps);
	let t0 = props.tabIndex === void 0 ? 0 : props.tabIndex, t1;
	return $[3] !== flex || $[4] !== props.children || $[5] !== restProps || $[6] !== t0 ? (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		"data-ui": "TabPanel",
		...restProps,
		flex,
		role: "tabpanel",
		tabIndex: t0,
		children: props.children
	}), $[3] = flex, $[4] = props.children, $[5] = restProps, $[6] = t0, $[7] = t1) : t1 = $[7], t1;
}
createGlobalScopedContext("@sanity/ui/context/tree", null);
/**
* @internal
*/
function _isScrollable(el) {
	if (!(el instanceof Element)) return !1;
	let style = window.getComputedStyle(el);
	return style.overflowX.includes("auto") || style.overflowX.includes("scroll") || style.overflowY.includes("auto") || style.overflowY.includes("scroll");
}
/**
* Returns true if a dark color scheme is preferred, false if a light color scheme is preferred or the preference is not known.
*
* @param getServerSnapshot - Only called during server-side rendering, and hydration if using hydrateRoot. Since the server environment doesn't have access to the DOM, we can't determine the current value of the media query and we assume `(prefers-color-scheme: light)` since it's the most common scheme (https://react.dev/reference/react/useSyncExternalStore#adding-support-for-server-rendering)
*
* If you persist the detected preference in a cookie or a header then you may implement your own server snapshot to read it.
* Chrome supports reading the `prefers-color-scheme` media query from a header if the server response: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Color-Scheme
* @example https://gist.github.com/stipsan/13c0cccf8dfc34f4b44bb1b984baf7df
*
* @public
*/
function usePrefersDark(t0) {
	return useMatchMedia("(prefers-color-scheme: dark)", t0 === void 0 ? _temp$3 : t0);
}
function _temp$3() {
	return !1;
}
/**
* Get responsive CSS for the `label` font style.
* @internal
*/
function responsiveLabelFont(props) {
	return responsiveFont("label", props);
}
function labelBaseStyle(props) {
	let { $accent, $muted } = props, { font } = getTheme_v2(props.theme);
	return ft`text-transform:uppercase;${$accent && ft`color:var(--card-accent-fg-color);`} ${$muted && ft`color:var(--card-muted-fg-color);`} & code{font-family:${font.code.family};border-radius:1px;}& a{text-decoration:none;border-radius:1px;}& svg{display:inline;max-width:unset;}& [data-sanity-icon]{vertical-align:baseline;}`;
}
var StyledLabel = /* @__PURE__ */ gt.div.withConfig({
	displayName: "StyledLabel",
	componentId: "sc-43585o-0"
})(responsiveLabelFont, responsiveTextAlignStyle, labelBaseStyle);
function LabelComponent(props) {
	let $ = (0, import_compiler_runtime.c)(27), accent, align, childrenProp, ref, restProps, t0, t1, textOverflow, weight;
	$[0] === props ? (accent = $[1], align = $[2], childrenProp = $[3], ref = $[4], restProps = $[5], t0 = $[6], t1 = $[7], textOverflow = $[8], weight = $[9]) : ({accent, align, children: childrenProp, muted: t0, ref, size: t1, textOverflow, weight, ...restProps} = props, $[0] = props, $[1] = accent, $[2] = align, $[3] = childrenProp, $[4] = ref, $[5] = restProps, $[6] = t0, $[7] = t1, $[8] = textOverflow, $[9] = weight);
	let muted = t0 !== void 0 && t0, size = t1 === void 0 ? 2 : t1, children = childrenProp;
	if (textOverflow === "ellipsis") {
		let t2;
		$[10] === children ? t2 = $[11] : (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpanWithTextOverflow, { children }), $[10] = children, $[11] = t2), children = t2;
	} else {
		let t2;
		$[12] === children ? t2 = $[13] : (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }), $[12] = children, $[13] = t2), children = t2;
	}
	let t2;
	$[14] === align ? t2 = $[15] : (t2 = _getArrayProp(align), $[14] = align, $[15] = t2);
	let t3;
	$[16] === size ? t3 = $[17] : (t3 = _getArrayProp(size), $[16] = size, $[17] = t3);
	let t4;
	return $[18] !== accent || $[19] !== children || $[20] !== muted || $[21] !== ref || $[22] !== restProps || $[23] !== t2 || $[24] !== t3 || $[25] !== weight ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledLabel, {
		"data-ui": "Label",
		...restProps,
		$accent: accent,
		$align: t2,
		$muted: muted,
		$size: t3,
		$weight: weight,
		ref,
		children
	}), $[18] = accent, $[19] = children, $[20] = muted, $[21] = ref, $[22] = restProps, $[23] = t2, $[24] = t3, $[25] = weight, $[26] = t4) : t4 = $[26], t4;
}
/**
* Typographic labels.
*
* @public
*/
var Label = LabelComponent;
function avatarRootStyle(props) {
	let { $color } = props, { avatar } = getTheme_v2(props.theme);
	return {
		"--avatar-bg-color": `var(--card-avatar-${$color}-bg-color)`,
		"--avatar-fg-color": `var(--card-avatar-${$color}-fg-color)`,
		backgroundColor: "var(--avatar-bg-color)",
		position: "relative",
		boxSizing: "border-box",
		userSelect: "none",
		boxShadow: "0 0 0 1px var(--card-bg-color)",
		"&[data-status=\"inactive\"]": { opacity: "0.5" },
		"&>svg": { "&:not([hidden])": { display: "block" } },
		"&[data-as=\"button\"]": {
			WebkitFontSmoothing: "inherit",
			appearance: "none",
			margin: 0,
			padding: 0,
			border: 0,
			font: "inherit",
			color: "inherit",
			outline: "none",
			"&:focus": { boxShadow: focusRingStyle({ focusRing: avatar.focusRing }) },
			"&:focus:not(:focus-visible)": { boxShadow: "none" }
		}
	};
}
function responsiveAvatarSizeStyle(props) {
	let { avatar, media } = getTheme_v2(props.theme);
	return _responsive(media, props.$size, (size) => {
		let avatarSize = avatar.sizes[size] || avatar.sizes[0];
		return {
			width: rem(avatarSize.size),
			height: rem(avatarSize.size),
			borderRadius: rem(avatarSize.size / 2),
			"&>svg": {
				width: rem(avatarSize.size),
				height: rem(avatarSize.size),
				borderRadius: rem(avatarSize.size / 2)
			}
		};
	});
}
var avatarArrow = "_1jezl1b0";
var avatarStack = "_1jezl1b4";
var StyledAvatar = /* @__PURE__ */ gt.div.withConfig({
	displayName: "StyledAvatar",
	componentId: "sc-2lyi68-0"
})(responsiveAvatarSizeStyle, avatarRootStyle);
var InitialsLabel = /* @__PURE__ */ gt(Label).withConfig({
	displayName: "InitialsLabel",
	componentId: "sc-2lyi68-1"
})({ color: "inherit" });
function AvatarComponent(props) {
	let $ = (0, import_compiler_runtime.c)(44), __unstable_hideInnerStroke, animateArrowFrom, arrowPositionProp, asProp, initials, onImageLoadError, ref, restProps, src, t0, t1, t2, title;
	$[0] === props ? (__unstable_hideInnerStroke = $[1], animateArrowFrom = $[2], arrowPositionProp = $[3], asProp = $[4], initials = $[5], onImageLoadError = $[6], ref = $[7], restProps = $[8], src = $[9], t0 = $[10], t1 = $[11], t2 = $[12], title = $[13]) : ({__unstable_hideInnerStroke, as: asProp, color: t0, src, title, initials, onImageLoadError, arrowPosition: arrowPositionProp, animateArrowFrom, ref, status: t1, size: t2, ...restProps} = props, $[0] = props, $[1] = __unstable_hideInnerStroke, $[2] = animateArrowFrom, $[3] = arrowPositionProp, $[4] = asProp, $[5] = initials, $[6] = onImageLoadError, $[7] = ref, $[8] = restProps, $[9] = src, $[10] = t0, $[11] = t1, $[12] = t2, $[13] = title);
	let color = t0 === void 0 ? "gray" : t0, status = t1 === void 0 ? "online" : t1, sizeProp = t2 === void 0 ? 1 : t2, { avatar } = useTheme_v2(), as = import_react_is.isValidElementType(asProp) ? asProp : "div", size = _getArrayProp(sizeProp), _sizeRem = (avatar.sizes[size[0]] || avatar.sizes[0]).size, _radius = _sizeRem / 2, elementId = (0, import_react.useId)(), [arrowPosition, setArrowPosition] = (0, import_react.useState)(animateArrowFrom || arrowPositionProp || "inside"), [imageFailed, setImageFailed] = (0, import_react.useState)(!1), [prevSrc, setPrevSrc] = (0, import_react.useState)(src);
	prevSrc !== src && (setPrevSrc(src), src && setImageFailed(!1));
	let imageId = `avatar-image-${elementId}`, t3, t4;
	$[14] !== arrowPosition || $[15] !== arrowPositionProp ? (t3 = () => {
		if (arrowPosition === arrowPositionProp) return;
		let raf = requestAnimationFrame(() => setArrowPosition(arrowPositionProp));
		return () => cancelAnimationFrame(raf);
	}, t4 = [arrowPosition, arrowPositionProp], $[14] = arrowPosition, $[15] = arrowPositionProp, $[16] = t3, $[17] = t4) : (t3 = $[16], t4 = $[17]), (0, import_react.useEffect)(t3, t4);
	let t5;
	$[18] === onImageLoadError ? t5 = $[19] : (t5 = () => {
		setImageFailed(!0), onImageLoadError && onImageLoadError(/* @__PURE__ */ Error("Avatar: the image failed to load"));
	}, $[18] = onImageLoadError, $[19] = t5);
	let handleImageError = t5, T0 = StyledAvatar, t6 = typeof as == "string" ? as : void 0, t8;
	$[20] === color ? t8 = $[21] : (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: avatarArrow,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			width: "11",
			height: "7",
			viewBox: "0 0 11 7",
			fill: "none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M6.67948 1.50115L11 7L0 7L4.32052 1.50115C4.92109 0.736796 6.07891 0.736795 6.67948 1.50115Z",
				fill: color
			})
		})
	}), $[20] = color, $[21] = t8);
	let t9;
	$[22] !== __unstable_hideInnerStroke || $[23] !== _radius || $[24] !== _sizeRem || $[25] !== handleImageError || $[26] !== imageFailed || $[27] !== imageId || $[28] !== src ? (t9 = !imageFailed && src && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "_1jezl1b1",
		viewBox: `0 0 ${_sizeRem} ${_sizeRem}`,
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
				id: imageId,
				patternContentUnits: "objectBoundingBox",
				width: "1",
				height: "1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("image", {
					href: src,
					width: "1",
					height: "1",
					onError: handleImageError
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: _radius,
				cy: _radius,
				r: _radius,
				fill: `url(#${imageId})`
			}),
			!__unstable_hideInnerStroke && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				className: "_1jezl1b2",
				cx: _radius,
				cy: _radius,
				rx: _radius,
				ry: _radius,
				vectorEffect: "non-scaling-stroke"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				className: "_1jezl1b3",
				cx: _radius,
				cy: _radius,
				rx: _radius,
				ry: _radius,
				vectorEffect: "non-scaling-stroke"
			})
		]
	}), $[22] = __unstable_hideInnerStroke, $[23] = _radius, $[24] = _sizeRem, $[25] = handleImageError, $[26] = imageFailed, $[27] = imageId, $[28] = src, $[29] = t9) : t9 = $[29];
	let t10 = (imageFailed || !src) && initials && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "_1jezl1b5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InitialsLabel, {
			forwardedAs: "span",
			size: size.map(_temp$2),
			weight: "medium",
			children: initials
		})
	}) }), t11;
	return $[30] !== T0 || $[31] !== arrowPosition || $[32] !== as || $[33] !== color || $[34] !== ref || $[35] !== restProps || $[36] !== size || $[37] !== status || $[38] !== t10 || $[39] !== t6 || $[40] !== t8 || $[41] !== t9 || $[42] !== title ? (t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(T0, {
		as,
		"data-as": t6,
		"data-ui": "Avatar",
		...restProps,
		$color: color,
		$size: size,
		"aria-label": title,
		"data-arrow-position": arrowPosition,
		"data-status": status,
		ref,
		title,
		children: [
			t8,
			t9,
			t10
		]
	}), $[30] = T0, $[31] = arrowPosition, $[32] = as, $[33] = color, $[34] = ref, $[35] = restProps, $[36] = size, $[37] = status, $[38] = t10, $[39] = t6, $[40] = t8, $[41] = t9, $[42] = title, $[43] = t11) : t11 = $[43], t11;
}
function _temp$2(s) {
	return s === 1 ? 1 : s === 2 ? 3 : s === 3 ? 5 : 0;
}
/**
* Avatars are used to represent people and other agents (e.g. bots).
*
* @public
*/
var Avatar = AvatarComponent;
function _responsiveAvatarCounterSizeStyle(props) {
	let { avatar, media } = getTheme_v2(props.theme);
	return _responsive(media, props.$size, (size) => {
		let avatarSize = avatar.sizes[size];
		return avatarSize ? {
			borderRadius: rem(avatarSize.size / 2),
			minWidth: rem(avatarSize.size),
			height: rem(avatarSize.size)
		} : EMPTY_RECORD;
	});
}
function _avatarCounterBaseStyle(props) {
	let { space } = getTheme_v2(props.theme);
	return ft`align-items:center;justify-content:center;box-sizing:border-box;user-select:none;color:inherit;color:var(--card-fg-color);background:var(--card-bg-color);box-shadow:0 0 0 1px var(--card-bg-color),inset 0 0 0 1px var(--card-hairline-hard-color);padding:0 ${rem(space[2])};&:not([hidden]){display:flex;}`;
}
var StyledAvatarCounter = /* @__PURE__ */ gt.div.withConfig({
	displayName: "StyledAvatarCounter",
	componentId: "sc-rwjooy-0"
})(_responsiveAvatarCounterSizeStyle, _avatarCounterBaseStyle);
/**
* @public
*/
function AvatarCounter(props) {
	let $ = (0, import_compiler_runtime.c)(20), { count, ref, size: t0 } = props, sizeProp = t0 === void 0 ? 1 : t0, T0, T1, t1, t2, t3, t4, t5;
	if ($[0] !== ref || $[1] !== sizeProp) {
		let size = _getArrayProp(sizeProp);
		T1 = StyledAvatarCounter, t3 = size, t4 = "AvatarCounter", t5 = ref, T0 = Label, t1 = "span", t2 = size.map(_temp$1), $[0] = ref, $[1] = sizeProp, $[2] = T0, $[3] = T1, $[4] = t1, $[5] = t2, $[6] = t3, $[7] = t4, $[8] = t5;
	} else T0 = $[2], T1 = $[3], t1 = $[4], t2 = $[5], t3 = $[6], t4 = $[7], t5 = $[8];
	let t6;
	$[9] !== T0 || $[10] !== count || $[11] !== t1 || $[12] !== t2 ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T0, {
		as: t1,
		size: t2,
		weight: "medium",
		children: count
	}), $[9] = T0, $[10] = count, $[11] = t1, $[12] = t2, $[13] = t6) : t6 = $[13];
	let t7;
	return $[14] !== T1 || $[15] !== t3 || $[16] !== t4 || $[17] !== t5 || $[18] !== t6 ? (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T1, {
		$size: t3,
		"data-ui": t4,
		ref: t5,
		children: t6
	}), $[14] = T1, $[15] = t3, $[16] = t4, $[17] = t5, $[18] = t6, $[19] = t7) : t7 = $[19], t7;
}
function _temp$1(s) {
	return s === 1 ? 1 : s === 2 ? 3 : s === 3 ? 5 : 0;
}
function responsiveAvatarStackSizeStyle(props) {
	let { avatar, media } = getTheme_v2(props.theme);
	return _responsive(media, props.$size, (size) => {
		let avatarSize = avatar.sizes[size];
		return avatarSize ? { "& > div + div": { marginLeft: rem(avatarSize.distance) } } : EMPTY_RECORD;
	});
}
var StyledAvatarStack = /* @__PURE__ */ gt.div.withConfig({
	displayName: "StyledAvatarStack",
	componentId: "sc-cw2hpz-0"
})(responsiveAvatarStackSizeStyle);
/**
* @public
*/
function AvatarStack(props) {
	let $ = (0, import_compiler_runtime.c)(45), childrenProp, className, ref, restProps, t0, t1;
	$[0] === props ? (childrenProp = $[1], className = $[2], ref = $[3], restProps = $[4], t0 = $[5], t1 = $[6]) : ({children: childrenProp, className, maxLength: t0, ref, size: t1, ...restProps} = props, $[0] = props, $[1] = childrenProp, $[2] = className, $[3] = ref, $[4] = restProps, $[5] = t0, $[6] = t1);
	let maxLengthProp = t0 === void 0 ? 4 : t0, sizeProp = t1 === void 0 ? 1 : t1, T0, t2, t3, t4, t5, t6, t7, t8, t9;
	if ($[7] !== childrenProp || $[8] !== className || $[9] !== maxLengthProp || $[10] !== ref || $[11] !== restProps || $[12] !== sizeProp) {
		let children = import_react.Children.toArray(childrenProp).filter(import_react.isValidElement), maxLength = Math.max(maxLengthProp, 0), t10;
		$[22] === sizeProp ? t10 = $[23] : (t10 = _getArrayProp(sizeProp), $[22] = sizeProp, $[23] = t10);
		let size = t10, len = children.length, extraCount = len - (maxLength - 1), visibleChildren = extraCount > 1 ? children.slice(extraCount, len) : children;
		T0 = StyledAvatarStack, $[24] === className ? t2 = $[25] : (t2 = clsx(avatarStack, className), $[24] = className, $[25] = t2), t3 = "AvatarStack", t4 = restProps, t5 = ref, t6 = size, $[26] !== len || $[27] !== size ? (t7 = len === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarCounter, {
			count: len,
			size
		}) }), $[26] = len, $[27] = size, $[28] = t7) : t7 = $[28], $[29] !== extraCount || $[30] !== len || $[31] !== size ? (t8 = len !== 0 && extraCount > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarCounter, {
			count: extraCount,
			size
		}) }), $[29] = extraCount, $[30] = len, $[31] = size, $[32] = t8) : t8 = $[32];
		let t11;
		$[33] === size ? t11 = $[34] : (t11 = (child, childIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: (0, import_react.cloneElement)(child, { size }) }, String(childIndex)), $[33] = size, $[34] = t11), t9 = visibleChildren.map(t11), $[7] = childrenProp, $[8] = className, $[9] = maxLengthProp, $[10] = ref, $[11] = restProps, $[12] = sizeProp, $[13] = T0, $[14] = t2, $[15] = t3, $[16] = t4, $[17] = t5, $[18] = t6, $[19] = t7, $[20] = t8, $[21] = t9;
	} else T0 = $[13], t2 = $[14], t3 = $[15], t4 = $[16], t5 = $[17], t6 = $[18], t7 = $[19], t8 = $[20], t9 = $[21];
	let t10;
	return $[35] !== T0 || $[36] !== t2 || $[37] !== t3 || $[38] !== t4 || $[39] !== t5 || $[40] !== t6 || $[41] !== t7 || $[42] !== t8 || $[43] !== t9 ? (t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(T0, {
		className: t2,
		"data-ui": t3,
		...t4,
		ref: t5,
		$size: t6,
		children: [
			t7,
			t8,
			t9
		]
	}), $[35] = T0, $[36] = t2, $[37] = t3, $[38] = t4, $[39] = t5, $[40] = t6, $[41] = t7, $[42] = t8, $[43] = t9, $[44] = t10) : t10 = $[44], t10;
}
function badgeStyle(props) {
	let { $tone } = props;
	return {
		"--card-bg-color": `var(--card-badge-${$tone}-bg-color)`,
		"--card-fg-color": `var(--card-badge-${$tone}-fg-color)`,
		backgroundColor: "var(--card-bg-color)",
		cursor: "default",
		"&:not([hidden])": {
			display: "inline-block",
			verticalAlign: "top"
		}
	};
}
var StyledBadge = /* @__PURE__ */ gt(Box).withConfig({
	displayName: "StyledBadge",
	componentId: "sc-zj5mk0-0"
})(responsiveRadiusStyle, badgeStyle);
var Badge = function Badge(props) {
	let $ = (0, import_compiler_runtime.c)(22), children, ref, restProps, t0, t1, t2, t3;
	$[0] === props ? (children = $[1], ref = $[2], restProps = $[3], t0 = $[4], t1 = $[5], t2 = $[6], t3 = $[7]) : ({children, fontSize: t0, padding: t1, radius: t2, ref, tone: t3, ...restProps} = props, $[0] = props, $[1] = children, $[2] = ref, $[3] = restProps, $[4] = t0, $[5] = t1, $[6] = t2, $[7] = t3);
	let fontSize = t0 === void 0 ? 1 : t0, padding = t1 === void 0 ? 1 : t1, radius = t2 === void 0 ? "full" : t2, tone = t3 === void 0 ? "default" : t3, t4;
	$[8] === radius ? t4 = $[9] : (t4 = _getArrayProp(radius), $[8] = radius, $[9] = t4);
	let t5;
	$[10] === padding ? t5 = $[11] : (t5 = _getArrayProp(padding), $[10] = padding, $[11] = t5);
	let t6;
	$[12] !== children || $[13] !== fontSize ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
		size: fontSize,
		children
	}), $[12] = children, $[13] = fontSize, $[14] = t6) : t6 = $[14];
	let t7;
	return $[15] !== ref || $[16] !== restProps || $[17] !== t4 || $[18] !== t5 || $[19] !== t6 || $[20] !== tone ? (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledBadge, {
		"data-ui": "Badge",
		...restProps,
		$tone: tone,
		$radius: t4,
		padding: t5,
		ref,
		children: t6
	}), $[15] = ref, $[16] = restProps, $[17] = t4, $[18] = t5, $[19] = t6, $[20] = tone, $[21] = t7) : t7 = $[21], t7;
};
function inputElementStyles(props) {
	let { color, input, radius } = getTheme_v2(props.theme), { focusRing } = input.checkbox;
	return ft`position:absolute;top:0;left:0;width:100%;height:100%;outline:none;opacity:0;z-index:1;padding:0;margin:0;& + span{position:relative;display:block;height:${rem(input.checkbox.size)};width:${rem(input.checkbox.size)};box-sizing:border-box;box-shadow:${focusRingBorderStyle({
		color: color.input.default.enabled.border,
		width: input.border.width
	})};border-radius:${rem(radius[2])};line-height:1;background-color:${color.input.default.enabled.bg};& > svg{display:block;position:absolute;opacity:0;height:100%;width:100%;& > path{vector-effect:non-scaling-stroke;stroke-width:1.5px !important;}}}&:checked + span{background:${color.input.default.enabled.fg};box-shadow:${focusRingBorderStyle({
		color: color.input.default.enabled.fg,
		width: input.border.width
	})};color:${color.input.default.enabled.bg};}&:not(:disabled):focus:focus-visible + span{box-shadow:${focusRingStyle({ focusRing })};}&:not(:disabled):focus:focus-visible&:checked + span{box-shadow:${focusRingStyle({ focusRing: {
		width: 1,
		offset: 1
	} })};}&[data-error] + span{background-color:${color.input.invalid.enabled.border};box-shadow:${focusRingBorderStyle({
		width: input.border.width,
		color: color.input.invalid.enabled.muted.bg
	})};color:${color.input.default.disabled.fg};}&[data-error]&:checked + span{background-color:${color.input.invalid.enabled.muted.bg};color:${color.input.default.enabled.bg};}&[data-error]&:checked&:not(:disabled):focus:focus-visible + span{box-shadow:${focusRingStyle({
		border: {
			width: input.border.width,
			color: color.input.invalid.readOnly.muted.bg
		},
		focusRing: {
			width: 1,
			offset: 1
		}
	})};}&:disabled + span{background-color:${color.input.default.disabled.bg};box-shadow:${focusRingBorderStyle({
		width: input.border.width,
		color: color.input.default.disabled.border
	})};color:${color.input.default.disabled.fg};}&:disabled&:checked + span{background-color:${color.input.default.disabled.muted.bg};}&[data-read-only] + span{background-color:${color.input.default.readOnly.bg};box-shadow:${focusRingBorderStyle({
		width: input.border.width,
		color: color.input.default.readOnly.border
	})};color:${color.input.default.readOnly.fg};}&[data-read-only]&:checked + span{background-color:${color.input.default.readOnly.muted.bg};}&:checked + span > svg:first-child{opacity:1;}&:indeterminate + span > svg:last-child{opacity:1;}`;
}
var checkbox = "ycv36y0";
var Input$3 = /* @__PURE__ */ gt.input.withConfig({
	displayName: "Input",
	componentId: "sc-ng4gkf-0"
})(inputElementStyles);
/**
* Checkboxes allow the user to select one or more items from a set.
*
* @public
*/
function Checkbox(props) {
	let $ = (0, import_compiler_runtime.c)(28), checked, className, customValidity, disabled, forwardedRef, indeterminate, readOnly, restProps, style;
	$[0] === props ? (checked = $[1], className = $[2], customValidity = $[3], disabled = $[4], forwardedRef = $[5], indeterminate = $[6], readOnly = $[7], restProps = $[8], style = $[9]) : ({checked, className, disabled, indeterminate, customValidity, readOnly, ref: forwardedRef, style, ...restProps} = props, $[0] = props, $[1] = checked, $[2] = className, $[3] = customValidity, $[4] = disabled, $[5] = forwardedRef, $[6] = indeterminate, $[7] = readOnly, $[8] = restProps, $[9] = style);
	let ref = (0, import_react.useRef)(null), t0;
	$[10] === Symbol.for("react.memo_cache_sentinel") ? (t0 = () => ref.current, $[10] = t0) : t0 = $[10], (0, import_react.useImperativeHandle)(forwardedRef, t0);
	let t1, t2;
	$[11] === indeterminate ? (t1 = $[12], t2 = $[13]) : (t1 = () => {
		ref.current && (ref.current.indeterminate = indeterminate || !1);
	}, t2 = [indeterminate], $[11] = indeterminate, $[12] = t1, $[13] = t2), (0, import_react.useEffect)(t1, t2), useCustomValidity(ref, customValidity);
	let t3;
	$[14] === className ? t3 = $[15] : (t3 = clsx(checkbox, className), $[14] = className, $[15] = t3);
	let t4 = !disabled && readOnly ? "" : void 0, t5 = customValidity ? "" : void 0, t6 = disabled || readOnly, t7;
	$[16] !== checked || $[17] !== readOnly || $[18] !== restProps || $[19] !== t4 || $[20] !== t5 || $[21] !== t6 ? (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$3, {
		"data-read-only": t4,
		"data-error": t5,
		...restProps,
		checked,
		disabled: t6,
		type: "checkbox",
		readOnly,
		ref
	}), $[16] = checked, $[17] = readOnly, $[18] = restProps, $[19] = t4, $[20] = t5, $[21] = t6, $[22] = t7) : t7 = $[22];
	let t8;
	$[23] === Symbol.for("react.memo_cache_sentinel") ? (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckmarkIcon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoveIcon, {})] }), $[23] = t8) : t8 = $[23];
	let t9;
	return $[24] !== style || $[25] !== t3 || $[26] !== t7 ? (t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: t3,
		"data-ui": "Checkbox",
		style,
		children: [t7, t8]
	}), $[24] = style, $[25] = t3, $[26] = t7, $[27] = t9) : t9 = $[27], t9;
}
/**
* Get responsive CSS for the `heading` font style.
* @internal
*/
function responsiveHeadingFont(props) {
	return responsiveFont("heading", props);
}
function headingBaseStyle(props) {
	let { $accent, $muted } = props, { font } = getTheme_v2(props.theme);
	return ft`${$accent && ft`color:var(--card-accent-fg-color);`} ${$muted && ft`color:var(--card-muted-fg-color);`} & code{font-family:${font.code.family};border-radius:1px;}& a{text-decoration:none;border-radius:1px;color:var(--card-link-color);outline:none;@media (hover:hover){&:hover{text-decoration:underline;}}&:focus{box-shadow:0 0 0 1px var(--card-bg-color),0 0 0 3px var(--card-focus-ring-color);}&:focus:not(:focus-visible){box-shadow:none;}}& strong{font-weight:${font.heading.weights.bold};}& svg{display:inline;max-width:unset;}& [data-sanity-icon]{vertical-align:baseline;}`;
}
var StyledHeading = /* @__PURE__ */ gt.div.withConfig({
	displayName: "StyledHeading",
	componentId: "sc-95f8ng-0"
})(headingBaseStyle, responsiveTextAlignStyle, responsiveHeadingFont);
function HeadingComponent(props) {
	let $ = (0, import_compiler_runtime.c)(27), align, childrenProp, ref, restProps, t0, t1, t2, textOverflow, weight;
	$[0] === props ? (align = $[1], childrenProp = $[2], ref = $[3], restProps = $[4], t0 = $[5], t1 = $[6], t2 = $[7], textOverflow = $[8], weight = $[9]) : ({accent: t0, align, children: childrenProp, muted: t1, ref, size: t2, textOverflow, weight, ...restProps} = props, $[0] = props, $[1] = align, $[2] = childrenProp, $[3] = ref, $[4] = restProps, $[5] = t0, $[6] = t1, $[7] = t2, $[8] = textOverflow, $[9] = weight);
	let accent = t0 !== void 0 && t0, muted = t1 !== void 0 && t1, size = t2 === void 0 ? 2 : t2, children = childrenProp;
	if (textOverflow === "ellipsis") {
		let t3;
		$[10] === children ? t3 = $[11] : (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpanWithTextOverflow, { children }), $[10] = children, $[11] = t3), children = t3;
	}
	let t3;
	$[12] === align ? t3 = $[13] : (t3 = _getArrayProp(align), $[12] = align, $[13] = t3);
	let t4;
	$[14] === size ? t4 = $[15] : (t4 = _getArrayProp(size), $[14] = size, $[15] = t4);
	let t5;
	$[16] === children ? t5 = $[17] : (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }), $[16] = children, $[17] = t5);
	let t6;
	return $[18] !== accent || $[19] !== muted || $[20] !== ref || $[21] !== restProps || $[22] !== t3 || $[23] !== t4 || $[24] !== t5 || $[25] !== weight ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledHeading, {
		"data-ui": "Heading",
		...restProps,
		$accent: accent,
		$align: t3,
		$muted: muted,
		$size: t4,
		$weight: weight,
		ref,
		children: t5
	}), $[18] = accent, $[19] = muted, $[20] = ref, $[21] = restProps, $[22] = t3, $[23] = t4, $[24] = t5, $[25] = weight, $[26] = t6) : t6 = $[26], t6;
}
/**
* Typographic headings.
*
* @public
*/
var Heading = HeadingComponent;
function inputElementStyle(props) {
	let { color, input } = getTheme_v2(props.theme), dist = (input.radio.size - input.radio.markSize) / 2;
	return ft`appearance:none;position:absolute;top:0;left:0;opacity:0;height:100%;width:100%;outline:none;z-index:1;padding:0;margin:0;border-radius:${rem(input.radio.size / 2)};border:none;& + span{display:block;position:relative;height:${rem(input.radio.size)};width:${rem(input.radio.size)};border-radius:${rem(input.radio.size / 2)};background:${color.input.default.enabled.bg};box-shadow:${focusRingBorderStyle({
		color: color.input.default.enabled.border,
		width: input.border.width
	})};&::after{content:'';position:absolute;top:${rem(dist)};left:${rem(dist)};height:${rem(input.radio.markSize)};width:${rem(input.radio.markSize)};border-radius:${rem(input.radio.markSize / 2)};background:${color.input.default.enabled.fg};opacity:0;}}&:not(:disabled):focus + span{box-shadow:${focusRingStyle({
		border: {
			width: input.border.width,
			color: color.input.default.enabled.border
		},
		focusRing: input.radio.focusRing
	})};}&:not(:disabled):focus:not(:focus-visible) + span{box-shadow:${focusRingBorderStyle({
		color: color.input.default.enabled.border,
		width: input.border.width
	})};}&:checked + span::after{opacity:1;}&[data-error] + span{background-color:${color.input.invalid.enabled.border};box-shadow:${focusRingBorderStyle({
		width: input.border.width,
		color: color.input.invalid.enabled.muted.bg
	})};&::after{background:${color.input.invalid.enabled.muted.bg};}}&[data-read-only] + span{box-shadow:0 0 0 1px ${color.input.default.readOnly.border};background:${color.input.default.readOnly.bg};&::after{background:${color.input.default.readOnly.border};}}&:not([data-read-only]):disabled + span{box-shadow:0 0 0 1px ${color.input.default.disabled.border};background:${color.input.default.disabled.bg};&::after{background:${color.input.default.disabled.border};}}`;
}
var radio = "xgt72i0";
var Input$2 = /* @__PURE__ */ gt.input.withConfig({
	displayName: "Input",
	componentId: "sc-u4kfaz-0"
})(inputElementStyle);
/**
* The `Radio` component allows the user to select one option from a set.
*
* @public
*/
function Radio(props) {
	let $ = (0, import_compiler_runtime.c)(22), className, customValidity, disabled, forwardedRef, readOnly, restProps, style;
	$[0] === props ? (className = $[1], customValidity = $[2], disabled = $[3], forwardedRef = $[4], readOnly = $[5], restProps = $[6], style = $[7]) : ({className, disabled, style, customValidity, readOnly, ref: forwardedRef, ...restProps} = props, $[0] = props, $[1] = className, $[2] = customValidity, $[3] = disabled, $[4] = forwardedRef, $[5] = readOnly, $[6] = restProps, $[7] = style);
	let ref = (0, import_react.useRef)(null), t0;
	$[8] === Symbol.for("react.memo_cache_sentinel") ? (t0 = () => ref.current, $[8] = t0) : t0 = $[8], (0, import_react.useImperativeHandle)(forwardedRef, t0), useCustomValidity(ref, customValidity);
	let t1;
	$[9] === className ? t1 = $[10] : (t1 = clsx(radio, className), $[9] = className, $[10] = t1);
	let t2 = !disabled && readOnly ? "" : void 0, t3 = customValidity ? "" : void 0, t4 = disabled || readOnly, t5;
	$[11] !== readOnly || $[12] !== restProps || $[13] !== t2 || $[14] !== t3 || $[15] !== t4 ? (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$2, {
		"data-read-only": t2,
		"data-error": t3,
		...restProps,
		disabled: t4,
		readOnly,
		ref,
		type: "radio"
	}), $[11] = readOnly, $[12] = restProps, $[13] = t2, $[14] = t3, $[15] = t4, $[16] = t5) : t5 = $[16];
	let t6;
	$[17] === Symbol.for("react.memo_cache_sentinel") ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), $[17] = t6) : t6 = $[17];
	let t7;
	return $[18] !== style || $[19] !== t1 || $[20] !== t5 ? (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: t1,
		"data-ui": "Radio",
		style,
		children: [t5, t6]
	}), $[18] = style, $[19] = t1, $[20] = t5, $[21] = t7) : t7 = $[21], t7;
}
function inputBaseStyle(props) {
	let { font } = getTheme_v2(props.theme);
	return ft`-webkit-font-smoothing:antialiased;appearance:none;border:0;font-family:${font.text.family};color:inherit;width:100%;outline:none;margin:0;&:disabled{opacity:1;}`;
}
function inputColorStyle(props) {
	let { color, input } = getTheme_v2(props.theme);
	return ft`background-color:${color.input.default.enabled.bg};color:${color.input.default.enabled.fg};box-shadow:${focusRingBorderStyle({
		color: color.input.default.enabled.border,
		width: input.border.width
	})};@media (hover:hover){&:not(:disabled):hover{background-color:${color.input.default.hovered.bg};color:${color.input.default.hovered.fg};box-shadow:${focusRingBorderStyle({
		color: color.input.default.hovered.border,
		width: input.border.width
	})};}}&:not(:disabled):focus{box-shadow:${focusRingStyle({
		border: {
			width: input.border.width,
			color: color.input.default.enabled.border
		},
		focusRing: input.select.focusRing
	})};}&[data-read-only]{background-color:${color.input.default.readOnly.bg};color:${color.input.default.readOnly.fg};box-shadow:${focusRingBorderStyle({
		color: color.input.default.readOnly.border,
		width: input.border.width
	})};}&:not([data-read-only]):disabled{background-color:${color.input.default.disabled.bg};color:${color.input.default.disabled.fg};box-shadow:${focusRingBorderStyle({
		color: color.input.default.disabled.border,
		width: input.border.width
	})};}`;
}
function textSize(size) {
	return {
		fontSize: rem(size.fontSize),
		lineHeight: `${rem(size.lineHeight)}`
	};
}
function inputTextSizeStyle(props) {
	let { $fontSize } = props, { font, media } = getTheme_v2(props.theme);
	return _responsive(media, $fontSize, (sizeIndex) => textSize(font.text.sizes[sizeIndex] || font.text.sizes[2]));
}
function inputStyle() {
	return [
		responsiveRadiusStyle,
		inputBaseStyle,
		inputColorStyle,
		inputTextSizeStyle,
		responsiveInputPaddingIconRightStyle
	];
}
function iconBoxStyle(props) {
	let { color } = getTheme_v2(props.theme);
	return ft`pointer-events:none;position:absolute;top:0;right:0;--card-fg-color:${color.input.default.enabled.fg};@media (hover:hover){select:not(disabled):not(:read-only):hover + &&{--card-fg-color:${color.input.default.hovered.fg};}}select:disabled + &&{--card-fg-color:${color.input.default.disabled.fg};}select[data-read-only] + &&{--card-fg-color:${color.input.default.readOnly.fg};}`;
}
var selectStyle = {
	input: inputStyle,
	iconBox: iconBoxStyle
};
var select = "_14ngdrn0";
var Input$1 = /* @__PURE__ */ gt.select.withConfig({
	displayName: "Input",
	componentId: "sc-af8su9-0"
})(selectStyle.input);
var IconBox = /* @__PURE__ */ gt(Box).withConfig({
	displayName: "IconBox",
	componentId: "sc-af8su9-1"
})(selectStyle.iconBox);
/**
* The `Select` component provides control of options.
*
* @public
*/
function Select(props) {
	let $ = (0, import_compiler_runtime.c)(38), children, customValidity, disabled, forwardedRef, readOnly, restProps, t0, t1, t2, t3;
	$[0] === props ? (children = $[1], customValidity = $[2], disabled = $[3], forwardedRef = $[4], readOnly = $[5], restProps = $[6], t0 = $[7], t1 = $[8], t2 = $[9], t3 = $[10]) : ({children, customValidity, disabled, fontSize: t0, gap: t1, padding: t2, radius: t3, readOnly, ref: forwardedRef, ...restProps} = props, $[0] = props, $[1] = children, $[2] = customValidity, $[3] = disabled, $[4] = forwardedRef, $[5] = readOnly, $[6] = restProps, $[7] = t0, $[8] = t1, $[9] = t2, $[10] = t3);
	let fontSize = t0 === void 0 ? 2 : t0, gap = t1 === void 0 ? 3 : t1, padding = t2 === void 0 ? 3 : t2, radius = t3 === void 0 ? 2 : t3, ref = (0, import_react.useRef)(null), t4;
	$[11] === Symbol.for("react.memo_cache_sentinel") ? (t4 = () => ref.current, $[11] = t4) : t4 = $[11], (0, import_react.useImperativeHandle)(forwardedRef, t4), useCustomValidity(ref, customValidity);
	let t5 = !disabled && readOnly ? "" : void 0, t6;
	$[12] === fontSize ? t6 = $[13] : (t6 = _getArrayProp(fontSize), $[12] = fontSize, $[13] = t6);
	let t7;
	$[14] === padding ? t7 = $[15] : (t7 = _getArrayProp(padding), $[14] = padding, $[15] = t7);
	let t8;
	$[16] === radius ? t8 = $[17] : (t8 = _getArrayProp(radius), $[16] = radius, $[17] = t8);
	let t9;
	$[18] === gap ? t9 = $[19] : (t9 = _getArrayProp(gap), $[18] = gap, $[19] = t9);
	let t10 = disabled || readOnly, t11;
	$[20] !== children || $[21] !== restProps || $[22] !== t10 || $[23] !== t5 || $[24] !== t6 || $[25] !== t7 || $[26] !== t8 || $[27] !== t9 ? (t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
		"data-read-only": t5,
		"data-ui": "Select",
		...restProps,
		$fontSize: t6,
		$padding: t7,
		$radius: t8,
		$space: t9,
		disabled: t10,
		ref,
		children
	}), $[20] = children, $[21] = restProps, $[22] = t10, $[23] = t5, $[24] = t6, $[25] = t7, $[26] = t8, $[27] = t9, $[28] = t11) : t11 = $[28];
	let t12;
	$[29] === Symbol.for("react.memo_cache_sentinel") ? (t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDownIcon, {}), $[29] = t12) : t12 = $[29];
	let t13;
	$[30] === fontSize ? t13 = $[31] : (t13 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
		size: fontSize,
		children: t12
	}), $[30] = fontSize, $[31] = t13);
	let t14;
	$[32] !== padding || $[33] !== t13 ? (t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBox, {
		padding,
		children: t13
	}), $[32] = padding, $[33] = t13, $[34] = t14) : t14 = $[34];
	let t15;
	return $[35] !== t11 || $[36] !== t14 ? (t15 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: select,
		"data-ui": "Select",
		children: [t11, t14]
	}), $[35] = t11, $[36] = t14, $[37] = t15) : t15 = $[37], t15;
}
function switchRepresentationStyles(props) {
	let { color, input } = getTheme_v2(props.theme);
	return ft`--switch-bg-color:${color.input.default.enabled.border};--switch-fg-color:${color.input.default.enabled.bg};--switch-box-shadow:none;&:not([hidden]){display:block;}position:relative;width:${rem(input.switch.width)};height:${rem(input.switch.height)};border-radius:${rem(input.switch.height / 2)};pointer-events:none;&:after{content:'';display:block;position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;box-shadow:var(--switch-box-shadow);border-radius:inherit;}input:focus + &&{--switch-box-shadow:${focusRingStyle({ focusRing: input.switch.focusRing })};}input:focus:not(:focus-visible) + &&{--switch-box-shadow:none;}input:checked + &&{--switch-bg-color:${color.input.default.enabled.fg};--switch-fg-color:${color.input.default.enabled.bg};}@media (hover:hover){input:not(:disabled):hover + &&{--switch-bg-color:${color.input.default.hovered.border};--switch-fg-color:${color.input.default.hovered.bg};}input:not(:disabled):checked:hover + &&{--switch-bg-color:${color.input.default.enabled.fg};--switch-fg-color:${color.input.default.enabled.bg};}}input:not([data-read-only]):disabled + &&{--switch-bg-color:${color.input.default.disabled.border};--switch-fg-color:${color.input.default.disabled.bg};}input[data-read-only]:disabled + &&{--switch-bg-color:${color.input.default.readOnly.border};--switch-fg-color:${color.input.default.readOnly.bg};}input:checked[data-read-only]:disabled + &&{--switch-bg-color:${color.input.default.readOnly.fg};--switch-fg-color:${color.input.default.readOnly.bg};}`;
}
function switchTrackStyles(props) {
	let { input } = getTheme_v2(props.theme);
	return ft`&:not([hidden]){display:block;}background-color:var(--switch-bg-color);position:absolute;left:0;top:0;width:${rem(input.switch.width)};height:${rem(input.switch.height)};border-radius:${rem(input.switch.height / 2)};`;
}
function switchThumbStyles(props) {
	let { $indeterminate } = props, { input } = getTheme_v2(props.theme), trackWidth = input.switch.width, trackHeight = input.switch.height, trackPadding = input.switch.padding, size = trackHeight - input.switch.padding * 2, checkedOffset = trackWidth - trackPadding * 2 - size, indeterminateOffset = trackWidth / 2 - size / 2 - trackPadding, checked = $indeterminate !== !0 && props.$checked === !0;
	return ft`&:not([hidden]){display:block;}position:absolute;left:${rem(trackPadding)};top:${rem(trackPadding)};height:${rem(size)};width:${rem(size)};border-radius:${rem(size / 2)};transition-property:transform;transition-duration:${input.switch.transitionDurationMs}ms;transition-timing-function:${input.switch.transitionTimingFunction};background:var(--switch-fg-color);transform:translate3d(0,0,0);box-shadow:0px 1px 0px 0px rgba(0,0,0,0.05);${checked && ft`transform:translate3d(${checkedOffset}px,0,0);`} ${$indeterminate && ft`transform:translate3d(${indeterminateOffset}px,0,0);`}`;
}
var switchInput = "cn60s71";
var switchRoot = "cn60s70";
var Representation = /* @__PURE__ */ gt.span.withConfig({
	displayName: "Representation",
	componentId: "sc-ymdgpc-0"
})(switchRepresentationStyles);
var Track = /* @__PURE__ */ gt.span.withConfig({
	displayName: "Track",
	componentId: "sc-ymdgpc-1"
})(switchTrackStyles);
var Thumb = /* @__PURE__ */ gt.span.withConfig({
	displayName: "Thumb",
	componentId: "sc-ymdgpc-2"
})(switchThumbStyles);
/**
* The `Switch` component allows the user to toggle a setting on and off.
*
* Extends all properties of an `<input type="checkbox" />` element, except type.
*
* @public
*/
function Switch(props) {
	let $ = (0, import_compiler_runtime.c)(29), checked, className, disabled, forwardedRef, indeterminate, readOnly, restProps, style;
	$[0] === props ? (checked = $[1], className = $[2], disabled = $[3], forwardedRef = $[4], indeterminate = $[5], readOnly = $[6], restProps = $[7], style = $[8]) : ({checked, className, disabled, indeterminate, readOnly, ref: forwardedRef, style, ...restProps} = props, $[0] = props, $[1] = checked, $[2] = className, $[3] = disabled, $[4] = forwardedRef, $[5] = indeterminate, $[6] = readOnly, $[7] = restProps, $[8] = style);
	let ref = (0, import_react.useRef)(null), t0;
	$[9] === Symbol.for("react.memo_cache_sentinel") ? (t0 = () => ref.current, $[9] = t0) : t0 = $[9], (0, import_react.useImperativeHandle)(forwardedRef, t0);
	let t1, t2;
	$[10] === indeterminate ? (t1 = $[11], t2 = $[12]) : (t1 = () => {
		ref.current && (ref.current.indeterminate = indeterminate || !1);
	}, t2 = [indeterminate], $[10] = indeterminate, $[11] = t1, $[12] = t2), (0, import_react.useEffect)(t1, t2);
	let t3;
	$[13] === className ? t3 = $[14] : (t3 = clsx(switchRoot, className), $[13] = className, $[14] = t3);
	let t4 = !disabled && readOnly ? "" : void 0, t5 = indeterminate !== !0 && checked, t6 = disabled || readOnly, t7;
	$[15] !== restProps || $[16] !== t4 || $[17] !== t5 || $[18] !== t6 ? (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: switchInput,
		"data-read-only": t4,
		...restProps,
		checked: t5,
		disabled: t6,
		type: "checkbox",
		ref
	}), $[15] = restProps, $[16] = t4, $[17] = t5, $[18] = t6, $[19] = t7) : t7 = $[19];
	let t8;
	$[20] === Symbol.for("react.memo_cache_sentinel") ? (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Track, {}), $[20] = t8) : t8 = $[20];
	let t9;
	$[21] !== checked || $[22] !== indeterminate ? (t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Representation, {
		"aria-hidden": !0,
		"data-name": "representation",
		children: [t8, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, {
			$checked: checked,
			$indeterminate: indeterminate
		})]
	}), $[21] = checked, $[22] = indeterminate, $[23] = t9) : t9 = $[23];
	let t10;
	return $[24] !== style || $[25] !== t3 || $[26] !== t7 || $[27] !== t9 ? (t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: t3,
		"data-ui": "Switch",
		style,
		children: [t7, t9]
	}), $[24] = style, $[25] = t3, $[26] = t7, $[27] = t9, $[28] = t10) : t10 = $[28], t10;
}
var Input = /* @__PURE__ */ gt.textarea.withConfig({
	displayName: "Input",
	componentId: "sc-gtnobm-0"
})(responsiveInputPaddingStyle, textInputBaseStyle, textInputFontSizeStyle);
var Presentation = /* @__PURE__ */ gt.div.withConfig({
	displayName: "Presentation",
	componentId: "sc-gtnobm-1"
})(responsiveRadiusStyle, textInputRepresentationStyle);
/**
* A multiline text input.
*

* @public
*/
function TextArea(props) {
	let $ = (0, import_compiler_runtime.c)(36), __unstable_disableFocusRing, customValidity, forwardedRef, restProps, t0, t1, t2, t3, t4, weight;
	$[0] === props ? (__unstable_disableFocusRing = $[1], customValidity = $[2], forwardedRef = $[3], restProps = $[4], t0 = $[5], t1 = $[6], t2 = $[7], t3 = $[8], t4 = $[9], weight = $[10]) : ({border: t0, customValidity, disabled: t1, fontSize: t2, padding: t3, radius: t4, ref: forwardedRef, weight, __unstable_disableFocusRing, ...restProps} = props, $[0] = props, $[1] = __unstable_disableFocusRing, $[2] = customValidity, $[3] = forwardedRef, $[4] = restProps, $[5] = t0, $[6] = t1, $[7] = t2, $[8] = t3, $[9] = t4, $[10] = weight);
	let border = t0 === void 0 || t0, disabled = t1 !== void 0 && t1, fontSize = t2 === void 0 ? 2 : t2, padding = t3 === void 0 ? 3 : t3, radius = t4 === void 0 ? 2 : t4, ref = (0, import_react.useRef)(null), rootTheme = useRootTheme(), t5;
	$[11] === Symbol.for("react.memo_cache_sentinel") ? (t5 = () => ref.current, $[11] = t5) : t5 = $[11], (0, import_react.useImperativeHandle)(forwardedRef, t5), useCustomValidity(ref, customValidity);
	let t6 = rootTheme.scheme, t7 = rootTheme.tone, t8;
	$[12] === fontSize ? t8 = $[13] : (t8 = _getArrayProp(fontSize), $[12] = fontSize, $[13] = t8);
	let t9;
	$[14] === padding ? t9 = $[15] : (t9 = _getArrayProp(padding), $[14] = padding, $[15] = t9);
	let t10 = rootTheme.scheme, t11;
	$[16] === Symbol.for("react.memo_cache_sentinel") ? (t11 = _getArrayProp(0), $[16] = t11) : t11 = $[16];
	let t12;
	$[17] !== disabled || $[18] !== restProps || $[19] !== rootTheme.scheme || $[20] !== rootTheme.tone || $[21] !== t8 || $[22] !== t9 || $[23] !== weight ? (t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
		"data-as": "textarea",
		"data-scheme": t6,
		"data-tone": t7,
		...restProps,
		$fontSize: t8,
		$padding: t9,
		$scheme: t10,
		$space: t11,
		$tone: rootTheme.tone,
		$weight: weight,
		disabled,
		ref
	}), $[17] = disabled, $[18] = restProps, $[19] = rootTheme.scheme, $[20] = rootTheme.tone, $[21] = t8, $[22] = t9, $[23] = weight, $[24] = t12) : t12 = $[24];
	let t13;
	$[25] === radius ? t13 = $[26] : (t13 = _getArrayProp(radius), $[25] = radius, $[26] = t13);
	let t14 = border ? "" : void 0, t15;
	$[27] !== __unstable_disableFocusRing || $[28] !== rootTheme.scheme || $[29] !== rootTheme.tone || $[30] !== t13 || $[31] !== t14 ? (t15 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presentation, {
		$radius: t13,
		$unstableDisableFocusRing: __unstable_disableFocusRing,
		$scheme: rootTheme.scheme,
		$tone: rootTheme.tone,
		"data-border": t14,
		"data-scheme": rootTheme.scheme,
		"data-tone": rootTheme.tone
	}), $[27] = __unstable_disableFocusRing, $[28] = rootTheme.scheme, $[29] = rootTheme.tone, $[30] = t13, $[31] = t14, $[32] = t15) : t15 = $[32];
	let t16;
	return $[33] !== t12 || $[34] !== t15 ? (t16 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: textAreaRoot,
		"data-ui": "TextArea",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: inputRoot,
			children: [t12, t15]
		})
	}), $[33] = t12, $[34] = t15, $[35] = t16) : t16 = $[35], t16;
}
/**
* @public
*/
function BoundaryElementProvider(props) {
	let $ = (0, import_compiler_runtime.c)(5), { children, element } = props, t0;
	$[0] === element ? t0 = $[1] : (t0 = {
		version: 0,
		element
	}, $[0] = element, $[1] = t0);
	let value = t0, t1;
	return $[2] !== children || $[3] !== value ? (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoundaryElementContext.Provider, {
		value,
		children
	}), $[2] = children, $[3] = value, $[4] = t1) : t1 = $[4], t1;
}
function findMaxBreakpoints(media, width) {
	let ret = [];
	for (let i = 0; i < media.length; i += 1) media[i] > width && ret.push(i);
	return ret;
}
function findMinBreakpoints(media, width) {
	let ret = [];
	for (let i = 0; i < media.length; i += 1) media[i] <= width && ret.push(i);
	return ret;
}
/**
* DO NOT USE IN PRODUCTION.
* @beta
*/
function ElementQuery(props) {
	let $ = (0, import_compiler_runtime.c)(19), theme = useTheme_v2(), _media, children, forwardedRef, restProps;
	$[0] === props ? (_media = $[1], children = $[2], forwardedRef = $[3], restProps = $[4]) : ({children, media: _media, ref: forwardedRef, ...restProps} = props, $[0] = props, $[1] = _media, $[2] = children, $[3] = forwardedRef, $[4] = restProps);
	let media = _media ?? theme.media, [element, setElement] = (0, import_react.useState)(null), width = useElementSize(element)?.border.width ?? window.innerWidth, t0;
	if ($[5] !== media || $[6] !== width) {
		let eq = findMaxBreakpoints(media, width);
		t0 = eq.length ? eq.join(" ") : void 0, $[5] = media, $[6] = width, $[7] = t0;
	} else t0 = $[7];
	let max = t0, t1;
	if ($[8] !== media || $[9] !== width) {
		let eq_0 = findMinBreakpoints(media, width);
		t1 = eq_0.length ? eq_0.join(" ") : void 0, $[8] = media, $[9] = width, $[10] = t1;
	} else t1 = $[10];
	let min = t1, t2, t3;
	$[11] === element ? (t2 = $[12], t3 = $[13]) : (t2 = () => element, t3 = [element], $[11] = element, $[12] = t2, $[13] = t3), (0, import_react.useImperativeHandle)(forwardedRef, t2, t3);
	let t4;
	return $[14] !== children || $[15] !== max || $[16] !== min || $[17] !== restProps ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-ui": "ElementQuery",
		...restProps,
		"data-eq-max": max,
		"data-eq-min": min,
		ref: setElement,
		children
	}), $[14] = children, $[15] = max, $[16] = min, $[17] = restProps, $[18] = t4) : t4 = $[18], t4;
}
/**
* DO NOT USE IN PRODUCTION
* @beta
*/
var ErrorBoundary = class extends import_react.Component {
	state = { error: null };
	static getDerivedStateFromError(error) {
		return { error };
	}
	componentDidCatch(error, info) {
		this.props.onCatch({
			error,
			info
		});
	}
	render() {
		let { error } = this.state;
		if (error) {
			let message = typeof error?.message == "string" ? error.message : "Error";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				"data-ui": "ErrorBoundary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: message })
			});
		}
		return this.props.children;
	}
};
/**
* @public
*/
function PortalProvider(props) {
	let $ = (0, import_compiler_runtime.c)(7), { boundaryElement, children, element, __unstable_elements: elements } = props, fallbackElement = (0, import_react.useSyncExternalStore)(emptySubscribe, _temp, _temp2), t0 = boundaryElement || null, t1 = element || fallbackElement, t2;
	$[0] !== elements || $[1] !== t0 || $[2] !== t1 ? (t2 = {
		version: 0,
		boundaryElement: t0,
		element: t1,
		elements
	}, $[0] = elements, $[1] = t0, $[2] = t1, $[3] = t2) : t2 = $[3];
	let value = t2, t3;
	return $[4] !== children || $[5] !== value ? (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalContext.Provider, {
		value,
		children
	}), $[4] = children, $[5] = value, $[6] = t3) : t3 = $[6], t3;
}
function _temp2() {
	return null;
}
function _temp() {
	return document.body;
}
var emptySubscribe = () => () => {};
var virtualList = "woi5yn0";
var virtualListItem = "woi5yn1";
/**
* @beta
*/
function VirtualList(props) {
	let $ = (0, import_compiler_runtime.c)(49), className, forwardedRef, getItemKey, onChange, renderItem, restProps, t0, t1, t2;
	$[0] === props ? (className = $[1], forwardedRef = $[2], getItemKey = $[3], onChange = $[4], renderItem = $[5], restProps = $[6], t0 = $[7], t1 = $[8], t2 = $[9]) : ({as: t0, className, gap: t1, getItemKey, items: t2, onChange, ref: forwardedRef, renderItem, ...restProps} = props, $[0] = props, $[1] = className, $[2] = forwardedRef, $[3] = getItemKey, $[4] = onChange, $[5] = renderItem, $[6] = restProps, $[7] = t0, $[8] = t1, $[9] = t2);
	let as = t0 === void 0 ? "div" : t0, gap = t1 === void 0 ? 0 : t1, t3;
	$[10] === t2 ? t3 = $[11] : (t3 = t2 === void 0 ? [] : t2, $[10] = t2, $[11] = t3);
	let items = t3, { space } = useTheme_v2(), ref = (0, import_react.useRef)(null), wrapperRef = (0, import_react.useRef)(null), [scrollTop, setScrollTop] = (0, import_react.useState)(0), [scrollHeight, setScrollHeight] = (0, import_react.useState)(0), [itemHeight, setItemHeight] = (0, import_react.useState)(-1), t4;
	$[12] === Symbol.for("react.memo_cache_sentinel") ? (t4 = () => ref.current, $[12] = t4) : t4 = $[12], (0, import_react.useImperativeHandle)(forwardedRef, t4);
	let t5;
	$[13] === Symbol.for("react.memo_cache_sentinel") ? (t5 = () => {
		if (!wrapperRef.current) return;
		let firstElement = wrapperRef.current.firstChild;
		firstElement instanceof HTMLElement && setItemHeight(firstElement.offsetHeight);
	}, $[13] = t5) : t5 = $[13];
	let t6;
	$[14] === renderItem ? t6 = $[15] : (t6 = [renderItem], $[14] = renderItem, $[15] = t6), (0, import_react.useEffect)(t5, t6);
	let t7, t8;
	$[16] === Symbol.for("react.memo_cache_sentinel") ? (t7 = () => {
		if (!ref.current) return;
		let scrollEl = findScrollable(ref.current.parentNode);
		if (scrollEl) {
			if (!(scrollEl instanceof HTMLElement)) return;
			let handleScroll = () => {
				setScrollTop(scrollEl.scrollTop);
			};
			scrollEl.addEventListener("scroll", handleScroll, { passive: !0 });
			let ro = new ResizeObserver((entries) => {
				setScrollHeight(entries[0].contentRect.height);
			});
			return ro.observe(scrollEl), handleScroll(), () => {
				scrollEl.removeEventListener("scroll", handleScroll), ro.unobserve(scrollEl), ro.disconnect();
			};
		}
		let handleScroll_0 = () => {
			setScrollTop(window.scrollY);
		}, handleResize = () => {
			setScrollHeight(window.innerHeight);
		};
		return window.addEventListener("scroll", handleScroll_0, { passive: !0 }), window.addEventListener("resize", handleResize), setScrollHeight(window.innerHeight), handleScroll_0(), () => {
			window.removeEventListener("scroll", handleScroll_0), window.removeEventListener("resize", handleResize);
		};
	}, t8 = [], $[16] = t7, $[17] = t8) : (t7 = $[16], t8 = $[17]), (0, import_react.useEffect)(t7, t8);
	let len = items.length, height = itemHeight ? len * (itemHeight + space[gap]) - space[gap] : 0, fromIndex = height ? Math.max(Math.floor(scrollTop / height * len) - 2, 0) : 0, toIndex = height ? Math.ceil((scrollTop + scrollHeight) / height * len) + 1 : 0, t10, t9;
	$[18] !== fromIndex || $[19] !== gap || $[20] !== itemHeight || $[21] !== onChange || $[22] !== scrollHeight || $[23] !== scrollTop || $[24] !== space || $[25] !== toIndex ? (t9 = () => {
		onChange && onChange({
			fromIndex,
			gap: space[gap],
			itemHeight,
			scrollHeight,
			scrollTop,
			toIndex
		});
	}, t10 = [
		fromIndex,
		gap,
		itemHeight,
		onChange,
		scrollHeight,
		scrollTop,
		space,
		toIndex
	], $[18] = fromIndex, $[19] = gap, $[20] = itemHeight, $[21] = onChange, $[22] = scrollHeight, $[23] = scrollTop, $[24] = space, $[25] = toIndex, $[26] = t10, $[27] = t9) : (t10 = $[26], t9 = $[27]), (0, import_react.useEffect)(t9, t10);
	let t11;
	$[28] !== fromIndex || $[29] !== gap || $[30] !== getItemKey || $[31] !== itemHeight || $[32] !== items || $[33] !== renderItem || $[34] !== space || $[35] !== toIndex ? (t11 = {
		fromIndex,
		gap,
		itemHeight,
		space,
		toIndex,
		getItemKey,
		items,
		renderItem
	}, $[28] = fromIndex, $[29] = gap, $[30] = getItemKey, $[31] = itemHeight, $[32] = items, $[33] = renderItem, $[34] = space, $[35] = toIndex, $[36] = t11) : t11 = $[36];
	let children = useChildren(t11), Component = as, t12;
	$[37] === className ? t12 = $[38] : (t12 = clsx(virtualList, className), $[37] = className, $[38] = t12);
	let t13;
	$[39] === height ? t13 = $[40] : (t13 = { height }, $[39] = height, $[40] = t13);
	let t14;
	$[41] !== children || $[42] !== t13 ? (t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: wrapperRef,
		style: t13,
		children
	}), $[41] = children, $[42] = t13, $[43] = t14) : t14 = $[43];
	let t15;
	return $[44] !== Component || $[45] !== restProps || $[46] !== t12 || $[47] !== t14 ? (t15 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		className: t12,
		"data-ui": "VirtualList",
		ref,
		...restProps,
		children: t14
	}), $[44] = Component, $[45] = restProps, $[46] = t12, $[47] = t14, $[48] = t15) : t15 = $[48], t15;
}
function useChildren(t0) {
	let $ = (0, import_compiler_runtime.c)(21), { fromIndex, gap, getItemKey, itemHeight, items, renderItem, space, toIndex } = t0;
	if (!renderItem || items.length === 0) return null;
	if (itemHeight === -1) {
		let t1;
		$[0] !== items[0] || $[1] !== renderItem ? (t1 = renderItem(items[0]), $[0] = items[0], $[1] = renderItem, $[2] = t1) : t1 = $[2];
		let t2;
		return $[3] === t1 ? t2 = $[4] : (t2 = [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: virtualListItem,
			children: t1
		}, 0)], $[3] = t1, $[4] = t2), t2;
	}
	let t1;
	if ($[5] !== fromIndex || $[6] !== gap || $[7] !== getItemKey || $[8] !== itemHeight || $[9] !== items || $[10] !== renderItem || $[11] !== space || $[12] !== toIndex) {
		let t2;
		$[14] !== fromIndex || $[15] !== gap || $[16] !== getItemKey || $[17] !== itemHeight || $[18] !== renderItem || $[19] !== space ? (t2 = (item, _itemIndex) => {
			let itemIndex = fromIndex + _itemIndex, node = renderItem(item), key = getItemKey ? getItemKey(item, itemIndex) : itemIndex;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: virtualListItem,
				style: { top: itemIndex * (itemHeight + space[gap]) },
				children: node
			}, key);
		}, $[14] = fromIndex, $[15] = gap, $[16] = getItemKey, $[17] = itemHeight, $[18] = renderItem, $[19] = space, $[20] = t2) : t2 = $[20], t1 = items.slice(fromIndex, toIndex).map(t2), $[5] = fromIndex, $[6] = gap, $[7] = getItemKey, $[8] = itemHeight, $[9] = items, $[10] = renderItem, $[11] = space, $[12] = toIndex, $[13] = t1;
	} else t1 = $[13];
	return t1;
}
function findScrollable(parentNode) {
	let _scrollEl = parentNode;
	for (; _scrollEl && !_isScrollable(_scrollEl);) _scrollEl = _scrollEl.parentNode;
	return _scrollEl;
}
//#endregion
export { _hasFocus as $, Inline as A, require_react_is as At, purple as B, _responsive as Bt, TextSkeleton as C, responsiveRadiusStyle as Ct, usePrefersDark as D, useRootTheme as Dt, studioTheme as E, usePrefersReducedMotion as Et, black as F, st as Ft, useEffectEvent as G, white as H, getTheme_v2 as Ht, blue as I, EMPTY_ARRAY as It, useBoundaryElement as J, Arrow as K, gray as L, EMPTY_RECORD as Lt, buildTheme as M, St as Mt, rgba$1 as N, ft as Nt, Layer as O, useTheme$1 as Ot, COLOR_HUES as P, gt as Pt, TextInput as Q, green as R, POPOVER_MOTION_PROPS as Rt, TextArea as S, isRecord$1 as St, rgba as T, useMediaIndex as Tt, yellow as U, require_react_dom as Ut, red as V, rem as Vt, useClickOutsideEvent as W, assignInlineVars as X, usePortal as Y, useElementSize as Z, Skeleton as _, LayerProvider as _t, BoundaryElementProvider as a, isHTMLAnchorElement as at, TabList as b, _cardColorStyle as bt, Dialog as c, clsx as ct, ErrorBoundary as d, Stack as dt, _raf as et, Heading as f, Text as ft, Select as g, Card as gt, Radio as h, Box as ht, Badge as i, _isEnterToClickElement as it, useGlobalKeyDown as j, Et as jt, Hotkeys as k, useTheme_v2 as kt, DialogProvider as l, Button as lt, PortalProvider as m, Flex as mt, AvatarCounter as n, focusFirstDescendant as nt, Checkbox as o, isHTMLButtonElement as ot, Label as p, responsiveFont as pt, Portal as q, AvatarStack as r, focusLastDescendant as rt, Container as s, isHTMLElement as st, Avatar as t, _raf2 as tt, ElementQuery as u, Spinner as ut, Switch as v, ThemeColorProvider as vt, VirtualList as w, useLayer as wt, TabPanel as x, createGlobalScopedContext as xt, Tab as y, ThemeProvider$1 as yt, hues as z, _getArrayProp as zt };
