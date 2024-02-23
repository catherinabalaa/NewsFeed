import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticaionPageComponent } from './modules/auth/pages/authenticaion-page/authenticaion-page.component';
import { SigninComponent } from './modules/auth/components/signin/signin.component';
import { SignupComponent } from './modules/auth/components/signup/signup.component';
import { NewsPageComponent } from './modules/news-feed/pages/news-page/news-page.component';

const routes: Routes = [
  {path:'auth',component:AuthenticaionPageComponent,
  children:[
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent}
  ]},
  {path:'news',component:NewsPageComponent},
  {path:'',redirectTo:'auth/signin',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
