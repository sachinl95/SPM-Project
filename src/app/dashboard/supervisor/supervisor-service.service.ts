import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constants }  from '../../_helpers/appConstants';

@Injectable()
export class SupervisorServiceService {

  constructor(private http:HttpClient) { }

  postSupervisor(supervisor){
    return this.http.post(constants.HOME_URL+"supervisor",supervisor);
  }
}
