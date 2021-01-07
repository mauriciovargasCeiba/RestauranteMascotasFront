import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarMascotaComponent } from './listar-mascota.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { MascotaService } from '@core/services/mascota.service';
import { Mascota } from '@core/modelo/mascota';

describe('ListarMascotaComponent', () => {
  let component: ListarMascotaComponent;
  let fixture: ComponentFixture<ListarMascotaComponent>;
  let mascotaService: MascotaService;
  const listaMascotas: Mascota[] = [
    new Mascota(1, 'Mascota 1', 'PERRO', 5),
    new Mascota(2, 'Mascota 2', 'GATO', 5)
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarMascotaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [MascotaService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMascotaComponent);
    component = fixture.componentInstance;
    mascotaService = TestBed.inject(MascotaService);
    spyOn(mascotaService, 'listar').and.returnValue(
      of(listaMascotas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(2).toBe(component.listaMascotas.length);
});

});
