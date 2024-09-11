import { ConversorMoeda } from "./cliente";
import { APIConversaoDiff } from "./servicoAdaptavel";

class ConversorMoedaAdapter implements ConversorMoeda {
  private novaAPI: APIConversaoDiff;

  constructor(novaAPI: APIConversaoDiff) {
    this.novaAPI = novaAPI;
  }

  converter(valor: number, de: string, para: string): number {
    return this.novaAPI.obterConversao({
      destino: para,
      valor,
      origem: de,
      data: new Date(),
    });
  }
}

export { ConversorMoedaAdapter };
