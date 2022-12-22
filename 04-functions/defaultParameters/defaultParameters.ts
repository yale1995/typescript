export {}

function discountInSale(price: number, discount = 0.08) {
    return price * (1- discount)
}

console.log(discountInSale(100))

function myGreeting(name: string, greeting=', how are you today?') {
    return name + greeting
}

console.log(myGreeting('Yale'))