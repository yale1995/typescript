export { }

class Square {
    private width = 6
    private height = 12

    get calculateArea() {
        return this.height * this.width
    }
}

console.log(new Square().calculateArea)

class Person {
    name: string;

    showName(name: string) {
        this.name = name
    }
}

const person = new Person()

console.log(person, 'pessoa')
console.log(person.name)
person.showName('Yale Henrique')
console.log(person.name, 'name')
console.log(person, 'person')

class Studant {
    private name: string = 'Yale Araújo';
    private semester: number;
    private course: string

    public get nameStudant() {
        return this.name
    }
}

const studant = new Studant()

console.log(studant)
console.log(studant.nameStudant)

class PersonalTrainer {
    name: string;
    experience: number;
    gymName: string;

    constructor(name: string, experience: number, gymName: string) {
        this.name = name;
        this.experience = experience
        this.gymName = gymName
    }

    get getExperience() {
        return this.experience
    }

    set setExperience(experience: number) {
        this.experience = experience
    }
}

const personalTrainer = new PersonalTrainer('Yale', 2, 'Natal Fitness')

console.log(personalTrainer)
console.log(personalTrainer.name)
console.log(personalTrainer.getExperience)
console.log(personalTrainer.experience)

personalTrainer.setExperience = 10
console.log(personalTrainer, 'updated')