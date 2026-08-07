// using object literal

let obj = {
    name:"Java",
    launchyear: 1995,
    country: "USA"
}
obj.createdby = "James Gosling"

delete obj.launchyear
console.log(obj)
// check if a property exist in a object
console.log(obj.hasOwnProperty("launchyear"))
 
console.log(obj['name'])
// iterate through object

for (let k in obj){
    console.log(k+": "+obj[k])
}
    
// using object constructor

let obj1 = new Object()
obj1.name1 = "JavaScript"
obj1.country1 = "USA"
obj1.createby1 = "Brendan"

console.log(obj1)

// merge two objects

let obj2 = {...obj, ...obj1}
console.log(obj2)

// object length
console.log(Object.keys(obj2).length)