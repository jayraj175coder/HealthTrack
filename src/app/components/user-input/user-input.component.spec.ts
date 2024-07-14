import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UserInputComponent } from './user-input.component';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';
import { User } from '../../models/user.model';

class MockUserService {
  addUser(user: User) {
    return of(true);
  }
}

describe('UserInputComponent', () => {
  let component: UserInputComponent;
  let fixture: ComponentFixture<UserInputComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, UserInputComponent],
      providers: [{ provide: UserService, useClass: MockUserService }]
    }).compileComponents();

    fixture = TestBed.createComponent(UserInputComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a workout', () => {
    spyOn(userService, 'addUser').and.callThrough();

    component.userName = 'Test User';
    component.workoutType = 'Running';
    component.workoutMinutes = 30;

    component.addWorkout();

    const expectedUser: User = {
      id: jasmine.any(Number) as unknown as number, // Use casting to satisfy TypeScript
      name: 'Test User',
      workouts: [{
        type: 'Running',
        minutes: 30
      }]
    };

    expect(userService.addUser).toHaveBeenCalledWith(jasmine.objectContaining({
      name: 'Test User',
      workouts: [{
        type: 'Running',
        minutes: 30
      }]
    }));
  });

  it('should reset input fields after adding a workout', () => {
    component.userName = 'Test User';
    component.workoutType = 'Running';
    component.workoutMinutes = 30;

    component.addWorkout();

    expect(component.userName).toBe('');
    expect(component.workoutType).toBe('');
    expect(component.workoutMinutes).toBe(0);
  });
});
