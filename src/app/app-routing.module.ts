import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './auth/home/home.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ProfileComponent } from './Profile/profile/profile.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TagsComponent } from './shared/tags/tags.component';
import { SidebardetailsComponent } from './shared/sidebardetails/sidebardetails.component';
import { SidenavbarsComponent } from './themes/sidenavbars/sidenavbars.component';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'formarray', component:FormArrayComponent},
  {path:'profile',component:ProfileComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'sidebar/:id',component:SidebarComponent},
  {path:'tags', component:TagsComponent},
  {path:'sidebardetails',component:SidebardetailsComponent},
  {path:'sidenavbar',component:SidenavbarsComponent},
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
