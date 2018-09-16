import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit {
  studentId: String
  private sub: any
  private title: String
  private hour: number
  private minute: number
  private amPm: String

  private scheduleClass = class {
    studentId: String
    dateTime: Date
    location: String
  }

  private scheduleObj = new this.scheduleClass()

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.studentId = params['studentId']
    })
    if (this.studentId === undefined) {
      this.title = "Schedule Viva for Student"
    }
    else {
      this.title = "Modify Scheduled Viva"
      this.http.get('', ).subscribe(

      )
    }
  }

}
