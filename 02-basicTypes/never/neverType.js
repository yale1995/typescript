"use strict";
function error(message) {
    throw new Error(message);
}
console.log(error('Erro de mensagem 01'));
function regectedMessage() {
    return error('Error message 02');
}
console.log(regectedMessage());
const loopVariable = function loop() {
    while (true) {
        console.log('hi developers');
    }
};
console.log(loopVariable());
// const variableNever:never = null => error
const variableVoid = null;
