import { Botao, WindowsBotao, MacOSBotao } from "./Botao"
import { Janela, WindowsJanela, MacOSJanela } from "./Janela"

interface GUIabsFactory { 
  criarBotao(): Botao
  criarJanela(): Janela
}

class WindowsGUIFactory implements GUIabsFactory {
  criarBotao(): Botao {
    return new WindowsBotao()
  }

  criarJanela(): Janela {
      return new WindowsJanela()
  }
}

class MacOSGUIFactory implements GUIabsFactory {
  criarBotao(): Botao {
    return new MacOSBotao()
  }

  criarJanela(): Janela {
      return new MacOSJanela()
  }
}

export { GUIabsFactory, WindowsGUIFactory, MacOSGUIFactory }
