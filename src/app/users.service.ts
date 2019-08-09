import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http:HttpClient
  ) { }

  // registerUser(user){
  //   return this.http.post('http://localhost:3000/users/register',user)
  // }

  // loginUser(user){
  //   return this.http.post('http://localhost:3000/users/login', user)
  // }

  registerUser(user){
    return this.http.post('http://glacial-coast-65553.herokuapp.com/users/register',user)
  }
  
  loginUser(user){
    return this.http.post('http://glacial-coast-65553.herokuapp.com/users/login', user)
  }

}
