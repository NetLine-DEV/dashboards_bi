import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiraunaComponent } from './uirauna.component';

describe('UiraunaComponent', () => {
  let component: UiraunaComponent;
  let fixture: ComponentFixture<UiraunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiraunaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiraunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
