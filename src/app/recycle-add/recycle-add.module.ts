

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecycleAddPageRoutingModule } from './recycle-add-routing.module';
import { RecycleAddPage } from './recycle-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecycleAddPageRoutingModule
  ],
  declarations: [RecycleAddPage]
})
export class RecycleAddPageModule {}