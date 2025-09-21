import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaDia } from './cita-dia';

describe('CitaDia', () => {
  let component: CitaDia;
  let fixture: ComponentFixture<CitaDia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitaDia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaDia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
