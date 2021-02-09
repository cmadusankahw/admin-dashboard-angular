import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIncomeDetailsComponent } from './admin-income-details.component';

describe('AdminIncomeDetailsComponent', () => {
  let component: AdminIncomeDetailsComponent;
  let fixture: ComponentFixture<AdminIncomeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminIncomeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIncomeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
