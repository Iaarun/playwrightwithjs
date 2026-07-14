//calculate sum of all elements in an array
   let arr = [1,2,3,4,5,10,7,8,9]; 
   let sum =0
   for (let i=0;i<arr.length;i++){
    sum += arr[i];
   }
    console.log("Sum of all elements in an array is: "+sum);

    arr.forEach(x=> sum += x);
    console.log("Sum of all elements in an array is: "+sum);

    // find max value in array
    arr = [4,5,10,7,8,9]; 
    let max = arr[0];
    arr.forEach(x=> {
    if(x>max){
        max = x         
    }
    });
    console.log("Max value in the array is: "+max);
    // findsecond max value of array
    max=Number.MIN_SAFE_INTEGER;
   let secondMax=Number.MIN_SAFE_INTEGER;
   arr.forEach(x=>{
    if(x>max){
        secondMax=max;
        max=x;
    }else if(x>secondMax && x!=max){
        secondMax=x;
    }
    });
console.log("Second max value is :"+secondMax)


let fruits = ["Banana", "Orange", "Apple", "Mango","Mango"];
console.log(fruits.indexOf("Apple",-1))
