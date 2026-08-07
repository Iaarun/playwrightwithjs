class Car{
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayInfo(){
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}`);
    }

    cardata(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;   

    }

}

const myCar = new Car();
myCar.displayInfo()