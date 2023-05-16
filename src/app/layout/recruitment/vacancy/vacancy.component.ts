import { Component, OnInit } from '@angular/core';
import { RecruitmentService } from 'src/api/services/recruitment.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss']
})
export class VacancyComponent implements OnInit {
  
  public pipe = new DatePipe('en-US');
  public vacancies:any = []
  public page = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 0
  };

  constructor(private recruitmentService: RecruitmentService) { }

  ngOnInit(): void {
    this.initVacancies();
  }

  private initVacancies(){
    this.recruitmentService.apiRecruitmentAllVacanciesGet().subscribe(res => {
      this.vacancies = res;
    }, error => {
      console.log(error);
    }
  );
  }

  
}
