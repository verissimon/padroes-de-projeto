// index.ts
import { Cachaca, Whisky, Vodka } from "./src/bebida";
import { Suco, Energetico, Refrigerante } from "./src/decorador";

const bebida1 = new Suco(new Cachaca());
console.log(`${bebida1.descricao()} - R$${bebida1.calcularValor().toFixed(2)}`);

const bebida2 = new Energetico(new Vodka());
console.log(`${bebida2.descricao()} - R$${bebida2.calcularValor().toFixed(2)}`);

const bebida3 = new Refrigerante(new Whisky());
console.log(`${bebida3.descricao()} - R$${bebida3.calcularValor().toFixed(2)}`);

const bebida4 = new Suco(new Energetico(new Whisky()));
console.log(`${bebida4.descricao()} - R$${bebida4.calcularValor().toFixed(2)}`);
