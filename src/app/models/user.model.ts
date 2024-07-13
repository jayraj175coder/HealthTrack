export interface User {
  id: number;
  name: string;
  workouts: {
    type: string;
    minutes: number;
  }[];
}
