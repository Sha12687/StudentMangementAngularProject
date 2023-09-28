import { Component, Output, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchQuery: string = '';
  @Output() searchQueryChanged = new EventEmitter<string>();
  constructor(private studentServie: StudentService) {}
  onSearch() {
    // Emit an event or call a method to handle the search query in the parent component
    this.studentServie.setSearchQuery(this.searchQuery);
  }

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
