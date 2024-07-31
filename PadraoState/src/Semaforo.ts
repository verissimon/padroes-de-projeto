import { EstadoSemaforo } from './EstadoSemaforo';

export class Semaforo {
  private estadoAtual: EstadoSemaforo;

  constructor(estadoInicial: EstadoSemaforo) {
    this.estadoAtual = estadoInicial;
  }

  setEstado(estado: EstadoSemaforo): void {
    this.estadoAtual = estado;
  }

  mudarSinal(): void {
    this.estadoAtual.mudarSinal();
  }
}
