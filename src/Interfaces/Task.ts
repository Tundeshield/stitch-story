import { Comment } from './Comment';

export interface Task {
  id: number;
  taskName: string;
  taskDescription: string;
  projectID: number;
  startDate: Date;
  endDate: Date;
  completed: boolean;
  taskSupervisor: number;
  taskComments: Comment[];
}
