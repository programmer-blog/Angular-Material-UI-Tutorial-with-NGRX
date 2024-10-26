import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { userReducer } from './app/store/user.reducer';
import { UserEffects } from './app/store/user.effects';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideStore({ users: userReducer }),
    provideEffects([UserEffects]), // Ensure UserEffects is provided here
  ],
});
