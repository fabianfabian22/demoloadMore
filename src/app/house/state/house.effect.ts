import { Actions, createEffect, ofType } from "@ngrx/effects";


import { Injectable } from "@angular/core";

import { map, catchError, switchMap, mergeMap,  } from "rxjs/operators";
import * as actionHouse from './house.actions'
import {  of  } from "rxjs";
import { HouseService } from "../house.service";



@Injectable()
export class HouseEffects {

  constructor(private actions$: Actions, private service: HouseService) {
    console.log("user effects initialized");
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
}
