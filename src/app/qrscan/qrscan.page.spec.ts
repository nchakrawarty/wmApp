import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QRScanPage } from './qrscan.page';

describe('QRScanPage', () => {
  let component: QRScanPage;
  let fixture: ComponentFixture<QRScanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QRScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
