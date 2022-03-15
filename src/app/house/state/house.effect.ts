import { Actions, createEffect, ofType } from "@ngrx/effects";


import { Injectable } from "@angular/core";
import { map, catchError, switchMap,tap,  } from "rxjs/operators";
import * as actionHouse from './house.actions'
import {  of  } from "rxjs";
import { HouseService } from "../house.service";




@Injectable()
export class HouseEffects {

  lengthHouse = 0;

  constructor(private actions$: Actions,
  private service: HouseService) { }

  house$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actionHouse.loadHouse),

      switchMap(() => this.service.getHouse()
        .pipe(
          map(houses => actionHouse.houseFetchSuccessful({ houses: houses['data'] })),
          catchError(error => of(actionHouse.fetchError({ error })))
        ))
    )
  })

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
