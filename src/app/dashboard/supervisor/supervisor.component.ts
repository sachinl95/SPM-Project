import {Component, ElementRef, OnInit} from '@angular/core';
import { SupervisorServiceService } from './supervisor-service.service';
//import { Supervisor } from './Supervisor'
import {NgForm} from "@angular/forms";
import { Supervisor } from './Supervisor';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})


export class SupervisorComponent implements OnInit {

  supervisor: Supervisor;
  constructor(private superVisorService:SupervisorServiceService) { }

  ngOnInit() {
    this.supervisor = new Supervisor;
  }

  register(form:NgForm) {
    if(form.valid){
      this.superVisorService.postSupervisor(this.supervisor)
      .subscribe(
        (data:any)=>{
          console.log(data);
        }
      )
    }
  }

}
