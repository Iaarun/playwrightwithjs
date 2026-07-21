// object - its a dynamic data structure which store data in key value pair
// creating object using literal
let abc = {
    name: "Arun",
    job: "Trainer",
    experience: 13
} 
//console.log(abc)
//console.log(abc.name)
//console.log(abc.job)

let obj1 = new Object()
obj1.name = "Virat"
obj1.job="Criketer"
obj1.experience=15
obj1.age=38

console.log(obj1)
obj1.name = "Sachin"

console.log(obj1.name)
obj1.bornyear = 1985
console.log(obj1)
//iterating over the object

for( let key in obj1){
    console.log(key+": "+obj1[key])
}

console.log(Object.keys(obj1).length)


// class learnjs {

// }

// let js = new learnjs()
// console.log(typeof js)