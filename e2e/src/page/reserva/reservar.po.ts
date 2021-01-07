import { browser, by, element } from 'protractor';
import { ConAlertasPage } from '../alerta/alerta.po';

export class ReservarPage extends ConAlertasPage {
    private inputNumeroMesaReserva = element(by.id('numeroMesaReserva'));
    private inputFechaYHoraReserva = element(by.id('fechaYHoraReserva'));
    private inputNombreCompletoClienteReserva = element(by.id('nombreCompletoClienteReserva'));
    private inputTelefonoClienteReserva = element(by.id('telefonoClienteReserva'));
    private buttonReservar = element(by.id('reservar'));

    private checkboxIncluyeMascotaReserva = element(by.id('incluyeMascota'));
    private formularioMascota = element(by.id('formularioMascota'));
    private inputNombreMascota = element(by.id('nombreMascota'));
    private inputEspecieMascota = element(by.id('especieMascota'));
    private inputEdadMascota = element(by.id('edadMascota'));
    private buttonRegistrarMascota = element(by.id('registrarMascota'));
    
    async ingresarNumeroMesa(numeroMesa) {
        await this.inputNumeroMesaReserva.sendKeys(numeroMesa);
    }

    async ingresarFechaYHora(fechaYHora) {
        await this.inputFechaYHoraReserva.sendKeys(fechaYHora);
    }

    async ingresarNombreCompletoCliente(nombreCompletoCliente) {
        await this.inputNombreCompletoClienteReserva.sendKeys(nombreCompletoCliente);
    }

    async ingresarTelefonoCliente(telefonoCliente) {
        await this.inputTelefonoClienteReserva.sendKeys(telefonoCliente);
    }

    async clickBotonReservar() {
        browser.actions().mouseMove(this.buttonReservar).perform();
        browser.sleep(500);
        await this.buttonReservar.click();
    }

    async clickCheckboxIncluyeMascota() {
        browser.actions().mouseMove(this.checkboxIncluyeMascotaReserva).perform();
        browser.sleep(500);
        await this.checkboxIncluyeMascotaReserva.click();
    }

    obtenerBotonReservar() {
        return this.buttonReservar;
    }

    obtenerFormularioRegistroMascota() {
        return this.formularioMascota;
    }

    async ingresarNombreMascota(nombre) {
        await this.inputNombreMascota.sendKeys(nombre);
    }

    async ingresarEspecieMascota(especie) {
        await this.inputEspecieMascota.sendKeys(especie);
    }

    async ingresarEdadMascota(edad) {
        await this.inputEdadMascota.sendKeys(edad);
    }

    obtenerBotonRegistrarMascota() {
        return this.buttonRegistrarMascota;
    }

    async clickBotonRegistrarMascota() {
        browser.actions().mouseMove(this.buttonRegistrarMascota).perform();
        browser.sleep(500);
        await this.buttonRegistrarMascota.click();
    }


}
