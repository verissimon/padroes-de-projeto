import {Dispensador} from './Dispensador'

// Classe base abstrata para os dispensadores
export abstract class DispensadorBase implements Dispensador {
  protected proximo: Dispensador | null = null;

  setProximo(proximo: Dispensador): Dispensador {
    this.proximo = proximo;
    return proximo;
  }

  // Método abstrato que deve ser implementado pelas subclasses
  abstract sacar(valor: number): void;
}
