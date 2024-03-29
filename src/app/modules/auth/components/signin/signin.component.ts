import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthServiceService} from '../../services/auth-service.service'
import { SigninRequest } from '../../models/signinRequest.model';
import { SigninResponse } from '../../models/signinResponse.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor(private authServiceService: AuthServiceService,private router:Router) {}

  user:SigninRequest ={
    Username:'',
    Password:''
  };

  login() {
    this.authServiceService.login(this.user).subscribe((res:SigninResponse 
      ) =>{
      if(res.Result) {
        localStorage.setItem('loginToken',res.Token);
        localStorage.setItem('refreshToken',res.RefreshToken);
        this.router.navigateByUrl('/news');
        this.authServiceService.storeUserData(res.Token,this.user.Username);
      }
      else {
        alert("Username or password incorrect");
      }
    })
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/auth/signin');
  }
}
