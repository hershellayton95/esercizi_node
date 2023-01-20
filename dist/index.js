"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./lib/script1");
require("./lib/script2");
require("./lib/script3");
const singleton_1 = __importDefault(require("./lib/singleton"));
const counterInstance = singleton_1.default.getIstance();
counterInstance.increment();
console.log(counterInstance.getCounter);
//# sourceMappingURL=index.js.map