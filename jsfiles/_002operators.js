//Assignment 

var a = 10;
console.log(a); // Output: 10

var b = 5;

// b = a+b;
b+= a; // This is equivalent to b = b + a;
console.log(b); // Output: 15

//comparison operators
var x = 10;
var y = 20;
console.log(x > y); // Output: false
console.log(x < y); // Output: true
console.log(x >= y); // Output: false
console.log(x <= y); // Output: true
console.log(x == y); // Output: false
console.log(x != y); // Output: true    

//logical operators
console.log("******************"); // Output: true

var a = true;
var b = false;
console.log(a && b); // Output: false
console.log(a || b); // Output: true

//ternary operator

// condition ? exprIfTrue : exprIfFalse
var age = 16;
var canVote = age >= 18 ? "You can vote" : "You cannot vote";
console.log(canVote); 

//find max of three numbers using ternary operator
var num1 = 10;
var num2 = 20;
var num3 = 35;
var max = num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
console.log(max); 

//Arithmetic operators
console.log("******************"); 
var num1 = 10;
var num2 = 3;

console.log(num1 + num2); // Output: 13
console.log(num1 - num2);       
console.log(num1 * num2); // Output: 30
console.log(Math.floor(num1 / num2)); // returns quotient  
console.log((num1 / num2).toFixed(2)); // returns quotient with 2 decimal places
console.log(num1 % num2); // Output: 1 // return remainder

console.log("*******************");
//operator overloading
console.log(2+5);
console.log("Hello "+123);

//increment and decrement operators
var num = 10;
console.log(num);
//num++; // num+1
console.log(num++); 

console.log(++num); 

var numb2 =10

//console.log(numb2++ + ++numb2); 
var result = ++numb2 + numb2++;
console.log(result);
console.log(numb2);

--numb2;
numb2--;



//bitwise operators
var a = 5;
var b = 3;
console.log(a & b); // Output: 1
console.log(a | b); // Output: 7
console.log(a ^ b); // Output: 6