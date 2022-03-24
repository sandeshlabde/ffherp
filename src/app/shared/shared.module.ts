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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { TablePipe } from './pipe/table.pipe';
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
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [
    TablePipe,
    ActionComponent,
    NextActionComponent,
    CloseActionComponent,
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
    MatExpansionModule
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
    MatExpansionModule
  ],
})
export class SharedModule {}
