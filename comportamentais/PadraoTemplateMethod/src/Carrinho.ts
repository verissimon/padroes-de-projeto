import { Produto } from './Produto';

export class Carrinho {
  private produtos: Produto[] = [];

  // Método para adicionar produto ao carrinho
  public adicionarProduto(produto: Produto): void {
    this.produtos.push(produto);
  }

  // Getter para obter o valor total dos produtos no carrinho
  public getValorTotal(): number {
    return this.produtos.reduce((total, produto) => total + produto.preco, 0);
  }

  // Getter para obter a lista de produtos
  public get produtosCarrinho(): Produto[] {
    return this.produtos;
  }

  // Setter para definir a lista de produtos
  public set produtosCarrinho(produtos: Produto[]) {
    this.produtos = produtos;
  }
}
