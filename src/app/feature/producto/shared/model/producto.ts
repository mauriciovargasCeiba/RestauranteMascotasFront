export class Producto {
    id: number;
    nombre: string;
    tipo: string;
    tipoCliente: string;
    precio: number;

    constructor(
        id: number,
        nombre: string,
        tipo: string,
        tipoCliente: string,
        precio: number
    ) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.tipoCliente = tipoCliente;
        this.precio = precio;
    }
}
