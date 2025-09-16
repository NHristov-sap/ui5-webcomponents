import type UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type ValueState from "@ui5/webcomponents-base/dist/types/ValueState.js";
import List from "../List.js";
import type { ListItemClickEventDetail, ListSelectionChangeEventDetail } from "../List.js";
import type ResponsivePopover from "../ResponsivePopover.js";
import SuggestionItem from "../SuggestionItem.js";
import SuggestionGroupItem from "../SuggestionGroupItem.js";
import Button from "../Button.js";
import Icon from "../Icon.js";
import ListItemGroupHeader from "../ListItemGroupHeader.js";
import SuggestionListItem from "../SuggestionListItem.js";
import type ListItemType from "../types/ListItemType.js";
import type { IInputSuggestionItem } from "../Input.js";
interface SuggestionComponent extends UI5Element {
    _isValueStateFocused: boolean;
    focused: boolean;
    hasSuggestionItemSelected: boolean;
    value: string;
    typedInValue: string;
    hasValueStateMessage: boolean;
    suggestionItems: Array<IInputSuggestionItem>;
    open: boolean;
    onItemMouseOver: (e: MouseEvent) => void;
    onItemMouseOut: (e: MouseEvent) => void;
    onItemSelected: (pressedItem: SuggestionItem, listItem: SuggestionListItem | null, keyboardUsed: boolean) => void;
    onItemSelect: (item: SuggestionListItem) => void;
}
type InputSuggestion = {
    text: string;
    description?: string;
    image?: string;
    icon?: string;
    type?: `${ListItemType}`;
    additionalText?: string;
    additionalTextState?: `${ValueState}`;
    groupItem: boolean;
    key: number;
};
type SuggestionsAccInfo = {
    isGroup: boolean;
    currentPos: number;
    listSize: number;
    itemText: string;
    description: string;
    additionalText: string;
};
/**
 * A class to manage the `Input` suggestion items.
 * @class
 * @private
 */
declare class Suggestions {
    component: SuggestionComponent;
    slotName: string;
    handleFocus: boolean;
    highlight: boolean;
    selectedItemIndex: number;
    accInfo?: SuggestionsAccInfo;
    _scrollContainer?: HTMLElement;
    _handledPress?: boolean;
    attachedAfterOpened?: boolean;
    attachedAfterClose?: boolean;
    fnOnSuggestionItemPress: (e: CustomEvent<ListItemClickEventDetail | ListSelectionChangeEventDetail>) => void;
    fnOnSuggestionItemMouseOver: (e: MouseEvent) => void;
    fnOnSuggestionItemMouseOut: (e: MouseEvent) => void;
    static i18nBundle: I18nBundle;
    static SCROLL_STEP: number;
    constructor(component: SuggestionComponent, slotName: string, highlight: boolean, handleFocus: boolean);
    defaultSlotProperties(hightlightValue: string): InputSuggestion[];
    onUp(e: KeyboardEvent): boolean;
    onDown(e: KeyboardEvent): boolean;
    onSpace(e: KeyboardEvent): boolean;
    onEnter(e: KeyboardEvent): boolean;
    onPageUp(e: KeyboardEvent): boolean;
    onPageDown(e: KeyboardEvent): boolean;
    onHome(e: KeyboardEvent): boolean;
    onEnd(e: KeyboardEvent): boolean;
    onTab(): boolean;
    toggle(bToggle: boolean, options: {
        preventFocusRestore: boolean;
    }): void;
    _isScrollable(): boolean;
    open(): void;
    close(preventFocusRestore?: boolean): void;
    updateSelectedItemPosition(pos: number): void;
    onItemMouseOver(e: MouseEvent): void;
    onItemMouseOut(e: MouseEvent): void;
    onItemSelected(selectedItem: SuggestionListItem | null, keyboardUsed: boolean): void;
    onItemSelect(item: SuggestionListItem): void;
    onItemPress(e: CustomEvent<ListItemClickEventDetail | ListSelectionChangeEventDetail>): void;
    _onOpen(): void;
    _onClose(): void;
    _applyFocus(): void;
    _isItemOnTarget(): boolean;
    get _isGroupOrInactiveItem(): boolean;
    isOpened(): boolean;
    _handleItemNavigation(forward: boolean): void;
    _selectNextItem(): void;
    _selectPreviousItem(): void;
    _moveItemSelection(previousIdx: number, nextIdx: number): void;
    _deselectItems(): void;
    _clearItemFocus(): void;
    _isItemIntoView(item: SuggestionListItem): boolean;
    _scrollItemIntoView(item: SuggestionListItem): void;
    _getScrollContainer(): HTMLElement;
    _getItems(): Array<SuggestionListItem>;
    _getNonGroupItems(): Array<SuggestionListItem>;
    _getComponent(): SuggestionComponent;
    _getList(): List;
    _getListWidth(): number;
    _getRealItems(): SuggestionItem[];
    _getPicker(): ResponsivePopover;
    get itemSelectionAnnounce(): string;
    getRowText(suggestion: IInputSuggestionItem): string;
    getRowDesc(suggestion: IInputSuggestionItem): string;
    getHighlightedText(suggestion: IInputSuggestionItem, input: string): string;
    getHighlightedDesc(suggestion: IInputSuggestionItem, input: string): string;
    hightlightInput(text: string, input: string): string;
    sanitizeText(text: string): string;
    get _hasValueState(): boolean;
    _focusValueState(): void;
    _clearValueStateFocus(): void;
    _clearSelectedSuggestionAndAccInfo(): void;
    static get dependencies(): (typeof Button | typeof Icon | typeof ListItemGroupHeader | typeof List | typeof SuggestionListItem | typeof SuggestionGroupItem)[];
    static init(): Promise<void>;
}
export default Suggestions;
export type { SuggestionComponent, InputSuggestion, };
