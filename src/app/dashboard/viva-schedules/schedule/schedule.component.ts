import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { constants } from '../../../_helpers/appConstants'

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit {
    studentId: String
    private sub: any
    private actionText: String
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
            this.actionText = "Schedule Viva for Student"
        }
        else {
            this.actionText = "Modify Scheduled Viva"
            this.http.get(constants.HOME_URL + 'admin/schedules/' + this.studentId).subscribe(
                success => {
                    this.scheduleObj = Object.assign(success)
                    let tempDateTime = new Date(this.scheduleObj.dateTime)
                    this.hour = tempDateTime.getUTCHours()
                    this.minute = tempDateTime.getUTCMinutes()
                },
                error => {
                    alert(error)
                }
            )
        }
    }

}
