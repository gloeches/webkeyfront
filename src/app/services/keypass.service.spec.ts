import { TestBed } from '@angular/core/testing';

import { KeypassService } from './keypass.service';

describe('KeypassService', () => {
  let service: KeypassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeypassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
