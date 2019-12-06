import { Component, OnInit } from '@angular/core';
import { TiposService } from '../services/tipos.service';
import { Tipo } from '../interfaces/tipo';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tipos: Tipo[] = [];
 
  constructor( private tiposService : TiposService) {}
  getUsers(){
    this.tiposService.getUsers().subscribe(data => {
      this.tipos=data;
    });
  }
   
  

  ngOnInit() {
   
    this.getUsers();
  }
  delete(id){
    if(confirm("Seguro que desea eliminar este tipo")){
      this.tiposService.delete(id).subscribe((data)=>{
        alert("eliminado con exito");
        console.log(data);
        this.getUsers();
      } , (error)=>{
        console.log(error);
      })
    }

  }

}
