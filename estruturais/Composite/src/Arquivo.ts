
import { Componente } from "./Componente";

// Classe que representa um arquivo com nome e tamanho.
export class Arquivo implements Componente {
    
    constructor(public nome: string, public tamanho: number) {}

   
    public mostrar(): any {
        return `${this.nome} (${this.tamanho} bytes)`;
    }

    
    public getTamanho(): number {
        return this.tamanho;
    }
}
