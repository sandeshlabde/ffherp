import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Global } from 'Global';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  Entityid: any;
  EntityName: any;
  chatData: any;
  pageID: any;
  chat: any;
  keyword = 'name';
  prefixText: any;
  actorList: any;

  constructor(
    private listService: ProspectService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private global: Global
  ) {
    this.Entityid = this.data.EntityID;
    this.EntityName = this.data.EntityName;

    // entity Product EntityModule name set start here

    if (this.EntityName === 'POList') {
      this.pageID = 'PO';
    } else if (this.EntityName === 'SalesOrderLIst') {
      this.pageID = 'SO';
    } else if (this.EntityName === 'Prospect') {
      this.pageID = 'Prospect';
    } else if (this.EntityName === 'Lead') {
      this.pageID = 'L';
    } else if (this.EntityName === 'Payable') {
      this.pageID = 'Payable';
    } else if (this.EntityName === 'MoList') {
      this.pageID = 'MO';
    } else if (this.EntityName === 'MIList') {
      this.pageID = 'MI';
    } else if (this.EntityName === 'Repair') {
      this.pageID = 'Repair';
    } else if (this.EntityName === 'Payment') {
      this.pageID = 'Payment';
    } else if (this.EntityName === 'AMC') {
      this.pageID = 'AMC';
    } else if (this.EntityName === 'Work') {
      this.pageID = 'Work';
    } else if (this.EntityName === 'Ticket') {
      this.pageID = 'Ticket';
    } else if (this.EntityName === 'Voucher') {
      this.pageID = 'Voucher';
    }

    // entity Product EntityModule name set end here

    this.getChatData();
  }

  // showChat
  chatDataSubmit(data: any) {
    const param = {
      NoteId: '0',
      AddedUserinChat: data.AddedUserinChat,
      Dbname: this.global.LOGGED_IN_USER.DbName,
      EntityId: this.Entityid,
      Message: data.chatMessage,
      MsgTo: '',

      PageId: this.pageID,
      Password: this.global.LOGGED_IN_USER.encryptPswd,
      UserID: this.global.LOGGED_IN_USER.UserId,
      companyname: '',
    };
    this.listService.submitChat(param).subscribe((data: any) => {});

    this.getChatData();
  }

  selectEvent(item: any) {
    console.log(item);
  }
  getChatData() {
    let params = {
      EntityId: this.Entityid,
      pageID: this.pageID,
      Dbname: this.global.LOGGED_IN_USER.DbName,
      encrypt: this.global.LOGGED_IN_USER.encryptPswd,
      userid: this.global.LOGGED_IN_USER.UserId,
    };
    this.listService.showChat(params).subscribe((data: any) => {
      this.chat = JSON.parse(data);
      console.warn(data);
    });
  }
  onChangeSearch(val: string) {
    this.prefixText = val;
    // this.listService.actorList(this.prefixText).subscribe((data: any) => {
    //   this.actorList = data;
    // });
  }

  ngOnInit(): void {}
}
