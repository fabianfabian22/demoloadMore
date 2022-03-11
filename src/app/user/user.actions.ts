import { createAction, props } from '@ngrx/store';
import { User } from '../share/models/user.model';

export const loadUsers = createAction('[ USERS ]  load  User ');


export const loadedUsers =  createAction(
  '[ USERS ]  Loaded success User',
   props<{ users: User[ ] }>()
);
export const usersFetchSuccessful =  createAction(
    '[ USERS ]  Loaded success User',
     props<{ users: User[ ] }>()
);

export const fetchError = createAction(
    '[ USERS ]  load error User ',
    props<{ error: string }>()
);




