import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  grade: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
   students: Student[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      age: 20,
      grade: 85
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      age: 22,
      grade: 78
    },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Johnson',
      email: 'michael.johnson@example.com',
      age: 19,
      grade: 90
    },
    {
      id: 4,
      firstName: 'Emily',
      lastName: 'Brown',
      email: 'emily.brown@example.com',
      age: 21,
      grade: 95
    },
    {
      id: 5,
      firstName: 'William',
      lastName: 'Jones',
      email: 'william.jones@example.com',
      age: 23,
      grade: 88
    }
  ];

  private searchQuerySubject = new BehaviorSubject<string>('');

  setSearchQuery(query: string) {
    if (query !== null) {
      this.searchQuerySubject.next(query);
    }
  }

  getSearchQuery() {
    return this.searchQuerySubject.asObservable();
  }

  // This method returns students either based on search query or all students if query is null.
  getStudentsBySearchQuery(query: string | null): Student[] {
    if (query !== null && query.trim() !== '') {
      return this.students.filter(student =>
        student.firstName.toLowerCase().includes(query.toLowerCase()) ||
        student.lastName.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      return this.students; // Return all students if query is null or empty.
    }
  }
}
