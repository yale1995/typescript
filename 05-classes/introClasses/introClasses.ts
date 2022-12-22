export class Person {
    name: string
    surname: string

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    completeName(): string {
        return this.name + ' ' + this.surname
    }
}

const person = new Person('Yale', 'Araújo')
console.log(person.completeName())


// =========================== exemple 2 - classes without constructor
class Studant {
    idStudant: number
    nameStudant: string
}

const studant = new Studant()

studant.idStudant = 123
studant.nameStudant = 'Yale Henrique Araújo dos Santos'

console.log('idStudant: ', studant.idStudant)
console.log('nameStudant: ', studant.nameStudant)

// =========================== exemple 3 - classes with constructor

class OtherStudant {
    id: number
    name: string

    constructor(name: string, id: number) {
        this.name = name
        this.id = id
    }

    showStudant(): string {
        return this.name + ' ' + this.id
    }
}

const otherStudant = new OtherStudant('Yale Henrique', 12345)

console.log('deu bom demais yale', otherStudant.showStudant())