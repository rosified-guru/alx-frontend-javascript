
export namespace Subjects {
    c: './Cpp';
    java: './Java';
    react: './React';
  export interface Teacher {
    firstName: string;
    lastName: string;
  }
export interface Teacher {
    experienceTeachingC?: number;
    experienceTeachingReact?: number;
    experienceTeachingJava?: number;
}
  export class Subject {
     teacher: Teacher;
     setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }

     getTeacher(): Teacher {
      return this.teacher;
    }
  }
}
  