"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
exports.person = ['Fulano', 22, false];
console.log(exports.person);
let fruitList = [1, true, 'Yale', 'Yure', 'Felipe', 'Patrícia'];
console.log(...fruitList);
function createPerson(...name) {
    return [...name];
}
console.log(createPerson('Yale', 'Arújo', 'Santos'));
console.log(createPerson('Yale', 'Araujo'));
