export { }

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name
    }
    get walk() {
        return 'walking'
    }
}

class Dog extends Animal {
    age: number;
    constructor(age: number, name: string) {
        super(name)
        this.age = age
    }
    get sound() {
        return 'au au'
    }
}

const newAnimal = new Dog(11, 'Theo')

console.log(newAnimal)
console.log(newAnimal.sound)
console.log(newAnimal.walk)
console.log(newAnimal.age)
console.log(newAnimal.name)