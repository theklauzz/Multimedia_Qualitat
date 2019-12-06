import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anuncio } from '../interfaces/anuncio';
import { AnunciosService } from '../services/anuncios.service';

@Component({
  selector: 'app-anuncio-form',
  templateUrl: './anuncio-form.component.html',
  styleUrls: ['./anuncio-form.component.css']
})
export class AnuncioFormComponent implements OnInit {
  anuncio: Anuncio = {
    Titulo :null,
    desca: null,
    created_at: null,
    updated_at: null
  };
  anuncios:Anuncio[];
  id:any;
  editar:boolean=false;
  constructor(private activatedRoute: ActivatedRoute,private anunciosservice:AnunciosService) {
    this.id=this.activatedRoute.snapshot.params['id'];
if(this.id){
  this.editar=true;
  this.anunciosservice.obtenertipo().subscribe( (data :Anuncio[])=>{ 
this.anuncios =data;
this.anuncio=this.anuncios.find((t)=> {return t.id== this.id})
console.log(this.anuncio)
  }
  , (error)=>{
console.log(error);
  } )
}else{
  this.editar=false;
  
}
  }
  saveTipo(){
    if(this.editar){
      this.anunciosservice.actualizartipo(this.anuncio).subscribe(
        (data)=> {alert("Tipo Actualizado");}
        , (error) =>{alert("ocurrio un uwu")})
  }
  else{
   this.anunciosservice.guardartipo(this.anuncio).subscribe(
      (data)=> {alert("Tipo guardado");}
      , (error) =>{alert("ocurrio un error")})
    
    }
  }

  ngOnInit() {
  }

}
