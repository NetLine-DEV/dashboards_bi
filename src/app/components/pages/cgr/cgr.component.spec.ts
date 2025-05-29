import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgrComponent } from './cgr.component';

describe('CgrComponent', () => {
  let component: CgrComponent;
  let fixture: ComponentFixture<CgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CgrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
