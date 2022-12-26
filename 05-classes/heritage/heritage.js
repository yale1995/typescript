"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name) {
        this.name = name;
    }
    get walk() {
        return 'walking';
    }
}
class Dog extends Animal {
    constructor(age, name) {
        super(name);
        this.age = age;
    }
    get sound() {
        return 'au au';
    }
}
const newAnimal = new Dog(11, 'Theo');
console.log(newAnimal);
console.log(newAnimal.sound);
console.log(newAnimal.walk);
console.log(newAnimal.age);
console.log(newAnimal.name);
