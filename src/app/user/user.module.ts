import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './user.reducers';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from './user/user.component';
import { UserEffects } from './user.effect';
import { UserRoutingModule } from './user/user.routing.module';
import { ListComponent } from './list/list.component';




@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("users", UserReducer ),
    EffectsModule.forFeature([UserEffects]),
    HttpClientModule,
    UserRoutingModule
  ],
  exports: [UserComponent],
  declarations: [UserComponent, ListComponent],
  providers: []
})
export class UserModule {}
