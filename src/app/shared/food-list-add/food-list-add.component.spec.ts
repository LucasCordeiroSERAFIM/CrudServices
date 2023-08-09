import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodListAddComponent } from './food-list-add.component';

describe('FoodListAddComponent', () => {
  let component: FoodListAddComponent;
  let fixture: ComponentFixture<FoodListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodListAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
