import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JmPage } from './jm.page';

const routes: Routes = [
  {
    path: '',
    component: JmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JmPageRoutingModule {}
