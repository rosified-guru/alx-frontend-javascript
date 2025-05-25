import { Subjects } from './Subject';


export interface Teacher {
  firstName: string;
  experienceTeachingJava?: number;
}


export class Java extends Subject {
  teacher?: Teacher;

  getRequirements(): string {
    return 'Here is the list of requirements for Java';
  }

  getAvailableTeacher(): string {
    if (this.teacher && this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    return 'No available teacher';
  }
}