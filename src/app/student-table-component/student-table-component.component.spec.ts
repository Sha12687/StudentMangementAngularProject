import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTableComponentComponent } from './student-table-component.component';

describe('StudentTableComponentComponent', () => {
  let component: StudentTableComponentComponent;
  let fixture: ComponentFixture<StudentTableComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentTableComponentComponent]
    });
    fixture = TestBed.createComponent(StudentTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
