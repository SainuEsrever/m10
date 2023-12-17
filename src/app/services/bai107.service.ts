import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, retry, throwError } from 'rxjs';
import { Bai107 } from '../interfaces/bai107';

@Injectable({
  providedIn: 'root'
})
export class Bai107Service {

  private _url = '/breeds/image/random'

  constructor(private _http: HttpClient) { }

  getRandomDog() {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    )

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    }

    return this._http.get<any>(this._url, requestOptions).pipe(
      map((res)=> JSON.parse(res) as Bai107),
      retry(3),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }
}