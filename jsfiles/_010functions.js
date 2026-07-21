/* functions: block of code to perform specific task.
   modularize, organize and enhance reusability
*/

// Named functions
//non parameterised non returning function
function sayHello(){
  console.log("Hello! Arun")
}
//sayHello()

// parameterised function
function sayHello1(name){
    console.log("Hello "+name)
}
 sayHello1()
// sayHello1("Virat")

 //default  parameterised function
function sayHello2(name="Sachin"){
    console.log("Hello "+name)
}

//returning functions
console.log(sayHello())

function sum(a, b){
    return a+b
}

let add = sum(10,15)
console.log(add+10)

// write a function to calcute the simple intrest pa, time, roi
function simpleInterest( pa, time=1, roi=5){
    return (pa*roi*time)/100 

}

// Anonymous functions
let sayhi= function() {
    return "Hello JS" 
}

console.log(sayhi())
// function expression
let squareofnum = function square (a){
    return a*a
}
console.log(squareofnum(5))

//Arrow function
let add1 = (a,b) => a+b
 
console.log(add1(10,35))

// function overoading
function sayHello2(name, age){
    console.log("Hello "+name+" and I am "+age+" old")
}

