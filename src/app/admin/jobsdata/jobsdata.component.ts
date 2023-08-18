import { Component, Input,  OnInit, ViewChild, ElementRef} from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';

import { JobsdetailsService } from 'src/app/jobsdetails.service';
import { JobscountService } from 'src/app/services/jobscount.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserStoreService } from 'src/app/services/user-store.service';
import { AuthService } from 'src/app/services/auth.service';






@Component({
  selector: 'app-jobsdata',
  
  templateUrl: './jobsdata.component.html',
  styleUrls: ['./jobsdata.component.scss']
})
export class JobsdataComponent implements OnInit {
  @Input() totalJobsCount!: number;
  @Input() totalApplicantsCount!: number;
  @Input() totalAppliedJobsCount!: number;
  @Input() notAppliedJobsCount!: number;
  


 
  // jobCount$: Observable<number> = this.jobsCountService.jobCount$;
  // jobCount!: number;
  // totalAppliedJobsCount!: number  // Add this property to store the count of applied jobs
  
  // totalJobsCount!: number ;
 
  // notAppliedJobsCount!: number ;

username: string ='';
@ViewChild('pieCanvas') pieCanvas!: ElementRef;

  constructor( private jobsint:JobsdetailsService,private auth:AuthService ,private jobsCountService: JobscountService, private userStore: UserStoreService) {
   
   }

  ngOnInit(): void {

   
    this.userStore.getFullNameFromStore()
        .subscribe(val=>{
          const fullNameFromToken = this.auth.getfullNameFromToken();
          this.username = val || fullNameFromToken
        });
   
        this.getJobsCounts();
  }


  
  getJobsCounts(): void {
    
    this.jobsCountService.getTotalJobsCount(this.username).subscribe(
      (count) => {
        this.totalJobsCount = count;
        console.log(count)
      },
      (error) => {
        console.error('Error fetching total jobs count: ', error);
      }
    );


    this.jobsCountService.getTotalApplicantsCount(this.username).subscribe(
      (count) => {
        this.totalApplicantsCount = count;
      },
      (error) => {
        console.error('Error fetching total applicants count: ', error);
      }
    );

    this.jobsCountService.getTotalAppliedJobsCount(this.username).subscribe(
      (count) => {
        this.totalAppliedJobsCount = count;
      },
      (error) => {
        console.error('Error fetching total applied jobs count: ', error);
      }
    );

    this.jobsCountService.getNotAppliedJobsCount(this.username).subscribe(
      (count) => {
        this.notAppliedJobsCount = count;
      },
      (error) => {
        console.error('Error fetching not applied jobs count: ', error);
      }
    );
  }



}


