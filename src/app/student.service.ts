import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HttpClient} from "@angular/common/http"
import { tap } from 'rxjs/operators';

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
  private getURL = "http://localhost:3000/students";
   studentTemp: Student[] = [];
    constructor(private httpClient: HttpClient) {
      this.httpClient.get<Student[]>(this.getURL).subscribe(
        (data: Student[]) => {
          this.studentTemp=data;
        },
        (error) => {
          console.error('Error fetching students:', error);
        }
      );
      this.getStudent();
    }
  
  getStudent(){
    console.log(this.studentTemp)
    return this.httpClient.get<Student[]>(this.getURL);
  }
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
      return this.studentTemp.filter(student =>
        student.firstName.toLowerCase().includes(query.toLowerCase()) ||
        student.lastName.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      return this.studentTemp; // Return all students if query is null or empty.
    }
  }
}
