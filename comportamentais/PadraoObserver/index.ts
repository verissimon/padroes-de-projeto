// main.ts
import { TemperatureSensor } from './src/TemperatureSensor';
import { TemperatureDisplay } from './src/TemperatureDisplay';
import { CoolingSystem } from './src/CoolingSystem';

const sensor = new TemperatureSensor();
const display = new TemperatureDisplay(sensor);
const coolingSystem = new CoolingSystem(sensor);

sensor.setTemperature(22);
sensor.setTemperature(30);
