import { TestBed } from '@angular/core/testing';

import { UnsplashService} from './apiservice.service';

describe('ApiserviceService', () => {
  let service: UnsplashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsplashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
