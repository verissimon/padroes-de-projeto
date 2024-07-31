import { EstadoSemaforo } from './EstadoSemaforo';
import { Semaforo } from './Semaforo';
import { Verde } from './Verde';

export class Vermelho implements EstadoSemaforo {
  private semaforo: Semaforo | undefined;

  constructor(semaforo: Semaforo | undefined) {
    this.semaforo = semaforo;
  }

  setSemaforo(semaforo: Semaforo): void {
    this.semaforo = semaforo;
  }

  mudarSinal(): void {
    if (this.semaforo) {
      console.log("Mudando para verde...");
      this.semaforo.setEstado(new Verde(this.semaforo));
    } else {
      console.error("Semaforo não inicializado.");
    }
  }
}
