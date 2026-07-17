// string is a sequence of characters
//declaration of string object using literal
//string are immutable

let str1 = "Hello world!!"
console.log(str1)
str1.replace("world!!", "JS")
console.log(str1)
let str2 = "Hello world!!"
//console.log(str1)
//console.log(str1[0])

// create string using constructor
 let str3 = new String ("Hello JS!!")
 console.log(str3)
let str4 = new String ("Hello JS!!")
console.log(str1 === str2) //true
console.log(str3 === str4) //false
//check the object type
console.log(typeof str1)
console.log(typeof str3)

//string functions
let str5 = "Namaste JS!, I love reading js"
console.log(str5[0])
console.log(str5[str5.length-1])
console.log(str5.length)
// substring

console.log(str5.substring(8))
console.log(str5.substring(8,28))

//slice
console.log(str5.slice(8,28))

console.log(str5.substring(8,0))
console.log(str5.substring(0,8))
console.log(str5.slice(8,0))
 // replace
 let str6 = "Mind, Power, focus, focus, focus"
let rep1= str6.replace("focus","Peace")
 console.log(rep1)

 //replaceall
let repl= str6.replaceAll("focus", "peace")
console.log(repl)

str5 = "Namaste JS!, I love reading js"
console.log(str5.toLowerCase())
console.log(str5.toUpperCase())

//convert any given strign in title case "namaste js i love reading js"
//split function
 let newstr= "namaste js i love reading js"
 let sbstrarr = newstr.split(" ")
 console.log(sbstrarr)

 let str7=" Namaste JS! "
 let str8 = "I love reading js"
 console.log(str7+" "+str8)

  console.log(str7.match("JS"))
  console.log(str7.trimEnd())
// concat
let str9 = str7.concat(str8)
console.log(str9)
//startswith
console.log(str9.trimStart().startsWith("Namaste JS"))
console.log(str9.endsWith("js"))
//indexof
console.log(str9.indexOf("reading"))
// abcxyz@gmail.com    Hello abcxyz

emailstr = "abcxyz@gmail.com"
let estr= emailstr.split("@")
console.log("Hello ".concat(estr[0]))
console.log("Hello ".concat(emailstr.substring(0,emailstr.indexOf("@"))))



   

