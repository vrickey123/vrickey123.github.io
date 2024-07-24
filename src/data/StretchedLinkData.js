export default class StretchedLinkedData {
    #link;
    #anchor;
    #text;
    constructor(link, anchor, text) {
        this.#link = link;
        this.#anchor = anchor;
        this.#text = text;
    }

    getLink() {
        return this.#link;
    }

    getAnchor() {
        return this.#anchor;
    }

    getText() {
        return this.#text;
    }
}