import { Component, OnInit } from '@angular/core';
import { FormI1P1 } from '../../../_models/formI1P1';
import { FormI1P2Service } from './form-i1-p2.service';
import { Student } from '../../../_models/Student';
import { Location } from '@angular/common';
import { FormI1P2 } from '../../../_models/formI1P2';
import { NgForm, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-form-i1-p2',
  templateUrl: './form-i1-p2.component.html',
  styleUrls: ['./form-i1-p2.component.css']
})
export class FormI1P2Component implements OnInit {
  formI1P1:FormI1P1;
  formI1P2:FormI1P2;
  students:Student[];

  validationFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")
     ]);
  constructor(private formI1P2Service:FormI1P2Service,private location: Location) { }

  ngOnInit() {
    this.formI1P1=new FormI1P1;
    this.formI1P2=new FormI1P2;
    this.GetStudents();

  }
  

  GetStudents(){
    this.formI1P2Service.getAllStudents()
      .subscribe(
        (data: any) => {
            this.students = data.data;
            console.log("std",this.students);

        }
      );
  }

  setSelectedStudent(id){
    this.formI1P2Service.saveStudentID(id);
    let studentID=this.formI1P2Service.studentID;
    console.log("stid",studentID);
    this.formI1P2Service.getFormI1P1ByStudentID(studentID)
    .subscribe(
      (data: any) => {
        
           this.formI1P1=data.message[0];
           console.log("formdata",this.formI1P1)
      }
    );
  }
  onSubmit(form:NgForm){
    if(form.valid){
      this.formI1P2Service.postFormI1P2(this.formI1P2)
      .subscribe(
        (data:any)=>{
          console.log(data);
          alert("Form Submitted Successfully");
        }
      )
    }
  }

}
