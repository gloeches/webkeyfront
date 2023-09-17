import { TestBed } from '@angular/core/testing';

import { MainUserService } from './main-user.service';

describe('MainUserService', () => {
  let service: MainUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
