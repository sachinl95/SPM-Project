import { Component, OnInit } from '@angular/core';
import {RegisterService} from './register.service';
import { CompanyService } from '../../dashboard/company/company.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import {Student} from '../../_models/Student'
import {Company} from '../../_models/Company';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  student:Student;
  company:Company;
  constructor(private registerService:RegisterService , private companyService:CompanyService) { }


  
  companyName:company[];

    years=[
      {id:1,name:"year 1" },
      {id:2,name:"year 2"},
      {id:3,name:"year 3"},
      {id:4,name:"year 4"}
    ]
      supervisors=[
        {id:1,name:"Prasanne K.P" },
        {id:2,name:"Ranjti Perera"}]

  ngOnInit() {
    this.student= new Student;

    this.companyService.getCompany().subscribe(
      (data:any) => {
        this.companyName = data.message;
        console.log(data.message);
      }
    )
  }

  onSubmit(form:NgForm){
    if(form.valid){
      this.registerService.postStudent(this.student)
      .subscribe(
        (data:any)=>{
          alert(data.message);
          console.log(data);
        }
      )
      
      console.log(this.student);
      
    }

    console.log(form);

  }
  

}

export class company{

}
