import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Tipo } from './../interfaces/tipo';

@Injectable({
  providedIn: 'root'
})
export class TiposService {
  apiurl = '/api/api/tipos/';                 // Our created Data can be accessed here at api/users
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  perfop = {
    headers: this.headers
  };

  constructor(
    private http: HttpClient
  ) { }
  private handleError(error: any) {
    console.error(error);                                       //Created a function to handle and log errors, in case
    return throwError(error);
  }
  getUsers(): Observable<Tipo[]> {
    return this.http.get<Tipo[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
obtenertipo(){
return this.http.get(this.apiurl);


}

guardartipo(tipo:Tipo){
  return this.http.post(this.apiurl,tipo,{headers:this.headers})

}
actualizartipo(tipo ){
  return this.http.put(this.apiurl+tipo.id,tipo,{headers:this.headers})

} 
delete(id){
  return this.http.delete(this.apiurl+id);
}
}
