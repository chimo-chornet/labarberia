import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaUsuarioComponent } from './cita-usuario.component';

describe('CitaUsuarioComponent', () => {
  let component: CitaUsuarioComponent;
  let fixture: ComponentFixture<CitaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitaUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
