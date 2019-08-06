import { Component, OnInit, Output } from '@angular/core';
import { ProductsService } from '../products.service';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products
  user
  loading:boolean=true
  productExist:boolean=true
  constructor(
    private productService:ProductsService,
    private modalService:NgbModal,
  ) { 
    this.user=JSON.parse(localStorage.getItem("user"))
  }

  ngOnInit() {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProducts(this.user.email).subscribe(data=>{
      this.products=data
      this.loading=false
      if(this.products==undefined || this.products==null || this.products.length==0){
        this.productExist=false
      }
      else{
        this.productExist=true
      }
    },
    err=>{
  })
  }

  addProduct(){

  }

  get modalservice(){
    return this.modalService;
  }

closeResult
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  deleteProduct(product){
    console.log(product)
  }

}
