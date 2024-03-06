import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private tokenKey='token';

  constructor(private http: HttpClient) { }

  public login(email: string, password: string){
    return this.http.post(environment.apiUrl+'User/Login()',{username:email,password:password});
    // .subscribe((res:any)=> {
    //   localStorage.setItem('access_token',JSON.stringify(res.access_token));
    //   this.router.navigateByUrl('/news');
    // });
  }
}
