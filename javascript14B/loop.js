//  LOOP

// for(intilialzation ; conditionCheck ; increment/decrement){
//     //statments
// }

// // intilization 

// while(condition){
//     // statments 
//     // increment/ decrement
// })

// if else
// 5 chances --- coin toss - head break  finite chance  ======> for loop
// toss until  the head comes ----- chances till condition is mate ===> while loop

// console.log(Math.floor(11.5))  give lower value
// console.log(Math.ceil(12.5)) give higher value
// console.log(Math.round(13.5)) if o.5 it will give higher ,,,if lower then 0.5 giver lower value
// console.log(Math.round(13.4))if lower then 0.5 giver lower value
// console.log(Math.floor(Math.random()*6)+1) 1to6

// let randomNumber = Math.floor(Math.random() * 6) + 1
// console.log(randomNumber)
// let userInput = prompt('Enter any number between 1 to 6')
// if(randomNumber==userInput){
//     console.log('Guess is correct ')
// }
// else{
//     console.log('guess is incorrect')
// }
let randomNumber = Math.floor(Math.random() * 6) + 1
console.log(randomNumber)
for (let i = 0; i <= 5; i++) {
    let userInput = prompt('Enter any number between 1 to 6')
    if (randomNumber == userInput) {
        console.log('Guess is correct ')
    }
    else {
        console.log('guess is incorrect')
    }

}
//   cd javascript14B
//    node loop.js