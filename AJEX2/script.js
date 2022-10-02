let con = document.querySelector('#container')
function renderHtml(el) {
    let html = `
        <div>
            <p>${el.id}</p>
            <p>${el.first_name}</p>
            <p>${el.last_name}</p>
            <p>${el.email}</p>
            <img src = "${el.avatar}"/>
        </div>
    `
    con.insertAdjacentHTML('beforeend', html)

}


function getUserInfo(pageNumber) {

    let request = new XMLHttpRequest()
    request.open('GET', `https://reqres.in/api/users?page=${pageNumber}`)
    request.send()

    request.addEventListener('load', function () {
        let obj = this.responseText // json string
        obj = JSON.parse(obj)
        let id = obj.data[0].id
        let request = new XMLHttpRequest()
        request.open('GET', `https://reqres.in/api/users/${id}`)
        request.send()

        request.addEventListener('load', function () {
            let obj = this.responseText
            obj = JSON.parse(obj)
            user = obj.data
            renderHtml(user)

        })




    })



}

getUserInfo(2)