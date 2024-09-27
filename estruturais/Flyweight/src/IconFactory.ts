import { IconFlyweight } from './IconFlyweight';

//A classe `IconFactory` é uma fábrica que gerencia a criação e o compartilhamento
//de instâncias de `IconFlyweight`. Utiliza o padrão Flyweight para economizar memória
//compartilhando instâncias imutáveis de ícones.
export class IconFactory {
  private static instancia: IconFactory = new IconFactory();
  private static repositorioDeIcones: Map<string, IconFlyweight>;

  private constructor() {
    IconFactory.repositorioDeIcones = new Map<string, IconFlyweight>();
  }

  public static getInstancia(): IconFactory {
    return IconFactory.instancia;
  }

  public getIcon(nome: string): IconFlyweight {
    let icon = IconFactory.repositorioDeIcones.get(nome);
    if (!icon) {
      console.log(`Criando novo Flyweight para ${nome}`);
      icon = new IconFlyweight(nome);
      IconFactory.repositorioDeIcones.set(nome, icon);
    }
    return icon;
  }

  public getTamanho(): number {
    return IconFactory.repositorioDeIcones.size;
  }
}
