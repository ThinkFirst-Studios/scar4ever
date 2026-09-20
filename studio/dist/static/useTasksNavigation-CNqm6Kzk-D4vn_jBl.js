const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/resources-ClVS90Kg-B-xyCUq9.js","static/PerspectiveProvider-G--c064I-D35SA-7v.js","static/rolldown-runtime-DC62tzP2.js","static/_singletons-Wcl3GHa3.js","static/jsx-runtime-DwkYz3jI.js","static/compiler-runtime-DyJqaEVl.js","static/Observable-dfeu5CEH.js","static/Subject-Bs90HcI7.js","static/Tab-Dx6d0Ug4-CIXEJQPo.js","static/preload-helper-CJkh2MBB.js","static/dist-BUF2sfAx.js","static/Spinner-nstYs55P.js","static/Close-DcVQ9bsv.js","static/ChevronDown-NPV7w9Tk.js","static/Checkmark-DWv_Dk-l.js","static/Remove-CLxJ31vj.js","static/ChevronRight-QOUAT7Lu.js","static/request-CYLhJzOA-CrhuoUwD.js","static/isRecord-Kfmt-nk--QjzbOyHQ.js","static/clientStore-BI4D8HhJ-DqPdDJ7L.js","static/stegaClean-YZRATV86-Bt6b4A1r.js","static/resolveEditInfo-Cz-smq3a-1440fgSt.js","static/lib-Dl0zCjgC.js","static/draftUtils-D3HJGQaW-B76iRRQL.js","static/WarningOutline-CJ9swBlz.js","static/ToggleArrowRight-BAPPPIX3.js","static/Document-DH3djExs.js","static/Bolt-C9xb8gyZ.js","static/Clock-CiTooSm2.js","static/Dot-BPJTOuWh.js","static/Calendar-CCgzkDQJ.js","static/Search-lu_WqsQr.js","static/ChevronLeft-BdNin5zV.js","static/EarthGlobe-txGdgntl.js","static/ErrorOutline-D80hknqi.js","static/InfoOutline-CPUxz3S_.js","static/EllipsisHorizontal-C6DuVqCf.js","static/EarthAmericas--LT5E1yb.js","static/ArrowLeft-B3PZIaSm.js","static/ArrowRight-D3nSNqx1.js","static/AddCircle-kCG43211.js","static/Circle-D19t5HDS.js","static/Edit-Cjq5XCOK.js","static/Publish-D_PdF9HH.js","static/Timeline-WOeI0EyM.js","static/Trash-DE9lwjrS.js","static/Unpublish-D13AX6Fk.js","static/ArrowDown-DmjW377O.js","static/Revert-BjYp5-_7.js","static/Image-C14Dlz2K.js","static/BulbOutline-BTdCFb1y.js","static/Unknown-B4SfVv9v.js","static/EyeOpen-BwLBdD9K.js","static/Link-D9s10NIg.js","static/Add-Cn13w4-d.js","static/AccessDenied-BTIlPV57.js","static/Launch-CHzLs3nE.js","static/Sync-CzbHPjeF.js","static/HelpCircle-QZ5I46vS.js","static/Documents-DawlaI1a.js","static/Download-DGKTTQpP.js","static/ChevronUp-Dc7BVGl0.js","static/Upload-JoTSGXwA.js","static/ThLarge-PSeEz-ag.js","static/Ulist-BNXInHZj.js","static/DragHandle-DMOs14ui.js","static/AddDocument-BnxrMQux.js","static/Copy-CaLTiiGy.js","static/InsertAbove-G_H55WXj.js","static/InsertBelow-CO6d4vrt.js","static/Collapse-D1PnFk2I.js","static/Expand-jglEK8fd.js","static/BlockElement-DlAgeK86.js","static/Bold-Dwk50CvA.js","static/Code-CF9Q8kiJ.js","static/InlineElement-B4eQbYFa.js","static/Italic-CFwMWhXe.js","static/Olist-BMb1wY7I.js","static/Strikethrough-BECw1qNN.js","static/Underline-CrTDvL9s.js","static/Desktop-BPcoGwRW.js","static/Moon-DKxtMUgK.js","static/Sun-HWVrJhZ1.js","static/Reset-CTtg0fZ3.js","static/BinaryDocument-JP-68H0b.js","static/ReadOnly-CHd67Sxf.js","static/Lock-BHb9R9yA.js","static/Crop-xy_2Y23J.js","static/PerspectiveProvider-G--c064I-Di-8vf7M.css"])))=>i.map(i=>d[i]);
import { r as __toESM } from "./rolldown-runtime-DC62tzP2.js";
import { qt as TasksNavigationContext } from "./_singletons-Wcl3GHa3.js";
import { n as require_react } from "./jsx-runtime-DwkYz3jI.js";
import { t as __vitePreload } from "./preload-helper-CJkh2MBB.js";
//#region node_modules/sanity/lib/useTasksNavigation-CNqm6Kzk.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* The locale namespace for the task tool
*
* @public
*/
var tasksLocaleNamespace = "tasks";
var tasksUsEnglishLocaleBundle = {
	locale: "en-US",
	namespace: tasksLocaleNamespace,
	resources: () => __vitePreload(() => import("./resources-ClVS90Kg-B-xyCUq9.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88]))
};
function useTasksNavigation() {
	return (0, import_react.useContext)(TasksNavigationContext) || FALLBACK_CONTEXT_VALUE;
}
var FALLBACK_CONTEXT_VALUE = {
	state: {
		activeTabId: "assigned",
		viewMode: "list",
		selectedTask: null,
		isOpen: !1,
		duplicateTaskValues: null
	},
	setActiveTab: () => null,
	setViewMode: () => null,
	handleCloseTasks: () => null,
	handleCopyLinkToTask: () => null,
	handleOpenTasks: () => null
};
//#endregion
export { tasksUsEnglishLocaleBundle as n, useTasksNavigation as r, tasksLocaleNamespace as t };
