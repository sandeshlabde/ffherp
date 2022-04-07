import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProspectService } from '../app/services/prospect.service';

import { LoaderComponent } from './loader/loader.component';
import { LoaderintercepterInterceptor } from './shared/intercepter/loaderintercepter.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from 'src/guards/auth.guard';
import { LoginModule } from './Login/login.module';
import { CommanComponent } from './FFHerpComponents/comman/comman.component';
import { DashBoardComponent } from './FFHerpComponents/dash-board/dash-board.component';
import { HeaderComponent } from './FFHerpComponents/header/header.component';
import { ListDashboardComponent } from './FFHerpComponents/list-dashboard/list-dashboard.component';
import { ListModule } from './FFHerpComponents/listComponent/list.module';
import { SideNavComponent } from './FFHerpComponents/side-nav/side-nav.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
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
    LoginModule,
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
