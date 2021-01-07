import { by, element } from 'protractor';

export class ListaMascotasPage {
    private mensajeNoExistenMascotas = element(by.id('noExistenMascotas'));
    private itemsListaMascotas = element.all(by.css('#listaMascotas li'));

    obtenerMensajeNoExistenMascotas() {
        return this.mensajeNoExistenMascotas;
    }

    async contarMascotas() {
        const totalMascotas = await this.itemsListaMascotas.count();
        return totalMascotas;
    }

}