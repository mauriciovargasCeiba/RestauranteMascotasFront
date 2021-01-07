import { Component, OnInit } from '@angular/core';
import { TcrmService } from '@core/services/tcrm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tcrm: number;

  constructor(protected tcrmServices: TcrmService) { }

  ngOnInit() {
    this.tcrmServices.obtenerTCRM().subscribe(tcrm => {
      this.tcrm = tcrm;
    });
  }

}
