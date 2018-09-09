import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {constants} from '../../../../_helpers/appConstants';


@Injectable()
export class DailyDiaryService {
  constructor(private http:HttpClient) { }

  postDailyDiary(diary){
    return this.http.post(constants.HOME_URL+"student/dailydiary",diary);
  }
}

