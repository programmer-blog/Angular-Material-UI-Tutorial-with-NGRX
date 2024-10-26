import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './components/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  template: `<app-user-list></app-user-list>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-ngrx-material-tutorial';
}
