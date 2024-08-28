import { Builder } from './Builder';
import { Quarto } from './Quarto';

export class MontarQuarto implements Builder {
    private quarto: Quarto;

    constructor() {
        this.quarto = new Quarto();
    }

    private reset(): void {
        this.quarto = new Quarto();
    }

    public adicionarCama(): this {
        this.quarto.itens.push("Cama");
        return this;
    }

    public adicionarMesa(): this {
        this.quarto.itens.push("Mesa");
        return this;
    }

    public adicionarComoda(): this {
        this.quarto.itens.push("Comoda");
        return this;
    }

    public adicionarVentilador(): this {
        this.quarto.itens.push("Ventilador");
        return this;
    }

    public adicionarComputador(): this {
        this.quarto.itens.push("Computador");
        return this;
    }

    public getQuarto(): Quarto {
        const result = this.quarto;
        this.reset();
        return result;
    }
}
