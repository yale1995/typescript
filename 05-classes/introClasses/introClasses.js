"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    completeName() {
        return this.name + ' ' + this.surname;
    }
}
exports.Person = Person;
const person = new Person('Yale', 'Araújo');
console.log(person.completeName());
// =========================== exemple 2 - classes without constructor
class Studant {
}
const studant = new Studant();
studant.idStudant = 123;
studant.nameStudant = 'Yale Henrique Araújo dos Santos';
console.log('idStudant: ', studant.idStudant);
console.log('nameStudant: ', studant.nameStudant);
// =========================== exemple 3 - classes with constructor
class OtherStudant {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    showStudant() {
        return this.name + ' ' + this.id;
    }
}
const otherStudant = new OtherStudant('Yale Henrique', 12345);
console.log('deu bom demais yale', otherStudant.showStudant());
