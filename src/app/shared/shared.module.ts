import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { CommanFilter, FormFilter, TablePipe } from './pipe/pipe';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { ActionComponent } from './action/action.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CloseActionComponent } from './action/closeEntity-action/close-action.component';
import { NextActionComponent } from './action/nextSchedule-action/next-action.component';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { ActionScheduledComponent } from './action-scheduled/action-scheduled.component';
import { PivortReportComponent } from './pivort-report/pivort-report.component';
import { LoaderintercepterInterceptor } from './intercepter/loaderintercepter.interceptor';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    TablePipe,
    FormFilter,
    CommanFilter,
    ActionComponent,
    NextActionComponent,
    CloseActionComponent,
    ActionScheduledComponent,
    PivortReportComponent,
    AutocompleteComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    NgxExtendedPdfViewerModule,
    AngularEditorModule,
    MatInputModule,
    MatCheckboxModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    MatRadioModule,
    MatTabsModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatIconModule,
    DragDropModule,
    MatCardModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatExpansionModule,
    MatBadgeModule,
    MatGridListModule,
    MatToolbarModule,
  ],
  exports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    MatRadioModule,
    NgxExtendedPdfViewerModule,
    AngularEditorModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    TablePipe,
    ActionComponent,
    MatStepperModule,
    MatProgressSpinnerModule,
    NextActionComponent,
    CloseActionComponent,
    MatIconModule,
    DragDropModule,
    MatCardModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatExpansionModule,
    MatGridListModule,
    MatToolbarModule,
    MatBadgeModule,
    ActionScheduledComponent,
    PivortReportComponent,
    FormFilter,
    CommanFilter,
    AutocompleteComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderintercepterInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}
