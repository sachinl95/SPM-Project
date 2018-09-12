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

  students = []

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

  formatAMPM(date) {
    let dateString = date
    date = new Date(date)
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    let dateArray = dateString.split("T")
    let dateOnly = dateArray[0]
    return dateOnly + " " + strTime;
  }

  rowClickEvent(studentId) {
    alert(studentId + "  " + this.getServerURL())
    let URL = 'http://' + this.getServerURL() + ''
  }

  getServerURL() {
    let URLArray = window.location.href.split("/")
    return URLArray[2]
  }

}
