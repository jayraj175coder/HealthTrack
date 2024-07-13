import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule], // Ensure only Angular modules are imported here
})
export class SummaryComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchName: string = '';
  workoutType: string = 'All';
  itemsPerPage: number = 5;
  currentPage: number = 1;
  selectedUser: User | null = null;

  constructor(private userService: UserService) {}

  // Initialize the component and fetch users
  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.applyFilters();
  }

  // Apply search and filter criteria
  applyFilters(): void {
    let users = this.users;

    // Filter by search name
    if (this.searchName) {
      users = users.filter(user => 
        user.name.toLowerCase().includes(this.searchName.toLowerCase())
      );
    }

    // Filter by workout type
    if (this.workoutType !== 'All') {
      users = users.filter(user => 
        user.workouts.some(workout => workout.type === this.workoutType)
      );
    }

    // Paginate the filtered users
    this.filteredUsers = users.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
  }

  // Handle search input change
  onSearchChange(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  // Handle filter selection change
  onFilterChange(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  // Handle items per page change
  onItemsPerPageChange(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  // Handle page number change
  onPageChange(page: number): void {
    this.currentPage = page;
    this.applyFilters();
  }

  // Select a user
  onSelectUser(user: User): void {
    this.selectedUser = user;
  }

  // Calculate total number of pages
  get totalPages(): number {
    return Math.ceil(this.users.length / this.itemsPerPage);
  }

  // Create an array of page numbers
  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // Get a comma-separated list of workout types for a user
  getWorkoutTypes(user: User): string {
    return user.workouts.map(w => w.type).join(', ');
  }

  // Calculate total workout minutes for a user
  getTotalMinutes(user: User): number {
    return user.workouts.reduce((acc, w) => acc + w.minutes, 0);
  }

  // Get a list of unique workout types from all users
  getWorkoutTypesList(): string[] {
    const types = new Set<string>();
    this.users.forEach(user => {
      user.workouts.forEach(workout => {
        types.add(workout.type);
      });
    });
    return Array.from(types);
  }
}
