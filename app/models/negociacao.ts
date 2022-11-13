export class Negociacao {
    // Criando variaveis com # em classe no JS, definimos uma classe privada: #data

    //No typescript seguimos da seguinte maneira ao definir a variável privada da classe. quando for utilizar na classe para geters, basta colocar _nomeDaVar
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(): Date {
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }

    setQuantidade(quantidade: number): void {
        this._quantidade = quantidade;
    }
   
}