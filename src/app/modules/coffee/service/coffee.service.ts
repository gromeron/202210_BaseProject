import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coffee } from '../model/coffee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  getCoffees(): Observable<Coffee[]> {
    return this._http.get<Coffee[]>(this.apiUrl);
  }
}
