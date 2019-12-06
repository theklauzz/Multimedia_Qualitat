import { Component, OnInit } from '@angular/core';
import { Anuncio } from '../interfaces/anuncio';
import { AnunciosService } from '../services/anuncios.service';

@Component({
  selector: 'app-anuncio-home',
  templateUrl: './anuncio-home.component.html',
  styleUrls: ['./anuncio-home.component.css']
})
export class AnuncioHomeComponent implements OnInit {
  anuncios: Anuncio[] = [];

  constructor(private anunciosservice:AnunciosService) { }
  getUsers(){
    this.anunciosservice.getUsers().subscribe(data => {
      this.anuncios=data;
    });
  }
  ngOnInit() {
    this.getUsers();
  }
  delete(id){
    if(confirm("Seguro que desea eliminar este tipo")){
      this.anunciosservice.delete(id).subscribe((data)=>{
        alert("eliminado con exito");
        console.log(data);
        this.getUsers();
      } , (error)=>{
        console.log(error);
      })
    }

  }

}
