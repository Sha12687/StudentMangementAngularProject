import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentTableComponentComponent } from './student-table-component/student-table-component.component';
import { CardViewComponent } from './card-view/card-view.component';

const routes: Routes = [
  
  { path: 'table-view', component: StudentTableComponentComponent },
  { path: 'card-view', component: CardViewComponent }, // Add this line
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
