import { Pagamento } from './Pagamento';

export class GerenciadorDePagamentos {
  private formaDePagamento: Pagamento;

  constructor(pagamento: Pagamento) {
    this.formaDePagamento = pagamento;
  }

  setPagamento(pagamento: Pagamento): void {
    this.formaDePagamento = pagamento;
  }

  processar(valor: number): number {
    return this.formaDePagamento.processarPagamento(valor);
  }
}