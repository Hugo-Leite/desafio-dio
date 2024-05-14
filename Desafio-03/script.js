// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque indefinido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias da classe Heroi
const mago = new Heroi("Merlin", 50, "mago");
const guerreiro = new Heroi("Conan", 35, "guerreiro");
const monge = new Heroi("Lee", 40, "monge");
const ninja = new Heroi("Hanzo", 30, "ninja");

// Chamando o método atacar para cada herói
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
