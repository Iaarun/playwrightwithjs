/*
const data = require("./sample.json");
console.log(data);
console.log(data.key) 
console.log(data.array[2]) 
console.log(data.nested.literals)

// object to string conversion
const data1 = JSON.stringify(data)
console.log(data1)
console.log(data1.key)

// string to object conversion
const data2 = JSON.parse(data1)
console.log(data2)

*/
// xlsx module reading excel file in js

const xlsx = require("xlsx");  
// filename
const workbook = xlsx.readFile("TestData.xlsx");
 const sheetName =workbook.SheetNames[0]
  const wsheet = workbook.Sheets[sheetName]

 const jsonData= xlsx.utils.sheet_to_json(wsheet);
console.log(jsonData)

jsonData.forEach((row)=>{
    console.log(`Name: ${row.firstName}, Age: ${row.lastname}, City: ${row.Department}`)
}       
)

console.log(jsonData[0].firstName)
console.log(jsonData[0].lastname)
console.log(jsonData[0].Department)
