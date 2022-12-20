"use strict";
function logError(errorMessage) {
    console.log(errorMessage);
}
logError('Required field name');
const logoErrorExample = (errorMessage) => {
    console.log(errorMessage);
};
logoErrorExample('Required field age');
let variable;
variable = null;
variable = undefined;
//tsconfig.json -> strickNullChecks = false
