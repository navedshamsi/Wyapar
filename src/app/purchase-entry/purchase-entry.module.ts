import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseEntryPageRoutingModule } from './purchase-entry-routing.module';

import { PurchaseEntryPage } from './purchase-entry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseEntryPageRoutingModule
  ],
  declarations: [PurchaseEntryPage]
})
export class PurchaseEntryPageModule {}
