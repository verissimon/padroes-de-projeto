import { Icon } from './src/Icon';
import { IconFactory } from './src/IconFactory';


const app = () => {
  
  const factory = IconFactory.getInstancia(); // Obtém a instância única da fábrica de ícones

  // Cria ou obtém ícones usando a fábrica e define cores
  const icon1 = new Icon(factory.getIcon('home'), 'azul');   
  const icon2 = new Icon(factory.getIcon('settings'), 'vermelho'); 
  const icon3 = new Icon(factory.getIcon('home'), 'verde'); 


  icon1.exibir();
  icon2.exibir();
  icon3.exibir();

  // Mostra o número de ícones únicos na fábrica
  console.log(`Total de ícones na memória Flyweight: ${factory.getTamanho()}`);
};

app();
