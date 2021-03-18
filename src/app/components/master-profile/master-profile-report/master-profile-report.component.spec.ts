import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterProfileReportComponent } from './master-profile-report.component';

describe('MasterProfileReportComponent', () => {
  let component: MasterProfileReportComponent;
  let fixture: ComponentFixture<MasterProfileReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterProfileReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterProfileReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
