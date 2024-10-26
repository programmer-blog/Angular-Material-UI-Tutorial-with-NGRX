// src/app/store/user.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './user.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  // Use `inject()` instead of constructor-based injection
  private actions$ = inject(Actions);
  private userService = inject(UserService);
  
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => loadUsersSuccess({ users })), // Ensure `users` is an array here
          catchError((error) => of(loadUsersFailure({ error })))
        )
      )
    )
  );
}
