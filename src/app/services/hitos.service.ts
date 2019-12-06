import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Hito } from '../interfaces/hito';

@Injectable({
  providedIn: 'root'
})
export class HitosService {
  apiurl = '/api/api/hitos/';                 // Our created Data can be accessed here at api/users
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  perfop = {
    headers: this.headers
  };

  constructor( private http: HttpClient) { }
  private handleError(error: any) {
    console.error(error);                                       //Created a function to handle and log errors, in case
    return throwError(error);
  }
  getUsers(): Observable<Hito[]> {
    return this.http.get<Hito[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
obtenertipo(){
return this.http.get(this.apiurl);


}

guardartipo(hito:Hito){
  return this.http.post(this.apiurl,hito,{headers:this.headers}).pipe(tap(data => console.log(data)),
  catchError(this.handleError))

}
actualizartipo(hito ){
  return this.http.put(this.apiurl+hito.id,hito,{headers:this.headers})

} 
delete(id){
  return this.http.delete(this.apiurl+id);
}
}
