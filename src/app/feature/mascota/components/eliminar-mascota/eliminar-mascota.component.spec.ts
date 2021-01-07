import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { EliminarMascotaComponent } from './eliminar-mascota.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HttpService } from '@core/services/http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { MascotaService } from '@core/services/mascota.service';

describe('EliminarMascotaComponent', () => {
  let component: EliminarMascotaComponent;
  let fixture: ComponentFixture<EliminarMascotaComponent>;
  let mascotaService: MascotaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarMascotaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [MascotaService, HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarMascotaComponent);
    component = fixture.componentInstance;
    mascotaService = TestBed.inject(MascotaService);
    spyOn(mascotaService, 'eliminar').and.returnValue(of(true));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('eliminar una mascota', () => {
    component.eliminarMascotaForm.controls.id.setValue(1);
    component.eliminar();
    expect(component.alerta.mensaje).toBe('La mascota con id 1 ha sido eliminada con éxito');
  });

  it('mostrar error al eliminar mascota', () => {
    mascotaService.eliminar = jasmine.createSpy().and.returnValue(throwError({ error: { mensaje: 'Mensaje de error de mascota' }}))
    component.eliminarMascotaForm.controls.id.setValue(1);
    
    component.eliminar();
    
    expect(component.alerta.mensaje).toBe('Mensaje de error de mascota');
    expect(component.alerta.tipoMensaje).toBe('error');
  });

});
