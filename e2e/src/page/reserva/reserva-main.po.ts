import { by, element } from 'protractor';

export class ReservaMainPage {
    private linkReservar = element(by.id('linkReservar'));
    private linkCancelarReserva = element(by.id('linkCancelarReservar'));
    private linkListarReservas = element(by.id('linkListarReservas'));

    async clickLinkReservar() {
        await this.linkReservar.click();
    }

    async clickLinkCancelarReserva() {
        await this.linkCancelarReserva.click();
    }

    async clickLinkListarReservas() {
        await this.linkListarReservas.click();
    }
}