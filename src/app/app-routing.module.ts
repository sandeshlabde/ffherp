import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiTableComponent } from './MyComponents/api-table/api-table.component';
import { ListTableComponent } from './MyComponents/list-table/list-table.component';

const routes: Routes = [
   { path: '', component:ListTableComponent},
{ path: 'prospect', component:ApiTableComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
