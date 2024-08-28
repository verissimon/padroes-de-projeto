import { Semaforo } from './src/Semaforo';
import { Vermelho } from './src/Vermelho';

let semaforo: Semaforo; // Declarar sem inicializar

// Inicializar estados sem passar o semáforo ainda
const estadoVermelho = new Vermelho(undefined);

// Inicializar o semáforo com um estado inicial (ex: estadoVermelho)
semaforo = new Semaforo(estadoVermelho);

// Associar o semáforo aos estados
estadoVermelho.setSemaforo(semaforo);

// Usar o semáforo
semaforo.mudarSinal(); // Mudando para verde...
semaforo.mudarSinal(); // Mudando para amarelo...
semaforo.mudarSinal(); // Mudando para vermelho...
