import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { MainComponent } from './components/pages/main/main.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'product/:id', component: ProductPageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'order', loadChildren: () => import('./modules/forms-module/forms-module.module').then(m => m.FormsOrderModule)},
  {path: 'product/:id/about', redirectTo:'about'},
  {path: 'about/order', redirectTo:'order'},
  {path: 'product/:id/order', redirectTo:'order'},
  {path: 'order/about', redirectTo:'about'},
  {path: 'order/finish/about', redirectTo: 'about'},
  {path: 'newProduct', loadChildren: () => import('./modules/new-product/new-product.module').then(m => m.NewProductModule)},
  {path: 'newProduct/order', redirectTo:'order'},
  {path: 'product/:id/newProduct', redirectTo:'newProduct'},
  {path: 'newProduct/about', redirectTo:'about'},
  {path: 'about/newProduct', redirectTo:'newProduct'},
  {path: 'product/:id/newProduct', redirectTo:'newProduct'},
  {path: 'order/newProduct', redirectTo:'newProduct'},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
