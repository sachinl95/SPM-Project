import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {constants} from '../../_helpers/appConstants'
@Injectable()
export class CompanyService {

  constructor(private http:HttpClient) {
  }
  postCompany(company){
      return this.http.post(constants.HOME_URL+"company",company)
  }
}
