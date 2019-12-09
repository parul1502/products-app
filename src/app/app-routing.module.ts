import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductEditGuard } from './guard/producteditguard';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductsEditComponent } from './product-edit/product-edit.component';
const routes: Routes = [
{path: 'products', component: ProductComponent},
{path: 'products/:id', component: ProductDetailsComponent},
{path: 'products/:id/edit',  canDeactivate: [ProductEditGuard], component: ProductsEditComponent},
{path: 'welcome', component: WelcomeComponent},
{path: 'newproduct', component: NewProductComponent},
{path: '', redirectTo: 'welcome', pathMatch: 'full'},
{path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
