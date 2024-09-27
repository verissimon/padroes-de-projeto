import { Bebida } from './bebida';

export class BebidaProxy implements Bebida {
  private bebida: Bebida;
  private idadeCliente: number;

  constructor(bebida: Bebida, idadeCliente: number) {
    this.bebida = bebida;
    this.idadeCliente = idadeCliente;
  }

  calcularValor(): number {
    if (this.verificarPermissao()) {
      return this.bebida.calcularValor();
    } else {
      throw new Error('Cliente não tem permissão para consumir essa bebida.');
    }
  }

  descricao(): string {
    if (this.verificarPermissao()) {
      return this.bebida.descricao();
    } else {
      return 'Acesso negado à bebida.';
    }
  }

  private verificarPermissao(): boolean {
    return this.idadeCliente >= 18; // Exemplo de verificação de idade
  }
}
