function renderHtml(obj) {
    let con = document.querySelector('#container')
    let html = `
  <div>
  <h2>${obj.id}</h2>
  <p>${obj.first_name}</p>
  <p>${obj.last_name}</p>
  <p>${obj.email}</p>
  <img src ="${obj.avatar}">
  </div>
  `
    con.insertAdjacentHTML('beforeend', html)
}

function Pagewise(pageNumber) {
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then((res) => {
            return res.json()
        }).then((res) => {
            res.data.forEach(element => {
                renderHtml(element)
            });
        })
}
// Pagewise(1)

function GetsigleUser(pageNumber) {
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then((res) => {
            return res.json()
        }).then((res) => {
            return res.data[1].id
        })
        .then((id) => {
           return fetch(`https://reqres.in/api/users/${id}`)
        })
        .then(function (res) {
            return res.json()
        }).then((res)=>{
            renderHtml(res.data)
        })
}
GetsigleUser(1)