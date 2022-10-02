//synchronous execution
function Addone() {
    console.log('one')
}
function Addtwo() {
    console.log('two')
}
// Addtwo()
// Addone()

//async execution(non blocking in nature)
///program
function Addthree() {
    setTimeout(function () {
        console.log('three')
    }, 2000)
}
function Addfour() {
    setTimeout(function () {
        console.log('four')
    })
}
// Addthree()
// Addfour()


///async code sync manage

function getUser() {
    setTimeout(function () {
        console.log('user created')
    }, 3000)
    setTimeout(function () {
        console.log('getuserid')
    }, 2000)
    setTimeout(function () {
        console.log('get user info')
    }, 1000)
}
getUser()