import { Builder } from './Builder';

export class Diretor {
    private builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public montarQuartoSimples(): void {
        this.builder.adicionarCama().adicionarMesa();
    }

    public montarQuartoCompleto(): void {
        this.builder.adicionarCama(); 
        this.builder.adicionarMesa(); 
        
        if (this.builder.adicionarComputador) {
            this.builder.adicionarComputador(); 
        }
        
        if (this.builder.adicionarVentilador) {
            this.builder.adicionarVentilador(); 
        }

        if (this.builder.adicionarComoda) {
            this.builder.adicionarComoda(); 
        }
    }

    public montarQuartoPersonalizado(): void {
        this.builder.adicionarCama().adicionarMesa(); 
        if (this.builder.adicionarVentilador) {
            this.builder.adicionarVentilador();
        }
    }
}