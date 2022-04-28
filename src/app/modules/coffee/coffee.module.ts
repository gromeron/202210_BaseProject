import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeeRoutingModule } from './coffee-routing.module';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';


@NgModule({
  declarations: [
    CoffeeListComponent
  ],
  imports: [
    CommonModule,
    CoffeeRoutingModule
  ],
  exports: [
    CoffeeListComponent
  ]
})
export class CoffeeModule { }
