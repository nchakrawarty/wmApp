import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoustomerlistPage } from './coustomerlist.page';

describe('CoustomerlistPage', () => {
  let component: CoustomerlistPage;
  let fixture: ComponentFixture<CoustomerlistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoustomerlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
