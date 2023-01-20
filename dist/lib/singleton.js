"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Singleton {
    static instance;
    count;
    constructor() {
        this.count = 0;
    }
    static getIstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    increment() {
        return this.count++;
    }
    get getCounter() {
        return this.count;
    }
}
exports.default = Singleton;
//# sourceMappingURL=singleton.js.map