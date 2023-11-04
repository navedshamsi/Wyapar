import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

// var data=[{1:"DESCRIPTION",2:"MODEL",3:"QUNATITY",4:"PRICE",5:"SUM"},{1:1,2:2,3:3,4:4,5:5},{1:1,2:2,3:3,4:4,5:5},
//   {1:1,2:2,3:3,4:4,5:5},{1:1,2:2,3:3,4:4,5:5},{1:1,2:2,3:3,4:4,5:5},{1:1,2:2,3:3,4:4,5:5},{1:1,2:2,3:3,4:4,5:5},{1:1,2:2,3:3,4:4,5:5}
//  ]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {
}
