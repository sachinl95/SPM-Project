import { Component, OnInit } from '@angular/core';
//import { SupervisorServiceService } from './supervisor-service.service';
import { supervisorStu } from '../../_models/supervisorStu';
import {NgForm} from "@angular/forms";
//import { Supervisor } from './Supervisor';

@Component({
  selector: 'app-assign-student',
  templateUrl: './assign-student.component.html',
  styleUrls: ['./assign-student.component.css']
})
export class AssignStudentComponent implements OnInit {

  assign:supervisorStu;
  constructor() { }

  ngOnInit() {
  }

}
