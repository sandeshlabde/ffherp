import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Global } from 'Global';

import { ProspectService } from 'src/app/services/prospect.service';

export interface noteDataField {
  addedBy: string;
  ondate: number;
  note: string;
}
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  Entityid: any;

  noteData: any;

  EntityName: any;

  Description: any;
  description: string = '';

  constructor(
    private listService: ProspectService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private global: Global
  ) {
    this.Entityid = this.data.EntityID;
    this.EntityName = this.data.EntityName;

    this.listService
      .getNoteList(
        this.EntityName,
        this.Entityid,
        this.global.LOGGED_IN_USER.DbName,
        this.global.LOGGED_IN_USER.encryptPswd,
        this.global.LOGGED_IN_USER.Username
      )
      .subscribe((data: any) => {
        this.noteData = JSON.parse(data);
        console.log(this.noteData);
      });
  }

  // save note function call
  saveNote(Description: string) {
    this.Description = Description; //get input value

    this.listService
      .saveNoteList(
        this.EntityName,
        this.Entityid,
        this.Description,
        this.global.LOGGED_IN_USER.DbName,
        this.global.LOGGED_IN_USER.encryptPswd,
        this.global.LOGGED_IN_USER.Username
      )
      .subscribe((data: any) => {});
    this.listService
      .getNoteList(
        this.EntityName,
        this.Entityid,
        this.global.LOGGED_IN_USER.DbName,
        this.global.LOGGED_IN_USER.encryptPswd,
        this.global.LOGGED_IN_USER.Username
      )
      .subscribe((data: any) => {
        this.noteData = JSON.parse(data);
      });

    this.description = this.Description;
    this.description = ' ';
  }
  ngOnInit(): void {}
}
