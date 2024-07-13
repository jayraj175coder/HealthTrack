import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a user', () => {
    service.addUser({ name: 'Test User', workouts: [{ type: 'Running', minutes: 30 }] });
    expect(service.getUsers().length).toBe(4); // Assuming 3 initial users
  });

  it('should filter users by workout type', () => {
    service.setWorkoutTypeFilter('Running');
    expect(service.getUsers().length).toBe(2);
  });

  it('should filter users by workout minutes', () => {
    service.setWorkoutMinutesFilter(30);
    expect(service.getUsers().length).toBe(1);
  });
});
