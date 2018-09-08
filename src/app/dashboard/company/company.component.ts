import { Component, OnInit } from '@angular/core';
import { Company } from '../../_models/Company';
import { NgForm } from '@angular/forms';
import { CompanyService } from './company.service';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  company:Company;
  constructor(private companyService:CompanyService) { }

  ngOnInit() {
    this.company= new Company;
  }

  onSubmit(form:NgForm){
    if(form.valid){
      this.companyService.postCompany(this.company)
      .subscribe(
        (data:any)=>{
          console.log(data);
        }
      )
      alert("Company Add Succefully");
    }
  }


}
