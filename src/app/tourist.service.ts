import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Tourist } from './tourist';


@Injectable({
  providedIn: 'root'
})
export class TouristService {

  constructor(private httpClient:HttpClient) { }
  private url:string="http://localhost:9090/api/v1/tourists";

  getTouristList():Observable<Tourist[]>{
    return this.httpClient.get<Tourist[]>(`${this.url}`);
  }

  createTourist(tourist:Tourist):Observable<Object>{
    return this.httpClient.post(`${this.url}`,tourist).pipe(catchError(this.errorHandler));
  }
 errorHandler(error:HttpErrorResponse)
 {
  return throwError(error);
 }
  
}
