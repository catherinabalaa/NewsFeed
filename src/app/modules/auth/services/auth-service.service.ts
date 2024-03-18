import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { SigninResponse } from '../models/signinResponse.model';
import { SigninRequest } from '../models/signinRequest.model';
import { LogoutRequest } from '../models/logoutRequest.model';
import { SignupRequest } from '../models/signupRequest.model';
import { SignupResponse } from '../models/signupResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private tokenKey='token';

  constructor(private http: HttpClient) { }

  public login(data: SigninRequest):Observable<SigninResponse>{
    return this.http.post<SigninResponse>(environment.apiUrl+'User/Login()',data);
  }

  public signup(data:SignupRequest):Observable<SignupResponse>{
    return this.http.post<SignupResponse>(environment.apiUrl+'User/SignUp()',data);    
  }

  public getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  public logout(token:string,refreshToken:string):Observable<LogoutRequest> {
    return this.http.post<LogoutRequest>(environment.apiUrl+'User/Logout()',{Token:token,RefreshToken:refreshToken});
  }

  public getRefreshToken() {
    return localStorage.getItem('refreshtoken');
  }
  
}
