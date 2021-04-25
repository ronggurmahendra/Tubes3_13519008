import { TestBed } from '@angular/core/testing';

import { ServerInterfaceService } from './server-interface.service';

describe('ServerInterfaceService', () => {
  let service: ServerInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
