import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  [x: string]: any;
private fullName$ = new BehaviorSubject<string>("");
private role$ = new BehaviorSubject<string>("");
private firstName$ = new BehaviorSubject<string>("");

constructor() { }

public getFirstNameFromStore(){
  return this.firstName$.asObservable();
}
public setFirstNameStore(role:string){
  this.firstName$.next(role);
}
  public getRoleFromStore(){
    return this.role$.asObservable();
  }

  public setRoleForStore(role:string){
    this.role$.next(role);
  }

  public getFullNameFromStore(){
    return this.fullName$.asObservable();
  }

  public setFullNameForStore(fullname:string){
    this.fullName$.next(fullname)
  }
}
