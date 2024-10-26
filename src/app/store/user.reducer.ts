// src/app/store/user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './user.actions';
import { User } from '../models/user.model';

export interface UserState {
  users: User[]; // Array of users
  error: any;
}

const initialState: UserState = {
  users: [],      // Start with an empty array
  error: null
};

export const userReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({ ...state })), // No change to state on loadUsers
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users })), // users should be an array here
  on(loadUsersFailure, (state, { error }) => ({ ...state, error }))
);
