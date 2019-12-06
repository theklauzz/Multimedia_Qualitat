import { Component, OnInit } from '@angular/core';
import { HitosService } from '../services/hitos.service';
import { Hito } from '../interfaces/hito';
import { TiposService } from '../services/tipos.service';
import { Tipo } from '../interfaces/tipo';

@Component({
  selector: 'app-hitocom',
  templateUrl: './hitocom.component.html',
  styleUrls: ['./hitocom.component.css']
})
export class HitocomComponent implements OnInit {

  hitos: Hito[]=[];
  hito: Hito;
  tipos: Tipo[] = [];
  constructor(private hitoservice : HitosService ) {
   }
  
   getUsers(){
    this.hitoservice.getUsers().subscribe(data => {
      this.hitos=data;
    });
  }

  ngOnInit() {
    this.getUsers();

  }
  delete(id){
    if(confirm("Seguro que desea eliminar este tipo")){
      this.hitoservice.delete(id).subscribe((data)=>{
        alert("eliminado con exito");
        console.log(data);
        this.getUsers();
      } , (error)=>{
        console.log(error);
      })
    }
  }
}
