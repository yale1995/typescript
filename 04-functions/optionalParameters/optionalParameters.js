"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
}
exports.default = default_1;
function infoPersonalData(id, name, email) {
    if (email) {
        return `The employee ${name} that has id ${id} and email ${email} was admitted to the company`;
    }
    return `The employee ${name} that has id ${id} was admitted to the company`;
}
console.log(infoPersonalData(123, 'Yale', 'yale850@gmail.com'));
console.log(infoPersonalData(123, 'Yale'));
let person = {
    idEmployee: 123,
    name: 'Yale'
};
console.log(person);
