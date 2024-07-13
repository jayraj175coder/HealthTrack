import { Injectable } from '@angular/core';
import { User } from '../models/user.model';  // Ensure this path is correct

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  private users: User[] = [];

  constructor() {
    this.users = this.getInitialUsers();
  }

  //store in jsonlocal storage
  getInitialUsers(): User[] {
    return [
      {
        id: 1,
        name: 'John Doe',
        workouts: [
          { type: 'Running', minutes: 30 },
          { type: 'Cycling', minutes: 45 }
        ]
      },
      {
        id: 2,
        name: 'Jane Smith',
        workouts: [
          { type: 'Swimming', minutes: 60 },
          { type: 'Running', minutes: 20 }
        ]
      },
      {
        id: 3,
        name: 'Mike Johnson',
        workouts: [
          { type: 'Yoga', minutes: 50 },
          { type: 'Cycling', minutes: 40 }
        ]
      }
    ];
  }

  //add local storage users to service
  addUser(user: User): void {
    this.users.push(user);
    localStorage.setItem('userData', JSON.stringify(this.users));
  }

  getUsers(): User[] {
    return this.users;
  }

  setWorkoutMinutesFilter(minutes: number): User[] {
    return this.users.filter(user =>
      user.workouts.some(workout => workout.minutes >= minutes)
    );
  }

  setWorkoutTypeFilter(type: string): User[] {
    return this.users.filter(user =>
      user.workouts.some(workout => workout.type === type)
    );
  }
}
