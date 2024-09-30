import { Forma } from './Forma';
import { Renderizador } from '../Renderizadores/Renderizador';

export class Circulo extends Forma {
    private raio: number;

    constructor(renderizador: Renderizador, x: number, y: number, raio: number, cor: string) {
        super(renderizador, x, y, cor);
        this.raio = raio;
    }

    desenhar(): void {
        this.renderizador.desenharCirculo(this.x, this.y, this.raio, this.cor);
    }
}