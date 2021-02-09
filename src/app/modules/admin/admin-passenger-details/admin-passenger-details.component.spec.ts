import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPassengerDetailsComponent } from './admin-passenger-details.component';

describe('AdminPassengerDetailsComponent', () => {
  let component: AdminPassengerDetailsComponent;
  let fixture: ComponentFixture<AdminPassengerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPassengerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPassengerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
