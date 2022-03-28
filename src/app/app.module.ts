import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProspectService } from '../app/services/prospect.service';
import { LoginComponent } from './Login/login/login.component';
import { AuthGuard } from './auth.guard';
import { DashBoardComponent } from './MyComponents/dash-board/dash-board.component';
import { CommanComponent } from './MyComponents/comman/comman.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './MyComponents/header/header.component';
import { SideNavComponent } from './MyComponents/side-nav/side-nav.component';
import { ListComponent } from './MyComponents/listComponent/list.component';
import { ListModule } from './MyComponents/listComponent/list.module';
import { ListDashboardComponent } from './MyComponents/list-dashboard/list-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    DashBoardComponent,
    CommanComponent,
    HeaderComponent,
    SideNavComponent,
    ListDashboardComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ListModule,
  ],

  providers: [ProspectService, AuthGuard, Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
