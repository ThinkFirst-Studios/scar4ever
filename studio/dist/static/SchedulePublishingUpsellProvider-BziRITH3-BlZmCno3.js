import { r as __toESM } from "./rolldown-runtime-DC62tzP2.js";
import { At as SchedulePublishUpsellContext } from "./_singletons-Wcl3GHa3.js";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-DwkYz3jI.js";
import { t as require_compiler_runtime } from "./compiler-runtime-DyJqaEVl.js";
import { Mt as getDialogPropsFromContext, Qn as useUpsellContext, it as UpsellDialog } from "./PerspectiveProvider-G--c064I-D35SA-7v.js";
//#region node_modules/sanity/lib/SchedulePublishingUpsellProvider-BziRITH3.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_compiler_runtime = require_compiler_runtime();
var import_jsx_runtime = require_jsx_runtime();
/**
* @beta
*/
function SchedulePublishingUpsellProvider(props) {
	let $ = (0, import_compiler_runtime.c)(9), t0;
	$[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = {
		dataUri: "/journey/scheduled-publishing",
		feature: "scheduled_publishing"
	}, $[0] = t0) : t0 = $[0];
	let contextValue = useUpsellContext(t0), t1 = props.children, t2;
	$[1] === contextValue ? t2 = $[2] : (t2 = getDialogPropsFromContext(contextValue), $[1] = contextValue, $[2] = t2);
	let t3;
	$[3] === t2 ? t3 = $[4] : (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpsellDialog, { ...t2 }), $[3] = t2, $[4] = t3);
	let t4;
	return $[5] !== contextValue || $[6] !== props.children || $[7] !== t3 ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SchedulePublishUpsellContext.Provider, {
		value: contextValue,
		children: [t1, t3]
	}), $[5] = contextValue, $[6] = props.children, $[7] = t3, $[8] = t4) : t4 = $[8], t4;
}
function useSchedulePublishingUpsell() {
	return (0, import_react.useContext)(SchedulePublishUpsellContext);
}
//#endregion
export { useSchedulePublishingUpsell as n, SchedulePublishingUpsellProvider as t };
