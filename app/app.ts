console.log("Start JS");

import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao);
console.log(negociacao.data);
console.log(negociacao.volume);
negociacao.setQuantidade(10)
console.log(negociacao.quantidade);
console.log(negociacao);
