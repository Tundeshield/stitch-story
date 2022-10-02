import { Staff } from "./User";

export interface Project {
  id: number;
  projectName: string;
  projectDescription: string;
  completed: boolean;
  projectOwnerID: number;
  createdAt: Date;
  supervisors: Staff[];
}
