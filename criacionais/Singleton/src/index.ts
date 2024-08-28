import 'reflect-metadata'; // Necessário para tsyringe
import { container } from 'tsyringe';
import { ConnectionPool } from './ConnectionPool';

// Obtendo a instância Singleton do ConnectionPool
const pool1 = container.resolve(ConnectionPool);

const connection1 = pool1.getConnection();
connection1.query("SELECT * FROM users");

const connection2 = pool1.getConnection();
connection2.query("SELECT * FROM orders");

pool1.releaseConnection(connection1);

const connection3 = pool1.getConnection();
connection3.query("SELECT * FROM products");

// Testando se a mesma instância é retornada
const pool2 = container.resolve(ConnectionPool);
console.log(pool1 === pool2); // true