export {}

class Animal {
    get walk() {
        return 'walking'
    }
}

class Dog extends Animal {
    get sound() {
        return 'au au'
    }
}

const newAnimal = new Dog()

console.log(newAnimal)
console.log(newAnimal.sound)
console.log(newAnimal.walk)