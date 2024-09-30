import { Circulo } from './src/Formas/Circulo';
import { Quadrado } from './src/Formas/Quadrado';
import { RenderizadorNaTela } from './src/Renderizadores/RenderizadorNaTela';
import { RenderizadorNoPDF } from './src/Renderizadores/RenderizadorNoPDF';

// Usando a implementação RenderizadorNaTela
const renderizadorTela = new RenderizadorNaTela();
const circuloNaTela = new Circulo(renderizadorTela, 50, 50, 10, 'vermelho');
const quadradoNaTela = new Quadrado(renderizadorTela, 100, 100, 20, 'azul');


// Usando a implementação RenderizadorNoPDF
const renderizadorPDF = new RenderizadorNoPDF();
const circuloNoPDF = new Circulo(renderizadorPDF, 200, 150, 15, 'verde');
const quadradoNoPDF = new Quadrado(renderizadorPDF, 300, 250, 30, 'amarelo');


circuloNaTela.desenhar(); 
circuloNoPDF.desenhar();

quadradoNaTela.desenhar(); 
quadradoNoPDF.desenhar(); 