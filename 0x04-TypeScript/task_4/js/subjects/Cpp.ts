import { Subjects } from './Subject';

export interface Teacher extends Subjects.Teacher {
  experienceTeachingC?: number;
}

export class Cpp extends Subjects.Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Cpp';
  }

  getAvailableTeacher(): string {
    if (this.teacher && (this.teacher as Teacher).experienceTeachingC && (this.teacher as Teacher).experienceTeachingC > 0) {
      return `Available Teacher: ${this.teacher.firstName}`;
    } else {
      return 'No available teacher';
    }
  }
}