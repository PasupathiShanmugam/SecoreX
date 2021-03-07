import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdcBulkUploadComponent } from './odc-bulk-upload.component';

describe('OdcBulkUploadComponent', () => {
  let component: OdcBulkUploadComponent;
  let fixture: ComponentFixture<OdcBulkUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdcBulkUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdcBulkUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
