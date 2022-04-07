import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Global } from 'src/app/shared/Global';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-edit-vouchar',
  templateUrl: './edit-vouchar.component.html',
  styleUrls: ['./edit-vouchar.component.css'],
})
export class EditVoucharComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private listService: ProspectService,
    private global: Global
  ) {
    console.log(data);
    let param = {
      Dbname: this.global.LOGGED_IN_USER.DbName,
      Password: this.global.LOGGED_IN_USER.encryptPswd,
      UserID: this.global.LOGGED_IN_USER.UserId,
      eApprovedByID: 'dc5254',
      eApprovedAmount: '500',
      eApprovedDate: '2022-03-17',
      eApprovedRemark: 'test by datta',
      eApprovedStatus: 'Approved',
      eSqID: '14192',
    };
    // this.listService.approvedVouchar(param).subscribe((data: any) => {});
  }

  ngOnInit(): void {}
}
