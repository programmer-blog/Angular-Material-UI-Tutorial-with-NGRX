// user-list.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from '../store/user.reducer';
import { loadUsers } from '../store/user.actions';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { MatTableDataSource } from '@angular/material/table'; // Import MatTableDataSource

// Import Angular Material Modules
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  imports: [MatTableModule, MatButtonModule, MatCardModule, CommonModule], // Import necessary modules here
})
export class UserListComponent implements OnInit {
  private store = inject(Store<UserState>);
  dataLoaded = false;
  
  // Create a MatTableDataSource instance
  dataSource = new MatTableDataSource<User>();
  displayedColumns: string[] = ['id', 'name', 'email'];

  ngOnInit(): void {
    // Subscribe to users$ to update the dataSource
    this.store.select((state) => state.users.users).subscribe((users) => {
      if (users) {
        this.dataSource.data = users; // Set data for MatTableDataSource
      }
    });
  }

  loadUsers() {
    this.store.dispatch(loadUsers());
    this.dataLoaded = true;
  }
}
