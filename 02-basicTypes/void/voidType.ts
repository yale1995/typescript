function logError(errorMessage: string) {
    console.log(errorMessage)
}

logError('Required field name')

const logoErrorExample = (errorMessage: string): void => {
    console.log(errorMessage)
}

logoErrorExample('Required field age')

let variable: void
variable = null
variable = undefined

//tsconfig.json -> strickNullChecks = false