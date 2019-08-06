import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { SignupComponent } from './signup/signup.component'
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component'
import { AddproductComponent } from './addproduct/addproduct.component';
import { SalesComponent } from './sales/sales.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'order', component:OrderComponent},
  {path:'product', component:ProductComponent, children:[{path:'', outlet:'addproduct', component:AddproductComponent}]},
  {path:'sales', component:SalesComponent},
  {path:'help', component:HelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


