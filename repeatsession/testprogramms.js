/* string reverse 
i/p = thisistestdata

0/p = atadtsetissiht
*/

let str8 = "thisistestdata"
console.log(str8[2])
let str=""
for(let i=str8.length-1; i>=0; i--){
    str += str8[i]
}
console.log(str)

let arr= str8.split("").reverse().join("")
console.log(arr)

/*
str = "Wait! Did you buy apples, bananas, and oranges; or-shoud I say, 'fruit'?"
remove all paunctuation from string data

regex = [!\"#\$%&'()*+,\-./:;<=>?@\[\\\]^_{|}~]
*/

 str = "Wait! Did you buy apples, bananas, and oranges; or-shoud I say, 'fruit'?"

let str1 = str.replace(/[!\"#\$%&'()*+,\-./:;<=>?@\[\\\]^_{|}~]/g,"")
console.log(str1)