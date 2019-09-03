import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  // saveOneProduct(product){
  //   return this.http.post('http://localhost:3000/products/addproduct',product)
  // }

  // getProducts(email){
  //   return this.http.get(`http://localhost:3000/products/getproducts/${email}`)
  // }

  saveOneProduct(product){
    return this.http.post('https://glacial-coast-65553.herokuapp.com/products/addproduct',product)
  }

  getProducts(email){
    return this.http.get(`https://glacial-coast-65553.herokuapp.com/products/getproducts/${email}`)
  }

  
}
