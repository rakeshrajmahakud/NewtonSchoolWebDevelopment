// JS Promise - 2
// Easy

// Time Limit: 2 sec
// Memory Limit: 128000 kB
// Problem Statement
// Complete the function checkCanIVote
// Such that it takes a number as first argument(time) and a number as second argument(age).
// It returns a promise which resolves or rejected after time milliseconds and if age >= 18
// it resolves to "You can vote" else it rejects to "You can not vote".

// Note:- You only have to implement the function, in the example it
// shows how your implemented question will be ran.
// Input
// Function will take two arguments

// 1) 1st argument will be a number which tells after how much milliseconds promise will be resolved or rejected.
// 2) 2nd argument will be a number (age)
// Output
// Function returns a promise which resolves to "You can vote" or rejects to "You can not vote".
// If age >= 18 resolves to "You can vote" else rejects to "You can not vote".
// Example
// checkCanIVote(200, 70). then(data=>{
// console. log(data) // prints 'You can vote'
// }).catch((err)=>{
// console.log(err) // does not do anything
// })
// checkCanIVote(200, 16). then(data=>{
// console. log(data) // does not do anything
// }).catch((err)=>{
// console.log(err) // prints 'You can not vote'
// })







function checkCanIVote(num,age) {

    // return the output using return keyword
    // do not console.log it
	return new Promise((resolve,reject)=>{
		if(age>=18){
			resolve("You can vote")
		}
		else{
			reject("You can not vote")
		}
	})

}