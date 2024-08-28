import { container } from 'tsyringe';
import { EmailMensageria } from './EmailMensageria'; 
import { SmsMensageria } from './SmsMensageria'; 
import { Mensageria } from './Mensageria'; 

// Registrar Email como a implementação padrão
container.registerSingleton<Mensageria>('Mensageria', EmailMensageria);

// Alternativamente, você pode registrar Sms como a implementação padrão
// container.registerSingleton<Mensageria>('Mensageria', SmsMensageria);
