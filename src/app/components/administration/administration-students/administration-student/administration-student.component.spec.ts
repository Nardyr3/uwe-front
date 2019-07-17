import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationStudentComponent } from './administration-student.component';

describe('AdministrationStudentComponent', () => {
  let component: AdministrationStudentComponent;
  let fixture: ComponentFixture<AdministrationStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
