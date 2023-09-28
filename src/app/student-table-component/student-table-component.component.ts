import { Component,Input, Output, EventEmitter  } from '@angular/core';
import { StudentService,Student } from '../student.service';
;
@Component({
  selector: 'app-student-table-component',
  templateUrl: './student-table-component.component.html',
  styleUrls: ['./student-table-component.component.css']
})
export class StudentTableComponentComponent {
   
  constructor(private StudentService: StudentService) {}
  filteredStudents: Student[] = [];
  students: Student[] = this.StudentService.studentTemp;
  ngOnInit(): void {
    
    this.filteredStudents = this.StudentService.studentTemp;
    this.StudentService.getSearchQuery().subscribe(query => {
      // Use the query to filter your data
      this.filteredStudents = this.students.filter(student =>
        student.firstName.toLowerCase().includes(query.toLowerCase()) ||
        student.lastName.toLowerCase().includes(query.toLowerCase())
      );
    });
  }
  // @Input() students: Student[] = [];
  //filteredStudents: Student[] = [];
  // @Output() searchQueryChanged = new EventEmitter<string>();

  // onSearchQueryChanged(query: string) {
  //   this.filteredStudents = this.students.filter(student =>
  //     student.firstName.toLowerCase().includes(query.toLowerCase()) ||
  //     student.lastName.toLowerCase().includes(query.toLowerCase())
  //   );
  //   console.log(this.filteredStudents);
  // }
}
