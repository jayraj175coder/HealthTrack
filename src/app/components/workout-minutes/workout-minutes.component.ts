import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-workout-minutes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './workout-minutes.component.html',

})
export class WorkoutMinutesComponent {
  workoutMinutes: number = 0;
  constructor(private userService: UserService) {}

  filterByMinutes() {
    this.userService.setWorkoutMinutesFilter(this.workoutMinutes);
  }
}
