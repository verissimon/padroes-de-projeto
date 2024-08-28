import { Carrinho } from './src/Carrinho';
import { Produto } from './src/Produto';
import { calcularMelhorDesconto } from './src/GerenciadorDescontos';

const carrinho = new Carrinho();
carrinho.adicionarProduto(new Produto("Laptop", 1200));
carrinho.adicionarProduto(new Produto("Mouse", 50));

const melhorDesconto = calcularMelhorDesconto(carrinho);
console.log(`Melhor desconto aplicado: R$ ${melhorDesconto.toFixed(2)}`);
