import TableItem from './TableItem';
import Strings from '../res/strings.js';

export default class TableContent {
    #header;
    #items;
    constructor() {
        this.#header = new TableItem(
            Strings.TABLE_HEADER_DOMAIN,
            Strings.TABLE_HEADER_TECHNICAL,
            Strings.TABLE_HEADER_IMPACT,
            Strings.TABLE_HEADER_RESULT
        );
        this.#items = [
            new TableItem(
                Strings.TABLE_ITEM_SUBSCRIPTION_DOMAIN,
                Strings.TABLE_ITEM_SUBSCRIPTION_TECHNICAL,
                Strings.TABLE_ITEM_SUBSCRIPTION_IMPACT,
                Strings.TABLE_ITEM_SUBSCRIPTION_RESULT
            ),
            new TableItem(
                Strings.TABLE_ITEM_ARCHITECTURE_DOMAIN,
                Strings.TABLE_ITEM_ARCHITECTURE_TECHNICAL,
                Strings.TABLE_ITEM_ARCHITECTURE_IMPACT,
                Strings.TABLE_ITEM_ARCHITECTURE_RESULT
            ),
            new TableItem(
                Strings.TABLE_ITEM_TECH_DOMAIN,
                Strings.TABLE_ITEM_TECH_TECHNICAL,
                Strings.TABLE_ITEM_TECH_IMPACT,
                Strings.TABLE_ITEM_TECH_RESULT
            ),
            new TableItem(
                Strings.TABLE_ITEM_UI_DOMAIN,
                Strings.TABLE_ITEM_UI_TECHNICAL,
                Strings.TABLE_ITEM_UI_IMPACT,
                Strings.TABLE_ITEM_UI_RESULT
            ),
            new TableItem(
                Strings.TABLE_ITEM_RELEASE_DOMAIN,
                Strings.TABLE_ITEM_RELEASE_TECHNICAL,
                Strings.TABLE_ITEM_RELEASE_IMPACT,
                Strings.TABLE_ITEM_RELEASE_RESULT
            ),
            new TableItem(
                Strings.TABLE_ITEM_TESTING_DOMAIN,
                Strings.TABLE_ITEM_TESTING_TECHNICAL,
                Strings.TABLE_ITEM_TESTING_IMPACT,
                Strings.TABLE_ITEM_TESTING_RESULT
            ),
        ];
    }

    getHeader() {
        return this.#header;
    }

    getItems() {
        return this.#items;
    }
}