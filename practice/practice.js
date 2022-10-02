//synchronious exicution
function one() {
    console.log('ganore')
}
function two() {
    console.log(['akole'])
}
// one()
// two()
//asynchronous exicution
function sachin() {
    setTimeout(function () {
        console.log(['sachin'], ['datir'])
    }, 4000)
}
// sachin()


//asynchronous
//user create===async
//get user id===async
//gwt user info==async

//async to sync

function SACHIN() {
    setTimeout(() => {
        console.log(['userCreate'])
    }, 4000)
    setTimeout(() => {
        console.log(['get user id'])
    }, 3000)
    setTimeout(() => {
        console.log(['get user info'])
    }, 2000)

}
//SACHIN()

//console.log('++++')


//call back hell
function skd() {
    setTimeout(function () {
        console.log('user created')
        setTimeout(function () {
            console.log('get user id')
            setTimeout(function () {
                console.log('get user info')
            }, 1000)
        }, 2000)

    }, 3000)
}
//skd()

//promises()==>year 015  async call===>synchro.... in better way by removing call back hell

//basic promise
// let promise1 = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 20
//     if (a == b) {
//         resolve(['hello', "hii"])
//     } else {
//         reject(['by', 'hasta la vista baby'])
//     }
// })
//consuming the promise
// promise1.then(function (a) {
//     console.log(a[0])
// }, function (b) {
//     console.log(b[1])
// })

console.log('*******************')


let pro = new Promise(function (resolve, reject) {
    let numbers = [11, 33, 55, 77]
    let sum = []
    let AA = numbers.reduce(function (acc, el) {
        return acc + el
    })
    sum.push(AA)
    if (sum > 50) {
        resolve('correct')
    }
    else {
        reject('incorrect')
    }

})

pro.then(function (sum) {
    //console.log(sum)
    console.log('correct')
})
    .catch(function (sum) {
       // console.log(sum)
     console.log('incorrect')
    })

    //    node practice.js



