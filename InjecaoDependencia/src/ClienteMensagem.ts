import { injectable, inject } from 'tsyringe';
import { Mensageria } from './Mensageria';


//Indica essa classe pode ser instanciada e injetada em outras classes
@injectable()
export class ClienteMensagem {
    //Preciso de uma mensageria para enviar minha msg
    private mensageria: Mensageria;

    // O 'inject' faz a injeção de dependência, resolvendo a implementação correta
    // O container de DI irá fornecer a instância correta de Mensageria 
    //quando 'ClienteMensagem' for instanciada
    constructor(@inject('Mensageria') mensageria: Mensageria) {
        this.mensageria = mensageria;
    }

    public enviarMensagem(email: string, titulo: string, mensagem: string): void {
        this.mensageria.enviar(email, titulo, mensagem);
    }
}