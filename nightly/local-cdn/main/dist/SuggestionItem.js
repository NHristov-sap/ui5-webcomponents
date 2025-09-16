var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import SuggestionListItem from "./SuggestionListItem.js";
/**
 * @class
 * The `ui5-suggestion-item` represents the suggestion item of the `ui5-input`.
 * @constructor
 * @extends UI5Element
 * @abstract
 * @implements { IInputSuggestionItem }
 * @public
 */
let SuggestionItem = class SuggestionItem extends UI5Element {
    constructor() {
        super(...arguments);
        /**
         * Defines the text of the component.
         * @default ""
         * @public
         */
        this.text = "";
        /**
         * Defines the visual indication and behavior of the item.
         * Available options are `Active` (by default), `Inactive` and `Detail`.
         *
         * **Note:** When set to `Active`, the item will provide visual response upon press and hover,
         * while when `Inactive` or `Detail` - will not.
         * @default "Active"
         * @public
         * @since 1.0.0-rc.8
        */
        this.type = "Active";
        /**
         * Defines the description displayed right under the item text, if such is present.
         * @default ""
         * @public
         */
        this.description = "";
        /**
         * Defines whether the `icon` should be displayed in the beginning of the item or in the end.
         *
         * **Note:** If `image` is set, the `icon` would be displayed after the `image`.
         * @default false
         * @public
         */
        this.iconEnd = false;
        /**
         * Defines the `additionalText`, displayed in the end of the item.
         * @default ""
         * @since 1.0.0-rc.15
         * @public
         */
        this.additionalText = "";
        /**
         * Defines the state of the `additionalText`.
         * @default "None"
         * @since 1.0.0-rc.15
         * @public
         */
        this.additionalTextState = "None";
    }
    get groupItem() {
        return false;
    }
};
__decorate([
    property()
], SuggestionItem.prototype, "text", void 0);
__decorate([
    property()
], SuggestionItem.prototype, "type", void 0);
__decorate([
    property()
], SuggestionItem.prototype, "description", void 0);
__decorate([
    property()
], SuggestionItem.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean })
], SuggestionItem.prototype, "iconEnd", void 0);
__decorate([
    property()
], SuggestionItem.prototype, "image", void 0);
__decorate([
    property()
], SuggestionItem.prototype, "additionalText", void 0);
__decorate([
    property()
], SuggestionItem.prototype, "additionalTextState", void 0);
SuggestionItem = __decorate([
    customElement({
        tag: "ui5-suggestion-item",
        dependencies: [SuggestionListItem],
    })
], SuggestionItem);
SuggestionItem.define();
export default SuggestionItem;
//# sourceMappingURL=SuggestionItem.js.map