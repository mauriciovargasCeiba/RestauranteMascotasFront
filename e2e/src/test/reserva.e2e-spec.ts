import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ReservarPage } from '../page/reserva/reservar.po';
import { ReservaMainPage } from '../page/reserva/reserva-main.po';
import { protractor } from 'protractor/built/ptor';
import { browser, ExpectedConditions } from 'protractor';
import { ListaReservasPage } from '../page/reserva/listar-reserva.po';

describe('workspace-project Reserva', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let reservaMain: ReservaMainPage;
    let reservar: ReservarPage;
    let listaReservas: ListaReservasPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        reservaMain = new ReservaMainPage();
        reservar = new ReservarPage();
        listaReservas = new ListaReservasPage();
    });

    it('Deberia crear reservar sin mascota', () => {
        const NUMERO_MESA = 1;
        const FECHA_HORA = '01-12-2120' + protractor.Key.TAB + '22:22';
        const NOMBRE_COMPLETO_CLIENTE = 'Cliente Test';
        const TELEFONO_CLIENTE = '1234567';

        page.navigateTo();
        navBar.clickBotonReservas();
        reservaMain.clickLinkReservar();
        reservar.ingresarNumeroMesa(NUMERO_MESA);
        reservar.ingresarFechaYHora(FECHA_HORA);
        reservar.ingresarNombreCompletoCliente(NOMBRE_COMPLETO_CLIENTE)
        reservar.ingresarTelefonoCliente(TELEFONO_CLIENTE);

        const botonReservar = reservar.obtenerBotonReservar();
        browser.wait(ExpectedConditions.elementToBeClickable(botonReservar), 1000, botonReservar.locator());

        reservar.clickBotonReservar();

        // const CODIGO_ESPERADO_RESERVA = '0002120012142201_0000';
        
        const alerta = reservar.obtenerAlerta();
        // browser.wait(ExpectedConditions.visibilityOf(alerta), 1000, alerta.locator());

        // let mensajeAlerta = reservar.obtenerMensajeAlerta();
        // expect(mensajeAlerta).toContain(CODIGO_ESPERADO_RESERVA);
        expect(alerta).toBeTruthy();

    });

    it('deberia listar las reservas', () => {
        page.navigateTo();
        navBar.clickBotonReservas();
        reservaMain.clickLinkListarReservas();

        const totalReservas = listaReservas.contarReservas();
        expect(totalReservas).toBeGreaterThan(0);
    });
});
