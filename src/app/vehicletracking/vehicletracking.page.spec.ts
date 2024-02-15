import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicletrackingPage } from './vehicletracking.page';

describe('VehicletrackingPage', () => {
  let component: VehicletrackingPage;
  let fixture: ComponentFixture<VehicletrackingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VehicletrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
