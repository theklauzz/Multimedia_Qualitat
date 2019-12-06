import { Component, OnInit } from '@angular/core';
import { HitosService } from '../services/hitos.service';
import { Hito } from '../interfaces/hito';
import { TiposService } from '../services/tipos.service';
import { Tipo } from '../interfaces/tipo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hitoform',
  templateUrl: './hitoform.component.html',
  styleUrls: ['./hitoform.component.css']
})
export class HitoformComponent implements OnInit {
  hitos: Hito[]=[];
  hito: Hito={
    id:null,
    nombreH: null,
    desch: null,
    fechainih:null,
    fechaendh:null,
    tipoh:null,
    created_at:null,
    updated_at: null
  };
  tipos: Tipo[] = [];
  id:any;
  editar:boolean=false;
  constructor(private hitoservice : HitosService,private tiposService:TiposService, 
    private activatedRoute: ActivatedRoute) { 
      this.id=this.activatedRoute.snapshot.params['id'];
      if(this.id){
        this.editar=true;
        this.hitoservice.obtenertipo().subscribe( (data :Hito[])=>{ 
      this.hitos =data;
      this.hito=this.hitos.find((t)=> {return t.id== this.id})
      console.log(this.hito)
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
        this.hitoservice.actualizartipo(this.hito).subscribe(
          (data)=> {alert("hito Actualizado");}
          , (error) =>{alert(error)})
    }
    else{
     this.hitoservice.guardartipo(this.hito).subscribe(
        (data)=> {alert("hito guardado");}
        , (error) =>{alert(error)})
      
      }
    }

  ngOnInit() {
  }

}
