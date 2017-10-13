import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SindhVehicleComponent } from './sindh-vehicle.component';

describe('SindhVehicleComponent', () => {
  let component: SindhVehicleComponent;
  let fixture: ComponentFixture<SindhVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SindhVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SindhVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
