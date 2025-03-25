import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  public url = 'https://pokeapi.co/api/v2/pokemon/ditto'
  constructor(
    private _http: HttpClient
  ) { }

  singnUp():Observable<any>{
    return this._http.get(this.url);
  };
}
