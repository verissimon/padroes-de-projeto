import { Pagamento } from './Pagamento';

export class Pix implements Pagamento {
  private desconto: number = 0.10; // 10% de desconto

  processarPagamento(valor: number): number {
    const valorComDesconto = valor - (valor * this.desconto);
    console.log(`Desconto de ${this.desconto * 100}% para pagamento via Pix`);
    return valorComDesconto;
  }
}
