import { GerenciadorDePagamentos } from './src/GerenciadorDePagamentos';
import { CartaoCredito } from './src/CartaoCredito';
import { Pix } from './src/Pix';
import { TransferenciaBancaria } from './src/TransferenciaBancaria';

const valorCompra = 500.00;
console.log(`Valor total da compra: R$ ${valorCompra} \n`)

const gerenciadorPagamento = new GerenciadorDePagamentos(new CartaoCredito());

const valorFinalCartao = gerenciadorPagamento.processar(valorCompra); // Inclui juros
console.log(`Pagamento com Cartão de credito efetuado com sucesso, o valor final de sua compra foi: R$${valorFinalCartao.toFixed(2)}\n`);

gerenciadorPagamento.setPagamento(new Pix());
const valorFinalPix = gerenciadorPagamento.processar(valorCompra); // Sem alteração
console.log(`Pagamento com Pix efetuado com sucesso, o valor final de sua compra foi: R$${valorFinalPix.toFixed(2)}\n`);

gerenciadorPagamento.setPagamento(new TransferenciaBancaria());
const valorFinalTransferencia = gerenciadorPagamento.processar(valorCompra); // Inclui desconto
console.log(`Pagamento com Transferência Bancária efetuado com sucesso, o valor final de sua compra foi: R$${valorFinalTransferencia.toFixed(2)}\n`);
