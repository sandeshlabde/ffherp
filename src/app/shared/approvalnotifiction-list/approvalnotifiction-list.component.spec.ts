import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalnotifictionListComponent } from './approvalnotifiction-list.component';

describe('ApprovalnotifictionListComponent', () => {
  let component: ApprovalnotifictionListComponent;
  let fixture: ComponentFixture<ApprovalnotifictionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalnotifictionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalnotifictionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
