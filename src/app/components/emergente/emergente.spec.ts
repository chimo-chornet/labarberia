import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emergente } from './emergente';

describe('Emergente', () => {
  let component: Emergente;
  let fixture: ComponentFixture<Emergente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emergente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Emergente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
