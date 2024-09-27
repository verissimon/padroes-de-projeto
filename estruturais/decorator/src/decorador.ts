// src/Decorador.ts
import { Bebida } from "./bebida";

// Classe Decoradora
export abstract class BebidaDecorator implements Bebida {
  protected bebida: Bebida;

  constructor(bebida: Bebida) {
    this.bebida = bebida;
  }

  abstract calcularValor(): number;
  abstract descricao(): string;
}

// Decoradores concretos
export class Suco extends BebidaDecorator {
  calcularValor(): number {
    return this.bebida.calcularValor() + 2.5;
  }

  descricao(): string {
    return this.bebida.descricao() + " com Suco";
  }
}

export class Energetico extends BebidaDecorator {
  calcularValor(): number {
    return this.bebida.calcularValor() + 4.0;
  }

  descricao(): string {
    return this.bebida.descricao() + " com Energético";
  }
}

export class Refrigerante extends BebidaDecorator {
  calcularValor(): number {
    return this.bebida.calcularValor() + 3.0;
  }

  descricao(): string {
    return this.bebida.descricao() + " com Refrigerante";
  }
}
