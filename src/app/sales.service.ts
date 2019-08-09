import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  // saveSales(newSales){
  //   return this.http.post(`http://localhost:3000/sales/saleshistory`,newSales)
  // }

  // getSalesByEmail(email){
  //   return this.http.get(`http://localhost:3000/sales/saleshistory/${email}`)
  // }

  saveSales(newSales){
    return this.http.post(`http://glacial-coast-65553.herokuapp.com/sales/saleshistory`,newSales)
  }

  getSalesByEmail(email){
    return this.http.get(`http://glacial-coast-65553.herokuapp.com/sales/saleshistory/${email}`)
  }
}
