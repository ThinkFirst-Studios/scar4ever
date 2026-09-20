import { r as __toESM } from "./rolldown-runtime-DC62tzP2.js";
import { n as AddonDatasetContext } from "./_singletons-Wcl3GHa3.js";
import { n as require_react } from "./jsx-runtime-DwkYz3jI.js";
//#region node_modules/sanity/lib/useAddonDataset-BvCgByG6.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* @beta
* @hidden
*/
function useAddonDataset() {
	let ctx = (0, import_react.useContext)(AddonDatasetContext);
	if (!ctx) throw Error("useAddonDataset: missing context value");
	return ctx;
}
//#endregion
export { useAddonDataset as t };
