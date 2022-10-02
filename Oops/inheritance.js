// //inheritance
// class GrandFather {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     display() {
//         console.log(this.firstName + this.lastName)
//     }

// }

// class Father extends GrandFather {
//     constructor(gfname, lastName, Fname) {
//         super(gfname, lastName)
//         this.Fname = Fname

//     }
//     display() {
//         console.log(this.Fname + this.lastName)
//         super.display()

//     }
// }

// class Son extends Father {
//     constructor(gfname, lastName, Fname, Sname) {
//         super(gfname, lastName, Fname)
//         this.Sname = Sname
//     }
//     display() {
//         console.log(this.Sname + this.lastName)
//         super.display()
//     }
// }
// let Sachin = new Son("maruti", "datir", "vitthal", "Sachin")
// console.log(Sachin.Fname)
// console.log(Sachin.firstName)
// console.log(Sachin.Sname)
// console.log(Sachin.lastName)

// Sachin.display()

// console.log("--------")



// let vitthal = new Father("maruti","datir","vitthal")
// console.log(vitthal.firstName)
// console.log(vitthal.lastName)
// console.log(vitthal.Fname)
// vitthal.display()


// let maruti = new GrandFather("maruti","datir")
// console.log(maruti.firstName)
// console.log(maruti.lastName)
// maruti.display()



class Parent {
    constructor(fName, mName, lastName) {
        this.fName = fName
        this.mName = mName
        this.lastName = lastName

    }
    displayFatherName() {
        console.log(this.fName + this.lastName)
    }

    displayMotherName() {
        console.log(this.mName + this.lastName)
    }
}

class Son extends Parent {
    constructor(fName, mName, lastName, Sname) {
        super(fName, mName, lastName)
        this.Sname = Sname
    }
    displayName() {
        console.log(this.Sname + this.lastName)
        super.displayFatherName()
        super.displayMotherName()
    }
}

class Daughter extends Parent {
    constructor(fName, mName, lastName, Dname) {
        super(fName, mName, lastName)
        this.Dname = Dname
    }
    displayName() {
        console.log(this.Dname + this.lastName)
        super.displayFatherName()
        super.displayMotherName()
    }
}

let SACHIN = new Son("vitthal","kanta","datir","sachin")
// console.log(SACHIN.fName)
// console.log(SACHIN.mName)
// console.log(SACHIN.lastName)
// console.log(SACHIN.Sname)
SACHIN.displayName()
// console.log("=======")
// let Shital = new Daughter("vitthal","kanta","datir","shital")
// console.log(Shital.fName)
// console.log(Shital.mName)
// console.log(Shital.lastName)
// console.log(Shital.Dname)

// Shital.displayName()