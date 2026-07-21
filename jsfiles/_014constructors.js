// constructor - its a collection of relaated data and functionality stored in key value pair

function Person(name, age){
    this.name = name
    this.age = age
    this.sayHi = function(){
        console.log(`My name is ${this.name} and age is ${this.age} years`)
    }

}

const p1 =  new Person("Ajay", 35)
p1.sayHi()

const p2 = new Person("Rahul",31)
p2.sayHi()