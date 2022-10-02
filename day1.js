let sach = ["ganore","akole","virgaon","sangamner"]
 sach.unshift("nagar")
 sach.push("pune")
 sach.pop()
 sach.shift()
//console.log(sach)

let marks = [11,22,33,44,55]
let a = marks.map(function(el,index,arr){
 return el*3
})
console.log(a)

let b = marks.filter(function(el){
    return el >32.9
})
console.log(b)

let c = marks.reduce(function(acc,el){
    return acc + el
},0)
console.log(c)


marks.forEach(function(el){
   console.log(el+2)
})
console.log(marks.includes(11))
 let names = ["sachin","manoj","rahul"]
 console.log(names.indexOf("rahul"))


 let aa = [11,22,33]
 let bb = [44,55,66]

 console.log(aa.concat(bb))


 let dd = [[1,2,3],[4,5,6],[7,8,9]]
 console.log(dd.flat())


 let cities = ["sangamner","akole","pune","mumbai"]
 console.log(cities.sort())
 console.log(cities.reverse())
//  console.log(cities.join('$'))
//  console.log(cities.fill("#",1,3))

//array destruction

let namess = ["sachin", "rahul", "sanket", "pankaj"]
let [aaa, bba, cc,mm] = namess
console.log(aaa)
console.log(bba)
console.log(cc)
console.log(mm)

//object destruction
let info ={
    firstname:"sachin",
    lastname:"datir",
    age:22
}
let{firstname,lastname,age}=info
console.log(firstname)
console.log(lastname)
console.log(age)

let info1 = {
    firstName : "sachind",
    lastName : "datir",
    age:21,
    rollno:10

}
