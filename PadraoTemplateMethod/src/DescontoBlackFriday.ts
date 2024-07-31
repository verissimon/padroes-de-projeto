import { Desconto } from './Desconto';
import { Carrinho } from './Carrinho';

export class DescontoBlackFriday extends Desconto {
  protected aplicaDesconto(carrinho: Carrinho): boolean {
    const mesAtual = new Date().getMonth() + 1; // Janeiro é 0, Novembro é 11
    return mesAtual === 11; // Novembro
  }

  protected valorDesconto(carrinho: Carrinho): number {
    return carrinho.getValorTotal() * 0.2; // 20% de desconto
  }
}
