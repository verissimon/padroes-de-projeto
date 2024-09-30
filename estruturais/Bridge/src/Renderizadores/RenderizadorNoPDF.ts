import { Renderizador } from './Renderizador';

export class RenderizadorNoPDF implements Renderizador {
    desenharCirculo(x: number, y: number, raio: number, cor: string): void {
        console.log(`Desenhando um círculo no PDF com raio: ${raio}, cor: ${cor} na posição (${x}, ${y})`);
    }

    desenharQuadrado(x: number, y: number, lado: number, cor: string): void {
        console.log(`Desenhando um quadrado no PDF com lado: ${lado}, cor: ${cor} na posição (${x}, ${y})`);
    }
}