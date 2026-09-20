import { a as getVersionFromId, c as isPublishedId, i as getPublishedId, l as isVersionId, o as getVersionId, r as getDraftId, s as isDraftId, t as DRAFTS_FOLDER } from "./resolveEditInfo-Cz-smq3a-1440fgSt.js";
//#region node_modules/sanity/lib/draftUtils-D3HJGQaW.js
/**
* @internal
*/
function isNonNullable(value) {
	return value != null;
}
`${DRAFTS_FOLDER}`;
/**
*
* Checks if the document ID `documentId` has the same ID as `equalsDocumentId`,
* ignoring the draft prefix.
*
* @public
*
* @param documentId - The document ID to check
* @param equalsDocumentId - The document ID to check against
*
* @example
* Draft vs published document ID, but representing the same document:
* ```
* // Prints "true":
* console.log(documentIdEquals('drafts.agot', 'agot'));
* ```
* @example
* Different documents:
* ```
* // Prints "false":
* console.log(documentIdEquals('hp-tcos', 'hp-hbp'));
* ```
*
* @returns `true` if the document IDs are equal, `false` otherwise
*/
function documentIdEquals(documentId, equalsDocumentId) {
	return getPublishedId(documentId) === getPublishedId(equalsDocumentId);
}
/**
* TODO: Improve return type based on presence of `version` option.
*
* @internal
*/
function getIdPair(id, { version } = {}) {
	if (version === "drafts" || version === "published") throw Error("Version can not be \"published\" or \"drafts\"");
	return {
		publishedId: getPublishedId(id),
		draftId: getDraftId(id),
		...version ? { versionId: getVersionId(id, version) } : {}
	};
}
/**
* System bundles are sets of documents owned by the system.
*
* - Draft documents contain data that has not yet been published. These documents all exist in the "drafts" path.
* - Published documents contain data that has been published. These documents all exist in the root path.
*
* These differ to user bundles, which are created when a user establishes a custom set of documents
* (e.g. by creating a release).
*
* @public
*/
var systemBundles = ["drafts", "published"];
/** @internal */
function isSystemBundle(maybeSystemBundle) {
	return systemBundles.includes(maybeSystemBundle);
}
/** @internal */
var systemBundleNames = ["draft", "published"];
/**
* `isSystemBundle` should be preferred, but some parts of the codebase currently use the singular
* "draft" name instead of the plural "drafts".
*
* @internal
*/
function isSystemBundleName(maybeSystemBundleName) {
	return systemBundleNames.includes(maybeSystemBundleName);
}
/**
*  @internal
*  Given a perspective stack and a document id, returns true if the document id matches any of the provided perspectives
*  e.g. `idMatchesPerspective('['summer'], 'versions.summer.foo') === true`
*  e.g. `idMatchesPerspective('['drafts', 'summer'], 'versions.summer.foo') === true`
*  e.g. `idMatchesPerspective('['drafts'], 'versions.summer.foo') === false`
*  e.g. `idMatchesPerspective('['drafts', 'summer'], 'versions.winter.foo') === false`
*
* Note: a published id will match any perspective
*   e.g. `idMatchesPerspective('['drafts', 'summer'], 'foo') === true`
*/
function idMatchesPerspective(perspectiveStack, documentId) {
	return isPublishedId(documentId) ? !0 : perspectiveStack.some((perspective) => perspective === "drafts" ? isDraftId(documentId) : getVersionFromId(documentId) === perspective);
}
/** @internal */
function collate(documents) {
	let byId = documents.reduce((res, doc) => {
		let publishedId = getPublishedId(doc._id), entry = res.get(publishedId);
		return entry || (entry = {
			id: publishedId,
			type: doc._type,
			published: void 0,
			draft: void 0,
			versions: []
		}, res.set(publishedId, entry)), isPublishedId(doc._id) && (entry.published = doc), isDraftId(doc._id) && (entry.draft = doc), isVersionId(doc._id) && entry.versions.push(doc), res;
	}, /* @__PURE__ */ new Map());
	return Array.from(byId.values());
}
/** @internal */
function removeDupes(documents) {
	return collate(documents).map((entry) => entry.draft || entry.published || entry.versions[0]).filter(isNonNullable);
}
//#endregion
export { isNonNullable as a, removeDupes as c, idMatchesPerspective as i, documentIdEquals as n, isSystemBundle as o, getIdPair as r, isSystemBundleName as s, collate as t };
