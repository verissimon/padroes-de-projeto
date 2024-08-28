import { Carrinho } from './Carrinho';

export abstract class Desconto {
  // Template Method
  public calcular(carrinho: Carrinho): number {
    if (this.aplicaDesconto(carrinho)) {
      return this.valorDesconto(carrinho);
    }
    return 0;
  }

  // Método abstrato para verificar se o desconto é aplicável
  protected abstract aplicaDesconto(carrinho: Carrinho): boolean;

  // Método abstrato para calcular o valor do desconto
  protected abstract valorDesconto(carrinho: Carrinho): number;
}
