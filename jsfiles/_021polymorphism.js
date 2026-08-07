class Shape{
    area(){
        console.log("Calculating area of shape");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        console.log(`Area of rectangle: ${this.width * this.height}`);
    }
}

const rect = new Rectangle(5, 10);
rect.area(); // Output: Area of rectangle: 50

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        console.log(`Area of circle: ${Math.PI * this.radius * this.radius}`);
    }
}

const circle = new Circle(7);
circle.area(); // Output: Area of circle: 153.93804002589985