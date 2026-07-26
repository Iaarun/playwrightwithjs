   //if else
    /*
      if(condition){
        code block 1
      }else{
       code block2
        }
   */
  let num =54
  if(num>=0){
    console.log("Positive number")
  }else{
    console.log("Negative number")
  }

  num = 34
  if(num%2 == 0){
    console.log("Even number")
  }else{
    console.log("odd number")
  }

  // nested if else

    let age = 16
    let isTestclear = false

    if(age>=18){
        console.log("Have  you cleared the test")
        if(isTestclear){
            console.log("congratulations you will recieve you DL")
        }else{
            console.log("Need to clear test first")
        }
    }else{
       console.log("Minors Not allowed")
    }

    
    let isloggedIn = false
    let userrole = 'admin123'

    if(isloggedIn){
        console.log("User logged In")
        if(userrole === 'admin'){
            console.log("Admin access granted to user")
        }else{
            console.log("Standard user access")
        }
    }else{
        console.log("Please log In")
    }

   //ladder if  if-else-if
   
   let signalstatus= "red"

   if (signalstatus === 'green'){
    console.log("GO Through")
   }else if(signalstatus === 'red'){
    console.log('STOP')
   }else if(signalstatus ==='orange'){
    console.log('Ready to Go')
   }else{
    console.log('Traffic signal is nto working')
   }
   //design a program for calculating the grade
   /*
   if score>=90 && score <=100grade A
   if scroe >= 80 grade B
   if score >= 70 grade C
    if score >=50 grade D
    else gread F
   */

    //swtichcase
    const userinput = require('prompt-sync')()
    let fruits = userinput('which fruit do you want ')
    switch (fruits){
        case 'papaya':
            console.log('papaya is 30')
            break
        case 'apple':
            console.log('apples are 300')
            break
        case 'mango':
            console.log('mango is 200')
            break
        default:
            console.log(`${fruits} not available`)    

    }