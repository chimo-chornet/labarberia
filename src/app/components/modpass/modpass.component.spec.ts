import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModpassComponent } from './modpass.component';

describe('ModpassComponent', () => {
  let component: ModpassComponent;
  let fixture: ComponentFixture<ModpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModpassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
