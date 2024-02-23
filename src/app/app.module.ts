import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './modules/auth/components/signin/signin.component';
import { SignupComponent } from './modules/auth/components/signup/signup.component';
import { AuthenticaionPageComponent } from './authenticaion-page/authenticaion-page.component';
import { NewsPageComponent } from './news-page/news-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    AuthenticaionPageComponent,
    NewsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
