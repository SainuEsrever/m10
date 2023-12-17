import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, retry, throwError } from 'rxjs';
import { Bai106 } from '../interfaces/bai106';

@Injectable({
  providedIn: 'root'
})
export class Bai106Service {

  private _url: string = "/data?drilldowns=Nation&measures=Population"

  constructor( private _http : HttpClient) { }

  get106Data() {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    )

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    }

    return this._http.get<any>(this._url, requestOptions).pipe(
      map((res) => JSON.parse(res) as Bai106),
      retry(3),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }
}
