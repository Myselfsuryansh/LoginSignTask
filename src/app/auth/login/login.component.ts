import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ApiserviceService } from 'src/app/shared/apiservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup
  submitted:boolean=false;
  constructor(private fb:FormBuilder,private toastr: ToastrService,private service:ApiserviceService, private http:HttpClient, private router:Router){

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['', Validators.required]
    })
    this.loadFormDataFromLocalStorage()
    
  }
  loadFormDataFromLocalStorage(): void {
    const storedUser = JSON.parse(localStorage.getItem('newUser')as string);

    if (storedUser) {
      this.loginForm.setValue({
        username: storedUser.username || '',
        password: ''  // Do not preload password for security reasons
      });
    }
  }

  login(){
    this.submitted=true;
    if(this.loginForm.invalid){
      return
    }
    else{

    
    this.http.get<any>("http://localhost:3000/signupUsersList")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password 
      });
      if(user){
        
        // alert('Login Succesful');
        this.toastr.success('Login Success')
        this.loginForm.reset()
        
      // this.router.navigate(["/signup"])
      }else{
        // alert("user not found")
        this.toastr.warning("User Not Found")
      }
    },err=>{
      // alert("Something went wrong")
      this.toastr.warning('Something is wrong......')
    })
  }
}

}
