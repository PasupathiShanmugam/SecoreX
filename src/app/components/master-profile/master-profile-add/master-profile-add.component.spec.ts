import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterProfileAddComponent } from './master-profile-add.component';

describe('MasterProfileAddComponent', () => {
  let component: MasterProfileAddComponent;
  let fixture: ComponentFixture<MasterProfileAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterProfileAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterProfileAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
