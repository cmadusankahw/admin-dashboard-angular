import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPassengerPaymentsDetailsComponent } from './admin-passenger-payments-details.component';

describe('AdminPassengerPaymentsDetailsComponent', () => {
  let component: AdminPassengerPaymentsDetailsComponent;
  let fixture: ComponentFixture<AdminPassengerPaymentsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPassengerPaymentsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPassengerPaymentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
