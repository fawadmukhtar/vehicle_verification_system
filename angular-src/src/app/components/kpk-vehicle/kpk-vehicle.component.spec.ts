import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpkVehicleComponent } from './kpk-vehicle.component';

describe('KpkVehicleComponent', () => {
  let component: KpkVehicleComponent;
  let fixture: ComponentFixture<KpkVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpkVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpkVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
