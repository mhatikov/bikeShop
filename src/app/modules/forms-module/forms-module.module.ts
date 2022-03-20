import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModuleRoutingModule } from './forms-module-routing.module';
import { FormsModuleComponent } from './forms-module.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormsModuleComponent,
  ],
  imports: [
    CommonModule,
    FormsModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class FormsOrderModule { }
