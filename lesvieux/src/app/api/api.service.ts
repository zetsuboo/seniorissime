import { meteoData } from './../meteo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, isEmpty, map, tap } from 'rxjs/operators';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  resultSearch:any;
  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost/seniorissimewf3/api/';
  mete:any;
   meteo(long:number, lat:number){
    return this.http.get(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${long}&appid=4bc926ca38cf408b902392a4a9164238`).pipe(
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
        this.resultSearch = res;
        if(res) {

          for(let inst of this.resultSearch){
            this.meteo(inst.lon, inst.lat).subscribe(
              (mete:Object) => {
                this.mete = mete
              if(this.mete.list[0].rain === null){
                this.resultSearch[0].israin = true ;
                console.log(inst)
              } else {
                this.resultSearch[0].israin = false ;
                console.log(inst)
              }
            }
            )
          }
        }
        return res

      })
    )
  }
}
