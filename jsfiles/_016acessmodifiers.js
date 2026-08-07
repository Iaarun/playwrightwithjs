// public private protected

class Person{
    age 
    #name //private
    _country //protected
    constructor(name, age, country){
        this.#name = name
    }
    introduce(){
        console.log(`Hi, my name is ${this.#name} and I am ${this.age} years old.`)
    }

}

const p1 = new Person("John")
p1.age = 25
//p1.#name = "John" // This will throw an error because #name is private
p1._country = "USA" // This is allowed because _country is protected
p1.introduce()

