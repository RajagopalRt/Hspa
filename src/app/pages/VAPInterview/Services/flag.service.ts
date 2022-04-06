import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

const API_Url = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class FlagService {

  constructor(private _http: HttpClient) { }

  getFlag(_countryName: string): Observable<any> {
   return this._http.get<any>(API_Url+_countryName)
  }
}
