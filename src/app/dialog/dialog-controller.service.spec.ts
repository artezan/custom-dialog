import { TestBed } from '@angular/core/testing';

import { DialogControllerService } from './dialog-controller.service';

describe('DialogControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DialogControllerService = TestBed.get(DialogControllerService);
    expect(service).toBeTruthy();
  });
});
