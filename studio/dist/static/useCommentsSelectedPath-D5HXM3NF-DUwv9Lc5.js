import { r as __toESM } from "./rolldown-runtime-DC62tzP2.js";
import { C as CommentsSelectedPathContext } from "./_singletons-Wcl3GHa3.js";
import { n as require_react } from "./jsx-runtime-DwkYz3jI.js";
//#region node_modules/sanity/lib/useCommentsSelectedPath-D5HXM3NF.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* @internal
*/
function useCommentsSelectedPath() {
	let ctx = (0, import_react.useContext)(CommentsSelectedPathContext);
	if (!ctx) throw Error("useCommentsSelectedPath: missing context value");
	return ctx;
}
//#endregion
export { useCommentsSelectedPath as t };
