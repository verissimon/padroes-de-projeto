export class Endereco {
    rua: string;
    numero: number;
    cidade: string;
    estado: string;

    constructor(rua: string, numero: number, cidade: string, estado: string) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
    }

    toString(): string {
        return `${this.rua}, ${this.numero}, ${this.cidade} - ${this.estado}`;
    }
}

