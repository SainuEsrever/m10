import { JsonPipe } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders } from
  '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Bai100 } from '../interfaces/bai100';
import { Bai100item } from '../interfaces/bai100item';

@Injectable({
  providedIn: 'root'
})
export class Bai100Service {

  private _url: string = "/exchange/export"
  constructor(private _http: HttpClient) { }
  getDongABankData() {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>(this._url, requestOptions).pipe(
      map(res => JSON.parse(res.slice(1, -1)) as Bai100),
      retry(3),
      catchError(this.handleError))
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }
}
