//closure

function countNumber() {
    let count = 0
    return function incre() {
        count = count + 1
        console.log(count)
    }
}
let a = countNumber()
// a()
// a()
// a()
// a()

class Student {
    constructor() {
        let marks = 200
        let age = 23
        let pinCode = 422603
        this.getMarks = function () {
            this.marks = marks
            console.log(marks)
        }
        this.getAge = function () {
            this.age = age
            console.log(age)
        }
        this.getpinCode = function () {
            this.pinCode = pinCode
            console.log(pinCode)
        }

    }
}
let sachin = new Student()
// sachin.getMarks()
// sachin.getAge()
// sachin.getpinCode()

// //node closure.js

class studentA {
    constructor(firstName, lastName, age, pinCode) {
        this._firstName = firstName
        this._lastName = lastName
        this._age = age
        this._pinCode = pinCode
    }
    getAge() {
        console.log(this._age)
    }
    getFirstName() {
        console.log(this._firstName)
    }
    getLastName() {
        console.log(this._lastName)
    }
    getpinCode() {
        console.log(this._pinCode)
    }
}
let sachinA = new studentA("sachinA", "datir", 23, 422604)
// sachinA.getFirstName()
// sachinA.getAge()
// sachinA.getpinCode()
//   node closure.js

// //ABSTACTION()=======
class Employee {
    constructor(firstName, lastName, age, basicS) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.basicSalary = basicS
        this.bonus = 500
    }
    updatetotalSalary() {
        this.totalSalary = this.basicSalary + this.bonus
    }
    getTotalSalary() {
        console.log(this.totalSalary)
    }
}

let sachinD = new Employee("sachinD", "datirD", 22, 10000)
sachinD.bonus = 5000   //outside update
// console.log(sachinD.bonus)
sachinD.updatetotalSalary = function () {
    this.totalSalary = this.basicSalary + this.bonus + this.basicSalary
                        //10000            5000           10000
}
// sachinD.updatetotalSalary()
// sachinD.getTotalSalary()

//   node closure.js

let Employee2 = function (firstName, lastName, age, basicS) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.basicSalary = basicS
    let bonus = 500

    let updateSalary = function(){
        this.totalSalary = this.basicSalary + bonus;
    };
    this.getTotalSalary= function(){
        updateSalary()
        console.log(this.totalSalary)
    };
}
let sachinF = new Employee2("sachin","datir",23,5000)
 console.log(sachinF)
sachinF.updateSalary()
sachinF.getTotalSalary()

//   node closure.js





















