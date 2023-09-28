import { Component,Input } from '@angular/core';
import { StudentService,Student } from '../student.service';


@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent {
  // @Input() students: Student[] = [];
  constructor(private StudentService: StudentService) {}
  students: Student[] = this.StudentService.studentTemp;
  filteredStudents: Student[] = [];
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
}
