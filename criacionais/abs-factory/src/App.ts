import { Botao } from "./Botao";
import { GUIabsFactory } from "./GUIabsFactory";
import { Janela } from "./Janela";

class App {
    factory: GUIabsFactory
    botao: Botao | undefined = undefined 
    janela: Janela | undefined = undefined

    constructor(factory: GUIabsFactory) {
        this.factory = factory
        this.criaUI()
    }

    criaUI() {
        this.botao = this.factory.criarBotao()
        this.janela = this.factory.criarJanela()
    }

    renderizar() {
        this.botao?.renderizar()
        this.janela?.renderizar()
    }
}

export { App }