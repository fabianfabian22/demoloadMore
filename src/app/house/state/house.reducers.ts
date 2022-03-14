import * as actionsHouse from "./house.actions";

import { createReducer, on } from "@ngrx/store";
import { House } from "src/app/share/models/house.model";

export const initialState = {
  loading: false,
  list: [],
  data: [],
  error: ''
};

export interface HouseState {
  loading: boolean;
  list: any[];
  data: any[];
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
    console.log(' ac: ', list);
    let ver = state.list;
    console.log('ver: ', ver);
    return { ...state, list: list, loading: false };
  }),

 on(actionsHouse.fetchError, (state, action): HouseState => {
    return { ...state, error: action.error, loading: false };
 }),
//
)
