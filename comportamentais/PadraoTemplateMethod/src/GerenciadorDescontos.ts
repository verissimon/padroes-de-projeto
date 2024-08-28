import { Carrinho } from './Carrinho';
import { Desconto } from './Desconto';
import { DescontoBlackFriday } from './DescontoBlackFriday';
import { DescontoValorCarrinho } from './DescontoValorCarrinho';

export function calcularMelhorDesconto(carrinho: Carrinho): number {
  // Lista de descontos disponíveis
  const descontos: Desconto[] = [new DescontoBlackFriday(), new DescontoValorCarrinho()];

  let melhorDesconto = 0;

  for (const desconto of descontos) {
    const valorDesconto = desconto.calcular(carrinho);
    if (valorDesconto > melhorDesconto) {
      melhorDesconto = valorDesconto;
    }
  }

  return melhorDesconto;
}
