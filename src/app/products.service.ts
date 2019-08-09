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
    return this.http.post('http://glacial-coast-65553.herokuapp.com/products/addproduct',product)
  }

  getProducts(email){
    return this.http.get(`http://glacial-coast-65553.herokuapp.com/products/getproducts/${email}`)
  }

  // getProducts(){
  //    return [{
  //     name:"food1",
  //     category:"food",
  //     price:100,
  //     imgUrl:""
  //   },
  //   {
  //     name:"food2",
  //     category:"food",
  //     price:150,
  //     imgUrl:""
  //   },{
  //     name:"food3",
  //     category:"food",
  //     price:200,
  //     imgUrl:""
  //   },
  //   {
  //     name:"food4",
  //     category:"food",
  //     price:300,
  //     imgUrl:""
  //   },
  //   {
  //     name:"food5",
  //     category:"food",
  //     price:400,
  //     imgUrl:""
  //   },
  //   {
  //     name:"food6",
  //     category:"food",
  //     price:450,
  //     imgUrl:""
  //   },
  //   {
  //     name:"food7",
  //     category:"food",
  //     price:500,
  //     imgUrl:""
  //   },
  //   {
  //     name:"food8",
  //     category:"food",
  //     price:550,
  //     imgUrl:""
  //   },
  //   //drinks
  //   {
  //     name:"heineken",
  //     category:"drink",
  //     price:100,
  //     imgUrl:""
  //   },
  //   {
  //     name:"Trophy",
  //     category:"drink",
  //     price:150,
  //     imgUrl:""
  //   },{
  //     name:"Star",
  //     category:"drink",
  //     price:200,
  //     imgUrl:""
  //   },
  //   {
  //     name:"Goldberg",
  //     category:"drink",
  //     price:300,
  //     imgUrl:""
  //   },
  //   {
  //     name:"Malt",
  //     category:"drink",
  //     price:400,
  //     imgUrl:""
  //   },
  //   {
  //     name:"Sprite",
  //     category:"drink",
  //     price:450,
  //     imgUrl:""
  //   },
  //   {
  //     name:"Gulder",
  //     category:"drink",
  //     price:500,
  //     imgUrl:""
  //   },
  //   {
  //     name:"Coke",
  //     category:"drink",
  //     price:550,
  //     imgUrl:""
  //   },
  //   //others
  //   {
  //     name:"others1",
  //     category:"others",
  //     price:100,
  //     imgUrl:""
  //   },
  //   {
  //     name:"others2",
  //     category:"others",
  //     price:150,
  //     imgUrl:""
  //   },{
  //     name:"others3",
  //     category:"others",
  //     price:200,
  //     imgUrl:""
  //   },
  //   {
  //     name:"others4",
  //     category:"others",
  //     price:300,
  //     imgUrl:""
  //   },
  //   {
  //     name:"others5",
  //     category:"others",
  //     price:400,
  //     imgUrl:""
  //   },
  //   {
  //     name:"others6",
  //     category:"others",
  //     price:450,
  //     imgUrl:""
  //   },
  //   {
  //     name:"others7",
  //     category:"others",
  //     price:500,
  //     imgUrl:""
  //   },
  //   {
  //     name:"others8",
  //     category:"others",
  //     price:550,
  //     imgUrl:""
  //   }
  // ]
  // }

}
