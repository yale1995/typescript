export
let person: [string, number, boolean] = ['Fulano', 22, false]
console.log(person)

let fruitList: [number, boolean, ...string[]] = [1, true, 'Yale', 'Yure', 'Felipe', 'Patrícia']
console.log(...fruitList)

type Name = | [firstName: string, lastName: string]
    | [firstName: string, middleName: string, lastName: string]

function createPerson(...name: Name) {
    return [...name]
}

console.log(createPerson('Yale', 'Arújo', 'Santos'))
console.log(createPerson('Yale', 'Araujo'))