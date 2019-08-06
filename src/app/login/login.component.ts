import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Usersreturndata } from '../models/usersreturndata';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform
  formGroup:FormGroup
  correctCredentials:boolean=true
  usersreturndata:any
  logging:boolean=false
  

  constructor(
    private fb:FormBuilder,
    private usersService:UsersService,
    private router: Router
  ) {
    this.loginform=this.fb.group({
      userName:['', Validators.required],
      password:['', Validators.required]
    })
    
   }

  ngOnInit() {
    
  }

  login(){
    this.logging=true
    console.log(this.loginform.value)
    this.usersService.loginUser(this.loginform.value).subscribe(data=>{
      this.usersreturndata = data
      this.correctCredentials=this.usersreturndata.success
      if(this.usersreturndata.success){
        this.router.navigate(['/order'])
      }
      console.log(data)
      localStorage.setItem("user",JSON.stringify(data))
      this.logging=false
    },
    err=>{
      console.log(err)
      this.logging=false
    })
  }

}
