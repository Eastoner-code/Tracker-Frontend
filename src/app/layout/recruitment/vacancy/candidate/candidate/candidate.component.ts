import { CandidateApiModel } from './../../../../../../api/models/candidate-api-model';
import { RecruitmentService } from 'src/api/services/recruitment.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  private routeSubscription: Subscription;
  public candidates:CandidateApiModel[] = [];
  public vacancyId:number;

  public page = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 0
  };


  constructor(
    private route: ActivatedRoute,
    private recruitmentService:RecruitmentService) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.vacancyId = params.id;
    });
    this.InitCandidate();
  }

  OnDestroy():void{
    this.routeSubscription.unsubscribe();
  }

  private InitCandidate(){
    if(this.vacancyId){
      this.recruitmentService.apiRecruitmentVacancyCandidatesGet({
        vacancyId: this.vacancyId
      }).subscribe(
        res => {
          this.candidates = res;
        }, 
        err=> {
          console.log(err);
        }
      );
    }
    else{
      debugger;
      this.recruitmentService.apiRecruitmentAllCadnditatesGet().subscribe(
        res => {
          debugger;
          this.candidates = res;
        }, 
        err=> {
          console.log(err);
        }
      );
    }
  }
}
