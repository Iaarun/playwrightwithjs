/*
Assignment operator  = += -= *=
Arithmetic operator + - * / %
comparison == > < >= <=
ternary operator
unary operators

*/
//Arithmetic
let a = 20
let b = 10
 console.log(a+b)
 console.log(a-b)
 console.log(a*b)
 console.log(a/b) //returns quotient
 console.log(a%b) // returns remainder

//Assignment operator

let n = 10
// n = n+2
  n +=2
  console.log(n)
  n *=2
  console.log(n)
  n -=2
  console.log(n)
  n %=2
  console.log(n)


  //logical operator  &&(AND) ||(OR)
  const x = false, y = true
  console.log(x && y)
  console.log(x || y)

  //ternary operator
  // (condition)? statement1 : statement2
  let age = 15
  let status = (age>=18)? "Adult":"Minor"
  console.log(status)

  //unary operator  x++   X--

  let n2= 10
  console.log(++n2) //11
  console.log(n2) //11
  console.log(n2++) //11
  console.log(n2) //12

  // comparison operators
  let n3 = 25, n4 = 35
  console.log(n3==n4)
  console.log(n3>=n4)
  console.log(n3<=n4)
  console.log(n3>n4)
  console.log(n3<n4)



