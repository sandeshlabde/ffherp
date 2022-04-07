import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Global } from 'src/app/shared/Global';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-entity-product',
  templateUrl: './entity-product.component.html',
  styleUrls: ['./entity-product.component.css'],
})
export class EntityProductComponent implements OnInit {
  entityIdDetailData: any;

  EntityName: any;
  ViewProductDetail: any;

  ViewActionDetail: any;

  viewNoteTable: boolean = false;

  viewProductTable: boolean = false;
  actionTable: boolean = false;
  EntityModule: any;
  Entityid: any;
  chatData: any;
  noteData: any;
  Entityflag: any;
  EntityNameTitle: any;
  entityData: any;

  constructor(
    private listService: ProspectService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private global: Global
  ) {
    this.Entityid = this.data.EntityID;
    this.EntityName = this.data.EntityName;
    this.EntityNameTitle = this.data.EntityNameTitle;

    if (this.EntityName === 'POList') {
      this.EntityModule = 'PO';
      this.Entityflag = 'PO';
    } else if (this.EntityName === 'SalesOrderLIst') {
      this.EntityModule = 'SO';
      this.Entityflag = 'SalesOrderLIst';
    } else if (this.EntityName === 'Prospect') {
      this.EntityModule = 'Prospect';
      this.Entityflag = 'Prospect';
    } else if (this.EntityName === 'Lead') {
      this.EntityModule = 'Lead';
      this.Entityflag = 'Lead';
    } else if (this.EntityName === 'Payable') {
      this.EntityModule = 'Payable';
      this.Entityflag = 'Payable';
    } else if (this.EntityName === 'MoList') {
      this.EntityModule = 'MO';
      this.Entityflag = 'MO';
    } else if (this.EntityName === 'MIList') {
      this.EntityModule = 'MI';
      this.Entityflag = 'MI';
    } else if (this.EntityName === 'Repair') {
      this.EntityModule = 'Repair';
      this.Entityflag = 'Repair';
    } else if (this.EntityName === 'Payment') {
      this.EntityModule = 'RCB';
      this.Entityflag = 'Receivable';
    } else if (this.EntityName === 'AMC') {
      this.EntityModule = 'AMC';
      this.Entityflag = 'AMC';
    } else if (this.EntityName === 'Work') {
      this.EntityModule = 'todolist';
      this.Entityflag = 'todolist';
    } else if (this.EntityName === 'Ticket') {
      this.EntityModule = 'Ticket';
      this.Entityflag = 'Ticket';
    }

    // entity Product EntityModule name set end here

    // entityid Details Section Start Here*******************************************************************************
    const param = {
      dbname: this.global.LOGGED_IN_USER.DbName,
      encrypt: this.global.LOGGED_IN_USER.encryptPswd,

      id: this.Entityid,
      flag: this.Entityflag,
      userid: this.global.LOGGED_IN_USER.UserId,
    };
    this.listService.getViewList(param).subscribe((data: any) => {
      this.entityIdDetailData = JSON.parse(data);
      this.entityData = this.entityIdDetailData[0];
    });
    // }

    // entityid Details Section End Here*************************************************************************
    let params = {
      EntityId: this.Entityid,
      pageID: this.EntityModule,
      Dbname: this.global.LOGGED_IN_USER.DbName,
      encrypt: this.global.LOGGED_IN_USER.encryptPswd,
      userid: this.global.LOGGED_IN_USER.UserId,
    };

    this.listService.showChat(params).subscribe((data: any) => {
      this.chatData = JSON.parse(data);
    });

    // entity ID product Details section start here
    this.listService
      .productDetails(
        this.Entityid,
        this.EntityModule,
        this.global.LOGGED_IN_USER.DbName
      )
      .subscribe((data: any) => {
        this.ViewProductDetail = JSON.parse(data);
      });
    // entity ID product Details section End here

    //  ****************************************************************************************************************
    // entity ID Action Details section start here

    this.listService
      .actionDetails(
        this.Entityid,
        this.EntityModule,
        this.global.LOGGED_IN_USER.DbName,
        this.global.LOGGED_IN_USER.encryptPswd
      )
      .subscribe((data: any) => {
        this.ViewActionDetail = JSON.parse(data);
      });

    // entity ID Action Details section End here
  }

  // product() {
  //   this.viewProductTable = !this.viewProductTable;
  //   this.actionTable = false;
  //   this.viewNoteTable = false;
  // }
  // action() {
  //   this.actionTable = !this.actionTable;
  //   this.viewProductTable = false;
  //   this.viewNoteTable = false;
  // }
  // noteTable() {
  //   this.viewProductTable = false;
  //   this.actionTable = false;
  //   this.viewNoteTable = !this.viewNoteTable;
  // }
  ngOnInit(): void {}
}
