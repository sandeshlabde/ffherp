import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmailQuotComponent } from './show-email-quot.component';

describe('ShowEmailQuotComponent', () => {
  let component: ShowEmailQuotComponent;
  let fixture: ComponentFixture<ShowEmailQuotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEmailQuotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEmailQuotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
