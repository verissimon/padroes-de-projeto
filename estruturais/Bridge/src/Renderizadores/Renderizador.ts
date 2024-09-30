export interface Renderizador {
    desenharCirculo(x: number, y: number, raio: number, cor: string): void;
    desenharQuadrado(x: number, y: number, lado: number, cor: string): void;
}