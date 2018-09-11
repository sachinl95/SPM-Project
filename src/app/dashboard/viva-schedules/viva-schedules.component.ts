import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Http, Response } from '@angular/http'

@Component({
  selector: 'app-viva-schedules',
  templateUrl: './viva-schedules.component.html',
  styleUrls: ['./viva-schedules.component.css']
})
export class VivaSchedulesComponent {

  constructor(private http: Http) { }

  students = [
    { studentId: 'IT16005372', name: 'Sameer', role: 'Trainee Software Developer' },
  ]

  ngOnInit() {
    this.http.get('http://localhost:3000/admin/schedules').map(res => res.json()).subscribe(
      success => {
        this.students = success;
      },
      error => {
        alert(error)
      }
    )
  }

  formatDateTime(dateTime) {
    let formattedDateTime
    let dateTimeArray = dateTime.split('T')
    let date = dateTimeArray[0]
    let time = dateTimeArray[1]
    
  }

}
