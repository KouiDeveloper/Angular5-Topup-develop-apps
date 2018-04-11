import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HometopupComponent } from './hometopup/hometopup.component';
import { UbalanceComponent } from './ubalance/ubalance.component';
import { UrechargeRequestCashierComponent } from './urecharge-request-cashier/urecharge-request-cashier.component';
import { URechargeRequestComponent } from './u-recharge-request/u-recharge-request.component';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';
import { AdminHistoryComponent } from './admin-history/admin-history.component';
import { ItemsComponent } from './items/items.component';
import { ItemShopComponent } from './item-shop/item-shop.component';






const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full'}, 
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'hometopup', component: HometopupComponent },
  { path: 'ubalance', component: UbalanceComponent },
  { path: 'urecharge', component: UrechargeRequestCashierComponent },
  { path: 'u-recharge-request', component: URechargeRequestComponent },
  { path: 'transfer-history', component: TransferHistoryComponent },
  { path: 'admin-history', component: AdminHistoryComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'item-shop', component: ItemShopComponent }
    
  
  
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
