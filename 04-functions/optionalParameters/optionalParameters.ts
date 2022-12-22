export default class { }

function infoPersonalData(id: number, name: string, email?: string) {
    if (email) {
        return `The employee ${name} that has id ${id} and email ${email} was admitted to the company`
    }
    return `The employee ${name} that has id ${id} was admitted to the company`
}

console.log(infoPersonalData(123, 'Yale', 'yale850@gmail.com'))
console.log(infoPersonalData(123, 'Yale',))

type Person = {
    idEmployee: number,
    name: string,
    age?: number,
    email?: string
}

let person: Person = {
    idEmployee: 123,
    name: 'Yale'
}

console.log(person)