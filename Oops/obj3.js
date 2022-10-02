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
// console.log(sachin)
// sachin.display()

// let SACHIN = {
//     firstname : "sachind",
//     lastname : "datirD",
//     age:22,
//     skills:["java","js"],
//     display:function(){
//         console.log("skd")
//     }

// }
// console.log(SACHIN)
// SACHIN.display()

//function cunstructor
let teacher = function (fn, ln, age, skl) {
    this.firstname = fn
    this.lastname = ln
    this.age = age
    this.skills = skl
    // this.displayName= function(){
    //     console.log(this.firstname+this.lastname)
    // }

}
let Sachin = new teacher("sachin", "datir", 22, ["java", "js"])
console.log(Sachin)

teacher.prototype.displayName = function () {
    console.log(this.firstname + " " + this.skills)
}
Sachin.displayName()


teacher.prototype.lang = "marathi"
teacher.prototype.car = "Audi"
console.log(Sachin.lang)
console.log(Sachin.car)


console.log(Sachin instanceof teacher)
console.log(Sachin.hasOwnProperty('lang'))
console.log(Sachin.hasOwnProperty('car'))


//constructor
//set the property at the time object creation

class person {
    constructor(fn, ln, age, skl) {
        this.firstname = fn
        this.lastname = ln
        this.age = age
        this.skills = skl
    }
    display() {
        console.log(this.firstname + " " + this.lastname)
    }
}
let skd = new person("sachin", "datir", 22, ["js,java"])
console.log(skd)
skd.display()

//create

let sachin = Object.create({})
sachin.firstname = "skd"
sachin.lastname = "datir"
sachin.age = 22
console.log(sachin)

let aa = {
    display: function () {
        console.log(this.firstname + this.age)
    },
    init: function (fn, ln, ag, skl) {
        this.firstname = fn
        this.lastname = ln
        this.age = ag
        this.skills = skl
    }
}
//node obj3.js
let AA = Object.create(aa)
AA.init("sachin", "datir", 22, ["js", "java"])
console.log(AA)



class president {
    constructor(Presidentfn, ln, ctry) {
        this.Presidentfirstname = Presidentfn
        this.lastname = ln
        this.country = ctry

    }
    displaypresidentName() {
        console.log(this.firstname + this.ctry)
    }
}

class Pm extends president {
    constructor(Presidentfn, ln, ctry, PMname) {
        super(Presidentfn, ln, ctry)
        this.PMname = PMname
    }
    display() {
        console.log(this.PMname + " " + this.country)
      
    }
}

class HM extends Pm {
    constructor(Presidentfn, ln, ctry, PMname, HMname, goverment) {
        super(Presidentfn, ln, ctry, PMname)
        this.HMname = HMname
        this.goverment = goverment
    }
    displayName() {
        console.log(this.HMname + " " + this.country+" "+this.goverment)
    
    }
}
//node obj3.js
let Amitshah = new HM("draupadi", "murmu", "india", "Nmodi","Motabhai","Gov of india")
console.log(Amitshah)
Amitshah.displayName()