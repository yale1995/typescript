"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumNumbers(...numbers) {
    let total = 0;
    numbers.forEach((number) => (total += number));
    return total;
}
console.log(sumNumbers(30, 50));
console.log(sumNumbers(30, 50, 90, 30, 1110, 10238183192, 1221321, 212, 1, 2, 3));
function fruitList(phrase, ...fruits) {
    return phrase + ' ' + fruits.join(', ');
}
console.log(fruitList('Yale, você precisa comprar', 'limão', 'laranja', 'abacate', 'maçã', 'pêra', 'uva'));
class Products {
    showProducts(...products) {
        for (const product of products) {
            console.log(product);
        }
    }
}
const informaticDepartament = new Products();
console.log('All products of our it department are avaliable in the stock');
informaticDepartament.showProducts('mouse', 'notebook', 'hub usb', 'keyboard', 'webcam');
