import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = ''

@Component({
  selector: 'app-form-i6',
  templateUrl: './form-i6.component.html',
  styleUrls: ['./form-i6.component.css']
})
export class FormI6Component implements OnInit {

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'form-i6' })
  constructor() { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = file => { file.withCredentials = false }
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log("ImageUpload: uploaded", item, status, response)
    }
  }

}
