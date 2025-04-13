import { TestBed } from '@angular/core/testing';

import { Service2backendService } from './service2backend.service';

describe('Service2backendService', () => {
  let service: Service2backendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service2backendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
