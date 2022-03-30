import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { EntityProductComponent } from './viewEntity/entity-product.component';
import { NoteComponent } from './note/note.component';
import { EmailTraceComponent } from './email-trace/email-trace.component';
import { ShowEmailQuotComponent } from './show-email-quot/show-email-quot.component';
import { FilterSearchComponent } from './filter-search/filter-search.component';
import { ApprovalComponent } from './approval/approval.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateNewComponent } from './create-new/create-new.component';
import { AdditionalDetailsComponent } from './create-new/additional-details/additional-details.component';
import { DelivaryBillingAddressComponent } from './create-new/delivary-billing-address/delivary-billing-address.component';

import { EditVoucharComponent } from './edit-approvedlist/edit-vouchar/edit-vouchar.component';
import { EditListComponent } from './edit-approvedlist/edit-approvedlist';
import { DashListComponent } from '../dash-board/dash-list/dash-list.component';
import { ListComponent } from './list.component';

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
    CreateNewComponent,
    AdditionalDetailsComponent,
    DelivaryBillingAddressComponent,
    EditVoucharComponent,
    DashListComponent,
    ListComponent,
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
    CreateNewComponent,
    AdditionalDetailsComponent,
    DelivaryBillingAddressComponent,
    EditVoucharComponent,
    DashListComponent,
    ListComponent,
  ],
})
export class ListModule {}
