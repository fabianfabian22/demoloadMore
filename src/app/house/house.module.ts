import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseRoutingModule } from './house-routing.module';
import { HouseComponent } from './house.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HouseReducer } from './state/house.reducers';
import { HouseEffects } from './state/house.effect';
import { ItemsHouseComponent } from './card/items-house.component';



@NgModule({
  declarations: [
    HouseComponent ,
    ItemsHouseComponent,
  ],
  imports: [
    CommonModule,
    HouseRoutingModule,
    StoreModule.forFeature("houses", HouseReducer ),
    EffectsModule.forFeature([HouseEffects]),
  ],
  exports: [HouseComponent]
})
export class HouseModule { }
