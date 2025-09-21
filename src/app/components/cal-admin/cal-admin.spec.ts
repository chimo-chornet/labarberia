import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalAdmin } from './cal-admin';

describe('CalAdmin', () => {
  let component: CalAdmin;
  let fixture: ComponentFixture<CalAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
