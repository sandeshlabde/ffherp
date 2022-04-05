import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PivortReportComponent } from './pivort-report.component';

describe('PivortReportComponent', () => {
  let component: PivortReportComponent;
  let fixture: ComponentFixture<PivortReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PivortReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PivortReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
