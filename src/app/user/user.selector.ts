import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducers";

export const getUsersFeatureState = createFeatureSelector<UserState>('users');

export const getList = createSelector(
 getUsersFeatureState,
  state => state.list
);

export const  isLoading = createSelector(
 getUsersFeatureState,
  state => state.loading
);

export const  getError = createSelector(
 getUsersFeatureState,
  state => state.error
);

