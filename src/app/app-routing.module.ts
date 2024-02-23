import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationPageComponent } from './modules/auth/pages/authentication-page/authentication-page.component';
import { NewsPageComponent } from './modules/auth/pages/news-page/news-page.component';
import { SigninComponent } from './modules/auth/components/signin/signin.component';
import { SignupComponent } from './modules/auth/components/signup/signup.component';

const routes: Routes = [
  {path:'auth',component:AuthenticationPageComponent,
  children:[
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent}
  ]},
  {path:'news',component:NewsPageComponent},
  {path:'',redirectTo:'/auth/signin',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
