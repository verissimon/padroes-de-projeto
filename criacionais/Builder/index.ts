import { Diretor } from './src/Diretor';
import { MontarQuarto } from './src/MontarQuarto';

function main() {
    const builderSimples = new MontarQuarto();
    const diretor = new Diretor(builderSimples);

    console.log("Quarto Simples");
    diretor.montarQuartoSimples();
    builderSimples.getQuarto().listItens();

    const builderCompleto = new MontarQuarto();
    diretor.setBuilder(builderCompleto);

    console.log("Quarto Completo");
    diretor.montarQuartoCompleto();
    builderCompleto.getQuarto().listItens();

    const builderPersonalizado = new MontarQuarto();
    diretor.setBuilder(builderPersonalizado);

    console.log("Quarto Personalizado");
    diretor.montarQuartoPersonalizado();
    builderPersonalizado.getQuarto().listItens();
}

main();