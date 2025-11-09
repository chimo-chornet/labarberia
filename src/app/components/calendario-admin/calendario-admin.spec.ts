import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioAdmin } from './calendario-admin';

describe('CalendarioAdmin', () => {
  let component: CalendarioAdmin;
  let fixture: ComponentFixture<CalendarioAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarioAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarioAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
