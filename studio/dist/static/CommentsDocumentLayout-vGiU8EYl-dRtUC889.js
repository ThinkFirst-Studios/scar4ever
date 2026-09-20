import { t as require_jsx_runtime } from "./jsx-runtime-DwkYz3jI.js";
import { t as require_compiler_runtime } from "./compiler-runtime-DyJqaEVl.js";
import { t as useCommentsEnabled } from "./useCommentsEnabled-BPc3788v-qo3_KJ0a.js";
import { n as CommentsEnabledProvider, r as CommentsSelectedPathProvider, t as CommentsAuthoringPathProvider } from "./CommentsSelectedPathProvider-DCNTVr2d-B5vel0bw.js";
//#region node_modules/sanity/lib/CommentsDocumentLayout-vGiU8EYl.js
var import_compiler_runtime = require_compiler_runtime();
var import_jsx_runtime = require_jsx_runtime();
function CommentsDocumentLayout(props) {
	let $ = (0, import_compiler_runtime.c)(8), { documentId, documentType } = props;
	if (useCommentsEnabled().mode !== null) {
		let t0;
		return $[0] === props ? t0 = $[1] : (t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommentsDocumentLayoutInner, { ...props }), $[0] = props, $[1] = t0), t0;
	}
	let t0;
	$[2] === props ? t0 = $[3] : (t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommentsDocumentLayoutInner, { ...props }), $[2] = props, $[3] = t0);
	let t1;
	return $[4] !== documentId || $[5] !== documentType || $[6] !== t0 ? (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommentsEnabledProvider, {
		documentId,
		documentType,
		children: t0
	}), $[4] = documentId, $[5] = documentType, $[6] = t0, $[7] = t1) : t1 = $[7], t1;
}
function CommentsDocumentLayoutInner(props) {
	let $ = (0, import_compiler_runtime.c)(6);
	if (!useCommentsEnabled().enabled) {
		let t0;
		return $[0] === props ? t0 = $[1] : (t0 = props.renderDefault(props), $[0] = props, $[1] = t0), t0;
	}
	let t0;
	$[2] === props ? t0 = $[3] : (t0 = props.renderDefault(props), $[2] = props, $[3] = t0);
	let t1;
	return $[4] === t0 ? t1 = $[5] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommentsSelectedPathProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommentsAuthoringPathProvider, { children: t0 }) }), $[4] = t0, $[5] = t1), t1;
}
//#endregion
export { CommentsDocumentLayout };
