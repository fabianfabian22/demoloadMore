import { createAction, props } from '@ngrx/store';
import { House } from 'src/app/share/models/house.model';


export const loadHouse = createAction('[ HOUSE]  load  house ');


export const loadedUsers =  createAction(
  '[ HOUSE ]  Loaded success House',
   props<{ houses: House[ ] }>()
);
export const houseFetchSuccessful =  createAction(
    '[ HOUSE ]  Loaded success House',
     props<{ houses: House[ ] }>()
);

export const fetchError = createAction(
    '[ HOUSE ]  load error House ',
    props<{ error: string }>()
);
