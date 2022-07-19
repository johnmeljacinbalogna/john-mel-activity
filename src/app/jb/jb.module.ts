import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JbPageRoutingModule } from './jb-routing.module';

import { JbPage } from './jb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JbPageRoutingModule
  ],
  declarations: [JbPage]
})
export class JbPageModule {}
