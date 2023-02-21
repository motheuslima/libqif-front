import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const BASE_URL = 'https://libqif-api.herokuapp.com';
const LOCAL_URL = 'https://LIBQIF.motheuslima.repl.co';
const IS_DEV = true; //switch to true when dev


@Injectable()
export class MethodService {
  constructor(private http: HttpClient) { }

  callMethod(url: string, body: any) {
    return this.http.post<any>((IS_DEV ? LOCAL_URL : BASE_URL) + '/app/' + url, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, X-Auth-Token, content-type'
      })
    });
  }
}
