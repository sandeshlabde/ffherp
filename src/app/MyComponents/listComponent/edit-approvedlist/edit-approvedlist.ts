import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Global } from 'Global';
import { ProspectService } from 'src/app/services/prospect.service';
import { EditVoucharComponent } from './edit-vouchar/edit-vouchar.component';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-approvedlist.html',
  styleUrls: ['./edit-approvedlist.css'],
})
export class EditListComponent implements OnInit {
  editData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private listService: ProspectService,
    private global: Global,
    public dialog: MatDialog
  ) {
    const id = data.installno;
    const entityName = data.entityName;
    const entityId = data.entityid;

    let params: any = {
      id,
      entityName,
      entityId,
      dbname: this.global.LOGGED_IN_USER.DbName,
      encrypt: this.global.LOGGED_IN_USER.encryptPswd,
    };
    this.listService.showvoucharData(params).subscribe((data: any) => {
      this.editData = JSON.parse(data);
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
