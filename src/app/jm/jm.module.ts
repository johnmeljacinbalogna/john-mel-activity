import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JmPageRoutingModule } from './jm-routing.module';

import { JmPage } from './jm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JmPageRoutingModule
  ],
  declarations: [JmPage]
})
export class JmPageModule {}
