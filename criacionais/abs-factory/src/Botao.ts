interface Botao {
  renderizar(): void
}

class WindowsBotao implements Botao {
  renderizar(): void {
    console.log("Renderizando botão no estilo Windows")
  }
}

class MacOSBotao implements Botao {
  renderizar(): void {
    console.log("Renderizando botão no estilo macOS")
  }
}

export { Botao, WindowsBotao, MacOSBotao }
