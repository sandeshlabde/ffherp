import { TestBed } from '@angular/core/testing';

import { LoaderintercepterInterceptor } from './loaderintercepter.interceptor';

describe('LoaderintercepterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoaderintercepterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoaderintercepterInterceptor = TestBed.inject(LoaderintercepterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
