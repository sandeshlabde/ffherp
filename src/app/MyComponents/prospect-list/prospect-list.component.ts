import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
import{ProspectService}from 'src/app/services/prospect.service'
import { __param } from 'tslib';
 import {MatDialog} from '@angular/material/dialog';
import { EntityProductComponent } from '../entity-product/entity-product.component';
import { ShowEmailQuotComponent } from '../show-email-quot/show-email-quot.component';
import { EmailQuotationComponent } from '../email-quotation/email-quotation.component';
import { NoteComponent } from '../note/note.component';

export interface DialogData {
  EntityID:number,
  EntityName:string,
}
@Component({
  selector: 'app-prospect-list',
  templateUrl: './prospect-list.component.html',
  styleUrls: ['./prospect-list.component.css']
})

export class ProspectListComponent implements OnInit {
    
  
  dataSource:any;
  dataSource2: any;
  EntityName!: string;
 
  ViewDataSource:any;
  ViewDataSource2: any;
  actionData:any;
  actionData2: any;
  id: any;
  
  entityIdDetailData: any;
  entityIdDetailData2: any;
  
   
 // table colum row show function start here
 
 get isShowDDate(){
  return['salesorderlist'].includes(this.EntityName.toLowerCase())
} ; 
get isStatus(){
  return['lead','molist', 'invoice', 'prospect','polist','payable','Ticket','repair','work'].includes(this.EntityName.toLowerCase())
};
get isSourceName(){
  return[ 'prospect','lead'].includes(this.EntityName.toLowerCase())
};
get expDate(){
  return['lead','invoice','prospect','ticket','amc','repair','work','molist'].includes(this.EntityName.toLowerCase())
}

get isDeliveryDate(){
  return[ 'salesorderlist','polist','payable','milist'].includes(this.EntityName.toLowerCase())
}
get isBilledStatus(){
  return[ 'salesorderlist', 'polist', 'payment' ].includes(this.EntityName.toLowerCase())
}
get isDDeliveryStatus(){
  return[ 'payable' ].includes(this.EntityName.toLowerCase())
}
get isBStatus(){
  return[ 'milist' ].includes(this.EntityName.toLowerCase())
}
get isServiceType(){
  return['Ticket','repair','work','amc' ].includes(this.EntityName.toLowerCase())
}

  constructor( private listService: ProspectService,private root:ActivatedRoute , public dialog: MatDialog) {
    this.root.params.subscribe((param)=>{
     
      this.listService.getLeadList(param["EntityName"]).subscribe((data: any)=>{ 
        this.dataSource=data;
         
         this.dataSource2=JSON.parse(this.dataSource);
      }) ; 
      this.EntityName=param['EntityName']
 
    });
    
   
  };
 
  
// MODEL POP UP start here

 

openEntity(id:any) {
   
  const dialogRef = this.dialog.open(EntityProductComponent,{
    height: '450px',
    width: '1350px',
    data: {
      EntityID: id,
       EntityName: this.EntityName
    },
  });

  dialogRef.afterClosed().subscribe( );
}   
openEmailQuote(id:any) {
  // this.data=id;
 
  const dialogRef1 = this.dialog.open(ShowEmailQuotComponent,{
    height: '1000px',
    width: '1200px',
    data: {
      EntityID: id,
       EntityName: this.EntityName
    },
  });

  dialogRef1.afterClosed().subscribe();
}   
//  MODEL POP UP End here
openEmail(id:any){
  // this.data=id;
  const dialogRef2 = this.dialog.open(EmailQuotationComponent ,{
    
    data: {
      EntityID: id,
       EntityName: this.EntityName
    },
  });

  dialogRef2.afterClosed().subscribe();
}
openNotes(id:any){
  // this.data=id;
  const dialogRef3 = this.dialog.open(NoteComponent,{
   
    data: {
      EntityID: id,
       EntityName: this.EntityName
    },
  });

  dialogRef3.afterClosed().subscribe();
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

 
 

 
 