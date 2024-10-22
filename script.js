class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === 'mago') {
            ataque = 'magia';
        } else if (this.tipo === 'guerreiro') {
            ataque = 'espada';
        } else if (this.tipo === 'monge') {
            ataque = 'artes marciais';
        } else if (this.tipo === 'ninja') {
            ataque = 'shuriken';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const mago = new Heroi('Gandalf', 1000, 'mago');
const guerreiro = new Heroi('Conan', 35, 'guerreiro');
const monge = new Heroi('Dogen', 50, 'monge');
const ninja = new Heroi('Li', 17, 'ninja');

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();