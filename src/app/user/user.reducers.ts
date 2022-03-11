
import * as actionsUser from "./user.actions";
import { User } from "../share/models/user.model";
import { createReducer, on } from "@ngrx/store";

export const initialState = {
  loading: false,
  list: [ ],
  error: ''
};

export interface UserState {
  loading: boolean;
  list: User[ ];
  error: string | undefined;
}

export interface FeatureUsers {
  users: UserState;
  loading: boolean;
}
//
//
export const UserReducer = createReducer < UserState> (
  initialState,

  on(actionsUser.loadUsers, (state): UserState => {
    return ({ ...state, loading: true });
  }),


  on(actionsUser.usersFetchSuccessful, (state, {users}): UserState => {
    return { ...state, list: users, loading: false };
  }),

 on(actionsUser.fetchError, (state, action): UserState => {
    return { ...state, error: action.error, loading: false };
 }),

)
