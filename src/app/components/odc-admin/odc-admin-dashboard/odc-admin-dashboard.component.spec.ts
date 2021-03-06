import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdcAdminDashboardComponent } from './odc-admin-dashboard.component';

describe('OdcAdminDashboardComponent', () => {
  let component: OdcAdminDashboardComponent;
  let fixture: ComponentFixture<OdcAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdcAdminDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdcAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
