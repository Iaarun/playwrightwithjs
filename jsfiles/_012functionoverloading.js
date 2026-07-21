// function overloading mutiple same name function with different number of parameter

function sayHello2(name="Sachin"){
    console.log("Hello "+name)
}


function sayHello2(name, age){
    console.log("Hello "+name+" and I am "+age+" old")
}

sayHello2("Arun")

class testoverloading {
    overloadedfunction(){
      let function1 =   function (name){
            console.log("Hello "+name)
            return name
         }

          let function2 =   function (name,age){
            console.log("Hello "+name+" and I am "+age+" old")
            return name +" "+ age
         }

         let function3 = function(){
            
         } 
    }


}