import { browser, by, element } from 'protractor';

export class MostrarReservaPage {
    private inputCodigoReserva = element(by.id('codigoReserva'));

    private buttonMostrarReserva = element(by.id('mostrarReserva'));

    private reserva = element.all(by.id('reserva'));

    async ingresarCodigo(codigoReserva) {
        await this.inputCodigoReserva.sendKeys(codigoReserva);
    }
    
    async clickBotonMostrarReserva() {
        browser.actions().mouseMove(this.buttonMostrarReserva).perform();
        browser.sleep(500);
        await this.buttonMostrarReserva.click();
    }

    async obtenerDetallesReserva() {
        const detallesReserva = await this.reserva.getText();
        return detallesReserva;
    }
    
}