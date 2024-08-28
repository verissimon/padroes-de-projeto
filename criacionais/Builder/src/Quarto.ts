export class Quarto {
    public itens: string[] = [];

    public listItens(): void {
        console.log(`Itens do quarto: ${this.itens.join(", ")}\n`);
    }
}
