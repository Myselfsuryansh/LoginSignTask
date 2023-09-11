import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormArrayComponent } from './form-array/form-array.component';
import { ProfileComponent } from './Profile/profile/profile.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ApiserviceService } from './shared/apiservice.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    FormArrayComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    NgMultiSelectDropDownModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiserviceService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
