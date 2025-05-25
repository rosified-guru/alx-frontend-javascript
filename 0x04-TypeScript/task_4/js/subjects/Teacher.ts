interface Teacher {
    firstname: string;
    lastname: string;
    experienceTeachingC?: number;
    experienceTeachingReact?: number;
    experienceTeachingJava?: number;
}

class Subject {
    
    
}

class cpp extends Subject {
    teacher?: Teacher;

    getRequirements(): string {
        return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
        if (this.teacher && this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
            return `Available Teacher: ${this.teacher.firstname}`;
        } else {
            return 'No available teacher';
        }
    }
}