import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './Login/login/login.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { Resolver } from './services/resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'page/:EntityName',
    component: HeaderComponent,
    resolve: { login: Resolver },
    canActivate: [AuthGuard],
  },
  // ,canActivate:[AuthGuard]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
