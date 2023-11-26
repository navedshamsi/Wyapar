import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchaseEntryPage } from './purchase-entry.page';

const routes: Routes = [
  {
    path: '',
    component: PurchaseEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseEntryPageRoutingModule {}
