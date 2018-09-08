import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {constants} from '../../_helpers/appConstants'

@Injectable()
export class RegisterService {
  constructor(private http:HttpClient) { }

  postStudent(student){
    return this.http.post(constants.HOME_URL+"student",student);
  }
}
