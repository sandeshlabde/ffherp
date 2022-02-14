import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { SideNavComponent } from './MyComponents/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material table module import
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
// angular material input module import
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import{AngularEditorModule} from '@kolkov/angular-editor'
// ngx pagination sorting searching
 
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
 
 
// http import modul
import { HttpClientModule } from '@angular/common/http';
import { ProspectService } from "../app/services/prospect.service";
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
 
// components module import
import { ProspectListComponent } from './MyComponents/prospect-list/prospect-list.component';
import { EntityProductComponent } from './MyComponents/entity-product/entity-product.component';
import { ProductComponent } from './MyComponents/product/product.component';
import { NoteComponent } from './MyComponents/note/note.component';

import { ShowEmailQuotComponent } from './MyComponents/show-email-quot/show-email-quot.component';
import { EmailTraceComponent } from './MyComponents/email-trace/email-trace.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ChatComponent } from './MyComponents/chat/chat.component';
 
import { SearchfilterPipe } from './searchfilter.pipe';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { FilterSearchComponent } from './MyComponents/filter-search/filter-search.component';
import{ LoginComponent} from './Login/login/login.component';
import {  AuthGuard } from './auth.guard';
import { EditListComponent } from './MyComponents/edit-list/edit-list.component';
import { ApprovalComponent } from './MyComponents/approval/approval.component';
import { DashBoardComponent } from './MyComponents/dash-board/dash-board.component';
import { CommanComponent } from './MyComponents/comman/comman.component';
import {NgChartsModule } from 'ng2-charts'  
import { AngularPivotTableModule } from 'angular-pivot-table';
 
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    ProspectListComponent,
    EntityProductComponent, 
    NoteComponent, 
    ShowEmailQuotComponent,
    ProductComponent,
    EmailTraceComponent,
    ChatComponent, 
    SearchfilterPipe,
     FilterSearchComponent,
      LoginComponent,
      EditListComponent,
      ApprovalComponent,
      DashBoardComponent,
      CommanComponent,
         




  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule, 
    MatDialogModule,
    MatButtonModule, 
    NgxExtendedPdfViewerModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    AngularEditorModule,
    AutocompleteLibModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    NgChartsModule, 
    AngularPivotTableModule,
 
  ],
   
  providers: [ProspectService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

}
