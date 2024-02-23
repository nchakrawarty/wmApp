import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripEndPage } from './trip-end.page';

describe('TripEndPage', () => {
  let component: TripEndPage;
  let fixture: ComponentFixture<TripEndPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TripEndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
