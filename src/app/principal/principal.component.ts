import { Component, OnInit } from '@angular/core';
import { Anuncio } from '../interfaces/anuncio';
import { AnunciosService } from '../services/anuncios.service';
import { TiposService } from '../services/tipos.service';
import { Tipo } from '../interfaces/tipo';
import { HitosService } from '../services/hitos.service';
import { Hito } from '../interfaces/hito';
import {RelojService, valorReloj} from '../services/reloj.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  datos$: Observable<valorReloj>;
  hora: number;
  minutos: string;
  dia: string;
  fecha: string;
  ampm: string;
  segundos: string;
 
  hitos: Hito[]=[];
  anuncios: Anuncio[] = [];
  constructor(private hitoservice : HitosService,private segundo: RelojService, private anuncioservice:AnunciosService) { }
  getHitos(){
    this.hitoservice.getUsers().subscribe(data => {
      this.hitos=data;
    });
  }
  getAnuncios(){
    this.anuncioservice.getUsers().subscribe(data => {
      this.anuncios=data;
    });
  }

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
    this.getHitos();
    this.getAnuncios();
  }

}
