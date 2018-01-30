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
  { path: '',
    redirectTo: '/suppliers',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SupplierComponent,
    SupplierCreateComponent,
    SupplierDetailsComponent,
    SupplierEditComponent
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
