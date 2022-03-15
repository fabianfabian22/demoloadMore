import { createAction, props } from '@ngrx/store';
import { House } from 'src/app/share/models/house.model';


export const loadHouse = createAction('[ HOUSE]  load  house ');

export const getMoreItems = createAction(
  `[ HOUSE]  getMoreItems`,
  props<{ lengthHouse: number }>()
);

export const getItemsComplete = createAction(
  `[ HOUSE]  getItemsComplete`,
  props<{ houses: any[] }>()
);

export const houseFetchSuccessful =  createAction(
    '[ HOUSE ]  Loaded success House',
     props<{ houses: House[ ] }>()
);

export const houseFetchMoreSuccessful =  createAction(
  '[ HOUSE ]  Loaded MORE  success House',
   props<{ list: House[ ] }>()
);

export const fetchError = createAction(
    '[ HOUSE ]  load error House ',
    props<{ error: string }>()
);


