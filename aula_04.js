/* ========= CLASSES ESTÁTICAS ========= */

// ((( STATIC )))

/**
 * O static funciona perfeitamente igual ao PHP.
 */

class House {
    static #wall = true;
    static #roof = true;

    kitchens  = 1;
    bedrooms  = 1;
    bathrooms = 1;

    constructor(NumberOfkitchens, NumberOfbedrooms, NumberOfbathrooms) {
        this.kitchens = NumberOfkitchens;
        this.bedrooms = NumberOfbedrooms;
        this.bathrooms = NumberOfbathrooms;
    }

    static get getStructure() {
        return {
            Parede: this.#wall,
            Telhado: this.#roof
        }
    }

    get getHouse() {
        return {
            Quarto: this.bedrooms,
            Cozinha: this.kitchens,
            Banheiro: this.bathrooms,
            Estrutura: House.getStructure
        }
    }

    showHouse() {
        console.log({Casa: this.getHouse});
    }
}

console.log(House.getStructure);

house = new House(1,3,3);

house.showHouse();

/* ===================================== */