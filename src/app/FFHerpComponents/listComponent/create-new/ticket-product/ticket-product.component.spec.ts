import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketProductComponent } from './ticket-product.component';

describe('TicketProductComponent', () => {
  let component: TicketProductComponent;
  let fixture: ComponentFixture<TicketProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
