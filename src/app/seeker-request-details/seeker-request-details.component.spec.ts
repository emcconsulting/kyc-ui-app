import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerRequestDetailsComponent } from './seeker-request-details.component';

describe('SeekerRequestDetailsComponent', () => {
  let component: SeekerRequestDetailsComponent;
  let fixture: ComponentFixture<SeekerRequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerRequestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
