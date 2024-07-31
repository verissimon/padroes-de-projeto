import store from './src/store';
import { addBook } from './src/reducers';

// Despachar ações para adicionar livros
store.dispatch(addBook({ title: 'Gay de Família', author: 'Felipe Fagundes' }));
store.dispatch(addBook({ title: 'Os Sete Maridos de Evelyn Hugo', author: 'Taylor Jenkins Reid' }));

// Acessar o estado atual da store e imprimir a lista de livros
const currentState = store.getState();
console.log('Current State:', currentState.books);
