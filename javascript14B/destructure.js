//Array destructure

let arr = ['akole', 'sangamner', 'pune', 'mumbai']
let [q1, q2, q3, q4] = arr
console.log(q1, q2, q3, q4)


let info = {
    firstname: "sachin",
    lastname: 'datir',
    age: 23
}
let { firstname: fn, lastname: ln, age: ag } = info
console.log(fn, ln, ag)

let info2 = {
    myinfo: {
        firstname: "sachinD",
        lastname: 'datir1',
        age: 23
    },
    parents: {
        father: 'vitthal',
        mother: 'kanta'
    }
}
let { myinfo: { firstname: fn1, lastname: ln1, age: ag1 }, parents: { father, mother } } = info2
// console.log(fn1, ln1, ag1, father, mother)


let info3 = {
    Myinfo: {
        firstname: 'sachin',
        lastname: "datir",
    },
    parent: {
        father: 'vitthal',
        mother: "kanta"
    },
    Address: {
        village: 'ganore',
        pin: 422605,
        taluka: 'akole',
        dist: 'Anagar'
    }
}

let {Myinfo:{firstname:fn2,lastname:ln2},parent:{father:fname1,mother:mname1},Address:{village,pin,taluka,dist}}=info3
console.log(pin)
//   cd javascript14B
//  node destructure.js