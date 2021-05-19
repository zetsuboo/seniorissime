import { meteoData } from './../meteo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost/seniorissimewf3/api/';

   meteo(){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=lyon&appid=4bc926ca38cf408b902392a4a9164238').pipe(
      map(
        (res) => {
          return res;
        }
      )
    )
  }

  getActivites(params: object){
    return this.http.post(this.baseUrl + 'activites', {data:params}).pipe(
      map((res) => {
        return res
      })
    )
  }
}
