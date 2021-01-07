import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ReservarPage } from '../page/reserva/reservar.po';
import { ReservaMainPage } from '../page/reserva/reserva-main.po';
import { protractor } from 'protractor/built/ptor';
import { browser, ExpectedConditions } from 'protractor';
import { ListaReservasPage } from '../page/reserva/listar-reserva.po';
import { MostrarReservaPage } from '../page/reserva/mostrar-reserva.po';
import { CancelarReservaPage } from '../page/reserva/cancelar-reserva.po';

describe('workspace-project Reserva', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let reservaMain: ReservaMainPage;
    let reservar: ReservarPage;
    let listaReservas: ListaReservasPage;
    let mostrarReserva: MostrarReservaPage;
    let cancelarReserva: CancelarReservaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        reservaMain = new ReservaMainPage();
        reservar = new ReservarPage();
        listaReservas = new ListaReservasPage();
        mostrarReserva = new MostrarReservaPage();
        cancelarReserva = new CancelarReservaPage();
    });

    it('Deberia crear reservar sin mascota, listar todas las reservas, mostrar una reserva específica y cancelar la reserva', () => {
        const NUMERO_MESA = 1;
        const FECHA_HORA = '01-12-2120' + protractor.Key.TAB + '22:22';
        const NOMBRE_COMPLETO_CLIENTE = 'Cliente Test';
        const TELEFONO_CLIENTE = '1234567';


        /* CREAR RESERVA */
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

        const alertaReservar = reservar.obtenerAlerta();
        expect(alertaReservar).toBeTruthy(); 
        
        const CODIGO_ESPERADO_RESERVA = '0002120012142201_0000';
        browser.wait(ExpectedConditions.visibilityOf(alertaReservar), 1000, alertaReservar.locator());

        let mensajeAlertaReservar = reservar.obtenerMensajeAlerta();
        expect(mensajeAlertaReservar).toContain(CODIGO_ESPERADO_RESERVA); // ¿Test frágil?


        /* LISTAR TODAS LAS RESERVAS */
        reservaMain.clickLinkListarReservas();

        const totalReservas = listaReservas.contarReservas();
        expect(totalReservas).toBeGreaterThan(0);


        /* MOSTRAR LA RESERVA CREADA */
        reservaMain.clickLinkMostrarReserva();
        mostrarReserva.ingresarCodigo(CODIGO_ESPERADO_RESERVA);
        mostrarReserva.clickBotonMostrarReserva();

        mostrarReserva.obtenerDetallesReserva().then(detalles => {
            expect(detalles[0]).toContain(NOMBRE_COMPLETO_CLIENTE);
        });

        /* CANCELAR LA RESERVA CREADA */
        reservaMain.clickLinkCancelarReserva();
        cancelarReserva.ingresarCodigo(CODIGO_ESPERADO_RESERVA);
        cancelarReserva.clickBotonCancelar();

        const alertaCancelarReserva = cancelarReserva.obtenerAlerta();
        expect(alertaCancelarReserva).toBeTruthy(); 
        
        browser.wait(ExpectedConditions.visibilityOf(alertaCancelarReserva), 1000, alertaCancelarReserva.locator());

        let mensajeCancelarAlerta = reservar.obtenerMensajeAlerta();
        expect(mensajeCancelarAlerta).toContain(CODIGO_ESPERADO_RESERVA);

    });

});
