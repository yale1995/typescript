"use strict";
function sumNumbers(number1, number2) {
    return number1 + number2;
}
console.log(sumNumbers(4, 5));
const result = (message) => {
    return message;
};
console.log(result('Hello developers'));
const greeting = new Function('message', 'return message');
console.log(greeting('Hello guys'));
