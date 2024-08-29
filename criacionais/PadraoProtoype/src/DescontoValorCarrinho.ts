import { Desconto } from './Desconto';
import { Carrinho } from './Carrinho';

export class DescontoValorCarrinho extends Desconto {
  protected aplicaDesconto(carrinho: Carrinho): boolean {
    return carrinho.getValorTotal() > 1000;
  }

  protected valorDesconto(carrinho: Carrinho): number {
    return carrinho.getValorTotal() * 0.1; // 10% de desconto
  }
}
