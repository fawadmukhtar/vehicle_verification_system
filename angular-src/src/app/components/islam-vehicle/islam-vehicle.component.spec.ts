import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamVehicleComponent } from './islam-vehicle.component';

describe('IslamVehicleComponent', () => {
  let component: IslamVehicleComponent;
  let fixture: ComponentFixture<IslamVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IslamVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IslamVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
