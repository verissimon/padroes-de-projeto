import {
  FabricaCadeirasEscritorio,
  FabricaSentaveis,
  FabricaTamburete,
} from "./src/FabricaSentaveis"
import { Sentavel } from "./src/Sentavel"

function mainFactoryMethod(): void {
  const fabricaTamburete: FabricaSentaveis = new FabricaTamburete()
  const tamburete: Sentavel = fabricaTamburete.criarSentavel()
  tamburete.sentar()

  const fabricaEscritorio: FabricaSentaveis = new FabricaCadeirasEscritorio()
  const cadeiraEscritorio: Sentavel = fabricaEscritorio.criarSentavel()
  cadeiraEscritorio.sentar()
}

mainFactoryMethod()
