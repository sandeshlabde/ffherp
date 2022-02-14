import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './Login/login/login.component';
import { DashBoardComponent } from './MyComponents/dash-board/dash-board.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { ProspectListComponent } from './MyComponents/prospect-list/prospect-list.component';
import { ProspectService } from './services/prospect.service';
import { Resolver } from './services/resolver.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: () =>
      import('./MyComponents/admin/admin.module').then((m) => m.AdminModule),
    resolve: { login: Resolver },
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
