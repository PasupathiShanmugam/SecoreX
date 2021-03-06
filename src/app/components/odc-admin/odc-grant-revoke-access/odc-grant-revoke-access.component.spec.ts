import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdcGrantRevokeAccessComponent } from './odc-grant-revoke-access.component';

describe('OdcGrantRevokeAccessComponent', () => {
  let component: OdcGrantRevokeAccessComponent;
  let fixture: ComponentFixture<OdcGrantRevokeAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdcGrantRevokeAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdcGrantRevokeAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
