
function welcome(name, callback){
    console.log("Hello "+name)
    callback()
}

function sayBye(){
    console.log("Bye ! Take care")
}
//welcome("Arun", sayBye)


function calculate(a, b, callback){
    return(callback(a,b))
}


function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function mul(a,b){
    return a*b
}

function divide(a,b){
    return a%b
}


console.log(calculate(10,5, add))
console.log(calculate(10,5, mul))
console.log(calculate(10,5, sub))
console.log(calculate(10,5, divide))
