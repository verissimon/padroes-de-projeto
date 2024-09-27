//A classe `IconFlyweight` representa um ícone com atributos intrínsecos que são compartilhados 
//entre diferentes instâncias. Estes atributos não mudam e são usados para economizar memória e 
//otimizar o desempenho.

export class IconFlyweight {
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  public getNome(): string {
    return this.nome;
  }

  public toString(): string {
    return `IconFlyweight [nome=${this.nome}]`;
  }
}
