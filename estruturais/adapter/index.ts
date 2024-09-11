import { APIConversao } from "./src/cliente";
import { ConversorMoedaAdapter } from "./src/conversor-moeda-adapter";
import { APIConversaoDiff } from "./src/servicoAdaptavel";

const apiConversao = new APIConversao();
const apiConversaoDiferente = new APIConversaoDiff();

const apiConversorAdaptado = new ConversorMoedaAdapter(apiConversaoDiferente);

const valorConvertido = apiConversao.converter(100, "USD", "BRL");
const diffValorConvertido = apiConversorAdaptado.converter(100, "USD", "BRL");

console.log(`Valor convertido: ${valorConvertido}`);
console.log(`Valor convertido: ${diffValorConvertido}`);
