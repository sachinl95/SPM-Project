import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { constants } from '../../../_helpers/appConstants'
import axios from 'axios'

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

    private scheduleClass = class {
        studentId: String
        dateTime: Date
        location: String
    }

    private scheduleObj = new this.scheduleClass()

    constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

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

    addOrUpdate() {
        let method = ''
        let url = ''
        if (this.studentId === undefined) {
            url = constants.HOME_URL + 'admin/schedule-session'
            method = 'POST'
        } else {
            url = constants.HOME_URL + 'admin/schedules/' + this.studentId
            method = 'PUT'
        }
        let temp = new Date(this.scheduleObj.dateTime)
        let month: any
        let date: any
        let hour: any
        let minute: any
        month = temp.getMonth() + 1
        date = temp.getDate()
        hour = this.hour
        minute = this.minute
        if (month < 10) { month = '0' + month }
        if (date < 10) { date = '0' + date }
        if (hour < 10) { hour = '0' + hour }
        if (minute < 10) { minute = '0' + minute }
        let dateTime = temp.getUTCFullYear() + '-' + month + '-' + date
            + 'T' + hour + ':' + minute + ':00.000Z'
        let payload = {
            studentId: this.scheduleObj.studentId,
            dateTime: dateTime,
            location: this.scheduleObj.location
        }
        axios({
            method: method,
            url: url,
            data: payload
        }).then(response => {
            if (this.studentId === undefined) {
                alert('The viva has been scheduled')
            } else {
                alert('The viva schedule has been updated')
            }
            this.router.navigate(['dashboard/admin/viva-schedules'])
        }).catch(error => {
            alert(error.response.data.message)
        })
    }

    delete() {
        axios.delete(constants.HOME_URL + 'admin/schedules/' + this.studentId).then(response => {
            alert('The viva schedule for student ' + this.studentId + ' has been deleted')
        }).catch(error => {
            alert(error.response.data.message)
        })
    }

}
