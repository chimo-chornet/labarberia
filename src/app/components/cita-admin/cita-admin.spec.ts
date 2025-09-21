import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaAdmin } from './cita-admin';

describe('CitaAdmin', () => {
  let component: CitaAdmin;
  let fixture: ComponentFixture<CitaAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitaAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
