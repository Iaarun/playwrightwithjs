// encapsulation is bunding the data and the methods in a single unit and restricting the direct access.
// getter and setter function
class Person{
    #name
    #age
   
    setName(name){
        this.#name = name
    }
   
    setAge(age){
        if(age>0 && age<100){
        this.#age = age
        }else{
            throw new Error("Age must be between 0 and 100")
        }
    }

    getName(){
        return this.#name
    }

    getAge(){
        return this.#age
    }

}

// direct access to the property
const p1 = new Person("Rahul", 30)

p1.setName("Rahul")
p1.setAge(2323232)
console.log(p1.getName())
console.log(p1.getAge())