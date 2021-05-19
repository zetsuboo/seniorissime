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
  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    let obj = {
      ville: form.value['ville']
    }
    this.api.getActivites(obj).subscribe(
      (res) => {
        console.log(res);
        this
        return res
      }
    )
  }

}
