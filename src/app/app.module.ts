import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { SideNavComponent } from './MyComponents/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material table module import
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

import {MatDialogModule} from '@angular/material/dialog';
// angular material input module import
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
// ngx pagination sorting searching
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination'; 

// http import modul
import { HttpClientModule } from '@angular/common/http';
import {ProspectService } from "../app/services/prospect.service";
// components module import
import { ProspectListComponent } from './MyComponents/prospect-list/prospect-list.component';
import { EntityProductComponent } from './MyComponents/entity-product/entity-product.component';
import { ProductComponent } from './MyComponents/product/product.component';
import { ActionComponent } from './MyComponents/action/action.component';
import { NoteComponent } from './MyComponents/note/note.component';
import { EmailQuotationComponent } from './MyComponents/email-quotation/email-quotation.component';
import { ShowEmailQuotComponent } from './MyComponents/show-email-quot/show-email-quot.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent, 
    ProspectListComponent, EntityProductComponent, ProductComponent, ActionComponent, NoteComponent, EmailQuotationComponent, ShowEmailQuotComponent,
     
   
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
    NgxPaginationModule,
    MatDialogModule,
    MatButtonModule
  
  ],
  providers: [ProspectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
