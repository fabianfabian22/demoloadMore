import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HouseState } from "./house.reducers";

export const getHouseFeatureState = createFeatureSelector<HouseState>('houses');

export const getList = createSelector(
  getHouseFeatureState,
  state => {
  return state.list }
);

export const selectAllItemsLength= createSelector(
  getHouseFeatureState,
  state => {
     return state.list.length; }
);

export const  isLoading = createSelector(
  getHouseFeatureState,
  state => state.loading
);

export const  getError = createSelector(
  getHouseFeatureState,
  state => state.error
);


