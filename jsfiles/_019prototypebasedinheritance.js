// prototype based inheritance- saves the memory , allows dynamic changes at run time

// using protoype chain
function Animal(name){
    this.name = name
}

Animal.prototype.speak= function(){
    console.log(`${this.name} makes a sound.`)
}

Animal.prototype.eat = function(){
    console.log(`${this.name} is eating.`)
}

const dog = new Animal("Dog")
dog.speak()
dog.eat()

// using __proto__ chain

let Bird = {
    canfly: true
}

let Parrot = {
    birdType: "Parrot"
}

// setting up the bird prototype in parrot object
//Parrot.__proto__ = Bird
console.log(Parrot.canfly) // true  
console.log(Parrot.birdType) // Parrot


// Object.setPrototypeOf() method

let Fish = {
    canSwim: true
}

let Goldfish = {
    fishType: "Goldfish",
   // canSwim: true not needed to create , to avoid code duplicacy 
}

Object.setPrototypeOf(Goldfish, Fish)
console.log(Goldfish.canSwim) // true
console.log(Goldfish.fishType) // Goldfish