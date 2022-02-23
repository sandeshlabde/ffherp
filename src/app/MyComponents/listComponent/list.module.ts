import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { EntityProductComponent } from './entity-product/entity-product.component';
import { NoteComponent } from './note/note.component';
import { EmailTraceComponent } from './email-trace/email-trace.component';
import { ShowEmailQuotComponent } from './show-email-quot/show-email-quot.component';
import { FilterSearchComponent } from './filter-search/filter-search.component';
import { ApprovalComponent } from './approval/approval.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ChatComponent,
    EntityProductComponent,
    NoteComponent,
    EmailTraceComponent,
    ShowEmailQuotComponent,
    FilterSearchComponent,
    ApprovalComponent,
    EditListComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    CommonModule,
    ChatComponent,
    EntityProductComponent,
    NoteComponent,
    EmailTraceComponent,
    ShowEmailQuotComponent,
    FilterSearchComponent,
    ApprovalComponent,
    EditListComponent,
  ],
})
export class ListModule {}
