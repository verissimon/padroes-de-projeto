export interface Dispensador {
    setProximo(proximo: Dispensador): Dispensador;
    sacar(valor: number): void;
  }