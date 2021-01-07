import { browser, by, element } from 'protractor';
import { ConAlertasPage } from '../../shared/alerta.po';

export class EliminarMascotaPage extends ConAlertasPage {
    private inputIdMascota = element(by.id('idMascota'));

    private buttonEliminarMascota = element(by.id('eliminarMascota'));

    async ingresarId(idMascota) {
        await this.inputIdMascota.sendKeys(idMascota);
    }

    async clickBotonEliminar() {
        browser.actions().mouseMove(this.buttonEliminarMascota).perform();
        browser.sleep(500);
        await this.buttonEliminarMascota.click();
    }
    
}