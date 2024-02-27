import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NonrecycleAddPage } from './nonrecycle-add.page';

describe('NonrecycleAddPage', () => {
  let component: NonrecycleAddPage;
  let fixture: ComponentFixture<NonrecycleAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NonrecycleAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
