var name = "John Doe";
console.log("Name: " + name);

//redeclare the variable with a new value
var name = "Jane Smith";
console.log("Updated Name: " + name);

//let   it does not allow redeclaration in the same scope

let age = 30;
console.log("Age: " + age);

//let age=35; // This will throw an error because 'age' has already been declared in the same scope
age = 35; // This is allowed, we are just updating the value
console.log("Updated Age: " + age); 

//const 

const Country = "USA";
console.log("Country: " + Country);

//const country = "Canada"; // This will throw an error because 'country' is a constant and cannot be redeclared
// country = "Canada"; // This will also throw an error because 'country' is a constant and cannot be reassigned

const country = "Canada"; 
console.log("Updated Country: " + country);

//Data Types
 let n = 15;
 console.log(typeof n); // number

  name = "Hello";
 console.log(typeof name); // string

 let isAvailable;
 console.log(typeof isAvailable); // boolean

 let isempty=null;
 console.log(typeof isempty); // object 

 let a = 54949514164626496n;
 console.log(typeof a); // number

 let sym = Symbol("id");
console.log(typeof sym); // symbol

let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // object

function greet() {
  console.log("Hello, World!");
}

greet();    
console.log(typeof greet); // function