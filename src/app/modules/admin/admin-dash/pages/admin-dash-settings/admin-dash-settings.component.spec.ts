import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashSettingsComponent } from './admin-dash-settings.component';

describe('AdminDashSettingsComponent', () => {
  let component: AdminDashSettingsComponent;
  let fixture: ComponentFixture<AdminDashSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
