import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-send-monthly-report',
  templateUrl: './send-monthly-report.component.html',
  styleUrls: ['./send-monthly-report.component.css']
  
})


export class SendMonthlyReportComponent implements OnInit {
  constructor(private http: Http, private router: Router) { }

  report = []

  ngOnInit() {
    this.http.get('http://localhost:3000/student/dailydiary').map(res => res.json()).subscribe(
      success => {
        this.report = success.data
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






