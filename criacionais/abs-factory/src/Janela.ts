interface Janela {
  renderizar(): void
}

class WindowsJanela implements Janela {
  renderizar(): void {
    console.log("Renderizando janela no estilo Windows")
  }
}

class MacOSJanela implements Janela {
  renderizar(): void {
    console.log("Renderizando janela no estilo macOS")
  }
}

export { Janela , WindowsJanela, MacOSJanela }
