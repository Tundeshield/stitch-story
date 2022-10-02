import { Message } from './Message';
import { Comment } from './Comment';
import { Project } from './Project';
import { Task } from './Task';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  messages: Message[];
  comments: Comment[];
}

export interface ProductionManager extends User {
  createdProjects: Project[];
}

export interface Staff extends User {
  assignedTasks: Task[];
}

export interface Customer extends User {
  customerProjects: Project[];
}
