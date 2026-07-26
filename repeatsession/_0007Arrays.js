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

 vegies.push("patato") // push function always adds data in the end of the array
vegies.push("tomato")
vegies.unshift('onion') // add data in the begining
vegies[4] = 'pumpkin'
 console.log(vegies)
 vegies.pop() // remove data from end
 vegies.shift() // remove data from the begining
  console.log(vegies)