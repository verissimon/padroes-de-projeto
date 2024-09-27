import { IconFlyweight } from './IconFlyweight';

//A classe `Icon` usa um `IconFlyweight` para representar ícones com atributos
//intrínsecos compartilhados e atributos extrínsecos, como a cor, que são específicos
//para cada instância.
export class Icon {
  private iconFlyweight: IconFlyweight;
  private cor: string;

  constructor(iconFlyweight: IconFlyweight, cor: string) {
    this.iconFlyweight = iconFlyweight;
    this.cor = cor;
  }

  public exibir(): void {
    console.log(`Ícone: ${this.iconFlyweight.getNome()}, Cor: ${this.cor}`);
  }
}
