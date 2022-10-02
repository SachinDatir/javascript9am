// // Inheritance 

// // Class - design 

// // Polymorphism 
// // Inheritance 
// // Encapsulation
// // Abstraction 

class world {
    constructor(fn, cn) {
        this.firstcountryname = fn
        this.capital = cn
    }
    displayW() {
        console.log(this.firstcountryname + " " + this.capital)
    }
}
class country extends world {
    constructor(fn, cn, State, StateCap) {
        super(fn, cn)
        this.statename = State
        this.stateCapital = StateCap
    }
    displayC() {
        console.log(this.statename + " " + this.capital)
    }
}

class state extends country {
    constructor(fn, cn, State, StateCap, stateculture, stateCM) {
        super(fn, cn, State, StateCap)
        this.stateCulture = stateculture
        this.stateCM = stateCM
    }
    displayS() {
        console.log(this.stateCulture + " " + this.stateCM)
    }
}

// let india = new country("india", "delhi", "maharashtra")
// console.log(india)
// let aa = new country("india","delhi","maharashtra","mumbai")
// console.log(aa)
// aa.displayW()
// aa.displayC()
// console.log(aa.stateCapital)
// //console.log(india.stateCapital)
// india.displayC()

let maha = new state("india", "delhi", "maha", "mumbai", "marathi", "eknath shinde")
console.log(maha)
maha.displayS()
//node obj4.js


class RBI {
    SavingInterest() {
        console.log("i am Rbi SavingInterest - 7%")
    }
    LoanInterest(){
        console.log("i am Rbi LoanInterest-10%")
    }
}
class CBI extends RBI {
    SavingInterest() {
        console.log("i am Rbi SavingInterest - 5%")
    }
    LoanInterest(){
        console.log("i am Rbi LoanInterest-15%")
    }
}
class IOB extends RBI {
    SavingInterest() {
        console.log("i am Rbi SavingInterest - 6%")
    }
    LoanInterest(){
        console.log("i am Rbi LoanInterest-20%")
    }
}

let S = new RBI()
S.SavingInterest()
S.LoanInterest()
 console.log('----')

 let cbi = new CBI()
 cbi.SavingInterest()
 cbi.LoanInterest()
 console.log("====")
 
 let iob = new IOB()
 iob.SavingInterest()
 iob.LoanInterest()
