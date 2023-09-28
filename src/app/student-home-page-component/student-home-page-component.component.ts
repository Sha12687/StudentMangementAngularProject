import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-home-page',
  templateUrl: './student-home-page-component.component.html',
  styleUrls: ['./student-home-page-component.component.css']
})
export class StudentHomePageComponent {
  // students: StudentServicent[] = [];
  // filteredStudents: Student[] = this.students;

  // onSearchQueryChanged(query: string) {
  //   this.filteredStudents = this.students.filter(student =>
  //     student.firstName.toLowerCase().includes(query.toLowerCase()) ||
  //     student.lastName.toLowerCase().includes(query.toLowerCase())
  //   );
  //   console.log(this.filteredStudents);
  // }
  addStudent() {
    // Add logic for adding a student
  }

  editStudent() {
    // Add logic for editing a student
  }

  deleteStudent() {
    // Add logic for deleting a student
  }
}
