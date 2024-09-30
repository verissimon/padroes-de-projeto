import { Renderizador } from '../Renderizadores/Renderizador';

export abstract class Forma {
    protected renderizador: Renderizador;
    protected x: number;
    protected y: number;
    protected cor: string;

    constructor(renderizador: Renderizador, x: number, y: number, cor: string) {
        this.renderizador = renderizador;
        this.x = x;
        this.y = y;
        this.cor = cor;
    }

    abstract desenhar(): void;
}