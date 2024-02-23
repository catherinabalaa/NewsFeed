import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticaionPageComponent } from './modules/auth/pages/authenticaion-page/authenticaion-page.component';
import { SigninComponent } from './modules/auth/components/signin/signin.component';
import { SignupComponent } from './modules/auth/components/signup/signup.component';
import { NewsPageComponent } from './modules/news-feed/pages/news-page/news-page.component';

const routes: Routes = [
  {path: 'auth',
  loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path: 'news',
  loadChildren: () => import('./modules/news-feed/news-feed.module').then(m => m.NewsFeedModule)},
  {path: '', redirectTo: '/auth/signin',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
