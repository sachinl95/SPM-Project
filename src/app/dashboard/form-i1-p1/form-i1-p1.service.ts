import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {constants} from '../../_helpers/appConstants'

@Injectable()
export class FormI1P1Service {

  constructor(private http:HttpClient) { }

  postFormI1P1(FormI1p1){
    return this.http.post(constants.HOME_URL+"form/formI1P1",FormI1p1);
  }
}
