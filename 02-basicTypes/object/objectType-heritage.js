"use strict";
const son = {
    name: 'Yale',
    surname: 'Henrique',
    age: 27,
};
console.log(son);
const user = {
    name: 'Yale Henrique',
    email: 'yale850@gmail.com'
};
const admin = {
    name: 'Yale Henrique',
    email: 'yale850@gmail.com',
    admin: true
};
function newSystemAccess(user) {
    return user;
}
console.log(newSystemAccess(user)); // ==> is it dependency inversion? 
console.log(newSystemAccess(admin)); // ==> is it dependency inversion? 
function systemAccess(user) {
    return user;
}
console.log(systemAccess(user));
