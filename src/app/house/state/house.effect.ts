import { Actions, createEffect, ofType } from "@ngrx/effects";


import { Injectable } from "@angular/core";

import { map, catchError, switchMap, mergeMap, withLatestFrom, tap,  } from "rxjs/operators";
import * as actionHouse from './house.actions'
import {  of  } from "rxjs";
import { HouseService } from "../house.service";
import { select, Store } from "@ngrx/store";
import * as  selectorHouse  from './house.selector'


@Injectable()
export class HouseEffects {

  lengthHouse = 0;

  constructor(private actions$: Actions,
    private store: Store<any>,
    private service: HouseService) {
    console.log("user effects initialized");
      this.store.select(selectorHouse.selectAllItemsLength).subscribe((lengthouse) => this.lengthHouse = lengthouse  )
  }




  house$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actionHouse.loadHouse),

      switchMap(() => this.service.getHouse()
        .pipe(
          map(houses => actionHouse.houseFetchSuccessful({ houses })),
          catchError(error => of(actionHouse.fetchError({ error })))
        ))
    )
  })
//
  loadMorehouse$= createEffect(() => this.actions$.pipe(
    ofType(actionHouse.getMoreItems),
    switchMap((action)=>this.service.getHouseMore(action.lengthHouse)
      .pipe(
      tap( console.log),
      map(list => actionHouse.houseFetchMoreSuccessful({ list: list['data'] })),
      catchError(error => of(actionHouse.fetchError({ error })))
    )

    )
  )
  )





}
