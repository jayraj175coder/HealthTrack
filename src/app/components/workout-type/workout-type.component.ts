import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-workout-type',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './workout-type.component.html',
 
})
export class WorkoutTypeComponent {
  workoutType: string='';
  constructor(private userService: UserService) {}

  filterByType() {
    this.userService.setWorkoutTypeFilter(this.workoutType);
  }
}
