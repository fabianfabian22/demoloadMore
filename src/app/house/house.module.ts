import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseRoutingModule } from './house-routing.module';
import { HouseComponent } from './house.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HouseReducer } from './state/house.reducers';
import { HouseEffects } from './state/house.effect';


@NgModule({
  declarations: [
    HouseComponent
  ],
  imports: [
    CommonModule,
    HouseRoutingModule,
    StoreModule.forFeature("houses", HouseReducer ),
    EffectsModule.forFeature([HouseEffects]),
  ]
})
export class HouseModule { }
