//function constructor
let Person = function (firstName, lastName, age, rollno) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.rollno = rollno
    // this.display = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}

let sachin = new Person("sachin", "datir", 22, 10)
console.log(sachin)
console.log(sachin.__proto__ === Person.prototype)

Person.prototype.display = function () {
    console.log(this.firstName + this.lastName)
}
Person.prototype.lang = "marathi"
sachin.display()
console.log(sachin.lang)

// console.log(sachin instanceof Person)
// console.log(sachin.hasOwnProperty('lang'))


// //Es6 class
// //set object property outside class
// //at the time of object creation using consrtructor
// //using set
// class Person2 {
//     constructor(king, commanderInChief, Pm, secretory) {
//         this.king = king
//         this.commanderInChief = commanderInChief
//         this.primeMinister = Pm
//         this.secreatory = secretory
//     }
//     display() {
//         console.log(this.king + this.Pm)
//     }
// }

// let swarajya = new Person2(" chhatrapati shivray", "hambirrao mohite", "moropant pingale", "anajiDatto")
// console.log(swarajya)

// let Swarajya = new Person2("chhatrapati shambhuraje", "Hambirrao mohite", "moropant pingale", "anaji datto")
// console.log(Swarajya)

// //object.create method
// // let sach = Object.create({})
// // console.log(sach)

// // sach.firstName = "sachin"
// // sach.lastName = "datir"
// // console.log(sach)

// let prototype = {
//     display: function () {
//         console.log(this.firstName + this.lastName)
//     },
//     init: function (fn, ln, ag, rl) {
//         this.firstName = fn
//         this.lastName = ln
//         this.age = ag
//         this.rollno = rl
//     }
// }

// let SACHIN = Object.create(prototype)
//  SACHIN.init("sachin","datir",22,10)
// console.log(SACHIN)
// SACHIN.display()



