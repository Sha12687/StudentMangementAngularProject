import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student-management';
  onSearchQueryChanged(query: string) {
    // Define the logic to handle the search query here
  }
}
