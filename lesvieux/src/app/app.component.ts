import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api/api.service';
import { meteoData } from './meteo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lesvieux';
  constructor(private api: ApiService){}
  res:any;
  getMeteo(){
    return this.api.meteo().subscribe(
      (res) => {
        this.res = res;
        console.log(this.res)

      }
    )
  }
}
