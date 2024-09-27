// src/Pasta.ts
import { Componente } from "./Componente";
import * as treeify from 'treeify';

// Classe que representa uma pasta contendo arquivos e outras pastas.
export class Pasta implements Componente {
    private filhos: Componente[] = [];

    constructor(public nome: string) {}

    public adicionar(filho: Componente): void {
        this.filhos.push(filho);
    }

    public mostrar(): any {
        const estrutura: any = {};

        // Adiciona a estrutura de cada componente na pasta
        this.filhos.forEach(filho => {
            estrutura[filho.nome] = filho.mostrar();
        });

        return estrutura;
    }

    public getTamanho(): number {
        return this.filhos.reduce((total, filho) => {
            return total + filho.getTamanho();
        }, 0);
    }

    public toString(): string {
        const estrutura = this.mostrar();
        const tamanhoTotal = this.getTamanho();
        return `${treeify.asTree(estrutura, true, false)}\nTamanho total da pasta raiz: ${tamanhoTotal} bytes`;
    }
}
