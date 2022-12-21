interface Mother {
    name: string;
}

interface Father {
    surname: string;
}

interface Son extends Mother, Father {
    age: number
}

interface Dog {
    type: string;
}

interface Cat {
    type: string;
}

type Animal = Dog & Cat

const son: Son = {
    name: 'Yale',
    surname: 'Henrique',
    age: 27,

}

console.log(son)

type User = {
    name: string;
    email: string;
}
type Admin = {
    name: string;
    email: string;
    admin: boolean
}
const user: User = {
    name: 'Yale Henrique',
    email: 'yale850@gmail.com'
}
const admin: Admin = {
    name: 'Yale Henrique',
    email: 'yale850@gmail.com',
    admin: true
}

function newSystemAccess<T>(user: T) {
    return user
}

console.log(newSystemAccess<User>(user)) // ==> is it dependency inversion? 
console.log(newSystemAccess<Admin>(admin)) // ==> is it dependency inversion? 

function systemAccess(user: User) {
    return user
}

console.log(systemAccess(user))