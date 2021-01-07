import { by, element } from 'protractor';

export class ConAlertasPage {
    private alerta = element(by.id('alerta'));

    async obtenerMensajeAlerta() {
        const mensaje = await this.alerta.getText();
        return mensaje;
    }

    obtenerAlerta() {
        return this.alerta;
    }
}