let userName: string = 'Yale Henrique Araújo dos Santos'
console.log(userName)

let animals = ['Elephant', 'Dog', 'Cat', 'Lyon', 'Mouse']
console.log(animals)

let car: {
    nome: string;
    ano: number;
    preco: number
}

car = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 80000 }
console.log(car)

function multiplicationNumbers(number1: number, number2: number): number {
    return number1 * number2
}
console.log('the function result is ',multiplicationNumbers(2,4))