class Student{
 //properties
  name
  age
  grade 
  
  introduce(){
    console.log(`Hi, my name is ${this.name}. I am ${this.age} years old and I am in grade ${this.grade}.`)
  }

}

let student1 = new Student()
student1.name = "John"
student1.age = 15
student1.grade = 10
student1.introduce()

let student2 = new Student()
student2.name = "Alice"
student2.age = 14
student2.grade = 9
student2.introduce()