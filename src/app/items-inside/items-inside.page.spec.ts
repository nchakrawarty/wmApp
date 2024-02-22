import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsInsidePage } from './items-inside.page';

describe('ItemsInsidePage', () => {
  let component: ItemsInsidePage;
  let fixture: ComponentFixture<ItemsInsidePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ItemsInsidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



