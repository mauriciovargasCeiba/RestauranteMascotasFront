import { browser, by, element } from 'protractor';
import { ConAlertasPage } from '../alerta/alerta.po';

export class CancelarReservaPage extends ConAlertasPage {
    private inputCodigoReserva = element(by.id('codigoReserva'));

    private buttonCancelarReserva = element(by.id('cancelarReserva'));

    async ingresarCodigo(codigoReserva) {
        await this.inputCodigoReserva.sendKeys(codigoReserva);
    }

    async clickBotonCancelar() {
        browser.actions().mouseMove(this.buttonCancelarReserva).perform();
        browser.sleep(500);
        await this.buttonCancelarReserva.click();
    }
    
}