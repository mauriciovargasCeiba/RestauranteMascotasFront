import { browser, by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkReserva = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkMascota = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));

    async clickBotonReservas() {
        browser.actions().mouseMove(this.linkReserva).perform();
        browser.sleep(500);
        await this.linkReserva.click();
    }

    async clickBotonMascotas() {
        browser.actions().mouseMove(this.linkMascota).perform();
        browser.sleep(500);
        await this.linkMascota.click();
    }
}
