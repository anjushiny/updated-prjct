import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = 'https://localhost:7058/api/User/';
  private Url: string = 'https://localhost:7058/api/applicant/';
    //private BaseUrl:string = 'https://localhost:7058/api/Applicant/all-applicant/'; 
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(this.baseUrl);
  }

getApplicant(){
  return this.http.get<any>(this.Url)
}
// getApplicants(): Observable<any[]> {
//   const url = `${this.BaseUrl}/all-applicant`;
//   return this.http.get<any[]>(url);
// }

}