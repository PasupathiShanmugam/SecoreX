import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeIdCardRequestComponent } from './employee-id-card-request.component';

describe('EmployeeIdCardRequestComponent', () => {
  let component: EmployeeIdCardRequestComponent;
  let fixture: ComponentFixture<EmployeeIdCardRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeIdCardRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeIdCardRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
