function sumNumbers(number1: number, number2: number): number { // ==> namedFunction 
    return number1 + number2
}

console.log(sumNumbers(4, 5))

const result = <T>(message: T) => { // annonimousFunction
    return message
}

console.log(result<string>('Hello developers'))

const greeting = new Function('message', 'return message')

console.log(greeting('Hello guys'))
