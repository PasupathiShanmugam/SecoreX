import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOffBoardComponent } from './employee-off-board.component';

describe('EmployeeOffBoardComponent', () => {
  let component: EmployeeOffBoardComponent;
  let fixture: ComponentFixture<EmployeeOffBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeOffBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeOffBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
