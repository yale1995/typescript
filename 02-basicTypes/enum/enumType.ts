enum Language {
    Portuguese,
    Espanhol,
    English,
    French,
}

console.log(Language)
console.log(Language.English)

enum Day {
    Monday = 'MON',
    Tuesday = 'TUE',
    Wednesday= 'WED',
    Thursday = 'THU',
    Friday = 'FRI',
    Saturday = 'SAT',
    Sunday = 'SUN'
}

console.log(Day)

const enum Food {
    Hamburguer,
    Pasta,
    Pizza,
    Pie,
    Barbecue,
}

function food(f: Food) {
    return 'This food is very well'
}

console.log(food(Food.Pizza))
console.log(food(Food.Barbecue))
console.log(food(5))
