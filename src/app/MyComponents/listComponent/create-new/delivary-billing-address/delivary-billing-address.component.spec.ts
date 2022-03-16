import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivaryBillingAddressComponent } from './delivary-billing-address.component';

describe('DelivaryBillingAddressComponent', () => {
  let component: DelivaryBillingAddressComponent;
  let fixture: ComponentFixture<DelivaryBillingAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelivaryBillingAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivaryBillingAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
