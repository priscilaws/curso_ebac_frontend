class Personagem {
    constructor(nome, vida, forca) {
        if (this.constructor === Personagem) {
            throw new Error("Classe abstrata");
        }
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
    }

    atacar(alvo) {
        throw new Error("Metodo 'atacar()' deve ser implementado nas classes  filhas");
    }

    receberDano(dano) {
        this.vida -= dano;
        console.log(`${this.nome} recebeu ${dano} de dano. Vida atual: ${this.vida}`);
    }

    curar(pontos) {
        this.vida += pontos;
        console.log(`${this.nome} se curou em ${pontos}. Vida atual ${this.vida}`);
    }

    estaVivo() {
        return this.vida > 0;
    }
}

class Barbaro extends Personagem {
    constructor(nome) {
        super(nome, 150, 40);
    }

    atacar(alvo) {
        log(`${this.nome} desferiu um golpe com sua espada!`);
        alvo.receberDano(this.forca);
    }
}

class Clerigo extends Personagem {
    constructor(nome) {
        super(nome, 100, 30);
    }

    atacar(alvo) {
        log(`${this.nome} lançou uma magia!`);
        alvo.receberDano(this.forca);
    }

    curarAlvo(alvo) {
        const cura = 25;
        log(`${this.nome} conjura magia de cura!`);
        alvo.curar(cura);
    }
}

class Dragao extends Personagem {
    constructor(nome) {
        super(nome, 180, 50);
    }

    atacar(alvo) {
        log(`${this.nome} cospe fogo!`);
        alvo.receberDano(this.forca);
    }
}

const barbaro = new Barbaro("Atlas");
const clerigo = new Clerigo("Zin");
const dragao = new Dragao("Drako");

let rodada = 1;

function turno() {
    if (!barbaro.estaVivo() || !dragao.estaVivo()) {
        log("Os herois derrotaram o dragao. Fim de Jogo!");
        return;
    }

    log(`Rodada ${rodada}`);
    barbaro.atacar(dragao);
    if (dragao.estaVivo()) {
        dragao.atacar(barbaro);
    }

    if (barbaro.vida <= 60) {
        clerigo.curarAlvo(barbaro);
    } else {
        clerigo.atacar(dragao);
    }

    rodada++;
    log('-----------------------------------');
}

function log(texto) {
    document.getElementById("log").textContent += texto + "\n";
}
