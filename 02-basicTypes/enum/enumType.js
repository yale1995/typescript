"use strict";
var Language;
(function (Language) {
    Language[Language["Portuguese"] = 0] = "Portuguese";
    Language[Language["Espanhol"] = 1] = "Espanhol";
    Language[Language["English"] = 2] = "English";
    Language[Language["French"] = 3] = "French";
})(Language || (Language = {}));
console.log(Language);
console.log(Language.English);
var Day;
(function (Day) {
    Day["Monday"] = "MON";
    Day["Tuesday"] = "TUE";
    Day["Wednesday"] = "WED";
    Day["Thursday"] = "THU";
    Day["Friday"] = "FRI";
    Day["Saturday"] = "SAT";
    Day["Sunday"] = "SUN";
})(Day || (Day = {}));
console.log(Day);
function food(f) {
    return 'This food is very well';
}
console.log(food(2 /* Food.Pizza */));
console.log(food(4 /* Food.Barbecue */));
console.log(food(5));
