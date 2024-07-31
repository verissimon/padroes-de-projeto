// TemperatureDisplay.ts
import { TemperatureSensor } from './TemperatureSensor';

export class TemperatureDisplay {
  constructor(sensor: TemperatureSensor) {
    sensor.getTemperatureObservable().subscribe(this.update);
  }

  update(temp: number) {
    console.log(`TemperatureDisplay: A temperatura atual é ${temp}°C`);
  }
}
