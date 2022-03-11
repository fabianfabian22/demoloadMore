import { Actions, createEffect, ofType } from "@ngrx/effects";


import { Injectable } from "@angular/core";

import { map, catchError, switchMap, mergeMap, tap } from "rxjs/operators";
import * as actionUser from './user.actions'
import {  of  } from "rxjs";
import { UserService } from "./user.service";
import { loadUsers } from "./user.actions";

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService) {
    console.log("user effects initialized");
  }


  users$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() => this.userService.getUser()
        .pipe(
          map(users => actionUser.usersFetchSuccessful({ users })),
          catchError(error => of(actionUser.fetchError({error})))
       ))
    )
   })


}
