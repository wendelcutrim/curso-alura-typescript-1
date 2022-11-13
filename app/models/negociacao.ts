export class Negociacao {
    // Criando variaveis com # em classe no JS, definimos uma classe privada: #data

    //No typescript seguimos da seguinte maneira ao definir a variável privada da classe. quando for utilizar na classe para geters, basta colocar _nomeDaVar
    private _data;
    private _quantidade;
    private _valor;

    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    setQuantidade(quantidade) {
        this._quantidade = quantidade;
    }
   
}