import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvStructureComponent } from './tv-structure.component';

describe('TvStructureComponent', () => {
  let component: TvStructureComponent;
  let fixture: ComponentFixture<TvStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvStructureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
