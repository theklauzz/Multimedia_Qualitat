import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Anuncio } from '../interfaces/anuncio';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {
  apiurl = '/api/api/anuncios/';                 // Our created Data can be accessed here at api/users
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  perfop = {
    headers: this.headers};

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.error(error);                                       //Created a function to handle and log errors, in case
    return throwError(error);
  }
  getUsers(): Observable<Anuncio[]> {
    return this.http.get<Anuncio[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
obtenertipo(){
return this.http.get(this.apiurl);


}

guardartipo(anuncio:Anuncio){
  return this.http.post(this.apiurl,anuncio,{headers:this.headers}).pipe(tap(data => console.log(data)),
  catchError(this.handleError))

}
actualizartipo(anuncio ){
  return this.http.put(this.apiurl+anuncio.id,anuncio,{headers:this.headers})

} 
delete(id){
  return this.http.delete(this.apiurl+id);
}



}
