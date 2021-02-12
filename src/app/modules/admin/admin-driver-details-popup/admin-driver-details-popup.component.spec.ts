import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDriverDetailsPopupComponent } from './admin-driver-details-popup.component';

describe('AdminDriverDetailsPopupComponent', () => {
  let component: AdminDriverDetailsPopupComponent;
  let fixture: ComponentFixture<AdminDriverDetailsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDriverDetailsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDriverDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
