abstract class Sentavel {
  abstract sentar(): void
}

class Tamburete extends Sentavel {
  sentar(): void {
    console.log("sentou no tamburete")
  }
}

class CadeiraEscritorio extends Sentavel {
  sentar(): void {
    console.log("sentou na cadeira de Escritório")
  }
}

export { Sentavel, Tamburete, CadeiraEscritorio }
