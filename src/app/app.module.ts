import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { SideNavComponent } from './MyComponents/side-nav/side-nav.component';
import { ListTableComponent } from './MyComponents/list-table/list-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material table module import
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

// angular material input module import
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
// api calling module import
import { ApiTableComponent } from './MyComponents/api-table/api-table.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    ListTableComponent,
    ApiTableComponent,
   
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
