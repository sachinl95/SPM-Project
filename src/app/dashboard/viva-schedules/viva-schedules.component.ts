import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-viva-schedules',
  templateUrl: './viva-schedules.component.html',
  styleUrls: ['./viva-schedules.component.css']
})
export class VivaSchedulesComponent {

  constructor() { }

  students = [
    { studentId: 'IT16005372', name: 'Sameer', role: 'Trainee Software Developer' },
  ];

  ngOnInit() {
  }

}
