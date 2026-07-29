// string is the sequence of character immutable
// two ways to create string object: 1- using literal 2 - using string object

// using literal
let name = 'js'
name = "Arrays"
console.log(`${name} is 'js' provided`)
console.log(typeof name)

let str1 = "Hello JS"
let str2 = "Hello JS"
// using object
let str3 = new String("Hello JS")
let str4 = new String("Hello JS")

console.log(str1 == str2) //true
console.log(str1 === str2) //true
console.log(str3 == str4) //false
console.log(str3 === str4) //true
console.log(str1 == str4) //false
console.log(str1 === str4) //true // need to check 

// string functions
let str5 = "this is String Data"
console.log(str5.toLowerCase())
console.log(str5.toUpperCase())
// convert the string into title case - This Is String Data
// length property
console.log(str5.length)
console.log(str5[3])
console.log(str5.indexOf("s"))//return the index of first occurance
console.log(str5.lastIndexOf("s")) 

console.log(str5+" for practice")
str6= " for JS practice"
str5= (str5.concat(str6))
console.log(str5)
console.log(str5.substring(6, -10))// 6,0  start > end
console.log(str5.substring(0, str5.length))

//str.length+ (-10)
//slice
console.log(str5.slice(5,-3))
//replace
let str7= "  this is a Test string, use string for Test  "
//console.log(str7.replace("string","data"))
console.log(str7.replaceAll("string","data"))
// remove whitespace
console.log(str7)
console.log(str7.trim())
console.log(str7.trimEnd())

// includes

console.log(str7.includes("test"))
console.log(str7.search(/test/i))

//charat
console.log(str7.charAt(8))

//split
str7= "this is a Test string, use string for Test"
let words= str7.split(" ")
console.log(words)

console.log(str7.startsWith("this"))
console.log(str7.endsWith("es"))

/* string reverse 
i/p = thisistestdata

0/p = atadtsetissiht

*/