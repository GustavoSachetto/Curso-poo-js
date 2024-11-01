/* ======== CLASSES EXTENDIDAS ========= */

// ((( EXTENDS )))

/**
 * As classes extendidas se assemelha muito ao PHP, com exceção do super(), 
 * que é utilizado para referir ao construtor da classe pai.
 */

class Vehicle {
    constructor(name) {
        this.name = name;
    }

    drive() {
        console.log('Dirigindo...');
    }
}

class Car extends Vehicle {
    numberWheels = 4;

    constructor(name, brand) {
        super(name);
        
        this.brand = brand;
    }

    get getCar() {
        return '[Carro]\nModelo: '+this.name+'\nMarca: '+this.brand+'\nRodas: '+this.numberWheels;
    }
}

class Motorcycle extends Vehicle {
    numberWheels = 2;

    constructor(name, brand) {
        super(name);
        
        this.brand = brand;
    }

    get getMotorcycle() {
        return '[Moto]\nModelo: '+this.name+'\nMarca: '+this.brand+'\nRodas: '+this.numberWheels;
    }
}

car = new Car('Prisma', 'Chevrolet');

console.log(car.getCar);
car.drive();

motorcycle = new Motorcycle('Lambreta', 'Honda');

console.log(motorcycle.getMotorcycle);
motorcycle.drive();

/* ===================================== */