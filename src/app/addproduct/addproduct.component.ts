import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ProductsService } from '../products.service';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  addProductForm:FormGroup
  category=["food", "drink", "name"]
  user

  constructor(
    private fb:FormBuilder,
    private productService:ProductsService,
    public modalservice:NgbModal,
  ) { 
    this.user = JSON.parse(localStorage.getItem("user"))
    this.addProductForm=this.fb.group({
      name:[],
      costPrice:[],
      sellPrice:[],
      category:[],
      imgUrl:[],
      email:[this.user.email]
    })
    
  }

  ngOnInit() {
  }

  saveProduct(){
    console.log(this.addProductForm.value)
    this.productService.saveOneProduct(this.addProductForm.value).subscribe(data=>{
      console.log(data)
    },
    err=>{console.log(err)})
  }

  close(){
    this.modalservice.dismissAll()
  }

}
