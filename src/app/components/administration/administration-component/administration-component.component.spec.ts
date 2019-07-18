import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationComponentComponent } from './administration-component.component';

describe('AdministrationComponentComponent', () => {
  let component: AdministrationComponentComponent;
  let fixture: ComponentFixture<AdministrationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
