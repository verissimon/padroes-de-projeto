// TemperatureSensor.ts
import { Subject } from 'rxjs';

export class TemperatureSensor {
  private temperatureSubject = new Subject<number>();

  setTemperature(temp: number) {
    console.log(`Ajustando a temperatura para ${temp}°C`);
    this.temperatureSubject.next(temp);
  }

  getTemperatureObservable() {
    return this.temperatureSubject.asObservable();
  }
}
