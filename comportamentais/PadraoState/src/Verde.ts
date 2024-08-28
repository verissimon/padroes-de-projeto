import { EstadoSemaforo } from './EstadoSemaforo';
import { Semaforo } from './Semaforo';
import { Amarelo } from './Amarelo';

export class Verde implements EstadoSemaforo {
  private semaforo: Semaforo | undefined;

  constructor(semaforo: Semaforo | undefined) {
    this.semaforo = semaforo;
  }

  setSemaforo(semaforo: Semaforo): void {
    this.semaforo = semaforo;
  }

  mudarSinal(): void {
    if (this.semaforo) {
      console.log("Mudando para amarelo...");
      this.semaforo.setEstado(new Amarelo(this.semaforo));
    } else {
      console.error("Semaforo não inicializado.");
    }
  }
}
