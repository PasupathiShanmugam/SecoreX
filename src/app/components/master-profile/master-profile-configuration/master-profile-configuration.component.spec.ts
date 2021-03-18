import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterProfileConfigurationComponent } from './master-profile-configuration.component';

describe('MasterProfileConfigurationComponent', () => {
  let component: MasterProfileConfigurationComponent;
  let fixture: ComponentFixture<MasterProfileConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterProfileConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterProfileConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
