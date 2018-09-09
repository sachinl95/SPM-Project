import { Component, OnInit } from '@angular/core';
import { Formi3DailyDiary } from '../../../../_models/Formi3DailyDiary';
import { DailyDiaryService } from './daily-diary.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-daily-diary',
  templateUrl: './daily-diary.component.html',
  styleUrls: ['./daily-diary.component.css']
})
export class DailyDiaryComponent implements OnInit {

  dailyDiary : Formi3DailyDiary;

  constructor(private dailyDiaryService:DailyDiaryService) { }

  ngOnInit() {
    this.dailyDiary = new Formi3DailyDiary;
  }

  onSubmit(form:NgForm){
    if(form.valid){
      this.dailyDiaryService.postDailyDiary(this.dailyDiary)
      .subscribe(
        (data:any)=>{
          console.log(data);
        }
      )
      alert("Student Add Succefully");
      
    }
    console.log(form);

  }

}

 