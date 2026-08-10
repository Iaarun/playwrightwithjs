function Employee(name, age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
    let monthlybonus = 1000;

   let calculateSalary = function(){
        let finalsalary =  salary + monthlybonus;
        console.log(`Final Salary: ${finalsalary}`);
    }

    this.getemployeeDetails = function(){
        console.log (`Employee Name: ${this.name}, Age: ${this.age}`);
        calculateSalary();
    }


}

const emp1 = new Employee("John", 30, 5000);
console.log(emp1.getemployeeDetails());