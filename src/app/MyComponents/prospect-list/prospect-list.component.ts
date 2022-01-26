import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 
import{ProspectService}from 'src/app/services/prospect.service'
import { __param } from 'tslib';
 import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { NoteComponent } from '../note/note.component';
import { EntityProductComponent } from '../entity-product/entity-product.component';
import { ShowEmailQuotComponent } from '../show-email-quot/show-email-quot.component';
 
@Component({
  selector: 'app-prospect-list',
  templateUrl: './prospect-list.component.html',
  styleUrls: ['./prospect-list.component.css']
})

export class ProspectListComponent implements OnInit {
   data="";
  
  dataSource:any;
  dataSource2: any;
  flag!: string;
 
  ViewDataSource:any;
  ViewDataSource2: any;
  actionData:any;
  actionData2: any;
  id: any;
  
   
 // table colum row show function start here
 
 get isShowDDate(){
  return['salesorderlist'].includes(this.flag.toLowerCase())
} ; 
get isStatus(){
  return['lead','molist', 'invoice', 'prospect','polist','payable','Ticket','repair','work'].includes(this.flag.toLowerCase())
};
get isSourceName(){
  return[ 'prospect','lead'].includes(this.flag.toLowerCase())
};
get expDate(){
  return['lead','invoice','prospect','ticket','amc','repair','work','molist'].includes(this.flag.toLowerCase())
}

get isDeliveryDate(){
  return[ 'salesorderlist','polist','payable','milist'].includes(this.flag.toLowerCase())
}
get isBilledStatus(){
  return[ 'salesorderlist', 'polist', 'payment' ].includes(this.flag.toLowerCase())
}
get isDDeliveryStatus(){
  return[ 'payable' ].includes(this.flag.toLowerCase())
}
get isBStatus(){
  return[ 'milist' ].includes(this.flag.toLowerCase())
}
get isServiceType(){
  return['Ticket','repair','work','amc' ].includes(this.flag.toLowerCase())
}

  constructor( private listService: ProspectService,private root:ActivatedRoute , public dialog: MatDialog) {
    this.root.params.subscribe((param)=>{
     
      this.listService.getLeadList(param["flag"]).subscribe((data: any)=>{ 
        this.dataSource=data;
         
         this.dataSource2=JSON.parse(this.dataSource);
      }) ; 
      this.flag=param['flag']
 
    });
    
   
  };
 
  
// MODEL POP UP start here

 

openEntity(id:any) {
  this.data=id;
  const dialogRef = this.dialog.open(EntityProductComponent,{
    height: '400px',
    width: '1200px',
  });

  dialogRef.afterClosed().subscribe( );
}   
openEmailQuote(id:any) {
  this.data=id;
  const dialogRef = this.dialog.open(ShowEmailQuotComponent,{
    height: '1000px',
    width: '1200px',
  });

  dialogRef.afterClosed().subscribe();
}   
//  MODEL POP UP End here
openEmail(id:any){
  this.data=id;
}
openNotes(id:any){
  this.data=id;
}

  

  ngOnInit(): void {
     
     
}
// pagination
p:number=1;
key:string='id';
reverse:boolean=false;
// sorting
sort(key: string){
  this.key=key;
  this.reverse=!this.reverse;
}
   
}

 
 

 
 