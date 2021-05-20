import { NgForm } from '@angular/forms';
import { ApiService } from './../api/api.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.scss']
})
export class ActivitesComponent implements OnInit, DoCheck{
  constructor(private api: ApiService, private router:Router) { }
  toggletype = false
  err = false
  mete:any;
  resultSearch:any;
  ngOnInit(): void {
  this.resultSearch = this.api.resultSearch
  console.log(this.resultSearch)
}
ngDoCheck(){
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
        this.resultSearch = res
      }
    }
  )
  form.reset();
}


}
