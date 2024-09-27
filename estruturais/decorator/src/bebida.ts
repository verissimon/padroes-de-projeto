export interface Bebida {
  calcularValor(): number;
  descricao(): string;
}

export class Cachaca implements Bebida {
  calcularValor(): number {
    return 5.0; // valor base da cachaça
  }

  descricao(): string {
    return "Cachaça";
  }
}

export class Whisky implements Bebida {
  calcularValor(): number {
    return 10.0; // valor base do whisky
  }

  descricao(): string {
    return "Whisky";
  }
}

export class Vodka implements Bebida {
  calcularValor(): number {
    return 8.0; // valor base da vodka
  }

  descricao(): string {
    return "Vodka";
  }
}
