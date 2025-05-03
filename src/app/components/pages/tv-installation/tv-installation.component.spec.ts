import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvInstallationComponent } from './tv-installation.component';

describe('TvInstallationComponent', () => {
  let component: TvInstallationComponent;
  let fixture: ComponentFixture<TvInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvInstallationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
