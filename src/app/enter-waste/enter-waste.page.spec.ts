import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnterWastePage } from './enter-waste.page';

describe('EnterWastePage', () => {
  let component: EnterWastePage;
  let fixture: ComponentFixture<EnterWastePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EnterWastePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
