import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { UsersService } from '../users.service'
import { FlashMessagesService } from 'angular2-flash-messages'
import { Router } from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform
  formGroup:FormGroup
  disableRegistrationForm
  signing:boolean = false

  get firstName(){
    return this.signupform.get('firstName')
  }
  get lastName(){
    return this.signupform.get('lastName')
  }
  get email(){
    return this.signupform.get('email')
  }
  get userName(){
    return this.signupform.get('userName')
  }
  get companyName(){
    return this.signupform.get('companyName')
  }
  get password(){
    return this.signupform.get('password')
  }
  
  constructor(
    private fb:FormBuilder,
    private usersService:UsersService,
    private flashMessage:FlashMessagesService,
    private router:Router
  ) { 
    this.signupform=this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['', Validators.required],
      userName:['', Validators.required],
      companyName:['', Validators.required],
      password:['', [Validators.required, Validators.minLength(4)]]
    })

    this.checkFormValidity()

  }

  ngOnInit() {
  }

  registerUser(){
    this.usersService.registerUser(this.signupform.value).subscribe(data=>{
      console.log(data)
      this.signing=false
      this.flashMessage.show('Succesfully registered, you can now login', {cssClass:'alert-success', timeout:2000})
      setTimeout(()=>{this.router.navigate(['/'])},2000)      
    },
    err=>{
      console.log(err)
      this.signing=false
    })
  }

  
  test(){
    this.checkFormValidity()
  }

  checkFormValidity(){
    if(this.signupform.status=='INVALID'){
      this.disableRegistrationForm=false
    }
    else{
      this.disableRegistrationForm=true
    }
  }
}
