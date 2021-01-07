import { by, element } from 'protractor';

export class ListaReservasPage {
    private mensajeNoExistenReservas = element(by.id('noExistenReservas'));
    private listaReservas = element.all(by.css('#listaReservas li'));

    async verificarNoExistenReservas() {
        const noExistenReservas = await this.mensajeNoExistenReservas.isPresent();
        return noExistenReservas;
    }

    async contarReservas() {
        const totalReservas = await this.listaReservas.count();
        return totalReservas;
    }

}