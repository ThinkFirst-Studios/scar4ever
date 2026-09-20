import { t as require_jsx_runtime } from "./jsx-runtime-DwkYz3jI.js";
import { t as require_compiler_runtime } from "./compiler-runtime-DyJqaEVl.js";
import { n as useScheduledPublishingEnabled, t as ScheduledPublishingEnabledProvider } from "./ScheduledPublishingEnabledProvider-cQAcS9qW-BotIhdEU.js";
import { t as SchedulePublishingUpsellProvider } from "./SchedulePublishingUpsellProvider-BziRITH3-BlZmCno3.js";
//#region node_modules/sanity/lib/SchedulePublishingStudioLayout-CPFucAgv.js
var import_compiler_runtime = require_compiler_runtime();
var import_jsx_runtime = require_jsx_runtime();
function SchedulePublishingStudioLayoutInner(props) {
	let $ = (0, import_compiler_runtime.c)(6), { enabled, mode } = useScheduledPublishingEnabled();
	if (!enabled) {
		let t0;
		return $[0] === props ? t0 = $[1] : (t0 = props.renderDefault(props), $[0] = props, $[1] = t0), t0;
	}
	let t0;
	$[2] === props ? t0 = $[3] : (t0 = props.renderDefault(props), $[2] = props, $[3] = t0);
	let children = t0;
	if (mode === "upsell") {
		let t1;
		return $[4] === children ? t1 = $[5] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchedulePublishingUpsellProvider, { children }), $[4] = children, $[5] = t1), t1;
	}
	return children;
}
function SchedulePublishingStudioLayout(props) {
	let $ = (0, import_compiler_runtime.c)(2), t0;
	return $[0] === props ? t0 = $[1] : (t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduledPublishingEnabledProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchedulePublishingStudioLayoutInner, { ...props }) }), $[0] = props, $[1] = t0), t0;
}
//#endregion
export { SchedulePublishingStudioLayout };
