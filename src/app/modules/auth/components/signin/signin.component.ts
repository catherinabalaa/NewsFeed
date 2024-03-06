import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthServiceService} from '../../services/auth-service.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor(private authServiceService: AuthServiceService,private router:Router) {}

  user:any ={
    "email":"",
    "pass":""
  };

  login() {
    this.authServiceService.login(this.user.email,this.user.pass).subscribe((res:any) =>{
      if(res.result) {
        localStorage.setItem('loginToken',res.data.token);
        this.router.navigateByUrl('/news');
      }
    })
  }
}
