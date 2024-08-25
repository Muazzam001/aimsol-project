import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProductsDisplayComponent } from './main-products-display.component';

describe('MainProductsDisplayComponent', () => {
  let component: MainProductsDisplayComponent;
  let fixture: ComponentFixture<MainProductsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainProductsDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainProductsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
