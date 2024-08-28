// CoolingSystem.ts
import { TemperatureSensor } from './TemperatureSensor';

export class CoolingSystem {
  constructor(sensor: TemperatureSensor) {
    sensor.getTemperatureObservable().subscribe(this.update);
  }

  update(temp: number) {
    if (temp > 25) {
      console.log("CoolingSystem: Está muito quente! Ligando o sistema de refrigeração.");
    } else {
      console.log("CoolingSystem: A temperatura está boa. Sistema de refrigeração desligado.");
    }
  }
}
