import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalUsuarioComponent } from './cal-usuario.component';

describe('CalUsuarioComponent', () => {
  let component: CalUsuarioComponent;
  let fixture: ComponentFixture<CalUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
