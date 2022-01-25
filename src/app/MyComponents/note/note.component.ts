import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  noteData : any;
  noteData2: any;
  flag: any;
  id: any;
  Description: any;
  description:string="";

  constructor( private listService: ProspectService,private root:ActivatedRoute ) {
    this.root.params.subscribe((param)=>{
      this.listService.getNoteList(param["flag"], param["id"] ).subscribe((data: any)=>{ 
        this.noteData=data;
         this.noteData2 =JSON.parse(this.noteData);
      }) ; 
      
      this.flag =param['flag']
  this.id=param["id"]
    }); 
    
  };

  // save note function call
  saveNote(Description:string){
   this.Description=Description;//get input value
   
    this.listService.saveNoteList( this.flag , this.id,this.Description ).subscribe((data: any)=>{ 
      
    }) ; 
    this.listService.getNoteList( this.flag, this.id).subscribe((data: any)=>{ 
      this.noteData=data;
      
       this.noteData2 =JSON.parse(this.noteData);
    }) ; 
    
    this.description=this.Description;
    this.description=" "
     
  }
  ngOnInit(): void {
  }
}
