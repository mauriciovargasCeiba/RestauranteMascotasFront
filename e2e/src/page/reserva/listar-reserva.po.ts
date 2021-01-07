import { by, element } from 'protractor';

export class ListaReservasPage {
    private mensajeNoExistenReservas = element(by.id('noExistenReservas'));
    private itemsListaReservas = element.all(by.css('#listaReservas li'));

    obtenerMensajeNoExistenReservas() {
        return this.mensajeNoExistenReservas;
    }

    async contarReservas() {
        const totalReservas = await this.itemsListaReservas.count();
        return totalReservas;
    }

}