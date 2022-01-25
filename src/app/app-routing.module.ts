 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
   
import { ProspectListComponent } from './MyComponents/prospect-list/prospect-list.component';
import { ShowEmailQuotComponent } from './MyComponents/show-email-quot/show-email-quot.component';
import { SideNavComponent } from './MyComponents/side-nav/side-nav.component';
 
 

const routes: Routes = [
   { path: '', component:SideNavComponent},
  {path:'page/:flag', component:ProspectListComponent},
  {path:'page/:flag/:id',component:ProspectListComponent},
  {path:':flag/:id',component:ShowEmailQuotComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
