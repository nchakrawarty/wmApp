import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QREntryPage } from './qrentry.page';

describe('QREntryPage', () => {
  let component: QREntryPage;
  let fixture: ComponentFixture<QREntryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QREntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
