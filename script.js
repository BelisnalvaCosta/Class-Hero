// Classe base para Personagens
class Personagem {
    constructor(nome, idade, tipo, praca) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.praca;
    }

    atacar() {
        // Método genérico a ser sobrescrito nas subclasses
        return `O ${this.tipo} atacou!`;
    }

}


// Classe Heroína (Beth)
class Heroina extends Personagem {
    constructor(nome, idade, tipo) {
        super(nome, idade, 'guerreira');
        this.nome = nome;
        this.idade = idade;
    }

    atacar() {
        return `A ${this.tipo} ${this.nome} com a idade de ${this.idade} atacou usando sua força indestrutiva com sua lança e escudo.`;
    }
}

// Classe Pteranodon
class Pteranodon extends Personagem {
    constructor(nome, idade, tipo) {
        super(nome, idade, 'voador');
        this.nome = nome;
        this.idade = idade;
    }

    atacar() {
        return `O ${this.tipo} ${this.nome} com idade de ${this.idade} anos atacou usando suas asas e bico com fúria.`;
    }
}

// Classe Carro Veroz
class Carro extends Personagem {
    constructor(nome, praca, velocidade) {
        super(nome, praca, 'alta velocidade');
        this.praca = praca; // praca do carro
        this.velocidade = velocidade; // Velocidade em KM/h
    }

    avançar() {
        return `Com praca ${this.praca} em ${this.tipo} ${this.nome} avançou usando sua velocidade de ${this.velocidade} KM/h.`;
    }
}

// Função para escolher o personagem e exibir o ataque
function escolherPersonagem(tipo) {
    let personagem;
    let resultadoDiv = document.getElementById("resultado");

    // Criando instâncias de cada personagem
    switch (tipo) {
        case 'heroina':
            personagem = new Heroina("Beth", 49);
            break;
        case 'pteranodon':
            personagem = new Pteranodon("Ptero", 110);
            break;
        case 'carro':
            personagem = new Carro("VerozFox", 8452, 320);
            break;
        default:
            return;
    }

    // Exibindo o ataque
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = personagem.atacar();
    // Exibindo o ataque
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = personagem.avançar();
}