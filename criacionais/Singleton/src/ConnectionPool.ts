import { singleton } from 'tsyringe';
import { Connection } from './Connection';

@singleton()
export class ConnectionPool {
    private connections: Connection[] = [];
    private maxConnections: number = 2;

    constructor() {
        for (let i = 0; i < this.maxConnections; i++) {
            this.connections.push(new Connection(i + 1));
        }
    }

    public getConnection(): Connection {
        if (this.connections.length > 0) {
            return this.connections.pop()!;
        } else {
            throw new Error("Nenhuma conexão disponível");
        }
    }

    public releaseConnection(connection: Connection): void {
        this.connections.push(connection);
        console.log(`Conexão ${connection.id} devolvida ao pool.`);
    }
}