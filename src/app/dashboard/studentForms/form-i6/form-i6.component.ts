import { Component, OnInit, ElementRef } from '@angular/core'
import { Http, Response } from '@angular/http'
import "rxjs/add/operator/do"
import "rxjs/add/operator/map"


const URL = 'http://localhost:3000/student/submit-form-i6/'

@Component({
  selector: 'app-form-i6',
  templateUrl: './form-i6.component.html',
  styleUrls: ['./form-i6.component.css']
})
export class FormI6Component implements OnInit {

  studentId = ''
  uploaded = false

  constructor(private http: Http, private el: ElementRef) { }

  ngOnInit() { }

  upload() {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#form_i6')
    let fileCount: number = inputEl.files.length
    let formData = new FormData()
    if (fileCount > 0) { // a file was selected
      for (let i = 0; i < fileCount; i++) {
        formData.append('form_i6', inputEl.files.item(i))
      }
      this.http.post(URL + this.studentId, formData).map(res => res.json()).subscribe(
        (success) => {
          alert(success.message)
        },
        (error) => {
          let body = JSON.parse(error._body)
          alert(body.message)
        }
      )
    }
  }

}
