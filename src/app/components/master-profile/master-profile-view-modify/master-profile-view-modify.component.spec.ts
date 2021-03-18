import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterProfileViewModifyComponent } from './master-profile-view-modify.component';

describe('MasterProfileViewModifyComponent', () => {
  let component: MasterProfileViewModifyComponent;
  let fixture: ComponentFixture<MasterProfileViewModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterProfileViewModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterProfileViewModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
