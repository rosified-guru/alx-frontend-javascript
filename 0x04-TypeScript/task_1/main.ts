interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; 
}
const teacher1: Teacher = {
  firstName: 'Smith',
  fullTimeEmployee: false,
  lastName: 'Jack',
  location: 'Lagos',
  contract: false,
};
interface Directors extends Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  numberofreports: number;
  location: string;
}
const director1: Directors = {
  firstName: 'Jane',
  lastName: 'Kamau',
  fullTimeEmployee: true,
  numberofreports: 5,
  location: 'New York',
};
interface printTeacherFunction {
    (firstName: string, lastname: string): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};
interface StudentClassInterface {
    workonhomework(): string;
    displayname(): string;
}
interface StudentConstructor {
    new(firstName: string, lastname: string): StudentClassInterface;
}
class Studentclass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workonhomework(): string {
    return 'Currently working';
  }

  displayname(): string {
    return this.firstName;
  }
}