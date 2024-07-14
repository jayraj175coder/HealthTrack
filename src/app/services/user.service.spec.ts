import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { User } from '../models/user.model';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with initial users', () => {
    expect(service.getUsers().length).toBe(3);
  });

  it('should add a new user', () => {
    const newUser: User = {
      id: 4,
      name: 'New User',
      workouts: [
        { type: 'Running', minutes: 30 },
      ]
    };
    service.addUser(newUser);
    const users = service.getUsers();
    expect(users.length).toBe(4);
    expect(users[3].name).toBe('New User');
  });

  it('should filter users by workout minutes', () => {
    const filteredUsers = service.setWorkoutMinutesFilter(30);
    expect(filteredUsers.length).toBe(3);
  });

  it('should filter users by workout type', () => {
    const filteredUsers = service.setWorkoutTypeFilter('Cycling');
    expect(filteredUsers.length).toBe(2);
    expect(filteredUsers[0].name).toBe('John Doe');
  });
});
