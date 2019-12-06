import { Component, OnInit } from '@angular/core';
import {RelojService, valorReloj} from '../services/reloj.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-clock2',
  templateUrl: './clock2.component.html',
  styleUrls: ['./clock2.component.css']
})
export class Clock2Component implements OnInit {
  datos$: Observable<valorReloj>;
  hora: number;
  minutos: string;
  dia: string;
  fecha: string;
  ampm: string;
  segundos: string;

  constructor(private segundo: RelojService) { }

  ngOnInit() {
    this.datos$=this.segundo.getInfoReloj();
    this.datos$.subscribe(x => {
      this.hora = x.hora;
      this.minutos = x.minutos;
      this.dia = x.diadesemana;
      this.fecha = x.diaymes;
      this.ampm = x.ampm;
      this.segundos = x.segundo
    });
  }

}
