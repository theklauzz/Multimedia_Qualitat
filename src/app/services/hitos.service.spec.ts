import { TestBed } from '@angular/core/testing';

import { HitosService } from './hitos.service';

describe('HitosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HitosService = TestBed.get(HitosService);
    expect(service).toBeTruthy();
  });
});
