/* functions: block of code to perform specific task.
   modularize, organize and enhance reusability
*/

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

