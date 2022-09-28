
/* car object demo */
let golf = {
    brand: "volkswagen",
    name: "golf",
    horsepower: 100,
}

/* animal object demo */
let dog = {
    height: "50cm",
    weight: "20kg",
    lifespan: "20years",
}

/* person object demo */
let human = {
    lifespan: "100years",
    height: "180cm",
    specialfeature: "thumbs",
}

/* Classes */

class Car {
    brand;
    name;
    horsepower;
    constructor(brand, name, horsepower){
        this.brand = brand;
        this.name = name; 
        this.horsepower = horsepower;
    }

    makeCard(){
        return `
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                    ${this.brand}
                    </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Modelname: ${this.name}</li>
                            <li class="list-group-item">Horsepower: ${this.horsepower}</li>
                        </ul>
                </div>
                `;
    }
}

class Animal{
    name;
    height;
    weight;
    lifespan;
    constructor(name, height, weight, lifespan){
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.lifespan = lifespan;
    }
    makeCard(){
        return `
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                    ${this.name}
                    </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Average Height: ${this.height}</li>
                            <li class="list-group-item">Average Weight: ${this.weight}</li>
                            <li class="list-group-item">Average Lifespan: ${this.lifespan}</li>
                        </ul>
                </div>
                `;
    }
}

class Person{
    name;
    height;
    specialskill;
    constructor(name, height, specialskill){
        this.name = name;
        this.height = height;
        this.specialskill = specialskill;
    }
    makeCard(){
        return `
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                    ${this.name}
                    </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Height: ${this.height}</li>
                            <li class="list-group-item">Special skill: ${this.specialskill}</li>
                        </ul>
                </div>
                `;
    }
}

class Motorbike extends Car{
    numberofwheels;
    constructor(brand, name, horsepower, numberofwheels){
        super(brand, name, horsepower);
        this.numberofwheels = numberofwheels;
    }
}


let car1 = new Car("Dodge", "Charger","200");
let car2 = new Car("Volkswagen", "Golf", 100)
let car3 = new Car("Aston Martin", "DB9", 180)

let arrayCar = [car1,car2,car3]
for(let val of arrayCar){
    document.getElementById("carcards").innerHTML += val.makeCard();
}


let animal1 = new Animal("Golden Retriever", "50cm", "20kg", "20 years");
let animal2 = new Animal("Doberman", "70cm", "30kg", "17 years");
let animal3 = new Animal("Bordercolie", "40cm", "15kg", "22 years");

let arrayAnimal = [animal1,animal2,animal3]
for(let val of arrayAnimal){
    document.getElementById("dogcards").innerHTML += val.makeCard();
}


let person1 = new Person("Peter", "1.80m", "Can cook minute rice in 30 seconds");
let person2 = new Person("Peter", "1.80m", "Can cook minute rice in 30 seconds");
let person3 = new Person("Peter", "1.80m", "Can cook minute rice in 30 seconds");


let arrayPerson = [person1,person2,person3]
for(let val of arrayPerson){
    document.getElementById("persons").innerHTML += val.makeCard();
}
