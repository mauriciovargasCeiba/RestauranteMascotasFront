export class Reserva {
    id: number;
    numeroMesa: number;
    fechaYHora: Date;
    nombreCompletoCliente: string;
    telefonoCliente: string;
    idMascota: string;
    codigoGenerado: string;

    constructor(id: number, numeroMesa: number, fechaYHora: Date, nombreCompletoCliente: string, telefonoCliente: string, idMascota: string, codigoGenerado: string) {
        this.id = id;
        this.numeroMesa = numeroMesa;
        this.fechaYHora = fechaYHora;
        this.nombreCompletoCliente = nombreCompletoCliente;
        this.telefonoCliente = telefonoCliente;
        this.idMascota = idMascota;
        this.codigoGenerado = codigoGenerado;
    }
}
