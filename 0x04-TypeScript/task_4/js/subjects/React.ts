import { Subjects } from './Subject';

export interface Teacher extends Subjects.Teacher {
  experienceTeachingReact?: number;
}

export class React extends Subjects.Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for React';
  }

  getAvailableTeacher(): string {
    if (
      this.teacher &&
      (this.teacher as Teacher).experienceTeachingReact &&
      (this.teacher as Teacher).experienceTeachingReact! > 0
    ) {
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    return 'No available teacher';
  }
}