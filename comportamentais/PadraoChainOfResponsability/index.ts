import { DispensadorNotas } from './src/DispensadorNotas';

// Configuração da cadeia de responsabilidade
const dispensador100 = new DispensadorNotas(100);
const dispensador50 = new DispensadorNotas(50);
const dispensador20 = new DispensadorNotas(20);
const dispensador10 = new DispensadorNotas(10);
const dispensador5 = new DispensadorNotas(5);
const dispensador1 = new DispensadorNotas(1);

dispensador100
  .setProximo(dispensador50)
  .setProximo(dispensador20)
  .setProximo(dispensador10)
  .setProximo(dispensador5)
  .setProximo(dispensador1);

// Exemplo de uso
const valorSaque = 265;
console.log(`Sacando ${valorSaque}:`);
dispensador100.sacar(valorSaque);
