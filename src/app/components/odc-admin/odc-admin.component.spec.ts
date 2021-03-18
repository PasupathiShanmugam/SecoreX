import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdcAdminComponent } from './odc-admin.component';

describe('OdcAdminComponent', () => {
  let component: OdcAdminComponent;
  let fixture: ComponentFixture<OdcAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdcAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdcAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
