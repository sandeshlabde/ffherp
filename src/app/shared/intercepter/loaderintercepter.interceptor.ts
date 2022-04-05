import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProspectService } from 'src/app/services/prospect.service';
import { tap } from 'rxjs';

@Injectable()
export class LoaderintercepterInterceptor implements HttpInterceptor {
  constructor(private loaderService: ProspectService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        this.loaderService.loader.next(true);

        if (event.type == HttpEventType.Response) {
          if (event.status == 200) {
            this.loaderService.loader.next(false);
          } else if (event.status == 500) {
            this.loaderService.loader.next(false);
          }
        }
      })
    );
  }
}
