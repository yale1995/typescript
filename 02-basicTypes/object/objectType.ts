export { }

interface Person {
    name: string;
    role: string;
}

interface newPerson {
    name: string,
    role: string,
    programmingLanguage?: string,
    readonly email: string
}

type OtherPerson = {
    name: string;
    role: string;
    programmingLanguage?: string;
}

const person = {
    name: 'Yale',
    surname: 'Henrique',
    programmingLanguage: 'JavaScript',
    email: 'yale850@gmail.com',
    age: 27,
    role: 'frontend developer'
}

console.log(person)

function onBoarding(person: { name: string }) {
    return `Welcome to our company ${person.name}`
}
console.log(onBoarding(person))

function onBoardingAgain(person: Person): string {
    return `Welcome ${person.name} to your new position as ${person.role}`
}
console.log(onBoardingAgain(person))

function otherOnBoardingAgain(person: OtherPerson): string {
    return `Welcome ${person.name} to your new position as ${person.role} using ${person.programmingLanguage}`
}
console.log(otherOnBoardingAgain(person))

function onBoardingNewCompany(person: newPerson) {
    return `Welcome ${person.name} to position as ${person.role} using ${person.programmingLanguage} your email is ${person.email}`
}

console.log(onBoardingNewCompany(person))


