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
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AgGridModule } from 'ag-grid-angular';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { TagsComponent } from './shared/tags/tags.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {TagInputModule} from 'ngx-chips';
import { SidebardetailsComponent } from './shared/sidebardetails/sidebardetails.component';
import { SidenavbarsComponent } from './themes/sidenavbars/sidenavbars.component'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    FormArrayComponent,
    ProfileComponent,
    SidebarComponent,
    TagsComponent,
    SidebardetailsComponent,
    SidenavbarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    NgMultiSelectDropDownModule,
    AgGridModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    MatChipsModule,
    TagInputModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
