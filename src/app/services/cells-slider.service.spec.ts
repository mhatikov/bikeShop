import { TestBed } from '@angular/core/testing';

import { CellsSliderService } from './cells-slider.service';

describe('CellsSliderService', () => {
  let service: CellsSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CellsSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
