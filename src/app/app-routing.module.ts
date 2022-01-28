 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ProspectListComponent } from './MyComponents/prospect-list/prospect-list.component'; 
import { SideNavComponent } from './MyComponents/side-nav/side-nav.component';
 
 

const routes: Routes = [
   { path: '', component:SideNavComponent},
  {path:'page/:EntityName', component:ProspectListComponent},
 
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
