// PagamentoCartaoCredito.ts
import { Pagamento } from './Pagamento';

export class CartaoCredito implements Pagamento {
    private taxaJuros: number = 0.05; // 5% de juros

    processarPagamento(valor: number): number {
        const valorComJuros = valor + (valor * this.taxaJuros);
        console.log(`Taxa de juros de ${this.taxaJuros * 100}% para pagamentos via Cartão de Credito`);
        return valorComJuros;
    }
}
