import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoustomerlistPageRoutingModule } from './coustomerlist-routing.module';

import { CoustomerlistPage } from './coustomerlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoustomerlistPageRoutingModule
  ],
  declarations: [CoustomerlistPage]
})
export class CoustomerlistPageModule {}
