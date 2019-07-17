import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationStudentsComponent } from './administration-students.component';

describe('AdministrationStudentsComponent', () => {
  let component: AdministrationStudentsComponent;
  let fixture: ComponentFixture<AdministrationStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
