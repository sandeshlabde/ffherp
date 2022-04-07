import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderintercepterInterceptor } from '../shared/intercepter/loaderintercepter.interceptor';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, SharedModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderintercepterInterceptor,
      multi: true,
    },
  ],
})
export class LoginModule {}
