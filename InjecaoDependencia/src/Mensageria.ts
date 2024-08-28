export interface Mensageria {
    enviar(email: string, titulo: string, mensagem: string): void;
}