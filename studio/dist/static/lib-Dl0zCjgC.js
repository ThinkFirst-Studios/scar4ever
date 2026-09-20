//#region node_modules/@sanity/types/lib/index.js
function isObject(obj) {
	return typeof obj == "object" && !!obj && !Array.isArray(obj);
}
/** @internal */
function isReference(reference) {
	return isObject(reference) && typeof reference._ref == "string";
}
/** @public */
function isImage(value) {
	return isObject(value) && isReference(value.asset) && value.asset._ref.startsWith("image-");
}
/** @beta */
function isCrossDatasetReference(reference) {
	return isObject(reference) && typeof reference._ref == "string" && typeof reference._dataset == "string" && typeof reference._projectId == "string";
}
/** @public */
function isSanityDocument(document) {
	return isObject(document) && typeof document._id == "string" && typeof document._type == "string";
}
/** @public */
function isTypedObject(obj) {
	return isObject(obj) && typeof obj._type == "string";
}
/** @public */
function isKeyedObject(obj) {
	return isObject(obj) && typeof obj._key == "string";
}
/** @beta */
function isGlobalDocumentReference(reference) {
	return !isObject(reference) || typeof reference._ref != "string" ? !1 : reference._ref.split(":").length === 3;
}
/** @internal */
function isValidationErrorMarker(marker) {
	return marker.level === "error";
}
/** @internal */
function isValidationWarningMarker(marker) {
	return marker.level === "warning";
}
/** @internal */
function isValidationInfoMarker(marker) {
	return marker.level === "info";
}
/** @internal */
function isCreateMutation(mutation) {
	return "create" in mutation;
}
/** @internal */
function isCreateIfNotExistsMutation(mutation) {
	return "createIfNotExists" in mutation;
}
/** @internal */
function isCreateOrReplaceMutation(mutation) {
	return "createOrReplace" in mutation;
}
var reKeySegment = /_key\s*==\s*['"](.*)['"]/;
var reIndexTuple = /^\d*:\d*$/;
/** @internal */
function isIndexSegment(segment) {
	return typeof segment == "number" || typeof segment == "string" && /^\[\d+\]$/.test(segment);
}
/** @internal */
function isKeySegment(segment) {
	return typeof segment == "string" ? reKeySegment.test(segment.trim()) : typeof segment == "object" && "_key" in segment;
}
/** @internal */
function isIndexTuple(segment) {
	if (typeof segment == "string" && reIndexTuple.test(segment)) return !0;
	if (!Array.isArray(segment) || segment.length !== 2) return !1;
	let [from, to] = segment;
	return (typeof from == "number" || from === "") && (typeof to == "number" || to === "");
}
function isRecord$1(value) {
	return !!value && (typeof value == "object" || typeof value == "function");
}
/**
* Assert that a given object is a portable-text text-block type object
*
* @remarks
* * The `markDefs` and `style` property of a block is optional.
* * Block types can be named, so expect anything of the _type property.
*
* @alpha
*/
function isPortableTextTextBlock(value) {
	return isRecord$1(value) && typeof value._type == "string" && Array.isArray(value.children) && value.children.every((child) => isRecord$1(child)) && ("markDefs" in value ? Array.isArray(value.markDefs) && value.markDefs.every((def) => isRecord$1(def)) : !0) && ("style" in value ? typeof value.style == "string" : !0);
}
/**
* Assert that a given object is a portable-text span-type object
*
* @remarks
* The `marks` property of a block is optional.
*
* @alpha
*/
function isPortableTextSpan(value) {
	return isRecord$1(value) && value._type === "span" && typeof value.text == "string" && ("marks" in value ? Array.isArray(value.marks) && value.marks.every((mark) => typeof mark == "string") : !0);
}
function isRecord(value) {
	return !!value && (typeof value == "object" || typeof value == "function");
}
/**
* Returns wether or not the given type is a document type
* (eg that it was defined as `type: 'document'`)
*
* @param type - Schema type to test
* @returns True if type is a document type, false otherwise
*
* @public
*/
function isDocumentSchemaType(type) {
	if (!isObjectSchemaType(type)) return !1;
	let current = type;
	for (; current;) {
		if (current.name === "document") return !0;
		current = current.type;
	}
	return !1;
}
/** @internal */
function isObjectSchemaType(type) {
	return isRecord(type) ? type.jsonType === "object" : !1;
}
/** @internal */
function isArraySchemaType(type) {
	return isRecord(type) ? type.jsonType === "array" : !1;
}
/** @internal */
function isArrayOfBlocksSchemaType(type) {
	return isArraySchemaType(type) && type.of.some((memberType) => isBlockSchemaType(memberType));
}
/** @internal */
function isArrayOfObjectsSchemaType(type) {
	return isArraySchemaType(type) && type.of.every((memberType) => isObjectSchemaType(memberType));
}
/** @internal */
function isArrayOfPrimitivesSchemaType(type) {
	return isArraySchemaType(type) && type.of.every((memberType) => isPrimitiveSchemaType(memberType));
}
/** @internal */
function isArrayOfStringsSchemaType(type) {
	return isArraySchemaType(type) && type.of.every((memberType) => isStringSchemaType(memberType));
}
/** @internal */
function isBooleanSchemaType(type) {
	return isRecord(type) ? type.jsonType === "boolean" : !1;
}
/** @internal */
function isStringSchemaType(type) {
	return isRecord(type) ? type.jsonType === "string" : !1;
}
/** @internal */
function isDateTimeSchemaType(type) {
	return isStringSchemaType(type) ? type.name === "datetime" : !1;
}
/** @internal */
function isNumberSchemaType(type) {
	return isRecord(type) ? type.jsonType === "number" : !1;
}
/** @internal */
function isPrimitiveSchemaType(type) {
	return isBooleanSchemaType(type) || isStringSchemaType(type) || isNumberSchemaType(type);
}
/** @internal */
function isReferenceSchemaType(type) {
	return isRecord(type) && (type.name === "reference" || isReferenceSchemaType(type.type));
}
/** @internal */
function isImageSchemaType(type) {
	return isRecord(type) && (type.name === "image" || isImageSchemaType(type.type));
}
/** @internal */
function isFileSchemaType(type) {
	return isRecord(type) && (type.name === "file" || isFileSchemaType(type.type));
}
/** @internal */
function isDeprecatedSchemaType(type) {
	return isRecord(type) ? type.deprecated !== void 0 : !1;
}
/** @internal */
function isCrossDatasetReferenceSchemaType(type) {
	return isRecord(type) && (type.name === "crossDatasetReference" || isCrossDatasetReferenceSchemaType(type.type));
}
/** @internal */
function isTitledListValue(item) {
	return typeof item == "object" && !!item && "title" in item && "value" in item;
}
/** @internal */
function isSpanSchemaType(type) {
	return isRecord(type) ? Array.isArray(type.annotations) && Array.isArray(type.decorators) : !1;
}
/** @internal */
function isBlockSchemaType(type) {
	if (!isRecord(type) || !Array.isArray(type.fields)) return !1;
	let maybeSpanChildren = type.fields.find(isBlockChildrenObjectField), maybeStyle = type.fields.find(isBlockStyleObjectField), maybeList = type.fields.find(isBlockListObjectField);
	return isBlockChildrenObjectField(maybeSpanChildren) && isBlockStyleObjectField(maybeStyle) && isBlockListObjectField(maybeList);
}
/** @internal */
function isBlockStyleObjectField(field) {
	return !isRecord(field) || field.name !== "style" ? !1 : isRecord(field.type) && field.type.jsonType === "string";
}
/** @internal */
function isBlockListObjectField(field) {
	return !isRecord(field) || field.name !== "listItem" ? !1 : isRecord(field.type) && field.type.jsonType === "string";
}
/** @internal */
function isBlockChildrenObjectField(field) {
	return !isRecord(field) || field.name !== "children" || !isArraySchemaType(field.type) ? !1 : field.type.of.some(isSpanSchemaType);
}
/**
* Helper function for defining a Sanity type definition. This function does not do anything on its own;
* it exists to check that your schema definition is correct, and help autocompletion in your IDE.
*
* This function will narrow the schema type down to fields and options based on the provided type-string.
*
* Schema types defined using `defineType` should typically be added to the Studio config under `schema.types`.
* Defined types can be referenced by their `name`. This is referred to as a type-alias.
*
* When using type-aliases as `type`, `defineType` cannot know the base-type, so type-safety will be reduced.
* If you know the base type of the type-alias, provide `defineOptions.aliasFor: <base type name>`.
* This will enforce that the schema definition conforms with the provided type.
*
* By default, `defineType` only allows known properties and options.
* Use `defineOptions.strict: false` to allow unknown properties and options.
*
* ### Basic usage
*
* ```ts
* defineType({
*   type: 'object',
*   name: 'custom-object',
*   fields: [ {type: 'string', name: 'title', title: 'Title'}],
* })
* ```
*
* ### Usage with aliasFor narrowing
*
* ```ts
* defineType({
*   type: 'custom-object',
*   name: 'redefined-custom-object',
*   options: {
*     columns: 2
*   }
* }, {aliasFor: 'object' })
* ```
*
* ### Allow unknown properties
*
* ```ts
* defineType({
*   type: 'custom-object',
*   name: 'redefined-custom-object',
*   allowsUnknownProperties: true
*   options: {
*     columns: 2,
*     allowsUnknownOptions: true
*   }
* }, {strict: false})
* ```
* ### Maximum safety and best autocompletion
*
* Use {@link defineType}, {@link defineField} and {@link defineArrayMember}:
*
* ```ts
*  defineType({
*    type: 'object',
*    name: 'custom-object',
*    fields: [
*      defineField({
*        type: 'array',
*        name: 'arrayField',
*        title: 'Things',
*        of: [
*          defineArrayMember({
*            type: 'object',
*            name: 'type-name-in-array',
*            fields: [defineField({type: 'string', name: 'title', title: 'Title'})],
*          }),
*        ],
*      }),
*    ],
*  })
* ```
*
* ## Note on type-safety in the current implementation
*
* Type-safety inside array-like properties (schema properties like `fields` and `of`) can only be guaranteed when
* {@link defineField} and {@link defineArrayMember} are used to wrap each value in the array.
*
* For array-values without a function-wrapper, TypeScript will resolve to a union type of all possible properties across
* all schema types. This result in less precise typing.
*
* ### Extending the Sanity Schema types
*
* If you want to extend the Sanity Schema types with your own properties or options to make them typesafe,
* you can use [TypeScript declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html).
*
* With declaration merging, properties and options will be available in a type-safe manner, and
* `strict: false` will not be necessary.
*
* #### Example: Add option to StringOptions
*
* ```ts
* // string.ts
*
* //redeclare the sanity module
* declare module 'sanity' {
*  // redeclare StringOptions; it will be merged with StringOptions in the sanity module
*  export interface StringOptions {
*    myCustomOption?: boolean
*  }
* }
*
* // the option is now part of the StringOptions type, just as if it was declared in the sanity codebase:
* defineType({
*   type: 'string',
*   name: 'my-string',
*   options: {
*     myCustomOption: true // this does not give an error anymore
*   }
* })
*
* ```
*
* #### Example: Add a schema definition to "intrinsic-types"
*
* ```ts
* //my-custom-type-definition.ts
*
* // create a new schema definition based on object (we remove the ability to assign field, change the type add some options)
*  export type MagicallyAddedDefinition = Omit<Schema.ObjectDefinition, 'type' | 'fields'> & {
*    type: 'magically-added-type'
*    options?: {
*      sparkles?: boolean
*    }
*  }
*
*  // redeclares sanity module so we can add interfaces props to it
* declare module 'sanity' {
*     // redeclares IntrinsicDefinitions and adds a named definition to it
*     // it is important that the key is the same as the type in the definition ('magically-added-type')
*     export interface IntrinsicDefinitions {
*       'magically-added-type': MagicallyAddedDefinition
*     }
* }
*
* // defineType will now narrow `type: 'magically-added-type'` to `MagicallyAddedDefinition`
* defineType({
*   type: 'magically-added-type'
*   name: 'magic',
*   options: {
*     sparkles: true // this is allowed,
*     //@ts-expect-error this is not allowed in MagicallyAddedDefinition.options
*     sparks: true
*   }
* })
* ```
*
* @param schemaDefinition - should be a valid schema type definition.
* @param defineOptions - optional param to provide type hints for `schemaDefinition`.
*
* @see defineField
* @see defineArrayMember
* @see typed
*
* @beta
*/
function defineType(schemaDefinition, defineOptions) {
	return schemaDefinition;
}
/**
* Define a field within a document, object, image or file definition `fields` array.
*
* This function will narrow the schema type down to fields and options based on the provided
* type-string.
*
* Using `defineField` is optional, but should provide improved autocompletion in your IDE, when building your schema.
* Field-properties like `validation` and `initialValue`will also be more specific.
*
* See {@link defineType} for more examples.
*
* @param schemaField - should be a valid field type definition.
* @param defineOptions - optional param to provide type hints for `schemaField`.
*
* @see defineField
* @see defineArrayMember
* @see typed
*
* @beta
*/
function defineField(schemaField, defineOptions) {
	return schemaField;
}
/**
* Define an array item member type within an array definition `of`-array.
*
* This function will narrow the schema type down to fields and options based on the provided
* `type` string.
*
* Using `defineArrayMember` is optional, but should provide improved autocompletion in your IDE, when building your schema.
* Field properties like `validation` and `initialValue` will also be more specific.
*
* See {@link defineType} for example usage.
*
* @param arrayOfSchema - should be a valid `array.of` member definition.
* @param defineOptions - optional param to provide type hints for `arrayOfSchema`.
*
* @see defineType
* @see defineField
* @see typed
*
* @beta
*/
function defineArrayMember(arrayOfSchema, defineOptions) {
	return arrayOfSchema;
}
/**
* @public
*/
var searchStrategies = ["groq2024", "groqLegacy"];
/**
* @internal
*/
function isSearchStrategy(maybeSearchStrategy) {
	return searchStrategies.includes(maybeSearchStrategy);
}
/**
* Checks whether the given `thing` is a slug, eg an object with a `current` string property.
*
* @param thing - The thing to check
* @returns True if slug, false otherwise
* @public
*/
function isSlug(thing) {
	return isObject(thing) && typeof thing.current == "string";
}
/** @internal */
function isValidationError(node) {
	return node.level === "error";
}
/** @internal */
function isValidationWarning(node) {
	return node.level === "warning";
}
//#endregion
export { isPortableTextTextBlock as A, isTypedObject as B, isIndexSegment as C, isNumberSchemaType as D, isKeyedObject as E, isSearchStrategy as F, isValidationWarningMarker as G, isValidationErrorMarker as H, isSlug as I, searchStrategies as K, isSpanSchemaType as L, isReference as M, isReferenceSchemaType as N, isObjectSchemaType as O, isSanityDocument as P, isStringSchemaType as R, isImageSchemaType as S, isKeySegment as T, isValidationInfoMarker as U, isValidationError as V, isValidationWarning as W, isDeprecatedSchemaType as _, isArrayOfObjectsSchemaType as a, isGlobalDocumentReference as b, isArraySchemaType as c, isCreateIfNotExistsMutation as d, isCreateMutation as f, isDateTimeSchemaType as g, isCrossDatasetReferenceSchemaType as h, isArrayOfBlocksSchemaType as i, isPrimitiveSchemaType as j, isPortableTextSpan as k, isBlockSchemaType as l, isCrossDatasetReference as m, defineField as n, isArrayOfPrimitivesSchemaType as o, isCreateOrReplaceMutation as p, defineType as r, isArrayOfStringsSchemaType as s, defineArrayMember as t, isBooleanSchemaType as u, isDocumentSchemaType as v, isIndexTuple as w, isImage as x, isFileSchemaType as y, isTitledListValue as z };
