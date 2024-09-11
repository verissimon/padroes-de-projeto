// nova API
interface ConverteDiferente {
  obterConversao(aConverter: {
    valor: number;
    origem: string;
    destino: string;
    data: Date
  }): number;
}

class APIConversaoDiff implements ConverteDiferente {
  obterConversao(aConverter: {
    valor: number;
    origem: string;
    destino: string;
    data: Date
  }): number {
    console.log(
      `Convertendo de ${aConverter.origem} para ${aConverter.destino} usando NovaAPIConversao`
    );
    // Lógica para obter a taxa de conversão
    const taxa = 0.91;
    return aConverter.valor * taxa;
  }
}

export { APIConversaoDiff };
