export default class TableItem {
    #domain;
    #technical;
    #impact;
    #result;
    constructor(domain, technical, impact, result) {
        this.#domain = domain;
        this.#technical = technical;
        this.#impact = impact;
        this.#result = result;
    }

    getDomain() {
        return this.#domain;
    }

    getTechnical() {
        return this.#technical;
    }

    getImpact() {
        return this.#impact;
    }

    getResult() {
        return this.#result;
    }
}