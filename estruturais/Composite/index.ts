// src/index.ts
import { Pasta } from "./src/Pasta";
import { Arquivo } from "./src/Arquivo";

// Cria a pasta raiz
const pastaRaiz = new Pasta('pastaRaiz');

// Cria subpastas
const pasta1 = new Pasta('pasta1');
const pasta2 = new Pasta('pasta2');

// Cria arquivos
const arquivo1 = new Arquivo('arquivo1.txt', 100);
const arquivo2 = new Arquivo('arquivo2.txt', 200);
const arquivo3 = new Arquivo('arquivo3.txt', 300);
const arquivo4 = new Arquivo('arquivo4.txt', 400);

// Adiciona arquivos às subpastas
pasta1.adicionar(arquivo1);
pasta1.adicionar(arquivo2);

// Adiciona um arquivo à segunda subpasta
pasta2.adicionar(arquivo3);

// Adiciona subpastas e um arquivo diretamente à pasta raiz
pastaRaiz.adicionar(pasta1);
pastaRaiz.adicionar(pasta2);
pastaRaiz.adicionar(arquivo4);

// Exibe a estrutura da pasta raiz e o tamanho total dos componentes
console.log(pastaRaiz.toString());
