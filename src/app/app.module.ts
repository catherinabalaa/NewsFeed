import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './modules/auth/components/signin/signin.component';
import { SignupComponent } from './modules/auth/components/signup/signup.component';
import { AuthenticaionPageComponent } from './modules/auth/pages/authenticaion-page/authenticaion-page.component';
import { NewsPageComponent } from './modules/news-feed/pages/news-page/news-page.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LatestNewsComponent } from './modules/news-feed/components/latest-news/latest-news.component';
import { DialogComponent } from './modules/news-feed/components/dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { CommonMatModule } from './modules/common-mat/common-mat.module';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule, matDialogAnimations} from '@angular/material/dialog';
import {MatFormFieldModule, matFormFieldAnimations} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { jwtInterceptor } from './modules/auth/services/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    AuthenticaionPageComponent,
    NewsPageComponent,
    LatestNewsComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonMatModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: jwtInterceptor,
      multi:true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
