import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { Resolver } from 'src/app/services/resolver.service';
import { CommanComponent } from '../comman/comman.component';
import { DashBoardComponent } from '../dash-board/dash-board.component';
import { ProspectListComponent } from '../prospect-list/prospect-list.component';

const routes: Routes = [
  {
    path: '',
    component: CommanComponent,
    children: [
      {
        path: 'page/:EntityName',
        component: ProspectListComponent,
        resolve: { login: Resolver },
        canActivate: [AuthGuard],
      },
      {
        path: 'Dashboard/:id',
        component: DashBoardComponent,
        resolve: { login: Resolver },
        canActivate: [AuthGuard],
      },
      {
        path: '',
        redirectTo: '/admin/Dashboard/Dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
