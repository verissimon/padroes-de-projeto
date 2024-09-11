// Cliente
interface ConversorMoeda {
  converter(valor: number, de: string, para: string): number;
}

class APIConversao implements ConversorMoeda {
  converter(valor: number, de: string, para: string): number {
    console.log(
      `Convertendo ${valor} de ${de} para ${para} usando APIConversao`
    );
    // Lógica para obter a taxa de conversão
    const taxa = 0.91;
    return valor * taxa;
  }
}

export { ConversorMoeda, APIConversao };
