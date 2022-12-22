"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function discountInSale(price, discount = 0.08) {
    return price * (1 - discount);
}
console.log(discountInSale(100));
function myGreeting(name, greeting = ', how are you today?') {
    return name + greeting;
}
console.log(myGreeting('Yale'));
