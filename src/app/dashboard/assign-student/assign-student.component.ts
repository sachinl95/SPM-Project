import { Component, OnInit } from '@angular/core';
//import { SupervisorServiceService } from './supervisor-service.service';
import { supervisorStu } from '../../_models/supervisorStu';
import {NgForm} from "@angular/forms";
import {AssignService} from './assign.service'

@Component({
  selector: 'app-assign-student',
  templateUrl: './assign-student.component.html',
  styleUrls: ['./assign-student.component.css']
})
export class AssignStudentComponent implements OnInit {

  assign:supervisorStu;

  constructor(private assignService:AssignService) { }

  ngOnInit() {
    this.assign = new supervisorStu;
  }

  assignSubmit(form:NgForm){
    if(form.valid){
      this.assignService.postStudent(this.assign).subscribe(
        (data:any) => {
          console.log(data.message);
        }
      )
    }

    console.log(this.assign);

  }

  

}
