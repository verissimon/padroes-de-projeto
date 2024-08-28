import { EstadoSemaforo } from './EstadoSemaforo';
import { Semaforo } from './Semaforo';
import { Vermelho } from './Vermelho';

export class Amarelo implements EstadoSemaforo {
  private semaforo: Semaforo | undefined;

  constructor(semaforo: Semaforo | undefined) {
    this.semaforo = semaforo;
  }

  setSemaforo(semaforo: Semaforo): void {
    this.semaforo = semaforo;
  }

  mudarSinal(): void {
    if (this.semaforo) {
      console.log("Mudando para vermelho...");
      this.semaforo.setEstado(new Vermelho(this.semaforo));
    } else {
      console.error("Semaforo não inicializado.");
    }
  }
}
