import { Renderizador } from './Renderizador';

export class RenderizadorNaTela implements Renderizador {
    desenharCirculo(x: number, y: number, raio: number, cor: string): void {
        console.log(`Desenhando um círculo na tela com raio: ${raio}, cor: ${cor} na posição (${x}, ${y})`);
    }

    desenharQuadrado(x: number, y: number, lado: number, cor: string): void {
        console.log(`Desenhando um quadrado na tela com lado: ${lado}, cor: ${cor} na posição (${x}, ${y})`);
    }
}