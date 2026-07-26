/*
for 
while
do while

for(initialization; condition; increment/decrement){
  code block
}


const userinput = require('prompt-sync')()

let num = userinput('Display the table of number ')
console.log(`Table  of  ${num}`)

for(let i = 1; i<=10; i++){
    table = num*i
    console.log(table)
}
*/
// write a program to print the sum of even number from 1 - 100
//nested for loop  star pattern program
for (let i=1;i<=3; i++){
    star=""
    for (let j=1; j<=4; j++){
        star = star +"*"
    }
    console.log(star)
}

for (let i=1;i<=4; i++){
    star=""
    for (let j=1; j<=i; j++){
        star = star +"*"
    }
    console.log(star)
}

n=4
for (let i=1;i<=n; i++){
    star=""
    for(let j = 1; j<=n-i; j++){
        star +=" "
    }
    for (let k = 1;k<=i;k++){
        star += "*"
    }
    
    console.log(star)
}

// while loop 
/*
  initialization;
  while(condition){
    code
    increment/decrement
  }
*/

const userinput = require('prompt-sync')()
let num = userinput('Display the table of number ')
console.log(`Table  of  ${num}`)

let j=1
while(j<=10){
    table = num*j
    console.log(table)
    j++
}
console.log("*******Do-while loop*******")
let i=0
do {
    i +=1
    console.log(i)
}while(i>=5)
