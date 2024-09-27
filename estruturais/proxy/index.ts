// index.ts
import { Cachaca, Whisky, Vodka } from './src/bebida';
import { BebidaProxy } from './src/bebidaProxy';

try {
  const bebida1 = new BebidaProxy(new Cachaca(), 20); // Cliente com 20 anos
  console.log(`${bebida1.descricao()} - R$${bebida1.calcularValor().toFixed(2)}`);
} catch (error) {
  console.log(error.message);
}

try {
  const bebida2 = new BebidaProxy(new Whisky(), 17); // Cliente com 17 anos
  console.log(`${bebida2.descricao()} - R$${bebida2.calcularValor().toFixed(2)}`);
} catch (error) {
  console.log(error.message);
}

try {
  const bebida3 = new BebidaProxy(new Vodka(), 18); // Cliente com 18 anos
  console.log(`${bebida3.descricao()} - R$${bebida3.calcularValor().toFixed(2)}`);
} catch (error) {
  console.log(error.message);
}
