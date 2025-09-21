import { TestBed } from '@angular/core/testing';

import { ScriptLoaderService } from './scriptloader.service';

describe('ScriptloaderService', () => {
  let service: ScriptLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
