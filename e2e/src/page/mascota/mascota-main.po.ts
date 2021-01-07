import { browser, by, element } from 'protractor';

export class MascotaMainPage {
    private linkEliminarMascota = element(by.id('linkEliminarMascota'));
    private linkListarMascotas = element(by.id('linkListarMascotas'));

    async clickLinkEliminarMascota() {
        browser.actions().mouseMove(this.linkEliminarMascota).perform();
        browser.sleep(500);
        await this.linkEliminarMascota.click();
    }

    async clickLinkListarMascotas() {
        browser.actions().mouseMove(this.linkListarMascotas).perform();
        browser.sleep(500);
        await this.linkListarMascotas.click();
    }

}