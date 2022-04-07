import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Global } from 'src/app/shared/Global';
import { ProspectService } from 'src/app/services/prospect.service';
import { EditVoucharComponent } from './edit-vouchar/edit-vouchar.component';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css'],
})
export class ApprovalComponent implements OnInit {
  approvalData: any;
  Vouchar: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private listService: ProspectService,
    private global: Global,
    public dialog: MatDialog
  ) {
    console.log(data.installno, data.entityName, data.entityid, data.name);
    this.Vouchar = data.name;
    let params: any = {
      id: data.installno,
      entityName: data.entityName,
      entityId: data.entityid,
      dbname: this.global.LOGGED_IN_USER.DbName,
      encrypt: this.global.LOGGED_IN_USER.encryptPswd,
    };
    this.listService.showvoucharData(params).subscribe((data: any) => {
      this.approvalData = JSON.parse(data);
    });
  }
  editVouchar(value: any) {
    const dialogRef = this.dialog.open(EditVoucharComponent, {
      position: { left: 65 + '%', top: 5 + '%' },
      data: {
        value: value,
      },
    });

    dialogRef.afterClosed().subscribe();
  }
  ngOnInit(): void {}
}
