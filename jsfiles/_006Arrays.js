/*
let arr =[]
console.log(arr.length);
console.log(arr);
//creating an array with values(literal notation)
let arr1 = [1,2,3,4,5]; 
console.log(arr1.length);
console.log(arr1);
console.log(arr1[arr1.length-1]);
*/
//creating an array with values(constructor notation)or new keyword
let arr2 = new Array(12,13,14,15,16);
console.log(arr2.length);
console.log(arr2);
console.log(arr2[arr2.length-1]);

let arr3 = new Array(5); //creating an array with 5 empty slotss
console.log(arr3.length);
arr3[0] = 1;
arr3[1] = 2;
arr3[2] = 3;
arr3[3] = 4;
arr3[4] = 5;
arr3.push(12); // adding an element at the end of the array
console.log(arr3.length)
console.log(arr3);
arr3.unshift(11); //adding an element at the beginning of the array
console.log(arr3.length)
console.log(arr3);
console.log("POP function")
arr3.pop(); //removing an element from the end of the array
console.log(arr3);
console.log("SHIFT function")
arr3.shift(); //removing an element from the beginning of the array
console.log(arr3);
//slice function
let arr4 = [1,10,3,10,5,6,7,8,9];
//console.log(arr4.slice(1,5));
console.log(arr4.length)
//arr4.length=10
console.log(arr4)

console.log(arr4.findIndex(num => num>9))
console.log(arr4.findLastIndex(num => num>9))

// iterating over an array usinf  
console.log("Iterating over an array using for loop")
for(let i=0;i<=arr4.length;i++){
    console.log(arr4[i]);
}
console.log("Iterating over an array using while loop")
let i=0;
while(i<arr4.length){
    console.log(arr4[i]);
    i++;
}

console.log("Iterating over an array using for of loop")

for(let num of arr4){
    console.log(num)
}

