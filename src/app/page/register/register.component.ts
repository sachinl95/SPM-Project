import { Component, OnInit } from '@angular/core';
import {RegisterService} from './register.service'
import { NgForm } from '@angular/forms';
import {Student} from '../../_models/Student'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  student:Student;
  constructor(private registerService:RegisterService) { }


  companies=[
    {id:1,name:"MIT" },
    {id:2,name:"Vertuza"},
    {id:3,name:"99x"}
  ]

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
  }


  onSubmit(form:NgForm){
    if(form.valid){
      this.registerService.postStudent(this.student)
      .subscribe(
        (data:any)=>{
          console.log(data);
        }
      )
      alert("Student Add Succefully");
      
    }

    console.log(form);

  }
  

}
