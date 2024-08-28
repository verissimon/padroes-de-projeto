import { Sentavel, Tamburete, CadeiraEscritorio } from "./Sentavel"

interface FabricaSentaveis {
  criarSentavel(): Sentavel
}

class FabricaTamburete implements FabricaSentaveis {
  criarSentavel(): Sentavel {
    return new Tamburete()
  }
}

class FabricaCadeirasEscritorio implements FabricaSentaveis {
  criarSentavel(): Sentavel {
    return new CadeiraEscritorio()
  }
}

export { FabricaSentaveis, FabricaTamburete, FabricaCadeirasEscritorio }
