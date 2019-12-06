import { Component, OnInit } from '@angular/core';
import { TiposService } from '../services/tipos.service';
import { Tipo } from '../interfaces/tipo';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  tipo: Tipo = {
    nombreT :null,
    created_at: null,
    updated_at: null
  };
  tipos:Tipo[];
  id:any;
  editar:boolean=false;
  constructor(private tiposService : TiposService  ,private activatedRoute: ActivatedRoute) { 
this.id=this.activatedRoute.snapshot.params['id'];
if(this.id){
  this.editar=true;
  this.tiposService.obtenertipo().subscribe( (data :Tipo[])=>{ 
this.tipos =data;
this.tipo=this.tipos.find((t)=> {return t.id== this.id})
console.log(this.tipo)
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
      this.tiposService.actualizartipo(this.tipo).subscribe(
        (data)=> {alert("Tipo Actualizado");}
        , (error) =>{alert("ocurrio un uwu")})
  }
  else{
   this.tiposService.guardartipo(this.tipo).subscribe(
      (data)=> {alert("Tipo guardado");}
      , (error) =>{alert("ocurrio un error")})
    
    }
  }

  ngOnInit() {
    
  }

}
