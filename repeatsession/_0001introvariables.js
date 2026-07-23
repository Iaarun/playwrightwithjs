console.log("Hello World!!!")
// variables
// redeclaration is allowed
var num = 5
//console.log(num)  
var num = 25
console.log(num)

// redeclaration of variable is not allowed , reassigning is allowed
let a = 20;
console.log(a)
//let a = 30  // redeclaration

a = 30  //re assigning  is allowed
console.log(a)

// redeclaration and re assigning is not allowed
const n = 100;
console.log(n)

// n = 200
// console.log(n)

let name = 100.12
console.log(typeof name)
 name = Symbol('@')
console.log(typeof name)