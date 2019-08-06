import { Component, OnInit } from '@angular/core';
import { SalesService } from '../sales.service'

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  sales
  loading:boolean=true
  currentUser
  salesExist:boolean=true

  constructor(private salesService:SalesService) {
    this.currentUser=JSON.parse(localStorage.getItem("user"))
   }

  ngOnInit() {
    this.getSalesHistory()
  }

  getSalesHistory(){
    this.salesService.getSalesByEmail(this.currentUser.email).subscribe(data=>{
      this.sales = data
      this.loading=false
      if(this.sales==undefined || this.sales==null || this.sales.length==0){
        this.salesExist=false
      }
      else{
        this.salesExist=true
      }
    },
    err=>{
      
    })
  }

}
