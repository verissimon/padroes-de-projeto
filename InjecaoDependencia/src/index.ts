import 'reflect-metadata';
import { container } from 'tsyringe';
import './ConfigMsg'; 
import { ClienteMensagem } from './ClienteMensagem'; 

// Resolva e cria uma instância de ClienteMensagem com todas as dependências injetadas
const clienteDeMensagem = container.resolve(ClienteMensagem);

// Usa a dependência injetada para enviar uma mensagem 
clienteDeMensagem.enviarMensagem('exemplo@exemplo.com', 'Olá', 'Esta é uma mensagem de teste.');