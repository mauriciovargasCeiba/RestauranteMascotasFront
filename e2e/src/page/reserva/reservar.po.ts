import { by, element } from 'protractor';

export class ReservarPage {
    private inputNumeroMesaReserva = element(by.id('numeroMesaReserva'));
    private inputFechaYHoraReserva = element(by.id('fechaYHoraReserva'));
    private inputNombreCompletoClienteReserva = element(by.id('nombreCompletoClienteReserva'));
    private inputTelefonoClienteReserva = element(by.id('telefonoClienteReserva'));
    
    private buttonReservar = element(by.id('reservar'));

    private checkboxIncluyeMascotaReserva = element(by.id('incluyeMascota'));
    private formularioMascota = element(by.id('formularioMascota'));

    private alerta = element(by.id('alerta'));
    
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
        await this.buttonReservar.click();
    }

    async obtenerMensajeAlerta() {
        const mensaje = await this.alerta.getText();
        return mensaje;
    }

    async clickCheckboxIncluyeMascota() {
        await this.checkboxIncluyeMascotaReserva.click();
    }

    async seCreoFormularioMascota() {
        await this.formularioMascota.isPresent();
    }

    obtenerBotonReservar() {
        return this.buttonReservar;
    }

    obtenerAlerta() {
        return this.alerta;
    }

}
