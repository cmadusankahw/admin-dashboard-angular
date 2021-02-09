import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDriverPaymentsDetailsComponent } from './admin-driver-payments-details.component';

describe('AdminDriverPaymentsDetailsComponent', () => {
  let component: AdminDriverPaymentsDetailsComponent;
  let fixture: ComponentFixture<AdminDriverPaymentsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDriverPaymentsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDriverPaymentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
