import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingEditComponent } from './shoping-edit.component';

describe('ShopingEditComponent', () => {
  let component: ShopingEditComponent;
  let fixture: ComponentFixture<ShopingEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopingEditComponent]
    });
    fixture = TestBed.createComponent(ShopingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
