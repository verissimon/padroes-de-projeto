export class Connection {
    public id: number;
  
    constructor(id: number) {
      this.id = id;
      console.log(`Conexão ${this.id} criada.`);
    }
  
    public query(sql: string): void {
        console.log(`Executando consulta na conexão ${this.id}: ${sql}`);
    }
  }