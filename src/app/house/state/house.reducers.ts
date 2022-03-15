import * as actionsHouse from "./house.actions";
import { createReducer, on } from "@ngrx/store";

export const initialState = {
  loading: false,
  list: [],
  error: ''
};

export interface HouseState {
  loading: boolean;
  list: any[];
  error: string | undefined;
}

export interface FeatureHouse {
  houses: HouseState;
  loading: boolean;
}

export const HouseReducer = createReducer<HouseState>(
  initialState,

  on(actionsHouse.loadHouse, (state): HouseState => {
    return ({ ...state, loading: true });
  }),

  on(actionsHouse.getMoreItems, (state, action): HouseState => {
  return ({ ...state, loading: true });
  }),


  on(actionsHouse.houseFetchSuccessful, (state, action): HouseState => {
    return { ...state, list: action.houses, loading: false };
  }),

  on(actionsHouse.houseFetchMoreSuccessful, (state,{list}): HouseState => {
   let updateList = state.list.concat(list);
   return { ...state, list: updateList , loading: false };
  }),

 on(actionsHouse.fetchError, (state, action): HouseState => {
    return { ...state, error: action.error, loading: false };
 }),

)
