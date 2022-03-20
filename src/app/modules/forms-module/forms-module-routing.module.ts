import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishOrderPageComponent } from './components/pages/finish-order-page/finish-order-page.component';
import { OrderPageComponent } from './components/pages/order-page/order-page.component';

const routes: Routes = [
  { path: '', component: OrderPageComponent },
  { path: 'finish', component: FinishOrderPageComponent},
  { path: 'finish/order', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsModuleRoutingModule { }
