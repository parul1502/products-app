import { TestBed } from '@angular/core/testing';

import { ProductEditGuard } from './producteditguard';

describe('ProducteditguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductEditGuard = TestBed.get(ProductEditGuard);
    expect(service).toBeTruthy();
  });
});
