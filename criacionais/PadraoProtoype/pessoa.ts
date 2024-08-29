import { Endereco } from "./endereco";

export class Pessoa {
    nome: string;
    idade: number;
    endereco: Endereco;

    constructor(nome: string, idade: number, endereco: Endereco) {
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
    }

    toString(): string {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Endereço: ${this.endereco.toString()}`;
    }
}
