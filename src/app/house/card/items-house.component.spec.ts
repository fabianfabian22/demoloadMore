import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsHouseComponent } from './items-house.component';

describe('ItemsHouseComponent', () => {
  let component: ItemsHouseComponent;
  let fixture: ComponentFixture<ItemsHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
