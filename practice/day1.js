let city ="pune"
let rev =""
for(let i=0;i<city.length;i++){
    console.log(city[i])
    rev= city[i]+rev 
}
console.log(rev)

//split method

let info = "sachin datir 9146753015"
let a = info.split(" ")
console.log(a)

let r = info.split("9146")
console.log(r)

//replace

let info2 = "i am learning java"
let rrr = info2.replace("java","testing") 
console.log(rrr)

let skd = "i am sachin"
let kgf = skd.replace("sachin","sachin datir")
console.log(kgf)


//if or else statement
let numberoftickets = 10
if(numberoftickets>0 && numberoftickets<=5){
    console.log('5 % discount')
}
if(numberoftickets>5 && numberoftickets<=10){
    console.log('10 % discount')
}