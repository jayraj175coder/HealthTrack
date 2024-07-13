import { Component } from '@angular/core';
import { UserInputComponent } from './components/user-input/user-input.component';
import { WorkoutTypeComponent } from './components/workout-type/workout-type.component';
import { WorkoutMinutesComponent } from './components/workout-minutes/workout-minutes.component';
import { SummaryComponent } from './components/summary/summary.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    UserInputComponent,
    WorkoutTypeComponent,
    WorkoutMinutesComponent,
    SummaryComponent
  ]
})
export class AppComponent {
  title: string = 'Health Challenge Tracker';
}
