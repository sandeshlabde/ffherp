import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionScheduledComponent } from './action-scheduled.component';

describe('ActionScheduledComponent', () => {
  let component: ActionScheduledComponent;
  let fixture: ComponentFixture<ActionScheduledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionScheduledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionScheduledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
