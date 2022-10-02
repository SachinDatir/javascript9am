// //synchronous exicution
// function one() {
//     console.log('one')
// }
// function two() {
//     console.log('hello')
// }
// // one()
// // two()
// //asynchronous exicution(non blocking in nature)
// function one() {
//     setTimeout(function () {
//         console.log('hello')
//     }, 2000)
// }
// function two() {
//     console.log('bye')
// }
// one()
// two()

//async
//useCreate()
////getuserId
//getuserinfo()

// function getUserInfo() {
//     setTimeout(() => {
//         console.log('user created')
//     }, 3000);
//     setTimeout(() => {
//         console.log('get user id')
//     }, 2000)
//     setTimeout(() => {
//         console.log('get user info')
//     }, 1000)
// }
//getUserInfo()

//async---sync execute
//call back hell()==>
// function getUser2() {
//     setTimeout(function () {
//         console.log('user created')
//         setTimeout(function () {
//             console.log('get user id')
//             setTimeout(function () {
//                 console.log('get user info')
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// //getUser2()

//promises ==> better to manage async code synchroniously>>>basicaly it is object
//pending,resolve(),reject()

// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 20
//     if (a == b) {
//         resolve('true')
//     }
//     else {
//         reject('false')
//     }
// })
// // consuming the promise
// pro.then(function (string) {
//     console.log(string)
// }, function (string) {
//     console.log(string)
// })

// let pro2 = new Promise(function (resolve, reject) {
//     let a = 100
//     let b = 100
//     if (a == b) {
//         resolve([1, 2, 3, 4])
//     }
//     else {
//         reject([-1, -2, -3, -4])
//     }
// })
// pro2.then(function (a) {
//     console.log(a[0])
// })

//     //for reject
//     .catch(function (a) {
//         console.log(a[2])
//     })
//     .finally(function () {
//         console.log('i always run')
//     })


// node asyncsync.js


// //problem
// function getUserInfo4() {
//     setTimeout(function () {
//         console.log('user created')
//         setTimeout(function () {
//             console.log('get user id')
//             setTimeout(function () {
//                 console.log('get user info')

//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
//getUserInfo4()

// //solution
// function createUser() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if ('userCreated') {
//                 resolve('userCreated')
//             }
//             else {
//                 reject('user not created')
//             }
//         }, 3000)
//     })
// }
// function getUserId() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if ('useerId') {
//                 resolve('get user id')
//             }
//             else {
//                 reject('user id not found')
//             }
//         }, 2000)
//     })
// }

// function getUserInfo() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if ('userInfo') {
//                 resolve(['skd', 'sachin'])
//             }
//             else {
//                 reject(['akole', 'sangamner'])
//             }
//         }, 1000)
//     })
// }
// createUser().then(function (A) {
//     console.log(A)
//     return getUserId() //return promise  for consume promise .then
// })
//     .then(function (B) {
//         console.log(B)
//         return getUserInfo()
//     })
//     .then(function (C) {
//         console.log(C)
//     })
//     .catch(function (str) {  //
//         console.log(str)
//     })
//     .finally(function () {
//         console.log('i will run')
//     })

//ASYNC FUNCTION
// function createUser() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if ('user created') {
//                 resolve(['user created'])
//             }
//             else {
//                 reject(['user not created'])
//             }
//         }, 3000)
//     })
// }
// function getUserId() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if ('userId') {
//                 resolve(['get user id'])
//             }
//             else {
//                 reject(['user id not found'])
//             }

//         }, 2000)
//     })
// }
// function getUserInfo() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if ('userInfo') {
//                 resolve(['get user Info'])
//             }
//             else {
//                 reject(['user Info not found'])
//             }
//         }, 1000)
//     })
// }

//this is new method for async call sync
// let getInfo = async function () {
//     let a = await createUser()
//     console.log(a)
//     let b = await getUserId()
//     console.log(b)
//     let c = await getUserInfo()
//     console.log(c)
// }
// getInfo()






// https://reqres.in/api/users?page=2
//https://reqres.in/api/users/2


// function getUserInfo(pageNumber){

//     let request = new XMLHttpRequest()
//     request.open('GET',`https://reqres.in/api/users?page=${pageNumber}`)
//     request.send()

//     request.addEventListener('load',function(){
//        //console.log( this.responseText)
//        let obj = JSON.parse(this.responseText)
//        console.log(obj)
//        let id = obj['data'][0]['id']

//        let request = new XMLHttpRequest()
//        request.open('GET',`https://reqres.in/api/users/${id}`)
//        request.send()
//        request.addEventListener('load',function(){
//         let obj = JSON.parse(this.responseText)
//         console.log(obj.data)
//        })
//     })
// }
// //getUserInfo(2)

// function getUsers(pageNumber){
//     return fetch( `https://reqres.in/api/users?page=${pageNumber}`)
// }
// function getUserinfo(id){
//     return fetch(`https://reqres.in/api/users/${id}`)
// }

// //async await
// let getInfoForSingleUser = async function(){
//     let response = await getUsers(2)
//     let obj = await response.json()
//     let id = obj['data'][0]['id']
//     let responseB = await getUserinfo(id)
//     let objB= await responseB.json()
//     console.log(objB.data)
// }
// getInfoForSingleUser()



