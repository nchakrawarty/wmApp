import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPaymentPage } from './add-payment.page';

describe('AddPaymentPage', () => {
  let component: AddPaymentPage;
  let fixture: ComponentFixture<AddPaymentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
