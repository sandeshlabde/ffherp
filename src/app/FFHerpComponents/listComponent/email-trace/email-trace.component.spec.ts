import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTraceComponent } from './email-trace.component';

describe('EmailTraceComponent', () => {
  let component: EmailTraceComponent;
  let fixture: ComponentFixture<EmailTraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailTraceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailTraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
