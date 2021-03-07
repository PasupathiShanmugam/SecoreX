import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOffBoardRelieveComponent } from './employee-off-board-relieve.component';

describe('EmployeeOffBoardRelieveComponent', () => {
  let component: EmployeeOffBoardRelieveComponent;
  let fixture: ComponentFixture<EmployeeOffBoardRelieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeOffBoardRelieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeOffBoardRelieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
