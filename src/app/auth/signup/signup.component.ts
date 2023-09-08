import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements  OnInit{
  registedUserData:any ={};
  submitted:boolean=false
  public signUpForm!: FormGroup;
  dataid:any;
  constructor(private fb:FormBuilder,private toastr: ToastrService,private spinner: NgxSpinnerService, private http:HttpClient, private router:Router){
    this.signUpForm = this.fb.group({
      email:['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:['']
    })

  }


  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email:['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:['']
    })
    setTimeout(()=>{
      localStorage.setItem("formData", JSON.stringify(this.signUpForm.value))
    },1000)
    localStorage.setItem("formData", JSON.stringify(this.signUpForm.value));

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
   
    
  }
  get f() { return this.signUpForm.controls; }
  display(){
    this.dataid= localStorage.getItem('id')
  }

  onSubmit(){
    this.submitted=true
    if(this.signUpForm.invalid){
      return

    }else{

    
    const newUser = this.signUpForm.value;
    localStorage.setItem('user', JSON.stringify(newUser));
    console.log( localStorage.setItem('user', JSON.stringify(newUser)))
    this.http.post("http://localhost:3000/signupUsersList", this.signUpForm.value).subscribe((res)=>{
      console.log(res);
      // window.alert("Sign Up Successfull");
      this.toastr.success("Sign Up Successfull",'',{timeOut:3000})
      console.log("Hello");
      localStorage.setItem('user', JSON.stringify(newUser));
      this.router.navigate(['login']);
    },err=>{
      // alert("Something went wrong....")
      this.toastr.error('Something went wrong...')
    })
  }
  }

}
