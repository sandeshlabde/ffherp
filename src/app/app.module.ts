import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { SideNavComponent } from './MyComponents/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material table module import
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
// angular material input module import
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AngularEditorModule } from '@kolkov/angular-editor';
// ngx pagination sorting searching

// http import modul
import { HttpClientModule } from '@angular/common/http';
import { ProspectService } from '../app/services/prospect.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components module import
import { ProspectListComponent } from './MyComponents/prospect-list/prospect-list.component';
import { EntityProductComponent } from './MyComponents/entity-product/entity-product.component';
import { ProductComponent } from './MyComponents/product/product.component';
import { NoteComponent } from './MyComponents/note/note.component';

import { ShowEmailQuotComponent } from './MyComponents/show-email-quot/show-email-quot.component';
import { EmailTraceComponent } from './MyComponents/email-trace/email-trace.component';
import { ChatComponent } from './MyComponents/chat/chat.component';
 ;
import { FilterSearchComponent } from './MyComponents/filter-search/filter-search.component';
import { LoginComponent } from './Login/login/login.component';
import { AuthGuard } from './auth.guard';
import { EditListComponent } from './MyComponents/edit-list/edit-list.component';
import { ApprovalComponent } from './MyComponents/approval/approval.component';
import { DashBoardComponent } from './MyComponents/dash-board/dash-board.component';
import { CommanComponent } from './MyComponents/comman/comman.component';
import { NgChartsModule } from 'ng2-charts';
import { AngularPivotTableModule } from 'angular-pivot-table';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TablePipe } from './MyComponents/prospect-list/pipe/table.pipe';

 
 
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
    FilterSearchComponent,
    LoginComponent,
    EditListComponent,
    ApprovalComponent,
    DashBoardComponent,
    CommanComponent,
    TablePipe,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    NgxExtendedPdfViewerModule,
    MatMenuModule,
    FormsModule,
    AngularEditorModule,
    ReactiveFormsModule,
    NgChartsModule,
    AngularPivotTableModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],

  providers: [ProspectService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
