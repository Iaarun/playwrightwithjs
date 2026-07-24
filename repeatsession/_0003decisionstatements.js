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