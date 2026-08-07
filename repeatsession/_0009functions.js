// non parameterised non returning function

//Named function
function sayHello(){
  console.log("Hello World!!")  
}

//sayHello()
// parameterised function
function greetings(name){
    console.log(`Hello ${name}`)
}

//greetings("Virat")

// default parameter
function add(a=10, b=10){
    console.log(a+b)
}
let num = add(54,32)
console.log(num)

//(a+b)-c
// returning function
function addition(a,b){
    sum= a+b
    return sum;
}
 addition(54,32)
 console.log(sum)
 // how to take multiple inputs in a function

 //Anonymous function
 let greet= function(){
    return "Hello World!!"
  }

  console.log(greet)
  console.log(greet())

  // function expression
  let subtract= function sub(a,b){
    return a-b
  }

 // Arrow function  = ES6

 let cube = n => n*n*n
 console.log(cube(5))

 // callback function

 function welcome(name, callback){
         console.log(`Hello ${name}`) 
         callback()        
 }

 function saybye(){
    console.log("Good bye! See you later.")
}

welcome("Arun", saybye)



