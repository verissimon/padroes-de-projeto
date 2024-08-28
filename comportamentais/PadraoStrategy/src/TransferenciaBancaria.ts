import { Pagamento } from './Pagamento';

export class TransferenciaBancaria implements Pagamento {
  processarPagamento(valor: number): number {
    console.log(`Valor sem acrescimo de juros e sem desconto para pagamentos via Transferência Bancária`);
    return valor;
  }
}
