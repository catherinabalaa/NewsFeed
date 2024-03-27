import { Component } from '@angular/core';
import { AuthServiceService } from '../../../auth/services/auth-service.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css'
})
export class NewsPageComponent {

  constructor(private authService:AuthServiceService) {}

  public circleColor:string;
  username:string;
  initials:string;

  ngOnInit() {
    this.circleColor='#567DE8';
    this.username=this.authService.getName();
    this.initials=this.profileInitials(this.username);
  }

  private profileInitials(username:string):string {

    let initials="";

    for(let i=0;i<this.username.length;i++) {
      if(this.username.charAt(i)==='') {
        continue;
      }
      if(this.username.charAt(i)===this.username.charAt(i).toUpperCase()) {
        initials+=this.username.charAt(i);

        if(initials.length==2) {
          break;
        }
      }
    }
    return initials;

  }

}

