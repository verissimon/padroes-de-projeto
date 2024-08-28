import { injectable } from 'tsyringe';
import { Mensageria } from './Mensageria';

//Indica essa classe pode ser instanciada e injetada em outras classes
@injectable()
export class EmailMensageria implements Mensageria {
    public enviar(email: string, titulo: string, mensagem: string): void {
        console.log(`E-mail enviado para ${email} com o título "${titulo}" e a mensagem: "${mensagem}" por Email`);
    }
}