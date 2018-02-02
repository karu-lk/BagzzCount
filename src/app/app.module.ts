import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierCreateComponent } from './supplier-create/supplier-create.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderEditComponent } from './order-edit/order-edit.component';

const appRoutes: Routes = [
  {
    path: 'suppliers',
    component: SupplierComponent,
    data: { title: 'Supplier List' }
  },
  {
    path: 'supplier-details/:id',
    component: SupplierDetailsComponent,
    data: { title: 'Supplier Details' }
  },
  {
    path: 'supplier-create',
    component: SupplierCreateComponent,
    data: { title: 'Create Supplier' }
  },
  {
    path: 'supplier-edit/:id',
    component: SupplierEditComponent,
    data: { title: 'Edit Supplier' }
  },
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home Page' }
  },
  {
    path: 'orders',
    component: OrderComponent,
    data: { title: 'Make an Order' }
  },
  {
    path: 'order-details/:id',
    component: OrderDetailsComponent,
    data: { title: 'Order Details' }
  },
  {
    path: 'order-create',
    component: OrderCreateComponent,
    data: { title: 'Create Order' }
  },
  {
    path: 'order-edit/:id',
    component: OrderEditComponent,
    data: { title: 'Edit Order' }
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SupplierComponent,
    SupplierCreateComponent,
    SupplierDetailsComponent,
    SupplierEditComponent,
    HomeComponent,
    OrderComponent,
    OrderCreateComponent,
    OrderDetailsComponent,
    OrderEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
