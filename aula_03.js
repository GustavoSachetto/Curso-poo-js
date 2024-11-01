/* ======== ATRIBUTOS E MÉTODOS ======== */

// ((( PRIVATE )))

/**
 * Assim como no PHP o javascript também permite métodos e atributos privados,
 * a grande diferença é como eles são referenciados. 
 * No javascript eles são referenciados pelo '#' na frente do nome do 
 * atributo ou do método.
 */

class Login {
    #email = 'gustavo@email.com';
    #password = '12345';
    #status = false;

    constructor (name) {
        this.name = name;
    }

    #setStatus (status) {
        this.#status = status;
    }

    #getStatus () {
        return this.#status === true ? `Usuário '${this.name}' logado com sucesso.` : `Usuário '${this.name}' não permitido.`;
    }

    verify (email, password) {
        if (email === this.#email && password === this.#password) {
            this.#setStatus(true);
        } else {
            throw new Error('Email ou senha incorretos.');
        }   
    }

    isLogged () {
        console.log(this.#getStatus());
    }
}

login = new Login('root_124837');

login.verify('gustavo@email.com', '12345');

login.isLogged();


/* ===================================== */