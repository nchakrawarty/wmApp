import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripStartPage } from './trip-start.page';

describe('TripStartPage', () => {
  let component: TripStartPage;
  let fixture: ComponentFixture<TripStartPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TripStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
