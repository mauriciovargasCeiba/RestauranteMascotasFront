import { browser, by, element } from 'protractor';

export class ReservaMainPage {
    private linkReservar = element(by.id('linkReservar'));
    private linkCancelarReserva = element(by.id('linkCancelarReserva'));
    private linkListarReservas = element(by.id('linkListarReservas'));
    private linkMostrarReserva = element(by.id('linkMostrarReservas'));

    async clickLinkReservar() {
        browser.actions().mouseMove(this.linkReservar).perform();
        browser.sleep(500);
        await this.linkReservar.click();
    }

    async clickLinkCancelarReserva() {
        browser.actions().mouseMove(this.linkCancelarReserva).perform();
        browser.sleep(500);
        await this.linkCancelarReserva.click();
    }

    async clickLinkListarReservas() {
        browser.actions().mouseMove(this.linkListarReservas).perform();
        browser.sleep(500);
        await this.linkListarReservas.click();
    }

    async clickLinkMostrarReserva() {
        browser.actions().mouseMove(this.linkMostrarReserva).perform();
        browser.sleep(500);
        await this.linkMostrarReserva.click();
    }
}