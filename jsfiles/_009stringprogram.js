function toTitlecase(){
str1 = "Hello World i love rading js"
let words =  str1.toLowerCase().split(" ")
for(let i=0; i<words.length;i++){
      words[i]=  words[i].charAt(0).toUpperCase() + words[i].slice(1)
}
   return words.join(' ')
}

console.log(toTitlecase())