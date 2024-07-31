import { DispensadorBase } from './DispensadorBase';

// Implementação de um dispensador para uma denominação específica
export class DispensadorNotas extends DispensadorBase {
  private nota: number; // registra a nota se e de 100 ou de 50 ou de 20 etc..

  constructor(nota: number) {
    super();
    this.nota = nota;
  }

  sacar(valorSaque: number): void {
    if (valorSaque >= this.nota) { // o valor do saque e maior que o valor da nota?
      const quantNotas = Math.floor(valorSaque / this.nota); // armazene a quantidade de notas!
      const resto = valorSaque % this.nota;
      console.log(`${quantNotas} nota(s) de ${this.nota}, restando ${resto}`);
      
      if (resto !== 0 && this.proximo) {
        this.proximo.sacar(resto);
      }
    } else if (this.proximo) {
      this.proximo.sacar(valorSaque);
    }
  }
}