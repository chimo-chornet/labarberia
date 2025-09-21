import { TestBed } from '@angular/core/testing';

import { Peticiones } from './peticiones';

describe('Peticiones', () => {
  let service: Peticiones;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Peticiones);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
