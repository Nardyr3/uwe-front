import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationModuleComponent } from './administration-module.component';

describe('AdministrationModuleComponent', () => {
  let component: AdministrationModuleComponent;
  let fixture: ComponentFixture<AdministrationModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
