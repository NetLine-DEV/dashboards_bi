import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivityGratificationComponent } from './productivity-gratification.component';

describe('ProductivityGratificationComponent', () => {
  let component: ProductivityGratificationComponent;
  let fixture: ComponentFixture<ProductivityGratificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductivityGratificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductivityGratificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
