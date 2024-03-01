import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { RecyclableComponent } from '../recyclable/recyclable.component';
import { NonRecyclableComponent } from '../non-recyclable/non-recyclable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,RecyclableComponent,NonRecyclableComponent]
})
export class HomePageModule {}
