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
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  Entityid: any;

  noteData : any;
  noteData2: any;
  EntityName: any;
   
  Description: any;
  description:string="";

  constructor( private listService: ProspectService,    @Inject(MAT_DIALOG_DATA) public data:any ) {
    this.Entityid=this.data.EntityID,
    this.EntityName=this.data.EntityName
    
      this.listService.getNoteList( this.EntityName, this.Entityid ,Global.LOGGED_IN_USER.DbName,Global.LOGGED_IN_USER.encryptPswd,Global.LOGGED_IN_USER.Username).subscribe((data: any)=>{ 
        this.noteData=data;
        
         this.noteData2 =JSON.parse(this.noteData);
      }) ; 
      
     
    
    
  };

  // save note function call
  saveNote(Description:string){
   this.Description=Description;//get input value
   
    this.listService.saveNoteList( this.EntityName , this.Entityid,this.Description ,Global.LOGGED_IN_USER.DbName,Global.LOGGED_IN_USER.encryptPswd,Global.LOGGED_IN_USER.Username).subscribe((data: any)=>{ 
      
    }) ; 
    this.listService.getNoteList( this.EntityName,  this.Entityid, Global.LOGGED_IN_USER.DbName,Global.LOGGED_IN_USER.encryptPswd,Global.LOGGED_IN_USER.Username).subscribe((data: any)=>{ 
      this.noteData=data;
      
       this.noteData2 =JSON.parse(this.noteData);
    }) ; 
    
    this.description=this.Description;
    this.description=" "
     
  }
  ngOnInit(): void {
  }
}
