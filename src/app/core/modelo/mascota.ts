export class Mascota {
    id: number;
    nombre: string;
    especie: string;
    edad: number;

    constructor(id: number, nombre: string, especie: string, edad: number) {
        this.id = id;
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
    }
}