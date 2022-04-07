import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVoucharComponent } from './edit-vouchar.component';

describe('EditVoucharComponent', () => {
  let component: EditVoucharComponent;
  let fixture: ComponentFixture<EditVoucharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVoucharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVoucharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
