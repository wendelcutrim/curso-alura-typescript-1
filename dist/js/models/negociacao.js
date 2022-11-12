export class Negociacao {
    // Criando variaveis com # em classe no JS, definimos uma classe privada
    #data;
    #quantidade;
    #valor;

    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    get data() {
        return this.#data;
    }

    get quantidade() {
        return this.#quantidade;
    }

    get valor() {
        return this.#valor;
    }

    get volume() {
        return this.#quantidade * this.#valor;
    }

    setQuantidade(quantidade) {
        this.#quantidade = quantidade;
    }
   
}