"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: 'Yale',
    surname: 'Henrique',
    programmingLanguage: 'JavaScript',
    email: 'yale850@gmail.com',
    age: 27,
    role: 'frontend developer'
};
console.log(person);
function onBoarding(person) {
    return `Welcome to our company ${person.name}`;
}
console.log(onBoarding(person));
function onBoardingAgain(person) {
    return `Welcome ${person.name} to your new position as ${person.role}`;
}
console.log(onBoardingAgain(person));
function otherOnBoardingAgain(person) {
    return `Welcome ${person.name} to your new position as ${person.role} using ${person.programmingLanguage}`;
}
console.log(otherOnBoardingAgain(person));
function onBoardingNewCompany(person) {
    return `Welcome ${person.name} to position as ${person.role} using ${person.programmingLanguage} your email is ${person.email}`;
}
console.log(onBoardingNewCompany(person));
