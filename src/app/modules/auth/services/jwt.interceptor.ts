import { HttpClient, HttpInterceptorFn } from '@angular/common/http';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { AuthServiceService } from './auth-service.service';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../../../environments/environment';



@Injectable()
export class jwtInterceptor implements HttpInterceptor 
{
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
  {
    let http=inject(HttpClient);
    let token = localStorage.getItem('loginToken');
    if (token) {
      let decodedToken=jwtDecode(token);
      const isExpired= decodedToken.exp<Date.now()/1000;

      if(isExpired) {
        http.post(environment.apiUrl+'/api/User/RefreshToken()',{}).subscribe((newToken:string)=>{
          localStorage.setItem('token',newToken);
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${newToken}`
            }
          });
        });
      }
      else {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    }
    return next.handle(request);
  }
 }