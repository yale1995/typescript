export {}
class Employee {
    readonly birthData: Date;

    constructor(birthDate: Date) {
        this.birthData = birthDate
    }
}

const employee = new Employee(new Date(1995, 12, 6))

console.log(employee.birthData)

class NewEmployee {
    constructor(readonly birthData: Date){
        this.birthData = birthData
    }
}

const newEmployee = new NewEmployee(new Date())

console.log(newEmployee.birthData)

class OtherEmployee {
    name: string;
    readonly employeeId: number

    constructor(name: string, employeeId: number) {
        this.name = name;
        this.employeeId = employeeId
    }
}

const otherEmployee = new OtherEmployee('Yale Henrique araújo dos Santos', 123456)

console.log(otherEmployee.employeeId)
console.log(otherEmployee.name)
console.log(otherEmployee)
otherEmployee.name = 'João'
// otherEmployee.employeeId = 123456667  ==> can not to do this

console.log(otherEmployee)
console.log(OtherEmployee)