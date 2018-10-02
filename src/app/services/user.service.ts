import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UserService {

  private serviceBaseUrl = 'localhost:8080';

  constructor(private http: HttpClient) { }

  getUserDetails(userId : string) : Observable<any>{
      return this.http.get(this.serviceBaseUrl+'/user?userId=' + userId);
  }

}
