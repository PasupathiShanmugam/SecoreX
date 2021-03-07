import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdcReportsComponent } from './odc-reports.component';

describe('OdcReportsComponent', () => {
  let component: OdcReportsComponent;
  let fixture: ComponentFixture<OdcReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdcReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdcReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
