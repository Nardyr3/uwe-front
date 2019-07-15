import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationSidebarComponent } from './administration-sidebar.component';

describe('AdministrationSidebarComponent', () => {
  let component: AdministrationSidebarComponent;
  let fixture: ComponentFixture<AdministrationSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
