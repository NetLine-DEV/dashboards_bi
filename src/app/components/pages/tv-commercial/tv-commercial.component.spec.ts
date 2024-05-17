import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvCommercialComponent } from './tv-commercial.component';

describe('TvCommercialComponent', () => {
  let component: TvCommercialComponent;
  let fixture: ComponentFixture<TvCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvCommercialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
