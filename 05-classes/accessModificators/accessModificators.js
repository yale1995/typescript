"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Studant {
}
const studant = new Studant();
studant.idStudant = 111;
studant.nameStudant = 'Yale Araújo';
console.log(studant.idStudant);
console.log(studant.nameStudant);
console.log(studant);
class NewStudant {
    constructor(idStudant, nameStudant, ageStudant) {
        this.idStudant = idStudant;
        this.nameStudant = nameStudant;
        this.ageStudant = ageStudant;
    }
    showingDataStudant() {
        return `studant id is ${this.idStudant},
        studant name is ${this.nameStudant},
        studant age is ${this.ageStudant}`;
    }
}
const newStudant = new NewStudant(123, 'Yale Henrique', 27);
console.log(newStudant.idStudant, 'idStudant');
console.log(newStudant.nameStudant, 'nameStudant');
console.log(newStudant.showingDataStudant(), 'showingDataStudant');
console.log(newStudant, 'new studant');
class OtherStudant {
    constructor(idStudant, nameStudant) {
        this.idStudant = idStudant;
        this.nameStudant = nameStudant;
    }
}
class Person extends OtherStudant {
    constructor(idStudant, nameStudant, course) {
        super(idStudant, nameStudant);
        this.course = course;
    }
    showingDataStudant() {
        return `the studant id is ${this.idStudant},
        the studant name is ${this.nameStudant},
        the course is ${this.course}`;
    }
}
const person = new Person(123456, 'Bolsonaro', 'Política');
console.log(person.idStudant, 'id');
console.log(person.showingDataStudant(), 'function');
console.log(person, 'instacia');
