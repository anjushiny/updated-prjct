import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { JobsComponent } from './jobs/jobs.component';
import { JobssectionComponent } from './jobssection/jobssection.component';
import { AppLoginComponent } from './components/app-login/app-login.component';
import { AppSignupComponent } from './components/app-signup/app-signup.component';
import { AuthnGuard } from './guard/authn.guard';
import { AppJobsComponent } from './components/app-jobs/app-jobs.component';
import { AppAppliedComponent } from './components/app-applied/app-applied.component';
import { AppDashboardComponent } from './components/app-dashboard/app-dashboard.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { ClientHomeComponent } from './components/client-home/client-home.component';
import { CandidatessectionComponent } from './components/candidatessection/candidatessection.component';
//import { AllAppComponent } from './all-app/all-app.component';








const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'app-login', component:AppLoginComponent},
  
  {path: 'app-dashboard', component: AppDashboardComponent, canActivate:[ AuthnGuard], children:[
    
    {path: 'jobspage', component:AppJobsComponent},
    { path: 'app-applied', component: AppAppliedComponent },
    { path: '', redirectTo: 'app-home', pathMatch: 'full' }, 
    { path: 'app-home', component: AppHomeComponent },

  ]},
  {path:'signup', component:SignupComponent},
  {path:'app-signup', component:AppSignupComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard], children:[
    
    {path: 'home', component:JobssectionComponent},
    { path: 'jobs', component: JobsComponent },
    { path: '', redirectTo: 'client-home', pathMatch: 'full' },
    { path: 'client-home', component: ClientHomeComponent },
    {path:'candidate', component:CandidatessectionComponent},
   
  ]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
