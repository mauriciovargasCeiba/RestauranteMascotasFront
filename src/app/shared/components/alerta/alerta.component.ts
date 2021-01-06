import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  @Input() mensaje: string;
  @Input() tipo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
