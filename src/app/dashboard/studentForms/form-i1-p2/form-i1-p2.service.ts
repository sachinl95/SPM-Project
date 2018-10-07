import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constants } from '../../../_helpers/appConstants';

@Injectable()
export class FormI1P2Service {

  constructor(private http:HttpClient) { }

  studentID:any;
  getAllStudents(){
    return this.http.get(constants.HOME_URL+"student");
  }
  saveStudentID(id){
    this.studentID=id;
  }
  getFormI1P1ByStudentID(id){
    return this.http.get(constants.HOME_URL+"form/formI1P1/"+id);
  }
  postFormI1P2(form){
    return this.http.post(constants.HOME_URL+"form/formI1P2",form);
  }

}
