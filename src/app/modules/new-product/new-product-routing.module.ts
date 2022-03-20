import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProductPageComponent } from './components/pages/new-product-page/new-product-page.component';

const routes: Routes = [
  { path: '', component: NewProductPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewProductRoutingModule { }
