import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }
  response:any;
  err = false
  toggletype = false;
  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.err = false
    let obj;
    if(this.toggletype){
       obj = {
        ville: form.value['ville'],
        type: form.value['type'],
      }

    } else {
      obj = {
        ville: form.value['ville'],
      }
    }

    this.api.getActivites(obj).subscribe(
      (res) => {
        if(res == ''){

          this.err = true
        } else {
          this.router.navigate(['activités'])
        }
      }
    )
    form.reset();
  }

}
