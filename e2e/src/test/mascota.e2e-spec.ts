import { browser, ExpectedConditions } from "protractor";
import { AppPage } from "../app.po";
import { MascotaMainPage } from "../page/mascota/mascota-main.po";
import { NavbarPage } from "../page/navbar/navbar.po";
import { ReservaMainPage } from "../page/reserva/reserva-main.po";
import { ReservarPage } from "../page/reserva/reservar.po";
import { ListaMascotasPage } from "../page/mascota/listar-mascota.po";
import { EliminarMascotaPage } from "../page/mascota/eliminar-mascota.po";

describe('workspace-project Mascota', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let reservaMain: ReservaMainPage;
    let reservar: ReservarPage;
    let mascotaMain: MascotaMainPage;
    let listaMascotas: ListaMascotasPage;
    let eliminarMascota: EliminarMascotaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        reservaMain = new ReservaMainPage();
        reservar = new ReservarPage();
        mascotaMain = new MascotaMainPage();
        listaMascotas = new ListaMascotasPage();
        eliminarMascota = new EliminarMascotaPage();
    });

    it('deberia crear una mascota, listar todas las mascotas y eliminar la mascota', () => {
        const NOMBRE_MASCOTA = 'Mascota Test';
        const ESPECIE_MASCOTA = 'PERRO';
        const EDAD_MASCOTA = 5;

        const ID_ESPERADO_MASCOTA = 1;


        /* CREAR MASCOTA */
        page.navigateTo();
        navBar.clickBotonReservas();
        reservaMain.clickLinkReservar();
        reservar.clickCheckboxIncluyeMascota();

        const formularioRegistroMascota = reservar.obtenerFormularioRegistroMascota();
        browser.wait(ExpectedConditions.visibilityOf(formularioRegistroMascota), 1000, formularioRegistroMascota.locator());
        expect(formularioRegistroMascota).toBeTruthy();

        reservar.ingresarNombreMascota(NOMBRE_MASCOTA);
        reservar.ingresarEspecieMascota(ESPECIE_MASCOTA);
        reservar.ingresarEdadMascota(EDAD_MASCOTA);

        const botonRegistrarMascota = reservar.obtenerBotonRegistrarMascota();
        browser.wait(ExpectedConditions.elementToBeClickable(botonRegistrarMascota), 1000, botonRegistrarMascota.locator());
        
        reservar.clickBotonRegistrarMascota();
        const alertaRegistrarMascota = reservar.obtenerAlerta();
        expect(alertaRegistrarMascota).toBeTruthy(); 
        browser.wait(ExpectedConditions.visibilityOf(alertaRegistrarMascota), 1000, alertaRegistrarMascota.locator());
        const mensajeAlertaRegistrarMascota = reservar.obtenerMensajeAlerta();
        expect(mensajeAlertaRegistrarMascota).toContain(ID_ESPERADO_MASCOTA);


        /* LISTAR TODAS LAS MASCOTAS */
        navBar.clickBotonMascotas();
        mascotaMain.clickLinkListarMascotas();

        const totalMascotas = listaMascotas.contarMascotas();
        expect(totalMascotas).toBeGreaterThan(0);


        /* ELIMINAR MASCOTA */
        mascotaMain.clickLinkEliminarMascota();
        eliminarMascota.ingresarId(ID_ESPERADO_MASCOTA);
        eliminarMascota.clickBotonEliminar();

        const alertaEliminarMascota = eliminarMascota.obtenerAlerta();
        expect(alertaEliminarMascota).toBeTruthy(); 
        
        browser.wait(ExpectedConditions.visibilityOf(alertaEliminarMascota), 1000, alertaEliminarMascota.locator());

        const mensajeEliminarAlerta = eliminarMascota.obtenerMensajeAlerta();
        expect(mensajeEliminarAlerta).toContain(ID_ESPERADO_MASCOTA);
    });
});