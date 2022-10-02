// //object literal

// let sachin = {
//     firstname: "sachin",
//     lastname: "datir",
//     age: 22,
//     rollNo: 10,
//     display: function () {
//         console.log('sachin d')
//     }
// }
// sachin.display()

// //function constructor
// let Person = function (fn, ln, ag, rn) {
//     this.firstName = fn,
//         this.lastName = ln,
//         this.age = ag,
//         this.rollno = rn
//     //this.display = function () {
//         //console.log(this.firstName, this.lastName)
//     //}
// }

// let skd = new Person('sachin1', 'datir2', 223, 103)
// let skd1 = new Person('sachin3', 'datir4', 256, 101)
// let skd2 = new Person('sachin4', 'datir44', 223, 100)
// let skd3 = new Person('sachin5', 'datir5', 225, 102)
// let skd4 = new Person('sachin7', 'datir7', 223, 106)
// console.log(skd)

// // let names = [skd,skd1,skd2,skd3,skd4]
// // console.log(names)
// console.log(skd.__proto__ ==Person.protype)
// names.forEach(function(el){
//     el.city = "akole"
// })
// console.log(names)

let Person2 = (function(firstName,lastName){
    this.firstName = firstName,
    this.lastName = lastName
    //this.displayName = function(){
      //  console.log(this.firstName + this.lastName)
    // }
})

 let ram = new Person2("Ram","sharma")
 let shyam = new Person2("shyam","verma")
// // console.log(ram)
// // console.log(shyam)
// //  ram.displayName()
// //  shyam.displayName()

 console.log(ram.__proto__===Person2.prototype)
 console.log(shyam.__proto__===Person2.prototype)

Person2.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}

Person2.prototype.language = "marathi"
ram.displayName()
shyam.displayName()

// console.log(ram)
// console.log(shyam)
// console.log(ram.language)


// //object creation type
// //object literal
// //function cunstructor
// //es6 class

// //programme one
// class student {
//     firstName = "sachin"
//     lastName = "datir"
//     age = 22
//     rollno = 10
// }
// class Teacher extends student {
//     salary = 1000
// }
// class professor extends Teacher {
//     speacialization = "Javascript"
// }
// let skdd = new professor()
// console.log(skdd.firstName)
// console.log(skdd.lastName)
// console.log(skdd.salary)


//   //programme2
//   //parent cunstructor no cunstructor in child

// class students {
//     constructor(firstName, lastName, address, adharno) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.address = address
//         this.adharno = adharno
//     }
// }
// class Teacher extends students {
//     salary = 10000
// }
// let sachinD = new Teacher("sachin", "datir", "akole", 123)
// console.log(sachinD.firstName)
// console.log(sachinD.address)
// console.log(sachinD.adharno)

// //programme 2
//parent cunstructor ,child cunstroctor


// class Human {
//     constructor(firstName, lastName, age, species) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age 
//         this.species = species

//     }
// }
// class Male extends Human {

//     constructor(firstName, lastName, age, species, Harmone) {
//         super(firstName, lastName, age, species)
//         this.Harmone = Harmone
//     }
// }
// let sachin = new Male("sachin", "datir", 22, "Homosapian", "Testosteron")
// console.log(sachin.Harmone)
// console.log(sachin.species)
// console.log(sachin.lastName)




