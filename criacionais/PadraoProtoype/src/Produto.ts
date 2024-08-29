export class Produto {
    constructor(private _nome: string, private _preco: number) {}
  
    // Getters
    get nome(): string {
      return this._nome;
    }
  
    get preco(): number {
      return this._preco;
    }
  
    // Setters
    set nome(nome: string) {
      this._nome = nome;
    }
  
    set preco(preco: number) {
      this._preco = preco;
    }
  }
  