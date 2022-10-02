// node polymorphism.js
// Polymorphism in JavaScript refers to the concept of reusing a single piece of code multiple times

//OVERLOADING
//SAME CLASS ,SAME METHOD,DIFF SIGNATURE

//OVErRIDING
//diff class , same method ,same signature

class Addition {
    calculator(a, b, c) {
        if (a !== undefined && b !== undefined) {
            console.log(a + b + c)
        }
        else if (a !== undefined && b !== undefined) {
            console.log(a + b)
        }
        else {
            console.log('please provide correct input')
        }
    }

}
// c !== undefined
let a = new Addition()
a.calculator(1)
a.calculator(2, 4)
a.calculator(5, 7, 3)


//OVErRIDING
//diff class , same method ,same signature
class RBI {
    save() {
        console.log('i am RBI save method- 5%')
    }
    loan() {
        console.log('i am RBI loan method - 8%')
    }
}

class SBI extends RBI {
    save() {
        console.log('i am SBI save method- 6%')
    }
    loan() {
        console.log('i am SBI loan method - 9%')
    }
}

class IOB extends RBI {
    save() {
        console.log('i am IOB save method - 10 %')
    }
    loan() {
        console.log('i am IOB loan method - 11%')
    }
}

let skd = new RBI()
skd.loan()
skd.save()
console.log('-------------')
let SKD = new SBI()
SKD.loan()
SKD.save()
console.log('--------------')
let iob = new IOB()
iob.save()
iob.loan()


// node polymorphism.js