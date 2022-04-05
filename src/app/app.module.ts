import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProspectService } from '../app/services/prospect.service';
import { LoginComponent } from './Login/login/login.component';

import { DashBoardComponent } from './MyComponents/dash-board/dash-board.component';
import { CommanComponent } from './MyComponents/comman/comman.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './MyComponents/header/header.component';
import { SideNavComponent } from './MyComponents/side-nav/side-nav.component';
import { ListModule } from './MyComponents/listComponent/list.module';
import { ListDashboardComponent } from './MyComponents/list-dashboard/list-dashboard.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderintercepterInterceptor } from './shared/intercepter/loaderintercepter.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from 'src/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    CommanComponent,
    HeaderComponent,
    SideNavComponent,
    ListDashboardComponent,
    LoaderComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ListModule,
  ],

  providers: [
    ProspectService,
    AuthGuard,
    Title,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderintercepterInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
