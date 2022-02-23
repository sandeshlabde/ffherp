import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './Login/login/login.component'; 
 
 
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
