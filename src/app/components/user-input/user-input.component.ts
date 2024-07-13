import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
 
})
export class UserInputComponent {
  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number = 0;

  constructor(private userService: UserService) {}

  addWorkout() {
    const newUser: User = {
      id: Date.now(),
      name: this.userName,
      workouts: [{
        type: this.workoutType,
        minutes: this.workoutMinutes
      }]
    };
    this.userService.addUser(newUser);
  }
}
