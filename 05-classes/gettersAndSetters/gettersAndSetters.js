"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Square {
    constructor() {
        this.width = 6;
        this.height = 12;
    }
    get calculateArea() {
        return this.height * this.width;
    }
}
console.log(new Square().calculateArea);
class Person {
    showName(name) {
        this.name = name;
    }
}
const person = new Person();
console.log(person, 'pessoa');
console.log(person.name);
person.showName('Yale Henrique');
console.log(person.name, 'name');
console.log(person, 'person');
class Studant {
    constructor() {
        this.name = 'Yale Araújo';
    }
    get nameStudant() {
        return this.name;
    }
}
const studant = new Studant();
console.log(studant);
console.log(studant.nameStudant);
class PersonalTrainer {
    constructor(name, experience, gymName) {
        this.name = name;
        this.experience = experience;
        this.gymName = gymName;
    }
    get getExperience() {
        return this.experience;
    }
    set setExperience(experience) {
        this.experience = experience;
    }
}
const personalTrainer = new PersonalTrainer('Yale', 2, 'Natal Fitness');
console.log(personalTrainer);
console.log(personalTrainer.name);
console.log(personalTrainer.getExperience);
console.log(personalTrainer.experience);
personalTrainer.setExperience = 10;
console.log(personalTrainer, 'updated');
