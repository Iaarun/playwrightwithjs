// forloop while loop do while loop
/*
  for(initialization; condition; increment/decrement) {
    // code to be executed
  }
*/
 for (let i=1; i<=10; i++) {
    console.log(i*2);
 }

 // write a program to print even numbers from 1 to 10
 console.log("Even numbers from 1 to 10:");
  for(let i=1; i<=10;i++){
    if(i%2 != 0){
      console.log(i);
    }
  }

  console.log("Nested for loop ");
  
  // out for loop for rows
  for(let i=1; i<=3; i++){
    let star = "";
    //inner for loop for columns
    for(let j=1; j<=4; j++){
      star += "* ";
    }
    console.log(star);
  }

console.log("Star Pattern 2");

   for(let i=1; i<=3; i++){
    let star = "";
    //inner for loop for columns
    for(let j=1; j<=i; j++){
      star += "* ";
    }
    console.log(star);
  }


  console.log("Star Pattern 3");

   for(let i=3; i>=1; i--){
    let star = "";
    //inner for loop for columns
    for(let j=1; j<=i; j++){
      star += "* ";
    }
    console.log(star);
  }


  console.log("**** While loop ****");
  let i=1;
  while(i<=10){
    if(i%2==0){
        console.log(i);     
    }
    i++;
  }

  console.log("****do  While loop ****");

  let j=1;

  do{
    console.log(j);
    j++;        
  } while(j>=10)

    