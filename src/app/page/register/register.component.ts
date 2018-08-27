import { Component, OnInit } from '@angular/core';
import {RegisterService} from './register.service'
import { NgForm } from '../../../../node_modules/@angular/forms';
import {Student} from '../../_models/Student'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  student:Student;
  constructor(private registerService:RegisterService) { }

  ngOnInit() {
    this.student= new Student;
  }

  onSubmit(form:NgForm){
    if(form.valid){
      this.registerService.postStudent(this.student)
      .subscribe(
        (data:any)=>{
          console.log(data);
        }
      )
    }

  }
  

}
