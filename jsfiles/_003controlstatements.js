/*
// if else
    /*
if(condition){
  code block to be executed if condition is true
}else{
    code block to be executed if condition is false
}

var age = 16;
if(age >= 18){
    console.log("You can vote");
}else{
    console.log("You cannot vote");
}

//nested if else
let isloggedIn= true;
let hasSubscription = false;
if(isloggedIn){
    if(hasSubscription){
        console.log("You are logged in and have a subscription");
    }else{
        console.log("You are logged in but do not have a subscription");
    }
}else{
    console.log("You are not logged in");
}

//ladder if else
   let checksignallight = "yellow"; 

if(checksignallight === "red"){
    console.log("Stop");
} else if(checksignallight === "yellow"){
    console.log("Get ready");
} else {
    console.log("Go");
} 
*/
/* design a Grade system 
if percentage is greater than 90 then print A, 
if percentage is greater than 80 then print B, 
if percentage is greater than 70 then print C, 
if percentage is greater than 60 then print D, 
if percentage is less than 60 then print F*/

/*
switch(expression){
  case value1:
    code block to be executed if expression === value1
    break;
`
    case value2:
        code block to be executed if expression === value2
        break;
        
    default:
        code block to be executed if expression doesn't match any case
        break;
    }

*/

let dayofweek="Saturday";
switch(dayofweek){
    default:
        console.log("No office today");
        break;
    case "Monday":
        console.log("Wear formals");
        break;
    case "Tuesday":
        console.log("Wear formals");
        break;
    case "Wednesday":
        console.log("Wear formals");
        break;
    case "Thursday":
        console.log("Wear formals");
        break;
    case "Friday":
        console.log("Wear casuals");
        break;
    
}