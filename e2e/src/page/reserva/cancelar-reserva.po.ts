import { by, element } from 'protractor';
import { ConAlertasPage } from '../alerta/alerta.po';

export class CancelarReservaPage extends ConAlertasPage {
    private inputCodigoReserva = element(by.id('codigoReserva'));

    private buttonCancelarReserva = element(by.id('cancelarReserva'));

    async ingresarCodigo(codigoReserva) {
        await this.inputCodigoReserva.sendKeys(codigoReserva);
    }

    async clickBotonCancelar() {
        await this.buttonCancelarReserva.click();
    }
    
}