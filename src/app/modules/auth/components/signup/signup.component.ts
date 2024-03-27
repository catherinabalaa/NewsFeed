import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { SignupRequest } from '../../models/signupRequest.model';
import { SignupResponse } from '../../models/signupResponse.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private authService:AuthServiceService,private router:Router) {}

  newUser:SignupRequest={
    Firstname:'',
    Lastname:'',
    Email:'',
    Password:'',
    RoleName:''
  };

  signup() {
    this.authService.signup(this.newUser).subscribe((res:SignupResponse
      ) =>{
      if(res.Result) {
        localStorage.setItem('loginToken',res.Token);
        localStorage.setItem('refreshToken',res.RefreshToken);
        this.router.navigateByUrl('/news');
        this.authService.storeUserData(res.Token,this.newUser.Firstname+' '+this.newUser.Lastname);
      }
      else {
        alert("Please fill out all the fields.");
      }
    })
  }
}
