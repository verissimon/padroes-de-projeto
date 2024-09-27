// Define a interface que todas as classes (Arquivo e Pasta) devem implementar.
export interface Componente {
    nome: string;
    mostrar(): any;
    getTamanho(): number;
}
