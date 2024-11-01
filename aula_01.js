/* ======= CLASSES EM JAVASCRIPT ======= */

// ((( CLASS )))

/**
 * Criando classes em javascript. 
 * Diferente do PHP o javascript não permite modificadores de acesso,
 * apenas no typescript.
 */

class Person {
    status = false;

    constructor(name,age) {
        if (this.verify(age)) {
            this.name = name;
        }
    }

    verify(age) {
        return age >= 18 ? true : false;
    }

    speak() {
        if (!this.name) {
            throw new Error('Você não é maior de 18 anos!');
        }
        
        console.log(`Olá ${this.name} seja bem-vindo!`);   
    }

    // Getter
    set setStatus(status) {
        typeof status === "boolean" ? this.status = status : this.status = false;
    }

    // Setter
    get getStatus() {
        return this.status;
    }
}

let person = new Person('Gustavo', 22);

person.speak();

// Setter
person.setStatus = true;

// Getter
console.log('Status da conta: '+person.getStatus);

/* ===================================== */