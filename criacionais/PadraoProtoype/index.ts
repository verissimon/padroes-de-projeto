import { clone } from 'ramda';
import { Endereco } from './endereco';
import { Pessoa } from './pessoa';

// Criando uma instância de Endereço
const enderecoOriginal = new Endereco('Rua A', 123, 'Cidade X', 'Estado Y');

// Criando uma instância de Pessoa
const pessoaOriginal = new Pessoa('João', 30, enderecoOriginal);

// Clonando a instância de Pessoa usando Ramda
const pessoaClonada = clone(pessoaOriginal);

console.log('Pessoa Original:', pessoaOriginal.toString());
console.log('Pessoa Clonada:', pessoaClonada.toString());
console.log('');


// Modificando o clone
pessoaClonada.nome = 'Maria';
pessoaClonada.idade = 25;
pessoaClonada.endereco.rua = 'Rua Joazinho';
pessoaClonada.endereco.cidade = 'Cidade Y';
pessoaClonada.endereco.estado = 'Estado Z';

console.log('Pessoa Original:', pessoaOriginal.toString());
console.log('Pessoa Clonada:', pessoaClonada.toString());
