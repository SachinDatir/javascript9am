//call back hell

//async==sync

//getuserbypage
//https://reqres.in/api/users?page=2
///takeoutid
//https://reqres.in/api/users/2

// let con = document.querySelector('#container')
// function renderHtml(obj) {
//     let html = `
//         <div>
//             <p>${obj.id}</p>
//             <p>${obj.first_name}</p>
//             <p>${obj.last_name}</p>
//             <p>${obj.email}</p>
//             <img src = "${obj.avatar}"/>
//      </div>
//     `
//     con.insertAdjacentHTML('beforeend', html)

// }
// function getUserInfo(pageNumber) {

//     let request = new XMLHttpRequest()
//     request.open('GET', `https://reqres.in/api/users?page=${pageNumber}`)
//     request.send()

//     request.addEventListener('load', function () {
//         let obj = this.responseText // json string
//         obj = JSON.parse(obj)
//         let id = obj.data[0].id
//         let request = new XMLHttpRequest()
//         request.open('GET', `https://reqres.in/api/users/${id}`)
//         request.send()
//         request.addEventListener('load', function () {
//             let obj = this.responseText
//             obj = JSON.parse(obj)
//             user = obj.data
//             renderHtml(user)
//         })
//     })
// }

// getUserInfo(2)


//promises  async  --- sync

function getUser3(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
}
function getUserAfterId(id){
    return fetch(`https://reqres.in/api/users/${id}`)
}
getUser3(2)
.then(function(response){
    return response.json()
}).then(function(obj){
    id = obj.data[0].id
    return id
}).then(function(id){
    return getUserAfterId(id)
}).then(function(response){
    return response.json()
}).then(function(obj){
    //console.log(obj.data)
  renderHtml(obj.data)
})