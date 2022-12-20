"use strict";
let person = ['Fulano', 22, false];
console.log(person);
let fruitList = [1, true, 'Yale', 'Yure', 'Felipe', 'Patrícia'];
console.log(...fruitList);
function createPerson(...name) {
    return [...name];
}
console.log(createPerson('Yale', 'Arújo', 'Santos'));
console.log(createPerson('Yale', 'Araujo'));
