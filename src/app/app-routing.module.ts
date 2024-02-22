import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationPageComponent } from './modules/auth/pages/authentication-page/authentication-page.component';
import { SigninComponent } from './modules/auth/components/signin/signin.component';
import { SignupComponent } from './modules/auth/components/signup/signup.component';

const routes: Routes = [
  // {path: 'auth',
  // loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  // {path: 'news',
  // loadChildren: () => import('./modules/news-feed/news-feed.module').then(m => m.NewsFeedModule)},
  // {path: '',
  // loadChildren: () => import('./modules/auth/auth.module').then(m=>m.AuthModule)}
  {path:'auth',component:AuthenticationPageComponent,
  children:[
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
