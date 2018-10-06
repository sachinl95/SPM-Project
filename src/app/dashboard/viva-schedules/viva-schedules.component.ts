import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Http, Response } from '@angular/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-viva-schedules',
  templateUrl: './viva-schedules.component.html',
  styleUrls: ['./viva-schedules.component.css']
})
export class VivaSchedulesComponent {

  constructor(private http: Http, private router: Router) { }

  students = []

  ngOnInit() {
    this.http.get('http://localhost:3000/admin/schedules').map(res => res.json()).subscribe(
      success => {
        this.students = success
      },
      error => {
        alert(error)
      }
    )
  }

  rowClickEvent(studentId) {
    alert(studentId + "  " + this.getServerURL())
    let URL = 'http://' + this.getServerURL() + ''
  }

  getServerURL() {
    let URLArray = window.location.href.split("/")
    return URLArray[2]
  }

  goToSchedule(studentId) {
    this.router.navigate(['admin/viva-schedules/schedule/:studentId', studentId])
  }

  normalJavascript(studentId) {
    window.location.href = 'http://' + this.getServerURL() + '/dashboard/admin/viva-schedules/schedule/' + studentId
  }

}
