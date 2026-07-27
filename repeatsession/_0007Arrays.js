//Arrays  , these are index based 
// array declaration using literals
const fruits = ['apples', 'banana', 'papaya']
console.log(typeof fruits)
console.log("Length of fruits array: "+fruits.length)
console.log(fruits[1])

// array declaration using constructor
 const vegies = new Array()
 console.log(typeof vegies)
 console.log("Length of vegies array: "+vegies.length)

 vegies.push("potato") // push function always adds data in the end of the array
vegies.push("tomato")
vegies.unshift('onion') // add data in the begining
vegies[3] = 'pumpkin'
 //console.log(vegies)
// vegies.pop() // remove data from end
// vegies.shift() // remove data from the begining
console.log(vegies)
vegies.sort() // sort data in ascending order
console.log(vegies)

const reversearr= vegies.toReversed()
console.log(reversearr)

//slice - creata shallow copy of portion or array

console.log(vegies.slice(2))
// index of 
console.log(vegies.indexOf('pumpkin12'))

vegies.push('onion')
console.log(vegies)
console.log(vegies.indexOf('potato'))
console.log(vegies.lastIndexOf('potato'))

//filter
let result= vegies.filter((veg)=> veg.length >=7)
console.log(result)
// iterate over array
console.log('****** using for loop******')
for(let i=0; i<=vegies.length-1; i++){
    console.log(vegies[i])
}

console.log('****** using for in loop (to get indexes)******')
for( let data in vegies){
    console.log(data+": "+vegies[data])
}

console.log('****** using for of loop (to get values)******')
for( let data of vegies){
    console.log(data)
}

console.log(vegies[1])

console.log(fruits)
console.log(vegies)
//let newarr= fruits.concat(vegies)
//console.log(newarr)
console.log(...fruits, ...vegies)