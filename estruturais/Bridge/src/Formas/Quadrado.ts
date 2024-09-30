import { Forma } from './Forma';
import { Renderizador } from '../Renderizadores/Renderizador';

export class Quadrado extends Forma {
    private lado: number;

    constructor(renderizador: Renderizador, x: number, y: number, lado: number, cor: string) {
        super(renderizador, x, y, cor);
        this.lado = lado;
    }

    desenhar(): void {
        this.renderizador.desenharQuadrado(this.x, this.y, this.lado, this.cor);
    }
}