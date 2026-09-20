const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/resources-Ct8OzFHR-DKfZo_3k.js","static/PerspectiveProvider-G--c064I-D35SA-7v.js","static/rolldown-runtime-DC62tzP2.js","static/_singletons-Wcl3GHa3.js","static/jsx-runtime-DwkYz3jI.js","static/compiler-runtime-DyJqaEVl.js","static/Observable-dfeu5CEH.js","static/Subject-Bs90HcI7.js","static/Tab-Dx6d0Ug4-CIXEJQPo.js","static/preload-helper-CJkh2MBB.js","static/dist-BUF2sfAx.js","static/Spinner-nstYs55P.js","static/Close-DcVQ9bsv.js","static/ChevronDown-NPV7w9Tk.js","static/Checkmark-DWv_Dk-l.js","static/Remove-CLxJ31vj.js","static/ChevronRight-QOUAT7Lu.js","static/request-CYLhJzOA-CrhuoUwD.js","static/isRecord-Kfmt-nk--QjzbOyHQ.js","static/clientStore-BI4D8HhJ-DqPdDJ7L.js","static/stegaClean-YZRATV86-Bt6b4A1r.js","static/resolveEditInfo-Cz-smq3a-1440fgSt.js","static/lib-Dl0zCjgC.js","static/draftUtils-D3HJGQaW-B76iRRQL.js","static/WarningOutline-CJ9swBlz.js","static/ToggleArrowRight-BAPPPIX3.js","static/Document-DH3djExs.js","static/Bolt-C9xb8gyZ.js","static/Clock-CiTooSm2.js","static/Dot-BPJTOuWh.js","static/Calendar-CCgzkDQJ.js","static/Search-lu_WqsQr.js","static/ChevronLeft-BdNin5zV.js","static/EarthGlobe-txGdgntl.js","static/ErrorOutline-D80hknqi.js","static/InfoOutline-CPUxz3S_.js","static/EllipsisHorizontal-C6DuVqCf.js","static/EarthAmericas--LT5E1yb.js","static/ArrowLeft-B3PZIaSm.js","static/ArrowRight-D3nSNqx1.js","static/AddCircle-kCG43211.js","static/Circle-D19t5HDS.js","static/Edit-Cjq5XCOK.js","static/Publish-D_PdF9HH.js","static/Timeline-WOeI0EyM.js","static/Trash-DE9lwjrS.js","static/Unpublish-D13AX6Fk.js","static/ArrowDown-DmjW377O.js","static/Revert-BjYp5-_7.js","static/Image-C14Dlz2K.js","static/BulbOutline-BTdCFb1y.js","static/Unknown-B4SfVv9v.js","static/EyeOpen-BwLBdD9K.js","static/Link-D9s10NIg.js","static/Add-Cn13w4-d.js","static/AccessDenied-BTIlPV57.js","static/Launch-CHzLs3nE.js","static/Sync-CzbHPjeF.js","static/HelpCircle-QZ5I46vS.js","static/Documents-DawlaI1a.js","static/Download-DGKTTQpP.js","static/ChevronUp-Dc7BVGl0.js","static/Upload-JoTSGXwA.js","static/ThLarge-PSeEz-ag.js","static/Ulist-BNXInHZj.js","static/DragHandle-DMOs14ui.js","static/AddDocument-BnxrMQux.js","static/Copy-CaLTiiGy.js","static/InsertAbove-G_H55WXj.js","static/InsertBelow-CO6d4vrt.js","static/Collapse-D1PnFk2I.js","static/Expand-jglEK8fd.js","static/BlockElement-DlAgeK86.js","static/Bold-Dwk50CvA.js","static/Code-CF9Q8kiJ.js","static/InlineElement-B4eQbYFa.js","static/Italic-CFwMWhXe.js","static/Olist-BMb1wY7I.js","static/Strikethrough-BECw1qNN.js","static/Underline-CrTDvL9s.js","static/Desktop-BPcoGwRW.js","static/Moon-DKxtMUgK.js","static/Sun-HWVrJhZ1.js","static/Reset-CTtg0fZ3.js","static/BinaryDocument-JP-68H0b.js","static/ReadOnly-CHd67Sxf.js","static/Lock-BHb9R9yA.js","static/Crop-xy_2Y23J.js","static/PerspectiveProvider-G--c064I-Di-8vf7M.css"])))=>i.map(i=>d[i]);
import { r as __toESM } from "./rolldown-runtime-DC62tzP2.js";
import { n as require_react } from "./jsx-runtime-DwkYz3jI.js";
import { t as require_compiler_runtime } from "./compiler-runtime-DyJqaEVl.js";
import { Tc as dequal, il as fromString } from "./PerspectiveProvider-G--c064I-D35SA-7v.js";
import { t as __vitePreload } from "./preload-helper-CJkh2MBB.js";
import { A as isPortableTextTextBlock, k as isPortableTextSpan } from "./lib-Dl0zCjgC.js";
//#region node_modules/sanity/lib/constants-BQ1J8P6l.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_compiler_runtime = require_compiler_runtime();
function useCommentHasChanged(message) {
	let $ = (0, import_compiler_runtime.c)(3), [prevMessage] = (0, import_react.useState)(message), t0;
	return $[0] !== message || $[1] !== prevMessage ? (t0 = dequal(prevMessage, message), $[0] = message, $[1] = prevMessage, $[2] = t0) : t0 = $[2], !t0;
}
/**
* @internal
*/
function hasCommentMessageValue(value) {
	return value ? value?.some((block) => isPortableTextTextBlock(block) && (block?.children || [])?.some((c) => isPortableTextSpan(c) ? c.text : c.userId)) : !1;
}
function commentIntentIfDiffers(parent, comment) {
	let parentIntent = parent?.context?.intent, intent = comment?.context?.intent;
	if (intent && (!parentIntent || "preview" in intent.params && "preview" in parentIntent.params && intent.params.preview !== parentIntent.params.preview)) return intent;
}
/**
* Parse a comment's persisted `fieldPath` string. Returns `undefined` for
* empty or unparseable values: `fieldPath` is stored data, and a corrupt
* comment must not crash rendering.
* @internal
*/
function parseCommentFieldPath(fieldPath) {
	if (fieldPath) try {
		return fromString(fieldPath);
	} catch {
		return;
	}
}
/**
* A function that checks whether a comment is a text selection comment
* @internal
*/
function isTextSelectionComment(comment) {
	return comment ? !!(comment?.target?.path?.selection?.type === "text" && comment?.target?.path?.selection?.value) : !1;
}
/**
* The locale namespace for the comments plugin
*
* @public
*/
var commentsLocaleNamespace = "comments";
var commentsUsEnglishLocaleBundle = {
	locale: "en-US",
	namespace: commentsLocaleNamespace,
	resources: () => __vitePreload(() => import("./resources-Ct8OzFHR-DKfZo_3k.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88]))
};
var COMMENTS_INSPECTOR_NAME = "sanity/comments";
var COMMENTS_HIGHLIGHT_HUE_KEY = "yellow";
var COMMENT_REACTION_OPTIONS = [
	{
		shortName: ":+1:",
		title: "Thumbs up"
	},
	{
		shortName: ":-1:",
		title: "Thumbs down"
	},
	{
		shortName: ":heart:",
		title: "Heart"
	},
	{
		shortName: ":rocket:",
		title: "Rocket"
	},
	{
		shortName: ":heavy_plus_sign:",
		title: "Heavy plus sign"
	},
	{
		shortName: ":eyes:",
		title: "Eyes"
	}
];
var COMMENT_REACTION_EMOJIS = {
	":-1:": "👎",
	":+1:": "👍",
	":eyes:": "👀",
	":heart:": "❤️",
	":heavy_plus_sign:": "➕",
	":rocket:": "🚀"
};
//#endregion
export { commentIntentIfDiffers as a, hasCommentMessageValue as c, useCommentHasChanged as d, COMMENT_REACTION_OPTIONS as i, isTextSelectionComment as l, COMMENTS_INSPECTOR_NAME as n, commentsLocaleNamespace as o, COMMENT_REACTION_EMOJIS as r, commentsUsEnglishLocaleBundle as s, COMMENTS_HIGHLIGHT_HUE_KEY as t, parseCommentFieldPath as u };
