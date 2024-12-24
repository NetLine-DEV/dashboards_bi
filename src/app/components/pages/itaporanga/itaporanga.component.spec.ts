import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItaporangaComponent } from './itaporanga.component';

describe('ItaporangaComponent', () => {
  let component: ItaporangaComponent;
  let fixture: ComponentFixture<ItaporangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItaporangaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItaporangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
